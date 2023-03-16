let sdkgen = require('postman-collection-code-generators');
const writeToFile = require('./writeCodeToFile');

sdkgen.generate(
    {
      type: 'json',
    data: require('../collection2.json')
    },
    {
      language: 'nodejs',
      variant: 'request',
    },
    async (err, { result, data }) => {
      if (err) return console.log(err);
      console.log(data);
  
      if(result){
        await writeToFile('collectionSDK', data);
      }
    }
  );

