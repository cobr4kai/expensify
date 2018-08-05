import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem  from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with first expense', () => {
    const expense = expenses[0];
    const wrapper = shallow(<ExpenseListItem 
        id={expense.id}
        description={expense.description}
        amount={expense.amount}
        createdAt={expense.createdAt}
        />);
    expect(wrapper).toMatchSnapshot();
});