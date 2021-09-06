const a = new Array(8);
const b = new Array(8);
const c = new Array(8);
const d = new Array(8);
const e = new Array(8);
const f = new Array(8);
const g = new Array(8);
const h = new Array(8);

/* set numbers */
{
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