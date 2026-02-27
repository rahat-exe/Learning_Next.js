"use client"
import { authClient } from '@/lib/authClient'
import { useRouter } from 'next/navigation';
import React from 'react'
import { Button } from './ui/button';

const HomeView = () => {
    const {data:session} = authClient.useSession();
    const router = useRouter()

    if(!session){
        return(
            <p>Loading...</p>
        )
    }
  return (
    <div>
        <h1>HomeView</h1>
        <Button onClick={()=>authClient.signOut({
            fetchOptions:{
                onSuccess:()=>router.push("/login")
            }
        })}>Sign out</Button>
    </div>
  )
}

export default HomeView