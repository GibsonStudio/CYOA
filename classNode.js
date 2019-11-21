

function Node (args) {

  var args = args || {};

  this.id = args.id || '';
  this.text = args.text || '';
  this.options = args.options || new Array();
  this.action = args.action || ''; // code to execute when node is loaded

  this.addOption = function (optionText, nodeId, linkToVar = '') {

    var o = new Option();
    o.text = optionText;
    o.nodeId = nodeId;
    o.linkToVar = linkToVar;
    this.options.push(o);

  }

}






function Option (args) {

  var args = args || {};

  this.id = args.id || '';
  this.text = args.text || '';
  this.nodeId = args.nodeId || '';
  this.linkToVar = args.linkToVar || '';

}
