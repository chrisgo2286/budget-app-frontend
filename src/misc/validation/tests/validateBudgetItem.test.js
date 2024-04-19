import { validateBudgetItem } from "../validateBudgetItem";

describe('validateBudgetItem', () => {
    const validAmounts = [
        ['100', 'Valid'],
        ['100.00', 'Valid'],
    ]
    const invalidAmounts = [
        ['$100.00', ['Please enter a valid amount!']],
        ['', ['Please enter an amount!']],
        ['1,000.00', ['Please enter a valid amount!']],
        ['1A00', ['Please enter a valid amount!']]
    ]
    it.each(validAmounts)('Valid amounts return as valid', (string, result) => {
        expect(validateBudgetItem(string)).toBe(result);
    });
    it.each(invalidAmounts)('Invalid amounts return error messages', (string, result) => {
        expect(validateBudgetItem(string)).toEqual(result);
    });
})