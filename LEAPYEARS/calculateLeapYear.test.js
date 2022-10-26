const leapYear = require('./calculateLeapYear');

describe('leapYear', () => {
    it ('returns false if year is not divisible by 4 and 400', () => {
        expect(leapYear(2001)).toBe(false);
    })

    it ('returns false if year is divisible 100 but not 4 or 400', () => {
        expect(leapYear(1900)).toBe(false);
    })

    it ('returns true if year is divisible by 4 but not 100', () => {
        expect(leapYear(2000)).toBe(true);
    })

    it ('returns true if year is divisible by 4 and 400 but not 100', () => {
        expect(leapYear(1996)).toBe(true);
    })
})



