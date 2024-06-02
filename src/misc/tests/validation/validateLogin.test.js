import { validateLogin } from "../../validation/validateLogin";

describe('validateLogin', () => {
    const validFields = {
        username: 'tester',
        password: 'Cypress123'
    }
    const invalidFields = {
        username: '',
        password: ''
    }
    const errors = [
        'Please enter your username!',
        'Please enter your password!'
    ]
    it('Valid fields return as valid', () => {
        expect(validateLogin(validFields)).toBe('Valid');
    })
    it('Empty fields return error messages', () => {
        expect(validateLogin(invalidFields)).toEqual(errors);
    })
})