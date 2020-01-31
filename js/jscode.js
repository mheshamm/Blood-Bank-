var btnContainer = document.getElementByClassName("img");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("like");

// Loop through the buttons and add the active class to the current/clicked button

  btns.addEventListener("click", function() {
    btns.classList.add(" active");
    
   
    
    
  };
}