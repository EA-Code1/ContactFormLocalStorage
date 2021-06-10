let sendButton = document.getElementById('send');
let form = document.getElementById('form');

// Takes text input of name, email and messagee
form.addEventListener('submit', function(e){
   
})

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

// This clears text input after the user sends details
    name.value = '';
    email.value = '';
    message.value = '';

sendButton.addEventListener('click', function(e){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

// The name, email and message is sent to local storage
    name = name.value;
    localStorage.setItem('name', name);

    
    email = email.value;
    localStorage.setItem('email', email);
    

    message = message.value;
    localStorage.setItem('message', message);
    
    
})
