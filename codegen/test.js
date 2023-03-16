// Test the generated SDK

// Test the generated SDK
const SDK = require('./collectionSDK');

const REQ = new SDK();
REQ.postRawText((err, response) => {

   if(err){
      console.log("Error => ", err);
      return;
   }
   
   console.log("Data is => ", response.body);
})