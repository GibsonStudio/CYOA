

var node = new Node();
node.id = "start";
node.text = "It's Saturday morning. <br /><br /> You wake up early and can here lots of noise downstairs.";
node.text += "<br /><br />What do you do?";
node.addOption('Go back to sleep', "back-to-sleep");
node.addOption("Go into Mummy and Daddy's room", "mummy-and-daddy-room");
node.addOption("Go downstairs and investigate", "");
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
node.addOption("Mummy", "");
node.addOption("Daddy", "");
nodes.push(node);
