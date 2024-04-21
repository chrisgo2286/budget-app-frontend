import { categoryIsInCategories } from "../miscFunctions";

export function isEmptyString(value) {
    return value === '';
}

export function isValidYear(year) {
    const regex = /^\d\d\d\d$/
    return regex.test(year);
}

export function isWithinValidRange(year) {
    const lowerBound = 2000;
    const upperBound = 2030;
    return parseInt(year) >= lowerBound && parseInt(year) <= upperBound; 
}

export function isNotValidCategory(category) {
    return category === 'Category';
}

export function isDuplicateCategory(category, categories) {
    return categoryIsInCategories(category, categories)
}

export function isNotValidType(type) {
    return type === 'Type';
}

export function isValidAmount(amount) {
    const regex = /^\d+(\.\d{1,2})?$/
    return regex.test(amount);
}

export function isValidFilterDates(startDateObj, endDateObj) {
    return endDateObj > startDateObj;
}

export function isValidDate(date) {
    const dateObj = new Date(date);
    const lowerBound = new Date('1/1/2000')
    const upperBound = new Date('12/31/2030')
    return dateObj >= lowerBound && dateObj <= upperBound;
}