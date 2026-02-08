"use client"
import { useQuery } from '@tanstack/react-query'
import React from 'react'

async function getData(){
    const response = await fetch("/api/users")
    const data =await response.json()
    return data.data
}
const UserList = () => {
    const {data:users , isLoading, error, isError}= useQuery({
        queryKey:["users"],
        queryFn:getData
    })

    console.log(users)
  if(isLoading) return <p>Loading...</p>
  if(error) return <div>{error.message}</div>
  return (
    <div>
        {users.map((user)=>(
            <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        ))}
    </div>
  )
}

export default UserList