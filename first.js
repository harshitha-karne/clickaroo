let value=document.getElementById("counterValue");
function onDecrement(){
    let prevvalue=value.textContent;
   let newvalue=parseInt(prevvalue)-1;
   value.textContent= newvalue;

   if(newvalue>0){
    value.style.color="green";
   }
   else if(newvalue<0){
    value.style.color="red";
   }
   else{
    value.style.color="black";
   }
}
function onReset(){
    newvalue=0;
    value.textContent= newvalue;

    if(newvalue>0){
    value.style.color="green";
   }
   else if(newvalue<0){
    value.style.color="red";
   }
   else{
    value.style.color="black";
   }
}
function onIncrement(){
      let prevvalue=value.textContent;
     newvalue=parseInt(prevvalue)+1;
     value.textContent=newvalue;
     
     if(newvalue>0){
    value.style.color="green";
   }
   else if(newvalue<0){
    value.style.color="red";
   }
   else{
    value.style.color="black";
   }
}