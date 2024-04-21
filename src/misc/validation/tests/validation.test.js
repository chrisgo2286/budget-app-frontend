import {
    validateYear,
    validateCategory,
    validateType,
    validateAmount,
    validateFilterDates,
    validateDate,
    validateCategorySelect
} from '../validation';

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
    const categories = [
        {name: 'Grocery'},
        {name: 'Mortgage'},
        {name: 'Entertainment'}
    ]
    const validCategories = [
        ['Salary', 'Valid'],
        ['Clothing', 'Valid']
    ]
    const invalidCategories = [
        ['', 'Please enter a category!'],
        ['Category', 'Please choose a valid category!'],
        ['Grocery', 'This is a duplicate category!']
    ]
    it.each(validCategories)('Valid categories return as valid', (string, result) => {
        expect(validateCategory(string, categories)).toBe(result);
    })

    it.each(invalidCategories)('Invalid categories return error statement', (string, result) => {
        expect(validateCategory(string, categories)).toBe(result);
    });
})

describe('validateType', () => {
    const validTypes = [
        ['Expense', 'Valid'],
        ['Income', 'Valid'],
    ]
    it.each(validTypes)('Valid types return as valid', (string, result) => {
        expect(validateType(string)).toBe(result);
    });

    it('Returns error msg if type is Type', () => {
        expect(validateType('Type')).toBe('Please enter a valid type!');
    });
})

describe('validateAmount', () => {
    const validAmounts = [
        ['1000', 'Valid'],
        ['100', 'Valid'],
        ['100.00', 'Valid'],
        ['100.0', 'Valid']
    ]
    const invalidAmounts = [
        ['abcd', 'Please enter a valid amount!'],
        ['100a', 'Please enter a valid amount!'],
        ['$100', 'Please enter a valid amount!'],
        ['1,000', 'Please enter a valid amount!'],
        ['100,00', 'Please enter a valid amount!'],
        ['', 'Please enter an amount!']
    ]
    it.each(validAmounts)('Valid amount returns as valid', (string, result) => {
        expect(validateAmount(string)).toBe(result);
    });

    it.each(invalidAmounts)('Invalid amount returns error msg', (string, result) => {
        expect(validateAmount(string)).toBe(result);
    });
})

describe('validateFilterDates', () => {
    const invalidFilterDates =  [
        [[new Date('4/30/2024'), new Date('4/1/2024')], false],
        [[new Date('4/1/2024'), new Date('4/1/2024')], false]
    ]
    it('Returns as valid if end date > start date', () => {
        expect(validateFilterDates(new Date('1/1/2024'), new Date('3/31/2024')))
        .toBe('Valid');
    });
    it.each(invalidFilterDates, (strings, result) => {
        expect(validateFilterDates())
    })
})

describe('validateDate', () => {
    const validDates = [
        [new Date('1/1/2024'), 'Valid'],
        [new Date('4/30/2024'), 'Valid']
    ]
    const invalidDates = [
        [new Date('1/1/1999'), 'Please enter a date between 2000 and 2030!'],
        [new Date('1/1/2031'), 'Please enter a date between 2000 and 2030!']
    ]
    it.each(validDates)('Valid dates return as valid', (date, result) => {
        expect(validateDate(date)).toBe(result);
    })

    it.each(invalidDates)('Invalid dates return error messages', (date, result) => {
        expect(validateDate(date)).toBe(result);
    })
})

describe('validateCategorySelect', () => {
    const validCategory = 'Grocery';
    const invalidCategory = 'Category';
    it('Valid category returns as valid', () => {
        expect(validateCategorySelect(validCategory)).toBe('Valid')
    })
    it('Invalid category returns error msg', () => {
        expect(validateCategorySelect(invalidCategory)).toBe('Please choose a valid category!');
    })
})