

function Node (args) {

  var args = args || {};

  this.id = args.id || '';
  this.text = args.text || new Array();
  this.options = args.options || new Array();
  this.action = args.action || ''; // code to execute when node is loaded


  this.addText = function (text, condition = "", action = "")
  {

    var t = new nodeText({ text:text, condition:condition, action:action });
    this.text.push(t);

  }


  this.addOption = function (optionText, nodeId, condition = '')
  {

    var o = new Option({ text:optionText, nodeId:nodeId, condition:condition });
    this.options.push(o);

  }


  this.getText = function ()
  {

    var t = "";

    for (var i = 0; i < this.text.length; i++) {

      if (this.text[i].condition) {

        if (eval(this.text[i].condition)) {
          t += this.text[i].text + "<br /><br />";
          if (this.text[i].action) { eval(this.text[i].action); }
        }

      } else {
        t += this.text[i].text + "<br /><br />";
        if (this.text[i].action) { eval(this.text[i].action); }
      }

    }

    return t;

  }



  this.getOptions = function ()
  {

    var html = "";

    for (var i = 0; i < this.options.length; i++) {

      var optionHtml = '<div class="nodeOption" onclick="goNode(\'' + this.options[i].nodeId + '\')">' + this.options[i].text + '</div>';

      if (this.options[i].condition) {

        if (eval(this.options[i].condition)) {
          html += optionHtml;
        }

      } else {
        html += optionHtml;
      }

    }

    return html;

  }


}




function nodeText (args) {

  var args = args || {};

  this.text = args.text || "";
  this.condition = args.condition || "";
  this.action = args.action || "";

}




function Option (args) {

  var args = args || {};

  this.id = args.id || '';
  this.text = args.text || '';
  this.nodeId = args.nodeId || '';
  this.linkToVar = args.linkToVar || '';
  this.condition = args.condition || "";

}
