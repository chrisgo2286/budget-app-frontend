import { validateCategorySelect, validateAmount } from "./validation";

export function validateNewBudgetItem (fields) {
    let errors = [];
    const categoryResult = validateCategorySelect(fields.category);
    const amountResult = validateAmount(fields.amount);

    if(categoryResult !== 'Valid') {
        errors.push(categoryResult);
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