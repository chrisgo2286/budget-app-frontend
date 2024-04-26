import { validateRegistration } from "../validateRegistration";

describe('validateRegistration', () => {
    const validFields = {
        username: 'tester',
        password1: 'Cypress123',
        password2: 'Cypress123'
    }
    const invalidFields1 = {
        username: '',
        password1: '',
        password2: '',
    }
    const invalidFields2 = {
        username: 'tester',
        password1: 'Cypress123',
        password2: 'Cypress100'
    }
    const errors1 = [
        'Please enter your username!',
        'Please enter your password twice!'
    ]
    const errors2 = [
        'Passwords need to match!'
    ]
    it('Valid fields return as valid', () => {
        expect(validateRegistration(validFields)).toBe('Valid');
    })
    it('Empty fields return correct error msg', () => {
        expect(validateRegistration(invalidFields1)).toEqual(errors1)
    })
    it('Mismatched passwords return correct error msg', () => {
        expect(validateRegistration(invalidFields2)).toEqual(errors2)
    })
})