// Get total amounts of expenses

export default (expenses) => {
    const amounts = expenses.map((expense) => {
        return expense.amount
    });
    return amounts.reduce(
        (previous, current) =>  previous + current,
        0
    );
};
