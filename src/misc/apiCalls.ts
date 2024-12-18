import axios from 'axios';
import { findCategoryID } from './miscFunctions';
import { LedgerTypes } from '../components/ledger/ledgerTypes';
import { NewLedgerItemTypes } from "../components/ledger/hiddenLedgerSection/newLedgerItem/newLedgerItem";
import { NewCategoryTypes } from '../components/budget/newCategory/newCategory';
import { ResponseType, StatusType } from './miscTypes';
import { BudgetDataTypes } from '../components/budget/budgetTypes';
import { RegistrationTypes } from '../components/registration/registration';
import { LoginFieldsTypes } from '../components/login/login';
import { PeriodTypes } from '../components/reports/reports';
import { 
    MonthlyStatsTypes,
    YearlyStatsTypes,
    CurrentExpenseItemTypes,
    MonthlyExpenseItemTypes,
    MonthlySavingsItemTypes
} from "../misc/hooks"
import { createHeaders } from './userFunctions';
import { FilterTypes } from '../components/ledger/ledger';
import { UpdateLedgerItemTypes } from '../components/ledger/updateLedgerItem/updateLedgerItem';

const url = 'http://127.0.0.1:8000/api/'

export async function getLedgerItems (
    filters: FilterTypes, 
    categories: NewCategoryTypes[]
): Promise<LedgerTypes[]> {

    if(filters.category) {
        const categoryId = findCategoryID(filters.category, categories)
        if (categoryId) {
            filters = { ...filters, 'category': categoryId }
        }
    }
    const newUrl = (
        url + 'ledger/?startDate=' + filters.startDate + '&endDate=' +
        filters.endDate + '&category=' + filters.category + '&type=' +
        filters.type + "&month=" + filters.month + "&year=" + filters.year
    )
    const result = await axios.get(newUrl, createHeaders());
    return result.data;
}

export async function createLedgerItem (fields: NewLedgerItemTypes): Promise<StatusType> {
    fields.owner = 1;
    const response = await axios.post(url + 'ledger_items/', fields, createHeaders())
    return { status: response.status }
}

export async function patchLedgerItem (fields: UpdateLedgerItemTypes): Promise<StatusType> {
    const newUrl = url + "ledger_items/" + fields.id + "/"
    const result = await axios.patch(newUrl, fields, createHeaders())
    return { status: result.status }
}

export async function deleteLedgerItem (id: string): Promise<StatusType> {
    const result = await axios.delete(url + 'ledger_items/' + id + '/', createHeaders())
    return result.data;
}

export async function getCategories (): Promise<NewCategoryTypes[]> {
    const result = await axios.get(url + 'categories/', createHeaders());
    return result.data;
}

export async function createCategory (fields: NewCategoryTypes): Promise<StatusType> {
    fields.owner = 1;
    const result = await axios.post(url + 'categories/', fields, createHeaders());
    return result.data;
}

export async function deleteCategory (id: number): Promise<StatusType> {
    const newUrl = url + 'categories/' + id + '/';
    const result = await axios.delete(newUrl, createHeaders());
    return { status: result.status }
}

export async function getBudgetItems (period: PeriodTypes): Promise<BudgetDataTypes> {
    const newUrl = url + 'budget/?month=' + period.month + '&year=' + period.year;
    const result = await axios.get(newUrl, createHeaders())
    return result.data;
}

export async function createBudgetItem (fields: {
    owner?: number, month: number, year: number, category: string, amount: string
}): Promise<StatusType> {
    fields.owner = 1;
    console.log(createHeaders())
    const result = await axios.post(url + 'budget_items/', fields, createHeaders())
    return result.data;
}

export async function deleteBudgetItem (id: string): Promise<StatusType> {
    const newUrl = url + 'budget_items/' + id + '/';
    const result = await axios.delete(newUrl, createHeaders());
    return result.data
}

export async function patchBudgetItem (id: string, amount: string): Promise<StatusType> {
    const result = await axios.patch(url + 'budget_items/' + id + '/', { 'amount': amount}, createHeaders())
    return { status: result.status}
}

export async function copyBudget (period: PeriodTypes): Promise<StatusType> {
    const newUrl = url + 'budget_copy/?month=' + period.month + '&year=' + period.year;
    const result = await axios.get(newUrl, createHeaders())
    console.log(result)
    return { status: result.status }
}

export async function registerNewUser (fields: RegistrationTypes): Promise<StatusType> {
    const result = await axios.post(url + 'registration/', fields)
    return { status: result.status };
}

export async function loginUser (credentials: LoginFieldsTypes): Promise<ResponseType | string>  {
    try {
        const result = await axios.post(url + 'login/', credentials)
        return { status: result.status, token: result.data.key }
    } catch {
        return 'Invalid Credentials';
    }
}

export async function logoutUser (): Promise<StatusType> {
    const result = await axios.post(url + 'logout/')
    return { status: result.status }
}

export async function getMonthlyStats (period: PeriodTypes): Promise<MonthlyStatsTypes> {
    const newUrl = url + 'reports/monthly_stats/?month=' + period.month + '&year=' + period.year;
    const result = await axios.get(newUrl, createHeaders())
    return result.data;
}

export async function getYearlyStats (year: number): Promise<YearlyStatsTypes> {
    const newUrl = url + 'reports/yearly_stats/?year=' + year
    const result = await axios.get(newUrl, createHeaders())
    return result.data;
}

export async function getCurrentExpenseChart (period: PeriodTypes): Promise<CurrentExpenseItemTypes[]> {
    const newUrl = url + 'reports/current_expense_chart/?month=' + period.month + '&year=' + period.year;
    const result = await axios.get(newUrl, createHeaders())
    return result.data;
}

export async function getMonthlyExpenseChart (period: PeriodTypes): Promise<MonthlyExpenseItemTypes[]> {
    const newUrl = url + 'reports/monthly_expense_chart/?month=' + period.month + '&year=' + period.year;
    const result = await axios.get(newUrl, createHeaders())
    return result.data;
}

export async function getMonthlySavingsChart (period: PeriodTypes): Promise<MonthlySavingsItemTypes[]> {
    const newUrl = url + 'reports/monthly_savings_chart/?month=' + period.month + '&year=' + period.year;
    const result = await axios.get(newUrl, createHeaders())
    return result.data;
}