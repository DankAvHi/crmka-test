import { getDeals } from "../../api/getDeals";
import { Deals } from "../../types";
import { DealsList } from "./DealsList";

type DealsTableProps = { className?: string };

export const DealsTable: React.FC<DealsTableProps> = async ({ className }) => {
    const deals: Deals = await getDeals();

    return <DealsList deals={deals} className={className} />;
};
