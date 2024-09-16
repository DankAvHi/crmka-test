import { Deals, DealsResponse } from "../types";

export const getDeals = async (page: number) => {
    const headers = new Headers();

    headers.append("Authorization", `Bearer ${process.env.API_KEY}`);
    headers.append("Origin", "https://localhost:5173");

    const response = await fetch(`https://thexcat86.amocrm.ru/api/v4/leads?limit=3&page=${page}`, {
        headers,
        mode: "no-cors",
    });

    if (!response.ok) {
        console.error(response);
        throw new Error("Failed to get deals");
    }

    try {
        const data: DealsResponse = await response.json();

        const parsedData: Deals = data._embedded.leads;

        return parsedData;
    } catch (err) {
        return [];
    }
};
