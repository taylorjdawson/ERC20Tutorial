const ERC20Contract = artifacts.require('ERC20');
console.log(ERC20Contract.ast.nodes)
const errors = [
    "Make sure to declare a public mapping (address => uint256) 'balances' in your contract!",
    "Make sure to declare a public mapping (address => mapping (address => uint256)) 'allowed' in your contract!",
]

contract('ERC20Contract', function ([creator]) {

    let contract;
    const name = 'Shrute Buck';
    const decimals = 18;
    const symbol = 'SHUB';

    before(async () => {
        contract = await ERC20Contract.new(name, decimals, symbol, {
            from: creator,
            gasPrice: 0,
        });
    });

    describe('Contract Setup Pt. 1 Stage tests', function () {
        it('should declare a variable \'name\'', async function () {


            // assert.equal(await contract.name.call(), 'kjun')
            assert.equal(typeof await contract.name.call(), 'string')
            
            assert(contract.name, errors[0]);
        });
    });
    
});