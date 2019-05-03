const ERC20Contract = artifacts.require('ERC20');

const errors = [
    "Make sure to declare a public mapping (address => uint256) 'balances' in your contract!",
    "Make sure to declare a public mapping (address => mapping (address => uint256)) 'allowed' in your contract!",
]

contract('ERC20Contract', function ([creator]) {

    let contract;
    let _balances = null;
    let _allowed = null;

    before(async () => {
        contract = await ERC20Contract.new(_balances, _allowed, {
            from: creator,
            gasPrice: 0,
        });
    });

    describe('Contract Stage tests', function () {
        it('should declare a \'balances mapping\'', async function () {
            assert(contract, errors[0]);
        });
        it('should declare a \'allowed\' mapping', async function () {
            assert(contract, errors[1]);
        });
    });
    
});