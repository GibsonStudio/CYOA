

var node = new Node();
node.id = "start";
var t = "XXX It's Saturday morning. <br /><br /> You wake up early and can here lots of noise downstairs.";
t += "<br /><br />What do you do?";
node.addText(t);
node.addOption('Go back to sleep', "back-to-sleep");
node.addOption("Go into Mummy and Daddy's room", "mummy-and-daddy-room");
node.addOption("Go downstairs and investigate", "go-downstairs");
nodes.push(node);


var node = new Node();
node.id = "back-to-sleep";
var t = "You try and go back to sleep but the noise is keeping you awake.<br /><br />";
t += "You decide to get up. Do you....";
node.addText(t);
node.addOption("go into Mummy and Daddy's room", "mummy-and-daddy-room");
node.addOption("go downstairs and investigate", "go-downstairs");
nodes.push(node);


var node = new Node();
node.id = "mummy-and-daddy-room";
var t = "Mummy and Daddy are both asleep.<br /><br />Who do you want to do?";
node.addText(t);
node.addOption("Leave them alone and go downstairs", "go-downstairs");
node.addOption("Wake Mummy", "wake-mummy");
node.addOption("Wake Daddy", "wake-daddy");
nodes.push(node);


var node = new Node();
node.id = "wake-daddy";
var t = "You poke Daddy in the face.<br /><br />";
t += "\"Ow!\" he says. What's the matter?<br /><br />";
t += "You explain about the noise. Daddy gives you his torch and tells you to go and investigate.";
node.addText(t);
node.addOption("Go downstairs", "go-downstairs");
node.addOption("Wake Mummy", "wake-mummy", "worldVars['mummy-asleep']");
node.action = "player.giveItem('torch');worldVars['daddy-asleep'] = false;";
nodes.push(node);


var node = new Node();
node.id = "wake-mummy";
var t = "You shake Mummy.<br /><br />She groans and then does a smelly fart!<br /><br />";
t += "The smell is terrible and you lose 10 health points.";
node.addText(t);
node.action = "player.injure(10);worldVars['mummy-asleep'] = false;";
node.addOption("Go downstairs", "go-downstairs");
node.addOption("Wake Daddy", "wake-daddy", "worldVars['daddy-asleep']");
nodes.push(node);


var node = new Node();
node.id = "go-downstairs";
node.addText("You stand at the top of the stairs but is too dark to see.");
node.addText("You press the light switch but nothing happens. You decide to go down anyway.");
node.addText("Luckily, daddy gave you a torch and you get downstairs safely.", "player.hasItem('torch')");
node.addText("You struggle to see and trip on a toy. You fall down and bash your head. Lose 10 health.", "!player.hasItem('torch')", "player.injure(10)");
node.addOption("Go into the lounge", "go-in-lounge");
node.addOption("Go into the kitchen", "go-in-kitchen");
nodes.push(node);



// go-in-lounge
// go-in-kitchen











//
