let StartFunc = ({ inRow }) => {
    const jVarLocalRow = inRow;

    jFLocalToInputAddOnModalItemNameId(jVarLocalRow.ItemName);
    jFLocalToInputAddOnModalItemSerialId(jVarLocalRow.pk);
    jFLocalToInputRate(jVarLocalRow.Rate);
};

let jFLocalToInputAddOnModalItemNameId = (inValue) => {
    let jVarLocalHtmlId = 'AddOnModalItemNameId';
    let jVarLocalAddOnModalItemNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAddOnModalItemNameId === null === false) {
        jVarLocalAddOnModalItemNameId.value = inValue;
    };
};

let jFLocalToInputAddOnModalItemSerialId = (inValue) => {
    let jVarLocalHtmlId = 'AddOnModalItemSerialId';
    let jVarLocalAddOnModalItemSerialId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAddOnModalItemSerialId === null === false) {
        jVarLocalAddOnModalItemSerialId.value = inValue;
    };
};

let jFLocalToInputRate = (inValue) => {
    let jVarLocalHtmlId = 'exampleFormControlInput1';
    let jVarLocalAddOnModalItemSerialId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAddOnModalItemSerialId === null === false) {
        jVarLocalAddOnModalItemSerialId.value = inValue;
    };
};

export { StartFunc };