"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

const TodoItem = ({ todo }) => {
  return (
    <div>
      <Card>
        <CardContent>
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-2">
              <Checkbox />
              <p>{todo.title}</p>
                <Badge size='small'>{todo.Priority}</Badge>
            </div>
            <div>
                <Button className="text-red-500 bg-amber-50"><Trash/></Button>
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
