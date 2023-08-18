function getInputValueById(inputId){
    const inputField= document.getElementById(inputId)
    const inputFieldValueString =inputField.value
    const inputFieldValue=parseFloat(inputFieldValueString)
    inputField.value=''
    return inputFieldValue
}

function getTextElementValueById(elementId){
    const textElement= document.getElementById(elementId)
    const textElementValueString=textElement.innerText
    const textElementValue=parseFloat(textElementValueString)
    return textElementValue
}
function setTextElementValueById(elementId,newValue){
    const textElement=document.getElementById(elementId)
    textElement.innerText=newValue
}

document.getElementById('btn-deposit').addEventListener('click',function(){
    /*
    1.get the element by id
    2.get the value from string
    3.convert string value to a number
     */
    const newDepositAmount=getInputValueById('deposit-field')
    /* 
    1.get previous deposit total by id
    */
   const previousDepositTotal = getTextElementValueById('deposit-total')
//    calculate new deposit total
   const currentDepositTotal= newDepositAmount+previousDepositTotal
//    set deposit total value
    setTextElementValueById('deposit-total',currentDepositTotal)
    // get previous balance using by the function
    const previousBalanceTotal =getTextElementValueById('balance-total')
    // calculate new balance total
    const newBalanceTotal= previousBalanceTotal+newDepositAmount
    // set new balance total value
    setTextElementValueById('balance-total',newBalanceTotal)
})