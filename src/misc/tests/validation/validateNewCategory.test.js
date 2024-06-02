import { validateNewCategory } from "../../validation/validateNewCategory";

describe('ValidateNewCategory', () => {
    const categories = [
        {name: 'Grocery'}, 
        {name: 'Mortgage'}, 
        {name: 'Clothing'}
    ]
    const validFields = { 
        name: 'Entertainment',
        type: 'Expense'
    }
    const invalidFields1 = {
        name: '',
        type: 'Type'
    }
    const invalidFields2 = {
        name: 'Grocery',
        type: 'Expense'
    }
    const errors1 = [
        'Please enter a category!',
        'Please enter a valid type!'
    ]
    const errors2 = [
        'This is a duplicate category!'
    ]
    it('Valid fields return as valid', () => {
        expect(validateNewCategory(validFields, categories)).toBe('Valid');
    })
    it('Missing category and unchosen Type returns correct error msgs', () => {
        expect(validateNewCategory(invalidFields1, categories)).toEqual(errors1);
    })
    it('Duplicate category returns correct error msg', () => {
        expect(validateNewCategory(invalidFields2, categories)).toEqual(errors2);
    })
})