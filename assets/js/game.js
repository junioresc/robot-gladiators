/* Game States
"Win" - Player robot has defeated all enemy robots
 * Fight all enemy robots
 * Defeat each enemy robot
"Lose" - Player robot's health is zero or less */

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) {

        // Prompts the users if they want to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");
        console.log(promptFight);

        if (promptFight === "skip" || promptFight === "SKIP") {
            // Confirms user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // If yes (true), leave fight
            if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // Subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
            }
            // If no (false), ask question again by running fight() again
            else {
                fight();
            }
            window.alert(playerName + " has chosen to skip the fight!");
        }

        // Subtract playerAttack from enemyHealth and the result updates the enemyHealth variable.
        enemyHealth = enemyHealth - playerAttack;

        // Log the result to check if it worked
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // Check enemy health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
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
        break;
        }
        else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

var startGame = function() {
    // reset player stats
    playerHealth= 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
};

// function to enn the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    // asks player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restarts game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

startGame();