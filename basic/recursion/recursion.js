
var n = 10;

var i = 0;

function recursion() {

    if (i < n){

        i++;
        console.log(i);

        recursion();


    }

    return ;

}


recursion();