const isPaladrome = require('../index')

describe('isPalidrome', () => {
    it('returns true if pali',() => {
        const value = isPaladrome('racecar')

        expect(value).toBe(true)
    })
})


describe('isPalidrome', () => {
    it('returns false if not pali',() => {
        const value = isPaladrome('javascript')

        expect(value).toBe(false)
    })
})