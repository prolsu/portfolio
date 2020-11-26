$(document).ready(function(){
    
    $(".active").on("click",function(){

        $("#brief").addClass("showMe");
        $("#desktopHeader").addClass("move");
    })

    $("#hwHolder1").hover(
        function(){
            $("#hwHolder2").addClass("after");
            $("#hwHolder3").addClass("after");
        },
        function(){
            $("#hwHolder2").removeClass("after");
            $("#hwHolder3").removeClass("after");    
        }
    );

    $("#hwHolder2").hover(
        function(){
            $("#hwHolder1").addClass("after");
            $("#hwHolder3").addClass("after");
        },
        function(){
            $("#hwHolder1").removeClass("after");
            $("#hwHolder3").removeClass("after");    
        }
    );

    $("#hwHolder3").hover(
        function(){
            $("#hwHolder1").addClass("after");
            $("#hwHolder2").addClass("after");
        },
        function(){
            $("#hwHolder1").removeClass("after");
            $("#hwHolder2").removeClass("after");    
        }
    );

})