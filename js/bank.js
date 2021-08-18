document.getElementById('deposit-button').addEventListener('click', function () {

    // get ammount 

    const depositFild = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositFild.value);
    // console.log(newDepositAmount);


    //  add deposit 
    const depositTotal = document.getElementById('deposti-total');

    const previousDepositAmount = parseFloat(depositTotal.innerText);
    const newDepostiTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepostiTotal;

    // updated blance 
    const blanceTotal = document.getElementById('blance-amount');

    const previousBlanceAmount = parseFloat(blanceTotal.innerText);
    const newBlanceTotal = previousBlanceAmount + newDepositAmount;
    blanceTotal.innerText = newBlanceTotal;


    // clear deposit input fild
    depositFild.value = '';

})
// handel withdraw event
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value);
    // console.log(newWithdrawAmount);

    // set withdraw total 
    const withdrawTotal = document.getElementById('widhdraw-total');
    const previousWithdraw = parseFloat(withdrawTotal.innerText);

    const newWithdrawTotal = previousWithdraw + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update blance 
    const totalBlance = document.getElementById('blance-amount');
    const previousTotalBlance = parseFloat(totalBlance.innerText);
    const newTotalBlance = previousTotalBlance - newWithdrawTotal;
    totalBlance.innerText = newTotalBlance;


    // clear withdraw fild 
    withdrawInput.value = '';

})