const ERC20ContractABI = artifacts.require('ERC20').abi;

console.log(ERC20ContractABI)

const errors = [
    "Make sure to declare an external function 'transfer' in your interface!",
    "Make sure to declare an external function 'approve' in your interface!",
    "Make sure to declare an external function 'transferFrom' in your interface!",
    "Make sure to declare an external function 'totalSupply' in your interface!",
    "Make sure to declare an external function 'balanceOf' in your interface!",
    "Make sure to declare an external function 'allowance' in your interface!",
    "Make sure to declare an event 'Transfer' in your interface!",
    "Make sure to declare an event 'Approval' in your interface!",
]

const hasFunction = (abi, name) => {
    return abi.filter(props => props.type === 'function' && props.name === name).length > 0
}

const hasEvent = (abi, name) => {
    return abi.filter(props => props.type === 'event' && props.name === name).length > 0
}


contract('ERC20Contract', function ([creator]) {

    describe('Contract Stage tests', function () {
        it('should declare transfer function', async function () {
            assert(hasFunction(ERC20ContractABI, 'transfer'), errors[0]);
        });
        it('should declare approve function', async function () {
            assert(hasFunction(ERC20ContractABI, 'approve'), errors[1]);
        });
        it('should declare transferFrom function', async function () {
            assert(hasFunction(ERC20ContractABI, 'transferFrom'), errors[2]);
        });
        it('should declare totalSupply function', async function () {
            assert(hasFunction(ERC20ContractABI, 'totalSupply'), errors[3]);
        });
        it('should declare balanceOf function', async function () {
            assert(hasFunction(ERC20ContractABI, 'balanceOf'), errors[4]);
        });
        it('should declare allowance function', async function () {
            assert(hasFunction(ERC20ContractABI, 'allowance'), errors[5]);
        });
        it('should declare Transfer event', async function () {
            assert(hasFunction(ERC20ContractABI, 'allowance'), errors[6]);
        });
        it('should declare Approval event', async function () {
            assert(hasFunction(ERC20ContractABI, 'allowance'), errors[7]);
        });
    });
});