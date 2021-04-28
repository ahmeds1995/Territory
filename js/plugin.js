$(function(){

    // Show The Menu
    $("header .navbar .navi-icon").on("click", function(){

        $(".menu").css("right", 0);
    });

    // Hide The Menu
    $(".menu .menu-wrapper i , .menu .menu-wrapper li a").on("click", function(){

        $(".menu").css("right", "-250px");
    });

    // Scroll Bottom To Sections
    $(".menu .menu-wrapper li a , .go-to-intro img").on("click", function(){

        $("html , body").animate({
            scrollTop : $($(this).data("section")).offset().top
        }, 1000)
    });

    let ourPreviews = document.querySelectorAll(".portfolio-preview");

    ourPreviews.forEach(preview => {

        preview.addEventListener("click", (e) => {

        // Create Dark Overlay On The Page
        let popupOverlay = document.createElement("div");

        popupOverlay.className = "popup-overlay";

        document.body.appendChild(popupOverlay); 

        // Create Popup Box
        let popupBox = document.createElement("div");

        popupBox.className = "popup-box";

        // Create Popup Image
        let popupImg = document.createElement("img");
        
        popupImg.src = preview.previousElementSibling.src;

        popupBox.appendChild(popupImg);

        document.body.appendChild(popupBox);
        
        // Create Close Button
        let closeBtn = document.createElement("span");

        closeBtn.className = "close-btn";

        let closeBtnText = document.createTextNode("X");

        closeBtn.appendChild(closeBtnText);

        popupBox.appendChild(closeBtn);

        });
    });

    // Remove The Popup Box 
    document.addEventListener("click", (e) => {

        if(e.target.className == "close-btn") {

            e.target.parentNode.remove();

            document.querySelector(".popup-overlay").remove();
        }
    });

    // Show Scroll To Top Button And Trigger It
    $(window).on("scroll", function(){

        $(this).scrollTop() > $("header").innerHeight() ? $(".scroll-img").fadeIn(600) : $(".scroll-img").fadeOut(600);
    });

    $(".scroll-img").on("click", function(){

        $("html, body").animate({scrollTop : 0}, 1500)
    });
}); 

// Loading Screen
$(window).on("load", function() {

    $(".loader").fadeOut(4000, function() {

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function() {

            $(this).remove();
        });
    });
});


