import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`edit/${id}`}>
           <h3>{ description }</h3>
        </Link>
        <h3>
            { numeral(amount / 100).format('$0,0.00') } 
            - 
            { moment(createdAt).format('MMMM Do, YYYY') }
        </h3>
    </div>
);

export default ExpenseListItem;