

var node = new Node();
node.id = "start";
node.text = "It's Saturday morning. <br /><br /> You wake up early and can here lots of noise downstairs.";
node.text += "<br /><br />What do you do?";
node.addOption('Go back to sleep', "back-to-sleep");
node.addOption("Go into Mummy and Daddy's room", "mummy-and-daddy-room");
node.addOption("Go downstairs and investigate", "go-downstairs");
nodes.push(node);


var node = new Node();
node.id = "back-to-sleep";
node.text = "You try and go back to sleep but the noise is keeping you awake.<br /><br />";
node.text += "You decide to get up. Do you....";
node.addOption("go into Mummy and Daddy's room", "mummy-and-daddy-room");
node.addOption("go downstairs and investigate", "go-downstairs");
nodes.push(node);


var node = new Node();
node.id = "mummy-and-daddy-room";
node.text = "Mummy and Daddy are both asleep.<br /><br />Who do you wake up?";
node.addOption("Mummy", "wake-mummy");
node.addOption("Daddy", "wake-daddy");
nodes.push(node);


var node = new Node();
node.id = "wake-daddy";
node.text = "You poke Daddy in the face.<br /><br />";
node.text += "\"Ow!\" he says. What's the matter?<br /><br />";
node.text += "You explain about the noise. Daddy gives you his torch and tells you to go and investigate.";
node.addOption("Go downstairs", "go-downstairs");
node.addOption("Wake Mummy", "wake-mummy", "mummy-asleep");
node.action = "player.giveItem('torch');worldVars['daddy-asleep'] = false;";
nodes.push(node);


var node = new Node();
node.id = "wake-mummy";
node.text = "You shake Mummy.<br /><br />She groans and then does a smelly fart!<br /><br />";
node.text += "The smell is terrible and you lose 10 health points.";
node.action = "player.injure(10);worldVars['mummy-asleep'] = false;";
node.addOption("Go downstairs", "go-downstairs");
node.addOption("Wake Daddy", "wake-daddy", "daddy-asleep");
nodes.push(node);


// go-downstairs











//
