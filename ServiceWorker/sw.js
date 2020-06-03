self.addEventListener( 'install', event => {
    /* Here we add an install event listener to the service worker (hence self), and then chain a ExtendableEvent.waitUntil() method onto the event — this ensures that the service worker will not install until the code inside waitUntil() has successfully occurred. */
    event.waitUntil(
        /* Inside waitUntil() we use the caches.open() method to create a new cache called v1, which will be version 1 of our site resources cache. This returns a promise for a created cache; once resolved, we then call a function that calls addAll() on the created cache, which for its parameter takes an array of origin-relative URLs to all the resources you want to cache. */
        caches.open( 'v2' ).then( cache => {
            return cache.addAll( [
                './',
                './index.html',
                './index.js',
                './404.html'
            ] )
        } )
    )
} )

self.addEventListener( 'fetch', event => {
    console.log( 'Event request: ', event.request );
    event.respondWith(
        /* Here we return the default network request with return fetch(event.request), which returns a promise. When this promise is resolved, we respond by running a function that grabs our cache using caches.open('v1'); this also returns a promise. When that promise resolves, cache.put() is used to add the resource to the cache. The resource is grabbed from event.request, and the response is then cloned with response.clone() and added to the cache. The clone is put in the cache, and the original response is returned to the browser to be given to the page that called it. */
        caches.match( event.request ).then( resp => {
            return resp || fetch( event.request ).then( response => {
                return caches.open( 'v2' ).then( cache => {
                    /* Cloning the response is necessary because request and response streams can only be read once.  In order to return the response to the browser and put it in the cache we have to clone it. So the original gets returned to the browser and the clone gets sent to the cache.  They are each read once. */
                    cache.put( event.request, response.clone() );
                    return response;
                } );
            } )
        } ).catch( () => {
            return caches.match( '404.html' );
        } )
    )
} )

/* You also get an activate event. This is a generally used to do stuff that would have broken the previous version while it was still running, for example getting rid of old caches. This is also useful for removing data that is no longer needed to avoid filling up too much disk space — each browser has a hard limit on the amount of cache storage that a given service worker can use. The browser does its best to manage disk space, but it may delete the Cache storage for an origin.  The browser will generally delete all of the data for an origin or none of the data for an origin. */
self.addEventListener( 'activate', event => {
    let cacheKeepList = [ 'v2' ];
    event.waitUntil(
        caches.keys().then( keyList => {
            return Promise.all( keyList.map( key => {
                if ( cacheKeepList.indexOf( key ) === -1 ) {
                    return caches.delete( key );
                }
            } ) );
        } )
    );
} );