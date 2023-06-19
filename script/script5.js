$( document ).ready(function() {
    
    $("#accordion").click(function() {        
        setTimeout(function(){
            // console.log($("#accordion").find('.show').prev().find('span'));
            let a_status = $("#accordion").find('.show').prev().find('span').text();
            if(a_status == "+") { $("#accordion").find('.show').prev().find('span').text("-"); }
            // else { $("#accordion").find('span').text("+");  }
        }, 500);
    });
});