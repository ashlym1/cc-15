// Task 1 - Base Structure
console.log("Risk Dashboard Loaded"); // * seeing if the code is running :) 
const form = document.getElementById("riskForm"); // Selects the  form
const riskDashboard = document.getElementById("riskDashboard"); // selects the  risk container

// Task 2 & 3 - Adding and Removing Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div"); // Creates a risk card
    riskCard.classList.add("riskCard", riskLevel.toLowerCase()); // Assigns class for styling based on the level

    // Risk details:
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = riskName;

    const levelPara = document.createElement("p");
    levelPara.textContent = `Level: ${riskLevel}`;

    const departmentPara = document.createElement("p");
    departmentPara.textContent = `Department: ${department}`;

    // Resolve Button - The risk card  goes away when clicked
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", function () {
        riskDashboard.removeChild(riskCard); //  Removes the risk item when resolved
    });

    // Appends the elements to the risk card
    riskCard.appendChild(nameHeading);
    riskCard.appendChild(levelPara);
    riskCard.appendChild(departmentPara);
    riskCard.appendChild(resolveButton);

    // Appends the  risk card to the  dashboard
    riskDashboard.appendChild(riskCard);
}

// Allows user to enter a new risk  
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents page refresh

    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;

    addRiskItem(riskName, riskLevel, department); // Calls function to create a new risk

    // Clearing the input fields after adding
    form.reset();
});  // to prevent any error/confusion on the console

// ** Test Cases :task 2 **
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations"); // Output should be : Two risk cards should appear on the dashboard.

