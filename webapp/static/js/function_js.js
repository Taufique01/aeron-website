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


////////////////////


// using jQuery
function getCookie(name) {

    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);

            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {

                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }

    return cookieValue;
}

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
var csrftoken = getCookie('csrftoken');

/////////////////////




var PRODUCTS = (function () {

    var products;



    return {
        set: function (datas) {
            products = datas;

        },
        datas: function () {

            return products;
        }

    };

})();




////////////////////
var INDEX = 0;
$(document).ready(function () {
    // Get the <span> element that closes the modal

    reSized();







    var url = $("#url-details").attr("data-url");
    var id = $("#url-details").attr("value");

    INDEX = parseInt(id);

    url2 = url.replace("123", id);




    var data1 = {
        "cod": "nav",

    };

    $.ajax({
        url: url2, //$("#url-details").attr("data-url"),
        type: "post",
        data: data1,
        crossDomain: false,
        dataType: "json",
        beforeSend: function (xhr, settings) {

            //alert("before send"+csrfSafeMethod(settings.type));
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {

                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        },
        success: function (data) {

            //alert('successprev'+id);

            data = JSON.parse(data);

            for (var i = 0; i < data.length; i++) {
                if (data[i].pk == id) {
                    INDEX = i;
                    break;
                }
            }
            PRODUCTS.set(data);

            //updateUI(data);
        },




    });



    var pre = document.getElementsByClassName('previous')[0];

    var next = document.getElementsByClassName('next')[0];
    pre.addEventListener("click", function (event) {

        INDEX = INDEX - 1;
        if (INDEX < 0)
            INDEX = PRODUCTS.datas().length - 1;
        updateUI(PRODUCTS.datas()[INDEX].fields);




    }, false);


    next.addEventListener("click", function (event) {

        INDEX = INDEX + 1;
        if (INDEX >= PRODUCTS.datas().length)
            INDEX = 0;

        updateUI(PRODUCTS.datas()[INDEX].fields);





    }, false);


    var popup = document.getElementById("imgPopup");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    document.getElementsByClassName("mm1")[0].addEventListener("click", function (event) {

        popup.style.display = "block";


    }, false);









    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        popup.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }









});

function updateUI(p) {

    var medurl = $("#url-details").attr("data-murl");
    var imgurl = medurl.replace("123", p.image);
    $("#url-details").attr('value', INDEX);
    $("#image").attr("src", imgurl);
    $("#popup-inage").attr("src", imgurl);
    // $(".catagory-hp").text(p.catagory);

    //$(".title-hp").text(p.title);
    $("quan-hp").html(p.quantity1 + " & nbsp; & nbsp; & nbsp; & nbsp;" + p.quantity2 + "& nbsp; & nbsp; & nbsp; & nbsp;" + p.quantity3);


    $(".txt1").text(p.head_txt1);
    $(".txt2").text(p.head_txt2);

    $(".txt3").text(p.description_txt3);

}
