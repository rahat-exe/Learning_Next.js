"use client"
import { useTodos } from '@/hooks/useCreateTodo'
import { Loader2 } from 'lucide-react'
import React from 'react'

const TodoList = () => {
    const {data:todos, isLoading, error, isError} = useTodos()

    if(isLoading){
        return (
            <div>
                <p>loading...</p>
            </div>
        )
    }
  return (
    <div>
        <p>Hello</p>
        <div className='text-gray-800'>{JSON.stringify(todos)}</div>
    </div>
  )
}

export default TodoList