$(document).ready(function() {
    $("#navList li").fadeTo("fast", 0.5)


    $("#navList li").mouseenter(function(){
        $(this).fadeTo("fast", 1)

    });

    $("#navList li").mouseleave(function(){
        $(this).fadeTo("slow", 0.5)

    });

});