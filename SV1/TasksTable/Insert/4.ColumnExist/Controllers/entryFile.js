import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnclassName = LocalRequestBody.className;
	let LocalCoumnstart = LocalRequestBody.start;
	let LocalCoumntitle = LocalRequestBody.title;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumntitle,LocalCoumnstart,LocalCoumnclassName});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};