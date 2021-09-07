const rate_div = document.getElementById("percent");
const loan_div = document.getElementById("loan");
const month_div = document.getElementById("month");
const cal_btn = document.getElementById("btn");
const interest_input = document.getElementById("showinterest");
const monthly_input = document.getElementById("showmonthpay");
const total_input = document.getElementById("showtotalpayment");
const year = 1;



cal_btn.addEventListener("click", function(){ 
    const rate = rate_div.value/100;
    const loan = parseInt(loan_div.value);
    const month = month_div.value;
    
    
    function getOneYearInterstPayment(){
      return (rate*loan)*(month/(12*year));
    }

    function getMonthlyPayment(){
    const oneYearInterest= getOneYearInterstPayment();
    console.log(loan+oneYearInterest)
    return (loan+oneYearInterest)/(month*year);
    
    }

    function getTotalPayment(){
      const monthlyinterest = getMonthlyPayment();
      return monthlyinterest*month;
    }

    function splitnumberafterdot(string){
     const convert_string = string.toString();
     const split_string = convert_string.split(".");
     const number_nodot = split_string[0];
     return `${number_nodot}.00`;
   }
   
    function checkValidation(){
      const rate_val = (rate == "")?false:true;
      const loan_val = (loan == "")?false:true;
      if(rate_val && loan_val){
        return true
      }else{
        return false
        }
    }
    
    if(checkValidation()){
       const allInterest = getOneYearInterstPayment(rate);
       const monthlyPayent = getMonthlyPayment();
       const totalPayment = getTotalPayment();
      
      interest_input.setAttribute("value",splitnumberafterdot(allInterest));
       monthly_input.setAttribute("value",splitnumberafterdot(monthlyPayent));
       total_input.setAttribute("value",splitnumberafterdot(totalPayment))
    
    }
});