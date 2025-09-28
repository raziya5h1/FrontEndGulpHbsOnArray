import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumntitle,LocalCoumnstart,LocalCoumnclassName}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumntitle,LocalCoumnstart,LocalCoumnclassName});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};