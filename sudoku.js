/* ------------- */
/* game creation */
/* ------------- */

/* create variables */
var number;
var invalid = true;

const X1 = new Array(10);
const X2 = new Array(10);
const X3 = new Array(10);
const X4 = new Array(10);
const X5 = new Array(10);
const X6 = new Array(10);
const X7 = new Array(10);
const X8 = new Array(10);

const Y1 = new Array(10);
const Y2 = new Array(10);
const Y3 = new Array(10);
const Y4 = new Array(10);
const Y5 = new Array(10);
const Y6 = new Array(10);
const Y7 = new Array(10);
const Y8 = new Array(10)
//0,0 wont be used. starts at 1,1 for simplicity;

const A2tried = new Array();
const A3tried = new Array();
const A4tried = new Array();
const A5tried = new Array();
const A6tried = new Array();
const A7tried = new Array();
const A8tried = new Array();
const A9tried = new Array();

const B1tried = new Array();
const B2tried = new Array();
const B3tried = new Array();
const B4tried = new Array();
const B5tried = new Array();
const B6tried = new Array();
const B7tried = new Array();
const B8tried = new Array();
const B9tried = new Array();

const C1tried = new Array();
const C2tried = new Array();
const C3tried = new Array();
const C4tried = new Array();
const C5tried = new Array();
const C6tried = new Array();
const C7tried = new Array();
const C8tried = new Array();
const C9tried = new Array();

const D1tried = new Array();
const D2tried = new Array();
const D3tried = new Array();
const D4tried = new Array();
const D5tried = new Array();
const D6tried = new Array();
const D7tried = new Array();
const D8tried = new Array();
const D9tried = new Array();

const E1tried = new Array();
const E2tried = new Array();
const E3tried = new Array();
const E4tried = new Array();
const E5tried = new Array();
const E6tried = new Array();
const E7tried = new Array();
const E8tried = new Array();
const E9tried = new Array();

const F1tried = new Array();
const F2tried = new Array();
const F3tried = new Array();
const F4tried = new Array();
const F5tried = new Array();
const F6tried = new Array();
const F7tried = new Array();
const F8tried = new Array();
const F9tried = new Array();

const G1tried = new Array();
const G2tried = new Array();
const G3tried = new Array();
const G4tried = new Array();
const G5tried = new Array();
const G6tried = new Array();
const G7tried = new Array();
const G8tried = new Array();
const G9tried = new Array();

const H1tried = new Array();
const H2tried = new Array();
const H3tried = new Array();
const H4tried = new Array();
const H5tried = new Array();
const H6tried = new Array();
const H7tried = new Array();
const H8tried = new Array();
const H9tried = new Array();

const I1tried = new Array();
const I2tried = new Array();
const I3tried = new Array();
const I4tried = new Array();
const I5tried = new Array();
const I6tried = new Array();
const I7tried = new Array();
const I8tried = new Array();
const I9tried = new Array();

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
function rules(x, y) {
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
/* set numbers */
{
    /* create cell functions */
    function a1() {
        if (A1tried.length < 9) {
            number = Math.floor(Math.random()*9);
            X1[1] = number;
            Y1[1] = number;
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
        }
    }

    function b1() {
        invalid = true;
        while (invalid && B1tried.length < 9) {
            number = Math.floor(Math.random()*9);
            invalid = false;
            if (B1tried.includes(number)) {
                invalid = true;
            } else if (X2.includes(number) || Y1.includes(number)) {
                invalid = true;
                B1tried.push(number);
            } else {
                invalid = rules();
                B1tried.push(number);
            }
        }
        if (invalid) {
            //HERE uuuuuuuuh
            B1tried = []
            b1();
        } else {
            X1[1] = number;
            Y2[0] = number;
        }
    }
    /* run cell functions */
    {
        a1();
        a2();
        a3();
        a4();
        a5();
        a6();
        a7();
        a8();
        a9();

        b1();
        b2();
        b3();
        b4();
        b5();
        b6();
        b7();
        b8();
        b9();

        c1();
        c2();
        c3();
        c4();
        c5();
        c6();
        c7();
        c8();
        c9();

        d1();
        d2();
        d3();
        d4();
        d5();
        d6();
        d7();
        d8();
        d9();

        e1();
        e2();
        e3();
        e4();
        e5();
        e6();
        e7();
        e8();
        e9();

        f1();
        f2();
        f3();
        f4();
        f5();
        f6();
        f7();
        f8();
        f9();

        g1();
        g2();
        g3();
        g4();
        g5();
        g6();
        g7();
        g8();
        g9();

        h1();
        h2();
        h3();
        h4();
        h5();
        h6();
        h7();
        h8();
        h9();

        i1();
        i2();
        i3();
        i4();
        i5();
        i6();
        i7();
        i8();
        i9();
    }
}
/* unsolve puzzle */
{}
/* -------- */
/* gameplay */
/* -------- */

/* set variables */
var note = false;
var selection = 0;
//0=erase 1-9=#

function set(cell) {
    getElementById(cell).innerHTML = "h";
}