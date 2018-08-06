const selectExpensesTotal = (expenses) => {   
    let sum = 0;
    expenses.forEach((expense) => {
        sum += expense.amount;
    });
    return sum;
};

export default selectExpensesTotal;