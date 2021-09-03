

function getPin(){
    const rand=Math.round(Math.random()*10000)
    const rnadLength=rand+''
    if(rnadLength.length===4){
        return rand
    }
    else{
        return getPin()
    }
}

function generatedPin(){
    const pin=getPin()
    document.getElementById('input-pin').value=pin
}



// active calculator digit
    const calDigit=document.getElementById('key-pad').addEventListener('click',function(event){
    const digit=event.target.innerText
    const calInput=document.getElementById('cal-input')
  
    if(isNaN(digit)){
        if(digit==='C' || digit=="<"){
            calInput.value=''
        }
    }
    else{
        const calInputValuePrivius=calInput.value
        const calInputNew=calInputValuePrivius+digit
        calInput.value=calInputNew
    }
})


// compare pin
function submit(){
    const inputPin=document.getElementById('input-pin').value
    const calInput=document.getElementById('cal-input').value
    if(inputPin==calInput){
        const pinSuccess=document.getElementById('pin-success')
        pinSuccess.style.display='block'

        const pinFail=document.getElementById('pin-fail')
        pinFail.style.display='none'
    }
    else{
         const pinFail=document.getElementById('pin-fail')
         pinFail.style.display='block'
         const pinSuccess=document.getElementById('pin-success')
         pinSuccess.style.display='none'
    }
}