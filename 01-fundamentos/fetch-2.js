// Peticion GET
// https://reqres.in/api/users

fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then( respObj => {
        console.log(respObj);
        console.log(respObj.page);
        console.log(respObj.per_page);
    });

// No hacer
fetch('https://www.wikipedia.org/')
    .then(resp => {
        console.log(resp);
    });