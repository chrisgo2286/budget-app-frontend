import { BudgetItemTypes } from "../../components/budget/budgetTypes";
import { NewBudgetItemTypes } from "../../components/budget/newBudgetItem/newBudgetItemTypes";
import { 
    validateCategorySelect, 
    validateAmount, 
    validateDuplicateBudgetItem 
    } from "./validation";

export function validateNewBudgetItem (
    fields: NewBudgetItemTypes, 
    budget: BudgetItemTypes[]
): string | string[] {
    let errors = [];
    console.log(fields, budget)
    const categoryResult = validateCategorySelect(fields.category);
    const budgetResult = validateDuplicateBudgetItem(fields.category, budget);
    const amountResult = validateAmount(fields.amount);

    if(categoryResult !== 'Valid') {
        errors.push(categoryResult);
    }

    if(budgetResult !== 'Valid') {
        errors.push(budgetResult);
    }

    if(amountResult !== 'Valid') {
        errors.push(amountResult);
    }

    if(errors.length > 0) {
        return errors;
    } else {
        return 'Valid';
    }
}