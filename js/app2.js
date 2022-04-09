function homeUser() {
    axios.request({
        method : "GET",
        url :"https://reqres.in/api/unknown"
    }).then(welcomeUser).catch(errorUser);
}

function welcomeUser(response) {
    console.log(response);
    console.log(response.data.data[0]);
    let colorname = response.data.data[0].name;
    document.getElementById('colorname').innerText=colorname;
    let coloryear = response.data.data[0].year;
    document.getElementById('year').innerText=coloryear;
    let color = response.data.data[0].color;
    document.getElementById('color').innerHTML=color;
}

function errorUser(error) {
    console.log(error);
}

document.getElementById('button').addEventListener('click',homeUser);
