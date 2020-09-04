import objectKeyIsObject from "./common/objectKeyIsObject";
import objectKeyHasValueKeyAndEqualsValue from "./common/objectKeyHasValueKeyAndEqualsValue";

const findAllByValue = (object: any, valueKey: string, value: any): any => {
    const items: any = [];

    Object.keys(object).forEach((key: any) => {
        if (objectKeyHasValueKeyAndEqualsValue(object, key, valueKey, value)) {
            items.push(object[key]);
        }
        if (objectKeyIsObject(object, key)) {
            findAllByValue(object[key], valueKey, value)
                .map((r: any) => items.push(r));
        }
    });

    return items;
};

export default findAllByValue;
