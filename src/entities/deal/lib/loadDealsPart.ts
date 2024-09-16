"use server";

import "server-only";
import { getDeals } from "../api/getDeals";
import { Deals } from "../types";

export async function loadDealsPart() {
    const deals: Deals = [];
    let isEnd = false;
    for (let i = 1; !isEnd; i++) {
        const dealsPartLoad = new Promise((resolve) => setTimeout(resolve, 3000)).then(async () => {
            return getDeals(i);
        });
        const dealsPart = await dealsPartLoad;
        if (dealsPart.length === 0) {
            isEnd = true;
        } else deals.push(...dealsPart);
    }

    return deals;
}
