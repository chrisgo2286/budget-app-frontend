export function findCategoryID (category_name, categories) {
    for(let i=0;i < categories.length; i++) {
        if(categories[i].name === category_name) {
            return categories[i].id;
        }
    }
}

export function categoryIsInCategories (category, categories) {
    for(let i=0;i < categories.length; i++) {
        if(category === categories[i].name) {
            return true;
        }
    }
    return false;
}

export function compileBudgetCategoryNames (categories) {
    let options = compileCategoryNames(categories);
    options.push('Delete');
    return options;
}

export function compileCategoryNames (categories) {
    let category_names = [];
    for(let i=0;i < categories.length; i++) {
        category_names.push(categories[i].name);
    }
    return category_names;
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
    return currentDate.getMonth();
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

