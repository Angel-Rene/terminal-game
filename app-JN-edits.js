const prompt = require('prompt-sync')();


console.log(`
    This game was made in collaboration with Alex Jungers, Diana Wilson, John Ng, and Angel Rene.\n Please check them out on GitHub.\n
    In the City of Light, years of prosperity and peace teetered on the edge of ruin. A new force had taken root—an extremist faction calling themselves the 'Soul Survivors.\n
    Their doctrine was cryptic, their motives shrouded in twisted faith, but their actions spoke louder than any sermon.\n
    Missing persons posters lined the streets, their faces now whispers in the wind. And then came the 'Darkness'—a creeping, unnatural force that wrapped itself around the city's heart,\n
    swallowing whole districts in shadow. There was no doubt about its source. The City stands at a crossroads. The time for neutrality has passed.\n
    It's up to you to lead determine the fate of 'Light'.\n`
);

console.log('\nWhat do you wish to be called?\n');
const username = prompt('Sign here & sell your soul: ');
console.log(`\nMany warm greetings to you, ${username}! The road ahead looks hard won to travel.`);
console.log('\nChoose your faction!\n');

let charaFaction = `
    |NETRUNNER| Masters of the digital world.\n
    |ROGUE| Merceneries for hire.\n
    |CORPORATE SPY| The deal makers behind the curtians.\n
    |NOMAD| Roaming scavengers.\n
    |MAGE| Weave spells and potions in the streets.\n
`;

//figured out that we needed to put the codes below, above the switch case code in order for it to work properly on the terminal.
console.log(charaFaction);
const choiceFaction = prompt('Your choice: ');

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
    elixir: 100
};
let location = {
    bar: false,
    home: false,
    hideout: false,
    abandonedapt: false,
    arcanemarket: false
};

switch(choiceFaction.toLowerCase(choiceFaction)) {
    case 'netrunner':
        console.log("\nYou've chosen to be a Netrunner. \nDigital realms bend to your will, but beware the dangers lurking in the code.\n");
        chara.health = 70
        chara.sanity = 90
        chara.intelligence = 15
        chara.dexterity = 12
        chara.constitution = 8;
        break;
    case 'rogue':
        console.log("\nYou've chosen to be a Rogue. \nSteel, neon, and blood — the city pays you to stay in the shadows.\n");
        chara.dexterity = 15
        chara.intelligence = 8
        chara.wisdom = 12
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
        break;
};
/*tried using for else was problibatic. I needed a code that I can put multipule layers of
user input that mean the same thing. As much as I love for else, you can also add so many things
to each characteristic.*/
//had to use google and chatgbt to figure out the intracacies of using switch case
let showStats = console.log(` |NAME| ${chara.name}\n |FACTION| ${chara.faction}\n |HEALTH| ${chara.health}\n |SANITY| ${chara.sanity}\n |WISDOM| ${chara.wisdom}\n |INTELLIGENCE| ${chara.intelligence}\n |CONSTITUTION| ${chara.constitution}\n |STRENGTH| ${chara.strength}\n |DEXTERITY| ${chara.dexterity}\n |CHARISMA| ${chara.charisma}\n`);

//insert faction action based choices here.//
gameOver = false;

function checkGameOver() {
    if (chara.health <= 0) {
         console.log('As The Darkness closes in around you, your blood pools around you.') 
        console.log('\nYou start feeling colder as time passes and every body part goes numb.') 
        console.log('\nGAME OVER flashes before your eyes one last time before The Darkness takes over.');
    } else if (chara.sanity <= 0) {
         console.log('The Darkness has closed in around you. \nYou are no longer in control of your body.')
         console.log('\nYou may only watch as the whispers become the screams of the people near by.')
         console.log('\nYou can only watch as The Darkness takes over your body and tears througoh teh city you have grown to love.');
    } else () =>
         console.log('GAME OVER PLAYER. Turns out the game played you.');
       
    gameOver = true;
    process.exit();
};

