import findAllByValue from "../findAllByValue";

const ATT = {
    name: "All the things",
    a: { // 1
        b: 1,
        c: { // 2
            b: 1,
        },
    },
    b: [{ // 3
        b: 1,
        c: [{ // 4
            b: 1,
        }],
    }, { // 5
        b: 1,
        c: [{ // 6
            b: 1,
        }],
    }],
};

describe("findAllByValue", () => {
    it("should find all the things", () => {
        const result = findAllByValue(ATT, 'b', 1);

        expect(result).toHaveLength(6);
    });
});
