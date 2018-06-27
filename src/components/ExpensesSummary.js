import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    const count = props.expenses.length;
    const total = numeral(getTotalExpenses(props.expenses) / 100).format('$0,00.00');
    return  (
        <div>
            <p>{ `Viewing ${count} expenses totalling ${total}` }</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
} 

export default connect(mapStateToProps)(ExpensesSummary);
