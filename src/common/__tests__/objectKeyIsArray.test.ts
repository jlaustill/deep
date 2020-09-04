import objectKeyIsArray from "../objectKeyIsArray";

describe("objectKeyIsArray", () => {
    it("should return true for an array", () => {
        expect(objectKeyIsArray({ a: [1] }, 'a')).toBe(true);
    });

    it("should return false for not an array", () => {
        expect(objectKeyIsArray({ a: 1 }, 'a')).toBe(false);
        expect(objectKeyIsArray({ a: '1' }, 'a')).toBe(false);
        expect(objectKeyIsArray({ a: { b: '1' } }, 'a')).toBe(false);
        expect(objectKeyIsArray({ }, 'a')).toBe(false);
    });
});
