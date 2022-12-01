function RegistrationPage(){
    var result = true;
    var a = document.forms.RegistrationPage.username.value;
    var b = document.forms.RegistrationPage.email.value;

    
     var username_v = /^[a-zA-Z0-9_-]+$/;
    var email_v = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   

    
    document.getElementById("email_message").innerHTML ="";
    document.getElementById("username_message").innerHTML ="";

 
      if (a==null ||  a=="" || username_v.test(a) == false){
    document.getElementById("username_message").innerHTML = "Please enter the correct information";
    result = false;
    }
    
    
    if (b==null || b=="" || email_v.test(b) == false){
    document.getElementById("email_message").innerHTML = "Email address empty or wrong format";
    result = false;
    }
    
    
   if(result == true) {
     document.getElementById("display").innerHTML= "Username:  " +a+ "<br>" +"Email:" + b + "<br>";
          document.getElementById("RegistrationPage").reset();
     } 
   
    
   
    }
    function ResetForm(){

    }