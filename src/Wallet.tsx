import opWeb3Wallet from 'op-web3-wallet2'
opWeb3Wallet.init({
  env: 'dev',
  authId: 'xxxxxxx',
  apiKey: 'xxxxxxx',
})
console.log('opWeb3Wallet Loaded!', opWeb3Wallet)
const Wallet = () => {
  return null
}

export default Wallet
