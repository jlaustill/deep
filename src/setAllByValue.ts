import objectKeyIsObject from "./common/objectKeyIsObject";
import objectKeyIsArray from "./common/objectKeyIsArray";
import objectKeyHasValueKeyAndEqualsValue from "./common/objectKeyHasValueKeyAndEqualsValue";

const setAllByValue = (object: any, valueKey: string, value: any, data: any, dataKey = 'setData'): any => {
    Object.keys(object).forEach((key: any) => {
        if (objectKeyHasValueKeyAndEqualsValue(object, key, valueKey, value)) {
            // eslint-disable-next-line no-param-reassign
            object[key][dataKey] = data;
        }
        if (objectKeyIsArray(object, key)) {
            object[key].map((obj: any) => setAllByValue(obj, valueKey, value, data, dataKey));
        }
        if (objectKeyIsObject(object, key)) {
            setAllByValue(object[key], valueKey, value, data, dataKey);
        }
    });

    return object;
};

export default setAllByValue;
