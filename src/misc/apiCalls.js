import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/'

export async function getLedgerItems () {
    const result = await axios.get(url + 'ledger/');
    return result.data;
}

export async function createLedgerItem (fields) {
    fields.owner = 1;
    const result = await axios.post(url + 'ledger_items/', fields)
    return result.data;
}

export async function deleteLedgerItem (id) {
    const result = await axios.delete(url + 'ledger_items/' + id + '/')
    return result.data;
}

export async function getCategories () {
    const result = await axios.get(url + 'categories/');
    return result.data;
}

export async function getBudgetItems () {
    const result = await axios.get(url + 'budget/')
    return result.data;
}

export async function createBudgetItem (fields) {
    fields.owner = 1;
    const result = await axios.post(url + 'budget_items/', fields)
    return result.data;
}

export async function patchBudgetItem (id, field) {
    const result = await axios.patch(url + 'budget_items/' + id + '/', field)
    return result.data;
}

export async function registerNewUser (fields) {
    const result = await axios.post(url + 'registration/', fields)
    console.log(result)
    return result;
}

export async function loginUser (credentials) {
    try {
        const result = await axios.post(url + 'login/', credentials)
        console.log(result)
        return result
    } catch {
        console.log('Invalid Credentials')
        return 'Invalid Credentials';
    }
}

export async function logoutUser () {
    const result = await axios.post(url + 'logout/')
    console.log(result)
    return result
}