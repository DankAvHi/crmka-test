import { DownArrowIcon } from "@/shared/assets";
import { convertDateNumberToString } from "@/shared/lib";
import { Card } from "@/shared/ui";
import { Deal, Task } from "../../types";
import styles from "./DealCard.module.css";
import { useDealCard } from "./useDealCard";

type DealCardProps = {
    data: Deal & { task?: Task };
    setOpenedCard: React.Dispatch<React.SetStateAction<number | null>>;
    openedCard: number | null;
};

export const DealCard: React.FC<DealCardProps> = ({ data, setOpenedCard, openedCard }) => {
    const { created_at, id, name, price, task } = data;

    const { status } = useDealCard({ complete_till: task ? task.complete_till : 0 });

    const created_atFormated = convertDateNumberToString(created_at);

    const dealCardOnclickHandler = () => {
        if (openedCard === null || openedCard !== id) {
            setOpenedCard(id);
        } else if (openedCard === id) {
            setOpenedCard(null);
        }
    };

    return (
        <Card className={styles.DealCard} onClick={dealCardOnclickHandler}>
            <div className={styles.title}>
                <div className={styles.titleInfo}>
                    <p className={`${styles.text} ${styles.name}`}>{name}</p>
                    <p className={styles.text}>{`ID: ${id}`}</p>
                    <p className={styles.text}>{`Бюджет: ${price}р.`}</p>
                </div>
                <DownArrowIcon width={18} height={32} />
            </div>
            <div className={`${styles.info} ${openedCard === id ? styles.info_opened : ""}`}>
                <p className={styles.text}>{`Сделка создана: ${created_atFormated}`}</p>
                <svg
                    className={styles.status}
                    fill={status === "failed" ? "red" : status === "today" ? "green" : "yellow"}
                    width={16}
                    height={16}
                >
                    <circle cx={8} cy={8} r={8} />
                </svg>
            </div>
        </Card>
    );
};
