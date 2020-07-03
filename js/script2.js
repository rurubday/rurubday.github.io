$(document).ready(function() {
    $('#loading').delay(7000).fadeOut();
    $('#one').fadeOut();
    $('#warning').fadeOut();
    $('#content').fadeOut();
    $('#vid').fadeOut();
    $('#butt').fadeOut();
    $('#all').fadeOut();
    $('#mai').click(function(){
        if(check==1){
        $('#mai').fadeOut();
        $('#all').fadeIn().delay(1000);
        $('#one').fadeIn();
        $('#one').delay(2000).fadeOut();
        $('#warning').delay(2000).fadeIn();
        $('#ahead').click(function(){
            $('#warning').fadeOut();
            $('#content').delay(2000).fadeIn();
        });
        $('#more').click(function(){
            $('#content').fadeOut();
            $('#vid').delay(2000).fadeIn();
            $('#butt').delay(2000).fadeIn();
        });
        $('#play').click(function(){
            document.getElementById("ruru").play(); 
        });
    }
    else{
        alert("yo");
        
    }
    });
    
    
     
});
