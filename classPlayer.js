



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
    this.update();
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
    this.update();
  }


  this.removeItem = function (itemName)
  {
    var index = this.items.indexOf(itemName);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
    this.update();
  }


  this.hasItem = function (itemName)
  {
    if (this.items.indexOf(itemName) > -1) { return true; }
    return false;
  }



  this.update = function ()
  {

    $('#player-health').html(this.health);

    var html = "";

    for (var i = 0; i < this.items.length; i++) {
      if (html.length > 0) { html += "<br />"; }
      html += this.items[i];
    }

    $("#player-items").html(html);

  }



}
