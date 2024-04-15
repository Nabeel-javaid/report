# Report


## Medium Issues


| |Issue|Instances|
|-|:-|:-:|
| [M-1](#M-1) | Code will not work properly on L2 due to block.number | 5 |
| [M-2](#M-2) | Centralization Risk for trusted owners | 11 |
| [M-3](#M-3) | Unsafe use of ERC20 transferFrom() | 2 |
| [M-4](#M-4) | Unsafe use of ERC20 transfer() | 1 |

## Low Issues


| |Issue|Instances|
|-|:-|:-:|
| [L-1](#L-1) | complex casting | 2 |
| [L-2](#L-2) | The remaining ETH may be locked in the contract after call | 2 |
| [L-3](#L-3) | External call recipient may consume all transaction gas | 2 |
| [L-4](#L-4) |  `abi.encodePacked()` should not be used with dynamic types when passing the result to a hash function such as `keccak256()` | 1 |
| [L-5](#L-5) | Division by zero not prevented | 3 |
| [L-6](#L-6) | Empty function body | 1 |
| [L-7](#L-7) | Unsafe solidity low-level call can cause gas grief attack | 2 |
| [L-8](#L-8) | Missing contract existence checks before low-level calls | 2 |
| [L-9](#L-9) | Use Ownable2Step instead of Ownable | 3 |
| [L-10](#L-10) | Owner can renounce Ownership   | 3 |
| [L-11](#L-11) | Loss of precision | 3 |
| [L-12](#L-12) | State variables not capped at reasonable values | 14 |
| [L-13](#L-13) | Some tokens may revert when zero value transfers are made | 1 |
| [L-14](#L-14) |  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard   | 1 |
| [L-15](#L-15) | Some tokens may revert when large transfers are made | 1 |

## Non Critical Issues


| |Issue|Instances|
|-|:-|:-:|
| [NC-1](#NC-1) | Contracts should have full test coverage | 1 |
| [NC-2](#NC-2) | Consider adding formal verification proofs | 1 |
| [NC-3](#NC-3) | Large or complicated code bases should implement invariant tests | 1 |
| [NC-4](#NC-4) | Custom error has no error details | 2 |
| [NC-5](#NC-5) | NatSpec: Interface declarations should have NatSpec descriptions | 4 |
| [NC-6](#NC-6) | NatSpec: Library declarations should have NatSpec descriptions | 1 |
| [NC-7](#NC-7) | Contract uses both require()/revert() as well as custom errors   | 1 |
| [NC-8](#NC-8) | Variables without visibility specifier | 8 |
| [NC-9](#NC-9) | Assembly blocks should have extensive comments | 1 |
| [NC-10](#NC-10) | Constants in comparisons should appear on the left side | 10 |
| [NC-11](#NC-11) | Contract declarations should have NatSpec @author annotations | 5 |
| [NC-12](#NC-12) | Contract declarations should have NatSpec @Title annotations | 5 |
| [NC-13](#NC-13) | NatSpec: Contract declarations should have @dev tags | 5 |
| [NC-14](#NC-14) | NatSpec: Contract declarations should have NatSpec descriptions | 5 |
| [NC-15](#NC-15) | NatSpec: Contract declarations should have @notice tags | 5 |
| [NC-16](#NC-16) | Consider using delete rather than assigning zero to clear value | 2 |
| [NC-17](#NC-17) | Consider adding a block/deny-list" | 5 |
| [NC-18](#NC-18) | Use bytes.concat() on bytes instead of abi.encodePacked() for clearer semantic meaning | 2 |
| [NC-19](#NC-19) | Consider adding emergency-stop functionality | 5 |
| [NC-20](#NC-20) | Error declarations should have NatSpec descriptions | 6 |
| [NC-21](#NC-21) | Custom error has no error details | 6 |
| [NC-22](#NC-22) | Events are missing sender information | 4 |
| [NC-23](#NC-23) | NatSpec: Event declarations should have NatSpec descriptions | 9 |
| [NC-24](#NC-24) | NatSpec: function declarations should have NatSpec descriptions | 52 |
| [NC-25](#NC-25) | NatSpec: function declarations should have @Notice tags | 52 |
| [NC-26](#NC-26) | NatSpec: function declarations should have NatSpec descriptions | 52 |
| [NC-27](#NC-27) | If-statement can be converted to a ternary | 15 |
| [NC-28](#NC-28) | Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct | 1 |
| [NC-29](#NC-29) | Consider using descriptive constants when using 0 in the code | 4 |
| [NC-30](#NC-30) | Non-external/public variable names should begin with an underscore | 7 |
| [NC-31](#NC-31) | Setters should prevent re-setting of the same value | 3 |
| [NC-32](#NC-32) | Use the latest solidity version for deployment   | 1 |
| [NC-33](#NC-33) | Consider bounding input array length | 2 |
| [NC-34](#NC-34) | Consider using `SafeTransferLib.safeTransferETH()` or `Address.sendValue()` for clearer semantic meaning | 2 |
| [NC-35](#NC-35) | Variables need not be initialized to zero | 2 |
| [NC-36](#NC-36) | Empty receive()/fallback() function | 1 |
| [NC-37](#NC-37) | Consider moving msg.sender checks to modifiers | 11 |
| [NC-38](#NC-38) | Dont use _msgSender() if not supporting EIP-2771 | 3 |
| [NC-39](#NC-39) | Array indices should be referenced via enums rather than numeric literals | 1 |
| [NC-40](#NC-40) | Use assembly to emit events, in order to save gas | 4 |
| [NC-41](#NC-41) | Don't initialize variables with default value | 2 |

## Gas Optimizations


| |Issue|Instances|
|-|:-|:-:|
| [GAS-1](#GAS-1) | Enable IR-based code generation | 1 |
| [GAS-2](#GAS-2) | Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18) | 2 |
| [GAS-3](#GAS-3) | Nesting if-statements is cheaper than using && | 3 |
| [GAS-4](#GAS-4) | Consider using = instead of += and -= for gas efficiency | 2 |
| [GAS-5](#GAS-5) | Use >= instead of > for gas efficiency | 6 |
| [GAS-6](#GAS-6) | Cache array length outside of loop | 2 |
| [GAS-7](#GAS-7) | Expressions for constant values should use immutable rather than constant | 3 |
| [GAS-8](#GAS-8) | Constructors can be marked payable | 3 |
| [GAS-9](#GAS-9) | Use Custom Errors | 3 |
| [GAS-10](#GAS-10) | Use assembly for small keccak256 hashes, in order to save gas | 2 |
| [GAS-11](#GAS-11) | Avoid fetching a low-level calls return data by using assembly | 2 |
| [GAS-12](#GAS-12) | Reduce gas usage by moving to Solidity 0.8.19 or later | 1 |
| [GAS-13](#GAS-13) | Functions guaranteed to revert when called by normal users can be marked `payable` | 5 |
| [GAS-14](#GAS-14) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 3 |
| [GAS-15](#GAS-15) | Using `private` rather than `public` for constants, saves gas | 1 |
| [GAS-16](#GAS-16) | require()/revert() strings longer than 32 bytes cost extra gas | 3 |
| [GAS-17](#GAS-17) | Structs can be packed into fewer storage slots | 1 |
| [GAS-18](#GAS-18) | Use != 0 instead of > for unsigned integer comparison | 6 |
| [GAS-19](#GAS-19) | Optimize names to save gas | 32 |

##################################################################### 
 
 DETAILED REPORT:: 


##################################################################### 


## Medium Issues


 ### <a name="M-1"></a>[M-1]
 ### Code will not work properly on L2 due to block.number
On L2, the block.number is not a reliable source of timing information and the time between each block is also different from Ethereum. This is because each transaction on L2 is placed in a separate block and blocks are not produce at a constant rate.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

677:             Bet(block.number, msg.value, _boxNumber, salt, msg.sender)

679:         emit BetPlaced(msg.sender, block.number, msg.value, _boxNumber, salt);

698:             bets[_player][0].blockNumber == block.number

782:         require(block.number > _blockNumber, "Block number is out of range");

783:         if (_blockNumber + 250 < block.number) {

```

</details> 
 


 ### <a name="M-2"></a>[M-2]
 ### Centralization Risk for trusted owners

#### Impact:
Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

14: abstract contract Ownable is Context {

70:     function renounceOwnership() public virtual onlyOwner {

78:     function transferOwnership(address newOwner) public virtual onlyOwner {

535: contract SuperFirst is Ownable, ReentrancyGuard {

584:     constructor(IBankroll _bankrollContract) Ownable(msg.sender) {

598:     function withdrawFTN(uint256 _amount) external onlyOwner {

610:     ) external onlyOwner {

622:     function setMinBet(uint256 _minBet) external onlyOwner notZero(_minBet) {

630:     function setMaxBet(uint256 _maxBet) external onlyOwner notZero(_maxBet) {

640:     ) external onlyOwner notZero(_winCoefficient) {

650:     ) external onlyOwner notZero(_numberOfBoxes) {

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

381:     function transferFrom(address from, address to, uint256 value) external returns (bool);

476:     function transferFrom(address from, address to, uint256 tokenId) external;

```

</details> 
 


 ### <a name="M-4"></a>[M-4]
 ### Unsafe use of ERC20 transfer()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transfer() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransfer() from OpenZeppelin instead.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

344:     function transfer(address to, uint256 value) external returns (bool);

```

</details> 
 


## Low Issues


 ### <a name="L-1"></a>[L-1]
 ### complex casting
Consider whether the number of casts is really necessary, or whether using a different type would be more appropriate. Alternatively, add comments to explain in detail why the casts are necessary, and any implicit reasons why the cast does not introduce an overflow.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

787:             (uint256(

810:         uint256 winNum = (uint256(

```

</details> 
 


 ### <a name="L-2"></a>[L-2]
 ### The remaining ETH may be locked in the contract after call
After calling an external contract and forwards some ETH value, the contract balance should be checked. If there is excess eth left over due to a failed call, or more eth being delivered than needed, or any other reason, this eth must be refunded to the user or handled appropriately, otherwise the eth may be frozen in the contract forever.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

133:         (bool success, ) = recipient.call{value: amount}("");

174:         (bool success, bytes memory returndata) = target.call{value: value}(data);

```

</details> 
 


 ### <a name="L-3"></a>[L-3]
 ### External call recipient may consume all transaction gas
There is no limit specified on the amount of gas used, so the recipient can use up all of the transactions gas, causing it to revert. Use addr.call{gas: <amount>}("") or this https://github.com/nomad-xyz/ExcessivelySafeCall library instead.  

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

133:         (bool success, ) = recipient.call{value: amount}("");

174:         (bool success, bytes memory returndata) = target.call{value: value}(data);

```

</details> 
 


 ### <a name="L-4"></a>[L-4]
 ###  `abi.encodePacked()` should not be used with dynamic types when passing the result to a hash function such as `keccak256()`
Use `abi.encode()` instead which will pad items to 32 bytes, which will [prevent hash collisions](https://docs.soliditylang.org/en/v0.8.13/abi-spec.html#non-standard-packed-mode) (e.g. `abi.encodePacked(0x123,0x456)` => `0x123456` => `abi.encodePacked(0x1,0x23456)`, but `abi.encode(0x123,0x456)` => `0x0...1230...456`). "Unless there is a compelling reason, `abi.encode` should be preferred". If there is only one argument to `abi.encodePacked()` it can often be cast to `bytes()` or `bytes32()` [instead](https://ethereum.stackexchange.com/questions/30912/how-to-compare-strings-in-solidity#answer-82739).
If all arguments are strings and or bytes, `bytes.concat()` should be used instead

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

811:             keccak256(abi.encodePacked(_blockHash, _salt, _player))

```

</details> 
 


 ### <a name="L-5"></a>[L-5]
 ### Division by zero not prevented
The divisions below take an input parameter that has no zero-value checks, which can cause the functions reverting if zero is passed.  

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

750:             return (_bet.amount * winCoefficient) / COEFFICIENT_DENOMINATOR;

769:         return (_amount * winCoefficient) / COEFFICIENT_DENOMINATOR;

814:             return (_betAmount * winCoefficient) / COEFFICIENT_DENOMINATOR;

```

</details> 
 


 ### <a name="L-6"></a>[L-6]
 ### Empty function body
Consider adding a comment about why the function body is empty

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

592:     receive() external payable {}

```

</details> 
 


 ### <a name="L-7"></a>[L-7]
 ### Unsafe solidity low-level call can cause gas grief attack
Using the low-level calls of a solidity address can leave the contract open to gas grief attacks. These attacks occur when the called contract returns a large amount of data. So when calling an external contract, it is necessary to check the length of the return data before reading/copying it (using returndatasize()).

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

133:         (bool success, ) = recipient.call{value: amount}("");

174:         (bool success, bytes memory returndata) = target.call{value: value}(data);

```

</details> 
 


 ### <a name="L-8"></a>[L-8]
 ### Missing contract existence checks before low-level calls
Low-level calls return success if there is no code present at the specified address. In addition to the zero-address checks, add a check to verify that `<address>.code.length > 0`.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

133:         (bool success, ) = recipient.call{value: amount}("");

174:         (bool success, bytes memory returndata) = target.call{value: value}(data);

```

</details> 
 


 ### <a name="L-9"></a>[L-9]
 ### Use Ownable2Step instead of Ownable
Add a description of why Ownable2Step is recommended.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

14: abstract contract Ownable is Context {

535: contract SuperFirst is Ownable, ReentrancyGuard {

584:     constructor(IBankroll _bankrollContract) Ownable(msg.sender) {

```

</details> 
 


 ### <a name="L-10"></a>[L-10]
 ### Owner can renounce Ownership  
Each of the following contracts implements or inherits the renounceOwnership() function. This can represent a certain risk if the ownership is renounced for any other reason than by design. Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

14: abstract contract Ownable is Context {

535: contract SuperFirst is Ownable, ReentrancyGuard {

584:     constructor(IBankroll _bankrollContract) Ownable(msg.sender) {

```

</details> 
 


 ### <a name="L-11"></a>[L-11]
 ### Loss of precision
Division by large numbers or variables may result in the result being zero, due to Solidity not supporting fractions.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

750:             return (_bet.amount * winCoefficient) / COEFFICIENT_DENOMINATOR;

769:         return (_amount * winCoefficient) / COEFFICIENT_DENOMINATOR;

814:             return (_betAmount * winCoefficient) / COEFFICIENT_DENOMINATOR;

```

</details> 
 


 ### <a name="L-12"></a>[L-12]
 ### State variables not capped at reasonable values
Consider adding minimum/maximum value checks to ensure that the state variables below can never be used to excessively harm users, including via griefing

*Instances (14)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

51:         return _owner;

214:             return returndata;

226:             return returndata;

547:         uint256 blockNumber;

548:         uint256 amount;

549:         uint256 boxNumber;

550:         uint256 salt;

551:         address player;

702:         uint256 totalWin;

730:         uint256 totalWin;

734:         return totalWin;

752:             return 0;

784:             return 0;

816:             return 0;

```

</details> 
 


 ### <a name="L-13"></a>[L-13]
 ### Some tokens may revert when zero value transfers are made
Despite the fact that [EIP-20](https://github.com/ethereum/EIPs/blob/7500ac4fc1bbdfaf684e7ef851f798f6b667b2fe/EIPS/eip-20.md?plain=1#L116) states that zero-value transfers must be accepted, some tokens, such as LEND, will revert if this is attempted, which may cause transactions that involve other tokens (such as batch operations) to fully revert. Consider skipping the transfer if the amount is zero, which will also save gas.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

344:     function transfer(address to, uint256 value) external returns (bool);

```

</details> 
 


 ### <a name="L-14"></a>[L-14]
 ###  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard  
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks opens the users of this protocol up to [read-only reentrancy](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) vulnerability with no way to protect them except by block-listing the entire protocol.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

344:     function transfer(address to, uint256 value) external returns (bool);

```

</details> 
 


 ### <a name="L-15"></a>[L-15]
 ### Some tokens may revert when large transfers are made
Tokens such as COMP or UNI will revert when an address balance reaches type(uint96).max. Ensure that the calls below can be broken up into smaller batches if necessary.  

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

344:     function transfer(address to, uint256 value) external returns (bool);

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

1: pragma solidity 0.8.20;

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

1: pragma solidity 0.8.20;

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

1: pragma solidity 0.8.20;

```

</details> 
 


 ### <a name="NC-4"></a>[NC-4]
 ### Custom error has no error details

#### Impact:
Defining custom errors without error details can make error messages less informative.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

110:     error FailedInnerCall();

268:     error ReentrancyGuardReentrantCall();

```

</details> 
 


 ### <a name="NC-5"></a>[NC-5]
 ### NatSpec: Interface declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

311: 

383: 

395: 

521: 

```

</details> 
 


 ### <a name="NC-6"></a>[NC-6]
 ### NatSpec: Library declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

96: library Address {

```

</details> 
 


 ### <a name="NC-7"></a>[NC-7]
 ### Contract uses both require()/revert() as well as custom errors  

#### Impact:
Consider using just one method in a single file

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

20:     error OwnableUnauthorizedAccount(address account);

```

</details> 
 


 ### <a name="NC-8"></a>[NC-8]
 ### Variables without visibility specifier

#### Impact:
Specifying visibility for variables can improve code readability and maintainability.

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

536:     using Address for address payable;

547:         uint256 blockNumber;

548:         uint256 amount;

549:         uint256 boxNumber;

550:         uint256 salt;

551:         address player;

702:         uint256 totalWin;

730:         uint256 totalWin;

```

</details> 
 


 ### <a name="NC-9"></a>[NC-9]
 ### Assembly blocks should have extensive comments
Assembly blocks take a lot more time to audit than normal Solidity code, and often have gotchas and side-effects that the Solidity versions of the same code do not. Consider adding more comments explaining what is being done in every step of the assembly code, and describe why assembly is being used instead of Solidity.  

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

238:             assembly {

```

</details> 
 


 ### <a name="NC-10"></a>[NC-10]
 ### Constants in comparisons should appear on the left side

#### Impact:
Placing constants on the left side of comparisons can improve code readability and prevent accidental assignment. Doing so will prevent typo [bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

33:         if (initialOwner == address(0)) {

79:         if (newOwner == address(0)) {

211:             if (returndata.length == 0 && target.code.length == 0) {

235:         if (returndata.length > 0) {

289:         if (_status == ENTERED) {

696:         if (

707:         if (totalWin > 0) {

749:         if (_bet.boxNumber == winNum) {

783:         if (_blockNumber + 250 < block.number) {

813:         if (winNum == _boxNumber) {

```

</details> 
 


 ### <a name="NC-11"></a>[NC-11]
 ### Contract declarations should have NatSpec @author annotations

#### Impact:
Adding a NatSpec @author annotation to contract declarations can improve code documentation.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

4: abstract contract Context {

14: abstract contract Ownable is Context {

248: abstract contract ReentrancyGuard {

535: contract SuperFirst is Ownable, ReentrancyGuard {

613:             "Invalid bankroll contract address"

```

</details> 
 


 ### <a name="NC-12"></a>[NC-12]
 ### Contract declarations should have NatSpec @Title annotations

#### Impact:
Adding a NatSpec @Title annotation to contract declarations can improve code documentation.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

4: abstract contract Context {

14: abstract contract Ownable is Context {

248: abstract contract ReentrancyGuard {

535: contract SuperFirst is Ownable, ReentrancyGuard {

613:             "Invalid bankroll contract address"

```

</details> 
 


 ### <a name="NC-13"></a>[NC-13]
 ### NatSpec: Contract declarations should have @dev tags

#### Impact:
@dev is used to explain extra details to developers

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

4: abstract contract Context {

14: abstract contract Ownable is Context {

248: abstract contract ReentrancyGuard {

535: contract SuperFirst is Ownable, ReentrancyGuard {

613:             "Invalid bankroll contract address"

```

</details> 
 


 ### <a name="NC-14"></a>[NC-14]
 ### NatSpec: Contract declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

4: abstract contract Context {

14: abstract contract Ownable is Context {

248: abstract contract ReentrancyGuard {

535: contract SuperFirst is Ownable, ReentrancyGuard {

613:             "Invalid bankroll contract address"

```

</details> 
 


 ### <a name="NC-15"></a>[NC-15]
 ### NatSpec: Contract declarations should have @notice tags
@notice is used to explain to end users what the contract does, and the compiler interprets /// or /** comments as this tag if one wasnt explicitly provided

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

4: abstract contract Context {

14: abstract contract Ownable is Context {

248: abstract contract ReentrancyGuard {

535: contract SuperFirst is Ownable, ReentrancyGuard {

613:             "Invalid bankroll contract address"

```

</details> 
 


 ### <a name="NC-16"></a>[NC-16]
 ### Consider using delete rather than assigning zero to clear value

#### Impact:
Consider using delete rather than assigning zero to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

703:         for (uint256 i = 0; i < bets[_player].length; i++) {

731:         for (uint256 i = 0; i < bets[_player].length; i++) {

```

</details> 
 


 ### <a name="NC-17"></a>[NC-17]
 ### Consider adding a block/deny-list"
Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens  

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

4: abstract contract Context {

14: abstract contract Ownable is Context {

248: abstract contract ReentrancyGuard {

535: contract SuperFirst is Ownable, ReentrancyGuard {

613:             "Invalid bankroll contract address"

```

</details> 
 


 ### <a name="NC-18"></a>[NC-18]
 ### Use bytes.concat() on bytes instead of abi.encodePacked() for clearer semantic meaning
Starting with version 0.8.4, Solidity has the bytes.concat() function, which allows one to concatenate a list of bytes/strings, without extra padding. Using this function rather than abi.encodePacked() makes the intended operation more clear, leading to less reviewer confusion.  

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

789:                     abi.encodePacked((blockhash(_blockNumber)), _salt, _player)

811:             keccak256(abi.encodePacked(_blockHash, _salt, _player))

```

</details> 
 


 ### <a name="NC-19"></a>[NC-19]
 ### Consider adding emergency-stop functionality

#### Impact:
Adding a way to quickly halt protocol functionality in an emergency, rather than having to pause individual contracts one-by-one, will make in-progress hack mitigation faster and much less stressful.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

4: abstract contract Context {

14: abstract contract Ownable is Context {

248: abstract contract ReentrancyGuard {

535: contract SuperFirst is Ownable, ReentrancyGuard {

613:             "Invalid bankroll contract address"

```

</details> 
 


 ### <a name="NC-20"></a>[NC-20]
 ### Error declarations should have NatSpec descriptions

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

20:     error OwnableUnauthorizedAccount(address account);

25:     error OwnableInvalidOwner(address owner);

100:     error AddressInsufficientBalance(address account);

105:     error AddressEmptyCode(address target);

110:     error FailedInnerCall();

268:     error ReentrancyGuardReentrantCall();

```

</details> 
 


 ### <a name="NC-21"></a>[NC-21]
 ### Custom error has no error details
Custom errors should have a description of the error. This is used to explain to end users what the error means. 

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

20:     error OwnableUnauthorizedAccount(address account);

25:     error OwnableInvalidOwner(address owner);

100:     error AddressInsufficientBalance(address account);

105:     error AddressEmptyCode(address target);

110:     error FailedInnerCall();

268:     error ReentrancyGuardReentrantCall();

```

</details> 
 


 ### <a name="NC-22"></a>[NC-22]
 ### Events are missing sender information

#### Impact:
Including msg.sender in events triggered by user actions can make events more useful for end users.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

92:         emit OwnershipTransferred(oldOwner, newOwner);

679:         emit BetPlaced(msg.sender, block.number, msg.value, _boxNumber, salt);

692:         emit PrizeClaimed(msg.sender, winAmount);

709:             emit RewardDistributed(totalWin);

```

</details> 
 


 ### <a name="NC-23"></a>[NC-23]
 ### NatSpec: Event declarations should have NatSpec descriptions

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

27:     event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

319:     event Transfer(address indexed from, address indexed to, uint256 value);

325:     event Approval(address indexed owner, address indexed spender, uint256 value);

400:     event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

405:     event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

410:     event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

556:     event RewardDistributed(uint256 amount);

564:     event BetPlaced(

577:     event PrizeClaimed(address indexed player, uint256 winAmount);

```

</details> 
 


 ### <a name="NC-24"></a>[NC-24]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (52)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

5:     function _msgSender() internal view virtual returns (address) {

9:     function _msgData() internal view virtual returns (bytes calldata) {

50:     function owner() public view virtual returns (address) {

57:     function _checkOwner() internal view virtual {

70:     function renounceOwnership() public virtual onlyOwner {

78:     function transferOwnership(address newOwner) public virtual onlyOwner {

89:     function _transferOwnership(address newOwner) internal virtual {

128:     function sendValue(address payable recipient, uint256 amount) internal {

157:     function functionCall(address target, bytes memory data) internal returns (bytes memory) {

170:     function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {

182:     function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {

191:     function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {

201:     function verifyCallResultFromTarget(

222:     function verifyCallResult(bool success, bytes memory returndata) internal pure returns (bytes memory) {

233:     function _revert(bytes memory returndata) private pure {

287:     function _nonReentrantBefore() private {

297:     function _nonReentrantAfter() private {

307:     function _reentrancyGuardEntered() internal view returns (bool) {

330:     function totalSupply() external view returns (uint256);

335:     function balanceOf(address account) external view returns (uint256);

344:     function transfer(address to, uint256 value) external returns (bool);

353:     function allowance(address owner, address spender) external view returns (uint256);

370:     function approve(address spender, uint256 value) external returns (bool);

381:     function transferFrom(address from, address to, uint256 value) external returns (bool);

393:     function supportsInterface(bytes4 interfaceId) external view returns (bool);

415:     function balanceOf(address owner) external view returns (uint256 balance);

424:     function ownerOf(uint256 tokenId) external view returns (address owner);

440:     function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;

458:     function safeTransferFrom(address from, address to, uint256 tokenId) external;

476:     function transferFrom(address from, address to, uint256 tokenId) external;

491:     function approve(address to, uint256 tokenId) external;

503:     function setApprovalForAll(address operator, bool approved) external;

512:     function getApproved(uint256 tokenId) external view returns (address operator);

519:     function isApprovedForAll(address owner, address operator) external view returns (bool);

523:     function sendFTN(address _to, uint256 _amount) external;

525:     function sendERC20(IERC20 _token, address _to, uint256 _amount) external;

527:     function sendERC721(IERC721 _token, address _to, uint256 _id) external;

598:     function withdrawFTN(uint256 _amount) external onlyOwner {

608:     function setBankrollContract(

622:     function setMinBet(uint256 _minBet) external onlyOwner notZero(_minBet) {

630:     function setMaxBet(uint256 _maxBet) external onlyOwner notZero(_maxBet) {

638:     function setWinCoefficient(

648:     function setNumberOfBoxes(

658:     function play(

687:     function getPrize() external nonReentrant {

695:     function distributeReward(address _player) public {

718:     function getPlayerBets(

729:     function calculateTotalWin(address _player) public view returns (uint256) {

743:     function calculateWin(

766:     function estimatePotentialReward(

777:     function getRand(

803:     function checkGameResult(

```

</details> 
 


 ### <a name="NC-25"></a>[NC-25]
 ### NatSpec: function declarations should have @Notice tags
@notice is used to explain to end users what the function does, and the compiler interprets /// or /** comments as this tag if one wasn't explicitly provided.  

*Instances (52)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

5:     function _msgSender() internal view virtual returns (address) {

9:     function _msgData() internal view virtual returns (bytes calldata) {

50:     function owner() public view virtual returns (address) {

57:     function _checkOwner() internal view virtual {

70:     function renounceOwnership() public virtual onlyOwner {

78:     function transferOwnership(address newOwner) public virtual onlyOwner {

89:     function _transferOwnership(address newOwner) internal virtual {

128:     function sendValue(address payable recipient, uint256 amount) internal {

157:     function functionCall(address target, bytes memory data) internal returns (bytes memory) {

170:     function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {

182:     function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {

191:     function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {

201:     function verifyCallResultFromTarget(

222:     function verifyCallResult(bool success, bytes memory returndata) internal pure returns (bytes memory) {

233:     function _revert(bytes memory returndata) private pure {

287:     function _nonReentrantBefore() private {

297:     function _nonReentrantAfter() private {

307:     function _reentrancyGuardEntered() internal view returns (bool) {

330:     function totalSupply() external view returns (uint256);

335:     function balanceOf(address account) external view returns (uint256);

344:     function transfer(address to, uint256 value) external returns (bool);

353:     function allowance(address owner, address spender) external view returns (uint256);

370:     function approve(address spender, uint256 value) external returns (bool);

381:     function transferFrom(address from, address to, uint256 value) external returns (bool);

393:     function supportsInterface(bytes4 interfaceId) external view returns (bool);

415:     function balanceOf(address owner) external view returns (uint256 balance);

424:     function ownerOf(uint256 tokenId) external view returns (address owner);

440:     function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;

458:     function safeTransferFrom(address from, address to, uint256 tokenId) external;

476:     function transferFrom(address from, address to, uint256 tokenId) external;

491:     function approve(address to, uint256 tokenId) external;

503:     function setApprovalForAll(address operator, bool approved) external;

512:     function getApproved(uint256 tokenId) external view returns (address operator);

519:     function isApprovedForAll(address owner, address operator) external view returns (bool);

523:     function sendFTN(address _to, uint256 _amount) external;

525:     function sendERC20(IERC20 _token, address _to, uint256 _amount) external;

527:     function sendERC721(IERC721 _token, address _to, uint256 _id) external;

598:     function withdrawFTN(uint256 _amount) external onlyOwner {

608:     function setBankrollContract(

622:     function setMinBet(uint256 _minBet) external onlyOwner notZero(_minBet) {

630:     function setMaxBet(uint256 _maxBet) external onlyOwner notZero(_maxBet) {

638:     function setWinCoefficient(

648:     function setNumberOfBoxes(

658:     function play(

687:     function getPrize() external nonReentrant {

695:     function distributeReward(address _player) public {

718:     function getPlayerBets(

729:     function calculateTotalWin(address _player) public view returns (uint256) {

743:     function calculateWin(

766:     function estimatePotentialReward(

777:     function getRand(

803:     function checkGameResult(

```

</details> 
 


 ### <a name="NC-26"></a>[NC-26]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (52)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

5:     function _msgSender() internal view virtual returns (address) {

9:     function _msgData() internal view virtual returns (bytes calldata) {

50:     function owner() public view virtual returns (address) {

57:     function _checkOwner() internal view virtual {

70:     function renounceOwnership() public virtual onlyOwner {

78:     function transferOwnership(address newOwner) public virtual onlyOwner {

89:     function _transferOwnership(address newOwner) internal virtual {

128:     function sendValue(address payable recipient, uint256 amount) internal {

157:     function functionCall(address target, bytes memory data) internal returns (bytes memory) {

170:     function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {

182:     function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {

191:     function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {

201:     function verifyCallResultFromTarget(

222:     function verifyCallResult(bool success, bytes memory returndata) internal pure returns (bytes memory) {

233:     function _revert(bytes memory returndata) private pure {

287:     function _nonReentrantBefore() private {

297:     function _nonReentrantAfter() private {

307:     function _reentrancyGuardEntered() internal view returns (bool) {

330:     function totalSupply() external view returns (uint256);

335:     function balanceOf(address account) external view returns (uint256);

344:     function transfer(address to, uint256 value) external returns (bool);

353:     function allowance(address owner, address spender) external view returns (uint256);

370:     function approve(address spender, uint256 value) external returns (bool);

381:     function transferFrom(address from, address to, uint256 value) external returns (bool);

393:     function supportsInterface(bytes4 interfaceId) external view returns (bool);

415:     function balanceOf(address owner) external view returns (uint256 balance);

424:     function ownerOf(uint256 tokenId) external view returns (address owner);

440:     function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;

458:     function safeTransferFrom(address from, address to, uint256 tokenId) external;

476:     function transferFrom(address from, address to, uint256 tokenId) external;

491:     function approve(address to, uint256 tokenId) external;

503:     function setApprovalForAll(address operator, bool approved) external;

512:     function getApproved(uint256 tokenId) external view returns (address operator);

519:     function isApprovedForAll(address owner, address operator) external view returns (bool);

523:     function sendFTN(address _to, uint256 _amount) external;

525:     function sendERC20(IERC20 _token, address _to, uint256 _amount) external;

527:     function sendERC721(IERC721 _token, address _to, uint256 _id) external;

598:     function withdrawFTN(uint256 _amount) external onlyOwner {

608:     function setBankrollContract(

622:     function setMinBet(uint256 _minBet) external onlyOwner notZero(_minBet) {

630:     function setMaxBet(uint256 _maxBet) external onlyOwner notZero(_maxBet) {

638:     function setWinCoefficient(

648:     function setNumberOfBoxes(

658:     function play(

687:     function getPrize() external nonReentrant {

695:     function distributeReward(address _player) public {

718:     function getPlayerBets(

729:     function calculateTotalWin(address _player) public view returns (uint256) {

743:     function calculateWin(

766:     function estimatePotentialReward(

777:     function getRand(

803:     function checkGameResult(

```

</details> 
 


 ### <a name="NC-27"></a>[NC-27]
 ### If-statement can be converted to a ternary

#### Impact:
The code can be made more compact while also increasing readability by converting the following `if`-statements to ternaries (e.g. `foo += (x > y) ? a : b`)

*Instances (15)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

33:         if (initialOwner == address(0)) {

58:         if (owner() != _msgSender()) {

79:         if (newOwner == address(0)) {

129:         if (address(this).balance < amount) {

134:         if (!success) {

171:         if (address(this).balance < value) {

206:         if (!success) {

223:         if (!success) {

235:         if (returndata.length > 0) {

242:         } else {

289:         if (_status == ENTERED) {

707:         if (totalWin > 0) {

749:         if (_bet.boxNumber == winNum) {

783:         if (_blockNumber + 250 < block.number) {

813:         if (winNum == _boxNumber) {

```

</details> 
 


 ### <a name="NC-28"></a>[NC-28]
 ### Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct

#### Impact:
Combining multiple mappings into a single mapping with a struct can improve readability and maintainability of the code.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

554:     mapping(address => Bet[]) public bets;

```

</details> 
 


 ### <a name="NC-29"></a>[NC-29]
 ### Consider using descriptive constants when using 0 in the code

#### Impact:
Passing zero as a function argument/Event emission can sometimes result in a security issue (e.g. passing zero as the slippage parameter). Consider using a constant variable with a descriptive name, so its clear that the 0 is intentionally being used, and for the right reasons.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

158:         return functionCallWithValue(target, data, 0);

580:         require(number > 0, "Number must be greater than zero");

666:         require(

689:         require(winAmount > 0, "You have not won");

```

</details> 
 


 ### <a name="NC-30"></a>[NC-30]
 ### Non-external/public variable names should begin with an underscore

#### Impact:
Using an underscore at the beginning of non-external/public variable names can improve code clarity and maintainability. According to the Solidity Style Guide, non-external/public variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

538:     IBankroll public bankrollContract;

539:     uint256 private salt;

540:     uint256 public minBet;

541:     uint256 public maxBet;

542:     uint256 public winCoefficient;

543:     uint256 public numberOfBoxes;

554:     mapping(address => Bet[]) public bets;

```

</details> 
 


 ### <a name="NC-31"></a>[NC-31]
 ### Setters should prevent re-setting of the same value
This especially problematic when the setter also emits the same value, which may be confusing to offline parsers  

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

503:     function setApprovalForAll(address operator, bool approved) external;

622:     function setMinBet(uint256 _minBet) external onlyOwner notZero(_minBet) {

630:     function setMaxBet(uint256 _maxBet) external onlyOwner notZero(_maxBet) {

```

</details> 
 


 ### <a name="NC-32"></a>[NC-32]
 ### Use the latest solidity version for deployment  
Upgrading to a newer Solidity release can optimize gas usage, take advantage of new features and improve overall contract efficiency. Where possible, based on compatibility requirements, it is recommended to use newer/latest solidity version to take advantage of the latest optimizations and features. You can see the latest version [here](https://soliditylang.org/blog/category/releases/)

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

1: pragma solidity 0.8.20;

```

</details> 
 


 ### <a name="NC-33"></a>[NC-33]
 ### Consider bounding input array length
The functions below take in an unbounded array, and make function calls for entries in the array. While the function will revert if it eventually runs out of gas, it may be a nicer user experience to require() that the length of the array is below some reasonable maximum, so that the user doesnt have to use up a full transactions gas only to see that the transaction reverts

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

703:         for (uint256 i = 0; i < bets[_player].length; i++) {

731:         for (uint256 i = 0; i < bets[_player].length; i++) {

```

</details> 
 


 ### <a name="NC-34"></a>[NC-34]
 ### Consider using `SafeTransferLib.safeTransferETH()` or `Address.sendValue()` for clearer semantic meaning
These Functions indicate their purpose with their name more clearly than using low-level calls.  

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

133:         (bool success, ) = recipient.call{value: amount}("");

174:         (bool success, bytes memory returndata) = target.call{value: value}(data);

```

</details> 
 


 ### <a name="NC-35"></a>[NC-35]
 ### Variables need not be initialized to zero
The default value for variables is zero, so initializing them to zero is superfluous.  

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

703:         for (uint256 i = 0; i < bets[_player].length; i++) {

731:         for (uint256 i = 0; i < bets[_player].length; i++) {

```

</details> 
 


 ### <a name="NC-36"></a>[NC-36]
 ### Empty receive()/fallback() function
If the intention is for Ether sent by a caller to be used for an actual purpose (i.e. the function is not just a WETH withdraw() handler), the function should call another function (e.g. call weth.deposit() and use the token on the caller's behalf) or at least emit an event to track that funds were sent directly to it.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

591: 

```

</details> 
 


 ### <a name="NC-37"></a>[NC-37]
 ### Consider moving msg.sender checks to modifiers
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.  

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

6:         return msg.sender;

584:     constructor(IBankroll _bankrollContract) Ownable(msg.sender) {

599:         payable(msg.sender).sendValue(_amount);

675:         distributeReward(msg.sender);

676:         bets[msg.sender].push(

677:             Bet(block.number, msg.value, _boxNumber, salt, msg.sender)

679:         emit BetPlaced(msg.sender, block.number, msg.value, _boxNumber, salt);

688:         uint256 winAmount = calculateTotalWin(msg.sender);

690:         delete bets[msg.sender];

691:         bankrollContract.sendFTN(msg.sender, winAmount);

692:         emit PrizeClaimed(msg.sender, winAmount);

```

</details> 
 


 ### <a name="NC-38"></a>[NC-38]
 ### Dont use _msgSender() if not supporting EIP-2771
Use msg.sender if the code does not implement EIP-2771 trusted forwarder support

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

5:     function _msgSender() internal view virtual returns (address) {

58:         if (owner() != _msgSender()) {

59:             revert OwnableUnauthorizedAccount(_msgSender());

```

</details> 
 


 ### <a name="NC-39"></a>[NC-39]
 ### Array indices should be referenced via enums rather than numeric literals

#### Impact:
Referencing array indices via enums can improve code readability and maintainability.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

698:             bets[_player][0].blockNumber == block.number

```

</details> 
 


 ### <a name="NC-40"></a>[NC-40]
 ### Use assembly to emit events, in order to save gas
Using the [scratch space](https://github.com/Vectorized/solady/blob/30558f5402f02351b96eeb6eaf32bcea29773841/src/tokens/ERC1155.sol#L501-L504) for event arguments (two words or fewer) will save gas over needing Soliditys full abi memory expansion used for emitting normally.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

92:         emit OwnershipTransferred(oldOwner, newOwner);

679:         emit BetPlaced(msg.sender, block.number, msg.value, _boxNumber, salt);

692:         emit PrizeClaimed(msg.sender, winAmount);

709:             emit RewardDistributed(totalWin);

```

</details> 
 


 ### <a name="NC-41"></a>[NC-41]
 ### Don't initialize variables with default value

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

703:         for (uint256 i = 0; i < bets[_player].length; i++) {

731:         for (uint256 i = 0; i < bets[_player].length; i++) {

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

1: pragma solidity 0.8.20;

```

</details> 
 


 ### <a name="GAS-2"></a>[GAS-2]
 ### Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18)
While the compiler knows to optimize away the exponentiation, its still better coding practice to use idioms that do not require compiler optimization, if they exist.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

585:         minBet = 1 * 10 ** 18;

586:         maxBet = 10 * 10 ** 18;

```

</details> 
 


 ### <a name="GAS-3"></a>[GAS-3]
 ### Nesting if-statements is cheaper than using &&
Nesting if-statements avoids the stack operations of setting up and using an extra jumpdest, and saves 6 [gas](https://gist.github.com/IllIllI000/7f3b818abecfadbef93b894481ae7d19)

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

211:             if (returndata.length == 0 && target.code.length == 0) {

667:             _boxNumber > 0 && _boxNumber <= numberOfBoxes,

671:             msg.value >= minBet && msg.value <= maxBet,

```

</details> 
 


 ### <a name="GAS-4"></a>[GAS-4]
 ### Consider using = instead of += and -= for gas efficiency
Using = instead of += and -= can save gas in certain scenarios. Consider using = when appropriate.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

704:             totalWin += calculateWin(_player, i);

732:             totalWin += calculateWin(_player, i);

```

</details> 
 


 ### <a name="GAS-5"></a>[GAS-5]
 ### Use >= instead of > for gas efficiency
Using >= costs less gas than >. Consider using >= when appropriate.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

235:         if (returndata.length > 0) {

580:         require(number > 0, "Number must be greater than zero");

667:             _boxNumber > 0 && _boxNumber <= numberOfBoxes,

689:         require(winAmount > 0, "You have not won");

707:         if (totalWin > 0) {

782:         require(block.number > _blockNumber, "Block number is out of range");

```

</details> 
 


 ### <a name="GAS-6"></a>[GAS-6]
 ### Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

703:         for (uint256 i = 0; i < bets[_player].length; i++) {

731:         for (uint256 i = 0; i < bets[_player].length; i++) {

```

</details> 
 


 ### <a name="GAS-7"></a>[GAS-7]
 ### Expressions for constant values should use immutable rather than constant

#### Impact:
While it doesnt save any gas because the compiler knows that developers often make this mistake, its still best to use the right tool for the task at hand. There is a difference between constant variables and immutable variables, and they should each be used in their appropriate contexts. constants should be used for literal values written into the code, and immutable variables should be used for expressions, or values calculated in, or passed into the constructor.  

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

260:     uint256 private constant NOT_ENTERED = 1;

261:     uint256 private constant ENTERED = 2;

544:     uint256 public constant COEFFICIENT_DENOMINATOR = 100;

```

</details> 
 


 ### <a name="GAS-8"></a>[GAS-8]
 ### Constructors can be marked payable
Payable functions cost less gas to execute, since the compiler does not have to add extra checks to ensure that a payment wasn  t provided. A constructor can safely be marked as payable, since only the deployer would be able to pass funds, and the project itself would not pass any funds.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

32:     constructor(address initialOwner) {

270:     constructor() {

584:     constructor(IBankroll _bankrollContract) Ownable(msg.sender) {

```

</details> 
 


 ### <a name="GAS-9"></a>[GAS-9]
 ### Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

580:         require(number > 0, "Number must be greater than zero");

689:         require(winAmount > 0, "You have not won");

782:         require(block.number > _blockNumber, "Block number is out of range");

```

</details> 
 


 ### <a name="GAS-10"></a>[GAS-10]
 ### Use assembly for small keccak256 hashes, in order to save gas
If the arguments to the encode call can fit into the scratch space (two words or fewer), then its more efficient to use assembly to generate the hash (80 gas): keccak256(abi.encodePacked(x, y)) -> assembly {mstore(0x00, a); mstore(0x20, b); let hash := keccak256(0x00, 0x40); }

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

788:                 keccak256(

811:             keccak256(abi.encodePacked(_blockHash, _salt, _player))

```

</details> 
 


 ### <a name="GAS-11"></a>[GAS-11]
 ### Avoid fetching a low-level calls return data by using assembly
Even if you dont assign the calls second return value, it still gets copied to memory. Use assembly instead to prevent this and save 159 gas: `(bool success,) = payable(receiver).call{gas: gas, value: value}("");` -> `bool success; assembly { success := call(gas, receiver, value, 0, 0, 0, 0)` }

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

133:         (bool success, ) = recipient.call{value: amount}("");

174:         (bool success, bytes memory returndata) = target.call{value: value}(data);

```

</details> 
 


 ### <a name="GAS-12"></a>[GAS-12]
 ### Reduce gas usage by moving to Solidity 0.8.19 or later
Solidity version 0.8.19 introduced a number of gas optimizations, refer to the [Solidity 0.8.19 Release Announcement](https://soliditylang.org/blog/2023/02/22/solidity-0.8.19-release-announcement) for details.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

1: pragma solidity 0.8.20;

```

</details> 
 


 ### <a name="GAS-13"></a>[GAS-13]
 ### Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

70:     function renounceOwnership() public virtual onlyOwner {

78:     function transferOwnership(address newOwner) public virtual onlyOwner {

598:     function withdrawFTN(uint256 _amount) external onlyOwner {

622:     function setMinBet(uint256 _minBet) external onlyOwner notZero(_minBet) {

630:     function setMaxBet(uint256 _maxBet) external onlyOwner notZero(_maxBet) {

```

</details> 
 


 ### <a name="GAS-14"></a>[GAS-14]
 ### `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

680:         salt++;

703:         for (uint256 i = 0; i < bets[_player].length; i++) {

731:         for (uint256 i = 0; i < bets[_player].length; i++) {

```

</details> 
 


 ### <a name="GAS-15"></a>[GAS-15]
 ### Using `private` rather than `public` for constants, saves gas
If needed, the values can be read from the verified contract source code, or if there are multiple values there can be a single getter function that [returns a tuple](https://github.com/code-423n4/2022-08-frax/blob/90f55a9ce4e25bceed3a74290b854341d8de6afa/src/contracts/FraxlendPair.sol#L156-L178) of the values of all currently-public constants. Saves **3406-3606 gas** in deployment gas due to the compiler not having to create non-payable getter functions for deployment calldata, not having to store the bytes of the value outside of where it's used, and not adding another entry to the method ID table

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

544:     uint256 public constant COEFFICIENT_DENOMINATOR = 100;

```

</details> 
 


 ### <a name="GAS-16"></a>[GAS-16]
 ### require()/revert() strings longer than 32 bytes cost extra gas
Each extra memory word of bytes past the original 32 [incurs an MSTORE](https://gist.github.com/hrkrshnn/ee8fabd532058307229d65dcd5836ddc#consider-having-short-revert-strings) which costs 3 gas.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

580:         require(number > 0, "Number must be greater than zero");

666:         require(

689:         require(winAmount > 0, "You have not won");

```

</details> 
 


 ### <a name="GAS-17"></a>[GAS-17]
 ### Structs can be packed into fewer storage slots
Each slot saved can avoid an extra Gsset (20000 gas) for the first setting of the struct. Subsequent reads as well as writes have smaller gas savings

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

546:     struct Bet {

```

</details> 
 


 ### <a name="GAS-18"></a>[GAS-18]
 ### Use != 0 instead of > for unsigned integer comparison

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

235:         if (returndata.length > 0) {

580:         require(number > 0, "Number must be greater than zero");

667:             _boxNumber > 0 && _boxNumber <= numberOfBoxes,

689:         require(winAmount > 0, "You have not won");

707:         if (totalWin > 0) {

782:         require(block.number > _blockNumber, "Block number is out of range");

```

</details> 
 


 ### <a name="GAS-19"></a>[GAS-19]
 ### Optimize names to save gas
public/external function names and public member variable names can be optimized to save gas. See [this](https://gist.github.com/IllIllI000/a5d8b486a8259f9f77891a919febd1a9) link for an example of how it works. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save 128 gas each during deployment, and renaming functions to have lower method IDs will save 22 gas per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

*Instances (32)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ddf.sol

50:     function owner() public view virtual returns (address) {

70:     function renounceOwnership() public virtual onlyOwner {

78:     function transferOwnership(address newOwner) public virtual onlyOwner {

330:     function totalSupply() external view returns (uint256);

335:     function balanceOf(address account) external view returns (uint256);

353:     function allowance(address owner, address spender) external view returns (uint256);

393:     function supportsInterface(bytes4 interfaceId) external view returns (bool);

415:     function balanceOf(address owner) external view returns (uint256 balance);

424:     function ownerOf(uint256 tokenId) external view returns (address owner);

512:     function getApproved(uint256 tokenId) external view returns (address operator);

519:     function isApprovedForAll(address owner, address operator) external view returns (bool);

538:     IBankroll public bankrollContract;

540:     uint256 public minBet;

541:     uint256 public maxBet;

542:     uint256 public winCoefficient;

543:     uint256 public numberOfBoxes;

544:     uint256 public constant COEFFICIENT_DENOMINATOR = 100;

554:     mapping(address => Bet[]) public bets;

592:     receive() external payable {}

598:     function withdrawFTN(uint256 _amount) external onlyOwner {

610:     ) external onlyOwner {

622:     function setMinBet(uint256 _minBet) external onlyOwner notZero(_minBet) {

630:     function setMaxBet(uint256 _maxBet) external onlyOwner notZero(_maxBet) {

640:     ) external onlyOwner notZero(_winCoefficient) {

650:     ) external onlyOwner notZero(_numberOfBoxes) {

660:     ) external payable nonReentrant returns (uint256) {

687:     function getPrize() external nonReentrant {

720:     ) external view returns (Bet[] memory) {

729:     function calculateTotalWin(address _player) public view returns (uint256) {

746:     ) public view returns (uint256) {

768:     ) public view returns (uint256) {

809:     ) external view returns (uint256) {

```

</details> 
 

