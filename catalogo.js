const lista = document.getElementById("lista");
fetch("./catalogo.json")
.then(resp => resp.json())
.then(productos => {
    productos.foreach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h1>${producto.marca}</h1>
        <img src="${producto.imagen}">
        <h3>Precio por dia:${producto.precio}</h3>
        <hr/>
        `;
        lista.append(li)
    })
})