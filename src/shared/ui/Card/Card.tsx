import styles from "./Card.module.css";

type CardProps = {
    className?: string;
    children?: React.JSX.Element | React.JSX.Element[];
    onClick: React.MouseEventHandler<HTMLDivElement>;
};

export const Card: React.FC<CardProps> = ({ className, children, onClick }) => {
    return (
        <div onClick={onClick} className={`${styles.Card} ${className}`}>
            {children}
        </div>
    );
};
