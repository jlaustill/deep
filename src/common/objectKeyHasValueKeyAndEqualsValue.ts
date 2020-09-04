const objectKeyHasValueKeyAndEqualsValue = (object: any, key: any, valueKey: string, value: any) => {
    return key
        && object[key] !== undefined
        && object[key][valueKey] !== undefined
        && object[key][valueKey] === value;
}

export default objectKeyHasValueKeyAndEqualsValue;
