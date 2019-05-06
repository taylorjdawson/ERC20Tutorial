const ERC20Contract = artifacts.require('ERC20');

//TODO: Finish  Error codes

const errors = {
    NO_NAME_VAR: "variable 'name' has not been declared in contract",
    NAME_WRONG_TYPE: "'name' is not of type 'string'",
    NO_DECIMAL_VAR: "variable 'decimal' has not been declared in contract",
    NO_SYMBOL_VAR: "variable 'symbol' has not been declared in contract",
    SYMBOL_WRONG_TYPE: "'symbol' is not of type 'string'",
    NO_TOTALSUPPLY_VAR: "variable 'totalSupply' has not been declared in contract",
    TOTALSUPPLY_WRONG_TYPE: "'totalSupply' is not of type 'string'",
}

//TODO: Need add check for priv var

const typeOf = (propName) => {
    const prop = ERC20Contract.abi.filter(props => props.name === propName)
    if (!prop[0] && !prop.outputs[0]) {return null}
    return prop[0].outputs[0].type
}

contract('ERC20Contract', function ([creator]) {

    let contract;

    before(async () => {
        contract = await ERC20Contract.new({
            from: creator,
            gasPrice: 0,
        });
    });

    describe('Contract Setup Pt. 1 Stage tests', function () {
        it('should declare a variable \'name\'', async function () {
            assert(contract.name, errors.NO_NAME_VAR);
            assert.equal(typeof await contract.name.call(), 'string', errors.NAME_WRONG_TYPE);
        });
        it('should declare a variable \'decimals\'', async function () {
            assert(contract.decimals, errors.NO_DECIMAL_VAR);
            assert.equal(typeOf('decimals'), 'uint8')
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