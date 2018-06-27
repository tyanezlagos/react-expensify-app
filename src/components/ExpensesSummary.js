import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const total = numeral(expensesTotal / 100).format('$0,00.00');
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'; 
    return  (
        <div>
            <p>Viewing {expenseCount} {expenseWord} totalling {total}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getTotalExpenses(visibleExpenses) 
    };
} 

export default connect(mapStateToProps)(ExpensesSummary);
