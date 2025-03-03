const prompt = require('prompt-sync')();


console.log(`
        This game was made in collaboration with: 
    Alex Jungers, Diana Wilson, John Ng, and Angel Rene.
        Please check them out on GitHub.
    
        In the City of Light, years of prosperity and peace teetered on the edge of 
    ruin. A new force had taken root—an extremist faction calling themselves 
    the 'Soul Survivors.
    
        Their doctrine was cryptic, their motives shrouded in twisted faith, 
    but their actions spoke louder than any sermon.
        Missing persons posters lined the streets, their faces now whispers in the 
    wind. And then came the 'Darkness'—a creeping, unnatural force that 
    wrapped itself around the city's heart, swallowing whole districts in shadow. 
    
    There was no doubt about its source. The City stands at a crossroads. 
    The time for neutrality has passed.
    It's up to you to lead determine the fate of 'Light'.`
);

console.log('\nWhat do you wish to be called?\n');
const username = prompt('Sign here & sell your soul: ');
console.log(`\nMany warm greetings to you, ${username}! The road ahead looks hard won to travel.`);
console.log('\nChoose your faction!\n');

let charaFaction = `
    |NETRUNNER| Masters of the digital world.
    |ROGUE| Merceneries for hire.
    |CORPORATE SPY| The deal makers behind the curtians.
    |NOMAD| Roaming scavengers.
    |MAGE| Weave spells and potions in the streets.
`;


function firstFaction(){
    console.log(charaFaction);
    let choiceFaction = prompt('Your choice: ').toLowerCase().trim();

    if (choiceFaction === 'spy' || choiceFaction === 'corporate spy') {
        choiceFaction = 'corporate spy'; // Normalize 'spy' to 'corporate spy'
    }
    
    while (!['netrunner', 'rogue', 'mage', 'nomad', 'corporate spy', 'spy'].includes(choiceFaction)) {
        console.log("\nERROR 404: Access denied.");
        console.log("The neon lights flicker in anticipation, and The Darkness is closing in on you.\n");
        console.log("Please choose a valid faction.");
        console.log(charaFaction);
        choiceFaction = prompt('Your choice: ').toLowerCase();
        
        if (choiceFaction === 'spy' || choiceFaction === 'corporate spy') {
            choiceFaction = 'corporate spy'; // Normalize 'spy' to 'corporate spy'
        }    
    }
    return choiceFaction;
}
let choiceFaction = firstFaction();

let chara = {
    name : `${username.toUpperCase()}`,
    faction:`${choiceFaction.toUpperCase()}`,
    health: 100,
    sanity: 100,
    strength: 10,
    intelligence: 10,
    dexterity: 10,
    constitution: 10,
    wisdom: 10,
    charisma: 10,
    drinks: 0,
    elixir: 100,
    inventory: ['elixir'],
};

switch(choiceFaction) {
    case 'netrunner':
        console.log("\nYou've chosen to be a Netrunner. \nDigital realms bend to your will, but beware the dangers lurking in the code.\n");
        chara.health = 70;
        chara.sanity = 90;
        chara.intelligence = 15;
        chara.dexterity = 12;
        chara.constitution = 8;
        break;
    case 'rogue':
        console.log("\nYou've chosen to be a Rogue. \nSteel, neon, and blood — the city pays you to stay in the shadows.\n");
        chara.dexterity = 15;
        chara.intelligence = 8;
        chara.wisdom = 12;
        break;
    case 'mage':
        console.log("\nYou've chosen to be a Mage. \nThe magic of the old world clashes with the tech of the new. You are the bridge between the two.\n");
        chara.intelligence = 20;
        chara.wisdom = 15;
        chara.health = 50;
        break;
    case 'nomad':
        console.log("\nYou've chose to be a Nomad. \nThe wastelands are your home, but the city calls with its neon lights and promises.\n");
        break;
    case 'Corporate Spy':
    case 'Spy':
        console.log("\nYou've chosen The Corporate Spy. \nYou move in shadows, paid in secrets, manipulating the power players of the world.\n");
        chara.intelligence = 12;
        chara.charisma = 20;
        chara.sanity = 50;
        break;
    default:
        console.log("\nERROR 404: Access denied. \nThe neon lights flicker in aticipation and The Darkness is closing in on you.\n");
        return firstFaction();
}


//figured out that we needed to put the codes below, above the switch case code in order for it to work properly on the terminal.

