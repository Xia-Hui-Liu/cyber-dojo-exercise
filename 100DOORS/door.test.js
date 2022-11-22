const door = require("./door");

describe('door', () => {
    it('return false if the door is closed', ()=>{
       expect(door()).toBe(false)
    })
})