const Player = require('./Player');

class Arena {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    startMatch() {
        while (this.playerA.isAlive() && this.playerB.isAlive()) {
            if (this.playerA.health < this.playerB.health) {
                console.log("Player A has health before turn : ", this.playerA.health)
                console.log("Player B has health before turn : ", this.playerB.health)

                this.executeTurn(this.playerA, this.playerB);

                console.log("Player A has health after turn : ", this.playerA.health)
                console.log("Player B has health after turn : ", this.playerB.health)
            } else {
                console.log("Player A has health before turn : ", this.playerA.health)
                console.log("Player B has health before turn : ", this.playerB.health)

                this.executeTurn(this.playerB, this.playerA);

                console.log("Player A has health after turn : ", this.playerA.health)
                console.log("Player B has health after turn : ", this.playerB.health)
            }
            console.log("**************************")
        }
        this.determineWinner();
    }

    executeTurn(attacker, defender) {
        const attackRoll = this.rollDice();
        const defendRoll = this.rollDice();

        const damage = attacker.attackValue() * attackRoll - defender.defendValue() * defendRoll;
        if (damage > 0) {
            defender.takeDamage(damage);
        }
    }

    determineWinner() {
        if (this.playerA.isAlive()) {
            console.log("Player A wins!");
        } else if (this.playerB.isAlive()) {
            console.log("Player B wins!");
        } else {
            console.log("It's a draw!");
        }
    }
}

module.exports = Arena;
