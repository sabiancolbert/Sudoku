/* create arrays */
{
const X1 = new Array(8);
const X2 = new Array(8);
const X3 = new Array(8);
const X4 = new Array(8);
const X5 = new Array(8);
const X6 = new Array(8);
const X7 = new Array(8);
const X8 = new Array(8);

const Y1 = new Array(8);
const Y2 = new Array(8);
const Y3 = new Array(8);
const Y4 = new Array(8);
const Y5 = new Array(8);
const Y6 = new Array(8);
const Y7 = new Array(8);
const Y8 = new Array(8);

const A1tried = new Array(7);
const A2tried = new Array(7);
const A3tried = new Array(7);
const A4tried = new Array(7);
const A5tried = new Array(7);
const A6tried = new Array(7);
const A7tried = new Array(7);
const A8tried = new Array(7);
const A9tried = new Array(7);

const B1tried = new Array(7);
const B2tried = new Array(7);
const B3tried = new Array(7);
const B4tried = new Array(7);
const B5tried = new Array(7);
const B6tried = new Array(7);
const B7tried = new Array(7);
const B8tried = new Array(7);
const B9tried = new Array(7);

const C1tried = new Array(7);
const C2tried = new Array(7);
const C3tried = new Array(7);
const C4tried = new Array(7);
const C5tried = new Array(7);
const C6tried = new Array(7);
const C7tried = new Array(7);
const C8tried = new Array(7);
const C9tried = new Array(7);

const D1tried = new Array(7);
const D2tried = new Array(7);
const D3tried = new Array(7);
const D4tried = new Array(7);
const D5tried = new Array(7);
const D6tried = new Array(7);
const D7tried = new Array(7);
const D8tried = new Array(7);
const D9tried = new Array(7);

const E1tried = new Array(7);
const E2tried = new Array(7);
const E3tried = new Array(7);
const E4tried = new Array(7);
const E5tried = new Array(7);
const E6tried = new Array(7);
const E7tried = new Array(7);
const E8tried = new Array(7);
const E9tried = new Array(7);

const F1tried = new Array(7);
const F2tried = new Array(7);
const F3tried = new Array(7);
const F4tried = new Array(7);
const F5tried = new Array(7);
const F6tried = new Array(7);
const F7tried = new Array(7);
const F8tried = new Array(7);
const F9tried = new Array(7);

const G1tried = new Array(7);
const G2tried = new Array(7);
const G3tried = new Array(7);
const G4tried = new Array(7);
const G5tried = new Array(7);
const G6tried = new Array(7);
const G7tried = new Array(7);
const G8tried = new Array(7);
const G9tried = new Array(7);

const H1tried = new Array(7);
const H2tried = new Array(7);
const H3tried = new Array(7);
const H4tried = new Array(7);
const H5tried = new Array(7);
const H6tried = new Array(7);
const H7tried = new Array(7);
const H8tried = new Array(7);
const H9tried = new Array(7);

const I1tried = new Array(7);
const I2tried = new Array(7);
const I3tried = new Array(7);
const I4tried = new Array(7);
const I5tried = new Array(7);
const I6tried = new Array(7);
const I7tried = new Array(7);
const I8tried = new Array(7);
const I9tried = new Array(7);
}
/* set numbers */
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
/* unsolve puzzle */
{
    
}


    const tried = new Array();
    var invalid = true;
    while (invalid) {
        var number = Math.floor(Math.random()*9);
        while (tried.includes(number) && tried.length < 8) {
            number = Math.floor(Math.random()*9);

        }
    }
    //if tried contains number then broke
}
}

/* attempt to unsolve to difficulty */
//remember variation settings