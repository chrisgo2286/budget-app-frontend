import { validateAmount } from './validation';

export function validateBudgetItem (amount: string): string | string[] {
    let errors = [];
    const amountResult = validateAmount(amount);
    errors.push(amountResult);
    return (amountResult === 'Valid') ? 'Valid': errors;
    
}