import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`edit/${id}`}>
           <h3>{ description }</h3>
        </Link>
        <h3>{ amount } - { createdAt }</h3>
    </div>
);

export default ExpenseListItem;