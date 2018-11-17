

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

	}
	remove(){
		
	}
	generateAttackMessage(){
		//bludgeoning weapons swings
		//slashing weapons slashes
		//piercing weapons stabs
	}
	getData(){
		var damageStats = 0;
		for ( var i = 0; i < this.damageStats.count; i++) {
			var roll = Math.floor(Math.random() * 3) + 1;
			damageStats += roll;
		}
		

	}
}