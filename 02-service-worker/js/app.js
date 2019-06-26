//if('serviceWorker' in navigator){
//    console.log('Podemo usarlo');
//}

// COnfirmar si podemos usar el SW
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js');
}