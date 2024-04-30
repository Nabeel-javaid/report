# Report


## Medium Issues


| |Issue|Instances|
|-|:-|:-:|
| [M-1](#M-1) | Centralization Risk for trusted owners | 12 |
| [M-2](#M-2) | Unsafe use of ERC20 transferFrom() | 2 |
| [M-3](#M-3) | Unsafe use of ERC20 transfer() | 2 |

## Low Issues


| |Issue|Instances|
|-|:-|:-:|
| [L-1](#L-1) | complex casting | 2 |
| [L-2](#L-2) | Tokens may be minted to address(0x0) | 2 |
| [L-3](#L-3) | Division by zero not prevented | 4 |
| [L-4](#L-4) | Empty function body | 2 |
| [L-5](#L-5) | Use Ownable2Step instead of Ownable | 4 |
| [L-6](#L-6) | Owner can renounce Ownership   | 4 |
| [L-7](#L-7) | Loss of precision | 4 |
| [L-8](#L-8) | State variables not capped at reasonable values | 10 |
| [L-9](#L-9) | Some tokens may revert when zero value transfers are made | 2 |
| [L-10](#L-10) |  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard   | 2 |
| [L-11](#L-11) | Some tokens may revert when large transfers are made | 11 |
| [L-12](#L-12) | Unsafe casting | 2 |

## Non Critical Issues


| |Issue|Instances|
|-|:-|:-:|
| [NC-1](#NC-1) | Contracts should have full test coverage | 6 |
| [NC-2](#NC-2) | Consider adding formal verification proofs | 6 |
| [NC-3](#NC-3) | Large or complicated code bases should implement invariant tests | 6 |
| [NC-4](#NC-4) | Missing checks for `address(0)` when assigning values to address state variables | 7 |
| [NC-5](#NC-5) | Constants in comparisons should appear on the left side | 1 |
| [NC-6](#NC-6) | Contracts Defined in Separate Files | 6 |
| [NC-7](#NC-7) | Contract declarations should have NatSpec @author annotations | 4 |
| [NC-8](#NC-8) | Contract declarations should have NatSpec @Title annotations | 4 |
| [NC-9](#NC-9) | NatSpec: Contract declarations should have @dev tags | 4 |
| [NC-10](#NC-10) | NatSpec: Contract declarations should have NatSpec descriptions | 4 |
| [NC-11](#NC-11) | NatSpec: Contract declarations should have @notice tags | 4 |
| [NC-12](#NC-12) | Consider adding a block/deny-list" | 4 |
| [NC-13](#NC-13) | Consider adding emergency-stop functionality | 4 |
| [NC-14](#NC-14) | Events are missing sender information | 3 |
| [NC-15](#NC-15) | NatSpec: Event declarations should have NatSpec descriptions | 3 |
| [NC-16](#NC-16) | contracts should use fixed compiler versions | 6 |
| [NC-17](#NC-17) | NatSpec: function declarations should have NatSpec descriptions | 43 |
| [NC-18](#NC-18) | NatSpec: function declarations should have @Notice tags | 43 |
| [NC-19](#NC-19) | NatSpec: function declarations should have NatSpec descriptions | 43 |
| [NC-20](#NC-20) | Order of Functions Does Not Follow Solidity Style Guide | 6 |
| [NC-21](#NC-21) | If-statement can be converted to a ternary | 2 |
| [NC-22](#NC-22) | Contract Does Not Implement Any Interfaces | 2 |
| [NC-23](#NC-23) | Large multiples of ten should use scientific notation | 1 |
| [NC-24](#NC-24) | Consider using named mappings | 2 |
| [NC-25](#NC-25) | Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct | 3 |
| [NC-26](#NC-26) | Use of override is unnecessary | 10 |
| [NC-27](#NC-27) | Non-external/public variable names should begin with an underscore | 4 |
| [NC-28](#NC-28) | Return values of `approve()` not checked | 4 |
| [NC-29](#NC-29) | Setters should prevent re-setting of the same value | 8 |
| [NC-30](#NC-30) | Use the latest solidity version for deployment   | 6 |
| [NC-31](#NC-31) | Overflows in unchecked blocks | 5 |
| [NC-32](#NC-32) | Event is missing `indexed` fields | 2 |
| [NC-33](#NC-33) | Functions not used internally could be marked external | 1 |
| [NC-34](#NC-34) | Consider Turning Utility Contract Into a Library | 1 |
| [NC-35](#NC-35) | Consider implementing two-step procedure for updation | 8 |
| [NC-36](#NC-36) | Consider moving msg.sender checks to modifiers | 2 |
| [NC-37](#NC-37) | Dont use _msgSender() if not supporting EIP-2771 | 8 |
| [NC-38](#NC-38) | Use assembly to emit events, in order to save gas | 5 |
| [NC-39](#NC-39) | Long revert strings | 9 |

## Gas Optimizations


| |Issue|Instances|
|-|:-|:-:|
| [GAS-1](#GAS-1) | Enable IR-based code generation | 6 |
| [GAS-2](#GAS-2) | Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18) | 1 |
| [GAS-3](#GAS-3) | Consider using = instead of += and -= for gas efficiency | 2 |
| [GAS-4](#GAS-4) | Use assembly to check for `address(0)` | 7 |
| [GAS-5](#GAS-5) | Using bools for storage incurs overhead | 1 |
| [GAS-6](#GAS-6) | Use calldata instead of memory for function arguments that do not get mutated | 2 |
| [GAS-7](#GAS-7) | Expressions for constant values should use immutable rather than constant | 2 |
| [GAS-8](#GAS-8) | Constructors can be marked payable | 3 |
| [GAS-9](#GAS-9) | Use Custom Errors | 13 |
| [GAS-10](#GAS-10) | Reduce gas usage by moving to Solidity 0.8.19 or later | 6 |
| [GAS-11](#GAS-11) | Functions guaranteed to revert when called by normal users can be marked `payable` | 10 |
| [GAS-12](#GAS-12) | Using `private` rather than `public` for constants, saves gas | 2 |
| [GAS-13](#GAS-13) | require()/revert() strings longer than 32 bytes cost extra gas | 4 |
| [GAS-14](#GAS-14) | Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency | 5 |
| [GAS-15](#GAS-15) | Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead | 2 |
| [GAS-16](#GAS-16) | Optimize names to save gas | 38 |

##################################################################### 
 
 DETAILED REPORT:: 


##################################################################### 


## Medium Issues


 ### <a name="M-1"></a>[M-1]
 ### Centralization Risk for trusted owners

#### Impact:
Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

49: abstract contract Ownable is Context {

90:     function renounceOwnership() public virtual onlyOwner {

98:     function transferOwnership(address newOwner) public virtual onlyOwner {

599: contract BlockChat is ERC20, Ownable {

649:     function setLiquidityWallet(address _liquidityWallet) external onlyOwner {

653:     function setMarketingWallet(address _marketingWallet) external onlyOwner {

657:     function setDevelopmentWallet(address _developmentWallet) external onlyOwner {

661:     function setSellTax(uint256 _sellTax) external onlyOwner {

665:     function setLiquidityTax(uint256 _liquidityTax) external onlyOwner {

669:     function setMarketingTax(uint256 _marketingTax) external onlyOwner {

673:     function setDevelopmentTax(uint256 _devTax) external onlyOwner {

677:     function setAutomatedMarketMakerPair(address pair, bool enabled) public onlyOwner {   

```

</details> 
 


 ### <a name="M-2"></a>[M-2]
 ### Unsafe use of ERC20 transferFrom()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transferFrom() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransferFrom() from OpenZeppelin instead.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

192:     function transferFrom(address from, address to, uint256 amount) external returns (bool);

383:     function transferFrom(address from, address to, uint256 amount) public virtual override returns (bool) {

```

</details> 
 


 ### <a name="M-3"></a>[M-3]
 ### Unsafe use of ERC20 transfer()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transfer() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransfer() from OpenZeppelin instead.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

156:     function transfer(address to, uint256 amount) external returns (bool);

338:     function transfer(address to, uint256 amount) public virtual override returns (bool) {

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
File: main.sol

476:     function _mint(address account, uint256 amount) internal virtual {

623:         _mint(msg.sender, TOTAL_SUPPLY);

```

</details> 
 


 ### <a name="L-2"></a>[L-2]
 ### Tokens may be minted to address(0x0)
Neither the  functions, nor _mint() prevent minting to address(0x0)  

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

476:     function _mint(address account, uint256 amount) internal virtual {

623:         _mint(msg.sender, TOTAL_SUPPLY);

```

</details> 
 


 ### <a name="L-3"></a>[L-3]
 ### Division by zero not prevented
The divisions below take an input parameter that has no zero-value checks, which can cause the functions reverting if zero is passed.  

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

632:             uint256 taxAmount = (amount * sellTax) / 100;

634:             uint256 liquidityAmount = (taxAmount * liquidityTax) / 100;

635:             uint256 marketingAmount = (taxAmount * marketingTax) / 100;

636:             uint256 developmentAmount = (taxAmount * developmentTax) / 100;

```

</details> 
 


 ### <a name="L-4"></a>[L-4]
 ### Empty function body
Consider adding a comment about why the function body is empty

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

573:     function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual {}

589:     function _afterTokenTransfer(address from, address to, uint256 amount) internal virtual {}

```

</details> 
 


 ### <a name="L-5"></a>[L-5]
 ### Use Ownable2Step instead of Ownable
Add a description of why Ownable2Step is recommended.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

49: abstract contract Ownable is Context {

80:         require(owner() == _msgSender(), "Ownable: caller is not the owner");

99:         require(newOwner != address(0), "Ownable: new owner is the zero address");

599: contract BlockChat is ERC20, Ownable {

```

</details> 
 


 ### <a name="L-6"></a>[L-6]
 ### Owner can renounce Ownership  
Each of the following contracts implements or inherits the renounceOwnership() function. This can represent a certain risk if the ownership is renounced for any other reason than by design. Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

49: abstract contract Ownable is Context {

80:         require(owner() == _msgSender(), "Ownable: caller is not the owner");

99:         require(newOwner != address(0), "Ownable: new owner is the zero address");

599: contract BlockChat is ERC20, Ownable {

```

</details> 
 


 ### <a name="L-7"></a>[L-7]
 ### Loss of precision
Division by large numbers or variables may result in the result being zero, due to Solidity not supporting fractions.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

632:             uint256 taxAmount = (amount * sellTax) / 100;

634:             uint256 liquidityAmount = (taxAmount * liquidityTax) / 100;

635:             uint256 marketingAmount = (taxAmount * marketingTax) / 100;

636:             uint256 developmentAmount = (taxAmount * developmentTax) / 100;

```

</details> 
 


 ### <a name="L-8"></a>[L-8]
 ### State variables not capped at reasonable values
Consider adding minimum/maximum value checks to ensure that the state variables below can never be used to excessively harm users, including via griefing

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

73:         return _owner;

288:         return _name;

296:         return _symbol;

313:         return 18;

320:         return _totalSupply;

341:         return true;

364:         return true;

387:         return true;

405:         return true;

429: 

```

</details> 
 


 ### <a name="L-9"></a>[L-9]
 ### Some tokens may revert when zero value transfers are made
Despite the fact that [EIP-20](https://github.com/ethereum/EIPs/blob/7500ac4fc1bbdfaf684e7ef851f798f6b667b2fe/EIPS/eip-20.md?plain=1#L116) states that zero-value transfers must be accepted, some tokens, such as LEND, will revert if this is attempted, which may cause transactions that involve other tokens (such as batch operations) to fully revert. Consider skipping the transfer if the amount is zero, which will also save gas.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

156:     function transfer(address to, uint256 amount) external returns (bool);

338:     function transfer(address to, uint256 amount) public virtual override returns (bool) {

```

</details> 
 


 ### <a name="L-10"></a>[L-10]
 ###  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard  
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks opens the users of this protocol up to [read-only reentrancy](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) vulnerability with no way to protect them except by block-listing the entire protocol.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

156:     function transfer(address to, uint256 amount) external returns (bool);

338:     function transfer(address to, uint256 amount) public virtual override returns (bool) {

```

</details> 
 


 ### <a name="L-11"></a>[L-11]
 ### Some tokens may revert when large transfers are made
Tokens such as COMP or UNI will revert when an address balance reaches type(uint96).max. Ensure that the calls below can be broken up into smaller batches if necessary.  

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

156:     function transfer(address to, uint256 amount) external returns (bool);

338:     function transfer(address to, uint256 amount) public virtual override returns (bool) {

340:         _transfer(owner, to, amount);

386:         _transfer(from, to, amount);

447:     function _transfer(address from, address to, uint256 amount) internal virtual {

626:     function _transfer(

638:             super._transfer(sender, liquidityWallet, liquidityAmount);

639:             super._transfer(sender, marketingWallet, marketingAmount);

640:             super._transfer(sender, developmentWallet, developmentAmount);

643:             super._transfer(sender, recipient, transferAmount);

645:             super._transfer(sender, recipient, amount);

```

</details> 
 


 ### <a name="L-12"></a>[L-12]
 ### Unsafe casting
Unsafe casting can cause alot of issues especially when a type is downcast to a smaller type, the higher order bits are truncated, effectively applying a modulo to the original value. Without any other checks, this wrapping will lead to unexpected behavior and bugs

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

476:     function _mint(address account, uint256 amount) internal virtual {

623:         _mint(msg.sender, TOTAL_SUPPLY);

```

</details> 
 


## Non Critical Issues


 ### <a name="NC-1"></a>[NC-1]
 ### Contracts should have full test coverage
While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

7: pragma solidity ^0.8.0;

34: pragma solidity ^0.8.0;

119: pragma solidity ^0.8.0;

200: pragma solidity ^0.8.0;

230: pragma solidity ^0.8.0;

595: pragma solidity ^0.8.0;

```

</details> 
 


 ### <a name="NC-2"></a>[NC-2]
 ### Consider adding formal verification proofs
Consider using formal verification to mathematically prove that your code does what is intended, and does not have any edge cases with unexpected behavior. The solidity compiler itself has this functionality [built in](https://docs.soliditylang.org/en/latest/smtchecker.html#smtchecker-and-formal-verification)  

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

7: pragma solidity ^0.8.0;

34: pragma solidity ^0.8.0;

119: pragma solidity ^0.8.0;

200: pragma solidity ^0.8.0;

230: pragma solidity ^0.8.0;

595: pragma solidity ^0.8.0;

```

</details> 
 


 ### <a name="NC-3"></a>[NC-3]
 ### Large or complicated code bases should implement invariant tests
Large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts, should implement [invariant fuzzing tests](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05). Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold. Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers, with properly and extensively-written invariants, can close this testing gap significantly.  

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

7: pragma solidity ^0.8.0;

34: pragma solidity ^0.8.0;

119: pragma solidity ^0.8.0;

200: pragma solidity ^0.8.0;

230: pragma solidity ^0.8.0;

595: pragma solidity ^0.8.0;

```

</details> 
 


 ### <a name="NC-4"></a>[NC-4]
 ### Missing checks for `address(0)` when assigning values to address state variables

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

109:         _owner = newOwner;

619:         liquidityWallet = _liquidityWallet;

620:         marketingWallet = _marketingWallet;

621:         developmentWallet = _developmentWallet;

650:         liquidityWallet = _liquidityWallet;

654:         marketingWallet = _marketingWallet;

658:         developmentWallet = _developmentWallet;

```

</details> 
 


 ### <a name="NC-5"></a>[NC-5]
 ### Constants in comparisons should appear on the left side

#### Impact:
Placing constants on the left side of comparisons can improve code readability and prevent accidental assignment. Doing so will prevent typo [bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

551:         if (currentAllowance != type(uint256).max) {

```

</details> 
 


 ### <a name="NC-6"></a>[NC-6]
 ### Contracts Defined in Separate Files
Contracts should each be defined in separate files.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

19: abstract contract Context {

49: abstract contract Ownable is Context {

124: interface IERC20 {

208: interface IERC20Metadata is IERC20 {

263: contract ERC20 is Context, IERC20, IERC20Metadata {

599: contract BlockChat is ERC20, Ownable {

```

</details> 
 


 ### <a name="NC-7"></a>[NC-7]
 ### Contract declarations should have NatSpec @author annotations

#### Impact:
Adding a NatSpec @author annotation to contract declarations can improve code documentation.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

19: abstract contract Context {

49: abstract contract Ownable is Context {

263: contract ERC20 is Context, IERC20, IERC20Metadata {

599: contract BlockChat is ERC20, Ownable {

```

</details> 
 


 ### <a name="NC-8"></a>[NC-8]
 ### Contract declarations should have NatSpec @Title annotations

#### Impact:
Adding a NatSpec @Title annotation to contract declarations can improve code documentation.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

19: abstract contract Context {

49: abstract contract Ownable is Context {

263: contract ERC20 is Context, IERC20, IERC20Metadata {

599: contract BlockChat is ERC20, Ownable {

```

</details> 
 


 ### <a name="NC-9"></a>[NC-9]
 ### NatSpec: Contract declarations should have @dev tags

#### Impact:
@dev is used to explain extra details to developers

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

19: abstract contract Context {

49: abstract contract Ownable is Context {

263: contract ERC20 is Context, IERC20, IERC20Metadata {

599: contract BlockChat is ERC20, Ownable {

```

</details> 
 


 ### <a name="NC-10"></a>[NC-10]
 ### NatSpec: Contract declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

19: abstract contract Context {

49: abstract contract Ownable is Context {

263: contract ERC20 is Context, IERC20, IERC20Metadata {

599: contract BlockChat is ERC20, Ownable {

```

</details> 
 


 ### <a name="NC-11"></a>[NC-11]
 ### NatSpec: Contract declarations should have @notice tags
@notice is used to explain to end users what the contract does, and the compiler interprets /// or /** comments as this tag if one wasnt explicitly provided

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

19: abstract contract Context {

49: abstract contract Ownable is Context {

263: contract ERC20 is Context, IERC20, IERC20Metadata {

599: contract BlockChat is ERC20, Ownable {

```

</details> 
 


 ### <a name="NC-12"></a>[NC-12]
 ### Consider adding a block/deny-list"
Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens  

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

19: abstract contract Context {

49: abstract contract Ownable is Context {

263: contract ERC20 is Context, IERC20, IERC20Metadata {

599: contract BlockChat is ERC20, Ownable {

```

</details> 
 


 ### <a name="NC-13"></a>[NC-13]
 ### Consider adding emergency-stop functionality

#### Impact:
Adding a way to quickly halt protocol functionality in an emergency, rather than having to pause individual contracts one-by-one, will make in-progress hack mitigation faster and much less stressful.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

19: abstract contract Context {

49: abstract contract Ownable is Context {

263: contract ERC20 is Context, IERC20, IERC20Metadata {

599: contract BlockChat is ERC20, Ownable {

```

</details> 
 


 ### <a name="NC-14"></a>[NC-14]
 ### Events are missing sender information

#### Impact:
Including msg.sender in events triggered by user actions can make events more useful for end users.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

110:         emit OwnershipTransferred(oldOwner, newOwner);

462:         emit Transfer(from, to, amount);

538:         emit Approval(owner, spender, amount);

```

</details> 
 


 ### <a name="NC-15"></a>[NC-15]
 ### NatSpec: Event declarations should have NatSpec descriptions

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

52:     event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

131:     event Transfer(address indexed from, address indexed to, uint256 value);

137:     event Approval(address indexed owner, address indexed spender, uint256 value);

```

</details> 
 


 ### <a name="NC-16"></a>[NC-16]
 ### contracts should use fixed compiler versions
To prevent the contracts being deployed and behaving differently depending on the compiler version, it is recommended to use fixed solidity versions for contracts and libraries. Although we can configure a specific version through config (like hardhat, forge config files), it is recommended to set the fixed version in the solidity pragma directly before deploying to the mainnet.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

7: pragma solidity ^0.8.0;

34: pragma solidity ^0.8.0;

119: pragma solidity ^0.8.0;

200: pragma solidity ^0.8.0;

230: pragma solidity ^0.8.0;

595: pragma solidity ^0.8.0;

```

</details> 
 


 ### <a name="NC-17"></a>[NC-17]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (43)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

20:     function _msgSender() internal view virtual returns (address) {

24:     function _msgData() internal view virtual returns (bytes calldata) {

72:     function owner() public view virtual returns (address) {

79:     function _checkOwner() internal view virtual {

90:     function renounceOwnership() public virtual onlyOwner {

98:     function transferOwnership(address newOwner) public virtual onlyOwner {

107:     function _transferOwnership(address newOwner) internal virtual {

142:     function totalSupply() external view returns (uint256);

147:     function balanceOf(address account) external view returns (uint256);

156:     function transfer(address to, uint256 amount) external returns (bool);

165:     function allowance(address owner, address spender) external view returns (uint256);

181:     function approve(address spender, uint256 amount) external returns (bool);

192:     function transferFrom(address from, address to, uint256 amount) external returns (bool);

212:     function name() external view returns (string memory);

217:     function symbol() external view returns (string memory);

222:     function decimals() external view returns (uint8);

287:     function name() public view virtual override returns (string memory) {

295:     function symbol() public view virtual override returns (string memory) {

312:     function decimals() public view virtual override returns (uint8) {

319:     function totalSupply() public view virtual override returns (uint256) {

326:     function balanceOf(address account) public view virtual override returns (uint256) {

338:     function transfer(address to, uint256 amount) public virtual override returns (bool) {

347:     function allowance(address owner, address spender) public view virtual override returns (uint256) {

361:     function approve(address spender, uint256 amount) public virtual override returns (bool) {

383:     function transferFrom(address from, address to, uint256 amount) public virtual override returns (bool) {

402:     function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {

422:     function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {

447:     function _transfer(address from, address to, uint256 amount) internal virtual {

476:     function _mint(address account, uint256 amount) internal virtual {

502:     function _burn(address account, uint256 amount) internal virtual {

533:     function _approve(address owner, address spender, uint256 amount) internal virtual {

549:     function _spendAllowance(address owner, address spender, uint256 amount) internal virtual {

573:     function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual {}

589:     function _afterTokenTransfer(address from, address to, uint256 amount) internal virtual {}

626:     function _transfer(

649:     function setLiquidityWallet(address _liquidityWallet) external onlyOwner {

653:     function setMarketingWallet(address _marketingWallet) external onlyOwner {

657:     function setDevelopmentWallet(address _developmentWallet) external onlyOwner {

661:     function setSellTax(uint256 _sellTax) external onlyOwner {

665:     function setLiquidityTax(uint256 _liquidityTax) external onlyOwner {

669:     function setMarketingTax(uint256 _marketingTax) external onlyOwner {

673:     function setDevelopmentTax(uint256 _devTax) external onlyOwner {

677:     function setAutomatedMarketMakerPair(address pair, bool enabled) public onlyOwner {   

```

</details> 
 


 ### <a name="NC-18"></a>[NC-18]
 ### NatSpec: function declarations should have @Notice tags
@notice is used to explain to end users what the function does, and the compiler interprets /// or /** comments as this tag if one wasn't explicitly provided.  

*Instances (43)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

20:     function _msgSender() internal view virtual returns (address) {

24:     function _msgData() internal view virtual returns (bytes calldata) {

72:     function owner() public view virtual returns (address) {

79:     function _checkOwner() internal view virtual {

90:     function renounceOwnership() public virtual onlyOwner {

98:     function transferOwnership(address newOwner) public virtual onlyOwner {

107:     function _transferOwnership(address newOwner) internal virtual {

142:     function totalSupply() external view returns (uint256);

147:     function balanceOf(address account) external view returns (uint256);

156:     function transfer(address to, uint256 amount) external returns (bool);

165:     function allowance(address owner, address spender) external view returns (uint256);

181:     function approve(address spender, uint256 amount) external returns (bool);

192:     function transferFrom(address from, address to, uint256 amount) external returns (bool);

212:     function name() external view returns (string memory);

217:     function symbol() external view returns (string memory);

222:     function decimals() external view returns (uint8);

287:     function name() public view virtual override returns (string memory) {

295:     function symbol() public view virtual override returns (string memory) {

312:     function decimals() public view virtual override returns (uint8) {

319:     function totalSupply() public view virtual override returns (uint256) {

326:     function balanceOf(address account) public view virtual override returns (uint256) {

338:     function transfer(address to, uint256 amount) public virtual override returns (bool) {

347:     function allowance(address owner, address spender) public view virtual override returns (uint256) {

361:     function approve(address spender, uint256 amount) public virtual override returns (bool) {

383:     function transferFrom(address from, address to, uint256 amount) public virtual override returns (bool) {

402:     function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {

422:     function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {

447:     function _transfer(address from, address to, uint256 amount) internal virtual {

476:     function _mint(address account, uint256 amount) internal virtual {

502:     function _burn(address account, uint256 amount) internal virtual {

533:     function _approve(address owner, address spender, uint256 amount) internal virtual {

549:     function _spendAllowance(address owner, address spender, uint256 amount) internal virtual {

573:     function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual {}

589:     function _afterTokenTransfer(address from, address to, uint256 amount) internal virtual {}

626:     function _transfer(

649:     function setLiquidityWallet(address _liquidityWallet) external onlyOwner {

653:     function setMarketingWallet(address _marketingWallet) external onlyOwner {

657:     function setDevelopmentWallet(address _developmentWallet) external onlyOwner {

661:     function setSellTax(uint256 _sellTax) external onlyOwner {

665:     function setLiquidityTax(uint256 _liquidityTax) external onlyOwner {

669:     function setMarketingTax(uint256 _marketingTax) external onlyOwner {

673:     function setDevelopmentTax(uint256 _devTax) external onlyOwner {

677:     function setAutomatedMarketMakerPair(address pair, bool enabled) public onlyOwner {   

```

</details> 
 


 ### <a name="NC-19"></a>[NC-19]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (43)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

20:     function _msgSender() internal view virtual returns (address) {

24:     function _msgData() internal view virtual returns (bytes calldata) {

72:     function owner() public view virtual returns (address) {

79:     function _checkOwner() internal view virtual {

90:     function renounceOwnership() public virtual onlyOwner {

98:     function transferOwnership(address newOwner) public virtual onlyOwner {

107:     function _transferOwnership(address newOwner) internal virtual {

142:     function totalSupply() external view returns (uint256);

147:     function balanceOf(address account) external view returns (uint256);

156:     function transfer(address to, uint256 amount) external returns (bool);

165:     function allowance(address owner, address spender) external view returns (uint256);

181:     function approve(address spender, uint256 amount) external returns (bool);

192:     function transferFrom(address from, address to, uint256 amount) external returns (bool);

212:     function name() external view returns (string memory);

217:     function symbol() external view returns (string memory);

222:     function decimals() external view returns (uint8);

287:     function name() public view virtual override returns (string memory) {

295:     function symbol() public view virtual override returns (string memory) {

312:     function decimals() public view virtual override returns (uint8) {

319:     function totalSupply() public view virtual override returns (uint256) {

326:     function balanceOf(address account) public view virtual override returns (uint256) {

338:     function transfer(address to, uint256 amount) public virtual override returns (bool) {

347:     function allowance(address owner, address spender) public view virtual override returns (uint256) {

361:     function approve(address spender, uint256 amount) public virtual override returns (bool) {

383:     function transferFrom(address from, address to, uint256 amount) public virtual override returns (bool) {

402:     function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {

422:     function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {

447:     function _transfer(address from, address to, uint256 amount) internal virtual {

476:     function _mint(address account, uint256 amount) internal virtual {

502:     function _burn(address account, uint256 amount) internal virtual {

533:     function _approve(address owner, address spender, uint256 amount) internal virtual {

549:     function _spendAllowance(address owner, address spender, uint256 amount) internal virtual {

573:     function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual {}

589:     function _afterTokenTransfer(address from, address to, uint256 amount) internal virtual {}

626:     function _transfer(

649:     function setLiquidityWallet(address _liquidityWallet) external onlyOwner {

653:     function setMarketingWallet(address _marketingWallet) external onlyOwner {

657:     function setDevelopmentWallet(address _developmentWallet) external onlyOwner {

661:     function setSellTax(uint256 _sellTax) external onlyOwner {

665:     function setLiquidityTax(uint256 _liquidityTax) external onlyOwner {

669:     function setMarketingTax(uint256 _marketingTax) external onlyOwner {

673:     function setDevelopmentTax(uint256 _devTax) external onlyOwner {

677:     function setAutomatedMarketMakerPair(address pair, bool enabled) public onlyOwner {   

```

</details> 
 


 ### <a name="NC-20"></a>[NC-20]
 ### Order of Functions Does Not Follow Solidity Style Guide
According to the Solidity Style Guide, functions should be grouped according to their visibility and ordered: constructor, receive, fallback, external, public, internal, private.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

20:     function _msgSender() internal view virtual returns (address) {

57:     constructor() {

142:     function totalSupply() external view returns (uint256);

212:     function name() external view returns (string memory);

279:     constructor(string memory name_, string memory symbol_) {

614:     constructor(

```

</details> 
 


 ### <a name="NC-21"></a>[NC-21]
 ### If-statement can be converted to a ternary

#### Impact:
The code can be made more compact while also increasing readability by converting the following `if`-statements to ternaries (e.g. `foo += (x > y) ? a : b`)

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

551:         if (currentAllowance != type(uint256).max) {

631:         if(automatedMarketMakerPairs[recipient]) {

```

</details> 
 


 ### <a name="NC-22"></a>[NC-22]
 ### Contract Does Not Implement Any Interfaces
It is recommended to implement relevant interfaces for better code organization and clarity.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

19: abstract contract Context {

124: interface IERC20 {

```

</details> 
 


 ### <a name="NC-23"></a>[NC-23]
 ### Large multiples of ten should use scientific notation
Use a scientific notation rather than decimal literals (e.g. 1e6 instead of 1000000), for better code readability.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

601:     uint256 public constant TOTAL_SUPPLY = 23383574 * 10 ** DECIMALS;

```

</details> 
 


 ### <a name="NC-24"></a>[NC-24]
 ### Consider using named mappings

#### Impact:
Using named mappings can improve code readability and maintainability.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

264:     mapping(address => uint256) private _balances;

266:     mapping(address => mapping(address => uint256)) private _allowances;

```

</details> 
 


 ### <a name="NC-25"></a>[NC-25]
 ### Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct

#### Impact:
Combining multiple mappings into a single mapping with a struct can improve readability and maintainability of the code.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

264:     mapping(address => uint256) private _balances;

266:     mapping(address => mapping(address => uint256)) private _allowances;

612:     mapping(address => bool) public automatedMarketMakerPairs;

```

</details> 
 


 ### <a name="NC-26"></a>[NC-26]
 ### Use of override is unnecessary

#### Impact:
Starting with Solidity version [0.8.8](https://docs.soliditylang.org/en/v0.8.20/contracts.html#function-overriding), using the override keyword when the function solely overrides an interface function, and the function doesnt exist in multiple base contracts, is unnecessary.

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

287:     function name() public view virtual override returns (string memory) {

295:     function symbol() public view virtual override returns (string memory) {

312:     function decimals() public view virtual override returns (uint8) {

319:     function totalSupply() public view virtual override returns (uint256) {

326:     function balanceOf(address account) public view virtual override returns (uint256) {

338:     function transfer(address to, uint256 amount) public virtual override returns (bool) {

347:     function allowance(address owner, address spender) public view virtual override returns (uint256) {

361:     function approve(address spender, uint256 amount) public virtual override returns (bool) {

383:     function transferFrom(address from, address to, uint256 amount) public virtual override returns (bool) {

630:     ) internal virtual override {

```

</details> 
 


 ### <a name="NC-27"></a>[NC-27]
 ### Non-external/public variable names should begin with an underscore

#### Impact:
Using an underscore at the beginning of non-external/public variable names can improve code clarity and maintainability. According to the Solidity Style Guide, non-external/public variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

603:     address public liquidityWallet;

604:     address public marketingWallet;

605:     address public developmentWallet;

612:     mapping(address => bool) public automatedMarketMakerPairs;

```

</details> 
 


 ### <a name="NC-28"></a>[NC-28]
 ### Return values of `approve()` not checked
Not all IERC20 implementations `revert()` when there's a failure in `approve()`. The function signature has a boolean return value and they indicate errors that way instead. By not checking the return value, operations that should have marked as failed, may potentially go through without actually approving anything

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

363:         _approve(owner, spender, amount);

404:         _approve(owner, spender, allowance(owner, spender) + addedValue);

427:             _approve(owner, spender, currentAllowance - subtractedValue);

554:                 _approve(owner, spender, currentAllowance - amount);

```

</details> 
 


 ### <a name="NC-29"></a>[NC-29]
 ### Setters should prevent re-setting of the same value
This especially problematic when the setter also emits the same value, which may be confusing to offline parsers  

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

649:     function setLiquidityWallet(address _liquidityWallet) external onlyOwner {

653:     function setMarketingWallet(address _marketingWallet) external onlyOwner {

657:     function setDevelopmentWallet(address _developmentWallet) external onlyOwner {

661:     function setSellTax(uint256 _sellTax) external onlyOwner {

665:     function setLiquidityTax(uint256 _liquidityTax) external onlyOwner {

669:     function setMarketingTax(uint256 _marketingTax) external onlyOwner {

673:     function setDevelopmentTax(uint256 _devTax) external onlyOwner {

677:     function setAutomatedMarketMakerPair(address pair, bool enabled) public onlyOwner {   

```

</details> 
 


 ### <a name="NC-30"></a>[NC-30]
 ### Use the latest solidity version for deployment  
Upgrading to a newer Solidity release can optimize gas usage, take advantage of new features and improve overall contract efficiency. Where possible, based on compatibility requirements, it is recommended to use newer/latest solidity version to take advantage of the latest optimizations and features. You can see the latest version [here](https://soliditylang.org/blog/category/releases/)

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

7: pragma solidity ^0.8.0;

34: pragma solidity ^0.8.0;

119: pragma solidity ^0.8.0;

200: pragma solidity ^0.8.0;

230: pragma solidity ^0.8.0;

595: pragma solidity ^0.8.0;

```

</details> 
 


 ### <a name="NC-31"></a>[NC-31]
 ### Overflows in unchecked blocks
While integers with a large number of bits are unlikely to overflow on human time scales, it is not strictly correct to use an unchecked block around them, because eventually they will overflow, and unchecked blocks are meant for cases where it is mathematically impossible for an operation to trigger an overflow (e.g. a prior require() statement prevents the overflow case)

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

426:         unchecked {

455:         unchecked {

482:         unchecked {

509:         unchecked {

553:             unchecked {

```

</details> 
 


 ### <a name="NC-32"></a>[NC-32]
 ### Event is missing `indexed` fields
Index event fields make the field more quickly accessible to off-chain tools that parse events. However, note that each index field costs extra gas during emission, so it's not necessarily best to index the maximum allowed per event (three fields). Each event should use three indexed fields if there are three or more fields, and gas usage is not particularly of concern for the events in question. If there are fewer than three fields, all of the fields should be indexed.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

131:     event Transfer(address indexed from, address indexed to, uint256 value);

137:     event Approval(address indexed owner, address indexed spender, uint256 value);

```

</details> 
 


 ### <a name="NC-33"></a>[NC-33]
 ### Functions not used internally could be marked external

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

677:     function setAutomatedMarketMakerPair(address pair, bool enabled) public onlyOwner {   

```

</details> 
 


 ### <a name="NC-34"></a>[NC-34]
 ### Consider Turning Utility Contract Into a Library
Contracts containing only utility functions should be made into libraries.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

19: abstract contract Context {

```

</details> 
 


 ### <a name="NC-35"></a>[NC-35]
 ### Consider implementing two-step procedure for updation
A typo error or a copy-paste error can end up bricking the whole protocol. 

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

649:     function setLiquidityWallet(address _liquidityWallet) external onlyOwner {

653:     function setMarketingWallet(address _marketingWallet) external onlyOwner {

657:     function setDevelopmentWallet(address _developmentWallet) external onlyOwner {

661:     function setSellTax(uint256 _sellTax) external onlyOwner {

665:     function setLiquidityTax(uint256 _liquidityTax) external onlyOwner {

669:     function setMarketingTax(uint256 _marketingTax) external onlyOwner {

673:     function setDevelopmentTax(uint256 _devTax) external onlyOwner {

677:     function setAutomatedMarketMakerPair(address pair, bool enabled) public onlyOwner {   

```

</details> 
 


 ### <a name="NC-36"></a>[NC-36]
 ### Consider moving msg.sender checks to modifiers
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.  

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

21:         return msg.sender;

623:         _mint(msg.sender, TOTAL_SUPPLY);

```

</details> 
 


 ### <a name="NC-37"></a>[NC-37]
 ### Dont use _msgSender() if not supporting EIP-2771
Use msg.sender if the code does not implement EIP-2771 trusted forwarder support

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

20:     function _msgSender() internal view virtual returns (address) {

58:         _transferOwnership(_msgSender());

80:         require(owner() == _msgSender(), "Ownable: caller is not the owner");

339:         address owner = _msgSender();

362:         address owner = _msgSender();

384:         address spender = _msgSender();

403:         address owner = _msgSender();

423:         address owner = _msgSender();

```

</details> 
 


 ### <a name="NC-38"></a>[NC-38]
 ### Use assembly to emit events, in order to save gas
Using the [scratch space](https://github.com/Vectorized/solady/blob/30558f5402f02351b96eeb6eaf32bcea29773841/src/tokens/ERC1155.sol#L501-L504) for event arguments (two words or fewer) will save gas over needing Soliditys full abi memory expansion used for emitting normally.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

110:         emit OwnershipTransferred(oldOwner, newOwner);

462:         emit Transfer(from, to, amount);

486:         emit Transfer(address(0), account, amount);

515:         emit Transfer(account, address(0), amount);

538:         emit Approval(owner, spender, amount);

```

</details> 
 


 ### <a name="NC-39"></a>[NC-39]
 ### Long revert strings

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

99:         require(newOwner != address(0), "Ownable: new owner is the zero address");

425:         require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");

448:         require(from != address(0), "ERC20: transfer from the zero address");

449:         require(to != address(0), "ERC20: transfer to the zero address");

454:         require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");

503:         require(account != address(0), "ERC20: burn from the zero address");

508:         require(accountBalance >= amount, "ERC20: burn amount exceeds balance");

534:         require(owner != address(0), "ERC20: approve from the zero address");

535:         require(spender != address(0), "ERC20: approve to the zero address");

```

</details> 
 


## Gas Optimizations


 ### <a name="GAS-1"></a>[GAS-1]
 ### Enable IR-based code generation
By using `--via-ir` or `{"viaIR": true}`, the compiler is able to use more advanced [multi-function optimizations](https://docs.soliditylang.org/en/v0.8.17/ir-breaking-changes.html#solidity-ir-based-codegen-changes), for extra gas savings.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

7: pragma solidity ^0.8.0;

34: pragma solidity ^0.8.0;

119: pragma solidity ^0.8.0;

200: pragma solidity ^0.8.0;

230: pragma solidity ^0.8.0;

595: pragma solidity ^0.8.0;

```

</details> 
 


 ### <a name="GAS-2"></a>[GAS-2]
 ### Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18)
While the compiler knows to optimize away the exponentiation, its still better coding practice to use idioms that do not require compiler optimization, if they exist.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

601:     uint256 public constant TOTAL_SUPPLY = 23383574 * 10 ** DECIMALS;

```

</details> 
 


 ### <a name="GAS-3"></a>[GAS-3]
 ### Consider using = instead of += and -= for gas efficiency
Using = instead of += and -= can save gas in certain scenarios. Consider using = when appropriate.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

481:         _totalSupply += amount;

512:             _totalSupply -= amount;

```

</details> 
 


 ### <a name="GAS-4"></a>[GAS-4]
 ### Use assembly to check for `address(0)`
*Saves 6 gas per instance*

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

99:         require(newOwner != address(0), "Ownable: new owner is the zero address");

448:         require(from != address(0), "ERC20: transfer from the zero address");

449:         require(to != address(0), "ERC20: transfer to the zero address");

477:         require(account != address(0), "ERC20: mint to the zero address");

503:         require(account != address(0), "ERC20: burn from the zero address");

534:         require(owner != address(0), "ERC20: approve from the zero address");

535:         require(spender != address(0), "ERC20: approve to the zero address");

```

</details> 
 


 ### <a name="GAS-5"></a>[GAS-5]
 ### Using bools for storage incurs overhead
Use uint256(1) and uint256(2) for true/false to avoid a Gwarmaccess (100 gas), and to avoid Gsset (20000 gas) when changing from ‘false’ to ‘true’, after having been ‘true’ in the past. See [source](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/58f635312aa21f947cae5f8578638a85aa2519f5/contracts/security/ReentrancyGuard.sol#L23-L27).

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

612:     mapping(address => bool) public automatedMarketMakerPairs;

```

</details> 
 


 ### <a name="GAS-6"></a>[GAS-6]
 ### Use calldata instead of memory for function arguments that do not get mutated
Mark data types as `calldata` instead of `memory` where possible. This makes it so that the data is not automatically loaded into memory. If the data passed into the function does not need to be changed (like updating values in an array), it can be passed in as `calldata`. The one exception to this is if the argument must later be passed into another function that takes an argument that specifies `memory` storage.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

279:     constructor(string memory name_, string memory symbol_) {

279:     constructor(string memory name_, string memory symbol_) {

```

</details> 
 


 ### <a name="GAS-7"></a>[GAS-7]
 ### Expressions for constant values should use immutable rather than constant

#### Impact:
While it doesnt save any gas because the compiler knows that developers often make this mistake, its still best to use the right tool for the task at hand. There is a difference between constant variables and immutable variables, and they should each be used in their appropriate contexts. constants should be used for literal values written into the code, and immutable variables should be used for expressions, or values calculated in, or passed into the constructor.  

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

600:     uint256 public constant DECIMALS = 18;

601:     uint256 public constant TOTAL_SUPPLY = 23383574 * 10 ** DECIMALS;

```

</details> 
 


 ### <a name="GAS-8"></a>[GAS-8]
 ### Constructors can be marked payable
Payable functions cost less gas to execute, since the compiler does not have to add extra checks to ensure that a payment wasn  t provided. A constructor can safely be marked as payable, since only the deployer would be able to pass funds, and the project itself would not pass any funds.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

57:     constructor() {

279:     constructor(string memory name_, string memory symbol_) {

614:     constructor(

```

</details> 
 


 ### <a name="GAS-9"></a>[GAS-9]
 ### Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

80:         require(owner() == _msgSender(), "Ownable: caller is not the owner");

99:         require(newOwner != address(0), "Ownable: new owner is the zero address");

425:         require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");

448:         require(from != address(0), "ERC20: transfer from the zero address");

449:         require(to != address(0), "ERC20: transfer to the zero address");

454:         require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");

477:         require(account != address(0), "ERC20: mint to the zero address");

503:         require(account != address(0), "ERC20: burn from the zero address");

508:         require(accountBalance >= amount, "ERC20: burn amount exceeds balance");

534:         require(owner != address(0), "ERC20: approve from the zero address");

535:         require(spender != address(0), "ERC20: approve to the zero address");

552:             require(currentAllowance >= amount, "ERC20: insufficient allowance");

678:         require(automatedMarketMakerPairs[pair] != enabled, "Pair Already Enabled");

```

</details> 
 


 ### <a name="GAS-10"></a>[GAS-10]
 ### Reduce gas usage by moving to Solidity 0.8.19 or later
Solidity version 0.8.19 introduced a number of gas optimizations, refer to the [Solidity 0.8.19 Release Announcement](https://soliditylang.org/blog/2023/02/22/solidity-0.8.19-release-announcement) for details.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

7: pragma solidity ^0.8.0;

34: pragma solidity ^0.8.0;

119: pragma solidity ^0.8.0;

200: pragma solidity ^0.8.0;

230: pragma solidity ^0.8.0;

595: pragma solidity ^0.8.0;

```

</details> 
 


 ### <a name="GAS-11"></a>[GAS-11]
 ### Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

90:     function renounceOwnership() public virtual onlyOwner {

98:     function transferOwnership(address newOwner) public virtual onlyOwner {

649:     function setLiquidityWallet(address _liquidityWallet) external onlyOwner {

653:     function setMarketingWallet(address _marketingWallet) external onlyOwner {

657:     function setDevelopmentWallet(address _developmentWallet) external onlyOwner {

661:     function setSellTax(uint256 _sellTax) external onlyOwner {

665:     function setLiquidityTax(uint256 _liquidityTax) external onlyOwner {

669:     function setMarketingTax(uint256 _marketingTax) external onlyOwner {

673:     function setDevelopmentTax(uint256 _devTax) external onlyOwner {

677:     function setAutomatedMarketMakerPair(address pair, bool enabled) public onlyOwner {   

```

</details> 
 


 ### <a name="GAS-12"></a>[GAS-12]
 ### Using `private` rather than `public` for constants, saves gas
If needed, the values can be read from the verified contract source code, or if there are multiple values there can be a single getter function that [returns a tuple](https://github.com/code-423n4/2022-08-frax/blob/90f55a9ce4e25bceed3a74290b854341d8de6afa/src/contracts/FraxlendPair.sol#L156-L178) of the values of all currently-public constants. Saves **3406-3606 gas** in deployment gas due to the compiler not having to create non-payable getter functions for deployment calldata, not having to store the bytes of the value outside of where it's used, and not adding another entry to the method ID table

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

600:     uint256 public constant DECIMALS = 18;

601:     uint256 public constant TOTAL_SUPPLY = 23383574 * 10 ** DECIMALS;

```

</details> 
 


 ### <a name="GAS-13"></a>[GAS-13]
 ### require()/revert() strings longer than 32 bytes cost extra gas
Each extra memory word of bytes past the original 32 [incurs an MSTORE](https://gist.github.com/hrkrshnn/ee8fabd532058307229d65dcd5836ddc#consider-having-short-revert-strings) which costs 3 gas.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

425:         require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");

454:         require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");

508:         require(accountBalance >= amount, "ERC20: burn amount exceeds balance");

552:             require(currentAllowance >= amount, "ERC20: insufficient allowance");

```

</details> 
 


 ### <a name="GAS-14"></a>[GAS-14]
 ### Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency
Using uint256(1) and uint256(2) instead of true and false can save gas for certain changes. Consider using uint256(1)/uint256(2) when appropriate.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

341:         return true;

364:         return true;

387:         return true;

405:         return true;

430:         return true;

```

</details> 
 


 ### <a name="GAS-15"></a>[GAS-15]
 ### Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead
Using uints or ints smaller than 32 bytes (256 bits) can incur overhead. Consider using uint256 or int256 to avoid potential issues.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

222:     function decimals() external view returns (uint8);

312:     function decimals() public view virtual override returns (uint8) {

```

</details> 
 


 ### <a name="GAS-16"></a>[GAS-16]
 ### Optimize names to save gas
public/external function names and public member variable names can be optimized to save gas. See [this](https://gist.github.com/IllIllI000/a5d8b486a8259f9f77891a919febd1a9) link for an example of how it works. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save 128 gas each during deployment, and renaming functions to have lower method IDs will save 22 gas per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: main.sol

72:     function owner() public view virtual returns (address) {

90:     function renounceOwnership() public virtual onlyOwner {

98:     function transferOwnership(address newOwner) public virtual onlyOwner {

142:     function totalSupply() external view returns (uint256);

147:     function balanceOf(address account) external view returns (uint256);

165:     function allowance(address owner, address spender) external view returns (uint256);

212:     function name() external view returns (string memory);

217:     function symbol() external view returns (string memory);

222:     function decimals() external view returns (uint8);

287:     function name() public view virtual override returns (string memory) {

295:     function symbol() public view virtual override returns (string memory) {

312:     function decimals() public view virtual override returns (uint8) {

319:     function totalSupply() public view virtual override returns (uint256) {

326:     function balanceOf(address account) public view virtual override returns (uint256) {

338:     function transfer(address to, uint256 amount) public virtual override returns (bool) {

347:     function allowance(address owner, address spender) public view virtual override returns (uint256) {

361:     function approve(address spender, uint256 amount) public virtual override returns (bool) {

383:     function transferFrom(address from, address to, uint256 amount) public virtual override returns (bool) {

402:     function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {

422:     function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {

600:     uint256 public constant DECIMALS = 18;

601:     uint256 public constant TOTAL_SUPPLY = 23383574 * 10 ** DECIMALS;

603:     address public liquidityWallet;

604:     address public marketingWallet;

605:     address public developmentWallet;

607:     uint256 public sellTax = 3;

608:     uint256 public liquidityTax = 50; // 1.5% of the sell tax

609:     uint256 public marketingTax = 33; // 1% of the sell tax

610:     uint256 public developmentTax = 17; // 0.5% of the sell tax

612:     mapping(address => bool) public automatedMarketMakerPairs;

649:     function setLiquidityWallet(address _liquidityWallet) external onlyOwner {

653:     function setMarketingWallet(address _marketingWallet) external onlyOwner {

657:     function setDevelopmentWallet(address _developmentWallet) external onlyOwner {

661:     function setSellTax(uint256 _sellTax) external onlyOwner {

665:     function setLiquidityTax(uint256 _liquidityTax) external onlyOwner {

669:     function setMarketingTax(uint256 _marketingTax) external onlyOwner {

673:     function setDevelopmentTax(uint256 _devTax) external onlyOwner {

677:     function setAutomatedMarketMakerPair(address pair, bool enabled) public onlyOwner {   

```

</details> 
 

