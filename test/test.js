const Player = require('../src/Player');
const Arena = require('../src/Arena');

function testPlayerCreation() {
    const player = new Player(50, 5, 10);
    console.assert(player.health === 50, 'Player creation test failed');
    console.log('Player creation test passed');
}

function testAttackAndDefense() {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);
    const arena = new Arena(playerA, playerB);

    arena.executeTurn(playerA, playerB);

    console.assert(playerA.isAlive(), 'Player A should be alive');
    console.assert(playerB.isAlive(), 'Player B should be alive');
    console.log('Attack and defense test passed');
}

function testMatchOutcome() {
    const playerA = new Player(1, 1, 1);
    const playerB = new Player(100, 10, 10);
    const arena = new Arena(playerA, playerB);

    arena.startMatch();

    console.assert(!playerA.isAlive(), 'Player A should be dead');
    console.assert(playerB.isAlive(), 'Player B should be alive');
    console.log('Match outcome test passed');
}

testPlayerCreation();
testAttackAndDefense();
testMatchOutcome();
