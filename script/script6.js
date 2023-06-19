$( document ).ready(function() {
    
    $(".btn-group").click(function(e) {        
        setTimeout(function(){                      
            let val = e.target.dataset.btnNum;
            $("div[class^='product-']").addClass('p-not-active');
            $("div[class^='product-']").removeClass('startAnimation');
            $(".project").removeClass('startAnimation');           
            
            switch (val){
            
            case "1":
                console.log(1);
                $(".product-1").removeClass('p-not-active');
                
                setTimeout(function(){
                    $(".product-1").addClass('startAnimation');
                    $(".project").addClass('startAnimation');                
                }, 0);
                break;
            case "2":
                console.log(2);
                $(".product-2").removeClass('p-not-active');
                setTimeout(function(){
                    $(".product-2").addClass('startAnimation');
                    $(".project").addClass('startAnimation');
                }, 0);
                break;
            case "3":
                console.log(3);
                $(".product-3").removeClass('p-not-active');
                
                setTimeout(function(){
                    $(".product-3").addClass('startAnimation');
                    $(".project").addClass('startAnimation');
                }, 0);
                break;
            case "4":
                console.log(4);
                $(".product-4").removeClass('p-not-active');
               
                setTimeout(function(){
                    $(".product-4").addClass('startAnimation');
                    $(".project").addClass('startAnimation');
                }, 0);
                break;
            default:
                console.log(0);
                $("div[class^='product-']").removeClass('p-not-active');
                
                setTimeout(function(){
                    $(".product-5").addClass('startAnimation');
                    $(".project").addClass('startAnimation');
                }, 0);
                break;                        
            }          
        }, 100);
    });

    // counter increment 
    
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
  
     $(window).on('resize scroll', function() {
        if ($('.CounterArea').isInViewport()) {
            $('.counterP').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        } else {
            console.log("not in viewport")
        }
     });     
        
      
    
       
    
});