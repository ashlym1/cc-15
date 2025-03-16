// Task 1 - Base Structure
console.log("Risk Dashboard Loaded"); // * seeing if the code is running :) 
const form = document.getElementById("riskForm"); // Selects the  form
const riskDashboard = document.getElementById("riskDashboard"); // selects the  risk container

// Task 2 & 3 - Adding and Removing Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div"); // Creates a risk card
    riskCard.classList.add("riskCard") // assigned based on the class for styling 
    // Task 4: Catergorizing by risk level 
    function addRiskItem(riskName, riskLevel, department) {
        const riskCard = document.createElement("div"); //creates a risk card
        riskCard.classList.add("riskCard"); //assigns base class for styling

  // Task 5; Prvents clicks insde the risk card from affecting the dashborad : 
  riskCard.addEventListener("click", function(event) {
    event.stopPropagation(); // No event bubbling
    console.log(`${riskName}'s risk card clicked.`);
});
    // Color coding based on  risk level(event) {
    // task 6: 
    event,stopPropaganda () ; //handaling event propaganda
    if (riskLevel.toLowerCase() === "low") {
        riskCard.classList.add("low");    // /*  Green- low risk  */
    } else if (riskLevel.toLowerCase() === "medium") {
        riskCard.classList.add("medium");    /* Yellow Medium risk */
    } else if (riskLevel.toLowerCase() === "high") {
        riskCard.classList.add("high");    /*  Red-  High risk */
    }

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
        console.log(`Resolved: ${riskName} (${riskLevel}) from ${department}`); // logs when the card has been resolved in the console
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

// ** Test Cases :task 2 *
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations"); // Output should be : Two risk cards should appear on the dashboard.
// ** Test Case: task 3* 
addRiskItem("Market Fluctuations", "High", "Finance"); // Clicking the Resolve button  should remove the  risk from the dashboard.





//**Test cases; task 4
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources"); // green  
//**Test cases; task 5  */
addRiskItem("Employee Retention", "Low", "HR"); // Clicking "Increase Risk Levels" should change it to "Medium".
// Test Case: task 6: / / Click inside a risk card should not trigger a dashboard-wide event.