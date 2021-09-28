/* -------------- */
/* main functions */
/* -------------- */

function onload() {
  console.log("start");
  /* create puzzle */
  a1();
  /* unsolve puzzle */
  {}
  /* display puzzle */
  {
    var counter = 1;
    function display(row) {
      for (var i = 1; i < 10; i++) {
        if (cells[counter] > 0) {
          document.getElementById(row + i).innerHTML = cells[counter];
          document.getElementById(row + i).style = "font-weight:bold;";
          setNumbers.push((row + i));
        }
        counter++;
      }
    }
    display("a");
    display("b");
    display("c");
    display("d");
    display("e");
    display("f");
    display("g");
    display("h");
    display("i");
  }
}

function get(cellX, cellY, x, y) {
  cellX += x;
  cellY += y;
  if (cellX > 0 && cellX < 10 && cellY > 0 && cellY < 10) {
    if (cellY == 1) {
      return X1[cellX];
    } else if (cellY == 2) {
      return X2[cellX];
    } else if (cellY == 3) {
      return X3[cellX];
    } else if (cellY == 4) {
      return X4[cellX];
    } else if (cellY == 5) {
      return X5[cellX];
    } else if (cellY == 6) {
      return X6[cellX];
    } else if (cellY == 7) {
      return X7[cellX];
    } else if (cellY == 8) {
      return X8[cellX];
    } else if (cellY == 9) {
      return X9[cellX];
    }
  } else {
    return 0;
  }
}

function rules(cell, number) {
  var invalid = false;
  /* consecutive */
  if (co) {}
  /* killer (cage) */
  if (ca) {}
  /* non consecutive */
  if (no) {}

  /* sandwich */
  if (sa) {}
  /* kropki */
  if (kr) {}
  /* xv */
  if (xv) {}

  /* thermo */
  if (th) {}
  /* palidrome */
  if (pa) {}
  /* arrow */
  if (ar) {}

  /* diagonal (bishop) */
  if (di) {}
  /* king */
  if (ki) {}
  /* knight */
  if (kn) {}

  return invalid;
}

function set(cell) {
  /* set cell */
  if (!setNumbers.includes(cell)) {
    document.getElementById(cell).innerHTML = document.getElementById("selection").innerHTML;
  }
  /* check answer */
  if(check && !cell.innerHTML == ){
    document.getElementById(cell).style="color:red;";
  }
  else{
    document.getElementById(cell).style="color:black;";
  }
}

/* -------------- */
/* cell functions */
/* -------------- */

