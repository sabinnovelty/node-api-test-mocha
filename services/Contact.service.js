const User = require('../modal/user.modal');
const Address = require('../modal/address.modal');
const Contact = require('../modal/contact.modal');

class ContactService {
    
    createUser( body  ){
        const user = new User( {
            name:body.name,
            email:body.email,
            dob:body.dob
        });
        return user.save();
    }

    createAddress( address ,userId ){

        const contactAddress = new Address( {...address,userId:userId } );
        return contactAddress.save();
    }

    createPhone( phone ,userId ){
        console.log(phone,userId,'phone')
        const createPhone = new Contact( {...phone,userId:userId} );
        return createPhone.save();
    }

    fetchAddressByUserId( userId ){
       return Address.find({userId:userId});
    }

    fetchPhoneByUserId( userId ){
        return Contact.find({userId:userId});
    }

    fetchUserById( userId ) {
        return User.findById(userId);
        
    }
}

const contactService = new ContactService();
module.exports = contactService;