$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(document).ready(function() {
    targetScrollFnc = function(targetName){
        var target = $('[data-scroll-id=' +targetName+']');
        if(target.length){
            var px = target.offset().top;
            var body = $("html, body");
            body.stop().animate({scrollTop:target.offset().top-30}, '1000', 'swing');
        }
    };
    window.targetScrollFnc = targetScrollFnc;

    $('[data-scroll-target]').click(function(e){
        e.preventDefault();
        var targetName = $(this).data('scroll-target');
        targetScrollFnc(targetName);
    });
});

function validate(){
    var valName=document.forms["form"]["name"].value;
    var valEmail=document.forms["form"]["email"].value;
    var valUrl=document.forms["form"]["siteurl"].value;

    if (valName.length==0){
        document.getElementById("namef").innerHTML="Required field";
        return false;
    }

    if (valEmail.length==0){
        document.getElementById("emailf").innerHTML="Required field";
        return false;
    }

    at=valEmail.indexOf("@");
    dot=valEmail.indexOf(".");

    if (at<1 || dot <1){
        document.getElementById("emailf").innerHTML="Incorrect Email";
        return false;
    }


    if (valUrl.length==0){
        document.getElementById("siteurlf").innerHTML="Required field";
        return false;
    }
}