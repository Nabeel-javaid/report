# Report


## Medium Issues


| |Issue|Instances|
|-|:-|:-:|
| [M-1](#M-1) | Centralization Risk for trusted owners | 4 |

## Low Issues


| |Issue|Instances|
|-|:-|:-:|
| [L-1](#L-1) | complex casting | 1 |
| [L-2](#L-2) | Empty function body | 1 |
| [L-3](#L-3) | State variables not capped at reasonable values | 26 |
| [L-4](#L-4) | Unsafe casting | 1 |

## Non Critical Issues


| |Issue|Instances|
|-|:-|:-:|
| [NC-1](#NC-1) | Contracts should have full test coverage | 19 |
| [NC-2](#NC-2) | Consider adding formal verification proofs | 19 |
| [NC-3](#NC-3) | Large or complicated code bases should implement invariant tests | 19 |
| [NC-4](#NC-4) | NatSpec: Interface declarations should have NatSpec descriptions | 7 |
| [NC-5](#NC-5) | NatSpec: Library declarations should have NatSpec descriptions | 2 |
| [NC-6](#NC-6) | Variables without visibility specifier | 17 |
| [NC-7](#NC-7) | Constants in comparisons should appear on the left side | 9 |
| [NC-8](#NC-8) | constants should be defined rather than using magic numbers | 6 |
| [NC-9](#NC-9) | Contract declarations should have NatSpec @author annotations | 11 |
| [NC-10](#NC-10) | Contract declarations should have NatSpec @Title annotations | 11 |
| [NC-11](#NC-11) | NatSpec: Contract declarations should have @dev tags | 11 |
| [NC-12](#NC-12) | NatSpec: Contract declarations should have NatSpec descriptions | 11 |
| [NC-13](#NC-13) | NatSpec: Contract declarations should have @notice tags | 11 |
| [NC-14](#NC-14) | Consider using delete rather than assigning zero to clear value | 10 |
| [NC-15](#NC-15) | Consider adding a block/deny-list" | 11 |
| [NC-16](#NC-16) | Use bytes.concat() on bytes instead of abi.encodePacked() for clearer semantic meaning | 2 |
| [NC-17](#NC-17) | Consider adding emergency-stop functionality | 11 |
| [NC-18](#NC-18) | Error declarations should have NatSpec descriptions | 18 |
| [NC-19](#NC-19) | Custom error has no error details | 18 |
| [NC-20](#NC-20) | Events are missing sender information | 6 |
| [NC-21](#NC-21) | NatSpec: Event declarations should have NatSpec descriptions | 3 |
| [NC-22](#NC-22) | NatSpec: function declarations should have NatSpec descriptions | 58 |
| [NC-23](#NC-23) | NatSpec: function declarations should have @Notice tags | 58 |
| [NC-24](#NC-24) | NatSpec: function declarations should have NatSpec descriptions | 58 |
| [NC-25](#NC-25) | If-statement can be converted to a ternary | 29 |
| [NC-26](#NC-26) | Consider using named mappings | 7 |
| [NC-27](#NC-27) | Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct | 3 |
| [NC-28](#NC-28) | Use of override is unnecessary | 4 |
| [NC-29](#NC-29) | Consider using descriptive constants when using 0 in the code | 2 |
| [NC-30](#NC-30) | Non-external/public variable names should begin with an underscore | 6 |
| [NC-31](#NC-31) | Setters should prevent re-setting of the same value | 1 |
| [NC-32](#NC-32) | Use the latest solidity version for deployment   | 19 |
| [NC-33](#NC-33) | Consider bounding input array length | 4 |
| [NC-34](#NC-34) | Strings should use double quotes rather than single quotes | 4 |
| [NC-35](#NC-35) | Variables need not be initialized to zero | 9 |
| [NC-36](#NC-36) | Consider moving msg.sender checks to modifiers | 14 |
| [NC-37](#NC-37) | Dont use _msgSender() if not supporting EIP-2771 | 2 |
| [NC-38](#NC-38) | <array>.length should not be looked up in every loop of a for-loop | 4 |
| [NC-39](#NC-39) | Use assembly to emit events, in order to save gas | 6 |
| [NC-40](#NC-40) | Don't initialize variables with default value | 9 |

## Gas Optimizations


| |Issue|Instances|
|-|:-|:-:|
| [GAS-1](#GAS-1) | Enable IR-based code generation | 19 |
| [GAS-2](#GAS-2) | Nesting if-statements is cheaper than using && | 3 |
| [GAS-3](#GAS-3) | Using bools for storage incurs overhead | 1 |
| [GAS-4](#GAS-4) | Cache array length outside of loop | 4 |
| [GAS-5](#GAS-5) | Expressions for constant values should use immutable rather than constant | 10 |
| [GAS-6](#GAS-6) | Constructors can be marked payable | 9 |
| [GAS-7](#GAS-7) | Use assembly for small keccak256 hashes, in order to save gas | 2 |
| [GAS-8](#GAS-8) | Reduce gas usage by moving to Solidity 0.8.19 or later | 19 |
| [GAS-9](#GAS-9) | Functions guaranteed to revert when called by normal users can be marked `payable` | 3 |
| [GAS-10](#GAS-10) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 11 |
| [GAS-11](#GAS-11) | Using `private` rather than `public` for constants, saves gas | 10 |
| [GAS-12](#GAS-12) | Structs can be packed into fewer storage slots | 5 |
| [GAS-13](#GAS-13) | Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency | 10 |
| [GAS-14](#GAS-14) | Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead | 7 |
| [GAS-15](#GAS-15) | Optimize names to save gas | 64 |

##################################################################### 
 
 DETAILED REPORT:: 


##################################################################### 


## Medium Issues


 ### <a name="M-1"></a>[M-1]
 ### Centralization Risk for trusted owners

#### Impact:
Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ContractRoleAuth.sol

6: abstract contract ContractRoleAuth is RBAC {

```

```solidity
File: contracts/PriceFeedContract.sol

8: contract PriceFeedContract is IPriceFeed, ContractRoleAuth {

19:     ) ContractRoleAuth(authorizedUsers) {

```

```solidity
File: contracts/RBAC.sol

5: abstract contract RBAC is AccessControl {

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
File: contracts/PriceFeedContract.sol

48:         return (int(_price), _lastUpdated, isStale);

```

</details> 
 


 ### <a name="L-2"></a>[L-2]
 ### Empty function body
Consider adding a comment about why the function body is empty

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ContractRoleAuth.sol

18:     constructor(address[] memory authorizedUsers) RBAC(authorizedUsers) {}

```

</details> 
 


 ### <a name="L-3"></a>[L-3]
 ### State variables not capped at reasonable values
Consider adding minimum/maximum value checks to ensure that the state variables below can never be used to excessively harm users, including via griefing

*Instances (26)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/BootstrapContractsRegistry.sol

44:         return true;

```

```solidity
File: contracts/Cornerstone.sol

24:         return allEmployees;

```

```solidity
File: contracts/Permission.sol

10:         return true; //@audit always true?

14:         return false;

```

```solidity
File: contracts/PriceFeedContract.sol

65:         return 6;

```

```solidity
File: contracts/Reconfiguration.sol

14:         return _reconfigurationBuffer;

```

```solidity
File: contracts/interfaces/IActivityMonitor.sol

6:         uint256 inactivityThresholdForRounds;

7:         uint256 inactivityThresholdForMessage;

8:         uint256 recentVoteInterval;

9:         uint256 windowSize;

```

```solidity
File: contracts/interfaces/ICornerstone.sol

6:         string name;

7:         string comment;

```

```solidity
File: libraries/NodeConfigStorage.sol

6:         uint256 registrationTimestamp;

7:         uint256 id;

8:         uint256 jsonRpcPort;

9:         uint256 consensusPort;

10:         uint256 grpcPort;

11:         address nodeAddress;

12:         address signingAddress;

13:         string hostname;

14:         uint256 exitTimestamp;

23:         uint256 nodeCounter;

183:         return nodes;

197:         return nodeConfigs;

```

```solidity
File: libraries/NodeRecordStorage.sol

8:         uint256 nodeCounter;

67:         return nodes;

```

</details> 
 


 ### <a name="L-4"></a>[L-4]
 ### Unsafe casting
Unsafe casting can cause alot of issues especially when a type is downcast to a smaller type, the higher order bits are truncated, effectively applying a modulo to the original value. Without any other checks, this wrapping will lead to unexpected behavior and bugs

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/PriceFeedContract.sol

48:         return (int(_price), _lastUpdated, isStale);

```

</details> 
 


## Non Critical Issues


 ### <a name="NC-1"></a>[NC-1]
 ### Contracts should have full test coverage
While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/ContractRoleAuth.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Cornerstone.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/GasFees.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/NetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Permission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/PriceFeedContract.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/RBAC.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Reconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IBootstrapContractsRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/ICornerstone.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/INetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IPermission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IPriceFeed.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IReconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: libraries/NodeConfigStorage.sol

2: pragma solidity 0.8.22;

```

```solidity
File: libraries/NodeRecordStorage.sol

2: pragma solidity 0.8.22;

```

</details> 
 


 ### <a name="NC-2"></a>[NC-2]
 ### Consider adding formal verification proofs
Consider using formal verification to mathematically prove that your code does what is intended, and does not have any edge cases with unexpected behavior. The solidity compiler itself has this functionality [built in](https://docs.soliditylang.org/en/latest/smtchecker.html#smtchecker-and-formal-verification)  

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/ContractRoleAuth.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Cornerstone.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/GasFees.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/NetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Permission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/PriceFeedContract.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/RBAC.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Reconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IBootstrapContractsRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/ICornerstone.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/INetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IPermission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IPriceFeed.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IReconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: libraries/NodeConfigStorage.sol

2: pragma solidity 0.8.22;

```

```solidity
File: libraries/NodeRecordStorage.sol

2: pragma solidity 0.8.22;

```

</details> 
 


 ### <a name="NC-3"></a>[NC-3]
 ### Large or complicated code bases should implement invariant tests
Large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts, should implement [invariant fuzzing tests](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05). Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold. Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers, with properly and extensively-written invariants, can close this testing gap significantly.  

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/ContractRoleAuth.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Cornerstone.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/GasFees.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/NetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Permission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/PriceFeedContract.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/RBAC.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Reconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IBootstrapContractsRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/ICornerstone.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/INetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IPermission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IPriceFeed.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IReconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: libraries/NodeConfigStorage.sol

2: pragma solidity 0.8.22;

```

```solidity
File: libraries/NodeRecordStorage.sol

2: pragma solidity 0.8.22;

```

</details> 
 


 ### <a name="NC-4"></a>[NC-4]
 ### NatSpec: Interface declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/interfaces/IActivityMonitor.sol

3: 

```

```solidity
File: contracts/interfaces/IBootstrapContractsRegistry.sol

3: 

```

```solidity
File: contracts/interfaces/ICornerstone.sol

3: 

```

```solidity
File: contracts/interfaces/INetworkConfiguration.sol

5: 

```

```solidity
File: contracts/interfaces/IPermission.sol

3: 

```

```solidity
File: contracts/interfaces/IPriceFeed.sol

3: 

```

```solidity
File: contracts/interfaces/IReconfiguration.sol

3: 

```

</details> 
 


 ### <a name="NC-5"></a>[NC-5]
 ### NatSpec: Library declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: libraries/NodeConfigStorage.sol

4: library NodeConfigStorage {

```

```solidity
File: libraries/NodeRecordStorage.sol

4: library NodeRecordStorage {

```

</details> 
 


 ### <a name="NC-6"></a>[NC-6]
 ### Variables without visibility specifier

#### Impact:
Specifying visibility for variables can improve code readability and maintainability.

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/interfaces/IActivityMonitor.sol

6:         uint256 inactivityThresholdForRounds;

7:         uint256 inactivityThresholdForMessage;

8:         uint256 recentVoteInterval;

9:         uint256 windowSize;

```

```solidity
File: contracts/interfaces/ICornerstone.sol

6:         string name;

7:         string comment;

```

```solidity
File: libraries/NodeConfigStorage.sol

6:         uint256 registrationTimestamp;

7:         uint256 id;

8:         uint256 jsonRpcPort;

9:         uint256 consensusPort;

10:         uint256 grpcPort;

11:         address nodeAddress;

12:         address signingAddress;

13:         string hostname;

14:         uint256 exitTimestamp;

23:         uint256 nodeCounter;

```

```solidity
File: libraries/NodeRecordStorage.sol

8:         uint256 nodeCounter;

```

</details> 
 


 ### <a name="NC-7"></a>[NC-7]
 ### Constants in comparisons should appear on the left side

#### Impact:
Placing constants on the left side of comparisons can improve code readability and prevent accidental assignment. Doing so will prevent typo [bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

18:         if (_config.inactivityThresholdForRounds <= 0) {

23:         if (_config.inactivityThresholdForMessage <= 0) {

28:         if (_config.recentVoteInterval <= 0) {

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

39:         if (_contract == address(0)) {

```

```solidity
File: contracts/Cornerstone.sol

44:         if (index >= _counter) { //@audit if index == _counter, it should not revert

```

```solidity
File: contracts/GasFees.sol

56:         if (_baseGasFee <= 0) {

```

```solidity
File: libraries/NodeConfigStorage.sol

77:         if (self.nodeIdToConfig[nodeIndex].id != parameters.id) {

81:         if (

90:         if (

```

</details> 
 


 ### <a name="NC-8"></a>[NC-8]
 ### constants should be defined rather than using magic numbers
Even [assembly](https://github.com/code-423n4/2022-05-opensea-seaport/blob/9d7ce4d08bf3c3010304a0476a785c70c0e90ae7/contracts/lib/TokenTransferrer.sol#L35-L39) can benefit from using readable constants instead of hex/numeric literals

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/BootstrapContractsRegistry.sol

18:         ] = 0xd9145CCE52D386f254917e481eB44e9943F39138;

19:         registry["gasfees"] = 0x292Cc6D79E95B2848579735c24B70215179D4a33;

20:         registry["pricefeed"] = 0x0CD42d829F88fe539f710E9b7692C70b94aaEad4;

23:         ] = 0xaE5AA4a7d7c01fab471290532d3815d8d6CB5e17;

26:         ] = 0x991e949a44A8c4E7e2574a0DAD47369a4230Eb24;

27:         registry["permission"] = 0xF47827331fCaAAf57e043Dd602Dec1ba13D26F62;

```

</details> 
 


 ### <a name="NC-9"></a>[NC-9]
 ### Contract declarations should have NatSpec @author annotations

#### Impact:
Adding a NatSpec @author annotation to contract declarations can improve code documentation.

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

5: contract ActivityMonitor is IActivityMonitor {

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

5: contract BootstrapContractsRegistry is RBAC {

37:             revert EmptyContractName("empty contract name");

```

```solidity
File: contracts/ContractRoleAuth.sol

6: abstract contract ContractRoleAuth is RBAC {

```

```solidity
File: contracts/Cornerstone.sol

5: contract Cornerstone is ICornerstone {

```

```solidity
File: contracts/GasFees.sol

5: contract GasFeesContract is RBAC {

```

```solidity
File: contracts/NetworkConfiguration.sol

9: contract NetworkConfigurationContract is INetworkConfiguration {

```

```solidity
File: contracts/Permission.sol

8: contract Permission is IPermission {

```

```solidity
File: contracts/PriceFeedContract.sol

8: contract PriceFeedContract is IPriceFeed, ContractRoleAuth {

```

```solidity
File: contracts/RBAC.sol

5: abstract contract RBAC is AccessControl {

```

```solidity
File: contracts/Reconfiguration.sol

6: contract ReconfigurationContract is IReconfiguration {

```

</details> 
 


 ### <a name="NC-10"></a>[NC-10]
 ### Contract declarations should have NatSpec @Title annotations

#### Impact:
Adding a NatSpec @Title annotation to contract declarations can improve code documentation.

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

5: contract ActivityMonitor is IActivityMonitor {

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

5: contract BootstrapContractsRegistry is RBAC {

37:             revert EmptyContractName("empty contract name");

```

```solidity
File: contracts/ContractRoleAuth.sol

6: abstract contract ContractRoleAuth is RBAC {

```

```solidity
File: contracts/Cornerstone.sol

5: contract Cornerstone is ICornerstone {

```

```solidity
File: contracts/GasFees.sol

5: contract GasFeesContract is RBAC {

```

```solidity
File: contracts/NetworkConfiguration.sol

9: contract NetworkConfigurationContract is INetworkConfiguration {

```

```solidity
File: contracts/Permission.sol

8: contract Permission is IPermission {

```

```solidity
File: contracts/PriceFeedContract.sol

8: contract PriceFeedContract is IPriceFeed, ContractRoleAuth {

```

```solidity
File: contracts/RBAC.sol

5: abstract contract RBAC is AccessControl {

```

```solidity
File: contracts/Reconfiguration.sol

6: contract ReconfigurationContract is IReconfiguration {

```

</details> 
 


 ### <a name="NC-11"></a>[NC-11]
 ### NatSpec: Contract declarations should have @dev tags

#### Impact:
@dev is used to explain extra details to developers

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

5: contract ActivityMonitor is IActivityMonitor {

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

5: contract BootstrapContractsRegistry is RBAC {

37:             revert EmptyContractName("empty contract name");

```

```solidity
File: contracts/ContractRoleAuth.sol

6: abstract contract ContractRoleAuth is RBAC {

```

```solidity
File: contracts/Cornerstone.sol

5: contract Cornerstone is ICornerstone {

```

```solidity
File: contracts/GasFees.sol

5: contract GasFeesContract is RBAC {

```

```solidity
File: contracts/NetworkConfiguration.sol

9: contract NetworkConfigurationContract is INetworkConfiguration {

```

```solidity
File: contracts/Permission.sol

8: contract Permission is IPermission {

```

```solidity
File: contracts/PriceFeedContract.sol

8: contract PriceFeedContract is IPriceFeed, ContractRoleAuth {

```

```solidity
File: contracts/RBAC.sol

5: abstract contract RBAC is AccessControl {

```

```solidity
File: contracts/Reconfiguration.sol

6: contract ReconfigurationContract is IReconfiguration {

```

</details> 
 


 ### <a name="NC-12"></a>[NC-12]
 ### NatSpec: Contract declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

5: contract ActivityMonitor is IActivityMonitor {

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

5: contract BootstrapContractsRegistry is RBAC {

37:             revert EmptyContractName("empty contract name");

```

```solidity
File: contracts/ContractRoleAuth.sol

6: abstract contract ContractRoleAuth is RBAC {

```

```solidity
File: contracts/Cornerstone.sol

5: contract Cornerstone is ICornerstone {

```

```solidity
File: contracts/GasFees.sol

5: contract GasFeesContract is RBAC {

```

```solidity
File: contracts/NetworkConfiguration.sol

9: contract NetworkConfigurationContract is INetworkConfiguration {

```

```solidity
File: contracts/Permission.sol

8: contract Permission is IPermission {

```

```solidity
File: contracts/PriceFeedContract.sol

8: contract PriceFeedContract is IPriceFeed, ContractRoleAuth {

```

```solidity
File: contracts/RBAC.sol

5: abstract contract RBAC is AccessControl {

```

```solidity
File: contracts/Reconfiguration.sol

6: contract ReconfigurationContract is IReconfiguration {

```

</details> 
 


 ### <a name="NC-13"></a>[NC-13]
 ### NatSpec: Contract declarations should have @notice tags
@notice is used to explain to end users what the contract does, and the compiler interprets /// or /** comments as this tag if one wasnt explicitly provided

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

5: contract ActivityMonitor is IActivityMonitor {

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

5: contract BootstrapContractsRegistry is RBAC {

37:             revert EmptyContractName("empty contract name");

```

```solidity
File: contracts/ContractRoleAuth.sol

6: abstract contract ContractRoleAuth is RBAC {

```

```solidity
File: contracts/Cornerstone.sol

5: contract Cornerstone is ICornerstone {

```

```solidity
File: contracts/GasFees.sol

5: contract GasFeesContract is RBAC {

```

```solidity
File: contracts/NetworkConfiguration.sol

9: contract NetworkConfigurationContract is INetworkConfiguration {

```

```solidity
File: contracts/Permission.sol

8: contract Permission is IPermission {

```

```solidity
File: contracts/PriceFeedContract.sol

8: contract PriceFeedContract is IPriceFeed, ContractRoleAuth {

```

```solidity
File: contracts/RBAC.sol

5: abstract contract RBAC is AccessControl {

```

```solidity
File: contracts/Reconfiguration.sol

6: contract ReconfigurationContract is IReconfiguration {

```

</details> 
 


 ### <a name="NC-14"></a>[NC-14]
 ### Consider using delete rather than assigning zero to clear value

#### Impact:
Consider using delete rather than assigning zero to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/Cornerstone.sol

13:         for (uint256 i = 0; i < initialEmployees.length; i++) {

21:         for (uint256 i = 0; i < _counter; i++) {

30:         for (uint256 i = 0; i < _counter; i++) {

53:         for (uint256 i = 0; i < _counter; i++) {

```

```solidity
File: contracts/NetworkConfiguration.sol

22:         for (uint256 i = 0; i < _bootStrapNodes.length; i++) {

```

```solidity
File: contracts/RBAC.sol

18:         for (uint256 i = 0; i < authorizedUsers.length; i++) {

```

```solidity
File: libraries/NodeConfigStorage.sol

46:         parameters.exitTimestamp = 0;

180:         for (uint256 i = 0; i < self.nodeCounter; i++) {

193:         for (uint256 i = 0; i < addresses.length; i++) {

```

```solidity
File: libraries/NodeRecordStorage.sol

64:         for (uint256 i = 0; i < self.nodeCounter; i++) {

```

</details> 
 


 ### <a name="NC-15"></a>[NC-15]
 ### Consider adding a block/deny-list"
Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens  

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

5: contract ActivityMonitor is IActivityMonitor {

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

5: contract BootstrapContractsRegistry is RBAC {

37:             revert EmptyContractName("empty contract name");

```

```solidity
File: contracts/ContractRoleAuth.sol

6: abstract contract ContractRoleAuth is RBAC {

```

```solidity
File: contracts/Cornerstone.sol

5: contract Cornerstone is ICornerstone {

```

```solidity
File: contracts/GasFees.sol

5: contract GasFeesContract is RBAC {

```

```solidity
File: contracts/NetworkConfiguration.sol

9: contract NetworkConfigurationContract is INetworkConfiguration {

```

```solidity
File: contracts/Permission.sol

8: contract Permission is IPermission {

```

```solidity
File: contracts/PriceFeedContract.sol

8: contract PriceFeedContract is IPriceFeed, ContractRoleAuth {

```

```solidity
File: contracts/RBAC.sol

5: abstract contract RBAC is AccessControl {

```

```solidity
File: contracts/Reconfiguration.sol

6: contract ReconfigurationContract is IReconfiguration {

```

</details> 
 


 ### <a name="NC-16"></a>[NC-16]
 ### Use bytes.concat() on bytes instead of abi.encodePacked() for clearer semantic meaning
Starting with version 0.8.4, Solidity has the bytes.concat() function, which allows one to concatenate a list of bytes/strings, without extra padding. Using this function rather than abi.encodePacked() makes the intended operation more clear, leading to less reviewer confusion.  

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: libraries/NodeConfigStorage.sol

64:             abi.encodePacked(parameters.hostname)

67:                 abi.encodePacked(self.nodeIdToConfig[nodeIndex].hostname)

```

</details> 
 


 ### <a name="NC-17"></a>[NC-17]
 ### Consider adding emergency-stop functionality

#### Impact:
Adding a way to quickly halt protocol functionality in an emergency, rather than having to pause individual contracts one-by-one, will make in-progress hack mitigation faster and much less stressful.

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

5: contract ActivityMonitor is IActivityMonitor {

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

5: contract BootstrapContractsRegistry is RBAC {

37:             revert EmptyContractName("empty contract name");

```

```solidity
File: contracts/ContractRoleAuth.sol

6: abstract contract ContractRoleAuth is RBAC {

```

```solidity
File: contracts/Cornerstone.sol

5: contract Cornerstone is ICornerstone {

```

```solidity
File: contracts/GasFees.sol

5: contract GasFeesContract is RBAC {

```

```solidity
File: contracts/NetworkConfiguration.sol

9: contract NetworkConfigurationContract is INetworkConfiguration {

```

```solidity
File: contracts/Permission.sol

8: contract Permission is IPermission {

```

```solidity
File: contracts/PriceFeedContract.sol

8: contract PriceFeedContract is IPriceFeed, ContractRoleAuth {

```

```solidity
File: contracts/RBAC.sol

5: abstract contract RBAC is AccessControl {

```

```solidity
File: contracts/Reconfiguration.sol

6: contract ReconfigurationContract is IReconfiguration {

```

</details> 
 


 ### <a name="NC-18"></a>[NC-18]
 ### Error declarations should have NatSpec descriptions

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

8:     error InvalidInactivityThresholdForRounds(string);

9:     error InvalidInactivityThresholdForMessage(string);

10:     error InvalidRecentVoteInterval(string);

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

12:     error EmptyContractName(string);

13:     error InvalidAddress(string);

```

```solidity
File: contracts/Cornerstone.sol

10:     error EmployeeNotFound(string);

```

```solidity
File: contracts/GasFees.sol

15:     error InvalidGasFee(string);

```

```solidity
File: contracts/NetworkConfiguration.sol

12:     error FunctionNotImplemented(string);

```

```solidity
File: contracts/RBAC.sol

12:     error RoleMissing(string);

```

```solidity
File: libraries/NodeConfigStorage.sol

26:     error NodeAddressAlreadyExists(string);

27:     error NodeAddressDoesNotExists(string);

28:     error HostnameUnavailable(string);

29:     error NodeIdChangeNotAllowed(string);

30:     error RegistrationTimestampChangeNotAllowed(string);

31:     error ExitTimestampChangeNotAllowed(string);

32:     error NodeWithGivenSigningAddressDoesNotExists(string);

```

```solidity
File: libraries/NodeRecordStorage.sol

11:     error NodeAddressAlreadyExists(string);

12:     error NodeAddressDoesNotExists(string);

```

</details> 
 


 ### <a name="NC-19"></a>[NC-19]
 ### Custom error has no error details
Custom errors should have a description of the error. This is used to explain to end users what the error means. 

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

8:     error InvalidInactivityThresholdForRounds(string);

9:     error InvalidInactivityThresholdForMessage(string);

10:     error InvalidRecentVoteInterval(string);

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

12:     error EmptyContractName(string);

13:     error InvalidAddress(string);

```

```solidity
File: contracts/Cornerstone.sol

10:     error EmployeeNotFound(string);

```

```solidity
File: contracts/GasFees.sol

15:     error InvalidGasFee(string);

```

```solidity
File: contracts/NetworkConfiguration.sol

12:     error FunctionNotImplemented(string);

```

```solidity
File: contracts/RBAC.sol

12:     error RoleMissing(string);

```

```solidity
File: libraries/NodeConfigStorage.sol

26:     error NodeAddressAlreadyExists(string);

27:     error NodeAddressDoesNotExists(string);

28:     error HostnameUnavailable(string);

29:     error NodeIdChangeNotAllowed(string);

30:     error RegistrationTimestampChangeNotAllowed(string);

31:     error ExitTimestampChangeNotAllowed(string);

32:     error NodeWithGivenSigningAddressDoesNotExists(string);

```

```solidity
File: libraries/NodeRecordStorage.sol

11:     error NodeAddressAlreadyExists(string);

12:     error NodeAddressDoesNotExists(string);

```

</details> 
 


 ### <a name="NC-20"></a>[NC-20]
 ### Events are missing sender information

#### Impact:
Including msg.sender in events triggered by user actions can make events more useful for end users.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/BootstrapContractsRegistry.sol

43:         emit RegistryUpdated(_name, _contract);

```

```solidity
File: contracts/GasFees.sol

60:         emit GasUpdated(baseGasFee, currency, decimals);

71:         emit GasUpdated(baseGasFee, currency, decimals);

82:         emit GasUpdated(baseGasFee, currency, decimals);

```

```solidity
File: contracts/PriceFeedContract.sol

35:         emit PriceUpdated(_price, _lastUpdated);

59:         emit PriceUpdated(newPrice, _lastUpdated);

```

</details> 
 


 ### <a name="NC-21"></a>[NC-21]
 ### NatSpec: Event declarations should have NatSpec descriptions

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/BootstrapContractsRegistry.sol

10:     event RegistryUpdated(string indexed _name, address indexed _contract);

```

```solidity
File: contracts/GasFees.sol

9:     event GasUpdated(uint256 baseGasFee, string currency, uint8 decimals);

```

```solidity
File: contracts/interfaces/IPriceFeed.sol

7:     event PriceUpdated(uint256 newPrice, uint256 lastUpdated);

```

</details> 
 


 ### <a name="NC-22"></a>[NC-22]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (58)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/BootstrapContractsRegistry.sol

32:     function register(

47:     function getContractAddress(

```

```solidity
File: contracts/Cornerstone.sol

19:     function getAllEmployees() public view returns (Employee[] memory) {

27:     function getEmployeeByName(

41:     function getEmployeeByIndex(

50:     function getCommentByName(

```

```solidity
File: contracts/GasFees.sol

41:     function getBaseGasFee()

55:     function updateGasFee(uint256 _baseGasFee) public onlyRedbelly {

69:     function updateCurrency(string memory _currency) public onlyRedbelly {

80:     function updateDecimals(uint8 _decimals) public onlyRedbelly {

```

```solidity
File: contracts/NetworkConfiguration.sol

30:     function getGovernors() public view virtual returns (address[] memory) {

34:     function getNodeConfigurationsByAddresses(

40:     function isBootNode(

46:     function getActiveCandidateNodes()

```

```solidity
File: contracts/Permission.sol

9:     function isAllowed(address) external view returns (bool) {

13:     function isPermissionedAccessEnabled() external view returns (bool) {

```

```solidity
File: contracts/PriceFeedContract.sol

40:     function getLatestPrice()

54:     function setPrice(

64:     function decimals() public view virtual override returns (uint8) {

70:     function setThresholdForNextUpdate(

```

```solidity
File: contracts/Reconfiguration.sol

13:     function getReconfigurationBuffer() public view virtual returns (uint256) {

```

```solidity
File: contracts/interfaces/IBootstrapContractsRegistry.sol

5:     function register(

10:     function getContractAddress(

```

```solidity
File: contracts/interfaces/ICornerstone.sol

10:     function getAllEmployees() external view returns (Employee[] memory);

12:     function getEmployeeByName(

16:     function getEmployeeByIndex(

20:     function getCommentByName(

```

```solidity
File: contracts/interfaces/INetworkConfiguration.sol

7:     function getGovernors() external view returns (address[] memory);

8:     function getNodeConfigurationsByAddresses(

11:     function isBootNode(address _nodeAddress) external view returns (bool);

12:     function getActiveCandidateNodes() external view returns (address[] memory);

```

```solidity
File: contracts/interfaces/IPermission.sol

8:     function isAllowed(address _address) external view returns (bool);

10:     function isPermissionedAccessEnabled() external view returns (bool);

```

```solidity
File: contracts/interfaces/IPriceFeed.sol

11:     function getLatestPrice() external view returns (int256, uint256, bool);

15:     function setPrice(uint256 newPrice) external;

19:     function decimals() external view returns (uint8);

23:     function setThresholdForNextUpdate(

```

```solidity
File: contracts/interfaces/IReconfiguration.sol

5:     function getReconfigurationBuffer() external view returns (uint256);

```

```solidity
File: libraries/NodeConfigStorage.sol

34:     function insert( //@audit anyuone can inset a node?

53:     function update( //@audit anyone can update a node?

112:     function updateExitTimestamp(

124:     function remove(NodeConfig storage self, address nodeAddr) public {

143:     function nodeExists(

151:     function getConfigForAddress(

162:     function getConfigForSignerAddress(

176:     function getAll(

186:     function getAllByAddresses(

200:     function getAddressAtIndex(

207:     function getIndexForAddress(

217:     function getSize(NodeConfig storage self) public view returns (uint256) {

```

```solidity
File: libraries/NodeRecordStorage.sol

14:     function insert(NodeRecord storage self, address nodeAddr) public {

23:     function update(

38:     function remove(NodeRecord storage self, address nodeAddr) public {

52:     function nodeExists(

60:     function getAll(

70:     function getAddressAtIndex(

77:     function getIndexForAddress(

87:     function getSize(NodeRecord storage self) public view returns (uint256) {

```

</details> 
 


 ### <a name="NC-23"></a>[NC-23]
 ### NatSpec: function declarations should have @Notice tags
@notice is used to explain to end users what the function does, and the compiler interprets /// or /** comments as this tag if one wasn't explicitly provided.  

*Instances (58)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/BootstrapContractsRegistry.sol

32:     function register(

47:     function getContractAddress(

```

```solidity
File: contracts/Cornerstone.sol

19:     function getAllEmployees() public view returns (Employee[] memory) {

27:     function getEmployeeByName(

41:     function getEmployeeByIndex(

50:     function getCommentByName(

```

```solidity
File: contracts/GasFees.sol

41:     function getBaseGasFee()

55:     function updateGasFee(uint256 _baseGasFee) public onlyRedbelly {

69:     function updateCurrency(string memory _currency) public onlyRedbelly {

80:     function updateDecimals(uint8 _decimals) public onlyRedbelly {

```

```solidity
File: contracts/NetworkConfiguration.sol

30:     function getGovernors() public view virtual returns (address[] memory) {

34:     function getNodeConfigurationsByAddresses(

40:     function isBootNode(

46:     function getActiveCandidateNodes()

```

```solidity
File: contracts/Permission.sol

9:     function isAllowed(address) external view returns (bool) {

13:     function isPermissionedAccessEnabled() external view returns (bool) {

```

```solidity
File: contracts/PriceFeedContract.sol

40:     function getLatestPrice()

54:     function setPrice(

64:     function decimals() public view virtual override returns (uint8) {

70:     function setThresholdForNextUpdate(

```

```solidity
File: contracts/Reconfiguration.sol

13:     function getReconfigurationBuffer() public view virtual returns (uint256) {

```

```solidity
File: contracts/interfaces/IBootstrapContractsRegistry.sol

5:     function register(

10:     function getContractAddress(

```

```solidity
File: contracts/interfaces/ICornerstone.sol

10:     function getAllEmployees() external view returns (Employee[] memory);

12:     function getEmployeeByName(

16:     function getEmployeeByIndex(

20:     function getCommentByName(

```

```solidity
File: contracts/interfaces/INetworkConfiguration.sol

7:     function getGovernors() external view returns (address[] memory);

8:     function getNodeConfigurationsByAddresses(

11:     function isBootNode(address _nodeAddress) external view returns (bool);

12:     function getActiveCandidateNodes() external view returns (address[] memory);

```

```solidity
File: contracts/interfaces/IPermission.sol

8:     function isAllowed(address _address) external view returns (bool);

10:     function isPermissionedAccessEnabled() external view returns (bool);

```

```solidity
File: contracts/interfaces/IPriceFeed.sol

11:     function getLatestPrice() external view returns (int256, uint256, bool);

15:     function setPrice(uint256 newPrice) external;

19:     function decimals() external view returns (uint8);

23:     function setThresholdForNextUpdate(

```

```solidity
File: contracts/interfaces/IReconfiguration.sol

5:     function getReconfigurationBuffer() external view returns (uint256);

```

```solidity
File: libraries/NodeConfigStorage.sol

34:     function insert( //@audit anyuone can inset a node?

53:     function update( //@audit anyone can update a node?

112:     function updateExitTimestamp(

124:     function remove(NodeConfig storage self, address nodeAddr) public {

143:     function nodeExists(

151:     function getConfigForAddress(

162:     function getConfigForSignerAddress(

176:     function getAll(

186:     function getAllByAddresses(

200:     function getAddressAtIndex(

207:     function getIndexForAddress(

217:     function getSize(NodeConfig storage self) public view returns (uint256) {

```

```solidity
File: libraries/NodeRecordStorage.sol

14:     function insert(NodeRecord storage self, address nodeAddr) public {

23:     function update(

38:     function remove(NodeRecord storage self, address nodeAddr) public {

52:     function nodeExists(

60:     function getAll(

70:     function getAddressAtIndex(

77:     function getIndexForAddress(

87:     function getSize(NodeRecord storage self) public view returns (uint256) {

```

</details> 
 


 ### <a name="NC-24"></a>[NC-24]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (58)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/BootstrapContractsRegistry.sol

32:     function register(

47:     function getContractAddress(

```

```solidity
File: contracts/Cornerstone.sol

19:     function getAllEmployees() public view returns (Employee[] memory) {

27:     function getEmployeeByName(

41:     function getEmployeeByIndex(

50:     function getCommentByName(

```

```solidity
File: contracts/GasFees.sol

41:     function getBaseGasFee()

55:     function updateGasFee(uint256 _baseGasFee) public onlyRedbelly {

69:     function updateCurrency(string memory _currency) public onlyRedbelly {

80:     function updateDecimals(uint8 _decimals) public onlyRedbelly {

```

```solidity
File: contracts/NetworkConfiguration.sol

30:     function getGovernors() public view virtual returns (address[] memory) {

34:     function getNodeConfigurationsByAddresses(

40:     function isBootNode(

46:     function getActiveCandidateNodes()

```

```solidity
File: contracts/Permission.sol

9:     function isAllowed(address) external view returns (bool) {

13:     function isPermissionedAccessEnabled() external view returns (bool) {

```

```solidity
File: contracts/PriceFeedContract.sol

40:     function getLatestPrice()

54:     function setPrice(

64:     function decimals() public view virtual override returns (uint8) {

70:     function setThresholdForNextUpdate(

```

```solidity
File: contracts/Reconfiguration.sol

13:     function getReconfigurationBuffer() public view virtual returns (uint256) {

```

```solidity
File: contracts/interfaces/IBootstrapContractsRegistry.sol

5:     function register(

10:     function getContractAddress(

```

```solidity
File: contracts/interfaces/ICornerstone.sol

10:     function getAllEmployees() external view returns (Employee[] memory);

12:     function getEmployeeByName(

16:     function getEmployeeByIndex(

20:     function getCommentByName(

```

```solidity
File: contracts/interfaces/INetworkConfiguration.sol

7:     function getGovernors() external view returns (address[] memory);

8:     function getNodeConfigurationsByAddresses(

11:     function isBootNode(address _nodeAddress) external view returns (bool);

12:     function getActiveCandidateNodes() external view returns (address[] memory);

```

```solidity
File: contracts/interfaces/IPermission.sol

8:     function isAllowed(address _address) external view returns (bool);

10:     function isPermissionedAccessEnabled() external view returns (bool);

```

```solidity
File: contracts/interfaces/IPriceFeed.sol

11:     function getLatestPrice() external view returns (int256, uint256, bool);

15:     function setPrice(uint256 newPrice) external;

19:     function decimals() external view returns (uint8);

23:     function setThresholdForNextUpdate(

```

```solidity
File: contracts/interfaces/IReconfiguration.sol

5:     function getReconfigurationBuffer() external view returns (uint256);

```

```solidity
File: libraries/NodeConfigStorage.sol

34:     function insert( //@audit anyuone can inset a node?

53:     function update( //@audit anyone can update a node?

112:     function updateExitTimestamp(

124:     function remove(NodeConfig storage self, address nodeAddr) public {

143:     function nodeExists(

151:     function getConfigForAddress(

162:     function getConfigForSignerAddress(

176:     function getAll(

186:     function getAllByAddresses(

200:     function getAddressAtIndex(

207:     function getIndexForAddress(

217:     function getSize(NodeConfig storage self) public view returns (uint256) {

```

```solidity
File: libraries/NodeRecordStorage.sol

14:     function insert(NodeRecord storage self, address nodeAddr) public {

23:     function update(

38:     function remove(NodeRecord storage self, address nodeAddr) public {

52:     function nodeExists(

60:     function getAll(

70:     function getAddressAtIndex(

77:     function getIndexForAddress(

87:     function getSize(NodeRecord storage self) public view returns (uint256) {

```

</details> 
 


 ### <a name="NC-25"></a>[NC-25]
 ### If-statement can be converted to a ternary

#### Impact:
The code can be made more compact while also increasing readability by converting the following `if`-statements to ternaries (e.g. `foo += (x > y) ? a : b`)

*Instances (29)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

18:         if (_config.inactivityThresholdForRounds <= 0) {

23:         if (_config.inactivityThresholdForMessage <= 0) {

28:         if (_config.recentVoteInterval <= 0) {

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

36:         if (bytes(_name).length == 0) {

39:         if (_contract == address(0)) {

```

```solidity
File: contracts/ContractRoleAuth.sol

21:         if (!hasRole(RECONFIGURATION_CONTRACT_ROLE, msg.sender)) {

42:         if (!hasRole(ACTIVITY_MONITOR_CONTRACT_ROLE, msg.sender)) {

51:         if (!hasRole(JAILED_NODES_CONTRACT_ROLE, msg.sender)) {

60:         if (!hasRole(NETWORK_CONFIG_CONTRACT_ROLE, msg.sender)) {

69:         if (!hasRole(PRICE_FEED_AGGREAGATOR_CONTRACT_ROLE, msg.sender)) {

```

```solidity
File: contracts/Cornerstone.sol

44:         if (index >= _counter) { //@audit if index == _counter, it should not revert

```

```solidity
File: contracts/GasFees.sol

56:         if (_baseGasFee <= 0) {

```

```solidity
File: contracts/RBAC.sol

24:         if (!hasRole(OWNER_ROLE, msg.sender)) {

31:         if (!hasRole(REDBELLY_ROLE, msg.sender)) {

38:         if (!hasRole(IDP_ROLE, msg.sender)) {

45:         if (!hasRole(REDBELLY_NODE_OPERATOR_ROLE, msg.sender)) {

52:         if (!hasRole(GOVERNOR_ROLE, msg.sender)) {

```

```solidity
File: libraries/NodeConfigStorage.sol

39:         if (nodeExists(self, nodeAddr)) {

59:         if (!nodeExists(self, nodeAddr)) {

77:         if (self.nodeIdToConfig[nodeIndex].id != parameters.id) {

118:         if (!nodeExists(self, nodeAddr)) {

125:         if (!nodeExists(self, nodeAddr)) {

155:         if (!nodeExists(self, nodeAddress)) {

168:         if (!nodeExists(self, self.nodeIdToConfig[nodeId].nodeAddress)) {

211:         if (!nodeExists(self, nodeAddress)) {

```

```solidity
File: libraries/NodeRecordStorage.sol

15:         if (nodeExists(self, nodeAddr)) {

28:         if (!nodeExists(self, nodeAddr)) {

39:         if (!nodeExists(self, nodeAddr)) {

81:         if (!nodeExists(self, nodeAddress)) {

```

</details> 
 


 ### <a name="NC-26"></a>[NC-26]
 ### Consider using named mappings

#### Impact:
Using named mappings can improve code readability and maintainability.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/Cornerstone.sol

8:     mapping(uint256 => Employee) private _employees;

```

```solidity
File: libraries/NodeConfigStorage.sol

18:         mapping(address => uint256) nodeAddressToIndx;

19:         mapping(uint256 => address) nodeIndxToAddress;

20:         mapping(uint256 => NodeParameters) nodeIdToConfig;

21:         mapping(address => uint256) signingAddressToNodeId;

```

```solidity
File: libraries/NodeRecordStorage.sol

6:         mapping(address => uint256) nodeAddressToIndx;

7:         mapping(uint256 => address) nodeIndxToAddress;

```

</details> 
 


 ### <a name="NC-27"></a>[NC-27]
 ### Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct

#### Impact:
Combining multiple mappings into a single mapping with a struct can improve readability and maintainability of the code.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: libraries/NodeConfigStorage.sol

18:         mapping(address => uint256) nodeAddressToIndx;

21:         mapping(address => uint256) signingAddressToNodeId;

```

```solidity
File: libraries/NodeRecordStorage.sol

6:         mapping(address => uint256) nodeAddressToIndx;

```

</details> 
 


 ### <a name="NC-28"></a>[NC-28]
 ### Use of override is unnecessary

#### Impact:
Starting with Solidity version [0.8.8](https://docs.soliditylang.org/en/v0.8.20/contracts.html#function-overriding), using the override keyword when the function solely overrides an interface function, and the function doesnt exist in multiple base contracts, is unnecessary.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/PriceFeedContract.sol

43:         override

56:     ) external override onlyRedbellyOrPriceFeedAggregatorContract {

64:     function decimals() public view virtual override returns (uint8) {

72:     ) external override onlyRedbelly {

```

</details> 
 


 ### <a name="NC-29"></a>[NC-29]
 ### Consider using descriptive constants when using 0 in the code

#### Impact:
Passing zero as a function argument/Event emission can sometimes result in a security issue (e.g. passing zero as the slippage parameter). Consider using a constant variable with a descriptive name, so its clear that the 0 is intentionally being used, and for the right reasons.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: libraries/NodeConfigStorage.sol

212:             return (false, 0);

```

```solidity
File: libraries/NodeRecordStorage.sol

82:             return (false, 0);

```

</details> 
 


 ### <a name="NC-30"></a>[NC-30]
 ### Non-external/public variable names should begin with an underscore

#### Impact:
Using an underscore at the beginning of non-external/public variable names can improve code clarity and maintainability. According to the Solidity Style Guide, non-external/public variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

6:     Config public config;

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

7:     mapping(string => address) public registry;

```

```solidity
File: contracts/GasFees.sol

11:     uint256 public baseGasFee; // Example 1000

12:     uint8 public decimals; // Example 6

13:     string public currency; // Example USD

```

```solidity
File: contracts/PriceFeedContract.sol

12:     uint256 public thresholdForNextUpdate;

```

</details> 
 


 ### <a name="NC-31"></a>[NC-31]
 ### Setters should prevent re-setting of the same value
This especially problematic when the setter also emits the same value, which may be confusing to offline parsers  

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/interfaces/IPriceFeed.sol

15:     function setPrice(uint256 newPrice) external;

```

</details> 
 


 ### <a name="NC-32"></a>[NC-32]
 ### Use the latest solidity version for deployment  
Upgrading to a newer Solidity release can optimize gas usage, take advantage of new features and improve overall contract efficiency. Where possible, based on compatibility requirements, it is recommended to use newer/latest solidity version to take advantage of the latest optimizations and features. You can see the latest version [here](https://soliditylang.org/blog/category/releases/)

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/ContractRoleAuth.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Cornerstone.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/GasFees.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/NetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Permission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/PriceFeedContract.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/RBAC.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Reconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IBootstrapContractsRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/ICornerstone.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/INetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IPermission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IPriceFeed.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IReconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: libraries/NodeConfigStorage.sol

2: pragma solidity 0.8.22;

```

```solidity
File: libraries/NodeRecordStorage.sol

2: pragma solidity 0.8.22;

```

</details> 
 


 ### <a name="NC-33"></a>[NC-33]
 ### Consider bounding input array length
The functions below take in an unbounded array, and make function calls for entries in the array. While the function will revert if it eventually runs out of gas, it may be a nicer user experience to require() that the length of the array is below some reasonable maximum, so that the user doesnt have to use up a full transactions gas only to see that the transaction reverts

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/Cornerstone.sol

13:         for (uint256 i = 0; i < initialEmployees.length; i++) {

```

```solidity
File: contracts/NetworkConfiguration.sol

22:         for (uint256 i = 0; i < _bootStrapNodes.length; i++) {

```

```solidity
File: contracts/RBAC.sol

18:         for (uint256 i = 0; i < authorizedUsers.length; i++) {

```

```solidity
File: libraries/NodeConfigStorage.sol

193:         for (uint256 i = 0; i < addresses.length; i++) {

```

</details> 
 


 ### <a name="NC-34"></a>[NC-34]
 ### Strings should use double quotes rather than single quotes

#### Impact:
Using consistent double quotes for strings improves code readability and maintainability. Also see it here https://docs.soliditylang.org/en/v0.8.20/style-guide.html#other-recommendations

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

20:                 "Inactivity threshold for rounds can't be negative or zero"

```

```solidity
File: libraries/NodeConfigStorage.sol

60:             revert NodeAddressDoesNotExists("Node address doesn't exist");

126:             revert NodeAddressDoesNotExists("Node address doesn't exist");

```

```solidity
File: libraries/NodeRecordStorage.sol

29:             revert NodeAddressDoesNotExists("Node address doesn't exists");

```

</details> 
 


 ### <a name="NC-35"></a>[NC-35]
 ### Variables need not be initialized to zero
The default value for variables is zero, so initializing them to zero is superfluous.  

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/Cornerstone.sol

13:         for (uint256 i = 0; i < initialEmployees.length; i++) {

21:         for (uint256 i = 0; i < _counter; i++) {

30:         for (uint256 i = 0; i < _counter; i++) {

53:         for (uint256 i = 0; i < _counter; i++) {

```

```solidity
File: contracts/NetworkConfiguration.sol

22:         for (uint256 i = 0; i < _bootStrapNodes.length; i++) {

```

```solidity
File: contracts/RBAC.sol

18:         for (uint256 i = 0; i < authorizedUsers.length; i++) {

```

```solidity
File: libraries/NodeConfigStorage.sol

180:         for (uint256 i = 0; i < self.nodeCounter; i++) {

193:         for (uint256 i = 0; i < addresses.length; i++) {

```

```solidity
File: libraries/NodeRecordStorage.sol

64:         for (uint256 i = 0; i < self.nodeCounter; i++) {

```

</details> 
 


 ### <a name="NC-36"></a>[NC-36]
 ### Consider moving msg.sender checks to modifiers
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.  

*Instances (14)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ContractRoleAuth.sol

21:         if (!hasRole(RECONFIGURATION_CONTRACT_ROLE, msg.sender)) {

42:         if (!hasRole(ACTIVITY_MONITOR_CONTRACT_ROLE, msg.sender)) {

51:         if (!hasRole(JAILED_NODES_CONTRACT_ROLE, msg.sender)) {

60:         if (!hasRole(NETWORK_CONFIG_CONTRACT_ROLE, msg.sender)) {

69:         if (!hasRole(PRICE_FEED_AGGREAGATOR_CONTRACT_ROLE, msg.sender)) {

79:             !hasRole(REDBELLY_ROLE, msg.sender) &&

80:             !hasRole(PRICE_FEED_AGGREAGATOR_CONTRACT_ROLE, msg.sender)

```

```solidity
File: contracts/RBAC.sol

15:         _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);

16:         _grantRole(OWNER_ROLE, msg.sender);

24:         if (!hasRole(OWNER_ROLE, msg.sender)) {

31:         if (!hasRole(REDBELLY_ROLE, msg.sender)) {

38:         if (!hasRole(IDP_ROLE, msg.sender)) {

45:         if (!hasRole(REDBELLY_NODE_OPERATOR_ROLE, msg.sender)) {

52:         if (!hasRole(GOVERNOR_ROLE, msg.sender)) {

```

</details> 
 


 ### <a name="NC-37"></a>[NC-37]
 ### Dont use _msgSender() if not supporting EIP-2771
Use msg.sender if the code does not implement EIP-2771 trusted forwarder support

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ContractRoleAuth.sol

31:             !hasRole(ACTIVITY_MONITOR_CONTRACT_ROLE, _msgSender()) &&

32:             !hasRole(REDBELLY_ROLE, _msgSender())

```

</details> 
 


 ### <a name="NC-38"></a>[NC-38]
 ### <array>.length should not be looked up in every loop of a for-loop
The overheads outlined below are PER LOOP, excluding the first loop. Storage arrays incur a Gwarmaccess (100 gas), memory arrays use MLOAD (3 gas), calldata arrays use CALLDATALOAD (3 gas). Caching the length changes each of these to a DUP<N> (3 gas), and gets rid of the extra DUP<N> needed to store the stack offset.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/Cornerstone.sol

13:         for (uint256 i = 0; i < initialEmployees.length; i++) {

```

```solidity
File: contracts/NetworkConfiguration.sol

22:         for (uint256 i = 0; i < _bootStrapNodes.length; i++) {

```

```solidity
File: contracts/RBAC.sol

18:         for (uint256 i = 0; i < authorizedUsers.length; i++) {

```

```solidity
File: libraries/NodeConfigStorage.sol

193:         for (uint256 i = 0; i < addresses.length; i++) {

```

</details> 
 


 ### <a name="NC-39"></a>[NC-39]
 ### Use assembly to emit events, in order to save gas
Using the [scratch space](https://github.com/Vectorized/solady/blob/30558f5402f02351b96eeb6eaf32bcea29773841/src/tokens/ERC1155.sol#L501-L504) for event arguments (two words or fewer) will save gas over needing Soliditys full abi memory expansion used for emitting normally.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/BootstrapContractsRegistry.sol

43:         emit RegistryUpdated(_name, _contract);

```

```solidity
File: contracts/GasFees.sol

60:         emit GasUpdated(baseGasFee, currency, decimals);

71:         emit GasUpdated(baseGasFee, currency, decimals);

82:         emit GasUpdated(baseGasFee, currency, decimals);

```

```solidity
File: contracts/PriceFeedContract.sol

35:         emit PriceUpdated(_price, _lastUpdated);

59:         emit PriceUpdated(newPrice, _lastUpdated);

```

</details> 
 


 ### <a name="NC-40"></a>[NC-40]
 ### Don't initialize variables with default value

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/Cornerstone.sol

13:         for (uint256 i = 0; i < initialEmployees.length; i++) {

21:         for (uint256 i = 0; i < _counter; i++) {

30:         for (uint256 i = 0; i < _counter; i++) {

53:         for (uint256 i = 0; i < _counter; i++) {

```

```solidity
File: contracts/NetworkConfiguration.sol

22:         for (uint256 i = 0; i < _bootStrapNodes.length; i++) {

```

```solidity
File: contracts/RBAC.sol

18:         for (uint256 i = 0; i < authorizedUsers.length; i++) {

```

```solidity
File: libraries/NodeConfigStorage.sol

180:         for (uint256 i = 0; i < self.nodeCounter; i++) {

193:         for (uint256 i = 0; i < addresses.length; i++) {

```

```solidity
File: libraries/NodeRecordStorage.sol

64:         for (uint256 i = 0; i < self.nodeCounter; i++) {

```

</details> 
 


## Gas Optimizations


 ### <a name="GAS-1"></a>[GAS-1]
 ### Enable IR-based code generation
By using `--via-ir` or `{"viaIR": true}`, the compiler is able to use more advanced [multi-function optimizations](https://docs.soliditylang.org/en/v0.8.17/ir-breaking-changes.html#solidity-ir-based-codegen-changes), for extra gas savings.

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/ContractRoleAuth.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Cornerstone.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/GasFees.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/NetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Permission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/PriceFeedContract.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/RBAC.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Reconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IBootstrapContractsRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/ICornerstone.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/INetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IPermission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IPriceFeed.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IReconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: libraries/NodeConfigStorage.sol

2: pragma solidity 0.8.22;

```

```solidity
File: libraries/NodeRecordStorage.sol

2: pragma solidity 0.8.22;

```

</details> 
 


 ### <a name="GAS-2"></a>[GAS-2]
 ### Nesting if-statements is cheaper than using &&
Nesting if-statements avoids the stack operations of setting up and using an extra jumpdest, and saves 6 [gas](https://gist.github.com/IllIllI000/7f3b818abecfadbef93b894481ae7d19)

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ContractRoleAuth.sol

31:             !hasRole(ACTIVITY_MONITOR_CONTRACT_ROLE, _msgSender()) &&

79:             !hasRole(REDBELLY_ROLE, msg.sender) &&

```

```solidity
File: libraries/NodeConfigStorage.sol

72:                 (isHostnameChanged && !self.hostnameInUse[parameters.hostname]))

```

</details> 
 


 ### <a name="GAS-3"></a>[GAS-3]
 ### Using bools for storage incurs overhead
Use uint256(1) and uint256(2) for true/false to avoid a Gwarmaccess (100 gas), and to avoid Gsset (20000 gas) when changing from ‘false’ to ‘true’, after having been ‘true’ in the past. See [source](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/58f635312aa21f947cae5f8578638a85aa2519f5/contracts/security/ReentrancyGuard.sol#L23-L27).

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: libraries/NodeConfigStorage.sol

22:         mapping(string => bool) hostnameInUse;

```

</details> 
 


 ### <a name="GAS-4"></a>[GAS-4]
 ### Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/Cornerstone.sol

13:         for (uint256 i = 0; i < initialEmployees.length; i++) {

```

```solidity
File: contracts/NetworkConfiguration.sol

22:         for (uint256 i = 0; i < _bootStrapNodes.length; i++) {

```

```solidity
File: contracts/RBAC.sol

18:         for (uint256 i = 0; i < authorizedUsers.length; i++) {

```

```solidity
File: libraries/NodeConfigStorage.sol

193:         for (uint256 i = 0; i < addresses.length; i++) {

```

</details> 
 


 ### <a name="GAS-5"></a>[GAS-5]
 ### Expressions for constant values should use immutable rather than constant

#### Impact:
While it doesnt save any gas because the compiler knows that developers often make this mistake, its still best to use the right tool for the task at hand. There is a difference between constant variables and immutable variables, and they should each be used in their appropriate contexts. constants should be used for literal values written into the code, and immutable variables should be used for expressions, or values calculated in, or passed into the constructor.  

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ContractRoleAuth.sol

7:     bytes32 public constant RECONFIGURATION_CONTRACT_ROLE =

9:     bytes32 public constant ACTIVITY_MONITOR_CONTRACT_ROLE =

11:     bytes32 public constant JAILED_NODES_CONTRACT_ROLE =

13:     bytes32 public constant NETWORK_CONFIG_CONTRACT_ROLE =

15:     bytes32 public constant PRICE_FEED_AGGREAGATOR_CONTRACT_ROLE =

```

```solidity
File: contracts/RBAC.sol

6:     bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");

7:     bytes32 public constant REDBELLY_ROLE = keccak256("REDBELLY_ROLE");

8:     bytes32 public constant IDP_ROLE = keccak256("IDP_ROLE");

9:     bytes32 public constant REDBELLY_NODE_OPERATOR_ROLE =

11:     bytes32 public constant GOVERNOR_ROLE = keccak256("GOVERNOR_ROLE");

```

</details> 
 


 ### <a name="GAS-6"></a>[GAS-6]
 ### Constructors can be marked payable
Payable functions cost less gas to execute, since the compiler does not have to add extra checks to ensure that a payment wasn  t provided. A constructor can safely be marked as payable, since only the deployer would be able to pass funds, and the project itself would not pass any funds.

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

17:     constructor(Config memory _config) {

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

15:     constructor(address[] memory authorizedUsers) RBAC(authorizedUsers) {

```

```solidity
File: contracts/ContractRoleAuth.sol

18:     constructor(address[] memory authorizedUsers) RBAC(authorizedUsers) {}

```

```solidity
File: contracts/Cornerstone.sol

12:     constructor(Employee[] memory initialEmployees) {

```

```solidity
File: contracts/GasFees.sol

24:     constructor(

```

```solidity
File: contracts/NetworkConfiguration.sol

21:     constructor(NodeConfigStorage.NodeParameters[] memory _bootStrapNodes) {

```

```solidity
File: contracts/PriceFeedContract.sol

14:     constructor(

```

```solidity
File: contracts/RBAC.sol

14:     constructor(address[] memory authorizedUsers) {

```

```solidity
File: contracts/Reconfiguration.sol

9:     constructor(uint256 reconfigurationBuffer) {

```

</details> 
 


 ### <a name="GAS-7"></a>[GAS-7]
 ### Use assembly for small keccak256 hashes, in order to save gas
If the arguments to the encode call can fit into the scratch space (two words or fewer), then its more efficient to use assembly to generate the hash (80 gas): keccak256(abi.encodePacked(x, y)) -> assembly {mstore(0x00, a); mstore(0x20, b); let hash := keccak256(0x00, 0x40); }

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: libraries/NodeConfigStorage.sol

63:         bool isHostnameChanged = keccak256(

66:             keccak256(

```

</details> 
 


 ### <a name="GAS-8"></a>[GAS-8]
 ### Reduce gas usage by moving to Solidity 0.8.19 or later
Solidity version 0.8.19 introduced a number of gas optimizations, refer to the [Solidity 0.8.19 Release Announcement](https://soliditylang.org/blog/2023/02/22/solidity-0.8.19-release-announcement) for details.

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/ContractRoleAuth.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Cornerstone.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/GasFees.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/NetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Permission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/PriceFeedContract.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/RBAC.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/Reconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IActivityMonitor.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IBootstrapContractsRegistry.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/ICornerstone.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/INetworkConfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IPermission.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IPriceFeed.sol

2: pragma solidity 0.8.22;

```

```solidity
File: contracts/interfaces/IReconfiguration.sol

2: pragma solidity 0.8.22;

```

```solidity
File: libraries/NodeConfigStorage.sol

2: pragma solidity 0.8.22;

```

```solidity
File: libraries/NodeRecordStorage.sol

2: pragma solidity 0.8.22;

```

</details> 
 


 ### <a name="GAS-9"></a>[GAS-9]
 ### Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/GasFees.sol

55:     function updateGasFee(uint256 _baseGasFee) public onlyRedbelly {

69:     function updateCurrency(string memory _currency) public onlyRedbelly {

80:     function updateDecimals(uint8 _decimals) public onlyRedbelly {

```

</details> 
 


 ### <a name="GAS-10"></a>[GAS-10]
 ### `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/Cornerstone.sol

13:         for (uint256 i = 0; i < initialEmployees.length; i++) {

15:             _counter++;

21:         for (uint256 i = 0; i < _counter; i++) {

30:         for (uint256 i = 0; i < _counter; i++) {

53:         for (uint256 i = 0; i < _counter; i++) {

```

```solidity
File: contracts/NetworkConfiguration.sol

22:         for (uint256 i = 0; i < _bootStrapNodes.length; i++) {

```

```solidity
File: contracts/RBAC.sol

18:         for (uint256 i = 0; i < authorizedUsers.length; i++) {

```

```solidity
File: libraries/NodeConfigStorage.sol

50:         self.nodeCounter++;

180:         for (uint256 i = 0; i < self.nodeCounter; i++) {

193:         for (uint256 i = 0; i < addresses.length; i++) {

```

```solidity
File: libraries/NodeRecordStorage.sol

64:         for (uint256 i = 0; i < self.nodeCounter; i++) {

```

</details> 
 


 ### <a name="GAS-11"></a>[GAS-11]
 ### Using `private` rather than `public` for constants, saves gas
If needed, the values can be read from the verified contract source code, or if there are multiple values there can be a single getter function that [returns a tuple](https://github.com/code-423n4/2022-08-frax/blob/90f55a9ce4e25bceed3a74290b854341d8de6afa/src/contracts/FraxlendPair.sol#L156-L178) of the values of all currently-public constants. Saves **3406-3606 gas** in deployment gas due to the compiler not having to create non-payable getter functions for deployment calldata, not having to store the bytes of the value outside of where it's used, and not adding another entry to the method ID table

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ContractRoleAuth.sol

7:     bytes32 public constant RECONFIGURATION_CONTRACT_ROLE =

9:     bytes32 public constant ACTIVITY_MONITOR_CONTRACT_ROLE =

11:     bytes32 public constant JAILED_NODES_CONTRACT_ROLE =

13:     bytes32 public constant NETWORK_CONFIG_CONTRACT_ROLE =

15:     bytes32 public constant PRICE_FEED_AGGREAGATOR_CONTRACT_ROLE =

```

```solidity
File: contracts/RBAC.sol

6:     bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");

7:     bytes32 public constant REDBELLY_ROLE = keccak256("REDBELLY_ROLE");

8:     bytes32 public constant IDP_ROLE = keccak256("IDP_ROLE");

9:     bytes32 public constant REDBELLY_NODE_OPERATOR_ROLE =

11:     bytes32 public constant GOVERNOR_ROLE = keccak256("GOVERNOR_ROLE");

```

</details> 
 


 ### <a name="GAS-12"></a>[GAS-12]
 ### Structs can be packed into fewer storage slots
Each slot saved can avoid an extra Gsset (20000 gas) for the first setting of the struct. Subsequent reads as well as writes have smaller gas savings

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/interfaces/IActivityMonitor.sol

5:     struct Config {

```

```solidity
File: contracts/interfaces/ICornerstone.sol

5:     struct Employee {

```

```solidity
File: libraries/NodeConfigStorage.sol

5:     struct NodeParameters {

17:     struct NodeConfig {

```

```solidity
File: libraries/NodeRecordStorage.sol

5:     struct NodeRecord {

```

</details> 
 


 ### <a name="GAS-13"></a>[GAS-13]
 ### Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency
Using uint256(1) and uint256(2) instead of true and false can save gas for certain changes. Consider using uint256(1)/uint256(2) when appropriate.

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/BootstrapContractsRegistry.sol

44:         return true;

```

```solidity
File: contracts/Permission.sol

10:         return true; //@audit always true?

10:         return true; //@audit always true?

14:         return false;

```

```solidity
File: libraries/NodeConfigStorage.sol

49:         self.hostnameInUse[parameters.hostname] = true;

109:         self.hostnameInUse[parameters.hostname] = true;

212:             return (false, 0);

214:         return (true, self.nodeAddressToIndx[nodeAddress]);

```

```solidity
File: libraries/NodeRecordStorage.sol

82:             return (false, 0);

84:         return (true, self.nodeAddressToIndx[nodeAddress]);

```

</details> 
 


 ### <a name="GAS-14"></a>[GAS-14]
 ### Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead
Using uints or ints smaller than 32 bytes (256 bits) can incur overhead. Consider using uint256 or int256 to avoid potential issues.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/GasFees.sol

9:     event GasUpdated(uint256 baseGasFee, string currency, uint8 decimals);

12:     uint8 public decimals; // Example 6

26:         uint8 _decimals,

44:         returns (uint256, string memory, uint8)

80:     function updateDecimals(uint8 _decimals) public onlyRedbelly {

```

```solidity
File: contracts/PriceFeedContract.sol

64:     function decimals() public view virtual override returns (uint8) {

```

```solidity
File: contracts/interfaces/IPriceFeed.sol

19:     function decimals() external view returns (uint8);

```

</details> 
 


 ### <a name="GAS-15"></a>[GAS-15]
 ### Optimize names to save gas
public/external function names and public member variable names can be optimized to save gas. See [this](https://gist.github.com/IllIllI000/a5d8b486a8259f9f77891a919febd1a9) link for an example of how it works. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save 128 gas each during deployment, and renaming functions to have lower method IDs will save 22 gas per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

*Instances (64)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: contracts/ActivityMonitor.sol

6:     Config public config;

```

```solidity
File: contracts/BootstrapContractsRegistry.sol

7:     mapping(string => address) public registry;

35:     ) external onlyRedbelly returns (bool) {

49:     ) public view returns (address) {

```

```solidity
File: contracts/ContractRoleAuth.sol

7:     bytes32 public constant RECONFIGURATION_CONTRACT_ROLE =

9:     bytes32 public constant ACTIVITY_MONITOR_CONTRACT_ROLE =

11:     bytes32 public constant JAILED_NODES_CONTRACT_ROLE =

13:     bytes32 public constant NETWORK_CONFIG_CONTRACT_ROLE =

15:     bytes32 public constant PRICE_FEED_AGGREAGATOR_CONTRACT_ROLE =

```

```solidity
File: contracts/Cornerstone.sol

19:     function getAllEmployees() public view returns (Employee[] memory) {

29:     ) public view returns (Employee memory) {

43:     ) public view returns (Employee memory) {

52:     ) public view returns (string memory) {

```

```solidity
File: contracts/GasFees.sol

11:     uint256 public baseGasFee; // Example 1000

12:     uint8 public decimals; // Example 6

13:     string public currency; // Example USD

42:         public

55:     function updateGasFee(uint256 _baseGasFee) public onlyRedbelly {

69:     function updateCurrency(string memory _currency) public onlyRedbelly {

80:     function updateDecimals(uint8 _decimals) public onlyRedbelly {

```

```solidity
File: contracts/NetworkConfiguration.sol

30:     function getGovernors() public view virtual returns (address[] memory) {

36:     ) public view virtual returns (NodeConfigStorage.NodeParameters[] memory) {

42:     ) public view virtual returns (bool) {

47:         external

```

```solidity
File: contracts/Permission.sol

9:     function isAllowed(address) external view returns (bool) {

13:     function isPermissionedAccessEnabled() external view returns (bool) {

```

```solidity
File: contracts/PriceFeedContract.sol

12:     uint256 public thresholdForNextUpdate;

41:         external

56:     ) external override onlyRedbellyOrPriceFeedAggregatorContract {

64:     function decimals() public view virtual override returns (uint8) {

72:     ) external override onlyRedbelly {

```

```solidity
File: contracts/RBAC.sol

6:     bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");

7:     bytes32 public constant REDBELLY_ROLE = keccak256("REDBELLY_ROLE");

8:     bytes32 public constant IDP_ROLE = keccak256("IDP_ROLE");

9:     bytes32 public constant REDBELLY_NODE_OPERATOR_ROLE =

11:     bytes32 public constant GOVERNOR_ROLE = keccak256("GOVERNOR_ROLE");

```

```solidity
File: contracts/Reconfiguration.sol

13:     function getReconfigurationBuffer() public view virtual returns (uint256) {

```

```solidity
File: contracts/interfaces/IBootstrapContractsRegistry.sol

12:     ) external view returns (address);

```

```solidity
File: contracts/interfaces/ICornerstone.sol

10:     function getAllEmployees() external view returns (Employee[] memory);

14:     ) external view returns (Employee memory);

18:     ) external view returns (Employee memory);

22:     ) external view returns (string memory);

```

```solidity
File: contracts/interfaces/INetworkConfiguration.sol

7:     function getGovernors() external view returns (address[] memory);

10:     ) external view returns (NodeConfigStorage.NodeParameters[] memory);

11:     function isBootNode(address _nodeAddress) external view returns (bool);

12:     function getActiveCandidateNodes() external view returns (address[] memory);

```

```solidity
File: contracts/interfaces/IPermission.sol

8:     function isAllowed(address _address) external view returns (bool);

10:     function isPermissionedAccessEnabled() external view returns (bool);

```

```solidity
File: contracts/interfaces/IPriceFeed.sol

11:     function getLatestPrice() external view returns (int256, uint256, bool);

19:     function decimals() external view returns (uint8);

```

```solidity
File: contracts/interfaces/IReconfiguration.sol

5:     function getReconfigurationBuffer() external view returns (uint256);

```

```solidity
File: libraries/NodeConfigStorage.sol

146:     ) public view returns (bool) {

154:     ) public view returns (NodeParameters memory) {

165:     ) public view returns (NodeParameters memory) {

178:     ) public view returns (NodeParameters[] memory) {

189:     ) public view returns (NodeParameters[] memory) {

203:     ) public view returns (address) {

210:     ) public view returns (bool, uint256) {

217:     function getSize(NodeConfig storage self) public view returns (uint256) {

```

```solidity
File: libraries/NodeRecordStorage.sol

55:     ) public view returns (bool) {

62:     ) public view returns (address[] memory) {

73:     ) public view returns (address) {

80:     ) public view returns (bool, uint256) {

87:     function getSize(NodeRecord storage self) public view returns (uint256) {

```

</details> 
 

