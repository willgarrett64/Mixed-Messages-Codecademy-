// Import playerData JSON and saves to rawData variable.
const rawData = require('./playerData.json');


// Initialise seperate arrays for each position to better sort the player data.
const gkpArray = [];
const defArray = [];
const midArray = [];
const fwdArray = [];


rawData.forEach(player => {
    // Filter out lots of unnecesary proporties since they aren't needed for this program.
    const playerObj = {
        name: player.name,
        team: player.team,
        position: player.position,
        cost: player.cost,
        tsb: player.selected_by_percent,
    };

    // Sort the data into each seperate array by checking position of each player. 
    switch (player.position) {
        case 'GKP':
            gkpArray.push(playerObj);
            break;
    
        case 'DEF':
            defArray.push(playerObj);            
            break;
        
        case 'MID':
            midArray.push(playerObj);            
            break;
        
        case 'FWD':
            fwdArray.push(playerObj);            
            break;
    };
});

