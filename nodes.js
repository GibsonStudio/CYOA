

var node = new Node();
node.id = "start";
var t = "It's Saturday morning. <br /><br /> You wake up early and can here lots of noise downstairs.";
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
node.addText("The noise seems to be comming from the lounge, but the kitchen light is on.");
node.addOption("Go into the lounge", "go-in-lounge");
node.addOption("Go into the kitchen", "go-in-kitchen");
nodes.push(node);


var node = new Node({ id:"go-in-kitchen" });
node.addText("The kitchen is a complete mess. There is food everywhere and it looks like someone has tried to make some toast.");
node.addText("You see a water pistol on the worktop.");
node.addOption("Pick up the water pistol and go to the lounge", "pick-up-water-pistol");
node.addOption("Go to the lounge", "go-in-lounge");
nodes.push(node);


var node = new Node({ id:"pick-up-water-pistol" });
node.action = "player.giveItem('water-pistol');player.injure(10);";
node.addText("You carefully tip-toe to the worktop, trying to avoid all the food on the floor.");
node.addText("Suddenly you feel something cold and wet under your foot.");
node.addText("You have stepped in some soggy cornflakes, yuk! You slip and bang your head. Lose 10 health points.");
node.addText("You pick yourself up, grab the water pistol and head to the lounge.");
node.addOption("Go to the lounge", "go-in-lounge");
nodes.push(node);


var node = new Node({ id:"go-in-lounge" });
node.addText("You slowly open the lounge door and peer in. Netflix is blasting out episodes of Friends.");
node.addText("There is a girl asleep on the sofa. She is face down and you can't tell who it is.");
node.addOption("Squirt her with the water pistol", "squirt-girl", "player.hasItem('water-pistol')");
node.addOption("Poke her", "poke-girl");
node.addOption("Turn Netflix off and go back to bed.", "turn-netflix-off");
nodes.push(node);


var node = new Node({ id:"turn-netflix-off" });
node.addText("You turn Netflix off. The sleeping girl stirs and rolls over - it's your sister!");
node.addText("You are glad that you didn't squirt her.", "player.hasItem('water-pistol')");
node.addText("Now it's quiet you head back upstairs to get some more sleep.");
node.addText("You get into bed and feel warm and snuggly. You drift off to sleep and dream of further adventures.");
nodes.push(node);


var node = new Node({ id:"squirt-girl" });
node.addText("You point the water pistol at the girl and start squirting like a mad-man.");
node.addText("The girl wakes with a start and screams. She is not happy...");
node.addText("She starts kicking and punching at you.", "", "player.injure(20)");
node.addText("You realize that the girl is your sister, oh no!");
node.addOption("Run back to your bedroom", "run-to-bedroom");
node.addOption("Stop quirting and say sorry", "stop-squirting");
nodes.push(node);


var node = new Node({ id:"stop-squirting" });
node.addText("You stop squirting and say 'sorry, sorry, sorry'.");
node.addText("Your sister calms down and you both start laughing - what a way to be woken up!");
node.addText("You both snuggle up on the sofa and start binge-watching Netflix.");
nodes.push(node);


var node = new Node({ id:"poke-girl" });
node.addText("You poke the girl and she rolls over - It's your sister!");
//node.addOption("Squirt her in the face!", "squirt-girl", "");
nodes.push(node);

// run-to-bedroom
// poke-girl










//
