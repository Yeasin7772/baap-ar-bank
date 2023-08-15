document.getElementById('btn-submit').addEventListener('click', function (){
    
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value; 

    if (email === 'yeasin@ar.com'&& password === '1234') {
        window.location.href = 'bank.html';
    } else {
        alert('Please Forget Your password');
    }
   

})