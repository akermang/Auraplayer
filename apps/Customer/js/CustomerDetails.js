var showStatusMessages = false;
var origRequestFields;

$(function () {
    origRequestFields = $('#requestFields').clone();
    setDefaultValues();
    initData();


    prepareMobileLOV({
        lovId: "S_CUSTOMER_ID_0_lov",
        triggerId: "S_CUSTOMER_ID_0_lov_trigger",
        elementId: "S_CUSTOMER_ID_0",
        webService: "mcs_getAllCustomers",
        requestPreparer: "prepare_S_CUSTOMER_ID_0_lov_request",
        itemPresenter: "S_CUSTOMER_ID_0_lov_item_presenter",
        itemHandler: "S_CUSTOMER_ID_0_lov_item_handler"
    });
    prepareMobileLOV({
        lovId: "S_CUSTOMER_STATE_0_lov",
        triggerId: "S_CUSTOMER_STATE_0_lov_trigger",
        elementId: "S_CUSTOMER_STATE_0",
        webService: "",
        requestPreparer: "prepare_S_CUSTOMER_STATE_0_lov_request",
        itemPresenter: "S_CUSTOMER_STATE_0_lov_item_presenter",
        itemHandler: "S_CUSTOMER_STATE_0_lov_item_handler"
    });


    validateRequiredFields();

    $('input').on('input blur', function () {
        setTimeout(validateRequiredFields, 200);
    });
});

var defaultValues = {};
defaultValues['S_CUSTOMER_ADDRESS_0'] = {
    value: convert_S_CUSTOMER_ADDRESS_0('no'),
    type: 'slider'
};

defaultValues['Map'] = {
    value: convert_map(),
    type: 'map'
};

defaultValues['S_CUSTOMER_PHONE_0'] = {
    value: null,
    type: 'phone'
};


defaultValues['S_CUSTOMER_ZIP_CODE_0'] = {
    value: null,
    type: 'file'
};

defaultValues['S_CUSTOMER_CREDIT_RATING_0'] = {
    value: null,
    type: 'text'
};

defaultValues['S_CUSTOMER_COMMENTS_0'] = {
    value: null,
    type: 'text'
};

defaultValues['S_CUSTOMER_NAME_0'] = {
    value: convert_S_CUSTOMER_NAME_0(null),
    type: 'qr'
};

defaultValues['S_CUSTOMER_CITY_0'] = {
    value: convert_S_CUSTOMER_CITY_0('false'),
    type: 'checkbox'
};

defaultValues['S_CUSTOMER_ID_0'] = {
    value: '200',
    type: 'lov'
};



function showInputScreen() {
    setDefaultValues();
    refreshInputElements();

    $("#requestPart").show();
    $("#responsePart").hide();

    clearOutputFields();
}

//handler for request sent
function sendRequestHandler() {
    document.getElementById("responsePart").style.display = 'none';
    spinner().start("Executing..", "a");
}

//handler for response received
function receiveResponseHandler(response, serviceName, status, populateFields) {
    spinner().stop();

    if (typeof (populateFields) === 'undefined' || populateFields) {
        //show output params

        document.getElementById("responsePart").style.display = '';
        validateRequiredFields();
    }
}

//init function
$(function () {
    removeDuplicatedFields();
});
