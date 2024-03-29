export function findCategoryID (category_name, categories) {
    for(let i=0;i < categories.length; i++) {
        if(categories[i].name === category_name) {
            return categories[i].id;
        }
    }
}