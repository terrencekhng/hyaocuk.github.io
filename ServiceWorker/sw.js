self.addEventListener( 'install', event => {
    /* Here we add an install event listener to the service worker (hence self), and then chain a ExtendableEvent.waitUntil() method onto the event — this ensures that the service worker will not install until the code inside waitUntil() has successfully occurred. */
    event.waitUntil(
        /* Inside waitUntil() we use the caches.open() method to create a new cache called v1, which will be version 1 of our site resources cache. This returns a promise for a created cache; once resolved, we then call a function that calls addAll() on the created cache, which for its parameter takes an array of origin-relative URLs to all the resources you want to cache. */
        caches.open( 'v1' ).then( cache => {
            return cache.addAll( [
                './',
                './index.html',
                './index.js'
            ] )
        } )
    )
} )

self.addEventListener('activate', event => {
    console.log('Activate succesfully!');
})