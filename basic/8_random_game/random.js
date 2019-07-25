window.onload = function () {

    var random = Math.ceil(Math.random() *10);

    var user_input = parseInt(prompt('insert number between 1 to 10'));

    if (random == user_input){

        console.log('good work');
    }
    else{

        console.log('not matched number');
    }


};