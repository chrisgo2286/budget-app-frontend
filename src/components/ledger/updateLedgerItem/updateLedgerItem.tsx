import { useState, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { compileCategoryNames, findCategoryID } from "../../../misc/miscFunctions";
import { CategoriesContext } from "../../../misc/context";
import Input from "../../miscComponents/input/input";
import Select from "../../miscComponents/select/select";
import Button from "../../miscComponents/button/button";
import Validation from "../../validation/validation";
import { patchLedgerItem } from "../../../misc/apiCalls";
import { validateLedgerItemFields } from "../hiddenLedgerSection/newLedgerItem/ledgerItemValidation";

export type UpdateLedgerItemTypes = {
    owner?: number,
    id: string,
    date?: string,
    category?: string,
    amount?: number
}

export default function UpdateLedgerItem (): JSX.Element {
    const navigate = useNavigate()
    const { ledgerItem } = useLocation().state
    const { categories } = useContext(CategoriesContext) 
    const [ fields, setFields ] = useState<UpdateLedgerItemTypes>({
        id: ledgerItem.id,
        date: ledgerItem.date,
        category: ledgerItem.category__name,
        amount: ledgerItem.amount
    })
    const [ errors, setErrors ] = useState<string[]>([])

    async function handleSubmit (): Promise<void> {
        const fields = cleanFields()
        const result = validateLedgerItemFields(fields)
        if (result === "Valid") {
            const response = await patchLedgerItem(fields)
            if (response.status === 200) {
                navigate("/ledger")
            } else {
                setErrors(["There was an error updating this item!"])
            }
        } else {
            setErrors(result)
        }

    }

    function cleanFields (): UpdateLedgerItemTypes {
        const categoryId = (fields.category) ? findCategoryID(fields.category, categories) : "";
        const newAmount = (typeof fields.amount === "string") ? parseFloat(fields.amount) : fields.amount;
        const newFields = { ...fields, category: categoryId?.toString(), amount: newAmount }
        return (categoryId) ? newFields : fields;
    }

    return (
        <main className="w-full h-screen bg-site-bg-color">
            <div className="flex bg-white flex-col items-center mx-auto w-96 h-96 border border-gray-200 rounded-xl shadow-custom">
                <div className="text-center mt-14 mb-8 text-2xl font-bold">Update Ledger Item</div>
                <Validation errors={ errors }/>
                <div className="flex flex-row w-3/4 mb-4 h-10 leading-10">
                    <LedgerLabel>Date</LedgerLabel>
                    <Input
                        className="pl-2 border border-gray-400 w-2/3 rounded-r-md text-center hover:cursor-pointer hover:bg-site-border-color"
                        type="date"
                        name='date'
                        value={ fields.date }
                        fields={ fields }
                        setFields={ setFields }
                        placeholder='Date' />
                </div>
                <div className="flex flex-row w-3/4 mb-4 h-10 leading-10">
                    <LedgerLabel>Category</LedgerLabel>
                    <Select 
                        className="pl-1 border border-gray-400 w-2/3 rounded-r-md text-center hover:cursor-pointer hover:bg-site-border-color"
                        name='category'
                        initial={ fields.category }
                        options={ compileCategoryNames(categories) }
                        fields={ fields }
                        setFields={ setFields }/>
                </div>
                <div className="flex flex-row w-3/4 mb-4 h-10 leading-10">
                    <LedgerLabel>Amount</LedgerLabel>
                    <Input
                        className="indent-2 border border-gray-400 w-2/3 rounded-r-md text-center hover:cursor-pointer hover:bg-site-border-color"
                        type='number'
                        name='amount'
                        value={ fields.amount }
                        fields={ fields }
                        setFields={ setFields } 
                        placeholder='Amount' />
                </div>
                <Button 
                    className="mb-8 h-8"
                    onClick={ handleSubmit }>
                    Submit
                </Button>
            </div>            
        </main>
    )
}

function LedgerLabel ({children}: { children: string}): JSX.Element {
    return (
        <label className="w-1/3 pr-2 border border-gray-400 text-right rounded-l-md bg-third-color">{ children }</label>
    )
}