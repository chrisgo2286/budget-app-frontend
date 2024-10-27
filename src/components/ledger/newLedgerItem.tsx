import { useContext, useState } from "react";
import { createLedgerItem } from "../../misc/apiCalls";
import Input from "../miscComponents/input/input";
import Select from "../miscComponents/select/select";
import { findCategoryID, compileCategoryNames } from "../../misc/miscFunctions";
import { NewLedgerItemTypes } from "./ledgerTypes";
import { CategoriesContext, LedgerContext } from "../../misc/context";
import { LedgerErrorsContext } from "../../misc/context";
import { validateLedgerItemFields } from "./newLedgerItemValidation";

export default function NewLedgerItem (): JSX.Element {
    const { categories } = useContext(CategoriesContext)
    const { setLedgerUpdate } = useContext(LedgerContext)
    const [ fields, setFields ] = useState<NewLedgerItemTypes>({
        date: '',
        category: '',
        amount: ''
    })
    const [ inputType, setInputType ] = useState<string>('text');
    const { setErrors } = useContext(LedgerErrorsContext)

    async function handleSubmit (): Promise<void> {
        const result = validateLedgerItemFields(fields)
        if(result === 'Valid') {
            const category_id = findCategoryID(fields.category, categories);
            if (category_id) {
                const newFields = { ...fields, 'category': category_id }
                await createLedgerItem(newFields);
                setLedgerUpdate(true)
                resetFields();
            }
        } else if (typeof result !== "string") {
            setErrors(result);
        }
    }

    function resetFields (): void {
        const newFields = { ...fields, date: "", amount: "" }
        setFields(newFields);
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