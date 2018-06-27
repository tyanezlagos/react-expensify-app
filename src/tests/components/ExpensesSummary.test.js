import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary correctly with single expense', () =>{
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with multiple expenses', () =>{
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0], expenses[1]]} />);
    expect(wrapper).toMatchSnapshot();
});