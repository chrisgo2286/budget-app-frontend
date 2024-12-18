import { LoginFieldsTypes } from "../../components/login/login";
import { validateUsername, validatePassword } from "./validation";

export function validateLogin (fields: LoginFieldsTypes): string | string[] {
    let errors = [];
    const usernameResult = validateUsername(fields.username);
    const passwordResult = validatePassword(fields.password);
    
    if(usernameResult !== 'Valid') {
        errors.push(usernameResult);
    }

    if(passwordResult !== 'Valid') {
        errors.push(passwordResult);
    }

    if(errors.length > 0) {
        return errors;
    } else {
        return 'Valid';
    }
}