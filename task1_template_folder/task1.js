/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: 
      Date:   

      Filename: task1.js
*/
var submitButton = document.getElementById("submitButton");
var pwd = document.getElementById("pwd");
var pwd2 = document.getElementById("pwd2");


submitButton.addEventListener("click", function(event) {
      
      console.log("Submit button clicked");
   
      
      var validationMessage = "";
   
      
      if (!pwd.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
         validationMessage = "Your password must be at least 8 characters with at least one letter and one number.";
      }
      
      else if (pwd.value !== pwd2.value) {
         validationMessage = "Your passwords must match.";
      }
      
      else {
         validationMessage = "";
      }
   
      
      if (validationMessage) {
         alert(validationMessage);  
         event.preventDefault();  
      }
   });