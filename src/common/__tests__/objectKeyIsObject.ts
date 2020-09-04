import objectKeyIsObject from "../objectKeyIsObject";

describe("objectKeyIsObject", () => {
    it("should return true for an object", () => {
        expect(objectKeyIsObject({ a: { b: '1' } }, 'a')).toBe(true);
        expect(objectKeyIsObject({ a: [1] }, 'a')).toBe(true);
    });

    it("should return false for not an object", () => {
        expect(objectKeyIsObject({ a: 1 }, 'a')).toBe(false);
        expect(objectKeyIsObject({ a: '1' }, 'a')).toBe(false);
    });
});