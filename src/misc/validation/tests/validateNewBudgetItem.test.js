import { validateNewBudgetItem } from "../validateNewBudgetItem";

describe('validateNewBudgetItem', () => {
    const validFields = {
        category: 'Clothing',
        amount: '100.00'
    }
    const invalidFields = {
        category: 'Grocery',
        amount: '$100.00'
    }
    const categories = [
        {name: 'Grocery'},
        {name: 'Mortgage'},
        {name: 'Entertainment'}
    ]
    const errors = [
        'This is a duplicate category!',
        'Please enter a valid amount!'
    ]
    it('Valid fields return as valid', () => {
        expect(validateNewBudgetItem(validFields, categories)).toBe('Valid');  
    })

    it('Invalid fields return correct errors', () => {
        expect(validateNewBudgetItem(invalidFields, categories)).toEqual(errors);
    })
})