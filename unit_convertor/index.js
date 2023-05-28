const inputE = document.getElementById('input') ; 
const outputE = document.getElementById('result') ; 
const inputSelectionE = document.getElementById('selection1') ;
const outputSelectionE = document.getElementById('selection2') ; 
const converButtonE = document.getElementById('submit') ;



// AFTER THE SUBMISSION OF THE SUBMIT BUTTON . 
converButtonE.addEventListener('click' , () => {

	const inputUnit = inputSelectionE.value ; 
	const outputUnit = outputSelectionE.value ;
	const givenInput = inputE.value ; 
	console.log(givenInput) ; 

	// IF INPUT NOT GIVEN 
	if(givenInput === '')
	{
		alert("Enter value for converstion")
	}

	// CONVERTION FROM METER TO METER 
	else if(inputUnit === 'Meter' && outputUnit === 'Meter')
	{
		outputE.value = Number(inputE.value)  ;
	}

	// CONVERTION FROM METER TO centimeter
	else if(inputUnit === 'Meter' && outputUnit === 'CentiMeter')
	{
		console.log( Number(inputE.value) / 1000)
		outputE.value = Number(inputE.value) * 100 ;
	}

	// CONVERTION FROM METER TO KILOMETER
	else if(inputUnit === 'Meter' && outputUnit === 'KiloMeter')
	{
		console.log( Number(inputE.value) / 1000)
		outputE.value = Number(inputE.value) / 1000 ;
	}

	// CONVERTION FROM CENTIMETER TO METER
	else if(inputUnit === 'CentiMeter' && outputUnit === 'Meter')
	{
		console.log( Number(inputE.value) / 100) ; 
		outputE.value = Number(inputE.value) / 100 ;
	}

	// CONVERTION FROM CENTIMETER TO Centimeter
	else if(inputUnit === 'CentiMeter' && outputUnit === 'CentiMeter')
	{
		console.log( Number(inputE.value) ) ; 
		outputE.value = Number(inputE.value) ; 
	}

	// CONVERTION FROM CENTIMETER TO kilometer
	else if(inputUnit === 'CentiMeter' && outputUnit === 'KiloMeter')
	{
		console.log( Number(inputE.value) / 100000 )
		outputE.value = Number(inputE.value) / 100000 ;
	}

	// CONVERTION FROM Kilometer TO METER	
	else if(inputUnit === 'KiloMeter' && outputUnit === 'Meter')
	{
		console.log( Number(inputE.value) * 1000)
		outputE.value = Number(inputE.value) * 1000 ;
	}

	// CONVERTION FROM kiloMeter TO CENTIMETER
	else if(inputUnit === 'KiloMeter' && outputUnit === 'CentiMeter')
	{
		console.log( Number(inputE.value) * 100000 )
		outputE.value = Number(inputE.value) * 100000
 ;
	}

	// CONVERTION FROM kiloMeter TO kilometer
	else if(inputUnit === 'KiloMeter' && outputUnit === 'KiloMeter')
	{
		console.log( Number(inputE.value))
		outputE.value = Number(inputE.value);
	}

	else 
	{
		alert("Something is error")
	}
})










