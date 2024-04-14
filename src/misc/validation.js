export function validateYear (year) {
    if(isEmptyString(year)) {
        return 'Please enter a year!'
    }
    
    if(isValidYear(year) === 'false'){
        return 'Please enter a four digit year!'    
    }
    
    if(isWithinValidRange(year) === 'false') {
        return 'Please enter a year between 2000 and 2030!';
    }
}

export function validateCategory (category) {
    if(isEmptyString(category)) {
        return 'Please enter a category!';
    }

    if(isNotValidCategory(category)) {
        return 'Please choose a valid category!'
    }
}

export function validateType (type) {
    if(isNotValidType(type)) {
        return 'Please enter a valid type!'
    };
}

export function validateAmount (amount) {
    if(isEmptyString(amount)) {
        return 'Please enter an amount!';
    } 

    if(isValidAmount(amount) === 'false') {
        return 'Please enter a valid amount!';
    }
}

export function isValidFilterDates (startDate, endDate) {
    console.log(startDate)
}

export function isEmptyString(value) {
    return value === '';
}

function isValidYear(year) {
    const regex = /^\d\d\d\d$/
    return regex.test(year);
}

function isWithinValidRange(year) {
    const lower_bound = 2000;
    const upper_bound = 2030;
    return parseInt(year) >= lower_bound && parseInt(year) <= upper_bound; 
}

function isNotValidCategory(category) {
    return category === 'Category';
}

function isNotValidType(type) {
    return type === 'Type';
}

function isValidAmount(amount) {
    const regex = /^\d+(\.\d{1,2})?$/
    return regex.test(amount);
}