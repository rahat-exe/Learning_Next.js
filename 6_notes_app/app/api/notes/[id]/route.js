import connectDb from "@/lib/db";
import note from '@/models/note'
import { NextResponse } from "next/server";

export async function DELETE(request,{params}) {
    try {
        const {id} = await params;
        await connectDb();
        const deleteNote = await note.findByIdAndDelete(id);

        if(!deleteNote){
            return NextResponse.json(
                {success: false, error:"Note not found"},
                {status: 404}
            )
        }

        return NextResponse.json({success:true, data:{}})
    } catch (error) {
       return NextResponse.json({
        success: false, error: error.message
       }, {status: 400}) 
    }
}

export async function PUT(request, {params}){
    try {
        const {id} = await params;
        const body = await request.json()
         await connectDb();

         const updateNote =await note.findByIdAndUpdate(
            id,
            {...body, updatedAt:new Date()},
            {new:true, runValidators:true}
         )

         if(!updateNote){
            return NextResponse.json({
                success:false, error:"Note not found"
            },{status:404})
         }

         return NextResponse.json({
            success:true, data:updateNote
         })
    } catch (error) {
        return NextResponse.json({
            status:false, error:error.message
        },{status:400})
    }
}