const stringPadFn = require("./string-pad-fn");

describe("String Pad Fn Testing", () => {
    test("it should add one pad", () => {
        const inputString = "blah\nblah";
        const numberOfSpaces = 1;
        const expectedOutput = "blah\n blah";

        expect(stringPadFn(inputString, numberOfSpaces)).toBe(expectedOutput);
    });

    test("it should add hundred pads", () => {
        const inputString = "blah\nblah";
        const numberOfSpaces = 100;
        const expectedOutput = "blah\n                                                                                                    blah";

        expect(stringPadFn(inputString, numberOfSpaces)).toBe(expectedOutput);
    });

    test("it should add two pads for between words only", () => {
        const inputString = "blah\n\nblah\nblah\n\n\nblah";
        const numberOfSpaces = 2;
        const expectedOutput = "blah\n\n  blah\n  blah\n\n\n  blah";

        expect(stringPadFn(inputString, numberOfSpaces)).toBe(expectedOutput);
    });

    test("it should not add any pads", () => {
        const inputString = "blahblahblah";
        const numberOfSpaces = 3;
        const expectedOutput = inputString;

        expect(stringPadFn(inputString, numberOfSpaces)).toBe(expectedOutput);
    });
});
