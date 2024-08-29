import axios from 'axios';
import { findCategoryID } from './miscFunctions';
import { FilterTypes, LedgerTypes, NewLedgerItemTypes } from "../components/ledger/ledgerTypes";
import { CategoriesType, NewCategoryTypes } from "../components/newCategory/newCategoryTypes";
import { ResponseType, StatusType } from './miscTypes';
import { BudgetFilterTypes, BudgetItemTypes } from '../components/budget/budgetTypes';
import { NewBudgetItemTypes } from '../components/newBudgetItem/newBudgetItemTypes';
import { RegistrationTypes } from '../components/registration/registrationTypes';
import { LoginFieldsTypes } from '../components/login/loginTypes';
import { PeriodTypes } from '../components/reports/reportTypes';
import { MonthlyStatsTypes } from '../components/reports/monthlyStats/monthStatsTypes';
import { YearlyStatsTypes } from '../components/reports/yearlyStats/yearlyStatsTypes';
import { CurrentExpenseChartTypes } from '../components/reports/currentExpenseChart/currentExpenseChartTypes';
import { MonthlyExpenseChartTypes } from '../components/reports/monthlyExpenseChart/monthlyExpenseChartTypes';
import { MonthlySavingsChartTypes } from '../components/reports/monthlySavingsChart/monthlySavingsChartTypes';

const url = 'http://127.0.0.1:8000/api/'
const token = localStorage.getItem('token')
const headers = {
    headers: {
        Authorization: 'Token ' + token
    }
}

export async function getLedgerItems (
    filters: FilterTypes, 
    categories: CategoriesType
): Promise<LedgerTypes[]> {
    if(filters.category) {
        const categoryId = findCategoryID(filters.category, categories)
        filters = { ...filters, 'category': categoryId }
    }
    const newUrl = (
        url + 'ledger/?startDate=' + filters.startDate + '&endDate=' +
        filters.endDate + '&category=' + filters.category + '&type=' +
        filters.type
    )
    const result = await axios.get(newUrl, headers);
    return result.data;
}

export async function createLedgerItem (fields: NewLedgerItemTypes): Promise<LedgerTypes> {
    fields.owner = 1;
    const result = await axios.post(url + 'ledger_items/', fields, headers)
    return result.data;
}

export async function deleteLedgerItem (id: string): Promise<StatusType> {
    const result = await axios.delete(url + 'ledger_items/' + id + '/', headers)
    return result.data;
}

export async function getCategories (): Promise<CategoriesType> {
    const result = await axios.get(url + 'categories/', headers);
    return result.data;
}

export async function createCategory (fields: NewCategoryTypes): Promise<StatusType> {
    fields.owner = 1;
    const result = await axios.post(url + 'categories/', fields, headers);
    return result.data;
}

export async function deleteCategory (id: number): Promise<void> {
    console.log('Requesting API...')
    const newUrl = url + 'categories/' + id + '/';
    await axios.delete(newUrl, headers);
}

export async function getBudgetItems (filters: BudgetFilterTypes): Promise<BudgetItemTypes[]> {
    const newUrl = url + 'budget/?month=' + filters.month + '&year=' + filters.year;
    const result = await axios.get(newUrl, headers)
    return result.data;
}

export async function createBudgetItem (fields: {category: string, amount: string}): Promise<StatusType> {
    fields.owner = 1;
    const result = await axios.post(url + 'budget_items/', fields, headers)
    return result.data;
}

export async function deleteBudgetItem (id: string): Promise<StatusType> {
    const newUrl = url + 'budget_items/' + id + '/';
    const result = await axios.delete(newUrl, headers);
    return result.data
}

export async function patchBudgetItem (id: string, amount: string): Promise<StatusType> {
    const result = await axios.patch(url + 'budget_items/' + id + '/', amount, headers)
    return result.data;
}

export async function registerNewUser (fields: RegistrationTypes): Promise<ResponseType> {
    const result = await axios.post(url + 'registration/', fields)
    return { status: result.data.status, token: result.data.key };
}

export async function loginUser (credentials: LoginFieldsTypes): Promise<ResponseType | string>  {
    try {
        const result = await axios.post(url + 'login/', credentials)
        return { status: result.data.status, token: result.data.token }
    } catch {
        return 'Invalid Credentials';
    }
}

export async function logoutUser (): Promise<StatusType> {
    const result = await axios.post(url + 'logout/')
    return result.data
}

export async function getMonthlyStats (period: PeriodTypes): Promise<MonthlyStatsTypes> {
    const newUrl = url + 'reports/monthly_stats/?month=' + period.month + '&year=' + period.year;
    const result = await axios.get(newUrl, headers)
    return result.data;
}

export async function getYearlyStats (year: number): Promise<YearlyStatsTypes> {
    const newUrl = url + 'reports/yearly_stats/?year=' + year
    const result = await axios.get(newUrl, headers)
    return result.data;
}

export async function getCurrentExpenseChart (period: PeriodTypes): Promise<CurrentExpenseChartTypes> {
    const newUrl = url + 'reports/current_expense_chart/?month=' + period.month + '&year=' + period.year;
    const result = await axios.get(newUrl, headers)
    return result.data;
}

export async function getMonthlyExpenseChart (period: PeriodTypes): Promise<MonthlyExpenseChartTypes> {
    const newUrl = url + 'reports/monthly_expense_chart/?month=' + period.month + '&year=' + period.year;
    const result = await axios.get(newUrl, headers)
    return result.data;
}

export async function getMonthlySavingsChart (period: PeriodTypes): Promise<MonthlySavingsChartTypes> {
    const newUrl = url + 'reports/monthly_savings_chart/?month=' + period.month + '&year=' + period.year;
    const result = await axios.get(newUrl, headers)
    return result.data;
}