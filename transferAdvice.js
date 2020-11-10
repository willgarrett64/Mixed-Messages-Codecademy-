// Import playerData JSON and saves to rawData variable.
const rawData = require('./playerData.json');


// Initialise seperate arrays for each position to better sort the player data.
const GKP = [];
const DEF = [];
const MID = [];
const FWD = [];

// Filter out lots of unnecesary proporties since they aren't needed for this program. Sort the data into each seperate array by checking position of each player.
rawData.forEach(player => {
    // Filter properties.
    const playerObj = {
        name: player.name,
        team: player.team,
        position: player.position,
        cost: player.cost,
        tsb: player.selected_by_percent,
    };

    //  Sort into relevant arrays.
    switch (player.position) {
        case 'GKP':
            GKP.push(playerObj);
            break;
    
        case 'DEF':
            DEF.push(playerObj);            
            break;
        
        case 'MID':
            MID.push(playerObj);            
            break;
        
        case 'FWD':
            FWD.push(playerObj);            
            break;
    };
});


// Function to select a random position
function selectRandomPosition() {
    const ranNum = Math.floor(Math.random() * 4);
    switch (ranNum) {
        case 0:
            return GKP;
            break;
        
        case 1:
            return DEF;
            break;
        
        case 2:
            return MID;
            break;
        
        case 3:
            return FWD;
            break;
    };
}

// Function to select a random player. If no argument is passed in, a random position is selected using selectRandomPosition function. 
function selectRandomPlayer(posArr = selectRandomPosition()) {
    const ranNum = Math.floor(Math.random() * posArr.length);
    const ranPlayer = posArr[ranNum];
    return ranPlayer;
}




const theWhy = [
    `Since you have a really poor ${position} `,
    `To help strengthen your ${position} `,
    `Your ${position} really needs a helping hand, so `,
    `Your ${position} is already pretty strong so `,
    `You may wish to think about bolstering your ${position} but `,
    `Looking at your ${position}, `,
    `Your ${position} is already really strong so `,
    `You should be proud of your strong ${position}, `,
    `Since your have a great ${position} already, `
];

const theWhat = [
    `you should transfer in ${player.name}.`,
    `you really need to buy ${player.name}.`,
    `it would be a good idea to add ${player.name} into your team.`,
    `we're unsure whether you should buy ${player.name} or not.`,
    `it's hard to say if you should purchase ${player.name}.`,
    `buying ${player.name} could be a good or bad decision.`,
    `don't bother transfering in ${player.name}.`,
    `avoid wasting money on ${player.name}.`,
    `it wouldn't be a good idea to buy ${player.name}.`
];

const theStats = `${player.name} info:\n\nTeam: ${player.team}\nPrice: £${player.cost}m\nSelected by: ${player.tsb}%`;
