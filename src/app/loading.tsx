import { SpinnerIcon } from "@/shared/assets";
import Image from "next/image";
import styles from "./loading.module.css";

export default function Loading() {
    return <Image className={styles.Loading} src={SpinnerIcon} alt="Загрузка..." />;
}
