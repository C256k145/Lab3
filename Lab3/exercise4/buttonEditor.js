function update() {
  let redBorderVal = document.getElementById('redInputBorder');
  let greenBorderVal = document.getElementById('greenInputBorder');
  let blueBorderVal = document.getElementById('blueInputBorder');
  let borderWidth = document.getElementById('widthInputBorder');

  let redBackVal = document.getElementById('redInputBackground');
  let greenBackVal = document.getElementById('greenInputBackground');
  let blueBackVal = document.getElementById('blueInputBackground');

  let myText = document.getElementById('mainText');
  myText.style.border = borderWidth.value + 'px '+'solid '+
    'rgb('+redBorderVal.value+','+greenBorderVal.value+','+blueBorderVal.value+')';
  myText.style.backgroundColor = 'rgb('+redBackVal.value+','+greenBackVal.value+','
    +blueBackVal.value+')'
}
