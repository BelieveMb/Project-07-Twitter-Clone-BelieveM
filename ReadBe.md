# X APi
    -create a developper account
    -install axios
    -import axios
    -access
    -api key: 
    oZ2KaJDdaSfBIUFQWVT2vHLep
    -api key secret :
    Ij5K4csfa0WUhNuaInipMxalzT2jhMtvjX8RfKIwuHmBz7NQbF
    -Bearer token : AAAAAAAAAAAAAAAAAAAAAGD6sAEAAAAAQHqXWI2q%2BJmunebhknsQKb83dv8%3DiRN2xZWPKdiiqX4fUNVRCwTyYdtdmiEhVSSdinR7MLHRGp7sqR
    -access token : 
    1606287677426475008-FD7FgtN9Aziqc4uvHb2JsYKQroo2Ov
    -access token secret :
    QzzVYG9WEl3sx6JVXI9t4SQMuJXqb7GF5SOI5NhGLMncq


    -id test :     ids: '1228393702244134912',

    -ça marche mais limité cause version 
     const client = new TwitterApi({
        consumer_key: 'oZ2KaJDdaSfBIUFQWVT2vHLep',
        consumer_secret: 'Ij5K4csfa0WUhNuaInipMxalzT2jhMtvjX8RfKIwuHmBz7NQbF',
        access_token_key: '1606287677426475008-FD7FgtN9Aziqc4uvHb2JsYKQroo2Ov',
        access_token_secret: 'QzzVYG9WEl3sx6JVXI9t4SQMuJXqb7GF5SOI5NhGLMncq',
    });

    const { data } = await client.get('tweets', { 'usernames': 'JumbaDrc' });
    console.log(data);

    -create a get request
        -we use twitter-v2 -> npm install twitter-v2
    -create a post request
    -create a put request
