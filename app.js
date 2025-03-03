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
let gameOver = false;

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
tip = false;

let locations = {
    bar: false,
    home: false,
    hideOut: false,
    abandonedApt: false,
};

// let travelLocation = (`
//     1|BAR|
//     2|HOME|
//     3|ABANDONED APARTMENT|
//     4|KNOWN SOUL-SURVIVORS HIDE OUT|
// `);

function travel() {
    // console.log('\nWhich road ahaead do you wish to travel?');
    // console.log(travelLocation);
    // let choice = prompt('Choose carefully: ');
    
    locations.visitBar = false;
    locations.home = false;
    locations.hideOut = false;
    locations.abandonedApt = false;

    // switch (choice) {
    //     case `1`:
    //         location.visitBar = true;
            
    //     case `2`:
    //         location.home = true;
            
    //     case `3`:
    //         location.abandonedApt = true;
            
    //     case `4`:
    //         location.hideOut = true;
            
    //     default :
    //         console.log('Invalid choice. Please choose again:');
    //         actionChoice = prompt('Where to next? ');
    //         return travel();
    // }    
    console.log(`\nWhere would you like to go?`);
    console.log(`1|BAR|`);
    console.log(`2|HOME|`);
    console.log(`3|ABANDONED APARTMENT|`)
    console.log(`4|KNOWN SOUL-SURVIVORS HIDE OUT|`)

    let choice = prompt(`Choose carefully: `);
    switch (choice) {
        case `1`: 
            locations.bar = true; 
            break;
        case `2`: 
            locations.home = true; 
            break;
        case `3`:
            locations.abandonedApt = true; 
            break;
        case `4`: 
            locations.hideOut = true; 
            break;
        default :
            console.log('Invalid choice. Please choose again:');
            actionChoice = prompt('Where to next? ');
            return travel();
    }
};  
// Act choice
travel();


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

}; //thank you alex and chat gbt for this function works way better than the ne that was here.

function addLocation(locationName) {
    // Check if the location already exists
    if (!location[locationName]) {
        location[locationName] = false;  // Add new location as false so that it is not visited.
        console.log(`${locationName} added to locations.`);
    } else {
        console.log(`${locationName} already exists.`);
    }
}

function addItemToInventory(item) {
    chara.inventory.push(item);
    console.log(`${item} added to your inventory.`);
    chara.inventory.forEach(item => console.log(item))
}



// function drinkSpending() {
//     for (chara.drinks = 0; chara.drinks <= 3; ++ chara.drinks) {
//         console.log(`You have choosen to take a drink. Beware what might be in them. ${chara.elixir}`)
//         chara.elixir -= 1;
//     }
// }

