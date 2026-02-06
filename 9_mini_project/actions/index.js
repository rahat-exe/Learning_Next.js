"use server";

import { connectDB } from "@/lib/db";
import Contact from "@/models/contact";

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

export async function getMessage(){
    try {
       await connectDB()
       const contants = await Contact.find({}).sort({createdAt:-1}).lean()

       return contants.map((contact)=>(
        {
          ...contact,
          _id: contact._id.toString(),
          createdAt:contact.createdAt,
          updatedAt: contact.updatedAt
        }
       ))
    } catch (error) {
        console.error("Something went wrong",error)
        return []
    }
}
