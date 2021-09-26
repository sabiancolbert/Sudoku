/* ------------- */
/* game creation */
/* ------------- */

/* create variables */
var number;
var invalid = true;
const setNumbers = new Array(0);

const X1 = new Array(10);
const X2 = new Array(10);
const X3 = new Array(10);
const X4 = new Array(10);
const X5 = new Array(10);
const X6 = new Array(10);
const X7 = new Array(10);
const X8 = new Array(10);
const X9 = new Array(10);

const Y1 = new Array(10);
const Y2 = new Array(10);
const Y3 = new Array(10);
const Y4 = new Array(10);
const Y5 = new Array(10);
const Y6 = new Array(10);
const Y7 = new Array(10);
const Y8 = new Array(10);
const Y9 = new Array(10);
//0,0 wont be used. starts at 1,1 for simplicity;

const A1tried = new Array([]);
const A2tried = new Array(0);
const A3tried = new Array(0);
const A4tried = new Array(0);
const A5tried = new Array(0);
const A6tried = new Array(0);
const A7tried = new Array(0);
const A8tried = new Array(0);
const A9tried = new Array(0);

const B1tried = new Array(0);
const B2tried = new Array(0);
const B3tried = new Array(0);
const B4tried = new Array(0);
const B5tried = new Array(0);
const B6tried = new Array(0);
const B7tried = new Array(0);
const B8tried = new Array(0);
const B9tried = new Array(0);

const C1tried = new Array(0);
const C2tried = new Array(0);
const C3tried = new Array(0);
const C4tried = new Array(0);
const C5tried = new Array(0);
const C6tried = new Array(0);
const C7tried = new Array(0);
const C8tried = new Array(0);
const C9tried = new Array(0);

const D1tried = new Array(0);
const D2tried = new Array(0);
const D3tried = new Array(0);
const D4tried = new Array(0);
const D5tried = new Array(0);
const D6tried = new Array(0);
const D7tried = new Array(0);
const D8tried = new Array(0);
const D9tried = new Array(0);

const E1tried = new Array(0);
const E2tried = new Array(0);
const E3tried = new Array(0);
const E4tried = new Array(0);
const E5tried = new Array(0);
const E6tried = new Array(0);
const E7tried = new Array(0);
const E8tried = new Array(0);
const E9tried = new Array(0);

const F1tried = new Array(0);
const F2tried = new Array(0);
const F3tried = new Array(0);
const F4tried = new Array(0);
const F5tried = new Array(0);
const F6tried = new Array(0);
const F7tried = new Array(0);
const F8tried = new Array(0);
const F9tried = new Array(0);

const G1tried = new Array(0);
const G2tried = new Array(0);
const G3tried = new Array(0);
const G4tried = new Array(0);
const G5tried = new Array(0);
const G6tried = new Array(0);
const G7tried = new Array(0);
const G8tried = new Array(0);
const G9tried = new Array(0);

const H1tried = new Array(0);
const H2tried = new Array(0);
const H3tried = new Array(0);
const H4tried = new Array(0);
const H5tried = new Array(0);
const H6tried = new Array(0);
const H7tried = new Array(0);
const H8tried = new Array(0);
const H9tried = new Array(0);

const I1tried = new Array(0);
const I2tried = new Array(0);
const I3tried = new Array(0);
const I4tried = new Array(0);
const I5tried = new Array(0);
const I6tried = new Array(0);
const I7tried = new Array(0);
const I8tried = new Array(0);
const I9tried = new Array(0);

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





/* set rules */
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





