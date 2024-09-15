import { Deal } from "./deal";

export type Deals = Deal[];

export type DealsResponse = {
    _embedded: {
        leads: Deals;
    };
};
