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
    options[4] = 'Delete';
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