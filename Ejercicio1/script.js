let productos = document.querySelector(".productos");

// fetch("https://fakestoreapi.com/products")
// .then(resp => resp.json())
// // .then(data => console.log(data));
// .then(data => {
//     data.forEach(prod => {
//         productos.innerHTML += `<h4>Producto:${prod.title}</h4>
//                                 <img src= "${prod.image} alt="${prod.title}/>
//                                 <p>$<span>${prod.price}</span></p>`
//     })
// })

async function mostrarDatos() {
    try{
        let resp= await fetch("https://fakestoreapi.com/products")
        let data= await resp.json()
        data.forEach(prod => {
        // console.log(prod.image)
        productos.innerHTML += `<div class= "producto">
                                    <h4>${prod.title}</h4>
                                    <img src="${prod.image}" alt="${prod.title}"/>
                                    <p>$<span>${prod.price}</span></p>
                                </div>`
        })
    }catch(error){
        console.error("Error al mostrar datos",error)
    }
}

mostrarDatos()
