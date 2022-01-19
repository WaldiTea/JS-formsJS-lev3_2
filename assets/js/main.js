function changeBackground() {
  let red = document.getElementById('red').value;
  let green = document.getElementById('green').value;
  let blue = document.getElementById('blue').value;
  let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.body.style.backgroundColor = color;
}