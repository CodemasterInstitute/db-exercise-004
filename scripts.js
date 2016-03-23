function main() {
    
    // Exercise #1
    // Change the body tag's style so it has a font-family of "Arial, sans-serif".
    document.body.style.fontFamily = 'Arial, sans-serif';
    
    // Exercise #2
    // Replace each of the spans (firstName, favouriteFood, hometown) with your own information.  
    document.getElementById('firstName').innerHTML = 'Dan';
    document.getElementById('favouriteFood').innerHTML = 'Nachos';
    document.getElementById('hometown').innerHTML = 'Perth';
    
    // Exercise #3
    // Iterate through each li and change the class to "list-item". Add a style tag that sets a rule for "list-item" to make the color red.  
    var items = document.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'list-item';
    }
    
    // Exercise #4
    // Create a new img element and set its src attribute to a picture of you. Append that element to the page. 
    var myPic = document.createElement('img');
    myPic.src = 'http://dummyimage.com/600x400/000/fff';
    document.body.appendChild(myPic);
    
}

function buttonPress() {
    
    // Exercise #5
    // Update the button lable to display 'Pressed at 16:49:00 GMT+0800 (W. Australia Standard Time)' when it's clicked. You'll need to first lookup how to determine the time in JavaScript before you can set the button label!
    var date = new Date();
    
    var inputs = document.getElementsByTagName('input');
    inputs[0].value = 'Pressed at ' + date.toTimeString();
    
}