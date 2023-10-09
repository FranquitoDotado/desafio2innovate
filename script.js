async function getProducts() {
    try {
        let response = await fetch("./data/products.json")
        let products = await response.json()
        return products
    } catch (error) {
        return error
    }
}

async function mapProducts() {
    try {
        let response = await getProducts()
        let productSection = document.querySelector("#test-product-list")
        response.forEach(productData => {
            let productTemplate = template(productData)
            productSection.appendChild(productTemplate)
        });
    } catch (error) {
        return error
    }
}

async function template(productData) {
    try {
        let productDiv = document.createElement("div");
        productDiv.classList.add("each-product");
        productDiv.innerHTML = `
        <div class="top-div-product">
            <div class="menu">
                <div class="container-menu">
                    <div class="menu-items">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                        <p>XL</p>
                        <p>XXL</p>
                    </div>
                </div>
            </div>
            <div class="main-carousel">
                <div class="carousel-cell"><img src="data/asdasdas.png"></div>
                <div class="carousel-cell"><img src="data/asdasdas.png"></div>
            </div>
        </div>
        <div class="bottom-div-product">
            <div>
                <p>${productData.title}</p>
                <div class="circulo">
                </div>
            </div>
            <div>
                <p>$300</p>
            </div>
        </div>`
        return productDiv
    } catch (error) {
        return error
    }
}

function images() {

}

function colors() {

}

function info() {

}

function flickityCarousel() {
    let elem = document.querySelector('.main-carousel');
    let flkty = new Flickity(elem, {
        cellAlign: 'left',
        contain: true
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('La página se ha cargado completamente.');
    mapProducts();
});