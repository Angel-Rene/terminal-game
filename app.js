const prompt = require('prompt-sync')();

console.log('What do you wish to be called?\n')
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

let chara = {
    name : `${username}`,
    health: 100,
    sanity: 100,
    strength: 10,
    intelligence: 10,
    dexterity: 10,
    constitution: 10,
    wisdom: 10,
    charisma: 10,
};
console.log(charaFaction);
const choiceFaction = prompt('Your choice: ');
switch(choiceFaction) {
    case 'Netrunner', 'netrunner':
        console.log("\nYou've chosen to be a Netrunner. \nDigital realms bend to your will, but beware the dangers lurking in the code.\n");
        
        break;
    case 'Rogue', 'rogue':
        console.log("\nYou've chosen to be a Rogue. \nSteel, neon, and blood — the city pays you to stay in the shadows.\n");
        
        break;
    case 'Mage', 'mage':
        console.log("\nYou've chosen to be a Mage. \nThe magic of the old world clashes with the tech of the new. You are the bridge between the two.\n");
        
        break;
    case 'Nomad', 'nomad':
        console.log("\nYou've chose to be a Nomad. \nThe wastelands are your home, but the city calls with its neon lights and promises.\n");
        
        break;
    case 'Corporate Spy', 'Spy', 'corporate spy', 'spy':
        console.log("\nYou've chosen The Corporate Spy. \nYou move in shadows, paid in secrets, manipulating the power players of the world.\n");
        break;
    default:
        console.log("\nERROR 404: Access denied. \nThe neon lights flicker in aticipation and The Darkness is closing in on you.\n");
        break;
};
//tried using for else was problibatic. I needed a code that I can put multipule layers of
// user input that mean the same thing. As much as I love for else, you can also add so many things
//to each characteristic.

//let gameOver = false

// //function checkGameOver() {
//    // if (chara.health <= 0) {
//      //   console.log('As The Darkness closes in around you, your blood pools around you. \nYou start feeling colder as time passes and every body part goes numb. \nGAME OVER flashes before your eyes one last time before The Darkness takes over.');
//     //} else (chara.sanity <= 0) {
//         console.log('The Darkness has closed in around you. \nYou are no longer in control of your body. \nYou may only watch as the whispers become the screams of the people near by. \nYou can only watch as The Darkness takes over your body and tears througoh teh city you have grown to love.');
//     } 
//     gameOver = true
//     break;
// };

// //function startGame() {
//     while (!gameOver) {
//         console.log(`${username}\n |HEALTH| ${chara.health}\n |SANITY| ${chara.sanity}\n |WISDOM| ${chara.wisdom}\n |INTELLIGENCE| ${chara.intelligence}\n |CONSTITUTION| ${chara.constitution}\n |STRENGTH| ${chara.strength}\n |DEXTERITY| ${chara.dexterity}\n |CHARISMA| ${chara.charisma}`);
//     }
// }



console.log("This is part of an going project. Stay alive and stay tuned for more coming soon...")