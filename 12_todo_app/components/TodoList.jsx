"use client";
import { useTodos } from "@/hooks/useCreateTodo";
import { useTodoStore } from "@/store/todoStore";
import { Loader2 } from "lucide-react";
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data: todos, isLoading, error, isError } = useTodos();

//   const filteredTodos = useTodoStore((state) => state.filteredTodos());

    const {filteredTodos} =useTodoStore()

    const filtered = filteredTodos()


  if (isLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }
  return (
    <div>
      <div className="text-gray-800">
        {filtered.map((todo) => (
          <TodoItem key={todo._id} todo={todo}/>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
