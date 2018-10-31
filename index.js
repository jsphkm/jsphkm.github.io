var Portfolio = function() {
  this.settings = {
    body: document.getElementsByTagName('body')
  }
}

Portfolio.prototype = {

  init: function() {
    // settings is available through s now
    s = this.settings;
    //this.bindUIActions();
    this.renderElements();
  },

  renderElements: function() {
    // Write rendering stuff here
  },

  bindUIActions: function() {
    // Write user actions here
  }
}

function loadmaster(){
  (new Portfolio).init();
}

window.addEventListener('load', loadmaster());