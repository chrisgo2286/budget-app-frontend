import { NewCategoryTypes } from "../../components/budget/newCategory/newCategoryTypes";
import { validateCategory, validateType } from "./validation";

export function validateNewCategory (
    fields: NewCategoryTypes, 
    categories: NewCategoryTypes[]
): string | string[] {
    let errors = [];
    const categoryResult = validateCategory(fields.name, categories);
    const typeResult = validateType(fields.type);
    
    if(categoryResult !== 'Valid') {
        errors.push(categoryResult);
    }

    if(typeResult !== 'Valid') {
        errors.push(typeResult);
    }

    if(errors.length > 0) {
        return errors;
    } else {
        return 'Valid';
    }

}