function a1() {
  if (A1tried.length < 9) {
    number = Math.floor(Math.random()*9+1);
    X1[1] = number;
    Y1[1] = number;
    cells[1] = number;
    A1tried.push(number);
    a2();
  } else {
    alert("No possible games with these settings.");
  }
}
function a2() {
  invalid = true;
  while (invalid && A2tried.length < 9) {
    number = Math.floor(Math.random()*9+1);
    invalid = false;
    if (A2tried.includes(number)) {
      invalid = true;
    } else {
      A2tried.push(number);
      if (X1.includes(number)) {
        invalid = true;
      } else {
        invalid = rules(2, 1);
      }
    }
  }
  if (invalid) {
    A2tried = [];
    a1();
  } else {
    X1[2] = number;
    Y2[1] = number;
    cells[2] = number;
    a3();
  }
}
function a3() {
  invalid = true;
  while (invalid && A3tried.length < 9) {
    number = Math.floor(Math.random()*9+1);
    invalid = false;
    if (A3tried.includes(number)) {
      invalid = true;
    } else {
      A3tried.push(number);
      if (X1.includes(number)) {
        invalid = true;
      } else {
        invalid = rules(3, 1);
      }
    }
  }
  if (invalid) {
    A3tried = [];
    a2();
  } else {
    X1[3] = number;
    Y3[1] = number;
    cells[3] = number;
    a4();
  }
}
function a4() {
  invalid = true;
  while (invalid && A4tried.length < 9) {
    number = Math.floor(Math.random()*9+1);
    invalid = false;
    if (A4tried.includes(number)) {
      invalid = true;
    } else {
      A4tried.push(number);
      if (X1.includes(number)) {
        invalid = true;
        A4tried.push(number);
      } else {
        invalid = rules(4, 1);
      }
    }
  }
  if (invalid) {
    A4tried = [];
    a3();
  } else {
    X1[4] = number;
    Y4[1] = number;
    cells[4] = number;
    a5();
  }
}
function a5() {
  invalid = true;
  while (invalid && A5tried.length < 9) {
    number = Math.floor(Math.random()*9+1);
    invalid = false;
    if (A5tried.includes(number)) {
      invalid = true;
    } else {
      A5tried.push(number);
      if (X1.includes(number)) {
        invalid = true;
      } else {
        invalid = rules(5, 1);
      }
    }
  }
  if (invalid) {
    A5tried = [];
    a4();
  } else {
    X1[5] = number;
    Y5[1] = number;
    cells[5] = number;
    a6();
  }
}
function a6() {
  invalid = true;
  while (invalid && A6tried.length < 9) {
    number = Math.floor(Math.random()*9+1);
    invalid = false;
    if (A6tried.includes(number)) {
      invalid = true;
    } else {
      A6tried.push(number);
      if (X1.includes(number)) {
        invalid = true;
      } else {
        invalid = rules(6, 1);
      }
    }
  }
  if (invalid) {
    A6tried = [];
    a5();
  } else {
    X1[6] = number;
    Y6[1] = number;
    cells[6] = number;
    a7();
  }
}
function a7() {
  invalid = true;
  while (invalid && A7tried.length < 9) {
    number = Math.floor(Math.random()*9+1);
    invalid = false;
    if (A7tried.includes(number)) {
      invalid = true;
    } else {
      A7tried.push(number);
      if (X1.includes(number)) {
        invalid = true;
      } else {
        invalid = rules(7, 1);
      }
    }
  }
  if (invalid) {
    A7tried = []
    a6();
  } else {
    X1[7] = number;
    Y7[1] = number;
    cells[7] = number;
    a8();
  }
}
function a8() {
  invalid = true;
  while (invalid && A8tried.length < 9) {
    number = Math.floor(Math.random()*9+1);
    invalid = false;
    if (A8tried.includes(number)) {
      invalid = true;
    } else {
      A8tried.push(number);
      if (X1.includes(number)) {
        invalid = true;
      } else {
        invalid = rules(8, 1);
      }}
  }
  if (invalid) {
    A8tried = []
    a7();
  } else {
    X1[8] = number;
    Y8[1] = number;
    cells[8] = number;
    a9();
  }
}
function a9() {
  invalid = true;
  while (invalid && A9tried.length < 9) {
    number = Math.floor(Math.random()*9+1);
    invalid = false;
    if (A9tried.includes(number)) {
      invalid = true;
    } else {
      A9tried.push(number);
      if (X1.includes(number)) {
        invalid = true;
      } else {
        invalid = rules(9, 1);
      }
    }
  }
  if (invalid) {
    A9tried = []
    a8();
  } else {
    X1[9] = number;
    Y9[1] = number;
    cells[9] = number;
    b1();
  }
}

function b1() {
  invalid = true;
  while (invalid && B1tried.length < 9) {
    number = Math.floor(Math.random()*9+1);
    invalid = false;
    if (B1tried.includes(number)) {
      invalid = true;
    } else {
      B1tried.push(number);
      if (Y1.includes(number)) {
        invalid = true;
      } else if (X1[1] == number || X1[2] == number || X1[3] == number) {
        invalid = true;
      } else {
        invalid = rules();
      }
    }
  }
  if (invalid) {
    B1tried = [];
    A9tried = [];
    A8tried = [];
    A7tried = [];
    A6tried = [];
    A5tried = [];
    A4tried = [];
    A3tried = [];
    A2tried = [];
    a1();
  } else {
    X2[1] = number;
    Y1[2] = number;
    cells[10] = number;
    b2();
  }
}
function b2() {
  invalid = true;
  while (invalid && B2tried.length < 9) {
    number = Math.floor(Math.random()*9+1);
    invalid = false;
    if (B2tried.includes(number)) {
      invalid = true;
    } else {
      B1tried.push(number);
      if (Y2.includes(number) || X2.includes(number)) {
        invalid = true;
      } else if (X1[1] == number || X1[2] == number || X1[3] == number) {
        invalid = true;
      } else {
        invalid = rules();
      }
    }
  }
  if (invalid) {
    B2tried = [];
    b1();
  } else {
    X2[2] = number;
    Y2[2] = number;
    cells[11] = number;
    //b3();
  }
}

