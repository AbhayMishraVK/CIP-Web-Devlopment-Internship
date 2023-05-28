const btnE = document.getElementById('btn') ; 
const bmiResultE = document.getElementById('bmi-result') ; 
const weightConditionE = document.getElementById("weight-condition") ;


// ON PRESS OF THE BUTTON 
btnE.addEventListener('click', calculateBMI) ;

/************ FUNCTION FOR CALULATING BMI ********************/
function  calculateBMI()
{
    
    //height of person . divide by 100 to convert it in meter .
    const heightValue = document.getElementById('height').value/100 ; 

    // WEIGHT OF THE PERSON . 
    const weightValue = document.getElementById('weight').value ; 

    // FORMULA OF BMI . 
    const bmiValue = weightValue / (heightValue * heightValue) ;

    // ADD BMI RESULT TO THE RESULT CONTAINER 
    bmiResultE.value = bmiValue ; 

    if(bmiValue < 18.5)
    {
        weightConditionE.innerText = "Weight Condition : Under Weight" ; 
    }

    else if(bmiValue < 25)
    {
        weightConditionE.innerText = "Weight Condition : Normal Weight" ; 

    }

    else if(bmiValue < 30)
    {
        weightConditionE.innerText = "Weight Condition : OverWeight" ; 

    }

    else if(bmiValue >= 30)
    {
        weightConditionE.innerText = "Weight Condition : Obesity" ;
    }
}