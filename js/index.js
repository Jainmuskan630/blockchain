function showProductInformation(supplierName) {
                
                
    var productInfo = "";

    switch (supplierName) {
        case 'Supplier 1':
            productInfo = " Product  1 code: 'P001', description: 'Product A', stock: 100";
            break;
        case 'Supplier 2':
            productInfo = "Product  2, code: 'P002', description: 'Product B', stock: 50";
            break;
        case 'Supplier 3':
            productInfo = "Product 3, code: 'P003', description: 'Product C', stock: 155";
            break;
        case 'Supplier 4':
            productInfo = " Product 4, code: 'P004', description: 'Product D', stock: 78";
            break;
        case 'Supplier 5':
            productInfo = "Product  5, code: 'P005', description: 'Product E', stock: 59";
            break;
        default:
            productInfo = "No product information available";
            break;
    }

    
    document.getElementById('productInfo').innerHTML = '<h3>' + supplierName + '</h3>' + '<p>' + productInfo + '</p>';
    document.getElementById('productInfo').style.color = 'white';
}


