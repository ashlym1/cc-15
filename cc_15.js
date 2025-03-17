// Task 1 - Base Structure
const form = document.getElementById("riskForm"); // Selects the form
const riskDashboard = document.getElementById("riskDashboard"); // Selects the risk container
const increaseRiskLevelsButton = document.getElementById("increaseRiskLevels"); // keeping it at the top; function should run  without being blocked.

// Task 2, 3 - Adding and Removing Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div"); // Creates a risk card
    riskCard.classList.add("riskCard"); // Assigns base class for styling

    // Task 6: Prevent clicks inside the risk card from affecting the dashboard
    riskCard.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the event bubbling
        console.log(`${riskName}'s risk card clicked.`);
    });

    // Task 4: Categorizing by risk level
    if (riskLevel.toLowerCase() === "low") {
        riskCard.classList.add("low"); // Green =low risk
    } else if (riskLevel.toLowerCase() === "medium") {
        riskCard.classList.add("medium"); // Yellow = medium risk
    } else if (riskLevel.toLowerCase() === "high") {
        riskCard.classList.add("high"); // Red =high risk
    }

    // Risk details:
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = riskName;

    const levelPara = document.createElement("p");
    levelPara.textContent = `Level: ${riskLevel}`;

    const departmentPara = document.createElement("p");
    departmentPara.textContent = `Department: ${department}`;

    // Resolve Button - The risk card goes away when clicked
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents bubbling on the dashboard
        console.log(`Resolved: ${riskName} (${riskLevel}) from ${department}`); // Logs when resolved button is clicked 
        riskDashboard.removeChild(riskCard); // Removes the risk item when resolved
    });

    // Appends the elements to the risk card
    riskCard.appendChild(nameHeading);
    riskCard.appendChild(levelPara);
    riskCard.appendChild(departmentPara);
    riskCard.appendChild(resolveButton);

    // Appends the risk card to the dashboard
    riskDashboard.appendChild(riskCard);
}

// 
increaseRiskLevelsButton.addEventListener("click", function () {
    console.log("Increase Risk Levels button clicked."); 

    let riskCards = document.getElementsByClassName("riskCard"); // Get all risk cards

    Array.from(riskCards).forEach(riskCard => {
        let levelPara = Array.from(riskCard.querySelectorAll("p"))  
            .find(p => p.textContent.startsWith("Level: ")); // Ensure correct "Level" paragraph

        if (!levelPara) return; // If no level paragraph found, return

        // Extract current risk level
        let currentLevel = levelPara.textContent.replace("Level: ", "").trim().toLowerCase();
        let newLevel = currentLevel; // Default to the same level

        // logic for risk level change
        if (currentLevel === "low") {   
            newLevel = "Medium"; // Low goes to Medium
        } else if (currentLevel === "medium") { 
            newLevel = "High"; // Medium  goes to High
        } // High risk  stays High

        // Update text content with new level
        levelPara.textContent = `Level: ${newLevel}`;

        // Remove previous risk level classes and apply the new one
        riskCard.classList.remove("low", "medium", "high"); 
        riskCard.classList.add(newLevel.toLowerCase());
    });
});

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

// **Test Cases**
  // task 2: 
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations"); 
 // task 3: 
addRiskItem("Market Fluctuations", "High", "Finance"); 
// task 4: 
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
// task 5: 
addRiskItem("Employee Retention", "Low", "HR");
// task 6: when clicking inside a risk card it should not trigger a dashboard-wide event.
