import mongoose, { Schema, model } from "mongoose";

// 1. ✅ Connect to MongoDB (you should ideally move this to a separate file)
mongoose.connect("");

// 2. ✅ Define the User schema
const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

// 3. ✅ Define the Tag schema (MUST be defined if referenced, or imported if external)
// Dummy placeholder if you're planning to reference Tag
const TagSchema = new Schema({
  name: String,
});

// 4. ✅ Define the Content schema
const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

// 5. ✅ Define the Link schema (you had a typo: `types` instead of `type`)
const LinkSchema = new Schema({
  hash: String,
  link: String,
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true, unique: true },
});

// 6. ✅ Export models correctly (your model name and schema reference had issues)
export const LinkModel = model("Link", LinkSchema);
export const ContentModel = model("Content", ContentSchema);
export const UserModel = model("User", UserSchema);
export const TagModel = model("Tag", TagSchema); // Optional but needed for ref to work
