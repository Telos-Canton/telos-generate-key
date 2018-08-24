import 'bootstrap/dist/css/bootstrap.css'
import ecc from 'eosjs-ecc'
// 前缀
const PUBKEY_PREFIX = 'TLOS'
// 生成按钮
let generateBtn = document.querySelector('#generate-key-btn')
generateBtn.addEventListener('click', () => {
    let publicKeyLabel = document.querySelector('#public-key')
    let privateKeyLabel = document.querySelector('#private-key')

    ecc.randomKey().then((privateKey) => {
        let publicKey = ecc.privateToPublic(privateKey, PUBKEY_PREFIX)
        publicKeyLabel.textContent = `公钥: ${publicKey.toString()}`
        privateKeyLabel.textContent = `私钥: ${privateKey.toString()}`
        publicKeyLabel.className = 'd-block'
        privateKeyLabel.className = 'd-block'
    }).catch(err => {
        alert(err.toString())
    })
})
// 验证公钥
let validPublicKeyBtn = document.querySelector('#valid-public-key-btn')
validPublicKeyBtn.addEventListener('click', () => {
    let label = document.querySelector('#valid-public-key')
    let resultLabel = document.querySelector('#valid-public-key-result')
    if (label.value) {
        if (ecc.isValidPublic(label.value, PUBKEY_PREFIX)) {
            resultLabel.className = 'text-success'
            resultLabel.textContent = '公钥正确'
        } else {
            resultLabel.className = 'text-danger'
            resultLabel.textContent = '公钥错误'
        }
    }
})
// 验证私钥
let validPrivateKeyBtn = document.querySelector('#valid-private-key-btn')
validPrivateKeyBtn.addEventListener('click', () => {
    let label = document.querySelector('#valid-private-key')
    let resultLabel = document.querySelector('#valid-private-key-result')
    if (label.value) {
        if (ecc.isValidPrivate(label.value)) {
            resultLabel.className = 'text-success'
            resultLabel.textContent = '私钥正确'
        } else {
            resultLabel.className = 'text-danger'
            resultLabel.textContent = '私钥错误'
        }
    }
})