import React from 'react';

const CommentsComponent = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);
  const randomNum = Math.random();


  return (
    <div className='commentsset'>
    <p>Trying out to see if this is working!</p></div>
    <div>
    <h3>A demonstration of how to access a Text Field</h3>

<input type="text" id="myText" value="Some text...">

<p>Click the "Try it" button to get the text in the text field.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}
</script></input>
</div>
    
  );
        }

export default CommentsComponent;