/*tried using for else was problibatic. I needed a code that I can put multipule layers of
user input that mean the same thing. As much as I love for else, you can also add so many things
to each characteristic.*/
//had to use google and chatgbt to figure out the intracacies of using switch case



//insert faction action based choices here.//
function showStats() {
    console.log(`|NAME| ${chara.name}`);
    console.log(`|FACTION| ${chara.faction}`);
    console.log(`|HEALTH| ${chara.health}`);
    console.log(`|SANITY| ${chara.sanity}`);
    console.log(`|WISDOM| ${chara.wisdom}`);
    console.log(`|INTELLIGENCE| ${chara.intelligence}`); 
    console.log(`|CONSTITUTION| ${chara.constitution}`);
    console.log(`|STRENGTH| ${chara.strength}`);
    console.log(`|DEXTERITY| ${chara.dexterity}`); 
    console.log(`|CHARISMA| ${chara.charisma}`);
}

showStats();

let locations = {
    bar: false,
    home: false,
    hideOut: false,
    abandonedApt: false,
};

//tip = false;

function travel() {
    console.log(`\nWhere would you like to go?`);
    console.log(`1|BAR|`);
    console.log(`2|HOME|`);
    console.log(`3|ABANDONED APARTMENT|`)
    console.log(`4|KNOWN SOUL-SURVIVORS HIDE OUT|`)

    let choice = prompt(`Choose a number: `);
    switch (choice) {
        case `1`: locations.bar = true; break;
        case `2`: locations.home = true; break;
        case `3`: locations.abandonedApt = true; break;
        case `4`: locations.hideOut = true; break;
    }
};  
// Act choice
travel();
gameOver = false;

function checkGameOver() {
    if (chara.health <= 0) {
        console.log('As The Darkness closes in around you, your blood pools around you.');
        console.log('You start feeling colder as time passes and every body part goes numb.');
        console.log('GAME OVER flashes before your eyes one last time before The Darkness takes over.');
        process.exit();
    } else if (chara.sanity <= 0) {
        console.log('The Darkness has closed in around you. \nYou are no longer in control of your body.');
        console.log('You may only watch as the whispers become the screams of the people near by.');
        console.log('You can only watch as The Darkness takes over your body and tears througoh teh city you have grown to love.');
        process.exit();
    } else if (gameOver === true) {
        console.log('GAME OVER PLAYER. Turns out the game played you.');
        process.exit();
    };

};

// function addLocation(locationName) {
//     // Check if the location already exists
//     if (!location[locationName]) {
//         location[locationName] = false;  // Add new location as false so that it is not visited.
//         console.log(`${locationName} added to locations.`);
//     } else {
//         console.log(`${locationName} already exists.`);
//     }
// }

// function addItemToInventory(item) {
//     chara.inventory.push(item);
//     console.log(`${item} added to your inventory.`);
//     chara.inventory.forEach(item => console.log(item))
// }


// console.log('Where would you like to start your journey?');
// console.log(firstActChoice);
// let nextChoice = prompt('Your choice: ');

    //thank you alex and chat gbt for this function
    // console.log('\nAs you enter the city of Light. The civilians need a hero');
    // console.log('\nWhich road ahead do you wish to travel?');
    
    // console.log('1|BAR| 2|HOME|
    // 3|ABANDONED APARTMENT|
    // 4|KNOWN SOUL-SURVIVORS HIDE OUT|')



    // let location = {
    //     bar: false,
    //     home: false,
    //     hideOut: false,
    //     abandonedApt: false
    // };
    
    // console.log(firstActChoice)
    // locationChoice = prompt("\nChoose a number carefully: ").trim();

    // switch (locationChoice) {
    //     case "1" :
    //         location.bar = true;
    //         break;
    //     case "2" :
    //         location.home = true;
    //         break;
    //     case "3" :
    //         location.abandonedApt = true;
    //         break;
    //     case "4" :
    //         location.hideOut = true;
    //         break;
    //     default :
    //         console.log('Invalid choice. Please choose again:');
    //         actionChoice = prompt('Where to next? ').toLowerCase();
    //         return travel();
    // }


// function drinkSpending() {
//     for (chara.drinks = 0; chara.drinks <= 3; ++ chara.drinks) {
//         console.log(`You have choosen to take a drink. Beware what might be in them. ${chara.elixir}`)
//         chara.elixir -= 1;
//     }
// }

