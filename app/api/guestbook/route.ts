import { connectDB } from "@/lib/db";
import Message from "@/lib/models/Message";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  await connectDB();
  const messages = await Message.find().sort({ createdAt: -1 });
  return Response.json(messages);
}

export async function POST(req: Request) {
  const body = await req.json();
  await connectDB();

  const newMessage = await Message.create(body);

  return Response.json(newMessage);
}

// ✅ DELETE (ONLY YOU CAN DELETE)
export async function DELETE(req: Request) {
  await connectDB();

  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  const ADMIN_EMAIL = "adarshsinghh13@gmail.com"; 

  if (session.user?.email !== "adarshsinghh13@gmail.com") {
    return Response.json({ error: "Not authorized" }, { status: 403 });
  }

  const { id } = await req.json();

  await Message.findByIdAndDelete(id);

  return Response.json({ success: true });
}