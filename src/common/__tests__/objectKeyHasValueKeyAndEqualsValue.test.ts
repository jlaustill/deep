import objectKeyHasValueKeyAndEqualsValue from "../objectKeyHasValueKeyAndEqualsValue";

describe("objectKeyHasValueKeyAndEqualsValue", () => {
    it("should return true when object has key:value pair", () => {
        expect(objectKeyHasValueKeyAndEqualsValue({ a: { b: 1 } }, "a", "b", 1)).toBe(true);
        expect(objectKeyHasValueKeyAndEqualsValue({ a: { b: "1" } }, "a", "b", "1")).toBe(true);
    });

    it("should return false when object doesn't have key:value pair", () => {
        expect(objectKeyHasValueKeyAndEqualsValue({ a: { c: 1 } }, "a", "b", 1)).toBe(false);
        expect(objectKeyHasValueKeyAndEqualsValue({ a: { b: "1" } }, "a", "b", 1)).toBe(false);
        expect(objectKeyHasValueKeyAndEqualsValue({ a: { c: [1] } }, "a", "b", 1)).toBe(false);
    });
});
