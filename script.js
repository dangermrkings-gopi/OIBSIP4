const currentDisplay =
document.getElementById("current");

const previousDisplay =
document.getElementById("previous");


let currentNumber = "";

let previousNumber = "";

let operator = null;



const numbers =
document.querySelectorAll("[data-number]");


const operators =
document.querySelectorAll("[data-operator]");


const actions =
document.querySelectorAll("[data-action]");





numbers.forEach(button=>{

    button.addEventListener(
        "click",
        ()=>{

        addNumber(
            button.dataset.number
        );

    });

});





operators.forEach(button=>{

    button.addEventListener(
        "click",
        ()=>{

        chooseOperator(
            button.dataset.operator
        );

    });

});





actions.forEach(button=>{


    button.addEventListener(
        "click",
        ()=>{


        let action =
        button.dataset.action;


        if(action==="clear")
        {
            clearCalculator();
        }


        if(action==="delete")
        {
            deleteNumber();
        }


        if(action==="equals")
        {
            calculate();
        }


    });


});





function addNumber(number){


    if(number==="."
       &&
       currentNumber.includes("."))
       return;



    currentNumber += number;


    updateDisplay();

}





function chooseOperator(op){


    if(currentNumber==="")
    return;



    if(previousNumber!=="")
    {

        calculate();

    }



    operator = op;


    previousNumber =
    currentNumber;


    currentNumber="";


    updateDisplay();

}






function calculate(){


    let first =
    parseFloat(previousNumber);



    let second =
    parseFloat(currentNumber);



    if(isNaN(first) || isNaN(second))
    return;




    let result;



    switch(operator){


        case "+":
            result =
            first + second;
            break;



        case "-":
            result =
            first - second;
            break;



        case "*":
            result =
            first * second;
            break;



        case "/":

            if(second===0)
            {

                currentNumber=
                "Error";

                previousNumber="";

                operator=null;

                updateDisplay();

                return;

            }


            result =
            first / second;

            break;



        default:
            return;

    }



    currentNumber =
    result.toString();



    previousNumber="";

    operator=null;


    updateDisplay();


}






function clearCalculator(){

    currentNumber="";

    previousNumber="";

    operator=null;


    updateDisplay();

}






function deleteNumber(){


    currentNumber =
    currentNumber.slice(
        0,-1
    );


    updateDisplay();

}





function updateDisplay(){


    currentDisplay.innerText =
    currentNumber || "0";


    if(operator!=null)

    {

        previousDisplay.innerText =
        previousNumber +
        " " +
        operator;

    }

    else

    {

        previousDisplay.innerText =
        "";

    }


}
