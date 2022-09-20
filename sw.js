self.addEventListener('install',(event)=>{
    console.log('SW: install');
});

self.addEventListener('fetch',(event)=>{
    // if(event.request.url.includes('.css')){
    //     console.log(event.request.url);
    //     const resp = new Response(
    //         `body{
    //             color: red;
    //             background-color: #000;    
    //         }`
    //         ,{
    //             headers:{
    //                 'Content-Type': 'text/css',
    //             },
    //         }
    //     )
    //     event.respondWith(resp)
        
    //     /*event.respondWith(
    //         fetch(event.request)
    //     )*/
    // }

    if(event.request.url.includes('.jpg')){
        let resp = fetch('./image/descarga.jpg')
        event.respondWith(resp)
    }
    
});