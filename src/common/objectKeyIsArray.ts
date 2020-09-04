const objectKeyIsArray = (object: any, key: string) => {
    return key
        && object
        && object[key] !== undefined
        && Array.isArray(object[key]);
}

export default objectKeyIsArray;
