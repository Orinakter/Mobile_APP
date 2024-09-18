// console.log("button clicking file added");

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber);

    if(phoneNumber==='11' && pinNumber==='12345'){
        console.log('you are loged in');
    }else{
        alert('wrong phone number or pin number');
    }
    
});