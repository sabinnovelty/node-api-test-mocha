const router = require('express').Router()
const Customer = require('../modal/Customer')
const Product = require('../modal/Product')

router.post('/', async (request, response) => {
  const products = request.body.products
  const body = request.body
  const customer = new Customer({
    cname: body.cname,
    address: body.address
  });

  const cusInstance = await saveProduct( customer , request.body.products );
  console.log(cusInstance,'&&&')
//   cusInstance.save(res=>{
//       console.log('final res',res);
//     response.json(res)
//   })

//   customer
//     .save()
//     .then(async (cus) => {
//         const save_products = await saveProduct( cus , request.body.products );
//         console.log('saved products',save_products);
//         customer.update({
//             _id:cus._id
//         },{
//             $set:{
//                 products:save_products
//             }
//         }).then(update=>{
//             console.log('update',update);
//             response.json(update)
//         })
//     })
//     .catch(err => {
//       response.json({ message: err })
//     })
})


router.get('/:cid',( request ,response )=>{
    const cid = request.params.cid;
    Customer.findOne({_id:cid}).populate('products').then(res=>{
        response.json(res)
    })
})

const saveProduct = ( customer , products ) => {
    console.log(products)
  return new Promise(resolve => {
    let result = products.map(product => {
      return new Promise(resolve => {
        var p = new Product({
            pname: product.name,
            price: product.price
          });
          p.save().then(res=>{
              
              resolve(res)
          })
      })
    });
    Promise.all(result).then(data=>{
        console.log('*****',data);
        customer.products = [...data];
        customer.save().then(res=>{
            console.log('customer reuslt',res)
        })
        // customer.save()
        // customer.products.push(data);
        // customer.save().then(resultt=>console.log('resullttt',resultt))
        resolve(data);
    })
  })
}

module.exports = router
