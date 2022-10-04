// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    //... your code goes here
    const price = parseFloat(product.querySelector('.price span').innerHTML);
    console.log('precio: ', price);
    const quantity = parseInt(product.querySelector('.quantity input').value);
    console.log('cantidad: ', quantity);
    const subtotal = price * quantity;
    console.log('subtotal: ', subtotal);
    product.querySelector('.subtotal span').innerHTML = subtotal.toFixed(2);
    return subtotal;
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    // const singleProduct = document.querySelector('.product');
    // updateSubtotal(singleProduct);
    // end of test

    // ITERATION 2
    //... your code goes here
    const products = document.querySelectorAll('.product');
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        total += updateSubtotal(element);
    }
    console.log('total: ', total);
    document.querySelector('#total-value span').innerHTML = total.toFixed(2);
    // ITERATION 3
    //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here
    // target.parentElement.remove()
    target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
    //... your code goes here
    console.log('Crear producto');
    const newProduct = document.querySelector('.create-product');
    const productName = newProduct.querySelector('input[type="text"]').value;
    console.log('nombre producto: ', productName);
    if (productName.trim().length === 0) return;
    const priceText = newProduct.querySelector('input[type="number"]').value;
    const price = parseFloat(priceText).toFixed(2);
    console.log('precio: ', price);
    const body = document.querySelector('tbody');
    // Al reeplazar el html con nuevo html estamos borrando los listeners de los botones de borrar
    body.innerHTML += `
    <tr class="product">
        <td class="name">
        <span>${productName}</span>
        </td>
        <td class="price">$<span>${price}</span></td>
        <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
        <button class="btn btn-remove">Remove</button>
        </td>
    </tr>
    `
    newProduct.querySelector('input[type="text"]').value = '';
    newProduct.querySelector('input[type="number"]').value = 0;
    // Volvemos a agregar los listeners del boton de borrar
    removeListeners();
}

function removeListeners() {
    const remove = document.querySelectorAll('.btn.btn-remove');
    for (let i = 0; i < remove.length; i++) {
        const element = remove[i];
        element.addEventListener('click', removeProduct)
    }

}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
   removeListeners();
    document.querySelector('#create').addEventListener('click', createProduct)
});
