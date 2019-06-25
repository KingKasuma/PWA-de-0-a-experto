// Peticion POST
// https://reqres.in/api/users

let usuario = {
    nombre: 'Mike',
    edad: 32
};

fetch('https://reqres.in/api',{
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => {
    return resp.json();
}).then(resp => {
    console.log(resp);
}).catch(error => {
    console.log('Error en la peticion');
    console.log(error);
})