import { BudgetFilterTypes, BudgetItemTypes } from "../components/budget/budgetTypes";
import { NewCategoryTypes } from "../components/budget/newCategory/newCategory";
import { PeriodTypes } from "../components/reports/reportTypes";

export const MONTH_OPTIONS = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'
]

export function findCategoryID (categoryName: string, categories: NewCategoryTypes[]): string | undefined{
    const category = categories.find((category) => category.name == categoryName)
    return category?.id
}

export function categoryIsInCategories (categoryName: string, categories: NewCategoryTypes[]): boolean {
    const array = categories.filter((category) => category.name == categoryName)
    return array.length > 0;    
}

export function compileBudgetCategoryNames (categories: NewCategoryTypes[]): string[] {
    let options = compileCategoryNames(categories);
    options.push('Delete');
    return options;
}

export function compileCategoryNames (categories: NewCategoryTypes[]): string[] {
    return categories.map((category) => category.name)
}

export function categoryIsInBudget (categoryName: string, budget: BudgetItemTypes[]): boolean {
    const array = budget.filter((item) => item.category === categoryName);
    return array.length > 0;
}

export function refreshPage (): void {
    window.location.reload()
}

export function getCurrentPeriod (): PeriodTypes {
    return { month: getCurrentMonth(), year: getCurrentYear() }
}

export function getCurrentMonth (): number {
    const currentDate = new Date();
    return currentDate.getMonth() + 1;
}

export function getCurrentYear (): number {
    const currentDate = new Date();
    return currentDate.getFullYear();
}

export function getLastDay (): Date {
    const currentDate = new Date();
    const lastDateObj = new Date(getCurrentYear(), getCurrentMonth() + 1, 0)
    return lastDateObj

}

export function cleanFilters (filters: BudgetFilterTypes): BudgetFilterTypes {
    if(typeof filters.month === "string" && MONTH_OPTIONS.includes(filters.month)) {
        return { ...filters, 'month': convertMonthToDigit(filters.month)};
    } else {
        return filters;
    }
}
export function convertMonthToDigit (month: string): number {
    return MONTH_OPTIONS.indexOf(month) + 1;
}

export function monthNumToName (monthNum: number): string {
    return MONTH_OPTIONS[monthNum - 1];
}

export function monthNameToNum (monthName: string): number {
    return MONTH_OPTIONS.indexOf(monthName) + 1
}

export function getNewPeriod (period: PeriodTypes, direction: "next" | "prev"): PeriodTypes {
    if (direction === "next") {
        return getNextPeriod(period)
    } else {
        return getPreviousPeriod(period)
    }
}
export function getPreviousPeriod (period: PeriodTypes): PeriodTypes {
    if (period.month === 1) {
        return {month: 12, year: period.year}
    } else {
        return {month: period.month - 1, year: period.year}
    }
}

export function getNextPeriod (period: PeriodTypes): PeriodTypes {
    if (period.month === 12) {
        return {month: 1, year: period.year}
    } else {
        return {month: period.month + 1, year: period.year}
    }
}

export function getDateValue () {
    const curDate = new Date()
    const year = curDate.getFullYear()
    const month = getZeroPaddedValue(curDate.getMonth() + 1)
    const day = getZeroPaddedValue(curDate.getDate())
    return `${year}-${month}-${day}`
}

export function getZeroPaddedValue (value: number) {
    return (value.toString().length == 2) ? value : `0${value}`;
}
