
import { connectToDB } from "@/lib/mongodb";
import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  name:String, email:String, message:String, createdAt:{type:Date, default:Date.now}
});
const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);

export async function POST(req){
  try{
    const { name, email, message } = await req.json();
    if(!name || !email || !message) return new Response(JSON.stringify({error:"All fields are required."}),{status:400});
    await connectToDB();
    const doc = await Message.create({ name, email, message });
    return new Response(JSON.stringify({ ok:true, id: doc._id }), { status:201 });
  }catch(e){
    console.error(e);
    return new Response(JSON.stringify({error:"Server error"}),{status:500});
  }
}
