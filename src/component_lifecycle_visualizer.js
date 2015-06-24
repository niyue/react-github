import $ from 'jquery';

var ComponentLifeCycleVisualizer = {
  STATE_CHANGES: {
      MOUNT: 'mount',
      SHOULD_UPDATE: 'should_update',
      UPDATE: 'update'
  },
  sleepFor: function(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
  },
  componentDidUpdate: function(prevProps, prevState) {
    console.log('event=component_did_update');
    this._highlightChange(this.STATE_CHANGES.UPDATE);  
  },
  
  componentDidMount: function(prevProps, prevState) {
    this._highlightChange(this.STATE_CHANGES.MOUNT);  
  },
  
  _highlightChange: function(change) {
    var parentNode = this.getDOMNode(),
      ANIMATION_DURATION = 100,
      self = this;

    if (parentNode) {
      window.requestAnimationFrame(function highlightParentElementBackground(){
        // Immediately show the border
        var reactid = parentNode.attributes['data-reactid'].value;
        var selector = `div[data-reactid='${reactid}'`;
        var domNode = $(selector)[0];
        
        var node = parentNode;
        node.style.transition = 'background-color 0s';
        var color = 'green';
        if(change === 'mount') {
          color = 'fuchsia';
        } else if(change === 'update') {
          color = 'yellow';
        } else {
          color = 'green';
        }
        node.style.backgroundColor = color;
        //console.log('action=animate_element_background color=%s', color);

        // Animate the border back to monitored color
        window.requestAnimationFrame(function animateParentElementBackground() {
          node.style.backgroundColor = 'white';
          node.style.transition = `background-color ${ANIMATION_DURATION}ms linear`;
        });
      });
    }
  }
};

module.exports = ComponentLifeCycleVisualizer;