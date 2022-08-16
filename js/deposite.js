// step 1: add event listener do the deposite button

document.getElementById('deposite-btn').addEventListener('click', function () {

    //    step 2: get the deposite amount from the deposite input field
    // for input field use .value to the value indside the input field
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    // step 3: get the current  total amount
    // for non input( element other than input and text area) use innerText to get the text
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    // step 4: add numbers to set the total deposite
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;
    // set the deposite total
    depositeTotalElement.innerText = currentDepositeTotal;

    // step 5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate the current total balance
    const currentTotalBalance = previousBalanceTotal + newDepositeAmount;
    balanceTotalElement.innerText = currentTotalBalance;


    // step 7:clear the deposite field

    depositeField.value = '';

})