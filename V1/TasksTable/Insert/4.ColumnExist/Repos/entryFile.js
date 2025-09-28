import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumntitle,LocalCoumnstart,LocalCoumnclassName}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumntitle,LocalCoumnstart,LocalCoumnclassName});

    return LocalFromDal;
};

export {
    postDefaultFunc
};