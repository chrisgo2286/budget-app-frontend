import { useState } from "react";
import { createLedgerItem } from "../../misc/apiCalls";
import Input from "../miscComponents/input/input";
import Select from "../miscComponents/select/select";
import { validateNewLedgerItem } from "../../misc/validation/validateNewLedgerItem";
import { findCategoryID, compileCategoryNames, refreshPage } from "../../misc/miscFunctions";

export default function NewLedgerItem ({ categories, setUpdateRequired, setErrors }) {
    const [ fields, setFields ] = useState({
        date: '',
        category: '',
        amount: ''
    })
    const [ inputType, setInputType ] = useState('text');

    async function handleSubmit () {
        const result = validateNewLedgerItem(fields);
        if(result === 'Valid') {
            const category_id = findCategoryID(fields.category, categories);
            const newFields = { ...fields, 'category': category_id }
            await createLedgerItem(newFields);
            setUpdateRequired(true);
            resetFields();
        } else {
            setErrors(result);
        }
    }

    function resetFields () {
        setFields({
            date: '',
            category: '',
            amount: ''
        });
    }

    function handleFocus () {
        setInputType('date');
    }

    function handleBlur () {
        setInputType('text');
    }

    return (
        <section className='new-ledger-item'>
            <Input
                className='new-date'
                type={ inputType }
                name='date'
                value={ fields.date }
                fields={ fields }
                setFields={ setFields }
                onFocus={ handleFocus }
                onBlur={ handleBlur }
                placeholder='Date' />
            <Select 
                className='new-category'
                name='category'
                initial='Category'
                options={ compileCategoryNames(categories) }
                fields={ fields }
                setFields={ setFields }/>
            <Input
                className='new-amount'
                type='number'
                name='amount'
                value={ fields.amount }
                fields={ fields }
                setFields={ setFields } 
                placeholder='Amount' />
            <button 
                className='add-btn'
                onClick={ handleSubmit }>Add</button>
        </section>
    )
}