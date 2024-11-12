import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../../miscComponents/button/button";
import { CategoriesContext, BudgetErrorsContext } from "../../../misc/context";
import { compileCategoryNames, findCategoryID } from "../../../misc/miscFunctions";
import { navToConfirmDeleteCategory } from "../../../misc/navFunctions";
import { validateDeleteCategory } from "./deleteCategoryValidation";

export default function DeleteCategory (): JSX.Element {
    
    const navigate = useNavigate()
    const { categories } = useContext(CategoriesContext)
    const [ choice, setChoice ] = useState<string>("Category")
    let categoryNames = compileCategoryNames(categories)
    const { setErrors } = useContext(BudgetErrorsContext)

    async function handleNavToConfirmDeleteCategory () {
        const result = validateDeleteCategory(choice)
        if (result === "Valid") {
            const categoryId = findCategoryID(choice, categories)
            if (categoryId) {
                navToConfirmDeleteCategory(navigate, categoryId)    
            } else {
                setErrors(["There was a problem deleting this category!"])
            }
        } else {
            setErrors(result)
        }
    }

    function handleChange (event: React.ChangeEvent<HTMLSelectElement>): void {
        setChoice(event.target.value)
    }

    return (
        <div>
            <div>Delete Category</div>
            <div className="delete-category">
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
                <Button 
                    className="add-btn border border-gray-900 my-5"
                    dataCy="delete-btn"
                    onClick={ handleNavToConfirmDeleteCategory }>
                    Delete
                </Button>
            </div>
        </div>
    )
}