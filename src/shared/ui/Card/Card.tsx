import styles from "./Card.module.css";

type CardProps = { className?: string; children?: React.JSX.Element };

export const Card: React.FC<CardProps> = ({ className, children }) => {
    return <div className={`${styles.Card} ${className}`}>{children}</div>;
};
