const Player = require('../src/Player');
const Arena = require('../src/Arena');

function testPlayerCreation() {
    console.log("Running testPlayerCreation test - ")
    const player = new Player(50, 5, 10);
    console.assert(player.health === 50, 'Player creation test failed');
    console.log('Player creation test passed');
    console.log("*****************************************************");
    console.log();
}

function testAttackAndDefense() {
    console.log("Running testAttackAndDefense test - ")
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);
    const arena = new Arena(playerA, playerB);

    arena.executeTurn(playerA, playerB);

    console.assert(playerA.isAlive(), 'Player A should be alive');
    console.assert(playerB.isAlive(), 'Player B should be alive');
    console.log('Attack and defense test passed');
    console.log("*****************************************************");
    console.log();
}

function testEqualAttributesMatch() {
    console.log("Running testEqualAttributesMatch test - ")
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(50, 5, 10);
    const arena = new Arena(playerA, playerB);

    arena.startMatch();

    console.assert(playerA.isAlive() || playerB.isAlive(), 'At least one player should be alive');
    console.assert(!(playerA.isAlive() && playerB.isAlive()), 'Both players cannot be alive');
    console.log('Equal attributes match test passed');
    console.log("*****************************************************");
    console.log();
}

function testMaxDiceRolls() {
    console.log("Running testMaxDiceRolls test = ")
    const playerA = new Player(100, 10, 10);
    const playerB = new Player(100, 10, 10);
    const arena = new Arena(playerA, playerB);

    const attackRoll = 6;
    const defendRoll = 6;

    const attackDamage = playerA.attackValue() * attackRoll;
    const defenseValue = playerB.defendValue() * defendRoll;
    const netDamage = attackDamage - defenseValue;

    playerB.takeDamage(netDamage > 0 ? netDamage : 0);

    console.log("Health of A : ", playerA.health)
    console.log("Health of B : ", playerB.health)

    console.assert(playerB.health === 40, 'Player B should have 40 health left');
    console.log('Max dice rolls test passed');
    console.log("*****************************************************");
    console.log();
}

function testMinDiceRolls() {
    console.log("Runnning testMinDiceRolls test - ")
    const playerA = new Player(100, 10, 10);
    const playerB = new Player(100, 10, 10);
    const arena = new Arena(playerA, playerB);

    const attackRoll = 1;
    const defendRoll = 1;

    const attackDamage = playerA.attackValue() * attackRoll;
    const defenseValue = playerB.defendValue() * defendRoll;
    const netDamage = attackDamage - defenseValue;

    playerB.takeDamage(netDamage > 0 ? netDamage : 0);

    console.assert(playerB.health === 100, 'Player B should have 100 health left');
    console.log('Min dice rolls test passed');
    console.log("*****************************************************");
    console.log();
}

function testZeroAttackOrDefense() {
    console.log("Running testZeroAttackOrDefense test - ")
    const playerA = new Player(100, 10, 0);
    const playerB = new Player(100, 0, 10);
    const arena = new Arena(playerA, playerB);

    arena.executeTurn(playerA, playerB);
    arena.executeTurn(playerB, playerA);

    console.log("Health of A : ", playerA.health)
    console.log("Health of B : ", playerB.health)
    console.assert(playerA.health < 100, 'Player A should have less than 100 health');
    console.assert(playerB.health === 100, 'Player B should have 100 health');
    console.log('Zero attack or defense test passed');
    console.log("*****************************************************");
    console.log();
}

function testIdenticalAttributesProgression() {
    console.log("Runnning testIdenticalAttributesProgression test - ")
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(50, 5, 10);
    const arena = new Arena(playerA, playerB);

    arena.startMatch();

    console.assert(playerA.isAlive() || playerB.isAlive(), 'At least one player should be alive');
    console.assert(!(playerA.isAlive() && playerB.isAlive()), 'Both players cannot be alive');
    console.log('Identical attributes progression test passed');
    console.log("*****************************************************");
    console.log();
}

testPlayerCreation();
testAttackAndDefense();
testEqualAttributesMatch();
testIdenticalAttributesProgression();
testZeroAttackOrDefense();
testMinDiceRolls();
testMaxDiceRolls();
