if ( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register( './ServiceWorker/sw.js', { scope: './ServiceWorker/' } ).then( reg => {
        console.log( `Registration successed! Scope is ${reg.scope}` );
    } ).catch(error => {
        console.log( `Registration failed with ${error}` );
    })
}