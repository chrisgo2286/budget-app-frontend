import { useState } from "react";
import { createLedgerItem } from "../../misc/apiCalls";
import Input from "../miscComponents/input/input";
import Select from "../miscComponents/select/select";
import { validateNewLedgerItem } from "../../misc/validation/validateNewLedgerItem";
import { findCategoryID, compileCategoryNames } from "../../misc/miscFunctions";
import { NewLedgerItemProps, NewLedgerItemTypes } from "./ledgerTypes";

export default function NewLedgerItem ({ 
    categories, 
    setUpdateRequired, 
    setErrors 
}: NewLedgerItemProps): JSX.Element {
    const [ fields, setFields ] = useState<NewLedgerItemTypes>({
        date: '',
        category: '',
        amount: ''
    })
    const [ inputType, setInputType ] = useState<string>('text');

    async function handleSubmit (): Promise<void> {
        const result = validateNewLedgerItem(fields);
        if(result === 'Valid') {
            const category_id = findCategoryID(fields.category, categories);
            if (category_id) {
                const newFields = { ...fields, 'category': category_id }
                await createLedgerItem(newFields);
                setUpdateRequired(true);
                resetFields();
            }
        } else if (typeof result !== "string") {
            setErrors(result);
        }
    }

    function resetFields (): void {
        setFields({
            date: '',
            category: '',
            amount: ''
        });
    }

    function handleFocus (): void {
        setInputType('date');
    }

    function handleBlur (): void {
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
                className="add-btn"
                data-cy="add-btn"
                onClick={ handleSubmit }>Add</button>
        </section>
    )
}