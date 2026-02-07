"use server";

import { connectDB } from "@/lib/db";
import Contact from "@/models/contact";
import { AwardIcon } from "lucide-react";
import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";

export async function sendMessage(formData) {
  try {
    await connectDB();
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: "Name, email, subject and message are all required",
      };
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return {
      success: true,
      message: "Message send successfully",
      contactId: contact._id.toString(),
    };
  } catch (error) {
    console.log("Error sending message", error);
    return {
      success: false,
      error: "Error sending message",
    };
  }
}

export async function getMessage() {
  try {
    await connectDB();
    const contants = await Contact.find({}).sort({ createdAt: -1 }).lean();

    return contants.map((contact) => ({
      ...contact,
      _id: contact._id.toString(),
      createdAt: contact.createdAt,
      updatedAt: contact.updatedAt,
    }));
  } catch (error) {
    console.error("Something went wrong", error);
    return [];
  }
}

export async function updateMessageStatus(contactId, status) {
  try {
    await connectDB();
    const update = await Contact.findByIdAndUpdate(
      contactId,
      {
        status: status,
      },
      { new: true },
      
    );
    //  revalidatePath("/contacts")
     revalidateTag("contact-stats")
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function getStats() {
  const getCacheStats = unstable_cache(
    async () => {
      await connectDB();
      const total = await Contact.countDocuments();
      const totalNew = await Contact.countDocuments({ status: "new" });
      const totalRead = await Contact.countDocuments({ status: "read" });
      const totalReplied = await Contact.countDocuments({ status: "replied" });

      return { total, totalNew, totalRead, totalReplied };
    },
    ["contact-stats"],
    { tags: ["contact-stats"] },
  );

  return getCacheStats()
  
}
