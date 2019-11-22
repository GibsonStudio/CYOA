
//TODO - change functions to use args rather than list of params

var nodes = new Array();
var player = new Player();

var worldVars = [];
worldVars['mummy-asleep'] = true;
worldVars['daddy-asleep'] = true;

function init ()
{

  goNode('start');
  player.update();
  console.log("OK");

}






function goNode (nodeId)
{

  var node = getNodeById(nodeId);

  $('#text').html(node.getText());
  $('#options').html(node.getOptions());

  // node actions?
  if (node.action) {
    eval(node.action);
  }

}






function getNodeById (nodeId)
{

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (node.id == nodeId) { return node; }
  }

  return new Node();

}












//
