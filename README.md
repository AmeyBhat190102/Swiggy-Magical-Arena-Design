# Magical Arena

## Problem Statement

Design a Magical Arena where two players engage in combat until one player's health reaches 0. Each player is defined by three attributes: health, strength, and attack, all of which are positive integers. Players take turns attacking and defending using dice rolls. The attacking player rolls the attacking dice, and the defending player rolls the defending dice. The damage inflicted is determined by multiplying the attack attribute by the dice roll outcome, and the damage defended is determined by multiplying the strength attribute by the defending dice roll outcome. The difference between these values reduces the health of the defending player. The player with lower health attacks first at the start of the match. The game ends when one player's health reaches 0.

### Example:
- Player A: 50 health, 5 strength, 10 attack
- Player B: 100 health, 10 strength, 5 attack

#### Turn 1:
- Player A attacks (dice roll: 5) => Attack damage = 5 * 10 = 50
- Player B defends (dice roll: 2) => Defending strength = 10 * 2 = 20
- Player B's health is reduced by 30 (100 - 30 = 70)

#### Turn 2:
- Player B attacks (dice roll: 4) => Attack damage = 4 * 5 = 20
- Player A defends (dice roll: 3) => Defending strength = 5 * 3 = 15
- Player A's health is reduced by 5 (50 - 5 = 45)

The game continues until one player's health reaches 0.

## Solution Overview

### Implementation Details

The solution is implemented using Node.js with the following structure:

1. **Player Class (`Player.js`):**
   - Attributes: health, strength, attack.
   - Methods: `isAlive()`, `takeDamage(damage)`, `attackValue()`, `defendValue()`.

2. **Arena Class (`Arena.js`):**
   - Attributes: playerA, playerB.
   - Methods: `rollDice()`, `startMatch()`, `executeTurn(attacker, defender)`, `determineWinner()`.

3. **Main File (`index.js`):**
   - Initializes two players.
   - Initializes the arena with the two players.
   - Starts the match.

4. **Unit Tests (`test/test.js`):**
   - Tests player creation, attack and defense mechanisms, and match outcomes.

### Running the Application

1. Ensure you have Node.js installed.
2. Clone the repository.
3. Navigate to the project directory.
4. Run the application:

    ```sh
    node src/index.js
    ```

### Running Tests

To run the tests, execute the following command:

```sh
node test/test.js
