document.getElementById("toggleSwitch").onclick = function() {
    myFunction()
  };

  function myFunction() {
    let color = document.body.style.background;
    if (color === 'black') {
      document.body.style.background = "#BB9797";
    } else {
      document.body.style.background = "black";
    }

  }