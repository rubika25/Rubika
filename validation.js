
console.log("It works !");

 //$('#tbdate').datepicker();

$(function() {
            $( "#tbdate" ).datepicker();
           
         });

$(function() {
            $("#tbtime").timepicker();
});


$( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );



function validate(){

    var name=document.querySelector('#name').value;

    var email=document.querySelector('#email').value;

    var mobile=document.querySelector('#mobile').value;

    var pass=document.querySelector('#pass').value;
	
	 

  if((name.length<5)||(pass.length<8)||(!(/^((\+){1}91){1}[1-9]{1}[0-9]{9}$/.test(mobile)))||(!(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)))){
	  if(name.length<5) {
	  document.querySelector('#nameError').textContent="name should be more than 5 characters";
     }
     else {
	  document.querySelector('#nameError').textContent="";
     }

     if(pass.length<8) {
	document.querySelector('#passError').textContent="password should be greater than 8 characters";
    }
     else {
	document.querySelector('#passError').textContent="";
    }
	
    if(!(/^((\+){1}91){1}[1-9]{1}[0-9]{9}$/.test(mobile))) {
	 document.querySelector('#mobileError').textContent="Enter the correct mobile number";
    }
    else {
    document.querySelector('#mobileError').textContent="";
    }
	
	
	if(!(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email))) {
	  	 document.querySelector('#emailError').textContent="Enter the correct email Id";
    }
	else {
		document.querySelector('#emailError').textContent="";

	}
   return false;
}}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 



  