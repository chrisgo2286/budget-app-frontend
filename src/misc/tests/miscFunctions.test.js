import {
    findCategoryID,
    categoryIsInCategories,
    compileBudgetCategoryNames,
    compileCategoryNames,
} from '../miscFunctions';

const categories = [
    {name: 'Grocery', id: 1}, 
    {name: 'Mortgage', id: 2}, 
    {name: 'Clothing', id: 3}
]

describe('findCategoryID', () => {
    const categoryNames = [
        ['Grocery', 1],
        ['', undefined],
        ['Entertainment', undefined]
    ]
    it.each(categoryNames)('Category names return correct id or null', (string, result) => {
        expect(findCategoryID(string, categories)).toBe(result);
    })
})

describe('categoryIsInCategories', () => {
    const categoryNames = [
        ['Grocery', true],
        ['', false],
        ['Entertainment', false]
    ]
    it.each(categoryNames)('Category names return correct bool', (string, result) => {
        expect(categoryIsInCategories(string, categories)).toBe(result);
    })
})

describe('compileBudgetCategoryNames', () => {
    const result = ['Grocery', 'Mortgage', 'Clothing', 'Delete']
    it('Func returns correct names for given categories plus Delete', () => {
        expect(compileBudgetCategoryNames(categories)).toEqual(result);
    })
})

describe('compileCategoryNames', () => {
    const result = ['Grocery', 'Mortgage', 'Clothing']
    it('Func returns crrect names for given categories', () => {
        expect(compileCategoryNames(categories)).toEqual(result);
    })
})
