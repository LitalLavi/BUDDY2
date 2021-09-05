function noPuppyLink () {
    //debugger
    document.cookie = 'data=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href = "profile.html";
}


function clickOnLoginBtn() {
    //debugger
    let name = $('.name').val();
    let puppyName = $('.puppyName').val();
    let puppyAge = $('.puppyAge').val();

    if (name == undefined || name == "") {
        $('#errorMsg').val("נא למלא שם");
        return;
    }
    
    if (puppyName == undefined || puppyName == "") {
        $('#errorMsg').val("נא למלא שם גור");
        return;
    }

    if (puppyAge == undefined || puppyAge == "" || puppyAge > 15 || puppyAge<1) {
        $('#errorMsg').val("גיל הגור לא תקין");
        return;
    }



    let data = { "name": $('.name').val(), "puppyName": $('.puppyName').val(), puppyAge: $('.puppyAge').val() }

    var a = new Date();
    var cookieLifeTime = (18 * 30) - (puppyAge * 30); //18 months in days - puppyage in days
    a = new Date(a.getTime() + 1000 * 60 * 60 * 24 * cookieLifeTime);
    document.cookie = 'data=' + JSON.stringify(data)+'; expires=' + a.toGMTString() + ';'; 
    window.location.href = "profile.html";
}

function setCookie(variable, value, expires_seconds) {
    var d = new Date();
    d = new Date(d.getTime() + 1000 * expires_seconds);
    document.cookie = variable + '=' + value + '; expires=' + d.toGMTString() + ';';
}


$('input').focus(function () {
    $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');
    } else {
        $(this).addClass('filled');
    }
})  