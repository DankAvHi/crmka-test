"use client";

import { useState } from "react";
import { bindTasksToDeals } from "../../lib";
import { Deals, Tasks } from "../../types";
import { DealCard } from "../DealCard";
import styles from "./DealsList.module.css";

type DealsListProps = { className?: string; deals: Deals; tasks: Tasks };

export const DealsList: React.FC<DealsListProps> = ({ className, deals, tasks }) => {
    const [openedCard, setOpenedCard] = useState<number | null>(null);

    const bindedDeals = bindTasksToDeals(deals, tasks);
    const sortedDeals = bindedDeals.toSorted((a, b) => a.created_at - b.created_at);

    return (
        <div className={`${styles.DealsList} ${className}`}>
            {sortedDeals.map((deal) => (
                <DealCard key={deal.id} data={deal} openedCard={openedCard} setOpenedCard={setOpenedCard} />
            ))}
        </div>
    );
};
