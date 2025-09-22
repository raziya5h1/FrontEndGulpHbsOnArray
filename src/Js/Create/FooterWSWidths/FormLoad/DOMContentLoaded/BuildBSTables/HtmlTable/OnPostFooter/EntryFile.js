let StartFunc = (inData, inOptions) => {
    // const k1 = inOptions.$tableFooter[0].querySelectorAll("th")[1].querySelector("input");

    const jVarLocalFooterCells = inOptions.$tableFooter[0].querySelectorAll("th");

    const jVarLocalDefaultValues = inOptions.columns.map(element => {
        return element.defaultvalue;
    });

    jVarLocalFooterCells.forEach((element, LoopIndex) => {
        // console.log("nnn", element, jVarLocalDefaultValues[LoopIndex]);

        if (jVarLocalDefaultValues[LoopIndex] !== undefined) {
            const LoopInsideInput = element.querySelector("input");

            LoopInsideInput.value = jVarLocalDefaultValues[LoopIndex];
        };
    });

    LocalFuncSetFocus();
};

const LocalFuncSetFocus = () => {
    let $autoFocusInput = $("#table tfoot").find("input[autofocus], select[autofocus], textarea[autofocus]");

    if ($autoFocusInput.length > 0) {
        $autoFocusInput[0].focus();
    };
};

export { StartFunc };