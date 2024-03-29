import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/'

export async function getLedgerItems () {
    const result = await axios.get(url + 'ledger/');
    return result.data;
}

export async function createLedgerItem (fields) {
    fields.owner = 1
    const result = await axios.post(url + 'ledger_items/', fields)
    return result.data;
}

export async function getCategories () {
    const result = await axios.get(url + 'categories/');
    return result.data;
}

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