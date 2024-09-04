import { BudgetItemTypes } from '../../components/budget/budgetTypes';
import { NewCategoryTypes } from '../../components/budget/newCategory/newCategoryTypes';
import {
    isEmptyString,
    isValidYear,
    isWithinValidRange,
    isNotValidCategory,
    isNotValidType,
    isValidAmount,
    isValidFilterDates,
    isDuplicateCategory,
    isDuplicateBudgetItem,
    isValidDate
    } from './validationHelperFuncs';

export function validateYear (year: string | number): string {
    if(typeof year === "number") {
        year = `${year}`
    }
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

export function validateCategory (category: string, categories: NewCategoryTypes[]) {
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

export function validateType (type: string): string {
    if(isNotValidType(type) || isEmptyString(type)) {
        return 'Please enter a valid type!'
    };

    return 'Valid';
}

export function validateAmount (amount: string): string {
    if(isEmptyString(amount)) {
        return 'Please enter an amount!';
    } 

    if(isValidAmount(amount) === false) {
        return 'Please enter a valid amount!';
    }

    return 'Valid';
}

export function validateFilterDates (startDate: string, endDate: string): string {
    if(startDate && endDate) {
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        if(isValidFilterDates(startDateObj, endDateObj) === false) {
            return 'Start Date must come before End Date!'
        }
    }
    return 'Valid';
}

export function validateDate (date: string): string {
    if(isValidDate(date) === false) {
        return 'Please enter a date between 2000 and 2030!'
    }
    return 'Valid';
}

export function validateCategorySelect (category: string): string {
    if(isEmptyString(category) || isNotValidCategory(category)) {
        return 'Please choose a valid category!'
    }
    return 'Valid';
}

export function validateDuplicateBudgetItem (category: string, budget: BudgetItemTypes[]) {
    if(isDuplicateBudgetItem(category, budget)) {
        return 'This is a duplicate budget item!'
    }
    return 'Valid';
}


export function validateUsername (username: string): string {
    if(isEmptyString(username)) {
        return 'Please enter your username!'
    }
    return 'Valid';
}

export function validatePassword (password: string): string {
    if(isEmptyString(password)) {
        return 'Please enter your password!'
    }
    return 'Valid';
}

export function validatePasswordMatch (password1: string, password2: string): string {
    if(password1 !== password2) {
        return 'Passwords need to match!'
    }
    return 'Valid';
}