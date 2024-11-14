import { Task } from "../../payload-types";
import qs from "qs";

export const fetchTasks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_URL}/tasks`
    );
    const data: { docs: Task[] } = await response.json();
    return data.docs || null;
  } catch (error) {
    console.error("Unable to fetch tasks", error);
  }
};

export const fetchTasksTodo = async () => {
  try {
    const query = qs.stringify(
      {
        where: {
          status: {
            equals: "to-do",
          },
        },
      },
      { addQueryPrefix: true }
    );
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_URL}/tasks${query}`
    );
    const data: { docs: Task[] } = await response.json();
    console.log('todo', data.docs)
    return data.docs || null;
  } catch (error) {
    console.error("Unable to fetch tasks", error);
  }
};

export const fetchTasksInProgress = async () => {
  try {
    const query = qs.stringify(
      {
        where: {
          status: {
            equals: "in-progress",
          },
        },
      },
      { addQueryPrefix: true }
    );
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_URL}/tasks${query}`
    );
    const data: { docs: Task[] } = await response.json();
    return data.docs || null;
  } catch (error) {
    console.error("Unable to fetch tasks", error);
  }
};

export const fetchTasksCompleted= async () => {
  try {
    const query = qs.stringify(
      {
        status: {
          equals: "completed",
        },
      },
      { addQueryPrefix: true }
    );
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_URL}/tasks${query}`
    );
    const data: { docs: Task[] } = await response.json();
    return data.docs || null;
  } catch (error) {
    console.error("Unable to fetch tasks", error);
  }
};
