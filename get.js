const fleek = require('@fleekhq/fleek-storage-js');   

const apiKey = process.env.FLEEK_API_KEY;
const apiSecret = process.env.FLEEK_API_SECRET;
const key = process.argv[2];

const testFunctionGet = async () => {
  const input = {
    apiKey,
    apiSecret,
    key,
    getOptions: ['hash', 'data', 'publicUrl']
  };

  try {
    const result = await fleek.get(input);
    console.log(result);
  } catch(e) {
    console.log('error', e);
  }
}

testFunctionGet();
