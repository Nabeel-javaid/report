const axios = require('axios');
const fs = require('fs');

// Define the contract address and your Etherscan API key
const contractAddress = '0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413';
const apiKey = 'WWBV5YZQMI2D6X21TYZU919PVZ9IY35PH4';

// Construct the URL for the Etherscan API request
const url = `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${apiKey}`;

// Send the request to the Etherscan API
axios.get(url)
    .then(response => {
        const data = response.data;

        // Log the full response for debugging
        console.log('API Response:', data);

        // Check if the API response is successful
        if (data.status === '1') {
            // Extract the contract's source code
            const sourceCode = data.result[0].SourceCode;

            // Define the file path to save the source code
            const filePath = 'contract.sol';

            // Write the source code to the file
            fs.writeFile(filePath, sourceCode, (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                } else {
                    console.log('Contract source code saved to', filePath);
                }
            });
        } else {
            console.error('Error:', data.result, 'Message:', data.message);
        }
    })
    .catch(error => {
        console.error('Error fetching contract source code:', error);
    });
