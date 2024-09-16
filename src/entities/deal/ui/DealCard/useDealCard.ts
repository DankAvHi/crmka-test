type UseDealCardArgs = {
    complete_till: number;
};

export const useDealCard = ({ complete_till }: UseDealCardArgs) => {
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const taskDay = new Date(+`${complete_till}000`).getDate();
    const taskMonth = new Date(+`${complete_till}000`).getMonth() + 1;

    let status = "failed";

    status = currentMonth > taskMonth ? "failed" : "future";
    if (currentMonth === taskMonth) {
        if (taskDay === currentDay) {
            status = "today";
            return { status };
        }
        status = currentDay > taskDay ? "failed" : "future";
        return { status };
    }

    return { status };
};
