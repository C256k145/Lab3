
pictures = ['Hank.jpeg', 'Whiskey.jpeg', 'Kinley.jpeg', 'Teddy.jpeg', 'Putin.jpeg']
let i=0;
function next() {
  if(i == 4) {
    i=0;
    document.getElementById("currentPic").src = 'Pictures/' + pictures[i];
  }
  else {
    i +=1;
    document.getElementById("currentPic").src = 'Pictures/' + pictures[i];

  }
}
function back() {
  if(i == 0) {
    i=4;
    document.getElementById("currentPic").src = 'Pictures/' + pictures[i];
  }
  else {
    i -=1;
    document.getElementById("currentPic").src = 'Pictures/' + pictures[i];
  }
}
