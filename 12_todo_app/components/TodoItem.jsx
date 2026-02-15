"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { useDeleteTodo, useToogleTodo } from "@/hooks/useCreateTodo";
import { toast } from "sonner";

const TodoItem = ({ todo }) => {
  const toggleMutation = useToogleTodo()
  const deleteMutation = useDeleteTodo()
  const handleToggle = async () => {
    try {
      const result = await toggleMutation.mutateAsync(todo._id)
      if(!result.success){
        toast.error("Error", result.error)
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  const deleteTodo = async () => {
    try {
      const res = await deleteMutation.mutateAsync(todo._id)
      if(res.success){
        toast.success("Todo deleted successfully")
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  return (
    <div>
      <Card>
        <CardContent>
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-2">
              <Checkbox
               checked={todo.completed}
               onCheckedChange={handleToggle}
              />
              <p>{todo.title}</p>
                <Badge size='small'>{todo.Priority}</Badge>
            </div>
            <div>
                <Button onClick={deleteTodo} className="text-red-500 bg-amber-50"><Trash/></Button>
            </div>
          </div>
          <div>
            <p>{todo.description}</p>
            <p>{todo.createdAt.toLocalTimeString}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoItem;
