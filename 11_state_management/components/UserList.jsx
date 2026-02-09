"use client"
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

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
  if(isError) return <div>{error.message}</div>
  return (
    <div>
      {users.map((user) => (
        <Card className="p-5" key={user.id}>
          <CardHeader>
            <CardTitle>User ID: {user.id}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{user.name}</p>

            <p>{user.email}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserList

// Without tanstack query

/*
"use client"
import React, { useEffect, useState } from 'react'

const UserList = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const getData = async () => {
            try {
                const response = await fetch("/api/users")

                if (!response.ok) {
                    throw new Error("Failed to fetch users")
                }

                const data = await response.json()
                setUsers(data.data)

            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        getData()

    }, [])

    console.log(users)

    if (isLoading) return <p>Loading...</p>
    if (error) return <div>{error}</div>

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default UserList

*/