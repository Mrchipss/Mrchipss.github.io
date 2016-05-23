$(document).ready(function() {
    $("#navList li").fadeTo("fast", 0)


    $("#navList li").mouseenter(function(){
        $(this).fadeTo("fast", 1)

    });

    $("#navList li").mouseleave(function(){
        $(this).fadeTo("slow", 0)

    });

});