import connectDb from "@/lib/db";
import note from "@/models/note";

import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDb();
    const notes = await note.find({}).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: notes,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 },
    );
  }
}

export async function POST(request) {
  try {
    await connectDb();
    const body = await request.json();
    const craetedNote = await note.create(body);

    return NextResponse.json(
      {
        succuss: true,
        data: craetedNote,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 },
    );
  }
}
