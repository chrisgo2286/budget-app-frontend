import { useContext, useState } from "react"
import { LedgerTypes } from "../../ledger/ledgerTypes";
import { CategoriesContext } from "../../../misc/context";
import { compileCategoryNames, findCategoryID } from "../../../misc/miscFunctions";

type ReclassLedgerItemProps = {
    item: LedgerTypes,
    handleAddToUpdates: (categoryId: string, itemId: string) => void
}

export default function ReclassLedgerItem ({ 
    item, 
    handleAddToUpdates 
}: ReclassLedgerItemProps):JSX.Element {
     
    const [ choice, setChoice ] = useState("Category")
    const { categories } = useContext(CategoriesContext)
    const categoryNames = compileCategoryNames(categories)
    
    function handleChange (event: React.ChangeEvent<HTMLSelectElement>): void {
        const newCategory = event.target.value
        setChoice(newCategory)
        const categoryId = findCategoryID(newCategory, categories)
        if (categoryId) {
            handleAddToUpdates(categoryId, item.id)
        }
    }

    function formatType (): string {
        return item.category__type.split("_")[0]
    }

    return (
        <div className="grid grid-cols-5 border border-gray-300 rounded-lg h-8">
            <div className="ml-2">{ item.date }</div>
            <div className="ml-2">{ item.category__name }</div>
            <div>{ formatType() }</div>
            <div className="ml-2">{ item.amount }</div>
            <select 
                value={ choice }
                name="category"
                onChange={ handleChange }
                data-cy="delete-category" >
                <option key="default" value="Category">Category</option>    
                { categoryNames.map((category, ndx) => (
                    <option key={ ndx } value={ category }>{ category }</option>
                ))}
            </select>
        </div>
    )
}