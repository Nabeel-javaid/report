# Report


## Medium Issues


| |Issue|Instances|
|-|:-|:-:|
| [M-1](#M-1) | Centralization Risk for trusted owners | 40 |
| [M-2](#M-2) | Unsafe use of ERC20 transferFrom() | 2 |

## Low Issues


| |Issue|Instances|
|-|:-|:-:|
| [L-1](#L-1) | complex casting | 1 |
| [L-2](#L-2) | Functions calling contracts/addresses with transfer hooks are missing reentrancy guards | 2 |
| [L-3](#L-3) | The remaining ETH may be locked in the contract after call | 27 |
| [L-4](#L-4) | decimals() is not a part of the ERC-20 standard | 3 |
| [L-5](#L-5) | name() is not a part of the ERC-20 standard | 3 |
| [L-6](#L-6) | symbol() is not a part of the ERC-20 standard | 3 |
| [L-7](#L-7) | External call recipient may consume all transaction gas | 27 |
| [L-8](#L-8) | constructor/initialize function lacks parameter validation | 3 |
| [L-9](#L-9) | Division by zero not prevented | 4 |
| [L-10](#L-10) | Empty function body | 7 |
| [L-11](#L-11) | Initializers could be front-run | 3 |
| [L-12](#L-12) | Unsafe solidity low-level call can cause gas grief attack | 27 |
| [L-13](#L-13) | Missing contract existence checks before low-level calls | 27 |
| [L-14](#L-14) | Use Ownable2Step instead of Ownable | 2 |
| [L-15](#L-15) | Owner can renounce Ownership   | 2 |
| [L-16](#L-16) | Loss of precision | 4 |
| [L-17](#L-17) | State variables not capped at reasonable values | 74 |
| [L-18](#L-18) | Some tokens may revert when large transfers are made | 6 |
| [L-19](#L-19) | Unsafe ERC20 operation(s) | 2 |
| [L-20](#L-20) | Unspecific compiler version pragma | 1 |

## Non Critical Issues


| |Issue|Instances|
|-|:-|:-:|
| [NC-1](#NC-1) | Contracts should have full test coverage | 16 |
| [NC-2](#NC-2) | Consider adding formal verification proofs | 16 |
| [NC-3](#NC-3) | Large or complicated code bases should implement invariant tests | 16 |
| [NC-4](#NC-4) | NatSpec: Interface declarations should have NatSpec descriptions | 18 |
| [NC-5](#NC-5) | NatSpec: Library declarations should have NatSpec descriptions | 3 |
| [NC-6](#NC-6) | Variables without visibility specifier | 65 |
| [NC-7](#NC-7) | Array is push()ed but not pop()ed | 3 |
| [NC-8](#NC-8) | Constants in comparisons should appear on the left side | 37 |
| [NC-9](#NC-9) | constants should be defined rather than using magic numbers | 7 |
| [NC-10](#NC-10) | Contract declarations should have NatSpec @author annotations | 6 |
| [NC-11](#NC-11) | Contract declarations should have NatSpec @Title annotations | 6 |
| [NC-12](#NC-12) | NatSpec: Contract declarations should have @dev tags | 6 |
| [NC-13](#NC-13) | NatSpec: Contract declarations should have NatSpec descriptions | 6 |
| [NC-14](#NC-14) | NatSpec: Contract declarations should have @notice tags | 6 |
| [NC-15](#NC-15) | Consider using delete rather than assigning zero to clear value | 18 |
| [NC-16](#NC-16) | Consider using delete rather than assigning false to clear value | 10 |
| [NC-17](#NC-17) | Consider adding a block/deny-list" | 6 |
| [NC-18](#NC-18) | Consider adding emergency-stop functionality | 6 |
| [NC-19](#NC-19) | NatSpec: Event declarations should have NatSpec descriptions | 67 |
| [NC-20](#NC-20) | contracts should use fixed compiler versions | 6 |
| [NC-21](#NC-21) | NatSpec: function declarations should have NatSpec descriptions | 114 |
| [NC-22](#NC-22) | NatSpec: function declarations should have @Notice tags | 114 |
| [NC-23](#NC-23) | NatSpec: function declarations should have NatSpec descriptions | 114 |
| [NC-24](#NC-24) | Order of Functions Does Not Follow Solidity Style Guide | 6 |
| [NC-25](#NC-25) | If-statement can be converted to a ternary | 75 |
| [NC-26](#NC-26) | Contract Does Not Implement Any Interfaces | 7 |
| [NC-27](#NC-27) | Large multiples of ten should use scientific notation | 2 |
| [NC-28](#NC-28) | Consider using named mappings | 50 |
| [NC-29](#NC-29) | Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct | 50 |
| [NC-30](#NC-30) | Use of override is unnecessary | 3 |
| [NC-31](#NC-31) | Consider using descriptive constants when using 0 in the code | 28 |
| [NC-32](#NC-32) | Non-external/public variable names should begin with an underscore | 64 |
| [NC-33](#NC-33) | Use the latest solidity version for deployment   | 16 |
| [NC-34](#NC-34) | Use uint256/int256 Instead of uint/int | 3 |
| [NC-35](#NC-35) | Consider bounding input array length | 7 |
| [NC-36](#NC-36) | Event is missing `indexed` fields | 12 |
| [NC-37](#NC-37) | Strings should use double quotes rather than single quotes | 1 |
| [NC-38](#NC-38) | Consider using `SafeTransferLib.safeTransferETH()` or `Address.sendValue()` for clearer semantic meaning | 27 |
| [NC-39](#NC-39) | Consider Turning Utility Contract Into a Library | 1 |
| [NC-40](#NC-40) | Variables need not be initialized to zero | 10 |
| [NC-41](#NC-41) | Import Whole Files Instead of Specific Identifiers | 20 |
| [NC-42](#NC-42) | Empty receive()/fallback() function | 4 |
| [NC-43](#NC-43) | Consider implementing two-step procedure for updation | 2 |
| [NC-44](#NC-44) | Consider moving msg.sender checks to modifiers | 41 |
| [NC-45](#NC-45) | Dont use _msgSender() if not supporting EIP-2771 | 6 |
| [NC-46](#NC-46) | Array indices should be referenced via enums rather than numeric literals | 108 |
| [NC-47](#NC-47) | <array>.length should not be looked up in every loop of a for-loop | 4 |
| [NC-48](#NC-48) | Don't initialize variables with default value | 12 |
| [NC-49](#NC-49) | Long revert strings | 12 |

## Gas Optimizations


| |Issue|Instances|
|-|:-|:-:|
| [GAS-1](#GAS-1) | Enable IR-based code generation | 16 |
| [GAS-2](#GAS-2) | Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18) | 7 |
| [GAS-3](#GAS-3) | Nesting if-statements is cheaper than using && | 37 |
| [GAS-4](#GAS-4) | Consider using = instead of += and -= for gas efficiency | 25 |
| [GAS-5](#GAS-5) | Use >= instead of > for gas efficiency | 13 |
| [GAS-6](#GAS-6) | Using bools for storage incurs overhead | 25 |
| [GAS-7](#GAS-7) | Cache array length outside of loop | 7 |
| [GAS-8](#GAS-8) | Use calldata instead of memory for function arguments that do not get mutated | 3 |
| [GAS-9](#GAS-9) | Consider using assembly for simple zero checks to save gas | 6 |
| [GAS-10](#GAS-10) | Expressions for constant values should use immutable rather than constant | 5 |
| [GAS-11](#GAS-11) | Constructors can be marked payable | 3 |
| [GAS-12](#GAS-12) | Use Custom Errors | 50 |
| [GAS-13](#GAS-13) | Initializers can be marked as payable to save deployment gas | 3 |
| [GAS-14](#GAS-14) | Avoid fetching a low-level calls return data by using assembly | 27 |
| [GAS-15](#GAS-15) | Reduce gas usage by moving to Solidity 0.8.19 or later | 16 |
| [GAS-16](#GAS-16) | Functions guaranteed to revert when called by normal users can be marked `payable` | 5 |
| [GAS-17](#GAS-17) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 23 |
| [GAS-18](#GAS-18) | Using `private` rather than `public` for constants, saves gas | 3 |
| [GAS-19](#GAS-19) | require()/revert() strings longer than 32 bytes cost extra gas | 29 |
| [GAS-20](#GAS-20) | Splitting require() statements that use && saves gas | 18 |
| [GAS-21](#GAS-21) | Structs can be packed into fewer storage slots | 10 |
| [GAS-22](#GAS-22) | Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency | 64 |
| [GAS-23](#GAS-23) | Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead | 8 |
| [GAS-24](#GAS-24) | Use != 0 instead of > for unsigned integer comparison | 13 |
| [GAS-25](#GAS-25) | Optimize names to save gas | 69 |

##################################################################### 
 
 DETAILED REPORT:: 


##################################################################### 


## Medium Issues


 ### <a name="M-1"></a>[M-1]
 ### Centralization Risk for trusted owners

#### Impact:
Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (40)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

59:     ) internal onlyRole(DEFAULT_ADMIN_ROLE) override {

65:     ) external onlyRole(DEFAULT_ADMIN_ROLE) payable {

71:     ) external onlyRole(DEFAULT_ADMIN_ROLE) payable {

81:     ) external onlyRole(DEFAULT_ADMIN_ROLE) payable {

94:     ) external onlyRole(DEFAULT_ADMIN_ROLE) payable {

104:     ) external onlyRole(DEFAULT_ADMIN_ROLE) payable {

111:     function socialAuth(

114:     ) external onlyRole(DEFAULT_ADMIN_ROLE) payable {

152:     ) external payable onlyRole(DIAMOND_CONTRACT) {

180:     ) external onlyRole(DIAMOND_CONTRACT) payable {

192:     ) external onlyRole(DIAMOND_CONTRACT) payable {

203:     ) external onlyRole(DIAMOND_CONTRACT) payable {

213:     ) external onlyRole(DIAMOND_CONTRACT) payable {

495:     ) external onlyRole(DEFAULT_ADMIN_ROLE) {

```

```solidity
File: contracts/ownedPool.sol

8: contract ownedPool is ERC20, AccessControl, ReentrancyGuard {

96:     ) public payable onlyRole(DIAMOND_ADMIN) nonReentrant LockThePool returns(

313:     ) external onlyRole(DIAMOND_ADMIN) nonReentrant LockThePool returns (

327:     ) external onlyRole(DIAMOND_ADMIN) nonReentrant LockThePool {

340:     ) external onlyRole(DIAMOND_ADMIN) LockThePool {

349:     ) external onlyRole(DIAMOND_ADMIN) nonReentrant LockThePool returns(

363:     ) external onlyRole(DIAMOND_ADMIN) nonReentrant LockThePool returns(

382:     ) external onlyRole(DIAMOND_ADMIN) nonReentrant LockThePool {

390:     ) external onlyRole(DIAMOND_ADMIN) nonReentrant {

406:     ) external onlyRole(DIAMOND_ADMIN) {

416:     ) external onlyRole(DIAMOND_ADMIN) LockThePool {

426:     ) external onlyRole(DIAMOND_ADMIN) {

```

```solidity
File: contracts/ownedPoolContract.sol

21:     ) internal override onlyRole(UPGRADER_ROLE) {

24:     function createOwnedPool(address _token, address buyer, uint256 _discountPercent, address owner) external onlyRole(DEFAULT_ADMIN_ROLE) returns(address){

30:     function updateInterfaceAddress(address newInterface) external onlyRole(UPGRADER_ROLE) {

```

```solidity
File: contracts/publicPool.sol

10: contract publicPool is ERC20, AccessControl, ReentrancyGuard {

89:     ) public payable onlyRole(DIAMOND_ADMIN) nonReentrant LockThePool returns(

252:     ) external onlyRole(DIAMOND_ADMIN) {

279:     ) external view onlyRole(DIAMOND_ADMIN) {

285:     ) external onlyRole(DIAMOND_ADMIN) returns(

```

```solidity
File: contracts/publicPoolContract.sol

22:     ) internal override onlyRole(UPGRADER_ROLE) {

25:     function createPublicPool(address _token, uint256 _tokenAmount, address owner) external onlyRole(UPGRADER_ROLE) returns(address){

31:     function updateInterfaceAddress(address newInterface) external onlyRole(UPGRADER_ROLE) {

```

```solidity
File: contracts/resellerCommunityRewards.sol

6: contract resellerCommunityRewards is Ownable {

27:     constructor(address CARATS, address stakingContract, address DSMain) Ownable(msg.sender) {

67:     function distribute() public onlyOwner returns(uint256) {

```

</details> 
 


 ### <a name="M-2"></a>[M-2]
 ### Unsafe use of ERC20 transferFrom()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transferFrom() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransferFrom() from OpenZeppelin instead.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/resellerCommunityRewards.sol

43:         ERC20($CARATS).transferFrom(msg.sender, address(this), amount);

64:         ERC20($CARATS).transferFrom(address(this), msg.sender, amount);

```

</details> 
 


## Low Issues


 ### <a name="L-1"></a>[L-1]
 ### complex casting
Consider whether the number of casts is really necessary, or whether using a different type would be more appropriate. Alternatively, add comments to explain in detail why the casts are necessary, and any implicit reasons why the cast does not introduce an overflow.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

402:             (pools[pool].fixedPricePerToken[pool] > uint256(0) ? "Market" : "Fixed"),

```

</details> 
 


 ### <a name="L-2"></a>[L-2]
 ### Functions calling contracts/addresses with transfer hooks are missing reentrancy guards
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks will open the users of this protocol up to [read-only reentrancies](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) with no way to protect against it, except by block-listing the whole protocol.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/resellerCommunityRewards.sol

43:         ERC20($CARATS).transferFrom(msg.sender, address(this), amount);

64:         ERC20($CARATS).transferFrom(address(this), msg.sender, amount);

```

</details> 
 


 ### <a name="L-3"></a>[L-3]
 ### The remaining ETH may be locked in the contract after call
After calling an external contract and forwards some ETH value, the contract balance should be checked. If there is excess eth left over due to a failed call, or more eth being delivered than needed, or any other reason, this eth must be refunded to the user or handled appropriately, otherwise the eth may be frozen in the contract forever.

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

73:         (bool success, ) = address(PlatformInfo.FraudFundsWallet).call{value: users[userWallet].claimableETH}("");

450:         (bool success, ) = address(msg.sender).call{value: amount}("");

```

```solidity
File: contracts/ownedPool.sol

266:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

268:             (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

270:             (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

272:             (success, ) = payable(ResellerCommunityRewards).call{value: resellerCommunityFee}("");

274:             (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

280:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

282:                 (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

284:                 (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

289:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

291:                 (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

293:                 (success, ) = payable(ResellerCommunityRewards).call{value: resellerCommunityFee}("");

295:                 (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

301:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

303:             (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

```

```solidity
File: contracts/publicPool.sol

137:         (bool success, ) = payable(_DiamondInterface).call{value: newPrice}("");

140:             (success, ) = payable(_to).call{value: (returnETH)}("ETH Returned to Sender");

209:             (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

213:             (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

217:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

223:                 (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

227:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

232:                 (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

236:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

242:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

```

```solidity
File: contracts/resellerCommunityRewards.sol

72:                 (bool success, ) = payable(diamondSwap).call{value: rewardsPoolAmount}("");

```

</details> 
 


 ### <a name="L-4"></a>[L-4]
 ### decimals() is not a part of the ERC-20 standard
The name() function is not a part of the ERC-20 standard, and was added later as an optional extension. As such, some valid ERC20 tokens do not support this interface, so it is unsafe to blindly cast all tokens to this interface, and then call this function.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

333:             emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(poolData[0]).name(), ERC20Upgradeable(poolData[0]).symbol(), ERC20Upgradeable(poolData[0]).decimals());

362:                     emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(token).name(), ERC20Upgradeable(token).symbol(), ERC20Upgradeable(token).decimals());

406:             ERC20Upgradeable(tokenAddress).decimals()

```

</details> 
 


 ### <a name="L-5"></a>[L-5]
 ### name() is not a part of the ERC-20 standard
The name() function is not a part of the ERC-20 standard, and was added later as an optional extension. As such, some valid ERC20 tokens do not support this interface, so it is unsafe to blindly cast all tokens to this interface, and then call this function.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

333:             emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(poolData[0]).name(), ERC20Upgradeable(poolData[0]).symbol(), ERC20Upgradeable(poolData[0]).decimals());

362:                     emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(token).name(), ERC20Upgradeable(token).symbol(), ERC20Upgradeable(token).decimals());

404:             ERC20Upgradeable(tokenAddress).name(),

```

</details> 
 


 ### <a name="L-6"></a>[L-6]
 ### symbol() is not a part of the ERC-20 standard
The name() function is not a part of the ERC-20 standard, and was added later as an optional extension. As such, some valid ERC20 tokens do not support this interface, so it is unsafe to blindly cast all tokens to this interface, and then call this function.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

333:             emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(poolData[0]).name(), ERC20Upgradeable(poolData[0]).symbol(), ERC20Upgradeable(poolData[0]).decimals());

362:                     emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(token).name(), ERC20Upgradeable(token).symbol(), ERC20Upgradeable(token).decimals());

405:             ERC20Upgradeable(tokenAddress).symbol(),

```

</details> 
 


 ### <a name="L-7"></a>[L-7]
 ### External call recipient may consume all transaction gas
There is no limit specified on the amount of gas used, so the recipient can use up all of the transactions gas, causing it to revert. Use addr.call{gas: <amount>}("") or this https://github.com/nomad-xyz/ExcessivelySafeCall library instead.  

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

73:         (bool success, ) = address(PlatformInfo.FraudFundsWallet).call{value: users[userWallet].claimableETH}("");

450:         (bool success, ) = address(msg.sender).call{value: amount}("");

```

```solidity
File: contracts/ownedPool.sol

266:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

268:             (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

270:             (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

272:             (success, ) = payable(ResellerCommunityRewards).call{value: resellerCommunityFee}("");

274:             (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

280:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

282:                 (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

284:                 (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

289:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

291:                 (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

293:                 (success, ) = payable(ResellerCommunityRewards).call{value: resellerCommunityFee}("");

295:                 (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

301:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

303:             (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

```

```solidity
File: contracts/publicPool.sol

137:         (bool success, ) = payable(_DiamondInterface).call{value: newPrice}("");

140:             (success, ) = payable(_to).call{value: (returnETH)}("ETH Returned to Sender");

209:             (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

213:             (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

217:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

223:                 (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

227:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

232:                 (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

236:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

242:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

```

```solidity
File: contracts/resellerCommunityRewards.sol

72:                 (bool success, ) = payable(diamondSwap).call{value: rewardsPoolAmount}("");

```

</details> 
 


 ### <a name="L-8"></a>[L-8]
 ### constructor/initialize function lacks parameter validation
Constructors and initialization functions play a critical role in contracts by setting important initial states when the contract is first deployed before the system starts. The parameters passed to the constructor and initialization functions directly affect the behavior of the contract / protocol. If incorrect parameters are provided, the system may fail to run, behave abnormally, be unstable, or lack security. Therefore, it's crucial to carefully check each parameter in the constructor and initialization functions. If an exception is found, the transaction should be rolled back.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

27:     function initialize(address publicPoolCreator, address ownedPoolCreator, address stakingContract, address carats) initializer public payable {

```

```solidity
File: contracts/ownedPoolContract.sol

11:     function initialize() initializer public {

```

```solidity
File: contracts/publicPoolContract.sol

12:     function initialize() initializer public {

```

</details> 
 


 ### <a name="L-9"></a>[L-9]
 ### Division by zero not prevented
The divisions below take an input parameter that has no zero-value checks, which can cause the functions reverting if zero is passed.  

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

257:             pools[_addresses[0]].fixedPricePerToken[newPool] = (fixedEthPrice * 10**18) / amount;

```

```solidity
File: contracts/ownedPool.sol

410:         pricePerTokenWei = (weiAmount * 10**18) / amount;

```

```solidity
File: contracts/publicPool.sol

105:         uint256 pricePerToken = (newPrice * 10**18) / amount;

163:         tokenAmount = price / weiPerToken;

```

</details> 
 


 ### <a name="L-10"></a>[L-10]
 ### Empty function body
Consider adding a comment about why the function body is empty

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

53:     receive() external payable {

59:     ) internal onlyRole(DEFAULT_ADMIN_ROLE) override {

```

```solidity
File: contracts/ownedPool.sol

85:     receive() external payable {

```

```solidity
File: contracts/ownedPoolContract.sol

21:     ) internal override onlyRole(UPGRADER_ROLE) {

```

```solidity
File: contracts/publicPool.sol

78:     receive() external payable {

```

```solidity
File: contracts/publicPoolContract.sol

22:     ) internal override onlyRole(UPGRADER_ROLE) {

```

```solidity
File: contracts/resellerCommunityRewards.sol

37:     receive() external payable {

```

</details> 
 


 ### <a name="L-11"></a>[L-11]
 ### Initializers could be front-run
Initializers could be front-run, allowing an attacker to either set their own values, take ownership of the contract, and in the best case forcing a re-deployment

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

27:     function initialize(address publicPoolCreator, address ownedPoolCreator, address stakingContract, address carats) initializer public payable {

```

```solidity
File: contracts/ownedPoolContract.sol

11:     function initialize() initializer public {

```

```solidity
File: contracts/publicPoolContract.sol

12:     function initialize() initializer public {

```

</details> 
 


 ### <a name="L-12"></a>[L-12]
 ### Unsafe solidity low-level call can cause gas grief attack
Using the low-level calls of a solidity address can leave the contract open to gas grief attacks. These attacks occur when the called contract returns a large amount of data. So when calling an external contract, it is necessary to check the length of the return data before reading/copying it (using returndatasize()).

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

73:         (bool success, ) = address(PlatformInfo.FraudFundsWallet).call{value: users[userWallet].claimableETH}("");

450:         (bool success, ) = address(msg.sender).call{value: amount}("");

```

```solidity
File: contracts/ownedPool.sol

266:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

268:             (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

270:             (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

272:             (success, ) = payable(ResellerCommunityRewards).call{value: resellerCommunityFee}("");

274:             (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

280:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

282:                 (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

284:                 (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

289:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

291:                 (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

293:                 (success, ) = payable(ResellerCommunityRewards).call{value: resellerCommunityFee}("");

295:                 (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

301:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

303:             (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

```

```solidity
File: contracts/publicPool.sol

137:         (bool success, ) = payable(_DiamondInterface).call{value: newPrice}("");

140:             (success, ) = payable(_to).call{value: (returnETH)}("ETH Returned to Sender");

209:             (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

213:             (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

217:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

223:                 (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

227:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

232:                 (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

236:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

242:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

```

```solidity
File: contracts/resellerCommunityRewards.sol

72:                 (bool success, ) = payable(diamondSwap).call{value: rewardsPoolAmount}("");

```

</details> 
 


 ### <a name="L-13"></a>[L-13]
 ### Missing contract existence checks before low-level calls
Low-level calls return success if there is no code present at the specified address. In addition to the zero-address checks, add a check to verify that `<address>.code.length > 0`.

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

73:         (bool success, ) = address(PlatformInfo.FraudFundsWallet).call{value: users[userWallet].claimableETH}("");

450:         (bool success, ) = address(msg.sender).call{value: amount}("");

```

```solidity
File: contracts/ownedPool.sol

266:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

268:             (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

270:             (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

272:             (success, ) = payable(ResellerCommunityRewards).call{value: resellerCommunityFee}("");

274:             (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

280:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

282:                 (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

284:                 (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

289:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

291:                 (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

293:                 (success, ) = payable(ResellerCommunityRewards).call{value: resellerCommunityFee}("");

295:                 (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

301:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

303:             (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

```

```solidity
File: contracts/publicPool.sol

137:         (bool success, ) = payable(_DiamondInterface).call{value: newPrice}("");

140:             (success, ) = payable(_to).call{value: (returnETH)}("ETH Returned to Sender");

209:             (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

213:             (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

217:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

223:                 (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

227:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

232:                 (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

236:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

242:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

```

```solidity
File: contracts/resellerCommunityRewards.sol

72:                 (bool success, ) = payable(diamondSwap).call{value: rewardsPoolAmount}("");

```

</details> 
 


 ### <a name="L-14"></a>[L-14]
 ### Use Ownable2Step instead of Ownable
Add a description of why Ownable2Step is recommended.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/resellerCommunityRewards.sol

6: contract resellerCommunityRewards is Ownable {

27:     constructor(address CARATS, address stakingContract, address DSMain) Ownable(msg.sender) {

```

</details> 
 


 ### <a name="L-15"></a>[L-15]
 ### Owner can renounce Ownership  
Each of the following contracts implements or inherits the renounceOwnership() function. This can represent a certain risk if the ownership is renounced for any other reason than by design. Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/resellerCommunityRewards.sol

6: contract resellerCommunityRewards is Ownable {

27:     constructor(address CARATS, address stakingContract, address DSMain) Ownable(msg.sender) {

```

</details> 
 


 ### <a name="L-16"></a>[L-16]
 ### Loss of precision
Division by large numbers or variables may result in the result being zero, due to Solidity not supporting fractions.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

257:             pools[_addresses[0]].fixedPricePerToken[newPool] = (fixedEthPrice * 10**18) / amount;

```

```solidity
File: contracts/ownedPool.sol

410:         pricePerTokenWei = (weiAmount * 10**18) / amount;

```

```solidity
File: contracts/publicPool.sol

105:         uint256 pricePerToken = (newPrice * 10**18) / amount;

163:         tokenAmount = price / weiPerToken;

```

</details> 
 


 ### <a name="L-17"></a>[L-17]
 ### State variables not capped at reasonable values
Consider adding minimum/maximum value checks to ensure that the state variables below can never be used to excessively harm users, including via griefing

*Instances (74)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/libraries/DiamondStructs.sol

10:     struct UserInfo {

11:         uint256 claimableETH; // ETH in users account

12:         uint256 totalETHEarned; // Total amount of ETH earned by user

13:         bool locked; // Lock specific user from withdrawing funds

14:         string verifiedUser; // List users kyc'd name, i.e. twitter or tg @'s

15:         uint256 offeredPoolsCount; // Number of offered pools

16:         uint256 ownedPoolsCount; // Number of user's purchased pools

46:     struct TwitterUsers {

47:         bool isVerified;

48:         address userAddress;

56:     struct PoolInfo {

57:         bool isPool; // first initialized upon first pool creation

58:         bool isVerified; // Verified owner of token, admin update only

61:         mapping (address => uint256) projectClaimableETH; // Amount of ETH claimable for the verified project owners

62:         address publicPoolAddress; // Returns many to many pool address

63:         uint256 projectFee; // Percentage of fee allocated to project owner

85:     struct VestingInfo {

86:         uint256 distributionPercent; // % to be distributed at each release point

87:         uint256 distributionSchedule; // how often tokens will be distributed

92:     struct SearchData {

93:         address poolAddress;

94:         address tokenAddress;

95:         string tokenName;

96:         string symbol;

97:         uint8 decimals;

99:         uint256[6] tokenInformation; // Percent, Schedule, Initial, Discount, Fixed price, Token Amount

100:         bool hiddenCheck;

104:     struct SearchDataPurchasedPools {

105:         address poolAddress;

106:         address tokenAddress;

107:         string tokenName;

108:         string symbol;

109:         uint8 decimals;

112:         uint256[6] tokenInformation; // Percent, Schedule, Initial, Discount, Fixed price, Token Amount

115:         uint256[] timestamp; // timestamp of buyers purchase

116:         uint256 amountPaid; // WEI paid for pool by Buyer

120:     struct SearchUserCreatedPools {

121:         address poolAddress;

122:         address tokenAddress;

123:         string tokenName;

124:         string symbol;

125:         uint8 decimals;

128:         uint256[5] poolInformation; // Tokens For Sale, Tokens Sold, Total Amount Contributed, ETH Earned, placeInLine

131:         uint256[] purchaseTimestamp; // timestamp of buyers purchase

137:         address payable FraudFundsWallet;

138:         address CARATS;

139:         address stakingContract;

140:         uint256 DiamondFee;

141:         address priceOracle;

142:         address ownedPoolContract;

152:         mapping (address => EnumerableSetUpgradeable.AddressSet) publicPoolArray; // Mapped token to pool address

```

```solidity
File: contracts/ownedPool.sol

107:         checkAmounts(price, amount);

108:         uint256 reservedTokens;

161:     ) internal view {

162:         uint256 weiPerToken;

163:         uint256 tokenAmount;

262:         diamondFee -= (projectFee + resellerFee + resellerCommunityFee);

275:             require(success, "Failed to send ETH");

285:                 require(success, "Failed to send ETH");

296:                 require(success, "Failed to send ETH");

304:             require(success, "Failed to send ETH");

```

```solidity
File: contracts/publicPool.sol

103:         uint256 transferAmount = amount;

105:         uint256 pricePerToken = (newPrice * 10**18) / amount;

108:         for(uint loopCounter = 0; transferAmount != 0 && loopCounter <= 100; loopCounter++) {

109:             uint256 _contributorAmount;

157:     ) internal view {

158:         uint256 weiPerToken;

159:         uint256 tokenAmount;

204:         diamondFee -= (projectFee + resellerFee);

218:             require(success, "Failed to send Diamond Fee");

228:                 require(success, "Failed to send Diamond Fee");

237:                 require(success, "Failed to send Diamond Fee");

243:             require(success, "Failed to send Diamond Fee");

```

```solidity
File: contracts/resellerCommunityRewards.sol

86:     function shareHoldersCount() external view returns(uint256) {

```

</details> 
 


 ### <a name="L-18"></a>[L-18]
 ### Some tokens may revert when large transfers are made
Tokens such as COMP or UNI will revert when an address balance reaches type(uint96).max. Ensure that the calls below can be broken up into smaller batches if necessary.  

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ownedPool.sol

142:             IERC20(_token).safeTransfer(_to, initialAmount);

146:             IERC20(_token).safeTransfer(_to, amount);

319:         IERC20(_token).safeTransfer(user, claimableAmount);

372:         IERC20(_token).safeTransfer(address(User), amount);

```

```solidity
File: contracts/publicPool.sol

143:         IERC20(_token).safeTransfer(_to, (_amount));

296:         IERC20(_token).safeTransfer(address(User), amount);

```

</details> 
 


 ### <a name="L-19"></a>[L-19]
 ### Unsafe ERC20 operation(s)

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/resellerCommunityRewards.sol

43:         ERC20($CARATS).transferFrom(msg.sender, address(this), amount);

64:         ERC20($CARATS).transferFrom(address(this), msg.sender, amount);

```

</details> 
 


 ### <a name="L-20"></a>[L-20]
 ### Unspecific compiler version pragma

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/interface/IOracle.sol

3: pragma solidity >=0.7.6;

```

</details> 
 


## Non Critical Issues


 ### <a name="NC-1"></a>[NC-1]
 ### Contracts should have full test coverage
While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/interface/IDiamondContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IDiamondEvents.sol

1: pragma solidity 0.8.15;

```

```solidity
File: contracts/interface/IDiamondStaking.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IDiamondSwap.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IOracle.sol

3: pragma solidity >=0.7.6;

```

```solidity
File: contracts/interface/IOwnedPoolContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IPublicPoolContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/libraries/DiamondEvents.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/libraries/DiamondStructs.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/ownedPool.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/ownedPoolContract.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/publicPool.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/publicPoolContract.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/resellerCommunityRewards.sol

2: pragma solidity 0.8.20;

```

</details> 
 


 ### <a name="NC-2"></a>[NC-2]
 ### Consider adding formal verification proofs
Consider using formal verification to mathematically prove that your code does what is intended, and does not have any edge cases with unexpected behavior. The solidity compiler itself has this functionality [built in](https://docs.soliditylang.org/en/latest/smtchecker.html#smtchecker-and-formal-verification)  

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/interface/IDiamondContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IDiamondEvents.sol

1: pragma solidity 0.8.15;

```

```solidity
File: contracts/interface/IDiamondStaking.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IDiamondSwap.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IOracle.sol

3: pragma solidity >=0.7.6;

```

```solidity
File: contracts/interface/IOwnedPoolContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IPublicPoolContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/libraries/DiamondEvents.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/libraries/DiamondStructs.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/ownedPool.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/ownedPoolContract.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/publicPool.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/publicPoolContract.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/resellerCommunityRewards.sol

2: pragma solidity 0.8.20;

```

</details> 
 


 ### <a name="NC-3"></a>[NC-3]
 ### Large or complicated code bases should implement invariant tests
Large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts, should implement [invariant fuzzing tests](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05). Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold. Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers, with properly and extensively-written invariants, can close this testing gap significantly.  

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/interface/IDiamondContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IDiamondEvents.sol

1: pragma solidity 0.8.15;

```

```solidity
File: contracts/interface/IDiamondStaking.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IDiamondSwap.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IOracle.sol

3: pragma solidity >=0.7.6;

```

```solidity
File: contracts/interface/IOwnedPoolContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IPublicPoolContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/libraries/DiamondEvents.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/libraries/DiamondStructs.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/ownedPool.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/ownedPoolContract.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/publicPool.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/publicPoolContract.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/resellerCommunityRewards.sol

2: pragma solidity 0.8.20;

```

</details> 
 


 ### <a name="NC-4"></a>[NC-4]
 ### NatSpec: Interface declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

7: import "./contracts/interface/IPublicPoolContract.sol";

8: import "./contracts/interface/IOwnedPoolContract.sol";

9: import "./contracts/interface/IDiamondContract.sol";

10: import "./contracts/interface/IDiamondStaking.sol";

```

```solidity
File: contracts/interface/IDiamondContract.sol

3: 

```

```solidity
File: contracts/interface/IDiamondEvents.sol

4: 

```

```solidity
File: contracts/interface/IDiamondStaking.sol

3: 

```

```solidity
File: contracts/interface/IDiamondSwap.sol

3: 

```

```solidity
File: contracts/interface/IOracle.sol

6: 

```

```solidity
File: contracts/interface/IOwnedPoolContract.sol

3: 

```

```solidity
File: contracts/interface/IPublicPoolContract.sol

3: 

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

9: import "../interface/IDiamondStaking.sol";

```

```solidity
File: contracts/ownedPool.sol

5: import "./interface/IOracle.sol";

6: import "./interface/IDiamondSwap.sol";

```

```solidity
File: contracts/publicPool.sol

5: import "./interface/IDiamondSwap.sol";

6: import "./interface/IDiamondContract.sol";

7: import "./interface/IOracle.sol";

```

```solidity
File: contracts/resellerCommunityRewards.sol

4: import "./interface/IDiamondSwap.sol";

```

</details> 
 


 ### <a name="NC-5"></a>[NC-5]
 ### NatSpec: Library declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/libraries/DiamondEvents.sol

5: library DiamondEvents {

```

```solidity
File: contracts/libraries/DiamondStructs.sol

6: library DiamondStructs {

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

11: library UpdateDiamondStruct {

```

</details> 
 


 ### <a name="NC-6"></a>[NC-6]
 ### Variables without visibility specifier

#### Impact:
Specifying visibility for variables can improve code readability and maintainability.

*Instances (65)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/libraries/DiamondStructs.sol

11:         uint256 claimableETH; // ETH in users account

12:         uint256 totalETHEarned; // Total amount of ETH earned by user

13:         bool locked; // Lock specific user from withdrawing funds

14:         string verifiedUser; // List users kyc'd name, i.e. twitter or tg @'s

15:         uint256 offeredPoolsCount; // Number of offered pools

16:         uint256 ownedPoolsCount; // Number of user's purchased pools

17:         uint256 createdPoolsCount; // Number of pools created by user

47:         bool isVerified;

48:         address userAddress;

49:         uint256 offeredPoolsCount;

57:         bool isPool; // first initialized upon first pool creation

58:         bool isVerified; // Verified owner of token, admin update only

59:         bool publicPool; // Check for many to many pool

62:         address publicPoolAddress; // Returns many to many pool address

63:         uint256 projectFee; // Percentage of fee allocated to project owner

64:         uint256 PoolsAmount; // number of pools in array

86:         uint256 distributionPercent; // % to be distributed at each release point

87:         uint256 distributionSchedule; // how often tokens will be distributed

88:         uint256 initialDistributionPercent; // % of tokens to be distributed initally

93:         address poolAddress;

94:         address tokenAddress;

95:         string tokenName;

96:         string symbol;

97:         uint8 decimals;

98:         uint PoolType;

100:         bool hiddenCheck;

101:         uint256 poolCreatedTimestamp;

105:         address poolAddress;

106:         address tokenAddress;

107:         string tokenName;

108:         string symbol;

109:         uint8 decimals;

110:         uint PoolType;

113:         bool hiddenCheck;

116:         uint256 amountPaid; // WEI paid for pool by Buyer

117:         uint256 poolCreatedTimestamp;

121:         address poolAddress;

122:         address tokenAddress;

123:         string tokenName;

124:         string symbol;

125:         uint8 decimals;

126:         uint PoolType;

129:         bool hiddenCheck;

132:         uint256 poolCreatedTimestamp;

138:         address CARATS;

139:         address stakingContract;

140:         uint256 DiamondFee;

141:         address priceOracle;

142:         address ownedPoolContract;

143:         address publicPoolContract;

153:         uint256 poolCount;

```

```solidity
File: contracts/ownedPool.sol

108:         uint256 reservedTokens;

109:         bool twitterPurchase;

162:         uint256 weiPerToken;

163:         uint256 tokenAmount;

164:         uint256 rangeAmount;

263:         bool success;

```

```solidity
File: contracts/publicPool.sol

104:         uint256 totalETHSent;

106:         uint256 returnETH;

109:             uint256 _contributorAmount;

110:             uint256 contributorETH;

158:         uint256 weiPerToken;

159:         uint256 tokenAmount;

160:         uint256 rangeAmount;

205:         bool success;

```

</details> 
 


 ### <a name="NC-7"></a>[NC-7]
 ### Array is push()ed but not pop()ed

#### Impact:
Array entries are added but are never removed. Consider whether this should be the case, or whether there should be a maximum, or whether old entries should be removed.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

383:         User.vestingTimestamps[pool].push(vestingTime);

```

```solidity
File: contracts/publicPool.sol

259:             contributors.push(user);

```

```solidity
File: contracts/resellerCommunityRewards.sol

46:             ShareHolders.push(msg.sender);

```

</details> 
 


 ### <a name="NC-8"></a>[NC-8]
 ### Constants in comparisons should appear on the left side

#### Impact:
Placing constants on the left side of comparisons can improve code readability and prevent accidental assignment. Doing so will prevent typo [bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*Instances (37)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

229:         if(twitterAmounts[0] > 0) {

239:         if(specificAmounts[0] > 0) {

311:             if(poolType != 3) {

313:                 if(vestingData[0] == 0 && vestingData[1] == 0 && vestingData[2] == 0 && priceParams[0] > 0) {

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

34:             if(Handle.offeredPoolsAmount[token][pool] == 0) {

44:             if(User.offeredPoolsAmount[token][pool] == 0) {

73:         if(buyer != address(0)) {

77:             if(Pool.PublicSaleAmount[pool] == 0) {

91:             if(Pool.PublicSaleAmount[pool] == 0) {

200:         if(User.createdPoolTimestamp[_token][_pool] == 0) {

204:         if(publicAmount > 0) {

266:                 if(claimableAmountForThisPurchase >= User.vestedTokens[poolAddress][User.vestingTimestamps[poolAddress][i]]) {

303:                 if (claimableAmountForThisPurchase >= User.vestedTokens[poolAddress][User.vestingTimestamps[poolAddress][i]]) {

331:         if(reservedAmount[0] > 0) {

397:         if(pool != address(0) && token != address(0)){

```

```solidity
File: contracts/ownedPool.sol

110:         if(twitterReserved && twitterHandle[handle] > 0) {

147:             if(_balance == 0) {

169:         if(discountPercent > 0) {

199:        if(ResellerFee > 0) {

216:         if(reservedTokens == 0) {

222:         } else if(amount <= reservedTokens) {

223:             if(amount == reservedTokens && twitterPurchase) {

226:                     if(twitterCounter == 0) {

238:                     if(twitterCounter == 0) {

394:         if(_specificAmount > 0) {

398:         if(poolType == 1) {

428:             if(twitterHandle[handles[i]] > 0) {

```

```solidity
File: contracts/publicPool.sol

113:             if(_contributorAmount > transferAmount) {

128:             if(contributorAmounts[contributorAddress] == 0) {

132:             if(loopCounter == 100) {

139:         if(returnETH > 0) {

144:         if(_balance == 0) {

186:        if(ResellerFee > 0) {

297:         if(_balance == 0) {

```

```solidity
File: contracts/resellerCommunityRewards.sol

57:         if(ShareHoldersAmounts[msg.sender] == 0) {

69:             if(lastProcessedIndex == 999999999) {

78:             if(lastProcessedIndex == ShareHolders.length - 1) {

```

</details> 
 


 ### <a name="NC-9"></a>[NC-9]
 ### constants should be defined rather than using magic numbers
Even [assembly](https://github.com/code-423n4/2022-05-opensea-seaport/blob/9d7ce4d08bf3c3010304a0476a785c70c0e90ae7/contracts/lib/TokenTransferrer.sol#L35-L39) can benefit from using readable constants instead of hex/numeric literals

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

41:         PlatformInfo.DiamondSwapFeeReceiver = payable(0x1E433405F8bAC770dac340FC3224297F0d119817);

42:         PlatformInfo.FraudFundsWallet = payable(0xFEFD0bCc13A0E2Acf2C0E9e4f1E451f2Fd6b2022);

46:         PlatformInfo.priceOracle = 0x0AdDd25a91563696D8567Df78D5A01C9a991F9B8;

```

```solidity
File: contracts/ownedPool.sol

75:         WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

77:         spotAggregator = IOracle(address(0x0AdDd25a91563696D8567Df78D5A01C9a991F9B8));

```

```solidity
File: contracts/publicPool.sol

60:         WETH = address(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);

62:         spotAggregator = IOracle(address(0x29BC86Ad68bB3BD3d54841a8522e0020C1882C22));

```

</details> 
 


 ### <a name="NC-10"></a>[NC-10]
 ### Contract declarations should have NatSpec @author annotations

#### Impact:
Adding a NatSpec @author annotation to contract declarations can improve code documentation.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

15: contract DiamondSwap is Initializable, ERC20Upgradeable, AccessControlUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/ownedPool.sol

8: contract ownedPool is ERC20, AccessControl, ReentrancyGuard {

```

```solidity
File: contracts/ownedPoolContract.sol

6: contract ownedPoolContract is Initializable, AccessControlUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/publicPool.sol

10: contract publicPool is ERC20, AccessControl, ReentrancyGuard {

```

```solidity
File: contracts/publicPoolContract.sol

7: contract publicPoolContract is Initializable, AccessControlUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/resellerCommunityRewards.sol

6: contract resellerCommunityRewards is Ownable {

```

</details> 
 


 ### <a name="NC-11"></a>[NC-11]
 ### Contract declarations should have NatSpec @Title annotations

#### Impact:
Adding a NatSpec @Title annotation to contract declarations can improve code documentation.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

15: contract DiamondSwap is Initializable, ERC20Upgradeable, AccessControlUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/ownedPool.sol

8: contract ownedPool is ERC20, AccessControl, ReentrancyGuard {

```

```solidity
File: contracts/ownedPoolContract.sol

6: contract ownedPoolContract is Initializable, AccessControlUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/publicPool.sol

10: contract publicPool is ERC20, AccessControl, ReentrancyGuard {

```

```solidity
File: contracts/publicPoolContract.sol

7: contract publicPoolContract is Initializable, AccessControlUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/resellerCommunityRewards.sol

6: contract resellerCommunityRewards is Ownable {

```

</details> 
 


 ### <a name="NC-12"></a>[NC-12]
 ### NatSpec: Contract declarations should have @dev tags

#### Impact:
@dev is used to explain extra details to developers

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

15: contract DiamondSwap is Initializable, ERC20Upgradeable, AccessControlUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/ownedPool.sol

8: contract ownedPool is ERC20, AccessControl, ReentrancyGuard {

```

```solidity
File: contracts/ownedPoolContract.sol

6: contract ownedPoolContract is Initializable, AccessControlUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/publicPool.sol

10: contract publicPool is ERC20, AccessControl, ReentrancyGuard {

```

```solidity
File: contracts/publicPoolContract.sol

7: contract publicPoolContract is Initializable, AccessControlUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/resellerCommunityRewards.sol

6: contract resellerCommunityRewards is Ownable {

```

</details> 
 


 ### <a name="NC-13"></a>[NC-13]
 ### NatSpec: Contract declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

15: contract DiamondSwap is Initializable, ERC20Upgradeable, AccessControlUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/ownedPool.sol

8: contract ownedPool is ERC20, AccessControl, ReentrancyGuard {

```

```solidity
File: contracts/ownedPoolContract.sol

6: contract ownedPoolContract is Initializable, AccessControlUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/publicPool.sol

10: contract publicPool is ERC20, AccessControl, ReentrancyGuard {

```

```solidity
File: contracts/publicPoolContract.sol

7: contract publicPoolContract is Initializable, AccessControlUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/resellerCommunityRewards.sol

6: contract resellerCommunityRewards is Ownable {

```

</details> 
 


 ### <a name="NC-14"></a>[NC-14]
 ### NatSpec: Contract declarations should have @notice tags
@notice is used to explain to end users what the contract does, and the compiler interprets /// or /** comments as this tag if one wasnt explicitly provided

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

15: contract DiamondSwap is Initializable, ERC20Upgradeable, AccessControlUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/ownedPool.sol

8: contract ownedPool is ERC20, AccessControl, ReentrancyGuard {

```

```solidity
File: contracts/ownedPoolContract.sol

6: contract ownedPoolContract is Initializable, AccessControlUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/publicPool.sol

10: contract publicPool is ERC20, AccessControl, ReentrancyGuard {

```

```solidity
File: contracts/publicPoolContract.sol

7: contract publicPoolContract is Initializable, AccessControlUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/resellerCommunityRewards.sol

6: contract resellerCommunityRewards is Ownable {

```

</details> 
 


 ### <a name="NC-15"></a>[NC-15]
 ### Consider using delete rather than assigning zero to clear value

#### Impact:
Consider using delete rather than assigning zero to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

75:         users[userWallet].claimableETH = 0;

232:             for (uint256 i = 0; i < twitterUsers.length; i++) {

241:             for (uint256 i = 0; i < specificUsers.length; i++) {

449:         users[msg.sender].claimableETH = 0;

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

256:         _claimableAmount = 0;

257:         _totalReceived = 0; 

260:         for (uint256 i = 0; i < User.vestingTimestamps[poolAddress].length; i++) {

263:             uint256 claimableAmountForThisPurchase = 0;

291:         _claimableAmount = 0;

295:         for (uint256 i = 0; i < User.vestingTimestamps[poolAddress].length; i++) {

298:             uint256 claimableAmountForThisPurchase = 0;

332:             for (uint256 i = 0; i < reservedAmount.length; i++) {

```

```solidity
File: contracts/ownedPool.sol

371:         _balance = 0;

427:         for(uint256 i = 0; i < handles.length; i++) {

```

```solidity
File: contracts/publicPool.sol

108:         for(uint loopCounter = 0; transferAmount != 0 && loopCounter <= 100; loopCounter++) {

115:                 transferAmount = 0;

```

```solidity
File: contracts/resellerCommunityRewards.sol

68:         for(uint8 i = 0; i <= 49 && i < ShareHolders.length; i++) {

71:                 lastProcessedIndex = 0;

```

</details> 
 


 ### <a name="NC-16"></a>[NC-16]
 ### Consider using delete rather than assigning false to clear value

#### Impact:
Consider using delete rather than assigning alse to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

262:             bool vested = false;

297:             bool vested = false;

```

```solidity
File: contracts/ownedPool.sol

57:         lockPool = false;

202:             isReseller = false;

227:                         twitterReserved = false;

239:                         twitterReserved = false;

334:         isHidden = false;

```

```solidity
File: contracts/publicPool.sol

48:         lockPool = false;

189:             isReseller = false;

264:         isHidden = false;

```

</details> 
 


 ### <a name="NC-17"></a>[NC-17]
 ### Consider adding a block/deny-list"
Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens  

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

15: contract DiamondSwap is Initializable, ERC20Upgradeable, AccessControlUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/ownedPool.sol

8: contract ownedPool is ERC20, AccessControl, ReentrancyGuard {

```

```solidity
File: contracts/ownedPoolContract.sol

6: contract ownedPoolContract is Initializable, AccessControlUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/publicPool.sol

10: contract publicPool is ERC20, AccessControl, ReentrancyGuard {

```

```solidity
File: contracts/publicPoolContract.sol

7: contract publicPoolContract is Initializable, AccessControlUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/resellerCommunityRewards.sol

6: contract resellerCommunityRewards is Ownable {

```

</details> 
 


 ### <a name="NC-18"></a>[NC-18]
 ### Consider adding emergency-stop functionality

#### Impact:
Adding a way to quickly halt protocol functionality in an emergency, rather than having to pause individual contracts one-by-one, will make in-progress hack mitigation faster and much less stressful.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

15: contract DiamondSwap is Initializable, ERC20Upgradeable, AccessControlUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/ownedPool.sol

8: contract ownedPool is ERC20, AccessControl, ReentrancyGuard {

```

```solidity
File: contracts/ownedPoolContract.sol

6: contract ownedPoolContract is Initializable, AccessControlUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/publicPool.sol

10: contract publicPool is ERC20, AccessControl, ReentrancyGuard {

```

```solidity
File: contracts/publicPoolContract.sol

7: contract publicPoolContract is Initializable, AccessControlUpgradeable, UUPSUpgradeable {

```

```solidity
File: contracts/resellerCommunityRewards.sol

6: contract resellerCommunityRewards is Ownable {

```

</details> 
 


 ### <a name="NC-19"></a>[NC-19]
 ### NatSpec: Event declarations should have NatSpec descriptions

*Instances (67)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/interface/IDiamondEvents.sol

6:     event claimingAllowed(

9:     event DiamondFeeUpdated(

12:     event poolContractCreated(

16:     event poolContribution(

20:     event influencerVerified(

24:     event ETHDeposited(

28:     event ETHClaimed(

32:     event poolCanceled(

36:     event resellerVerified(

40:     event poolVisibility(

45:     event projectVerified(

50:     event vestedTokensClaimed(

55:     event poolOwnershipUpdated(

60:     event tokensReserved(

65:     event tokensReservedTwitter(

70:     event reservedPoolCancelled(

75:     event reservedPoolCancelledTwitter(

80:     event tokensPurchased(

86:     event tokenVested(

92:     event vestingUpdated(

98:     event NewPoolCreated(

109:     event PoolOwnershipDetail(

114:     event PoolCreationDetail(

119:     event PoolVisibilityOption(

124:     event PoolPricingDetail(

130:     event PoolTransferVestingDetail(

136:     event ContributionToPool(

141:     event PoolStructUpdated(

147:     event PoolCreatorUpdated(

152:     event PoolPurchaseDataPart1(

162:     event PoolPurchaseDataPart2(

171:     event PoolPurchaseDataPart3(

```

```solidity
File: contracts/libraries/DiamondEvents.sol

6:     event claimingAllowed(

9:     event DiamondFeeUpdated(

12:     event poolContractCreated(

16:     event poolContribution(

20:     event influencerVerified(

24:     event ETHDeposited(

28:     event RewardsDeposited(

32:     event ETHClaimed(

36:     event poolCanceled(

40:     event resellerVerified(

44:     event poolVisibility(

49:     event projectVerified(

54:     event vestedTokensClaimed(

60:     event poolOwnershipUpdated(

65:     event tokensReserved(

70:     event tokensReservedTwitter(

75:     event reservedPoolCancelled(

80:     event reservedPoolCancelledTwitter(

85:     event tokensPurchased(

91:     event tokenVested(

97:     event vestingUpdated(

104:     event NewPoolCreated(

115:     event PoolOwnershipDetail(

120:     event PoolCreationDetail(

125:     event PoolVisibilityOption(

130:     event PoolPricingDetail(

136:     event PoolTransferVestingDetail(

142:     event ContributionToPool(

147:     event PoolStructUpdated(

153:     event PoolCreatorUpdated(

158:     event PoolPurchaseDataPart1(

168:     event PoolPurchaseDataPart2(

178:     event PoolPurchaseDataPart3(

```

```solidity
File: contracts/ownedPool.sol

60:     event updatePublicAmount(

64:     event updateReservedAmount(

```

</details> 
 


 ### <a name="NC-20"></a>[NC-20]
 ### contracts should use fixed compiler versions
To prevent the contracts being deployed and behaving differently depending on the compiler version, it is recommended to use fixed solidity versions for contracts and libraries. Although we can configure a specific version through config (like hardhat, forge config files), it is recommended to set the fixed version in the solidity pragma directly before deploying to the mainnet.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/interface/IDiamondContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IDiamondStaking.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IDiamondSwap.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IOracle.sol

3: pragma solidity >=0.7.6;

```

```solidity
File: contracts/interface/IOwnedPoolContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IPublicPoolContract.sol

2: pragma solidity ^0.8.15;

```

</details> 
 


 ### <a name="NC-21"></a>[NC-21]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (114)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

27:     function initialize(address publicPoolCreator, address ownedPoolCreator, address stakingContract, address carats) initializer public payable {

36:     function __Diamond_init_unchained(address publicPoolCreator, address ownedPoolCreator, address stakingContract, address carats) internal initializer {

57:     function _authorizeUpgrade(

62:     function _lockUser(

69:     function _withdrawLockedFunds(

78:     function updateDiamondFee(

90:     function verifyProject(

100:     function verifyReseller(

111:     function socialAuth(

123:     function getFeeData(

147:     function deposit(

156:     function getReservedAmount(

174:     function updateUserVestingData(

186:     function updatePublicAmount(

196:     function updateReservedAmount(

207:     function updateBuyerSeller(

217:     function updatePoolData(

266:     function claimVestedTokens(

277:     function checkVestedPoolAmount(

290:     function createPool(

376:     function buyFromPool(

391:     function _emitPoolPurchaseData(

431:     function contributeToPool(

444:     function claimETH(

456:     function cancelOwnedPool(

469:     function updatePoolVisibility(

481:     function updatePoolOwner(

493:     function updatePriceOracle(

```

```solidity
File: contracts/interface/IDiamondContract.sol

6:     function _token(

11:     function contribute(

16:     function getPlaceInLine(

22:     function claimVestedTokens(

29:     function updateVested(

34:     function updateOwner(

42:     function preventCancellation(

46:     function cancelPool(

52:     function setFixedPrice(

57:     function updateVisibility(

62:     function setTwitterUsers(

67:     function diamondTransfer(

79:     function updateAmounts(

```

```solidity
File: contracts/interface/IDiamondStaking.sol

6:     function addRewardsContract(

```

```solidity
File: contracts/interface/IDiamondSwap.sol

6:     function updateUserVestingData(

14:     function getFeeData(

28:     function getTokenData(

40:     function deposit(

47:     function getReservedAmount(

57:     function _getInfluencerHandle(

63:     function updatePublicAmount(

71:     function updateReservedAmount(

80:     function updateBuyerSeller(

88:     function checkVestedTokens(

97:     function PlatformInfo(

```

```solidity
File: contracts/interface/IOracle.sol

8:     function getRateToEth(IERC20 srcToken, bool _useWrappers) external view returns (uint256 rate);

```

```solidity
File: contracts/interface/IOwnedPoolContract.sol

6:     function createOwnedPool(

15:     function updateInterfaceAddress(

```

```solidity
File: contracts/interface/IPublicPoolContract.sol

6:     function createPublicPool(

14:     function updateInterfaceAddress(

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

14:     function _updateReservedAmount(

63:     function _updatePublicAmount(

97:     function _updateBuyerSeller(

116:     function _updateUserReservedPool(

136:     function _updateTwitterReservedPool(

156:     function _updatePoolStruct(

180:     function _updatePoolCreator(

219:     function _transferPoolOwner(

244:     function _checkVestedTokens(

284:     function _claimVestedTokens(

324:     function _getPublicAmount(

341:     function _verifyProject(

353:     function _verifyReseller(

370:     function _updateVestingData(

386:     function _updateUserETH(

406:     function _updateVesting(

419:     function _cancelPool(

```

```solidity
File: contracts/ownedPool.sol

89:     function diamondTransfer(

158:     function checkAmounts(

182:     function checkFeeData(

208:     function updateBalances(

252:     function takeFee(

310:     function claimVestedTokens(

324:     function contribute(

329:         require(address(user) == address(poolOwner), "Only pool owner can call this function");

337:     function updateVested(

345:     function updateOwner(

361:     function cancelPool(

366:         require(address(User) == address(poolOwner), "Only pool owner can call this function");

380:     function preventCancellation(

386:     function updateAmounts(

403:     function setFixedPrice(

413:     function updateVisibility(

417:         require(address(user) == address(poolOwner), "Only pool owner can call this function");

423:     function setTwitterUsers(

```

```solidity
File: contracts/ownedPoolContract.sol

11:     function initialize() initializer public {

19:     function _authorizeUpgrade(

24:     function createOwnedPool(address _token, address buyer, uint256 _discountPercent, address owner) external onlyRole(DEFAULT_ADMIN_ROLE) returns(address){

30:     function updateInterfaceAddress(address newInterface) external onlyRole(UPGRADER_ROLE) {

```

```solidity
File: contracts/publicPool.sol

82:     function diamondTransfer(

154:     function checkAmounts(

169:     function checkFeeData(

195:     function takeFee(

249:     function contribute(

267:     function getPlaceInLine(

276:     function updateOwner(

283:     function cancelPool(

288:         require(poolContributor[User] && contributorAmounts[User] > 0, "Only pool contributors can call this function");

```

```solidity
File: contracts/publicPoolContract.sol

12:     function initialize() initializer public {

20:     function _authorizeUpgrade(

25:     function createPublicPool(address _token, uint256 _tokenAmount, address owner) external onlyRole(UPGRADER_ROLE) returns(address){

31:     function updateInterfaceAddress(address newInterface) external onlyRole(UPGRADER_ROLE) {

```

```solidity
File: contracts/resellerCommunityRewards.sol

41:     function deposit(uint256 amount) external {

54:     function withdraw(uint256 amount) external {

67:     function distribute() public onlyOwner returns(uint256) {

86:     function shareHoldersCount() external view returns(uint256) {

```

</details> 
 


 ### <a name="NC-22"></a>[NC-22]
 ### NatSpec: function declarations should have @Notice tags
@notice is used to explain to end users what the function does, and the compiler interprets /// or /** comments as this tag if one wasn't explicitly provided.  

*Instances (114)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

27:     function initialize(address publicPoolCreator, address ownedPoolCreator, address stakingContract, address carats) initializer public payable {

36:     function __Diamond_init_unchained(address publicPoolCreator, address ownedPoolCreator, address stakingContract, address carats) internal initializer {

57:     function _authorizeUpgrade(

62:     function _lockUser(

69:     function _withdrawLockedFunds(

78:     function updateDiamondFee(

90:     function verifyProject(

100:     function verifyReseller(

111:     function socialAuth(

123:     function getFeeData(

147:     function deposit(

156:     function getReservedAmount(

174:     function updateUserVestingData(

186:     function updatePublicAmount(

196:     function updateReservedAmount(

207:     function updateBuyerSeller(

217:     function updatePoolData(

266:     function claimVestedTokens(

277:     function checkVestedPoolAmount(

290:     function createPool(

376:     function buyFromPool(

391:     function _emitPoolPurchaseData(

431:     function contributeToPool(

444:     function claimETH(

456:     function cancelOwnedPool(

469:     function updatePoolVisibility(

481:     function updatePoolOwner(

493:     function updatePriceOracle(

```

```solidity
File: contracts/interface/IDiamondContract.sol

6:     function _token(

11:     function contribute(

16:     function getPlaceInLine(

22:     function claimVestedTokens(

29:     function updateVested(

34:     function updateOwner(

42:     function preventCancellation(

46:     function cancelPool(

52:     function setFixedPrice(

57:     function updateVisibility(

62:     function setTwitterUsers(

67:     function diamondTransfer(

79:     function updateAmounts(

```

```solidity
File: contracts/interface/IDiamondStaking.sol

6:     function addRewardsContract(

```

```solidity
File: contracts/interface/IDiamondSwap.sol

6:     function updateUserVestingData(

14:     function getFeeData(

28:     function getTokenData(

40:     function deposit(

47:     function getReservedAmount(

57:     function _getInfluencerHandle(

63:     function updatePublicAmount(

71:     function updateReservedAmount(

80:     function updateBuyerSeller(

88:     function checkVestedTokens(

97:     function PlatformInfo(

```

```solidity
File: contracts/interface/IOracle.sol

8:     function getRateToEth(IERC20 srcToken, bool _useWrappers) external view returns (uint256 rate);

```

```solidity
File: contracts/interface/IOwnedPoolContract.sol

6:     function createOwnedPool(

15:     function updateInterfaceAddress(

```

```solidity
File: contracts/interface/IPublicPoolContract.sol

6:     function createPublicPool(

14:     function updateInterfaceAddress(

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

14:     function _updateReservedAmount(

63:     function _updatePublicAmount(

97:     function _updateBuyerSeller(

116:     function _updateUserReservedPool(

136:     function _updateTwitterReservedPool(

156:     function _updatePoolStruct(

180:     function _updatePoolCreator(

219:     function _transferPoolOwner(

244:     function _checkVestedTokens(

284:     function _claimVestedTokens(

324:     function _getPublicAmount(

341:     function _verifyProject(

353:     function _verifyReseller(

370:     function _updateVestingData(

386:     function _updateUserETH(

406:     function _updateVesting(

419:     function _cancelPool(

```

```solidity
File: contracts/ownedPool.sol

89:     function diamondTransfer(

158:     function checkAmounts(

182:     function checkFeeData(

208:     function updateBalances(

252:     function takeFee(

310:     function claimVestedTokens(

324:     function contribute(

329:         require(address(user) == address(poolOwner), "Only pool owner can call this function");

337:     function updateVested(

345:     function updateOwner(

361:     function cancelPool(

366:         require(address(User) == address(poolOwner), "Only pool owner can call this function");

380:     function preventCancellation(

386:     function updateAmounts(

403:     function setFixedPrice(

413:     function updateVisibility(

417:         require(address(user) == address(poolOwner), "Only pool owner can call this function");

423:     function setTwitterUsers(

```

```solidity
File: contracts/ownedPoolContract.sol

11:     function initialize() initializer public {

19:     function _authorizeUpgrade(

24:     function createOwnedPool(address _token, address buyer, uint256 _discountPercent, address owner) external onlyRole(DEFAULT_ADMIN_ROLE) returns(address){

30:     function updateInterfaceAddress(address newInterface) external onlyRole(UPGRADER_ROLE) {

```

```solidity
File: contracts/publicPool.sol

82:     function diamondTransfer(

154:     function checkAmounts(

169:     function checkFeeData(

195:     function takeFee(

249:     function contribute(

267:     function getPlaceInLine(

276:     function updateOwner(

283:     function cancelPool(

288:         require(poolContributor[User] && contributorAmounts[User] > 0, "Only pool contributors can call this function");

```

```solidity
File: contracts/publicPoolContract.sol

12:     function initialize() initializer public {

20:     function _authorizeUpgrade(

25:     function createPublicPool(address _token, uint256 _tokenAmount, address owner) external onlyRole(UPGRADER_ROLE) returns(address){

31:     function updateInterfaceAddress(address newInterface) external onlyRole(UPGRADER_ROLE) {

```

```solidity
File: contracts/resellerCommunityRewards.sol

41:     function deposit(uint256 amount) external {

54:     function withdraw(uint256 amount) external {

67:     function distribute() public onlyOwner returns(uint256) {

86:     function shareHoldersCount() external view returns(uint256) {

```

</details> 
 


 ### <a name="NC-23"></a>[NC-23]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (114)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

27:     function initialize(address publicPoolCreator, address ownedPoolCreator, address stakingContract, address carats) initializer public payable {

36:     function __Diamond_init_unchained(address publicPoolCreator, address ownedPoolCreator, address stakingContract, address carats) internal initializer {

57:     function _authorizeUpgrade(

62:     function _lockUser(

69:     function _withdrawLockedFunds(

78:     function updateDiamondFee(

90:     function verifyProject(

100:     function verifyReseller(

111:     function socialAuth(

123:     function getFeeData(

147:     function deposit(

156:     function getReservedAmount(

174:     function updateUserVestingData(

186:     function updatePublicAmount(

196:     function updateReservedAmount(

207:     function updateBuyerSeller(

217:     function updatePoolData(

266:     function claimVestedTokens(

277:     function checkVestedPoolAmount(

290:     function createPool(

376:     function buyFromPool(

391:     function _emitPoolPurchaseData(

431:     function contributeToPool(

444:     function claimETH(

456:     function cancelOwnedPool(

469:     function updatePoolVisibility(

481:     function updatePoolOwner(

493:     function updatePriceOracle(

```

```solidity
File: contracts/interface/IDiamondContract.sol

6:     function _token(

11:     function contribute(

16:     function getPlaceInLine(

22:     function claimVestedTokens(

29:     function updateVested(

34:     function updateOwner(

42:     function preventCancellation(

46:     function cancelPool(

52:     function setFixedPrice(

57:     function updateVisibility(

62:     function setTwitterUsers(

67:     function diamondTransfer(

79:     function updateAmounts(

```

```solidity
File: contracts/interface/IDiamondStaking.sol

6:     function addRewardsContract(

```

```solidity
File: contracts/interface/IDiamondSwap.sol

6:     function updateUserVestingData(

14:     function getFeeData(

28:     function getTokenData(

40:     function deposit(

47:     function getReservedAmount(

57:     function _getInfluencerHandle(

63:     function updatePublicAmount(

71:     function updateReservedAmount(

80:     function updateBuyerSeller(

88:     function checkVestedTokens(

97:     function PlatformInfo(

```

```solidity
File: contracts/interface/IOracle.sol

8:     function getRateToEth(IERC20 srcToken, bool _useWrappers) external view returns (uint256 rate);

```

```solidity
File: contracts/interface/IOwnedPoolContract.sol

6:     function createOwnedPool(

15:     function updateInterfaceAddress(

```

```solidity
File: contracts/interface/IPublicPoolContract.sol

6:     function createPublicPool(

14:     function updateInterfaceAddress(

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

14:     function _updateReservedAmount(

63:     function _updatePublicAmount(

97:     function _updateBuyerSeller(

116:     function _updateUserReservedPool(

136:     function _updateTwitterReservedPool(

156:     function _updatePoolStruct(

180:     function _updatePoolCreator(

219:     function _transferPoolOwner(

244:     function _checkVestedTokens(

284:     function _claimVestedTokens(

324:     function _getPublicAmount(

341:     function _verifyProject(

353:     function _verifyReseller(

370:     function _updateVestingData(

386:     function _updateUserETH(

406:     function _updateVesting(

419:     function _cancelPool(

```

```solidity
File: contracts/ownedPool.sol

89:     function diamondTransfer(

158:     function checkAmounts(

182:     function checkFeeData(

208:     function updateBalances(

252:     function takeFee(

310:     function claimVestedTokens(

324:     function contribute(

329:         require(address(user) == address(poolOwner), "Only pool owner can call this function");

337:     function updateVested(

345:     function updateOwner(

361:     function cancelPool(

366:         require(address(User) == address(poolOwner), "Only pool owner can call this function");

380:     function preventCancellation(

386:     function updateAmounts(

403:     function setFixedPrice(

413:     function updateVisibility(

417:         require(address(user) == address(poolOwner), "Only pool owner can call this function");

423:     function setTwitterUsers(

```

```solidity
File: contracts/ownedPoolContract.sol

11:     function initialize() initializer public {

19:     function _authorizeUpgrade(

24:     function createOwnedPool(address _token, address buyer, uint256 _discountPercent, address owner) external onlyRole(DEFAULT_ADMIN_ROLE) returns(address){

30:     function updateInterfaceAddress(address newInterface) external onlyRole(UPGRADER_ROLE) {

```

```solidity
File: contracts/publicPool.sol

82:     function diamondTransfer(

154:     function checkAmounts(

169:     function checkFeeData(

195:     function takeFee(

249:     function contribute(

267:     function getPlaceInLine(

276:     function updateOwner(

283:     function cancelPool(

288:         require(poolContributor[User] && contributorAmounts[User] > 0, "Only pool contributors can call this function");

```

```solidity
File: contracts/publicPoolContract.sol

12:     function initialize() initializer public {

20:     function _authorizeUpgrade(

25:     function createPublicPool(address _token, uint256 _tokenAmount, address owner) external onlyRole(UPGRADER_ROLE) returns(address){

31:     function updateInterfaceAddress(address newInterface) external onlyRole(UPGRADER_ROLE) {

```

```solidity
File: contracts/resellerCommunityRewards.sol

41:     function deposit(uint256 amount) external {

54:     function withdraw(uint256 amount) external {

67:     function distribute() public onlyOwner returns(uint256) {

86:     function shareHoldersCount() external view returns(uint256) {

```

</details> 
 


 ### <a name="NC-24"></a>[NC-24]
 ### Order of Functions Does Not Follow Solidity Style Guide
According to the Solidity Style Guide, functions should be grouped according to their visibility and ordered: constructor, receive, fallback, external, public, internal, private.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/interface/IDiamondContract.sol

6:     function _token(

```

```solidity
File: contracts/interface/IDiamondStaking.sol

6:     function addRewardsContract(

```

```solidity
File: contracts/interface/IDiamondSwap.sol

6:     function updateUserVestingData(

```

```solidity
File: contracts/interface/IOracle.sol

8:     function getRateToEth(IERC20 srcToken, bool _useWrappers) external view returns (uint256 rate);

```

```solidity
File: contracts/interface/IOwnedPoolContract.sol

6:     function createOwnedPool(

```

```solidity
File: contracts/interface/IPublicPoolContract.sol

6:     function createPublicPool(

```

</details> 
 


 ### <a name="NC-25"></a>[NC-25]
 ### If-statement can be converted to a ternary

#### Impact:
The code can be made more compact while also increasing readability by converting the following `if`-statements to ternaries (e.g. `foo += (x > y) ? a : b`)

*Instances (75)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

167:         if(isTwitter) {

229:         if(twitterAmounts[0] > 0) {

239:         if(specificAmounts[0] > 0) {

248:         if (dataChecks[0]) {

255:         if(dataChecks[1]) {

311:             if(poolType != 3) {

346:                 else {

354:                 } else {

462:         if(PublicSets.publicPoolArray[PublicSets.PoolToToken[pool]].contains(pool)){

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

31:         if(twitterPurchase) {

38:             } if(Handle.offeredTokens.length() == 0) {

41:         } else {

48:             } if(User.offeredTokens.length() == 0) {

54:         if(!User.ownedTokens.contains(token)) {

57:         if(!User.ownedPools[token].contains(pool)) {

73:         if(buyer != address(0)) {

81:             if(!Buyer.ownedTokens.contains(token)) {

84:             if(!Buyer.ownedPools[token].contains(pool)) {

88:         } else {

127:         if(!User.offeredTokens.contains(_token)) {

129:         } if(!User.offeredPools[_token].contains(_pool)) {

147:         if(!Handle.offeredTokens.contains(_token)) {

149:         } if(!Handle.offeredPools[_token].contains(_pool)) {

165:         if(!Pool.Pools.contains(newPool)) {

191:         if(!User.createdTokens.contains(_token)) {

195:         if(!User.createdPools[_token].contains(_pool)) {

200:         if(User.createdPoolTimestamp[_token][_pool] == 0) {

204:         if(publicAmount > 0) {

227:         if(!NewOwner.createdTokens.contains(_token)) {

229:         } if(!NewOwner.createdPools[_token].contains(_pool)) {

239:         if(Owner.createdPools[_token].length() == 0) {

266:                 if(claimableAmountForThisPurchase >= User.vestedTokens[poolAddress][User.vestingTimestamps[poolAddress][i]]) {

303:                 if (claimableAmountForThisPurchase >= User.vestedTokens[poolAddress][User.vestingTimestamps[poolAddress][i]]) {

331:         if(reservedAmount[0] > 0) {

397:         if(pool != address(0) && token != address(0)){

425:         if(publicPools.publicPoolArray[_token].length() == 0) {

```

```solidity
File: contracts/ownedPool.sol

110:         if(twitterReserved && twitterHandle[handle] > 0) {

113:         if(singleSale) {

119:         } else if (isReserved) {

127:         } else {

135:         if(isVested) {

166:         if(!fixedPrice) {

175:         } else if(fixedPrice) {

199:        if(ResellerFee > 0) {

216:         if(reservedTokens == 0) {

222:         } else if(amount <= reservedTokens) {

234:         } else {

265:         if(isVerified && isReseller) {

278:         } else if(isVerified || isReseller) {

288:             } else {

300:         } else {

354:         if (!preventCancel) {

394:         if(_specificAmount > 0) {

398:         if(poolType == 1) {

428:             if(twitterHandle[handles[i]] > 0) {

```

```solidity
File: contracts/publicPool.sol

113:             if(_contributorAmount > transferAmount) {

128:             if(contributorAmounts[contributorAddress] == 0) {

132:             if(loopCounter == 100) {

139:         if(returnETH > 0) {

144:         if(_balance == 0) {

186:        if(ResellerFee > 0) {

207:         if(isVerified && isReseller) {

210:             if(!success) {

214:             if(!success) {

221:         } else if(isVerified || isReseller) {

224:                 if(!success) {

231:             } else {

233:                 if(!success) {

241:         } else {

255:         if(poolContributor[user]) {

297:         if(_balance == 0) {

```

```solidity
File: contracts/resellerCommunityRewards.sol

44:         if(!IsShareHolder[msg.sender]) {

57:         if(ShareHoldersAmounts[msg.sender] == 0) {

69:             if(lastProcessedIndex == 999999999) {

78:             if(lastProcessedIndex == ShareHolders.length - 1) {

```

</details> 
 


 ### <a name="NC-26"></a>[NC-26]
 ### Contract Does Not Implement Any Interfaces
It is recommended to implement relevant interfaces for better code organization and clarity.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/interface/IDiamondContract.sol

4: interface IDiamondContract {

```

```solidity
File: contracts/interface/IDiamondEvents.sol

5: interface DiamondEvents {

```

```solidity
File: contracts/interface/IDiamondStaking.sol

4: interface IDiamondStaking {

```

```solidity
File: contracts/interface/IDiamondSwap.sol

4: interface IDiamondSwap {

```

```solidity
File: contracts/interface/IOracle.sol

7: interface IOracle {

```

```solidity
File: contracts/interface/IOwnedPoolContract.sol

4: interface IOwnedPoolContract {

```

```solidity
File: contracts/interface/IPublicPoolContract.sol

4: interface IPublicPoolContract {

```

</details> 
 


 ### <a name="NC-27"></a>[NC-27]
 ### Large multiples of ten should use scientific notation
Use a scientific notation rather than decimal literals (e.g. 1e6 instead of 1000000), for better code readability.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/resellerCommunityRewards.sol

69:             if(lastProcessedIndex == 999999999) {

79:                 lastProcessedIndex = 999999999;

```

</details> 
 


 ### <a name="NC-28"></a>[NC-28]
 ### Consider using named mappings

#### Impact:
Using named mappings can improve code readability and maintainability.

*Instances (50)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

21:     mapping (address => DiamondStructs.UserInfo) private users;

23:     mapping (address => DiamondStructs.PoolInfo) private pools;

24:     mapping (address => bool) isPool;

```

```solidity
File: contracts/libraries/DiamondStructs.sol

19:         mapping (address => mapping(uint256 => uint256)) claimedTokens; // poolAddress => purchaseTimestamp => claimedAmount

20:         mapping (address => mapping(uint256 => uint256)) vestedTokens; // poolAddress => purchaseTimestamp => vestedAmount

21:         mapping(address => mapping(uint256 => uint256)) vestingTime; // poolAddress => purchaseTimestamp => vestingStartTime

22:         mapping (address => uint256[]) vestingTimestamps; // poolAddress => list of vesting timestamps

24:         mapping (address => EnumerableSetUpgradeable.AddressSet) createdPools; // Token address, pool address

25:         mapping (address => mapping (address => uint256)) createdPoolsSaleAmount; // Token Address, pool address, total sale amount (reserved or not)

26:         mapping (address => mapping (address => uint256)) createdPoolsSoldAmount; // Token Address, pool address, total sold amount

27:         mapping (address => mapping (address => uint256)) createdPoolAmountContributed; // Token Address, pool address, all tokens contributed to pool

28:         mapping (address => mapping (address => uint256)) createdPoolsEthEarned; // Token Address, pool address, total ETH earned from pool (in WEI)

29:         mapping (address => mapping (address => uint256)) createdPoolTimestamp; // token, pool, Timestamp of when pool was created

30:         mapping (address => mapping (address => address)) BuyerAddress;

31:         mapping (address => mapping (address => mapping (address => uint256))) BuyerTimestamp;

32:         mapping (address => mapping (address => uint256)) createdPoolBuyCount; // token, pool, number of pool purchases

34:         mapping (address => EnumerableSetUpgradeable.AddressSet) ownedPools; // Token address, pool address

35:         mapping (address => mapping(address => uint256)) poolPurchaseAmount; // Token, Pool, Amount paid WEI

36:         mapping (address => mapping (address => uint256)) ownedPoolsAmount; // Token Address, pool address, purchased amount

37:         mapping (address => mapping (address => address)) SellerAddress;

38:         mapping (address => mapping (address => mapping (address => uint256))) SellerTimestamp;

39:         mapping (address => mapping (address => uint256)) ownedPoolBuyCount; // token, pool, number of pool purchases

41:         mapping (address => EnumerableSetUpgradeable.AddressSet) offeredPools; // List of offered, not claimed pools

42:         mapping (address => mapping (address => uint256)) offeredPoolsAmount; // Token address, pool address, offered amount

51:         mapping (address => EnumerableSetUpgradeable.AddressSet) offeredPools; // List of offered, not claimed pools

52:         mapping (address => mapping (address => uint256)) offeredPoolsAmount; // Token address, pool address, offered amount

61:         mapping (address => uint256) projectClaimableETH; // Amount of ETH claimable for the verified project owners

67:         mapping (address => bool) isReserved; // Check if pool has reserved tokens

68:         mapping (address => bool) isTwitterReserved; // Check if pool has tokens reserved for twitter handle

69:         mapping (address => bool) isVested; // Checks if pool address is vested

70:         mapping (address => uint) poolTypeByAddress; // pool address returns type

71:         mapping (address => bool) SpecificUser; // quick check for reserved amounts

73:         mapping (address => mapping (address => uint256)) SpecificUserAmount; // pool address to user address to reserved amount

74:         mapping (address => mapping (string => uint256)) SpecificUserAmountTwitter; //Amount of tokens reserved for a twitter handle

75:         mapping (address => uint256) PublicSaleAmount; // pool address to public amount

76:         mapping (address => address) PoolOwner; // pool address to owner addrress

77:         mapping (address => uint256) discount; // pool specific discount

78:         mapping (address => VestingInfo) Vesting; // pool address to vesting struct

79:         mapping (address => bool) hidden; // visibility of pool

80:         mapping (address => uint256) fixedPricePerToken; // cost of entire pool in WEI

81:         mapping (address => uint256) PoolCreatedTimestamp; //pool address to pool created timestamp

151:         mapping (address => address) PoolToToken; // Mapped pools to token address

152:         mapping (address => EnumerableSetUpgradeable.AddressSet) publicPoolArray; // Mapped token to pool address

```

```solidity
File: contracts/ownedPool.sol

17:     mapping (address => uint256) private vestedUsers;

```

```solidity
File: contracts/publicPool.sol

37:     mapping(address => uint256) private contributorAmounts;

38:     mapping(address => uint256) private contributorCounter;

39:     mapping(address => bool) private poolContributor;

```

```solidity
File: contracts/resellerCommunityRewards.sol

20:     mapping(address => uint256) ShareHoldersAmounts;

21:     mapping(address => bool) IsShareHolder;

22:     mapping(address => uint256) ShareHoldersIndex;

```

</details> 
 


 ### <a name="NC-29"></a>[NC-29]
 ### Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct

#### Impact:
Combining multiple mappings into a single mapping with a struct can improve readability and maintainability of the code.

*Instances (50)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

21:     mapping (address => DiamondStructs.UserInfo) private users;

23:     mapping (address => DiamondStructs.PoolInfo) private pools;

24:     mapping (address => bool) isPool;

```

```solidity
File: contracts/libraries/DiamondStructs.sol

19:         mapping (address => mapping(uint256 => uint256)) claimedTokens; // poolAddress => purchaseTimestamp => claimedAmount

20:         mapping (address => mapping(uint256 => uint256)) vestedTokens; // poolAddress => purchaseTimestamp => vestedAmount

21:         mapping(address => mapping(uint256 => uint256)) vestingTime; // poolAddress => purchaseTimestamp => vestingStartTime

22:         mapping (address => uint256[]) vestingTimestamps; // poolAddress => list of vesting timestamps

24:         mapping (address => EnumerableSetUpgradeable.AddressSet) createdPools; // Token address, pool address

25:         mapping (address => mapping (address => uint256)) createdPoolsSaleAmount; // Token Address, pool address, total sale amount (reserved or not)

26:         mapping (address => mapping (address => uint256)) createdPoolsSoldAmount; // Token Address, pool address, total sold amount

27:         mapping (address => mapping (address => uint256)) createdPoolAmountContributed; // Token Address, pool address, all tokens contributed to pool

28:         mapping (address => mapping (address => uint256)) createdPoolsEthEarned; // Token Address, pool address, total ETH earned from pool (in WEI)

29:         mapping (address => mapping (address => uint256)) createdPoolTimestamp; // token, pool, Timestamp of when pool was created

30:         mapping (address => mapping (address => address)) BuyerAddress;

31:         mapping (address => mapping (address => mapping (address => uint256))) BuyerTimestamp;

32:         mapping (address => mapping (address => uint256)) createdPoolBuyCount; // token, pool, number of pool purchases

34:         mapping (address => EnumerableSetUpgradeable.AddressSet) ownedPools; // Token address, pool address

35:         mapping (address => mapping(address => uint256)) poolPurchaseAmount; // Token, Pool, Amount paid WEI

36:         mapping (address => mapping (address => uint256)) ownedPoolsAmount; // Token Address, pool address, purchased amount

37:         mapping (address => mapping (address => address)) SellerAddress;

38:         mapping (address => mapping (address => mapping (address => uint256))) SellerTimestamp;

39:         mapping (address => mapping (address => uint256)) ownedPoolBuyCount; // token, pool, number of pool purchases

41:         mapping (address => EnumerableSetUpgradeable.AddressSet) offeredPools; // List of offered, not claimed pools

42:         mapping (address => mapping (address => uint256)) offeredPoolsAmount; // Token address, pool address, offered amount

51:         mapping (address => EnumerableSetUpgradeable.AddressSet) offeredPools; // List of offered, not claimed pools

52:         mapping (address => mapping (address => uint256)) offeredPoolsAmount; // Token address, pool address, offered amount

61:         mapping (address => uint256) projectClaimableETH; // Amount of ETH claimable for the verified project owners

67:         mapping (address => bool) isReserved; // Check if pool has reserved tokens

68:         mapping (address => bool) isTwitterReserved; // Check if pool has tokens reserved for twitter handle

69:         mapping (address => bool) isVested; // Checks if pool address is vested

70:         mapping (address => uint) poolTypeByAddress; // pool address returns type

71:         mapping (address => bool) SpecificUser; // quick check for reserved amounts

73:         mapping (address => mapping (address => uint256)) SpecificUserAmount; // pool address to user address to reserved amount

74:         mapping (address => mapping (string => uint256)) SpecificUserAmountTwitter; //Amount of tokens reserved for a twitter handle

75:         mapping (address => uint256) PublicSaleAmount; // pool address to public amount

76:         mapping (address => address) PoolOwner; // pool address to owner addrress

77:         mapping (address => uint256) discount; // pool specific discount

78:         mapping (address => VestingInfo) Vesting; // pool address to vesting struct

79:         mapping (address => bool) hidden; // visibility of pool

80:         mapping (address => uint256) fixedPricePerToken; // cost of entire pool in WEI

81:         mapping (address => uint256) PoolCreatedTimestamp; //pool address to pool created timestamp

151:         mapping (address => address) PoolToToken; // Mapped pools to token address

152:         mapping (address => EnumerableSetUpgradeable.AddressSet) publicPoolArray; // Mapped token to pool address

```

```solidity
File: contracts/ownedPool.sol

17:     mapping (address => uint256) private vestedUsers;

```

```solidity
File: contracts/publicPool.sol

37:     mapping(address => uint256) private contributorAmounts;

38:     mapping(address => uint256) private contributorCounter;

39:     mapping(address => bool) private poolContributor;

```

```solidity
File: contracts/resellerCommunityRewards.sol

20:     mapping(address => uint256) ShareHoldersAmounts;

21:     mapping(address => bool) IsShareHolder;

22:     mapping(address => uint256) ShareHoldersIndex;

```

</details> 
 


 ### <a name="NC-30"></a>[NC-30]
 ### Use of override is unnecessary

#### Impact:
Starting with Solidity version [0.8.8](https://docs.soliditylang.org/en/v0.8.20/contracts.html#function-overriding), using the override keyword when the function solely overrides an interface function, and the function doesnt exist in multiple base contracts, is unnecessary.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

59:     ) internal onlyRole(DEFAULT_ADMIN_ROLE) override {

```

```solidity
File: contracts/ownedPoolContract.sol

21:     ) internal override onlyRole(UPGRADER_ROLE) {

```

```solidity
File: contracts/publicPoolContract.sol

22:     ) internal override onlyRole(UPGRADER_ROLE) {

```

</details> 
 


 ### <a name="NC-31"></a>[NC-31]
 ### Consider using descriptive constants when using 0 in the code

#### Impact:
Passing zero as a function argument/Event emission can sometimes result in a security issue (e.g. passing zero as the slippage parameter). Consider using a constant variable with a descriptive name, so its clear that the 0 is intentionally being used, and for the right reasons.

*Instances (28)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

44:         PlatformInfo.resellerAddress[""] = payable(0);

45:         PlatformInfo.resellerCommunityRewards[""] = payable(0);

233:             UpdateDiamondStruct._updateTwitterReservedPool(_addresses[0], newPool, twitterAmounts[i], twitterUsers[i], pools[_addresses[0]], userHandles[twitterUsers[i]]);

242:             UpdateDiamondStruct._updateUserReservedPool(_addresses[0], newPool, specificAmounts[i], specificUsers[i], pools[_addresses[0]], users[specificUsers[i]]);

249:             UpdateDiamondStruct._updateVesting(newPool, _vestingData, pools[_addresses[0]]);

250:             IDiamondContract(newPool).updateVested(dataChecks[0], _vestingData[2]);

252:             emit DiamondEvents.tokenVested(newPool, _vestingData[0], _vestingData[1], _vestingData[2]);

320:             address Pool = IOwnedPoolContract(payable(PlatformInfo.ownedPoolContract)).createOwnedPool(poolData[0], specificUsers[0], priceParams[0], poolData[1]);

325:             IDiamondContract(Pool).updateAmounts(publicAmount, specificAmounts[0], poolType);

326:             UpdateDiamondStruct._updatePoolStruct(pools[poolData[0]], publicAmount, poolType, Pool, poolData[1], priceParams[0]);

328:             UpdateDiamondStruct._updatePoolCreator(pools[poolData[0]], poolData[0], Pool, amount, users[poolData[1]], PublicSets, publicAmount);

334:             emit DiamondEvents.PoolStructUpdated(poolData[0], Pool, publicAmount, poolType);

335:             emit DiamondEvents.PoolCreatorUpdated(poolData[0], Pool, amount);

340:             emit DiamondEvents.PoolPricingDetail(Pool, dataChecks[1], discountAvailable, priceParams[0]);

342:             emit DiamondEvents.PoolTransferVestingDetail(Pool, dataChecks[0], transferOnCreation, poolData[1]);

363:                     emit DiamondEvents.PoolStructUpdated(poolData[0], Pool, amount, poolType);

364:                     emit DiamondEvents.PoolCreatorUpdated(poolData[0], Pool, amount);

369:                     emit DiamondEvents.PoolPricingDetail(Pool, dataChecks[1], discountAvailable, priceParams[0]);

371:                     emit DiamondEvents.PoolTransferVestingDetail(Pool, dataChecks[0], transferOnCreation, poolData[1]);

```

```solidity
File: contracts/ownedPool.sol

316:         require(claimableAmount > 0, "No tokens available to claim");

330:         require(tokenAmount > 0, "No tokens sent to pool");

```

```solidity
File: contracts/publicPool.sol

53:         require(amount > 0);

129:                 contributors[counter] = address(0);

253:         require(tokenAmount > 0, "No tokens sent to pool");

288:         require(poolContributor[User] && contributorAmounts[User] > 0, "Only pool contributors can call this function");

293:         contributors[contributorCounter[User]] = address(0);

```

```solidity
File: contracts/resellerCommunityRewards.sol

55:         require(amount > 0 && amount <= ShareHoldersAmounts[msg.sender]);

80:                 return(0);

```

</details> 
 


 ### <a name="NC-32"></a>[NC-32]
 ### Non-external/public variable names should begin with an underscore

#### Impact:
Using an underscore at the beginning of non-external/public variable names can improve code clarity and maintainability. According to the Solidity Style Guide, non-external/public variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*Instances (64)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

19:     DiamondStructs.PlatformInfo public PlatformInfo;

20:     DiamondStructs.PublicSets private PublicSets;

21:     mapping (address => DiamondStructs.UserInfo) private users;

22:     mapping (string => DiamondStructs.TwitterUsers) private userHandles;

23:     mapping (address => DiamondStructs.PoolInfo) private pools;

```

```solidity
File: contracts/ownedPool.sol

11:     IOracle public spotAggregator;

12:     IDiamondSwap public diamondSwap;

16:     mapping (string => uint256) private twitterHandle;

17:     mapping (address => uint256) private vestedUsers;

19:     address private poolOwner;

20:     address private buyer;

21:     address private WETH;

23:     address payable private DiamondSwapFeeReceiver;

24:     address payable private ProjectFeeReceiver;

25:     address payable private ResellerFeeReceiver;

26:     address payable private ResellerCommunityRewards;

28:     uint256 private discountPercent;

29:     uint256 private publicAmount;

30:     uint256 private initialDistributionPercent;

31:     uint256 private pricePerTokenWei;

32:     uint256 private DiamondFee;

33:     uint256 private ProjectFee;

34:     uint256 private ResellerFee;

35:     uint256 private totalTwitterReserved;

36:     uint256 public twitterCounter;

40:     bool private isHidden;

41:     bool private isReserved;

42:     bool private isVested;

43:     bool private singleSale;

44:     bool private fixedPrice;

45:     bool private twitterReserved;

46:     bool private isVerified;

47:     bool private isReseller;

48:     bool private preventCancel;

49:     bool private lockPool;

50:     bool private isCancelled;

```

```solidity
File: contracts/ownedPoolContract.sol

9:     address public diamondInterface;

```

```solidity
File: contracts/publicPool.sol

13:     IOracle public spotAggregator;

19:     address private WETH;

21:     address payable private DiamondSwapFeeReceiver;

22:     address payable private ProjectFeeReceiver;

23:     address payable private ResellerFeeReceiver;

24:     address payable private ResellerCommunityRewards;

26:     uint256 private counter;

27:     uint256 private placeInLine;

28:     uint256 private DiamondFee;

29:     uint256 private ProjectFee;

30:     uint256 private ResellerFee;

32:     bool private isVerified;

33:     bool private isReseller;

34:     bool private isHidden;

35:     bool private lockPool;

37:     mapping(address => uint256) private contributorAmounts;

38:     mapping(address => uint256) private contributorCounter;

39:     mapping(address => bool) private poolContributor;

41:     address[] public contributors;

```

```solidity
File: contracts/publicPoolContract.sol

10:     address public diamondInterface;

```

```solidity
File: contracts/resellerCommunityRewards.sol

9:     IDiamondSwap public DiamondSwap;

12:     address public DAO;

13:     address public diamondSwap;

15:     uint256 public tTotal;

16:     uint256 public rewardsPoolAmount;

17:     uint256 private lastProcessedIndex;

18:     uint256 public ShareHoldersCount;

```

</details> 
 


 ### <a name="NC-33"></a>[NC-33]
 ### Use the latest solidity version for deployment  
Upgrading to a newer Solidity release can optimize gas usage, take advantage of new features and improve overall contract efficiency. Where possible, based on compatibility requirements, it is recommended to use newer/latest solidity version to take advantage of the latest optimizations and features. You can see the latest version [here](https://soliditylang.org/blog/category/releases/)

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/interface/IDiamondContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IDiamondEvents.sol

1: pragma solidity 0.8.15;

```

```solidity
File: contracts/interface/IDiamondStaking.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IDiamondSwap.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IOracle.sol

3: pragma solidity >=0.7.6;

```

```solidity
File: contracts/interface/IOwnedPoolContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IPublicPoolContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/libraries/DiamondEvents.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/libraries/DiamondStructs.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/ownedPool.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/ownedPoolContract.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/publicPool.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/publicPoolContract.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/resellerCommunityRewards.sol

2: pragma solidity 0.8.20;

```

</details> 
 


 ### <a name="NC-34"></a>[NC-34]
 ### Use uint256/int256 Instead of uint/int
It is recommended to use uint256 and int256 for clarity and consistency in specifying integer types.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/interface/IDiamondContract.sol

82:         uint poolType

```

```solidity
File: contracts/interface/IDiamondEvents.sol

155:         uint poolType,

```

```solidity
File: contracts/interface/IDiamondSwap.sol

33:         uint _poolType,

```

</details> 
 


 ### <a name="NC-35"></a>[NC-35]
 ### Consider bounding input array length
The functions below take in an unbounded array, and make function calls for entries in the array. While the function will revert if it eventually runs out of gas, it may be a nicer user experience to require() that the length of the array is below some reasonable maximum, so that the user doesnt have to use up a full transactions gas only to see that the transaction reverts

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

232:             for (uint256 i = 0; i < twitterUsers.length; i++) {

241:             for (uint256 i = 0; i < specificUsers.length; i++) {

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

260:         for (uint256 i = 0; i < User.vestingTimestamps[poolAddress].length; i++) {

295:         for (uint256 i = 0; i < User.vestingTimestamps[poolAddress].length; i++) {

332:             for (uint256 i = 0; i < reservedAmount.length; i++) {

```

```solidity
File: contracts/ownedPool.sol

427:         for(uint256 i = 0; i < handles.length; i++) {

```

```solidity
File: contracts/resellerCommunityRewards.sol

68:         for(uint8 i = 0; i <= 49 && i < ShareHolders.length; i++) {

```

</details> 
 


 ### <a name="NC-36"></a>[NC-36]
 ### Event is missing `indexed` fields
Index event fields make the field more quickly accessible to off-chain tools that parse events. However, note that each index field costs extra gas during emission, so it's not necessarily best to index the maximum allowed per event (three fields). Each event should use three indexed fields if there are three or more fields, and gas usage is not particularly of concern for the events in question. If there are fewer than three fields, all of the fields should be indexed.

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/interface/IDiamondEvents.sol

20:     event influencerVerified(

65:     event tokensReservedTwitter(

75:     event reservedPoolCancelledTwitter(

114:     event PoolCreationDetail(

119:     event PoolVisibilityOption(

124:     event PoolPricingDetail(

130:     event PoolTransferVestingDetail(

136:     event ContributionToPool(

141:     event PoolStructUpdated(

147:     event PoolCreatorUpdated(

152:     event PoolPurchaseDataPart1(

162:     event PoolPurchaseDataPart2(

```

</details> 
 


 ### <a name="NC-37"></a>[NC-37]
 ### Strings should use double quotes rather than single quotes

#### Impact:
Using consistent double quotes for strings improves code readability and maintainability. Also see it here https://docs.soliditylang.org/en/v0.8.20/style-guide.html#other-recommendations

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/libraries/DiamondStructs.sol

14:         string verifiedUser; // List users kyc'd name, i.e. twitter or tg @'s

```

</details> 
 


 ### <a name="NC-38"></a>[NC-38]
 ### Consider using `SafeTransferLib.safeTransferETH()` or `Address.sendValue()` for clearer semantic meaning
These Functions indicate their purpose with their name more clearly than using low-level calls.  

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

73:         (bool success, ) = address(PlatformInfo.FraudFundsWallet).call{value: users[userWallet].claimableETH}("");

450:         (bool success, ) = address(msg.sender).call{value: amount}("");

```

```solidity
File: contracts/ownedPool.sol

266:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

268:             (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

270:             (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

272:             (success, ) = payable(ResellerCommunityRewards).call{value: resellerCommunityFee}("");

274:             (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

280:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

282:                 (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

284:                 (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

289:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

291:                 (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

293:                 (success, ) = payable(ResellerCommunityRewards).call{value: resellerCommunityFee}("");

295:                 (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

301:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

303:             (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

```

```solidity
File: contracts/publicPool.sol

137:         (bool success, ) = payable(_DiamondInterface).call{value: newPrice}("");

140:             (success, ) = payable(_to).call{value: (returnETH)}("ETH Returned to Sender");

209:             (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

213:             (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

217:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

223:                 (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

227:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

232:                 (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

236:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

242:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

```

```solidity
File: contracts/resellerCommunityRewards.sol

72:                 (bool success, ) = payable(diamondSwap).call{value: rewardsPoolAmount}("");

```

</details> 
 


 ### <a name="NC-39"></a>[NC-39]
 ### Consider Turning Utility Contract Into a Library
Contracts containing only utility functions should be made into libraries.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/interface/IDiamondEvents.sol

5: interface DiamondEvents {

```

</details> 
 


 ### <a name="NC-40"></a>[NC-40]
 ### Variables need not be initialized to zero
The default value for variables is zero, so initializing them to zero is superfluous.  

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

232:             for (uint256 i = 0; i < twitterUsers.length; i++) {

241:             for (uint256 i = 0; i < specificUsers.length; i++) {

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

260:         for (uint256 i = 0; i < User.vestingTimestamps[poolAddress].length; i++) {

263:             uint256 claimableAmountForThisPurchase = 0;

295:         for (uint256 i = 0; i < User.vestingTimestamps[poolAddress].length; i++) {

298:             uint256 claimableAmountForThisPurchase = 0;

332:             for (uint256 i = 0; i < reservedAmount.length; i++) {

```

```solidity
File: contracts/ownedPool.sol

427:         for(uint256 i = 0; i < handles.length; i++) {

```

```solidity
File: contracts/publicPool.sol

108:         for(uint loopCounter = 0; transferAmount != 0 && loopCounter <= 100; loopCounter++) {

```

```solidity
File: contracts/resellerCommunityRewards.sol

68:         for(uint8 i = 0; i <= 49 && i < ShareHolders.length; i++) {

```

</details> 
 


 ### <a name="NC-41"></a>[NC-41]
 ### Import Whole Files Instead of Specific Identifiers
Import declarations should import specific identifiers, rather than the whole file.

*Instances (20)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

7: import "./contracts/interface/IPublicPoolContract.sol";

8: import "./contracts/interface/IOwnedPoolContract.sol";

9: import "./contracts/interface/IDiamondContract.sol";

10: import "./contracts/interface/IDiamondStaking.sol";

11: import "./contracts/libraries/DiamondStructs.sol";

12: import "./contracts/libraries/DiamondEvents.sol";

13: import "./contracts/libraries/UpdateDiamondStruct.sol";

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

6: import "./DiamondEvents.sol";

7: import "./DiamondStructs.sol";

8: import "../resellerCommunityRewards.sol";

9: import "../interface/IDiamondStaking.sol";

```

```solidity
File: contracts/ownedPool.sol

5: import "./interface/IOracle.sol";

6: import "./interface/IDiamondSwap.sol";

```

```solidity
File: contracts/ownedPoolContract.sol

4: import "./ownedPool.sol";

```

```solidity
File: contracts/publicPool.sol

5: import "./interface/IDiamondSwap.sol";

6: import "./interface/IDiamondContract.sol";

7: import "./interface/IOracle.sol";

8: import "./libraries/DiamondStructs.sol";

```

```solidity
File: contracts/publicPoolContract.sol

5: import "./publicPool.sol";

```

```solidity
File: contracts/resellerCommunityRewards.sol

4: import "./interface/IDiamondSwap.sol";

```

</details> 
 


 ### <a name="NC-42"></a>[NC-42]
 ### Empty receive()/fallback() function
If the intention is for Ether sent by a caller to be used for an actual purpose (i.e. the function is not just a WETH withdraw() handler), the function should call another function (e.g. call weth.deposit() and use the token on the caller's behalf) or at least emit an event to track that funds were sent directly to it.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

51:     }

```

```solidity
File: contracts/ownedPool.sol

83:     }

```

```solidity
File: contracts/publicPool.sol

76:     }

```

```solidity
File: contracts/resellerCommunityRewards.sol

35:     }

```

</details> 
 


 ### <a name="NC-43"></a>[NC-43]
 ### Consider implementing two-step procedure for updation
A typo error or a copy-paste error can end up bricking the whole protocol. 

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/interface/IDiamondContract.sol

52:     function setFixedPrice(

62:     function setTwitterUsers(

```

</details> 
 


 ### <a name="NC-44"></a>[NC-44]
 ### Consider moving msg.sender checks to modifiers
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.  

*Instances (41)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

39:         _grantRole (DEFAULT_ADMIN_ROLE, msg.sender);

270:         (uint256 amountClaimed, bool vestingComplete) = UpdateDiamondStruct._claimVestedTokens(poolAddress, tokenAddress, users[msg.sender], pools[tokenAddress]);

272:         amountClaimed = IDiamondContract(poolAddress).claimVestedTokens(amountClaimed, payable(msg.sender));

274:         emit DiamondEvents.vestedTokensClaimed(msg.sender, poolAddress, amountClaimed, vestingComplete);

285:         (_claimableAmount, _vestedAmount, _claimedFromPool) = UpdateDiamondStruct._checkVestedTokens(poolAddress, tokenAddress, users[msg.sender], pools[tokenAddress]);

321:             IERC20Upgradeable(poolData[0]).safeTransferFrom(msg.sender, Pool, amount);

336:             emit DiamondEvents.PoolOwnershipDetail(Pool, poolData[1], msg.sender);

365:                     emit DiamondEvents.PoolOwnershipDetail(Pool, poolData[1], msg.sender);

386:         }(msg.sender, amount, resellerCode, PlatformInfo.DiamondFee, PlatformInfo.priceOracle, PlatformInfo.DiamondSwapFeeReceiver);

414:             users[msg.sender].claimedTokens[pool][block.timestamp],

415:             users[msg.sender].vestedTokens[pool][block.timestamp],

423:             msg.sender,

437:         IERC20Upgradeable(IDiamondContract(pool)._token.address).safeTransferFrom(msg.sender, pool, amount);

438:         IDiamondContract(payable(pool)).contribute(amount, msg.sender);

446:         require(!users[msg.sender].locked);

447:         uint256 amount = users[msg.sender].claimableETH;

449:         users[msg.sender].claimableETH = 0;

450:         (bool success, ) = address(msg.sender).call{value: amount}("");

453:         emit DiamondEvents.ETHClaimed(msg.sender, amount); 

460:         bool cancelled = IDiamondContract(pool).cancelPool(payable(msg.sender));

466:         emit DiamondEvents.poolCanceled(pool, msg.sender);

475:         IDiamondContract(pool).updateVisibility(msg.sender, isHidden);

487:         uint256 _amount = IDiamondContract(_pool).updateOwner(msg.sender, newOwner, false);

488:         UpdateDiamondStruct._transferPoolOwner(_token, _pool, _amount, users[msg.sender], users[newOwner]);

490:         emit DiamondEvents.poolOwnershipUpdated(_pool, msg.sender, newOwner);

```

```solidity
File: contracts/ownedPool.sol

80:         _grantRole(DIAMOND_ADMIN, address(msg.sender));

```

```solidity
File: contracts/publicPool.sol

65:         _grantRole(DIAMOND_ADMIN, address(msg.sender));

```

```solidity
File: contracts/resellerCommunityRewards.sol

27:     constructor(address CARATS, address stakingContract, address DSMain) Ownable(msg.sender) {

42:         require(amount > 0 && amount <= ERC20($CARATS).balanceOf(msg.sender));

43:         ERC20($CARATS).transferFrom(msg.sender, address(this), amount);

44:         if(!IsShareHolder[msg.sender]) {

45:             IsShareHolder[msg.sender] = true;

46:             ShareHolders.push(msg.sender);

48:             ShareHoldersIndex[msg.sender] = ShareHoldersCount;

50:         ShareHoldersAmounts[msg.sender] += amount;

55:         require(amount > 0 && amount <= ShareHoldersAmounts[msg.sender]);

56:         ShareHoldersAmounts[msg.sender] -= amount;

57:         if(ShareHoldersAmounts[msg.sender] == 0) {

58:             IsShareHolder[msg.sender] = false;

60:             ShareHolders[ShareHoldersIndex[msg.sender]] = ShareHolders[ShareHolders.length - 1];

64:         ERC20($CARATS).transferFrom(address(this), msg.sender, amount);

```

</details> 
 


 ### <a name="NC-45"></a>[NC-45]
 ### Dont use _msgSender() if not supporting EIP-2771
Use msg.sender if the code does not implement EIP-2771 trusted forwarder support

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ownedPoolContract.sol

15:         _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());

16:         _grantRole(UPGRADER_ROLE, _msgSender());

33:         revokeRole(DEFAULT_ADMIN_ROLE, _msgSender());

```

```solidity
File: contracts/publicPoolContract.sol

16:         _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());

17:         _grantRole(UPGRADER_ROLE, _msgSender());

34:         revokeRole(DEFAULT_ADMIN_ROLE, _msgSender());

```

</details> 
 


 ### <a name="NC-46"></a>[NC-46]
 ### Array indices should be referenced via enums rather than numeric literals

#### Impact:
Referencing array indices via enums can improve code readability and maintainability.

*Instances (108)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

218:         uint256[3] memory _vestingData,

219:         bool[5] memory dataChecks, // Boolean [vested,fixed price,hidden,prevent cancellation]

226:         address[2] memory _addresses, // [Token Address, Owner Address]

229:         if(twitterAmounts[0] > 0) {

230:             pools[_addresses[0]].isTwitterReserved[newPool] = true;

233:             UpdateDiamondStruct._updateTwitterReservedPool(_addresses[0], newPool, twitterAmounts[i], twitterUsers[i], pools[_addresses[0]], userHandles[twitterUsers[i]]);

233:             UpdateDiamondStruct._updateTwitterReservedPool(_addresses[0], newPool, twitterAmounts[i], twitterUsers[i], pools[_addresses[0]], userHandles[twitterUsers[i]]);

239:         if(specificAmounts[0] > 0) {

240:             pools[_addresses[0]].isReserved[newPool] = true;

242:             UpdateDiamondStruct._updateUserReservedPool(_addresses[0], newPool, specificAmounts[i], specificUsers[i], pools[_addresses[0]], users[specificUsers[i]]);

242:             UpdateDiamondStruct._updateUserReservedPool(_addresses[0], newPool, specificAmounts[i], specificUsers[i], pools[_addresses[0]], users[specificUsers[i]]);

248:         if (dataChecks[0]) {

249:             UpdateDiamondStruct._updateVesting(newPool, _vestingData, pools[_addresses[0]]);

250:             IDiamondContract(newPool).updateVested(dataChecks[0], _vestingData[2]);

250:             IDiamondContract(newPool).updateVested(dataChecks[0], _vestingData[2]);

252:             emit DiamondEvents.tokenVested(newPool, _vestingData[0], _vestingData[1], _vestingData[2]);

252:             emit DiamondEvents.tokenVested(newPool, _vestingData[0], _vestingData[1], _vestingData[2]);

252:             emit DiamondEvents.tokenVested(newPool, _vestingData[0], _vestingData[1], _vestingData[2]);

255:         if(dataChecks[1]) {

257:             pools[_addresses[0]].fixedPricePerToken[newPool] = (fixedEthPrice * 10**18) / amount;

260:         IDiamondContract(newPool).updateVisibility(_addresses[1], dataChecks[2]);

260:         IDiamondContract(newPool).updateVisibility(_addresses[1], dataChecks[2]);

261:         pools[_addresses[0]].hidden[newPool] = dataChecks[2];

261:         pools[_addresses[0]].hidden[newPool] = dataChecks[2];

262:         IDiamondContract(newPool).preventCancellation(dataChecks[3]);

263:         pools[_addresses[0]].PoolCreatedTimestamp[newPool] = block.timestamp;

291:         uint256[3] memory vestingData, //vestingPercent(Divisible by 1000),[vestingSchedule(seconds between releases),initialDistributionPercent(Divisible by 1000)]

293:         bool[5] memory dataChecks, // Boolean [vested,fixed price,hidden,prevent cancellation,singleSale]

299:         address[2] memory poolData, // [Token Address, Owner Address]

300:         uint256[2] memory priceParams // [discountPercent,fixedETHPrice(Cost for entire pool WEI)]

309:                     poolData[0] != address(0)

313:                 if(vestingData[0] == 0 && vestingData[1] == 0 && vestingData[2] == 0 && priceParams[0] > 0) {

313:                 if(vestingData[0] == 0 && vestingData[1] == 0 && vestingData[2] == 0 && priceParams[0] > 0) {

313:                 if(vestingData[0] == 0 && vestingData[1] == 0 && vestingData[2] == 0 && priceParams[0] > 0) {

313:                 if(vestingData[0] == 0 && vestingData[1] == 0 && vestingData[2] == 0 && priceParams[0] > 0) {

314:                     vestingData[0] = 1000;

315:                     vestingData[1] = 480;

316:                     vestingData[2] = 0;

317:                     dataChecks[0] = true;

320:             address Pool = IOwnedPoolContract(payable(PlatformInfo.ownedPoolContract)).createOwnedPool(poolData[0], specificUsers[0], priceParams[0], poolData[1]);

320:             address Pool = IOwnedPoolContract(payable(PlatformInfo.ownedPoolContract)).createOwnedPool(poolData[0], specificUsers[0], priceParams[0], poolData[1]);

320:             address Pool = IOwnedPoolContract(payable(PlatformInfo.ownedPoolContract)).createOwnedPool(poolData[0], specificUsers[0], priceParams[0], poolData[1]);

320:             address Pool = IOwnedPoolContract(payable(PlatformInfo.ownedPoolContract)).createOwnedPool(poolData[0], specificUsers[0], priceParams[0], poolData[1]);

321:             IERC20Upgradeable(poolData[0]).safeTransferFrom(msg.sender, Pool, amount);

322:             amount = IERC20(poolData[0]).balanceOf(Pool);

325:             IDiamondContract(Pool).updateAmounts(publicAmount, specificAmounts[0], poolType);

326:             UpdateDiamondStruct._updatePoolStruct(pools[poolData[0]], publicAmount, poolType, Pool, poolData[1], priceParams[0]);

326:             UpdateDiamondStruct._updatePoolStruct(pools[poolData[0]], publicAmount, poolType, Pool, poolData[1], priceParams[0]);

326:             UpdateDiamondStruct._updatePoolStruct(pools[poolData[0]], publicAmount, poolType, Pool, poolData[1], priceParams[0]);

328:             UpdateDiamondStruct._updatePoolCreator(pools[poolData[0]], poolData[0], Pool, amount, users[poolData[1]], PublicSets, publicAmount);

328:             UpdateDiamondStruct._updatePoolCreator(pools[poolData[0]], poolData[0], Pool, amount, users[poolData[1]], PublicSets, publicAmount);

328:             UpdateDiamondStruct._updatePoolCreator(pools[poolData[0]], poolData[0], Pool, amount, users[poolData[1]], PublicSets, publicAmount);

330:             updatePoolData(vestingData, dataChecks, priceParams[1], amount, specificUsers, specificAmounts, twitterUsers, twitterAmounts, poolData, Pool);

333:             emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(poolData[0]).name(), ERC20Upgradeable(poolData[0]).symbol(), ERC20Upgradeable(poolData[0]).decimals());

333:             emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(poolData[0]).name(), ERC20Upgradeable(poolData[0]).symbol(), ERC20Upgradeable(poolData[0]).decimals());

333:             emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(poolData[0]).name(), ERC20Upgradeable(poolData[0]).symbol(), ERC20Upgradeable(poolData[0]).decimals());

333:             emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(poolData[0]).name(), ERC20Upgradeable(poolData[0]).symbol(), ERC20Upgradeable(poolData[0]).decimals());

333:             emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(poolData[0]).name(), ERC20Upgradeable(poolData[0]).symbol(), ERC20Upgradeable(poolData[0]).decimals());

333:             emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(poolData[0]).name(), ERC20Upgradeable(poolData[0]).symbol(), ERC20Upgradeable(poolData[0]).decimals());

333:             emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(poolData[0]).name(), ERC20Upgradeable(poolData[0]).symbol(), ERC20Upgradeable(poolData[0]).decimals());

334:             emit DiamondEvents.PoolStructUpdated(poolData[0], Pool, publicAmount, poolType);

335:             emit DiamondEvents.PoolCreatorUpdated(poolData[0], Pool, amount);

336:             emit DiamondEvents.PoolOwnershipDetail(Pool, poolData[1], msg.sender);

338:             emit DiamondEvents.PoolVisibilityOption(Pool, !dataChecks[2], dataChecks[2]);

338:             emit DiamondEvents.PoolVisibilityOption(Pool, !dataChecks[2], dataChecks[2]);

339:             bool discountAvailable = priceParams[0] > 0 ? true : false;

340:             emit DiamondEvents.PoolPricingDetail(Pool, dataChecks[1], discountAvailable, priceParams[0]);

340:             emit DiamondEvents.PoolPricingDetail(Pool, dataChecks[1], discountAvailable, priceParams[0]);

341:             bool transferOnCreation = (poolData[0] == poolData[1]) ? false : true;

341:             bool transferOnCreation = (poolData[0] == poolData[1]) ? false : true;

342:             emit DiamondEvents.PoolTransferVestingDetail(Pool, dataChecks[0], transferOnCreation, poolData[1]);

342:             emit DiamondEvents.PoolTransferVestingDetail(Pool, dataChecks[0], transferOnCreation, poolData[1]);

347:                 address token = poolData[0];

349:                 if (pools[poolData[0]].publicPool) {

350:                     address Pool = pools[poolData[0]].publicPoolAddress;

351:                     contributeToPool(_amount, Pool, poolData[1]);

353:                     emit DiamondEvents.ContributionToPool(Pool, poolData[1], _amount);

355:                     address Pool = IPublicPoolContract(payable(address(PlatformInfo.publicPoolContract))).createPublicPool(token, _amount, poolData[1]);

357:                     IERC20Upgradeable(token).safeTransferFrom(poolData[1], Pool, _amount);

358:                     UpdateDiamondStruct._updatePoolCreator(pools[token], token, Pool, _amount, users[poolData[1]], PublicSets, _amount);

362:                     emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(token).name(), ERC20Upgradeable(token).symbol(), ERC20Upgradeable(token).decimals());

362:                     emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(token).name(), ERC20Upgradeable(token).symbol(), ERC20Upgradeable(token).decimals());

362:                     emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(token).name(), ERC20Upgradeable(token).symbol(), ERC20Upgradeable(token).decimals());

362:                     emit DiamondEvents.NewPoolCreated(poolData[0], poolData[1], Pool, amount, priceParams[0], priceParams[1], ERC20Upgradeable(token).name(), ERC20Upgradeable(token).symbol(), ERC20Upgradeable(token).decimals());

363:                     emit DiamondEvents.PoolStructUpdated(poolData[0], Pool, amount, poolType);

364:                     emit DiamondEvents.PoolCreatorUpdated(poolData[0], Pool, amount);

365:                     emit DiamondEvents.PoolOwnershipDetail(Pool, poolData[1], msg.sender);

367:                     emit DiamondEvents.PoolVisibilityOption(Pool, !dataChecks[2], dataChecks[2]);

367:                     emit DiamondEvents.PoolVisibilityOption(Pool, !dataChecks[2], dataChecks[2]);

368:                     bool discountAvailable = priceParams[0] > 0 ? true : false;

369:                     emit DiamondEvents.PoolPricingDetail(Pool, dataChecks[1], discountAvailable, priceParams[0]);

369:                     emit DiamondEvents.PoolPricingDetail(Pool, dataChecks[1], discountAvailable, priceParams[0]);

370:                     bool transferOnCreation = (poolData[0] == poolData[1]) ? false : true;

370:                     bool transferOnCreation = (poolData[0] == poolData[1]) ? false : true;

371:                     emit DiamondEvents.PoolTransferVestingDetail(Pool, dataChecks[0], transferOnCreation, poolData[1]);

371:                     emit DiamondEvents.PoolTransferVestingDetail(Pool, dataChecks[0], transferOnCreation, poolData[1]);

```

```solidity
File: contracts/interface/IDiamondSwap.sol

35:         uint256[6] calldata _tokenInformation,

36:         uint256[3] memory vestingData,

```

```solidity
File: contracts/libraries/DiamondStructs.sol

99:         uint256[6] tokenInformation; // Percent, Schedule, Initial, Discount, Fixed price, Token Amount

111:         uint256[3] VestingData; // Claimable amount, vesting amount, vesting time

112:         uint256[6] tokenInformation; // Percent, Schedule, Initial, Discount, Fixed price, Token Amount

127:         uint256[6] tokenInformation; // Percent, Schedule, Initial, Discount, Fixed price, public Amount

128:         uint256[5] poolInformation; // Tokens For Sale, Tokens Sold, Total Amount Contributed, ETH Earned, placeInLine

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

331:         if(reservedAmount[0] > 0) {

408:         uint256[3] memory vestingData,

414:         Pool.Vesting[newPool].distributionPercent = vestingData[0]; // Whole number divisible by 1000

415:         Pool.Vesting[newPool].distributionSchedule = vestingData[1]; // Time period in seconds

416:         Pool.Vesting[newPool].initialDistributionPercent = vestingData[2]; // Whole number divisible by 1000

```

</details> 
 


 ### <a name="NC-47"></a>[NC-47]
 ### <array>.length should not be looked up in every loop of a for-loop
The overheads outlined below are PER LOOP, excluding the first loop. Storage arrays incur a Gwarmaccess (100 gas), memory arrays use MLOAD (3 gas), calldata arrays use CALLDATALOAD (3 gas). Caching the length changes each of these to a DUP<N> (3 gas), and gets rid of the extra DUP<N> needed to store the stack offset.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

232:             for (uint256 i = 0; i < twitterUsers.length; i++) {

241:             for (uint256 i = 0; i < specificUsers.length; i++) {

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

332:             for (uint256 i = 0; i < reservedAmount.length; i++) {

```

```solidity
File: contracts/ownedPool.sol

427:         for(uint256 i = 0; i < handles.length; i++) {

```

</details> 
 


 ### <a name="NC-48"></a>[NC-48]
 ### Don't initialize variables with default value

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

232:             for (uint256 i = 0; i < twitterUsers.length; i++) {

241:             for (uint256 i = 0; i < specificUsers.length; i++) {

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

260:         for (uint256 i = 0; i < User.vestingTimestamps[poolAddress].length; i++) {

262:             bool vested = false;

263:             uint256 claimableAmountForThisPurchase = 0;

295:         for (uint256 i = 0; i < User.vestingTimestamps[poolAddress].length; i++) {

297:             bool vested = false;

298:             uint256 claimableAmountForThisPurchase = 0;

332:             for (uint256 i = 0; i < reservedAmount.length; i++) {

```

```solidity
File: contracts/ownedPool.sol

427:         for(uint256 i = 0; i < handles.length; i++) {

```

```solidity
File: contracts/publicPool.sol

108:         for(uint loopCounter = 0; transferAmount != 0 && loopCounter <= 100; loopCounter++) {

```

```solidity
File: contracts/resellerCommunityRewards.sol

68:         for(uint8 i = 0; i <= 49 && i < ShareHolders.length; i++) {

```

</details> 
 


 ### <a name="NC-49"></a>[NC-49]
 ### Long revert strings

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ownedPool.sol

115:                 require(to == address(buyer) || twitterPurchase, "You are not authorized to purchase from this pool");

118:             require(amount == _balance, "Transfer amount must be equal to the reserved amount");

329:         require(address(user) == address(poolOwner), "Only pool owner can call this function");

352:         require(address(owner) == address(poolOwner), "Must be poool owner to update ownership");

366:         require(address(User) == address(poolOwner), "Only pool owner can call this function");

367:         require(!preventCancel, "Transferred pool cannot be cancelled");

368:         require(!isCancelled, "This pool has already been cancelled");

417:         require(address(user) == address(poolOwner), "Only pool owner can call this function");

```

```solidity
File: contracts/ownedPoolContract.sol

25:         require(_token != address(0), "Cannot create a pool for the zero address");

```

```solidity
File: contracts/publicPool.sol

272:         require(poolContributor[user], "You are not contributing to this pool");

288:         require(poolContributor[User] && contributorAmounts[User] > 0, "Only pool contributors can call this function");

```

```solidity
File: contracts/publicPoolContract.sol

26:         require(_token != address(0), "Cannot create a pool for the zero address");

```

</details> 
 


## Gas Optimizations


 ### <a name="GAS-1"></a>[GAS-1]
 ### Enable IR-based code generation
By using `--via-ir` or `{"viaIR": true}`, the compiler is able to use more advanced [multi-function optimizations](https://docs.soliditylang.org/en/v0.8.17/ir-breaking-changes.html#solidity-ir-based-codegen-changes), for extra gas savings.

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/interface/IDiamondContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IDiamondEvents.sol

1: pragma solidity 0.8.15;

```

```solidity
File: contracts/interface/IDiamondStaking.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IDiamondSwap.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IOracle.sol

3: pragma solidity >=0.7.6;

```

```solidity
File: contracts/interface/IOwnedPoolContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IPublicPoolContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/libraries/DiamondEvents.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/libraries/DiamondStructs.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/ownedPool.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/ownedPoolContract.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/publicPool.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/publicPoolContract.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/resellerCommunityRewards.sol

2: pragma solidity 0.8.20;

```

</details> 
 


 ### <a name="GAS-2"></a>[GAS-2]
 ### Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18)
While the compiler knows to optimize away the exponentiation, its still better coding practice to use idioms that do not require compiler optimization, if they exist.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

257:             pools[_addresses[0]].fixedPricePerToken[newPool] = (fixedEthPrice * 10**18) / amount;

```

```solidity
File: contracts/ownedPool.sol

172:         tokenAmount = ((price * 10**18) / weiPerToken);

176:             tokenAmount = ((price * 10**18) / pricePerTokenWei);

407:         require((weiAmount * 10**18) > amount);

410:         pricePerTokenWei = (weiAmount * 10**18) / amount;

```

```solidity
File: contracts/publicPool.sol

105:         uint256 pricePerToken = (newPrice * 10**18) / amount;

164:         tokenAmount *= 10**18;

```

</details> 
 


 ### <a name="GAS-3"></a>[GAS-3]
 ### Nesting if-statements is cheaper than using &&
Nesting if-statements avoids the stack operations of setting up and using an extra jumpdest, and saves 6 [gas](https://gist.github.com/IllIllI000/7f3b818abecfadbef93b894481ae7d19)

*Instances (37)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

37:         require(publicPoolCreator != address(0) && ownedPoolCreator != address(0));

82:         require(feePercent <= 100 && diamondFeeReceiver != address(0));

115:         require(userHandles[handle].userAddress == address(0) && account != address(0));

304:                     &&

306:                     &&

307:                     specificUsers.length <= 100 && twitterUsers.length <= 100

308:                     &&

313:                 if(vestingData[0] == 0 && vestingData[1] == 0 && vestingData[2] == 0 && priceParams[0] > 0) {

313:                 if(vestingData[0] == 0 && vestingData[1] == 0 && vestingData[2] == 0 && priceParams[0] > 0) {

313:                 if(vestingData[0] == 0 && vestingData[1] == 0 && vestingData[2] == 0 && priceParams[0] > 0) {

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

26:         require(pool != address(0) && token != address(0));

72:         require(pool != address(0) && token != address(0));

106:         require(token != address(0) && pool != address(0) && buyer != address(0) && owner != address(0));

106:         require(token != address(0) && pool != address(0) && buyer != address(0) && owner != address(0));

106:         require(token != address(0) && pool != address(0) && buyer != address(0) && owner != address(0));

124:         require(_pool != address(0) && _token != address(0));

144:         require(_pool != address(0) && _token != address(0));

189:         require(_pool != address(0) && _token != address(0));

226:         require(_pool != address(0) && _token != address(0));

254:         require(poolAddress != address(0) && tokenAddress != address(0));

264:             while (block.timestamp >= (Pool.Vesting[poolAddress].distributionSchedule + User.vestingTime[poolAddress][User.vestingTimestamps[poolAddress][i]]) && !vested) {

290:         require(poolAddress != address(0) && tokenAddress != address(0));

300:             while (block.timestamp >= (Pool.Vesting[poolAddress].distributionSchedule + User.vestingTime[poolAddress][User.vestingTimestamps[poolAddress][i]]) && !vested) {

393:         require(pool != address(0) && token != address(0));

397:         if(pool != address(0) && token != address(0)){

```

```solidity
File: contracts/ownedPool.sol

110:         if(twitterReserved && twitterHandle[handle] > 0) {

174:         require((amount - rangeAmount) <= tokenAmount && tokenAmount <= (amount + rangeAmount), "Invalid amount, adjust range");

178:             require ((amount - rangeAmount) <= tokenAmount && tokenAmount <= (amount + rangeAmount), "Invalid amount, adjust range");

223:             if(amount == reservedTokens && twitterPurchase) {

265:         if(isVerified && isReseller) {

```

```solidity
File: contracts/publicPool.sol

108:         for(uint loopCounter = 0; transferAmount != 0 && loopCounter <= 100; loopCounter++) {

166:         require((amount - rangeAmount) <= tokenAmount && tokenAmount <= (amount + rangeAmount), "Invalid amount, adjust range");

207:         if(isVerified && isReseller) {

288:         require(poolContributor[User] && contributorAmounts[User] > 0, "Only pool contributors can call this function");

```

```solidity
File: contracts/resellerCommunityRewards.sol

42:         require(amount > 0 && amount <= ERC20($CARATS).balanceOf(msg.sender));

55:         require(amount > 0 && amount <= ShareHoldersAmounts[msg.sender]);

68:         for(uint8 i = 0; i <= 49 && i < ShareHolders.length; i++) {

```

</details> 
 


 ### <a name="GAS-4"></a>[GAS-4]
 ### Consider using = instead of += and -= for gas efficiency
Using = instead of += and -= can save gas in certain scenarios. Consider using = when appropriate.

*Instances (25)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

272:             _claimableAmount += claimableAmountForThisPurchase;

273:             _vestedAmount += User.vestedTokens[poolAddress][User.vestingTimestamps[poolAddress][i]];

274:             _totalReceived += User.claimedTokens[poolAddress][User.vestingTimestamps[poolAddress][i]];

314:             _claimableAmount += claimableAmountForThisPurchase;

333:                 publicAmount -= reservedAmount[i];

395:         User.claimableETH += amount;

396:         User.totalETHEarned += amount;

```

```solidity
File: contracts/ownedPool.sol

219:             publicAmount -= amount;

220:             _balance -= amount;

232:             _balance -= amount;

242:             amount -= reservedTokens;

243:             publicAmount -= amount;

332:         _balance += tokenAmount;

333:         publicAmount += tokenAmount;

```

```solidity
File: contracts/publicPool.sol

118:                 transferAmount -= _contributorAmount;

123:             totalETHSent += contributorETH;

124:             _balance -= _contributorAmount;

211:                 diamondFee += projectFee;

215:                 diamondFee += resellerFee;

225:                     diamondFee += projectFee;

234:                     diamondFee += resellerFee;

254:         _balance += tokenAmount;

294:         _balance -= amount;

```

```solidity
File: contracts/resellerCommunityRewards.sol

51:         tTotal += amount;

63:         tTotal -= amount;

```

</details> 
 


 ### <a name="GAS-5"></a>[GAS-5]
 ### Use >= instead of > for gas efficiency
Using >= costs less gas than >. Consider using >= when appropriate.

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

204:         if(publicAmount > 0) {

```

```solidity
File: contracts/ownedPool.sol

169:         if(discountPercent > 0) {

199:        if(ResellerFee > 0) {

316:         require(claimableAmount > 0, "No tokens available to claim");

330:         require(tokenAmount > 0, "No tokens sent to pool");

394:         if(_specificAmount > 0) {

```

```solidity
File: contracts/publicPool.sol

53:         require(amount > 0);

113:             if(_contributorAmount > transferAmount) {

139:         if(returnETH > 0) {

186:        if(ResellerFee > 0) {

253:         require(tokenAmount > 0, "No tokens sent to pool");

```

```solidity
File: contracts/resellerCommunityRewards.sol

42:         require(amount > 0 && amount <= ERC20($CARATS).balanceOf(msg.sender));

55:         require(amount > 0 && amount <= ShareHoldersAmounts[msg.sender]);

```

</details> 
 


 ### <a name="GAS-6"></a>[GAS-6]
 ### Using bools for storage incurs overhead
Use uint256(1) and uint256(2) for true/false to avoid a Gwarmaccess (100 gas), and to avoid Gsset (20000 gas) when changing from ‘false’ to ‘true’, after having been ‘true’ in the past. See [source](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/58f635312aa21f947cae5f8578638a85aa2519f5/contracts/security/ReentrancyGuard.sol#L23-L27).

*Instances (25)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

24:     mapping (address => bool) isPool;

```

```solidity
File: contracts/libraries/DiamondStructs.sol

59:         bool publicPool; // Check for many to many pool

67:         mapping (address => bool) isReserved; // Check if pool has reserved tokens

68:         mapping (address => bool) isTwitterReserved; // Check if pool has tokens reserved for twitter handle

69:         mapping (address => bool) isVested; // Checks if pool address is vested

71:         mapping (address => bool) SpecificUser; // quick check for reserved amounts

72:         mapping (string => bool) SpecificUserTwitter; // quick check for twitter reserved tokens

79:         mapping (address => bool) hidden; // visibility of pool

```

```solidity
File: contracts/ownedPool.sol

40:     bool private isHidden;

41:     bool private isReserved;

42:     bool private isVested;

43:     bool private singleSale;

44:     bool private fixedPrice;

45:     bool private twitterReserved;

46:     bool private isVerified;

47:     bool private isReseller;

48:     bool private preventCancel;

49:     bool private lockPool;

50:     bool private isCancelled;

```

```solidity
File: contracts/publicPool.sol

32:     bool private isVerified;

33:     bool private isReseller;

34:     bool private isHidden;

35:     bool private lockPool;

39:     mapping(address => bool) private poolContributor;

```

```solidity
File: contracts/resellerCommunityRewards.sol

21:     mapping(address => bool) IsShareHolder;

```

</details> 
 


 ### <a name="GAS-7"></a>[GAS-7]
 ### Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

232:             for (uint256 i = 0; i < twitterUsers.length; i++) {

241:             for (uint256 i = 0; i < specificUsers.length; i++) {

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

260:         for (uint256 i = 0; i < User.vestingTimestamps[poolAddress].length; i++) {

295:         for (uint256 i = 0; i < User.vestingTimestamps[poolAddress].length; i++) {

332:             for (uint256 i = 0; i < reservedAmount.length; i++) {

```

```solidity
File: contracts/ownedPool.sol

427:         for(uint256 i = 0; i < handles.length; i++) {

```

```solidity
File: contracts/resellerCommunityRewards.sol

68:         for(uint8 i = 0; i <= 49 && i < ShareHolders.length; i++) {

```

</details> 
 


 ### <a name="GAS-8"></a>[GAS-8]
 ### Use calldata instead of memory for function arguments that do not get mutated
Mark data types as `calldata` instead of `memory` where possible. This makes it so that the data is not automatically loaded into memory. If the data passed into the function does not need to be changed (like updating values in an array), it can be passed in as `calldata`. The one exception to this is if the argument must later be passed into another function that takes an argument that specifies `memory` storage.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/interface/IDiamondContract.sol

63:         string[] memory handles,

64:         uint256[] memory amounts

70:         string memory resellerCode,

```

</details> 
 


 ### <a name="GAS-9"></a>[GAS-9]
 ### Consider using assembly for simple zero checks to save gas
Using assembly for simple zero checks can save gas. Consider using assembly when appropriate.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ownedPool.sol

147:             if(_balance == 0) {

216:         if(reservedTokens == 0) {

226:                     if(twitterCounter == 0) {

238:                     if(twitterCounter == 0) {

```

```solidity
File: contracts/publicPool.sol

144:         if(_balance == 0) {

297:         if(_balance == 0) {

```

</details> 
 


 ### <a name="GAS-10"></a>[GAS-10]
 ### Expressions for constant values should use immutable rather than constant

#### Impact:
While it doesnt save any gas because the compiler knows that developers often make this mistake, its still best to use the right tool for the task at hand. There is a difference between constant variables and immutable variables, and they should each be used in their appropriate contexts. constants should be used for literal values written into the code, and immutable variables should be used for expressions, or values calculated in, or passed into the constructor.  

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

25:     bytes32 private constant DIAMOND_CONTRACT = keccak256("IS_CONTRACT");

```

```solidity
File: contracts/ownedPool.sol

52:     bytes32 private constant DIAMOND_ADMIN = keccak256("IS_ADMIN");

```

```solidity
File: contracts/ownedPoolContract.sol

8:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

```

```solidity
File: contracts/publicPool.sol

43:     bytes32 public constant DIAMOND_ADMIN = keccak256("IS_ADMIN");

```

```solidity
File: contracts/publicPoolContract.sol

9:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

```

</details> 
 


 ### <a name="GAS-11"></a>[GAS-11]
 ### Constructors can be marked payable
Payable functions cost less gas to execute, since the compiler does not have to add extra checks to ensure that a payment wasn  t provided. A constructor can safely be marked as payable, since only the deployer would be able to pass funds, and the project itself would not pass any funds.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ownedPool.sol

68:     constructor(address token, address _buyer, uint256 discount, address DiamondInterface, address owner) payable ERC20("UserOwnedPool", "UserOwnedPool"){

```

```solidity
File: contracts/publicPool.sol

52:     constructor(address token, uint256 amount, address DiamondInterface, address owner) payable ERC20 ("Public Pool", "Public Pool") {

```

```solidity
File: contracts/resellerCommunityRewards.sol

27:     constructor(address CARATS, address stakingContract, address DSMain) Ownable(msg.sender) {

```

</details> 
 


 ### <a name="GAS-12"></a>[GAS-12]
 ### Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (50)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

461:         require(cancelled, "Pool already cancelled");

```

```solidity
File: contracts/ownedPool.sol

100:         require(amount <= _balance, "Amount exceeds available tokens");

101:         require(!isHidden, "Pool is currently not available");

115:                 require(to == address(buyer) || twitterPurchase, "You are not authorized to purchase from this pool");

118:             require(amount == _balance, "Transfer amount must be equal to the reserved amount");

122:                 require(amount <= (reservedTokens + publicAmount), "Amount exceeds reserved tokens");

125:                 require(amount <= (reservedTokens + publicAmount), "Amount exceeds reserved tokens");

128:             require(amount <= publicAmount, "Amount exceeds available tokens");

174:         require((amount - rangeAmount) <= tokenAmount && tokenAmount <= (amount + rangeAmount), "Invalid amount, adjust range");

267:             require(success, "Failed to send Diamond Fee");

269:             require(success, "Failed to send Project Fee");

271:             require(success, "Failed to send Reseller Fee");

273:             require(success, "Failed to send Reseller Fee");

275:             require(success, "Failed to send ETH");

281:                 require(success, "Failed to send Diamond Fee");

283:                 require(success, "Failed to send Project Fee");

285:                 require(success, "Failed to send ETH");

290:                 require(success, "Failed to send Diamond Fee");

292:                 require(success, "Failed to send Reseller Fee");

294:                 require(success, "Failed to send Reseller Fee");

296:                 require(success, "Failed to send ETH");

302:             require(success, "Failed to send Diamond Fee");

304:             require(success, "Failed to send ETH");

316:         require(claimableAmount > 0, "No tokens available to claim");

317:         require(vestedUsers[user] >= claimableAmount, "Token amount not claimable");

328:         require(!singleSale, "Invalid pool");

329:         require(address(user) == address(poolOwner), "Only pool owner can call this function");

330:         require(tokenAmount > 0, "No tokens sent to pool");

352:         require(address(owner) == address(poolOwner), "Must be poool owner to update ownership");

366:         require(address(User) == address(poolOwner), "Only pool owner can call this function");

367:         require(!preventCancel, "Transferred pool cannot be cancelled");

368:         require(!isCancelled, "This pool has already been cancelled");

417:         require(address(user) == address(poolOwner), "Only pool owner can call this function");

418:         require(!isCancelled, "This pool no longer exists");

```

```solidity
File: contracts/ownedPoolContract.sol

25:         require(_token != address(0), "Cannot create a pool for the zero address");

```

```solidity
File: contracts/publicPool.sol

93:         require(amount <= _balance, "Amount exceeds available tokens");

94:         require(!isHidden, "Pool is currently not available");

138:             require(success, "Failed to send ETH");

141:                 require(success, "Failed to send ETH");

166:         require((amount - rangeAmount) <= tokenAmount && tokenAmount <= (amount + rangeAmount), "Invalid amount, adjust range");

218:             require(success, "Failed to send Diamond Fee");

228:                 require(success, "Failed to send Diamond Fee");

237:                 require(success, "Failed to send Diamond Fee");

243:             require(success, "Failed to send Diamond Fee");

253:         require(tokenAmount > 0, "No tokens sent to pool");

272:         require(poolContributor[user], "You are not contributing to this pool");

280:         revert("Cannot own a public pool");

288:         require(poolContributor[User] && contributorAmounts[User] > 0, "Only pool contributors can call this function");

```

```solidity
File: contracts/publicPoolContract.sol

26:         require(_token != address(0), "Cannot create a pool for the zero address");

```

```solidity
File: contracts/resellerCommunityRewards.sol

73:                 require(success, "Failed to send Rewards");

```

</details> 
 


 ### <a name="GAS-13"></a>[GAS-13]
 ### Initializers can be marked as payable to save deployment gas
Payable functions cost less gas to execute, because the compiler does not have to add extra checks to ensure that no payment is provided. Initializers can be safely marked as payable, because only the deployer or the factory contract would call the function without carrying any funds.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

27:     function initialize(address publicPoolCreator, address ownedPoolCreator, address stakingContract, address carats) initializer public payable {

```

```solidity
File: contracts/ownedPoolContract.sol

11:     function initialize() initializer public {

```

```solidity
File: contracts/publicPoolContract.sol

12:     function initialize() initializer public {

```

</details> 
 


 ### <a name="GAS-14"></a>[GAS-14]
 ### Avoid fetching a low-level calls return data by using assembly
Even if you dont assign the calls second return value, it still gets copied to memory. Use assembly instead to prevent this and save 159 gas: `(bool success,) = payable(receiver).call{gas: gas, value: value}("");` -> `bool success; assembly { success := call(gas, receiver, value, 0, 0, 0, 0)` }

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

73:         (bool success, ) = address(PlatformInfo.FraudFundsWallet).call{value: users[userWallet].claimableETH}("");

450:         (bool success, ) = address(msg.sender).call{value: amount}("");

```

```solidity
File: contracts/ownedPool.sol

266:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

268:             (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

270:             (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

272:             (success, ) = payable(ResellerCommunityRewards).call{value: resellerCommunityFee}("");

274:             (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

280:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

282:                 (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

284:                 (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

289:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

291:                 (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

293:                 (success, ) = payable(ResellerCommunityRewards).call{value: resellerCommunityFee}("");

295:                 (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

301:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

303:             (success, ) = payable(_DiamondInterface).call{value: newPrice}("");

```

```solidity
File: contracts/publicPool.sol

137:         (bool success, ) = payable(_DiamondInterface).call{value: newPrice}("");

140:             (success, ) = payable(_to).call{value: (returnETH)}("ETH Returned to Sender");

209:             (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

213:             (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

217:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

223:                 (success, ) = payable(ProjectFeeReceiver).call{value: projectFee}("");

227:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

232:                 (success, ) = payable(ResellerFeeReceiver).call{value: resellerFee}("");

236:                 (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

242:             (success, ) = payable(DiamondSwapFeeReceiver).call{value: diamondFee}("");

```

```solidity
File: contracts/resellerCommunityRewards.sol

72:                 (bool success, ) = payable(diamondSwap).call{value: rewardsPoolAmount}("");

```

</details> 
 


 ### <a name="GAS-15"></a>[GAS-15]
 ### Reduce gas usage by moving to Solidity 0.8.19 or later
Solidity version 0.8.19 introduced a number of gas optimizations, refer to the [Solidity 0.8.19 Release Announcement](https://soliditylang.org/blog/2023/02/22/solidity-0.8.19-release-announcement) for details.

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/interface/IDiamondContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IDiamondEvents.sol

1: pragma solidity 0.8.15;

```

```solidity
File: contracts/interface/IDiamondStaking.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IDiamondSwap.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IOracle.sol

3: pragma solidity >=0.7.6;

```

```solidity
File: contracts/interface/IOwnedPoolContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/interface/IPublicPoolContract.sol

2: pragma solidity ^0.8.15;

```

```solidity
File: contracts/libraries/DiamondEvents.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/libraries/DiamondStructs.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

1: pragma solidity 0.8.20;

```

```solidity
File: contracts/ownedPool.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/ownedPoolContract.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/publicPool.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/publicPoolContract.sol

2: pragma solidity 0.8.20;

```

```solidity
File: contracts/resellerCommunityRewards.sol

2: pragma solidity 0.8.20;

```

</details> 
 


 ### <a name="GAS-16"></a>[GAS-16]
 ### Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ownedPoolContract.sol

24:     function createOwnedPool(address _token, address buyer, uint256 _discountPercent, address owner) external onlyRole(DEFAULT_ADMIN_ROLE) returns(address){

30:     function updateInterfaceAddress(address newInterface) external onlyRole(UPGRADER_ROLE) {

```

```solidity
File: contracts/publicPoolContract.sol

25:     function createPublicPool(address _token, uint256 _tokenAmount, address owner) external onlyRole(UPGRADER_ROLE) returns(address){

31:     function updateInterfaceAddress(address newInterface) external onlyRole(UPGRADER_ROLE) {

```

```solidity
File: contracts/resellerCommunityRewards.sol

67:     function distribute() public onlyOwner returns(uint256) {

```

</details> 
 


 ### <a name="GAS-17"></a>[GAS-17]
 ### `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

232:             for (uint256 i = 0; i < twitterUsers.length; i++) {

241:             for (uint256 i = 0; i < specificUsers.length; i++) {

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

59:             User.ownedPoolsCount++;

109:         Owner.createdPoolBuyCount[token][pool]++;

113:         Buyer.ownedPoolBuyCount[token][pool]++;

130:             User.offeredPoolsCount++;

150:             Handle.offeredPoolsCount++;

167:             Pool.PoolsAmount++;

196:             User.createdPoolsCount++;

212:             PublicSets.poolCount++;

230:             NewOwner.createdPoolsCount++;

260:         for (uint256 i = 0; i < User.vestingTimestamps[poolAddress].length; i++) {

295:         for (uint256 i = 0; i < User.vestingTimestamps[poolAddress].length; i++) {

332:             for (uint256 i = 0; i < reservedAmount.length; i++) {

```

```solidity
File: contracts/ownedPool.sol

427:         for(uint256 i = 0; i < handles.length; i++) {

432:                 twitterCounter++;

```

```solidity
File: contracts/publicPool.sol

75:         placeInLine++;

108:         for(uint loopCounter = 0; transferAmount != 0 && loopCounter <= 100; loopCounter++) {

130:                 counter++;

262:             placeInLine++;

```

```solidity
File: contracts/resellerCommunityRewards.sol

47:             ShareHoldersCount++;

68:         for(uint8 i = 0; i <= 49 && i < ShareHolders.length; i++) {

77:             lastProcessedIndex++;

```

</details> 
 


 ### <a name="GAS-18"></a>[GAS-18]
 ### Using `private` rather than `public` for constants, saves gas
If needed, the values can be read from the verified contract source code, or if there are multiple values there can be a single getter function that [returns a tuple](https://github.com/code-423n4/2022-08-frax/blob/90f55a9ce4e25bceed3a74290b854341d8de6afa/src/contracts/FraxlendPair.sol#L156-L178) of the values of all currently-public constants. Saves **3406-3606 gas** in deployment gas due to the compiler not having to create non-payable getter functions for deployment calldata, not having to store the bytes of the value outside of where it's used, and not adding another entry to the method ID table

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ownedPoolContract.sol

8:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

```

```solidity
File: contracts/publicPool.sol

43:     bytes32 public constant DIAMOND_ADMIN = keccak256("IS_ADMIN");

```

```solidity
File: contracts/publicPoolContract.sol

9:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

```

</details> 
 


 ### <a name="GAS-19"></a>[GAS-19]
 ### require()/revert() strings longer than 32 bytes cost extra gas
Each extra memory word of bytes past the original 32 [incurs an MSTORE](https://gist.github.com/hrkrshnn/ee8fabd532058307229d65dcd5836ddc#consider-having-short-revert-strings) which costs 3 gas.

*Instances (29)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ownedPool.sol

101:         require(!isHidden, "Pool is currently not available");

118:             require(amount == _balance, "Transfer amount must be equal to the reserved amount");

128:             require(amount <= publicAmount, "Amount exceeds available tokens");

267:             require(success, "Failed to send Diamond Fee");

269:             require(success, "Failed to send Project Fee");

271:             require(success, "Failed to send Reseller Fee");

273:             require(success, "Failed to send Reseller Fee");

275:             require(success, "Failed to send ETH");

281:                 require(success, "Failed to send Diamond Fee");

283:                 require(success, "Failed to send Project Fee");

285:                 require(success, "Failed to send ETH");

290:                 require(success, "Failed to send Diamond Fee");

292:                 require(success, "Failed to send Reseller Fee");

294:                 require(success, "Failed to send Reseller Fee");

296:                 require(success, "Failed to send ETH");

302:             require(success, "Failed to send Diamond Fee");

304:             require(success, "Failed to send ETH");

317:         require(vestedUsers[user] >= claimableAmount, "Token amount not claimable");

330:         require(tokenAmount > 0, "No tokens sent to pool");

367:         require(!preventCancel, "Transferred pool cannot be cancelled");

```

```solidity
File: contracts/publicPool.sol

94:         require(!isHidden, "Pool is currently not available");

138:             require(success, "Failed to send ETH");

141:                 require(success, "Failed to send ETH");

218:             require(success, "Failed to send Diamond Fee");

228:                 require(success, "Failed to send Diamond Fee");

237:                 require(success, "Failed to send Diamond Fee");

243:             require(success, "Failed to send Diamond Fee");

272:         require(poolContributor[user], "You are not contributing to this pool");

288:         require(poolContributor[User] && contributorAmounts[User] > 0, "Only pool contributors can call this function");

```

</details> 
 


 ### <a name="GAS-20"></a>[GAS-20]
 ### Splitting require() statements that use && saves gas

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

37:         require(publicPoolCreator != address(0) && ownedPoolCreator != address(0));

82:         require(feePercent <= 100 && diamondFeeReceiver != address(0));

115:         require(userHandles[handle].userAddress == address(0) && account != address(0));

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

26:         require(pool != address(0) && token != address(0));

72:         require(pool != address(0) && token != address(0));

106:         require(token != address(0) && pool != address(0) && buyer != address(0) && owner != address(0));

124:         require(_pool != address(0) && _token != address(0));

144:         require(_pool != address(0) && _token != address(0));

189:         require(_pool != address(0) && _token != address(0));

226:         require(_pool != address(0) && _token != address(0));

254:         require(poolAddress != address(0) && tokenAddress != address(0));

290:         require(poolAddress != address(0) && tokenAddress != address(0));

393:         require(pool != address(0) && token != address(0));

```

```solidity
File: contracts/ownedPool.sol

174:         require((amount - rangeAmount) <= tokenAmount && tokenAmount <= (amount + rangeAmount), "Invalid amount, adjust range");

```

```solidity
File: contracts/publicPool.sol

166:         require((amount - rangeAmount) <= tokenAmount && tokenAmount <= (amount + rangeAmount), "Invalid amount, adjust range");

288:         require(poolContributor[User] && contributorAmounts[User] > 0, "Only pool contributors can call this function");

```

```solidity
File: contracts/resellerCommunityRewards.sol

42:         require(amount > 0 && amount <= ERC20($CARATS).balanceOf(msg.sender));

55:         require(amount > 0 && amount <= ShareHoldersAmounts[msg.sender]);

```

</details> 
 


 ### <a name="GAS-21"></a>[GAS-21]
 ### Structs can be packed into fewer storage slots
Each slot saved can avoid an extra Gsset (20000 gas) for the first setting of the struct. Subsequent reads as well as writes have smaller gas savings

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/libraries/DiamondStructs.sol

10:     struct UserInfo {

46:     struct TwitterUsers {

56:     struct PoolInfo {

78:         mapping (address => VestingInfo) Vesting; // pool address to vesting struct

85:     struct VestingInfo {

92:     struct SearchData {

104:     struct SearchDataPurchasedPools {

120:     struct SearchUserCreatedPools {

135:     struct PlatformInfo {

149:     struct PublicSets {

```

</details> 
 


 ### <a name="GAS-22"></a>[GAS-22]
 ### Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency
Using uint256(1) and uint256(2) instead of true and false can save gas for certain changes. Consider using uint256(1)/uint256(2) when appropriate.

*Instances (64)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

230:             pools[_addresses[0]].isTwitterReserved[newPool] = true;

240:             pools[_addresses[0]].isReserved[newPool] = true;

317:                     dataChecks[0] = true;

331:             isPool[Pool] = true;

339:             bool discountAvailable = priceParams[0] > 0 ? true : false;

339:             bool discountAvailable = priceParams[0] > 0 ? true : false;

341:             bool transferOnCreation = (poolData[0] == poolData[1]) ? false : true;

341:             bool transferOnCreation = (poolData[0] == poolData[1]) ? false : true;

368:                     bool discountAvailable = priceParams[0] > 0 ? true : false;

368:                     bool discountAvailable = priceParams[0] > 0 ? true : false;

370:                     bool transferOnCreation = (poolData[0] == poolData[1]) ? false : true;

370:                     bool transferOnCreation = (poolData[0] == poolData[1]) ? false : true;

487:         uint256 _amount = IDiamondContract(_pool).updateOwner(msg.sender, newOwner, false);

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

37:                 Pool.SpecificUserTwitter[handle] = false;

47:                 Pool.SpecificUser[buyer] = false;

78:                 Pool.hidden[pool] = true;

92:                 Pool.hidden[pool] = true;

166:             Pool.isPool = true;

173:             Pool.hidden[newPool] = false;

205:             Pool.publicPool = true;

262:             bool vested = false;

268:                     vested = true;

292:         _vestingComplete = true;

297:             bool vested = false;

305:                     vested = true;

317:             (User.vestedTokens[poolAddress][User.vestingTimestamps[poolAddress][i]] > 0) ? _vestingComplete = false : _vestingComplete = true;

317:             (User.vestedTokens[poolAddress][User.vestingTimestamps[poolAddress][i]] > 0) ? _vestingComplete = false : _vestingComplete = true;

348:         Pool.isVerified = true;

413:         Pool.isVested[address(newPool)] = true;

```

```solidity
File: contracts/ownedPool.sol

55:         lockPool = true;

57:         lockPool = false;

111:             twitterPurchase = true;

121:                 reservedTokens = diamondSwap.getReservedAmount(handle, address(0), address(this), address(_token), true);

124:                 reservedTokens = diamondSwap.getReservedAmount("", to, address(this), address(_token), false);

148:                 isHidden = true;

168:         weiPerToken = spotAggregator.getRateToEth(IERC20(_token), false);

200:             isReseller = true;

202:             isReseller = false;

227:                         twitterReserved = false;

239:                         twitterReserved = false;

334:         isHidden = false;

369:         isHidden = true;

373:         isCancelled = true;

376:             true

395:             isReserved = true;

399:             singleSale = true;

409:         fixedPrice = true;

435:         twitterReserved = true;

```

```solidity
File: contracts/publicPool.sol

46:         lockPool = true;

48:         lockPool = false;

72:         poolContributor[owner] = true;

120:                 poolContributor[contributorAddress] = false;

145:             isHidden = true;

162:         weiPerToken = spotAggregator.getRateToEth(IERC20(_token), false);

187:             isReseller = true;

189:             isReseller = false;

258:             poolContributor[user] = true;

264:         isHidden = false;

291:         poolContributor[User] = false;

298:             isHidden = true;

300:                 true

304:                 false

```

```solidity
File: contracts/resellerCommunityRewards.sol

45:             IsShareHolder[msg.sender] = true;

58:             IsShareHolder[msg.sender] = false;

```

</details> 
 


 ### <a name="GAS-23"></a>[GAS-23]
 ### Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead
Using uints or ints smaller than 32 bytes (256 bits) can incur overhead. Consider using uint256 or int256 to avoid potential issues.

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/interface/IDiamondEvents.sol

107:         uint8 decimals

160:         uint8 decimals

```

```solidity
File: contracts/libraries/DiamondEvents.sol

113:         uint8 decimals

166:         uint8 decimals

```

```solidity
File: contracts/libraries/DiamondStructs.sol

97:         uint8 decimals;

109:         uint8 decimals;

125:         uint8 decimals;

```

```solidity
File: contracts/resellerCommunityRewards.sol

68:         for(uint8 i = 0; i <= 49 && i < ShareHolders.length; i++) {

```

</details> 
 


 ### <a name="GAS-24"></a>[GAS-24]
 ### Use != 0 instead of > for unsigned integer comparison

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

204:         if(publicAmount > 0) {

```

```solidity
File: contracts/ownedPool.sol

169:         if(discountPercent > 0) {

199:        if(ResellerFee > 0) {

316:         require(claimableAmount > 0, "No tokens available to claim");

330:         require(tokenAmount > 0, "No tokens sent to pool");

394:         if(_specificAmount > 0) {

```

```solidity
File: contracts/publicPool.sol

53:         require(amount > 0);

113:             if(_contributorAmount > transferAmount) {

139:         if(returnETH > 0) {

186:        if(ResellerFee > 0) {

253:         require(tokenAmount > 0, "No tokens sent to pool");

```

```solidity
File: contracts/resellerCommunityRewards.sol

42:         require(amount > 0 && amount <= ERC20($CARATS).balanceOf(msg.sender));

55:         require(amount > 0 && amount <= ShareHoldersAmounts[msg.sender]);

```

</details> 
 


 ### <a name="GAS-25"></a>[GAS-25]
 ### Optimize names to save gas
public/external function names and public member variable names can be optimized to save gas. See [this](https://gist.github.com/IllIllI000/a5d8b486a8259f9f77891a919febd1a9) link for an example of how it works. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save 128 gas each during deployment, and renaming functions to have lower method IDs will save 22 gas per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

*Instances (69)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: DiamondSwap.sol

19:     DiamondStructs.PlatformInfo public PlatformInfo;

27:     function initialize(address publicPoolCreator, address ownedPoolCreator, address stakingContract, address carats) initializer public payable {

53:     receive() external payable {

127:     ) external view returns(

152:     ) external payable onlyRole(DIAMOND_CONTRACT) {

162:     ) external view returns(

269:     ) external nonReentrant {

280:     ) external view returns(

301:     ) external payable {

380:     ) external payable {

435:     ) public payable {

445:     ) external nonReentrant whenNotPaused {

```

```solidity
File: contracts/interface/IDiamondContract.sol

7:     ) external view returns (

14:     ) external payable;

18:     ) external view returns(

25:     ) external payable returns(

32:     ) external payable;

38:     ) external payable returns(

44:     ) external payable;

48:     ) external payable returns(

55:     ) external payable;

60:     ) external payable;

65:     ) external payable;

74:     ) external payable returns(

```

```solidity
File: contracts/interface/IDiamondSwap.sol

12:         ) external payable;

18:     ) external view returns(

32:     ) external view returns(

45:     ) external payable;

69:     ) external payable;

78:     ) external payable;

91:     ) external view returns(

98:     ) external view returns(

```

```solidity
File: contracts/interface/IOracle.sol

8:     function getRateToEth(IERC20 srcToken, bool _useWrappers) external view returns (uint256 rate);

```

```solidity
File: contracts/interface/IOwnedPoolContract.sol

11:         ) external payable returns(

```

```solidity
File: contracts/interface/IPublicPoolContract.sol

10:         ) external payable returns(

```

```solidity
File: contracts/libraries/DiamondStructs.sol

75:         mapping (address => uint256) PublicSaleAmount; // pool address to public amount

127:         uint256[6] tokenInformation; // Percent, Schedule, Initial, Discount, Fixed price, public Amount

```

```solidity
File: contracts/libraries/UpdateDiamondStruct.sol

249:     ) public view returns (

327:     ) external pure returns (

```

```solidity
File: contracts/ownedPool.sol

11:     IOracle public spotAggregator;

12:     IDiamondSwap public diamondSwap;

14:     uint256 public _balance;

36:     uint256 public twitterCounter;

38:     address public _token;

85:     receive() external payable {

96:     ) public payable onlyRole(DIAMOND_ADMIN) nonReentrant LockThePool returns(

```

```solidity
File: contracts/ownedPoolContract.sol

8:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

9:     address public diamondInterface;

```

```solidity
File: contracts/publicPool.sol

13:     IOracle public spotAggregator;

14:     IDiamondSwap public _diamondSwap;

16:     uint256 public _balance;

41:     address[] public contributors;

43:     bytes32 public constant DIAMOND_ADMIN = keccak256("IS_ADMIN");

78:     receive() external payable {

89:     ) public payable onlyRole(DIAMOND_ADMIN) nonReentrant LockThePool returns(

269:     ) external view returns(

279:     ) external view onlyRole(DIAMOND_ADMIN) {

280:         revert("Cannot own a public pool");

```

```solidity
File: contracts/publicPoolContract.sol

9:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

10:     address public diamondInterface;

```

```solidity
File: contracts/resellerCommunityRewards.sol

9:     IDiamondSwap public DiamondSwap;

12:     address public DAO;

13:     address public diamondSwap;

15:     uint256 public tTotal;

16:     uint256 public rewardsPoolAmount;

18:     uint256 public ShareHoldersCount;

37:     receive() external payable {

67:     function distribute() public onlyOwner returns(uint256) {

86:     function shareHoldersCount() external view returns(uint256) {

```

</details> 
 

