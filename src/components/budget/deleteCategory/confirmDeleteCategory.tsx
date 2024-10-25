import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { useGetCategoryLedger } from "../../../misc/hooks"
import { deleteCategory, patchLedgerItem } from "../../../misc/apiCalls";
import { useContext } from "react";
import { BudgetErrorsContext, CategoriesContext } from "../../../misc/context";
import Button from "../../miscComponents/button/button";
import { refreshPage } from "../../../misc/miscFunctions";
import ReclassLedgerItem from "./reclassLedgerItem";

export type EditLedgerTypes = {
    owner?: number,
    id: string,
    category: string
}
export default function ConfirmDeleteCategory (): JSX.Element {

    const navigate = useNavigate()
    const { categoryId } = useLocation().state
    const { categories } = useContext(CategoriesContext)
    const { setErrors } = useContext(BudgetErrorsContext)    
    const [ updates, setUpdates ] = useState<EditLedgerTypes[]>([])
    const filters = {
        month: "",
        year: "",
        startDate: "",
        endDate: "",
        category: categoryId,
        type: ""
    }
    const { ledger } = useGetCategoryLedger(filters, categories)
    
    async function handleDeleteCategory () {
        const result = await deleteCategory(parseInt(categoryId))
        if (result.status === 204) {
            navigate("/budget")
            refreshPage()
            setErrors([])
        } else {
            setErrors(["There was a problem deleting this category!"])
        }
    }

    async function handleUpdateLedger (): Promise<void> {
        for (let i=0; i < updates.length; i++) {
            const result = patchLedgerItem(updates[i].id, updates[i].category)
        }
        refreshPage()
    }

    function handleAddToUpdates (categoryId: string, itemId: string): void {        
        setUpdates([...updates, {id: itemId, category: categoryId}])
    }

    return (
        <div className="mt-10 w-full">
            <div className="text-lg w-1/2 mx-auto text-center">Are you sure you wish to delete this category?</div> 
            <div className="text-lg w-1/2 mx-auto text-center mt-2">The following ledger items will be deleted...</div>
            <div className="w-1/2 mx-auto mt-5">
                <LedgerHeader />
                { ledger.map((item) => (
                    <ReclassLedgerItem 
                        key={ item.id }
                        item={ item } 
                        handleAddToUpdates={ (categoryId: string, itemId: string) => 
                            handleAddToUpdates(categoryId, itemId) } />
                ))}
            </div>
            <div className="flex flex-row my-5 justify-center">
                <Button 
                    className="add-btn border border-gray-900 mr-5"
                    onClick={ handleDeleteCategory }>
                    Delete
                </Button>
                <Button 
                    className="add-btn border border-gray-900 ml-5"
                    onClick={ handleUpdateLedger }>
                    Update
                </Button>
            </div>  
        </div>    
    )
}

function LedgerHeader () {
    return (
        <div className="grid grid-cols-5 bg-gray-200 border border-gray-300 rounded-lg h-8">
            <div className="ml-2">Date</div>
            <div>Category</div>
            <div>Type</div>
            <div>Amount</div>
            <div>New Category</div>
        </div>
    )
}