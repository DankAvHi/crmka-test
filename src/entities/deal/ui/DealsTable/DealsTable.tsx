import { getTasks } from "../../api/getTasks";
import { loadDealsPart } from "../../lib/loadDealsPart";
import { DealsList } from "./DealsList";

type DealsTableProps = { className?: string };

export const DealsTable: React.FC<DealsTableProps> = async ({ className }) => {
    const deals = await loadDealsPart();

    const tasks = await getTasks();

    return <DealsList deals={deals} tasks={tasks} className={className} />;
};
