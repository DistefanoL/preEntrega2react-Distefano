const products = [
    {
        id: '1',
        name: 'Samsung S23 Ultra',
        price: '2500',
        category: 'celular',
        img: 'https://images.samsung.com/ar/smartphones/galaxy-s23-ultra/compare/images/galaxy-s23-ultra-compare-red-s.jpg',
        stock: 20,
        description: 'El telefono mas potente de Samsung'
    },
    {id: '2', name: 'Iphone 14 Pro Max', price: '2000', category: 'celular', img: 'https://www.macstation.com.ar/img/productos/3211-3119-2.jpg', stock: '15', description: 'El ultimo telefono de Apple' },
    {id: '3', name: '77" OLED 4K S90C', price: '5000', category: 'television', img: 'https://samsungar.vtexassets.com/arquivos/ids/190927-1200-auto?width=1200&height=auto&aspect=true', stock: '5', description: 'Televisor OLED de 77 pulgadas'},

]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}


