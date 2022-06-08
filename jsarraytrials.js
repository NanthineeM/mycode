
const sales = [ 

    { item: 'PS4 Pro', stock: 3, original: 399.99,discount:0.0 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99,discount: 0.0 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 } 
    ];
    result = calculatesale(sales);
    console.log(result);


    function calculatesale(sales)
    {
    //var i;
    for (let i=0;i<=4;i++)
    {
    sales[i].Sale = sales[i].original-(sales[i].original*sales[i].discount);  
    //console.log(sales[i].Sale);
    sales[i].Total = (sales[i].stock * sales[i].Sale);
    //console.log(sales[i].Total);
    }
    //console.log(sales);
    return sales;
    }



