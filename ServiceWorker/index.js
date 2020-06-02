if ( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register( 'sw.js' ).then( reg => {
        console.log( `Registration successed! Scope is ${reg.scope}` );
    } ).catch(error => {
        console.log( `Registration failed with ${error}` );
    })
}