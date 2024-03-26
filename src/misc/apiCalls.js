import axios from 'axios';

export async function getLedgerItems () {
    const result = await axios.get('http://127.0.0.1:8000/api/ledger_items/');
    return result.data;
}

export const ledgerData = [
    {
        id: 1,
        date: '3/1/2024',
        category: 'Salary',
        type: 'Income',
        amount: 2000.00
    },
    {
        id: 2,
        date: '3/15/2024',
        category: 'Mortgage',
        type: 'Expense',
        amount: 1500.00
    },
    {
        id: 3,
        date: '3/25/2024',
        category: 'Grocery',
        type: 'Expense',
        amount: 80.00
    },
    {
        id: 4,
        date: '3/30/2024',
        category: 'Insurance',
        type: 'Expense',
        amount: 100.00
    }
]

export const categoryData = [ 'Category', 'Salary', 'Mortgage', 'Grocery', 
    'Insurance' ]

export const budgetData = [
    {
        id: 1,
        category: 'Mortgage',
        budget_amount: 1500.00,
        actual_amount: 1500.00,
        percent: '100%'
    },
    {
        id: 2,
        category: 'Grocery',
        budget_amount: 400.00,
        actual_amount: 80.00,
        percent: '20%'
    },
    {
        id: 3,
        category: 'Insurance',
        budget_amount: 150.00,
        actual_amount: 100.00,
        percent: '67%'
    }
]