const ERC20Contract = artifacts.require('ERC20');
console.log(ERC20Contract)
// const errors = [
//     "Make sure to declare a public mapping (address => uint256) 'balances' in your contract!",
//     "Make sure to declare a public mapping (address => mapping (address => uint256)) 'allowed' in your contract!",
//     "The arbiter address wasn't set to the expected value. It is the first argument passed into the constructor",
// ]
// contract('ERC20Contract', function ([_depositor]) {
//     let contract;
//     let _balances = null;
//     let _allowed = null;
//     before(async () => {
//         contract = await ERC20Contract.new(_balances, _allowed, {
//             from: _depositor,
//             gasPrice: 0,
//         });
//     });
//     describe('Contract Stage tests', function () {
//         it('should declare a balances mapping', async function () {
//             assert(contract.arbiter, errors[0]);
//         });
//         it('should declare an allowed mapping', async function () {
//             assert(contract.depositor, errors[2]);
//         });
//     });
// });