function drinking() {
    if (chara.drinks < 3) {
        console.log("Bartender tells you, 'Best take it slow.'\n");
        //drinkSpending()
        chara.sanity += 5;
        chara.elixir -= 1;
        console.log(`You feel refreshed and ready to face the challenges ahead.\nGain Sanity +5: ${chara.sanity}`)
        chara.drinks += 1;
    }
    else {
        console.log("\nBartender tells you, 'You're not looking too hot there.'")
        console.log("'What's the point of resistance?' you ask yourself as you keep drinking your worries at the bottom of the glass.")
        console.log("Inebrieated, you stumble out of the bar, and forget the purpose you once had.")
        console.log("---GAME OVER---");
        gameOver = true;
        checkGameOver();
    }
}

while (locations.bar === true) {
    home = false;
    abandonedApt = false;
    hideOut = false;
    console.log("\nYou're at the bar.");
    console.log("You can: |TALK| with the barkeep\n  |DRINK|  |LEAVE| the bar\n");
    barChoice = prompt("What do you do? ").toLowerCase();
        if (barChoice === 'talk') {
            console.log('\nBartender leans in across the narrow bar.\n He tells a story, that you only half hear over the noise of the bar.');
            console.log('What you can make out, \nits a local ledgend about the Soul-Survivors, monsterous rituals, an abandonded\n apartment, and a conviently broken ltach on a side window. ');
            tip = true;
        } else if (barChoice === 'drink') {
            drinking();
        } else if (barChoice === 'leave') {
            console.log("\nYou pay your respects and leave the bar.");
            visitBar = false;
            travel();
            return;
        }
}
// Make sure to make edit to 'chara' object by including 'drinks as a value/parameter. DONE TYYYY JOHN!

while (locations.home === true) {
    console.log('Congrats, you decided to go back to your stuffy apartment and leave the city to ruins.\n');
    gameOver = true; //have to add this or you end up in an infinate loop. It's kinda terrifying.
    checkGameOver();
};

while (locations.hideOut === true) {
    if (chara.inventory === 'keycard') {
        console.log('This is still being built out. Stay alive and stay tuned.');
        //please look into abandoned apartment first.
    } else {
        console.log("You walk right up to the front doors\n.A big burly man is there. He asks for your access card.\nYou do not have one and get punched for disturbing the man's night.\n");
        chara.health -= 10
        chara.sanity -= 5
        console.log(`You loose 10 health and 5 sanity. Here's how much you have left:\n |HEALTH| ${chara.health}\n |SANITY| ${chara.sanity} `);
        checkGameOver();
        travel(); //infinate loops will infinately give me nightmares.
    }
};

