import React from "react";
import { Task } from "../../payload-types";
import { BarChart3, EllipsisVertical, ListCheck } from "lucide-react";
import { calculateDaysAgo } from "@/utils/formulas";

export default function TaskEntry({ task }: { task: Task }) {
  const days = task.start_date
    ? calculateDaysAgo(task.start_date as string)
    : 0;
  return (
    <div className="flex h-24 border rounded-lg p-4 items-center gap-4">
      <div className="flex items-center justify-center rounded-sm bg-slate-600 w-10 h-10">
        <ListCheck color="white" />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-xl">{task.name}</span>
        <span className="text-gray-400">{days ?? 0} days ago</span>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="cursor-pointer">
          <EllipsisVertical />
        </div>
      </div>
    </div>
  );
}
