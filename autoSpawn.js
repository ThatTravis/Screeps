var autoSpawn = {

    run: function() {
//get number of creeps
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
//debug info: Energy in room + number of harvesters
        for(var name in Game.rooms) {
            console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
        }
        console.log('Harvesters: ' + harvesters.length);    
        console.log('Upgraders: ' + upgraders.length);
        console.log('Builders: ' + builders.length);


//autospawn if less than 2 Harvesters live
        if(harvesters.length < 3) {
            var newName = 'Harvester' + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'harvester'}});
        }
//auutospawn if less than 1 Upgrader
        if(upgraders.length < 1) {
            var newName = 'Upgrader' + Game.time;
            console.log('Spawning new upgrader: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'upgrader'}});
        }
//auutospawn if less than 1 Upgrader
        if(builders.length < 1) {
            var newName = 'Builder' + Game.time;
            console.log('Spawning new builder: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'builder'}});
        }

//display role of creeps being spawned
        if(Game.spawns['Spawn1'].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
            Game.spawns['Spawn1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn1'].pos.x + 1, 
                Game.spawns['Spawn1'].pos.y, 
                {align: 'left', opacity: 0.8});
        }
	}
};

module.exports = autoSpawn;