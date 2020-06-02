self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/ServiceWork/',
                '/ServiceWork/index.html',
                '/ServiceWork/index.js'
            ])
        })
    )
})

self.addEventListener('fetch', function(event) {
    
})