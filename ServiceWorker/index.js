if ( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register( 'sw.js' ).then( reg => {
        if (reg.installing) {
            console.log('Service Worker installing');
        } else if (reg.waiting) {
            console.log('Service Worker installed');
        } else if (reg.active) {
            console.log('Service Worker active');
        }
        console.log( `Registration successed! Scope is ${reg.scope}` );
    } ).catch(error => {
        console.log( `Registration failed with ${error}` );
    })
}