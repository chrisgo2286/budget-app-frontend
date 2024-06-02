import { validateNewLedgerItem } from "../../validation/validateNewLedgerItem";

describe('validateNewBudgetItem', () => {
    const validFields = {
        date: '1/1/2024',
        category: 'Grocery',
        amount: '100.00'
    }
    const invalidFields = {
        date: '1/1/2031',
        category: 'Category',
        amount: '$100.00'
    }
    const errors = [
        'Please enter a date between 2000 and 2030!',
        'Please choose a valid category!',
        'Please enter a valid amount!'    
    ]

    it('Valid fields return as valid', () => {
        expect(validateNewLedgerItem(validFields)).toBe('Valid');
    })
    it('Invalid fields return error messages', () => {
        expect(validateNewLedgerItem(invalidFields)).toEqual(errors);
    })
})