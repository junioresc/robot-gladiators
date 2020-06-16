var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

if (playerHealth > 0) {
    console.log("Your player is still alive!");
}

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alerts users they are starting a round
    window.alert("Welcome to Robot Gladiators!");

    // Prompts the users if they want to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");
    console.log(promptFight);

    if (promptFight === "fight" || promptFight === "FIGHT") {

        // Subtract playerAttack from enemyHealth and the result updates the enemyHealth variable.
        enemyHealth = enemyHealth - playerAttack;

        // Log the result to check if it worked
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // Check enemy health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        }
        else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract enemyAttack from playerHealth and the result updates the playerHealth variable.
        playerHealth = playerHealth - enemyAttack;
        
        // Log the result to check if it worked
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        }
        else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert("You need to pick a valid option. Try Again!");
    }
};

fight();