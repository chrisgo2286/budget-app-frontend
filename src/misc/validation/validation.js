import {
    isEmptyString,
    isValidYear,
    isWithinValidRange,
    isNotValidCategory,
    isNotValidType,
    isValidAmount,
    isValidFilterDates    
    } from './validationHelperFuncs';

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

export function validateFilterDates (startDate, endDate) {
    if(startDate && endDate) {
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        if(isValidFilterDates(startDateObj, endDateObj) === 'false') {
            return 'Start Date must come before End Date!'
        }
    }
}