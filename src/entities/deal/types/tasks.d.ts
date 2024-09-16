import { Task } from "./task";

export type Tasks = Task[];

export type TasksResponse = {
    _embedded: {
        tasks: Tasks;
    };
};
