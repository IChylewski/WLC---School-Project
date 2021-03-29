document.getElementById('submit').addEventListener('click', function() {
    const login = document.registerform.login.value;
    const email = document.registerform.email.value;
    const password = document.registerform.password.value;
    const cpassword = document.registerform.cpassword.value;

    if(typeof(Storage) !== undefined){
        if(password != cpassword){
            alert('Passwords do not match');
        }else{
            localStorage.setItem('login', login);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('cpassword', cpassword);
            alert('Success');
            document.location = 'LoginPage.html';
        }
    } else {
        alert('You are not allowed to register on this browser');
    }
})