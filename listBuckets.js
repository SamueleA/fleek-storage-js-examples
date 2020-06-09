// For testing the functions locally
const fleek = require('fleek-storage-js');   

const apiKey = process.env.FLEEK_API_KEY;
const apiSecret = process.env.FLEEK_API_SECRET;

const testFunctionListBuckets = async () => {
  const input = {
    apiKey,
    apiSecret,
  };

  try {
    const result = await fleek.listBuckets(input);
    console.log(result);
  } catch(e) {
    console.log('error', e);
  }
}

testFunctionListBuckets();
