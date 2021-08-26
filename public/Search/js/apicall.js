// const url = 'http://localhost:5555'



const apicall = async () => {

   fetch(`/products/${category}`)
   .then(res=>res.json())
   .then(json_data=>{
       console.log(json_data)
       sessionStorage.setItem('data',JSON.stringify(json_data))
   })

  

}


apicall()







// var datareturn = api.then(res=> {return res.json()})
// .then(res_json=>{

//     var data = res_json
//     return data
    // console.log(data);
    
    
// })
