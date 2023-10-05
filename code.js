function FormValidate() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("e-mail").value;
    var numper = document.getElementById("numper").value;
    var error = document.getElementById("error");
    var text ="";
    if (username.length<5) {
        
        text= "please enter valid your name";
        error.innerHTML = text;
        return false;
        
    }
    else if(email.indexOf("@") == -1 || email.length<10){
        text = " please enter valid your e-mail";
        error.innerHTML =text;
        return false;
      

    }
    else if (isNaN(numper)|| numper.length != 11) {
        text = " please enter valid your phone numper";
        error.innerHTML =text;
        return false;
        
    }
    else {
        alert("Done");
        return true;
        

    }
    
}