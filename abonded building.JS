// VERSION ONE 
// ------------------------------------

const prompt = require('prompt-sync')();

console.log("You arrive at the abandoned building. The first-floor windows are covered in placards, some reading 'Arcane Market'. The posters are old and faded, depicting cryptic symbols, strange alchemical diagrams, and unsettling slogans like 'Trade Your Soul for Knowledge' and 'The Door Opens for the Worthy'. Some are torn at the edges, their paper curling with age, while others seem recently disturbed, as if someone had been inspecting them. The air is thick with dust, carrying a faint, metallic scent, and an unsettling silence lingers, broken only by the occasional creak of unseen movement. The wooden floor beneath your feet feels brittle, each step kicking up a thin haze of dust. Old shelves line the walls, their contents long gone, but faint outlines remain where objects once rested. A rusted lantern hangs from the ceiling, swaying slightly as if touched by an invisible hand. In the dim light, something shifts—a shadow just beyond your vision. The pull to explore further grows stronger, an unnatural curiosity gnawing at the edges of your mind.\n");

console.log("For a moment, you wonder about the Arcane Market. What was it? A secret society? A black-market for forbidden artifacts? You feel an undeniable urge to find out, to step into its mysteries—perhaps another time, but soon.\n");

console.log("What do you do?\n");
console.log("1. Look at the building again\n2. Leave\n3. Go inside\n");
let choice = prompt("Your choice: ");
if (choice === "1") {
    console.log("\nYou take a closer look. The architecture is old but sturdy. Graffiti covers parts of the walls, some in an unknown script. A faded sign reads 'Entry Forbidden'.\n");
} else if (choice === "2") {
    console.log("\nYou decide this place isn't worth the risk and leave. Maybe another time...\n");
    process.exit();
} else if (choice === "3") {
    console.log("\nYou push the door open, and it creaks loudly. Inside, the first floor is dimly lit. Dust motes float in the air. Ahead, you see a ladder leading to the second floor, a cabinet door marked 'Boss', and a dark stairway to the basement.\n");
} else {
    console.log("\nInvalid choice. Try again.\n");
    process.exit();
}

