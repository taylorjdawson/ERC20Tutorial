const ERC20Contract = artifacts.require('ERC20');
console.log(ERC20Contract)
const errors = [
    "Make sure to declare a public mapping (address => uint256) 'balances' in your contract!",
    "Make sure to declare a public mapping (address => mapping (address => uint256)) 'allowed' in your contract!",
    "The arbiter address wasn't set to the expected value. It is the first argument passed into the constructor",
]
contract('ERC20Contract', function (accounts) {
    let contract;
    let _depositor = accounts[0];
    let _arbiter = accounts[1];
    let _beneficiary = accounts[2];
    before(async () => {
        contract = await ERC20Contract.new(_arbiter, _beneficiary, {
            from: _depositor,
            gasPrice: 0,
        });
    });
    describe('Contract Stage tests', function () {
        it('should declare an arbiter', async function () {
            assert(contract.arbiter, errors[0]);
        });

        it('should declare an depositor', async function () {
            assert(contract.depositor, errors[2]);
        });

        it('should declare an beneficiary', async function () {
            assert(contract.beneficiary, errors[4]);
        });
    });
});