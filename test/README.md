## Test Cases

The tests are written to ensure that the game logic is functioning correctly. Below is a description of each test case and what it checks:

### 1. `testPlayerCreation()`

**Description:**

- Verifies that a player is correctly created with specified attributes.
- Checks if the `health` attribute is set correctly.

**Output:**

- `Player creation test passed`

### 2. `testAttackAndDefense()`

**Description:**

- Simulates a single turn where Player A attacks Player B.
- Verifies that both players are still alive after one turn.

**Output:**

- `Attack and defense test passed`

### 3. `testEqualAttributesMatch()`

**Description:**

- Simulates a match where both players have identical attributes.
- Verifies that the game concludes with one player being dead.

**Output:**

- `Equal attributes match test passed`

### 4. `testMaxDiceRolls()`

**Description:**

- Simulates a scenario where both players roll the maximum value (6) on the dice.
- Verifies that the damage calculations and health reductions are correct.

**Output:**

- `Max dice rolls test passed`

### 5. `testMinDiceRolls()`

**Description:**

- Simulates a scenario where both players roll the minimum value (1) on the dice.
- Verifies that the health remains unchanged.

**Output:**

- `Min dice rolls test passed`

### 6. `testZeroAttackOrDefense()`

**Description:**

- Tests the edge case where either the attacker has zero attack or the defender has zero defense.
- Verifies that the game logic handles these cases correctly.

**Output:**

- `Zero attack or defense test passed`

### 7. `testIdenticalAttributesProgression()`

**Description:**

- Simulates a match where both players have identical attributes.
- Ensures that the game progresses and concludes with one player being the winner.

**Output:**

- `Identical attributes progression test passed`
