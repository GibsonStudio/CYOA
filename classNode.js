

function Node (args) {

  var args = args || {};

  this.id = args.id || '';
  this.text = args.text || '';
  this.options = args.options || new Array();
  this.action = args.action || ''; // code to execute when node is loaded

  this.addOption = function (optionText, nodeId) {

    var o = new Option();
    o.text = optionText;
    o.nodeId = nodeId;
    this.options.push(o);

  }

}






function Option (args) {

  var args = args || {};

  this.id = args.id || '';
  this.text = args.text || '';
  this.nodeId = args.nodeId || '';

}
