
// Ciclo de vida del SW

self.addEventListener('install', event => {
    // Descargar assets
    // Creamos un cche

    console.log('Instalando SW');

    const instalancion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1);        
    });    

    event.waitUntil( instalancion );
});

// Cuando el SW toma el control de la aplicacion
self.addEventListener('activate', event => {
    // Borra cache viejo
    console.log('SW2: Activo y listo para controlar la app');
});

// FETCH: Manejo de peticiones HTTP
self.addEventListener('fetch', event => {
    /*
    // Aplicar estrategias del cache
    console.log('SW:', event.request.url);

    if(event.request.url.includes('https://reqres.in/')){
        const resp = new Response(`{ok: false, mensaje:'jajaja'}`);
        event.respondWith(resp);
    }
    */
});

// SYNC: Recuperamos la conexion a internet
self.addEventListener('sync', event => {
    console.log('Tenemos Conexion!');
    console.log(event);
    console.log(event.tag);
});

// PUSH: Manejar las push notifications
self.addEventListener('push', event => {
    console.log('Notiicacion recibida');
});