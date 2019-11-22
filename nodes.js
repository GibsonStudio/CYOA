

var node = new Node({ id:"start" });
node.addText("It's Saturday morning. <br /><br /> You wake up early and can hear lots of noise downstairs.");
node.addText("What do you do?");
node.addOption('Go back to sleep', "back-to-sleep");
node.addOption("Go into Mummy and Daddy's room", "mummy-and-daddy-room");
node.addOption("Go downstairs and investigate", "go-downstairs");
nodes.push(node);


var node = new Node({ id:"back-to-sleep" });
node.addText("You try and go back to sleep but the noise is keeping you awake.");
node.addText("You decide to get up.");
node.addOption("Go into Mummy and Daddy's room", "mummy-and-daddy-room");
node.addOption("Go downstairs and investigate", "go-downstairs");
nodes.push(node);


var node = new Node({ id:"mummy-and-daddy-room" });
node.addText("Mummy and Daddy are both asleep.<br /><br />What do you want to do?");
node.addOption("Leave them alone and go downstairs", "go-downstairs");
node.addOption("Wake Mummy", "wake-mummy");
node.addOption("Wake Daddy", "wake-daddy");
nodes.push(node);


var node = new Node({ id:"wake-daddy" });
node.addText("You poke Daddy in the face.");
node.addText("\"Ow!\" he says. \"What's the matter?\"");
node.addText("You explain about the noise. Daddy gives you his torch and tells you to go and investigate.");
node.addOption("Go downstairs", "go-downstairs");
node.addOption("Wake Mummy", "wake-mummy", { condition:"worldVars['mummy-asleep']" });
node.action = "player.giveItem('torch');worldVars['daddy-asleep'] = false;";
nodes.push(node);


var node = new Node({ id:"wake-mummy" });
node.addText("You shake Mummy.<br /><br />She groans and then does a really loud and smelly fart!");
node.addText("The smell is terrible and you lose 10 health points.");
node.action = "player.injure(10);worldVars['mummy-asleep'] = false;";
node.addOption("Go downstairs", "go-downstairs");
node.addOption("Wake Daddy", "wake-daddy", { condition:"worldVars['daddy-asleep']" });
nodes.push(node);


var node = new Node();
node.id = "go-downstairs";
node.addText("You stand at the top of the stairs but is too dark to see.");
node.addText("You press the light switch but nothing happens. You decide to go down anyway.");
node.addText("Luckily, daddy gave you a torch and you get downstairs safely.", { condition:"player.hasItem('torch')" });
node.addText("You struggle to see and trip on a toy. You fall down and bash your head. Lose 10 health points.", { condition:"!player.hasItem('torch')", action:"player.injure(10)" });
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
node.addOption("Squirt her with the water pistol", "squirt-girl", { condition:"player.hasItem('water-pistol')" });
node.addOption("Poke her", "poke-girl");
node.addOption("Turn Netflix off and go back to bed.", "turn-netflix-off");
nodes.push(node);


var node = new Node({ id:"turn-netflix-off" });
node.addText("You turn Netflix off. The sleeping girl stirs and rolls over - it's your sister!");
node.addText("You are glad that you didn't squirt her.", { condition:"player.hasItem('water-pistol')" });
node.addText("Your sister settles down again and continues to sleep.");
node.addText("Now it's quiet you head back upstairs to get some more sleep.");
node.addText("You get into bed and feel warm and snuggly. You drift off to sleep and dream of further adventures.");
nodes.push(node);


var node = new Node({ id:"squirt-girl" });
node.addText("You point the water pistol at the girl and start squirting like a mad-man.");
node.addText("The girl wakes with a start and screams. She is not happy...");
node.addText("She starts kicking and punching at you. Lose 20 health points.", { action:"player.injure(20)" });
node.addText("You realize that the girl is your sister, oh no!");
node.addOption("Run back to your bedroom", "run-to-bedroom");
node.addOption("Stop squirting and say sorry", "stop-squirting");
nodes.push(node);


var node = new Node({ id:"stop-squirting" });
node.addText("You stop squirting and say 'sorry, sorry, sorry'.");
node.addText("Your sister calms down and you both start laughing - what a way to be woken up!");
node.addText("You both snuggle up on the sofa and start binge-watching Netflix.");
nodes.push(node);


var node = new Node({ id:"poke-girl" });
node.addText("You poke the girl and she rolls over - It's your sister!");
node.addOption("Squirt her in the face!", "squirt-girl", { condition:"player.hasItem('water-pistol')" });
node.addOption("Turn Netflix off", "turn-netflix-off-2");
node.addOption("Sit down and watch Netflix", "watch-netflix");
nodes.push(node);


var node = new Node({ id:"watch-netflix" });
node.addText("You start watching Friends and laugh loudly at Joey doing jazz-hands.");
node.addText("You feel a rumble in your tummy, and need to fart.");
node.addOption("Let rip", "do-a-fart");
node.addOption("Go to the toilet", "go-to-toilet");
nodes.push(node);


var node = new Node({ id:"go-to-toilet" });
node.addText("You sit on the toilet and start to poo.");
node.addText("You do lots of squidgy, smelly poos and fill the toilet.");
node.addText("Oh no! There is no toilet paper.");
node.addOption("Don't wipe", "dont-wipe");
node.addOption("Shout out and ask for some paper", "shout-out");
nodes.push(node);



var node = new Node({ id:"dont-wipe" });
node.addText("You don't wipe - you don't care if you smell.");
node.addText("You lose 30 health points.");
node.addText("You go back into the lounge and settle down with your sister.");
node.addOption("Go back into the lounge", "watch-friends");
node.action = "player.injure(30);";
nodes.push(node);


var node = new Node({ id:"shout-out" });
node.addText("\"Help, I need bum-wipe!\", you shout.");
node.addText("No one comes to help.");
node.addOption("Don't wipe", "dont-wipe");
nodes.push(node);



var node = new Node({ id:"do-a-fart" });
node.addText("You lean on one bum-cheeck and let a ripper go.");
node.addText("You wake up the girl - it's your sister!");
node.addText("You both laugh and hold your noses - it was a stinker!");
node.addOption("Watch Friends with your sister", "watch-friends");
nodes.push(node);


var node = new Node({ id:"watch-friends" });
node.addText("You snuggle up with your sister and enjoy a marathon session of Friends.");
node.addText("I wonder what adventures you will have tomorrow.");
nodes.push(node);


var node = new Node({ id:"turn-netflix-off-2" });
node.addText("You decide to leave your sister to sleep, she looks so cute.");
node.addText("You turn Netflix off and head back up to bed.");
node.addText("You get into bed and feel warm and snuggly. You drift off to sleep and dream of further adventures.");
nodes.push(node);


var node = new Node({ id:"run-to-bedroom" });
node.addText("You run back up to your bedroom and get back into bed.");
node.addText("you can hear your sister downstairs, she is really cross but she eventually settles down and goes quiet.");
node.addText("The noise from the telly is still bothering you and you can't get back to sleep.");
node.addOption("Go into Mummy and Daddy's room", "mummy-and-daddy-room");
node.addOption("Go downstairs and investigate", "go-downstairs");
nodes.push(node);











//
