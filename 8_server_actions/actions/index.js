"use server"

export async function createUser(data){
    const name = data.get("name");

    console.log("Name: ", name)
}