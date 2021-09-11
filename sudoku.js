/* create arrays */
const X1 = new Array(9);
const X2 = new Array(9);
const X3 = new Array(9);
const X4 = new Array(9);
const X5 = new Array(9);
const X6 = new Array(9);
const X7 = new Array(9);
const X8 = new Array(9);

const Y1 = new Array(9);
const Y2 = new Array(9);
const Y3 = new Array(9);
const Y4 = new Array(9);
const Y5 = new Array(9);
const Y6 = new Array(9);
const Y7 = new Array(9);
const Y8 = new Array(9);

const A1tried = new Array();
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
/* set rules */
function rules() {
    var invalid = false;

    return invalid;
}
/* set numbers */
{
    /* create cell functions */
    function a1() {
        number = Math.floor(Math.random()*9);
        X1[0] = number;
        Y1[0] = number;
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
                invalid = rules();
                A2tried.push(number);
            }
        }
        X1[1] = number;
        Y2[0] = number;

    }
    function a3() {}
    function a4() {}
    function a5() {}
    function a6() {}
    function a7() {}
    function a8() {}
    function a9() {}

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