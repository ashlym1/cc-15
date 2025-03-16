// Task 1 - Base Structure
console.log("Risk Dashboard Loaded"); // * seeing if the code is running :) 
const form = document.getElementById("riskForm"); // Selects the  form
const riskDashboard = document.getElementById("riskDashboard"); // selects the  risk container

// Task 2- Adding risk items dynamically 
function addRiskItem(riskName,riskLevel,deparment) {
    const riskCard=document.createElement("div"); // creates a risk card 
    riskCard.classList.add("riskCard",riskLevel.toLowerCase()); //assigns a class for styling based on their levels 
    // Risk detaisl : 
    const nameHeading= document.createElement("h3");
    nameHeading.textContent= riskName;
    const levelPara = document.createElement("p");
    levelPara.textContent=`Level:${riskLevel}`;
    const deparmentPara= document.createElement("p");
    departmentPara.textContent = `Department: ${department}`;

    // Resolve  Button; the risk card  goes away once clicked 
    const resolveButton=document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", function () {
        riskDashboard.removeChild(riskCard); // Removes the risk item when resolved
    });
 // Append elements to the risk card
 riskCard.appendChild(nameHeading);
 riskCard.appendChild(levelPara);
 riskCard.appendChild(departmentPara);
 riskCard.appendChild(resolveButton);

 // Append risk card to dashboard
 riskDashboard.appendChild(riskCard);
}

// This allows the user to enter a new risk
form.addEventListener("submit", function (event) {
 event.preventDefault(); // Prevents page refresh

 const riskName = document.getElementById("riskName").value;
 const riskLevel = document.getElementById("riskLevel").value;
 const department = document.getElementById("department").value;

 addRiskItem(riskName, riskLevel, department); // Calls function to create a new risk
    // Clearing the input fields after adding
    form.reset();
});


// ** Test Cases **
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");


