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
    NO_ALLOWED_VAR: "mapping 'allowed' has not been declared in contract"
}

const typeOf = (propName) => {
    const prop = ERC20Contract.abi.filter(props => props.name === propName)
    if (!prop[0] && !prop.outputs[0]) { return null }
    return prop[0].outputs[0].type
}

const expectThrow = async (promise) => {
    try {
        await promise;
    } catch (err) {
        return;
    }
    assert(false, 'Expected throw not received');
}

contract('ERC20Contract', function ([creator, bob, alice]) {

    let contract;
    const initialAmount = 1000;
    const name = 'Shrute Buck';
    const decimals = 18;
    const symbol = 'SHUB';

    beforeEach(async () => {
        contract = await ERC20Contract.new(initialAmount, name, symbol, decimals, {
            from: creator,
            gasPrice: 0,
        });
    });

    describe('Transfer From Stage tests', function () { 
        it(`should revert transferFrom 'value' is greater than the balance of the account`, async () => {
            expectThrow(contract.transferFrom(creator, bob, '10001', { from: creator }));
        });

        it(`should revert if msg.sender is not approved to transfer funds`, async () => {
            expectThrow(contract.transferFrom(creator, bob, '50', { from: creator }));
        });

        it(`should transfer 100 SHUB from alice to bob`, async () => {

            // Contract creator transfers alice 200 SHUBs
            let res = await contract.transfer(alice, 200, { from: creator });

            // Alice then approves the creator to transfer up to 100 SHUBs from her account
            await contract.approve(creator, 100, { from: alice });

            // Creator now transfers 50 SHUBS from alice's account to bob's account
            await contract.transferFrom(alice, bob, 50, { from: creator });
            const bobBalance = await contract.balanceOf(bob);
            assert.equal(bobBalance.toNumber(), 50, `'transfer' did not add the correct balance to bob's account`);
        });

    });

    describe('Approval Stage Tests', function () {
        it('should declare a mapping \'allowed\'', async function () {
            assert(contract.allowed, errors.NO_ALLOWED_VAR);
        });
        it(`should approve bob to transfer 100 SHUBs from alice's account`, async () => {
            await contract.approve(bob, 100, { from: alice });
            assert.equal((await contract.allowance(alice, bob)).toNumber(), 100, `'approve' did not allow bob 100 SHUBs`)
        });
    });

    describe('Transfer Stage tests', function () {

        // Test that function fails if transfer is greater than holder balance
        it(`should revert if 'value' to transfer is greater than the balance of the account`, async () => {
            expectThrow(contract.transfer(bob, 1001))
        });

        // Test that function accurately subtracts from balance
        it(`should transfer 100 SHUBs from contract creator's account to bob's account`, async () => {
            await contract.transfer(bob, '100', { from: creator })
            const creatorBalance = await contract.balanceOf(creator)
            assert.equal(creatorBalance.toNumber(), 900, `'transfer' did not subtract the correct balance from contract creator`);
            const bobBalance = await contract.balanceOf(bob)
            assert.equal(bobBalance.toNumber(), 100, `'transfer' did not add the correct balance to bob's account`);
        });

        it(`should return correct balance`, async () => {
            await contract.transfer(bob, '100', { from: creator })
            const bobBalance = await contract.balanceOf(bob)
            assert.equal(bobBalance.toNumber(), 100, `'balanceOf' did not return the correct balance of bob's account`);
        });

    });

    describe('Contract Constructor Stage tests', function () {
        it(`should set 'balances[msg.sender]' to ${initialAmount}`, async function () {
            const _initialAmount = await contract.balances(creator);
            assert.equal(_initialAmount.toNumber(), initialAmount, `'balances[msg.sender]' not intitialized to ${initialAmount}`);
        });
        it(`should set 'name' to \'${name}\'`, async function () {
            let _name = await contract.name();
            assert.equal(_name, name, `'name' not intitialized to ${name}`);
        });
        it(`should set 'symbol' to \'${symbol}\'`, async function () {
            let _symbol = await contract.symbol();
            assert.equal(_symbol, symbol, `'symbol' not intitialized to ${symbol}`);
        });
        it(`should set 'decimals to \'${decimals}\'`, async function () {
            let _decimals = await contract.decimals();
            assert.equal(_decimals.toNumber(), decimals, `'decimals' not intitialized to ${decimals}`);
        });
    });

    describe('Contract Setup Pt. 2 Stage tests', function () {
        it('should declare a mapping \'balances\'', async function () {
            assert(contract.balances, errors.NO_BALANCES_VAR);
        });
        it('should declare a mapping \'allowed\'', async function () {
            assert(contract.allowed, errors.NO_ALLOWED_VAR);
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