let firstactChoice = `
    |BAR|\n
    |HOME|\n
    |ABANDONED APARTMENT|\n
    |KNOWN SOUL-SURVIVORS HIDE OUT|\n
`;

console.log('Where would you like to start your journey?');
console.log(firstactChoice);
let visitChoice = prompt('Your choice: ');
while (visitChoice === null){
    switch (visitChoice.toLowerCase(visitChoice)) {
        case 'bar':
            location.bar = true;
            visitChoice = false
            break;
        case 'home':
            location.home = true
            visitChoice = false
            break;
        case 'abandoned apartment':
            location.abandonedapt = 
            visitChoice = false
            break;
        case 'soul-survivors':
        case 'hid out':
        case 'known hide out':
        case 'known soul-survivors hide out':
            location.hideout = true
            visitChoice = false
            break;
        default :
        console.log('Invalid choice.');
        visitChoice = null;
    };
}


// function drinkSpending() {
//     for (chara.drinks = 0; chara.drinks <= 3; ++ chara.drinks) {
//         console.log(`You have choosen to take a drink. Beware what might be in them. ${chara.elixir}`)
//         chara.elixir -= 1;
//     }
// }
function drinking() {
    if (chara.drinks >= 0 && chara.drinks < 3) {
        console.log("Bartender tells you, 'Best take it slow.'\n");
        //drinkSpending()
        chara.sanity += 5;
        console.log(`You feel refreshed and ready to face the challenges ahead.\nGain Sanity +5: ${chara.sanity}`)
        chara.drinks += 1;
    }
    else if (chara.drinks >= 3) {
        console.log("\nBartender tells you, 'You're not looking too hot there.'")
        console.log("'What's the point of resistance?' you ask yourself as you keep drinking your worries at the bottom of the glass.")
        console.log("Inebrieated, you stumble out of the bar, and forget the purpose you once had.")
        console.log("---GAME OVER---");
        gameOver = true
        checkGameOver(gameOver = true);
    }
}
while (location.bar === true) {
    console.log("\nYou're at the bar.")
    console.log("You can: |talk| to barkeep  |drink|  |leave| bar\n")
    let bartender = 0;
    barChoice = prompt("What do you do? ");
        if (barChoice === 'talk') {
            if (bartender === 0) {
                console.log("Bartender tells you relevant information about the abandoned apartment that may give clues about the Soul Survivor cult.")
                return bartender++;
            } else if (bartender >= 1) {
                console.log("Bartender has told you everything he knows about Soul Survivor, now he looks at you expectantly if you're going to get a drink.")
            }
        } else if (barChoice === 'drink') {
            drinking();
        } else if (barChoice === 'leave') {
            console.log("\nYou pay your respects and leave the bar.")
            visitChoice = true;
            return location.bar = false;
        } else;
}
// Make sure to make edit to 'chara' object by including 'drinks as a value/parameter. DONE TYYYY JOHN!
if (location.home === true) {
    console.log('Congrats, you decided to go back to your stuffy apartment and leave the city to ruins.');
    checkGameOver(gameOver === true);
};
if (location.hideout === true) {
    console.log("You walk right up to the front doors.\n A big burly man is there. He ask for your access card.\n You do not have one and get punched for disturbing the man's night.\n")
    checkGameOver();
};
if (location.abandonedapt === true );
console.log("This is part of an going project. Stay alive and stay tuned for more coming soon...");

//add a choice options of where the player wants to start thier journey.
//  Home->   game over
//  Soul-Surviors hide out-> console.log('You walk right up to the front doors. A big burly man is there. He ask for your access card. You do not have one and get punched for disturbing the man's night.')
//  abandoned apartment-> 
//  bar-> do you want to talk to the bartender? yes -> first interaction console.log('The bartender gives you a tip about an abandoned aparment nearby.') other interactions console.log('Bartender asks if you would like a drink.')
//          no -> console.log('You get lost in the noisy bar and eventually wander outside.\n Your head starts to go fuzzy from the smells of the ally way and you quickly loose concious.\n You have been captured.') Game Over