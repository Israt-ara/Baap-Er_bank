/*
step 1: add event handler with withdraw button
step2: get the withdraw amount from the withdraw input field
2.5: also make sure  to convert the input into a number by a parse float
step 3:get previous withdraw total
step4: calculate total withdraw amount
4.5: set total withdraw amount
step 5: get previous balance total
step 6: calculate new balance total
6.5: set the new balance total
step 7: clear the input fiels

*/
// step 1:
document.getElementById('withdraw-btn').addEventListener('click', function () {


    // step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step 7:clear the input field

    withdrawField.value = '';


    if (isNaN(newWithdrawAmount)) {
        alert('Please Enter a valid amount');
    }


    // step 3: get the withdraw  total amount
    // for non input( element other than input and text area) use innerText to get the text
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



    // step 5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);




    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Sorry you have not this amount of money');
        return;
    }
    // step 4:  add numbers to set the total deposite
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set the withdraw total
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // step-6: calculate the current total balance
    const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentTotalBalance;


    // step 7:clear the input field

    withdrawField.value = '';

})