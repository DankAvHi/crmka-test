import { DealsTable } from "@/entities/deal";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.Home}>
            <DealsTable />
        </main>
    );
}
