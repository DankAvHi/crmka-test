import { Tasks, TasksResponse } from "../types";

export const getTasks = async () => {
    const headers = new Headers();

    headers.append("Authorization", `Bearer ${process.env.API_KEY}`);
    headers.append("Origin", "https://localhost:5173");

    const response = await fetch(`https://thexcat86.amocrm.ru/api/v4/tasks`, {
        headers,
        mode: "no-cors",
    });

    if (!response.ok) {
        console.error(response);
        throw new Error("Failed to get tasks");
    }
    const data: TasksResponse = await response.json();

    const parsedData: Tasks = data._embedded.tasks;

    return parsedData;
};
