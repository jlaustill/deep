import setAllByValue from "../setAllByValue";

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

const URL = "https://github.com/jlaustill/deep";

describe("setAllByValue", () => {
    it("should set all the things", () => {
        setAllByValue(ATT, 'b', 1, { url: URL }, 'mySetData');

        // @ts-ignore
        expect(ATT.a.mySetData.url).toBe(URL);
        // @ts-ignore
        expect(ATT.a.c.mySetData.url).toBe(URL);
        // @ts-ignore
        expect(ATT.b[0].mySetData.url).toBe(URL);
        // @ts-ignore
        expect(ATT.b[0].c[0].mySetData.url).toBe(URL);
        // @ts-ignore
        expect(ATT.b[1].mySetData.url).toBe(URL);
        // @ts-ignore
        expect(ATT.b[1].c[0].mySetData.url).toBe(URL);
    });

    it("should default to setData", () => {
        setAllByValue(ATT, 'b', 1, { url: URL });

        // @ts-ignore
        expect(ATT.a.setData.url).toBe(URL);
    })
});