const findMaxProduct = require("./find-max-product");

describe("Find Max Product Testing", () => {
    test("should return 0 if input array is empty", () => {
        expect(findMaxProduct([])).toBe(0);
    });

    test("should return 0 for incorrect data", () => {
        expect(findMaxProduct()).toBe(0);
        expect(findMaxProduct(null)).toBe(0);
    });

    test("should return one element if array has one number", () => {
        expect(findMaxProduct([25])).toBe(25);
    });

    test("should return max product for array of integers", () => {
        expect(findMaxProduct([4,5])).toBe(20);
        expect(findMaxProduct([2,4,5,8,10])).toBe(80);
        expect(findMaxProduct([1,78,212,46,64,867,1000])).toBe(867000);
    });
});
