const form = document.getElementById('qrForm') ; 
const qrImg = document.getElementById('qrImg') ; 
const qrContainer = document.getElementById('qrContainer') ;
const button = document.getElementById("button") ;
const input = document.getElementById("input") ;


/*********************** WHEN CLICK ON THE SUBMIT  ***********************/ 
form.addEventListener('submit' , (event) => {

	// BY DEFAULT PREVENT KAR DEGA , LIKE RELOAD . 
	event.preventDefault() ;

	// USKE NAAM SE HUM , FORM KE INPUT KI VALUE LE RAHE 
	const formData = new FormData(form) ; 
	const text = formData.get('qrText') ;
	console.log(text)

	// AGAAR TEXT EMPTY HO TO .
	if(! text)
	{
		alert("please enter text") ; 
		return ;
	}

	// CHANGE THE BUTTON TEXT
	button.textContent = 'Genrating qr code' ; 


	// YAH TET KE LIYE API SE QR CODE GENRATE KAR DEGA .
	 const qrCodeApi = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}` ;


	// GENRATE QR code 
	genrateQrCode(qrCodeApi) ;

	// CHANGE THE BUTTON TEXT
	button.textContent = 'qr code genrated' ; 
})



/*************** GENRATE QR code for text function ***********************/ 
const genrateQrCode = (url) => {


	// AGAR KOI URL NAHI AAYI , TO RETURN . 
	if(!url) return ; 

	// JO URL IMAGE AAYI HAI USKO IMAGE MAI LAGANA HAI . 
	qrImg.src = url ; 

	// AUR USKO VISIBLE KARNA HAI 
	qrContainer.classList.add('show') ; 
}


/*********************** WHEN CLICK ON THE SUBMIT  ***********************/ 
input.addEventListener('keyup' , () => {

	// jab naya element daale to vo remove daale . 
	if(input.value.trim())
	{
		qrContainer.classList.remove('show') ;
		button.textContent = 'Genrate QR code' ;
	}
})