import { BudgetItemTypes } from "../../components/budget/budgetTypes";
import { NewCategoryTypes } from "../../components/budget/newCategory/newCategoryTypes";
import { categoryIsInBudget, categoryIsInCategories } from "../miscFunctions";

export function isEmptyString(value: string): boolean {
    return value === '';
}

export function isValidYear(year: string): boolean {
    const regex = /^\d\d\d\d$/
    return regex.test(year);
}

export function isWithinValidRange(year: string): boolean {
    const lowerBound = 2000;
    const upperBound = 2030;
    return parseInt(year) >= lowerBound && parseInt(year) <= upperBound; 
}

export function isNotValidCategory(category: string): boolean {
    return category === 'Category';
}

export function isDuplicateCategory(category: string, categories: NewCategoryTypes[]) {
    return categoryIsInCategories(category, categories)
}

export function isDuplicateBudgetItem(category: string, budget: BudgetItemTypes[]) {
    return categoryIsInBudget(category, budget);
}

export function isNotValidType(type: string): boolean {
    return type === 'Type';
}

export function isValidAmount(amount: string): boolean {
    const regex = /^\d+(\.\d{1,2})?$/
    return regex.test(amount);
}

export function isValidFilterDates(startDateObj: Date, endDateObj: Date): boolean {
    return endDateObj > startDateObj;
}

export function isValidDate(date: string): boolean {
    const dateObj = new Date(date);
    const lowerBound = new Date('1/1/2000')
    const upperBound = new Date('12/31/2030')
    return dateObj >= lowerBound && dateObj <= upperBound;
}