/* --------- */
/* variables */
/* --------- */

/* misc */
var number = 0;
var check = false;
var invalid = true;
var setNumbers = new Array(0);

/* rules */
var co = false;
var ca = false;
var no = false;

var sa = false;
var kr = false;
var xv = false;

var th = false;
var pa = false;
var ar = false;

var di = false;
var ki = false;
var kn = false;

/* board */

var cells = new Array(82);

//0,0 wont be used (for simplicity)
var X1 = new Array(10);
var X2 = new Array(10);
var X3 = new Array(10);
var X4 = new Array(10);
var X5 = new Array(10);
var X6 = new Array(10);
var X7 = new Array(10);
var X8 = new Array(10);
var X9 = new Array(10);

var Y1 = new Array(10);
var Y2 = new Array(10);
var Y3 = new Array(10);
var Y4 = new Array(10);
var Y5 = new Array(10);
var Y6 = new Array(10);
var Y7 = new Array(10);
var Y8 = new Array(10);
var Y9 = new Array(10);

/* construction */

var A1tried = new Array(0);
var A2tried = new Array(0);
var A3tried = new Array(0);
var A4tried = new Array(0);
var A5tried = new Array(0);
var A6tried = new Array(0);
var A7tried = new Array(0);
var A8tried = new Array(0);
var A9tried = new Array(0);

var B1tried = new Array(0);
var B2tried = new Array(0);
var B3tried = new Array(0);
var B4tried = new Array(0);
var B5tried = new Array(0);
var B6tried = new Array(0);
var B7tried = new Array(0);
var B8tried = new Array(0);
var B9tried = new Array(0);

var C1tried = new Array(0);
var C2tried = new Array(0);
var C3tried = new Array(0);
var C4tried = new Array(0);
var C5tried = new Array(0);
var C6tried = new Array(0);
var C7tried = new Array(0);
var C8tried = new Array(0);
var C9tried = new Array(0);

var D1tried = new Array(0);
var D2tried = new Array(0);
var D3tried = new Array(0);
var D4tried = new Array(0);
var D5tried = new Array(0);
var D6tried = new Array(0);
var D7tried = new Array(0);
var D8tried = new Array(0);
var D9tried = new Array(0);

var E1tried = new Array(0);
var E2tried = new Array(0);
var E3tried = new Array(0);
var E4tried = new Array(0);
var E5tried = new Array(0);
var E6tried = new Array(0);
var E7tried = new Array(0);
var E8tried = new Array(0);
var E9tried = new Array(0);

var F1tried = new Array(0);
var F2tried = new Array(0);
var F3tried = new Array(0);
var F4tried = new Array(0);
var F5tried = new Array(0);
var F6tried = new Array(0);
var F7tried = new Array(0);
var F8tried = new Array(0);
var F9tried = new Array(0);

var G1tried = new Array(0);
var G2tried = new Array(0);
var G3tried = new Array(0);
var G4tried = new Array(0);
var G5tried = new Array(0);
var G6tried = new Array(0);
var G7tried = new Array(0);
var G8tried = new Array(0);
var G9tried = new Array(0);

var H1tried = new Array(0);
var H2tried = new Array(0);
var H3tried = new Array(0);
var H4tried = new Array(0);
var H5tried = new Array(0);
var H6tried = new Array(0);
var H7tried = new Array(0);
var H8tried = new Array(0);
var H9tried = new Array(0);

var I1tried = new Array(0);
var I2tried = new Array(0);
var I3tried = new Array(0);
var I4tried = new Array(0);
var I5tried = new Array(0);
var I6tried = new Array(0);
var I7tried = new Array(0);
var I8tried = new Array(0);
var I9tried = new Array(0);