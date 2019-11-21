
var nodes = new Array();
var player = new Player();

function init ()
{

  goNode('start');
  console.log("OK");

}






function goNode (nodeId)
{

  var node = getNodeById(nodeId);

  $('#text').html(node.text);

  // options
  var options = node.options;
  var optionsHtml = '';

  for (var i = 0; i < node.options.length; i++) {

    optionsHtml += '<div class="nodeOption" onclick="goNode(\'' + node.options[i].nodeId + '\')">' + node.options[i].text + '</div>';

  }

  $('#options').html(optionsHtml);

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
