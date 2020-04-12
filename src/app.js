import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css'
import './custom.css';
(function ($) {

    /*** scrollspy ***/
    $('body').scrollspy({ target: '.navbar-scrollspy' })
    
    
    /*** mini top ***/
    $(document).on("scroll",function(){
	if($(document).scrollTop()>100){
	    $("header").addClass("mini-top");
	} else{
	    $("header").removeClass("mini-top");
	}
    });
    
  
    
}(jQuery))