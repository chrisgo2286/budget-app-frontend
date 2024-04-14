export function isEmptyString(value) {
    return value === '';
}

export function isValidYear(year) {
    const regex = /^\d\d\d\d$/
    return regex.test(year);
}

export function isWithinValidRange(year) {
    const lower_bound = 2000;
    const upper_bound = 2030;
    return parseInt(year) >= lower_bound && parseInt(year) <= upper_bound; 
}

export function isNotValidCategory(category) {
    return category === 'Category';
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