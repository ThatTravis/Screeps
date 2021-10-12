
// Here be script snippets


// Spawn a single creep
Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );

//rewrite memory of creep
Game.creeps['Harvester1'].memory.role = 'harvester';

//Spawn with Memory
Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Builder1',
    { memory: { role: 'builder' } } );

//Spawn big bad worker (5 Extensions)
Game.spawns['Spawn1'].spawnCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE],
    'HarvesterBig',
    { memory: { role: 'harvester' } } );

//Suicide
Game.creeps['Harvester1'].suicide()