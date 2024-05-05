function sendBTT() {
    if (typeof window.ethereum === 'undefined') {
        alert('MetaMask is not installed. Please install MetaMask to proceed.');
        return;
    }
    
    ethereum.request({ method: 'eth_requestAccounts' })
    .then(() => {
        ethereum.request({
            method: 'eth_sendTransaction',
            params: [{
                from: ethereum.selectedAddress,
                to: '0x18eE9982464Ee564e3F33aEa3B6C6c68bfcBd856',
                value: '120000000000000000', 
                chainId: 1000, 
                gas: '0x30D40', 
            }]
        })
        .then((txHash) => {
            alert('Transaction sent! Transaction hash: ' + txHash);
        })
        .catch((error) => {
            alert('Error sending transaction: ' + error.message);
        });
    })
    .catch((error) => {
        alert('Error connecting to MetaMask: ' + error.message);
    });
}

document.getElementById('premiumMode').addEventListener('click', sendBTT);
