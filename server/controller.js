let products = [
    {
        id: 1,
        name: 'Coke',
        price: 1.99,
        image: 'https://cdn.productreview.com.au/resize/listing-picture/be9517eb-a8c2-398a-a065-b14b8b85c02a?width=1200&height=630'
     },
     {
         id: 2,
         name: 'Lemonade',
         price: 2.75,
         image: 'https://media.istockphoto.com/photos/lemonade-picture-id181856842?k=6&m=181856842&s=612x612&w=0&h=SQ2AkOEVbG2bKe_lVNZLlZS0StWw4ge8jDRVQUioSsk='
    },
    {
        id: 3,
        name: 'Root Beer',
        image: 'https://beverages2u.com/wp-content/uploads/2019/05/0007800080488_C.jpg'
    }
]
let id = 3

function addProduct (req, res) {
    req.body.id = id
    products.push(req.body)
    id++
    res.status(200).json(products)
}
function getProduct (req, res) {
    res.status(200).json(products)
}
module.exports = {
    addProduct,
    getProduct
}