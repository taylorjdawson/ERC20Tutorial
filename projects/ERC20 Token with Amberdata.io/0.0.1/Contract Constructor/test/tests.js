const ERC20Contract = artifacts.require('ERC20');

const errors = {
    NO_NAME_VAR: "variable 'name' has not been declared in contract",
    NAME_WRONG_TYPE: "'name' is not of type 'string'",
    NO_DECIMAL_VAR: "variable 'decimal' has not been declared in contract",
    DECIMAL_WRONG_TYPE: "'decimal' is not of type 'uint8'",
    NO_SYMBOL_VAR: "variable 'symbol' has not been declared in contract",
    SYMBOL_WRONG_TYPE: "'symbol' is not of type 'string'",
    NO_BALANCES_VAR: "mapping 'balances' has not been declared in contract",
    NO_TOTALSUPPLY_VAR: "variable 'totalSupply' has not been declared in contract",
    TOTALSUPPLY_WRONG_TYPE: "'totalSupply' is not of type 'string'",
}

const typeOf = (propName) => {
    const prop = ERC20Contract.abi.filter(props => props.name === propName)
    if (!prop[0] && !prop.outputs[0]) { return null }
    return prop[0].outputs[0].type
}

contract('ERC20Contract', function ([creator]) {

    let contract;
    const initialAmount = 1000;
    const name = 'Shrute Buck';
    const decimals = 18;
    const symbol = 'SHUB';

    before(async () => {
        contract = await ERC20Contract.new(initialAmount, name, symbol, decimals, {
            from: creator,
            gasPrice: 0,
        });
    });

    describe('Contract Constructor Stage tests', function () {
        it(`should set 'balances[msg.sender]' to ${initialAmount}`, async function () {
            const _initialAmount = await contract.balances.call(creator);
            assert.equal(_initialAmount, initialAmount, `'balances[msg.sender]' not intitialized to ${initialAmount}`);
        });
        it(`should set 'name' to \'${name}\'`, async function () {
            let _name = await contract.name.call();
            assert.equal(_name, name, `'name' not intitialized to ${name}`);
        });
        it(`should set 'symbol' to \'${symbol}\'`, async function () {
            let _symbol = await contract.symbol.call();
            assert.equal(_symbol, symbol, `'symbol' not intitialized to ${symbol}`);
        });
        it(`should set 'decimals to \'${decimals}\'`, async function () {
            let _decimals = await contract.decimals.call();
            assert.equal(_decimals, decimals, `'decimals' not intitialized to ${decimals}`);
        });
    });

    describe('Contract Setup Pt. 2 Stage tests', function () {
        it('should declare a mapping \'balances\'', async function () {
            assert(contract.balances, errors.NO_BALANCES_VAR);
        });
    });

    describe('Contract Setup Pt. 1 Stage tests', function () {
        it('should declare a variable \'name\'', async function () {
            assert(contract.name, errors.NO_NAME_VAR);
            assert.equal(typeof await contract.name.call(), 'string', errors.NAME_WRONG_TYPE);
        });
        it('should declare a variable \'decimals\'', async function () {
            assert(contract.decimals, errors.NO_DECIMAL_VAR);
            assert.equal(typeOf('decimals'), 'uint8', errors.DECIMAL_WRONG_TYPE)
        });
        it('should declare a variable \'symbol\'', async function () {
            assert(contract.symbol, errors.NO_SYMBOL_VAR);
            assert.equal(typeof await contract.symbol.call(), 'string', errors.SYMBOL_WRONG_TYPE);
        });
        it('should declare a variable \'totalSupply\'', async function () {
            assert(contract.totalSupply, errors.NO_TOTALSUPPLY_VAR);
            assert.equal(typeOf('totalSupply'), 'uint256', errors.TOTALSUPPLY_WRONG_TYPE);
        });
    });
});