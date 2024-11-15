"use client";
import React, { useEffect, useState } from "react";
import { Task } from "../../../payload-types";
import { fetchTasksInProgress } from "@/services/tasks";

export default function Todo() {
  const [todos, setTodos] = useState<Task[] | null>(null);
  useEffect(() => {
    const getTodos = async () => {
      const res = await fetchTasksInProgress();
      setTodos(res ?? null);
    };
    getTodos();
  }, []);
  return (
    <div>
      {todos?.map((todo: Task) => {
        const { name, id } = todo;
        return <div key={id}>{name}</div>;
      })}
    </div>
  );
}
