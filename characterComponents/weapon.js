

class Weapon{
	constructor(name, type, attackSound, damageStats, weight){
		this.name = name;
		this.type = type;
		this.attackSound = attackSound;
		this.damageStats = damageStats;
		this.weight = weight;

	}
	wield( bearer ){

	}
	use(){
		var damageCount = 0;
		for ( var i = 0; i < this.damageStats.count; i++) {
			var roll = Math.floor(Math.random() * this.damageStats.dice) + 1;
			damageCount += roll;
		}
		
		return damageCount;

	}
	

	remove(){
		
	}
	generateAttackMessage(){
		//bludgeoning weapons swings
		//slashing weapons slashes
		//piercing weapons stabs
		if (this.type === 'bludgeoning') {
			return 'swings';

		} else if (this.type === "slashing") {
			return 'slashes';
		} else {
			return 'stabs';
		}
	}
	getData(){
		
	}
}