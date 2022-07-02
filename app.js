document.getElementById('loan-form').addEventListener('submit', calculateresults);

function calculateresults(e) {
    const amount = document.getElementById('amount');
    const interest = document.getElementById('Interest');
    const year = document.getElementById('Years');
    const monthlypayment = document.getElementById('monthly-payment');
    const totalpayment = document.getElementById('total-payment');
    const totalinterest= document.getElementById('total-interest');
    
    const principal = parseFloat(amount.value);
    console.log("The value of Principal Amount is :",principal)
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    console.log("The value of interest Amount is :",calculatedInterest)
    const calculatedPayment = parseFloat(year.value)  * 12;
    console.log("The value of Payment Amount is :",calculatedPayment)

    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlypayment.value = monthly.toFixed(2);
        totalpayment.value = (monthly * calculatedPayment).toFixed(2);
        totalinterest.value = (((monthly * calculatedPayment) - principal.toFixed(2))).toFixed(2);

    }
    else{
        showError("please Check your Number:")
    }
    
    e.preventDefault();
}
//show Error:
function showError(){
    const errorDiv = document.createElement('div');

    // get element :
   const card = document.querySelector('.card');
   const heading = document.querySelector('.heading');
   
   // add class:
   errorDiv.className = 'alert alert-danger';

   // create text node and append to div
   errorDiv.appendChild(document.createTextNode(console.error));

   // insert error above heading 
   card.insertBefore(errorDiv,heading);

   // set timeout
   setTimeout(clearError , 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}