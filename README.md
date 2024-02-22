# Report


## Medium Issues


| |Issue|Instances|
|-|:-|:-:|
| [M-1](#M-1) | Code will not work properly on L2 due to block.number | 1 |
| [M-2](#M-2) | Centralization Risk for trusted owners | 9 |
| [M-3](#M-3) | Unsafe use of ERC20 transferFrom() | 2 |
| [M-4](#M-4) | Unsafe use of ERC20 transfer() | 2 |

## Low Issues


| |Issue|Instances|
|-|:-|:-:|
| [L-1](#L-1) | Division by zero not prevented | 1 |
| [L-2](#L-2) | Empty function body | 1 |
| [L-3](#L-3) | Use Ownable2Step instead of Ownable | 4 |
| [L-4](#L-4) | Owner can renounce Ownership   | 4 |
| [L-5](#L-5) | Loss of precision | 1 |
| [L-6](#L-6) | State variables not capped at reasonable values | 10 |
| [L-7](#L-7) | Some tokens may revert when zero value transfers are made | 2 |
| [L-8](#L-8) |  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard   | 2 |
| [L-9](#L-9) | Some tokens may revert when large transfers are made | 5 |

## Non Critical Issues


| |Issue|Instances|
|-|:-|:-:|
| [NC-1](#NC-1) | Contracts should have full test coverage | 1 |
| [NC-2](#NC-2) | Consider adding formal verification proofs | 1 |
| [NC-3](#NC-3) | Large or complicated code bases should implement invariant tests | 1 |
| [NC-4](#NC-4) | NatSpec: Interface declarations should have NatSpec descriptions | 3 |
| [NC-5](#NC-5) | Variables without visibility specifier | 1 |
| [NC-6](#NC-6) | Constants in comparisons should appear on the left side | 7 |
| [NC-7](#NC-7) | constants should be defined rather than using magic numbers | 2 |
| [NC-8](#NC-8) | Contract declarations should have NatSpec @author annotations | 3 |
| [NC-9](#NC-9) | Contract declarations should have NatSpec @Title annotations | 3 |
| [NC-10](#NC-10) | NatSpec: Contract declarations should have @dev tags | 3 |
| [NC-11](#NC-11) | NatSpec: Contract declarations should have NatSpec descriptions | 3 |
| [NC-12](#NC-12) | NatSpec: Contract declarations should have @notice tags | 3 |
| [NC-13](#NC-13) | Consider using delete rather than assigning zero to clear value | 3 |
| [NC-14](#NC-14) | Consider using delete rather than assigning false to clear value | 1 |
| [NC-15](#NC-15) | Consider adding a block/deny-list" | 3 |
| [NC-16](#NC-16) | Consider adding emergency-stop functionality | 3 |
| [NC-17](#NC-17) | Events are missing sender information | 5 |
| [NC-18](#NC-18) | NatSpec: Event declarations should have NatSpec descriptions | 3 |
| [NC-19](#NC-19) | NatSpec: function declarations should have NatSpec descriptions | 31 |
| [NC-20](#NC-20) | NatSpec: function declarations should have @Notice tags | 31 |
| [NC-21](#NC-21) | NatSpec: function declarations should have NatSpec descriptions | 31 |
| [NC-22](#NC-22) | If-statement can be converted to a ternary | 7 |
| [NC-23](#NC-23) | Variable names for immutables should use CONSTANT_CASE | 4 |
| [NC-24](#NC-24) | Consider using named mappings | 4 |
| [NC-25](#NC-25) | Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct | 4 |
| [NC-26](#NC-26) | Use of override is unnecessary | 6 |
| [NC-27](#NC-27) | Consider using descriptive constants when using 0 in the code | 4 |
| [NC-28](#NC-28) | Non-external/public variable names should begin with an underscore | 6 |
| [NC-29](#NC-29) | Return values of `approve()` not checked | 2 |
| [NC-30](#NC-30) | Setters should prevent re-setting of the same value | 1 |
| [NC-31](#NC-31) | Use the latest solidity version for deployment   | 1 |
| [NC-32](#NC-32) | Empty receive()/fallback() function | 1 |
| [NC-33](#NC-33) | Consider moving msg.sender checks to modifiers | 4 |
| [NC-34](#NC-34) | Dont use _msgSender() if not supporting EIP-2771 | 8 |
| [NC-35](#NC-35) | Array indices should be referenced via enums rather than numeric literals | 2 |
| [NC-36](#NC-36) | Use assembly to emit events, in order to save gas | 9 |
| [NC-37](#NC-37) | Long revert strings | 4 |

## Gas Optimizations


| |Issue|Instances|
|-|:-|:-:|
| [GAS-1](#GAS-1) | Enable IR-based code generation | 1 |
| [GAS-2](#GAS-2) | Nesting if-statements is cheaper than using && | 2 |
| [GAS-3](#GAS-3) | Use >= instead of > for gas efficiency | 3 |
| [GAS-4](#GAS-4) | Using bools for storage incurs overhead | 1 |
| [GAS-5](#GAS-5) | Expressions for constant values should use immutable rather than constant | 8 |
| [GAS-6](#GAS-6) | Constructors can be marked payable | 2 |
| [GAS-7](#GAS-7) | Use Custom Errors | 8 |
| [GAS-8](#GAS-8) | Reduce gas usage by moving to Solidity 0.8.19 or later | 1 |
| [GAS-9](#GAS-9) | Functions guaranteed to revert when called by normal users can be marked `payable` | 7 |
| [GAS-10](#GAS-10) | require()/revert() strings longer than 32 bytes cost extra gas | 2 |
| [GAS-11](#GAS-11) | Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency | 9 |
| [GAS-12](#GAS-12) | Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead | 4 |
| [GAS-13](#GAS-13) | Use != 0 instead of > for unsigned integer comparison | 3 |
| [GAS-14](#GAS-14) | Optimize names to save gas | 27 |

##################################################################### 
 
 DETAILED REPORT:: 


##################################################################### 


## Medium Issues


 ### <a name="M-1"></a>[M-1]
 ### Code will not work properly on L2 due to block.number
On L2, the block.number is not a reliable source of timing information and the time between each block is also different from Ethereum. This is because each transaction on L2 is placed in a separate block and blocks are not produce at a constant rate.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

242:         launchBlock = block.number;

```

</details> 
 


 ### <a name="M-2"></a>[M-2]
 ### Centralization Risk for trusted owners

#### Impact:
Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

40: contract Ownable is Context {

63:     function transferOwnership(address newOwner) public onlyOwner {

76:     function renounceOwnership() public virtual onlyOwner {

102: contract SpectreAI is Context, IERC20, Ownable {

235:     function addExcludedWallet(address wallet) external onlyOwner {

239:     function openTrading() external onlyOwner {

245:     function setLimit(uint256 amountLimit) external onlyOwner {

250:     function removeAllLimits() external onlyOwner {

255:     function changeTax(uint256 newBuyTax, uint256 newSellTax) external onlyOwner {

```

</details> 
 


 ### <a name="M-3"></a>[M-3]
 ### Unsafe use of ERC20 transferFrom()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transferFrom() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransferFrom() from OpenZeppelin instead.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

26:     function transferFrom(

210:     function transferFrom(

```

</details> 
 


 ### <a name="M-4"></a>[M-4]
 ### Unsafe use of ERC20 transfer()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transfer() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransfer() from OpenZeppelin instead.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

15:     function transfer(address recipient, uint256 amount)

183:     function transfer(address recipient, uint256 amount)

```

</details> 
 


## Low Issues


 ### <a name="L-1"></a>[L-1]
 ### Division by zero not prevented
The divisions below take an input parameter that has no zero-value checks, which can cause the functions reverting if zero is passed.  

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

331:             uint256 taxTokens = (amount * _tax) / 100;

```

</details> 
 


 ### <a name="L-2"></a>[L-2]
 ### Empty function body
Consider adding a comment about why the function body is empty

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

346:     receive() external payable {}

```

</details> 
 


 ### <a name="L-3"></a>[L-3]
 ### Use Ownable2Step instead of Ownable
Add a description of why Ownable2Step is recommended.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

40: contract Ownable is Context {

59:         require(_owner == _msgSender(), "Ownable: caller is not the owner");

70:             "Ownable: new owner is the zero address"

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="L-4"></a>[L-4]
 ### Owner can renounce Ownership  
Each of the following contracts implements or inherits the renounceOwnership() function. This can represent a certain risk if the ownership is renounced for any other reason than by design. Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

40: contract Ownable is Context {

59:         require(_owner == _msgSender(), "Ownable: caller is not the owner");

70:             "Ownable: new owner is the zero address"

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="L-5"></a>[L-5]
 ### Loss of precision
Division by large numbers or variables may result in the result being zero, due to Solidity not supporting fractions.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

331:             uint256 taxTokens = (amount * _tax) / 100;

```

</details> 
 


 ### <a name="L-6"></a>[L-6]
 ### State variables not capped at reasonable values
Consider adding minimum/maximum value checks to ensure that the state variables below can never be used to excessively harm users, including via griefing

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

55:         return _owner;

131: 

164:         return _name;

168:         return _symbol;

172:         return _decimals;

176:         return _totalSupply;

189:         return true;

207:         return true;

221:         return true;

267: 

```

</details> 
 


 ### <a name="L-7"></a>[L-7]
 ### Some tokens may revert when zero value transfers are made
Despite the fact that [EIP-20](https://github.com/ethereum/EIPs/blob/7500ac4fc1bbdfaf684e7ef851f798f6b667b2fe/EIPS/eip-20.md?plain=1#L116) states that zero-value transfers must be accepted, some tokens, such as LEND, will revert if this is attempted, which may cause transactions that involve other tokens (such as batch operations) to fully revert. Consider skipping the transfer if the amount is zero, which will also save gas.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

15:     function transfer(address recipient, uint256 amount)

183:     function transfer(address recipient, uint256 amount)

```

</details> 
 


 ### <a name="L-8"></a>[L-8]
 ###  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard  
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks opens the users of this protocol up to [read-only reentrancy](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) vulnerability with no way to protect them except by block-listing the entire protocol.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

15:     function transfer(address recipient, uint256 amount)

183:     function transfer(address recipient, uint256 amount)

```

</details> 
 


 ### <a name="L-9"></a>[L-9]
 ### Some tokens may revert when large transfers are made
Tokens such as COMP or UNI will revert when an address balance reaches type(uint96).max. Ensure that the calls below can be broken up into smaller batches if necessary.  

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

15:     function transfer(address recipient, uint256 amount)

183:     function transfer(address recipient, uint256 amount)

188:         _transfer(_msgSender(), recipient, amount);

215:         _transfer(sender, recipient, amount);

260:     function _transfer(

```

</details> 
 


## Non Critical Issues


 ### <a name="NC-1"></a>[NC-1]
 ### Contracts should have full test coverage
While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

2: pragma solidity 0.8.18;

```

</details> 
 


 ### <a name="NC-2"></a>[NC-2]
 ### Consider adding formal verification proofs
Consider using formal verification to mathematically prove that your code does what is intended, and does not have any edge cases with unexpected behavior. The solidity compiler itself has this functionality [built in](https://docs.soliditylang.org/en/latest/smtchecker.html#smtchecker-and-formal-verification)  

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

2: pragma solidity 0.8.18;

```

</details> 
 


 ### <a name="NC-3"></a>[NC-3]
 ### Large or complicated code bases should implement invariant tests
Large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts, should implement [invariant fuzzing tests](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05). Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold. Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers, with properly and extensively-written invariants, can close this testing gap significantly.  

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

2: pragma solidity 0.8.18;

```

</details> 
 


 ### <a name="NC-4"></a>[NC-4]
 ### NatSpec: Interface declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

9: 

81: 

87: 

```

</details> 
 


 ### <a name="NC-5"></a>[NC-5]
 ### Variables without visibility specifier

#### Impact:
Specifying visibility for variables can improve code readability and maintainability.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

268:         uint256 _tax;

```

</details> 
 


 ### <a name="NC-6"></a>[NC-6]
 ### Constants in comparisons should appear on the left side

#### Impact:
Placing constants on the left side of comparisons can improve code readability and prevent accidental assignment. Doing so will prevent typo [bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

280:                 if (from == uniswapV2Pair) {

292:             if (inSwapAndLiquify == 1) {

301:             if (from == uniswapV2Pair) {

303:             } else if (to == uniswapV2Pair) {

305:                 if (tokensToSwap > minSwap && inSwapAndLiquify == 0) {

306:                     if (tokensToSwap > onePercent) {

329:         if (_tax != 0) {

```

</details> 
 


 ### <a name="NC-7"></a>[NC-7]
 ### constants should be defined rather than using magic numbers
Even [assembly](https://github.com/code-423n4/2022-05-opensea-seaport/blob/9d7ce4d08bf3c3010304a0476a785c70c0e90ae7/contracts/lib/TokenTransferrer.sol#L35-L39) can benefit from using readable constants instead of hex/numeric literals

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

140:             0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D

151:         marketingWallet = payable(0x01c972546e1a24AB0f9614D9aDD4f935c227263F);

```

</details> 
 


 ### <a name="NC-8"></a>[NC-8]
 ### Contract declarations should have NatSpec @author annotations

#### Impact:
Adding a NatSpec @author annotation to contract declarations can improve code documentation.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

4: abstract contract Context {

40: contract Ownable is Context {

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="NC-9"></a>[NC-9]
 ### Contract declarations should have NatSpec @Title annotations

#### Impact:
Adding a NatSpec @Title annotation to contract declarations can improve code documentation.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

4: abstract contract Context {

40: contract Ownable is Context {

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="NC-10"></a>[NC-10]
 ### NatSpec: Contract declarations should have @dev tags

#### Impact:
@dev is used to explain extra details to developers

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

4: abstract contract Context {

40: contract Ownable is Context {

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="NC-11"></a>[NC-11]
 ### NatSpec: Contract declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

4: abstract contract Context {

40: contract Ownable is Context {

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="NC-12"></a>[NC-12]
 ### NatSpec: Contract declarations should have @notice tags
@notice is used to explain to end users what the contract does, and the compiler interprets /// or /** comments as this tag if one wasnt explicitly provided

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

4: abstract contract Context {

40: contract Ownable is Context {

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="NC-13"></a>[NC-13]
 ### Consider using delete rather than assigning zero to clear value

#### Impact:
Consider using delete rather than assigning zero to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

270:             _tax = 0;

321:                     inSwapAndLiquify = 0;

325:                 _tax = 0;

```

</details> 
 


 ### <a name="NC-14"></a>[NC-14]
 ### Consider using delete rather than assigning false to clear value

#### Impact:
Consider using delete rather than assigning alse to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

251:         limitsInEffect = false;

```

</details> 
 


 ### <a name="NC-15"></a>[NC-15]
 ### Consider adding a block/deny-list"
Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens  

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

4: abstract contract Context {

40: contract Ownable is Context {

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="NC-16"></a>[NC-16]
 ### Consider adding emergency-stop functionality

#### Impact:
Adding a way to quickly halt protocol functionality in an emergency, rather than having to pause individual contracts one-by-one, will make in-progress hack mitigation faster and much less stressful.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

4: abstract contract Context {

40: contract Ownable is Context {

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="NC-17"></a>[NC-17]
 ### Events are missing sender information

#### Impact:
Including msg.sender in events triggered by user actions can make events more useful for end users.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

72:         emit OwnershipTransferred(_owner, newOwner);

232:         emit Approval(owner, spender, amount);

297:                 emit Transfer(from, to, amount);

337:             emit Transfer(from, to, transferAmount);

342:             emit Transfer(from, to, amount);

```

</details> 
 


 ### <a name="NC-18"></a>[NC-18]
 ### NatSpec: Event declarations should have NatSpec descriptions

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

32:     event Transfer(address indexed from, address indexed to, uint256 value);

33:     event Approval(

43:     event OwnershipTransferred(

```

</details> 
 


 ### <a name="NC-19"></a>[NC-19]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (31)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

5:     function _msgSender() internal view virtual returns (address) {

11:     function totalSupply() external view returns (uint256);

13:     function balanceOf(address account) external view returns (uint256);

15:     function transfer(address recipient, uint256 amount)

19:     function allowance(address owner, address spender)

24:     function approve(address spender, uint256 amount) external returns (bool);

26:     function transferFrom(

54:     function owner() public view returns (address) {

63:     function transferOwnership(address newOwner) public onlyOwner {

67:     function _transferOwnership(address newOwner) internal {

76:     function renounceOwnership() public virtual onlyOwner {

83:     function createPair(address tokenA, address tokenB)

89:     function swapExactTokensForETHSupportingFeeOnTransferTokens(

97:     function factory() external pure returns (address);

99:     function WETH() external pure returns (address);

163:     function name() public pure returns (string memory) {

167:     function symbol() public pure returns (string memory) {

171:     function decimals() public pure returns (uint8) {

175:     function totalSupply() public pure override returns (uint256) {

179:     function balanceOf(address account) public view override returns (uint256) {

183:     function transfer(address recipient, uint256 amount)

192:     function allowance(address owner, address spender)

201:     function approve(address spender, uint256 amount)

210:     function transferFrom(

224:     function _approve(

235:     function addExcludedWallet(address wallet) external onlyOwner {

239:     function openTrading() external onlyOwner {

245:     function setLimit(uint256 amountLimit) external onlyOwner {

250:     function removeAllLimits() external onlyOwner {

255:     function changeTax(uint256 newBuyTax, uint256 newSellTax) external onlyOwner {

260:     function _transfer(

```

</details> 
 


 ### <a name="NC-20"></a>[NC-20]
 ### NatSpec: function declarations should have @Notice tags
@notice is used to explain to end users what the function does, and the compiler interprets /// or /** comments as this tag if one wasn't explicitly provided.  

*Instances (31)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

5:     function _msgSender() internal view virtual returns (address) {

11:     function totalSupply() external view returns (uint256);

13:     function balanceOf(address account) external view returns (uint256);

15:     function transfer(address recipient, uint256 amount)

19:     function allowance(address owner, address spender)

24:     function approve(address spender, uint256 amount) external returns (bool);

26:     function transferFrom(

54:     function owner() public view returns (address) {

63:     function transferOwnership(address newOwner) public onlyOwner {

67:     function _transferOwnership(address newOwner) internal {

76:     function renounceOwnership() public virtual onlyOwner {

83:     function createPair(address tokenA, address tokenB)

89:     function swapExactTokensForETHSupportingFeeOnTransferTokens(

97:     function factory() external pure returns (address);

99:     function WETH() external pure returns (address);

163:     function name() public pure returns (string memory) {

167:     function symbol() public pure returns (string memory) {

171:     function decimals() public pure returns (uint8) {

175:     function totalSupply() public pure override returns (uint256) {

179:     function balanceOf(address account) public view override returns (uint256) {

183:     function transfer(address recipient, uint256 amount)

192:     function allowance(address owner, address spender)

201:     function approve(address spender, uint256 amount)

210:     function transferFrom(

224:     function _approve(

235:     function addExcludedWallet(address wallet) external onlyOwner {

239:     function openTrading() external onlyOwner {

245:     function setLimit(uint256 amountLimit) external onlyOwner {

250:     function removeAllLimits() external onlyOwner {

255:     function changeTax(uint256 newBuyTax, uint256 newSellTax) external onlyOwner {

260:     function _transfer(

```

</details> 
 


 ### <a name="NC-21"></a>[NC-21]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (31)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

5:     function _msgSender() internal view virtual returns (address) {

11:     function totalSupply() external view returns (uint256);

13:     function balanceOf(address account) external view returns (uint256);

15:     function transfer(address recipient, uint256 amount)

19:     function allowance(address owner, address spender)

24:     function approve(address spender, uint256 amount) external returns (bool);

26:     function transferFrom(

54:     function owner() public view returns (address) {

63:     function transferOwnership(address newOwner) public onlyOwner {

67:     function _transferOwnership(address newOwner) internal {

76:     function renounceOwnership() public virtual onlyOwner {

83:     function createPair(address tokenA, address tokenB)

89:     function swapExactTokensForETHSupportingFeeOnTransferTokens(

97:     function factory() external pure returns (address);

99:     function WETH() external pure returns (address);

163:     function name() public pure returns (string memory) {

167:     function symbol() public pure returns (string memory) {

171:     function decimals() public pure returns (uint8) {

175:     function totalSupply() public pure override returns (uint256) {

179:     function balanceOf(address account) public view override returns (uint256) {

183:     function transfer(address recipient, uint256 amount)

192:     function allowance(address owner, address spender)

201:     function approve(address spender, uint256 amount)

210:     function transferFrom(

224:     function _approve(

235:     function addExcludedWallet(address wallet) external onlyOwner {

239:     function openTrading() external onlyOwner {

245:     function setLimit(uint256 amountLimit) external onlyOwner {

250:     function removeAllLimits() external onlyOwner {

255:     function changeTax(uint256 newBuyTax, uint256 newSellTax) external onlyOwner {

260:     function _transfer(

```

</details> 
 


 ### <a name="NC-22"></a>[NC-22]
 ### If-statement can be converted to a ternary

#### Impact:
The code can be made more compact while also increasing readability by converting the following `if`-statements to ternaries (e.g. `foo += (x > y) ? a : b`)

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

269:         if (_isExcludedFromFeeWallet[from] || _isExcludedFromFeeWallet[to]) {

286:                 else {

292:             if (inSwapAndLiquify == 1) {

301:             if (from == uniswapV2Pair) {

303:             } else if (to == uniswapV2Pair) {

324:             } else {

329:         if (_tax != 0) {

```

</details> 
 


 ### <a name="NC-23"></a>[NC-23]
 ### Variable names for immutables should use CONSTANT_CASE

#### Impact:
Using CONSTANT_CASE for immutables improves code readability and maintainability.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

113:     IUniswapV2Router02 immutable uniswapV2Router;

115:     address immutable uniswapV2Pair;

116:     address immutable WETH;

118:     address payable immutable marketingWallet;

```

</details> 
 


 ### <a name="NC-24"></a>[NC-24]
 ### Consider using named mappings

#### Impact:
Using named mappings can improve code readability and maintainability.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

109:     mapping(address => uint256) private _previousTx;

134:     mapping(address => uint256) private _balance;

135:     mapping(address => mapping(address => uint256)) private _allowances;

136:     mapping(address => bool) private _isExcludedFromFeeWallet;

```

</details> 
 


 ### <a name="NC-25"></a>[NC-25]
 ### Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct

#### Impact:
Combining multiple mappings into a single mapping with a struct can improve readability and maintainability of the code.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

109:     mapping(address => uint256) private _previousTx;

134:     mapping(address => uint256) private _balance;

135:     mapping(address => mapping(address => uint256)) private _allowances;

136:     mapping(address => bool) private _isExcludedFromFeeWallet;

```

</details> 
 


 ### <a name="NC-26"></a>[NC-26]
 ### Use of override is unnecessary

#### Impact:
Starting with Solidity version [0.8.8](https://docs.soliditylang.org/en/v0.8.20/contracts.html#function-overriding), using the override keyword when the function solely overrides an interface function, and the function doesnt exist in multiple base contracts, is unnecessary.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

175:     function totalSupply() public pure override returns (uint256) {

179:     function balanceOf(address account) public view override returns (uint256) {

185:         override

195:         override

203:         override

214:     ) public override returns (bool) {

```

</details> 
 


 ### <a name="NC-27"></a>[NC-27]
 ### Consider using descriptive constants when using 0 in the code

#### Impact:
Passing zero as a function argument/Event emission can sometimes result in a security issue (e.g. passing zero as the slippage parameter). Consider using a constant variable with a descriptive name, so its clear that the 0 is intentionally being used, and for the right reasons.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

78:         _owner = address(0);

266:         require(amount > 0, "Min transfer amount");

273:             require(

314:                         .swapExactTokensForETHSupportingFeeOnTransferTokens(

```

</details> 
 


 ### <a name="NC-28"></a>[NC-28]
 ### Non-external/public variable names should begin with an underscore

#### Impact:
Using an underscore at the beginning of non-external/public variable names can improve code clarity and maintainability. According to the Solidity Style Guide, non-external/public variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

120:     uint256 public buyTax;

121:     uint256 public sellTax;

123:     uint8 private launch;

124:     uint8 private inSwapAndLiquify;

126:     uint256 private launchBlock;

132:     public limitsInEffect;

```

</details> 
 


 ### <a name="NC-29"></a>[NC-29]
 ### Return values of `approve()` not checked
Not all IERC20 implementations `revert()` when there's a failure in `approve()`. The function signature has a boolean return value and they indicate errors that way instead. By not checking the return value, operations that should have marked as failed, may potentially go through without actually approving anything

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

206:         _approve(_msgSender(), spender, amount);

216:         _approve(

```

</details> 
 


 ### <a name="NC-30"></a>[NC-30]
 ### Setters should prevent re-setting of the same value
This especially problematic when the setter also emits the same value, which may be confusing to offline parsers  

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

245:     function setLimit(uint256 amountLimit) external onlyOwner {

```

</details> 
 


 ### <a name="NC-31"></a>[NC-31]
 ### Use the latest solidity version for deployment  
Upgrading to a newer Solidity release can optimize gas usage, take advantage of new features and improve overall contract efficiency. Where possible, based on compatibility requirements, it is recommended to use newer/latest solidity version to take advantage of the latest optimizations and features. You can see the latest version [here](https://soliditylang.org/blog/category/releases/)

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

2: pragma solidity 0.8.18;

```

</details> 
 


 ### <a name="NC-32"></a>[NC-32]
 ### Empty receive()/fallback() function
If the intention is for Ether sent by a caller to be used for an actual purpose (i.e. the function is not just a WETH withdraw() handler), the function should call another function (e.g. call weth.deposit() and use the token on the caller's behalf) or at least emit an event to track that funds were sent directly to it.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

345: 

```

</details> 
 


 ### <a name="NC-33"></a>[NC-33]
 ### Consider moving msg.sender checks to modifiers
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.  

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

6:         return msg.sender;

152:         _balance[msg.sender] = _totalSupply;

154:         _isExcludedFromFeeWallet[msg.sender] = true;

157:         _allowances[msg.sender][address(uniswapV2Router)] = type(uint256).max;

```

</details> 
 


 ### <a name="NC-34"></a>[NC-34]
 ### Dont use _msgSender() if not supporting EIP-2771
Use msg.sender if the code does not implement EIP-2771 trusted forwarder support

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

5:     function _msgSender() internal view virtual returns (address) {

49:         address msgSender = _msgSender();

59:         require(_owner == _msgSender(), "Ownable: caller is not the owner");

160:         emit Transfer(address(0), _msgSender(), _totalSupply);

188:         _transfer(_msgSender(), recipient, amount);

206:         _approve(_msgSender(), spender, amount);

218:             _msgSender(),

219:             _allowances[sender][_msgSender()] - amount

```

</details> 
 


 ### <a name="NC-35"></a>[NC-35]
 ### Array indices should be referenced via enums rather than numeric literals

#### Impact:
Referencing array indices via enums can improve code readability and maintainability.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

311:                     path[0] = address(this);

312:                     path[1] = WETH;

```

</details> 
 


 ### <a name="NC-36"></a>[NC-36]
 ### Use assembly to emit events, in order to save gas
Using the [scratch space](https://github.com/Vectorized/solady/blob/30558f5402f02351b96eeb6eaf32bcea29773841/src/tokens/ERC1155.sol#L501-L504) for event arguments (two words or fewer) will save gas over needing Soliditys full abi memory expansion used for emitting normally.

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

51:         emit OwnershipTransferred(address(0), msgSender);

72:         emit OwnershipTransferred(_owner, newOwner);

77:         emit OwnershipTransferred(_owner, address(0));

160:         emit Transfer(address(0), _msgSender(), _totalSupply);

232:         emit Approval(owner, spender, amount);

297:                 emit Transfer(from, to, amount);

336:             emit Transfer(from, address(this), taxTokens);

337:             emit Transfer(from, to, transferAmount);

342:             emit Transfer(from, to, amount);

```

</details> 
 


 ### <a name="NC-37"></a>[NC-37]
 ### Long revert strings

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

229:         require(owner != address(0), "ERC20: approve from the zero address");

230:         require(spender != address(0), "ERC20: approve to the zero address");

265:         require(from != address(0), "ERC20: transfer from the zero address");

283:                     require(amount + _balance[to] <= maxWalletAmount, "ERC20: maxWalletAmount is exceeded!");

```

</details> 
 


## Gas Optimizations


 ### <a name="GAS-1"></a>[GAS-1]
 ### Enable IR-based code generation
By using `--via-ir` or `{"viaIR": true}`, the compiler is able to use more advanced [multi-function optimizations](https://docs.soliditylang.org/en/v0.8.17/ir-breaking-changes.html#solidity-ir-based-codegen-changes), for extra gas savings.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

2: pragma solidity 0.8.18;

```

</details> 
 


 ### <a name="GAS-2"></a>[GAS-2]
 ### Nesting if-statements is cheaper than using &&
Nesting if-statements avoids the stack operations of setting up and using an extra jumpdest, and saves 6 [gas](https://gist.github.com/IllIllI000/7f3b818abecfadbef93b894481ae7d19)

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

274:                 launch != 0 && amount <= maxTxAmount,

305:                 if (tokensToSwap > minSwap && inSwapAndLiquify == 0) {

```

</details> 
 


 ### <a name="GAS-3"></a>[GAS-3]
 ### Use >= instead of > for gas efficiency
Using >= costs less gas than >. Consider using >= when appropriate.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

266:         require(amount > 0, "Min transfer amount");

305:                 if (tokensToSwap > minSwap && inSwapAndLiquify == 0) {

306:                     if (tokensToSwap > onePercent) {

```

</details> 
 


 ### <a name="GAS-4"></a>[GAS-4]
 ### Using bools for storage incurs overhead
Use uint256(1) and uint256(2) for true/false to avoid a Gwarmaccess (100 gas), and to avoid Gsset (20000 gas) when changing from ‘false’ to ‘true’, after having been ‘true’ in the past. See [source](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/58f635312aa21f947cae5f8578638a85aa2519f5/contracts/security/ReentrancyGuard.sol#L23-L27).

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

136:     mapping(address => bool) private _isExcludedFromFeeWallet;

```

</details> 
 


 ### <a name="GAS-5"></a>[GAS-5]
 ### Expressions for constant values should use immutable rather than constant

#### Impact:
While it doesnt save any gas because the compiler knows that developers often make this mistake, its still best to use the right tool for the task at hand. There is a difference between constant variables and immutable variables, and they should each be used in their appropriate contexts. constants should be used for literal values written into the code, and immutable variables should be used for expressions, or values calculated in, or passed into the constructor.  

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

103:     uint256 private constant _totalSupply = 10_000_000e18;

104:     uint256 private constant onePercent = 100_000e18;

105:     uint256 private constant minSwap = 2000e18;

106:     uint256 private constant maxWalletAmount = 300_000e18;

108:     uint256 private constant _delayBetweenTx = 120;

111:     uint8 private constant _decimals = 18;

129:     string private constant _name = "SPECTRE AI";

130:     string private constant _symbol = "SPECTRE";

```

</details> 
 


 ### <a name="GAS-6"></a>[GAS-6]
 ### Constructors can be marked payable
Payable functions cost less gas to execute, since the compiler does not have to add extra checks to ensure that a payment wasn  t provided. A constructor can safely be marked as payable, since only the deployer would be able to pass funds, and the project itself would not pass any funds.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

48:     constructor() {

138:     constructor() {

```

</details> 
 


 ### <a name="GAS-7"></a>[GAS-7]
 ### Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

59:         require(_owner == _msgSender(), "Ownable: caller is not the owner");

229:         require(owner != address(0), "ERC20: approve from the zero address");

230:         require(spender != address(0), "ERC20: approve to the zero address");

265:         require(from != address(0), "ERC20: transfer from the zero address");

266:         require(amount > 0, "Min transfer amount");

281:                     require(_previousTx[to] + _delayBetweenTx <= block.timestamp, "Protection: 120 sec/tx allowed");

283:                     require(amount + _balance[to] <= maxWalletAmount, "ERC20: maxWalletAmount is exceeded!");

287:                     require(_previousTx[from] + _delayBetweenTx <= block.timestamp, "Protection: 120 sec/tx allowed");

```

</details> 
 


 ### <a name="GAS-8"></a>[GAS-8]
 ### Reduce gas usage by moving to Solidity 0.8.19 or later
Solidity version 0.8.19 introduced a number of gas optimizations, refer to the [Solidity 0.8.19 Release Announcement](https://soliditylang.org/blog/2023/02/22/solidity-0.8.19-release-announcement) for details.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

2: pragma solidity 0.8.18;

```

</details> 
 


 ### <a name="GAS-9"></a>[GAS-9]
 ### Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

63:     function transferOwnership(address newOwner) public onlyOwner {

76:     function renounceOwnership() public virtual onlyOwner {

235:     function addExcludedWallet(address wallet) external onlyOwner {

239:     function openTrading() external onlyOwner {

245:     function setLimit(uint256 amountLimit) external onlyOwner {

250:     function removeAllLimits() external onlyOwner {

255:     function changeTax(uint256 newBuyTax, uint256 newSellTax) external onlyOwner {

```

</details> 
 


 ### <a name="GAS-10"></a>[GAS-10]
 ### require()/revert() strings longer than 32 bytes cost extra gas
Each extra memory word of bytes past the original 32 [incurs an MSTORE](https://gist.github.com/hrkrshnn/ee8fabd532058307229d65dcd5836ddc#consider-having-short-revert-strings) which costs 3 gas.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

266:         require(amount > 0, "Min transfer amount");

281:                     require(_previousTx[to] + _delayBetweenTx <= block.timestamp, "Protection: 120 sec/tx allowed");

```

</details> 
 


 ### <a name="GAS-11"></a>[GAS-11]
 ### Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency
Using uint256(1) and uint256(2) instead of true and false can save gas for certain changes. Consider using uint256(1)/uint256(2) when appropriate.

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

153:         _isExcludedFromFeeWallet[marketingWallet] = true;

154:         _isExcludedFromFeeWallet[msg.sender] = true;

155:         _isExcludedFromFeeWallet[address(this)] = true;

189:         return true;

207:         return true;

221:         return true;

236:         _isExcludedFromFeeWallet[wallet] = true;

241:         limitsInEffect = true;

251:         limitsInEffect = false;

```

</details> 
 


 ### <a name="GAS-12"></a>[GAS-12]
 ### Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead
Using uints or ints smaller than 32 bytes (256 bits) can incur overhead. Consider using uint256 or int256 to avoid potential issues.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

111:     uint8 private constant _decimals = 18;

123:     uint8 private launch;

124:     uint8 private inSwapAndLiquify;

171:     function decimals() public pure returns (uint8) {

```

</details> 
 


 ### <a name="GAS-13"></a>[GAS-13]
 ### Use != 0 instead of > for unsigned integer comparison

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

266:         require(amount > 0, "Min transfer amount");

305:                 if (tokensToSwap > minSwap && inSwapAndLiquify == 0) {

306:                     if (tokensToSwap > onePercent) {

```

</details> 
 


 ### <a name="GAS-14"></a>[GAS-14]
 ### Optimize names to save gas
public/external function names and public member variable names can be optimized to save gas. See [this](https://gist.github.com/IllIllI000/a5d8b486a8259f9f77891a919febd1a9) link for an example of how it works. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save 128 gas each during deployment, and renaming functions to have lower method IDs will save 22 gas per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

11:     function totalSupply() external view returns (uint256);

13:     function balanceOf(address account) external view returns (uint256);

20:         external

54:     function owner() public view returns (address) {

63:     function transferOwnership(address newOwner) public onlyOwner {

76:     function renounceOwnership() public virtual onlyOwner {

97:     function factory() external pure returns (address);

99:     function WETH() external pure returns (address);

120:     uint256 public buyTax;

121:     uint256 public sellTax;

127:     uint256 public maxTxAmount = 30_000e18;

132:     public limitsInEffect;

163:     function name() public pure returns (string memory) {

167:     function symbol() public pure returns (string memory) {

171:     function decimals() public pure returns (uint8) {

175:     function totalSupply() public pure override returns (uint256) {

179:     function balanceOf(address account) public view override returns (uint256) {

184:         public

193:         public

202:         public

214:     ) public override returns (bool) {

235:     function addExcludedWallet(address wallet) external onlyOwner {

239:     function openTrading() external onlyOwner {

245:     function setLimit(uint256 amountLimit) external onlyOwner {

250:     function removeAllLimits() external onlyOwner {

255:     function changeTax(uint256 newBuyTax, uint256 newSellTax) external onlyOwner {

346:     receive() external payable {}

```

</details> 
 

