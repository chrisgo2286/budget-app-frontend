import { useState } from "react";

export default function NewLedgerItem ({ categories }) {
    const [ fields, setFields ] = useState({
        date: '',
        category: '',
        type: '',
        amount: ''
    })
    
    return (
        <section>
            <input type='date' />
            <select>
                { categories.map((category) => (
                    <option value={ category }>{ category }</option>
                ))}
            </select>
            <select>
                <option value='Expense'>Expense</option>
                <option value='Income'>Income</option>
            </select>
            <input type='number' />
        </section>
    )
}