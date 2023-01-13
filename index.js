//  Here is the code for calculator 
// This is the Eventlistner for when the content is load by browser 
document.addEventListener('DOMContentLoaded',()=>{
// Here select all number & operator and input box
var Num = document.querySelectorAll('#d');
var inputFelid =document.querySelector('#in')
try{
// Here try has any kind of error then it's execute the catch block
if(Num){
Array.from(Num).forEach((e)=>{
    e.addEventListener('click',(a)=>{
        var value =a.target.value
// Here display user input in the input box
        if(inputFelid){
           inputFelid.value +=value;
        }
    })
})
}
}
catch(error){console.log(error)}
// Here also select the clear btn
var clear =document.querySelector('#clear')
// This event clear the value in the input box 
clear.addEventListener('click',()=>{
    inputFelid.value = null
})
// Here also select the equal btn
var evalNum =document.querySelector('#eval')
// This event evaluate the value in the input box 
evalNum.addEventListener('click',()=>{
    var res =eval(inputFelid.value)
    inputFelid.value = res
})
})

