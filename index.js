


// form














let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  phone=id("phone"),
  form = id("form"),
  
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    engine(username, 0, "please enter your name");
    engine(email, 1, "please enter your email");
    engine(phone,2,"enetr your phone number");
    engine(subject,3,"please you subject");

   
  });
 

  let engine = (id, serial, message) => {

    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
      
      // icons
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    } 
    
    else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
      
      // icons
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
    }
  }

 