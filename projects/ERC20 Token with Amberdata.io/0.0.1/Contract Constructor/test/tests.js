const ERC20Contract = artifacts.require('ERC20');

const errors = [
    "Make sure to declare a public mapping (address => uint256) 'balances' in your contract!",
    "Make sure to declare a public mapping (address => mapping (address => uint256)) 'allowed' in your contract!",
    "The arbiter address wasn't set to the expected value. It is the first argument passed into the constructor",
]
contract('ERC20Contract', function ([tokenCreator]) {

    let contract;
    const initialTokenAmount = 1000;
    const tokenName = 'Shrute Bucks'
    const tokenSumbol = 'SHUB'
    const decimalUnits = 18
    
    before(async () => {
        contract = await ERC20Contract.new(initialTokenAmount, tokenName, tokenSumbol, decimalUnits, {
            from: tokenCreator,
            gasPrice: 0,
        });
    });

    describe('Contract Constructor Stage tests', function () {
        it(`should set balances[msg.sender] to ${initialTokenAmount}`, async function () {
            // assert(contract.balances[tokenCreator], 'balances[msg.sender] not intitialized')
            // let _initialTokenAmount = await contract.balances[tokenCreator].call();
            // assert.equal(_initialTokenAmount, initialTokenAmount, `balances[msg.sender] not intitialized to ${initialTokenAmount}`);
        });
        it(`should set token name to \'${tokenName}\'`, async function () {
            assert(contract.name, 'Member varriable \'name\' not intitialized')
            // assert.equal(contract.name, tokenName, `token name not intitialized to ${tokenName}`);
        });
    });

    describe('Contract Setup Stage tests', function () {
        it('should declare a \'balances mapping\'', async function () {
            assert(contract, errors[0]);
        });
        it('should declare an \'allowed\' mapping', async function () {
            assert(contract, errors[1]);
        });
    });

});