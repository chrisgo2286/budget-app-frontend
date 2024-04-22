import { validateLedgerFilter } from "../validateLedgerFilter";

describe('validateLedgerFilter', () => {
    const validFields = {
        startDate: '1/1/2024',
        endDate: '1/31/2024',
        category: 'Car',
        type: 'Expense'
    }
    const invalidFields = {
        startDate: '1/1/2024',
        endDate: '1/31/2023',
        category: 'Category',
        type: 'Type'
    }
    const errors = [
        'Start Date must come before End Date!',
        'Please choose a valid category!',
        'Please enter a valid type!'
    ]
    it('Valid fields return as valid', () => {
        expect(validateLedgerFilter(validFields)).toBe('Valid');
    })

    it('Invalid fields return error messages', () => {
        expect(validateLedgerFilter(invalidFields)).toEqual(errors);
    })
})