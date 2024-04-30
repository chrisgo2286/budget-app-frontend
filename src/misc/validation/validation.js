import {
    isEmptyString,
    isValidYear,
    isWithinValidRange,
    isNotValidCategory,
    isNotValidType,
    isValidAmount,
    isValidFilterDates,
    isDuplicateCategory,
    isValidDate
    } from './validationHelperFuncs';

export function validateYear (year) {
    if(isEmptyString(year)) {
        return 'Please enter a year!'
    }
    
    if(isValidYear(year) === false){
        return 'Please enter a four digit year!'    
    }
    
    if(isWithinValidRange(year) === false) {
        return 'Please enter a year between 2000 and 2030!';
    }

    return 'Valid';
}

export function validateCategory (category, categories) {
    if(isEmptyString(category)) {
        return 'Please enter a category!';
    }

    if(isNotValidCategory(category)) {
        return 'Please choose a valid category!'
    }

    if(isDuplicateCategory(category, categories)) {
        return 'This is a duplicate category!'
    }

    return 'Valid';
}

export function validateType (type) {
    if(isNotValidType(type) || isEmptyString(type)) {
        return 'Please enter a valid type!'
    };

    return 'Valid';
}

export function validateAmount (amount) {
    if(isEmptyString(amount)) {
        return 'Please enter an amount!';
    } 

    if(isValidAmount(amount) === false) {
        return 'Please enter a valid amount!';
    }

    return 'Valid';
}

export function validateFilterDates (startDate, endDate) {
    if(startDate && endDate) {
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        if(isValidFilterDates(startDateObj, endDateObj) === false) {
            return 'Start Date must come before End Date!'
        }
    }
    return 'Valid';
}

export function validateDate (date) {
    if(isValidDate(date) === false) {
        return 'Please enter a date between 2000 and 2030!'
    }
    return 'Valid';
}

export function validateCategorySelect (category) {
    if(isNotValidCategory(category)) {
        return 'Please choose a valid category!'
    }
    return 'Valid';
}

export function validateUsername (username) {
    if(isEmptyString(username)) {
        return 'Please enter your username!'
    }
    return 'Valid';
}

export function validatePassword (password) {
    if(isEmptyString(password)) {
        return 'Please enter your password!'
    }
    return 'Valid';
}

export function validatePasswordMatch (password1, password2) {
    if(password1 !== password2) {
        return 'Passwords need to match!'
    }
    return 'Valid';
}