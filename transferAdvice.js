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


// Function to select a random position should the 
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


function selectRandomPlayer(posArr = selectRandomPosition()) {
    
}