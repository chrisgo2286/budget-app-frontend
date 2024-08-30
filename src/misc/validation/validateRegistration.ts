import { RegistrationTypes } from "../../components/registration/registrationTypes";
import { validateUsername, validatePassword, validatePasswordMatch } from "./validation";

export function validateRegistration (fields: RegistrationTypes): string | string[] {
    let errors = [];
    const usernameResult = validateUsername(fields.username);
    const password1Result = validatePassword(fields.password1);
    const password2Result = validatePassword(fields.password2);
    const passwordMatchResult = validatePasswordMatch(fields.password1, fields.password2);

    if(usernameResult !== 'Valid') {
        errors.push(usernameResult);
    }

    if(password1Result !== 'Valid' || password2Result !== 'Valid') {
        errors.push('Please enter your password twice!')
    }

    if(passwordMatchResult !== 'Valid') {
        errors.push(passwordMatchResult);
    }

    if(errors.length > 0) {
        return errors;
    } else {
        return 'Valid';
    }
}