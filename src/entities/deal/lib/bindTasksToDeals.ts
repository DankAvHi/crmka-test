import { Deal, Deals, Task, Tasks } from "../types";

export const bindTasksToDeals = (deals: Deals, tasks: Tasks) => {
    const bindedDeals: (Deal & { task?: Task })[] = [];
    deals.forEach((deal) => {
        tasks.forEach((task) => {
            if (task.entity_id === deal.id && task.complete_till === deal.closest_task_at) {
                bindedDeals.push({ ...deal, task });
            }
        });
    });
    deals.forEach((deal) => {
        const isInBinded = bindedDeals.findIndex((bindedDeal) => deal.id === bindedDeal.id);
        if (isInBinded === -1) bindedDeals.push(deal);
    });
    return bindedDeals;
};
