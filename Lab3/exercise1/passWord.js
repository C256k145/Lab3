function validate() {
  let box1 = document.getElementById('Box1')
  let box2 = document.getElementById('Box2')
  if(box1.value.length < 8) {
    alert("Password must be at least 8 characters")
  }
  else if(box1.value != box2.value) {
    alert("Password do not match")
  }
  else {
    alert("Success")
  }
}
