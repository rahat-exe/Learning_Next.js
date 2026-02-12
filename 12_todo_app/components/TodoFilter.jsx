"use client";
import { useCreateTodo } from "@/hooks/useCreateTodo";
import { useTodoStore } from "@/store/todoStore";
import React from "react";
import { Button } from "./ui/button";

const TodoFilter = () => {
  const { filter, setFilter, completedCount, activeCount } = useTodoStore();

  const filters = [
    { key: "all", label: "All", count: completedCount() + activeCount() },
    { key: "active", label: "Active", count: activeCount() },
    { key: "completed", label: "Completed", count: completedCount() },
  ];
  return (
    <div className="mt-5">
      {filters.map((filter) => (
        <Button
          key={filter.key}
          onClick={() => setFilter(filter.key)}
          className="w-1/3"
        >
          {filter.label}
          {" "}
          {filter.count}
          
        </Button>
      ))}
      <p className="text-gray-700">Active : {activeCount()}</p>
    </div>
  );
};

export default TodoFilter;
