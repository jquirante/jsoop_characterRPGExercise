

class Character{
	constructor(name, charClass){
		this.name = name;
		this.charClass = charClass;
		this.stats = {
			strength: null,
			dexterity: null,
			constitution: null,
			willpower: null,
			intelligence: null,
			charisma: null
		}
		this.weapon = null;
		this.armor = null;
		this.itemWeight = 0;
		this.clothing = {
			head: null,
			neck: null,
			torso: null,
			hands: null,
			legs: null,
			feet: null
		}
	}
	generateStat( statName, valueDice){
		var total = 0;
		
		for (var i = 0; i < valueDice.count; i++) {
			var roll = Math.floor( Math.random() * 6) + 1;
			total+=roll;
		}
		this.stats[statName] = total;
		return total;

	}
	equipWeapon( weapon ){
		this.weapon = weapon; 

		var message = ' wields a ' + weapon.name;
		return message;
		
	}
	wearItem( wearable ){
		this.clothing[wearable.location] = wearable;

		var message = ' wears a ' + wearable.name + ' on his ' + wearable.location;
		return message;

	}
	attack( target ){
		
	}
}