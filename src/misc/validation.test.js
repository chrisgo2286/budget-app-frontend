import { isEmptyString } from './validation';

test('Empty string returns true', () => {
    expect(isEmptyString('')).toBe(true);
});

test('String returns false', () => {
    expect(isEmptyString('String')).toBe(false);
})