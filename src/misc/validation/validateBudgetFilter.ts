import { BudgetFilterTypes } from '../../components/budget/budgetTypes';
import { validateYear } from './validation';

export function validateBudgetFilter (fields: BudgetFilterTypes): string | string[] {
    let errors = [];
    const yearResult = validateYear(fields.year);
    errors.push(yearResult)
    return (yearResult === 'Valid') ? 'Valid': errors;
}