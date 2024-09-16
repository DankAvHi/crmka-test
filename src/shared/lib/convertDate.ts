export const convertDateNumberToString = (date: number) =>
    new Date(+`${date}000`).toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
