var showStatusMessages = false;
var origRequestFields;

$(function () {
    origRequestFields = $('#requestFields').clone();
    setDefaultValues();
    initData();



    
    validateRequiredFields();
    
    $('input').on('input blur', function() {
        setTimeout(validateRequiredFields, 200);
    });
});

var defaultValues = {};


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

    if (typeof(populateFields) === 'undefined' || populateFields) {
        //show output params

        document.getElementById("responsePart").style.display = '';
        validateRequiredFields();
    }
}

//init function
$(function () {
    removeDuplicatedFields();
});
