import { FilterTypes } from "../../components/ledger/ledgerTypes";
import { validateCategorySelect, validateFilterDates, validateType } from "./validation";

export function validateLedgerFilter (fields: FilterTypes): string | string[] {
    let errors = [];
    const filterDatesResult = validateFilterDates(fields.startDate, fields.endDate);
    const categoryResult = validateCategorySelect(fields.category);
    const typeResult = validateType(fields.type);

    if(filterDatesResult !== 'Valid') {
        errors.push(filterDatesResult);
    }
    
    if(categoryResult !== 'Valid') {
        errors.push(categoryResult);
    }
    
    if(typeResult !== 'Valid') {
        errors.push(typeResult);
    }

    if(errors.length > 0) {
        return errors;
    } else {
        return 'Valid';
    }
}