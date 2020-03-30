let htmlGroup = '';
let userInput = '';
let userSelection = '';

function print(message) {
  let outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildBlock(block) {
  html = '';
  //build html blocks
  html += '<strong>Name: ' + block.name + '</strong>';
  html += '<p>Track: ' + block.track + '<p>';
  html += '<p>Achievements: ' + block.achievements + '</p>';
  html += '<p>Points:' + block.points + '</p>';
  return html;
}

do {
  userInput = prompt("Name a student or type 'quit' to end session.");
    for (i = 0; i < students.length; i ++){
      var currentName = students[i].name;
      if (userInput.toUpperCase() === currentName.toUpperCase()){
        userSelection = i;
        console.log('User Input: ' + userInput);
        console.log('works!');
        console.log("Selected Number:" + userSelection);
      } else if (userInput.toUpperCase() != currentName.toUpperCase()) {
        console.log('No match, try again.');
      }
    }
} while (userInput.toUpperCase() != 'QUIT');

htmlGroup = buildBlock(students[userSelection]);
print(htmlGroup);