const router = require('express').Router();
const httpResonse = require('../httpResponse/response');
const contactService = require('../services/Contact.service');

router.get('/',( request , response )=>{
    response.json({message:'get rouute working'})
});

router.post('/',async ( request , response )=>{
    const body = request.body;
    try{
        const user = await contactService.createUser( body );
        let addressResult = body.address.map( async (x ,index) => {
                return new Promise( async ( resolve , reject )=>{
                    let result = await contactService.createAddress( x , user._id );
                    resolve(result);
                } )
        });
        Promise.all(addressResult).then((res)=>{
            let phoneResult = body.contact.map( async (y ,index) => {
                return new Promise( async ( resolve , reject )=>{
                    let result = await contactService.createPhone( y , user._id );
                    resolve(result);
                } )

        }); 
            Promise.all(phoneResult).then((res)=>{
                httpResonse.success( body , response )
            })
        })
    }catch(error){
        httpResonse.error( error , 500 ,response )
    }
});

router.get('/:userId',async ( request , response )=>{
    const userId = request.params.userId;

    try{
        const userAddress = await contactService.fetchAddressByUserId( userId );
        const userContact = await contactService.fetchPhoneByUserId( userId );
        console.log(userAddress,'**')
        const userInfo = await contactService.fetchUserById( userId );
        httpResonse.success( {...userInfo , contact:[...userContact] , address:[...userAddress]} , response )
    } catch(error){
        httpResonse.error( error , 500 ,response )
    }
});

module.exports = router;