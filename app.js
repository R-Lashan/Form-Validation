let check_btn = document.querySelector('.check-btn');
let submit_btn = document.querySelector('.submit-btn');
check_btn.addEventListener('click', check)
submit_btn.addEventListener('click', submit)

function check(){
    let id_input = document.querySelector('.id').value;
    let email_input = document.querySelector('.email').value;
    let password_input = document.querySelector('.password').value;
    let number_input = document.querySelector('.number').value;

    if(id_input.length > 4){
    alert("The below information should be lesser than 4 characters")
    } 

    if(email_input.length > 40){
        alert("The below information should be lesser than 40 characters")
    }

    if(password_input.length > 48){
        alert("The below information should be lesser than 8 characters")
    }

    if(number_input.length > 14){
        alert("The below information should be lesser than 14 characters")
    }
}

function submit(){
     alert("Form Submited")
}

