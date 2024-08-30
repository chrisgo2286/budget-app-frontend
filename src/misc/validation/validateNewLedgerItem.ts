import { NewLedgerItemTypes } from '../../components/ledger/ledgerTypes';
import { validateAmount, validateCategorySelect, validateDate } from './validation';

export function validateNewLedgerItem (fields: NewLedgerItemTypes): string | string[] {
    let errors = []
    const dateResult = validateDate(fields.date);
    const categoryResult = validateCategorySelect(fields.category);
    const amountResult = validateAmount(fields.amount);

    if(dateResult !== 'Valid') {
        errors.push(dateResult);
    }

    if(categoryResult !== 'Valid') {
        errors.push(categoryResult);
    }

    if(amountResult !== 'Valid') {
        errors.push(amountResult);
    }

    if(errors.length > 0) {
        return errors;
    } else {
        return 'Valid';
    }
}