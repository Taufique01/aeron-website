$(document).ready(function () {
    // Get the <span> element that closes the modal

    reSized();
    var cn = document.getElementsByClassName('js-car-sub-item');

    for (var i = 0; i < cn.length; i++) {

        cn[i].addEventListener('click', function (event) {

            window.location.href = "product_details.html";
            // Get the modal
            //var modal = document.getElementById('myModal');
            //modal.style.display = "block";
            // alert("clicked");
            // do something
        });

    }







});

