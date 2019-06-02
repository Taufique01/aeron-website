function hideMenu() {

    document.getElementsByClassName("nav-items-ul")[0].style = "display:none";
    document.getElementById("menu-icon").style = "display:block";

    document.getElementsByClassName("nav-bg2")[0].style = "display:none";
    document.getElementById("close-icon").style = "display:none";

    // alert("clicked");

}

function showMenu() {

    var x = document.documentElement.clientWidth;

    if (x > 615) {

        //document.getElementsByClassName("nav-items-ul")[0].style.top = "400px"
        document.getElementsByClassName("nav-items-ul")[0].style = "position:fixed;top:80px;right:0px;display:block;padding-left:20px";
        // alert("okk");
        document.getElementById("menu-icon").style = "display:none";
        document.getElementById("close-icon").style = "display:block";
        document.getElementsByClassName("nav-bg2")[0].style = "display:block";
        return;
    }
    document.getElementsByClassName("nav-items-ul")[0].style = "display:block";
    document.getElementById("menu-icon").style = "display:none";

    document.getElementsByClassName("nav-bg2")[0].style = "display:block";
    document.getElementById("close-icon").style = "display:block";




}

function reSized() {

    var x = document.documentElement.clientWidth;
    if (x > 1210) {
        document.getElementById("menu-icon").style = "display:none";
        //document.getElementById("nav-bg2").style = "display:none";
        document.getElementsByClassName("nav-items-ul")[0].style =
            "display: block";
        document.getElementById("menu-icon").style = "display:noone";
        document.getElementById("close-icon").style = "display:none";

    } // else if (x > 608) {


    //    }
    else {
        document.getElementsByClassName("nav-items-ul")[0].style = "display:none";
        document.getElementById("menu-icon").style = "display:block";
        document.getElementsByClassName("nav-bg2")[0].style = "display:none";
    }

}

//$(document).ready(function () {

//});

var INDEX = 0;
$(document).ready(function () {
    // Get the <span> element that closes the modal

    reSized();






});
