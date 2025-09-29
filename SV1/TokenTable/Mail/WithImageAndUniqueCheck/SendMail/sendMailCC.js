import nodemailer from "nodemailer";
import dotenv from 'dotenv';
import fs from "fs";

const CommonHtmlPath = "welcome.html";
dotenv.config();

let StartFunc = async ({ inDataInserted, inDomainName, CCEmail, inpk, inTableName }) => {
    let LocaltableName = inTableName;

    if ("KS_MAIL_ID" in process.env === false) {
        console.log("KS_MAIL_ID not found in .env file");
        return await false;
    };

    if ("KS_MAIL_PASSWORD" in process.env === false) {
        console.log("KS_MAIL_PASSWORD not found in .env file");
        return await false;
    };

    if ("KS_TO_MAIL_ID" in process.env === false) {
        console.log("KS_TO_MAIL_ID not found in .env file");
        return await false;
    };

    const data = fs.readFileSync(CommonHtmlPath, { encoding: 'utf8' });

    let LocalRedirectUrl = `${inDomainName}/binV4/${LocaltableName}/isMailValidated/true`;

    console.log("inDomainName : ", inDomainName);

    let LocalUrlInserted = data.toString().replace("{{inRedirectUrl}}", LocalRedirectUrl);
    // POST http://localhost:7318/binV2/StudentsVerified/Create
    const LocalFromSendMail = jFTransporterForGoogle.sendMail({
        from: `"KeshavSoft" ${process.env.KS_MAIL_ID}`,
        to: `${process.env.KS_TO_MAIL_ID}`,
        cc: CCEmail,
        subject: `Hello ${inDataInserted.StudentName}✔`,
        text: inpk.toString(),
        html: LocalUrlInserted
    });

    return await LocalFromSendMail;
};

let testAccount = await nodemailer.createTestAccount();

var transporter = nodemailer.createTransport({
    service: 'Yahoo',
    secure: false,
    auth: {
        user: process.env.KS_MAIL_ID,
        pass: process.env.KS_MAIL_PASSWORD,
    },
});

let jFTransporterYahoo = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: false,
    auth: {
        user: process.env.KS_MAIL_ID,
        pass: process.env.KS_MAIL_PASSWORD,
    },
});

let jFTransporterForGoogle = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.KS_MAIL_ID,
        pass: process.env.KS_MAIL_PASSWORD,
    },
});

let jFTransporterForDomain = nodemailer.createTransport({
    host: "cosmic.herosite.pro",
    port: 465,
    secure: false,
    auth: {
        user: process.env.KS_MAIL_ID,
        pass: process.env.KS_MAIL_PASSWORD,
    },
});

export { StartFunc };