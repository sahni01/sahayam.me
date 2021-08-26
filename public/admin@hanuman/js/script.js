


let submit = document.getElementsByClassName('bt')[0]

 submit.onclick = () => {
     const title = document.getElementsByName('title')[0].value
     const imgurl = document.getElementsByName('imgurl')[0].value
     const url = document.getElementsByName('url')[0].value
     const price = document.getElementsByName('price')[0].value
     const Price = document.getElementsByName('Price')[0].value
     const memory = document.getElementsByName('memory')[0].value
     const display = document.getElementsByName('display')[0].value
     const battery = document.getElementsByName('battery')[0].value
     const processor = document.getElementsByName('processor')[0].value
     const rear = document.getElementsByName('rear')[0].value
     const front = document.getElementsByName('front')[0].value
     

     const data = {
         title: title,
         imgurl: imgurl,
         price: price,
         Price:parseInt(Price)
         ,
         url: url,
         specs: {
             memory: memory,
             processor: processor,
             display:display,
             camera: {
                 rear: rear,
                 front: front
             },
             battery: battery
         },
         category: "mobiles"
     }

     console.log(JSON.stringify(data))

     fetch('/products/mobiles',{
         method:"post",
         body:JSON.stringify(data),
         
         headers:{
             "Content-Type":"application/json"
         }
         
     }).then(res=>res.json()).then(datares=>{
         console.log(datares)
         let product = datares


        let products = document.getElementsByClassName('products-section')[0]

         products.innerHTML+=`
            <div class="product_container" id="product">
            <div class="img">
            <img src="${product.imgurl}" alt="product image" >
            </div>
            <div class="section">
            <div class="title">
            <h2>${product.title}</h2>
            </div>
            <div class="price">
            <h3>Price:&#8377;${product.price} </h3>
            </div>
            <div class="product_disc">
            <ul>
            <li>Display : ${product.specs.display}</li>
            <li>Camera : Rear : ${product.specs.camera.rear}  Front : ${product.specs.camera.front}</li>
            <li>Battery : ${product.specs.battery}</li>
            <li>Processor : ${product.specs.processor}</li>
            <li>Memory : ${product.specs.memory}</li>
            </ul>
            </div>
            <div class="button">
            <a href="${product.url}" id="button">
            Buy now
            </a>
            </div>
            
            
            </div>
            
            </div>
        
            `
     })
     
 }

