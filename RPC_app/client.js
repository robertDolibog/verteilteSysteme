const axios = require('axios');

async function main() {
    const url = 'http://localhost:3030/add';
    const payload = { x: 5, y: 3 }; // JavaScript object

    try {
        const response = await axios.post(url, payload); // Marshalling: Axios converts `payload` to JSON when sending the POST request
        const { result } = response.data; // Demarshalling: Axios automatically parses the JSON response into JavaScript objects
        console.log(`The result is: ${result}`);
    } catch (error) {
        console.error(`Error making POST request: ${error}`);
    }
}

main();
