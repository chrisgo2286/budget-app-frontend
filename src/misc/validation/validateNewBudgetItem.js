import { validateCategory, validateType, validateAmount } from "./validation";

export function validateNewBudgetItem (fields, categories) {
    let errors = [];
    const categoryResult = validateCategory(fields.category, categories);
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