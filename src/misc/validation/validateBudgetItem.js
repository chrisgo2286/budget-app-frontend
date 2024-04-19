import { validateAmount } from './validation';

export function validateBudgetItem (amount) {
    let errors = [];
    const amountResult = validateAmount(amount);
    errors.push(amountResult);
    return (amountResult === 'Valid') ? 'Valid': errors;
    
}