import { DealsTable } from "@/entities/deal";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.Home}>
            <div className={styles.container}>
                <h1 className={styles.heading}>{`Список сделок`}</h1>
                <DealsTable />
            </div>
        </main>
    );
}
