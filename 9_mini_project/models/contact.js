import mongoose from "mongoose";

const contactSehema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    subject: {
      type: String,
      required: true,
      maxlength: 200,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: [2000, "Message cannot exced 2000 word"],
    },
    status: {
      type: String,
      enum: ["new", "read", "replied"],
      default: "new",
    },
  },
  { timestamps: true },
);

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSehema)

export default Contact


/*
WHY WE WRITE THIS LINE:

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

✔ mongoose.models.Contact
Checks if the "Contact" model is already created.
Next.js reloads files often in development, and without this check
Mongoose will try to recreate the model and throw this error:

👉 "Cannot overwrite `Contact` model once compiled"

✔ mongoose.model("Contact", contactSchema)
If the model does NOT exist, create it using the schema.

✔ Why store it in `const Contact`?
So we can export and reuse the model anywhere:

import Contact from "@/models/Contact";

Then perform DB operations like:
Contact.find()
Contact.create()
Contact.deleteOne()

IMPORTANT RULES:

✅ Model name MUST match exactly:
mongoose.models.Contact
mongoose.model("Contact", schema)

Because model names are CASE SENSITIVE.

❌ Wrong:
mongoose.models.Contact || mongoose.model("contact", schema)

✅ Correct:
mongoose.models.Contact || mongoose.model("Contact", schema)

BEST PRACTICE:
Always use PascalCase for model names:

User
Contact
Order
Student

This prevents duplicate models, overwrite errors,
and unexpected collection creation.

MENTAL MODEL:
Variable name → for developers.
Model name string → for Mongoose registry.
*/
