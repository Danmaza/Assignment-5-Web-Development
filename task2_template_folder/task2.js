/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: 
      Date:   

      Filename: task2.js
*/
document.addEventListener("DOMContentLoaded", function() {
let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

addButton.addEventListener("click", function() {
   
   if (customerName.value) {
      
      customers.push(customerName.value);

      
      generateCustomerList();

      
      status.textContent = `${customerName.value} added to the end of the queue`;

      
      customerName.value = "";
   } else {
      
      status.textContent = "Please enter a customer name.";
   }
});

searchButton.addEventListener("click", function() {
   
   let place = customers.indexOf(customerName.value) + 1; // +1 for 1-based index

   
   if (place === 0) {
      
      status.textContent = `${customerName.value} is not found in the queue.`;
   } else {
      
      status.textContent = `${customerName.value} found in position ${place} of the queue.`;
   }

   
   customerName.value = "";
});

removeButton.addEventListener("click", function() {
   let index = customers.indexOf(customerName.value); 
   if (index !== -1) {
      customers.splice(index, 1); 
      generateCustomerList(); 
      status.textContent = `${customerName.value} removed from the queue.`;
   } else {
      status.textContent = `${customerName.value} is not found in the queue.`;
   }
   customerName.value = ""; 
});

topButton.addEventListener("click", function() {
   let topCustomer = customers.shift(); 
   if (topCustomer) {
      status.textContent = `Top customer: ${topCustomer} removed from the queue.`;
      generateCustomerList(); 
   } else {
      status.textContent = "No customers to remove from the queue.";
   }
});

});