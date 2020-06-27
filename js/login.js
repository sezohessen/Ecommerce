
jQuery(document).ready(function($) {
    $(".login-content .input-div>div>input").focus(function(){
        $(this).parent().parent().animate({
            borderColor:"#cc17f6"
        }, 1000, function() {
        });
    });
    $(".login-content .input-div>div>input").focusout(function(){
        $(this).parent().parent().animate({
            borderColor:"#d9d9d9"
        }, 600, function() {
        });
    });
    $(".login-content #register").click(function(){
        $(".login-content .login").addClass('hidden');
        $(".login-content .register").removeClass('hidden');
        $( ".login-content .register" ).animate({
            left:0
        }, 800, function() {
        // Animation complete.
        });
          $(".login-content .login").css("left","-200px");
    });
    $(".login-content #login").click(function(){
        $(".login-content .register").addClass('hidden');
        $(".login-content .login").removeClass('hidden');
        $( ".login-content .login" ).animate({
            left:0
        }, 800, function() {
        // Animation complete.
        });
        $(".login-content .register").css("left","-200px");
    });
});