console.log("Where do you go?\n");
console.log("1. Climb the ladder to the second floor\n2. Enter the Boss's cabinet\n3. Descend into the basement\n");
let secondChoice = prompt("Your choice: ");
if (secondChoice === "1") {
    console.log("\nYou climb up and find yourself facing massive metal doors, resembling those of a high-tech lab. They are locked. You need a key or the help of your hacker friend.\n");
    console.log("Choices: Go back | Try opening them using dark powers\n");
    let labChoice = prompt("Your choice: ").toLowerCase();
    if (labChoice.includes("dark")) {
        console.log("\nYou attempt to force the doors open with your darkness powers, but the overwhelming energy backlash drains your humanity. You are not strong enough yet.\nGAME OVER.\n");
        process.exit();
    } else {
        console.log("\nYou decide to return downstairs.\n");
    }
} else if (secondChoice === "2") {
    console.log("\nInside the Boss's cabinet, everything is charred, as if burned in a fire. The air is heavy with the scent of old ash and decay. The wooden walls are blackened, their surfaces cracked and brittle. On the wall, mysterious graffiti in an unknown language glows faintly, its eerie symbols pulsing like dying embers.Scattered across the floor, rusted and broken weapons lie abandoned—blades dulled, firearms empty, their purpose long forgotten. Amidst the debris, faded photographs cling to the walls, their edges curled and faces barely discernible beneath layers of soot.At the center of the room, a massive wooden table leans on one side, as if hastily shoved into place as a barricade. Deep gashes mar its surface, claw-like marks cutting through the wood. Chairs lay overturned, shattered pieces littering the ground.A single, flickering light bulb dangles from the ceiling, swaying slightly, casting shifting shadows that make the graffiti seem almost alive. The silence is absolute, save for the faint creaking of the damaged structure. Something about this place feels wrong—as if the past lingers, waiting to be disturbed.\n");
        
    console.log("Choices: Go back | Try drawing the symbol\n");
    let bossChoice = prompt("Your choice: ").toLowerCase();
    if (bossChoice.includes("draw")) {
        console.log("\nYou trace the symbol with your finger. Suddenly, a shadowy figure emerges from the wall and bolts towards the basement! Without thinking, you chase after it.\n");
    } else {
        console.log("\nYou decide to leave the office and return to the main hall.\n");
    }
} else if (secondChoice === "3") {
    console.log("\nThe basement is pitch black. A distant mechanical scratching sound echoes. You realize too late—the figure you saw wasn't trying to escape... it was leading you here.\n");
    console.log("Choices: Try to run out | Hide | Prepare to fight\n");
    let basementChoice = prompt("Your choice: ").toLowerCase();
    if (basementChoice.includes("run")) {
        console.log("\nAs you turn to flee, the darkness engulfs you. You never make it out.\nGAME OVER.\n");
        process.exit();
    } else if (basementChoice.includes("hide")) {
        console.log("\nYou press yourself against the cold stone wall, controlling your breathing. Something moves past you, unaware of your presence.\n");
    } else if (basementChoice.includes("fight")) {
        console.log("\nYou grip your weapon tightly, your heart racing as you ready yourself for whatever lurks in the dark. Then, in the fading moonlight slipping through the half-open basement doors, you see it.\n");
        console.log("A hulking figure stands in the shadows, its body adorned with scars, black veins snaking across its chitinous armor. At its chest, a crystal pulses with an ominous red and violet glow. Its claws tremble slightly, and its hollow eyes lock onto yours, sending a chill down your spine. The creature takes a step forward, its beastlike breath echoing in the silence. The air grows thick with tension, and you know the fight for your survival is about to begin.\n");
        
        // Combat mechanics start here
        let playerHealth = 100;
        let monsterHealth = 150;
        let monsterAttack = 20;
        let strongHitDamage = 50; // Strong hit on the crystal
        let playerAttackDamage = 30;
        let playerDefense = 10;

        while (monsterHealth > 0 && playerHealth > 0) {
            console.log(`\nYour Health: ${playerHealth} | Monster's Health: ${monsterHealth}`);
            console.log("Choices: Attack | Dodge | Use magic");
            let fightChoice = prompt("Your choice: ").toLowerCase();

            if (fightChoice.includes("attack")) {
                console.log("\nYou lunge at the creature and strike!\n");
                let damage = (Math.random() < 0.2) ? strongHitDamage : playerAttackDamage; // 20% chance to land a strong hit on the crystal
                monsterHealth -= damage;
                console.log(`You hit the monster for ${damage} damage.`);
                if (damage === strongHitDamage) {
                    console.log("\nThe crystal in the monster's chest shatters! The creature stumbles, letting out a guttural scream.\n");
                }
            } else if (fightChoice.includes("dodge")) {
                console.log("\nYou quickly dodge the monster's attack.\n");
                playerHealth -= monsterAttack - playerDefense;
                console.log("You take a glancing blow from the monster, but you manage to dodge most of it.");
            } else if (fightChoice.includes("magic")) {
                console.log("\nYou cast a spell, hoping to weaken the monster.\n");
                let magicDamage = Math.floor(Math.random() * 40) + 10; // Magic damage between 10-50
                monsterHealth -= magicDamage;
                console.log(`Your magic strike hits the monster for ${magicDamage} damage.`);
            } else {
                console.log("\nInvalid choice. The monster attacks you!\n");
                playerHealth -= monsterAttack;
            }

            if (monsterHealth > 0) {
                console.log("\nThe monster attacks!\n");
                playerHealth -= monsterAttack;
                console.log(`The monster claws at you for ${monsterAttack} damage.`);
            }
        }

        if (playerHealth <= 0) {
            console.log("\nYou have been defeated. GAME OVER.\n");
        } else {
            console.log("\nYou have defeated the monster!\n");
            // New choices after monster's defeat
            console.log("\nYou stand victorious over the fallen beast, its lifeless body still glowing faintly in the moonlight.\n");
            console.log("Choices: Explore the basement | Run out | Leave the building and cut out the crystal from the monster's chest");
            let nextChoice = prompt("Your choice: ").toLowerCase();

            if (nextChoice.includes("explore")) {
                console.log("\nYou step cautiously through the dark basement. As you move deeper, you find the remnants of a dark ritual...\n");
                console.log("A pentagram is etched into the floor, surrounded by strange, burned symbols. The air is thick with the remnants of arcane power.\n");

                console.log("On the ground, you find a set of clothes, old and tattered. They seem to belong to one of the sectants, stained with something dark. Nearby, a note with strange, indecipherable text lies half-buried in the dust. Lastly, you notice an old key, glinting in the dim light.\n");

                console.log("Choices: Pick up the clothes | Pick up the note | Pick up the key");
                let itemChoice = prompt("Your choice: ").toLowerCase();
                let itemPicked = "";

                if (itemChoice.includes("clothes")) {
                    itemPicked = "clothes";
                } else if (itemChoice.includes("note")) {
                    itemPicked = "note";
                } else if (itemChoice.includes("key")) {
                    itemPicked = "key";
                } else {
                    console.log("\nInvalid choice.");
                    process.exit();
                }

                console.log(`\nYou pick up the ${itemPicked}. +1 item in backpack.\n`);
            }

            // Now let player attempt to extract crystal
            console.log("\nYou decide to leave the building and try to extract the crystal from the monster's chest.\n");

            let extractionSuccess = Math.random() < 0.5; // 50% chance to successfully extract the crystal
            if (extractionSuccess) {
                console.log("\nYou manage to carefully extract the crystal from the monster's chest. It pulses with dark energy, and you feel a strange power coursing through your fingers.\n");
            } else {
                console.log("\nYou fail to remove the crystal. The monster's chest is too damaged and the crystal is firmly lodged inside.\n");
            }

            // Next, player will be prompted to explore first floor or leave
            console.log("\nChoices: Leave building | Explore first floor again");
            let finalChoice = prompt("Your choice: ").toLowerCase();
            if (finalChoice.includes("explore")) {
                console.log("\nAs you explore the first floor once more, you hear the unmistakable sound of a police drone approaching from the distance. The air seems to thicken with the sound of distant engines.\n");
                console.log("With a sinking feeling, you realize the building is no longer safe. You decide to leave quickly before you are caught.\n");
                process.exit();
            } else {
                console.log("\nYou decide to leave the building, walking away from the abandoned place, knowing you have ventured far enough.\n");
                process.exit();
            }
        }
    }
} else {
    console.log("\nInvalid choice. The darkness claims you.\nGAME OVER.\n");
    process.exit();
}
