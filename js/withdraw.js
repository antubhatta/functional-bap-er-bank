/* 
1.Add withdraw button event handler
2.get withdraw amount by using get inputfield value by id function
3.previous withdraw amount by using gettext element by value id function
4.calculate new withdraw total and set the value
4-5.set new withdraw total by using setTextElementValueById function
5.get previous balance total by using getTextElementValueById
*/
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount=getInputValueById('withdraw-field')
    const previousWithdrawTotal=getTextElementValueById('withdraw-total')
    const newWithdrawTotal=newWithdrawAmount+previousWithdrawTotal;
    setTextElementValueById('withdraw-total',newWithdrawTotal)
    const previousBalanceTotal=getTextElementValueById('balance-total')
    const newBalanceTotal=previousBalanceTotal-newWithdrawAmount
    setTextElementValueById('balance-total',newBalanceTotal)
})