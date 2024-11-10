import { useContext, useState } from "react";
import { createLedgerItem } from "../../../../misc/apiCalls";
import Input from "../../../miscComponents/input/input";
import Select from "../../../miscComponents/select/select";
import { findCategoryID, compileCategoryNames } from "../../../../misc/miscFunctions";
import { CategoriesContext, LedgerContext } from "../../../../misc/context";
import { LedgerErrorsContext } from "../../../../misc/context";
import { validateLedgerItemFields } from "./ledgerItemValidation";

export type NewLedgerItemTypes = {
    owner?: number,
    date: string,
    category: string,
    amount: number | string
}

export default function NewLedgerItem (): JSX.Element {
    const { categories } = useContext(CategoriesContext)
    const { setLedgerUpdate } = useContext(LedgerContext)
    const [ fields, setFields ] = useState<NewLedgerItemTypes>({
        date: '',
        category: '',
        amount: 0
    })
    const [ inputType, setInputType ] = useState<string>('text');
    const { setErrors } = useContext(LedgerErrorsContext)

    async function handleSubmit (): Promise<void> {
        const category_id = findCategoryID(fields.category, categories);
        if (category_id) {
            const newAmount = (typeof fields.amount === "string") ? parseFloat(fields.amount) : fields.amount;
            const newFields = { 
                ...fields, 
                category: category_id.toString(),
                amount: newAmount
            }
            console.log(newFields)
            const result = validateLedgerItemFields(newFields)
            if (result === "Valid") {
                const response = await createLedgerItem(newFields);
                if (response.status === 201) {
                    setLedgerUpdate(true)
                    resetFields();
                } else {
                    setErrors(["There was an error adding this item!"])
                }
            } else {
                setErrors(result)
            }
        } else {
            setErrors(["There was an error adding this item!"])
        }
    }

    function resetFields (): void {
        const newFields = { ...fields, date: "", amount: 0 }
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