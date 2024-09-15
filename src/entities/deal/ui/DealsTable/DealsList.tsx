"use client";

import { Deals } from "../../types";
import { DealCard } from "../DealCard";
import styles from "./DealsList.module.css";

type DealsListProps = { className?: string; deals: Deals };

export const DealsList: React.FC<DealsListProps> = ({ className, deals }) => {
    const sortedDeals = deals.toSorted((a, b) => a.created_at - b.created_at);

    return (
        <div className={`${styles.DealsList} ${className}`}>
            {sortedDeals.map((deal) => (
                <DealCard key={deal.id} data={deal} />
            ))}
        </div>
    );
};
