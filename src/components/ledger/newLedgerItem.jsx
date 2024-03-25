import { useState } from "react";

export default function NewLedgerItem ({ categories }) {
    const [ fields, setFields ] = useState({
        date: '',
        category: '',
        type: '',
        amount: ''
    })
    
    return (
        <section className='new-ledger-item'>
            <input type='date' />
            <select>
                { categories.map((category) => (
                    <option value={ category }>{ category }</option>
                ))}
            </select>
            <select>
                <option value='Type'>Type</option>
                <option value='Expense'>Expense</option>
                <option value='Income'>Income</option>
            </select>
            <input 
                className='new-amount' 
                type='number' 
                placeholder='Amount' />
            <button className='add-btn'>Add</button>
        </section>
    )
}