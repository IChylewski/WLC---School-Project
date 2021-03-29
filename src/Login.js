document.getElementById('loginButton').addEventListener('click', function() {
    const typedLogin = document.loginform.login.value;
    const typedPassword = document.loginform.password.value;
    const storedLogin = localStorage.getItem('login');
    const storedPassword = localStorage.getItem('password');

    if(typedLogin == storedLogin && typedPassword == storedPassword){
        alert('Success! You will be redirected to Welcome Page');
        document.location = "WelcomePage.html"
    } else{
        alert('Login credentials are incorrect');
        console.log(JSON.stringify(localStorage));
    }
})