



function Player (args) {

  var args = args || {};
  this.name = args.name || 'Player';
  this.age = args.age || 6;
  this.health = args.health || 100;
  this.money = args.money || 0;
  this.items = args.items || new Array();


  this.injure = function (damage)
  {

    this.health = Math.max(this.health - damage, 0);
    console.log(this.health);
    if (this.health <= 0) { this.die(); }

  }


  this.die = function ()
  {
    console.log('Your are dead. Game over.');
  }


  this.giveItem = function (itemName)
  {
    if (this.items.indexOf(itemName) < 0) {
      this.items.push(itemName);
    }
  }




  this.hasItem = function (itemName)
  {
    if (this.items.indexOf(itemName) > -1) { return true; }
    return false;
  }





}
