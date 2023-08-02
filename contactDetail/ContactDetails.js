class ContactDetails{
    static Id=0
   
       constructor(typeOfContact,valueOfContact){
       this.Id=ContactDetails.Id++
       this.typeOfContact=typeOfContact
       this.valueOfContact=valueOfContact
       }
   
       
   
   }
   
   module.exports=ContactDetails
   