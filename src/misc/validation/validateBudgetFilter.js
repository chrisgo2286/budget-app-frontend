import { validateYear } from './validation';

export function validateBudgetFilter (fields) {
    let errors = [];
    const yearResult = validateYear(fields.year);
    errors.push(yearResult)
    return (yearResult === 'Valid') ? 'Valid': errors;
}