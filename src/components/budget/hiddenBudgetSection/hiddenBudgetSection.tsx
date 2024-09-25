import React, { useState } from "react"
import BudgetFilter from "../budgetFilter/budgetFilter"
import NewCategory from "../newCategory/newCategory"
import NewBudgetItem from "../newBudgetItem/newBudgetItem"
import ExpandIcon from "../../miscComponents/expandIcon/expandIcon"
import DeleteCategory from "../deleteCategory/deleteCategory"

export default function HiddenBudgetSection (): JSX.Element {
    const [ filtersVisible, setFiltersVisible ] = useState<boolean>(false);

    function handleExpandIconClick (): void {
        setFiltersVisible(!filtersVisible)
    }

    return (
        <React.Fragment>
            <ExpandIcon handleClick={ handleExpandIconClick }>
                { filtersVisible ? "expand_less" : "expand_more" }
            </ExpandIcon>
            <div className={ (!filtersVisible) ? "filter-container collapsed":"filter-container" }>
                <div className="filters-header">Filters</div>
                <BudgetFilter />
                <DeleteCategory />
                <div className="new-category-header">New Category</div>
                <NewCategory />
                <div className="new-budget-item-header">New Budget Item</div>
                <NewBudgetItem />
            </div>
        </React.Fragment>
    )
}