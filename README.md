# Report


## Medium Issues


| |Issue|Instances|
|-|:-|:-:|
| [M-1](#M-1) | Unsafe use of ERC20 transfer() | 1 |

## Low Issues


| |Issue|Instances|
|-|:-|:-:|
| [L-1](#L-1) | complex casting | 35 |
| [L-2](#L-2) | The remaining ETH may be locked in the contract after call | 6 |
| [L-3](#L-3) | External call recipient may consume all transaction gas | 6 |
| [L-4](#L-4) |  `abi.encodePacked()` should not be used with dynamic types when passing the result to a hash function such as `keccak256()` | 2 |
| [L-5](#L-5) | constructor/initialize function lacks parameter validation | 12 |
| [L-6](#L-6) | Division by zero not prevented | 5 |
| [L-7](#L-7) | Empty function body | 4 |
| [L-8](#L-8) | Initializers could be front-run | 12 |
| [L-9](#L-9) | Unsafe solidity low-level call can cause gas grief attack | 6 |
| [L-10](#L-10) | Missing contract existence checks before low-level calls | 7 |
| [L-11](#L-11) | Loss of precision | 5 |
| [L-12](#L-12) | State variables not capped at reasonable values | 79 |
| [L-13](#L-13) | Some tokens may revert when zero value transfers are made | 1 |
| [L-14](#L-14) |  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard   | 1 |
| [L-15](#L-15) | Some tokens may revert when large transfers are made | 1 |
| [L-16](#L-16) | Unsafe casting | 1 |
| [L-17](#L-17) | Unsafe ERC20 operation(s) | 1 |

## Non Critical Issues


| |Issue|Instances|
|-|:-|:-:|
| [NC-1](#NC-1) | Contracts should have full test coverage | 23 |
| [NC-2](#NC-2) | Consider adding formal verification proofs | 23 |
| [NC-3](#NC-3) | Large or complicated code bases should implement invariant tests | 23 |
| [NC-4](#NC-4) | NatSpec: Interface declarations should have NatSpec descriptions | 10 |
| [NC-5](#NC-5) | Variables without visibility specifier | 46 |
| [NC-6](#NC-6) | Array is push()ed but not pop()ed | 7 |
| [NC-7](#NC-7) | Assembly blocks should have extensive comments | 4 |
| [NC-8](#NC-8) | Constants in comparisons should appear on the left side | 85 |
| [NC-9](#NC-9) | constants should be defined rather than using magic numbers | 9 |
| [NC-10](#NC-10) | Contract declarations should have NatSpec @author annotations | 16 |
| [NC-11](#NC-11) | Contract declarations should have NatSpec @Title annotations | 16 |
| [NC-12](#NC-12) | NatSpec: Contract declarations should have @dev tags | 16 |
| [NC-13](#NC-13) | NatSpec: Contract declarations should have NatSpec descriptions | 16 |
| [NC-14](#NC-14) | NatSpec: Contract declarations should have @notice tags | 16 |
| [NC-15](#NC-15) | Consider using delete rather than assigning zero to clear value | 77 |
| [NC-16](#NC-16) | Consider using delete rather than assigning false to clear value | 3 |
| [NC-17](#NC-17) | Consider adding a block/deny-list" | 16 |
| [NC-18](#NC-18) | Use bytes.concat() on bytes instead of abi.encodePacked() for clearer semantic meaning | 5 |
| [NC-19](#NC-19) | Consider adding emergency-stop functionality | 16 |
| [NC-20](#NC-20) | Error declarations should have NatSpec descriptions | 31 |
| [NC-21](#NC-21) | Custom error has no error details | 31 |
| [NC-22](#NC-22) | Events are missing sender information | 30 |
| [NC-23](#NC-23) | NatSpec: Event declarations should have NatSpec descriptions | 35 |
| [NC-24](#NC-24) | Events should use parameters to convey information | 1 |
| [NC-25](#NC-25) | NatSpec: function declarations should have NatSpec descriptions | 242 |
| [NC-26](#NC-26) | NatSpec: function declarations should have @Notice tags | 242 |
| [NC-27](#NC-27) | NatSpec: function declarations should have NatSpec descriptions | 242 |
| [NC-28](#NC-28) | If-statement can be converted to a ternary | 144 |
| [NC-29](#NC-29) | Large multiples of ten should use scientific notation | 5 |
| [NC-30](#NC-30) | Consider using named mappings | 7 |
| [NC-31](#NC-31) | Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct | 4 |
| [NC-32](#NC-32) | Use of override is unnecessary | 17 |
| [NC-33](#NC-33) | Consider using descriptive constants when using 0 in the code | 19 |
| [NC-34](#NC-34) | Non-external/public variable names should begin with an underscore | 26 |
| [NC-35](#NC-35) | Setters should prevent re-setting of the same value | 9 |
| [NC-36](#NC-36) | Use the latest solidity version for deployment   | 23 |
| [NC-37](#NC-37) | Consider bounding input array length | 30 |
| [NC-38](#NC-38) | Constants should be defined rather than using magic numbers | 2 |
| [NC-39](#NC-39) | Strings should use double quotes rather than single quotes | 6 |
| [NC-40](#NC-40) | Consider using `SafeTransferLib.safeTransferETH()` or `Address.sendValue()` for clearer semantic meaning | 6 |
| [NC-41](#NC-41) | Variables need not be initialized to zero | 61 |
| [NC-42](#NC-42) | Empty receive()/fallback() function | 3 |
| [NC-43](#NC-43) | Consider moving msg.sender checks to modifiers | 6 |
| [NC-44](#NC-44) | Dont use _msgSender() if not supporting EIP-2771 | 45 |
| [NC-45](#NC-45) | Array indices should be referenced via enums rather than numeric literals | 5 |
| [NC-46](#NC-46) | <array>.length should not be looked up in every loop of a for-loop | 29 |
| [NC-47](#NC-47) | Use assembly to emit events, in order to save gas | 35 |
| [NC-48](#NC-48) | Don't initialize variables with default value | 64 |

## Gas Optimizations


| |Issue|Instances|
|-|:-|:-:|
| [GAS-1](#GAS-1) | Enable IR-based code generation | 23 |
| [GAS-2](#GAS-2) | Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18) | 8 |
| [GAS-3](#GAS-3) | Nesting if-statements is cheaper than using && | 23 |
| [GAS-4](#GAS-4) | Consider using = instead of += and -= for gas efficiency | 13 |
| [GAS-5](#GAS-5) | Use >= instead of > for gas efficiency | 25 |
| [GAS-6](#GAS-6) | Using bools for storage incurs overhead | 7 |
| [GAS-7](#GAS-7) | Cache array length outside of loop | 30 |
| [GAS-8](#GAS-8) | Consider using assembly for simple zero checks to save gas | 4 |
| [GAS-9](#GAS-9) | Expressions for constant values should use immutable rather than constant | 10 |
| [GAS-10](#GAS-10) | Initializers can be marked as payable to save deployment gas | 12 |
| [GAS-11](#GAS-11) | Use assembly for small keccak256 hashes, in order to save gas | 2 |
| [GAS-12](#GAS-12) | Avoid fetching a low-level calls return data by using assembly | 6 |
| [GAS-13](#GAS-13) | Reduce gas usage by moving to Solidity 0.8.19 or later | 23 |
| [GAS-14](#GAS-14) | Functions guaranteed to revert when called by normal users can be marked `payable` | 17 |
| [GAS-15](#GAS-15) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 66 |
| [GAS-16](#GAS-16) | Using `private` rather than `public` for constants, saves gas | 10 |
| [GAS-17](#GAS-17) | Structs can be packed into fewer storage slots | 11 |
| [GAS-18](#GAS-18) | Variables can be packed into fewer storage slots by truncating timestamp bytes | 1 |
| [GAS-19](#GAS-19) | Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency | 21 |
| [GAS-20](#GAS-20) | Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead | 6 |
| [GAS-21](#GAS-21) | Use != 0 instead of > for unsigned integer comparison | 25 |
| [GAS-22](#GAS-22) | Optimize names to save gas | 194 |

##################################################################### 
 
 DETAILED REPORT:: 


##################################################################### 


## Medium Issues


 ### <a name="M-1"></a>[M-1]
 ### Unsafe use of ERC20 transfer()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transfer() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransfer() from OpenZeppelin instead.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: StakingDepositUpgradeable.sol

551:             payable(_msgSender()).transfer(slashAmount);

```

</details> 
 


## Low Issues


 ### <a name="L-1"></a>[L-1]
 ### complex casting
Consider whether the number of casts is really necessary, or whether using a different type would be more appropriate. Alternatively, add comments to explain in detail why the casts are necessary, and any implicit reasons why the cast does not introduce an overflow.

*Instances (35)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: NetworkConfigurationUpgradeable.sol

90:             return int256(index);

495:             return int256(index);

```

```solidity
File: PermissionUpgradeable.sol

300:         return TimeParserUtils.stringToUint(unitTimestampString);

```

```solidity
File: ReconfigurationUpgradeable.sol

354:                     uint256(

366:                     uint256(

429:                 uint256(

434:                 uint256(

484:                 int256(rbnGovernors.length),

485:                 int256(

489:                 int256(tolerance)

507:                     int256(requiredRbnCandidatesLen) -

508:                         int256(rbnCandidatesFoundLen)

511:                     int256(rbnGovernors.length),

517:                     int256(rbnGovernors.length) - keepRbn

520:                     int256(candidatesFound.length) - swapSize,

521:                     int256(nonRbnGovernors.length)

525:                     uint256(swapSize + nonRbnSwapSize)

528:                     uint256(swapSize + nonRbnSwapSize)

533:                     governorsToSwap[uint256(itr)] = rbnGovernors[uint256(itr)];

533:                     governorsToSwap[uint256(itr)] = rbnGovernors[uint256(itr)];

534:                     candidatesToSwap[uint256(itr)] = candidatesFound[

535:                         uint256(itr)

540:                     governorsToSwap[uint256(itr + swapSize)] = nonRbnGovernors[

541:                         uint256(itr)

543:                     candidatesToSwap[uint256(itr + swapSize)] = candidatesFound[

544:                         uint256(itr + swapSize)

618:             uint256(requiredRbnCandidatesLen),

619:             uint256(requiredNonRbnCandidatesLen)

```

```solidity
File: StakingDepositUpgradeable.sol

306:             timeStaked = int256(

315:             timeStaked = int256(

336:                 uint256 computeNum = uint256(

338:                         (int256(_alpha.value) *

339:                             (timeStaked - int256(_rewardCycle)))

453:             int256 effectiveDaysForStake = int256(timeInNetwork / 1 days) -

458:                 uint256 signUpBonusToBeGiven = (uint256(effectiveDaysForStake) *

```

</details> 
 


 ### <a name="L-2"></a>[L-2]
 ### The remaining ETH may be locked in the contract after call
After calling an external contract and forwards some ETH value, the contract balance should be checked. If there is excess eth left over due to a failed call, or more eth being delivered than needed, or any other reason, this eth must be refunded to the user or handled appropriately, otherwise the eth may be frozen in the contract forever.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: JailedNodesUpgradeable.sol

307:         (bool sent, ) = payable(address(stakingDepository)).call{

380:         (bool sent, ) = payable(treasuryAddress).call{value: slashedStake}("");

```

```solidity
File: SignupBonusVestingUpgradeable.sol

145:         (bool sent, ) = payable(_msgSender()).call{value: claimableTokens}("");

```

```solidity
File: StakingDepositUpgradeable.sol

371:         (bool sent, ) = payable(_msgSender()).call{value: rewardsToBeClaimed}(

475:         (bool sent, ) = payable(_msgSender()).call{value: unstakeValue}("");

481:         (bool sentToTreasury, ) = payable(_treasuryAddress).call{

```

</details> 
 


 ### <a name="L-3"></a>[L-3]
 ### External call recipient may consume all transaction gas
There is no limit specified on the amount of gas used, so the recipient can use up all of the transactions gas, causing it to revert. Use addr.call{gas: <amount>}("") or this https://github.com/nomad-xyz/ExcessivelySafeCall library instead.  

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: JailedNodesUpgradeable.sol

307:         (bool sent, ) = payable(address(stakingDepository)).call{

380:         (bool sent, ) = payable(treasuryAddress).call{value: slashedStake}("");

```

```solidity
File: SignupBonusVestingUpgradeable.sol

145:         (bool sent, ) = payable(_msgSender()).call{value: claimableTokens}("");

```

```solidity
File: StakingDepositUpgradeable.sol

371:         (bool sent, ) = payable(_msgSender()).call{value: rewardsToBeClaimed}(

475:         (bool sent, ) = payable(_msgSender()).call{value: unstakeValue}("");

481:         (bool sentToTreasury, ) = payable(_treasuryAddress).call{

```

</details> 
 


 ### <a name="L-4"></a>[L-4]
 ###  `abi.encodePacked()` should not be used with dynamic types when passing the result to a hash function such as `keccak256()`
Use `abi.encode()` instead which will pad items to 32 bytes, which will [prevent hash collisions](https://docs.soliditylang.org/en/v0.8.13/abi-spec.html#non-standard-packed-mode) (e.g. `abi.encodePacked(0x123,0x456)` => `0x123456` => `abi.encodePacked(0x1,0x23456)`, but `abi.encode(0x123,0x456)` => `0x0...1230...456`). "Unless there is a compelling reason, `abi.encode` should be preferred". If there is only one argument to `abi.encodePacked()` it can often be cast to `bytes()` or `bytes32()` [instead](https://ethereum.stackexchange.com/questions/30912/how-to-compare-strings-in-solidity#answer-82739).
If all arguments are strings and or bytes, `bytes.concat()` should be used instead

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: PermissionUpgradeable.sol

138:                 keccak256(abi.encodePacked(proofs[i].proofType)) ==

139:                 keccak256(abi.encodePacked(_proofType))

```

</details> 
 


 ### <a name="L-5"></a>[L-5]
 ### constructor/initialize function lacks parameter validation
Constructors and initialization functions play a critical role in contracts by setting important initial states when the contract is first deployed before the system starts. The parameters passed to the constructor and initialization functions directly affect the behavior of the contract / protocol. If incorrect parameters are provided, the system may fail to run, behave abnormally, be unstable, or lack security. Therefore, it's crucial to carefully check each parameter in the constructor and initialization functions. If an exception is found, the transaction should be rolled back.

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

55:     function initialize(

```

```solidity
File: ContractRoleAuthUpgradeable.sol

69:     function initialize() public virtual override onlyInitializing {

```

```solidity
File: IDPRegistryUpgradeable.sol

86:     function initialize() public virtual override initializer {

```

```solidity
File: JailedNodesUpgradeable.sol

104:     function initialize(

```

```solidity
File: NetworkConfigurationUpgradeable.sol

240:     function initialize(

```

```solidity
File: PermissionUpgradeable.sol

19:     function initialize(

```

```solidity
File: RBACUpgradeable.sol

30:     function initialize() public virtual onlyInitializing {

```

```solidity
File: ReconfigurationUpgradeable.sol

52:     function initialize(

```

```solidity
File: SignupBonusVestingUpgradeable.sol

73:     function initialize(

```

```solidity
File: StakingDepositUpgradeable.sol

148:     function initialize(

```

```solidity
File: StakingEscrowUpgradeable.sol

21:     function initialize() public virtual initializer {

```

```solidity
File: TombstonedNodesUpgradeable.sol

26:     function initialize(

```

</details> 
 


 ### <a name="L-6"></a>[L-6]
 ### Division by zero not prevented
The divisions below take an input parameter that has no zero-value checks, which can cause the functions reverting if zero is passed.  

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

386:         uint256 tolerance = (networkSize - 1) / 3;

```

```solidity
File: ReconfigurationUpgradeable.sol

201:             .length - 1) / toleranceFactor;

```

```solidity
File: SignupBonusVestingUpgradeable.sol

190:         uint256 vestedTokens = (signupBonus * activePeriodInDays) /

```

```solidity
File: StakingDepositUpgradeable.sol

351:                 uint256 rewardOnStake = computeNum / computeDem;

515:             (_amountPrcnt)) / 100;

```

</details> 
 


 ### <a name="L-7"></a>[L-7]
 ### Empty function body
Consider adding a comment about why the function body is empty

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: JailedNodesUpgradeable.sol

388:     receive() external payable {}

```

```solidity
File: NetworkConfigurationUpgradeable.sol

232:     receive() external payable {}

```

```solidity
File: StakingDepositUpgradeable.sol

636:     receive() external payable {}

```

```solidity
File: StakingEscrowUpgradeable.sol

19:     function __stakingEscrowInitUnchained() internal onlyInitializing {}

```

</details> 
 


 ### <a name="L-8"></a>[L-8]
 ### Initializers could be front-run
Initializers could be front-run, allowing an attacker to either set their own values, take ownership of the contract, and in the best case forcing a re-deployment

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

55:     function initialize(

```

```solidity
File: ContractRoleAuthUpgradeable.sol

69:     function initialize() public virtual override onlyInitializing {

```

```solidity
File: IDPRegistryUpgradeable.sol

86:     function initialize() public virtual override initializer {

```

```solidity
File: JailedNodesUpgradeable.sol

104:     function initialize(

```

```solidity
File: NetworkConfigurationUpgradeable.sol

240:     function initialize(

```

```solidity
File: PermissionUpgradeable.sol

19:     function initialize(

```

```solidity
File: RBACUpgradeable.sol

30:     function initialize() public virtual onlyInitializing {

```

```solidity
File: ReconfigurationUpgradeable.sol

52:     function initialize(

```

```solidity
File: SignupBonusVestingUpgradeable.sol

73:     function initialize(

```

```solidity
File: StakingDepositUpgradeable.sol

148:     function initialize(

```

```solidity
File: StakingEscrowUpgradeable.sol

21:     function initialize() public virtual initializer {

```

```solidity
File: TombstonedNodesUpgradeable.sol

26:     function initialize(

```

</details> 
 


 ### <a name="L-9"></a>[L-9]
 ### Unsafe solidity low-level call can cause gas grief attack
Using the low-level calls of a solidity address can leave the contract open to gas grief attacks. These attacks occur when the called contract returns a large amount of data. So when calling an external contract, it is necessary to check the length of the return data before reading/copying it (using returndatasize()).

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: JailedNodesUpgradeable.sol

307:         (bool sent, ) = payable(address(stakingDepository)).call{

380:         (bool sent, ) = payable(treasuryAddress).call{value: slashedStake}("");

```

```solidity
File: SignupBonusVestingUpgradeable.sol

145:         (bool sent, ) = payable(_msgSender()).call{value: claimableTokens}("");

```

```solidity
File: StakingDepositUpgradeable.sol

371:         (bool sent, ) = payable(_msgSender()).call{value: rewardsToBeClaimed}(

475:         (bool sent, ) = payable(_msgSender()).call{value: unstakeValue}("");

481:         (bool sentToTreasury, ) = payable(_treasuryAddress).call{

```

</details> 
 


 ### <a name="L-10"></a>[L-10]
 ### Missing contract existence checks before low-level calls
Low-level calls return success if there is no code present at the specified address. In addition to the zero-address checks, add a check to verify that `<address>.code.length > 0`.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: JailedNodesUpgradeable.sol

307:         (bool sent, ) = payable(address(stakingDepository)).call{

380:         (bool sent, ) = payable(treasuryAddress).call{value: slashedStake}("");

```

```solidity
File: SignupBonusVestingUpgradeable.sol

145:         (bool sent, ) = payable(_msgSender()).call{value: claimableTokens}("");

```

```solidity
File: StakingDepositUpgradeable.sol

371:         (bool sent, ) = payable(_msgSender()).call{value: rewardsToBeClaimed}(

475:         (bool sent, ) = payable(_msgSender()).call{value: unstakeValue}("");

481:         (bool sentToTreasury, ) = payable(_treasuryAddress).call{

```

```solidity
File: StakingEscrowUpgradeable.sol

79:         payable(_msgSender()).sendValue(amount); //@audit use .call to send eth

```

</details> 
 


 ### <a name="L-11"></a>[L-11]
 ### Loss of precision
Division by large numbers or variables may result in the result being zero, due to Solidity not supporting fractions.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

386:         uint256 tolerance = (networkSize - 1) / 3;

```

```solidity
File: ReconfigurationUpgradeable.sol

201:             .length - 1) / toleranceFactor;

```

```solidity
File: SignupBonusVestingUpgradeable.sol

190:         uint256 vestedTokens = (signupBonus * activePeriodInDays) /

```

```solidity
File: StakingDepositUpgradeable.sol

351:                 uint256 rewardOnStake = computeNum / computeDem;

515:             (_amountPrcnt)) / 100;

```

</details> 
 


 ### <a name="L-12"></a>[L-12]
 ### State variables not capped at reasonable values
Consider adding minimum/maximum value checks to ensure that the state variables below can never be used to excessively harm users, including via griefing

*Instances (79)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

137:         return nodeId;

220:         return 0;

```

```solidity
File: IDPRegistryUpgradeable.sol

150:         return allIDPs;

218:         return info;

251:         return idpInfo;

276:         return deletedCount;

291:         return _supportedProofTypes;

```

```solidity
File: JailedNodesUpgradeable.sol

256:         return timeServedInJail;

373:         return timeInJail;

```

```solidity
File: NetworkConfigurationUpgradeable.sol

514:         uint256 count;

520:         return count;

594:         return safeToUpgradeCandidates;

```

```solidity
File: PermissionUpgradeable.sol

66: 

154:         return true;

248:                 return true;

253:         return false;

```

```solidity
File: ReconfigurationUpgradeable.sol

12:         address nodeAddress;

13:         bool isRedbelly;

18:         private _nonRbnGovernorsPrioritisedForDowngrade;

94:         uint256 upgradeWindow;

95:         bool found;

99:             return candidates;

126:         return activeCandidates;

130:         return _reconfigurationsCounter;

162:         return _reconfigurationBuffer;

312:         return withOwner;

331:         return withOwner;

375:         return governorsWithCoolOffInitiated;

396:         return withOwner;

411:         return withOwner;

478:             uint256 requiredRbnCandidatesLen;

479:             uint256 requiredNonRbnCandidatesLen;

492:             uint256 rbnCandidatesFoundLen;

493:             uint256 nonRbnCandidatesFoundLen;

530: 

574:         uint256 rbnGovernorsLen;

584:         uint256 rbnLen;

585:         uint256 nonRbnLen;

610:         int256 requiredNonRbnCandidatesLen;

630:         uint256 rbnFound;

631:         uint256 nonRbnFound;

```

```solidity
File: SignupBonusVestingUpgradeable.sol

23:         private _networkConfigurationContractInstance;

192:         return vestedTokens;

259:             return _first200Bonus;

261:             return _next400Bonus;

263:             return 0;

```

```solidity
File: StakingDepositUpgradeable.sol

10:         uint256 value;

11:         uint256 precision;

15:         uint256 depositTimestamp;

16:         uint256 unstakeTimestamp;

17:         uint256 depositedAmount;

18:         uint256 redbellyDeposit;

19:         uint256 nodeOperatorDeposit;

20:         uint256 slashedAmount;

21:         uint256 slashedRedbellyDeposit;

22:         uint256 slashedNodeOperatorDeposit;

652:         return nodeConfig;

664:         return _treasuryAddress;

```

```solidity
File: TombstonedNodesUpgradeable.sol

103:             return true;

105:         return false;

```

```solidity
File: interfaces/IIDPRegistry.sol

6:         string proofType;

7:         string publicKey;

11:         string name;

12:         string issuerDid;

13:         string url;

14:         address publicAddress;

18:         string name;

19:         string issuerDid;

20:         string url;

21:         address publicAddress;

```

```solidity
File: interfaces/IJailedNodes.sol

6:         uint256 jailedTimestamp;

7:         uint256 daysToServe;

8:         uint256 releasedTimestamp;

```

```solidity
File: interfaces/IPermission.sol

13:         string proofType;

14:         Query query;

```

```solidity
File: interfaces/IReconfiguration.sol

8:         uint256 totalGovernors;

9:         uint256 totalCandidates;

13:         uint256 value;

14:         uint256 precision;

```

</details> 
 


 ### <a name="L-13"></a>[L-13]
 ### Some tokens may revert when zero value transfers are made
Despite the fact that [EIP-20](https://github.com/ethereum/EIPs/blob/7500ac4fc1bbdfaf684e7ef851f798f6b667b2fe/EIPS/eip-20.md?plain=1#L116) states that zero-value transfers must be accepted, some tokens, such as LEND, will revert if this is attempted, which may cause transactions that involve other tokens (such as batch operations) to fully revert. Consider skipping the transfer if the amount is zero, which will also save gas.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: StakingDepositUpgradeable.sol

551:             payable(_msgSender()).transfer(slashAmount);

```

</details> 
 


 ### <a name="L-14"></a>[L-14]
 ###  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard  
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks opens the users of this protocol up to [read-only reentrancy](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) vulnerability with no way to protect them except by block-listing the entire protocol.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: StakingDepositUpgradeable.sol

551:             payable(_msgSender()).transfer(slashAmount);

```

</details> 
 


 ### <a name="L-15"></a>[L-15]
 ### Some tokens may revert when large transfers are made
Tokens such as COMP or UNI will revert when an address balance reaches type(uint96).max. Ensure that the calls below can be broken up into smaller batches if necessary.  

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: StakingDepositUpgradeable.sol

551:             payable(_msgSender()).transfer(slashAmount);

```

</details> 
 


 ### <a name="L-16"></a>[L-16]
 ### Unsafe casting
Unsafe casting can cause alot of issues especially when a type is downcast to a smaller type, the higher order bits are truncated, effectively applying a modulo to the original value. Without any other checks, this wrapping will lead to unexpected behavior and bugs

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: PermissionUpgradeable.sol

300:         return TimeParserUtils.stringToUint(unitTimestampString);

```

</details> 
 


 ### <a name="L-17"></a>[L-17]
 ### Unsafe ERC20 operation(s)

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: StakingDepositUpgradeable.sol

551:             payable(_msgSender()).transfer(slashAmount);

```

</details> 
 


## Non Critical Issues


 ### <a name="NC-1"></a>[NC-1]
 ### Contracts should have full test coverage
While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ArtifactsFromRbnCore.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ContractRoleAuthUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: IDPRegistryUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: JailedNodesUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: NetworkConfigurationUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: PermissionUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: RBACUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ReconfigurationUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: SignupBonusVestingUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: StakingDepositUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: StakingEscrowUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: TombstonedNodesUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IIDPRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IJailedNodes.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/INetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IPermission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IRandomNumberGenerator.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IReconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/ISignupBonusVesting.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IStakingDeposit.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/ITombstonedNodes.sol

2: pragma solidity 0.8.22;

```

</details> 
 


 ### <a name="NC-2"></a>[NC-2]
 ### Consider adding formal verification proofs
Consider using formal verification to mathematically prove that your code does what is intended, and does not have any edge cases with unexpected behavior. The solidity compiler itself has this functionality [built in](https://docs.soliditylang.org/en/latest/smtchecker.html#smtchecker-and-formal-verification)  

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ArtifactsFromRbnCore.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ContractRoleAuthUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: IDPRegistryUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: JailedNodesUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: NetworkConfigurationUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: PermissionUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: RBACUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ReconfigurationUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: SignupBonusVestingUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: StakingDepositUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: StakingEscrowUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: TombstonedNodesUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IIDPRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IJailedNodes.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/INetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IPermission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IRandomNumberGenerator.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IReconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/ISignupBonusVesting.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IStakingDeposit.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/ITombstonedNodes.sol

2: pragma solidity 0.8.22;

```

</details> 
 


 ### <a name="NC-3"></a>[NC-3]
 ### Large or complicated code bases should implement invariant tests
Large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts, should implement [invariant fuzzing tests](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05). Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold. Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers, with properly and extensively-written invariants, can close this testing gap significantly.  

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ArtifactsFromRbnCore.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ContractRoleAuthUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: IDPRegistryUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: JailedNodesUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: NetworkConfigurationUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: PermissionUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: RBACUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ReconfigurationUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: SignupBonusVestingUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: StakingDepositUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: StakingEscrowUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: TombstonedNodesUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IIDPRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IJailedNodes.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/INetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IPermission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IRandomNumberGenerator.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IReconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/ISignupBonusVesting.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IStakingDeposit.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/ITombstonedNodes.sol

2: pragma solidity 0.8.22;

```

</details> 
 


 ### <a name="NC-4"></a>[NC-4]
 ### NatSpec: Interface declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: interfaces/IActivityMonitor.sol

5: 

```

```solidity
File: interfaces/IIDPRegistry.sol

3: 

```

```solidity
File: interfaces/IJailedNodes.sol

3: 

```

```solidity
File: interfaces/INetworkConfiguration.sol

5: import {NodeConfigStorage} from "@redbellynetwork/bootstrap-contracts/src/libraries/NodeConfigStorage.sol";

```

```solidity
File: interfaces/IPermission.sol

5: 

```

```solidity
File: interfaces/IRandomNumberGenerator.sol

3: 

```

```solidity
File: interfaces/IReconfiguration.sol

5: 

```

```solidity
File: interfaces/ISignupBonusVesting.sol

3: 

```

```solidity
File: interfaces/IStakingDeposit.sol

3: 

```

```solidity
File: interfaces/ITombstonedNodes.sol

3: 

```

</details> 
 


 ### <a name="NC-5"></a>[NC-5]
 ### Variables without visibility specifier

#### Impact:
Specifying visibility for variables can improve code readability and maintainability.

*Instances (46)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: NetworkConfigurationUpgradeable.sol

11:     using Address for address payable;

514:         uint256 count;

```

```solidity
File: ReconfigurationUpgradeable.sol

12:         address nodeAddress;

13:         bool isRedbelly;

94:         uint256 upgradeWindow;

95:         bool found;

478:             uint256 requiredRbnCandidatesLen;

479:             uint256 requiredNonRbnCandidatesLen;

492:             uint256 rbnCandidatesFoundLen;

493:             uint256 nonRbnCandidatesFoundLen;

531:                 int256 itr;

574:         uint256 rbnGovernorsLen;

584:         uint256 rbnLen;

585:         uint256 nonRbnLen;

610:         int256 requiredNonRbnCandidatesLen;

630:         uint256 rbnFound;

631:         uint256 nonRbnFound;

```

```solidity
File: StakingDepositUpgradeable.sol

10:         uint256 value;

11:         uint256 precision;

15:         uint256 depositTimestamp;

16:         uint256 unstakeTimestamp;

17:         uint256 depositedAmount;

18:         uint256 redbellyDeposit;

19:         uint256 nodeOperatorDeposit;

20:         uint256 slashedAmount;

21:         uint256 slashedRedbellyDeposit;

22:         uint256 slashedNodeOperatorDeposit;

```

```solidity
File: StakingEscrowUpgradeable.sol

25:     using Address for address payable;

```

```solidity
File: interfaces/IIDPRegistry.sol

6:         string proofType;

7:         string publicKey;

11:         string name;

12:         string issuerDid;

13:         string url;

14:         address publicAddress;

18:         string name;

19:         string issuerDid;

20:         string url;

21:         address publicAddress;

```

```solidity
File: interfaces/IJailedNodes.sol

6:         uint256 jailedTimestamp;

7:         uint256 daysToServe;

8:         uint256 releasedTimestamp;

```

```solidity
File: interfaces/IPermission.sol

13:         string proofType;

```

```solidity
File: interfaces/IReconfiguration.sol

8:         uint256 totalGovernors;

9:         uint256 totalCandidates;

13:         uint256 value;

14:         uint256 precision;

```

</details> 
 


 ### <a name="NC-6"></a>[NC-6]
 ### Array is push()ed but not pop()ed

#### Impact:
Array entries are added but are never removed. Consider whether this should be the case, or whether there should be a maximum, or whether old entries should be removed.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IDPRegistryUpgradeable.sol

128:             proofTypeToIssuers[idpData.proofs[i].proofType].push(

133:                 _supportedProofTypes.push(idpData.proofs[i].proofType);

```

```solidity
File: JailedNodesUpgradeable.sol

201:             jailTenures[nodeId].push(jailTenure);

```

```solidity
File: StakingDepositUpgradeable.sol

181:         _tokensInCirculation.push(_initialtokensInCirculation);

182:         _rewardsClaimedInYear.push(0);

259:                 _tokensInCirculation.push(

331:                 _rewardsClaimedInYear.push(0);

```

</details> 
 


 ### <a name="NC-7"></a>[NC-7]
 ### Assembly blocks should have extensive comments
Assembly blocks take a lot more time to audit than normal Solidity code, and often have gotchas and side-effects that the Solidity versions of the same code do not. Consider adding more comments explaining what is being done in every step of the assembly code, and describe why assembly is being used instead of Solidity.  

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: PermissionUpgradeable.sol

181:         assembly {

219:         assembly {

270:         assembly {

324:         assembly {

```

</details> 
 


 ### <a name="NC-8"></a>[NC-8]
 ### Constants in comparisons should appear on the left side

#### Impact:
Placing constants on the left side of comparisons can improve code readability and prevent accidental assignment. Doing so will prevent typo [bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*Instances (85)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

60:         if (_config.inactivityThresholdForRounds <= 0) {

64:         } else if (_config.inactivityThresholdForMessage <= 0) {

68:         } else if (_config.recentVoteInterval <= 0) {

205:         if (_inactivityVotes[nodeId].votesAgainstNode.length != 0) {

208:             if (

233:         if (_inactivityVotes[nodeId].votesAgainstNode.length != 0) {

272:         if (_newInterval <= 0) {

289:         if (_newWindowSize <= 0) {

292:         if (_newWindowSize < config.inactivityThresholdForRounds) {

310:         if (_newInactivityThreshold <= 0) {

315:         if (_newInactivityThreshold > config.windowSize) {

333:         if (_newInactivityThreshold <= 0) {

373:             if (existingVoteTimestamp == 0) {

```

```solidity
File: IDPRegistryUpgradeable.sol

28:         if (uid >= _uidCounter || deletedUIDs[uid]) {

58:         if (_uidToIDP[uid].publicAddress != msg.sender) {

65:         if (_uidToIDP[issuerDidToUid[issuerDid]].publicAddress != msg.sender) {

72:         if (proofs.length <= 0) {

101:         if (idpData.publicAddress == address(0)) {

161:         if (idp.publicAddress == address(0)) {

```

```solidity
File: JailedNodesUpgradeable.sol

62:         if (

223:         if (len > 0) {

250:             if (releasedTimestamp == 0) {

271:         if (

331:         if (_slashPrcnt > 100) {

358:             if (jailData[i].releasedTimestamp == 0) {

362:             if (endTime < startTimestamp || startTime > endTimestamp) {

```

```solidity
File: NetworkConfigurationUpgradeable.sol

182:         if (safeToUpgradeCandidates.length <= 0) {

198:             if (currIndex <= 0) {

322:         if (amountReceived + escrowDeposit < registrationFee) {

331:         if (amountReceived > registrationFee) {

338:         if (registrationFee > amountReceived) {

375:         if (refundAmount > 0) {

```

```solidity
File: PermissionUpgradeable.sol

113:         if (issuanceDateUnix >= block.timestamp) {

247:             if (result[i] != 0x00) {

```

```solidity
File: ReconfigurationUpgradeable.sol

42:         if (

154:         if (_toleranceFactor <= 0) {

205:         if (candidatesNotInCooloff.length > 0) {

220:             if (governorsInCooloff.length < tolerance) {

255:             if (p.value == 0) {

258:             if (p.value >= upgradeProbabilty.value) {

275:             if (networkConfigurations[d].totalCandidates == 0) {

278:             if (pie == 0) {

288:         if (dValue > 0) {

350:             if (i < nrlength) {

362:             if (i < rlength) {

504:             if (candidatesFound.length > 0) {

611:         if (requiredRbnCandidatesLen >= tolerance) {

640:             if (

647:             } else if (nonRbnFound < requiredNonRbn) {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

54:         if (signupBonus == 0) {

258:         if (nodeId < 200) {

260:         } else if (nodeId >= 200 && nodeId < 600) {

```

```solidity
File: StakingDepositUpgradeable.sol

54:         if (deposits[nodeId].depositTimestamp <= 0) {

74:         if (deposits[nodeId].depositTimestamp <= 0) {

100:         if (

108:         if (coolOffStartTimestamp[nodeId] != 0) {

142:         if (_newTreasuryAddress == address(0)) {

156:         if (_newTreasuryAddress == address(0)) {

257:         if (yearIndex > 0) {

258:             if (_tokensInCirculation.length - 1 != yearIndex) {

281:         if (

288:         if (

293:         } else if (

300:         if (block.timestamp < stakeEndTimestamp) {

330:             if (_rewardsClaimedInYear.length - 1 != yearIndex) {

334:             if (timeStaked > -1) {

413:         if (deposits[nodeConfig.id].unstakeTimestamp != 0) {

426:         if (signUpBonus > 0) {

428:             if (jTenure.jailedTimestamp > 0 && jTenure.releasedTimestamp == 0) {

438:             if (nodeConfig.exitTimestamp > 0) {

457:             if (effectiveDaysForStake > 0) {

492:         if (slashedAmount > 0) {

511:         if (deposits[nodeId].depositTimestamp <= 0) {

520:         if (

526:         } else if (

541:         } else if (

550:         if (slashAmount != 0) {

617:         if (deposits[nodeId].depositTimestamp <= 0) {

620:         if (deposits[nodeId].slashedAmount != 0) {

623:         if (deposits[nodeId].depositedAmount < _feeAmount) {

629:         if (deposits[nodeId].redbellyDeposit >= _feeAmount) {

```

```solidity
File: StakingEscrowUpgradeable.sol

7:         if (payer != _msgSender() && owner() != _msgSender()) {

71:         if (payment < amount) {

```

```solidity
File: TombstonedNodesUpgradeable.sol

89:         if (tombstonedNodes[nodeId] != 0) {

102:         if (tombstonedNodes[nodeId] > 0) {

```

</details> 
 


 ### <a name="NC-9"></a>[NC-9]
 ### constants should be defined rather than using magic numbers
Even [assembly](https://github.com/code-423n4/2022-05-opensea-seaport/blob/9d7ce4d08bf3c3010304a0476a785c70c0e90ae7/contracts/lib/TokenTransferrer.sol#L35-L39) can benefit from using readable constants instead of hex/numeric literals

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: PermissionUpgradeable.sol

189:                 add(vc, 0x20),

191:                 add(hash, 0x20),

227:                 add(requestData, 0x20),

229:                 add(result, 0x20),

247:             if (result[i] != 0x00) {

278:                 add(requestData, 0x20),

280:                 add(ret, 0x20),

332:                 add(requestData, 0x20),

334:                 add(ret, 0x20),

```

</details> 
 


 ### <a name="NC-10"></a>[NC-10]
 ### Contract declarations should have NatSpec @author annotations

#### Impact:
Adding a NatSpec @author annotation to contract declarations can improve code documentation.

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

4: contract ActivityMonitorUpgradeable is IActivityMonitor, RBACUpgradeable {

```

```solidity
File: ContractRoleAuthUpgradeable.sol

5: abstract contract ContractRoleAuthUpgradeable is RBACUpgradeable {

```

```solidity
File: IDPRegistryUpgradeable.sol

5: contract IDPRegistryUpgradeable is IIDPRegistry, RBACUpgradeable {

```

```solidity
File: JailedNodesUpgradeable.sol

8: contract JailedNodesUpgradeable is ContractRoleAuthUpgradeable, IJailedNodes {

38:                 "not enough balance in the smart contract for treasury transfer"

```

```solidity
File: NetworkConfigurationUpgradeable.sol

5: contract NetworkConfigurationContractUpgradeable is

```

```solidity
File: PermissionUpgradeable.sol

7: contract PermissionUpgradeable is IPermission, RBACUpgradeable {

```

```solidity
File: RBACUpgradeable.sol

5: abstract contract RBACUpgradeable is AccessControlUpgradeable {

```

```solidity
File: ReconfigurationUpgradeable.sol

5: contract ReconfigurationContractUpgradeable is

```

```solidity
File: SignupBonusVestingUpgradeable.sol

14: contract SignupBonusVestingUpgradeable is

142:             revert TransferBalanceError("not enough balance in the contract");

```

```solidity
File: StakingDepositUpgradeable.sol

5: contract StakingDepositUpgradeable is

361:             revert InsufficientBalance("Insufficient contract balance");

554:                 revert InsufficientBalance("Insufficient contract balance");

```

```solidity
File: StakingEscrowUpgradeable.sol

4: contract StakingEscrowUpgradeable is Initializable, OwnableUpgradeable {

```

```solidity
File: TombstonedNodesUpgradeable.sol

8: contract TombstonedNodesUpgradeable is

```

</details> 
 


 ### <a name="NC-11"></a>[NC-11]
 ### Contract declarations should have NatSpec @Title annotations

#### Impact:
Adding a NatSpec @Title annotation to contract declarations can improve code documentation.

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

4: contract ActivityMonitorUpgradeable is IActivityMonitor, RBACUpgradeable {

```

```solidity
File: ContractRoleAuthUpgradeable.sol

5: abstract contract ContractRoleAuthUpgradeable is RBACUpgradeable {

```

```solidity
File: IDPRegistryUpgradeable.sol

5: contract IDPRegistryUpgradeable is IIDPRegistry, RBACUpgradeable {

```

```solidity
File: JailedNodesUpgradeable.sol

8: contract JailedNodesUpgradeable is ContractRoleAuthUpgradeable, IJailedNodes {

38:                 "not enough balance in the smart contract for treasury transfer"

```

```solidity
File: NetworkConfigurationUpgradeable.sol

5: contract NetworkConfigurationContractUpgradeable is

```

```solidity
File: PermissionUpgradeable.sol

7: contract PermissionUpgradeable is IPermission, RBACUpgradeable {

```

```solidity
File: RBACUpgradeable.sol

5: abstract contract RBACUpgradeable is AccessControlUpgradeable {

```

```solidity
File: ReconfigurationUpgradeable.sol

5: contract ReconfigurationContractUpgradeable is

```

```solidity
File: SignupBonusVestingUpgradeable.sol

14: contract SignupBonusVestingUpgradeable is

142:             revert TransferBalanceError("not enough balance in the contract");

```

```solidity
File: StakingDepositUpgradeable.sol

5: contract StakingDepositUpgradeable is

361:             revert InsufficientBalance("Insufficient contract balance");

554:                 revert InsufficientBalance("Insufficient contract balance");

```

```solidity
File: StakingEscrowUpgradeable.sol

4: contract StakingEscrowUpgradeable is Initializable, OwnableUpgradeable {

```

```solidity
File: TombstonedNodesUpgradeable.sol

8: contract TombstonedNodesUpgradeable is

```

</details> 
 


 ### <a name="NC-12"></a>[NC-12]
 ### NatSpec: Contract declarations should have @dev tags

#### Impact:
@dev is used to explain extra details to developers

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

4: contract ActivityMonitorUpgradeable is IActivityMonitor, RBACUpgradeable {

```

```solidity
File: ContractRoleAuthUpgradeable.sol

5: abstract contract ContractRoleAuthUpgradeable is RBACUpgradeable {

```

```solidity
File: IDPRegistryUpgradeable.sol

5: contract IDPRegistryUpgradeable is IIDPRegistry, RBACUpgradeable {

```

```solidity
File: JailedNodesUpgradeable.sol

8: contract JailedNodesUpgradeable is ContractRoleAuthUpgradeable, IJailedNodes {

38:                 "not enough balance in the smart contract for treasury transfer"

```

```solidity
File: NetworkConfigurationUpgradeable.sol

5: contract NetworkConfigurationContractUpgradeable is

```

```solidity
File: PermissionUpgradeable.sol

7: contract PermissionUpgradeable is IPermission, RBACUpgradeable {

```

```solidity
File: RBACUpgradeable.sol

5: abstract contract RBACUpgradeable is AccessControlUpgradeable {

```

```solidity
File: ReconfigurationUpgradeable.sol

5: contract ReconfigurationContractUpgradeable is

```

```solidity
File: SignupBonusVestingUpgradeable.sol

14: contract SignupBonusVestingUpgradeable is

142:             revert TransferBalanceError("not enough balance in the contract");

```

```solidity
File: StakingDepositUpgradeable.sol

5: contract StakingDepositUpgradeable is

361:             revert InsufficientBalance("Insufficient contract balance");

554:                 revert InsufficientBalance("Insufficient contract balance");

```

```solidity
File: StakingEscrowUpgradeable.sol

4: contract StakingEscrowUpgradeable is Initializable, OwnableUpgradeable {

```

```solidity
File: TombstonedNodesUpgradeable.sol

8: contract TombstonedNodesUpgradeable is

```

</details> 
 


 ### <a name="NC-13"></a>[NC-13]
 ### NatSpec: Contract declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

4: contract ActivityMonitorUpgradeable is IActivityMonitor, RBACUpgradeable {

```

```solidity
File: ContractRoleAuthUpgradeable.sol

5: abstract contract ContractRoleAuthUpgradeable is RBACUpgradeable {

```

```solidity
File: IDPRegistryUpgradeable.sol

5: contract IDPRegistryUpgradeable is IIDPRegistry, RBACUpgradeable {

```

```solidity
File: JailedNodesUpgradeable.sol

8: contract JailedNodesUpgradeable is ContractRoleAuthUpgradeable, IJailedNodes {

38:                 "not enough balance in the smart contract for treasury transfer"

```

```solidity
File: NetworkConfigurationUpgradeable.sol

5: contract NetworkConfigurationContractUpgradeable is

```

```solidity
File: PermissionUpgradeable.sol

7: contract PermissionUpgradeable is IPermission, RBACUpgradeable {

```

```solidity
File: RBACUpgradeable.sol

5: abstract contract RBACUpgradeable is AccessControlUpgradeable {

```

```solidity
File: ReconfigurationUpgradeable.sol

5: contract ReconfigurationContractUpgradeable is

```

```solidity
File: SignupBonusVestingUpgradeable.sol

14: contract SignupBonusVestingUpgradeable is

142:             revert TransferBalanceError("not enough balance in the contract");

```

```solidity
File: StakingDepositUpgradeable.sol

5: contract StakingDepositUpgradeable is

361:             revert InsufficientBalance("Insufficient contract balance");

554:                 revert InsufficientBalance("Insufficient contract balance");

```

```solidity
File: StakingEscrowUpgradeable.sol

4: contract StakingEscrowUpgradeable is Initializable, OwnableUpgradeable {

```

```solidity
File: TombstonedNodesUpgradeable.sol

8: contract TombstonedNodesUpgradeable is

```

</details> 
 


 ### <a name="NC-14"></a>[NC-14]
 ### NatSpec: Contract declarations should have @notice tags
@notice is used to explain to end users what the contract does, and the compiler interprets /// or /** comments as this tag if one wasnt explicitly provided

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

4: contract ActivityMonitorUpgradeable is IActivityMonitor, RBACUpgradeable {

```

```solidity
File: ContractRoleAuthUpgradeable.sol

5: abstract contract ContractRoleAuthUpgradeable is RBACUpgradeable {

```

```solidity
File: IDPRegistryUpgradeable.sol

5: contract IDPRegistryUpgradeable is IIDPRegistry, RBACUpgradeable {

```

```solidity
File: JailedNodesUpgradeable.sol

8: contract JailedNodesUpgradeable is ContractRoleAuthUpgradeable, IJailedNodes {

38:                 "not enough balance in the smart contract for treasury transfer"

```

```solidity
File: NetworkConfigurationUpgradeable.sol

5: contract NetworkConfigurationContractUpgradeable is

```

```solidity
File: PermissionUpgradeable.sol

7: contract PermissionUpgradeable is IPermission, RBACUpgradeable {

```

```solidity
File: RBACUpgradeable.sol

5: abstract contract RBACUpgradeable is AccessControlUpgradeable {

```

```solidity
File: ReconfigurationUpgradeable.sol

5: contract ReconfigurationContractUpgradeable is

```

```solidity
File: SignupBonusVestingUpgradeable.sol

14: contract SignupBonusVestingUpgradeable is

142:             revert TransferBalanceError("not enough balance in the contract");

```

```solidity
File: StakingDepositUpgradeable.sol

5: contract StakingDepositUpgradeable is

361:             revert InsufficientBalance("Insufficient contract balance");

554:                 revert InsufficientBalance("Insufficient contract balance");

```

```solidity
File: StakingEscrowUpgradeable.sol

4: contract StakingEscrowUpgradeable is Initializable, OwnableUpgradeable {

```

```solidity
File: TombstonedNodesUpgradeable.sol

8: contract TombstonedNodesUpgradeable is

```

</details> 
 


 ### <a name="NC-15"></a>[NC-15]
 ### Consider using delete rather than assigning zero to clear value

#### Impact:
Consider using delete rather than assigning zero to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (77)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

78:         for (uint256 i = 0; i < authAddresses.length; i++) {

```

```solidity
File: IDPRegistryUpgradeable.sol

75:         for (uint256 i = 0; i < proofs.length; i++) {

118:         for (uint256 i = 0; i < idpProofCounts[uid]; i++) {

127:         for (uint256 i = 0; i < idpData.proofs.length; i++) {

143:         uint256 index = 0;

144:         for (uint256 i = 0; i < _uidCounter; i++) {

158:         for (uint256 i = 0; i < idpProofCounts[uid]; i++) {

205:         for (uint256 i = 0; i < idpProofCounts[uid]; i++) {

270:         uint256 deletedCount = 0;

271:         for (uint256 i = 0; i < _uidCounter; i++) {

```

```solidity
File: JailedNodesUpgradeable.sol

118:         for (uint256 i = 0; i < authorizedUsers.length; i++) {

246:         uint256 timeServedInJail = 0;

247:         for (uint256 i = 0; i < getJailCountForNode(_address); i++) {

354:         uint256 timeInJail = 0;

355:         for (uint256 i = 0; i < jailData.length; i++) {

```

```solidity
File: NetworkConfigurationUpgradeable.sol

187:         uint256 candidateIndex = 0;

189:             uint256 currIndex = 0;

190:             for (uint256 i = 0; i < safeToUpgradeCandidates.length; i++) {

249:         for (uint256 i = 0; i < _authorisedUsers.length; i++) {

252:         for (uint256 i = 0; i < _bootStrapNodes.length; i++) {

319:         uint256 refundAmount = 0;

336:         uint256 amountToWithdrawFromEscrow = 0;

515:         for (uint256 i = 0; i < govs.length; i++) {

583:         uint256 currIndex = 0;

584:         for (uint256 i = 0; i < allCandidates.length; i++) {

591:         for (uint256 i = 0; i < currIndex; i++) {

```

```solidity
File: PermissionUpgradeable.sol

28:         for (uint256 i = 0; i < authAddresses.length; i++) {

49:         for (uint256 i = 0; i < supportedProofTypes.length; i++) {

136:         for (uint256 i = 0; i < proofs.length; i++) {

246:         for (uint256 i = 0; i < result.length; i++) {

```

```solidity
File: ReconfigurationUpgradeable.sol

71:         for (uint256 i = 0; i < authorizedAddresses.length; i++) {

104:         uint256 currIndex = 0;

107:         for (uint256 i = 0; i < candidates.length; i++) {

123:         for (uint256 i = 0; i < currIndex; i++) {

213:                 uint256 i = 0;

232:                 for (uint256 i = 0; i < randomGovernors.length; i++) {

307:         for (uint256 i = 0; i < safeToUpgradeCandidates.length; i++) {

326:         for (uint256 i = 0; i < prioritisedForDowngradeGovernors.length; i++) {

348:         uint256 j = 0;

349:         for (uint256 i = 0; i < upto && j < count; i++) {

387:         uint256 idx = 0;

388:         for (uint256 i = 0; i < governors.length; i++) {

408:         for (uint256 i = 0; i < count; i++) {

427:         for (uint256 itr = 0; itr < swappableGovernors.length; itr++) {

532:                 for (itr = 0; itr < swapSize; itr++) {

539:                 for (itr = 0; itr < nonRbnSwapSize; itr++) {

562:             for (uint256 i = 0; i < swapSize; i++) {

575:         for (uint256 i = 0; i < governorsToDowngrade.length; i++) {

586:         for (uint256 i = 0; i < governorsToDowngrade.length; i++) {

613:             requiredNonRbnCandidatesLen = 0;

639:         for (uint256 i = 0; i < randomIndexes.length; i++) {

656:         uint256 candidatesFoundIdx = 0;

657:         for (uint256 i = 0; i < rbnFound; i++) {

660:         for (uint256 i = 0; i < nonRbnFound; i++) {

688:             for (uint256 i = 0; i < governors.length; i++) {

696:             for (uint256 i = 0; i < candidates.length; i++) {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

93:         for (uint256 i = 0; i < bootNodeAddresses.length; i++) {

97:         for (uint256 i = 0; i < _authorizedUsers.length; i++) {

```

```solidity
File: StakingDepositUpgradeable.sol

165:         for (uint256 i = 0; i < _authorisedUsers.length; i++) {

299:         uint256 jailTimeBetweenSpan = 0;

327:         uint256 rewardAmount = 0;

328:         for (uint256 yearIndex = 0; yearIndex <= yearIndexes; yearIndex++) {

424:         uint256 timeInNetwork = 0;

467:         deposits[nodeConfig.id].depositedAmount = 0;

468:         deposits[nodeConfig.id].redbellyDeposit = 0;

469:         deposits[nodeConfig.id].nodeOperatorDeposit = 0;

470:         deposits[nodeConfig.id].slashedAmount = 0;

471:         deposits[nodeConfig.id].slashedNodeOperatorDeposit = 0;

472:         deposits[nodeConfig.id].slashedRedbellyDeposit = 0;

534:             deposits[nodeId].redbellyDeposit = 0;

568:         deposits[nodeId].slashedAmount = 0;

571:         deposits[nodeId].slashedRedbellyDeposit = 0;

574:         deposits[nodeId].slashedNodeOperatorDeposit = 0;

589:         deposits[nodeId].slashedAmount = 0;

591:         deposits[nodeId].slashedNodeOperatorDeposit = 0;

592:         deposits[nodeId].slashedRedbellyDeposit = 0;

```

```solidity
File: TombstonedNodesUpgradeable.sol

32:         for (uint256 i = 0; i < _authorisedUsers.length; i++) { //@audit cache first

```

</details> 
 


 ### <a name="NC-16"></a>[NC-16]
 ### Consider using delete rather than assigning false to clear value

#### Impact:
Consider using delete rather than assigning alse to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: PermissionUpgradeable.sol

176:         bool callresult = false;

259:         bool callresult = false;

313:         bool callresult = false;

```

</details> 
 


 ### <a name="NC-17"></a>[NC-17]
 ### Consider adding a block/deny-list"
Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens  

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

4: contract ActivityMonitorUpgradeable is IActivityMonitor, RBACUpgradeable {

```

```solidity
File: ContractRoleAuthUpgradeable.sol

5: abstract contract ContractRoleAuthUpgradeable is RBACUpgradeable {

```

```solidity
File: IDPRegistryUpgradeable.sol

5: contract IDPRegistryUpgradeable is IIDPRegistry, RBACUpgradeable {

```

```solidity
File: JailedNodesUpgradeable.sol

8: contract JailedNodesUpgradeable is ContractRoleAuthUpgradeable, IJailedNodes {

38:                 "not enough balance in the smart contract for treasury transfer"

```

```solidity
File: NetworkConfigurationUpgradeable.sol

5: contract NetworkConfigurationContractUpgradeable is

```

```solidity
File: PermissionUpgradeable.sol

7: contract PermissionUpgradeable is IPermission, RBACUpgradeable {

```

```solidity
File: RBACUpgradeable.sol

5: abstract contract RBACUpgradeable is AccessControlUpgradeable {

```

```solidity
File: ReconfigurationUpgradeable.sol

5: contract ReconfigurationContractUpgradeable is

```

```solidity
File: SignupBonusVestingUpgradeable.sol

14: contract SignupBonusVestingUpgradeable is

142:             revert TransferBalanceError("not enough balance in the contract");

```

```solidity
File: StakingDepositUpgradeable.sol

5: contract StakingDepositUpgradeable is

361:             revert InsufficientBalance("Insufficient contract balance");

554:                 revert InsufficientBalance("Insufficient contract balance");

```

```solidity
File: StakingEscrowUpgradeable.sol

4: contract StakingEscrowUpgradeable is Initializable, OwnableUpgradeable {

```

```solidity
File: TombstonedNodesUpgradeable.sol

8: contract TombstonedNodesUpgradeable is

```

</details> 
 


 ### <a name="NC-18"></a>[NC-18]
 ### Use bytes.concat() on bytes instead of abi.encodePacked() for clearer semantic meaning
Starting with version 0.8.4, Solidity has the bytes.concat() function, which allows one to concatenate a list of bytes/strings, without extra padding. Using this function rather than abi.encodePacked() makes the intended operation more clear, leading to less reviewer confusion.  

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: PermissionUpgradeable.sol

102:                     abi.encodePacked(

138:                 keccak256(abi.encodePacked(proofs[i].proofType)) ==

139:                 keccak256(abi.encodePacked(_proofType))

211:         bytes memory requestData = abi.encodePacked(

213:             abi.encodePacked(_idpPublicKey, jwsBytes)

```

</details> 
 


 ### <a name="NC-19"></a>[NC-19]
 ### Consider adding emergency-stop functionality

#### Impact:
Adding a way to quickly halt protocol functionality in an emergency, rather than having to pause individual contracts one-by-one, will make in-progress hack mitigation faster and much less stressful.

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

4: contract ActivityMonitorUpgradeable is IActivityMonitor, RBACUpgradeable {

```

```solidity
File: ContractRoleAuthUpgradeable.sol

5: abstract contract ContractRoleAuthUpgradeable is RBACUpgradeable {

```

```solidity
File: IDPRegistryUpgradeable.sol

5: contract IDPRegistryUpgradeable is IIDPRegistry, RBACUpgradeable {

```

```solidity
File: JailedNodesUpgradeable.sol

8: contract JailedNodesUpgradeable is ContractRoleAuthUpgradeable, IJailedNodes {

38:                 "not enough balance in the smart contract for treasury transfer"

```

```solidity
File: NetworkConfigurationUpgradeable.sol

5: contract NetworkConfigurationContractUpgradeable is

```

```solidity
File: PermissionUpgradeable.sol

7: contract PermissionUpgradeable is IPermission, RBACUpgradeable {

```

```solidity
File: RBACUpgradeable.sol

5: abstract contract RBACUpgradeable is AccessControlUpgradeable {

```

```solidity
File: ReconfigurationUpgradeable.sol

5: contract ReconfigurationContractUpgradeable is

```

```solidity
File: SignupBonusVestingUpgradeable.sol

14: contract SignupBonusVestingUpgradeable is

142:             revert TransferBalanceError("not enough balance in the contract");

```

```solidity
File: StakingDepositUpgradeable.sol

5: contract StakingDepositUpgradeable is

361:             revert InsufficientBalance("Insufficient contract balance");

554:                 revert InsufficientBalance("Insufficient contract balance");

```

```solidity
File: StakingEscrowUpgradeable.sol

4: contract StakingEscrowUpgradeable is Initializable, OwnableUpgradeable {

```

```solidity
File: TombstonedNodesUpgradeable.sol

8: contract TombstonedNodesUpgradeable is

```

</details> 
 


 ### <a name="NC-20"></a>[NC-20]
 ### Error declarations should have NatSpec descriptions

*Instances (31)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

12:     error UnauthorisedVoter(string);

13:     error InvalidProposal(string);

14:     error InvalidValue(string);

15:     error InvalidVote(string);

```

```solidity
File: IDPRegistryUpgradeable.sol

23:     error InvalidUID(string);

24:     error InvalidDID(string);

25:     error InvalidValue(string);

```

```solidity
File: JailedNodesUpgradeable.sol

9:     error IncorrectRegistrationFee(string, uint256, uint256);

16:     error InvalidAddress(string);

17:     error InsufficientBalance(string);

18:     error InvalidValue(string);

19:     error TransferBalanceError(string);

```

```solidity
File: NetworkConfigurationUpgradeable.sol

14:     error IncorrectRegistrationFee(string, uint256, uint256);

40:     error InvalidAddress(string);

41:     error InvalidHostname(string);

42:     error InsufficientNodes(string);

```

```solidity
File: PermissionUpgradeable.sol

13:     error InvalidData(string);

14:     error InvalidProof(string);

```

```solidity
File: RBACUpgradeable.sol

14:     error UnauthorisedAccess(string);

```

```solidity
File: ReconfigurationUpgradeable.sol

36:     error InvalidValue(string);

```

```solidity
File: SignupBonusVestingUpgradeable.sol

37:     error UnauthorisedError(string);

38:     error NotEligible(string);

39:     error TransferBalanceError(string);

```

```solidity
File: StakingDepositUpgradeable.sol

46:     error InvalidAddress(string);

47:     error InsufficientBalance(string);

48:     error InvalidValue(string);

49:     error TransferBalanceError(string);

50:     error NotAllowed(string);

```

```solidity
File: StakingEscrowUpgradeable.sol

5:     error UnauthorisedError(string);

```

```solidity
File: TombstonedNodesUpgradeable.sol

21:     error InsufficientNodes(string);

22:     error InvalidAddress(string);

```

</details> 
 


 ### <a name="NC-21"></a>[NC-21]
 ### Custom error has no error details
Custom errors should have a description of the error. This is used to explain to end users what the error means. 

*Instances (31)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

12:     error UnauthorisedVoter(string);

13:     error InvalidProposal(string);

14:     error InvalidValue(string);

15:     error InvalidVote(string);

```

```solidity
File: IDPRegistryUpgradeable.sol

23:     error InvalidUID(string);

24:     error InvalidDID(string);

25:     error InvalidValue(string);

```

```solidity
File: JailedNodesUpgradeable.sol

9:     error IncorrectRegistrationFee(string, uint256, uint256);

16:     error InvalidAddress(string);

17:     error InsufficientBalance(string);

18:     error InvalidValue(string);

19:     error TransferBalanceError(string);

```

```solidity
File: NetworkConfigurationUpgradeable.sol

14:     error IncorrectRegistrationFee(string, uint256, uint256);

40:     error InvalidAddress(string);

41:     error InvalidHostname(string);

42:     error InsufficientNodes(string);

```

```solidity
File: PermissionUpgradeable.sol

13:     error InvalidData(string);

14:     error InvalidProof(string);

```

```solidity
File: RBACUpgradeable.sol

14:     error UnauthorisedAccess(string);

```

```solidity
File: ReconfigurationUpgradeable.sol

36:     error InvalidValue(string);

```

```solidity
File: SignupBonusVestingUpgradeable.sol

37:     error UnauthorisedError(string);

38:     error NotEligible(string);

39:     error TransferBalanceError(string);

```

```solidity
File: StakingDepositUpgradeable.sol

46:     error InvalidAddress(string);

47:     error InsufficientBalance(string);

48:     error InvalidValue(string);

49:     error TransferBalanceError(string);

50:     error NotAllowed(string);

```

```solidity
File: StakingEscrowUpgradeable.sol

5:     error UnauthorisedError(string);

```

```solidity
File: TombstonedNodesUpgradeable.sol

21:     error InsufficientNodes(string);

22:     error InvalidAddress(string);

```

</details> 
 


 ### <a name="NC-22"></a>[NC-22]
 ### Events are missing sender information

#### Impact:
Including msg.sender in events triggered by user actions can make events more useful for end users.

*Instances (30)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

279:         emit RecentVotingIntervalUpdated(_newInterval);

298:         emit InactivityThresholdForRoundsUpdated(_newWindowSize);

321:         emit InactivityThresholdForRoundsUpdated(_newInactivityThreshold);

340:         emit InactivityThresholdForMessageUpdated(_newInactivityThreshold);

392:         emit ProposalRaised(_inactiveNode, _timestamp);

```

```solidity
File: IDPRegistryUpgradeable.sol

137:         emit IDPRegistered(idpData);

217:         emit IDPUpdated(info);

250:         emit IDPRemoved(idpInfo);

```

```solidity
File: JailedNodesUpgradeable.sol

210:             emit Jailed(

```

```solidity
File: NetworkConfigurationUpgradeable.sol

164:         emit NodeRemoved(nodeAddress);

170:         emit NodeRemoved(nodeAddress);

378:         emit NodeRegistered(nodeAddress);

445:         emit NodeConfigUpdated(nodeAddr);

475:         emit CoolOffPeriodInitiated(nodeAddress);

```

```solidity
File: PermissionUpgradeable.sol

123:         emit PermissionsEnabled();

162:         emit UserAuthorized(_userAddress);

```

```solidity
File: ReconfigurationUpgradeable.sol

142:         emit ReconfigurationIntervalUpdated(reconfigurationInterval);

158:         emit ToleranceFactorUpdated(toleranceFactor);

175:         emit ReconfigurationBiasnessUpdated(biasedReconfiguration);

192:         emit UpgradeProbabilityUpdated(current, upgradeProbabilty);

249:         emit ReconfigurationComplete(lastReconfigurationTime);

```

```solidity
File: SignupBonusVestingUpgradeable.sol

125:         emit Registered(_nodeAddr);

```

```solidity
File: StakingDepositUpgradeable.sol

126:         emit MinimumStakeAmountUpdated(_minStakeAmount);

378:         emit Reward(rewardsToBeClaimed);

401:         emit StakeDeposited(_depositor, msg.value);

557:         emit StakeSlashed(_depositor, slashAmount);

576:         emit SlashedStakeReverted(_depositor, slashedAmt);

602:         emit StakeDeposited(_depositor, msg.value);

```

```solidity
File: StakingEscrowUpgradeable.sol

49:         emit Deposited(payee, amount);

```

```solidity
File: TombstonedNodesUpgradeable.sol

93:         emit Tombstoned(_nodeAddress);

```

</details> 
 


 ### <a name="NC-23"></a>[NC-23]
 ### NatSpec: Event declarations should have NatSpec descriptions

*Instances (35)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IDPRegistryUpgradeable.sol

8:     event IDPRegistered(IDPInformationIO idpInfo);

9:     event IDPUpdated(IDPInformationIO idpInfo);

10:     event IDPRemoved(IDPInformationIO idpInfo);

```

```solidity
File: NetworkConfigurationUpgradeable.sol

34:     event NodeConfigUpdated(address nodeAddress);

35:     event GovernorsUpdated(address[] governorAddresses);

36:     event NodeRegistered(address nodeAddress);

37:     event NodeRemoved(address nodeAddress);

38:     event CoolOffPeriodInitiated(address nodeOperator);

```

```solidity
File: SignupBonusVestingUpgradeable.sol

33:     event Received(address from, uint256 value);

34:     event Registered(address nodeAddr);

35:     event Claimed(address by, uint256 value);

```

```solidity
File: StakingEscrowUpgradeable.sol

27:     event Deposited(address indexed payee, uint256 weiAmount);

28:     event Withdrawn(

```

```solidity
File: TombstonedNodesUpgradeable.sol

20:     event Tombstoned(address governor);

```

```solidity
File: interfaces/IActivityMonitor.sol

8:     event RecentVotingIntervalUpdated(uint256 _interval);

11:     event InactivityThresholdForRoundsUpdated(uint256 inactivityThreshold);

12:     event InactivityThresholdForMessageUpdated(uint256 inactivityThreshold);

13:     event WindowSizeUpdated(uint256 _windowSize);

14:     event ProposalRaised(address _inactiveNodeAddress, uint256 timestamp);

15:     event NodeJailed(address _jailedNodeAddress, uint256 votes);

```

```solidity
File: interfaces/IJailedNodes.sol

11:     event Jailed(

```

```solidity
File: interfaces/IPermission.sol

20:     event UserAuthorized(address userAddress);

23:     event PermissionsEnabled();

```

```solidity
File: interfaces/IReconfiguration.sol

17:     event ReconfigurationComplete(uint256 latestReconfigurationTime);

18:     event ToleranceFactorUpdated(uint256 toleranceFactor);

19:     event NetworkConfigurationAddressUpdated(address newAddr);

20:     event ReconfigurationIntervalUpdated(

23:     event ReconfigurationBiasnessUpdated(bool isBiasedNetwork);

24:     event UpgradeProbabilityUpdated(

```

```solidity
File: interfaces/IStakingDeposit.sol

5:     event StakeDeposited(address indexed depositor, uint256 indexed amount);

6:     event StakeWithdrawn(address indexed depositor, uint256 indexed amount);

7:     event MinimumStakeAmountUpdated(uint256 _minStakeAmount);

8:     event StakeSlashed(address indexed depositor, uint256 indexed amount);

9:     event SlashedStakeReverted(

13:     event Reward(uint256 indexed amount);

```

</details> 
 


 ### <a name="NC-24"></a>[NC-24]
 ### Events should use parameters to convey information

#### Impact:
Using parameters in events can provide additional information to subscribers about the event occurrence.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: PermissionUpgradeable.sol

123:         emit PermissionsEnabled();

```

</details> 
 


 ### <a name="NC-25"></a>[NC-25]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (242)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

55:     function initialize(

86:     function _getNetworkConfigurationContract()

105:     function _getNodeAddressUsingSignerAddress(

125:     function isVoteRecent(uint256 timestamp) public view returns (bool) {

130:     function _getNodeIdForAddress(

145:     function _removeOutdatedVotes(address _inactiveNode) private {

164:     function _isGovernor(address signerAddress) private view returns (bool) {

183:     function _isGovernorNodeAddress(

200:     function getGovernorVoteTimestampForInactiveNode(

229:     function getEarliestNodeInactivityVote(

245:     function votesCountAgainstNode(

252:     function _getJailedNodesContract() private view returns (IJailedNodes) {

269:     function updateRecentVoteInterval(

288:     function updateWindowSize(uint256 _newWindowSize) external onlyRedbelly {

307:     function updateInactivityThresholdForRounds(

330:     function updateInactivityThresholdForMessage(

349:     function addProposal(

```

```solidity
File: ContractRoleAuthUpgradeable.sol

69:     function initialize() public virtual override onlyInitializing {

```

```solidity
File: IDPRegistryUpgradeable.sol

86:     function initialize() public virtual override initializer {

90:     function register(

140:     function getAll() external view returns (IDPInformationIO[] memory) {

153:     function getByUid(

175:     function getByIssuerDid(

189:     function updateByUid(

221:     function updateByIssuerDid(

237:     function removeByUid(

254:     function removeByIssuerDid(

269:     function _getDeletedCount() private view returns (uint256) {

279:     function getIssuersByProofType(

285:     function getSupportedProofTypes()

```

```solidity
File: JailedNodesUpgradeable.sol

104:     function initialize(

125:     function _getNetworkConfigurationContract()

140:     function _getNodeIdForAddress(

147:     function _getTombstonedContractInstance()

160:     function _getStakingContractInstance()

175:     function jail(

218:     function getRecentJailTenure(

229:     function getJailCountForNode(

236:     function isJailedNode(address _governor) public view returns (bool) {

242:     function getTimeServedInJail(

259:     function freeServedGuilty(

290:     function freeInnocent(

318:     function _reinitiateNodeAsCandidate(address _address) private {

330:     function setSlashPrcnt(uint8 _slashPrcnt) external onlyRedbelly {

343:     function setDaysToServe(uint256 _daysToServe) public onlyRedbelly {

347:     function getJailedDuration(

376:     function sendSlashedStakeToTreasury(

```

```solidity
File: NetworkConfigurationUpgradeable.sol

67:     function getActiveCandidateNodes()

77:     function isGovernor(address nodeAddress) public view returns (bool) {

81:     function isCandidate(address nodeAddress) public view returns (bool) {

85:     function getCandidateIndex(

95:     function getGovernors() public view returns (address[] memory) {

99:     function getCandidates() public view returns (address[] memory) {

103:     function getNetworkSize() public view returns (uint256) {

109:     function getNodeConfigurationsByAddresses(

115:     function getNodeConfiguration(

128:     function isBootNode(address _nodeAddress) public view returns (bool) {

132:     function removeNodeDetailsFromNetwork(

153:     function addCandidate(

159:     function setNodeAsExited(

167:     function removeCandidate(address nodeAddress) external onlyRedbelly {

173:     function removeJailedCandidateFromNetwork(

179:     function _safelyReplaceGovernor(address nodeAddress) private {

224:     function removeGovernorFromNetwork(

233:     function signingAddressToNodeAddress(

240:     function initialize(

277:     function swapNodesWithIndexesAndUpdateRoles(

296:     function register(

381:     function addGovernor(

407:     function removeGovernor(address nodeAddress) public onlyRedbelly {

422:     function addRedbellyNodes(address nodeAddress) public onlyRedbelly {

426:     function removeRedbellyNodes(address nodeAddress) public onlyRedbelly {

430:     function updateCandidateConfig(

448:     function removeNode(

478:     function notifyAboutGovernorsUpdate() public {

482:     function getBootNodeAddresses() public view returns (address[] memory) {

486:     function isRedbellyNode(address nodeAddr) public view returns (bool) {

490:     function getGovernorIndex(

500:     function getCandidateAddressAtIndex(

506:     function getGovernorAddressAtIndex(

512:     function getCountOfRedbellyGovernors() public view returns (uint256) {

523:     function getRedbellyNodes() public view returns (address[] memory) {

527:     function _getStakingDepositContractInstance()

542:     function _getReconfigurationContractInstance()

557:     function _setNodeExitTimestamp(

564:     function getCandidatesWithoutCooloffInitiated()

572:     function _candidatesWithoutCooloffInitiated()

```

```solidity
File: PermissionUpgradeable.sol

19:     function initialize(

34:     function getSupportedCredentials()

74:     function request(

121:     function enablePermissionedAccess() external onlyRedbelly {

126:     function getProofpublicKey(

150:     function isAllowed(address _address) external view returns (bool) {

160:     function _authorizeUser(address _userAddress) private {

171:     function _verifyED25519(

256:     function _convertTimestampStringToUnix(

309:     function _parseJson(

```

```solidity
File: RBACUpgradeable.sol

30:     function initialize() public virtual onlyInitializing {

```

```solidity
File: ReconfigurationUpgradeable.sol

52:     function initialize(

76:     function pushToCoolOffQueue(

91:     function filterActiveCandidatesOnly(

129:     function getReconfigurationCount() public view returns (uint256) {

138:     function setReconfigurationInterval(

151:     function updateToleranceFactor(

161:     function getReconfigurationBuffer() public view returns (uint256) {

171:     function setReconfigurationBiasness(

185:     function setUpgradeProbability(

195:     function triggerReconfiguration() public onlyAfterReconfigInterval {

252:     function _calculateD() internal view returns (uint256, bool) {

265:     function _calculateProbability(

296:     function _getCandidatesNotInCooloff()

315:     function _getGovernorsInCooloff(

334:     function _getGovernorsWithCooloffInitiated(

378:     function _getGovernorsNotInCooloff(

399:     function _getRandomGovernorsToDowngrade(

414:     function _performSwap(

465:     function _getSwappableAddresses(

571:     function _getGovernorsByRatio(

597:     function _getRequiredRatioForCandidates(

623:     function _getCandidatesByRequiredRatio(

666:     function _getNetworkConfigurationContractInstance()

681:     function _pushNetworkConfigForRound() internal {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

73:     function initialize(

121:     function register(

131:     function claim()

157:     function status()

200:     function claimable()

216:     function _getNetworkConfigurationContractInstance()

236:     function _getJailedNodesContractInstance()

257:     function _getSignupBonus(uint256 nodeId) private view returns (uint256) {

274:     function _calculateActivePeriodInDays(

```

```solidity
File: StakingDepositUpgradeable.sol

80:     function isCoolOffFinished(

91:     function initiateCooloff(

122:     function setMinimumStakeAmount(

129:     function setCoolOffPeriod(

135:     function setRewardCycle(uint256 _newRewardCycle) external onlyRedbelly {

139:     function setTreasuryAddress(

148:     function initialize(

189:     function getNetworkConfigurationContract()

204:     function getJailedNodesContract()

217:     function setValueOfAlpha(

224:     function setValueOfTheta(

231:     function setValueOfGamma(uint256 _value) external onlyRedbelly {

235:     function _computeJ() internal view returns (uint256) {

242:     function _computeH(uint256 yearIndex) internal view returns (uint256) {

248:     function _getRewardsClaimedInAYear(

254:     function _getTokensInCirculationInAYear(

269:     function _computeStakeDurationInWeeks(

322:     function withdrawStakingRewards() external {

382:     @dev - main deposit function - can be called any entity - no validation for _msgSender()

384:     function stake(

404:     function unstake() external payable canUnstake {

506:     function slashStake(

560:     function revertSlashedStake(

582:     function redepositSlashedStake(

605:     function getSlashedAmount(

612:     function deductFeeFromStake(

638:     function _getNodeConfigForAddress(

655:     function _getNodeIdForAddress(

663:     function getTreasuryAddress() external view virtual returns (address) {

667:     function getDepositTimestamp(

674:     function getCoolOffStartTimestamp(

681:     function isCoolOffInitiated(

688:     function deleteCoolOffStartTimestamp(

695:     function existingStake(address _depositor) external view returns (uint256) {

```

```solidity
File: StakingEscrowUpgradeable.sol

15:     function __stakingEscrowInit() internal onlyInitializing {

19:     function __stakingEscrowInitUnchained() internal onlyInitializing {}

21:     function initialize() public virtual initializer {

36:     function depositsOf(address payee) public view returns (uint256) {

46:     function deposit(address payee) public payable {

65:     function withdraw(

```

```solidity
File: TombstonedNodesUpgradeable.sol

26:     function initialize(

51:     function _getNodeIdForAddress(

68:     function tombstone(address _nodeAddress) external onlyJailedNodesContract {

96:     function setTombstoneThreshold(uint256 _threshold) external onlyRedbelly {

100:     function isTombstoned(address _nodeAddress) external view returns (bool) {

```

```solidity
File: interfaces/IActivityMonitor.sol

17:     function isVoteRecent(uint256) external view returns (bool);

22:     function updateRecentVoteInterval(uint256 _newInterval) external;

27:     function updateInactivityThresholdForMessage(

34:     function updateWindowSize(uint256 _newWindowSize) external;

36:     function votesCountAgainstNode(

43:     function addProposal(address _inactiveNode, uint256 timestamp) external;

```

```solidity
File: interfaces/IIDPRegistry.sol

25:     function register(IDPInformationIO memory idpData) external;

27:     function getIssuersByProofType(

31:     function getSupportedProofTypes() external view returns (string[] memory);

33:     function getAll() external view returns (IDPInformationIO[] memory);

35:     function getByUid(

39:     function getByIssuerDid(

43:     function updateByUid(

48:     function updateByIssuerDid(

53:     function removeByUid(

57:     function removeByIssuerDid(

```

```solidity
File: interfaces/IJailedNodes.sol

16:     function isJailedNode(address _governor) external view returns (bool);

18:     function setSlashPrcnt(uint8 _slashPrcnt) external;

20:     function setDaysToServe(uint256 _daysToServe) external;

22:     function jail(address _governor) external;

24:     function freeInnocent(address _jailedNode) external;

26:     function freeServedGuilty(address _jailedNode) external payable;

28:     function sendSlashedStakeToTreasury(

33:     function getRecentJailTenure(

```

```solidity
File: interfaces/INetworkConfiguration.sol

7:     function register(

16:     function getActiveCandidateNodes() external view returns (address[] memory);

17:     function addGovernor(address nodeAddress) external;

19:     function removeGovernor(address nodeAddress) external;

21:     function isGovernor(address nodeAddress) external view returns (bool);

23:     function isCandidate(address nodeAddress) external view returns (bool);

25:     function getCandidateIndex(

29:     function getCandidatesWithoutCooloffInitiated()

34:     function getCandidates() external view returns (address[] memory);

36:     function addCandidate(address nodeAddress) external;

38:     function getNetworkSize() external view returns (uint256);

40:     function getNodeConfiguration(

44:     function removeCandidate(address nodeAddress) external;

46:     function addRedbellyNodes(address) external;

48:     function removeRedbellyNodes(address) external;

50:     function updateCandidateConfig(

55:     function removeNode(address, uint256) external;

57:     function removeNodeDetailsFromNetwork(address) external;

59:     function signingAddressToNodeAddress(

```

```solidity
File: interfaces/IPermission.sol

30:     function request(

37:     function getSupportedCredentials()

43:     function enablePermissionedAccess() external;

```

```solidity
File: interfaces/IRandomNumberGenerator.sol

5:     function generateRandomNumbers(

```

```solidity
File: interfaces/IReconfiguration.sol

33:     function setReconfigurationInterval(uint256 _updatedInterval) external;

41:     function updateToleranceFactor(uint256 _toleranceFactor) external;

43:     function filterActiveCandidatesOnly(

50:     function triggerReconfiguration() external;

```

```solidity
File: interfaces/ISignupBonusVesting.sol

5:     function register(address _nodeAddr) external;

7:     function status() external view returns (uint256);

9:     function claimable() external view returns (uint256);

11:     function claim() external payable;

```

```solidity
File: interfaces/IStakingDeposit.sol

15:     function initiateCooloff(address _depositor) external;

17:     function setCoolOffPeriod(uint256 _updatedCoolOffPeriod) external;

19:     function stake(

25:     function unstake() external payable;

27:     function slashStake(address _depositor, uint8 _amountPrcnt) external;

29:     function redepositSlashedStake(address _depositor) external payable;

31:     function revertSlashedStake(address _depositor) external payable;

33:     function getSlashedAmount(

37:     function isCoolOffInitiated(

```

```solidity
File: interfaces/ITombstonedNodes.sol

5:     function tombstone(address _governor) external;

7:     function isTombstoned(address _nodeAddress) external view returns (bool);

```

</details> 
 


 ### <a name="NC-26"></a>[NC-26]
 ### NatSpec: function declarations should have @Notice tags
@notice is used to explain to end users what the function does, and the compiler interprets /// or /** comments as this tag if one wasn't explicitly provided.  

*Instances (242)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

55:     function initialize(

86:     function _getNetworkConfigurationContract()

105:     function _getNodeAddressUsingSignerAddress(

125:     function isVoteRecent(uint256 timestamp) public view returns (bool) {

130:     function _getNodeIdForAddress(

145:     function _removeOutdatedVotes(address _inactiveNode) private {

164:     function _isGovernor(address signerAddress) private view returns (bool) {

183:     function _isGovernorNodeAddress(

200:     function getGovernorVoteTimestampForInactiveNode(

229:     function getEarliestNodeInactivityVote(

245:     function votesCountAgainstNode(

252:     function _getJailedNodesContract() private view returns (IJailedNodes) {

269:     function updateRecentVoteInterval(

288:     function updateWindowSize(uint256 _newWindowSize) external onlyRedbelly {

307:     function updateInactivityThresholdForRounds(

330:     function updateInactivityThresholdForMessage(

349:     function addProposal(

```

```solidity
File: ContractRoleAuthUpgradeable.sol

69:     function initialize() public virtual override onlyInitializing {

```

```solidity
File: IDPRegistryUpgradeable.sol

86:     function initialize() public virtual override initializer {

90:     function register(

140:     function getAll() external view returns (IDPInformationIO[] memory) {

153:     function getByUid(

175:     function getByIssuerDid(

189:     function updateByUid(

221:     function updateByIssuerDid(

237:     function removeByUid(

254:     function removeByIssuerDid(

269:     function _getDeletedCount() private view returns (uint256) {

279:     function getIssuersByProofType(

285:     function getSupportedProofTypes()

```

```solidity
File: JailedNodesUpgradeable.sol

104:     function initialize(

125:     function _getNetworkConfigurationContract()

140:     function _getNodeIdForAddress(

147:     function _getTombstonedContractInstance()

160:     function _getStakingContractInstance()

175:     function jail(

218:     function getRecentJailTenure(

229:     function getJailCountForNode(

236:     function isJailedNode(address _governor) public view returns (bool) {

242:     function getTimeServedInJail(

259:     function freeServedGuilty(

290:     function freeInnocent(

318:     function _reinitiateNodeAsCandidate(address _address) private {

330:     function setSlashPrcnt(uint8 _slashPrcnt) external onlyRedbelly {

343:     function setDaysToServe(uint256 _daysToServe) public onlyRedbelly {

347:     function getJailedDuration(

376:     function sendSlashedStakeToTreasury(

```

```solidity
File: NetworkConfigurationUpgradeable.sol

67:     function getActiveCandidateNodes()

77:     function isGovernor(address nodeAddress) public view returns (bool) {

81:     function isCandidate(address nodeAddress) public view returns (bool) {

85:     function getCandidateIndex(

95:     function getGovernors() public view returns (address[] memory) {

99:     function getCandidates() public view returns (address[] memory) {

103:     function getNetworkSize() public view returns (uint256) {

109:     function getNodeConfigurationsByAddresses(

115:     function getNodeConfiguration(

128:     function isBootNode(address _nodeAddress) public view returns (bool) {

132:     function removeNodeDetailsFromNetwork(

153:     function addCandidate(

159:     function setNodeAsExited(

167:     function removeCandidate(address nodeAddress) external onlyRedbelly {

173:     function removeJailedCandidateFromNetwork(

179:     function _safelyReplaceGovernor(address nodeAddress) private {

224:     function removeGovernorFromNetwork(

233:     function signingAddressToNodeAddress(

240:     function initialize(

277:     function swapNodesWithIndexesAndUpdateRoles(

296:     function register(

381:     function addGovernor(

407:     function removeGovernor(address nodeAddress) public onlyRedbelly {

422:     function addRedbellyNodes(address nodeAddress) public onlyRedbelly {

426:     function removeRedbellyNodes(address nodeAddress) public onlyRedbelly {

430:     function updateCandidateConfig(

448:     function removeNode(

478:     function notifyAboutGovernorsUpdate() public {

482:     function getBootNodeAddresses() public view returns (address[] memory) {

486:     function isRedbellyNode(address nodeAddr) public view returns (bool) {

490:     function getGovernorIndex(

500:     function getCandidateAddressAtIndex(

506:     function getGovernorAddressAtIndex(

512:     function getCountOfRedbellyGovernors() public view returns (uint256) {

523:     function getRedbellyNodes() public view returns (address[] memory) {

527:     function _getStakingDepositContractInstance()

542:     function _getReconfigurationContractInstance()

557:     function _setNodeExitTimestamp(

564:     function getCandidatesWithoutCooloffInitiated()

572:     function _candidatesWithoutCooloffInitiated()

```

```solidity
File: PermissionUpgradeable.sol

19:     function initialize(

34:     function getSupportedCredentials()

74:     function request(

121:     function enablePermissionedAccess() external onlyRedbelly {

126:     function getProofpublicKey(

150:     function isAllowed(address _address) external view returns (bool) {

160:     function _authorizeUser(address _userAddress) private {

171:     function _verifyED25519(

256:     function _convertTimestampStringToUnix(

309:     function _parseJson(

```

```solidity
File: RBACUpgradeable.sol

30:     function initialize() public virtual onlyInitializing {

```

```solidity
File: ReconfigurationUpgradeable.sol

52:     function initialize(

76:     function pushToCoolOffQueue(

91:     function filterActiveCandidatesOnly(

129:     function getReconfigurationCount() public view returns (uint256) {

138:     function setReconfigurationInterval(

151:     function updateToleranceFactor(

161:     function getReconfigurationBuffer() public view returns (uint256) {

171:     function setReconfigurationBiasness(

185:     function setUpgradeProbability(

195:     function triggerReconfiguration() public onlyAfterReconfigInterval {

252:     function _calculateD() internal view returns (uint256, bool) {

265:     function _calculateProbability(

296:     function _getCandidatesNotInCooloff()

315:     function _getGovernorsInCooloff(

334:     function _getGovernorsWithCooloffInitiated(

378:     function _getGovernorsNotInCooloff(

399:     function _getRandomGovernorsToDowngrade(

414:     function _performSwap(

465:     function _getSwappableAddresses(

571:     function _getGovernorsByRatio(

597:     function _getRequiredRatioForCandidates(

623:     function _getCandidatesByRequiredRatio(

666:     function _getNetworkConfigurationContractInstance()

681:     function _pushNetworkConfigForRound() internal {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

73:     function initialize(

121:     function register(

131:     function claim()

157:     function status()

200:     function claimable()

216:     function _getNetworkConfigurationContractInstance()

236:     function _getJailedNodesContractInstance()

257:     function _getSignupBonus(uint256 nodeId) private view returns (uint256) {

274:     function _calculateActivePeriodInDays(

```

```solidity
File: StakingDepositUpgradeable.sol

80:     function isCoolOffFinished(

91:     function initiateCooloff(

122:     function setMinimumStakeAmount(

129:     function setCoolOffPeriod(

135:     function setRewardCycle(uint256 _newRewardCycle) external onlyRedbelly {

139:     function setTreasuryAddress(

148:     function initialize(

189:     function getNetworkConfigurationContract()

204:     function getJailedNodesContract()

217:     function setValueOfAlpha(

224:     function setValueOfTheta(

231:     function setValueOfGamma(uint256 _value) external onlyRedbelly {

235:     function _computeJ() internal view returns (uint256) {

242:     function _computeH(uint256 yearIndex) internal view returns (uint256) {

248:     function _getRewardsClaimedInAYear(

254:     function _getTokensInCirculationInAYear(

269:     function _computeStakeDurationInWeeks(

322:     function withdrawStakingRewards() external {

382:     @dev - main deposit function - can be called any entity - no validation for _msgSender()

384:     function stake(

404:     function unstake() external payable canUnstake {

506:     function slashStake(

560:     function revertSlashedStake(

582:     function redepositSlashedStake(

605:     function getSlashedAmount(

612:     function deductFeeFromStake(

638:     function _getNodeConfigForAddress(

655:     function _getNodeIdForAddress(

663:     function getTreasuryAddress() external view virtual returns (address) {

667:     function getDepositTimestamp(

674:     function getCoolOffStartTimestamp(

681:     function isCoolOffInitiated(

688:     function deleteCoolOffStartTimestamp(

695:     function existingStake(address _depositor) external view returns (uint256) {

```

```solidity
File: StakingEscrowUpgradeable.sol

15:     function __stakingEscrowInit() internal onlyInitializing {

19:     function __stakingEscrowInitUnchained() internal onlyInitializing {}

21:     function initialize() public virtual initializer {

36:     function depositsOf(address payee) public view returns (uint256) {

46:     function deposit(address payee) public payable {

65:     function withdraw(

```

```solidity
File: TombstonedNodesUpgradeable.sol

26:     function initialize(

51:     function _getNodeIdForAddress(

68:     function tombstone(address _nodeAddress) external onlyJailedNodesContract {

96:     function setTombstoneThreshold(uint256 _threshold) external onlyRedbelly {

100:     function isTombstoned(address _nodeAddress) external view returns (bool) {

```

```solidity
File: interfaces/IActivityMonitor.sol

17:     function isVoteRecent(uint256) external view returns (bool);

22:     function updateRecentVoteInterval(uint256 _newInterval) external;

27:     function updateInactivityThresholdForMessage(

34:     function updateWindowSize(uint256 _newWindowSize) external;

36:     function votesCountAgainstNode(

43:     function addProposal(address _inactiveNode, uint256 timestamp) external;

```

```solidity
File: interfaces/IIDPRegistry.sol

25:     function register(IDPInformationIO memory idpData) external;

27:     function getIssuersByProofType(

31:     function getSupportedProofTypes() external view returns (string[] memory);

33:     function getAll() external view returns (IDPInformationIO[] memory);

35:     function getByUid(

39:     function getByIssuerDid(

43:     function updateByUid(

48:     function updateByIssuerDid(

53:     function removeByUid(

57:     function removeByIssuerDid(

```

```solidity
File: interfaces/IJailedNodes.sol

16:     function isJailedNode(address _governor) external view returns (bool);

18:     function setSlashPrcnt(uint8 _slashPrcnt) external;

20:     function setDaysToServe(uint256 _daysToServe) external;

22:     function jail(address _governor) external;

24:     function freeInnocent(address _jailedNode) external;

26:     function freeServedGuilty(address _jailedNode) external payable;

28:     function sendSlashedStakeToTreasury(

33:     function getRecentJailTenure(

```

```solidity
File: interfaces/INetworkConfiguration.sol

7:     function register(

16:     function getActiveCandidateNodes() external view returns (address[] memory);

17:     function addGovernor(address nodeAddress) external;

19:     function removeGovernor(address nodeAddress) external;

21:     function isGovernor(address nodeAddress) external view returns (bool);

23:     function isCandidate(address nodeAddress) external view returns (bool);

25:     function getCandidateIndex(

29:     function getCandidatesWithoutCooloffInitiated()

34:     function getCandidates() external view returns (address[] memory);

36:     function addCandidate(address nodeAddress) external;

38:     function getNetworkSize() external view returns (uint256);

40:     function getNodeConfiguration(

44:     function removeCandidate(address nodeAddress) external;

46:     function addRedbellyNodes(address) external;

48:     function removeRedbellyNodes(address) external;

50:     function updateCandidateConfig(

55:     function removeNode(address, uint256) external;

57:     function removeNodeDetailsFromNetwork(address) external;

59:     function signingAddressToNodeAddress(

```

```solidity
File: interfaces/IPermission.sol

30:     function request(

37:     function getSupportedCredentials()

43:     function enablePermissionedAccess() external;

```

```solidity
File: interfaces/IRandomNumberGenerator.sol

5:     function generateRandomNumbers(

```

```solidity
File: interfaces/IReconfiguration.sol

33:     function setReconfigurationInterval(uint256 _updatedInterval) external;

41:     function updateToleranceFactor(uint256 _toleranceFactor) external;

43:     function filterActiveCandidatesOnly(

50:     function triggerReconfiguration() external;

```

```solidity
File: interfaces/ISignupBonusVesting.sol

5:     function register(address _nodeAddr) external;

7:     function status() external view returns (uint256);

9:     function claimable() external view returns (uint256);

11:     function claim() external payable;

```

```solidity
File: interfaces/IStakingDeposit.sol

15:     function initiateCooloff(address _depositor) external;

17:     function setCoolOffPeriod(uint256 _updatedCoolOffPeriod) external;

19:     function stake(

25:     function unstake() external payable;

27:     function slashStake(address _depositor, uint8 _amountPrcnt) external;

29:     function redepositSlashedStake(address _depositor) external payable;

31:     function revertSlashedStake(address _depositor) external payable;

33:     function getSlashedAmount(

37:     function isCoolOffInitiated(

```

```solidity
File: interfaces/ITombstonedNodes.sol

5:     function tombstone(address _governor) external;

7:     function isTombstoned(address _nodeAddress) external view returns (bool);

```

</details> 
 


 ### <a name="NC-27"></a>[NC-27]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (242)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

55:     function initialize(

86:     function _getNetworkConfigurationContract()

105:     function _getNodeAddressUsingSignerAddress(

125:     function isVoteRecent(uint256 timestamp) public view returns (bool) {

130:     function _getNodeIdForAddress(

145:     function _removeOutdatedVotes(address _inactiveNode) private {

164:     function _isGovernor(address signerAddress) private view returns (bool) {

183:     function _isGovernorNodeAddress(

200:     function getGovernorVoteTimestampForInactiveNode(

229:     function getEarliestNodeInactivityVote(

245:     function votesCountAgainstNode(

252:     function _getJailedNodesContract() private view returns (IJailedNodes) {

269:     function updateRecentVoteInterval(

288:     function updateWindowSize(uint256 _newWindowSize) external onlyRedbelly {

307:     function updateInactivityThresholdForRounds(

330:     function updateInactivityThresholdForMessage(

349:     function addProposal(

```

```solidity
File: ContractRoleAuthUpgradeable.sol

69:     function initialize() public virtual override onlyInitializing {

```

```solidity
File: IDPRegistryUpgradeable.sol

86:     function initialize() public virtual override initializer {

90:     function register(

140:     function getAll() external view returns (IDPInformationIO[] memory) {

153:     function getByUid(

175:     function getByIssuerDid(

189:     function updateByUid(

221:     function updateByIssuerDid(

237:     function removeByUid(

254:     function removeByIssuerDid(

269:     function _getDeletedCount() private view returns (uint256) {

279:     function getIssuersByProofType(

285:     function getSupportedProofTypes()

```

```solidity
File: JailedNodesUpgradeable.sol

104:     function initialize(

125:     function _getNetworkConfigurationContract()

140:     function _getNodeIdForAddress(

147:     function _getTombstonedContractInstance()

160:     function _getStakingContractInstance()

175:     function jail(

218:     function getRecentJailTenure(

229:     function getJailCountForNode(

236:     function isJailedNode(address _governor) public view returns (bool) {

242:     function getTimeServedInJail(

259:     function freeServedGuilty(

290:     function freeInnocent(

318:     function _reinitiateNodeAsCandidate(address _address) private {

330:     function setSlashPrcnt(uint8 _slashPrcnt) external onlyRedbelly {

343:     function setDaysToServe(uint256 _daysToServe) public onlyRedbelly {

347:     function getJailedDuration(

376:     function sendSlashedStakeToTreasury(

```

```solidity
File: NetworkConfigurationUpgradeable.sol

67:     function getActiveCandidateNodes()

77:     function isGovernor(address nodeAddress) public view returns (bool) {

81:     function isCandidate(address nodeAddress) public view returns (bool) {

85:     function getCandidateIndex(

95:     function getGovernors() public view returns (address[] memory) {

99:     function getCandidates() public view returns (address[] memory) {

103:     function getNetworkSize() public view returns (uint256) {

109:     function getNodeConfigurationsByAddresses(

115:     function getNodeConfiguration(

128:     function isBootNode(address _nodeAddress) public view returns (bool) {

132:     function removeNodeDetailsFromNetwork(

153:     function addCandidate(

159:     function setNodeAsExited(

167:     function removeCandidate(address nodeAddress) external onlyRedbelly {

173:     function removeJailedCandidateFromNetwork(

179:     function _safelyReplaceGovernor(address nodeAddress) private {

224:     function removeGovernorFromNetwork(

233:     function signingAddressToNodeAddress(

240:     function initialize(

277:     function swapNodesWithIndexesAndUpdateRoles(

296:     function register(

381:     function addGovernor(

407:     function removeGovernor(address nodeAddress) public onlyRedbelly {

422:     function addRedbellyNodes(address nodeAddress) public onlyRedbelly {

426:     function removeRedbellyNodes(address nodeAddress) public onlyRedbelly {

430:     function updateCandidateConfig(

448:     function removeNode(

478:     function notifyAboutGovernorsUpdate() public {

482:     function getBootNodeAddresses() public view returns (address[] memory) {

486:     function isRedbellyNode(address nodeAddr) public view returns (bool) {

490:     function getGovernorIndex(

500:     function getCandidateAddressAtIndex(

506:     function getGovernorAddressAtIndex(

512:     function getCountOfRedbellyGovernors() public view returns (uint256) {

523:     function getRedbellyNodes() public view returns (address[] memory) {

527:     function _getStakingDepositContractInstance()

542:     function _getReconfigurationContractInstance()

557:     function _setNodeExitTimestamp(

564:     function getCandidatesWithoutCooloffInitiated()

572:     function _candidatesWithoutCooloffInitiated()

```

```solidity
File: PermissionUpgradeable.sol

19:     function initialize(

34:     function getSupportedCredentials()

74:     function request(

121:     function enablePermissionedAccess() external onlyRedbelly {

126:     function getProofpublicKey(

150:     function isAllowed(address _address) external view returns (bool) {

160:     function _authorizeUser(address _userAddress) private {

171:     function _verifyED25519(

256:     function _convertTimestampStringToUnix(

309:     function _parseJson(

```

```solidity
File: RBACUpgradeable.sol

30:     function initialize() public virtual onlyInitializing {

```

```solidity
File: ReconfigurationUpgradeable.sol

52:     function initialize(

76:     function pushToCoolOffQueue(

91:     function filterActiveCandidatesOnly(

129:     function getReconfigurationCount() public view returns (uint256) {

138:     function setReconfigurationInterval(

151:     function updateToleranceFactor(

161:     function getReconfigurationBuffer() public view returns (uint256) {

171:     function setReconfigurationBiasness(

185:     function setUpgradeProbability(

195:     function triggerReconfiguration() public onlyAfterReconfigInterval {

252:     function _calculateD() internal view returns (uint256, bool) {

265:     function _calculateProbability(

296:     function _getCandidatesNotInCooloff()

315:     function _getGovernorsInCooloff(

334:     function _getGovernorsWithCooloffInitiated(

378:     function _getGovernorsNotInCooloff(

399:     function _getRandomGovernorsToDowngrade(

414:     function _performSwap(

465:     function _getSwappableAddresses(

571:     function _getGovernorsByRatio(

597:     function _getRequiredRatioForCandidates(

623:     function _getCandidatesByRequiredRatio(

666:     function _getNetworkConfigurationContractInstance()

681:     function _pushNetworkConfigForRound() internal {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

73:     function initialize(

121:     function register(

131:     function claim()

157:     function status()

200:     function claimable()

216:     function _getNetworkConfigurationContractInstance()

236:     function _getJailedNodesContractInstance()

257:     function _getSignupBonus(uint256 nodeId) private view returns (uint256) {

274:     function _calculateActivePeriodInDays(

```

```solidity
File: StakingDepositUpgradeable.sol

80:     function isCoolOffFinished(

91:     function initiateCooloff(

122:     function setMinimumStakeAmount(

129:     function setCoolOffPeriod(

135:     function setRewardCycle(uint256 _newRewardCycle) external onlyRedbelly {

139:     function setTreasuryAddress(

148:     function initialize(

189:     function getNetworkConfigurationContract()

204:     function getJailedNodesContract()

217:     function setValueOfAlpha(

224:     function setValueOfTheta(

231:     function setValueOfGamma(uint256 _value) external onlyRedbelly {

235:     function _computeJ() internal view returns (uint256) {

242:     function _computeH(uint256 yearIndex) internal view returns (uint256) {

248:     function _getRewardsClaimedInAYear(

254:     function _getTokensInCirculationInAYear(

269:     function _computeStakeDurationInWeeks(

322:     function withdrawStakingRewards() external {

382:     @dev - main deposit function - can be called any entity - no validation for _msgSender()

384:     function stake(

404:     function unstake() external payable canUnstake {

506:     function slashStake(

560:     function revertSlashedStake(

582:     function redepositSlashedStake(

605:     function getSlashedAmount(

612:     function deductFeeFromStake(

638:     function _getNodeConfigForAddress(

655:     function _getNodeIdForAddress(

663:     function getTreasuryAddress() external view virtual returns (address) {

667:     function getDepositTimestamp(

674:     function getCoolOffStartTimestamp(

681:     function isCoolOffInitiated(

688:     function deleteCoolOffStartTimestamp(

695:     function existingStake(address _depositor) external view returns (uint256) {

```

```solidity
File: StakingEscrowUpgradeable.sol

15:     function __stakingEscrowInit() internal onlyInitializing {

19:     function __stakingEscrowInitUnchained() internal onlyInitializing {}

21:     function initialize() public virtual initializer {

36:     function depositsOf(address payee) public view returns (uint256) {

46:     function deposit(address payee) public payable {

65:     function withdraw(

```

```solidity
File: TombstonedNodesUpgradeable.sol

26:     function initialize(

51:     function _getNodeIdForAddress(

68:     function tombstone(address _nodeAddress) external onlyJailedNodesContract {

96:     function setTombstoneThreshold(uint256 _threshold) external onlyRedbelly {

100:     function isTombstoned(address _nodeAddress) external view returns (bool) {

```

```solidity
File: interfaces/IActivityMonitor.sol

17:     function isVoteRecent(uint256) external view returns (bool);

22:     function updateRecentVoteInterval(uint256 _newInterval) external;

27:     function updateInactivityThresholdForMessage(

34:     function updateWindowSize(uint256 _newWindowSize) external;

36:     function votesCountAgainstNode(

43:     function addProposal(address _inactiveNode, uint256 timestamp) external;

```

```solidity
File: interfaces/IIDPRegistry.sol

25:     function register(IDPInformationIO memory idpData) external;

27:     function getIssuersByProofType(

31:     function getSupportedProofTypes() external view returns (string[] memory);

33:     function getAll() external view returns (IDPInformationIO[] memory);

35:     function getByUid(

39:     function getByIssuerDid(

43:     function updateByUid(

48:     function updateByIssuerDid(

53:     function removeByUid(

57:     function removeByIssuerDid(

```

```solidity
File: interfaces/IJailedNodes.sol

16:     function isJailedNode(address _governor) external view returns (bool);

18:     function setSlashPrcnt(uint8 _slashPrcnt) external;

20:     function setDaysToServe(uint256 _daysToServe) external;

22:     function jail(address _governor) external;

24:     function freeInnocent(address _jailedNode) external;

26:     function freeServedGuilty(address _jailedNode) external payable;

28:     function sendSlashedStakeToTreasury(

33:     function getRecentJailTenure(

```

```solidity
File: interfaces/INetworkConfiguration.sol

7:     function register(

16:     function getActiveCandidateNodes() external view returns (address[] memory);

17:     function addGovernor(address nodeAddress) external;

19:     function removeGovernor(address nodeAddress) external;

21:     function isGovernor(address nodeAddress) external view returns (bool);

23:     function isCandidate(address nodeAddress) external view returns (bool);

25:     function getCandidateIndex(

29:     function getCandidatesWithoutCooloffInitiated()

34:     function getCandidates() external view returns (address[] memory);

36:     function addCandidate(address nodeAddress) external;

38:     function getNetworkSize() external view returns (uint256);

40:     function getNodeConfiguration(

44:     function removeCandidate(address nodeAddress) external;

46:     function addRedbellyNodes(address) external;

48:     function removeRedbellyNodes(address) external;

50:     function updateCandidateConfig(

55:     function removeNode(address, uint256) external;

57:     function removeNodeDetailsFromNetwork(address) external;

59:     function signingAddressToNodeAddress(

```

```solidity
File: interfaces/IPermission.sol

30:     function request(

37:     function getSupportedCredentials()

43:     function enablePermissionedAccess() external;

```

```solidity
File: interfaces/IRandomNumberGenerator.sol

5:     function generateRandomNumbers(

```

```solidity
File: interfaces/IReconfiguration.sol

33:     function setReconfigurationInterval(uint256 _updatedInterval) external;

41:     function updateToleranceFactor(uint256 _toleranceFactor) external;

43:     function filterActiveCandidatesOnly(

50:     function triggerReconfiguration() external;

```

```solidity
File: interfaces/ISignupBonusVesting.sol

5:     function register(address _nodeAddr) external;

7:     function status() external view returns (uint256);

9:     function claimable() external view returns (uint256);

11:     function claim() external payable;

```

```solidity
File: interfaces/IStakingDeposit.sol

15:     function initiateCooloff(address _depositor) external;

17:     function setCoolOffPeriod(uint256 _updatedCoolOffPeriod) external;

19:     function stake(

25:     function unstake() external payable;

27:     function slashStake(address _depositor, uint8 _amountPrcnt) external;

29:     function redepositSlashedStake(address _depositor) external payable;

31:     function revertSlashedStake(address _depositor) external payable;

33:     function getSlashedAmount(

37:     function isCoolOffInitiated(

```

```solidity
File: interfaces/ITombstonedNodes.sol

5:     function tombstone(address _governor) external;

7:     function isTombstoned(address _nodeAddress) external view returns (bool);

```

</details> 
 


 ### <a name="NC-28"></a>[NC-28]
 ### If-statement can be converted to a ternary

#### Impact:
The code can be made more compact while also increasing readability by converting the following `if`-statements to ternaries (e.g. `foo += (x > y) ? a : b`)

*Instances (144)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

24:         if (!_isGovernor(msg.sender)) {

32:         if (networkConfigurationContract.isBootNode(_address)) {

39:         if (!_isGovernorNodeAddress(_address)) {

60:         if (_config.inactivityThresholdForRounds <= 0) {

64:         } else if (_config.inactivityThresholdForMessage <= 0) {

68:         } else if (_config.recentVoteInterval <= 0) {

147:         if (_inactivityVotes[nodeId].size() <= 0) {

205:         if (_inactivityVotes[nodeId].votesAgainstNode.length != 0) {

233:         if (_inactivityVotes[nodeId].votesAgainstNode.length != 0) {

272:         if (_newInterval <= 0) {

289:         if (_newWindowSize <= 0) {

292:         if (_newWindowSize < config.inactivityThresholdForRounds) {

310:         if (_newInactivityThreshold <= 0) {

315:         if (_newInactivityThreshold > config.windowSize) {

333:         if (_newInactivityThreshold <= 0) {

361:         if (!isVoteRecent(_timestamp)) {

367:         if (_inactivityVotes[nodeId].size() > 0) {

382:         } else {

388:         if (_inactivityVotes[nodeId].size() >= votesRequiredForMajority) {

```

```solidity
File: ContractRoleAuthUpgradeable.sol

19:         if (!hasRole(STAKING_DEPOSIT_CONTRACT_ROLE, _msgSender())) {

28:         if (!hasRole(JAILED_NODES_CONTRACT_ROLE, _msgSender())) {

37:         if (!hasRole(NETWORK_CONFIG_CONTRACT_ROLE, _msgSender())) {

```

```solidity
File: IDPRegistryUpgradeable.sol

28:         if (uid >= _uidCounter || deletedUIDs[uid]) {

35:         if (!_issuerDidPresent[issuerDid]) {

42:         if (deletedUIDs[uid]) {

51:         if (bytes(str).length <= 0) {

58:         if (_uidToIDP[uid].publicAddress != msg.sender) {

65:         if (_uidToIDP[issuerDidToUid[issuerDid]].publicAddress != msg.sender) {

72:         if (proofs.length <= 0) {

76:             if (bytes(proofs[i].proofType).length <= 0) {

79:             if (bytes(proofs[i].publicKey).length <= 0) {

101:         if (idpData.publicAddress == address(0)) {

104:         if (_issuerDidPresent[idpData.issuerDid]) {

131:             if (!isProofTypeSupported[idpData.proofs[i].proofType]) {

145:             if (!deletedUIDs[i]) {

161:         if (idp.publicAddress == address(0)) {

272:             if (deletedUIDs[i]) {

```

```solidity
File: JailedNodesUpgradeable.sol

36:         if (address(this).balance < amount) {

46:         if (tombstonedContract.isTombstoned(_governor)) {

54:         if (networkConfigurationContract.isBootNode(_address)) {

195:         } else {

205:             } else {

223:         if (len > 0) {

250:             if (releasedTimestamp == 0) {

311:         if (!sent) {

331:         if (_slashPrcnt > 100) {

358:             if (jailData[i].releasedTimestamp == 0) {

362:             if (endTime < startTimestamp || startTime > endTimestamp) {

381:         if (!sent) {

```

```solidity
File: NetworkConfigurationUpgradeable.sol

48:         if (_tombstonedNodesContract.isTombstoned(_nodeAddress)) {

60:         if (_jailedNodesContract.isJailedNode(_nodeAddress)) {

89:         if (_candidates.getAddressAtIndex(index) == nodeAddress) {

143:         if (_governors.nodeExists(nodeAddress)) {

146:         if (_candidates.nodeExists(nodeAddress)) {

182:         if (safeToUpgradeCandidates.length <= 0) {

188:         if (isRedbellyNode(nodeAddress)) {

198:             if (currIndex <= 0) {

211:         } else {

308:         if (_nodeConfig.nodeExists(nodeAddress)) {

311:         if (_nodeConfig.hostnameInUse[hostname]) {

322:         if (amountReceived + escrowDeposit < registrationFee) {

331:         if (amountReceived > registrationFee) {

338:         if (registrationFee > amountReceived) {

375:         if (refundAmount > 0) {

391:         if (isGovernor(nodeAddress)) {

395:         if (_stakingDepositContract.isCoolOffInitiated(nodeAddress)) {

408:         if (!isGovernor(nodeAddress)) {

411:         if (getNetworkSize() <= 4) {

434:         if (!_candidates.nodeExists(nodeAddr)) {

439:         if (isBootNode(nodeAddr)) {

442:         if (isRedbellyNode(nodeAddr)) {

468:         if (isGovernor(nodeAddress)) {

494:         if (_governors.getAddressAtIndex(index) == nodeAddress) {

516:             if (isRedbellyNode(govs[i])) {

585:             if (!stakingDeposit.isCoolOffInitiated(allCandidates[i])) {

```

```solidity
File: PermissionUpgradeable.sol

90:         if (!signatureCheck) {

99:         if (StringToAddress.stringToAddress(user) != msg.sender) {

113:         if (issuanceDateUnix >= block.timestamp) {

151:         if (isPermissionedAccessEnabled) {

203:         if (!callresult) {

241:         if (!callresult) {

247:             if (result[i] != 0x00) {

296:         if (!callresult) {

346:         if (!callresult) {

```

```solidity
File: RBACUpgradeable.sol

17:         if (!hasRole(REDBELLY_ROLE, _msgSender())) {

24:         if (!hasRole(IDP_ROLE, _msgSender())) {

```

```solidity
File: ReconfigurationUpgradeable.sol

98:         if (!found) {

154:         if (_toleranceFactor <= 0) {

205:         if (candidatesNotInCooloff.length > 0) {

220:             if (governorsInCooloff.length < tolerance) {

255:             if (p.value == 0) {

258:             if (p.value >= upgradeProbabilty.value) {

275:             if (networkConfigurations[d].totalCandidates == 0) {

278:             if (pie == 0) {

288:         if (dValue > 0) {

350:             if (i < nrlength) {

362:             if (i < rlength) {

389:             if (!_isGovernorInCooloff[governors[i]]) {

449:             } else if (_isGovernorInCooloff[swappableGovernors[itr]]) {

472:         if (biasedReconfiguration) {

548:         } else {

576:             if (governorsToDowngrade[i].isRedbelly) {

587:             if (governorsToDowngrade[i].isRedbelly) {

611:         if (requiredRbnCandidatesLen >= tolerance) {

647:             } else if (nonRbnFound < requiredNonRbn) {

687:         if (biasedReconfiguration) {

704:         } else {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

42:         if (!_registeredNodes.nodeExists(_msgSender())) {

54:         if (signupBonus == 0) {

61:         if (claimable() <= 0) {

141:         if (address(this).balance < claimableTokens) {

146:         if (!sent) {

258:         if (nodeId < 200) {

260:         } else if (nodeId >= 200 && nodeId < 600) {

```

```solidity
File: StakingDepositUpgradeable.sol

54:         if (deposits[nodeId].depositTimestamp <= 0) {

74:         if (deposits[nodeId].depositTimestamp <= 0) {

108:         if (coolOffStartTimestamp[nodeId] != 0) {

142:         if (_newTreasuryAddress == address(0)) {

156:         if (_newTreasuryAddress == address(0)) {

257:         if (yearIndex > 0) {

300:         if (block.timestamp < stakeEndTimestamp) {

330:             if (_rewardsClaimedInYear.length - 1 != yearIndex) {

334:             if (timeStaked > -1) {

360:         if (address(this).balance < rewardsToBeClaimed) {

374:         if (!sent) {

413:         if (deposits[nodeConfig.id].unstakeTimestamp != 0) {

426:         if (signUpBonus > 0) {

438:             if (nodeConfig.exitTimestamp > 0) {

457:             if (effectiveDaysForStake > 0) {

476:         if (!sent) {

484:         if (!sentToTreasury) {

492:         if (slashedAmount > 0) {

511:         if (deposits[nodeId].depositTimestamp <= 0) {

547:         } else {

550:         if (slashAmount != 0) {

617:         if (deposits[nodeId].depositTimestamp <= 0) {

620:         if (deposits[nodeId].slashedAmount != 0) {

623:         if (deposits[nodeId].depositedAmount < _feeAmount) {

629:         if (deposits[nodeId].redbellyDeposit >= _feeAmount) {

```

```solidity
File: StakingEscrowUpgradeable.sol

7:         if (payer != _msgSender() && owner() != _msgSender()) {

71:         if (payment < amount) {

```

```solidity
File: TombstonedNodesUpgradeable.sol

76:         if (networkConfiguration.isGovernor(_nodeAddress)) {

89:         if (tombstonedNodes[nodeId] != 0) {

102:         if (tombstonedNodes[nodeId] > 0) {

```

</details> 
 


 ### <a name="NC-29"></a>[NC-29]
 ### Large multiples of ten should use scientific notation
Use a scientific notation rather than decimal literals (e.g. 1e6 instead of 1000000), for better code readability.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: SignupBonusVestingUpgradeable.sol

87:         _first200Bonus = 400000 * 1e18;

88:         _next400Bonus = 150000 * 1e18;

```

```solidity
File: StakingDepositUpgradeable.sol

178:         minimumStakeAmount = 100000 ether;

179:         _totalSupplyOfTokens = 10000000000 ether;

183:         _alpha = FloatValue(192307692, 10);

```

</details> 
 


 ### <a name="NC-30"></a>[NC-30]
 ### Consider using named mappings

#### Impact:
Using named mappings can improve code readability and maintainability.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

22:     mapping(uint256 => VotesMinHeapLib.VotesMinHeap) internal _inactivityVotes;

```

```solidity
File: IDPRegistryUpgradeable.sol

12:     mapping(uint256 => IDPInformation) private _uidToIDP;

```

```solidity
File: PermissionUpgradeable.sol

9:     mapping(address => bool) private _isAuthorizedUser;

```

```solidity
File: ReconfigurationUpgradeable.sol

20:     mapping(address => bool) private _isGovernorInCooloff;

```

```solidity
File: SignupBonusVestingUpgradeable.sol

25:     mapping(address => uint256) private _alreadyClaimedTokens;

```

```solidity
File: StakingDepositUpgradeable.sol

28:     mapping(uint256 => uint256) private _rewardsClaimed;

```

```solidity
File: StakingEscrowUpgradeable.sol

34:     mapping(address => uint256) private _deposits;

```

</details> 
 


 ### <a name="NC-31"></a>[NC-31]
 ### Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct

#### Impact:
Combining multiple mappings into a single mapping with a struct can improve readability and maintainability of the code.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: PermissionUpgradeable.sol

9:     mapping(address => bool) private _isAuthorizedUser;

```

```solidity
File: ReconfigurationUpgradeable.sol

20:     mapping(address => bool) private _isGovernorInCooloff;

```

```solidity
File: SignupBonusVestingUpgradeable.sol

25:     mapping(address => uint256) private _alreadyClaimedTokens;

```

```solidity
File: StakingEscrowUpgradeable.sol

34:     mapping(address => uint256) private _deposits;

```

</details> 
 


 ### <a name="NC-32"></a>[NC-32]
 ### Use of override is unnecessary

#### Impact:
Starting with Solidity version [0.8.8](https://docs.soliditylang.org/en/v0.8.20/contracts.html#function-overriding), using the override keyword when the function solely overrides an interface function, and the function doesnt exist in multiple base contracts, is unnecessary.

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContractRoleAuthUpgradeable.sol

69:     function initialize() public virtual override onlyInitializing {

```

```solidity
File: IDPRegistryUpgradeable.sol

86:     function initialize() public virtual override initializer {

94:         override

155:     ) public view override idpExists(uid) returns (IDPInformationIO memory) {

180:         override

194:         override

226:         override

241:         override

258:         override

281:     ) external view override returns (string[] memory) {

288:         override

```

```solidity
File: NetworkConfigurationUpgradeable.sol

235:     ) external view override returns (address) {

```

```solidity
File: ReconfigurationUpgradeable.sol

153:     ) public override onlyRedbelly {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

123:     ) external override onlyNetworkConfigurationContract {

134:         override

160:         override

203:         override

```

</details> 
 


 ### <a name="NC-33"></a>[NC-33]
 ### Consider using descriptive constants when using 0 in the code

#### Impact:
Passing zero as a function argument/Event emission can sometimes result in a security issue (e.g. passing zero as the slippage parameter). Consider using a constant variable with a descriptive name, so its clear that the 0 is intentionally being used, and for the right reasons.

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

126:         return (timestamp > 0 &&

```

```solidity
File: JailedNodesUpgradeable.sol

196:             JailTenure memory jailTenure = JailTenure(

226:         return JailTenure(0, 0, 0);

247:         for (uint256 i = 0; i < getJailCountForNode(_address); i++) {

```

```solidity
File: NetworkConfigurationUpgradeable.sol

199:                 candidateIndex = PseudoRandomNumberGenerator.generateOne(

205:                 candidateIndex = PseudoRandomNumberGenerator.generateOne(

212:             candidateIndex = PseudoRandomNumberGenerator.generateOne(

346:             .NodeParameters(

```

```solidity
File: ReconfigurationUpgradeable.sol

212:             for (

256:                 return (0, false);

262:         return (0, false);

276:                 return UpgradeProbability(0, 0);

404:             .generateMultiple(0, governorsNotInCooloff.length, count, _seed);

556:                 .generateMultiple(

633:             .generateMultiple(

```

```solidity
File: SignupBonusVestingUpgradeable.sol

279:             MathUtils.min(

```

```solidity
File: StakingDepositUpgradeable.sol

182:         _rewardsClaimedInYear.push(0);

331:                 _rewardsClaimedInYear.push(0);

391:         deposits[nodeId] = Deposit(

```

</details> 
 


 ### <a name="NC-34"></a>[NC-34]
 ### Non-external/public variable names should begin with an underscore

#### Impact:
Using an underscore at the beginning of non-external/public variable names can improve code clarity and maintainability. According to the Solidity Style Guide, non-external/public variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*Instances (26)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

8:     Config public config;

10:     uint256 public daysToServInJail;

```

```solidity
File: IDPRegistryUpgradeable.sol

13:     mapping(string => uint256) public issuerDidToUid;

15:     mapping(uint256 => bool) public deletedUIDs;

16:     mapping(uint256 => mapping(uint256 => Proof)) public idpProofs;

17:     mapping(uint256 => uint256) public idpProofCounts;

18:     mapping(string => string[]) public proofTypeToIssuers;

19:     mapping(string => bool) public isProofTypeSupported;

```

```solidity
File: JailedNodesUpgradeable.sol

10:     uint256 public daysToServe;

11:     uint8 public slashPrcnt;

14:     mapping(uint256 => JailTenure[]) public jailTenures;

```

```solidity
File: PermissionUpgradeable.sol

11:     bool public isPermissionedAccessEnabled;

```

```solidity
File: ReconfigurationUpgradeable.sol

21:     bool public biasedReconfiguration;

22:     uint256 public reconfigurationInterval; // Interval after which reconfiguration can be called

23:     uint256 public lastReconfigurationTime; // Unix Timestamp when reconfiguration was called last time

24:     uint256 public toleranceFactor; // the fraction of governor nodes that need to be replaced with candidate nodes

25:     UpgradeProbability public upgradeProbabilty; // the probability upto 3 decimal places

27:     mapping(uint256 => uint256) public lastUpdatedToGovernor; // (nodeId => timestamp)

30:     mapping(uint256 => NetworkConfiguration) public networkConfigurations;

```

```solidity
File: StakingDepositUpgradeable.sol

25:     uint256 public minimumStakeAmount;

38:     uint256 public coolOffPeriod;

41:     mapping(uint256 => Deposit) public deposits;

42:     mapping(uint256 => uint256) public coolOffStartTimestamp;

44:     IBootstrapContractsRegistry public bootstrapRegistryContract;

```

```solidity
File: TombstonedNodesUpgradeable.sol

14:     mapping(uint256 => uint256) public tombstonedNodes;

17:     uint256 public tombstoneThreshold;

```

</details> 
 


 ### <a name="NC-35"></a>[NC-35]
 ### Setters should prevent re-setting of the same value
This especially problematic when the setter also emits the same value, which may be confusing to offline parsers  

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: JailedNodesUpgradeable.sol

330:     function setSlashPrcnt(uint8 _slashPrcnt) external onlyRedbelly {

343:     function setDaysToServe(uint256 _daysToServe) public onlyRedbelly {

```

```solidity
File: StakingDepositUpgradeable.sol

135:     function setRewardCycle(uint256 _newRewardCycle) external onlyRedbelly {

231:     function setValueOfGamma(uint256 _value) external onlyRedbelly {

```

```solidity
File: TombstonedNodesUpgradeable.sol

96:     function setTombstoneThreshold(uint256 _threshold) external onlyRedbelly {

```

```solidity
File: interfaces/IJailedNodes.sol

18:     function setSlashPrcnt(uint8 _slashPrcnt) external;

20:     function setDaysToServe(uint256 _daysToServe) external;

```

```solidity
File: interfaces/IReconfiguration.sol

33:     function setReconfigurationInterval(uint256 _updatedInterval) external;

```

```solidity
File: interfaces/IStakingDeposit.sol

17:     function setCoolOffPeriod(uint256 _updatedCoolOffPeriod) external;

```

</details> 
 


 ### <a name="NC-36"></a>[NC-36]
 ### Use the latest solidity version for deployment  
Upgrading to a newer Solidity release can optimize gas usage, take advantage of new features and improve overall contract efficiency. Where possible, based on compatibility requirements, it is recommended to use newer/latest solidity version to take advantage of the latest optimizations and features. You can see the latest version [here](https://soliditylang.org/blog/category/releases/)

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ArtifactsFromRbnCore.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ContractRoleAuthUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: IDPRegistryUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: JailedNodesUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: NetworkConfigurationUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: PermissionUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: RBACUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ReconfigurationUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: SignupBonusVestingUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: StakingDepositUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: StakingEscrowUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: TombstonedNodesUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IIDPRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IJailedNodes.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/INetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IPermission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IRandomNumberGenerator.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IReconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/ISignupBonusVesting.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IStakingDeposit.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/ITombstonedNodes.sol

2: pragma solidity 0.8.22;

```

</details> 
 


 ### <a name="NC-37"></a>[NC-37]
 ### Consider bounding input array length
The functions below take in an unbounded array, and make function calls for entries in the array. While the function will revert if it eventually runs out of gas, it may be a nicer user experience to require() that the length of the array is below some reasonable maximum, so that the user doesnt have to use up a full transactions gas only to see that the transaction reverts

*Instances (30)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

78:         for (uint256 i = 0; i < authAddresses.length; i++) {

```

```solidity
File: IDPRegistryUpgradeable.sol

75:         for (uint256 i = 0; i < proofs.length; i++) {

127:         for (uint256 i = 0; i < idpData.proofs.length; i++) {

```

```solidity
File: JailedNodesUpgradeable.sol

118:         for (uint256 i = 0; i < authorizedUsers.length; i++) {

355:         for (uint256 i = 0; i < jailData.length; i++) {

```

```solidity
File: NetworkConfigurationUpgradeable.sol

190:             for (uint256 i = 0; i < safeToUpgradeCandidates.length; i++) {

249:         for (uint256 i = 0; i < _authorisedUsers.length; i++) {

252:         for (uint256 i = 0; i < _bootStrapNodes.length; i++) {

515:         for (uint256 i = 0; i < govs.length; i++) {

584:         for (uint256 i = 0; i < allCandidates.length; i++) {

```

```solidity
File: PermissionUpgradeable.sol

28:         for (uint256 i = 0; i < authAddresses.length; i++) {

49:         for (uint256 i = 0; i < supportedProofTypes.length; i++) {

136:         for (uint256 i = 0; i < proofs.length; i++) {

246:         for (uint256 i = 0; i < result.length; i++) {

```

```solidity
File: ReconfigurationUpgradeable.sol

71:         for (uint256 i = 0; i < authorizedAddresses.length; i++) {

107:         for (uint256 i = 0; i < candidates.length; i++) {

232:                 for (uint256 i = 0; i < randomGovernors.length; i++) {

307:         for (uint256 i = 0; i < safeToUpgradeCandidates.length; i++) {

326:         for (uint256 i = 0; i < prioritisedForDowngradeGovernors.length; i++) {

388:         for (uint256 i = 0; i < governors.length; i++) {

427:         for (uint256 itr = 0; itr < swappableGovernors.length; itr++) {

575:         for (uint256 i = 0; i < governorsToDowngrade.length; i++) {

586:         for (uint256 i = 0; i < governorsToDowngrade.length; i++) {

639:         for (uint256 i = 0; i < randomIndexes.length; i++) {

688:             for (uint256 i = 0; i < governors.length; i++) {

696:             for (uint256 i = 0; i < candidates.length; i++) {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

93:         for (uint256 i = 0; i < bootNodeAddresses.length; i++) {

97:         for (uint256 i = 0; i < _authorizedUsers.length; i++) {

```

```solidity
File: StakingDepositUpgradeable.sol

165:         for (uint256 i = 0; i < _authorisedUsers.length; i++) {

```

```solidity
File: TombstonedNodesUpgradeable.sol

32:         for (uint256 i = 0; i < _authorisedUsers.length; i++) { //@audit cache first

```

</details> 
 


 ### <a name="NC-38"></a>[NC-38]
 ### Constants should be defined rather than using magic numbers

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: StakingDepositUpgradeable.sol

183:         _alpha = FloatValue(192307692, 10);

459:                     signUpBonus) / (365 * 4);

```

</details> 
 


 ### <a name="NC-39"></a>[NC-39]
 ### Strings should use double quotes rather than single quotes

#### Impact:
Using consistent double quotes for strings improves code readability and maintainability. Also see it here https://docs.soliditylang.org/en/v0.8.20/style-guide.html#other-recommendations

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

33:             revert InvalidProposal("Can't raise proposal against boot node");

62:                 "Inactivity threshold for rounds can't be negative or zero"

70:                 "Recent vote interval can't be negative or zero"

290:             revert InvalidValue("Window size can't be negative or zero");

312:                 "Inactivity threshold can't be negative or zero"

```

```solidity
File: PermissionUpgradeable.sol

144:         revert InvalidProof("proof type doesn't exists");

```

</details> 
 


 ### <a name="NC-40"></a>[NC-40]
 ### Consider using `SafeTransferLib.safeTransferETH()` or `Address.sendValue()` for clearer semantic meaning
These Functions indicate their purpose with their name more clearly than using low-level calls.  

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: JailedNodesUpgradeable.sol

307:         (bool sent, ) = payable(address(stakingDepository)).call{

380:         (bool sent, ) = payable(treasuryAddress).call{value: slashedStake}("");

```

```solidity
File: SignupBonusVestingUpgradeable.sol

145:         (bool sent, ) = payable(_msgSender()).call{value: claimableTokens}("");

```

```solidity
File: StakingDepositUpgradeable.sol

371:         (bool sent, ) = payable(_msgSender()).call{value: rewardsToBeClaimed}(

475:         (bool sent, ) = payable(_msgSender()).call{value: unstakeValue}("");

481:         (bool sentToTreasury, ) = payable(_treasuryAddress).call{

```

</details> 
 


 ### <a name="NC-41"></a>[NC-41]
 ### Variables need not be initialized to zero
The default value for variables is zero, so initializing them to zero is superfluous.  

*Instances (61)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

78:         for (uint256 i = 0; i < authAddresses.length; i++) {

```

```solidity
File: IDPRegistryUpgradeable.sol

75:         for (uint256 i = 0; i < proofs.length; i++) {

118:         for (uint256 i = 0; i < idpProofCounts[uid]; i++) {

127:         for (uint256 i = 0; i < idpData.proofs.length; i++) {

143:         uint256 index = 0;

144:         for (uint256 i = 0; i < _uidCounter; i++) {

158:         for (uint256 i = 0; i < idpProofCounts[uid]; i++) {

205:         for (uint256 i = 0; i < idpProofCounts[uid]; i++) {

270:         uint256 deletedCount = 0;

271:         for (uint256 i = 0; i < _uidCounter; i++) {

```

```solidity
File: JailedNodesUpgradeable.sol

118:         for (uint256 i = 0; i < authorizedUsers.length; i++) {

246:         uint256 timeServedInJail = 0;

247:         for (uint256 i = 0; i < getJailCountForNode(_address); i++) {

354:         uint256 timeInJail = 0;

355:         for (uint256 i = 0; i < jailData.length; i++) {

```

```solidity
File: NetworkConfigurationUpgradeable.sol

187:         uint256 candidateIndex = 0;

189:             uint256 currIndex = 0;

190:             for (uint256 i = 0; i < safeToUpgradeCandidates.length; i++) {

249:         for (uint256 i = 0; i < _authorisedUsers.length; i++) {

252:         for (uint256 i = 0; i < _bootStrapNodes.length; i++) {

319:         uint256 refundAmount = 0;

336:         uint256 amountToWithdrawFromEscrow = 0;

515:         for (uint256 i = 0; i < govs.length; i++) {

583:         uint256 currIndex = 0;

584:         for (uint256 i = 0; i < allCandidates.length; i++) {

591:         for (uint256 i = 0; i < currIndex; i++) {

```

```solidity
File: PermissionUpgradeable.sol

28:         for (uint256 i = 0; i < authAddresses.length; i++) {

49:         for (uint256 i = 0; i < supportedProofTypes.length; i++) {

136:         for (uint256 i = 0; i < proofs.length; i++) {

246:         for (uint256 i = 0; i < result.length; i++) {

```

```solidity
File: ReconfigurationUpgradeable.sol

71:         for (uint256 i = 0; i < authorizedAddresses.length; i++) {

104:         uint256 currIndex = 0;

107:         for (uint256 i = 0; i < candidates.length; i++) {

123:         for (uint256 i = 0; i < currIndex; i++) {

213:                 uint256 i = 0;

232:                 for (uint256 i = 0; i < randomGovernors.length; i++) {

307:         for (uint256 i = 0; i < safeToUpgradeCandidates.length; i++) {

326:         for (uint256 i = 0; i < prioritisedForDowngradeGovernors.length; i++) {

348:         uint256 j = 0;

349:         for (uint256 i = 0; i < upto && j < count; i++) {

387:         uint256 idx = 0;

388:         for (uint256 i = 0; i < governors.length; i++) {

408:         for (uint256 i = 0; i < count; i++) {

427:         for (uint256 itr = 0; itr < swappableGovernors.length; itr++) {

562:             for (uint256 i = 0; i < swapSize; i++) {

575:         for (uint256 i = 0; i < governorsToDowngrade.length; i++) {

586:         for (uint256 i = 0; i < governorsToDowngrade.length; i++) {

639:         for (uint256 i = 0; i < randomIndexes.length; i++) {

656:         uint256 candidatesFoundIdx = 0;

657:         for (uint256 i = 0; i < rbnFound; i++) {

660:         for (uint256 i = 0; i < nonRbnFound; i++) {

688:             for (uint256 i = 0; i < governors.length; i++) {

696:             for (uint256 i = 0; i < candidates.length; i++) {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

93:         for (uint256 i = 0; i < bootNodeAddresses.length; i++) {

97:         for (uint256 i = 0; i < _authorizedUsers.length; i++) {

```

```solidity
File: StakingDepositUpgradeable.sol

165:         for (uint256 i = 0; i < _authorisedUsers.length; i++) {

299:         uint256 jailTimeBetweenSpan = 0;

327:         uint256 rewardAmount = 0;

328:         for (uint256 yearIndex = 0; yearIndex <= yearIndexes; yearIndex++) {

424:         uint256 timeInNetwork = 0;

```

```solidity
File: TombstonedNodesUpgradeable.sol

32:         for (uint256 i = 0; i < _authorisedUsers.length; i++) { //@audit cache first

```

</details> 
 


 ### <a name="NC-42"></a>[NC-42]
 ### Empty receive()/fallback() function
If the intention is for Ether sent by a caller to be used for an actual purpose (i.e. the function is not just a WETH withdraw() handler), the function should call another function (e.g. call weth.deposit() and use the token on the caller's behalf) or at least emit an event to track that funds were sent directly to it.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: JailedNodesUpgradeable.sol

387: 

```

```solidity
File: NetworkConfigurationUpgradeable.sol

231: 

```

```solidity
File: StakingDepositUpgradeable.sol

635: 

```

</details> 
 


 ### <a name="NC-43"></a>[NC-43]
 ### Consider moving msg.sender checks to modifiers
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.  

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

24:         if (!_isGovernor(msg.sender)) {

```

```solidity
File: IDPRegistryUpgradeable.sol

58:         if (_uidToIDP[uid].publicAddress != msg.sender) {

65:         if (_uidToIDP[issuerDidToUid[issuerDid]].publicAddress != msg.sender) {

```

```solidity
File: PermissionUpgradeable.sol

99:         if (StringToAddress.stringToAddress(user) != msg.sender) {

103:                         "credentialSubject.publicAddress and msg.sender doesn't match:",

117:         _authorizeUser(msg.sender);

```

</details> 
 


 ### <a name="NC-44"></a>[NC-44]
 ### Dont use _msgSender() if not supporting EIP-2771
Use msg.sender if the code does not implement EIP-2771 trusted forwarder support

*Instances (45)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

365:         address voterAddress = _getNodeAddressUsingSignerAddress(_msgSender());

```

```solidity
File: ContractRoleAuthUpgradeable.sol

19:         if (!hasRole(STAKING_DEPOSIT_CONTRACT_ROLE, _msgSender())) {

28:         if (!hasRole(JAILED_NODES_CONTRACT_ROLE, _msgSender())) {

37:         if (!hasRole(NETWORK_CONFIG_CONTRACT_ROLE, _msgSender())) {

47:             !hasRole(ACTIVITY_MONITOR_CONTRACT_ROLE, _msgSender()) &&

48:             !hasRole(REDBELLY_ROLE, _msgSender())

59:             !hasRole(JAILED_NODES_CONTRACT_ROLE, _msgSender()) &&

60:             !hasRole(REDBELLY_ROLE, _msgSender())

```

```solidity
File: JailedNodesUpgradeable.sol

23:         bool hasRedbellyRole = hasRole(REDBELLY_ROLE, _msgSender());

26:             !(!hasRedbellyRole && isJailedNode(_msgSender()))

```

```solidity
File: NetworkConfigurationUpgradeable.sol

376:             payable(_msgSender()).sendValue(refundAmount);

```

```solidity
File: RBACUpgradeable.sol

17:         if (!hasRole(REDBELLY_ROLE, _msgSender())) {

24:         if (!hasRole(IDP_ROLE, _msgSender())) {

33:         _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());

34:         _grantRole(OWNER_ROLE, _msgSender());

```

```solidity
File: SignupBonusVestingUpgradeable.sol

42:         if (!_registeredNodes.nodeExists(_msgSender())) {

51:             .getNodeConfiguration(_msgSender());

113:         emit Received(_msgSender(), msg.value);

144:         _alreadyClaimedTokens[_msgSender()] += claimableTokens;

145:         (bool sent, ) = payable(_msgSender()).call{value: claimableTokens}("");

149:         emit Claimed(_msgSender(), claimableTokens);

167:             .getNodeConfiguration(_msgSender());

173:             _msgSender()

208:         return status() - _alreadyClaimedTokens[_msgSender()];

```

```solidity
File: StakingDepositUpgradeable.sol

63:         uint256 nodeId = _getNodeIdForAddress(_msgSender());

66:             networkConfiguration.isGovernor(_msgSender()) ||

67:             networkConfiguration.isCandidate(_msgSender())

275:             memory nodeConfig = _getNodeConfigForAddress(_msgSender());

302:                 _msgSender(),

311:                 _msgSender(),

324:             memory nodeConfig = _getNodeConfigForAddress(_msgSender());

371:         (bool sent, ) = payable(_msgSender()).call{value: rewardsToBeClaimed}(

382:     @dev - main deposit function - can be called any entity - no validation for _msgSender()

407:             memory nodeConfig = _getNodeConfigForAddress(_msgSender());

411:             .getRecentJailTenure(_msgSender());

430:                     _msgSender(),

446:                 _msgSender(),

475:         (bool sent, ) = payable(_msgSender()).call{value: unstakeValue}("");

499:         emit StakeWithdrawn(_msgSender(), unstakeValue);

551:             payable(_msgSender()).transfer(slashAmount);

```

```solidity
File: StakingEscrowUpgradeable.sol

7:         if (payer != _msgSender() && owner() != _msgSender()) {

7:         if (payer != _msgSender() && owner() != _msgSender()) {

16:         __Ownable_init_unchained(_msgSender());

79:         payable(_msgSender()).sendValue(amount); //@audit use .call to send eth

81:         emit Withdrawn(_msgSender(), payer, amount);

```

</details> 
 


 ### <a name="NC-45"></a>[NC-45]
 ### Array indices should be referenced via enums rather than numeric literals

#### Impact:
Referencing array indices via enums can improve code readability and maintainability.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

211:                     _inactivityVotes[nodeId].votesAgainstNode[0].voter ==

```

```solidity
File: ContractRoleAuthUpgradeable.sol

16:     bytes32[20] internal ___gap;

```

```solidity
File: PermissionUpgradeable.sol

57:             query.typeOfCredential[0] = "RedbellyCredential";

```

```solidity
File: RBACUpgradeable.sol

12:     bytes32[20] internal __gap;

```

```solidity
File: StakingEscrowUpgradeable.sol

89:     uint256[49] private __gap;

```

</details> 
 


 ### <a name="NC-46"></a>[NC-46]
 ### <array>.length should not be looked up in every loop of a for-loop
The overheads outlined below are PER LOOP, excluding the first loop. Storage arrays incur a Gwarmaccess (100 gas), memory arrays use MLOAD (3 gas), calldata arrays use CALLDATALOAD (3 gas). Caching the length changes each of these to a DUP<N> (3 gas), and gets rid of the extra DUP<N> needed to store the stack offset.

*Instances (29)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

78:         for (uint256 i = 0; i < authAddresses.length; i++) {

```

```solidity
File: IDPRegistryUpgradeable.sol

75:         for (uint256 i = 0; i < proofs.length; i++) {

```

```solidity
File: JailedNodesUpgradeable.sol

118:         for (uint256 i = 0; i < authorizedUsers.length; i++) {

355:         for (uint256 i = 0; i < jailData.length; i++) {

```

```solidity
File: NetworkConfigurationUpgradeable.sol

190:             for (uint256 i = 0; i < safeToUpgradeCandidates.length; i++) {

249:         for (uint256 i = 0; i < _authorisedUsers.length; i++) {

252:         for (uint256 i = 0; i < _bootStrapNodes.length; i++) {

515:         for (uint256 i = 0; i < govs.length; i++) {

584:         for (uint256 i = 0; i < allCandidates.length; i++) {

```

```solidity
File: PermissionUpgradeable.sol

28:         for (uint256 i = 0; i < authAddresses.length; i++) {

49:         for (uint256 i = 0; i < supportedProofTypes.length; i++) {

136:         for (uint256 i = 0; i < proofs.length; i++) {

246:         for (uint256 i = 0; i < result.length; i++) {

```

```solidity
File: ReconfigurationUpgradeable.sol

71:         for (uint256 i = 0; i < authorizedAddresses.length; i++) {

107:         for (uint256 i = 0; i < candidates.length; i++) {

232:                 for (uint256 i = 0; i < randomGovernors.length; i++) {

307:         for (uint256 i = 0; i < safeToUpgradeCandidates.length; i++) {

326:         for (uint256 i = 0; i < prioritisedForDowngradeGovernors.length; i++) {

388:         for (uint256 i = 0; i < governors.length; i++) {

427:         for (uint256 itr = 0; itr < swappableGovernors.length; itr++) {

575:         for (uint256 i = 0; i < governorsToDowngrade.length; i++) {

586:         for (uint256 i = 0; i < governorsToDowngrade.length; i++) {

639:         for (uint256 i = 0; i < randomIndexes.length; i++) {

688:             for (uint256 i = 0; i < governors.length; i++) {

696:             for (uint256 i = 0; i < candidates.length; i++) {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

93:         for (uint256 i = 0; i < bootNodeAddresses.length; i++) {

97:         for (uint256 i = 0; i < _authorizedUsers.length; i++) {

```

```solidity
File: StakingDepositUpgradeable.sol

165:         for (uint256 i = 0; i < _authorisedUsers.length; i++) {

```

```solidity
File: TombstonedNodesUpgradeable.sol

32:         for (uint256 i = 0; i < _authorisedUsers.length; i++) { //@audit cache first

```

</details> 
 


 ### <a name="NC-47"></a>[NC-47]
 ### Use assembly to emit events, in order to save gas
Using the [scratch space](https://github.com/Vectorized/solady/blob/30558f5402f02351b96eeb6eaf32bcea29773841/src/tokens/ERC1155.sol#L501-L504) for event arguments (two words or fewer) will save gas over needing Soliditys full abi memory expansion used for emitting normally.

*Instances (35)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

279:         emit RecentVotingIntervalUpdated(_newInterval);

298:         emit InactivityThresholdForRoundsUpdated(_newWindowSize);

321:         emit InactivityThresholdForRoundsUpdated(_newInactivityThreshold);

340:         emit InactivityThresholdForMessageUpdated(_newInactivityThreshold);

392:         emit ProposalRaised(_inactiveNode, _timestamp);

```

```solidity
File: IDPRegistryUpgradeable.sol

137:         emit IDPRegistered(idpData);

217:         emit IDPUpdated(info);

250:         emit IDPRemoved(idpInfo);

```

```solidity
File: JailedNodesUpgradeable.sol

210:             emit Jailed(

```

```solidity
File: NetworkConfigurationUpgradeable.sol

164:         emit NodeRemoved(nodeAddress);

170:         emit NodeRemoved(nodeAddress);

378:         emit NodeRegistered(nodeAddress);

445:         emit NodeConfigUpdated(nodeAddr);

475:         emit CoolOffPeriodInitiated(nodeAddress);

479:         emit GovernorsUpdated(_governors.getAll());

```

```solidity
File: PermissionUpgradeable.sol

123:         emit PermissionsEnabled();

162:         emit UserAuthorized(_userAddress);

```

```solidity
File: ReconfigurationUpgradeable.sol

142:         emit ReconfigurationIntervalUpdated(reconfigurationInterval);

158:         emit ToleranceFactorUpdated(toleranceFactor);

175:         emit ReconfigurationBiasnessUpdated(biasedReconfiguration);

192:         emit UpgradeProbabilityUpdated(current, upgradeProbabilty);

249:         emit ReconfigurationComplete(lastReconfigurationTime);

```

```solidity
File: SignupBonusVestingUpgradeable.sol

113:         emit Received(_msgSender(), msg.value);

125:         emit Registered(_nodeAddr);

149:         emit Claimed(_msgSender(), claimableTokens);

```

```solidity
File: StakingDepositUpgradeable.sol

126:         emit MinimumStakeAmountUpdated(_minStakeAmount);

378:         emit Reward(rewardsToBeClaimed);

401:         emit StakeDeposited(_depositor, msg.value);

499:         emit StakeWithdrawn(_msgSender(), unstakeValue);

557:         emit StakeSlashed(_depositor, slashAmount);

576:         emit SlashedStakeReverted(_depositor, slashedAmt);

602:         emit StakeDeposited(_depositor, msg.value);

```

```solidity
File: StakingEscrowUpgradeable.sol

49:         emit Deposited(payee, amount);

81:         emit Withdrawn(_msgSender(), payer, amount);

```

```solidity
File: TombstonedNodesUpgradeable.sol

93:         emit Tombstoned(_nodeAddress);

```

</details> 
 


 ### <a name="NC-48"></a>[NC-48]
 ### Don't initialize variables with default value

*Instances (64)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

78:         for (uint256 i = 0; i < authAddresses.length; i++) {

```

```solidity
File: IDPRegistryUpgradeable.sol

75:         for (uint256 i = 0; i < proofs.length; i++) {

118:         for (uint256 i = 0; i < idpProofCounts[uid]; i++) {

127:         for (uint256 i = 0; i < idpData.proofs.length; i++) {

143:         uint256 index = 0;

144:         for (uint256 i = 0; i < _uidCounter; i++) {

158:         for (uint256 i = 0; i < idpProofCounts[uid]; i++) {

205:         for (uint256 i = 0; i < idpProofCounts[uid]; i++) {

270:         uint256 deletedCount = 0;

271:         for (uint256 i = 0; i < _uidCounter; i++) {

```

```solidity
File: JailedNodesUpgradeable.sol

118:         for (uint256 i = 0; i < authorizedUsers.length; i++) {

246:         uint256 timeServedInJail = 0;

247:         for (uint256 i = 0; i < getJailCountForNode(_address); i++) {

354:         uint256 timeInJail = 0;

355:         for (uint256 i = 0; i < jailData.length; i++) {

```

```solidity
File: NetworkConfigurationUpgradeable.sol

187:         uint256 candidateIndex = 0;

189:             uint256 currIndex = 0;

190:             for (uint256 i = 0; i < safeToUpgradeCandidates.length; i++) {

249:         for (uint256 i = 0; i < _authorisedUsers.length; i++) {

252:         for (uint256 i = 0; i < _bootStrapNodes.length; i++) {

319:         uint256 refundAmount = 0;

336:         uint256 amountToWithdrawFromEscrow = 0;

515:         for (uint256 i = 0; i < govs.length; i++) {

583:         uint256 currIndex = 0;

584:         for (uint256 i = 0; i < allCandidates.length; i++) {

591:         for (uint256 i = 0; i < currIndex; i++) {

```

```solidity
File: PermissionUpgradeable.sol

28:         for (uint256 i = 0; i < authAddresses.length; i++) {

49:         for (uint256 i = 0; i < supportedProofTypes.length; i++) {

136:         for (uint256 i = 0; i < proofs.length; i++) {

176:         bool callresult = false;

246:         for (uint256 i = 0; i < result.length; i++) {

259:         bool callresult = false;

313:         bool callresult = false;

```

```solidity
File: ReconfigurationUpgradeable.sol

71:         for (uint256 i = 0; i < authorizedAddresses.length; i++) {

104:         uint256 currIndex = 0;

107:         for (uint256 i = 0; i < candidates.length; i++) {

123:         for (uint256 i = 0; i < currIndex; i++) {

213:                 uint256 i = 0;

232:                 for (uint256 i = 0; i < randomGovernors.length; i++) {

307:         for (uint256 i = 0; i < safeToUpgradeCandidates.length; i++) {

326:         for (uint256 i = 0; i < prioritisedForDowngradeGovernors.length; i++) {

348:         uint256 j = 0;

349:         for (uint256 i = 0; i < upto && j < count; i++) {

387:         uint256 idx = 0;

388:         for (uint256 i = 0; i < governors.length; i++) {

408:         for (uint256 i = 0; i < count; i++) {

427:         for (uint256 itr = 0; itr < swappableGovernors.length; itr++) {

562:             for (uint256 i = 0; i < swapSize; i++) {

575:         for (uint256 i = 0; i < governorsToDowngrade.length; i++) {

586:         for (uint256 i = 0; i < governorsToDowngrade.length; i++) {

639:         for (uint256 i = 0; i < randomIndexes.length; i++) {

656:         uint256 candidatesFoundIdx = 0;

657:         for (uint256 i = 0; i < rbnFound; i++) {

660:         for (uint256 i = 0; i < nonRbnFound; i++) {

688:             for (uint256 i = 0; i < governors.length; i++) {

696:             for (uint256 i = 0; i < candidates.length; i++) {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

93:         for (uint256 i = 0; i < bootNodeAddresses.length; i++) {

97:         for (uint256 i = 0; i < _authorizedUsers.length; i++) {

```

```solidity
File: StakingDepositUpgradeable.sol

165:         for (uint256 i = 0; i < _authorisedUsers.length; i++) {

299:         uint256 jailTimeBetweenSpan = 0;

327:         uint256 rewardAmount = 0;

328:         for (uint256 yearIndex = 0; yearIndex <= yearIndexes; yearIndex++) {

424:         uint256 timeInNetwork = 0;

```

```solidity
File: TombstonedNodesUpgradeable.sol

32:         for (uint256 i = 0; i < _authorisedUsers.length; i++) { //@audit cache first

```

</details> 
 


## Gas Optimizations


 ### <a name="GAS-1"></a>[GAS-1]
 ### Enable IR-based code generation
By using `--via-ir` or `{"viaIR": true}`, the compiler is able to use more advanced [multi-function optimizations](https://docs.soliditylang.org/en/v0.8.17/ir-breaking-changes.html#solidity-ir-based-codegen-changes), for extra gas savings.

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ArtifactsFromRbnCore.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ContractRoleAuthUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: IDPRegistryUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: JailedNodesUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: NetworkConfigurationUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: PermissionUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: RBACUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ReconfigurationUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: SignupBonusVestingUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: StakingDepositUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: StakingEscrowUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: TombstonedNodesUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IIDPRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IJailedNodes.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/INetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IPermission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IRandomNumberGenerator.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IReconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/ISignupBonusVesting.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IStakingDeposit.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/ITombstonedNodes.sol

2: pragma solidity 0.8.22;

```

</details> 
 


 ### <a name="GAS-2"></a>[GAS-2]
 ### Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18)
While the compiler knows to optimize away the exponentiation, its still better coding practice to use idioms that do not require compiler optimization, if they exist.

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ReconfigurationUpgradeable.sol

269:         uint256 multiplier = 10 ** upgradeProbabilty.precision;

289:             uint256 divisor = multiplier ** (dValue - 1);

```

```solidity
File: StakingDepositUpgradeable.sol

244:             (((1 + yearIndex) ** _gamma * 10 ** _theta.precision) -

244:             (((1 + yearIndex) ** _gamma * 10 ** _theta.precision) -

245:                 _theta.value) / (1 + yearIndex) ** _gamma;

337:                     int256(10 ** _alpha.precision) +

348:                 computeDem *= 10 ** _theta.precision;

349:                 computeDem *= 10 ** _alpha.precision;

```

</details> 
 


 ### <a name="GAS-3"></a>[GAS-3]
 ### Nesting if-statements is cheaper than using &&
Nesting if-statements avoids the stack operations of setting up and using an extra jumpdest, and saves 6 [gas](https://gist.github.com/IllIllI000/7f3b818abecfadbef93b894481ae7d19)

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

126:         return (timestamp > 0 &&

151:             _inactivityVotes[nodeId].size() != 0 &&

210:                 (nodeVoteIndex == 0 &&

```

```solidity
File: ContractRoleAuthUpgradeable.sol

47:             !hasRole(ACTIVITY_MONITOR_CONTRACT_ROLE, _msgSender()) &&

59:             !hasRole(JAILED_NODES_CONTRACT_ROLE, _msgSender()) &&

```

```solidity
File: JailedNodesUpgradeable.sol

25:             !hasRedbellyRole &&

26:             !(!hasRedbellyRole && isJailedNode(_msgSender()))

238:             getRecentJailTenure(_governor).jailedTimestamp > 0 &&

```

```solidity
File: NetworkConfigurationUpgradeable.sol

461:             !_candidates.nodeExists(nodeAddress) &&

```

```solidity
File: ReconfigurationUpgradeable.sol

349:         for (uint256 i = 0; i < upto && j < count; i++) {

445:                 ) && _isGovernorInCooloff[swappableGovernors[itr]]

641:                 rbnFound < requiredRbn &&

```

```solidity
File: SignupBonusVestingUpgradeable.sol

260:         } else if (nodeId >= 200 && nodeId < 600) {

```

```solidity
File: StakingDepositUpgradeable.sol

87:             coolOffStartTimestamp[nodeId] > 0 &&

101:             jailTenure.releasedTimestamp == 0 &&

282:             nodeConfig.exitTimestamp > 0 &&

289:             deposits[nodeConfig.id].depositTimestamp >= stakeStartTimestamp &&

428:             if (jTenure.jailedTimestamp > 0 && jTenure.releasedTimestamp == 0) {

521:             deposits[nodeId].redbellyDeposit > 0 &&

527:             deposits[nodeId].redbellyDeposit > 0 &&

528:             deposits[nodeId].redbellyDeposit < slashAmount &&

542:             deposits[nodeId].redbellyDeposit == 0 &&

```

```solidity
File: StakingEscrowUpgradeable.sol

7:         if (payer != _msgSender() && owner() != _msgSender()) {

```

</details> 
 


 ### <a name="GAS-4"></a>[GAS-4]
 ### Consider using = instead of += and -= for gas efficiency
Using = instead of += and -= can save gas in certain scenarios. Consider using = when appropriate.

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: StakingDepositUpgradeable.sol

354:                 rewardAmount += rewardOnStake;

451:             timeInNetwork -= totalJailDuration;

461:                 unstakeValue += signUpBonusToBeGiven;

525:             deposits[nodeId].redbellyDeposit -= slashAmount;

539:             deposits[nodeId].nodeOperatorDeposit -= deposits[nodeId]

546:             deposits[nodeId].nodeOperatorDeposit -= slashAmount;

569:         deposits[nodeId].redbellyDeposit += deposits[nodeId]

572:         deposits[nodeId].nodeOperatorDeposit += deposits[nodeId]

588:         deposits[nodeId].depositedAmount += deposits[nodeId].slashedAmount;

590:         deposits[nodeId].nodeOperatorDeposit += msg.value;

627:         deposits[nodeId].depositedAmount -= _feeAmount;

630:             deposits[nodeId].redbellyDeposit -= _feeAmount;

632:             deposits[nodeId].nodeOperatorDeposit -= _feeAmount;

```

</details> 
 


 ### <a name="GAS-5"></a>[GAS-5]
 ### Use >= instead of > for gas efficiency
Using >= costs less gas than >. Consider using >= when appropriate.

*Instances (25)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

126:         return (timestamp > 0 &&

315:         if (_newInactivityThreshold > config.windowSize) {

```

```solidity
File: JailedNodesUpgradeable.sol

223:         if (len > 0) {

238:             getRecentJailTenure(_governor).jailedTimestamp > 0 &&

331:         if (_slashPrcnt > 100) {

362:             if (endTime < startTimestamp || startTime > endTimestamp) {

370:                 (startTimestamp > startTime ? startTimestamp : startTime) +

```

```solidity
File: NetworkConfigurationUpgradeable.sol

331:         if (amountReceived > registrationFee) {

338:         if (registrationFee > amountReceived) {

375:         if (refundAmount > 0) {

```

```solidity
File: ReconfigurationUpgradeable.sol

205:         if (candidatesNotInCooloff.length > 0) {

288:         if (dValue > 0) {

504:             if (candidatesFound.length > 0) {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

180:             endTimestamp > nodeParameters.registrationTimestamp

280:                 daysSinceRegistration > daysSpentInJail

```

```solidity
File: StakingDepositUpgradeable.sol

257:         if (yearIndex > 0) {

282:             nodeConfig.exitTimestamp > 0 &&

294:             deposits[nodeConfig.id].depositTimestamp > stakeEndTimestamp

426:         if (signUpBonus > 0) {

428:             if (jTenure.jailedTimestamp > 0 && jTenure.releasedTimestamp == 0) {

438:             if (nodeConfig.exitTimestamp > 0) {

457:             if (effectiveDaysForStake > 0) {

492:         if (slashedAmount > 0) {

521:             deposits[nodeId].redbellyDeposit > 0 &&

527:             deposits[nodeId].redbellyDeposit > 0 &&

```

</details> 
 


 ### <a name="GAS-6"></a>[GAS-6]
 ### Using bools for storage incurs overhead
Use uint256(1) and uint256(2) for true/false to avoid a Gwarmaccess (100 gas), and to avoid Gsset (20000 gas) when changing from ‘false’ to ‘true’, after having been ‘true’ in the past. See [source](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/58f635312aa21f947cae5f8578638a85aa2519f5/contracts/security/ReentrancyGuard.sol#L23-L27).

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IDPRegistryUpgradeable.sol

14:     mapping(string => bool) private _issuerDidPresent;

15:     mapping(uint256 => bool) public deletedUIDs;

19:     mapping(string => bool) public isProofTypeSupported;

```

```solidity
File: PermissionUpgradeable.sol

9:     mapping(address => bool) private _isAuthorizedUser;

11:     bool public isPermissionedAccessEnabled;

```

```solidity
File: ReconfigurationUpgradeable.sol

20:     mapping(address => bool) private _isGovernorInCooloff;

21:     bool public biasedReconfiguration;

```

</details> 
 


 ### <a name="GAS-7"></a>[GAS-7]
 ### Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (30)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

78:         for (uint256 i = 0; i < authAddresses.length; i++) {

```

```solidity
File: IDPRegistryUpgradeable.sol

75:         for (uint256 i = 0; i < proofs.length; i++) {

127:         for (uint256 i = 0; i < idpData.proofs.length; i++) {

```

```solidity
File: JailedNodesUpgradeable.sol

118:         for (uint256 i = 0; i < authorizedUsers.length; i++) {

355:         for (uint256 i = 0; i < jailData.length; i++) {

```

```solidity
File: NetworkConfigurationUpgradeable.sol

190:             for (uint256 i = 0; i < safeToUpgradeCandidates.length; i++) {

249:         for (uint256 i = 0; i < _authorisedUsers.length; i++) {

252:         for (uint256 i = 0; i < _bootStrapNodes.length; i++) {

515:         for (uint256 i = 0; i < govs.length; i++) {

584:         for (uint256 i = 0; i < allCandidates.length; i++) {

```

```solidity
File: PermissionUpgradeable.sol

28:         for (uint256 i = 0; i < authAddresses.length; i++) {

49:         for (uint256 i = 0; i < supportedProofTypes.length; i++) {

136:         for (uint256 i = 0; i < proofs.length; i++) {

246:         for (uint256 i = 0; i < result.length; i++) {

```

```solidity
File: ReconfigurationUpgradeable.sol

71:         for (uint256 i = 0; i < authorizedAddresses.length; i++) {

107:         for (uint256 i = 0; i < candidates.length; i++) {

232:                 for (uint256 i = 0; i < randomGovernors.length; i++) {

307:         for (uint256 i = 0; i < safeToUpgradeCandidates.length; i++) {

326:         for (uint256 i = 0; i < prioritisedForDowngradeGovernors.length; i++) {

388:         for (uint256 i = 0; i < governors.length; i++) {

427:         for (uint256 itr = 0; itr < swappableGovernors.length; itr++) {

575:         for (uint256 i = 0; i < governorsToDowngrade.length; i++) {

586:         for (uint256 i = 0; i < governorsToDowngrade.length; i++) {

639:         for (uint256 i = 0; i < randomIndexes.length; i++) {

688:             for (uint256 i = 0; i < governors.length; i++) {

696:             for (uint256 i = 0; i < candidates.length; i++) {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

93:         for (uint256 i = 0; i < bootNodeAddresses.length; i++) {

97:         for (uint256 i = 0; i < _authorizedUsers.length; i++) {

```

```solidity
File: StakingDepositUpgradeable.sol

165:         for (uint256 i = 0; i < _authorisedUsers.length; i++) {

```

```solidity
File: TombstonedNodesUpgradeable.sol

32:         for (uint256 i = 0; i < _authorisedUsers.length; i++) { //@audit cache first

```

</details> 
 


 ### <a name="GAS-8"></a>[GAS-8]
 ### Consider using assembly for simple zero checks to save gas
Using assembly for simple zero checks can save gas. Consider using assembly when appropriate.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

373:             if (existingVoteTimestamp == 0) {

```

```solidity
File: JailedNodesUpgradeable.sol

250:             if (releasedTimestamp == 0) {

```

```solidity
File: ReconfigurationUpgradeable.sol

278:             if (pie == 0) {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

54:         if (signupBonus == 0) {

```

</details> 
 


 ### <a name="GAS-9"></a>[GAS-9]
 ### Expressions for constant values should use immutable rather than constant

#### Impact:
While it doesnt save any gas because the compiler knows that developers often make this mistake, its still best to use the right tool for the task at hand. There is a difference between constant variables and immutable variables, and they should each be used in their appropriate contexts. constants should be used for literal values written into the code, and immutable variables should be used for expressions, or values calculated in, or passed into the constructor.  

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContractRoleAuthUpgradeable.sol

6:     bytes32 public constant RECONFIGURATION_CONTRACT_ROLE =

8:     bytes32 public constant ACTIVITY_MONITOR_CONTRACT_ROLE =

10:     bytes32 public constant JAILED_NODES_CONTRACT_ROLE =

12:     bytes32 public constant NETWORK_CONFIG_CONTRACT_ROLE =

14:     bytes32 public constant STAKING_DEPOSIT_CONTRACT_ROLE =

```

```solidity
File: RBACUpgradeable.sol

6:     bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");

7:     bytes32 public constant REDBELLY_ROLE = keccak256("REDBELLY_ROLE");

8:     bytes32 public constant IDP_ROLE = keccak256("IDP_ROLE");

9:     bytes32 public constant REDBELLY_NODE_OPERATOR_ROLE =

11:     bytes32 public constant GOVERNOR_ROLE = keccak256("GOVERNOR_ROLE");

```

</details> 
 


 ### <a name="GAS-10"></a>[GAS-10]
 ### Initializers can be marked as payable to save deployment gas
Payable functions cost less gas to execute, because the compiler does not have to add extra checks to ensure that no payment is provided. Initializers can be safely marked as payable, because only the deployer or the factory contract would call the function without carrying any funds.

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

55:     function initialize(

```

```solidity
File: ContractRoleAuthUpgradeable.sol

69:     function initialize() public virtual override onlyInitializing {

```

```solidity
File: IDPRegistryUpgradeable.sol

86:     function initialize() public virtual override initializer {

```

```solidity
File: JailedNodesUpgradeable.sol

104:     function initialize(

```

```solidity
File: NetworkConfigurationUpgradeable.sol

240:     function initialize(

```

```solidity
File: PermissionUpgradeable.sol

19:     function initialize(

```

```solidity
File: RBACUpgradeable.sol

30:     function initialize() public virtual onlyInitializing {

```

```solidity
File: ReconfigurationUpgradeable.sol

52:     function initialize(

```

```solidity
File: SignupBonusVestingUpgradeable.sol

73:     function initialize(

```

```solidity
File: StakingDepositUpgradeable.sol

148:     function initialize(

```

```solidity
File: StakingEscrowUpgradeable.sol

21:     function initialize() public virtual initializer {

```

```solidity
File: TombstonedNodesUpgradeable.sol

26:     function initialize(

```

</details> 
 


 ### <a name="GAS-11"></a>[GAS-11]
 ### Use assembly for small keccak256 hashes, in order to save gas
If the arguments to the encode call can fit into the scratch space (two words or fewer), then its more efficient to use assembly to generate the hash (80 gas): keccak256(abi.encodePacked(x, y)) -> assembly {mstore(0x00, a); mstore(0x20, b); let hash := keccak256(0x00, 0x40); }

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: PermissionUpgradeable.sol

138:                 keccak256(abi.encodePacked(proofs[i].proofType)) ==

139:                 keccak256(abi.encodePacked(_proofType))

```

</details> 
 


 ### <a name="GAS-12"></a>[GAS-12]
 ### Avoid fetching a low-level calls return data by using assembly
Even if you dont assign the calls second return value, it still gets copied to memory. Use assembly instead to prevent this and save 159 gas: `(bool success,) = payable(receiver).call{gas: gas, value: value}("");` -> `bool success; assembly { success := call(gas, receiver, value, 0, 0, 0, 0)` }

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: JailedNodesUpgradeable.sol

307:         (bool sent, ) = payable(address(stakingDepository)).call{

380:         (bool sent, ) = payable(treasuryAddress).call{value: slashedStake}("");

```

```solidity
File: SignupBonusVestingUpgradeable.sol

145:         (bool sent, ) = payable(_msgSender()).call{value: claimableTokens}("");

```

```solidity
File: StakingDepositUpgradeable.sol

371:         (bool sent, ) = payable(_msgSender()).call{value: rewardsToBeClaimed}(

475:         (bool sent, ) = payable(_msgSender()).call{value: unstakeValue}("");

481:         (bool sentToTreasury, ) = payable(_treasuryAddress).call{

```

</details> 
 


 ### <a name="GAS-13"></a>[GAS-13]
 ### Reduce gas usage by moving to Solidity 0.8.19 or later
Solidity version 0.8.19 introduced a number of gas optimizations, refer to the [Solidity 0.8.19 Release Announcement](https://soliditylang.org/blog/2023/02/22/solidity-0.8.19-release-announcement) for details.

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ArtifactsFromRbnCore.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ContractRoleAuthUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: IDPRegistryUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: JailedNodesUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: NetworkConfigurationUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: PermissionUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: RBACUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: ReconfigurationUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: SignupBonusVestingUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: StakingDepositUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: StakingEscrowUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: TombstonedNodesUpgradeable.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IIDPRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IJailedNodes.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/INetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IPermission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IRandomNumberGenerator.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IReconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/ISignupBonusVesting.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/IStakingDeposit.sol

2: pragma solidity 0.8.22;

```

```solidity
File: interfaces/ITombstonedNodes.sol

2: pragma solidity 0.8.22;

```

</details> 
 


 ### <a name="GAS-14"></a>[GAS-14]
 ### Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

288:     function updateWindowSize(uint256 _newWindowSize) external onlyRedbelly {

```

```solidity
File: ContractRoleAuthUpgradeable.sol

69:     function initialize() public virtual override onlyInitializing {

```

```solidity
File: JailedNodesUpgradeable.sol

330:     function setSlashPrcnt(uint8 _slashPrcnt) external onlyRedbelly {

343:     function setDaysToServe(uint256 _daysToServe) public onlyRedbelly {

```

```solidity
File: NetworkConfigurationUpgradeable.sol

167:     function removeCandidate(address nodeAddress) external onlyRedbelly {

407:     function removeGovernor(address nodeAddress) public onlyRedbelly {

422:     function addRedbellyNodes(address nodeAddress) public onlyRedbelly {

426:     function removeRedbellyNodes(address nodeAddress) public onlyRedbelly {

```

```solidity
File: PermissionUpgradeable.sol

121:     function enablePermissionedAccess() external onlyRedbelly {

```

```solidity
File: RBACUpgradeable.sol

30:     function initialize() public virtual onlyInitializing {

```

```solidity
File: ReconfigurationUpgradeable.sol

195:     function triggerReconfiguration() public onlyAfterReconfigInterval {

```

```solidity
File: StakingDepositUpgradeable.sol

135:     function setRewardCycle(uint256 _newRewardCycle) external onlyRedbelly {

231:     function setValueOfGamma(uint256 _value) external onlyRedbelly {

```

```solidity
File: StakingEscrowUpgradeable.sol

15:     function __stakingEscrowInit() internal onlyInitializing {

19:     function __stakingEscrowInitUnchained() internal onlyInitializing {}

```

```solidity
File: TombstonedNodesUpgradeable.sol

68:     function tombstone(address _nodeAddress) external onlyJailedNodesContract {

96:     function setTombstoneThreshold(uint256 _threshold) external onlyRedbelly {

```

</details> 
 


 ### <a name="GAS-15"></a>[GAS-15]
 ### `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (66)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

78:         for (uint256 i = 0; i < authAddresses.length; i++) {

```

```solidity
File: IDPRegistryUpgradeable.sol

75:         for (uint256 i = 0; i < proofs.length; i++) {

118:         for (uint256 i = 0; i < idpProofCounts[uid]; i++) {

127:         for (uint256 i = 0; i < idpData.proofs.length; i++) {

144:         for (uint256 i = 0; i < _uidCounter; i++) {

147:                 index++;

158:         for (uint256 i = 0; i < idpProofCounts[uid]; i++) {

205:         for (uint256 i = 0; i < idpProofCounts[uid]; i++) {

271:         for (uint256 i = 0; i < _uidCounter; i++) {

273:                 deletedCount++;

```

```solidity
File: JailedNodesUpgradeable.sol

118:         for (uint256 i = 0; i < authorizedUsers.length; i++) {

247:         for (uint256 i = 0; i < getJailCountForNode(_address); i++) {

355:         for (uint256 i = 0; i < jailData.length; i++) {

```

```solidity
File: NetworkConfigurationUpgradeable.sol

190:             for (uint256 i = 0; i < safeToUpgradeCandidates.length; i++) {

195:                     currIndex++;

249:         for (uint256 i = 0; i < _authorisedUsers.length; i++) {

252:         for (uint256 i = 0; i < _bootStrapNodes.length; i++) {

515:         for (uint256 i = 0; i < govs.length; i++) {

517:                 count++;

584:         for (uint256 i = 0; i < allCandidates.length; i++) {

587:                 currIndex++;

591:         for (uint256 i = 0; i < currIndex; i++) {

```

```solidity
File: PermissionUpgradeable.sol

28:         for (uint256 i = 0; i < authAddresses.length; i++) {

49:         for (uint256 i = 0; i < supportedProofTypes.length; i++) {

136:         for (uint256 i = 0; i < proofs.length; i++) {

246:         for (uint256 i = 0; i < result.length; i++) {

```

```solidity
File: ReconfigurationUpgradeable.sol

71:         for (uint256 i = 0; i < authorizedAddresses.length; i++) {

107:         for (uint256 i = 0; i < candidates.length; i++) {

118:                 currIndex++;

123:         for (uint256 i = 0; i < currIndex; i++) {

215:                 i++

232:                 for (uint256 i = 0; i < randomGovernors.length; i++) {

253:         for (uint256 dValue = 1; dValue < _reconfigurationsCounter; dValue++) {

307:         for (uint256 i = 0; i < safeToUpgradeCandidates.length; i++) {

326:         for (uint256 i = 0; i < prioritisedForDowngradeGovernors.length; i++) {

349:         for (uint256 i = 0; i < upto && j < count; i++) {

352:                     j++

364:                     j++

388:         for (uint256 i = 0; i < governors.length; i++) {

393:                 idx++;

408:         for (uint256 i = 0; i < count; i++) {

427:         for (uint256 itr = 0; itr < swappableGovernors.length; itr++) {

532:                 for (itr = 0; itr < swapSize; itr++) {

539:                 for (itr = 0; itr < nonRbnSwapSize; itr++) {

562:             for (uint256 i = 0; i < swapSize; i++) {

575:         for (uint256 i = 0; i < governorsToDowngrade.length; i++) {

577:                 rbnGovernorsLen++;

586:         for (uint256 i = 0; i < governorsToDowngrade.length; i++) {

588:                 rbnGovernors[rbnLen++] = governorsToDowngrade[i].nodeAddress;

590:                 nonRbnGovernors[nonRbnLen++] = governorsToDowngrade[i]

639:         for (uint256 i = 0; i < randomIndexes.length; i++) {

644:                 rbnCandidates[rbnFound++] = candidatesNotInCooloff[

648:                 nonRbnCandidates[nonRbnFound++] = candidatesNotInCooloff[

657:         for (uint256 i = 0; i < rbnFound; i++) {

658:             candidatesFound[candidatesFoundIdx++] = rbnCandidates[i];

660:         for (uint256 i = 0; i < nonRbnFound; i++) {

661:             candidatesFound[candidatesFoundIdx++] = nonRbnCandidates[i];

688:             for (uint256 i = 0; i < governors.length; i++) {

693:                         .totalGovernors++;

696:             for (uint256 i = 0; i < candidates.length; i++) {

701:                         .totalCandidates++;

```

```solidity
File: SignupBonusVestingUpgradeable.sol

93:         for (uint256 i = 0; i < bootNodeAddresses.length; i++) {

97:         for (uint256 i = 0; i < _authorizedUsers.length; i++) {

```

```solidity
File: StakingDepositUpgradeable.sol

165:         for (uint256 i = 0; i < _authorisedUsers.length; i++) {

328:         for (uint256 yearIndex = 0; yearIndex <= yearIndexes; yearIndex++) {

```

```solidity
File: TombstonedNodesUpgradeable.sol

32:         for (uint256 i = 0; i < _authorisedUsers.length; i++) { //@audit cache first

```

</details> 
 


 ### <a name="GAS-16"></a>[GAS-16]
 ### Using `private` rather than `public` for constants, saves gas
If needed, the values can be read from the verified contract source code, or if there are multiple values there can be a single getter function that [returns a tuple](https://github.com/code-423n4/2022-08-frax/blob/90f55a9ce4e25bceed3a74290b854341d8de6afa/src/contracts/FraxlendPair.sol#L156-L178) of the values of all currently-public constants. Saves **3406-3606 gas** in deployment gas due to the compiler not having to create non-payable getter functions for deployment calldata, not having to store the bytes of the value outside of where it's used, and not adding another entry to the method ID table

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContractRoleAuthUpgradeable.sol

6:     bytes32 public constant RECONFIGURATION_CONTRACT_ROLE =

8:     bytes32 public constant ACTIVITY_MONITOR_CONTRACT_ROLE =

10:     bytes32 public constant JAILED_NODES_CONTRACT_ROLE =

12:     bytes32 public constant NETWORK_CONFIG_CONTRACT_ROLE =

14:     bytes32 public constant STAKING_DEPOSIT_CONTRACT_ROLE =

```

```solidity
File: RBACUpgradeable.sol

6:     bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");

7:     bytes32 public constant REDBELLY_ROLE = keccak256("REDBELLY_ROLE");

8:     bytes32 public constant IDP_ROLE = keccak256("IDP_ROLE");

9:     bytes32 public constant REDBELLY_NODE_OPERATOR_ROLE =

11:     bytes32 public constant GOVERNOR_ROLE = keccak256("GOVERNOR_ROLE");

```

</details> 
 


 ### <a name="GAS-17"></a>[GAS-17]
 ### Structs can be packed into fewer storage slots
Each slot saved can avoid an extra Gsset (20000 gas) for the first setting of the struct. Subsequent reads as well as writes have smaller gas savings

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ReconfigurationUpgradeable.sol

11:     struct NodeAddressWithOwner {

```

```solidity
File: StakingDepositUpgradeable.sol

9:     struct FloatValue {

14:     struct Deposit {

```

```solidity
File: interfaces/IIDPRegistry.sol

5:     struct Proof {

10:     struct IDPInformation {

17:     struct IDPInformationIO {

```

```solidity
File: interfaces/IJailedNodes.sol

5:     struct JailTenure {

```

```solidity
File: interfaces/IPermission.sol

7:     struct Query {

12:     struct SupportedCredential {

```

```solidity
File: interfaces/IReconfiguration.sol

7:     struct NetworkConfiguration {

12:     struct UpgradeProbability {

```

</details> 
 


 ### <a name="GAS-18"></a>[GAS-18]
 ### Variables can be packed into fewer storage slots by truncating timestamp bytes
By using a uint32 rather than a larger type for variables that track timestamps, one can save gas at the expense of the protocol breaking after the year 2106 (when uint32 wraps). Subsequent reads as well as writes have smaller gas savings

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: StakingDepositUpgradeable.sol

435:             uint256 networkExitTimestamp = block.timestamp;

```

</details> 
 


 ### <a name="GAS-19"></a>[GAS-19]
 ### Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency
Using uint256(1) and uint256(2) instead of true and false can save gas for certain changes. Consider using uint256(1)/uint256(2) when appropriate.

*Instances (21)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IDPRegistryUpgradeable.sol

124:         _issuerDidPresent[idpData.issuerDid] = true;

132:                 isProofTypeSupported[idpData.proofs[i].proofType] = true;

248:         deletedUIDs[uid] = true;

249:         _issuerDidPresent[idpInfo.issuerDid] = false;

265:         _issuerDidPresent[issuerDid] = false;

```

```solidity
File: PermissionUpgradeable.sol

122:         isPermissionedAccessEnabled = true;

154:         return true;

161:         _isAuthorizedUser[_userAddress] = true;

176:         bool callresult = false;

248:                 return true;

253:         return false;

259:         bool callresult = false;

313:         bool callresult = false;

```

```solidity
File: ReconfigurationUpgradeable.sol

88:         _isGovernorInCooloff[addr] = true;

256:                 return (0, false);

259:                 return (dValue, true);

262:         return (0, false);

448:                 _isGovernorInCooloff[swappableGovernors[itr]] = false;

453:                 _isGovernorInCooloff[swappableGovernors[itr]] = false;

```

```solidity
File: TombstonedNodesUpgradeable.sol

103:             return true;

105:         return false;

```

</details> 
 


 ### <a name="GAS-20"></a>[GAS-20]
 ### Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead
Using uints or ints smaller than 32 bytes (256 bits) can incur overhead. Consider using uint256 or int256 to avoid potential issues.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: JailedNodesUpgradeable.sol

11:     uint8 public slashPrcnt;

106:         uint8 _slashPrcnt,

330:     function setSlashPrcnt(uint8 _slashPrcnt) external onlyRedbelly {

```

```solidity
File: StakingDepositUpgradeable.sol

508:         uint8 _amountPrcnt

```

```solidity
File: interfaces/IJailedNodes.sol

18:     function setSlashPrcnt(uint8 _slashPrcnt) external;

```

```solidity
File: interfaces/IStakingDeposit.sol

27:     function slashStake(address _depositor, uint8 _amountPrcnt) external;

```

</details> 
 


 ### <a name="GAS-21"></a>[GAS-21]
 ### Use != 0 instead of > for unsigned integer comparison

*Instances (25)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

126:         return (timestamp > 0 &&

315:         if (_newInactivityThreshold > config.windowSize) {

```

```solidity
File: JailedNodesUpgradeable.sol

223:         if (len > 0) {

238:             getRecentJailTenure(_governor).jailedTimestamp > 0 &&

331:         if (_slashPrcnt > 100) {

362:             if (endTime < startTimestamp || startTime > endTimestamp) {

370:                 (startTimestamp > startTime ? startTimestamp : startTime) +

```

```solidity
File: NetworkConfigurationUpgradeable.sol

331:         if (amountReceived > registrationFee) {

338:         if (registrationFee > amountReceived) {

375:         if (refundAmount > 0) {

```

```solidity
File: ReconfigurationUpgradeable.sol

205:         if (candidatesNotInCooloff.length > 0) {

288:         if (dValue > 0) {

504:             if (candidatesFound.length > 0) {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

180:             endTimestamp > nodeParameters.registrationTimestamp

280:                 daysSinceRegistration > daysSpentInJail

```

```solidity
File: StakingDepositUpgradeable.sol

257:         if (yearIndex > 0) {

282:             nodeConfig.exitTimestamp > 0 &&

294:             deposits[nodeConfig.id].depositTimestamp > stakeEndTimestamp

426:         if (signUpBonus > 0) {

428:             if (jTenure.jailedTimestamp > 0 && jTenure.releasedTimestamp == 0) {

438:             if (nodeConfig.exitTimestamp > 0) {

457:             if (effectiveDaysForStake > 0) {

492:         if (slashedAmount > 0) {

521:             deposits[nodeId].redbellyDeposit > 0 &&

527:             deposits[nodeId].redbellyDeposit > 0 &&

```

</details> 
 


 ### <a name="GAS-22"></a>[GAS-22]
 ### Optimize names to save gas
public/external function names and public member variable names can be optimized to save gas. See [this](https://gist.github.com/IllIllI000/a5d8b486a8259f9f77891a919febd1a9) link for an example of how it works. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save 128 gas each during deployment, and renaming functions to have lower method IDs will save 22 gas per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

*Instances (194)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ActivityMonitorUpgradeable.sol

8:     Config public config;

10:     uint256 public daysToServInJail;

59:     ) public initializer {

125:     function isVoteRecent(uint256 timestamp) public view returns (bool) {

203:     ) public view returns (uint256) {

231:     ) public view returns (VotesMinHeapLib.NodeVotes memory) {

247:     ) external view returns (uint256) {

271:     ) external onlyRedbelly {

288:     function updateWindowSize(uint256 _newWindowSize) external onlyRedbelly {

309:     ) external onlyRedbelly {

332:     ) external onlyRedbelly {

353:         external

```

```solidity
File: ContractRoleAuthUpgradeable.sol

6:     bytes32 public constant RECONFIGURATION_CONTRACT_ROLE =

8:     bytes32 public constant ACTIVITY_MONITOR_CONTRACT_ROLE =

10:     bytes32 public constant JAILED_NODES_CONTRACT_ROLE =

12:     bytes32 public constant NETWORK_CONFIG_CONTRACT_ROLE =

14:     bytes32 public constant STAKING_DEPOSIT_CONTRACT_ROLE =

69:     function initialize() public virtual override onlyInitializing {

```

```solidity
File: IDPRegistryUpgradeable.sol

13:     mapping(string => uint256) public issuerDidToUid;

15:     mapping(uint256 => bool) public deletedUIDs;

16:     mapping(uint256 => mapping(uint256 => Proof)) public idpProofs;

17:     mapping(uint256 => uint256) public idpProofCounts;

18:     mapping(string => string[]) public proofTypeToIssuers;

19:     mapping(string => bool) public isProofTypeSupported;

86:     function initialize() public virtual override initializer {

93:         external

102:             revert UnauthorisedAccess("Invalid public address");

140:     function getAll() external view returns (IDPInformationIO[] memory) {

155:     ) public view override idpExists(uid) returns (IDPInformationIO memory) {

178:         external

193:         public

225:         external

240:         public

257:         external

281:     ) external view override returns (string[] memory) {

286:         external

```

```solidity
File: JailedNodesUpgradeable.sol

10:     uint256 public daysToServe;

11:     uint8 public slashPrcnt;

14:     mapping(uint256 => JailTenure[]) public jailTenures;

109:     ) public initializer {

178:         external

220:     ) public view returns (JailTenure memory) {

231:     ) public view returns (uint256) {

236:     function isJailedNode(address _governor) public view returns (bool) {

244:     ) external view returns (uint256) {

262:         external

293:         external

330:     function setSlashPrcnt(uint8 _slashPrcnt) external onlyRedbelly {

343:     function setDaysToServe(uint256 _daysToServe) public onlyRedbelly {

351:     ) external view returns (uint256) {

388:     receive() external payable {}

```

```solidity
File: NetworkConfigurationUpgradeable.sol

68:         external

77:     function isGovernor(address nodeAddress) public view returns (bool) {

81:     function isCandidate(address nodeAddress) public view returns (bool) {

87:     ) public view returns (int256) {

95:     function getGovernors() public view returns (address[] memory) {

99:     function getCandidates() public view returns (address[] memory) {

103:     function getNetworkSize() public view returns (uint256) {

111:     ) public view returns (NodeConfigStorage.NodeParameters[] memory) {

117:     ) public view returns (NodeConfigStorage.NodeParameters memory) {

128:     function isBootNode(address _nodeAddress) public view returns (bool) {

134:     ) external onlyJailedNodesContract {

155:     ) external onlyJailedNodesContract {

162:     ) external onlyStakingDepositContract {

167:     function removeCandidate(address nodeAddress) external onlyRedbelly {

175:     ) external onlyJailedNodesContractORRedbellyRole {

226:     ) external onlyJailedNodesContract {

232:     receive() external payable {}

235:     ) external view override returns (address) {

244:     ) public initializer {

303:     ) public payable onlyRedbelly {

384:         public

407:     function removeGovernor(address nodeAddress) public onlyRedbelly {

422:     function addRedbellyNodes(address nodeAddress) public onlyRedbelly {

426:     function removeRedbellyNodes(address nodeAddress) public onlyRedbelly {

433:     ) public onlyRedbelly {

452:         public

482:     function getBootNodeAddresses() public view returns (address[] memory) {

486:     function isRedbellyNode(address nodeAddr) public view returns (bool) {

492:     ) public view returns (int256) {

502:     ) public view returns (address) {

508:     ) public view returns (address) {

512:     function getCountOfRedbellyGovernors() public view returns (uint256) {

523:     function getRedbellyNodes() public view returns (address[] memory) {

565:         public

```

```solidity
File: PermissionUpgradeable.sol

11:     bool public isPermissionedAccessEnabled;

22:     ) public virtual initializer {

35:         external

121:     function enablePermissionedAccess() external onlyRedbelly {

129:     ) public view virtual returns (string memory) {

150:     function isAllowed(address _address) external view returns (bool) {

```

```solidity
File: RBACUpgradeable.sol

6:     bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");

7:     bytes32 public constant REDBELLY_ROLE = keccak256("REDBELLY_ROLE");

8:     bytes32 public constant IDP_ROLE = keccak256("IDP_ROLE");

9:     bytes32 public constant REDBELLY_NODE_OPERATOR_ROLE =

11:     bytes32 public constant GOVERNOR_ROLE = keccak256("GOVERNOR_ROLE");

30:     function initialize() public virtual onlyInitializing {

```

```solidity
File: ReconfigurationUpgradeable.sol

21:     bool public biasedReconfiguration;

22:     uint256 public reconfigurationInterval; // Interval after which reconfiguration can be called

23:     uint256 public lastReconfigurationTime; // Unix Timestamp when reconfiguration was called last time

24:     uint256 public toleranceFactor; // the fraction of governor nodes that need to be replaced with candidate nodes

25:     UpgradeProbability public upgradeProbabilty; // the probability upto 3 decimal places

27:     mapping(uint256 => uint256) public lastUpdatedToGovernor; // (nodeId => timestamp)

30:     mapping(uint256 => NetworkConfiguration) public networkConfigurations;

60:     ) public initializer {

80:     ) external onlyNetworkConfigurationContract {

93:     ) external view returns (address[] memory) {

129:     function getReconfigurationCount() public view returns (uint256) {

140:     ) public onlyRedbelly {

153:     ) public override onlyRedbelly {

161:     function getReconfigurationBuffer() public view returns (uint256) {

173:     ) public onlyRedbelly {

188:     ) public onlyRedbelly {

195:     function triggerReconfiguration() public onlyAfterReconfigInterval {

```

```solidity
File: SignupBonusVestingUpgradeable.sol

76:     ) public initializer {

112:     receive() external payable onlyRedbelly {

123:     ) external override onlyNetworkConfigurationContract {

132:         external

158:         public

201:         public

```

```solidity
File: StakingDepositUpgradeable.sol

25:     uint256 public minimumStakeAmount;

38:     uint256 public coolOffPeriod;

41:     mapping(uint256 => Deposit) public deposits;

42:     mapping(uint256 => uint256) public coolOffStartTimestamp;

44:     IBootstrapContractsRegistry public bootstrapRegistryContract;

82:     ) public view returns (bool) {

93:     ) external onlyNetworkConfigurationContract {

124:     ) external onlyRedbelly {

131:     ) external onlyRedbelly {

135:     function setRewardCycle(uint256 _newRewardCycle) external onlyRedbelly {

141:     ) external onlyRedbelly {

153:     ) public initializer {

190:         public

205:         public

220:     ) external onlyRedbelly {

227:     ) external onlyRedbelly {

231:     function setValueOfGamma(uint256 _value) external onlyRedbelly {

388:     ) external payable onlyNetworkConfigurationContract {

404:     function unstake() external payable canUnstake {

509:     ) external onlyJailedNodesContract {

562:     ) external payable onlyJailedNodesContract {

584:     ) external payable onlyJailedNodesContract {

607:     ) external view returns (uint256) {

615:     ) external onlyNetworkConfigurationContract hasStaked(_depositor) {

636:     receive() external payable {}

663:     function getTreasuryAddress() external view virtual returns (address) {

669:     ) external view virtual returns (uint256) {

676:     ) external view virtual returns (uint256) {

683:     ) external view virtual returns (bool) {

690:     ) external virtual onlyNetworkConfigurationContract {

695:     function existingStake(address _depositor) external view returns (uint256) {

```

```solidity
File: StakingEscrowUpgradeable.sol

21:     function initialize() public virtual initializer {

36:     function depositsOf(address payee) public view returns (uint256) {

46:     function deposit(address payee) public payable {

68:     ) public virtual onlyDepositorOrOwner(payer) {

```

```solidity
File: TombstonedNodesUpgradeable.sol

14:     mapping(uint256 => uint256) public tombstonedNodes;

17:     uint256 public tombstoneThreshold;

30:     ) public initializer {

68:     function tombstone(address _nodeAddress) external onlyJailedNodesContract {

96:     function setTombstoneThreshold(uint256 _threshold) external onlyRedbelly {

100:     function isTombstoned(address _nodeAddress) external view returns (bool) {

```

```solidity
File: interfaces/IActivityMonitor.sol

17:     function isVoteRecent(uint256) external view returns (bool);

38:     ) external view returns (uint256);

```

```solidity
File: interfaces/IIDPRegistry.sol

29:     ) external view returns (string[] memory);

31:     function getSupportedProofTypes() external view returns (string[] memory);

33:     function getAll() external view returns (IDPInformationIO[] memory);

37:     ) external view returns (IDPInformationIO memory);

41:     ) external view returns (IDPInformationIO memory);

```

```solidity
File: interfaces/IJailedNodes.sol

16:     function isJailedNode(address _governor) external view returns (bool);

26:     function freeServedGuilty(address _jailedNode) external payable;

35:     ) external view returns (JailTenure memory);

```

```solidity
File: interfaces/INetworkConfiguration.sol

14:     ) external payable;

16:     function getActiveCandidateNodes() external view returns (address[] memory);

21:     function isGovernor(address nodeAddress) external view returns (bool);

23:     function isCandidate(address nodeAddress) external view returns (bool);

27:     ) external view returns (int256);

30:         external

34:     function getCandidates() external view returns (address[] memory);

38:     function getNetworkSize() external view returns (uint256);

42:     ) external view returns (NodeConfigStorage.NodeParameters memory);

61:     ) external view returns (address);

```

```solidity
File: interfaces/IPermission.sol

38:         external

```

```solidity
File: interfaces/IRandomNumberGenerator.sol

10:     ) external view returns (uint256[] memory, uint256);

```

```solidity
File: interfaces/IReconfiguration.sol

45:     ) external view returns (address[] memory);

```

```solidity
File: interfaces/ISignupBonusVesting.sol

7:     function status() external view returns (uint256);

9:     function claimable() external view returns (uint256);

11:     function claim() external payable;

```

```solidity
File: interfaces/IStakingDeposit.sol

23:     ) external payable;

25:     function unstake() external payable;

29:     function redepositSlashedStake(address _depositor) external payable;

31:     function revertSlashedStake(address _depositor) external payable;

35:     ) external view returns (uint256);

39:     ) external view returns (bool);

```

```solidity
File: interfaces/ITombstonedNodes.sol

7:     function isTombstoned(address _nodeAddress) external view returns (bool);

```

</details> 
 

