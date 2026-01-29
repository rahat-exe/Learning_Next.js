import { NextResponse } from "next/server";
import { users } from "../../getUsers/route";

export async function PATCH(request, {params}){
 try {
    const { id } = await params;
    const userId = parseInt(id)

    const userIndex = users.findIndex(u => u.id === userId)

    if(userIndex === -1){
        return NextResponse.json(
            { success: false, error:"User not found"},
            {status: 404}
        )
    }

    const body = await request.json();


    users[userIndex] = {
        id:userId,
        ...users[userIndex],
        ...body
    }

    return NextResponse.json({
        success:true,
        message:"User updated successfully",
        data:users[userIndex]
    })

 } catch (error) {
    return NextResponse.json({
        success: false,
        error:"Failed to update user"
    },{status:500})
 }
}