document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositFiled = document.getElementById('deposit-filed');
    const newDepositString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositString);

    depositFiled.value = '';

    if (isNaN(newDepositAmount)) {
        alert('please provide me a valid number')
    }
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
   // console.log(typeof previousDepositTotal);
   const currentDepositTotal = previousDepositTotal + newDepositAmount;
   depositTotalElement.innerText = currentDepositTotal;

   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// set the total balance
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotalElement.innerText = currentBalanceTotal;

  
}) 

// withdraw setting --->
document.getElementById('btn-withdraw').addEventListener('click', function (){
// step 02
    const withdrawFiled = document.getElementById('withdraw-filed');
    const newWithdrawAmountString = withdrawFiled.value;
    const newWithdrawAmount = parseFloat (newWithdrawAmountString);

    withdrawFiled.value = '';

    if (isNaN(newWithdrawAmount)) {
    alert('please provide me a valid number')
}

// step 03
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// step 04
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;

// step 05
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);


// step 06
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;






    
})