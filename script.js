async function loadProducts() {
    try {
        const response = await fetch("./data/productn.json");
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }

        const data = await response.json();
        const productList = document.getElementById('product-list');

        for (let i = 0; i < data.products.length; i++) {
            const listItem = document.createElement('div')
            listItem.innerHTML = ''
            for (let i2 = 0; i2 < data.products.length; i2++){
                
            }
            productList.appendChild(listItem);
        }

    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

loadProducts();