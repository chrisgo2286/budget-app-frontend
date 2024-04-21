import { 
    isEmptyString, 
    isValidYear, 
    isWithinValidRange, 
    isNotValidCategory, 
    isNotValidType, 
    isValidAmount, 
    isValidFilterDates,
    isDuplicateCategory,
    isValidDate 
    } from '../validationHelperFuncs';

describe('isEmptyString', () => {
    it('Returns true with empty string', () => {
        expect(isEmptyString('')).toBe(true);    
    })

    it('Returns false with non-empty string', () => {
        expect(isEmptyString('String')).toBe(false);
    });
})

describe('isValidYear', () => {
    const invalidYears = [
        ['A024', false],
        ['72.0', false],
        ['abcd', false],
        ['2,024', false],
        ['24', false]  
    ]
    
    it('Valid year returns true', () => {
        expect(isValidYear('2024')).toBe(true);
    });
    
    it.each(invalidYears)('Invalid years return false', (string, result) => {
        expect(isValidYear(string)).toBe(result);
    })
})

describe('isWithinValidRange', () => {
    const validYears = [
        ['2000', true],
        ['2030', true],
        ['2010', true],
        ['2020', true]
    ]
    const invalidYears = [
        ['1999', false],
        ['2031', false],
        ['1900', false],
        ['2100', false]
    ]

    it.each(validYears)('Valid years return true', (string, result) => {
        expect(isWithinValidRange(string)).toBe(result);
    })

    it.each(invalidYears)('Invalid years return false', (string, result) => {
        expect(isWithinValidRange(string)).toBe(result);
    })
})

describe('isNotValidCategory', () => {
    it('Invalid category returns true', () => {
        expect(isNotValidCategory('Category')).toBe(true);
    })

    it('Valid category returns false', () => {
        expect(isNotValidCategory('Salary')).toBe(false)
    })
})

describe('isDuplicateCategory', () => {
    const categories = [
        {name: 'Grocery'},
        {name: 'Mortgage'},
        {name: 'Entertainment'}
    ]

    it('Duplicate category returns true', () => {
        expect(isDuplicateCategory('Grocery', categories)).toBe(true);
    })

    it('Distinct category returns false', () => {
        expect(isDuplicateCategory('Clothing', categories)).toBe(false);
    })
})

describe('isNotValidType', () => {
    it('Invalid type return true', () => {
        expect(isNotValidType('Type')).toBe(true);
    })

    it('Valid type returns false', () => {
        expect(isNotValidType('Expense')).toBe(false);
    })
})

describe('isValidAmount', () => {
    const validAmounts = [
        ['100', true],
        ['1000', true],
        ['100.00', true],
        ['100.0', true]
    ]
    const invalidAmounts = [
        ['abcd', false],
        ['100a', false],
        ['$100', false],
        ['1,000', false],
        ['100,00', false]
    ]

    it.each(validAmounts)('Valid amounts return true', (string, result) => {
        expect(isValidAmount(string)).toBe(result);
    })

    it.each(invalidAmounts)('Invalid amounts return false', (string, result) => {
        expect(isValidAmount(string)).toBe(result);
    })
})

describe('isValidFilterDates', () => {
    const validStartDateObj = new Date('1/1/2024')
    const validEndDateObj = new Date('4/30/2024')
    const invalidFilterDates = [
        [[new Date('4/30/2024'), new Date('4/1/2024')], false],
        [[new Date('4/1/2024'), new Date('4/1/2024')], false]
    ]

    it('Valid dates return true', () => {
        expect(isValidFilterDates(validStartDateObj, validEndDateObj)).toBe(true);
    });

    it.each(invalidFilterDates)('Invalid dates return false', (dates, result) => {
        expect(isValidFilterDates(dates)).toBe(result);
    })
})

describe('isValidDate', () => {
    const validDates = [
        [new Date('1/1/2024'), true],
        [new Date('4/30/2024'), true]
    ]
    const invalidDates = [
        [new Date('1/1/1999'), false],
        [new Date('1/1/2031'), false]
    ]

    it.each(validDates)('Valid dates return true', (date, result) => {
        expect(isValidDate(date)).toBe(result);
    })

    it.each(invalidDates)('Invalid dates return false', (date, result) => {
        expect(isValidDate(date)).toBe(result);
    })
})