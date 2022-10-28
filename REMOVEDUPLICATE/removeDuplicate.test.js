 const removeDuplicate = require("./removeDuplicate");

 describe("removeDuplicate", () => {
    // test nlist is an empty array, return nlist
    it("should return an empty array", () => {
        expect(removeDuplicate([])).toEqual([]);
    });
    // test nlist is an array without duplicate, return nlist
    it("should return an array without duplicate", () => {
        expect(removeDuplicate([1, 2, 3])).toEqual([1, 2, 3]);
    });
    // test nlist is an array with duplicate, return nlist without duplicate    
    it("should return an array without duplicate", () => {
        expect(removeDuplicate([1, 2, 2, 3])).toEqual([1, 2, 3]);
    });

});

