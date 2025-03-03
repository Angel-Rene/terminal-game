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

// Act choice

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

}

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

let location = {
    bar: false,
    home: false,
    hideOut: false,
    abandonedApt: false
};

tip = false;

travel() {
   console.log(`\nWhere would you like to go?`);
    console.log(`1|BAR|`);
    console.log(`2|HOME|`);
    console.log(`3|ABANDONED APARTMENT|`)
    console.log(`4|KNOWN SOUL-SURVIVORS HIDE OUT|`)

    let choice = prompt()
    // console.log('Where would you like to start your journey?');
    // console.log(firstActChoice);
    // let nextChoice = prompt('Your choice: ');

    //thank you alex and chat gbt for this function
    // console.log('\nAs you enter the city of Light. The civilians need a hero');
    // console.log('\nWhich road ahead do you wish to travel?');
    
    // console.log('1|BAR| 2|HOME|
    // 3|ABANDONED APARTMENT|
    // 4|KNOWN SOUL-SURVIVORS HIDE OUT|')



    let location = {
        bar: false,
        home: false,
        hideOut: false,
        abandonedApt: false
    };
    
    console.log(firstActChoice)
    locationChoice = prompt("\nChoose a number carefully: ").trim();

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
}

// function drinkSpending() {
//     for (chara.drinks = 0; chara.drinks <= 3; ++ chara.drinks) {
//         console.log(`You have choosen to take a drink. Beware what might be in them. ${chara.elixir}`)
//         chara.elixir -= 1;
//     }
// }
travel();

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

while (location.bar === true) {
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

while (location.home === true) {
    console.log('Congrats, you decided to go back to your stuffy apartment and leave the city to ruins.\n');
    gameOver = true; //have to add this or you end up in an infinate loop. It's kinda terrifying.
    checkGameOver();
};

while (location.hideOut === true) {
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

while (location.abandonedApt === true) {
    if (tip === true) {
        console.log('This is still being built out. Stay alive and stay tuned.');
        //add the 3 apartment floors// add battle in the basement
    } else {
        console.log('Nothing really interesting to see here,\n except a couple of yummy spiders.');
        travel();
    }
}

console.log("This is part of an going project. Stay alive and stay tuned for more coming soon...");

//add a function for spending elixir and adding to inventory.
/*for adding inventory items:

chara.inventory.push("Healing Potion");
chara.inventory.push("Key Card");

console.log("Your inventory includes: ");
chara.inventory.forEach(item => console.log(item));

function addLocation(locationName) {
    // Check if the location already exists
    if (!location[locationName]) {
        location[locationName] = false;  // Add new location as false (not visited)
        console.log(`${locationName} added to locations.`);
    } else {
        console.log(`${locationName} already exists.`);
    }
}

// Example usage
addLocation('newLocation');  // This will add 'newLocation' to the 'location' object
console.log(location);  // View the updated object

add a choice options of where the player wants to start thier journey.*/
