const speech = new p5.seechRec('en-US', parseResult)
speech.continuous = true
speech.interimResullts = false

function setup() {
    speech.start()
}
function change (color) {
    document.body.style.background = color ;
  }
  <div id="wrapper">
   <div id="topLeft" class="left">
    <div id="one" onclick="change('darkgrey')"> click me for dark grey </div>
    <div id="two" onclick="change('white')"> click me for white </div>
   </div>
</div>