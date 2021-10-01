 const axios = require('axios');
 
 axios
     .get('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=5')
     .then(function (response) {
         // handle success
         console.log(response);
         return response.fact;
     })
     .catch(function (error) {
         // handle error
         console.log(error);
     });