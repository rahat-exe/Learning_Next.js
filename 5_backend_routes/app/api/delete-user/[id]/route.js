import { NextRequest, NextResponse } from "next/server";
import { users } from "../../getUsers/route";

export async function DELETE(request, {params}){
    try {
        const { id } = await params;
        const userId = parseInt(id)

        const deletedUserIndex = users.findIndex(u => u.id === userId)

        if(deletedUserIndex === -1){
            return NextResponse.json({
                success: false,
                message:"user don't exists"
            })
        }

        const deletedUser =users[deletedUserIndex]
        users.splice(deletedUserIndex, 1)

        return NextResponse.json({
            success:true,
            message:"User deleted successfully",
            data:deletedUser
        })
    } catch (error) {
       return NextResponse.json({
         success: false,
         message: "Delete operation unsuccessfull"
       }); 
    }
} 