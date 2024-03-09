# Report


## Medium Issues


| |Issue|Instances|
|-|:-|:-:|
| [M-1](#M-1) | Centralization Risk for trusted owners | 5 |
| [M-2](#M-2) | Unsafe use of ERC20 transferFrom() | 1 |
| [M-3](#M-3) | Unsafe use of ERC20 transfer() | 3 |

## Low Issues


| |Issue|Instances|
|-|:-|:-:|
| [L-1](#L-1) | complex casting | 2 |
| [L-2](#L-2) | Functions calling contracts/addresses with transfer hooks are missing reentrancy guards | 1 |
| [L-3](#L-3) | Tokens may be minted to address(0x0) | 2 |
| [L-4](#L-4) | Division by zero not prevented | 1 |
| [L-5](#L-5) | Empty function body | 2 |
| [L-6](#L-6) | Use Ownable2Step instead of Ownable | 3 |
| [L-7](#L-7) | Owner can renounce Ownership   | 3 |
| [L-8](#L-8) | Loss of precision | 1 |
| [L-9](#L-9) | State variables not capped at reasonable values | 30 |
| [L-10](#L-10) | Some tokens may revert when zero value transfers are made | 3 |
| [L-11](#L-11) |  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard   | 3 |
| [L-12](#L-12) | Some tokens may revert when large transfers are made | 3 |
| [L-13](#L-13) | Unsafe casting | 2 |
| [L-14](#L-14) | Unsafe ERC20 operation(s) | 4 |

## Non Critical Issues


| |Issue|Instances|
|-|:-|:-:|
| [NC-1](#NC-1) | Contracts should have full test coverage | 7 |
| [NC-2](#NC-2) | Consider adding formal verification proofs | 7 |
| [NC-3](#NC-3) | Large or complicated code bases should implement invariant tests | 7 |
| [NC-4](#NC-4) | Variables without visibility specifier | 28 |
| [NC-5](#NC-5) | Constants in comparisons should appear on the left side | 3 |
| [NC-6](#NC-6) | Contract declarations should have NatSpec @author annotations | 7 |
| [NC-7](#NC-7) | Contract declarations should have NatSpec @Title annotations | 7 |
| [NC-8](#NC-8) | NatSpec: Contract declarations should have @dev tags | 7 |
| [NC-9](#NC-9) | NatSpec: Contract declarations should have NatSpec descriptions | 7 |
| [NC-10](#NC-10) | NatSpec: Contract declarations should have @notice tags | 7 |
| [NC-11](#NC-11) | Consider using delete rather than assigning zero to clear value | 1 |
| [NC-12](#NC-12) | Consider using delete rather than assigning false to clear value | 3 |
| [NC-13](#NC-13) | Consider adding a block/deny-list" | 7 |
| [NC-14](#NC-14) | Consider adding emergency-stop functionality | 7 |
| [NC-15](#NC-15) | Events are missing sender information | 17 |
| [NC-16](#NC-16) | NatSpec: Event declarations should have NatSpec descriptions | 17 |
| [NC-17](#NC-17) | Events should use parameters to convey information | 2 |
| [NC-18](#NC-18) | contracts should use fixed compiler versions | 7 |
| [NC-19](#NC-19) | NatSpec: function declarations should have NatSpec descriptions | 18 |
| [NC-20](#NC-20) | NatSpec: function declarations should have @Notice tags | 18 |
| [NC-21](#NC-21) | NatSpec: function declarations should have NatSpec descriptions | 18 |
| [NC-22](#NC-22) | If-statement can be converted to a ternary | 3 |
| [NC-23](#NC-23) | Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct | 2 |
| [NC-24](#NC-24) | Consider using descriptive constants when using 0 in the code | 2 |
| [NC-25](#NC-25) | Non-external/public variable names should begin with an underscore | 12 |
| [NC-26](#NC-26) | Use the latest solidity version for deployment   | 7 |
| [NC-27](#NC-27) | Constants should be defined rather than using magic numbers | 1 |
| [NC-28](#NC-28) | Import Whole Files Instead of Specific Identifiers | 5 |
| [NC-29](#NC-29) | Consider moving msg.sender checks to modifiers | 23 |
| [NC-30](#NC-30) | Owner can renounce while system is paused | 1 |
| [NC-31](#NC-31) | Use assembly to emit events, in order to save gas | 17 |
| [NC-32](#NC-32) | Long revert strings | 6 |

## Gas Optimizations


| |Issue|Instances|
|-|:-|:-:|
| [GAS-1](#GAS-1) | Enable IR-based code generation | 7 |
| [GAS-2](#GAS-2) | Consider using = instead of += and -= for gas efficiency | 4 |
| [GAS-3](#GAS-3) | Use >= instead of > for gas efficiency | 2 |
| [GAS-4](#GAS-4) | Constructors can be marked payable | 4 |
| [GAS-5](#GAS-5) | Use Custom Errors | 12 |
| [GAS-6](#GAS-6) | Reduce gas usage by moving to Solidity 0.8.19 or later | 7 |
| [GAS-7](#GAS-7) | Functions guaranteed to revert when called by normal users can be marked `payable` | 2 |
| [GAS-8](#GAS-8) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 4 |
| [GAS-9](#GAS-9) | require()/revert() strings longer than 32 bytes cost extra gas | 4 |
| [GAS-10](#GAS-10) | Structs can be packed into fewer storage slots | 7 |
| [GAS-11](#GAS-11) | Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency | 9 |
| [GAS-12](#GAS-12) | Use != 0 instead of > for unsigned integer comparison | 2 |
| [GAS-13](#GAS-13) | Optimize names to save gas | 14 |

##################################################################### 
 
 DETAILED REPORT:: 


##################################################################### 


## Medium Issues


 ### <a name="M-1"></a>[M-1]
 ### Centralization Risk for trusted owners

#### Impact:
Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

7: contract Admin is Ownable, Pausable {

24:     ) Ownable(initialOwner) {

32:     ) external onlyOwner {

38:     function pause() external onlyOwner {

44:     function unpause() external onlyOwner {

```

</details> 
 


 ### <a name="M-2"></a>[M-2]
 ### Unsafe use of ERC20 transferFrom()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transferFrom() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransferFrom() from OpenZeppelin instead.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CollateralMarket.sol

62:             collateralContract.transferFrom(auction.seller, auction.highestBidder, auction.collateralId);

```

</details> 
 


 ### <a name="M-3"></a>[M-3]
 ### Unsafe use of ERC20 transfer()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transfer() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransfer() from OpenZeppelin instead.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CollateralMarket.sol

46:             payable(auction.highestBidder).transfer(auction.highestBid);

61:             payable(auction.seller).transfer(auction.highestBid);

```

```solidity
File: Staking.sol

43:         payable(msg.sender).transfer(totalAmount);

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
File: Collateral.sol

25:         _mint(msg.sender, collateralId); //@audit use safeMint with re-entrancy guard

```

```solidity
File: LoanAgreement.sol

28:         _mint(borrower, loanId);

```

</details> 
 


 ### <a name="L-2"></a>[L-2]
 ### Functions calling contracts/addresses with transfer hooks are missing reentrancy guards
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks will open the users of this protocol up to [read-only reentrancies](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) with no way to protect against it, except by block-listing the whole protocol.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CollateralMarket.sol

62:             collateralContract.transferFrom(auction.seller, auction.highestBidder, auction.collateralId);

```

</details> 
 


 ### <a name="L-3"></a>[L-3]
 ### Tokens may be minted to address(0x0)
Neither the  functions, nor _mint() prevent minting to address(0x0)  

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Collateral.sol

25:         _mint(msg.sender, collateralId); //@audit use safeMint with re-entrancy guard

```

```solidity
File: LoanAgreement.sol

28:         _mint(borrower, loanId);

```

</details> 
 


 ### <a name="L-4"></a>[L-4]
 ### Division by zero not prevented
The divisions below take an input parameter that has no zero-value checks, which can cause the functions reverting if zero is passed.  

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Staking.sol

53:         return (amount * interestRate * numYears) / 100;

```

</details> 
 


 ### <a name="L-5"></a>[L-5]
 ### Empty function body
Consider adding a comment about why the function body is empty

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Collateral.sol

16:     constructor() ERC721("Collateral", "COLL") {}

```

```solidity
File: LoanAgreement.sol

20:     constructor() ERC721("LoanAgreement", "LNAG") {}

```

</details> 
 


 ### <a name="L-6"></a>[L-6]
 ### Use Ownable2Step instead of Ownable
Add a description of why Ownable2Step is recommended.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

4: import "@openzeppelin/contracts/access/Ownable.sol";

7: contract Admin is Ownable, Pausable {

24:     ) Ownable(initialOwner) {

```

</details> 
 


 ### <a name="L-7"></a>[L-7]
 ### Owner can renounce Ownership  
Each of the following contracts implements or inherits the renounceOwnership() function. This can represent a certain risk if the ownership is renounced for any other reason than by design. Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

4: import "@openzeppelin/contracts/access/Ownable.sol";

7: contract Admin is Ownable, Pausable {

24:     ) Ownable(initialOwner) {

```

</details> 
 


 ### <a name="L-8"></a>[L-8]
 ### Loss of precision
Division by large numbers or variables may result in the result being zero, due to Solidity not supporting fractions.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Staking.sol

53:         return (amount * interestRate * numYears) / 100;

```

</details> 
 


 ### <a name="L-9"></a>[L-9]
 ### State variables not capped at reasonable values
Consider adding minimum/maximum value checks to ensure that the state variables below can never be used to excessively harm users, including via griefing

*Instances (30)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

10:         uint256 lendingFeeRate; // Fee rate for lending operations

11:         uint256 borrowingFeeRate; // Fee rate for borrowing operations

```

```solidity
File: Collateral.sol

8:         uint256 loanId;

9:         string description;

10:         bool isLinked;

```

```solidity
File: CollateralMarket.sol

7:     Collateral collateralContract;

10:         uint256 collateralId;

11:         address seller;

12:         uint256 minBid;

13:         uint256 highestBid;

14:         address highestBidder;

15:         uint256 auctionEndTime;

16:         bool isActive;

```

```solidity
File: LoanAgreement.sol

8:         address lender;

9:         address borrower;

10:         uint256 amount;

11:         uint256 interestRate;

12:         uint256 duration;

13:         uint256 balanceDue;

14:         bool isPaidOff;

```

```solidity
File: LoanMarketplace.sol

6:         address lender;

7:         uint256 amount;

8:         uint256 interestRate;

9:         uint256 duration;

10:         bool isActive;

```

```solidity
File: Staking.sol

6:         uint256 amount;

7:         uint256 depositTime;

8:         uint256 interestRate; // annual interest rate

```

```solidity
File: UserRegistry.sol

8:         UserType userType;

9:         uint256 reputation;

```

</details> 
 


 ### <a name="L-10"></a>[L-10]
 ### Some tokens may revert when zero value transfers are made
Despite the fact that [EIP-20](https://github.com/ethereum/EIPs/blob/7500ac4fc1bbdfaf684e7ef851f798f6b667b2fe/EIPS/eip-20.md?plain=1#L116) states that zero-value transfers must be accepted, some tokens, such as LEND, will revert if this is attempted, which may cause transactions that involve other tokens (such as batch operations) to fully revert. Consider skipping the transfer if the amount is zero, which will also save gas.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CollateralMarket.sol

46:             payable(auction.highestBidder).transfer(auction.highestBid);

61:             payable(auction.seller).transfer(auction.highestBid);

```

```solidity
File: Staking.sol

43:         payable(msg.sender).transfer(totalAmount);

```

</details> 
 


 ### <a name="L-11"></a>[L-11]
 ###  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard  
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks opens the users of this protocol up to [read-only reentrancy](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) vulnerability with no way to protect them except by block-listing the entire protocol.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CollateralMarket.sol

46:             payable(auction.highestBidder).transfer(auction.highestBid);

61:             payable(auction.seller).transfer(auction.highestBid);

```

```solidity
File: Staking.sol

43:         payable(msg.sender).transfer(totalAmount);

```

</details> 
 


 ### <a name="L-12"></a>[L-12]
 ### Some tokens may revert when large transfers are made
Tokens such as COMP or UNI will revert when an address balance reaches type(uint96).max. Ensure that the calls below can be broken up into smaller batches if necessary.  

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CollateralMarket.sol

46:             payable(auction.highestBidder).transfer(auction.highestBid);

61:             payable(auction.seller).transfer(auction.highestBid);

```

```solidity
File: Staking.sol

43:         payable(msg.sender).transfer(totalAmount);

```

</details> 
 


 ### <a name="L-13"></a>[L-13]
 ### Unsafe casting
Unsafe casting can cause alot of issues especially when a type is downcast to a smaller type, the higher order bits are truncated, effectively applying a modulo to the original value. Without any other checks, this wrapping will lead to unexpected behavior and bugs

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Collateral.sol

25:         _mint(msg.sender, collateralId); //@audit use safeMint with re-entrancy guard

```

```solidity
File: LoanAgreement.sol

28:         _mint(borrower, loanId);

```

</details> 
 


 ### <a name="L-14"></a>[L-14]
 ### Unsafe ERC20 operation(s)

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CollateralMarket.sol

46:             payable(auction.highestBidder).transfer(auction.highestBid);

61:             payable(auction.seller).transfer(auction.highestBid);

62:             collateralContract.transferFrom(auction.seller, auction.highestBidder, auction.collateralId);

```

```solidity
File: Staking.sol

43:         payable(msg.sender).transfer(totalAmount);

```

</details> 
 


## Non Critical Issues


 ### <a name="NC-1"></a>[NC-1]
 ### Contracts should have full test coverage
While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: Collateral.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: CollateralMarket.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: LoanAgreement.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: LoanMarketplace.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: UserRegistry.sol

2: pragma solidity ^0.8.0;

```

</details> 
 


 ### <a name="NC-2"></a>[NC-2]
 ### Consider adding formal verification proofs
Consider using formal verification to mathematically prove that your code does what is intended, and does not have any edge cases with unexpected behavior. The solidity compiler itself has this functionality [built in](https://docs.soliditylang.org/en/latest/smtchecker.html#smtchecker-and-formal-verification)  

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: Collateral.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: CollateralMarket.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: LoanAgreement.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: LoanMarketplace.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: UserRegistry.sol

2: pragma solidity ^0.8.0;

```

</details> 
 


 ### <a name="NC-3"></a>[NC-3]
 ### Large or complicated code bases should implement invariant tests
Large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts, should implement [invariant fuzzing tests](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05). Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold. Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers, with properly and extensively-written invariants, can close this testing gap significantly.  

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: Collateral.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: CollateralMarket.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: LoanAgreement.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: LoanMarketplace.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: UserRegistry.sol

2: pragma solidity ^0.8.0;

```

</details> 
 


 ### <a name="NC-4"></a>[NC-4]
 ### Variables without visibility specifier

#### Impact:
Specifying visibility for variables can improve code readability and maintainability.

*Instances (28)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

10:         uint256 lendingFeeRate; // Fee rate for lending operations

11:         uint256 borrowingFeeRate; // Fee rate for borrowing operations

```

```solidity
File: Collateral.sol

8:         uint256 loanId;

9:         string description;

10:         bool isLinked;

```

```solidity
File: CollateralMarket.sol

10:         uint256 collateralId;

11:         address seller;

12:         uint256 minBid;

13:         uint256 highestBid;

14:         address highestBidder;

15:         uint256 auctionEndTime;

16:         bool isActive;

```

```solidity
File: LoanAgreement.sol

8:         address lender;

9:         address borrower;

10:         uint256 amount;

11:         uint256 interestRate;

12:         uint256 duration;

13:         uint256 balanceDue;

14:         bool isPaidOff;

```

```solidity
File: LoanMarketplace.sol

6:         address lender;

7:         uint256 amount;

8:         uint256 interestRate;

9:         uint256 duration;

10:         bool isActive;

```

```solidity
File: Staking.sol

6:         uint256 amount;

7:         uint256 depositTime;

8:         uint256 interestRate; // annual interest rate

```

```solidity
File: UserRegistry.sol

9:         uint256 reputation;

```

</details> 
 


 ### <a name="NC-5"></a>[NC-5]
 ### Constants in comparisons should appear on the left side

#### Impact:
Placing constants on the left side of comparisons can improve code readability and prevent accidental assignment. Doing so will prevent typo [bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CollateralMarket.sol

45:         if (auction.highestBidder != address(0)) {

60:         if (auction.highestBidder != address(0)) {

```

```solidity
File: LoanAgreement.sol

37:         if (loan.balanceDue == 0) {

```

</details> 
 


 ### <a name="NC-6"></a>[NC-6]
 ### Contract declarations should have NatSpec @author annotations

#### Impact:
Adding a NatSpec @author annotation to contract declarations can improve code documentation.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

7: contract Admin is Ownable, Pausable {

```

```solidity
File: Collateral.sol

6: contract Collateral is ERC721 {

```

```solidity
File: CollateralMarket.sol

6: contract CollateralMarket {

```

```solidity
File: LoanAgreement.sol

6: contract LoanAgreement is ERC721 {

```

```solidity
File: LoanMarketplace.sol

4: contract LoanMarketplace {

```

```solidity
File: Staking.sol

4: contract Staking {

```

```solidity
File: UserRegistry.sol

4: contract UserRegistry {

```

</details> 
 


 ### <a name="NC-7"></a>[NC-7]
 ### Contract declarations should have NatSpec @Title annotations

#### Impact:
Adding a NatSpec @Title annotation to contract declarations can improve code documentation.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

7: contract Admin is Ownable, Pausable {

```

```solidity
File: Collateral.sol

6: contract Collateral is ERC721 {

```

```solidity
File: CollateralMarket.sol

6: contract CollateralMarket {

```

```solidity
File: LoanAgreement.sol

6: contract LoanAgreement is ERC721 {

```

```solidity
File: LoanMarketplace.sol

4: contract LoanMarketplace {

```

```solidity
File: Staking.sol

4: contract Staking {

```

```solidity
File: UserRegistry.sol

4: contract UserRegistry {

```

</details> 
 


 ### <a name="NC-8"></a>[NC-8]
 ### NatSpec: Contract declarations should have @dev tags

#### Impact:
@dev is used to explain extra details to developers

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

7: contract Admin is Ownable, Pausable {

```

```solidity
File: Collateral.sol

6: contract Collateral is ERC721 {

```

```solidity
File: CollateralMarket.sol

6: contract CollateralMarket {

```

```solidity
File: LoanAgreement.sol

6: contract LoanAgreement is ERC721 {

```

```solidity
File: LoanMarketplace.sol

4: contract LoanMarketplace {

```

```solidity
File: Staking.sol

4: contract Staking {

```

```solidity
File: UserRegistry.sol

4: contract UserRegistry {

```

</details> 
 


 ### <a name="NC-9"></a>[NC-9]
 ### NatSpec: Contract declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

7: contract Admin is Ownable, Pausable {

```

```solidity
File: Collateral.sol

6: contract Collateral is ERC721 {

```

```solidity
File: CollateralMarket.sol

6: contract CollateralMarket {

```

```solidity
File: LoanAgreement.sol

6: contract LoanAgreement is ERC721 {

```

```solidity
File: LoanMarketplace.sol

4: contract LoanMarketplace {

```

```solidity
File: Staking.sol

4: contract Staking {

```

```solidity
File: UserRegistry.sol

4: contract UserRegistry {

```

</details> 
 


 ### <a name="NC-10"></a>[NC-10]
 ### NatSpec: Contract declarations should have @notice tags
@notice is used to explain to end users what the contract does, and the compiler interprets /// or /** comments as this tag if one wasnt explicitly provided

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

7: contract Admin is Ownable, Pausable {

```

```solidity
File: Collateral.sol

6: contract Collateral is ERC721 {

```

```solidity
File: CollateralMarket.sol

6: contract CollateralMarket {

```

```solidity
File: LoanAgreement.sol

6: contract LoanAgreement is ERC721 {

```

```solidity
File: LoanMarketplace.sol

4: contract LoanMarketplace {

```

```solidity
File: Staking.sol

4: contract Staking {

```

```solidity
File: UserRegistry.sol

4: contract UserRegistry {

```

</details> 
 


 ### <a name="NC-11"></a>[NC-11]
 ### Consider using delete rather than assigning zero to clear value

#### Impact:
Consider using delete rather than assigning zero to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Staking.sol

42:         userStake.amount = 0;

```

</details> 
 


 ### <a name="NC-12"></a>[NC-12]
 ### Consider using delete rather than assigning false to clear value

#### Impact:
Consider using delete rather than assigning alse to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Collateral.sol

40:         collateral.isLinked = false;

```

```solidity
File: CollateralMarket.sol

59:         auction.isActive = false;

```

```solidity
File: LoanMarketplace.sol

28:         offer.isActive = false;

```

</details> 
 


 ### <a name="NC-13"></a>[NC-13]
 ### Consider adding a block/deny-list"
Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens  

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

7: contract Admin is Ownable, Pausable {

```

```solidity
File: Collateral.sol

6: contract Collateral is ERC721 {

```

```solidity
File: CollateralMarket.sol

6: contract CollateralMarket {

```

```solidity
File: LoanAgreement.sol

6: contract LoanAgreement is ERC721 {

```

```solidity
File: LoanMarketplace.sol

4: contract LoanMarketplace {

```

```solidity
File: Staking.sol

4: contract Staking {

```

```solidity
File: UserRegistry.sol

4: contract UserRegistry {

```

</details> 
 


 ### <a name="NC-14"></a>[NC-14]
 ### Consider adding emergency-stop functionality

#### Impact:
Adding a way to quickly halt protocol functionality in an emergency, rather than having to pause individual contracts one-by-one, will make in-progress hack mitigation faster and much less stressful.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

7: contract Admin is Ownable, Pausable {

```

```solidity
File: Collateral.sol

6: contract Collateral is ERC721 {

```

```solidity
File: CollateralMarket.sol

6: contract CollateralMarket {

```

```solidity
File: LoanAgreement.sol

6: contract LoanAgreement is ERC721 {

```

```solidity
File: LoanMarketplace.sol

4: contract LoanMarketplace {

```

```solidity
File: Staking.sol

4: contract Staking {

```

```solidity
File: UserRegistry.sol

4: contract UserRegistry {

```

</details> 
 


 ### <a name="NC-15"></a>[NC-15]
 ### Events are missing sender information

#### Impact:
Including msg.sender in events triggered by user actions can make events more useful for end users.

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

34:         emit FeePolicyUpdated(_lendingFeeRate, _borrowingFeeRate);

40:         emit EmergencyStopActivated();

46:         emit EmergencyStopDeactivated();

```

```solidity
File: Collateral.sol

26:         emit CollateralCreated(collateralId, loanId, description);

34:         emit CollateralLinked(collateralId, loanId);

41:         emit CollateralUnlinked(collateralId);

```

```solidity
File: CollateralMarket.sol

34:         emit AuctionCreated(nextAuctionId, collateralId, minBid, auctionEndTime);

51:         emit BidPlaced(auctionId, msg.sender, bidAmount);

64:         emit AuctionConcluded(auctionId, auction.highestBidder, auction.highestBid);

```

```solidity
File: LoanAgreement.sol

29:         emit LoanCreated(loanId, msg.sender, borrower, amount, interestRate, duration);

40:         emit PaymentMade(loanId, amountPaid, loan.balanceDue);

```

```solidity
File: LoanMarketplace.sol

21:         emit LoanOfferCreated(nextLoanOfferId, msg.sender, amount, interestRate, duration);

29:         emit LoanOfferTaken(offerId, msg.sender);

```

```solidity
File: Staking.sol

25:         emit Staked(msg.sender, amount, block.timestamp);

44:         emit Unstaked(msg.sender, totalAmount);

```

```solidity
File: UserRegistry.sol

19:         emit UserProfileCreated(msg.sender, userType);

25:         emit UserProfileUpdated(msg.sender, profile.userType, reputation);

```

</details> 
 


 ### <a name="NC-16"></a>[NC-16]
 ### NatSpec: Event declarations should have NatSpec descriptions

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

16:     event FeePolicyUpdated(uint256 lendingFeeRate, uint256 borrowingFeeRate);

17:     event EmergencyStopActivated();

18:     event EmergencyStopDeactivated();

```

```solidity
File: Collateral.sol

18:     event CollateralCreated(uint256 collateralId, uint256 indexed loanId, string description);

19:     event CollateralLinked(uint256 collateralId, uint256 loanId);

20:     event CollateralUnlinked(uint256 collateralId);

```

```solidity
File: CollateralMarket.sol

22:     event AuctionCreated(uint256 auctionId, uint256 collateralId, uint256 minBid, uint256 auctionEndTime);

23:     event BidPlaced(uint256 auctionId, address bidder, uint256 bidAmount);

24:     event AuctionConcluded(uint256 auctionId, address winner, uint256 winningBid);

```

```solidity
File: LoanAgreement.sol

22:     event LoanCreated(uint256 loanId, address indexed lender, address indexed borrower, uint256 amount, uint256 interestRate, uint256 duration);

23:     event PaymentMade(uint256 loanId, uint256 amountPaid, uint256 balanceDue);

```

```solidity
File: LoanMarketplace.sol

16:     event LoanOfferCreated(uint256 offerId, address indexed lender, uint256 amount, uint256 interestRate, uint256 duration);

17:     event LoanOfferTaken(uint256 offerId, address indexed borrower);

```

```solidity
File: Staking.sol

14:     event Staked(address indexed user, uint256 amount, uint256 depositTime);

15:     event Unstaked(address indexed user, uint256 amount);

```

```solidity
File: UserRegistry.sol

14:     event UserProfileCreated(address indexed user, UserType userType);

15:     event UserProfileUpdated(address indexed user, UserType userType, uint256 reputation);

```

</details> 
 


 ### <a name="NC-17"></a>[NC-17]
 ### Events should use parameters to convey information

#### Impact:
Using parameters in events can provide additional information to subscribers about the event occurrence.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

40:         emit EmergencyStopActivated();

46:         emit EmergencyStopDeactivated();

```

</details> 
 


 ### <a name="NC-18"></a>[NC-18]
 ### contracts should use fixed compiler versions
To prevent the contracts being deployed and behaving differently depending on the compiler version, it is recommended to use fixed solidity versions for contracts and libraries. Although we can configure a specific version through config (like hardhat, forge config files), it is recommended to set the fixed version in the solidity pragma directly before deploying to the mainnet.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: Collateral.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: CollateralMarket.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: LoanAgreement.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: LoanMarketplace.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: UserRegistry.sol

2: pragma solidity ^0.8.0;

```

</details> 
 


 ### <a name="NC-19"></a>[NC-19]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

29:     function updateFeePolicy(

38:     function pause() external onlyOwner {

44:     function unpause() external onlyOwner {

```

```solidity
File: Collateral.sol

22:     function createCollateral(uint256 loanId, string memory description) external returns (uint256 collateralId) {

29:     function linkCollateralToLoan(uint256 collateralId, uint256 loanId) external {

37:     function unlinkCollateral(uint256 collateralId) external {

```

```solidity
File: CollateralMarket.sol

30:     function createAuction(uint256 collateralId, uint256 minBid, uint256 duration) external {

38:     function placeBid(uint256 auctionId, uint256 bidAmount) external payable {

54:     function concludeAuction(uint256 auctionId) external {

```

```solidity
File: LoanAgreement.sol

25:     function createLoan(address borrower, uint256 amount, uint256 interestRate, uint256 duration) external returns (uint256 loanId) {

32:     function makePayment(uint256 loanId, uint256 amountPaid) external {

```

```solidity
File: LoanMarketplace.sol

19:     function createLoanOffer(uint256 amount, uint256 interestRate, uint256 duration) external {

25:     function takeLoanOffer(uint256 offerId) external {

```

```solidity
File: Staking.sol

17:     function stake(uint256 amount) external payable {

28:     function unstake() external {

47:     function calculateInterest(

```

```solidity
File: UserRegistry.sol

17:     function createUserProfile(UserType userType) external {

22:     function updateUserProfile(uint256 reputation) external {

```

</details> 
 


 ### <a name="NC-20"></a>[NC-20]
 ### NatSpec: function declarations should have @Notice tags
@notice is used to explain to end users what the function does, and the compiler interprets /// or /** comments as this tag if one wasn't explicitly provided.  

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

29:     function updateFeePolicy(

38:     function pause() external onlyOwner {

44:     function unpause() external onlyOwner {

```

```solidity
File: Collateral.sol

22:     function createCollateral(uint256 loanId, string memory description) external returns (uint256 collateralId) {

29:     function linkCollateralToLoan(uint256 collateralId, uint256 loanId) external {

37:     function unlinkCollateral(uint256 collateralId) external {

```

```solidity
File: CollateralMarket.sol

30:     function createAuction(uint256 collateralId, uint256 minBid, uint256 duration) external {

38:     function placeBid(uint256 auctionId, uint256 bidAmount) external payable {

54:     function concludeAuction(uint256 auctionId) external {

```

```solidity
File: LoanAgreement.sol

25:     function createLoan(address borrower, uint256 amount, uint256 interestRate, uint256 duration) external returns (uint256 loanId) {

32:     function makePayment(uint256 loanId, uint256 amountPaid) external {

```

```solidity
File: LoanMarketplace.sol

19:     function createLoanOffer(uint256 amount, uint256 interestRate, uint256 duration) external {

25:     function takeLoanOffer(uint256 offerId) external {

```

```solidity
File: Staking.sol

17:     function stake(uint256 amount) external payable {

28:     function unstake() external {

47:     function calculateInterest(

```

```solidity
File: UserRegistry.sol

17:     function createUserProfile(UserType userType) external {

22:     function updateUserProfile(uint256 reputation) external {

```

</details> 
 


 ### <a name="NC-21"></a>[NC-21]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

29:     function updateFeePolicy(

38:     function pause() external onlyOwner {

44:     function unpause() external onlyOwner {

```

```solidity
File: Collateral.sol

22:     function createCollateral(uint256 loanId, string memory description) external returns (uint256 collateralId) {

29:     function linkCollateralToLoan(uint256 collateralId, uint256 loanId) external {

37:     function unlinkCollateral(uint256 collateralId) external {

```

```solidity
File: CollateralMarket.sol

30:     function createAuction(uint256 collateralId, uint256 minBid, uint256 duration) external {

38:     function placeBid(uint256 auctionId, uint256 bidAmount) external payable {

54:     function concludeAuction(uint256 auctionId) external {

```

```solidity
File: LoanAgreement.sol

25:     function createLoan(address borrower, uint256 amount, uint256 interestRate, uint256 duration) external returns (uint256 loanId) {

32:     function makePayment(uint256 loanId, uint256 amountPaid) external {

```

```solidity
File: LoanMarketplace.sol

19:     function createLoanOffer(uint256 amount, uint256 interestRate, uint256 duration) external {

25:     function takeLoanOffer(uint256 offerId) external {

```

```solidity
File: Staking.sol

17:     function stake(uint256 amount) external payable {

28:     function unstake() external {

47:     function calculateInterest(

```

```solidity
File: UserRegistry.sol

17:     function createUserProfile(UserType userType) external {

22:     function updateUserProfile(uint256 reputation) external {

```

</details> 
 


 ### <a name="NC-22"></a>[NC-22]
 ### If-statement can be converted to a ternary

#### Impact:
The code can be made more compact while also increasing readability by converting the following `if`-statements to ternaries (e.g. `foo += (x > y) ? a : b`)

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CollateralMarket.sol

45:         if (auction.highestBidder != address(0)) {

60:         if (auction.highestBidder != address(0)) {

```

```solidity
File: LoanAgreement.sol

37:         if (loan.balanceDue == 0) {

```

</details> 
 


 ### <a name="NC-23"></a>[NC-23]
 ### Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct

#### Impact:
Combining multiple mappings into a single mapping with a struct can improve readability and maintainability of the code.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Staking.sol

11:     mapping(address => Stake) public stakes;

```

```solidity
File: UserRegistry.sol

12:     mapping(address => UserProfile) public userProfiles;

```

</details> 
 


 ### <a name="NC-24"></a>[NC-24]
 ### Consider using descriptive constants when using 0 in the code

#### Impact:
Passing zero as a function argument/Event emission can sometimes result in a security issue (e.g. passing zero as the slippage parameter). Consider using a constant variable with a descriptive name, so its clear that the 0 is intentionally being used, and for the right reasons.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Staking.sol

31:         require(stakedAmount > 0, "No funds staked");

```

```solidity
File: UserRegistry.sol

18:         userProfiles[msg.sender] = UserProfile(userType, 0);

```

</details> 
 


 ### <a name="NC-25"></a>[NC-25]
 ### Non-external/public variable names should begin with an underscore

#### Impact:
Using an underscore at the beginning of non-external/public variable names can improve code clarity and maintainability. According to the Solidity Style Guide, non-external/public variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

14:     FeePolicy public feePolicy;

```

```solidity
File: Collateral.sol

13:     uint256 private nextCollateralId;

14:     mapping(uint256 => CollateralDetails) public collaterals;

```

```solidity
File: CollateralMarket.sol

19:     uint256 private nextAuctionId;

20:     mapping(uint256 => Auction) public auctions;

```

```solidity
File: LoanAgreement.sol

17:     uint256 private nextLoanId;

18:     mapping(uint256 => LoanDetails) public loanDetails;

```

```solidity
File: LoanMarketplace.sol

13:     uint256 private nextLoanOfferId;

14:     mapping(uint256 => LoanOffer) public loanOffers;

```

```solidity
File: Staking.sol

11:     mapping(address => Stake) public stakes;

12:     uint256 public totalStaked;

```

```solidity
File: UserRegistry.sol

12:     mapping(address => UserProfile) public userProfiles;

```

</details> 
 


 ### <a name="NC-26"></a>[NC-26]
 ### Use the latest solidity version for deployment  
Upgrading to a newer Solidity release can optimize gas usage, take advantage of new features and improve overall contract efficiency. Where possible, based on compatibility requirements, it is recommended to use newer/latest solidity version to take advantage of the latest optimizations and features. You can see the latest version [here](https://soliditylang.org/blog/category/releases/)

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: Collateral.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: CollateralMarket.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: LoanAgreement.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: LoanMarketplace.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: UserRegistry.sol

2: pragma solidity ^0.8.0;

```

</details> 
 


 ### <a name="NC-27"></a>[NC-27]
 ### Constants should be defined rather than using magic numbers

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Staking.sol

52:         uint256 numYears = duration / (365 days);

```

</details> 
 


 ### <a name="NC-28"></a>[NC-28]
 ### Import Whole Files Instead of Specific Identifiers
Import declarations should import specific identifiers, rather than the whole file.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

4: import "@openzeppelin/contracts/access/Ownable.sol";

5: import "@openzeppelin/contracts/utils/Pausable.sol";

```

```solidity
File: Collateral.sol

4: import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

```

```solidity
File: CollateralMarket.sol

4: import "./Collateral.sol";

```

```solidity
File: LoanAgreement.sol

4: import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

```

</details> 
 


 ### <a name="NC-29"></a>[NC-29]
 ### Consider moving msg.sender checks to modifiers
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.  

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Collateral.sol

25:         _mint(msg.sender, collateralId); //@audit use safeMint with re-entrancy guard

30:         require(ownerOf(collateralId) == msg.sender, "Only the owner can link collateral");

38:         require(ownerOf(collateralId) == msg.sender, "Only the owner can unlink collateral");

```

```solidity
File: CollateralMarket.sol

31:         require(collateralContract.ownerOf(collateralId) == msg.sender, "Only the owner can create an auction");

33:         auctions[nextAuctionId] = Auction(collateralId, msg.sender, minBid, 0, address(0), auctionEndTime, true);

50:         auction.highestBidder = msg.sender;

51:         emit BidPlaced(auctionId, msg.sender, bidAmount);

```

```solidity
File: LoanAgreement.sol

27:         loanDetails[loanId] = LoanDetails(msg.sender, borrower, amount, interestRate, duration, amount, false);

29:         emit LoanCreated(loanId, msg.sender, borrower, amount, interestRate, duration);

34:         require(msg.sender == loan.borrower, "Only the borrower can make payments");

```

```solidity
File: LoanMarketplace.sol

20:         loanOffers[nextLoanOfferId] = LoanOffer(msg.sender, amount, interestRate, duration, true);

21:         emit LoanOfferCreated(nextLoanOfferId, msg.sender, amount, interestRate, duration);

29:         emit LoanOfferTaken(offerId, msg.sender);

```

```solidity
File: Staking.sol

22:         stakes[msg.sender].amount += amount;

23:         stakes[msg.sender].depositTime = block.timestamp;

25:         emit Staked(msg.sender, amount, block.timestamp);

29:         Stake storage userStake = stakes[msg.sender];

43:         payable(msg.sender).transfer(totalAmount);

44:         emit Unstaked(msg.sender, totalAmount);

```

```solidity
File: UserRegistry.sol

18:         userProfiles[msg.sender] = UserProfile(userType, 0);

19:         emit UserProfileCreated(msg.sender, userType);

23:         UserProfile storage profile = userProfiles[msg.sender];

25:         emit UserProfileUpdated(msg.sender, profile.userType, reputation);

```

</details> 
 


 ### <a name="NC-30"></a>[NC-30]
 ### Owner can renounce while system is paused
The contract owner or single user with a role is not prevented from renouncing the role/ownership while the contract is paused, which would cause any user assets stored in the protocol, to be locked indefinitely.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

38:     function pause() external onlyOwner {

```

</details> 
 


 ### <a name="NC-31"></a>[NC-31]
 ### Use assembly to emit events, in order to save gas
Using the [scratch space](https://github.com/Vectorized/solady/blob/30558f5402f02351b96eeb6eaf32bcea29773841/src/tokens/ERC1155.sol#L501-L504) for event arguments (two words or fewer) will save gas over needing Soliditys full abi memory expansion used for emitting normally.

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

34:         emit FeePolicyUpdated(_lendingFeeRate, _borrowingFeeRate);

40:         emit EmergencyStopActivated();

46:         emit EmergencyStopDeactivated();

```

```solidity
File: Collateral.sol

26:         emit CollateralCreated(collateralId, loanId, description);

34:         emit CollateralLinked(collateralId, loanId);

41:         emit CollateralUnlinked(collateralId);

```

```solidity
File: CollateralMarket.sol

34:         emit AuctionCreated(nextAuctionId, collateralId, minBid, auctionEndTime);

51:         emit BidPlaced(auctionId, msg.sender, bidAmount);

64:         emit AuctionConcluded(auctionId, auction.highestBidder, auction.highestBid);

```

```solidity
File: LoanAgreement.sol

29:         emit LoanCreated(loanId, msg.sender, borrower, amount, interestRate, duration);

40:         emit PaymentMade(loanId, amountPaid, loan.balanceDue);

```

```solidity
File: LoanMarketplace.sol

21:         emit LoanOfferCreated(nextLoanOfferId, msg.sender, amount, interestRate, duration);

29:         emit LoanOfferTaken(offerId, msg.sender);

```

```solidity
File: Staking.sol

25:         emit Staked(msg.sender, amount, block.timestamp);

44:         emit Unstaked(msg.sender, totalAmount);

```

```solidity
File: UserRegistry.sol

19:         emit UserProfileCreated(msg.sender, userType);

25:         emit UserProfileUpdated(msg.sender, profile.userType, reputation);

```

</details> 
 


 ### <a name="NC-32"></a>[NC-32]
 ### Long revert strings

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Collateral.sol

30:         require(ownerOf(collateralId) == msg.sender, "Only the owner can link collateral");

38:         require(ownerOf(collateralId) == msg.sender, "Only the owner can unlink collateral");

```

```solidity
File: CollateralMarket.sol

31:         require(collateralContract.ownerOf(collateralId) == msg.sender, "Only the owner can create an auction");

41:         require(bidAmount > auction.highestBid, "Bid must be higher than current highest bid");

42:         require(msg.value == bidAmount, "Bid amount and sent value must match");

```

```solidity
File: LoanAgreement.sol

34:         require(msg.sender == loan.borrower, "Only the borrower can make payments");

```

</details> 
 


## Gas Optimizations


 ### <a name="GAS-1"></a>[GAS-1]
 ### Enable IR-based code generation
By using `--via-ir` or `{"viaIR": true}`, the compiler is able to use more advanced [multi-function optimizations](https://docs.soliditylang.org/en/v0.8.17/ir-breaking-changes.html#solidity-ir-based-codegen-changes), for extra gas savings.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: Collateral.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: CollateralMarket.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: LoanAgreement.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: LoanMarketplace.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: UserRegistry.sol

2: pragma solidity ^0.8.0;

```

</details> 
 


 ### <a name="GAS-2"></a>[GAS-2]
 ### Consider using = instead of += and -= for gas efficiency
Using = instead of += and -= can save gas in certain scenarios. Consider using = when appropriate.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: LoanAgreement.sol

36:         loan.balanceDue -= amountPaid;

```

```solidity
File: Staking.sol

22:         stakes[msg.sender].amount += amount;

24:         totalStaked += amount;

41:         totalStaked -= stakedAmount;

```

</details> 
 


 ### <a name="GAS-3"></a>[GAS-3]
 ### Use >= instead of > for gas efficiency
Using >= costs less gas than >. Consider using >= when appropriate.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CollateralMarket.sol

41:         require(bidAmount > auction.highestBid, "Bid must be higher than current highest bid");

```

```solidity
File: Staking.sol

31:         require(stakedAmount > 0, "No funds staked");

```

</details> 
 


 ### <a name="GAS-4"></a>[GAS-4]
 ### Constructors can be marked payable
Payable functions cost less gas to execute, since the compiler does not have to add extra checks to ensure that a payment wasn  t provided. A constructor can safely be marked as payable, since only the deployer would be able to pass funds, and the project itself would not pass any funds.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

20:     constructor(

```

```solidity
File: Collateral.sol

16:     constructor() ERC721("Collateral", "COLL") {}

```

```solidity
File: CollateralMarket.sol

26:     constructor(address _collateralAddress) {

```

```solidity
File: LoanAgreement.sol

20:     constructor() ERC721("LoanAgreement", "LNAG") {}

```

</details> 
 


 ### <a name="GAS-5"></a>[GAS-5]
 ### Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Collateral.sol

30:         require(ownerOf(collateralId) == msg.sender, "Only the owner can link collateral");

38:         require(ownerOf(collateralId) == msg.sender, "Only the owner can unlink collateral");

```

```solidity
File: CollateralMarket.sol

31:         require(collateralContract.ownerOf(collateralId) == msg.sender, "Only the owner can create an auction");

40:         require(block.timestamp < auction.auctionEndTime, "Auction has ended");

41:         require(bidAmount > auction.highestBid, "Bid must be higher than current highest bid");

42:         require(msg.value == bidAmount, "Bid amount and sent value must match");

56:         require(block.timestamp >= auction.auctionEndTime, "Auction is not yet over");

57:         require(auction.isActive, "Auction is not active");

```

```solidity
File: LoanAgreement.sol

34:         require(msg.sender == loan.borrower, "Only the borrower can make payments");

35:         require(amountPaid <= loan.balanceDue, "Payment exceeds balance due");

```

```solidity
File: LoanMarketplace.sol

27:         require(offer.isActive, "Loan offer is not active");

```

```solidity
File: Staking.sol

31:         require(stakedAmount > 0, "No funds staked");

```

</details> 
 


 ### <a name="GAS-6"></a>[GAS-6]
 ### Reduce gas usage by moving to Solidity 0.8.19 or later
Solidity version 0.8.19 introduced a number of gas optimizations, refer to the [Solidity 0.8.19 Release Announcement](https://soliditylang.org/blog/2023/02/22/solidity-0.8.19-release-announcement) for details.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: Collateral.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: CollateralMarket.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: LoanAgreement.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: LoanMarketplace.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: UserRegistry.sol

2: pragma solidity ^0.8.0;

```

</details> 
 


 ### <a name="GAS-7"></a>[GAS-7]
 ### Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

38:     function pause() external onlyOwner {

44:     function unpause() external onlyOwner {

```

</details> 
 


 ### <a name="GAS-8"></a>[GAS-8]
 ### `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Collateral.sol

23:         collateralId = nextCollateralId++;

```

```solidity
File: CollateralMarket.sol

35:         nextAuctionId++;

```

```solidity
File: LoanAgreement.sol

26:         loanId = nextLoanId++;

```

```solidity
File: LoanMarketplace.sol

22:         nextLoanOfferId++;

```

</details> 
 


 ### <a name="GAS-9"></a>[GAS-9]
 ### require()/revert() strings longer than 32 bytes cost extra gas
Each extra memory word of bytes past the original 32 [incurs an MSTORE](https://gist.github.com/hrkrshnn/ee8fabd532058307229d65dcd5836ddc#consider-having-short-revert-strings) which costs 3 gas.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CollateralMarket.sol

40:         require(block.timestamp < auction.auctionEndTime, "Auction has ended");

42:         require(msg.value == bidAmount, "Bid amount and sent value must match");

```

```solidity
File: LoanAgreement.sol

34:         require(msg.sender == loan.borrower, "Only the borrower can make payments");

```

```solidity
File: Staking.sol

18:         require(

```

</details> 
 


 ### <a name="GAS-10"></a>[GAS-10]
 ### Structs can be packed into fewer storage slots
Each slot saved can avoid an extra Gsset (20000 gas) for the first setting of the struct. Subsequent reads as well as writes have smaller gas savings

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

9:     struct FeePolicy {

```

```solidity
File: Collateral.sol

7:     struct CollateralDetails {

```

```solidity
File: CollateralMarket.sol

9:     struct Auction {

```

```solidity
File: LoanAgreement.sol

7:     struct LoanDetails {

```

```solidity
File: LoanMarketplace.sol

5:     struct LoanOffer {

```

```solidity
File: Staking.sol

5:     struct Stake {

```

```solidity
File: UserRegistry.sol

7:     struct UserProfile {

```

</details> 
 


 ### <a name="GAS-11"></a>[GAS-11]
 ### Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency
Using uint256(1) and uint256(2) instead of true and false can save gas for certain changes. Consider using uint256(1)/uint256(2) when appropriate.

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Collateral.sol

24:         collaterals[collateralId] = CollateralDetails(loanId, description, false);

33:         collateral.isLinked = true;

40:         collateral.isLinked = false;

```

```solidity
File: CollateralMarket.sol

33:         auctions[nextAuctionId] = Auction(collateralId, msg.sender, minBid, 0, address(0), auctionEndTime, true);

59:         auction.isActive = false;

```

```solidity
File: LoanAgreement.sol

27:         loanDetails[loanId] = LoanDetails(msg.sender, borrower, amount, interestRate, duration, amount, false);

38:             loan.isPaidOff = true;

```

```solidity
File: LoanMarketplace.sol

20:         loanOffers[nextLoanOfferId] = LoanOffer(msg.sender, amount, interestRate, duration, true);

28:         offer.isActive = false;

```

</details> 
 


 ### <a name="GAS-12"></a>[GAS-12]
 ### Use != 0 instead of > for unsigned integer comparison

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CollateralMarket.sol

41:         require(bidAmount > auction.highestBid, "Bid must be higher than current highest bid");

```

```solidity
File: Staking.sol

31:         require(stakedAmount > 0, "No funds staked");

```

</details> 
 


 ### <a name="GAS-13"></a>[GAS-13]
 ### Optimize names to save gas
public/external function names and public member variable names can be optimized to save gas. See [this](https://gist.github.com/IllIllI000/a5d8b486a8259f9f77891a919febd1a9) link for an example of how it works. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save 128 gas each during deployment, and renaming functions to have lower method IDs will save 22 gas per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

*Instances (14)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Admin.sol

14:     FeePolicy public feePolicy;

32:     ) external onlyOwner {

38:     function pause() external onlyOwner {

44:     function unpause() external onlyOwner {

```

```solidity
File: Collateral.sol

14:     mapping(uint256 => CollateralDetails) public collaterals;

```

```solidity
File: CollateralMarket.sol

20:     mapping(uint256 => Auction) public auctions;

38:     function placeBid(uint256 auctionId, uint256 bidAmount) external payable {

```

```solidity
File: LoanAgreement.sol

18:     mapping(uint256 => LoanDetails) public loanDetails;

```

```solidity
File: LoanMarketplace.sol

14:     mapping(uint256 => LoanOffer) public loanOffers;

```

```solidity
File: Staking.sol

11:     mapping(address => Stake) public stakes;

12:     uint256 public totalStaked;

17:     function stake(uint256 amount) external payable {

51:     ) public pure returns (uint256) {

```

```solidity
File: UserRegistry.sol

12:     mapping(address => UserProfile) public userProfiles;

```

</details> 
 
