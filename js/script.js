$(document).ready(function(){
    $(document).on("click", ".active", desktopDisplayBio)

    function desktopDisplayBio() {
        $("#brief").addClass("showMe");
        $("#desktopHeader").addClass("move");
    }

    $("#hwHolder1").hover(
        function(){
            $("#hwHolder1").attr("style","opacity:1.0;");
            $("#hwHolder2").addClass("after");
            $("#hwHolder3").addClass("after");
        },
        function(){
            $("#hwHolder1").removeAttr("style","opacity:1.0;");
            $("#hwHolder2").removeClass("after");
            $("#hwHolder3").removeClass("after");    
        }
    );

    $("#hwHolder2").hover(
        function(){
            $("#hwHolder2").attr("style","opacity:1.0;");
            $("#hwHolder1").addClass("after");
            $("#hwHolder3").addClass("after");
        },
        function(){
            $("#hwHolder2").removeAttr("style","opacity:1.0;");
            $("#hwHolder1").removeClass("after");
            $("#hwHolder3").removeClass("after");    
        }
    );

    $("#hwHolder3").hover(
        function(){
            $("#hwHolder3").attr("style","opacity:1.0;");
            $("#hwHolder1").addClass("after");
            $("#hwHolder2").addClass("after");
        },
        function(){
            $("#hwHolder3").removeAttr("style","opacity:1.0;");
            $("#hwHolder1").removeClass("after");
            $("#hwHolder2").removeClass("after");    
        }
    );
        
})