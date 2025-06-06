"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagModel = exports.UserModel = exports.ContentModel = exports.LinkModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
// 1. ✅ Connect to MongoDB (you should ideally move this to a separate file)
mongoose_1.default.connect("");
// 2. ✅ Define the User schema
const UserSchema = new mongoose_1.Schema({
    username: { type: String, unique: true },
    password: String,
});
// 3. ✅ Define the Tag schema (MUST be defined if referenced, or imported if external)
// Dummy placeholder if you're planning to reference Tag
const TagSchema = new mongoose_1.Schema({
    name: String,
});
// 4. ✅ Define the Content schema
const ContentSchema = new mongoose_1.Schema({
    title: String,
    link: String,
    tags: [{ type: mongoose_1.default.Types.ObjectId, ref: "Tag" }],
    userId: { type: mongoose_1.default.Types.ObjectId, ref: "User", required: true },
});
// 5. ✅ Define the Link schema (you had a typo: `types` instead of `type`)
const LinkSchema = new mongoose_1.Schema({
    hash: String,
    link: String,
    userId: { type: mongoose_1.default.Types.ObjectId, ref: "User", required: true, unique: true },
});
// 6. ✅ Export models correctly (your model name and schema reference had issues)
exports.LinkModel = (0, mongoose_1.model)("Link", LinkSchema);
exports.ContentModel = (0, mongoose_1.model)("Content", ContentSchema);
exports.UserModel = (0, mongoose_1.model)("User", UserSchema);
exports.TagModel = (0, mongoose_1.model)("Tag", TagSchema); // Optional but needed for ref to work
