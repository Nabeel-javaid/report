# Report


## Medium Issues


| |Issue|Instances|
|-|:-|:-:|
| [M-1](#M-1) | Centralization Risk for trusted owners | 45 |
| [M-2](#M-2) | No check for chainlink stale price | 3 |
| [M-3](#M-3) | No check for minimum Or maximum answer circuit breaker | 3 |
| [M-4](#M-4) | Unsafe use of ERC20 transferFrom() | 5 |

## Low Issues


| |Issue|Instances|
|-|:-|:-:|
| [L-1](#L-1) | complex casting | 54 |
| [L-2](#L-2) | Functions calling contracts/addresses with transfer hooks are missing reentrancy guards | 5 |
| [L-3](#L-3) | The remaining ETH may be locked in the contract after call | 1 |
| [L-4](#L-4) | External call recipient may consume all transaction gas | 1 |
| [L-5](#L-5) | Tokens may be minted to address(0x0) | 2 |
| [L-6](#L-6) | constructor/initialize function lacks parameter validation | 1 |
| [L-7](#L-7) | Division by zero not prevented | 9 |
| [L-8](#L-8) | Empty function body | 3 |
| [L-9](#L-9) | Initializers could be front-run | 1 |
| [L-10](#L-10) | Unsafe solidity low-level call can cause gas grief attack | 1 |
| [L-11](#L-11) | Missing contract existence checks before low-level calls | 1 |
| [L-12](#L-12) | Use Ownable2Step instead of Ownable | 19 |
| [L-13](#L-13) | Owner can renounce Ownership   | 19 |
| [L-14](#L-14) | Loss of precision | 9 |
| [L-15](#L-15) | State variables not capped at reasonable values | 74 |
| [L-16](#L-16) | Some tokens may revert when large transfers are made | 8 |
| [L-17](#L-17) | Unsafe casting | 10 |
| [L-18](#L-18) | Unsafe ERC20 operation(s) | 14 |

## Non Critical Issues


| |Issue|Instances|
|-|:-|:-:|
| [NC-1](#NC-1) | Contracts should have full test coverage | 38 |
| [NC-2](#NC-2) | Consider adding formal verification proofs | 38 |
| [NC-3](#NC-3) | Large or complicated code bases should implement invariant tests | 38 |
| [NC-4](#NC-4) | assert() should be replaced with require() or revert() | 4 |
| [NC-5](#NC-5) | Custom error has no error details | 19 |
| [NC-6](#NC-6) | NatSpec: Interface declarations should have NatSpec descriptions | 10 |
| [NC-7](#NC-7) | NatSpec: Library declarations should have NatSpec descriptions | 6 |
| [NC-8](#NC-8) | Variables without visibility specifier | 53 |
| [NC-9](#NC-9) | Array is push()ed but not pop()ed | 1 |
| [NC-10](#NC-10) | Assembly blocks should have extensive comments | 27 |
| [NC-11](#NC-11) | Constants in comparisons should appear on the left side | 151 |
| [NC-12](#NC-12) | constants should be defined rather than using magic numbers | 63 |
| [NC-13](#NC-13) | Contract declarations should have NatSpec @author annotations | 27 |
| [NC-14](#NC-14) | Contract declarations should have NatSpec @Title annotations | 27 |
| [NC-15](#NC-15) | NatSpec: Contract declarations should have @dev tags | 27 |
| [NC-16](#NC-16) | NatSpec: Contract declarations should have NatSpec descriptions | 27 |
| [NC-17](#NC-17) | NatSpec: Contract declarations should have @notice tags | 27 |
| [NC-18](#NC-18) | Consider using delete rather than assigning zero to clear value | 17 |
| [NC-19](#NC-19) | Consider adding a block/deny-list" | 27 |
| [NC-20](#NC-20) | Consider adding emergency-stop functionality | 27 |
| [NC-21](#NC-21) | Error declarations should have NatSpec descriptions | 73 |
| [NC-22](#NC-22) | Custom error has no error details | 73 |
| [NC-23](#NC-23) | Events are missing sender information | 19 |
| [NC-24](#NC-24) | NatSpec: Event declarations should have NatSpec descriptions | 25 |
| [NC-25](#NC-25) | contracts should use fixed compiler versions | 3 |
| [NC-26](#NC-26) | NatSpec: function declarations should have NatSpec descriptions | 230 |
| [NC-27](#NC-27) | If-statement can be converted to a ternary | 75 |
| [NC-28](#NC-28) | Variable names for immutables should use CONSTANT_CASE | 83 |
| [NC-29](#NC-29) | Use of override is unnecessary | 17 |
| [NC-30](#NC-30) | Consider using descriptive constants when using 0 in the code | 10 |
| [NC-31](#NC-31) | Non-external/public variable names should begin with an underscore | 14 |
| [NC-32](#NC-32) | Return values of `approve()` not checked | 8 |
| [NC-33](#NC-33) | Custom error has no error details | 36 |
| [NC-34](#NC-34) | Setters should prevent re-setting of the same value | 5 |
| [NC-35](#NC-35) | Use the latest solidity version for deployment   | 38 |
| [NC-36](#NC-36) | Consider bounding input array length | 1 |
| [NC-37](#NC-37) | Overflows in unchecked blocks | 14 |
| [NC-38](#NC-38) | Constants should be defined rather than using magic numbers | 32 |
| [NC-39](#NC-39) | Consider using `SafeTransferLib.safeTransferETH()` or `Address.sendValue()` for clearer semantic meaning | 1 |
| [NC-40](#NC-40) | Variables need not be initialized to zero | 16 |
| [NC-41](#NC-41) | Consider moving msg.sender checks to modifiers | 60 |
| [NC-42](#NC-42) | Owner can renounce while system is paused | 2 |
| [NC-43](#NC-43) | Dont use _msgSender() if not supporting EIP-2771 | 18 |
| [NC-44](#NC-44) | Array indices should be referenced via enums rather than numeric literals | 29 |
| [NC-45](#NC-45) | <array>.length should not be looked up in every loop of a for-loop | 1 |
| [NC-46](#NC-46) | Use assembly to emit events, in order to save gas | 32 |
| [NC-47](#NC-47) | Don't initialize variables with default value | 16 |

## Gas Optimizations


| |Issue|Instances|
|-|:-|:-:|
| [GAS-1](#GAS-1) | Enable IR-based code generation | 38 |
| [GAS-2](#GAS-2) | Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18) | 4 |
| [GAS-3](#GAS-3) | Nesting if-statements is cheaper than using && | 11 |
| [GAS-4](#GAS-4) | Consider using = instead of += and -= for gas efficiency | 20 |
| [GAS-5](#GAS-5) | Use >= instead of > for gas efficiency | 37 |
| [GAS-6](#GAS-6) | Using bools for storage incurs overhead | 2 |
| [GAS-7](#GAS-7) | Cache array length outside of loop | 1 |
| [GAS-8](#GAS-8) | Consider using assembly for simple zero checks to save gas | 26 |
| [GAS-9](#GAS-9) | Expressions for constant values should use immutable rather than constant | 48 |
| [GAS-10](#GAS-10) | Constructors can be marked payable | 25 |
| [GAS-11](#GAS-11) | Use Custom Errors | 3 |
| [GAS-12](#GAS-12) | Initializers can be marked as payable to save deployment gas | 1 |
| [GAS-13](#GAS-13) | Use assembly for small keccak256 hashes, in order to save gas | 2 |
| [GAS-14](#GAS-14) | Avoid fetching a low-level calls return data by using assembly | 1 |
| [GAS-15](#GAS-15) | Reduce gas usage by moving to Solidity 0.8.19 or later | 38 |
| [GAS-16](#GAS-16) | Functions guaranteed to revert when called by normal users can be marked `payable` | 21 |
| [GAS-17](#GAS-17) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 1 |
| [GAS-18](#GAS-18) | Using `private` rather than `public` for constants, saves gas | 5 |
| [GAS-19](#GAS-19) | Use shift Right/Left instead of division/multiplication if possible | 4 |
| [GAS-20](#GAS-20) | Splitting require() statements that use && saves gas | 1 |
| [GAS-21](#GAS-21) | Structs can be packed into fewer storage slots | 10 |
| [GAS-22](#GAS-22) | Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency | 14 |
| [GAS-23](#GAS-23) | Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead | 125 |
| [GAS-24](#GAS-24) | Use != 0 instead of > for unsigned integer comparison | 37 |
| [GAS-25](#GAS-25) | Optimize names to save gas | 188 |

##################################################################### 
 
 DETAILED REPORT:: 


##################################################################### 


## Medium Issues


 ### <a name="M-1"></a>[M-1]
 ### Centralization Risk for trusted owners

#### Impact:
Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (45)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

199:     function initializeIlk(address ilkAddress) external onlyRole(ION) {

229:     function updateIlkSpot(uint8 ilkIndex, SpotOracle newSpot) external onlyRole(ION) {

245:     function updateIlkDebtCeiling(uint8 ilkIndex, uint256 newCeiling) external onlyRole(ION) {

262:     function updateIlkDust(uint8 ilkIndex, uint256 newDust) external onlyRole(ION) {

277:     function updateSupplyCap(uint256 newSupplyCap) external onlyRole(ION) {

291:     function updateInterestRateModule(InterestRate _interestRateModule) external onlyRole(ION) {

309:     function updateWhitelist(Whitelist _whitelist) external onlyRole(ION) {

322:     function pause() external onlyRole(ION) {

332:     function unpause() external onlyRole(ION) {

821:         onlyRole(LIQUIDATOR_ROLE)

854:     function mintAndBurnGem(uint8 ilkIndex, address usr, int256 wad) external onlyRole(GEM_JOIN_ROLE) {

```

```solidity
File: Whitelist.sol

4: import { Ownable2Step } from "@openzeppelin/contracts/access/Ownable2Step.sol";

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

25: contract Whitelist is Ownable2Step {

43:     constructor(bytes32[] memory _borrowersRoots, bytes32 _lendersRoot) Ownable(msg.sender) {

55:     function updateBorrowersRoot(uint8 ilkIndex, bytes32 _borrowersRoot) external onlyOwner {

63:     function updateLendersRoot(bytes32 _lendersRoot) external onlyOwner {

71:     function approveProtocolWhitelist(address addr) external onlyOwner {

79:     function revokeProtocolWhitelist(address addr) external onlyOwner {

```

```solidity
File: YieldOracle.sol

8: import { Ownable2Step } from "@openzeppelin/contracts/access/Ownable2Step.sol";

9: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

57: contract YieldOracle is IYieldOracle, Ownable2Step {

99:         Ownable(owner)

126:     function updateIonPool(IonPool _ionPool) external onlyOwner {

```

```solidity
File: admin/ProxyAdmin.sol

8: import { Ownable2Step } from "@openzeppelin/contracts/access/Ownable2Step.sol";

9: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

19: contract ProxyAdmin is Ownable2Step {

33:     constructor(address initialOwner) Ownable(initialOwner) { }

```

```solidity
File: join/GemJoin.sol

7: import { Ownable2Step } from "@openzeppelin/contracts/access/Ownable2Step.sol";

8: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

25: contract GemJoin is Ownable2Step, Pausable {

44:     constructor(IonPool _pool, IERC20 _gem, uint8 _ilkIndex, address owner) Ownable(owner) {

57:     function pause() external onlyOwner {

65:     function unpause() external onlyOwner {

```

```solidity
File: oracles/reserve/ReserveFeed.sol

4: import { Ownable2Step } from "@openzeppelin/contracts/access/Ownable2Step.sol";

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

7: contract ReserveFeed is Ownable2Step {

10:     constructor(address owner) Ownable(owner) { }

12:     function setExchangeRate(uint8 _ilkIndex, uint256 _exchangeRate) external onlyOwner {

```

```solidity
File: periphery/IonRegistry.sol

6: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

8: contract IonRegistry is Ownable {

12:     constructor(GemJoin[] memory _gemJoins, address[] memory _depositContracts, address _owner) Ownable(_owner) {

19:     function setGemJoin(uint8 ilkIndex, GemJoin gemJoin) external onlyOwner {

23:     function setDepositContract(uint8 ilkIndex, address depositContract) external onlyOwner {

```

```solidity
File: reward/RewardModule.sol

230:     function updateTreasury(address newTreasury) external onlyRole(ION) {

```

</details> 
 


 ### <a name="M-2"></a>[M-2]
 ### No check for chainlink stale price
latestRoundData may return stale data, and there arent any checks to ensure that this doesnt happen. This can be caused by any issues with Chainlink, such as oracle consensus problems or chain congestion, which may result in this contract relying on outdated data.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: oracles/spot/EthXSpotOracle.sol

58:         (, int256 answer,,,) = REDSTONE_ETHX_PRICE_FEED.latestRoundData();

63:         (, int256 _usdPerEth,,,) = USD_PER_ETH_CHAINLINK.latestRoundData(); // price of stETH denominated in ETH

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

52:         (, int256 _ethPerStEth,,,) = ST_ETH_TO_ETH_CHAINLINK.latestRoundData(); // price of stETH denominated in ETH

```

</details> 
 


 ### <a name="M-3"></a>[M-3]
 ### No check for minimum Or maximum answer circuit breaker
Chainlink aggregators have a built-in circuit breaker if the price of an asset goes outside of a predetermined price band. The result is that if an asset experiences a huge drop in value (i.e. LUNA crash) the price of the oracle will continue to return the minPrice instead of the actual price of the asset. This would allow users to continue borrowing with the asset but at the wrong price. This is exactly what happened to Venus on BSC when LUNA crashed.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: oracles/spot/EthXSpotOracle.sol

58:         (, int256 answer,,,) = REDSTONE_ETHX_PRICE_FEED.latestRoundData();

63:         (, int256 _usdPerEth,,,) = USD_PER_ETH_CHAINLINK.latestRoundData(); // price of stETH denominated in ETH

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

52:         (, int256 _ethPerStEth,,,) = ST_ETH_TO_ETH_CHAINLINK.latestRoundData(); // price of stETH denominated in ETH

```

</details> 
 


 ### <a name="M-4"></a>[M-4]
 ### Unsafe use of ERC20 transferFrom()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transferFrom() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransferFrom() from OpenZeppelin instead.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: flash/handlers/WstEthHandler.sol

77:         STETH.transferFrom(msg.sender, address(this), stEthAmount);

92:             STETH.transferFrom(msg.sender, address(this), initialDeposit);

111:             STETH.transferFrom(msg.sender, address(this), initialDeposit);

133:             STETH.transferFrom(msg.sender, address(this), initialDeposit);

```

```solidity
File: periphery/IonZapper.sol

108:         STETH.transferFrom(msg.sender, address(this), amountStEth);

```

</details> 
 


## Low Issues


 ### <a name="L-1"></a>[L-1]
 ### complex casting
Consider whether the number of casts is really necessary, or whether using a different type would be more appropriate. Alternatively, add comments to explain in detail why the casts are necessary, and any implicit reasons why the cast does not introduce an overflow.

*Instances (54)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

201:             uint256(ilkData.adjustedProfitMargin) << ADJUSTED_PROFIT_MARGIN_SHIFT

202:                 | uint256(ilkData.minimumKinkRate) << MINIMUM_KINK_RATE_SHIFT

206:             uint256(ilkData.reserveFactor) << RESERVE_FACTOR_SHIFT

207:                 | uint256(ilkData.adjustedBaseRate) << ADJUSTED_BASE_RATE_SHIFT

208:                 | uint256(ilkData.minimumBaseRate) << MINIMUM_BASE_RATE_SHIFT

209:                 | uint256(ilkData.optimalUtilizationRate) << OPTIMAL_UTILIZATION_SHIFT

210:                 | uint256(ilkData.distributionFactor) << DISTRIBUTION_FACTOR_SHIFT

214:             uint256(ilkData.adjustedAboveKinkSlope) << ADJUSTED_ABOVE_KINK_SLOPE_SHIFT

215:                 | uint256(ilkData.minimumAboveKinkSlope) << MINIMUM_ABOVE_KINK_SLOPE_SHIFT

270:         uint16 reserveFactor = uint16((packedConfig_b & RESERVE_FACTOR_MASK) >> RESERVE_FACTOR_SHIFT);

273:         uint16 optimalUtilizationRate = uint16((packedConfig_b & OPTIMAL_UTILIZATION_MASK) >> OPTIMAL_UTILIZATION_SHIFT);

274:         uint16 distributionFactor = uint16((packedConfig_b & DISTRIBUTION_FACTOR_MASK) >> DISTRIBUTION_FACTOR_SHIFT);

```

```solidity
File: IonPool.sol

208:         if (ilksLength >= uint256(type(uint8).max) + 1) revert MaxIlksReached();

212:         uint8 ilkIndex = uint8(ilksLength);

561:         uint256 _supplyFactor = _mint({ user: user, senderOfUnderlying: _msgSender(), amount: amount });

699:                     uint256(_totalNormalizedDebt) * uint256(ilkRate) > $.ilks[ilkIndex].debtCeiling

699:                     uint256(_totalNormalizedDebt) * uint256(ilkRate) > $.ilks[ilkIndex].debtCeiling

702:                 revert CeilingExceeded(uint256(_totalNormalizedDebt) * uint256(ilkRate), $.ilks[ilkIndex].debtCeiling);

702:                 revert CeilingExceeded(uint256(_totalNormalizedDebt) * uint256(ilkRate), $.ilks[ilkIndex].debtCeiling);

784:             uint256 amountUint = uint256(-amount);

792:             uint256 amountWad = uint256(amount) / RAY;

833:         ilk.totalNormalizedDebt = _add(uint256(ilk.totalNormalizedDebt), changeInNormalizedDebt).toUint104();

836:         int256 changeInDebt = int256(uint256(ilkRate)) * changeInNormalizedDebt;

894:         bytes32 addressInBytes32 = bytes32(uint256(uint160(ilkAddress)));

898:         return uint8($.ilkAddresses._inner._positions[addressInBytes32] - 1);

1137:             z = x + uint256(y);

1146:             z = x - uint256(y);

```

```solidity
File: Liquidation.sol

198:         uint256 exchangeRate = uint256(ReserveOracle(configs.reserveOracle).currentExchangeRate()).scaleUpToRay(18);

335:                 ilkIndex, vault, PROTOCOL, PROTOCOL, -int256(liquidateArgs.gemOut), -int256(liquidateArgs.dart)

335:                 ilkIndex, vault, PROTOCOL, PROTOCOL, -int256(liquidateArgs.gemOut), -int256(liquidateArgs.dart)

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

346:         return uint256(VAULT.queryBatchSwap(IVault.SwapKind.GIVEN_OUT, swapSteps, assets, fundManagement)[assetInIndex]);

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

236:             ? (uint256(amount0Delta), uint256(-amount1Delta))

236:             ? (uint256(amount0Delta), uint256(-amount1Delta))

237:             : (uint256(amount1Delta), uint256(-amount0Delta));

237:             : (uint256(amount1Delta), uint256(-amount0Delta));

276:             amountToPay = uint256(amount0Delta);

286:             amountToPay = uint256(amount1Delta);

```

```solidity
File: join/GemJoin.sol

76:         if (int256(amount) < 0) revert Int256Overflow();

80:         POOL.mintAndBurnGem(ILK_INDEX, user, int256(amount));

91:         if (int256(amount) < 0) revert Int256Overflow();

95:         POOL.mintAndBurnGem(ILK_INDEX, msg.sender, -int256(amount));

```

```solidity
File: libraries/uniswap/TickMath.sol

25:         uint256 absTick = tick < 0 ? uint256(-int256(tick)) : uint256(int256(tick));

25:         uint256 absTick = tick < 0 ? uint256(-int256(tick)) : uint256(int256(tick));

26:         require(absTick <= uint256(uint24(MAX_TICK)), "T");

65:         uint256 ratio = uint256(sqrtPriceX96) << 32;

113:         int256 log_2 = (int256(msb) - 128) << 64;

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

37:         arithmeticMeanTick = int24(tickCumulativesDelta) / int24(int32(secondsAgo));

43:         if (tickCumulativesDelta < 0 && (tickCumulativesDelta % int56(int32(secondsAgo)) != 0)) arithmeticMeanTick--;

47:         harmonicMeanLiquidity = uint128(secondsAgoX160 / (uint192(secondsPerLiquidityCumulativesDelta) << 32));

```

```solidity
File: oracles/reserve/ReserveOracle.sol

107:             val = ((feed0ExchangeRate + feed1ExchangeRate) / uint256(QUORUM));

112:             val = ((feed0ExchangeRate + feed1ExchangeRate + feed2ExchangeRate) / uint256(QUORUM));

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

60:         uint256 usdPerEthX = uint256(answer).scaleUpToWad(REDSTONE_DECIMALS);

64:         uint256 usdPerEth = uint256(_usdPerEth).scaleUpToWad(CHAINLINK_DECIMALS); // price of stETH denominated in ETH

```

```solidity
File: reward/RewardModule.sol

169:     function _mint(address user, address senderOfUnderlying, uint256 amount) internal returns (uint256) {

```

</details> 
 


 ### <a name="L-2"></a>[L-2]
 ### Functions calling contracts/addresses with transfer hooks are missing reentrancy guards
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks will open the users of this protocol up to [read-only reentrancies](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) with no way to protect against it, except by block-listing the whole protocol.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: flash/handlers/WstEthHandler.sol

77:         STETH.transferFrom(msg.sender, address(this), stEthAmount);

92:             STETH.transferFrom(msg.sender, address(this), initialDeposit);

111:             STETH.transferFrom(msg.sender, address(this), initialDeposit);

133:             STETH.transferFrom(msg.sender, address(this), initialDeposit);

```

```solidity
File: periphery/IonZapper.sol

108:         STETH.transferFrom(msg.sender, address(this), amountStEth);

```

</details> 
 


 ### <a name="L-3"></a>[L-3]
 ### The remaining ETH may be locked in the contract after call
After calling an external contract and forwards some ETH value, the contract balance should be checked. If there is excess eth left over due to a failed call, or more eth being delivered than needed, or any other reason, this eth must be refunded to the user or handled appropriately, otherwise the eth may be frozen in the contract forever.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: libraries/LidoLibrary.sol

46:         (bool success,) = address(wstEth).call{ value: ethAmount }("");

```

</details> 
 


 ### <a name="L-4"></a>[L-4]
 ### External call recipient may consume all transaction gas
There is no limit specified on the amount of gas used, so the recipient can use up all of the transactions gas, causing it to revert. Use addr.call{gas: <amount>}("") or this https://github.com/nomad-xyz/ExcessivelySafeCall library instead.  

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: libraries/LidoLibrary.sol

46:         (bool success,) = address(wstEth).call{ value: ethAmount }("");

```

</details> 
 


 ### <a name="L-5"></a>[L-5]
 ### Tokens may be minted to address(0x0)
Neither the  functions, nor _mint() prevent minting to address(0x0)  

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

561:         uint256 _supplyFactor = _mint({ user: user, senderOfUnderlying: _msgSender(), amount: amount });

```

```solidity
File: reward/RewardModule.sol

169:     function _mint(address user, address senderOfUnderlying, uint256 amount) internal returns (uint256) {

```

</details> 
 


 ### <a name="L-6"></a>[L-6]
 ### constructor/initialize function lacks parameter validation
Constructors and initialization functions play a critical role in contracts by setting important initial states when the contract is first deployed before the system starts. The parameters passed to the constructor and initialization functions directly affect the behavior of the contract / protocol. If incorrect parameters are provided, the system may fail to run, behave abnormally, be unstable, or lack security. Therefore, it's crucial to carefully check each parameter in the constructor and initialization functions. If an exception is found, the transaction should be rolled back.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

164:     function initialize(

```

</details> 
 


 ### <a name="L-7"></a>[L-7]
 ### Division by zero not prevented
The divisions below take an input parameter that has no zero-value checks, which can cause the functions reverting if zero is passed.  

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

311:         uint256 collateralApyRayInSeconds = YIELD_ORACLE.apys(ilkIndex).scaleUpToRay(8) / SECONDS_IN_A_YEAR;

```

```solidity
File: IonPool.sol

785:             uint256 amountWad = amountUint / RAY;

792:             uint256 amountWad = uint256(amount) / RAY;

```

```solidity
File: Liquidation.sol

347:             liquidateArgs.dart = liquidateArgs.repay / rate; // [rad] / [ray] = [wad]

```

```solidity
File: YieldOracle.sol

33: uint256 constant PERIODS = 365 * (10 ** APY_PRECISION) / LOOK_BACK; // 52.142... eAPY_PRECISION

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

207:         repayAmount = amountRad / RAY;

```

```solidity
File: libraries/uniswap/TickMath.sol

49:         if (tick > 0) ratio = type(uint256).max / ratio;

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

57:         ethPerSwEth = WAD * WAD / swEthPerEth; // [wad] * [wad] / [wad]

```

```solidity
File: periphery/IonZapper.sol

96:         uint256 normalizedAmountToRepay = amount * RAY / currentIlkRate;

```

</details> 
 


 ### <a name="L-8"></a>[L-8]
 ### Empty function body
Consider adding a comment about why the function body is empty

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: admin/ProxyAdmin.sol

33:     constructor(address initialOwner) Ownable(initialOwner) { }

```

```solidity
File: flash/handlers/SwEthHandler.sol

42:     { }

```

```solidity
File: oracles/reserve/ReserveFeed.sol

10:     constructor(address owner) Ownable(owner) { }

```

</details> 
 


 ### <a name="L-9"></a>[L-9]
 ### Initializers could be front-run
Initializers could be front-run, allowing an attacker to either set their own values, take ownership of the contract, and in the best case forcing a re-deployment

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

164:     function initialize(

```

</details> 
 


 ### <a name="L-10"></a>[L-10]
 ### Unsafe solidity low-level call can cause gas grief attack
Using the low-level calls of a solidity address can leave the contract open to gas grief attacks. These attacks occur when the called contract returns a large amount of data. So when calling an external contract, it is necessary to check the length of the return data before reading/copying it (using returndatasize()).

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: libraries/LidoLibrary.sol

46:         (bool success,) = address(wstEth).call{ value: ethAmount }("");

```

</details> 
 


 ### <a name="L-11"></a>[L-11]
 ### Missing contract existence checks before low-level calls
Low-level calls return success if there is no code present at the specified address. In addition to the zero-address checks, add a check to verify that `<address>.code.length > 0`.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: libraries/LidoLibrary.sol

46:         (bool success,) = address(wstEth).call{ value: ethAmount }("");

```

</details> 
 


 ### <a name="L-12"></a>[L-12]
 ### Use Ownable2Step instead of Ownable
Add a description of why Ownable2Step is recommended.

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Whitelist.sol

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

43:     constructor(bytes32[] memory _borrowersRoots, bytes32 _lendersRoot) Ownable(msg.sender) {

```

```solidity
File: YieldOracle.sol

9: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

9: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

99:         Ownable(owner)

```

```solidity
File: admin/ProxyAdmin.sol

9: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

9: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

33:     constructor(address initialOwner) Ownable(initialOwner) { }

```

```solidity
File: join/GemJoin.sol

8: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

8: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

44:     constructor(IonPool _pool, IERC20 _gem, uint8 _ilkIndex, address owner) Ownable(owner) {

```

```solidity
File: oracles/reserve/ReserveFeed.sol

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

10:     constructor(address owner) Ownable(owner) { }

```

```solidity
File: periphery/IonRegistry.sol

6: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

6: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

8: contract IonRegistry is Ownable {

12:     constructor(GemJoin[] memory _gemJoins, address[] memory _depositContracts, address _owner) Ownable(_owner) {

```

</details> 
 


 ### <a name="L-13"></a>[L-13]
 ### Owner can renounce Ownership  
Each of the following contracts implements or inherits the renounceOwnership() function. This can represent a certain risk if the ownership is renounced for any other reason than by design. Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Whitelist.sol

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

43:     constructor(bytes32[] memory _borrowersRoots, bytes32 _lendersRoot) Ownable(msg.sender) {

```

```solidity
File: YieldOracle.sol

9: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

9: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

99:         Ownable(owner)

```

```solidity
File: admin/ProxyAdmin.sol

9: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

9: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

33:     constructor(address initialOwner) Ownable(initialOwner) { }

```

```solidity
File: join/GemJoin.sol

8: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

8: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

44:     constructor(IonPool _pool, IERC20 _gem, uint8 _ilkIndex, address owner) Ownable(owner) {

```

```solidity
File: oracles/reserve/ReserveFeed.sol

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

10:     constructor(address owner) Ownable(owner) { }

```

```solidity
File: periphery/IonRegistry.sol

6: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

6: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

8: contract IonRegistry is Ownable {

12:     constructor(GemJoin[] memory _gemJoins, address[] memory _depositContracts, address _owner) Ownable(_owner) {

```

</details> 
 


 ### <a name="L-14"></a>[L-14]
 ### Loss of precision
Division by large numbers or variables may result in the result being zero, due to Solidity not supporting fractions.

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

311:         uint256 collateralApyRayInSeconds = YIELD_ORACLE.apys(ilkIndex).scaleUpToRay(8) / SECONDS_IN_A_YEAR;

```

```solidity
File: IonPool.sol

785:             uint256 amountWad = amountUint / RAY;

792:             uint256 amountWad = uint256(amount) / RAY;

```

```solidity
File: Liquidation.sol

347:             liquidateArgs.dart = liquidateArgs.repay / rate; // [rad] / [ray] = [wad]

```

```solidity
File: YieldOracle.sol

33: uint256 constant PERIODS = 365 * (10 ** APY_PRECISION) / LOOK_BACK; // 52.142... eAPY_PRECISION

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

207:         repayAmount = amountRad / RAY;

```

```solidity
File: libraries/uniswap/TickMath.sol

49:         if (tick > 0) ratio = type(uint256).max / ratio;

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

57:         ethPerSwEth = WAD * WAD / swEthPerEth; // [wad] * [wad] / [wad]

```

```solidity
File: periphery/IonZapper.sol

96:         uint256 normalizedAmountToRepay = amount * RAY / currentIlkRate;

```

</details> 
 


 ### <a name="L-15"></a>[L-15]
 ### State variables not capped at reasonable values
Consider adding minimum/maximum value checks to ensure that the state variables below can never be used to excessively harm users, including via griefing

*Instances (74)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

11:     uint96 adjustedProfitMargin; // 27 decimals

12:     uint96 minimumKinkRate; // 27 decimals

15:     uint16 reserveFactor; // 4 decimals

16:     uint96 adjustedBaseRate; // 27 decimals

17:     uint96 minimumBaseRate; // 27 decimals

18:     uint16 optimalUtilizationRate; // 4 decimals

19:     uint16 distributionFactor; // 4 decimals

22:     uint96 adjustedAboveKinkSlope; // 27 decimals

23:     uint96 minimumAboveKinkSlope; // 27 decimals

227: 

229:         uint256 packedConfig_b;

230:         uint256 packedConfig_c;

327:         uint256 adjustedBelowKinkSlope;

329:             uint256 slopeNumerator;

```

```solidity
File: IonPool.sol

120:         uint104 totalNormalizedDebt; // Total Normalised Debt     [WAD]

121:         uint104 rate; // Accumulated Rates         [RAY]

122:         uint48 lastRateUpdate; // block.timestamp of last update; overflows in 800_000 years

123:         SpotOracle spot; // Oracle that provides price with safety margin

124:         uint256 debtCeiling; // Debt Ceiling              [RAD]

125:         uint256 dust; // Vault Debt Floor            [RAD]

129:         uint256 collateral; // Locked Collateral  [WAD]

130:         uint256 normalizedDebt; // Normalised Debt    [WAD]

142:         uint256 debt; // Total Debt [RAD]

143:         uint256 weth; // liquidity in pool [WAD]

144:         uint256 wethSupplyCap; // [WAD]

145:         uint256 totalUnbackedDebt; // Total Unbacked WETH  [RAD]

146:         InterestRate interestRateModule;

147:         Whitelist whitelist;

360: 

362:         uint256 totalTreasuryMintAmount;

363:         uint256 totalDebtIncrease;

1103:         return ADDRESS_THIS;

```

```solidity
File: Liquidation.sol

161:         uint256 liquidationThreshold;

162:         uint256 maxDiscount;

163:         address reserveOracle;

260:         uint256 repay;

261:         uint256 gemOut;

262:         uint256 dart;

263:         uint256 fee;

264:         uint256 price;

```

```solidity
File: Whitelist.sol

105:             return true;

132:             return true;

```

```solidity
File: YieldOracle.sol

173:             uint32 newApy;

175:                 uint256 exchangeRateIncrease;

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

92:         return ADMIN;

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

153: 

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

136: 

138:         uint256 amount1ToFlash;

172: 

174:         uint256 amount1ToFlash;

195:         address user;

197:         uint256 initialDeposit;

201:         uint256 maxResultingAdditionalDebtOrCollateralToRemove;

205:         uint256 wethFlashloaned;

209:         uint256 amountToLeverage;

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

71:         address user;

74:         uint256 changeInCollateralOrDebt;

75:         bool zeroForOne;

233: 

273: 

```

```solidity
File: interfaces/ProviderInterfaces.sol

66:     uint256 reportingBlockNumber;

68:     uint256 totalETHBalance;

70:     uint256 totalETHXSupply;

```

```solidity
File: reward/RewardModule.sol

72:         IERC20 underlying;

73:         uint8 decimals;

75:         string name;

76:         string symbol;

77:         address treasury;

78:         uint256 normalizedTotalSupply; // [WAD]

79:         uint256 supplyFactor; // [RAY]

139: 

180: 

308:             return 0;

323:             return 0;

```

</details> 
 


 ### <a name="L-16"></a>[L-16]
 ### Some tokens may revert when large transfers are made
Tokens such as COMP or UNI will revert when an address balance reaches type(uint96).max. Ensure that the calls below can be broken up into smaller batches if necessary.  

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

796:             underlying().safeTransfer(user, amountWad);

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

238:             WETH.safeTransfer(address(VAULT), amounts[0]);

253:             LST_TOKEN.safeTransfer(address(VAULT), tokenAmountReceived);

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

278:             WETH.safeTransfer(msg.sender, wethToRepay);

308:             WETH.safeTransfer(msg.sender, totalRepayment);

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

293:         IERC20(tokenIn).safeTransfer(msg.sender, amountToPay);

```

```solidity
File: join/GemJoin.sol

96:         GEM.safeTransfer(user, amount);

```

```solidity
File: reward/RewardModule.sol

136:         $.underlying.safeTransfer(receiverOfUnderlying, amount);

```

</details> 
 


 ### <a name="L-17"></a>[L-17]
 ### Unsafe casting
Unsafe casting can cause alot of issues especially when a type is downcast to a smaller type, the higher order bits are truncated, effectively applying a modulo to the original value. Without any other checks, this wrapping will lead to unexpected behavior and bugs

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

270:         uint16 reserveFactor = uint16((packedConfig_b & RESERVE_FACTOR_MASK) >> RESERVE_FACTOR_SHIFT);

273:         uint16 optimalUtilizationRate = uint16((packedConfig_b & OPTIMAL_UTILIZATION_MASK) >> OPTIMAL_UTILIZATION_SHIFT);

274:         uint16 distributionFactor = uint16((packedConfig_b & DISTRIBUTION_FACTOR_MASK) >> DISTRIBUTION_FACTOR_SHIFT);

```

```solidity
File: IonPool.sol

212:         uint8 ilkIndex = uint8(ilksLength);

561:         uint256 _supplyFactor = _mint({ user: user, senderOfUnderlying: _msgSender(), amount: amount });

898:         return uint8($.ilkAddresses._inner._positions[addressInBytes32] - 1);

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

37:         arithmeticMeanTick = int24(tickCumulativesDelta) / int24(int32(secondsAgo));

43:         if (tickCumulativesDelta < 0 && (tickCumulativesDelta % int56(int32(secondsAgo)) != 0)) arithmeticMeanTick--;

47:         harmonicMeanLiquidity = uint128(secondsAgoX160 / (uint192(secondsPerLiquidityCumulativesDelta) << 32));

```

```solidity
File: reward/RewardModule.sol

169:     function _mint(address user, address senderOfUnderlying, uint256 amount) internal returns (uint256) {

```

</details> 
 


 ### <a name="L-18"></a>[L-18]
 ### Unsafe ERC20 operation(s)

*Instances (14)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Liquidation.sol

148:         underlying.approve(address(ionPool_), type(uint256).max); // approve ionPool to transfer the UNDERLYING asset

```

```solidity
File: flash/handlers/WstEthHandler.sol

45:         STETH.approve(address(LST_TOKEN), type(uint256).max);

77:         STETH.transferFrom(msg.sender, address(this), stEthAmount);

92:             STETH.transferFrom(msg.sender, address(this), initialDeposit);

111:             STETH.transferFrom(msg.sender, address(this), initialDeposit);

133:             STETH.transferFrom(msg.sender, address(this), initialDeposit);

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

100:         _weth.approve(address(_ionPool), type(uint256).max);

101:         IERC20(ilkAddress).approve(address(_gemJoin), type(uint256).max);

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

57:         IERC20(weth).approve(address(VAULT), type(uint256).max);

58:         IERC20(address(LST_TOKEN)).approve(address(VAULT), type(uint256).max);

```

```solidity
File: periphery/IonZapper.sol

69:         _weth.approve(address(_ionPool), type(uint256).max);

70:         _stEth.approve(address(_wstEth), type(uint256).max);

71:         IERC20(address(_wstEth)).approve(address(_wstEthJoin), type(uint256).max);

108:         STETH.transferFrom(msg.sender, address(this), amountStEth);

```

</details> 
 


## Non Critical Issues


 ### <a name="NC-1"></a>[NC-1]
 ### Contracts should have full test coverage
While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

2: pragma solidity 0.8.21;

```

```solidity
File: IonPool.sol

2: pragma solidity 0.8.21;

```

```solidity
File: Liquidation.sol

2: pragma solidity 0.8.21;

```

```solidity
File: Whitelist.sol

2: pragma solidity 0.8.21;

```

```solidity
File: YieldOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: admin/ProxyAdmin.sol

4: pragma solidity ^0.8.20;

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

4: pragma solidity ^0.8.20;

```

```solidity
File: flash/handlers/EthXHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/SwEthHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/WstEthHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IChainlink.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IReserveFeed.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IWETH9.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IYieldOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/ProviderInterfaces.sol

2: pragma solidity 0.8.21;

```

```solidity
File: join/GemJoin.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/LidoLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/StaderLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/SwellLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/math/WadRayMath.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: libraries/uniswap/TickMath.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/ReserveFeed.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/ReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/SpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: periphery/IonRegistry.sol

2: pragma solidity 0.8.21;

```

```solidity
File: periphery/IonZapper.sol

2: pragma solidity 0.8.21;

```

```solidity
File: reward/RewardModule.sol

2: pragma solidity 0.8.21;

```

</details> 
 


 ### <a name="NC-2"></a>[NC-2]
 ### Consider adding formal verification proofs
Consider using formal verification to mathematically prove that your code does what is intended, and does not have any edge cases with unexpected behavior. The solidity compiler itself has this functionality [built in](https://docs.soliditylang.org/en/latest/smtchecker.html#smtchecker-and-formal-verification)  

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

2: pragma solidity 0.8.21;

```

```solidity
File: IonPool.sol

2: pragma solidity 0.8.21;

```

```solidity
File: Liquidation.sol

2: pragma solidity 0.8.21;

```

```solidity
File: Whitelist.sol

2: pragma solidity 0.8.21;

```

```solidity
File: YieldOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: admin/ProxyAdmin.sol

4: pragma solidity ^0.8.20;

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

4: pragma solidity ^0.8.20;

```

```solidity
File: flash/handlers/EthXHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/SwEthHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/WstEthHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IChainlink.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IReserveFeed.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IWETH9.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IYieldOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/ProviderInterfaces.sol

2: pragma solidity 0.8.21;

```

```solidity
File: join/GemJoin.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/LidoLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/StaderLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/SwellLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/math/WadRayMath.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: libraries/uniswap/TickMath.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/ReserveFeed.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/ReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/SpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: periphery/IonRegistry.sol

2: pragma solidity 0.8.21;

```

```solidity
File: periphery/IonZapper.sol

2: pragma solidity 0.8.21;

```

```solidity
File: reward/RewardModule.sol

2: pragma solidity 0.8.21;

```

</details> 
 


 ### <a name="NC-3"></a>[NC-3]
 ### Large or complicated code bases should implement invariant tests
Large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts, should implement [invariant fuzzing tests](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05). Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold. Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers, with properly and extensively-written invariants, can close this testing gap significantly.  

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

2: pragma solidity 0.8.21;

```

```solidity
File: IonPool.sol

2: pragma solidity 0.8.21;

```

```solidity
File: Liquidation.sol

2: pragma solidity 0.8.21;

```

```solidity
File: Whitelist.sol

2: pragma solidity 0.8.21;

```

```solidity
File: YieldOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: admin/ProxyAdmin.sol

4: pragma solidity ^0.8.20;

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

4: pragma solidity ^0.8.20;

```

```solidity
File: flash/handlers/EthXHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/SwEthHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/WstEthHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IChainlink.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IReserveFeed.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IWETH9.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IYieldOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/ProviderInterfaces.sol

2: pragma solidity 0.8.21;

```

```solidity
File: join/GemJoin.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/LidoLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/StaderLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/SwellLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/math/WadRayMath.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: libraries/uniswap/TickMath.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/ReserveFeed.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/ReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/SpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: periphery/IonRegistry.sol

2: pragma solidity 0.8.21;

```

```solidity
File: periphery/IonZapper.sol

2: pragma solidity 0.8.21;

```

```solidity
File: reward/RewardModule.sol

2: pragma solidity 0.8.21;

```

</details> 
 


 ### <a name="NC-4"></a>[NC-4]
 ### assert() should be replaced with require() or revert()
In versions of Solidity prior to 0.8.0, when encountering an assert all the remaining gas will be consumed. Even after Solidity 0.8.0, the assert function is still not recommended, as described in the [documentation:](https://docs.soliditylang.org/en/v0.8.20/control-structures.html#panic-via-assert-and-error-via-require)

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

233:             assert(collateralFromDeposit + initialDeposit == resultingAdditionalCollateral);

245:             assert(amounts[0] + initialDeposit == resultingAdditionalCollateral);

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

273:             assert(wethSent == flashCallbackData.wethFlashloaned);

```

```solidity
File: periphery/IonRegistry.sol

13:         assert(_gemJoins.length == _depositContracts.length);

```

</details> 
 


 ### <a name="NC-5"></a>[NC-5]
 ### Custom error has no error details

#### Impact:
Defining custom errors without error details can make error messages less informative.

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

94:     error CollateralIndexOutOfBounds();

102:     error InvalidYieldOracleAddress();

```

```solidity
File: IonPool.sol

41:     error ArithmeticError();

45:     error MaxIlksReached();

47:     error InvalidIlkAddress();

49:     error InvalidWhitelist();

```

```solidity
File: Liquidation.sol

37:     error ExchangeRateCannotBeZero();

```

```solidity
File: YieldOracle.sol

65:     error AlreadyUpdated();

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

75:     error ProxyDeniedAdminAccess();

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

43:     error ExternalBalancerFlashloanNotAllowed();

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

30:     error CannotSendEthToContract();

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

36:     error InvalidUniswapPool();

37:     error InvalidZeroLiquidityRegionSwap();

```

```solidity
File: libraries/LidoLibrary.sol

18:     error WstEthDepositFailed();

```

```solidity
File: oracles/spot/SpotOracle.sol

32:     error InvalidReserveOracle();

```

```solidity
File: reward/RewardModule.sol

28:     error InvalidBurnAmount();

33:     error InvalidMintAmount();

35:     error InvalidUnderlyingAddress();

36:     error InvalidTreasuryAddress();

```

</details> 
 


 ### <a name="NC-6"></a>[NC-6]
 ### NatSpec: Interface declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: interfaces/IChainlink.sol

3: 

```

```solidity
File: interfaces/IReserveFeed.sol

9: 

```

```solidity
File: interfaces/IYieldOracle.sol

3: 

```

```solidity
File: interfaces/ProviderInterfaces.sol

3: 

17: 

39: 

53: 

72: 

76: 

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

8: 

```

</details> 
 


 ### <a name="NC-7"></a>[NC-7]
 ### NatSpec: Library declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: libraries/LidoLibrary.sol

15: library LidoLibrary {

```

```solidity
File: libraries/StaderLibrary.sol

15: library StaderLibrary {

```

```solidity
File: libraries/SwellLibrary.sol

14: library SwellLibrary {

```

```solidity
File: libraries/math/WadRayMath.sol

19: library WadRayMath {

```

```solidity
File: libraries/uniswap/TickMath.sol

7: library TickMath {

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

8: library UniswapOracleLibrary {

```

</details> 
 


 ### <a name="NC-8"></a>[NC-8]
 ### Variables without visibility specifier

#### Impact:
Specifying visibility for variables can improve code readability and maintainability.

*Instances (53)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

15:     uint16 reserveFactor; // 4 decimals

18:     uint16 optimalUtilizationRate; // 4 decimals

19:     uint16 distributionFactor; // 4 decimals

228:         uint256 packedConfig_a;

229:         uint256 packedConfig_b;

230:         uint256 packedConfig_c;

327:         uint256 adjustedBelowKinkSlope;

329:             uint256 slopeNumerator;

```

```solidity
File: IonPool.sol

124:         uint256 debtCeiling; // Debt Ceiling              [RAD]

125:         uint256 dust; // Vault Debt Floor            [RAD]

129:         uint256 collateral; // Locked Collateral  [WAD]

130:         uint256 normalizedDebt; // Normalised Debt    [WAD]

142:         uint256 debt; // Total Debt [RAD]

143:         uint256 weth; // liquidity in pool [WAD]

144:         uint256 wethSupplyCap; // [WAD]

145:         uint256 totalUnbackedDebt; // Total Unbacked WETH  [RAD]

361:         uint256 totalSupplyFactorIncrease;

362:         uint256 totalTreasuryMintAmount;

363:         uint256 totalDebtIncrease;

```

```solidity
File: Liquidation.sol

161:         uint256 liquidationThreshold;

162:         uint256 maxDiscount;

163:         address reserveOracle;

260:         uint256 repay;

261:         uint256 gemOut;

262:         uint256 dart;

263:         uint256 fee;

264:         uint256 price;

```

```solidity
File: YieldOracle.sol

173:             uint32 newApy;

175:                 uint256 exchangeRateIncrease;

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

154:         uint256 normalizedAmountToBorrow;

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

137:         uint256 amount0ToFlash;

138:         uint256 amount1ToFlash;

173:         uint256 amount0ToFlash;

174:         uint256 amount1ToFlash;

195:         address user;

197:         uint256 initialDeposit;

201:         uint256 maxResultingAdditionalDebtOrCollateralToRemove;

205:         uint256 wethFlashloaned;

209:         uint256 amountToLeverage;

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

71:         address user;

74:         uint256 changeInCollateralOrDebt;

75:         bool zeroForOne;

234:         uint256 amountOutReceived;

274:         uint256 amountToPay;

```

```solidity
File: interfaces/ProviderInterfaces.sol

66:     uint256 reportingBlockNumber;

68:     uint256 totalETHBalance;

70:     uint256 totalETHXSupply;

```

```solidity
File: reward/RewardModule.sol

73:         uint8 decimals;

75:         string name;

76:         string symbol;

77:         address treasury;

78:         uint256 normalizedTotalSupply; // [WAD]

79:         uint256 supplyFactor; // [RAY]

```

</details> 
 


 ### <a name="NC-9"></a>[NC-9]
 ### Array is push()ed but not pop()ed

#### Impact:
Array entries are added but are never removed. Consider whether this should be the case, or whether there should be a maximum, or whether old entries should be removed.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

214:         $.ilks.push(newIlk);

```

</details> 
 


 ### <a name="NC-10"></a>[NC-10]
 ### Assembly blocks should have extensive comments
Assembly blocks take a lot more time to audit than normal Solidity code, and often have gotchas and side-effects that the Solidity versions of the same code do not. Consider adding more comments explaining what is being done in every step of the assembly code, and describe why assembly is being used instead of Solidity.  

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

155:         assembly {

1163:         assembly {

1196:         assembly {

1202:         assembly {

```

```solidity
File: libraries/uniswap/TickMath.sol

70:         assembly {

75:         assembly {

80:         assembly {

85:         assembly {

90:         assembly {

95:         assembly {

100:         assembly {

105:         assembly {

115:         assembly {

121:         assembly {

127:         assembly {

133:         assembly {

139:         assembly {

145:         assembly {

151:         assembly {

157:         assembly {

163:         assembly {

169:         assembly {

175:         assembly {

181:         assembly {

187:         assembly {

193:         assembly {

```

```solidity
File: reward/RewardModule.sol

91:         assembly {

```

</details> 
 


 ### <a name="NC-11"></a>[NC-11]
 ### Constants in comparisons should appear on the left side

#### Impact:
Placing constants on the left side of comparisons can improve code readability and prevent accidental assignment. Doing so will prevent typo [bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*Instances (151)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

144:         if (ilkDataList.length > MAX_ILKS) revert InvalidIlkDataListLength(ilkDataList.length);

153:             if (ilkDataList[i].minimumKinkRate < ilkDataList[i].minimumBaseRate) {

156:             if (ilkDataList[i].optimalUtilizationRate == 0) {

159:             if (ilkDataList[i].reserveFactor > RAY) {

167:         if (distributionFactorSum != 1e4) revert DistributionFactorsDoNotSumToOne(distributionFactorSum);

196:         if (index >= COLLATERAL_COUNT) return (0, 0, 0);

226:         if (index > COLLATERAL_COUNT - 1) revert CollateralIndexOutOfBounds();

232:         if (index == 0) {

236:         } else if (index == 1) {

240:         } else if (index == 2) {

244:         } else if (index == 3) {

248:         } else if (index == 4) {

252:         } else if (index == 5) {

256:         } else if (index == 6) {

260:         } else if (index == 7) {

319:         if (distributionFactor == 0) {

338:             if (slopeNumerator > collateralApyRayInSeconds) {

349:         if (utilizationRate < optimalUtilizationRateRay) {

353:             if (adjustedBorrowRate < minimumBorrowRate) {

375:             if (adjustedBorrowRate < minimumBorrowRate) {

```

```solidity
File: IonPool.sol

202:         if (ilkAddress == address(0)) revert InvalidIlkAddress();

208:         if (ilksLength >= uint256(type(uint8).max) + 1) revert MaxIlksReached();

375:             if (timestampIncrease > 0) {

425:             if (timestampIncrease > 0) {

473:         if (_totalNormalizedDebt == 0 || block.timestamp == ilk.lastRateUpdate) {

485:         if (borrowRate == 0) return (0, 0, 0, 0, 0);

684:         if (ilkRate == 0) revert IlkNotInitialized(ilkIndex);

696:             if (

706:             if (

714:             if (both(either(changeInNormalizedDebt > 0, changeInCollateral < 0), !isAllowed(u, _msgSender()))) {

719:             if (both(changeInCollateral > 0, !isAllowed(v, _msgSender()))) {

727:             if (both(changeInNormalizedDebt < 0, !isAllowed(w, _msgSender()))) {

732:             if (both(_vault.normalizedDebt != 0, newTotalDebtInVault < $.ilks[ilkIndex].dust)) {

780:         if (amount == 0) return;

783:         if (amount < 0) {

786:             if (amountUint % RAY > 0) ++amountWad;

1139:         if (y < 0 && z > x) revert ArithmeticError();

1140:         if (y > 0 && z < x) revert ArithmeticError();

1148:         if (y > 0 && z > x) revert ArithmeticError();

1149:         if (y < 0 && z < x) revert ArithmeticError();

```

```solidity
File: Liquidation.sol

104:         if (maxDiscountsLength != ilkCount) {

108:         if (_reserveOracles.length != ilkCount) {

113:         if (liquidationThresholdsLength != ilkCount) {

118:             if (_maxDiscounts[i] >= RAY) revert InvalidMaxDiscount(_maxDiscounts[i]);

125:             if (_liquidationThresholds[i] == 0) revert InvalidLiquidationThreshold(_liquidationThresholds[i]);

130:             if (_targetHealth < _liquidationThresholds[i].rayDivUp(RAY - _maxDiscounts[i])) {

138:         if (_targetHealth < RAY) revert InvalidTargetHealth(_targetHealth);

172:         if (ilkIndex == 0) {

176:         } else if (ilkIndex == 1) {

180:         } else if (ilkIndex == 2) {

202:         if (exchangeRate == 0) {

216:         if (healthRatio >= RAY) {

226:         if (repayRad % RAY > 0) ++repay;

292:         if (exchangeRate == 0) {

306:             if (healthRatio >= RAY) {

330:         if (liquidateArgs.repay > normalizedDebt * rate) {

339:         } else if (normalizedDebt * rate - liquidateArgs.repay < POOL.dust(ilkIndex)) {

348:             if (liquidateArgs.repay % rate > 0) ++liquidateArgs.dart; // round up in protocol favor

358:         if (liquidateArgs.repay % RAY > 0) ++transferAmt; // round up in protocol favor

```

```solidity
File: Whitelist.sol

102:         if (root == 0) return true;

129:         if (root == bytes32(0)) return true;

```

```solidity
File: YieldOracle.sol

103:                 if (_historicalExchangeRates[i][j] == 0) revert InvalidExchangeRate(j);

153:         if (lastUpdated + UPDATE_LOCK_LENGTH > block.timestamp) revert AlreadyUpdated();

163:             if (newExchangeRate == 0) revert InvalidExchangeRate(i);

174:             if (newExchangeRate >= previousExchangeRate) {

211:         if (ilkIndex == 0) {

214:         } else if (ilkIndex == 1) {

217:         } else if (ilkIndex == 2) {

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

99:         if (msg.sender == _proxyAdmin()) {

100:             if (msg.sig != ITransparentUpgradeableProxy.upgradeToAndCall.selector) {

```

```solidity
File: flash/handlers/WstEthHandler.sol

91:         if (initialDeposit != 0) {

110:         if (initialDeposit != 0) {

132:         if (initialDeposit != 0) {

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

87:         if (amountToLeverage == 0) {

100:         if (wethRequiredForRepayment > maxResultingDebt) {

162:         if (amountWethToFlashloan == 0) {

176:         if (amountWethToFlashloan > maxResultingDebt) {

220:         if (tokens.length > 1) revert FlashLoanedTooManyTokens(tokens.length);

221:         if (msg.sender != address(VAULT)) revert ReceiveCallerNotVault(msg.sender);

222:         if (flashloanInitiated != 2) revert ExternalBalancerFlashloanNotAllowed();

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

41:         if (deadline <= block.timestamp) revert TransactionDeadlineReached(deadline);

150:         if (amountToBorrow == 0) return;

155:         if (amountToBorrowType == AmountToBorrow.IS_MIN) {

208:         if (amountRad % RAY > 0) ++repayAmount;

258:         if (msg.sender != address(WETH)) revert CannotSendEthToContract();

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

106:         if (amountToLeverage == 0) {

167:         if (debtToRemove == type(uint256).max) {

171:         if (debtToRemove == 0) return;

232:         if (msg.sender != address(FLASHLOAN_POOL)) revert ReceiveCallerNotPool(msg.sender);

245:         if (flashCallbackData.amountToLeverage > 0) {

253:             if (wethToRepay > maxResultingAdditionalDebt) {

291:             if (collateralIn > maxCollateralToRemove) {

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

63:         if (token0 != address(WETH) && token1 != address(WETH)) revert InvalidUniswapPool();

64:         if (token0 == address(WETH) && token1 == address(WETH)) revert InvalidUniswapPool();

134:         if (amountToLeverage == 0) {

155:         if (amountIn > maxResultingAdditionalDebt) {

186:         if (debtToRemove == type(uint256).max) {

190:         if (debtToRemove == 0) return;

200:         if (amountIn > maxCollateralToRemove) revert FlashswapRepaymentTooExpensive(amountIn, maxCollateralToRemove);

222:         if ((sqrtPriceLimitX96 < MIN_SQRT_RATIO || sqrtPriceLimitX96 > MAX_SQRT_RATIO) && sqrtPriceLimitX96 != 0) {

240:         if (amountOutReceived != amountOut) revert OutputAmountNotReceived(amountOutReceived, amountOut);

258:         if (msg.sender != address(UNISWAP_POOL)) revert CallbackOnlyCallableByPool(msg.sender);

261:         if (amount0Delta == 0 && amount1Delta == 0) revert InvalidZeroLiquidityRegionSwap();

275:         if (amount0Delta > 0) {

```

```solidity
File: libraries/math/WadRayMath.sol

214:         if (from >= to) revert NotScalingUp(from, to);

225:         if (from <= to) revert NotScalingDown(from, to);

```

```solidity
File: libraries/uniswap/TickMath.sol

29:         if (absTick & 0x2 != 0) ratio = (ratio * 0xfff97272373d413259a46990580e213a) >> 128;

30:         if (absTick & 0x4 != 0) ratio = (ratio * 0xfff2e50f5f656932ef12357cf3c7fdcc) >> 128;

31:         if (absTick & 0x8 != 0) ratio = (ratio * 0xffe5caca7e10e4e61c3624eaa0941cd0) >> 128;

32:         if (absTick & 0x10 != 0) ratio = (ratio * 0xffcb9843d60f6159c9db58835c926644) >> 128;

33:         if (absTick & 0x20 != 0) ratio = (ratio * 0xff973b41fa98c081472e6896dfb254c0) >> 128;

34:         if (absTick & 0x40 != 0) ratio = (ratio * 0xff2ea16466c96a3843ec78b326b52861) >> 128;

35:         if (absTick & 0x80 != 0) ratio = (ratio * 0xfe5dee046a99a2a811c461f1969c3053) >> 128;

36:         if (absTick & 0x100 != 0) ratio = (ratio * 0xfcbe86c7900a88aedcffc83b479aa3a4) >> 128;

37:         if (absTick & 0x200 != 0) ratio = (ratio * 0xf987a7253ac413176f2b074cf7815e54) >> 128;

38:         if (absTick & 0x400 != 0) ratio = (ratio * 0xf3392b0822b70005940c7a398e4b70f3) >> 128;

39:         if (absTick & 0x800 != 0) ratio = (ratio * 0xe7159475a2c29b7443b29c7fa6e889d9) >> 128;

40:         if (absTick & 0x1000 != 0) ratio = (ratio * 0xd097f3bdfd2022b8845ad8f792aa5825) >> 128;

41:         if (absTick & 0x2000 != 0) ratio = (ratio * 0xa9f746462d870fdf8a65dc1f90e061e5) >> 128;

42:         if (absTick & 0x4000 != 0) ratio = (ratio * 0x70d869a156d2a1b890bb3df62baf32f7) >> 128;

43:         if (absTick & 0x8000 != 0) ratio = (ratio * 0x31be135f97d08fd981231505542fcfa6) >> 128;

44:         if (absTick & 0x10000 != 0) ratio = (ratio * 0x9aa508b5b7a84e1c677de54f3e99bc9) >> 128;

45:         if (absTick & 0x20000 != 0) ratio = (ratio * 0x5d6af8dedb81196699c329225ee604) >> 128;

46:         if (absTick & 0x40000 != 0) ratio = (ratio * 0x2216e584f5fa1ea926041bedfe98) >> 128;

47:         if (absTick & 0x80000 != 0) ratio = (ratio * 0x48a170391f7dc42444e8fa2) >> 128;

49:         if (tick > 0) ratio = type(uint256).max / ratio;

110:         if (msb >= 128) r = ratio >> (msb - 127);

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

43:         if (tickCumulativesDelta < 0 && (tickCumulativesDelta % int56(int32(secondsAgo)) != 0)) arithmeticMeanTick--;

```

```solidity
File: oracles/reserve/ReserveOracle.sol

64:         if (_feeds.length != FEED_COUNT) revert InvalidFeedLength(_feeds.length);

65:         if (_quorum > FEED_COUNT) revert InvalidQuorum(_quorum);

66:         if (_maxChange == 0 || _maxChange > RAY) revert InvalidMaxChange(_maxChange);

100:         if (QUORUM == 0) {

102:         } else if (QUORUM == 1) {

104:         } else if (QUORUM == 2) {

108:         } else if (QUORUM == 3) {

123:         if (min > max) revert InvalidMinMax(min, max);

134:         if (currentExchangeRate == 0) {

148:         if (block.timestamp - lastUpdated < UPDATE_COOLDOWN) revert UpdateCooldown(lastUpdated);

```

```solidity
File: oracles/spot/SpotOracle.sol

40:         if (_ltv > RAY) {

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

41:         if (_secondsAgo == 0) revert InvalidSecondsAgo(_secondsAgo);

```

```solidity
File: reward/RewardModule.sol

106:         if (_underlying == address(0)) revert InvalidUnderlyingAddress();

107:         if (_treasury == address(0)) revert InvalidTreasuryAddress();

133:         if (amountScaled == 0) revert InvalidBurnAmount();

151:         if (account == address(0)) revert InvalidSender(address(0));

154:         if (oldAccountBalance < amount) revert InsufficientBalance(account, oldAccountBalance, amount);

174:         if (amountScaled == 0) revert InvalidMintAmount();

190:         if (account == address(0)) revert InvalidReceiver(address(0));

204:         if (amount == 0) return;

231:         if (newTreasury == address(0)) revert InvalidTreasuryAddress();

307:         if (_normalizedTotalSupply == 0) {

322:         if (_normalizedTotalSupply == 0) {

```

</details> 
 


 ### <a name="NC-12"></a>[NC-12]
 ### constants should be defined rather than using magic numbers
Even [assembly](https://github.com/code-423n4/2022-05-opensea-seaport/blob/9d7ce4d08bf3c3010304a0476a785c70c0e90ae7/contracts/lib/TokenTransferrer.sol#L35-L39) can benefit from using readable constants instead of hex/numeric literals

*Instances (63)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

31: uint256 constant ADJUSTED_PROFIT_MARGIN_MASK =    0x0000000000000000000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF; 

32: uint256 constant MINIMUM_KINK_RATE_MASK =         0x0000000000000000FFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000000;

42: uint256 constant RESERVE_FACTOR_MASK =            0x000000000000000000000000000000000000000000000000000000000000FFFF;

43: uint256 constant ADJUSTED_BASE_RATE_MASK =        0x000000000000000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF0000;

44: uint256 constant MINIMUM_BASE_RATE_MASK =         0x000000000000FFFFFFFFFFFFFFFFFFFFFFFF0000000000000000000000000000;

45: uint256 constant OPTIMAL_UTILIZATION_MASK =       0x00000000FFFF0000000000000000000000000000000000000000000000000000;

46: uint256 constant DISTRIBUTION_FACTOR_MASK =       0x0000FFFF00000000000000000000000000000000000000000000000000000000;

52: uint256 constant ADJUSTED_ABOVE_KINK_SLOPE_MASK =  0x0000000000000000000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF;

53: uint256 constant MINIMUM_ABOVE_KINK_SLOPE_MASK =   0x0000000000000000FFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000000; 

```

```solidity
File: IonPool.sol

152:     bytes32 private constant IonPoolStorageLocation = 0xceba3d526b4d5afd91d1b752bf1fd37917c20a6daf576bcb41dd1c57c1f67e00;

```

```solidity
File: flash/handlers/WstEthHandler.sol

24:     IERC20 constant STETH = IERC20(0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84);

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

13: IVault constant VAULT = IVault(0xBA12222222228d8Ba445958a75a0704d566BF2C8);

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

43:     IVault internal constant VAULT = IVault(0xBA12222222228d8Ba445958a75a0704d566BF2C8);

```

```solidity
File: libraries/uniswap/TickMath.sol

28:         uint256 ratio = absTick & 0x1 != 0 ? 0xfffcb933bd6fad37aa2d162d1a594001 : 0x100000000000000000000000000000000;

28:         uint256 ratio = absTick & 0x1 != 0 ? 0xfffcb933bd6fad37aa2d162d1a594001 : 0x100000000000000000000000000000000;

28:         uint256 ratio = absTick & 0x1 != 0 ? 0xfffcb933bd6fad37aa2d162d1a594001 : 0x100000000000000000000000000000000;

29:         if (absTick & 0x2 != 0) ratio = (ratio * 0xfff97272373d413259a46990580e213a) >> 128;

29:         if (absTick & 0x2 != 0) ratio = (ratio * 0xfff97272373d413259a46990580e213a) >> 128;

30:         if (absTick & 0x4 != 0) ratio = (ratio * 0xfff2e50f5f656932ef12357cf3c7fdcc) >> 128;

30:         if (absTick & 0x4 != 0) ratio = (ratio * 0xfff2e50f5f656932ef12357cf3c7fdcc) >> 128;

31:         if (absTick & 0x8 != 0) ratio = (ratio * 0xffe5caca7e10e4e61c3624eaa0941cd0) >> 128;

31:         if (absTick & 0x8 != 0) ratio = (ratio * 0xffe5caca7e10e4e61c3624eaa0941cd0) >> 128;

32:         if (absTick & 0x10 != 0) ratio = (ratio * 0xffcb9843d60f6159c9db58835c926644) >> 128;

32:         if (absTick & 0x10 != 0) ratio = (ratio * 0xffcb9843d60f6159c9db58835c926644) >> 128;

33:         if (absTick & 0x20 != 0) ratio = (ratio * 0xff973b41fa98c081472e6896dfb254c0) >> 128;

33:         if (absTick & 0x20 != 0) ratio = (ratio * 0xff973b41fa98c081472e6896dfb254c0) >> 128;

34:         if (absTick & 0x40 != 0) ratio = (ratio * 0xff2ea16466c96a3843ec78b326b52861) >> 128;

34:         if (absTick & 0x40 != 0) ratio = (ratio * 0xff2ea16466c96a3843ec78b326b52861) >> 128;

35:         if (absTick & 0x80 != 0) ratio = (ratio * 0xfe5dee046a99a2a811c461f1969c3053) >> 128;

35:         if (absTick & 0x80 != 0) ratio = (ratio * 0xfe5dee046a99a2a811c461f1969c3053) >> 128;

36:         if (absTick & 0x100 != 0) ratio = (ratio * 0xfcbe86c7900a88aedcffc83b479aa3a4) >> 128;

36:         if (absTick & 0x100 != 0) ratio = (ratio * 0xfcbe86c7900a88aedcffc83b479aa3a4) >> 128;

37:         if (absTick & 0x200 != 0) ratio = (ratio * 0xf987a7253ac413176f2b074cf7815e54) >> 128;

37:         if (absTick & 0x200 != 0) ratio = (ratio * 0xf987a7253ac413176f2b074cf7815e54) >> 128;

38:         if (absTick & 0x400 != 0) ratio = (ratio * 0xf3392b0822b70005940c7a398e4b70f3) >> 128;

38:         if (absTick & 0x400 != 0) ratio = (ratio * 0xf3392b0822b70005940c7a398e4b70f3) >> 128;

39:         if (absTick & 0x800 != 0) ratio = (ratio * 0xe7159475a2c29b7443b29c7fa6e889d9) >> 128;

39:         if (absTick & 0x800 != 0) ratio = (ratio * 0xe7159475a2c29b7443b29c7fa6e889d9) >> 128;

40:         if (absTick & 0x1000 != 0) ratio = (ratio * 0xd097f3bdfd2022b8845ad8f792aa5825) >> 128;

40:         if (absTick & 0x1000 != 0) ratio = (ratio * 0xd097f3bdfd2022b8845ad8f792aa5825) >> 128;

41:         if (absTick & 0x2000 != 0) ratio = (ratio * 0xa9f746462d870fdf8a65dc1f90e061e5) >> 128;

41:         if (absTick & 0x2000 != 0) ratio = (ratio * 0xa9f746462d870fdf8a65dc1f90e061e5) >> 128;

42:         if (absTick & 0x4000 != 0) ratio = (ratio * 0x70d869a156d2a1b890bb3df62baf32f7) >> 128;

42:         if (absTick & 0x4000 != 0) ratio = (ratio * 0x70d869a156d2a1b890bb3df62baf32f7) >> 128;

43:         if (absTick & 0x8000 != 0) ratio = (ratio * 0x31be135f97d08fd981231505542fcfa6) >> 128;

43:         if (absTick & 0x8000 != 0) ratio = (ratio * 0x31be135f97d08fd981231505542fcfa6) >> 128;

44:         if (absTick & 0x10000 != 0) ratio = (ratio * 0x9aa508b5b7a84e1c677de54f3e99bc9) >> 128;

44:         if (absTick & 0x10000 != 0) ratio = (ratio * 0x9aa508b5b7a84e1c677de54f3e99bc9) >> 128;

45:         if (absTick & 0x20000 != 0) ratio = (ratio * 0x5d6af8dedb81196699c329225ee604) >> 128;

45:         if (absTick & 0x20000 != 0) ratio = (ratio * 0x5d6af8dedb81196699c329225ee604) >> 128;

46:         if (absTick & 0x40000 != 0) ratio = (ratio * 0x2216e584f5fa1ea926041bedfe98) >> 128;

46:         if (absTick & 0x40000 != 0) ratio = (ratio * 0x2216e584f5fa1ea926041bedfe98) >> 128;

47:         if (absTick & 0x80000 != 0) ratio = (ratio * 0x48a170391f7dc42444e8fa2) >> 128;

47:         if (absTick & 0x80000 != 0) ratio = (ratio * 0x48a170391f7dc42444e8fa2) >> 128;

71:             let f := shl(7, gt(r, 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF))

76:             let f := shl(6, gt(r, 0xFFFFFFFFFFFFFFFF))

81:             let f := shl(5, gt(r, 0xFFFFFFFF))

86:             let f := shl(4, gt(r, 0xFFFF))

91:             let f := shl(3, gt(r, 0xFF))

96:             let f := shl(2, gt(r, 0xF))

101:             let f := shl(1, gt(r, 0x3))

106:             let f := gt(r, 0x1)

```

```solidity
File: reward/RewardModule.sol

88:         0xdb3a0d63a7808d7d0422c40bb62354f42bff7602a547c329c1453dbcbeef4900;

```

</details> 
 


 ### <a name="NC-13"></a>[NC-13]
 ### Contract declarations should have NatSpec @author annotations

#### Impact:
Adding a NatSpec @author annotation to contract declarations can improve code documentation.

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

91: contract InterestRate {

```

```solidity
File: IonPool.sol

26: contract IonPool is PausableUpgradeable, RewardModule {

```

```solidity
File: Liquidation.sol

32: contract Liquidation {

```

```solidity
File: Whitelist.sol

25: contract Whitelist is Ownable2Step {

```

```solidity
File: YieldOracle.sol

57: contract YieldOracle is IYieldOracle, Ownable2Step {

```

```solidity
File: admin/ProxyAdmin.sol

19: contract ProxyAdmin is Ownable2Step {

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

65: contract TransparentUpgradeableProxy is ERC1967Proxy {

```

```solidity
File: flash/handlers/EthXHandler.sol

20: contract EthXHandler is UniswapFlashloanBalancerSwapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/SwEthHandler.sol

21: contract SwEthHandler is UniswapFlashswapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/WstEthHandler.sol

21: contract WstEthHandler is UniswapFlashswapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

36: abstract contract BalancerFlashloanDirectMintHandler is IonHandlerBase, IFlashLoanRecipient {

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

25: abstract contract IonHandlerBase {

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

36: abstract contract UniswapFlashloanBalancerSwapHandler is IUniswapV3FlashCallback, IonHandlerBase {

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

31: abstract contract UniswapFlashswapHandler is IonHandlerBase, IUniswapV3SwapCallback {

```

```solidity
File: join/GemJoin.sol

25: contract GemJoin is Ownable2Step, Pausable {

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

12: contract EthXReserveOracle is ReserveOracle {

```

```solidity
File: oracles/reserve/ReserveFeed.sol

7: contract ReserveFeed is Ownable2Step {

```

```solidity
File: oracles/reserve/ReserveOracle.sol

31: abstract contract ReserveOracle {

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

12: contract SwEthReserveOracle is ReserveOracle {

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

13: contract WstEthReserveOracle is ReserveOracle {

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

24: contract EthXSpotOracle is SpotOracle {

```

```solidity
File: oracles/spot/SpotOracle.sol

24: abstract contract SpotOracle {

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

18: contract SwEthSpotOracle is SpotOracle {

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

16: contract WstEthSpotOracle is SpotOracle {

```

```solidity
File: periphery/IonRegistry.sol

8: contract IonRegistry is Ownable {

```

```solidity
File: periphery/IonZapper.sol

22: contract IonZapper {

```

```solidity
File: reward/RewardModule.sol

21: abstract contract RewardModule is ContextUpgradeable, AccessControlDefaultAdminRulesUpgradeable {

```

</details> 
 


 ### <a name="NC-14"></a>[NC-14]
 ### Contract declarations should have NatSpec @Title annotations

#### Impact:
Adding a NatSpec @Title annotation to contract declarations can improve code documentation.

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

91: contract InterestRate {

```

```solidity
File: IonPool.sol

26: contract IonPool is PausableUpgradeable, RewardModule {

```

```solidity
File: Liquidation.sol

32: contract Liquidation {

```

```solidity
File: Whitelist.sol

25: contract Whitelist is Ownable2Step {

```

```solidity
File: YieldOracle.sol

57: contract YieldOracle is IYieldOracle, Ownable2Step {

```

```solidity
File: admin/ProxyAdmin.sol

19: contract ProxyAdmin is Ownable2Step {

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

65: contract TransparentUpgradeableProxy is ERC1967Proxy {

```

```solidity
File: flash/handlers/EthXHandler.sol

20: contract EthXHandler is UniswapFlashloanBalancerSwapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/SwEthHandler.sol

21: contract SwEthHandler is UniswapFlashswapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/WstEthHandler.sol

21: contract WstEthHandler is UniswapFlashswapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

36: abstract contract BalancerFlashloanDirectMintHandler is IonHandlerBase, IFlashLoanRecipient {

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

25: abstract contract IonHandlerBase {

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

36: abstract contract UniswapFlashloanBalancerSwapHandler is IUniswapV3FlashCallback, IonHandlerBase {

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

31: abstract contract UniswapFlashswapHandler is IonHandlerBase, IUniswapV3SwapCallback {

```

```solidity
File: join/GemJoin.sol

25: contract GemJoin is Ownable2Step, Pausable {

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

12: contract EthXReserveOracle is ReserveOracle {

```

```solidity
File: oracles/reserve/ReserveFeed.sol

7: contract ReserveFeed is Ownable2Step {

```

```solidity
File: oracles/reserve/ReserveOracle.sol

31: abstract contract ReserveOracle {

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

12: contract SwEthReserveOracle is ReserveOracle {

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

13: contract WstEthReserveOracle is ReserveOracle {

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

24: contract EthXSpotOracle is SpotOracle {

```

```solidity
File: oracles/spot/SpotOracle.sol

24: abstract contract SpotOracle {

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

18: contract SwEthSpotOracle is SpotOracle {

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

16: contract WstEthSpotOracle is SpotOracle {

```

```solidity
File: periphery/IonRegistry.sol

8: contract IonRegistry is Ownable {

```

```solidity
File: periphery/IonZapper.sol

22: contract IonZapper {

```

```solidity
File: reward/RewardModule.sol

21: abstract contract RewardModule is ContextUpgradeable, AccessControlDefaultAdminRulesUpgradeable {

```

</details> 
 


 ### <a name="NC-15"></a>[NC-15]
 ### NatSpec: Contract declarations should have @dev tags

#### Impact:
@dev is used to explain extra details to developers

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

91: contract InterestRate {

```

```solidity
File: IonPool.sol

26: contract IonPool is PausableUpgradeable, RewardModule {

```

```solidity
File: Liquidation.sol

32: contract Liquidation {

```

```solidity
File: Whitelist.sol

25: contract Whitelist is Ownable2Step {

```

```solidity
File: YieldOracle.sol

57: contract YieldOracle is IYieldOracle, Ownable2Step {

```

```solidity
File: admin/ProxyAdmin.sol

19: contract ProxyAdmin is Ownable2Step {

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

65: contract TransparentUpgradeableProxy is ERC1967Proxy {

```

```solidity
File: flash/handlers/EthXHandler.sol

20: contract EthXHandler is UniswapFlashloanBalancerSwapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/SwEthHandler.sol

21: contract SwEthHandler is UniswapFlashswapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/WstEthHandler.sol

21: contract WstEthHandler is UniswapFlashswapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

36: abstract contract BalancerFlashloanDirectMintHandler is IonHandlerBase, IFlashLoanRecipient {

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

25: abstract contract IonHandlerBase {

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

36: abstract contract UniswapFlashloanBalancerSwapHandler is IUniswapV3FlashCallback, IonHandlerBase {

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

31: abstract contract UniswapFlashswapHandler is IonHandlerBase, IUniswapV3SwapCallback {

```

```solidity
File: join/GemJoin.sol

25: contract GemJoin is Ownable2Step, Pausable {

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

12: contract EthXReserveOracle is ReserveOracle {

```

```solidity
File: oracles/reserve/ReserveFeed.sol

7: contract ReserveFeed is Ownable2Step {

```

```solidity
File: oracles/reserve/ReserveOracle.sol

31: abstract contract ReserveOracle {

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

12: contract SwEthReserveOracle is ReserveOracle {

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

13: contract WstEthReserveOracle is ReserveOracle {

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

24: contract EthXSpotOracle is SpotOracle {

```

```solidity
File: oracles/spot/SpotOracle.sol

24: abstract contract SpotOracle {

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

18: contract SwEthSpotOracle is SpotOracle {

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

16: contract WstEthSpotOracle is SpotOracle {

```

```solidity
File: periphery/IonRegistry.sol

8: contract IonRegistry is Ownable {

```

```solidity
File: periphery/IonZapper.sol

22: contract IonZapper {

```

```solidity
File: reward/RewardModule.sol

21: abstract contract RewardModule is ContextUpgradeable, AccessControlDefaultAdminRulesUpgradeable {

```

</details> 
 


 ### <a name="NC-16"></a>[NC-16]
 ### NatSpec: Contract declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

91: contract InterestRate {

```

```solidity
File: IonPool.sol

26: contract IonPool is PausableUpgradeable, RewardModule {

```

```solidity
File: Liquidation.sol

32: contract Liquidation {

```

```solidity
File: Whitelist.sol

25: contract Whitelist is Ownable2Step {

```

```solidity
File: YieldOracle.sol

57: contract YieldOracle is IYieldOracle, Ownable2Step {

```

```solidity
File: admin/ProxyAdmin.sol

19: contract ProxyAdmin is Ownable2Step {

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

65: contract TransparentUpgradeableProxy is ERC1967Proxy {

```

```solidity
File: flash/handlers/EthXHandler.sol

20: contract EthXHandler is UniswapFlashloanBalancerSwapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/SwEthHandler.sol

21: contract SwEthHandler is UniswapFlashswapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/WstEthHandler.sol

21: contract WstEthHandler is UniswapFlashswapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

36: abstract contract BalancerFlashloanDirectMintHandler is IonHandlerBase, IFlashLoanRecipient {

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

25: abstract contract IonHandlerBase {

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

36: abstract contract UniswapFlashloanBalancerSwapHandler is IUniswapV3FlashCallback, IonHandlerBase {

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

31: abstract contract UniswapFlashswapHandler is IonHandlerBase, IUniswapV3SwapCallback {

```

```solidity
File: join/GemJoin.sol

25: contract GemJoin is Ownable2Step, Pausable {

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

12: contract EthXReserveOracle is ReserveOracle {

```

```solidity
File: oracles/reserve/ReserveFeed.sol

7: contract ReserveFeed is Ownable2Step {

```

```solidity
File: oracles/reserve/ReserveOracle.sol

31: abstract contract ReserveOracle {

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

12: contract SwEthReserveOracle is ReserveOracle {

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

13: contract WstEthReserveOracle is ReserveOracle {

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

24: contract EthXSpotOracle is SpotOracle {

```

```solidity
File: oracles/spot/SpotOracle.sol

24: abstract contract SpotOracle {

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

18: contract SwEthSpotOracle is SpotOracle {

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

16: contract WstEthSpotOracle is SpotOracle {

```

```solidity
File: periphery/IonRegistry.sol

8: contract IonRegistry is Ownable {

```

```solidity
File: periphery/IonZapper.sol

22: contract IonZapper {

```

```solidity
File: reward/RewardModule.sol

21: abstract contract RewardModule is ContextUpgradeable, AccessControlDefaultAdminRulesUpgradeable {

```

</details> 
 


 ### <a name="NC-17"></a>[NC-17]
 ### NatSpec: Contract declarations should have @notice tags
@notice is used to explain to end users what the contract does, and the compiler interprets /// or /** comments as this tag if one wasnt explicitly provided

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

91: contract InterestRate {

```

```solidity
File: IonPool.sol

26: contract IonPool is PausableUpgradeable, RewardModule {

```

```solidity
File: Liquidation.sol

32: contract Liquidation {

```

```solidity
File: Whitelist.sol

25: contract Whitelist is Ownable2Step {

```

```solidity
File: YieldOracle.sol

57: contract YieldOracle is IYieldOracle, Ownable2Step {

```

```solidity
File: admin/ProxyAdmin.sol

19: contract ProxyAdmin is Ownable2Step {

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

65: contract TransparentUpgradeableProxy is ERC1967Proxy {

```

```solidity
File: flash/handlers/EthXHandler.sol

20: contract EthXHandler is UniswapFlashloanBalancerSwapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/SwEthHandler.sol

21: contract SwEthHandler is UniswapFlashswapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/WstEthHandler.sol

21: contract WstEthHandler is UniswapFlashswapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

36: abstract contract BalancerFlashloanDirectMintHandler is IonHandlerBase, IFlashLoanRecipient {

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

25: abstract contract IonHandlerBase {

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

36: abstract contract UniswapFlashloanBalancerSwapHandler is IUniswapV3FlashCallback, IonHandlerBase {

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

31: abstract contract UniswapFlashswapHandler is IonHandlerBase, IUniswapV3SwapCallback {

```

```solidity
File: join/GemJoin.sol

25: contract GemJoin is Ownable2Step, Pausable {

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

12: contract EthXReserveOracle is ReserveOracle {

```

```solidity
File: oracles/reserve/ReserveFeed.sol

7: contract ReserveFeed is Ownable2Step {

```

```solidity
File: oracles/reserve/ReserveOracle.sol

31: abstract contract ReserveOracle {

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

12: contract SwEthReserveOracle is ReserveOracle {

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

13: contract WstEthReserveOracle is ReserveOracle {

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

24: contract EthXSpotOracle is SpotOracle {

```

```solidity
File: oracles/spot/SpotOracle.sol

24: abstract contract SpotOracle {

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

18: contract SwEthSpotOracle is SpotOracle {

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

16: contract WstEthSpotOracle is SpotOracle {

```

```solidity
File: periphery/IonRegistry.sol

8: contract IonRegistry is Ownable {

```

```solidity
File: periphery/IonZapper.sol

22: contract IonZapper {

```

```solidity
File: reward/RewardModule.sol

21: abstract contract RewardModule is ContextUpgradeable, AccessControlDefaultAdminRulesUpgradeable {

```

</details> 
 


 ### <a name="NC-18"></a>[NC-18]
 ### Consider using delete rather than assigning zero to clear value

#### Impact:
Consider using delete rather than assigning zero to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

58: uint8 constant ADJUSTED_PROFIT_MARGIN_SHIFT = 0;

62: uint8 constant RESERVE_FACTOR_SHIFT = 0;

69: uint8 constant ADJUSTED_ABOVE_KINK_SLOPE_SHIFT = 0;

149:         uint256 distributionFactorSum = 0;

150:         for (uint256 i = 0; i < COLLATERAL_COUNT;) {

339:                 slopeNumerator = 0;

```

```solidity
File: IonPool.sol

337:         for (uint256 i = 0; i < ilksLength;) {

366:         for (uint8 i = 0; i < ilksLength;) {

416:         for (uint8 i = 0; i < ilksLength;) {

```

```solidity
File: Liquidation.sol

117:         for (uint256 i = 0; i < maxDiscountsLength;) {

124:         for (uint256 i = 0; i < liquidationThresholdsLength;) {

```

```solidity
File: Whitelist.sol

44:         for (uint8 i = 0; i < _borrowersRoots.length; i++) {

```

```solidity
File: YieldOracle.sol

101:         for (uint256 i = 0; i < LOOK_BACK;) {

102:             for (uint256 j = 0; j < ILK_COUNT;) {

158:         for (uint8 i = 0; i < ILK_COUNT;) {

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

328:         uint256 assetInIndex = 0;

```

```solidity
File: libraries/uniswap/TickMath.sol

68:         uint256 msb = 0;

```

</details> 
 


 ### <a name="NC-19"></a>[NC-19]
 ### Consider adding a block/deny-list"
Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens  

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

91: contract InterestRate {

```

```solidity
File: IonPool.sol

26: contract IonPool is PausableUpgradeable, RewardModule {

```

```solidity
File: Liquidation.sol

32: contract Liquidation {

```

```solidity
File: Whitelist.sol

25: contract Whitelist is Ownable2Step {

```

```solidity
File: YieldOracle.sol

57: contract YieldOracle is IYieldOracle, Ownable2Step {

```

```solidity
File: admin/ProxyAdmin.sol

19: contract ProxyAdmin is Ownable2Step {

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

65: contract TransparentUpgradeableProxy is ERC1967Proxy {

```

```solidity
File: flash/handlers/EthXHandler.sol

20: contract EthXHandler is UniswapFlashloanBalancerSwapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/SwEthHandler.sol

21: contract SwEthHandler is UniswapFlashswapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/WstEthHandler.sol

21: contract WstEthHandler is UniswapFlashswapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

36: abstract contract BalancerFlashloanDirectMintHandler is IonHandlerBase, IFlashLoanRecipient {

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

25: abstract contract IonHandlerBase {

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

36: abstract contract UniswapFlashloanBalancerSwapHandler is IUniswapV3FlashCallback, IonHandlerBase {

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

31: abstract contract UniswapFlashswapHandler is IonHandlerBase, IUniswapV3SwapCallback {

```

```solidity
File: join/GemJoin.sol

25: contract GemJoin is Ownable2Step, Pausable {

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

12: contract EthXReserveOracle is ReserveOracle {

```

```solidity
File: oracles/reserve/ReserveFeed.sol

7: contract ReserveFeed is Ownable2Step {

```

```solidity
File: oracles/reserve/ReserveOracle.sol

31: abstract contract ReserveOracle {

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

12: contract SwEthReserveOracle is ReserveOracle {

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

13: contract WstEthReserveOracle is ReserveOracle {

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

24: contract EthXSpotOracle is SpotOracle {

```

```solidity
File: oracles/spot/SpotOracle.sol

24: abstract contract SpotOracle {

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

18: contract SwEthSpotOracle is SpotOracle {

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

16: contract WstEthSpotOracle is SpotOracle {

```

```solidity
File: periphery/IonRegistry.sol

8: contract IonRegistry is Ownable {

```

```solidity
File: periphery/IonZapper.sol

22: contract IonZapper {

```

```solidity
File: reward/RewardModule.sol

21: abstract contract RewardModule is ContextUpgradeable, AccessControlDefaultAdminRulesUpgradeable {

```

</details> 
 


 ### <a name="NC-20"></a>[NC-20]
 ### Consider adding emergency-stop functionality

#### Impact:
Adding a way to quickly halt protocol functionality in an emergency, rather than having to pause individual contracts one-by-one, will make in-progress hack mitigation faster and much less stressful.

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

91: contract InterestRate {

```

```solidity
File: IonPool.sol

26: contract IonPool is PausableUpgradeable, RewardModule {

```

```solidity
File: Liquidation.sol

32: contract Liquidation {

```

```solidity
File: Whitelist.sol

25: contract Whitelist is Ownable2Step {

```

```solidity
File: YieldOracle.sol

57: contract YieldOracle is IYieldOracle, Ownable2Step {

```

```solidity
File: admin/ProxyAdmin.sol

19: contract ProxyAdmin is Ownable2Step {

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

65: contract TransparentUpgradeableProxy is ERC1967Proxy {

```

```solidity
File: flash/handlers/EthXHandler.sol

20: contract EthXHandler is UniswapFlashloanBalancerSwapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/SwEthHandler.sol

21: contract SwEthHandler is UniswapFlashswapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/WstEthHandler.sol

21: contract WstEthHandler is UniswapFlashswapHandler, BalancerFlashloanDirectMintHandler {

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

36: abstract contract BalancerFlashloanDirectMintHandler is IonHandlerBase, IFlashLoanRecipient {

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

25: abstract contract IonHandlerBase {

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

36: abstract contract UniswapFlashloanBalancerSwapHandler is IUniswapV3FlashCallback, IonHandlerBase {

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

31: abstract contract UniswapFlashswapHandler is IonHandlerBase, IUniswapV3SwapCallback {

```

```solidity
File: join/GemJoin.sol

25: contract GemJoin is Ownable2Step, Pausable {

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

12: contract EthXReserveOracle is ReserveOracle {

```

```solidity
File: oracles/reserve/ReserveFeed.sol

7: contract ReserveFeed is Ownable2Step {

```

```solidity
File: oracles/reserve/ReserveOracle.sol

31: abstract contract ReserveOracle {

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

12: contract SwEthReserveOracle is ReserveOracle {

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

13: contract WstEthReserveOracle is ReserveOracle {

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

24: contract EthXSpotOracle is SpotOracle {

```

```solidity
File: oracles/spot/SpotOracle.sol

24: abstract contract SpotOracle {

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

18: contract SwEthSpotOracle is SpotOracle {

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

16: contract WstEthSpotOracle is SpotOracle {

```

```solidity
File: periphery/IonRegistry.sol

8: contract IonRegistry is Ownable {

```

```solidity
File: periphery/IonZapper.sol

22: contract IonZapper {

```

```solidity
File: reward/RewardModule.sol

21: abstract contract RewardModule is ContextUpgradeable, AccessControlDefaultAdminRulesUpgradeable {

```

</details> 
 


 ### <a name="NC-21"></a>[NC-21]
 ### Error declarations should have NatSpec descriptions

*Instances (73)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

94:     error CollateralIndexOutOfBounds();

95:     error DistributionFactorsDoNotSumToOne(uint256 sum);

96:     error TotalDebtsLength(uint256 COLLATERAL_COUNT, uint256 totalIlkDebtsLength);

98:     error InvalidMinimumKinkRate(uint256 minimumKinkRate, uint256 minimumBaseRate);

99:     error InvalidIlkDataListLength(uint256 length);

100:     error InvalidOptimalUtilizationRate(uint256 optimalUtilizationRate);

101:     error InvalidReserveFactor(uint256 reserveFactor);

102:     error InvalidYieldOracleAddress();

```

```solidity
File: IonPool.sol

34:     error CeilingExceeded(uint256 newDebt, uint256 debtCeiling);

35:     error UnsafePositionChange(uint256 newTotalDebtInVault, uint256 collateral, uint256 spot);

36:     error UnsafePositionChangeWithoutConsent(uint8 ilkIndex, address user, address unconsentedOperator);

37:     error GemTransferWithoutConsent(uint8 ilkIndex, address user, address unconsentedOperator);

38:     error UseOfCollateralWithoutConsent(uint8 ilkIndex, address depositor, address unconsentedOperator);

39:     error TakingWethWithoutConsent(address payer, address unconsentedOperator);

40:     error VaultCannotBeDusty(uint256 amountLeft, uint256 dust);

41:     error ArithmeticError();

42:     error IlkAlreadyAdded(address ilkAddress);

43:     error IlkNotInitialized(uint256 ilkIndex);

44:     error DepositSurpassesSupplyCap(uint256 depositAmount, uint256 supplyCap);

45:     error MaxIlksReached();

47:     error InvalidIlkAddress();

48:     error InvalidInterestRateModule(InterestRate invalidInterestRateModule);

49:     error InvalidWhitelist();

```

```solidity
File: Liquidation.sol

37:     error ExchangeRateCannotBeZero();

38:     error VaultIsNotUnsafe(uint256 healthRatio);

40:     error InvalidReserveOraclesLength(uint256 length);

41:     error InvalidLiquidationThresholdsLength(uint256 length);

42:     error InvalidMaxDiscountsLength(uint256 length);

43:     error InvalidTargetHealth(uint256 targetHealth);

44:     error InvalidLiquidationThreshold(uint256 liquidationThreshold);

45:     error InvalidMaxDiscount(uint256 maxDiscount);

```

```solidity
File: Whitelist.sol

35:     error NotWhitelistedBorrower(uint8 ilkIndex, address addr);

36:     error NotWhitelistedLender(address addr);

```

```solidity
File: YieldOracle.sol

63:     error InvalidExchangeRate(uint256 ilkIndex);

64:     error InvalidIlkIndex(uint256 ilkIndex);

65:     error AlreadyUpdated();

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

75:     error ProxyDeniedAdminAccess();

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

40:     error ReceiveCallerNotVault(address unauthorizedCaller);

41:     error FlashLoanedTooManyTokens(uint256 amountTokens);

42:     error FlashloanedInvalidToken(address tokenAddress);

43:     error ExternalBalancerFlashloanNotAllowed();

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

30:     error CannotSendEthToContract();

31:     error FlashloanRepaymentTooExpensive(uint256 repaymentAmount, uint256 maxRepaymentAmount);

32:     error TransactionDeadlineReached(uint256 deadline);

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

40:     error WethNotInPoolPair(IUniswapV3Pool pool);

41:     error ReceiveCallerNotPool(address unauthorizedCaller);

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

36:     error InvalidUniswapPool();

37:     error InvalidZeroLiquidityRegionSwap();

38:     error InvalidSqrtPriceLimitX96(uint160 sqrtPriceLimitX96);

40:     error FlashswapRepaymentTooExpensive(uint256 amountIn, uint256 maxAmountIn);

41:     error CallbackOnlyCallableByPool(address unauthorizedCaller);

42:     error OutputAmountNotReceived(uint256 amountReceived, uint256 amountRequired);

```

```solidity
File: join/GemJoin.sol

26:     error Int256Overflow();

27:     error WrongIlkAddress(uint8 ilkIndex, IERC20 gem);

```

```solidity
File: libraries/LidoLibrary.sol

18:     error WstEthDepositFailed();

```

```solidity
File: libraries/math/WadRayMath.sol

22:     error NotScalingUp(uint256 from, uint256 to);

23:     error NotScalingDown(uint256 from, uint256 to);

```

```solidity
File: oracles/reserve/ReserveOracle.sol

49:     error InvalidQuorum(uint8 invalidQuorum);

50:     error InvalidFeedLength(uint256 invalidLength);

51:     error InvalidMaxChange(uint256 invalidMaxChange);

52:     error InvalidMinMax(uint256 invalidMin, uint256 invalidMax);

53:     error InvalidInitialization(uint256 invalidExchangeRate);

54:     error UpdateCooldown(uint256 lastUpdated);

```

```solidity
File: oracles/spot/SpotOracle.sol

31:     error InvalidLtv(uint256 ltv);

32:     error InvalidReserveOracle();

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

21:     error InvalidSecondsAgo(uint32 invalidSecondsAgo);

```

```solidity
File: reward/RewardModule.sol

28:     error InvalidBurnAmount();

33:     error InvalidMintAmount();

35:     error InvalidUnderlyingAddress();

36:     error InvalidTreasuryAddress();

42:     error InvalidSender(address sender);

48:     error InvalidReceiver(address receiver);

56:     error InsufficientBalance(address account, uint256 balance, uint256 needed);

```

</details> 
 


 ### <a name="NC-22"></a>[NC-22]
 ### Custom error has no error details
Custom errors should have a description of the error. This is used to explain to end users what the error means. 

*Instances (73)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

94:     error CollateralIndexOutOfBounds();

95:     error DistributionFactorsDoNotSumToOne(uint256 sum);

96:     error TotalDebtsLength(uint256 COLLATERAL_COUNT, uint256 totalIlkDebtsLength);

98:     error InvalidMinimumKinkRate(uint256 minimumKinkRate, uint256 minimumBaseRate);

99:     error InvalidIlkDataListLength(uint256 length);

100:     error InvalidOptimalUtilizationRate(uint256 optimalUtilizationRate);

101:     error InvalidReserveFactor(uint256 reserveFactor);

102:     error InvalidYieldOracleAddress();

```

```solidity
File: IonPool.sol

34:     error CeilingExceeded(uint256 newDebt, uint256 debtCeiling);

35:     error UnsafePositionChange(uint256 newTotalDebtInVault, uint256 collateral, uint256 spot);

36:     error UnsafePositionChangeWithoutConsent(uint8 ilkIndex, address user, address unconsentedOperator);

37:     error GemTransferWithoutConsent(uint8 ilkIndex, address user, address unconsentedOperator);

38:     error UseOfCollateralWithoutConsent(uint8 ilkIndex, address depositor, address unconsentedOperator);

39:     error TakingWethWithoutConsent(address payer, address unconsentedOperator);

40:     error VaultCannotBeDusty(uint256 amountLeft, uint256 dust);

41:     error ArithmeticError();

42:     error IlkAlreadyAdded(address ilkAddress);

43:     error IlkNotInitialized(uint256 ilkIndex);

44:     error DepositSurpassesSupplyCap(uint256 depositAmount, uint256 supplyCap);

45:     error MaxIlksReached();

47:     error InvalidIlkAddress();

48:     error InvalidInterestRateModule(InterestRate invalidInterestRateModule);

49:     error InvalidWhitelist();

```

```solidity
File: Liquidation.sol

37:     error ExchangeRateCannotBeZero();

38:     error VaultIsNotUnsafe(uint256 healthRatio);

40:     error InvalidReserveOraclesLength(uint256 length);

41:     error InvalidLiquidationThresholdsLength(uint256 length);

42:     error InvalidMaxDiscountsLength(uint256 length);

43:     error InvalidTargetHealth(uint256 targetHealth);

44:     error InvalidLiquidationThreshold(uint256 liquidationThreshold);

45:     error InvalidMaxDiscount(uint256 maxDiscount);

```

```solidity
File: Whitelist.sol

35:     error NotWhitelistedBorrower(uint8 ilkIndex, address addr);

36:     error NotWhitelistedLender(address addr);

```

```solidity
File: YieldOracle.sol

63:     error InvalidExchangeRate(uint256 ilkIndex);

64:     error InvalidIlkIndex(uint256 ilkIndex);

65:     error AlreadyUpdated();

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

75:     error ProxyDeniedAdminAccess();

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

40:     error ReceiveCallerNotVault(address unauthorizedCaller);

41:     error FlashLoanedTooManyTokens(uint256 amountTokens);

42:     error FlashloanedInvalidToken(address tokenAddress);

43:     error ExternalBalancerFlashloanNotAllowed();

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

30:     error CannotSendEthToContract();

31:     error FlashloanRepaymentTooExpensive(uint256 repaymentAmount, uint256 maxRepaymentAmount);

32:     error TransactionDeadlineReached(uint256 deadline);

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

40:     error WethNotInPoolPair(IUniswapV3Pool pool);

41:     error ReceiveCallerNotPool(address unauthorizedCaller);

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

36:     error InvalidUniswapPool();

37:     error InvalidZeroLiquidityRegionSwap();

38:     error InvalidSqrtPriceLimitX96(uint160 sqrtPriceLimitX96);

40:     error FlashswapRepaymentTooExpensive(uint256 amountIn, uint256 maxAmountIn);

41:     error CallbackOnlyCallableByPool(address unauthorizedCaller);

42:     error OutputAmountNotReceived(uint256 amountReceived, uint256 amountRequired);

```

```solidity
File: join/GemJoin.sol

26:     error Int256Overflow();

27:     error WrongIlkAddress(uint8 ilkIndex, IERC20 gem);

```

```solidity
File: libraries/LidoLibrary.sol

18:     error WstEthDepositFailed();

```

```solidity
File: libraries/math/WadRayMath.sol

22:     error NotScalingUp(uint256 from, uint256 to);

23:     error NotScalingDown(uint256 from, uint256 to);

```

```solidity
File: oracles/reserve/ReserveOracle.sol

49:     error InvalidQuorum(uint8 invalidQuorum);

50:     error InvalidFeedLength(uint256 invalidLength);

51:     error InvalidMaxChange(uint256 invalidMaxChange);

52:     error InvalidMinMax(uint256 invalidMin, uint256 invalidMax);

53:     error InvalidInitialization(uint256 invalidExchangeRate);

54:     error UpdateCooldown(uint256 lastUpdated);

```

```solidity
File: oracles/spot/SpotOracle.sol

31:     error InvalidLtv(uint256 ltv);

32:     error InvalidReserveOracle();

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

21:     error InvalidSecondsAgo(uint32 invalidSecondsAgo);

```

```solidity
File: reward/RewardModule.sol

28:     error InvalidBurnAmount();

33:     error InvalidMintAmount();

35:     error InvalidUnderlyingAddress();

36:     error InvalidTreasuryAddress();

42:     error InvalidSender(address sender);

48:     error InvalidReceiver(address receiver);

56:     error InsufficientBalance(address account, uint256 balance, uint256 needed);

```

</details> 
 


 ### <a name="NC-23"></a>[NC-23]
 ### Events are missing sender information

#### Impact:
Including msg.sender in events triggered by user actions can make events more useful for end users.

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

221:         emit IlkInitialized(ilkIndex, ilkAddress);

250:         emit IlkDebtCeilingUpdated(ilkIndex, newCeiling);

267:         emit IlkDustUpdated(ilkIndex, newDust);

282:         emit SupplyCapUpdated(newSupplyCap);

594:         emit Borrow(ilkIndex, user, recipient, amountOfNormalizedDebt, ilkRate, newDebt);

617:         emit Repay(ilkIndex, user, payer, amountOfNormalizedDebt, ilkRate, newDebt);

639:         emit WithdrawCollateral(ilkIndex, user, recipient, amount);

664:         emit DepositCollateral(ilkIndex, user, depositor, amount);

842:         emit ConfiscateVault(ilkIndex, u, v, w, changeInCollateral, changeInNormalizedDebt);

859:         emit MintAndBurnGem(ilkIndex, usr, wad);

876:         emit TransferGem(ilkIndex, src, dst, wad);

```

```solidity
File: Liquidation.sol

337:             emit Liquidate(msg.sender, kpr, ilkIndex, liquidateArgs.dart, liquidateArgs.gemOut);

372:         emit Liquidate(msg.sender, kpr, ilkIndex, liquidateArgs.dart, liquidateArgs.gemOut);

```

```solidity
File: YieldOracle.sol

193:             emit ApyUpdate(i, newApy);

```

```solidity
File: oracles/reserve/ReserveOracle.sol

138:         emit UpdateExchangeRate(currentExchangeRate);

160:         emit UpdateExchangeRate(bounded);

```

```solidity
File: reward/RewardModule.sol

118:         emit TreasuryUpdate(_treasury);

218:         emit MintToTreasury(_treasury, amount, _supplyFactor);

236:         emit TreasuryUpdate(newTreasury);

```

</details> 
 


 ### <a name="NC-24"></a>[NC-24]
 ### NatSpec: Event declarations should have NatSpec descriptions

*Instances (25)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

52:     event IlkInitialized(uint8 indexed ilkIndex, address indexed ilkAddress);

53:     event IlkSpotUpdated(uint8 indexed ilkIndex, address newSpot);

54:     event IlkDebtCeilingUpdated(uint8 indexed ilkIndex, uint256 newDebtCeiling);

55:     event IlkDustUpdated(uint8 indexed ilkIndex, uint256 newDust);

56:     event SupplyCapUpdated(uint256 newSupplyCap);

57:     event InterestRateModuleUpdated(address newModule);

58:     event WhitelistUpdated(address newWhitelist);

60:     event AddOperator(address indexed user, address indexed operator);

61:     event RemoveOperator(address indexed user, address indexed operator);

62:     event MintAndBurnGem(uint8 indexed ilkIndex, address indexed usr, int256 wad);

63:     event TransferGem(uint8 indexed ilkIndex, address indexed src, address indexed dst, uint256 wad);

65:     event Supply(

69:     event Withdraw(address indexed user, address indexed target, uint256 amount, uint256 supplyFactor, uint256 newDebt);

71:     event WithdrawCollateral(uint8 indexed ilkIndex, address indexed user, address indexed recipient, uint256 amount);

72:     event DepositCollateral(uint8 indexed ilkIndex, address indexed user, address indexed depositor, uint256 amount);

73:     event Borrow(

81:     event Repay(

90:     event RepayBadDebt(address indexed user, address indexed payer, uint256 rad);

91:     event ConfiscateVault(

```

```solidity
File: Liquidation.sol

72:     event Liquidate(

```

```solidity
File: YieldOracle.sol

69:     event ApyUpdate(uint256 indexed ilkIndex, uint256 newApy);

```

```solidity
File: oracles/reserve/ReserveOracle.sol

46:     event UpdateExchangeRate(uint256 exchangeRate);

```

```solidity
File: reward/RewardModule.sol

64:     event Transfer(address indexed from, address indexed to, uint256 value);

66:     event MintToTreasury(address indexed treasury, uint256 amount, uint256 supplyFactor);

68:     event TreasuryUpdate(address treasury);

```

</details> 
 


 ### <a name="NC-25"></a>[NC-25]
 ### contracts should use fixed compiler versions
To prevent the contracts being deployed and behaving differently depending on the compiler version, it is recommended to use fixed solidity versions for contracts and libraries. Although we can configure a specific version through config (like hardhat, forge config files), it is recommended to set the fixed version in the solidity pragma directly before deploying to the mainnet.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: admin/ProxyAdmin.sol

4: pragma solidity ^0.8.20;

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

4: pragma solidity ^0.8.20;

```

```solidity
File: libraries/math/WadRayMath.sol

2: pragma solidity ^0.8.0;

```

</details> 
 


 ### <a name="NC-26"></a>[NC-26]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (230)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

188:     function _packCollateralConfig(

225:     function _unpackCollateralConfig(uint256 index) internal view returns (IlkData memory ilkData) {

300:     function calculateInterestRate(

```

```solidity
File: IonPool.sol

154:     function _getIonPoolStorage() internal pure returns (IonPoolStorage storage $) {

164:     function initialize(

199:     function initializeIlk(address ilkAddress) external onlyRole(ION) {

229:     function updateIlkSpot(uint8 ilkIndex, SpotOracle newSpot) external onlyRole(ION) {

245:     function updateIlkDebtCeiling(uint8 ilkIndex, uint256 newCeiling) external onlyRole(ION) {

262:     function updateIlkDust(uint8 ilkIndex, uint256 newDust) external onlyRole(ION) {

277:     function updateSupplyCap(uint256 newSupplyCap) external onlyRole(ION) {

291:     function updateInterestRateModule(InterestRate _interestRateModule) external onlyRole(ION) {

309:     function updateWhitelist(Whitelist _whitelist) external onlyRole(ION) {

322:     function pause() external onlyRole(ION) {

332:     function unpause() external onlyRole(ION) {

352:     function accrueInterest() external whenNotPaused returns (uint256 newTotalDebt) {

356:     function _accrueInterest() internal returns (uint256 newTotalDebt) {

395:     function calculateRewardAndDebtDistribution()

446:     function calculateRewardAndDebtDistributionForIlk(uint8 ilkIndex)

455:     function _calculateRewardAndDebtDistributionForIlk(

528:     function withdraw(address receiverOfUnderlying, uint256 amount) external whenNotPaused {

547:     function supply(

579:     function borrow(

604:     function repay(

627:     function withdrawCollateral(

650:     function depositCollateral(

669:     function _modifyPosition(

758:     function repayBadDebt(address user, uint256 rad) external whenNotPaused {

779:     function _transferWeth(address user, int256 amount) internal {

811:     function confiscateVault(

854:     function mintAndBurnGem(uint8 ilkIndex, address usr, int256 wad) external onlyRole(GEM_JOIN_ROLE) {

869:     function transferGem(uint8 ilkIndex, address src, address dst, uint256 wad) external whenNotPaused {

884:     function ilkCount() external view returns (uint256) {

892:     function getIlkIndex(address ilkAddress) external view returns (uint8) {

904:     function getIlkAddress(uint256 ilkIndex) external view returns (address) {

912:     function addressContains(address ilk) external view returns (bool) {

921:     function totalNormalizedDebt(uint8 ilkIndex) external view returns (uint256) {

926:     function rateUnaccrued(uint8 ilkIndex) external view returns (uint256) {

934:     function rate(uint8 ilkIndex) external view returns (uint256) {

946:     function lastRateUpdate(uint8 ilkIndex) external view returns (uint256) {

954:     function spot(uint8 ilkIndex) external view returns (SpotOracle) {

962:     function debtCeiling(uint8 ilkIndex) external view returns (uint256) {

970:     function dust(uint8 ilkIndex) external view returns (uint256) {

978:     function collateral(uint8 ilkIndex, address user) external view returns (uint256) {

986:     function normalizedDebt(uint8 ilkIndex, address user) external view returns (uint256) {

994:     function vault(uint8 ilkIndex, address user) external view returns (uint256, uint256) {

1002:     function gem(uint8 ilkIndex, address user) external view returns (uint256) {

1010:     function unbackedDebt(address user) external view returns (uint256) {

1018:     function isOperator(address user, address operator) external view returns (bool) {

1027:     function isAllowed(address user, address operator) public view returns (bool) {

1033:     function debtUnaccrued() external view returns (uint256) {

1042:     function debt() external view returns (uint256) {

1053:     function totalUnbackedDebt() external view returns (uint256) {

1061:     function interestRateModule() external view returns (address) {

1069:     function whitelist() external view returns (address) {

1077:     function weth() external view returns (uint256) {

1085:     function getCurrentBorrowRate(uint8 ilkIndex) external view returns (uint256 borrowRate, uint256 reserveFactor) {

1102:     function implementation() external view returns (address) {

1112:     function addOperator(address operator) external {

1124:     function removeOperator(address operator) external {

1134:     function _add(uint256 x, int256 y) internal pure returns (uint256 z) {

1143:     function _sub(uint256 x, int256 y) internal pure returns (uint256 z) {

1162:     function _rpow(uint256 x, uint256 n, uint256 b) internal pure returns (uint256 z) {

1195:     function either(bool x, bool y) internal pure returns (bool z) {

1201:     function both(bool x, bool y) internal pure returns (bool z) {

```

```solidity
File: Liquidation.sol

171:     function _getConfigs(uint8 ilkIndex) internal view returns (Configs memory configs) {

194:     function getRepayAmt(uint8 ilkIndex, address vault) public view returns (uint256 repay) {

237:     function _getRepayAmt(

275:     function liquidate(

```

```solidity
File: Whitelist.sol

55:     function updateBorrowersRoot(uint8 ilkIndex, bytes32 _borrowersRoot) external onlyOwner {

63:     function updateLendersRoot(bytes32 _lendersRoot) external onlyOwner {

71:     function approveProtocolWhitelist(address addr) external onlyOwner {

79:     function revokeProtocolWhitelist(address addr) external onlyOwner {

90:     function isWhitelistedBorrower(

118:     function isWhitelistedLender(

```

```solidity
File: YieldOracle.sol

126:     function updateIonPool(IonPool _ionPool) external onlyOwner {

138:     function updateAll() external {

152:     function _updateAll() internal {

210:     function _getExchangeRate(uint256 ilkIndex) internal view returns (uint64 exchangeRate) {

```

```solidity
File: admin/ProxyAdmin.sol

44:     function upgradeAndCall(

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

23:     function upgradeToAndCall(address, bytes calldata) external payable;

91:     function _proxyAdmin() internal virtual returns (address) {

98:     function _fallback() internal virtual override {

117:     function _dispatchUpgradeToAndCall() private {

```

```solidity
File: flash/handlers/EthXHandler.sol

57:     function _depositWethForLst(uint256 amountWeth) internal override returns (uint256) {

68:     function _getEthAmountInForLstAmountOut(uint256 amountLst) internal view override returns (uint256) {

```

```solidity
File: flash/handlers/SwEthHandler.sol

50:     function _depositWethForLst(uint256 amountWeth) internal override returns (uint256) {

61:     function _getEthAmountInForLstAmountOut(uint256 amountLst) internal view override returns (uint256) {

```

```solidity
File: flash/handlers/WstEthHandler.sol

54:     function _depositWethForLst(uint256 amountWeth) internal override returns (uint256) {

65:     function _getEthAmountInForLstAmountOut(uint256 amountLst) internal view override returns (uint256) {

69:     function zapDepositAndBorrow(

82:     function zapFlashLeverageCollateral(

101:     function zapFlashLeverageWeth(

120:     function zapFlashswapLeverage(

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

60:     function flashLeverageCollateral(

78:     function _flashLeverageCollateral(

130:     function flashLeverageWeth(

149:     function _flashLeverageWeth(

211:     function receiveFlashLoan(

263:     function _depositWethForLst(uint256 amountWeth) internal virtual returns (uint256);

271:     function _getEthAmountInForLstAmountOut(uint256 amountLst) internal view virtual returns (uint256);

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

112:     function depositAndBorrow(

137:     function _depositAndBorrow(

177:     function repayFullAndWithdraw(uint256 collateralToWithdraw) external {

200:     function _getFullRepayAmount(address user) internal view returns (uint256 repayAmount, uint256 normalizedDebt) {

220:     function repayAndWithdraw(uint256 debtToRepay, uint256 collateralToWithdraw) external {

234:     function _repayAndWithdraw(

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

91:     function flashLeverageWethAndSwap(

159:     function flashDeleverageWethAndSwap(

231:     function uniswapV3FlashCallback(uint256 fee0, uint256 fee1, bytes calldata data) external override {

319:     function _simulateGivenOutBalancerSwap(

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

97:     function flashswapLeverage(

124:     function _flashswapLeverage(

177:     function flashswapDeleverage(

212:     function _initiateFlashSwap(

257:     function uniswapV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes calldata _data) external override {

```

```solidity
File: interfaces/IChainlink.sol

5:     function latestRoundData()

```

```solidity
File: interfaces/IReserveFeed.sol

16:     function updateExchangeRate(uint8 ilkIndex, uint256 reserve) external;

23:     function getExchangeRate(uint8 ilkIndex) external view returns (uint256);

```

```solidity
File: interfaces/IWETH9.sol

13:     function deposit() external payable;

19:     function withdraw(uint256 amount) external;

```

```solidity
File: interfaces/IYieldOracle.sol

5:     function apys(uint256 ilkIndex) external view returns (uint32);

```

```solidity
File: interfaces/ProviderInterfaces.sol

5:     function submit(address _referral) external payable returns (uint256);

7:     function getTotalPooledEther() external view returns (uint256);

9:     function getTotalShares() external view returns (uint256);

11:     function getSharesByPooledEth(uint256 _ethAmount) external view returns (uint256);

13:     function getCurrentStakeLimit() external view returns (uint256);

15:     function approve(address spender, uint256 value) external returns (bool);

19:     function wrap(uint256 _stETHAmount) external returns (uint256);

29:     function unwrap(uint256 _wstETHAmount) external returns (uint256);

31:     function getStETHByWstETH(uint256 _ETHAmount) external view returns (uint256);

33:     function getWstETHByStETH(uint256 _stETHAmount) external view returns (uint256);

35:     function stETH() external view returns (address);

37:     function stEthPerToken() external view returns (uint256);

41:     function deposit(address _receiver) external payable returns (uint256);

43:     function previewDeposit(uint256 _assets) external view returns (uint256);

45:     function previewWithdraw(uint256 _shares) external view returns (uint256);

47:     function getExchangeRate() external view returns (uint256);

49:     function staderConfig() external view returns (IStaderConfig);

51:     function totalAssets() external view returns (uint256);

55:     function getMinDepositAmount() external view returns (uint256);

57:     function getMaxDepositAmount() external view returns (uint256);

59:     function getStaderOracle() external view returns (address);

74:     function getExchangeRate() external view returns (ExchangeRate memory);

78:     function deposit() external payable;

80:     function swETHToETHRate() external view returns (uint256);

82:     function ethToSwETHRate() external view returns (uint256);

84:     function getRate() external view returns (uint256);

```

```solidity
File: join/GemJoin.sol

57:     function pause() external onlyOwner {

65:     function unpause() external onlyOwner {

75:     function join(address user, uint256 amount) external whenNotPaused {

90:     function exit(address user, uint256 amount) external whenNotPaused {

```

```solidity
File: libraries/LidoLibrary.sol

25:     function getEthAmountInForLstAmountOut(IWstEth wstEth, uint256 lstAmount) internal view returns (uint256) {

35:     function getLstAmountOutForEthAmountIn(IWstEth wstEth, uint256 ethAmount) internal view returns (uint256) {

45:     function depositForLst(IWstEth wstEth, uint256 ethAmount) internal returns (uint256) {

```

```solidity
File: libraries/StaderLibrary.sol

23:     function getEthAmountInForLstAmountOut(

40:     function getLstAmountOutForEthAmountIn(

56:     function depositForLst(IStaderStakePoolsManager staderDeposit, uint256 ethAmount) internal returns (uint256) {

68:     function depositForLst(

```

```solidity
File: libraries/SwellLibrary.sol

22:     function getEthAmountInForLstAmountOut(ISwEth swEth, uint256 lstAmount) internal view returns (uint256) {

31:     function getLstAmountOutForEthAmountIn(ISwEth swEth, uint256 ethAmount) internal view returns (uint256) {

41:     function depositForLst(ISwEth swEth, uint256 ethAmount) internal returns (uint256) {

```

```solidity
File: libraries/math/WadRayMath.sol

31:     function wadMulDown(uint256 a, uint256 b) internal pure returns (uint256) {

41:     function wadMulUp(uint256 a, uint256 b) internal pure returns (uint256) {

51:     function wadDivDown(uint256 a, uint256 b) internal pure returns (uint256) {

61:     function wadDivUp(uint256 a, uint256 b) internal pure returns (uint256) {

71:     function rayMulDown(uint256 a, uint256 b) internal pure returns (uint256) {

81:     function rayMulUp(uint256 a, uint256 b) internal pure returns (uint256) {

91:     function rayDivDown(uint256 a, uint256 b) internal pure returns (uint256) {

101:     function rayDivUp(uint256 a, uint256 b) internal pure returns (uint256) {

111:     function radMulDown(uint256 a, uint256 b) internal pure returns (uint256) {

121:     function radMulUp(uint256 a, uint256 b) internal pure returns (uint256) {

131:     function radDivDown(uint256 a, uint256 b) internal pure returns (uint256) {

141:     function radDivUp(uint256 a, uint256 b) internal pure returns (uint256) {

153:     function scaleUpToWad(uint256 value, uint256 scale) internal pure returns (uint256) {

163:     function scaleUpToRay(uint256 value, uint256 scale) internal pure returns (uint256) {

173:     function scaleUpToRad(uint256 value, uint256 scale) internal pure returns (uint256) {

183:     function scaleDownToWad(uint256 value, uint256 scale) internal pure returns (uint256) {

193:     function scaleDownToRay(uint256 value, uint256 scale) internal pure returns (uint256) {

203:     function scaleDownToRad(uint256 value, uint256 scale) internal pure returns (uint256) {

213:     function scaleUp(uint256 value, uint256 from, uint256 to) internal pure returns (uint256) {

224:     function scaleDown(uint256 value, uint256 from, uint256 to) internal pure returns (uint256) {

```

```solidity
File: libraries/uniswap/TickMath.sol

24:     function getSqrtRatioAtTick(int24 tick) internal pure returns (uint160 sqrtPriceX96) {

62:     function getTickAtSqrtRatio(uint160 sqrtPriceX96) internal pure returns (int24 tick) {

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

14:     function consult(

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

40:     function _getProtocolExchangeRate() internal view override returns (uint256) {

```

```solidity
File: oracles/reserve/ReserveFeed.sol

12:     function setExchangeRate(uint8 _ilkIndex, uint256 _exchangeRate) external onlyOwner {

16:     function getExchangeRate(uint8 _ilkIndex) external view returns (uint256) {

```

```solidity
File: oracles/reserve/ReserveOracle.sol

84:     function _getProtocolExchangeRate() internal view virtual returns (uint256);

90:     function getProtocolExchangeRate() external view returns (uint256) {

99:     function _aggregate(uint8 _ILK_INDEX) internal view returns (uint256 val) {

122:     function _bound(uint256 value, uint256 min, uint256 max) internal pure returns (uint256) {

132:     function _initializeExchangeRate() internal {

147:     function updateExchangeRate() external {

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

40:     function _getProtocolExchangeRate() internal view override returns (uint256 protocolExchangeRate) {

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

48:     function _getProtocolExchangeRate() internal view override returns (uint256) {

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

10:     function latestRoundData()

55:     function getPrice() public view override returns (uint256 ethPerEthX) {

```

```solidity
File: oracles/spot/SpotOracle.sol

55:     function getPrice() public view virtual returns (uint256 price);

64:     function getSpot() external view returns (uint256 spot) {

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

52:     function getPrice() public view override returns (uint256 ethPerSwEth) {

64:     function _getPriceInWadFromSqrtPriceX96(uint256 sqrtPriceX96) internal pure returns (uint256) {

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

50:     function getPrice() public view override returns (uint256 ethPerWstEth) {

```

```solidity
File: periphery/IonRegistry.sol

19:     function setGemJoin(uint8 ilkIndex, GemJoin gemJoin) external onlyOwner {

23:     function setDepositContract(uint8 ilkIndex, address depositContract) external onlyOwner {

```

```solidity
File: periphery/IonZapper.sol

79:     function zapSupply(bytes32[] calldata proof) external payable onlyWhitelistedLenders(proof) {

91:     function zapRepay(uint8 ilkIndex) external payable {

107:     function zapJoinWstEth(uint256 amountStEth) external {

```

```solidity
File: reward/RewardModule.sol

90:     function _getRewardModuleStorage() private pure returns (RewardModuleStorage storage $) {

96:     function _initialize(

127:     function _burn(address user, address receiverOfUnderlying, uint256 amount) internal returns (uint256) {

148:     function _burnNormalized(address account, uint256 amount) private {

169:     function _mint(address user, address senderOfUnderlying, uint256 amount) internal returns (uint256) {

189:     function _mintNormalized(address account, uint256 amount) private {

203:     function _mintToTreasury(uint256 amount) internal {

221:     function _setSupplyFactor(uint256 newSupplyFactor) internal {

230:     function updateTreasury(address newTreasury) external onlyRole(ION) {

244:     function underlying() public view returns (IERC20) {

252:     function decimals() public view returns (uint8) {

261:     function balanceOf(address user) public view returns (uint256) {

273:     function normalizedBalanceOf(address user) external view returns (uint256) {

281:     function name() public view returns (string memory) {

289:     function symbol() public view returns (string memory) {

297:     function treasury() public view returns (address) {

302:     function totalSupplyUnaccrued() public view returns (uint256) {

317:     function totalSupply() public view returns (uint256) {

331:     function normalizedTotalSupplyUnaccrued() public view returns (uint256) {

339:     function normalizedTotalSupply() public view returns (uint256) {

350:     function supplyFactorUnaccrued() public view returns (uint256) {

358:     function supplyFactor() public view returns (uint256) {

366:     function calculateRewardAndDebtDistribution()

```

</details> 
 


 ### <a name="NC-27"></a>[NC-27]
 ### If-statement can be converted to a ternary

#### Impact:
The code can be made more compact while also increasing readability by converting the following `if`-statements to ternaries (e.g. `foo += (x > y) ? a : b`)

*Instances (75)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

153:             if (ilkDataList[i].minimumKinkRate < ilkDataList[i].minimumBaseRate) {

156:             if (ilkDataList[i].optimalUtilizationRate == 0) {

159:             if (ilkDataList[i].reserveFactor > RAY) {

232:         if (index == 0) {

236:         } else if (index == 1) {

240:         } else if (index == 2) {

244:         } else if (index == 3) {

248:         } else if (index == 4) {

252:         } else if (index == 5) {

256:         } else if (index == 6) {

260:         } else if (index == 7) {

319:         if (distributionFactor == 0) {

338:             if (slopeNumerator > collateralApyRayInSeconds) {

349:         if (utilizationRate < optimalUtilizationRateRay) {

360:         else {

377:             } else {

```

```solidity
File: IonPool.sol

297:         if (_interestRateModule.COLLATERAL_COUNT() != $.ilks.length) {

375:             if (timestampIncrease > 0) {

425:             if (timestampIncrease > 0) {

473:         if (_totalNormalizedDebt == 0 || block.timestamp == ilk.lastRateUpdate) {

714:             if (both(either(changeInNormalizedDebt > 0, changeInCollateral < 0), !isAllowed(u, _msgSender()))) {

719:             if (both(changeInCollateral > 0, !isAllowed(v, _msgSender()))) {

727:             if (both(changeInNormalizedDebt < 0, !isAllowed(w, _msgSender()))) {

732:             if (both(_vault.normalizedDebt != 0, newTotalDebtInVault < $.ilks[ilkIndex].dust)) {

783:         if (amount < 0) {

```

```solidity
File: Liquidation.sol

104:         if (maxDiscountsLength != ilkCount) {

108:         if (_reserveOracles.length != ilkCount) {

113:         if (liquidationThresholdsLength != ilkCount) {

130:             if (_targetHealth < _liquidationThresholds[i].rayDivUp(RAY - _maxDiscounts[i])) {

172:         if (ilkIndex == 0) {

176:         } else if (ilkIndex == 1) {

180:         } else if (ilkIndex == 2) {

202:         if (exchangeRate == 0) {

216:         if (healthRatio >= RAY) {

292:         if (exchangeRate == 0) {

306:             if (healthRatio >= RAY) {

330:         if (liquidateArgs.repay > normalizedDebt * rate) {

339:         } else if (normalizedDebt * rate - liquidateArgs.repay < POOL.dust(ilkIndex)) {

```

```solidity
File: Whitelist.sol

104:         if (MerkleProof.verify(proof, root, leaf)) {

131:         if (MerkleProof.verify(proof, root, leaf)) {

```

```solidity
File: YieldOracle.sol

174:             if (newExchangeRate >= previousExchangeRate) {

211:         if (ilkIndex == 0) {

214:         } else if (ilkIndex == 1) {

217:         } else if (ilkIndex == 2) {

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

99:         if (msg.sender == _proxyAdmin()) {

105:         } else {

```

```solidity
File: flash/handlers/WstEthHandler.sol

91:         if (initialDeposit != 0) {

110:         if (initialDeposit != 0) {

132:         if (initialDeposit != 0) {

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

87:         if (amountToLeverage == 0) {

100:         if (wethRequiredForRepayment > maxResultingDebt) {

162:         if (amountWethToFlashloan == 0) {

176:         if (amountWethToFlashloan > maxResultingDebt) {

229:         if (address(token) == address(WETH)) {

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

155:         if (amountToBorrowType == AmountToBorrow.IS_MIN) {

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

106:         if (amountToLeverage == 0) {

167:         if (debtToRemove == type(uint256).max) {

245:         if (flashCallbackData.amountToLeverage > 0) {

279:         } else {

291:             if (collateralIn > maxCollateralToRemove) {

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

134:         if (amountToLeverage == 0) {

155:         if (amountIn > maxResultingAdditionalDebt) {

186:         if (debtToRemove == type(uint256).max) {

222:         if ((sqrtPriceLimitX96 < MIN_SQRT_RATIO || sqrtPriceLimitX96 > MAX_SQRT_RATIO) && sqrtPriceLimitX96 != 0) {

269:         if (!WETH_IS_TOKEN0) {

275:         if (amount0Delta > 0) {

```

```solidity
File: oracles/reserve/ReserveOracle.sol

100:         if (QUORUM == 0) {

102:         } else if (QUORUM == 1) {

104:         } else if (QUORUM == 2) {

108:         } else if (QUORUM == 3) {

134:         if (currentExchangeRate == 0) {

```

```solidity
File: oracles/spot/SpotOracle.sol

40:         if (_ltv > RAY) {

43:         if (address(_reserveOracle) == address(0)) {

```

```solidity
File: reward/RewardModule.sol

307:         if (_normalizedTotalSupply == 0) {

322:         if (_normalizedTotalSupply == 0) {

```

</details> 
 


 ### <a name="NC-28"></a>[NC-28]
 ### Variable names for immutables should use CONSTANT_CASE

#### Impact:
Using CONSTANT_CASE for immutables improves code readability and maintainability.

*Instances (83)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

109:     uint256 private immutable ILKCONFIG_0A;

110:     uint256 private immutable ILKCONFIG_0B;

111:     uint256 private immutable ILKCONFIG_0C;

112:     uint256 private immutable ILKCONFIG_1A;

113:     uint256 private immutable ILKCONFIG_1B;

114:     uint256 private immutable ILKCONFIG_1C;

115:     uint256 private immutable ILKCONFIG_2A;

116:     uint256 private immutable ILKCONFIG_2B;

117:     uint256 private immutable ILKCONFIG_2C;

118:     uint256 private immutable ILKCONFIG_3A;

119:     uint256 private immutable ILKCONFIG_3B;

120:     uint256 private immutable ILKCONFIG_3C;

121:     uint256 private immutable ILKCONFIG_4A;

122:     uint256 private immutable ILKCONFIG_4B;

123:     uint256 private immutable ILKCONFIG_4C;

124:     uint256 private immutable ILKCONFIG_5A;

125:     uint256 private immutable ILKCONFIG_5B;

126:     uint256 private immutable ILKCONFIG_5C;

127:     uint256 private immutable ILKCONFIG_6A;

128:     uint256 private immutable ILKCONFIG_6B;

129:     uint256 private immutable ILKCONFIG_6C;

130:     uint256 private immutable ILKCONFIG_7A;

131:     uint256 private immutable ILKCONFIG_7B;

132:     uint256 private immutable ILKCONFIG_7C;

134:     uint256 public immutable COLLATERAL_COUNT;

135:     IYieldOracle public immutable YIELD_ORACLE;

```

```solidity
File: IonPool.sol

103:     address private immutable ADDRESS_THIS = address(this);

```

```solidity
File: Liquidation.sol

49:     uint256 public immutable TARGET_HEALTH; // [ray] ex) 1.25e27 is 125%

50:     uint256 public immutable BASE_DISCOUNT; // [ray] ex) 0.02e27 is 2%

52:     uint256 public immutable MAX_DISCOUNT_0; // [ray] ex) 0.2e27 is 20%

53:     uint256 public immutable MAX_DISCOUNT_1;

54:     uint256 public immutable MAX_DISCOUNT_2;

57:     uint256 public immutable LIQUIDATION_THRESHOLD_0; // [ray] liquidation threshold for ilkIndex 0

58:     uint256 public immutable LIQUIDATION_THRESHOLD_1; // [ray]

59:     uint256 public immutable LIQUIDATION_THRESHOLD_2; // [ray]

62:     address public immutable RESERVE_ORACLE_0; // reserve oracle providing exchange rate for ilkIndex 0

63:     address public immutable RESERVE_ORACLE_1;

64:     address public immutable RESERVE_ORACLE_2;

66:     address public immutable PROTOCOL; // receives confiscated vault debt and collateral

68:     IonPool public immutable POOL;

69:     IERC20 public immutable UNDERLYING;

```

```solidity
File: YieldOracle.sol

74:     address public immutable ADDRESS0;

75:     address public immutable ADDRESS1;

76:     address public immutable ADDRESS2;

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

70:     address private immutable ADMIN;

```

```solidity
File: flash/handlers/EthXHandler.sol

24:     IStaderStakePoolsManager public immutable STADER_DEPOSIT;

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

71:     IWETH9 public immutable WETH;

72:     uint8 public immutable ILK_INDEX;

73:     IonPool public immutable POOL;

74:     GemJoin public immutable JOIN;

75:     IERC20 public immutable LST_TOKEN;

76:     Whitelist public immutable WHITELIST;

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

45:     bool immutable WETH_IS_TOKEN0_ON_UNISWAP;

46:     IUniswapV3Pool public immutable FLASHLOAN_POOL;

47:     bytes32 public immutable BALANCER_POOL_ID;

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

49:     IUniswapV3Pool public immutable UNISWAP_POOL;

50:     bool private immutable WETH_IS_TOKEN0;

```

```solidity
File: join/GemJoin.sol

31:     IERC20 public immutable GEM;

32:     IonPool public immutable POOL;

33:     uint8 public immutable ILK_INDEX;

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

13:     address public immutable PROTOCOL_FEED;

```

```solidity
File: oracles/reserve/ReserveOracle.sol

34:     uint8 public immutable ILK_INDEX;

35:     uint8 public immutable QUORUM; // the number of feeds to aggregate

36:     uint256 public immutable MAX_CHANGE; // maximum change allowed in percentage [ray] i.e. 3e25 [ray] would be 3%

38:     IReserveFeed public immutable FEED0; // different reserve oracle feeds excluding the protocol exchange rate

39:     IReserveFeed public immutable FEED1;

40:     IReserveFeed public immutable FEED2;

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

13:     address public immutable PROTOCOL_FEED;

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

14:     address public immutable WST_ETH;

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

27:     IRedstonePriceFeed public immutable REDSTONE_ETHX_PRICE_FEED;

28:     IChainlink public immutable USD_PER_ETH_CHAINLINK;

```

```solidity
File: oracles/spot/SpotOracle.sol

27:     uint256 public immutable LTV; // max LTV for a position (below liquidation threshold) [ray]

28:     ReserveOracle public immutable RESERVE_ORACLE;

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

23:     IUniswapV3Pool public immutable POOL;

24:     uint32 public immutable SECONDS_AGO;

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

19:     IChainlink public immutable ST_ETH_TO_ETH_CHAINLINK;

20:     IWstEth public immutable WST_ETH;

```

```solidity
File: periphery/IonZapper.sol

23:     IonPool public immutable POOL;

24:     IWETH9 public immutable WETH;

26:     IERC20 public immutable STETH;

27:     IWstEth public immutable WSTETH;

28:     GemJoin public immutable WSTETH_JOIN;

30:     Whitelist public immutable WHITELIST;

```

</details> 
 


 ### <a name="NC-29"></a>[NC-29]
 ### Use of override is unnecessary

#### Impact:
Starting with Solidity version [0.8.8](https://docs.soliditylang.org/en/v0.8.20/contracts.html#function-overriding), using the override keyword when the function solely overrides an interface function, and the function doesnt exist in multiple base contracts, is unnecessary.

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

398:         override

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

98:     function _fallback() internal virtual override {

```

```solidity
File: flash/handlers/EthXHandler.sol

57:     function _depositWethForLst(uint256 amountWeth) internal override returns (uint256) {

68:     function _getEthAmountInForLstAmountOut(uint256 amountLst) internal view override returns (uint256) {

```

```solidity
File: flash/handlers/SwEthHandler.sol

50:     function _depositWethForLst(uint256 amountWeth) internal override returns (uint256) {

61:     function _getEthAmountInForLstAmountOut(uint256 amountLst) internal view override returns (uint256) {

```

```solidity
File: flash/handlers/WstEthHandler.sol

54:     function _depositWethForLst(uint256 amountWeth) internal override returns (uint256) {

65:     function _getEthAmountInForLstAmountOut(uint256 amountLst) internal view override returns (uint256) {

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

218:         override

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

231:     function uniswapV3FlashCallback(uint256 fee0, uint256 fee1, bytes calldata data) external override {

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

257:     function uniswapV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes calldata _data) external override {

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

40:     function _getProtocolExchangeRate() internal view override returns (uint256) {

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

40:     function _getProtocolExchangeRate() internal view override returns (uint256 protocolExchangeRate) {

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

48:     function _getProtocolExchangeRate() internal view override returns (uint256) {

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

55:     function getPrice() public view override returns (uint256 ethPerEthX) {

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

52:     function getPrice() public view override returns (uint256 ethPerSwEth) {

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

50:     function getPrice() public view override returns (uint256 ethPerWstEth) {

```

</details> 
 


 ### <a name="NC-30"></a>[NC-30]
 ### Consider using descriptive constants when using 0 in the code

#### Impact:
Passing zero as a function argument/Event emission can sometimes result in a security issue (e.g. passing zero as the slippage parameter). Consider using a constant variable with a descriptive name, so its clear that the 0 is intentionally being used, and for the right reasons.

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

169:         (ILKCONFIG_0A, ILKCONFIG_0B, ILKCONFIG_0C) = _packCollateralConfig(ilkDataList, 0);

196:         if (index >= COLLATERAL_COUNT) return (0, 0, 0);

```

```solidity
File: IonPool.sol

177:         __AccessControlDefaultAdminRules_init(0, initialDefaultAdmin);

485:         if (borrowRate == 0) return (0, 0, 0, 0, 0);

```

```solidity
File: Liquidation.sol

338:             return (0, 0); // early return

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

230:             uint256 collateralFromDeposit = _depositWethForLst(amounts[0]);

242:             uint256 wethToBorrow = _getEthAmountInForLstAmountOut(amounts[0]);

245:             assert(amounts[0] + initialDeposit == resultingAdditionalCollateral);

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

22:         require(secondsAgo != 0, "BP");

```

```solidity
File: oracles/reserve/ReserveOracle.sol

72:         FEED0 = IReserveFeed(_feeds[0]);

```

</details> 
 


 ### <a name="NC-31"></a>[NC-31]
 ### Non-external/public variable names should begin with an underscore

#### Impact:
Using an underscore at the beginning of non-external/public variable names can improve code clarity and maintainability. According to the Solidity Style Guide, non-external/public variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*Instances (14)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Whitelist.sol

26:     mapping(address protocolControlledAddress => bool) public protocolWhitelist; // peripheral addresses that can bypass

29:     mapping(uint8 ilkIndex => bytes32) public borrowersRoot; // root of the merkle tree of borrowers for each ilk

31:     bytes32 public lendersRoot; // root of the merkle tree of lenders for each ilk

```

```solidity
File: YieldOracle.sol

71:     uint32[ILK_COUNT] public apys;

73:     uint64[ILK_COUNT][LOOK_BACK] public historicalExchangeRates;

78:     IonPool public ionPool;

80:     uint32 public currentIndex;

81:     uint48 public lastUpdated;

```

```solidity
File: join/GemJoin.sol

35:     uint256 public totalGem;

```

```solidity
File: oracles/reserve/ReserveFeed.sol

8:     mapping(uint8 ilkIndex => uint256 exchangeRate) public exchangeRates;

```

```solidity
File: oracles/reserve/ReserveOracle.sol

42:     uint256 public currentExchangeRate; // [wad] the bounded queried last time

43:     uint256 public lastUpdated; // [wad] the bounded queried last time

```

```solidity
File: periphery/IonRegistry.sol

9:     GemJoin[] public gemJoins;

10:     address[] public depositContracts;

```

</details> 
 


 ### <a name="NC-32"></a>[NC-32]
 ### Return values of `approve()` not checked
Not all IERC20 implementations `revert()` when there's a failure in `approve()`. The function signature has a boolean return value and they indicate errors that way instead. By not checking the return value, operations that should have marked as failed, may potentially go through without actually approving anything

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Liquidation.sol

148:         underlying.approve(address(ionPool_), type(uint256).max); // approve ionPool to transfer the UNDERLYING asset

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

100:         _weth.approve(address(_ionPool), type(uint256).max);

101:         IERC20(ilkAddress).approve(address(_gemJoin), type(uint256).max);

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

57:         IERC20(weth).approve(address(VAULT), type(uint256).max);

58:         IERC20(address(LST_TOKEN)).approve(address(VAULT), type(uint256).max);

```

```solidity
File: periphery/IonZapper.sol

69:         _weth.approve(address(_ionPool), type(uint256).max);

70:         _stEth.approve(address(_wstEth), type(uint256).max);

71:         IERC20(address(_wstEth)).approve(address(_wstEthJoin), type(uint256).max);

```

</details> 
 


 ### <a name="NC-33"></a>[NC-33]
 ### Custom error has no error details

#### Impact:
Defining custom errors without error details can make error messages less informative.

*Instances (36)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

4: import { Whitelist } from "./Whitelist.sol";

4: import { Whitelist } from "./Whitelist.sol";

108:         $.whitelist.isWhitelistedBorrower(ilkIndex, msg.sender, user, proof);

114:         $.whitelist.isWhitelistedLender(msg.sender, user, proof);

147:         Whitelist whitelist;

147:         Whitelist whitelist;

172:         Whitelist _whitelist

185:         $.whitelist = _whitelist;

309:     function updateWhitelist(Whitelist _whitelist) external onlyRole(ION) {

314:         $.whitelist = _whitelist;

1069:     function whitelist() external view returns (address) {

1071:         return address($.whitelist);

```

```solidity
File: Whitelist.sol

25: contract Whitelist is Ownable2Step {

```

```solidity
File: flash/handlers/EthXHandler.sol

7: import { Whitelist } from "../../Whitelist.sol";

7: import { Whitelist } from "../../Whitelist.sol";

41:         Whitelist _whitelist,

```

```solidity
File: flash/handlers/SwEthHandler.sol

12: import { Whitelist } from "../../Whitelist.sol";

12: import { Whitelist } from "../../Whitelist.sol";

37:         Whitelist _whitelist,

```

```solidity
File: flash/handlers/WstEthHandler.sol

11: import { Whitelist } from "../../Whitelist.sol";

11: import { Whitelist } from "../../Whitelist.sol";

38:         Whitelist _whitelist,

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

8: import { Whitelist } from "../../../Whitelist.sol";

8: import { Whitelist } from "../../../Whitelist.sol";

53:         WHITELIST.isWhitelistedBorrower(ILK_INDEX, msg.sender, msg.sender, proof);

76:     Whitelist public immutable WHITELIST;

76:     Whitelist public immutable WHITELIST;

86:     constructor(uint8 _ilkIndex, IonPool _ionPool, GemJoin _gemJoin, Whitelist _whitelist) {

98:         WHITELIST = _whitelist;

```

```solidity
File: periphery/IonZapper.sol

7: import { Whitelist } from "../Whitelist.sol";

7: import { Whitelist } from "../Whitelist.sol";

30:     Whitelist public immutable WHITELIST;

30:     Whitelist public immutable WHITELIST;

40:         WHITELIST.isWhitelistedLender(msg.sender, msg.sender, proof);

59:         Whitelist _whitelist

68:         WHITELIST = _whitelist;

```

</details> 
 


 ### <a name="NC-34"></a>[NC-34]
 ### Setters should prevent re-setting of the same value
This especially problematic when the setter also emits the same value, which may be confusing to offline parsers  

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: interfaces/ProviderInterfaces.sol

51:     function totalAssets() external view returns (uint256);

```

```solidity
File: oracles/reserve/ReserveFeed.sol

12:     function setExchangeRate(uint8 _ilkIndex, uint256 _exchangeRate) external onlyOwner {

```

```solidity
File: periphery/IonRegistry.sol

19:     function setGemJoin(uint8 ilkIndex, GemJoin gemJoin) external onlyOwner {

23:     function setDepositContract(uint8 ilkIndex, address depositContract) external onlyOwner {

```

```solidity
File: reward/RewardModule.sol

221:     function _setSupplyFactor(uint256 newSupplyFactor) internal {

```

</details> 
 


 ### <a name="NC-35"></a>[NC-35]
 ### Use the latest solidity version for deployment  
Upgrading to a newer Solidity release can optimize gas usage, take advantage of new features and improve overall contract efficiency. Where possible, based on compatibility requirements, it is recommended to use newer/latest solidity version to take advantage of the latest optimizations and features. You can see the latest version [here](https://soliditylang.org/blog/category/releases/)

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

2: pragma solidity 0.8.21;

```

```solidity
File: IonPool.sol

2: pragma solidity 0.8.21;

```

```solidity
File: Liquidation.sol

2: pragma solidity 0.8.21;

```

```solidity
File: Whitelist.sol

2: pragma solidity 0.8.21;

```

```solidity
File: YieldOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: admin/ProxyAdmin.sol

4: pragma solidity ^0.8.20;

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

4: pragma solidity ^0.8.20;

```

```solidity
File: flash/handlers/EthXHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/SwEthHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/WstEthHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IChainlink.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IReserveFeed.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IWETH9.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IYieldOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/ProviderInterfaces.sol

2: pragma solidity 0.8.21;

```

```solidity
File: join/GemJoin.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/LidoLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/StaderLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/SwellLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/math/WadRayMath.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: libraries/uniswap/TickMath.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/ReserveFeed.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/ReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/SpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: periphery/IonRegistry.sol

2: pragma solidity 0.8.21;

```

```solidity
File: periphery/IonZapper.sol

2: pragma solidity 0.8.21;

```

```solidity
File: reward/RewardModule.sol

2: pragma solidity 0.8.21;

```

</details> 
 


 ### <a name="NC-36"></a>[NC-36]
 ### Consider bounding input array length
The functions below take in an unbounded array, and make function calls for entries in the array. While the function will revert if it eventually runs out of gas, it may be a nicer user experience to require() that the length of the array is below some reasonable maximum, so that the user doesnt have to use up a full transactions gas only to see that the transaction reverts

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Whitelist.sol

44:         for (uint8 i = 0; i < _borrowersRoots.length; i++) {

```

</details> 
 


 ### <a name="NC-37"></a>[NC-37]
 ### Overflows in unchecked blocks
While integers with a large number of bits are unlikely to overflow on human time scales, it is not strictly correct to use an unchecked block around them, because eventually they will overflow, and unchecked blocks are meant for cases where it is mathematically impossible for an operation to trigger an overflow (e.g. a prior require() statement prevents the overflow case)

*Instances (14)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

164:             unchecked { ++i; }

330:             unchecked {

```

```solidity
File: IonPool.sol

342:             unchecked { ++i; }

386:             unchecked { ++i; }

435:             unchecked { ++i; }

1136:         unchecked {

1145:         unchecked {

```

```solidity
File: Liquidation.sol

121:             unchecked { ++i; }

135:             unchecked { ++i; }

```

```solidity
File: YieldOracle.sol

108:                 unchecked { ++j; }

112:             unchecked { ++i; }

178:                 unchecked {

196:             unchecked { ++i; }

```

```solidity
File: reward/RewardModule.sol

156:         unchecked {

```

</details> 
 


 ### <a name="NC-38"></a>[NC-38]
 ### Constants should be defined rather than using magic numbers

*Instances (32)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

512:             : newDebtIncrease.mulDiv(RAY - reserveFactor, _normalizedTotalSupply.scaleUpToRad(18)); // [RAD] * [RAY] / [RAD]

```

```solidity
File: Liquidation.sol

198:         uint256 exchangeRate = uint256(ReserveOracle(configs.reserveOracle).currentExchangeRate()).scaleUpToRay(18);

288:         uint256 exchangeRate = ReserveOracle(configs.reserveOracle).currentExchangeRate().scaleUpToRay(18);

```

```solidity
File: libraries/uniswap/TickMath.sol

111:         else r = ratio << (127 - msb);

116:             r := shr(127, mul(r, r))

118:             log_2 := or(log_2, shl(63, f))

122:             r := shr(127, mul(r, r))

124:             log_2 := or(log_2, shl(62, f))

128:             r := shr(127, mul(r, r))

130:             log_2 := or(log_2, shl(61, f))

134:             r := shr(127, mul(r, r))

136:             log_2 := or(log_2, shl(60, f))

140:             r := shr(127, mul(r, r))

142:             log_2 := or(log_2, shl(59, f))

146:             r := shr(127, mul(r, r))

148:             log_2 := or(log_2, shl(58, f))

152:             r := shr(127, mul(r, r))

154:             log_2 := or(log_2, shl(57, f))

158:             r := shr(127, mul(r, r))

160:             log_2 := or(log_2, shl(56, f))

164:             r := shr(127, mul(r, r))

166:             log_2 := or(log_2, shl(55, f))

170:             r := shr(127, mul(r, r))

172:             log_2 := or(log_2, shl(54, f))

176:             r := shr(127, mul(r, r))

178:             log_2 := or(log_2, shl(53, f))

182:             r := shr(127, mul(r, r))

184:             log_2 := or(log_2, shl(52, f))

188:             r := shr(127, mul(r, r))

190:             log_2 := or(log_2, shl(51, f))

194:             r := shr(127, mul(r, r))

196:             log_2 := or(log_2, shl(50, f))

```

</details> 
 


 ### <a name="NC-39"></a>[NC-39]
 ### Consider using `SafeTransferLib.safeTransferETH()` or `Address.sendValue()` for clearer semantic meaning
These Functions indicate their purpose with their name more clearly than using low-level calls.  

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: libraries/LidoLibrary.sol

46:         (bool success,) = address(wstEth).call{ value: ethAmount }("");

```

</details> 
 


 ### <a name="NC-40"></a>[NC-40]
 ### Variables need not be initialized to zero
The default value for variables is zero, so initializing them to zero is superfluous.  

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

58: uint8 constant ADJUSTED_PROFIT_MARGIN_SHIFT = 0;

62: uint8 constant RESERVE_FACTOR_SHIFT = 0;

69: uint8 constant ADJUSTED_ABOVE_KINK_SLOPE_SHIFT = 0;

149:         uint256 distributionFactorSum = 0;

150:         for (uint256 i = 0; i < COLLATERAL_COUNT;) {

```

```solidity
File: IonPool.sol

337:         for (uint256 i = 0; i < ilksLength;) {

366:         for (uint8 i = 0; i < ilksLength;) {

416:         for (uint8 i = 0; i < ilksLength;) {

```

```solidity
File: Liquidation.sol

117:         for (uint256 i = 0; i < maxDiscountsLength;) {

124:         for (uint256 i = 0; i < liquidationThresholdsLength;) {

```

```solidity
File: Whitelist.sol

44:         for (uint8 i = 0; i < _borrowersRoots.length; i++) {

```

```solidity
File: YieldOracle.sol

101:         for (uint256 i = 0; i < LOOK_BACK;) {

102:             for (uint256 j = 0; j < ILK_COUNT;) {

158:         for (uint8 i = 0; i < ILK_COUNT;) {

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

328:         uint256 assetInIndex = 0;

```

```solidity
File: libraries/uniswap/TickMath.sol

68:         uint256 msb = 0;

```

</details> 
 


 ### <a name="NC-41"></a>[NC-41]
 ### Consider moving msg.sender checks to modifiers
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.  

*Instances (60)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

108:         $.whitelist.isWhitelistedBorrower(ilkIndex, msg.sender, user, proof);

114:         $.whitelist.isWhitelistedLender(msg.sender, user, proof);

```

```solidity
File: Liquidation.sol

337:             emit Liquidate(msg.sender, kpr, ilkIndex, liquidateArgs.dart, liquidateArgs.gemOut);

361:         UNDERLYING.safeTransferFrom(msg.sender, address(this), transferAmt);

372:         emit Liquidate(msg.sender, kpr, ilkIndex, liquidateArgs.dart, liquidateArgs.gemOut);

```

```solidity
File: Whitelist.sol

43:     constructor(bytes32[] memory _borrowersRoots, bytes32 _lendersRoot) Ownable(msg.sender) {

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

99:         if (msg.sender == _proxyAdmin()) {

```

```solidity
File: flash/handlers/WstEthHandler.sol

77:         STETH.transferFrom(msg.sender, address(this), stEthAmount);

79:         _depositAndBorrow(msg.sender, msg.sender, outputWstEthAmount, amountToBorrow, AmountToBorrow.IS_MAX);

79:         _depositAndBorrow(msg.sender, msg.sender, outputWstEthAmount, amountToBorrow, AmountToBorrow.IS_MAX);

92:             STETH.transferFrom(msg.sender, address(this), initialDeposit);

111:             STETH.transferFrom(msg.sender, address(this), initialDeposit);

133:             STETH.transferFrom(msg.sender, address(this), initialDeposit);

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

69:         LST_TOKEN.safeTransferFrom(msg.sender, address(this), initialDeposit);

89:             _depositAndBorrow(msg.sender, address(this), resultingAdditionalCollateral, 0, AmountToBorrow.IS_MAX);

111:             abi.encode(msg.sender, initialDeposit, resultingAdditionalCollateral)

140:         LST_TOKEN.safeTransferFrom(msg.sender, address(this), initialDeposit);

164:             _depositAndBorrow(msg.sender, address(this), resultingAdditionalCollateral, 0, AmountToBorrow.IS_MAX);

189:             abi.encode(msg.sender, initialDeposit, resultingAdditionalCollateral)

221:         if (msg.sender != address(VAULT)) revert ReceiveCallerNotVault(msg.sender);

221:         if (msg.sender != address(VAULT)) revert ReceiveCallerNotVault(msg.sender);

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

53:         WHITELIST.isWhitelistedBorrower(ILK_INDEX, msg.sender, msg.sender, proof);

53:         WHITELIST.isWhitelistedBorrower(ILK_INDEX, msg.sender, msg.sender, proof);

120:         LST_TOKEN.safeTransferFrom(msg.sender, address(this), amountCollateral);

121:         _depositAndBorrow(msg.sender, msg.sender, amountCollateral, amountToBorrow, AmountToBorrow.IS_MAX);

121:         _depositAndBorrow(msg.sender, msg.sender, amountCollateral, amountToBorrow, AmountToBorrow.IS_MAX);

178:         (uint256 repayAmount, uint256 normalizedDebtToRepay) = _getFullRepayAmount(msg.sender);

180:         WETH.safeTransferFrom(msg.sender, address(this), repayAmount);

182:         POOL.repay(ILK_INDEX, msg.sender, address(this), normalizedDebtToRepay);

184:         POOL.withdrawCollateral(ILK_INDEX, msg.sender, address(this), collateralToWithdraw);

186:         JOIN.exit(msg.sender, collateralToWithdraw);

221:         WETH.safeTransferFrom(msg.sender, address(this), debtToRepay);

222:         _repayAndWithdraw(msg.sender, msg.sender, collateralToWithdraw, debtToRepay);

222:         _repayAndWithdraw(msg.sender, msg.sender, collateralToWithdraw, debtToRepay);

258:         if (msg.sender != address(WETH)) revert CannotSendEthToContract();

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

103:         LST_TOKEN.safeTransferFrom(msg.sender, address(this), initialDeposit);

108:             _depositAndBorrow(msg.sender, address(this), resultingAdditionalCollateral, 0, AmountToBorrow.IS_MAX);

131:         flashCallbackData.user = msg.sender;

168:             (debtToRemove,) = _getFullRepayAmount(msg.sender);

184:                     user: msg.sender,

232:         if (msg.sender != address(FLASHLOAN_POOL)) revert ReceiveCallerNotPool(msg.sender);

232:         if (msg.sender != address(FLASHLOAN_POOL)) revert ReceiveCallerNotPool(msg.sender);

278:             WETH.safeTransfer(msg.sender, wethToRepay);

308:             WETH.safeTransfer(msg.sender, totalRepayment);

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

109:         LST_TOKEN.safeTransferFrom(msg.sender, address(this), initialDeposit);

136:             _depositAndBorrow(msg.sender, address(this), resultingAdditionalCollateral, 0, AmountToBorrow.IS_MAX);

146:             user: msg.sender,

187:             (debtToRemove,) = _getFullRepayAmount(msg.sender);

196:             FlashSwapData({ user: msg.sender, changeInCollateralOrDebt: debtToRemove, zeroForOne: zeroForOne });

258:         if (msg.sender != address(UNISWAP_POOL)) revert CallbackOnlyCallableByPool(msg.sender);

258:         if (msg.sender != address(UNISWAP_POOL)) revert CallbackOnlyCallableByPool(msg.sender);

293:         IERC20(tokenIn).safeTransfer(msg.sender, amountToPay);

```

```solidity
File: join/GemJoin.sol

81:         GEM.safeTransferFrom(msg.sender, address(this), amount);

95:         POOL.mintAndBurnGem(ILK_INDEX, msg.sender, -int256(amount));

```

```solidity
File: periphery/IonZapper.sol

40:         WHITELIST.isWhitelistedLender(msg.sender, msg.sender, proof);

40:         WHITELIST.isWhitelistedLender(msg.sender, msg.sender, proof);

83:         POOL.supply(msg.sender, amount, proof);

99:         POOL.repay(ilkIndex, msg.sender, address(this), normalizedAmountToRepay);

108:         STETH.transferFrom(msg.sender, address(this), amountStEth);

111:         WSTETH_JOIN.join(msg.sender, outputWstEthAmount);

```

</details> 
 


 ### <a name="NC-42"></a>[NC-42]
 ### Owner can renounce while system is paused
The contract owner or single user with a role is not prevented from renouncing the role/ownership while the contract is paused, which would cause any user assets stored in the protocol, to be locked indefinitely.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

322:     function pause() external onlyRole(ION) {

```

```solidity
File: join/GemJoin.sol

57:     function pause() external onlyOwner {

```

</details> 
 


 ### <a name="NC-43"></a>[NC-43]
 ### Dont use _msgSender() if not supporting EIP-2771
Use msg.sender if the code does not implement EIP-2771 trusted forwarder support

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

535:             _burn({ user: _msgSender(), receiverOfUnderlying: receiverOfUnderlying, amount: amount });

537:         emit Withdraw(_msgSender(), receiverOfUnderlying, amount, _supplyFactor, newTotalDebt);

561:         uint256 _supplyFactor = _mint({ user: user, senderOfUnderlying: _msgSender(), amount: amount });

566:         emit Supply(user, _msgSender(), amount, _supplyFactor, newTotalDebt);

714:             if (both(either(changeInNormalizedDebt > 0, changeInCollateral < 0), !isAllowed(u, _msgSender()))) {

715:                 revert UnsafePositionChangeWithoutConsent(ilkIndex, u, _msgSender());

719:             if (both(changeInCollateral > 0, !isAllowed(v, _msgSender()))) {

720:                 revert UseOfCollateralWithoutConsent(ilkIndex, v, _msgSender());

727:             if (both(changeInNormalizedDebt < 0, !isAllowed(w, _msgSender()))) {

728:                 revert TakingWethWithoutConsent(w, _msgSender());

766:         _transferWeth(_msgSender(), -(rad.toInt256()));

768:         emit RepayBadDebt(user, _msgSender(), rad);

870:         if (!isAllowed(src, _msgSender())) revert GemTransferWithoutConsent(ilkIndex, src, _msgSender());

870:         if (!isAllowed(src, _msgSender())) revert GemTransferWithoutConsent(ilkIndex, src, _msgSender());

1115:         $.isOperator[_msgSender()][operator] = 1;

1117:         emit AddOperator(_msgSender(), operator);

1127:         $.isOperator[_msgSender()][operator] = 0;

1129:         emit RemoveOperator(_msgSender(), operator);

```

</details> 
 


 ### <a name="NC-44"></a>[NC-44]
 ### Array indices should be referenced via enums rather than numeric literals

#### Impact:
Referencing array indices via enums can improve code readability and maintainability.

*Instances (29)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Liquidation.sol

143:         MAX_DISCOUNT_0 = _maxDiscounts[0];

144:         MAX_DISCOUNT_1 = _maxDiscounts[1];

145:         MAX_DISCOUNT_2 = _maxDiscounts[2];

151:         LIQUIDATION_THRESHOLD_0 = _liquidationThresholds[0];

152:         LIQUIDATION_THRESHOLD_1 = _liquidationThresholds[1];

153:         LIQUIDATION_THRESHOLD_2 = _liquidationThresholds[2];

155:         RESERVE_ORACLE_0 = _reserveOracles[0];

156:         RESERVE_ORACLE_1 = _reserveOracles[1];

157:         RESERVE_ORACLE_2 = _reserveOracles[2];

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

94:         addresses[0] = IERC20Balancer(address(LST_TOKEN));

97:         amounts[0] = amountToLeverage;

157:         addresses[0] = IERC20Balancer(address(WETH));

181:         amounts[0] = amountWethToFlashloan;

224:         IERC20Balancer token = tokens[0];

230:             uint256 collateralFromDeposit = _depositWethForLst(amounts[0]);

236:             _depositAndBorrow(user, address(this), resultingAdditionalCollateral, amounts[0], AmountToBorrow.IS_MIN);

238:             WETH.safeTransfer(address(VAULT), amounts[0]);

242:             uint256 wethToBorrow = _getEthAmountInForLstAmountOut(amounts[0]);

245:             assert(amounts[0] + initialDeposit == resultingAdditionalCollateral);

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

344:         swapSteps[0] = swapStep;

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

25:         secondsAgos[0] = secondsAgo;

26:         secondsAgos[1] = 0;

31:         int56 tickCumulativesDelta = tickCumulatives[1] - tickCumulatives[0];

31:         int56 tickCumulativesDelta = tickCumulatives[1] - tickCumulatives[0];

33:             secondsPerLiquidityCumulativeX128s[1] - secondsPerLiquidityCumulativeX128s[0];

33:             secondsPerLiquidityCumulativeX128s[1] - secondsPerLiquidityCumulativeX128s[0];

```

```solidity
File: oracles/reserve/ReserveOracle.sol

72:         FEED0 = IReserveFeed(_feeds[0]);

73:         FEED1 = IReserveFeed(_feeds[1]);

74:         FEED2 = IReserveFeed(_feeds[2]);

```

</details> 
 


 ### <a name="NC-45"></a>[NC-45]
 ### <array>.length should not be looked up in every loop of a for-loop
The overheads outlined below are PER LOOP, excluding the first loop. Storage arrays incur a Gwarmaccess (100 gas), memory arrays use MLOAD (3 gas), calldata arrays use CALLDATALOAD (3 gas). Caching the length changes each of these to a DUP<N> (3 gas), and gets rid of the extra DUP<N> needed to store the stack offset.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Whitelist.sol

44:         for (uint8 i = 0; i < _borrowersRoots.length; i++) {

```

</details> 
 


 ### <a name="NC-46"></a>[NC-46]
 ### Use assembly to emit events, in order to save gas
Using the [scratch space](https://github.com/Vectorized/solady/blob/30558f5402f02351b96eeb6eaf32bcea29773841/src/tokens/ERC1155.sol#L501-L504) for event arguments (two words or fewer) will save gas over needing Soliditys full abi memory expansion used for emitting normally.

*Instances (32)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

187:         emit InterestRateModuleUpdated(address(_interestRateModule));

188:         emit WhitelistUpdated(address(_whitelist));

221:         emit IlkInitialized(ilkIndex, ilkAddress);

234:         emit IlkSpotUpdated(ilkIndex, address(newSpot));

250:         emit IlkDebtCeilingUpdated(ilkIndex, newCeiling);

267:         emit IlkDustUpdated(ilkIndex, newDust);

282:         emit SupplyCapUpdated(newSupplyCap);

302:         emit InterestRateModuleUpdated(address(_interestRateModule));

316:         emit WhitelistUpdated(address(_whitelist));

537:         emit Withdraw(_msgSender(), receiverOfUnderlying, amount, _supplyFactor, newTotalDebt);

566:         emit Supply(user, _msgSender(), amount, _supplyFactor, newTotalDebt);

594:         emit Borrow(ilkIndex, user, recipient, amountOfNormalizedDebt, ilkRate, newDebt);

617:         emit Repay(ilkIndex, user, payer, amountOfNormalizedDebt, ilkRate, newDebt);

639:         emit WithdrawCollateral(ilkIndex, user, recipient, amount);

664:         emit DepositCollateral(ilkIndex, user, depositor, amount);

768:         emit RepayBadDebt(user, _msgSender(), rad);

842:         emit ConfiscateVault(ilkIndex, u, v, w, changeInCollateral, changeInNormalizedDebt);

859:         emit MintAndBurnGem(ilkIndex, usr, wad);

876:         emit TransferGem(ilkIndex, src, dst, wad);

1117:         emit AddOperator(_msgSender(), operator);

1129:         emit RemoveOperator(_msgSender(), operator);

```

```solidity
File: Liquidation.sol

337:             emit Liquidate(msg.sender, kpr, ilkIndex, liquidateArgs.dart, liquidateArgs.gemOut);

372:         emit Liquidate(msg.sender, kpr, ilkIndex, liquidateArgs.dart, liquidateArgs.gemOut);

```

```solidity
File: YieldOracle.sol

193:             emit ApyUpdate(i, newApy);

```

```solidity
File: oracles/reserve/ReserveOracle.sol

138:         emit UpdateExchangeRate(currentExchangeRate);

160:         emit UpdateExchangeRate(bounded);

```

```solidity
File: reward/RewardModule.sol

118:         emit TreasuryUpdate(_treasury);

138:         emit Transfer(user, address(0), amount);

179:         emit Transfer(address(0), user, amount);

217:         emit Transfer(address(0), _treasury, amount);

218:         emit MintToTreasury(_treasury, amount, _supplyFactor);

236:         emit TreasuryUpdate(newTreasury);

```

</details> 
 


 ### <a name="NC-47"></a>[NC-47]
 ### Don't initialize variables with default value

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

58: uint8 constant ADJUSTED_PROFIT_MARGIN_SHIFT = 0;

62: uint8 constant RESERVE_FACTOR_SHIFT = 0;

69: uint8 constant ADJUSTED_ABOVE_KINK_SLOPE_SHIFT = 0;

149:         uint256 distributionFactorSum = 0;

150:         for (uint256 i = 0; i < COLLATERAL_COUNT;) {

```

```solidity
File: IonPool.sol

337:         for (uint256 i = 0; i < ilksLength;) {

366:         for (uint8 i = 0; i < ilksLength;) {

416:         for (uint8 i = 0; i < ilksLength;) {

```

```solidity
File: Liquidation.sol

117:         for (uint256 i = 0; i < maxDiscountsLength;) {

124:         for (uint256 i = 0; i < liquidationThresholdsLength;) {

```

```solidity
File: Whitelist.sol

44:         for (uint8 i = 0; i < _borrowersRoots.length; i++) {

```

```solidity
File: YieldOracle.sol

101:         for (uint256 i = 0; i < LOOK_BACK;) {

102:             for (uint256 j = 0; j < ILK_COUNT;) {

158:         for (uint8 i = 0; i < ILK_COUNT;) {

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

328:         uint256 assetInIndex = 0;

```

```solidity
File: libraries/uniswap/TickMath.sol

68:         uint256 msb = 0;

```

</details> 
 


## Gas Optimizations


 ### <a name="GAS-1"></a>[GAS-1]
 ### Enable IR-based code generation
By using `--via-ir` or `{"viaIR": true}`, the compiler is able to use more advanced [multi-function optimizations](https://docs.soliditylang.org/en/v0.8.17/ir-breaking-changes.html#solidity-ir-based-codegen-changes), for extra gas savings.

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

2: pragma solidity 0.8.21;

```

```solidity
File: IonPool.sol

2: pragma solidity 0.8.21;

```

```solidity
File: Liquidation.sol

2: pragma solidity 0.8.21;

```

```solidity
File: Whitelist.sol

2: pragma solidity 0.8.21;

```

```solidity
File: YieldOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: admin/ProxyAdmin.sol

4: pragma solidity ^0.8.20;

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

4: pragma solidity ^0.8.20;

```

```solidity
File: flash/handlers/EthXHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/SwEthHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/WstEthHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IChainlink.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IReserveFeed.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IWETH9.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IYieldOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/ProviderInterfaces.sol

2: pragma solidity 0.8.21;

```

```solidity
File: join/GemJoin.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/LidoLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/StaderLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/SwellLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/math/WadRayMath.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: libraries/uniswap/TickMath.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/ReserveFeed.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/ReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/SpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: periphery/IonRegistry.sol

2: pragma solidity 0.8.21;

```

```solidity
File: periphery/IonZapper.sol

2: pragma solidity 0.8.21;

```

```solidity
File: reward/RewardModule.sol

2: pragma solidity 0.8.21;

```

</details> 
 


 ### <a name="GAS-2"></a>[GAS-2]
 ### Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18)
While the compiler knows to optimize away the exponentiation, its still better coding practice to use idioms that do not require compiler optimization, if they exist.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: YieldOracle.sol

33: uint256 constant PERIODS = 365 * (10 ** APY_PRECISION) / LOOK_BACK; // 52.142... eAPY_PRECISION

```

```solidity
File: libraries/math/WadRayMath.sol

215:         return value * (10 ** (to - from));

226:         return value / (10 ** (from - to));

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

65:         return (sqrtPriceX96 * sqrtPriceX96).mulDiv(WAD, 2 ** 192); // [wad]

```

</details> 
 


 ### <a name="GAS-3"></a>[GAS-3]
 ### Nesting if-statements is cheaper than using &&
Nesting if-statements avoids the stack operations of setting up and using an extra jumpdest, and saves 6 [gas](https://gist.github.com/IllIllI000/7f3b818abecfadbef93b894481ae7d19)

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

1139:         if (y < 0 && z > x) revert ArithmeticError();

1140:         if (y > 0 && z < x) revert ArithmeticError();

1148:         if (y > 0 && z > x) revert ArithmeticError();

1149:         if (y < 0 && z < x) revert ArithmeticError();

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

67:         if (!_wethIsToken0 && !_wethIsToken1) revert WethNotInPoolPair(_flashloanPool);

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

63:         if (token0 != address(WETH) && token1 != address(WETH)) revert InvalidUniswapPool();

64:         if (token0 == address(WETH) && token1 == address(WETH)) revert InvalidUniswapPool();

222:         if ((sqrtPriceLimitX96 < MIN_SQRT_RATIO || sqrtPriceLimitX96 > MAX_SQRT_RATIO) && sqrtPriceLimitX96 != 0) {

261:         if (amount0Delta == 0 && amount1Delta == 0) revert InvalidZeroLiquidityRegionSwap();

```

```solidity
File: libraries/uniswap/TickMath.sol

64:         require(sqrtPriceX96 >= MIN_SQRT_RATIO && sqrtPriceX96 < MAX_SQRT_RATIO, "R");

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

43:         if (tickCumulativesDelta < 0 && (tickCumulativesDelta % int56(int32(secondsAgo)) != 0)) arithmeticMeanTick--;

```

</details> 
 


 ### <a name="GAS-4"></a>[GAS-4]
 ### Consider using = instead of += and -= for gas efficiency
Using = instead of += and -= can save gas in certain scenarios. Consider using = when appropriate.

*Instances (20)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

151:             distributionFactorSum += ilkDataList[i].distributionFactor;

```

```solidity
File: IonPool.sol

377:                 ilk.rate += newRateIncrease;

378:                 ilk.lastRateUpdate += timestampIncrease;

379:                 totalDebtIncrease += newDebtIncrease;

381:                 totalSupplyFactorIncrease += supplyFactorIncrease;

382:                 totalTreasuryMintAmount += treasuryMintAmount;

428:                 totalDebtIncrease += newDebtIncrease;

430:                 totalSupplyFactorIncrease += supplyFactorIncrease;

431:                 totalTreasuryMintAmount += treasuryMintAmount;

532:         $.weth -= amount;

559:         $.weth += amount;

762:         $.totalUnbackedDebt -= rad;

763:         $.debt -= rad;

788:             $.weth += amountWad;

794:             $.weth -= amountWad;

1095:         borrowRate += RAY;

```

```solidity
File: join/GemJoin.sol

78:         totalGem += amount;

93:         totalGem -= amount;

```

```solidity
File: reward/RewardModule.sol

160:         $.normalizedTotalSupply -= amount;

194:         $.normalizedTotalSupply += amount;

```

</details> 
 


 ### <a name="GAS-5"></a>[GAS-5]
 ### Use >= instead of > for gas efficiency
Using >= costs less gas than >. Consider using >= when appropriate.

*Instances (37)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

144:         if (ilkDataList.length > MAX_ILKS) revert InvalidIlkDataListLength(ilkDataList.length);

159:             if (ilkDataList[i].reserveFactor > RAY) {

226:         if (index > COLLATERAL_COUNT - 1) revert CollateralIndexOutOfBounds();

338:             if (slopeNumerator > collateralApyRayInSeconds) {

```

```solidity
File: IonPool.sol

375:             if (timestampIncrease > 0) {

425:             if (timestampIncrease > 0) {

698:                     changeInNormalizedDebt > 0,

708:                     either(changeInNormalizedDebt > 0, changeInCollateral < 0),

709:                     newTotalDebtInVault > _vault.collateral * ilkSpot

714:             if (both(either(changeInNormalizedDebt > 0, changeInCollateral < 0), !isAllowed(u, _msgSender()))) {

719:             if (both(changeInCollateral > 0, !isAllowed(v, _msgSender()))) {

786:             if (amountUint % RAY > 0) ++amountWad;

1139:         if (y < 0 && z > x) revert ArithmeticError();

1140:         if (y > 0 && z < x) revert ArithmeticError();

1148:         if (y > 0 && z > x) revert ArithmeticError();

1148:         if (y > 0 && z > x) revert ArithmeticError();

```

```solidity
File: Liquidation.sol

226:         if (repayRad % RAY > 0) ++repay;

330:         if (liquidateArgs.repay > normalizedDebt * rate) {

348:             if (liquidateArgs.repay % rate > 0) ++liquidateArgs.dart; // round up in protocol favor

358:         if (liquidateArgs.repay % RAY > 0) ++transferAmt; // round up in protocol favor

```

```solidity
File: YieldOracle.sol

153:         if (lastUpdated + UPDATE_LOCK_LENGTH > block.timestamp) revert AlreadyUpdated();

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

100:         if (wethRequiredForRepayment > maxResultingDebt) {

176:         if (amountWethToFlashloan > maxResultingDebt) {

220:         if (tokens.length > 1) revert FlashLoanedTooManyTokens(tokens.length);

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

208:         if (amountRad % RAY > 0) ++repayAmount;

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

245:         if (flashCallbackData.amountToLeverage > 0) {

253:             if (wethToRepay > maxResultingAdditionalDebt) {

291:             if (collateralIn > maxCollateralToRemove) {

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

155:         if (amountIn > maxResultingAdditionalDebt) {

200:         if (amountIn > maxCollateralToRemove) revert FlashswapRepaymentTooExpensive(amountIn, maxCollateralToRemove);

222:         if ((sqrtPriceLimitX96 < MIN_SQRT_RATIO || sqrtPriceLimitX96 > MAX_SQRT_RATIO) && sqrtPriceLimitX96 != 0) {

275:         if (amount0Delta > 0) {

```

```solidity
File: libraries/uniswap/TickMath.sol

49:         if (tick > 0) ratio = type(uint256).max / ratio;

```

```solidity
File: oracles/reserve/ReserveOracle.sol

65:         if (_quorum > FEED_COUNT) revert InvalidQuorum(_quorum);

66:         if (_maxChange == 0 || _maxChange > RAY) revert InvalidMaxChange(_maxChange);

123:         if (min > max) revert InvalidMinMax(min, max);

```

```solidity
File: oracles/spot/SpotOracle.sol

40:         if (_ltv > RAY) {

```

</details> 
 


 ### <a name="GAS-6"></a>[GAS-6]
 ### Using bools for storage incurs overhead
Use uint256(1) and uint256(2) for true/false to avoid a Gwarmaccess (100 gas), and to avoid Gsset (20000 gas) when changing from ‘false’ to ‘true’, after having been ‘true’ in the past. See [source](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/58f635312aa21f947cae5f8578638a85aa2519f5/contracts/security/ReentrancyGuard.sol#L23-L27).

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Whitelist.sol

26:     mapping(address protocolControlledAddress => bool) public protocolWhitelist; // peripheral addresses that can bypass

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

50:     bool private immutable WETH_IS_TOKEN0;

```

</details> 
 


 ### <a name="GAS-7"></a>[GAS-7]
 ### Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Whitelist.sol

44:         for (uint8 i = 0; i < _borrowersRoots.length; i++) {

```

</details> 
 


 ### <a name="GAS-8"></a>[GAS-8]
 ### Consider using assembly for simple zero checks to save gas
Using assembly for simple zero checks can save gas. Consider using assembly when appropriate.

*Instances (26)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

232:         if (index == 0) {

319:         if (distributionFactor == 0) {

```

```solidity
File: IonPool.sol

485:         if (borrowRate == 0) return (0, 0, 0, 0, 0);

684:         if (ilkRate == 0) revert IlkNotInitialized(ilkIndex);

780:         if (amount == 0) return;

```

```solidity
File: Liquidation.sol

172:         if (ilkIndex == 0) {

202:         if (exchangeRate == 0) {

292:         if (exchangeRate == 0) {

```

```solidity
File: Whitelist.sol

102:         if (root == 0) return true;

```

```solidity
File: YieldOracle.sol

163:             if (newExchangeRate == 0) revert InvalidExchangeRate(i);

211:         if (ilkIndex == 0) {

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

87:         if (amountToLeverage == 0) {

162:         if (amountWethToFlashloan == 0) {

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

150:         if (amountToBorrow == 0) return;

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

106:         if (amountToLeverage == 0) {

171:         if (debtToRemove == 0) return;

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

134:         if (amountToLeverage == 0) {

190:         if (debtToRemove == 0) return;

```

```solidity
File: oracles/reserve/ReserveOracle.sol

100:         if (QUORUM == 0) {

134:         if (currentExchangeRate == 0) {

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

41:         if (_secondsAgo == 0) revert InvalidSecondsAgo(_secondsAgo);

```

```solidity
File: reward/RewardModule.sol

133:         if (amountScaled == 0) revert InvalidBurnAmount();

174:         if (amountScaled == 0) revert InvalidMintAmount();

204:         if (amount == 0) return;

307:         if (_normalizedTotalSupply == 0) {

322:         if (_normalizedTotalSupply == 0) {

```

</details> 
 


 ### <a name="GAS-9"></a>[GAS-9]
 ### Expressions for constant values should use immutable rather than constant

#### Impact:
While it doesnt save any gas because the compiler knows that developers often make this mistake, its still best to use the right tool for the task at hand. There is a difference between constant variables and immutable variables, and they should each be used in their appropriate contexts. constants should be used for literal values written into the code, and immutable variables should be used for expressions, or values calculated in, or passed into the constructor.  

*Instances (48)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

31: uint256 constant ADJUSTED_PROFIT_MARGIN_MASK =    0x0000000000000000000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF; 

32: uint256 constant MINIMUM_KINK_RATE_MASK =         0x0000000000000000FFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000000;

42: uint256 constant RESERVE_FACTOR_MASK =            0x000000000000000000000000000000000000000000000000000000000000FFFF;

43: uint256 constant ADJUSTED_BASE_RATE_MASK =        0x000000000000000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF0000;

44: uint256 constant MINIMUM_BASE_RATE_MASK =         0x000000000000FFFFFFFFFFFFFFFFFFFFFFFF0000000000000000000000000000;

45: uint256 constant OPTIMAL_UTILIZATION_MASK =       0x00000000FFFF0000000000000000000000000000000000000000000000000000;

46: uint256 constant DISTRIBUTION_FACTOR_MASK =       0x0000FFFF00000000000000000000000000000000000000000000000000000000;

52: uint256 constant ADJUSTED_ABOVE_KINK_SLOPE_MASK =  0x0000000000000000000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF;

53: uint256 constant MINIMUM_ABOVE_KINK_SLOPE_MASK =   0x0000000000000000FFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000000; 

58: uint8 constant ADJUSTED_PROFIT_MARGIN_SHIFT = 0;

59: uint8 constant MINIMUM_KINK_RATE_SHIFT = 96;

62: uint8 constant RESERVE_FACTOR_SHIFT = 0;

63: uint8 constant ADJUSTED_BASE_RATE_SHIFT = 16;

64: uint8 constant MINIMUM_BASE_RATE_SHIFT = 16 + 96;

65: uint8 constant OPTIMAL_UTILIZATION_SHIFT = 16 + 96 + 96;

66: uint8 constant DISTRIBUTION_FACTOR_SHIFT = 16 + 96 + 96 + 16;

69: uint8 constant ADJUSTED_ABOVE_KINK_SLOPE_SHIFT = 0;

70: uint8 constant MINIMUM_ABOVE_KINK_SLOPE_SHIFT = 96;

72: uint48 constant SECONDS_IN_A_YEAR = 31_536_000;

104:     uint256 private constant MAX_ILKS = 8;

```

```solidity
File: IonPool.sol

100:     bytes32 public constant GEM_JOIN_ROLE = keccak256("GEM_JOIN_ROLE");

101:     bytes32 public constant LIQUIDATOR_ROLE = keccak256("LIQUIDATOR_ROLE");

152:     bytes32 private constant IonPoolStorageLocation = 0xceba3d526b4d5afd91d1b752bf1fd37917c20a6daf576bcb41dd1c57c1f67e00;

```

```solidity
File: YieldOracle.sol

29: uint8 constant APY_PRECISION = 8;

30: uint8 constant PROVIDER_PRECISION = 18;

32: uint32 constant LOOK_BACK = 7;

33: uint256 constant PERIODS = 365 * (10 ** APY_PRECISION) / LOOK_BACK; // 52.142... eAPY_PRECISION

34: uint32 constant ILK_COUNT = 3;

36: uint256 constant UPDATE_LOCK_LENGTH = 84_600;

```

```solidity
File: admin/ProxyAdmin.sol

28:     string public constant UPGRADE_INTERFACE_VERSION = "5.0.0";

```

```solidity
File: flash/handlers/WstEthHandler.sol

24:     IERC20 constant STETH = IERC20(0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84);

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

13: IVault constant VAULT = IVault(0xBA12222222228d8Ba445958a75a0704d566BF2C8);

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

43:     IVault internal constant VAULT = IVault(0xBA12222222228d8Ba445958a75a0704d566BF2C8);

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

45:     uint160 internal constant MIN_SQRT_RATIO = 4_295_128_739;

47:     uint160 internal constant MAX_SQRT_RATIO = 1_461_446_703_485_210_103_287_273_052_203_988_822_378_723_970_342;

```

```solidity
File: libraries/math/WadRayMath.sol

6: uint256 constant WAD = 1e18;

7: uint256 constant RAY = 1e27;

8: uint256 constant RAD = 1e45;

```

```solidity
File: libraries/uniswap/TickMath.sol

9:     int24 internal constant MIN_TICK = -887_272;

11:     int24 internal constant MAX_TICK = -MIN_TICK;

14:     uint160 public constant MIN_SQRT_RATIO = 4_295_128_739;

16:     uint160 internal constant MAX_SQRT_RATIO = 1_461_446_703_485_210_103_287_273_052_203_988_822_378_723_970_342;

```

```solidity
File: oracles/reserve/ReserveOracle.sol

9: uint8 constant FEED_COUNT = 3;

10: uint256 constant UPDATE_COOLDOWN = 1 hours;

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

16: uint8 constant REDSTONE_DECIMALS = 8;

17: uint8 constant CHAINLINK_DECIMALS = 8;

```

```solidity
File: reward/RewardModule.sol

83:     bytes32 public constant ION = keccak256("ION");

87:     bytes32 private constant RewardModuleStorageLocation =

```

</details> 
 


 ### <a name="GAS-10"></a>[GAS-10]
 ### Constructors can be marked payable
Payable functions cost less gas to execute, since the compiler does not have to add extra checks to ensure that a payment wasn  t provided. A constructor can safely be marked as payable, since only the deployer would be able to pass funds, and the project itself would not pass any funds.

*Instances (25)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

142:     constructor(IlkData[] memory ilkDataList, IYieldOracle _yieldOracle) {

```

```solidity
File: IonPool.sol

160:     constructor() {

```

```solidity
File: Liquidation.sol

88:     constructor(

```

```solidity
File: Whitelist.sol

43:     constructor(bytes32[] memory _borrowersRoots, bytes32 _lendersRoot) Ownable(msg.sender) {

```

```solidity
File: YieldOracle.sol

92:     constructor(

```

```solidity
File: admin/ProxyAdmin.sol

33:     constructor(address initialOwner) Ownable(initialOwner) { }

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

82:     constructor(address _logic, address initialOwner, bytes memory _data) ERC1967Proxy(_logic, _data) {

```

```solidity
File: flash/handlers/EthXHandler.sol

36:     constructor(

```

```solidity
File: flash/handlers/SwEthHandler.sol

33:     constructor(

```

```solidity
File: flash/handlers/WstEthHandler.sol

34:     constructor(

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

86:     constructor(uint8 _ilkIndex, IonPool _ionPool, GemJoin _gemJoin, Whitelist _whitelist) {

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

55:     constructor(IUniswapV3Pool _flashloanPool, bytes32 _balancerPoolId) {

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

57:     constructor(IUniswapV3Pool _pool, bool _wethIsToken0) {

```

```solidity
File: join/GemJoin.sol

44:     constructor(IonPool _pool, IERC20 _gem, uint8 _ilkIndex, address owner) Ownable(owner) {

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

23:     constructor(

```

```solidity
File: oracles/reserve/ReserveFeed.sol

10:     constructor(address owner) Ownable(owner) { }

```

```solidity
File: oracles/reserve/ReserveOracle.sol

63:     constructor(uint8 _ilkIndex, address[] memory _feeds, uint8 _quorum, uint256 _maxChange) {

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

23:     constructor(

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

24:     constructor(

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

37:     constructor(

```

```solidity
File: oracles/spot/SpotOracle.sol

39:     constructor(uint256 _ltv, address _reserveOracle) {

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

33:     constructor(

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

29:     constructor(

```

```solidity
File: periphery/IonRegistry.sol

12:     constructor(GemJoin[] memory _gemJoins, address[] memory _depositContracts, address _owner) Ownable(_owner) {

```

```solidity
File: periphery/IonZapper.sol

53:     constructor(

```

</details> 
 


 ### <a name="GAS-11"></a>[GAS-11]
 ### Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: libraries/uniswap/TickMath.sol

26:         require(absTick <= uint256(uint24(MAX_TICK)), "T");

64:         require(sqrtPriceX96 >= MIN_SQRT_RATIO && sqrtPriceX96 < MAX_SQRT_RATIO, "R");

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

22:         require(secondsAgo != 0, "BP");

```

</details> 
 


 ### <a name="GAS-12"></a>[GAS-12]
 ### Initializers can be marked as payable to save deployment gas
Payable functions cost less gas to execute, because the compiler does not have to add extra checks to ensure that no payment is provided. Initializers can be safely marked as payable, because only the deployer or the factory contract would call the function without carrying any funds.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

164:     function initialize(

```

</details> 
 


 ### <a name="GAS-13"></a>[GAS-13]
 ### Use assembly for small keccak256 hashes, in order to save gas
If the arguments to the encode call can fit into the scratch space (two words or fewer), then its more efficient to use assembly to generate the hash (80 gas): keccak256(abi.encodePacked(x, y)) -> assembly {mstore(0x00, a); mstore(0x20, b); let hash := keccak256(0x00, 0x40); }

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Whitelist.sol

103:         bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(addr))));

130:         bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(addr))));

```

</details> 
 


 ### <a name="GAS-14"></a>[GAS-14]
 ### Avoid fetching a low-level calls return data by using assembly
Even if you dont assign the calls second return value, it still gets copied to memory. Use assembly instead to prevent this and save 159 gas: `(bool success,) = payable(receiver).call{gas: gas, value: value}("");` -> `bool success; assembly { success := call(gas, receiver, value, 0, 0, 0, 0)` }

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: libraries/LidoLibrary.sol

46:         (bool success,) = address(wstEth).call{ value: ethAmount }("");

```

</details> 
 


 ### <a name="GAS-15"></a>[GAS-15]
 ### Reduce gas usage by moving to Solidity 0.8.19 or later
Solidity version 0.8.19 introduced a number of gas optimizations, refer to the [Solidity 0.8.19 Release Announcement](https://soliditylang.org/blog/2023/02/22/solidity-0.8.19-release-announcement) for details.

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

2: pragma solidity 0.8.21;

```

```solidity
File: IonPool.sol

2: pragma solidity 0.8.21;

```

```solidity
File: Liquidation.sol

2: pragma solidity 0.8.21;

```

```solidity
File: Whitelist.sol

2: pragma solidity 0.8.21;

```

```solidity
File: YieldOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: admin/ProxyAdmin.sol

4: pragma solidity ^0.8.20;

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

4: pragma solidity ^0.8.20;

```

```solidity
File: flash/handlers/EthXHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/SwEthHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/WstEthHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IChainlink.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IReserveFeed.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IWETH9.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/IYieldOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: interfaces/ProviderInterfaces.sol

2: pragma solidity 0.8.21;

```

```solidity
File: join/GemJoin.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/LidoLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/StaderLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/SwellLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/math/WadRayMath.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: libraries/uniswap/TickMath.sol

2: pragma solidity 0.8.21;

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/ReserveFeed.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/ReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/SpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

2: pragma solidity 0.8.21;

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

3: pragma solidity 0.8.21;

```

```solidity
File: periphery/IonRegistry.sol

2: pragma solidity 0.8.21;

```

```solidity
File: periphery/IonZapper.sol

2: pragma solidity 0.8.21;

```

```solidity
File: reward/RewardModule.sol

2: pragma solidity 0.8.21;

```

</details> 
 


 ### <a name="GAS-16"></a>[GAS-16]
 ### Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (21)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

199:     function initializeIlk(address ilkAddress) external onlyRole(ION) {

229:     function updateIlkSpot(uint8 ilkIndex, SpotOracle newSpot) external onlyRole(ION) {

245:     function updateIlkDebtCeiling(uint8 ilkIndex, uint256 newCeiling) external onlyRole(ION) {

262:     function updateIlkDust(uint8 ilkIndex, uint256 newDust) external onlyRole(ION) {

277:     function updateSupplyCap(uint256 newSupplyCap) external onlyRole(ION) {

291:     function updateInterestRateModule(InterestRate _interestRateModule) external onlyRole(ION) {

309:     function updateWhitelist(Whitelist _whitelist) external onlyRole(ION) {

322:     function pause() external onlyRole(ION) {

332:     function unpause() external onlyRole(ION) {

854:     function mintAndBurnGem(uint8 ilkIndex, address usr, int256 wad) external onlyRole(GEM_JOIN_ROLE) {

```

```solidity
File: Whitelist.sol

55:     function updateBorrowersRoot(uint8 ilkIndex, bytes32 _borrowersRoot) external onlyOwner {

63:     function updateLendersRoot(bytes32 _lendersRoot) external onlyOwner {

71:     function approveProtocolWhitelist(address addr) external onlyOwner {

79:     function revokeProtocolWhitelist(address addr) external onlyOwner {

```

```solidity
File: YieldOracle.sol

126:     function updateIonPool(IonPool _ionPool) external onlyOwner {

```

```solidity
File: join/GemJoin.sol

57:     function pause() external onlyOwner {

65:     function unpause() external onlyOwner {

```

```solidity
File: oracles/reserve/ReserveFeed.sol

12:     function setExchangeRate(uint8 _ilkIndex, uint256 _exchangeRate) external onlyOwner {

```

```solidity
File: periphery/IonRegistry.sol

19:     function setGemJoin(uint8 ilkIndex, GemJoin gemJoin) external onlyOwner {

23:     function setDepositContract(uint8 ilkIndex, address depositContract) external onlyOwner {

```

```solidity
File: reward/RewardModule.sol

230:     function updateTreasury(address newTreasury) external onlyRole(ION) {

```

</details> 
 


 ### <a name="GAS-17"></a>[GAS-17]
 ### `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Whitelist.sol

44:         for (uint8 i = 0; i < _borrowersRoots.length; i++) {

```

</details> 
 


 ### <a name="GAS-18"></a>[GAS-18]
 ### Using `private` rather than `public` for constants, saves gas
If needed, the values can be read from the verified contract source code, or if there are multiple values there can be a single getter function that [returns a tuple](https://github.com/code-423n4/2022-08-frax/blob/90f55a9ce4e25bceed3a74290b854341d8de6afa/src/contracts/FraxlendPair.sol#L156-L178) of the values of all currently-public constants. Saves **3406-3606 gas** in deployment gas due to the compiler not having to create non-payable getter functions for deployment calldata, not having to store the bytes of the value outside of where it's used, and not adding another entry to the method ID table

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: IonPool.sol

100:     bytes32 public constant GEM_JOIN_ROLE = keccak256("GEM_JOIN_ROLE");

101:     bytes32 public constant LIQUIDATOR_ROLE = keccak256("LIQUIDATOR_ROLE");

```

```solidity
File: admin/ProxyAdmin.sol

28:     string public constant UPGRADE_INTERFACE_VERSION = "5.0.0";

```

```solidity
File: libraries/uniswap/TickMath.sol

14:     uint160 public constant MIN_SQRT_RATIO = 4_295_128_739;

```

```solidity
File: reward/RewardModule.sol

83:     bytes32 public constant ION = keccak256("ION");

```

</details> 
 


 ### <a name="GAS-19"></a>[GAS-19]
 ### Use shift Right/Left instead of division/multiplication if possible

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

7: import { IVault, IERC20 as IERC20Balancer } from "@balancer-labs/v2-interfaces/contracts/vault/IVault.sol";

8: import { IFlashLoanRecipient } from "@balancer-labs/v2-interfaces/contracts/vault/IFlashLoanRecipient.sol";

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

11: import { IVault } from "@balancer-labs/v2-interfaces/contracts/vault/IVault.sol";

12: import { IAsset } from "@balancer-labs/v2-interfaces/contracts/vault/IAsset.sol";

```

</details> 
 


 ### <a name="GAS-20"></a>[GAS-20]
 ### Splitting require() statements that use && saves gas

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: libraries/uniswap/TickMath.sol

64:         require(sqrtPriceX96 >= MIN_SQRT_RATIO && sqrtPriceX96 < MAX_SQRT_RATIO, "R");

```

</details> 
 


 ### <a name="GAS-21"></a>[GAS-21]
 ### Structs can be packed into fewer storage slots
Each slot saved can avoid an extra Gsset (20000 gas) for the first setting of the struct. Subsequent reads as well as writes have smaller gas savings

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

9: struct IlkData {

```

```solidity
File: IonPool.sol

119:     struct Ilk {

128:     struct Vault {

134:     struct IonPoolStorage {

```

```solidity
File: Liquidation.sol

160:     struct Configs {

259:     struct LiquidateArgs {

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

194:     struct FlashCallbackData {

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

70:     struct FlashSwapData {

```

```solidity
File: interfaces/ProviderInterfaces.sol

64: struct ExchangeRate {

```

```solidity
File: reward/RewardModule.sol

71:     struct RewardModuleStorage {

```

</details> 
 


 ### <a name="GAS-22"></a>[GAS-22]
 ### Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency
Using uint256(1) and uint256(2) instead of true and false can save gas for certain changes. Consider using uint256(1)/uint256(2) when appropriate.

*Instances (14)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Whitelist.sol

72:         protocolWhitelist[addr] = true;

80:         protocolWhitelist[addr] = false;

100:         if (protocolWhitelist[poolCaller]) return true;

102:         if (root == 0) return true;

105:             return true;

127:         if (protocolWhitelist[poolCaller]) return true;

129:         if (root == bytes32(0)) return true;

132:             return true;

```

```solidity
File: flash/handlers/SwEthHandler.sol

41:         UniswapFlashswapHandler(_swEthPool, true)

```

```solidity
File: flash/handlers/WstEthHandler.sol

42:         UniswapFlashswapHandler(_wstEthUniswapPool, false)

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

116:             fromInternalBalance: false,

118:             toInternalBalance: false

238:             fromInternalBalance: false,

240:             toInternalBalance: false

```

</details> 
 


 ### <a name="GAS-23"></a>[GAS-23]
 ### Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead
Using uints or ints smaller than 32 bytes (256 bits) can incur overhead. Consider using uint256 or int256 to avoid potential issues.

*Instances (125)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

15:     uint16 reserveFactor; // 4 decimals

18:     uint16 optimalUtilizationRate; // 4 decimals

19:     uint16 distributionFactor; // 4 decimals

58: uint8 constant ADJUSTED_PROFIT_MARGIN_SHIFT = 0;

59: uint8 constant MINIMUM_KINK_RATE_SHIFT = 96;

62: uint8 constant RESERVE_FACTOR_SHIFT = 0;

63: uint8 constant ADJUSTED_BASE_RATE_SHIFT = 16;

64: uint8 constant MINIMUM_BASE_RATE_SHIFT = 16 + 96;

65: uint8 constant OPTIMAL_UTILIZATION_SHIFT = 16 + 96 + 96;

66: uint8 constant DISTRIBUTION_FACTOR_SHIFT = 16 + 96 + 96 + 16;

69: uint8 constant ADJUSTED_ABOVE_KINK_SLOPE_SHIFT = 0;

70: uint8 constant MINIMUM_ABOVE_KINK_SLOPE_SHIFT = 96;

270:         uint16 reserveFactor = uint16((packedConfig_b & RESERVE_FACTOR_MASK) >> RESERVE_FACTOR_SHIFT);

270:         uint16 reserveFactor = uint16((packedConfig_b & RESERVE_FACTOR_MASK) >> RESERVE_FACTOR_SHIFT);

273:         uint16 optimalUtilizationRate = uint16((packedConfig_b & OPTIMAL_UTILIZATION_MASK) >> OPTIMAL_UTILIZATION_SHIFT);

273:         uint16 optimalUtilizationRate = uint16((packedConfig_b & OPTIMAL_UTILIZATION_MASK) >> OPTIMAL_UTILIZATION_SHIFT);

274:         uint16 distributionFactor = uint16((packedConfig_b & DISTRIBUTION_FACTOR_MASK) >> DISTRIBUTION_FACTOR_SHIFT);

274:         uint16 distributionFactor = uint16((packedConfig_b & DISTRIBUTION_FACTOR_MASK) >> DISTRIBUTION_FACTOR_SHIFT);

```

```solidity
File: IonPool.sol

36:     error UnsafePositionChangeWithoutConsent(uint8 ilkIndex, address user, address unconsentedOperator);

37:     error GemTransferWithoutConsent(uint8 ilkIndex, address user, address unconsentedOperator);

38:     error UseOfCollateralWithoutConsent(uint8 ilkIndex, address depositor, address unconsentedOperator);

52:     event IlkInitialized(uint8 indexed ilkIndex, address indexed ilkAddress);

53:     event IlkSpotUpdated(uint8 indexed ilkIndex, address newSpot);

54:     event IlkDebtCeilingUpdated(uint8 indexed ilkIndex, uint256 newDebtCeiling);

55:     event IlkDustUpdated(uint8 indexed ilkIndex, uint256 newDust);

62:     event MintAndBurnGem(uint8 indexed ilkIndex, address indexed usr, int256 wad);

63:     event TransferGem(uint8 indexed ilkIndex, address indexed src, address indexed dst, uint256 wad);

71:     event WithdrawCollateral(uint8 indexed ilkIndex, address indexed user, address indexed recipient, uint256 amount);

72:     event DepositCollateral(uint8 indexed ilkIndex, address indexed user, address indexed depositor, uint256 amount);

74:         uint8 indexed ilkIndex,

82:         uint8 indexed ilkIndex,

92:         uint8 indexed ilkIndex,

106:     modifier onlyWhitelistedBorrowers(uint8 ilkIndex, address user, bytes32[] memory proof) {

167:         uint8 decimals_,

208:         if (ilksLength >= uint256(type(uint8).max) + 1) revert MaxIlksReached();

212:         uint8 ilkIndex = uint8(ilksLength);

212:         uint8 ilkIndex = uint8(ilksLength);

229:     function updateIlkSpot(uint8 ilkIndex, SpotOracle newSpot) external onlyRole(ION) {

245:     function updateIlkDebtCeiling(uint8 ilkIndex, uint256 newCeiling) external onlyRole(ION) {

262:     function updateIlkDust(uint8 ilkIndex, uint256 newDust) external onlyRole(ION) {

366:         for (uint8 i = 0; i < ilksLength;) {

416:         for (uint8 i = 0; i < ilksLength;) {

446:     function calculateRewardAndDebtDistributionForIlk(uint8 ilkIndex)

456:         uint8 ilkIndex,

580:         uint8 ilkIndex,

605:         uint8 ilkIndex,

628:         uint8 ilkIndex,

651:         uint8 ilkIndex,

670:         uint8 ilkIndex,

812:         uint8 ilkIndex,

854:     function mintAndBurnGem(uint8 ilkIndex, address usr, int256 wad) external onlyRole(GEM_JOIN_ROLE) {

869:     function transferGem(uint8 ilkIndex, address src, address dst, uint256 wad) external whenNotPaused {

892:     function getIlkIndex(address ilkAddress) external view returns (uint8) {

898:         return uint8($.ilkAddresses._inner._positions[addressInBytes32] - 1);

921:     function totalNormalizedDebt(uint8 ilkIndex) external view returns (uint256) {

926:     function rateUnaccrued(uint8 ilkIndex) external view returns (uint256) {

934:     function rate(uint8 ilkIndex) external view returns (uint256) {

946:     function lastRateUpdate(uint8 ilkIndex) external view returns (uint256) {

954:     function spot(uint8 ilkIndex) external view returns (SpotOracle) {

962:     function debtCeiling(uint8 ilkIndex) external view returns (uint256) {

970:     function dust(uint8 ilkIndex) external view returns (uint256) {

978:     function collateral(uint8 ilkIndex, address user) external view returns (uint256) {

986:     function normalizedDebt(uint8 ilkIndex, address user) external view returns (uint256) {

994:     function vault(uint8 ilkIndex, address user) external view returns (uint256, uint256) {

1002:     function gem(uint8 ilkIndex, address user) external view returns (uint256) {

1085:     function getCurrentBorrowRate(uint8 ilkIndex) external view returns (uint256 borrowRate, uint256 reserveFactor) {

```

```solidity
File: Liquidation.sol

73:         address indexed initiator, address indexed kpr, uint8 indexed ilkIndex, uint256 repay, uint256 gemOut

171:     function _getConfigs(uint8 ilkIndex) internal view returns (Configs memory configs) {

194:     function getRepayAmt(uint8 ilkIndex, address vault) public view returns (uint256 repay) {

276:         uint8 ilkIndex,

```

```solidity
File: Whitelist.sol

29:     mapping(uint8 ilkIndex => bytes32) public borrowersRoot; // root of the merkle tree of borrowers for each ilk

35:     error NotWhitelistedBorrower(uint8 ilkIndex, address addr);

44:         for (uint8 i = 0; i < _borrowersRoots.length; i++) {

55:     function updateBorrowersRoot(uint8 ilkIndex, bytes32 _borrowersRoot) external onlyOwner {

91:         uint8 ilkIndex,

```

```solidity
File: YieldOracle.sol

29: uint8 constant APY_PRECISION = 8;

30: uint8 constant PROVIDER_PRECISION = 18;

158:         for (uint8 i = 0; i < ILK_COUNT;) {

```

```solidity
File: flash/handlers/EthXHandler.sol

37:         uint8 _ilkIndex,

```

```solidity
File: flash/handlers/SwEthHandler.sol

34:         uint8 _ilkIndex,

```

```solidity
File: flash/handlers/WstEthHandler.sol

35:         uint8 _ilkIndex,

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

72:     uint8 public immutable ILK_INDEX;

86:     constructor(uint8 _ilkIndex, IonPool _ionPool, GemJoin _gemJoin, Whitelist _whitelist) {

```

```solidity
File: interfaces/IReserveFeed.sol

16:     function updateExchangeRate(uint8 ilkIndex, uint256 reserve) external;

23:     function getExchangeRate(uint8 ilkIndex) external view returns (uint256);

```

```solidity
File: join/GemJoin.sol

27:     error WrongIlkAddress(uint8 ilkIndex, IERC20 gem);

33:     uint8 public immutable ILK_INDEX;

44:     constructor(IonPool _pool, IERC20 _gem, uint8 _ilkIndex, address owner) Ownable(owner) {

```

```solidity
File: libraries/uniswap/TickMath.sol

9:     int24 internal constant MIN_TICK = -887_272;

11:     int24 internal constant MAX_TICK = -MIN_TICK;

24:     function getSqrtRatioAtTick(int24 tick) internal pure returns (uint160 sqrtPriceX96) {

26:         require(absTick <= uint256(uint24(MAX_TICK)), "T");

62:     function getTickAtSqrtRatio(uint160 sqrtPriceX96) internal pure returns (int24 tick) {

201:         int24 tickLow = int24((log_sqrt10001 - 3_402_992_956_809_132_418_596_140_100_660_247_210) >> 128);

201:         int24 tickLow = int24((log_sqrt10001 - 3_402_992_956_809_132_418_596_140_100_660_247_210) >> 128);

202:         int24 tickHi = int24((log_sqrt10001 + 291_339_464_771_989_622_907_027_621_153_398_088_495) >> 128);

202:         int24 tickHi = int24((log_sqrt10001 + 291_339_464_771_989_622_907_027_621_153_398_088_495) >> 128);

```

```solidity
File: libraries/uniswap/UniswapOracleLibrary.sol

20:         returns (int24 arithmeticMeanTick, uint128 harmonicMeanLiquidity)

37:         arithmeticMeanTick = int24(tickCumulativesDelta) / int24(int32(secondsAgo));

37:         arithmeticMeanTick = int24(tickCumulativesDelta) / int24(int32(secondsAgo));

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

25:         uint8 _ilkIndex,

27:         uint8 _quorum,

```

```solidity
File: oracles/reserve/ReserveFeed.sol

8:     mapping(uint8 ilkIndex => uint256 exchangeRate) public exchangeRates;

12:     function setExchangeRate(uint8 _ilkIndex, uint256 _exchangeRate) external onlyOwner {

16:     function getExchangeRate(uint8 _ilkIndex) external view returns (uint256) {

```

```solidity
File: oracles/reserve/ReserveOracle.sol

9: uint8 constant FEED_COUNT = 3;

34:     uint8 public immutable ILK_INDEX;

35:     uint8 public immutable QUORUM; // the number of feeds to aggregate

49:     error InvalidQuorum(uint8 invalidQuorum);

63:     constructor(uint8 _ilkIndex, address[] memory _feeds, uint8 _quorum, uint256 _maxChange) {

63:     constructor(uint8 _ilkIndex, address[] memory _feeds, uint8 _quorum, uint256 _maxChange) {

99:     function _aggregate(uint8 _ILK_INDEX) internal view returns (uint256 val) {

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

25:         uint8 _ilkIndex,

27:         uint8 _quorum,

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

26:         uint8 _ilkIndex,

28:         uint8 _quorum,

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

16: uint8 constant REDSTONE_DECIMALS = 8;

17: uint8 constant CHAINLINK_DECIMALS = 8;

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

53:         (int24 arithmeticMeanTick,) = UniswapOracleLibrary.consult(address(POOL), SECONDS_AGO);

```

```solidity
File: periphery/IonRegistry.sol

19:     function setGemJoin(uint8 ilkIndex, GemJoin gemJoin) external onlyOwner {

23:     function setDepositContract(uint8 ilkIndex, address depositContract) external onlyOwner {

```

```solidity
File: periphery/IonZapper.sol

91:     function zapRepay(uint8 ilkIndex) external payable {

```

```solidity
File: reward/RewardModule.sol

73:         uint8 decimals;

99:         uint8 decimals_,

252:     function decimals() public view returns (uint8) {

```

</details> 
 


 ### <a name="GAS-24"></a>[GAS-24]
 ### Use != 0 instead of > for unsigned integer comparison

*Instances (37)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

144:         if (ilkDataList.length > MAX_ILKS) revert InvalidIlkDataListLength(ilkDataList.length);

159:             if (ilkDataList[i].reserveFactor > RAY) {

226:         if (index > COLLATERAL_COUNT - 1) revert CollateralIndexOutOfBounds();

338:             if (slopeNumerator > collateralApyRayInSeconds) {

```

```solidity
File: IonPool.sol

375:             if (timestampIncrease > 0) {

425:             if (timestampIncrease > 0) {

698:                     changeInNormalizedDebt > 0,

708:                     either(changeInNormalizedDebt > 0, changeInCollateral < 0),

709:                     newTotalDebtInVault > _vault.collateral * ilkSpot

714:             if (both(either(changeInNormalizedDebt > 0, changeInCollateral < 0), !isAllowed(u, _msgSender()))) {

719:             if (both(changeInCollateral > 0, !isAllowed(v, _msgSender()))) {

786:             if (amountUint % RAY > 0) ++amountWad;

1139:         if (y < 0 && z > x) revert ArithmeticError();

1140:         if (y > 0 && z < x) revert ArithmeticError();

1148:         if (y > 0 && z > x) revert ArithmeticError();

1148:         if (y > 0 && z > x) revert ArithmeticError();

```

```solidity
File: Liquidation.sol

226:         if (repayRad % RAY > 0) ++repay;

330:         if (liquidateArgs.repay > normalizedDebt * rate) {

348:             if (liquidateArgs.repay % rate > 0) ++liquidateArgs.dart; // round up in protocol favor

358:         if (liquidateArgs.repay % RAY > 0) ++transferAmt; // round up in protocol favor

```

```solidity
File: YieldOracle.sol

153:         if (lastUpdated + UPDATE_LOCK_LENGTH > block.timestamp) revert AlreadyUpdated();

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

100:         if (wethRequiredForRepayment > maxResultingDebt) {

176:         if (amountWethToFlashloan > maxResultingDebt) {

220:         if (tokens.length > 1) revert FlashLoanedTooManyTokens(tokens.length);

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

208:         if (amountRad % RAY > 0) ++repayAmount;

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

245:         if (flashCallbackData.amountToLeverage > 0) {

253:             if (wethToRepay > maxResultingAdditionalDebt) {

291:             if (collateralIn > maxCollateralToRemove) {

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

155:         if (amountIn > maxResultingAdditionalDebt) {

200:         if (amountIn > maxCollateralToRemove) revert FlashswapRepaymentTooExpensive(amountIn, maxCollateralToRemove);

222:         if ((sqrtPriceLimitX96 < MIN_SQRT_RATIO || sqrtPriceLimitX96 > MAX_SQRT_RATIO) && sqrtPriceLimitX96 != 0) {

275:         if (amount0Delta > 0) {

```

```solidity
File: libraries/uniswap/TickMath.sol

49:         if (tick > 0) ratio = type(uint256).max / ratio;

```

```solidity
File: oracles/reserve/ReserveOracle.sol

65:         if (_quorum > FEED_COUNT) revert InvalidQuorum(_quorum);

66:         if (_maxChange == 0 || _maxChange > RAY) revert InvalidMaxChange(_maxChange);

123:         if (min > max) revert InvalidMinMax(min, max);

```

```solidity
File: oracles/spot/SpotOracle.sol

40:         if (_ltv > RAY) {

```

</details> 
 


 ### <a name="GAS-25"></a>[GAS-25]
 ### Optimize names to save gas
public/external function names and public member variable names can be optimized to save gas. See [this](https://gist.github.com/IllIllI000/a5d8b486a8259f9f77891a919febd1a9) link for an example of how it works. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save 128 gas each during deployment, and renaming functions to have lower method IDs will save 22 gas per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

*Instances (188)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: InterestRate.sol

134:     uint256 public immutable COLLATERAL_COUNT;

135:     IYieldOracle public immutable YIELD_ORACLE;

305:         external

```

```solidity
File: IonPool.sol

100:     bytes32 public constant GEM_JOIN_ROLE = keccak256("GEM_JOIN_ROLE");

101:     bytes32 public constant LIQUIDATOR_ROLE = keccak256("LIQUIDATOR_ROLE");

174:         external

352:     function accrueInterest() external whenNotPaused returns (uint256 newTotalDebt) {

396:         public

447:         public

528:     function withdraw(address receiverOfUnderlying, uint256 amount) external whenNotPaused {

552:         external

586:         external

610:         external

633:         external

657:         external

758:     function repayBadDebt(address user, uint256 rad) external whenNotPaused {

819:         external

869:     function transferGem(uint8 ilkIndex, address src, address dst, uint256 wad) external whenNotPaused {

884:     function ilkCount() external view returns (uint256) {

892:     function getIlkIndex(address ilkAddress) external view returns (uint8) {

904:     function getIlkAddress(uint256 ilkIndex) external view returns (address) {

912:     function addressContains(address ilk) external view returns (bool) {

921:     function totalNormalizedDebt(uint8 ilkIndex) external view returns (uint256) {

926:     function rateUnaccrued(uint8 ilkIndex) external view returns (uint256) {

934:     function rate(uint8 ilkIndex) external view returns (uint256) {

946:     function lastRateUpdate(uint8 ilkIndex) external view returns (uint256) {

954:     function spot(uint8 ilkIndex) external view returns (SpotOracle) {

962:     function debtCeiling(uint8 ilkIndex) external view returns (uint256) {

970:     function dust(uint8 ilkIndex) external view returns (uint256) {

978:     function collateral(uint8 ilkIndex, address user) external view returns (uint256) {

986:     function normalizedDebt(uint8 ilkIndex, address user) external view returns (uint256) {

994:     function vault(uint8 ilkIndex, address user) external view returns (uint256, uint256) {

1002:     function gem(uint8 ilkIndex, address user) external view returns (uint256) {

1010:     function unbackedDebt(address user) external view returns (uint256) {

1018:     function isOperator(address user, address operator) external view returns (bool) {

1027:     function isAllowed(address user, address operator) public view returns (bool) {

1033:     function debtUnaccrued() external view returns (uint256) {

1042:     function debt() external view returns (uint256) {

1053:     function totalUnbackedDebt() external view returns (uint256) {

1061:     function interestRateModule() external view returns (address) {

1069:     function whitelist() external view returns (address) {

1077:     function weth() external view returns (uint256) {

1085:     function getCurrentBorrowRate(uint8 ilkIndex) external view returns (uint256 borrowRate, uint256 reserveFactor) {

1102:     function implementation() external view returns (address) {

```

```solidity
File: Liquidation.sol

49:     uint256 public immutable TARGET_HEALTH; // [ray] ex) 1.25e27 is 125%

50:     uint256 public immutable BASE_DISCOUNT; // [ray] ex) 0.02e27 is 2%

52:     uint256 public immutable MAX_DISCOUNT_0; // [ray] ex) 0.2e27 is 20%

53:     uint256 public immutable MAX_DISCOUNT_1;

54:     uint256 public immutable MAX_DISCOUNT_2;

57:     uint256 public immutable LIQUIDATION_THRESHOLD_0; // [ray] liquidation threshold for ilkIndex 0

58:     uint256 public immutable LIQUIDATION_THRESHOLD_1; // [ray]

59:     uint256 public immutable LIQUIDATION_THRESHOLD_2; // [ray]

62:     address public immutable RESERVE_ORACLE_0; // reserve oracle providing exchange rate for ilkIndex 0

63:     address public immutable RESERVE_ORACLE_1;

64:     address public immutable RESERVE_ORACLE_2;

66:     address public immutable PROTOCOL; // receives confiscated vault debt and collateral

68:     IonPool public immutable POOL;

69:     IERC20 public immutable UNDERLYING;

194:     function getRepayAmt(uint8 ilkIndex, address vault) public view returns (uint256 repay) {

```

```solidity
File: Whitelist.sol

26:     mapping(address protocolControlledAddress => bool) public protocolWhitelist; // peripheral addresses that can bypass

29:     mapping(uint8 ilkIndex => bytes32) public borrowersRoot; // root of the merkle tree of borrowers for each ilk

31:     bytes32 public lendersRoot; // root of the merkle tree of lenders for each ilk

55:     function updateBorrowersRoot(uint8 ilkIndex, bytes32 _borrowersRoot) external onlyOwner {

63:     function updateLendersRoot(bytes32 _lendersRoot) external onlyOwner {

71:     function approveProtocolWhitelist(address addr) external onlyOwner {

79:     function revokeProtocolWhitelist(address addr) external onlyOwner {

96:         external

123:         external

```

```solidity
File: YieldOracle.sol

71:     uint32[ILK_COUNT] public apys;

73:     uint64[ILK_COUNT][LOOK_BACK] public historicalExchangeRates;

74:     address public immutable ADDRESS0;

75:     address public immutable ADDRESS1;

76:     address public immutable ADDRESS2;

78:     IonPool public ionPool;

80:     uint32 public currentIndex;

81:     uint48 public lastUpdated;

126:     function updateIonPool(IonPool _ionPool) external onlyOwner {

```

```solidity
File: admin/ProxyAdmin.sol

28:     string public constant UPGRADE_INTERFACE_VERSION = "5.0.0";

49:         public

```

```solidity
File: admin/TransparentUpgradeableProxy.sol

23:     function upgradeToAndCall(address, bytes calldata) external payable;

```

```solidity
File: flash/handlers/EthXHandler.sol

24:     IStaderStakePoolsManager public immutable STADER_DEPOSIT;

```

```solidity
File: flash/handlers/base/BalancerFlashloanDirectMintHandler.sol

136:         external

217:         external

```

```solidity
File: flash/handlers/base/IonHandlerBase.sol

71:     IWETH9 public immutable WETH;

72:     uint8 public immutable ILK_INDEX;

73:     IonPool public immutable POOL;

74:     GemJoin public immutable JOIN;

75:     IERC20 public immutable LST_TOKEN;

76:     Whitelist public immutable WHITELIST;

257:     receive() external payable {

```

```solidity
File: flash/handlers/base/UniswapFlashloanBalancerSwapHandler.sol

46:     IUniswapV3Pool public immutable FLASHLOAN_POOL;

47:     bytes32 public immutable BALANCER_POOL_ID;

98:         external

231:     function uniswapV3FlashCallback(uint256 fee0, uint256 fee1, bytes calldata data) external override {

```

```solidity
File: flash/handlers/base/UniswapFlashswapHandler.sol

49:     IUniswapV3Pool public immutable UNISWAP_POOL;

257:     function uniswapV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes calldata _data) external override {

```

```solidity
File: interfaces/IChainlink.sol

6:         external

```

```solidity
File: interfaces/IReserveFeed.sol

23:     function getExchangeRate(uint8 ilkIndex) external view returns (uint256);

```

```solidity
File: interfaces/IWETH9.sol

13:     function deposit() external payable;

```

```solidity
File: interfaces/IYieldOracle.sol

5:     function apys(uint256 ilkIndex) external view returns (uint32);

```

```solidity
File: interfaces/ProviderInterfaces.sol

5:     function submit(address _referral) external payable returns (uint256);

7:     function getTotalPooledEther() external view returns (uint256);

9:     function getTotalShares() external view returns (uint256);

11:     function getSharesByPooledEth(uint256 _ethAmount) external view returns (uint256);

13:     function getCurrentStakeLimit() external view returns (uint256);

31:     function getStETHByWstETH(uint256 _ETHAmount) external view returns (uint256);

33:     function getWstETHByStETH(uint256 _stETHAmount) external view returns (uint256);

35:     function stETH() external view returns (address);

37:     function stEthPerToken() external view returns (uint256);

41:     function deposit(address _receiver) external payable returns (uint256);

43:     function previewDeposit(uint256 _assets) external view returns (uint256);

45:     function previewWithdraw(uint256 _shares) external view returns (uint256);

47:     function getExchangeRate() external view returns (uint256);

49:     function staderConfig() external view returns (IStaderConfig);

51:     function totalAssets() external view returns (uint256);

55:     function getMinDepositAmount() external view returns (uint256);

57:     function getMaxDepositAmount() external view returns (uint256);

59:     function getStaderOracle() external view returns (address);

74:     function getExchangeRate() external view returns (ExchangeRate memory);

78:     function deposit() external payable;

80:     function swETHToETHRate() external view returns (uint256);

82:     function ethToSwETHRate() external view returns (uint256);

84:     function getRate() external view returns (uint256);

```

```solidity
File: join/GemJoin.sol

31:     IERC20 public immutable GEM;

32:     IonPool public immutable POOL;

33:     uint8 public immutable ILK_INDEX;

35:     uint256 public totalGem;

57:     function pause() external onlyOwner {

65:     function unpause() external onlyOwner {

75:     function join(address user, uint256 amount) external whenNotPaused {

90:     function exit(address user, uint256 amount) external whenNotPaused {

```

```solidity
File: libraries/uniswap/TickMath.sol

14:     uint160 public constant MIN_SQRT_RATIO = 4_295_128_739;

```

```solidity
File: oracles/reserve/EthXReserveOracle.sol

13:     address public immutable PROTOCOL_FEED;

```

```solidity
File: oracles/reserve/ReserveFeed.sol

8:     mapping(uint8 ilkIndex => uint256 exchangeRate) public exchangeRates;

12:     function setExchangeRate(uint8 _ilkIndex, uint256 _exchangeRate) external onlyOwner {

16:     function getExchangeRate(uint8 _ilkIndex) external view returns (uint256) {

```

```solidity
File: oracles/reserve/ReserveOracle.sol

34:     uint8 public immutable ILK_INDEX;

35:     uint8 public immutable QUORUM; // the number of feeds to aggregate

36:     uint256 public immutable MAX_CHANGE; // maximum change allowed in percentage [ray] i.e. 3e25 [ray] would be 3%

38:     IReserveFeed public immutable FEED0; // different reserve oracle feeds excluding the protocol exchange rate

39:     IReserveFeed public immutable FEED1;

40:     IReserveFeed public immutable FEED2;

42:     uint256 public currentExchangeRate; // [wad] the bounded queried last time

43:     uint256 public lastUpdated; // [wad] the bounded queried last time

90:     function getProtocolExchangeRate() external view returns (uint256) {

```

```solidity
File: oracles/reserve/SwEthReserveOracle.sol

13:     address public immutable PROTOCOL_FEED;

```

```solidity
File: oracles/reserve/WstEthReserveOracle.sol

14:     address public immutable WST_ETH;

```

```solidity
File: oracles/spot/EthXSpotOracle.sol

11:         external

27:     IRedstonePriceFeed public immutable REDSTONE_ETHX_PRICE_FEED;

28:     IChainlink public immutable USD_PER_ETH_CHAINLINK;

55:     function getPrice() public view override returns (uint256 ethPerEthX) {

```

```solidity
File: oracles/spot/SpotOracle.sol

27:     uint256 public immutable LTV; // max LTV for a position (below liquidation threshold) [ray]

28:     ReserveOracle public immutable RESERVE_ORACLE;

55:     function getPrice() public view virtual returns (uint256 price);

64:     function getSpot() external view returns (uint256 spot) {

```

```solidity
File: oracles/spot/SwEthSpotOracle.sol

23:     IUniswapV3Pool public immutable POOL;

24:     uint32 public immutable SECONDS_AGO;

52:     function getPrice() public view override returns (uint256 ethPerSwEth) {

```

```solidity
File: oracles/spot/WstEthSpotOracle.sol

19:     IChainlink public immutable ST_ETH_TO_ETH_CHAINLINK;

20:     IWstEth public immutable WST_ETH;

50:     function getPrice() public view override returns (uint256 ethPerWstEth) {

```

```solidity
File: periphery/IonRegistry.sol

9:     GemJoin[] public gemJoins;

10:     address[] public depositContracts;

19:     function setGemJoin(uint8 ilkIndex, GemJoin gemJoin) external onlyOwner {

23:     function setDepositContract(uint8 ilkIndex, address depositContract) external onlyOwner {

```

```solidity
File: periphery/IonZapper.sol

23:     IonPool public immutable POOL;

24:     IWETH9 public immutable WETH;

26:     IERC20 public immutable STETH;

27:     IWstEth public immutable WSTETH;

28:     GemJoin public immutable WSTETH_JOIN;

30:     Whitelist public immutable WHITELIST;

79:     function zapSupply(bytes32[] calldata proof) external payable onlyWhitelistedLenders(proof) {

91:     function zapRepay(uint8 ilkIndex) external payable {

```

```solidity
File: reward/RewardModule.sol

83:     bytes32 public constant ION = keccak256("ION");

244:     function underlying() public view returns (IERC20) {

252:     function decimals() public view returns (uint8) {

261:     function balanceOf(address user) public view returns (uint256) {

273:     function normalizedBalanceOf(address user) external view returns (uint256) {

281:     function name() public view returns (string memory) {

289:     function symbol() public view returns (string memory) {

297:     function treasury() public view returns (address) {

302:     function totalSupplyUnaccrued() public view returns (uint256) {

317:     function totalSupply() public view returns (uint256) {

331:     function normalizedTotalSupplyUnaccrued() public view returns (uint256) {

339:     function normalizedTotalSupply() public view returns (uint256) {

350:     function supplyFactorUnaccrued() public view returns (uint256) {

358:     function supplyFactor() public view returns (uint256) {

367:         public

```

</details> 
 

