const connectButton = document.getElementById('connectButton')

connectButton.addEventListener('click', async () => {
    try {
        await window.ethereum.enable()

        const web3 = new Web3(window.ethereum)

        const accounts = await web3.eth.getAccounts()
        const userAddress = accounts[0]

        console.log('Connected to MetaMask')
        console.log('User Address:', userAddress)
    } catch (error) {
        console.log(error)
    }
})