export function findCategoryID (categoryName, categories) {
    const category = categories.find((category) => category.name == categoryName)
    return category.id;
}

export function categoryIsInCategories (categoryName, categories) {
    const array = categories.filter((category) => category.name == categoryName)
    return array.length > 0;    
}

export function compileBudgetCategoryNames (categories) {
    let options = compileCategoryNames(categories);
    options.push('Delete');
    return options;
}

export function compileCategoryNames (categories) {
    return categories.map((category) => category.name)
}

export function refreshPage () {
    window.location.reload()
}

export const month_options = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'
]

export function getCurrentMonth () {
    const currentDate = new Date();
    return currentDate.getMonth() + 1;
}

export function getCurentYear () {
    const currentDate = new Date();
    return currentDate.getFullYear();
}

export function cleanFilters (filters) {
    if(month_options.includes(filters.month)) {
        return { ...filters, 'month': convertMonthToDigit(filters.month)};
    } else {
        return filters;
    }
}
export function convertMonthToDigit (month) {
    return month_options.indexOf(month) + 1;
}

