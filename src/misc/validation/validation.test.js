import {
    validateYear,
    validateCategory,
    validateType,
    validateAmount,
    validateFilterDates
} from './validation';

describe('validateYear', () => {
    const validYears = [
        ['2000', 'Valid'],
        ['2030', 'Valid'],
        ['2024', 'Valid']
    ]
    const invalidYears = [
        ['1999', 'Please enter a year between 2000 and 2030!'],
        ['2031', 'Please enter a year between 2000 and 2030!'],
        ['200', 'Please enter a four digit year!'],
        ['ABCD', 'Please enter a four digit year!'],
        ['', 'Please enter a year!'],
        ['123$', 'Please enter a four digit year!'],
    ]

    it.each(validYears)('Valid years return as valid', (string, result) => {
        expect(validateYear(string)).toBe(result);
    })

    it.each(invalidYears)('Invalid years return error statement', (string, result) => {
        expect(validateYear(string)).toBe(result);
    })
})

describe('validateCategory', () => {
    const validCategories = [
        ['']
    ]
})