export function findCategoryID (category_name, categories) {
    for(let i=0;i < categories.length; i++) {
        if(categories[i].name === category_name) {
            return categories[i].id;
        }
    }
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