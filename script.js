async function loadProducts() {
    try {
        const response = await fetch("./data/products.json");
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }

        const data = await response.json();
        const productList = document.getElementById('product-list');

        for (let i = 0; i < 20; i++) {
            productList.appendChild(template(data.products[i]));
        }

    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

function template(product) {
    let template = document.createElement("div")
    template.append(product.title)
    images(product.images, template)
    return template
}

function images(images, template) {
    let res = ""
    for (let i = 0; i < images.length; i++) {
        const element = images[i];
        const image = document.createElement("img")
        image.src = element.src
        template.append(image)
    }
    return res
}

function carousel(images, template) {
let elem = document.querySelector('.carousel');
products.forEach(producto => {
    const imgElement = document.createElement('img');
    imgElement.src = producto.imagen;
    carousel.appendChild(imgElement);
});
let flkty = new Flickity(element, {
    // options
    cellAlign: 'left',
    contain: true
});
}

    



loadProducts();