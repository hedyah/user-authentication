function login() {
    axios.request({
        method : "POST",
        url :"https://reqres.in/api/login",
        headers :{
            'Content-Type' : 'application/json'
        },
        data : {
            email : document.getElementById('username').value,
            password : document.getElementById('password').value
        }
    }).then(loginSucsess).catch(loginError);
}

function loginSucsess(response) {
    console.log(response);
    Cookies.set('sessionToken', response.data.token);
    document.getElementById('loginresult').innerText = "Welcome";
    window.location.href="home.html";
}

function loginError(error) {
    console.log(error);
    document.getElementById('loginresult').innerText="Error, no login";
}

document.getElementById('loginsubmit').addEventListener('click',login);