window.addEventListener('load', function () {
    //check if user already logged in , if not - redirect to login page
    if (document.cookie == "" || document.cookie == undefined) {
        //debugger
        $('#myPuppy').remove();
        document.getElementById('helloUserName').innerText = "היי ";
        $('#goToLogin').css('visibility', 'visible');


    }
    else {
        //get cookie
        //debugger
        $('#goToLogin').remove();
        let userCookie = JSON.parse(document.cookie.split('=')[1]);

        //set userName
        let userName = userCookie.name;
        document.getElementById('helloUserName').innerText = "היי " + userName + ",";

        //set puppy age
        document.getElementById('puppyAgeValue').innerText = userCookie.puppyAge + " חודשים";

        //set puppy name for all elements with puppyNameValue class attribute 
        let puppyName = userCookie.puppyName;
        var elements = document.getElementsByClassName("puppyNameValue");
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerText = puppyName+'- ';
        }
    }})

$('document').ready(function () {


});