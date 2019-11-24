var pos = [0, 0];

function dice1(){
  var rnd = Math.floor(Math.random() * 6)+1;
  document.getElementById('randNum1').value = rnd;

  pos[0] = pos[0] + rnd;

  if(pos[0] === 15){
    pos[0] = 5;
  }
  else if (pos[0] === 23) {
    pos[0] = 16;
  }
  else if (pos[0] === 8) {
    pos[0] = 15;
  }
  else if (pos[0] === 19) {
    pos[0] = 24;
  }
  else if (pos[1] === 25 || pos[1] > 25) {
    document.getElementById('result1').innerHTML = "You lost";

  }
  else if (pos[0] === 25 || pos[0] > 25) {
    if (pos[0] < pos[1]) {
      document.getElementById('result1').innerHTML = "You lost";
    }
    else {
      document.getElementById('result1').innerHTML = "You won";
    }
  }


document.getElementById('Pos1').value = pos[0];

}
function dice2(){
  var rnd = Math.floor(Math.random() * 6)+1;
  document.getElementById('randNum2').value = rnd;

  pos[1] = pos[1] + rnd;

  if(pos[1] === 15){
    pos[1] = 5;
  }
  else if (pos[1] === 23) {
    pos[1] = 16;
  }
  else if (pos[1] === 8) {
    pos[1] = 15;
  }
  else if (pos[1] === 19) {
    pos[1] = 24;
  }
  else if (pos[0] === 25 || pos[0] > 25) {
    document.getElementById('result2').innerHTML = "You lost";

  }
  else if (pos[1] === 25 || pos[1] > 25) {
    if (pos[1] < pos[0]) {
      document.getElementById('result2').innerHTML = "You lost";
    }
    else {
      document.getElementById('result2').innerHTML = "You won";
    }
  }


document.getElementById('Pos2').value = pos[1];
}
