import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary correctly with single expense', () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={11012} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with multiple expenses', () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={154222} />);
    expect(wrapper).toMatchSnapshot();
});