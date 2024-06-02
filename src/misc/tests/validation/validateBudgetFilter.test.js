import { validateBudgetFilter } from "../../validation/validateBudgetFilter";

describe('validateBudgetFilter', () => {
    const validYears = [
        [{year: '2024'}, 'Valid'],
        [{year: '2000'}, 'Valid'],
        [{year: '2030'}, 'Valid']
    ]
    const invalidYears = [
        [{year: ''}, ['Please enter a year!']],
        [{year: '20x9'}, ['Please enter a four digit year!']],
        [{year: '1999'}, ['Please enter a year between 2000 and 2030!']],
        [{year: '2031'}, ['Please enter a year between 2000 and 2030!']]
    ]
    it.each(validYears)('Valid years return as valid', (string, result) => {
        expect(validateBudgetFilter(string)).toBe(result);
    })

    it.each(invalidYears)('Invalid years return as invalid', (string, result) => {
        expect(validateBudgetFilter(string)).toEqual(result);
    })
})