/* create cell functions */
function a1() {
  if (A1tried.length < 9) {
    number = Math.floor(Math.random()*9);
    X1[1] = number;
    Y1[1] = number;
    a2();
  } else {
    alert("No possible games with these settings.");
  }
}
function a2() {
  invalid = true;
  while (invalid && A2tried.length < 9) {
    number = Math.floor(Math.random()*9);
    invalid = false;
    if (A2tried.includes(number)) {
      invalid = true;
    } else if (X1.includes(number)) {
      invalid = true;
      A2tried.push(number);
    } else {
      invalid = rules(2, 1);
      A2tried.push(number);
    }
  }
  if (invalid) {
    A2tried = []
    a1();
  } else {
    X1[2] = number;
    Y2[1] = number;
    a3();
  }
}
function a3() {
  invalid = true;
  while (invalid && A3tried.length < 9) {
    number = Math.floor(Math.random()*9);
    invalid = false;
    if (A3tried.includes(number)) {
      invalid = true;
    } else if (X1.includes(number)) {
      invalid = true;
      A3tried.push(number);
    } else {
      invalid = rules(3, 1);
      A3tried.push(number);
    }
  }
  if (invalid) {
    A3tried = []
    a2();
  } else {
    X1[3] = number;
    Y3[1] = number;
    a4();
  }
}
function a4() {
  invalid = true;
  while (invalid && A4tried.length < 9) {
    number = Math.floor(Math.random()*9);
    invalid = false;
    if (A4tried.includes(number)) {
      invalid = true;
    } else if (X1.includes(number)) {
      invalid = true;
      A4tried.push(number);
    } else {
      invalid = rules(4, 1);
      A4tried.push(number);
    }
  }
  if (invalid) {
    A4tried = []
    a3();
  } else {
    X1[4] = number;
    Y4[1] = number;
    a5();
  }
}
function a5() {
  invalid = true;
  while (invalid && A5tried.length < 9) {
    number = Math.floor(Math.random()*9);
    invalid = false;
    if (A5tried.includes(number)) {
      invalid = true;
    } else if (X1.includes(number)) {
      invalid = true;
      A5tried.push(number);
    } else {
      invalid = rules(5, 1);
      A5tried.push(number);
    }
  }
  if (invalid) {
    A5tried = []
    a4();
  } else {
    X1[5] = number;
    Y5[1] = number;
    a6();
  }
}
function a6() {
  invalid = true;
  while (invalid && A6tried.length < 9) {
    number = Math.floor(Math.random()*9);
    invalid = false;
    if (A6tried.includes(number)) {
      invalid = true;
    } else if (X1.includes(number)) {
      invalid = true;
      A6tried.push(number);
    } else {
      invalid = rules(6, 1);
      A6tried.push(number);
    }
  }
  if (invalid) {
    A6tried = []
    a5();
  } else {
    X1[6] = number;
    Y6[1] = number;
    a7();
  }
}
function a7() {
  invalid = true;
  while (invalid && A7tried.length < 9) {
    number = Math.floor(Math.random()*9);
    invalid = false;
    if (A7tried.includes(number)) {
      invalid = true;
    } else if (X1.includes(number)) {
      invalid = true;
      A7tried.push(number);
    } else {
      invalid = rules(7, 1);
      A7tried.push(number);
    }
  }
  if (invalid) {
    A7tried = []
    a6();
  } else {
    X1[7] = number;
    Y7[1] = number;
    a8();
  }
}
function a8() {
  invalid = true;
  while (invalid && A8tried.length < 9) {
    number = Math.floor(Math.random()*9);
    invalid = false;
    if (A8tried.includes(number)) {
      invalid = true;
    } else if (X1.includes(number)) {
      invalid = true;
      A8tried.push(number);
    } else {
      invalid = rules(8, 1);
      A8tried.push(number);
    }
  }
  if (invalid) {
    A8tried = []
    a7();
  } else {
    X1[8] = number;
    Y8[1] = number;
    a9();
  }
}
function a9() {
  invalid = true;
  while (invalid && A9tried.length < 9) {
    number = Math.floor(Math.random()*9);
    invalid = false;
    if (A9tried.includes(number)) {
      invalid = true;
    } else if (X1.includes(number)) {
      invalid = true;
      A9tried.push(number);
    } else {
      invalid = rules(9, 1);
      A9tried.push(number);
    }
  }
  if (invalid) {
    A9tried = []
    a8();
  } else {
    X1[9] = number;
    Y9[1] = number;
    b1();
  }
}

function b1() {
  invalid = true;
  while (invalid && B1tried.length < 9) {
    number = Math.floor(Math.random()*9);
    invalid = false;
    if (B1tried.includes(number)) {
      invalid = true;
    } else if (Y1.includes(number)) {
      invalid = true;
      B1tried.push(number);
    } else {
      invalid = rules();
      B1tried.push(number);
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
    Y1[1] = number;
    b2();
  }
}
function b2() {
  invalid = true;
  while (invalid && B2tried.length < 9) {
    number = Math.floor(Math.random()*9);
    invalid = false;
    if (B2tried.includes(number)) {
      invalid = true;
    } else if (Y2.includes(number) || X2.includes(number)) {
      invalid = true;
      B2tried.push(number);
    } else {
      invalid = rules();
      B2tried.push(number);
    }
  }
  if (invalid) {
    B2tried = [];
    b1();
  } else {
    X2[2] = number;
    Y2[2] = number;
    b3();
  }
}
function b3 () {
  invalid = true;
  while (invalid && B3tried.length < 9) {
    number = Math.floor(Math.random()*9);
    invalid = false;
    if (B3tried.includes(number)) {
      invalid = true;
    } else if (Y3.includes(number) || X2.includes(number)) {
      invalid = true;
      B3tried.push(number);
    } else {
      invalid = rules();
      B3tried.push(number);
    }
  }
  if (invalid) {
    B3tried = [];
    b2();
  } else {
    X2[3] = number;
    Y3[2] = number;
    b4();
  }
}


function onload() {
  //javascript version number for testing

  document.getElementById("js").innerHTML = "     1   ";
  /* run cell functions */
  a1();
  /* unsolve puzzle */
  {}
  /* display puzzle */
  {
    console.log("works");
    //HERE use a cool alrpgithm for this
    //alsp make them bold or somwthing
    //HERE making cool algorithm
    document.getElementById('a1').innerHTML = X1[1];
    var counter = 1;
    X1.foreach(x => {
      document.getElementById("a" + counter).innerHTML = x; counter++;
    });
    //if cell not blank, add to setNumbers
  }
}
/* -------- */
/* gameplay */
/* -------- */
function set(cell) {
  /* set cell */
  if (!setNumbers.includes(cell)) {
    document.getElementById(cell).innerHTML = document.getElementById("selection").innerHTML;
  }
  /* check solvability */
  //if check is on, solve ENTIRE PUZZLE (incase there are multiple answers)
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