while (locations.abandonedApt === true) { //blaess diana for this code!!
    if (tip === true) {
        console.log('This is still being built out. Stay alive and stay tuned.');
        const prompt = require('prompt-sync')();
    };
};
// console.log("You arrive at the abandoned building. The first-floor windows are covered in placards, some reading 'Arcane Market'. The posters are old and faded, depicting cryptic symbols, strange alchemical diagrams, and unsettling slogans like 'Trade Your Soul for Knowledge' and 'The Door Opens for the Worthy'. Some are torn at the edges, their paper curling with age, while others seem recently disturbed, as if someone had been inspecting them. The air is thick with dust, carrying a faint, metallic scent, and an unsettling silence lingers, broken only by the occasional creak of unseen movement. The wooden floor beneath your feet feels brittle, each step kicking up a thin haze of dust. Old shelves line the walls, their contents long gone, but faint outlines remain where objects once rested. A rusted lantern hangs from the ceiling, swaying slightly as if touched by an invisible hand. In the dim light, something shifts—a shadow just beyond your vision. The pull to explore further grows stronger, an unnatural curiosity gnawing at the edges of your mind.\n");
// console.log("For a moment, you wonder about the Arcane Market. What was it? A secret society? A black-market for forbidden artifacts? You feel an undeniable urge to find out, to step into its mysteries—perhaps another time, but soon.\n");
// console.log("What do you do?\n");
// console.log("1. Look at the building again\n2. Leave\n3. Go inside\n");
// let choice = prompt("Your choice: ");
// if (choice === "1") {
//     console.log("\nYou take a closer look. The architecture is old but sturdy. Graffiti covers parts of the walls, some in an unknown script. A faded sign reads 'Entry Forbidden'.\n");
// } else if (choice === "2") {
//     console.log("\nYou decide this place isn't worth the risk and leave. Maybe another time...\n");
//     process.exit();
// } else if (choice === "3") {
//     console.log("\nYou push the door open, and it creaks loudly. Inside, the first floor is dimly lit. Dust motes float in the air. Ahead, you see a ladder leading to the second floor, a cabinet door marked 'Boss', and a dark stairway to the basement.\n");
// } else {
//     console.log("\nInvalid choice. Try again.\n");
//     process.exit();
// }
// console.log("Where do you go?\n");
// console.log("1. Climb the ladder to the second floor\n2. Enter the Boss's cabinet\n3. Descend into the basement\n");
// let secondChoice = prompt("Your choice: ");
// if (secondChoice === "1") {
//     console.log("\nYou climb up and find yourself facing massive metal doors, resembling those of a high-tech lab. They are locked. You need a key or the help of your hacker friend.\n");
//     console.log("Choices: Go back | Try opening them using dark powers\n");
//     let labChoice = prompt("Your choice: ").toLowerCase();
//     if (labChoice.includes("dark")) {
//         console.log("\nYou attempt to force the doors open with your darkness powers, but the overwhelming energy backlash drains your humanity. You are not strong enough yet.\nGAME OVER.\n");
//         process.exit();
//     } else {
//         console.log("\nYou decide to return downstairs.\n");
//     }
// } else if (secondChoice === "2") {
//     console.log("\nInside the Boss's cabinet, everything is charred, as if burned in a fire. The air is heavy with the scent of old ash and decay. The wooden walls are blackened, their surfaces cracked and brittle. On the wall, mysterious graffiti in an unknown language glows faintly, its eerie symbols pulsing like dying embers.Scattered across the floor, rusted and broken weapons lie abandoned—blades dulled, firearms empty, their purpose long forgotten. Amidst the debris, faded photographs cling to the walls, their edges curled and faces barely discernible beneath layers of soot.At the center of the room, a massive wooden table leans on one side, as if hastily shoved into place as a barricade. Deep gashes mar its surface, claw-like marks cutting through the wood. Chairs lay overturned, shattered pieces littering the ground.A single, flickering light bulb dangles from the ceiling, swaying slightly, casting shifting shadows that make the graffiti seem almost alive. The silence is absolute, save for the faint creaking of the damaged structure. Something about this place feels wrong—as if the past lingers, waiting to be disturbed.\n");
//     console.log("Choices: Go back | Try drawing the symbol\n");
//     let bossChoice = prompt("Your choice: ").toLowerCase();
//     if (bossChoice.includes("draw")) {
//         console.log("\nYou trace the symbol with your finger. Suddenly, a shadowy figure emerges from the wall and bolts towards the basement! Without thinking, you chase after it.\n");
//     } else {
//         console.log("\nYou decide to leave the office and return to the main hall.\n");
//     }
// } else if (secondChoice === "3") {
//     console.log("\nThe basement is pitch black. A distant mechanical scratching sound echoes. You realize too late—the figure you saw wasn't trying to escape... it was leading you here.\n");
//     console.log("Choices: Try to run out | Hide | Prepare to fight\n");
//     let basementChoice = prompt("Your choice: ").toLowerCase();
//     if (basementChoice.includes("run")) {
//         console.log("\nAs you turn to flee, the darkness engulfs you. You never make it out.\nGAME OVER.\n");
//         process.exit();
//     } else if (basementChoice.includes("hide")) {
//         console.log("\nYou press yourself against the cold stone wall, controlling your breathing. Something moves past you, unaware of your presence.\n");
//     } else if (basementChoice.includes("fight")) {
//         console.log("\nYou grip your weapon tightly, your heart racing as you ready yourself for whatever lurks in the dark. Then, in the fading moonlight slipping through the half-open basement doors, you see it.\n");
//         console.log("A hulking figure stands in the shadows, its body adorned with scars, black veins snaking across its chitinous armor. At its chest, a crystal pulses with an ominous red and violet glow. Its claws tremble slightly, and its hollow eyes lock onto yours, sending a chill down your spine. The creature takes a step forward, its beastlike breath echoing in the silence. The air grows thick with tension, and you know the fight for your survival is about to begin.\n");
//         // Combat mechanics start here
//         let playerHealth = 100;
//         let monsterHealth = 150;
//         let monsterAttack = 20;
//         let strongHitDamage = 50; // Strong hit on the crystal
//         let playerAttackDamage = 30;
//         let playerDefense = 10;
// 7:08
// while (monsterHealth > 0 && playerHealth > 0) {
//             console.log(`\nYour Health: ${playerHealth} | Monster's Health: ${monsterHealth}`);
//             console.log("Choices: Attack | Dodge | Use magic");
//             let fightChoice = prompt("Your choice: ").toLowerCase();
//             if (fightChoice.includes("attack")) {
//                 console.log("\nYou lunge at the creature and strike!\n");
//                 let damage = (Math.random() < 0.2) ? strongHitDamage : playerAttackDamage; // 20% chance to land a strong hit on the crystal
//                 monsterHealth -= damage;
//                 console.log(`You hit the monster for ${damage} damage.`);
//                 if (damage === strongHitDamage) {
//                     console.log("\nThe crystal in the monster's chest shatters! The creature stumbles, letting out a guttural scream.\n");
//                 }
//             } else if (fightChoice.includes("dodge")) {
//                 console.log("\nYou quickly dodge the monster's attack.\n");
//                 playerHealth -= monsterAttack - playerDefense;
//                 console.log("You take a glancing blow from the monster, but you manage to dodge most of it.");
//             } else if (fightChoice.includes("magic")) {
//                 console.log("\nYou cast a spell, hoping to weaken the monster.\n");
//                 let magicDamage = Math.floor(Math.random() * 40) + 10; // Magic damage between 10-50
//                 monsterHealth -= magicDamage;
//                 console.log(`Your magic strike hits the monster for ${magicDamage} damage.`);
//             } else {
//                 console.log("\nInvalid choice. The monster attacks you!\n");
//                 playerHealth -= monsterAttack;
//             }
//             if (monsterHealth > 0) {
//                 console.log("\nThe monster attacks!\n");
//                 playerHealth -= monsterAttack;
//                 console.log(`The monster claws at you for ${monsterAttack} damage.`);
//             }
//         }
//         if (playerHealth <= 0) {
//             console.log("\nYou have been defeated. GAME OVER.\n");
//         } else {
//             console.log("\nYou have defeated the monster!\n");
//             // New choices after monster's defeat
//             console.log("\nYou stand victorious over the fallen beast, its lifeless body still glowing faintly in the moonlight.\n");
//             console.log("Choices: Explore the basement | Run out | Leave the building and cut out the crystal from the monster's chest");
//             let nextChoice = prompt("Your choice: ").toLowerCase();
//             if (nextChoice.includes("explore")) {
//                 console.log("\nYou step cautiously through the dark basement. As you move deeper, you find the remnants of a dark ritual...\n");
//                 console.log("A pentagram is etched into the floor, surrounded by strange, burned symbols. The air is thick with the remnants of arcane power.\n");
//                 console.log("On the ground, you find a set of clothes, old and tattered. They seem to belong to one of the sectants, stained with something dark. Nearby, a note with strange, indecipherable text lies half-buried in the dust. Lastly, you notice an old key, glinting in the dim light.\n");
//                 console.log("Choices: Pick up the clothes | Pick up the note | Pick up the key");
//                 let itemChoice = prompt("Your choice: ").toLowerCase();
//                 let itemPicked = "";
//                 if (itemChoice.includes("clothes")) {
//                     itemPicked = "clothes";
//                 } else if (itemChoice.includes("note")) {
//                     itemPicked = "note";
//                 } else if (itemChoice.includes("key")) {
//                     itemPicked = "key";
//                 } else {
//                     console.log("\nInvalid choice.");
//                     process.exit();
//                 }
// 7:08
// console.log(`\nYou pick up the ${itemPicked}. +1 item in backpack.\n`);
//             }
//             // Now let player attempt to extract crystal
//             console.log("\nYou decide to leave the building and try to extract the crystal from the monster's chest.\n");
//             let extractionSuccess = Math.random() < 0.5; // 50% chance to successfully extract the crystal
//             if (extractionSuccess) {
//                 console.log("\nYou manage to carefully extract the crystal from the monster's chest. It pulses with dark energy, and you feel a strange power coursing through your fingers.\n");
//             } else {
//                 console.log("\nYou fail to remove the crystal. The monster's chest is too damaged and the crystal is firmly lodged inside.\n");
//             }
//             // Next, player will be prompted to explore first floor or leave
//             console.log("\nChoices: Leave building | Explore first floor again");
//             let finalChoice = prompt("Your choice: ").toLowerCase();
//             if (finalChoice.includes("explore")) {
//                 console.log("\nAs you explore the first floor once more, you hear the unmistakable sound of a police drone approaching from the distance. The air seems to thicken with the sound of distant engines.\n");
//                 console.log("With a sinking feeling, you realize the building is no longer safe. You decide to leave quickly before you are caught.\n");
//                 process.exit();
//             } else {
//                 console.log("\nYou decide to leave the building, walking away from the abandoned place, knowing you have ventured far enough.\n");
//                 process.exit();
//             }
//         }
//     }
// } else {
//     console.log("\nInvalid choice. The darkness claims you.\nGAME OVER.\n");
//     process.exit();
// }
// // Version 2.0
// const prompt = require('prompt-sync')();
// console.log("You arrive at an abandoned building. The first floor windows are covered with posters, some of which say 'Arcanium'. The posters are old and faded, depicting cryptic symbols, strange alchemical schemes, and disturbing slogans like 'Trade your soul for knowledge' and 'The door will open for the worthy'. Some of them are torn at the edges, the paper curling from age, while others seem to have been recently disturbed, as if someone had been carefully inspecting them. The air is thick with dust, faintly smelling of metal, and a disturbing silence hangs over it, occasionally broken by distant creaks from behind the walls. The floor underfoot is fragile, each step raising a cloud of dust. Old shelves along the walls are empty, but faint outlines of objects that once stood on them remain. A rusty lantern hangs from the ceiling, swaying slightly, as if touched by an invisible hand. In the dim light, something moves — a shadow barely noticeable at the edge of your vision. Your curiosity to explore the place grows stronger, untamed.\n");
// console.log("For a moment, you wonder what 'Arcanium' really is. Was it a secret society? A black market for forbidden artifacts? You feel an irresistible desire to learn more, to enter its secrets — maybe not today, but soon.\n");
// console.log("What will you do?\n");
// console.log("1. Inspect the building again\n2. Leave\n3. Enter inside\n");
// let choice = prompt("Your choice: ");
// if (choice === "1") {
//     console.log("\nYou carefully inspect the building. The architecture is old but sturdy. Graffiti covers parts of the walls, some in an unknown language. A worn sign says 'No entry'.\n");
// } else if (choice === "2") {
//     console.log("\nYou decide this place isn't worth the risk and leave. Maybe another time...\n");
//     process.exit();
// } else if (choice === "3") {
// 7:08
// console.log("\nYou push the door open, and it creaks. Inside, the first floor is dimly lit. The floors are covered with dirt, ash, and remnants of a battle. Old blood stains the places where tables and chairs once stood. In the corner, signs of destruction: metallic parts, broken pieces of some device, and burn marks on the walls. Wires hang from the ceiling, sparking and trembling from overload, while dark water stains form from broken pipes, adding to the feeling of dampness and cold. The air is thick with a suffocating silence, occasionally disturbed by distant glass breaking or random rustling — a sound as though something or someone is still here. The fabric of the tents and sheets hanging from the ceiling is deeply dented, their edges torn as though from a fight. The weathered walls show signs of those who once hid in this place.\n");
//     console.log("You feel the cold permeating your very being. The damp, ruined walls seem frozen, and the air feels thick and sticky with moisture. The ground beneath you crunches with dry, musty dust, and the squeaking floorboards are fragile and brittle. Everything feels as if time has stopped here, and no one has been here for years, yet you sense it hides dark secrets.\n");
// } else {
//     console.log("\nInvalid choice. Please try again.\n");
//     process.exit();
// }
// console.log("Where will you go?\n");
// console.log("1. Go upstairs to the second floor\n2. Enter the boss's office\n3. Go down to the basement\n");
// let secondChoice = prompt("Your choice: ");
// if (secondChoice === "1") {
//     console.log("\nYou head upstairs and find massive metal doors resembling a high-tech laboratory's entry. They're locked. You'll need a key or your hacker's help.\n");
//     console.log("Choice: Go back | Try to open them with dark force\n");
//     let labChoice = prompt("Your choice: ").toLowerCase();
//     if (labChoice.includes("dark")) {
//         console.log("\nYou try to open the doors with your dark powers, but the energy backlash strips you of some of your humanity. You're not strong enough yet.\nGAME OVER.\n");
//         process.exit();
//     } else {
//         console.log("\nYou decide to head back downstairs.\n");
//     }
// } else if (secondChoice === "2") {
//     console.log("\nIn the boss's office, the walls are made of smooth chrome panels adorned with neon lights that pulse in rhythmic patterns. The air smells faintly of burnt wiring and ozone. Monitors flicker with static on the walls, emitting an eerie light. Strange symbols, like a mix of ancient alchemy and futuristic technologies, are burned into the metallic surfaces, while holographic screens hover just above the floor, displaying unreadable streams of data.\n");
//     console.log("In the center of the room, a large holographic map of the city hovers, with red dots marking important places. The hum of high-tech machines fills the air, blending with occasional electric sparks. In the corner, a desk is cluttered with cybernetic limbs, wires, and strange mechanical devices. The atmosphere is cold and sterile, as if technology and something far darker are intertwined.\n");
//     console.log("Choice: Go back | Investigate the desk\n");
//     let bossChoice = prompt("Your choice: ").toLowerCase();
//     if (bossChoice.includes("investigate")) {
//         console.log("\nYou approach the desk, and a faint hissing sound emerges from the pile of unfinished projects. There lies a curved cybernetic arm that seems to twitch, as if it's still alive.\n");
//         console.log("You notice a strange device in the center of the desk — half technological, half organic — its purpose unclear. When you touch it, the lights in the room start flickering, and a voice, mechanical but strangely human, speaks in your mind.\n");
//         console.log("Suddenly, movement in the shadows draws your attention. Something is moving, something you can't fully comprehend.\n");
//     } else {
//         console.log("\nYou decide to leave the boss's office and return to the main hall.\n");
//     }
// } else if (secondChoice === "3") {
//     console.log("\nThe basement is dark. Somewhere in the distance, a mechanical grinding sound can be heard. You realize too late — the figure you saw earlier wasn't trying to escape... it was leading you here.\n");
//     console.log("Choice: Try to run | Hide | Prepare for a fight\n");
//     let basementChoice = prompt("Your choice: ").toLowerCase();
//     if (basementChoice.includes("run")) {
//         console.log("\nAs you turn to run, the darkness engulfs you. You didn't make it out.\nGAME OVER.\n");
//         process.exit();
//     } else if (basementChoice.includes("hide")) {
//         console.log("\nYou press yourself against the cold stone wall, holding your breath. Something passes by you, not noticing.\n");
//     } else if (basementChoice.includes("fight")) {
//         console.log("\nYou grip your weapon tightly, your heart racing, preparing for whatever lurks in the dark. And then, in the dim light filtering through the basement doors, you see it.\n");
//         console.log("A massive serpent-like creature writhes in the darkness. Its body is covered in human hands, each unnaturally attached to its scaly skin. The hands twitch and grasp at the air, fingers bending as if trying to seize your soul. Its movements make the ground beneath you tremble, and its eyes — dark and unblinking — seem to penetrate your being, as though it knows your deepest fears.\n");
//         console.log("Its fangs gleam with venom, and its long tail hisses through the air menacingly. When it opens its mouth, a sinister hissing sound emanates, full of unnatural whispers in a language that warps your mind.\n");
// 7:09
// // Combat mechanics
//         let playerHealth = 100;
//         let monsterHealth = 200;
//         let monsterAttack = 25;
//         let strongHitDamage = 60; // Strong hit to the creature's heart
//         let playerAttackDamage = 30;
//         let playerDefense = 10;
//         while (monsterHealth > 0 && playerHealth > 0) {
//             console.log(`\nYour health: ${playerHealth} | Monster's health: ${monsterHealth}`);
//             console.log("Choice: Attack | Dodge | Use magic");
//             let fightChoice = prompt("Your choice: ").toLowerCase();
//             if (fightChoice.includes("attack")) {
//                 console.log("\nYou rush at the creature and strike!\n");
//                 let damage = (Math.random() < 0.2) ? strongHitDamage : playerAttackDamage; // 20% chance for a strong hit to the creature's heart
//                 monsterHealth -= damage;
//                 console.log(`You dealt ${damage} damage to the monster.`);
//                 if (damage === strongHitDamage) {
//                     console.log("\nYou strike right in the heart of the creature, making it writhe in pain, its hands jerking around chaotically.\n");
//                 }
//             } else if (fightChoice.includes("dodge")) {
//                 console.log("\nYou quickly dodge the monster's attack.\n");
//                 playerHealth -= monsterAttack - playerDefense;
//                 console.log("You take partial damage from the monster's attack, but most of it was avoided.");
//             } else if (fightChoice.includes("magic")) {
//                 console.log("\nYou cast a spell, hoping to weaken the monster.\n");
//                 let magicDamage = Math.floor(Math.random() * 40) + 10; // Magic damage between 10 and 50
//                 monsterHealth -= magicDamage;
//                 console.log(`Your magical attack dealt ${magicDamage} damage to the monster.`);
//             } else {
//                 console.log("\nInvalid choice. The monster attacks you!\n");
//                 playerHealth -= monsterAttack;
//             }
//             if (monsterHealth > 0) {
//                 console.log("\nThe creature attacks!\n");
//                 playerHealth -= monsterAttack;
//                 console.log(`The creature's tail tear into you dealing ${monsterAttack} damage.`);
//             }
//         }
// New
// 7:09
// if (playerHealth <= 0) {
//             console.log("\nYou were defeated. GAME OVER.\n");
//         } else {
//             console.log("\nYou defeated the serpent-like creature!\n");
//             // New choices after the victory
//             console.log("\nYou stand victorious over the fallen creature, its hands still twitching after death.\n");
//             console.log("Choice: Investigate the basement | Run | Take the bottle of unknown drink");
//             let nextChoice = prompt("Your choice: ").toLowerCase();
//             if (nextChoice.includes("investigate")) {
//                 console.log("\nAs you investigate the first floor again, you hear the distinct sound of a police drone approaching from afar. The air fills with the sound of distant engines.\n");
//                 console.log("With a feeling of dread, you realize the building is no longer safe. You decide to leave quickly before you're caught.\n");
//                 process.exit();
//             } else if (nextChoice.includes("run")) {
//                 console.log("\nYou decide to leave the building, knowing you've gained knowledge and experience.\n");
//                 process.exit();
//             } else if (nextChoice.includes("drink")) {
//                 console.log("\nYou take the bottle of unknown drink. It seems strange, and it might contain something dangerous.\n");
//             }
//             // Now the player can try extracting the crystal
//             console.log("\nYou decide to leave the building and try extracting the crystal from the creature's chest.\n");
//             let extractionSuccess = Math.random() < 0.5; // 50% chance to successfully extract the crystal
//             if (extractionSuccess) {
//                 console.log("\nYou manage to carefully extract the crystal from the creature's chest. It pulses with dark energy, and you feel strange power coursing through your fingers.\n");
//             } else {
//                 console.log("\nYou can't extract the crystal. The creature's chest is too damaged, and the crystal is firmly lodged inside.\n");
//             }
//             // Then the player will be offered to choose whether to leave or explore the first floor again
//             console.log("\nChoice: Leave the building | Investigate the first floor again");
//             let finalChoice = prompt("Your choice: ").toLowerCase();
//             if (finalChoice.includes("investigate")) {
//                 console.log("\nAs you investigate the first floor again, you hear the distinct sound of a police drone approaching from afar. The air fills with the sound of distant engines.\n");
//                 console.log("With a feeling of dread, you realize the building is no longer safe. You decide to leave quickly before you're caught.\n");
//                 process.exit();
//             } else {
//                 console.log("\nYou decide to leave the building, knowing you've gone far enough.\n");
//                 process.exit();
//             }
//         }
//     }
// } else {
//     console.log("\nInvalid choice. Darkness consumes you.\nGAME OVER.\n");
//     process.exit();
// }
//     } else {
//         console.log('Nothing really interesting to see here,\n except a couple of yummy spiders.');
//         travel();
//     }
// }

console.log("This is part of an going project. Stay alive and stay tuned for more coming soon...");

//add a function for spending elixir and adding to inventory.
// for adding inventory items:

// chara.inventory.push("Healing Potion");
// chara.inventory.push("Key Card");

// console.log("Your inventory includes: ");
// chara.inventory.forEach(item => console.log(item));

// function addLocation(locationName) {
//     // Check if the location already exists
//     if (!location[locationName]) {
//         location[locationName] = false;  // Add new location as false (not visited)
//         console.log(`${locationName} added to locations.`);
//     } else {
//         console.log(`${locationName} already exists.`);
//     }
// }

// // Example usage
// addLocation('newLocation');  // This will add 'newLocation' to the 'location' object
// console.log(location);  // View the updated object

// add a choice options of where the player wants to start thier journey.
