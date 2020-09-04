const objectKeyIsObject = (object: any, key: any) => {
    return key && object && object[key] && typeof object[key] === 'object';
}

export default objectKeyIsObject;
