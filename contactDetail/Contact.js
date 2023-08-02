const Notfound = require("./Error/NotFound");

class Contact{

    static Id=0
    constructor(fullName ){
    this.Id=Contact.Id++
    this.fullName=fullName
    this.contactInfos=[]

}

getcontactInfo(){

  try{
   
     return this.contactInfos
      }
     catch (error)  {
       throw error

      }

  
}
getcontactInfoByid(contactInfoId){

  try{
    let indexOfContactInfo= this.findContct(contactInfoId);
     return this.contactInfos[indexOfContactInfo]
      }
     catch (error)  {
       throw error

      }

  
}

deleteContactDetails(){
  try{
    this.contactInfos.splice(0,this.contactInfos.length)
     
 }
  catch(error){
   throw error 
  }
  
  
}
deleteContactDetailsById(contactInfoId){
  try{
     let index = this.findContact(contactInfoId);
      this.contactInfos.splice(index,1)

  }
   catch(error){
    throw error 
   }
    
    

}

findContact(contactId) {
  try{
    for (let index = 0; index < this.contactInfos.length; index++) {
      if (contactId == this.contactInfos[index].Id) {
        return index;
      }
    }


      throw new Notfound(" Contact not found in Directory")
  }
  catch (error){
     throw error
  }

}
}
module.exports=Contact