function drinking() { // thank john for this master piece and the one below :)
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
    locations.home = false;
    locations.abandonedApt = false;
    locations.hideOut = false;
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
    locations.bar = false;
    locations.abandonedApt = false;
    locations.hideOut = false;
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



while (locations.abandonedApt) { //bless diana for this code!! Диана, ты потрясающая. Да, я перевел это через Google
    if (tip === true) {
        console.log('This is still being built out. Stay alive and stay tuned.');
        console.log("You arrive at an abandoned building. The first floor windows are covered with posters, some of which say 'Arcanium'. \nThe posters are old and faded, depicting cryptic symbols, strange alchemical schemes, and disturbing slogans like 'Trade your soul for knowledge' and 'The door will open for the worthy'. Some of them are torn at the edges, the paper curling from age, while others seem to have been recently disturbed, as if someone had been carefully inspecting them. The air is thick with dust, faintly smelling of metal, and a disturbing silence hangs over it, occasionally broken by distant creaks from behind the walls. The floor underfoot is fragile, each step raising a cloud of dust. Old shelves along the walls are empty, but faint outlines of objects that once stood on them remain. A rusty lantern hangs from the ceiling, swaying slightly, as if touched by an invisible hand. In the dim light, something moves — a shadow barely noticeable at the edge of your vision. Your curiosity to explore the place grows stronger, untamed.\n");
        console.log("For a moment, you wonder what 'Arcanium' really is. Was it a secret society? A black market for forbidden artifacts? \nYou feel an irresistible desire to learn more, to enter its secrets — maybe not today, but soon.\n");
        apt();
        aptFloors();
        checkGameOver();
    } else {
        console.log('Nothing really interesting to see here,\n except a couple of yummy spiders.');
        travel();
    }
        
};

function apt() {
    console.log("What will you do?\n");
    console.log("1. Inspect the building again\n2. Leave\n3. Enter inside\n");
    let choiceApt = prompt("Your choice: ");
            
    switch (choiceApt) {
        case `1` :
            console.log("\nYou carefully inspect the building. The architecture is old but sturdy.\nGraffiti covers parts of the walls, some in an unknown language. A worn sign says 'No entry'.\n");
            apt();
        case `2` :
            console.log("\nYou decide this place isn't worth the risk and leave. Maybe another time...\n");
            travel(tip = true);
        case `3` :
            console.log("\nYou push the door open, and it creaks. Inside, the first floor is dimly lit. The floors are covered with dirt, ash, and remnants of a battle. Old blood stains the places where tables and chairs once stood. In the corner, signs of destruction: metallic parts, broken pieces of some device, and burn marks on the walls. Wires hang from the ceiling, sparking and trembling from overload, while dark water stains form from broken pipes, adding to the feeling of dampness and cold. The air is thick with a suffocating silence, occasionally disturbed by distant glass breaking or random rustling — a sound as though something or someone is still here. The fabric of the tents and sheets hanging from the ceiling is deeply dented, their edges torn as though from a fight. The weathered walls show signs of those who once hid in this place.\n");
            console.log("You feel the cold permeating your very being. The damp, ruined walls seem frozen, and the air feels thick and sticky with moisture. The ground beneath you crunches with dry, musty dust, and the squeaking floorboards are fragile and brittle. Everything feels as if time has stopped here, and no one has been here for years, yet you sense it hides dark secrets.\n");
            aptFloors();
        default :
            console.log("\nInvalid choice. Please try again.\n");
            checkGameOver();
        };
};

function aptFloors() {
    console.log("Where will you go?\n");
    console.log("1. Go upstairs to the second floor\n2. Enter the boss's office\n3. Go down to the basement\n");
    let floors = prompt("Your choice: ");
    
    switch (floors) {  
        case `1` :
            console.log("\nYou head upstairs and find massive metal doors resembling a high-tech laboratory's entry. They're locked. You'll need a key or your hacker's help.\n");
            console.log("Choice: Go back | Try to open them with dark force\n");
            let labChoice = prompt("Your choice: ").toLowerCase();
            if (labChoice.includes("dark")) {
                console.log("\nYou try to open the doors with your dark powers, but the energy backlash strips you of some of your humanity.\n Sanity drained. You're not strong enough yet.\nGAME OVER.\n");
                chara.sanity = 0;
                checkGameOver();
            } else {
                console.log("\nYou decide to head back downstairs.\n");
                return aptFloors();
            }
        case `2` :
            console.log("\nIn the boss's office, the walls are made of smooth chrome panels adorned with neon lights that pulse in rhythmic patterns. \nThe air smells faintly of burnt wiring and ozone. Monitors flicker with static on the walls, emitting an eerie light. Strange symbols, \nlike a mix of ancient alchemy and futuristic technologies, are burned into the metallic surfaces, \nwhile holographic screens hover just above the floor, displaying unreadable streams of data.\n");
            console.log("In the center of the room, a large holographic map of the city hovers, with red dots marking important places. \nThe hum of high-tech machines fills the air, blending with occasional electric sparks. In the corner, a desk is cluttered with cybernetic limbs, \nwires, and strange mechanical devices. The atmosphere is cold and sterile, as if technology and something far darker are intertwined.\n");
            console.log("Choice: Go back | Investigate the desk\n");

            let bossChoice = prompt("Your choice: ").toLowerCase().trim();
            if (bossChoice.includes("investigate")) {
                console.log("\nYou approach the desk, and a faint hissing sound emerges from the pile of unfinished projects. There lies a curved cybernetic arm that seems to twitch, as if it's still alive.\n");
                console.log("You notice a strange device in the center of the desk — half technological, half organic — its purpose unclear. When you touch it, the lights in the room start flickering, and a voice, mechanical but strangely human, speaks in your mind.\n");
                console.log("Suddenly, movement in the shadows draws your attention. Something is moving, something you can't fully comprehend.\n");
                addItemToInventory('weapon')
            } else {
                console.log("\nYou decide to leave the boss's office and return to the main hall.\n");
            }
        case `3` :
            console.log("\nThe basement is dark. Somewhere in the distance, a mechanical grinding sound can be heard. You realize too late — the figure you saw earlier wasn't trying to escape... it was leading you here.\n");
            console.log("Choice: Try to run | Hide | Prepare for a fight\n");
            let basementChoice = prompt("Your choice: ").toLowerCase();
            if (basementChoice.includes("run")) {
                console.log("\nAs you turn to run, the darkness engulfs you. You didn't make it out.\nGAME OVER.\n");
                chara.health = 0;
                checkGameOver();
            } else if (basementChoice.includes("hide")) {
                console.log("\nYou press yourself against the cold stone wall, holding your breath. Something passes by you, not noticing.\n");
                checkGameOver();
                let basementHide = prompt('Do you wish to sneak back out? ').toLowerCase().trim();
                    if(basementHide.includes('yes') && chara.dexterity >= 15){
                        console.log(`You sneak to the entrance, without the creature noticing. You did lose 10 sanity for being unprepared.\nRemeber what they say about curiosity. \nCareful with the remaining: ${chara.sanity}`)
                        chara.sanity -= 10
                        checkGameOver;
                        return aptFloors();
                    } else if (basementHide.includes('yes') && chara.dexterity <= 15) {
                        console.log(`You have very low dexterity, so you trip a couple of times. The creature notices your exit and slams itself against the door. \nYou have made it out by the skin of your teeth. You have lost 15 sanity from being un prepared.\n Careful with the remaining: ${chara.sanity}`);
                        chara.sanity -=15
                        checkGameOver();
                    } else if (basementHide.includes('no')) {
                        console.log('Why so scared, child? Here Ill give you another chance. Youll have to choose to die eventually.');
                        return aptFloors();
                    }
            } else if (basementChoice.includes("fight")) {
                if (chara.inventory.includes('weapon'))
                    console.log("\nYou grip your weapon tightly, your heart racing, preparing for whatever lurks in the dark. And then, in the dim light filtering through the basement \ndoors, you see it.\n");
                    console.log("A massive serpent-like creature writhes in the darkness. Its body is covered in human hands, each unnaturally attached to its scaly skin.\n The hands twitch and grasp at the air, fingers bending as if trying to seize your soul. Its movements make the ground beneath you tremble, and its eyes — dark and unblinking — seem to penetrate your being, as though it knows your deepest fears.\n");
                    console.log("Its fangs gleam with venom, and its long tail hisses through the air menacingly. When it opens its mouth, a sinister hissing sound emanates, \nfull of unnatural whispers in a language that warps your mind.\n");
                    console.log('\n This will eventually include a moster battle so please stay tuned.');
                    console.log(`You're inventory includes: ${chara.inventory}`);
                    gameOver = true;
                    checkGameOver();
                } else {
                    console.log('\nYou have no weapon. The creature notices you and attacks. You become a tasty snack.\nThank you for the sacrifice.');
                    chara.health = 0;
                    checkGameOver();
                }
            
        }
    
};
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
