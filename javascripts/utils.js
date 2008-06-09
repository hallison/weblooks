/**
 * Theme Name : Clearly
 * Theme URI  : http://hallison.batista.nom.br/projetos/clearly
 * Description: JavaScript file with useful functions.
 * Version    : 0.1
 * Author     : Hallison Batista
 * Author URI : http://hallison.batista.nom.br
 */

function visible(elementId) {
  var element = document.getElementById(elementId)
  if (element)
    if (element.style.display != "none")
      return true
    else
      return false
}

function display(elementId) {
  var element = document.getElementById(elementId)
  if (element) element.style.display = ""
}

function hidden(elementId) {
  var element = document.getElementById(elementId)
  if (element) element.style.display = "none"
}

function displayOrHidden(elementId) {
  if (visible(elementId))
    hidden(elementId)
  else
    display(elementId)
}

function displayOrHiddenElements(firstElementId,secondElementId) {
  displayOrHidden(firstElementId)
  displayOrHidden(secondElementId)
}

function displayAll(pattern, length, index) {
  var i = (index)? index : 0
  for (i; i <= length; i++) {
    display(document.getElementById(pattern + i))
  }
}

function hiddenAll(pattern, length, index) {
  var i = (index)? index : 0
  for (i; i <= length; i++) {
    hidden(pattern + i)
  }
}

function setValue(elementId, newValue) {
  var element = document.getElementById(elementId);

  if (element.innerHTML)
    element.innerHTML = newValue;

  if (element.value)
    element.value = newValue;
}

function checkAll(formNameOrIdOrIndex, objectOrIdOrName) {
  var listOfElements   = document.forms[formNameOrIdOrIndex].elements
  var elementToChecked = objectOrIdOrName
  
  if (!elementToChecked)
    elementToChecked = (document.forms[formNameOrIdOrIndex].objectOrIdOrName)? document.forms[formNameOrIdOrIndex].objectOrIdOrName : document.getElementById(objectOrIdOrName)

  if (elementToChecked) {
    for (i = 0; i < listOfElements.length; i++) {
      if (listOfElements[i].type == "checkbox")
        listOfElements[i].checked = (elementToChecked.type == "checkbox")? elementToChecked.checked : elementToChecked.value
    }
  }
}

function displayHTML(printContent) {
  var inf = printContent;
  var win = window.open("print.htm", 'popup', 'toolbar = no, status = no');
  win.document.write(inf);
  win.document.close(); // new line
}


