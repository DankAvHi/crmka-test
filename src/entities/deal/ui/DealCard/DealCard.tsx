import { Card } from "@/shared/ui";
import { Deal } from "../../types";
import styles from "./DealCard.module.css";

type DealCardProps = { data: Deal };

export const DealCard: React.FC<DealCardProps> = ({ data }) => {
    return (
        <Card className={styles.DealCard}>
            <p className={styles.name}>{data.name}</p>
        </Card>
    );
};
