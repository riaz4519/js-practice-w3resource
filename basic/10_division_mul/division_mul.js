
    var myForm = document.forms.myForm;
    var result = document.getElementById('result');
   function multiply(){

       var firstNumber = parseInt(myForm.first_num.value);
       var secondNumber = parseInt(myForm.second_num.value);

       var mul = firstNumber * secondNumber;

       //set the result

       result.textContent = mul;

   }

    function divide(){
    
        var firstNumber = myForm.first_num.value;
        var secondNumber = myForm.second_num.value;

        var divi = firstNumber / secondNumber;

        //set the result

        result.textContent = divi;

    }
