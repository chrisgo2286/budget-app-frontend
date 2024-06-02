import {
    findCategoryID,
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