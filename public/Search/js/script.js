let category = localStorage.getItem('category')

let product = document.getElementById('product')

// product.innerHTML = `<h2>${category}</h2>`


function fetchdata() {
    var products = document.getElementsByClassName('products-section')[0];
    products.innerHTML=""
    var maxbudget = document.getElementById('budget').value;
    console.log(maxbudget);
    var data = JSON.parse(sessionStorage.getItem('data'))

    console.log(data)
    
    let arrlen = data.length
    for(let i=0;i<arrlen;i++){
        let product = data[i]
        let Price=product.Price

        if(maxbudget<=40000){
            var minbudget=maxbudget-5000
        }else if(maxbudget=50000){
            var minbudget = maxbudget-10000
            
        }else if(maxbudget=100000){
            var minbudget = maxbudget-50000
            
        }else if(maxbudget='above'){
            maxbudget = 1000000
            var minbudget = 100000

        }

        if((Price<=maxbudget) && (Price>minbudget)){

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
        }
        else{
            continue
        }
    

    }
}