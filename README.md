# Report


## Medium Issues


| |Issue|Instances|
|-|:-|:-:|
| [M-1](#M-1) | Avoid using ecrecover() | 9 |
| [M-2](#M-2) | Code will not work properly on L2 due to block.number | 2 |
| [M-3](#M-3) | Centralization Risk for trusted owners | 66 |
| [M-4](#M-4) | Unsafe use of ERC20 transferFrom() | 2 |
| [M-5](#M-5) | Unsafe use of ERC20 transfer() | 7 |

## Low Issues


| |Issue|Instances|
|-|:-|:-:|
| [L-1](#L-1) | complex casting | 125 |
| [L-2](#L-2) | Functions calling contracts/addresses with transfer hooks are missing reentrancy guards | 1 |
| [L-3](#L-3) | decimals() is not a part of the ERC-20 standard | 2 |
| [L-4](#L-4) | symbol() is not a part of the ERC-20 standard | 2 |
| [L-5](#L-5) | Tokens may be minted to address(0x0) | 4 |
| [L-6](#L-6) |  `abi.encodePacked()` should not be used with dynamic types when passing the result to a hash function such as `keccak256()` | 17 |
| [L-7](#L-7) | constructor/initialize function lacks parameter validation | 2 |
| [L-8](#L-8) | Division by zero not prevented | 29 |
| [L-9](#L-9) | Empty function body | 23 |
| [L-10](#L-10) | Initializers could be front-run | 2 |
| [L-11](#L-11) | Use Ownable2Step instead of Ownable | 13 |
| [L-12](#L-12) | Owner can renounce Ownership   | 13 |
| [L-13](#L-13) | Loss of precision | 29 |
| [L-14](#L-14) | State variables not capped at reasonable values | 184 |
| [L-15](#L-15) | Some tokens may revert when zero value transfers are made | 7 |
| [L-16](#L-16) |  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard   | 7 |
| [L-17](#L-17) | Some tokens may revert when large transfers are made | 22 |
| [L-18](#L-18) | Unsafe casting | 56 |
| [L-19](#L-19) | Unsafe ERC20 operation(s) | 9 |

## Non Critical Issues


| |Issue|Instances|
|-|:-|:-:|
| [NC-1](#NC-1) | Contracts should have full test coverage | 84 |
| [NC-2](#NC-2) | Consider adding formal verification proofs | 84 |
| [NC-3](#NC-3) | Large or complicated code bases should implement invariant tests | 84 |
| [NC-4](#NC-4) | Custom error has no error details | 13 |
| [NC-5](#NC-5) | NatSpec: Interface declarations should have NatSpec descriptions | 39 |
| [NC-6](#NC-6) | Contract uses both require()/revert() as well as custom errors   | 2 |
| [NC-7](#NC-7) | Variables without visibility specifier | 133 |
| [NC-8](#NC-8) | Array is push()ed but not pop()ed | 8 |
| [NC-9](#NC-9) | Assembly blocks should have extensive comments | 3 |
| [NC-10](#NC-10) | Constants in comparisons should appear on the left side | 90 |
| [NC-11](#NC-11) | constants should be defined rather than using magic numbers | 6 |
| [NC-12](#NC-12) | Contract declarations should have NatSpec @author annotations | 62 |
| [NC-13](#NC-13) | Contract declarations should have NatSpec @Title annotations | 62 |
| [NC-14](#NC-14) | NatSpec: Contract declarations should have @dev tags | 62 |
| [NC-15](#NC-15) | NatSpec: Contract declarations should have NatSpec descriptions | 62 |
| [NC-16](#NC-16) | NatSpec: Contract declarations should have @notice tags | 62 |
| [NC-17](#NC-17) | Consider using delete rather than assigning zero to clear value | 21 |
| [NC-18](#NC-18) | Consider using delete rather than assigning false to clear value | 3 |
| [NC-19](#NC-19) | Consider adding a block/deny-list" | 62 |
| [NC-20](#NC-20) | Use bytes.concat() on bytes instead of abi.encodePacked() for clearer semantic meaning | 19 |
| [NC-21](#NC-21) | Consider adding emergency-stop functionality | 62 |
| [NC-22](#NC-22) | Error declarations should have NatSpec descriptions | 19 |
| [NC-23](#NC-23) | Custom error has no error details | 19 |
| [NC-24](#NC-24) | Events are missing sender information | 141 |
| [NC-25](#NC-25) | NatSpec: Event declarations should have NatSpec descriptions | 116 |
| [NC-26](#NC-26) | Events should use parameters to convey information | 1 |
| [NC-27](#NC-27) | contracts should use fixed compiler versions | 84 |
| [NC-28](#NC-28) | NatSpec: function declarations should have NatSpec descriptions | 664 |
| [NC-29](#NC-29) | NatSpec: function declarations should have @Notice tags | 664 |
| [NC-30](#NC-30) | NatSpec: function declarations should have NatSpec descriptions | 664 |
| [NC-31](#NC-31) | If-statement can be converted to a ternary | 98 |
| [NC-32](#NC-32) | Variable names for immutables should use CONSTANT_CASE | 11 |
| [NC-33](#NC-33) | Large multiples of ten should use scientific notation | 1 |
| [NC-34](#NC-34) | Consider using named mappings | 3 |
| [NC-35](#NC-35) | Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct | 20 |
| [NC-36](#NC-36) | Use of override is unnecessary | 39 |
| [NC-37](#NC-37) | Consider using descriptive constants when using 0 in the code | 71 |
| [NC-38](#NC-38) | Non-external/public variable names should begin with an underscore | 155 |
| [NC-39](#NC-39) | Return values of `approve()` not checked | 4 |
| [NC-40](#NC-40) | Setters should prevent re-setting of the same value | 91 |
| [NC-41](#NC-41) | Use the latest solidity version for deployment   | 84 |
| [NC-42](#NC-42) | Consider bounding input array length | 7 |
| [NC-43](#NC-43) | Overflows in unchecked blocks | 3 |
| [NC-44](#NC-44) | Constants should be defined rather than using magic numbers | 1 |
| [NC-45](#NC-45) | Variables need not be initialized to zero | 18 |
| [NC-46](#NC-46) | Import Whole Files Instead of Specific Identifiers | 175 |
| [NC-47](#NC-47) | Consider moving msg.sender checks to modifiers | 82 |
| [NC-48](#NC-48) | Dont use _msgSender() if not supporting EIP-2771 | 15 |
| [NC-49](#NC-49) | Array indices should be referenced via enums rather than numeric literals | 2 |
| [NC-50](#NC-50) | <array>.length should not be looked up in every loop of a for-loop | 7 |
| [NC-51](#NC-51) | Use assembly to emit events, in order to save gas | 161 |
| [NC-52](#NC-52) | Don't initialize variables with default value | 19 |
| [NC-53](#NC-53) | Long revert strings | 8 |

## Gas Optimizations


| |Issue|Instances|
|-|:-|:-:|
| [GAS-1](#GAS-1) | Enable IR-based code generation | 84 |
| [GAS-2](#GAS-2) | Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18) | 7 |
| [GAS-3](#GAS-3) | Nesting if-statements is cheaper than using && | 20 |
| [GAS-4](#GAS-4) | Consider using = instead of += and -= for gas efficiency | 25 |
| [GAS-5](#GAS-5) | Use >= instead of > for gas efficiency | 88 |
| [GAS-6](#GAS-6) | Using bools for storage incurs overhead | 15 |
| [GAS-7](#GAS-7) | Cache array length outside of loop | 7 |
| [GAS-8](#GAS-8) | Consider using assembly for simple zero checks to save gas | 9 |
| [GAS-9](#GAS-9) | Expressions for constant values should use immutable rather than constant | 24 |
| [GAS-10](#GAS-10) | Constructors can be marked payable | 31 |
| [GAS-11](#GAS-11) | Use Custom Errors | 238 |
| [GAS-12](#GAS-12) | Initializers can be marked as payable to save deployment gas | 2 |
| [GAS-13](#GAS-13) | Use assembly for small keccak256 hashes, in order to save gas | 31 |
| [GAS-14](#GAS-14) | Reduce gas usage by moving to Solidity 0.8.19 or later | 84 |
| [GAS-15](#GAS-15) | Functions guaranteed to revert when called by normal users can be marked `payable` | 74 |
| [GAS-16](#GAS-16) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 12 |
| [GAS-17](#GAS-17) | Using `private` rather than `public` for constants, saves gas | 21 |
| [GAS-18](#GAS-18) | require()/revert() strings longer than 32 bytes cost extra gas | 117 |
| [GAS-19](#GAS-19) | Use shift Right/Left instead of division/multiplication if possible | 1 |
| [GAS-20](#GAS-20) | Splitting require() statements that use && saves gas | 3 |
| [GAS-21](#GAS-21) | Structs can be packed into fewer storage slots | 33 |
| [GAS-22](#GAS-22) | Variables can be packed into fewer storage slots by truncating timestamp bytes | 1 |
| [GAS-23](#GAS-23) | Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency | 35 |
| [GAS-24](#GAS-24) | Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead | 163 |
| [GAS-25](#GAS-25) | Use != 0 instead of > for unsigned integer comparison | 88 |
| [GAS-26](#GAS-26) | Optimize names to save gas | 584 |

##################################################################### 
 
 DETAILED REPORT:: 


##################################################################### 


## Medium Issues


 ### <a name="M-1"></a>[M-1]
 ### Avoid using ecrecover()
Using ecrecover() to verify signatures can be dangerous and should be replaced with a safer alternative such as OpenZeppelin’s ECDSA library.

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

93:         return ecrecover(digest, v,r,s);

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

76:         return ecrecover(digest, v,r,s);

86:         return ecrecover(digest, v,r,s);

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

139:         return ecrecover(digest, v,r,s);

149:         return ecrecover(digest, v,r,s);

159:         return ecrecover(digest, v,r,s);

169:         return ecrecover(digest, v,r,s);

179:         return ecrecover(digest, v,r,s);

189:         return ecrecover(digest, v,r,s);

```

</details> 
 


 ### <a name="M-2"></a>[M-2]
 ### Code will not work properly on L2 due to block.number
On L2, the block.number is not a reliable source of timing information and the time between each block is also different from Ethereum. This is because each transaction on L2 is placed in a separate block and blocks are not produce at a constant rate.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Triggers/TriggersV1.sol

1066:         uint currentBlockTriggers = triggersPerBlock[block.number];

1071:         triggersPerBlock[block.number] = currentBlockTriggers + 1;

```

</details> 
 


 ### <a name="M-3"></a>[M-3]
 ### Centralization Risk for trusted owners

#### Impact:
Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (66)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

44:     ) OFT(_name, _symbol, _lzEndpoint, _delegate) BaseChip(_registry, ChipMode.REMOTE) Ownable(_initialOwner)  {

55:     function setAutoApprovedSpenderForRole(string calldata role, address spender) external onlyOwner {

63:     function setIsSendPaused(bool _isPaused) external onlyOwner {

77:     function setCreditController(ILzCreditControllerV1 _creditController) external onlyOwner {

94:     function setDebitController(ILzDebitControllerV1 _debitController) external onlyOwner {

114:     function sweepTokens(ERC20 _token, uint256 _amount) external onlyOwner {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

44:     ) OFTAdapter(_token, _layerZeroEndpoint, _delegate) Ownable(_initialOwner) {}

52:     function setIsSendPaused(bool _isPaused) external onlyOwner {

66:     function setCreditController(ILzCreditControllerV1 _creditController) external onlyOwner {

83:     function setDebitController(ILzDebitControllerV1 _debitController) external onlyOwner {

100:     function renounceUnderlyingRecovery() external onlyOwner {

111:     function recoverUnderlying(uint256 _amount) external onlyOwner {

125:     function sweepTokens(IERC20 _token, uint256 _amount) external onlyOwner {

```

```solidity
File: Lynx/Common/CaptainBase.sol

7: contract BaseCaptain is Ownable2Step {

11:     constructor(address _initialOwner, uint8 _administrativeRole) Ownable(_initialOwner) {

24:     function grantRole(uint8 role, address account) external onlyOwner {

28:     function revokeRole(uint8 role, address account) external onlyOwner {

```

```solidity
File: Lynx/Lex/LexCaptain.sol

27:     modifier onlyRole(LexRole role) {

37:     ) external onlyRole(LexRole.EMERGENCY) {

48:     ) external onlyRole(LexRole.ACCOUNTANT_POOL_CONNECTOR) {

55:     ) external onlyRole(LexRole.PNL_SETTER) {

62:     ) external onlyRole(LexRole.FEE_SETTER) {

69:     ) external onlyRole(LexRole.EPOCHS_TIMING_SETTER) {

76:     ) external onlyRole(LexRole.EPOCHS_TIMING_SETTER) {

83:     ) external onlyRole(LexRole.EPOCHS_TIMING_SETTER) {

90:     ) external onlyRole(LexRole.TRADING_PARAMS_SETTER) {

96:     ) external onlyRole(LexRole.TRADING_PARAMS_SETTER) {

103:     ) external onlyRole(LexRole.FEES_COLLECTOR) {

112:     ) external onlyRole(LexRole.NOTIFIERS_SETTER) {

119:     ) external onlyRole(LexRole.CAPS_SETTER) {

126:     ) external onlyRole(LexRole.RATE_MODELS_SETTER) {

133:     ) external onlyRole(LexRole.CAPS_SETTER) {

140:     ) external onlyRole(LexRole.FEE_SETTER) {

147:     ) external onlyRole(LexRole.CAPS_SETTER) {

154:     ) external onlyRole(LexRole.TRADING_PARAMS_SETTER) {

161:     ) external onlyRole(LexRole.FEE_SETTER) {

168:     ) external onlyRole(LexRole.RATE_MODELS_SETTER) {

175:     ) external onlyRole(LexRole.IRM_FORCE_SETTER) {

182:     ) external onlyRole(LexRole.FEE_SETTER) {

189:     ) external onlyRole(LexRole.CAPS_SETTER) {

196:     ) external onlyRole(LexRole.CAPS_SETTER) {

203:     ) external onlyRole(LexRole.CAPS_SETTER) {

210:     ) external onlyRole(LexRole.CAPS_SETTER) {

220:         onlyRole(LexRole.INSTRUMENTS_EDITOR)

221:         onlyRole(LexRole.CAPS_SETTER)

231:         onlyRole(LexRole.INSTRUMENTS_EDITOR)

232:         onlyRole(LexRole.CAPS_SETTER)

241:     ) external onlyRole(LexRole.FEE_SETTER) {

248:     ) external onlyRole(LexRole.FEE_SETTER) {

258:         onlyRole(LexRole.INSTRUMENTS_EDITOR)

259:         onlyRole(LexRole.FEE_SETTER)

260:         onlyRole(LexRole.CAPS_SETTER)

271:         onlyRole(LexRole.INSTRUMENTS_EDITOR)

272:         onlyRole(LexRole.FEE_SETTER)

273:         onlyRole(LexRole.CAPS_SETTER)

283:         onlyRole(LexRole.INSTRUMENTS_EDITOR)

284:         onlyRole(LexRole.FEE_SETTER)

285:         onlyRole(LexRole.CAPS_SETTER)

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

11: contract MutableSingleKinkRateModel is Ownable, BaseSingleKinkRateModel {

13:     constructor(address _initialOwner) Ownable(_initialOwner) {}

15:     function setRateParams(uint256 _baseRate, uint256 _multiplier, uint256 _kink, uint256 _postKinkMultiplier) external onlyOwner {

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

6: contract SteadyRateModel is Ownable {

11:     constructor(address _owner, uint _defaultRate) Ownable(_owner) {

15:     function setDefaultSteadyRate(uint _newDefaultRate) external onlyOwner {

```

</details> 
 


 ### <a name="M-4"></a>[M-4]
 ### Unsafe use of ERC20 transferFrom()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transferFrom() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransferFrom() from OpenZeppelin instead.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

212:             IERC20(chip).transferFrom(holder, address(this), feeAmount);

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

59:     function transferFrom(

```

</details> 
 


 ### <a name="M-5"></a>[M-5]
 ### Unsafe use of ERC20 transfer()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transfer() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransfer() from OpenZeppelin instead.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

157:         payable(admin).transfer(_amount);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

117:         _token.transfer(owner(), _amount);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

114:         innerToken.transfer(owner(), _amount);

128:         _token.transfer(owner(), _amount);

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

228:             IERC20(chip).transfer(receiver, amount);

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

42:     function transfer(address recipient, uint256 amount) public returns (bool) {

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

63:         payable(burner).transfer(unwrappedNativeAmount);

```

</details> 
 


## Low Issues


 ### <a name="L-1"></a>[L-1]
 ### complex casting
Consider whether the number of casts is really necessary, or whether using a different type would be more appropriate. Alternatively, add comments to explain in detail why the casts are necessary, and any implicit reasons why the cast does not introduce an overflow.

*Instances (125)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

182:         _mint(_toAddress, ownAmountToMint);

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

79:         return getLZDstChainIdFromEvmChainIdInternal(uint16(chipSourceChain));

145:             uint8(ChipsIntentsVerifierActions.CHIP_OUT_LZ),

151:         uint16 destChainId = getLZDstChainIdFromEvmChainIdInternal(uint16(chainId));

254:         return bytes32(uint256(uint160(add)));

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

116:             uint8(LiquidityIntentsVerifierActions.REQUEST_EPOCH_DEPOSIT),

136:             uint8(LiquidityIntentsVerifierActions.REQUEST_EPOCH_REDEEM),

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

234:             uint8(TradeIntentsVerifierActions.REQUEST_POSITION_OPEN),

264:         validateNonceForActionAndIncrease(payload.positionId, uint8(TradeIntentsVerifierActions.REQUEST_POSITION_MARKET_CLOSE), payload.nonce);

289:         validateNonceForActionAndIncrease(payload.positionId, uint8(TradeIntentsVerifierActions.REQUEST_POSITION_SINGLE_FIELD_UPDATE), payload.nonce);

316:             uint8(TradeIntentsVerifierActions.REQUEST_POSITION_DOUBLE_FIELD_UPDATE),

344:         validateNonceForActionAndIncrease(payload.positionId, uint8(TradeIntentsVerifierActions.DIRECT_UPDATE_PENDING_LIMIT_POSITION), payload.nonce);

368:         validateNonceForActionAndIncrease(payload.positionId, uint8(TradeIntentsVerifierActions.DIRECT_CANCEL_PENDING_LIMIT_POSITION), payload.nonce);

```

```solidity
File: Lynx/Lex/LexCaptain.sol

25:     constructor() BaseCaptain(msg.sender, uint8(LexRole.ADMINISTRATIVE)) {}

28:         _requireRole(uint8(role));

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

99:     function _mint(address account, uint256 amount) internal {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

322:         _mint(user, amountToMint);

532:             _mint(user, actualAmountOut);

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

128:             ? int256(valueLargePay)

129:             : -int256(valueSmallReceive);

131:             ? -int256(valueSmallReceive)

132:             : int256(valueLargePay);

145:         int256 liqPriceDistance = (((int256(openPrice) *

146:             (int256((collateral * liquidationThresholdF) / FRACTION_SCALE) -

147:                 int256(interest) -

149:                 int256(closingFee))) / int256(collateral)) *

149:                 int256(closingFee))) / int256(collateral)) *

150:             int256(LEVERAGE_SCALE)) / int256(leverage);

150:             int256(LEVERAGE_SCALE)) / int256(leverage);

153:             ? int256(openPrice) - liqPriceDistance

154:             : int256(openPrice) + liqPriceDistance;

156:         return liqPrice > 0 ? uint256(liqPrice) : 0;

165:         int256 sOpenPrice = int256(openPrice); // Signed

166:         int256 sTargetPrice = int256(targetPrice); // Signed

172:             (pricesDiff * int256((PRECISION * leverage) / LEVERAGE_SCALE)) /

191:         return (uint256(profitPrecision) * collateral) / PRECISION;

276:                 int256(collateral * leverage)) /

277:             int256(LEVERAGE_SCALE * PRECISION * ACCURACY_IMPROVEMENT_SCALE);

300:         int256 profit = (int256(collateral) * profitPrecision) /

301:             int256(PRECISION);

305:                 uint256(profit),

315:         uint256 loss = uint256(-profit);

335:         int256 value = int256(collateral) +

336:             (int256(collateral) * profitPrecision) /

337:             int256(PRECISION) -

338:             int256(interest) -

340:             int256(closingFee);

344:                 (value * int256(FRACTION_SCALE - liquidationFeeF)) /

345:                 int256(FRACTION_SCALE); // Taking liquidation fee

348:         return value > 0 ? uint256(value) : 0;

417:         uint256 collateralAfterFunding = funding > int256(collateral)

419:             : uint256(int256(collateral) - funding);

621:             ? int256(_leveragedPos)

622:             : -int256(_leveragedPos);

636:                 int256(PRECISION * ACCURACY_IMPROVEMENT_SCALE)) /

637:                 int256(price));

650:                 int256(ACCURACY_IMPROVEMENT_SCALE) *

651:                 int256(PRECISION * ACCURACY_IMPROVEMENT_SCALE)) /

673:         int256 iPnlExtraScale = int256(ACCURACY_IMPROVEMENT_SCALE);

677:                 (int256(price) * iPnlExtraScale - effEntryPrice)) /

700:         int256 skew = int256(openInterestLong) - int256(openInterestShort);

700:         int256 skew = int256(openInterestLong) - int256(openInterestShort);

702:             ? int256(additionOpenInterest)

703:             : -int256(additionOpenInterest);

705:         return skew > 0 ? uint256(skew) : uint256(-skew);

705:         return skew > 0 ? uint256(skew) : uint256(-skew);

782:         return int256(oi.long) - int256(oi.short);

782:         return int256(oi.long) - int256(oi.short);

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

131:         if (currentGains > 0 && currentGains >= int256(pairs[pairId].maxGain)) {

135:                 uint256(currentGains)

274:         int256 gains = (int256(collateral) * profitPrecision) /

275:             int256(PRECISION);

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

389:         if (potentialProfitPrecision > int256(maxGainPrecision)) {

393:                 uint256(potentialProfitPrecision)

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

120:                 timestamp: uint64(block.timestamp),

166:             timestamp: uint64(block.timestamp),

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

415:         position.inPhaseSince = uint64(block.timestamp);

455:         position.inPhaseSince = uint64(block.timestamp);

493:         _position.inPhaseSince = uint64(block.timestamp);

695:                 uint64(poolAccountant.maxGainF()),

707:             limitInfo.tpLastUpdated = uint64(block.timestamp);

724:                 uint64(poolAccountant.maxGainF()),

737:             limitInfo.slLastUpdated = uint64(block.timestamp);

857:         positionsById[_positionId].inPhaseSince = uint64(block.timestamp);

1004:             _positionStorage.inPhaseSince = uint64(block.timestamp);

1092:             uint64(maxGainF),

1099:         positionLimits.tpLastUpdated = uint64(block.timestamp);

1102:             uint64(maxGainF),

1108:         positionLimits.slLastUpdated = uint64(block.timestamp);

1408:                 .positionInArray = uint32(

1498:             int64(maxGainF)

1500:             uint64 tpDiff = uint64(((uint256(openPrice) * uint256(maxGainF)) * LEVERAGE_SCALE) /

1500:             uint64 tpDiff = uint64(((uint256(openPrice) * uint256(maxGainF)) * LEVERAGE_SCALE) /

1501:                 uint256(leverage) /

1527:             int(maxSlF) * -1

1529:             uint64 slDiff = uint64(

1531:                 uint256(leverage) /

1555:         int64 maxPnlF = int64(maxGainF);

1558:                             ? int64(currentPrice) - int64(openPrice)

1558:                             ? int64(currentPrice) - int64(openPrice)

1559:                             : int64(openPrice) - int64(currentPrice);

1559:                             : int64(openPrice) - int64(currentPrice);

1561:         int256 nominator = int256(priceDiff) * int256(FRACTION_SCALE) * int256(int64(leverage));

1561:         int256 nominator = int256(priceDiff) * int256(FRACTION_SCALE) * int256(int64(leverage));

1561:         int256 nominator = int256(priceDiff) * int256(FRACTION_SCALE) * int256(int64(leverage));

1562:         int256 longF = nominator / int256(LEVERAGE_SCALE) / int256(int64(openPrice));

1562:         int256 longF = nominator / int256(LEVERAGE_SCALE) / int256(int64(openPrice));

1564:         f = int64(longF);

1570:         uint64 diffInPrice =  uint64(uint256(originPrice) * uint256(fractionDiff) * LEVERAGE_SCALE / FRACTION_SCALE / uint256(leverage));

1570:         uint64 diffInPrice =  uint64(uint256(originPrice) * uint256(fractionDiff) * LEVERAGE_SCALE / FRACTION_SCALE / uint256(leverage));

1570:         uint64 diffInPrice =  uint64(uint256(originPrice) * uint256(fractionDiff) * LEVERAGE_SCALE / FRACTION_SCALE / uint256(leverage));

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

39:         uint64 spreadPart = uint64(spreadFractionForPair[pairId] * uint256(basePrice) / FRACTION_SCALE);

40:         uint64 safeSpreadPart = spreadPart - uint64((spreadPart * spreadReductionF / FRACTION_SCALE));

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

881:                     uint(capType)

970:             uint(validatedPrice.price),

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

96:         uint64 minTimestamp = uint64(

99:         uint64 maxTimestamp = uint64(block.timestamp);

120:         uint64 price = uint64(priceInfo.price);

121:         uint64 confidence = uint64(priceInfo.conf);

123:             uint256 exponent = uint256(uint32(-priceInfo.expo));

124:             validatedPrice.price = ((uint256(price) * PRICE_SCALE) /

126:             validatedPrice.confidence = ((uint256(confidence) * PRICE_SCALE) /

129:             uint256 exponent = uint256(uint32(priceInfo.expo));

130:             validatedPrice.price = (uint256(price) *

133:             validatedPrice.confidence = (uint256(confidence) *

```

</details> 
 


 ### <a name="L-2"></a>[L-2]
 ### Functions calling contracts/addresses with transfer hooks are missing reentrancy guards
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks will open the users of this protocol up to [read-only reentrancies](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) with no way to protect against it, except by block-listing the whole protocol.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

212:             IERC20(chip).transferFrom(holder, address(this), feeAmount);

```

</details> 
 


 ### <a name="L-3"></a>[L-3]
 ### decimals() is not a part of the ERC-20 standard
The name() function is not a part of the ERC-20 standard, and was added later as an optional extension. As such, some valid ERC20 tokens do not support this interface, so it is unsafe to blindly cast all tokens to this interface, and then call this function.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

62:         uint underlyingDecimals = ERC20(address(_underlyingToken)).decimals();

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

62:         underlyingDecimals = _underlying.decimals();

```

</details> 
 


 ### <a name="L-4"></a>[L-4]
 ### symbol() is not a part of the ERC-20 standard
The name() function is not a part of the ERC-20 standard, and was added later as an optional extension. As such, some valid ERC20 tokens do not support this interface, so it is unsafe to blindly cast all tokens to this interface, and then call this function.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

57:             string.concat("Lynx LP ", _underlying.symbol()),

58:             string.concat("lx", _underlying.symbol())

```

</details> 
 


 ### <a name="L-5"></a>[L-5]
 ### Tokens may be minted to address(0x0)
Neither the  functions, nor _mint() prevent minting to address(0x0)  

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

182:         _mint(_toAddress, ownAmountToMint);

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

99:     function _mint(address account, uint256 amount) internal {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

322:         _mint(user, amountToMint);

532:             _mint(user, actualAmountOut);

```

</details> 
 


 ### <a name="L-6"></a>[L-6]
 ###  `abi.encodePacked()` should not be used with dynamic types when passing the result to a hash function such as `keccak256()`
Use `abi.encode()` instead which will pad items to 32 bytes, which will [prevent hash collisions](https://docs.soliditylang.org/en/v0.8.13/abi-spec.html#non-standard-packed-mode) (e.g. `abi.encodePacked(0x123,0x456)` => `0x123456` => `abi.encodePacked(0x1,0x23456)`, but `abi.encode(0x123,0x456)` => `0x0...1230...456`). "Unless there is a compelling reason, `abi.encode` should be preferred". If there is only one argument to `abi.encodePacked()` it can often be cast to `bytes()` or `bytes32()` [instead](https://ethereum.stackexchange.com/questions/30912/how-to-compare-strings-in-solidity#answer-82739).
If all arguments are strings and or bytes, `bytes.concat()` should be used instead

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

16:         CONTRACT_NAME_HASH = keccak256(abi.encodePacked(proxyName));

```

```solidity
File: Lynx/Chips/BaseChip.sol

33:         bytes32 roleHash =  keccak256(abi.encodePacked(role));

56:         bytes32 roleHash =  keccak256(abi.encodePacked(role));

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

87:         bytes32 digest = keccak256(abi.encodePacked(

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

70:         bytes32 digest = keccak256(abi.encodePacked(

80:         bytes32 digest = keccak256(abi.encodePacked(

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

133:         bytes32 digest = keccak256(abi.encodePacked(

143:         bytes32 digest = keccak256(abi.encodePacked(

153:         bytes32 digest = keccak256(abi.encodePacked(

163:         bytes32 digest = keccak256(abi.encodePacked(

173:         bytes32 digest = keccak256(abi.encodePacked(

183:         bytes32 digest = keccak256(abi.encodePacked(

```

```solidity
File: Lynx/Registry/RegistryV1.sol

89:         bytes32 nameHash = keccak256(abi.encodePacked(proxyName));

112:         bytes32 roleHash =  keccak256(abi.encodePacked(_role));

120:         bytes32 roleHash = keccak256(abi.encodePacked(role));

130:         bytes32 roleHash =  keccak256(abi.encodePacked(_role));

339:         bytes32 roleHash = keccak256(abi.encodePacked(role));

```

</details> 
 


 ### <a name="L-7"></a>[L-7]
 ### constructor/initialize function lacks parameter validation
Constructors and initialization functions play a critical role in contracts by setting important initial states when the contract is first deployed before the system starts. The parameters passed to the constructor and initialization functions directly affect the behavior of the contract / protocol. If incorrect parameters are provided, the system may fail to run, behave abnormally, be unstable, or lack security. Therefore, it's crucial to carefully check each parameter in the constructor and initialization functions. If an exception is found, the transaction should be rolled back.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

213:     function initialize(

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

30:     function initialize(

```

</details> 
 


 ### <a name="L-8"></a>[L-8]
 ### Division by zero not prevented
The divisions below take an input parameter that has no zero-value checks, which can cause the functions reverting if zero is passed.  

*Instances (29)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

290:         ownAmount = (underlyingAmount * SELF_UNIT_SCALE) / exchangeRate;

299:         underlyingAmount = (ownAmount * exchangeRate) / SELF_UNIT_SCALE;

```

```solidity
File: Lynx/Common/CommonScales.sol

20:         return (collateral * leverage) / LEVERAGE_SCALE;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

45:         uint256 virtualEpochIndex = block.timestamp / duration;

122:         return (totalBorrows * PRECISION) / virtualBalance;

447:             (FRACTION_SCALE + maxExtraWithdrawalAmountF)) / FRACTION_SCALE;

723:                 (virtualUnderlyingBalance * (SELF_UNIT_SCALE)) /

785:         ownAmount = (underlyingAmount * SELF_UNIT_SCALE) / exchangeRate;

795:         underlyingAmount = (ownAmount * exchangeRate) / SELF_UNIT_SCALE;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

121:             valueLargePay = simpleFundingRate * ACCURACY_IMPROVEMENT_SCALE; // Logically it's fundingPaidByLargeScaled / oiLarge;

123:                 (fundingPaidByLargeScaled * ACCURACY_IMPROVEMENT_SCALE) /

172:             (pricesDiff * int256((PRECISION * leverage) / LEVERAGE_SCALE)) /

191:         return (uint256(profitPrecision) * collateral) / PRECISION;

323:         return (fee * lexPartF) / FRACTION_SCALE;

573:         return (amount * feeFraction) / FRACTION_SCALE;

651:                 int256(PRECISION * ACCURACY_IMPROVEMENT_SCALE)) /

678:             effEntryPrice /

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

71:             (groups[groupId].maxBorrowF * selfCurrentBalance) / FRACTION_SCALE;

79:         return (pairs[pairId].maxBorrowF * selfCurrentBalance) / FRACTION_SCALE;

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

173:         return (borrows * PRECISION) / availableCash;

211:         uint256 interestAccumulated = (simpleInterestFactor * borrowsPrior) /

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

77:     uint256 internal constant MIN_LEVERAGE = (1 * LEVERAGE_SCALE) / 2; // 0.5X

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

387:         uint256 maxGainPrecision = (maxGainF * PRECISION) / FRACTION_SCALE;

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

720:         uint positionOpenFee = (leveragedPosition * openFeeF) / FRACTION_SCALE;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

29:     uint public constant MAX_FEE_FRACTION_FOR_CANCEL = FRACTION_SCALE / 100; // FRACTION_SCALE

1457:         return (amount * feeFraction) / FRACTION_SCALE;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

48:     uint public marketOrderCancelFeeFraction = (1 * FRACTION_SCALE) / 1000; // FRACTION_SCALE (0.001 = 0.01%)

51:         (2 * FRACTION_SCALE) / 1000; // FRACTION_SCALE (0.002 = 0.02%)

1080:         return (amount * fraction) / FRACTION_SCALE;

```

</details> 
 


 ### <a name="L-9"></a>[L-9]
 ### Empty function body
Consider adding a comment about why the function body is empty

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

128:     receive() payable external {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

141:             {} catch {}

141:             {} catch {}

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

44:     ) OFTAdapter(_token, _layerZeroEndpoint, _delegate) Ownable(_initialOwner) {}

158:             {} catch {}

158:             {} catch {}

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

20:     constructor(string memory _contractDomainName, string memory _contractDomainVersion) MultiChainEIP712Base(_contractDomainName, _contractDomainVersion) {}

```

```solidity
File: Lynx/Lex/LexCaptain.sol

25:     constructor() BaseCaptain(msg.sender, uint8(LexRole.ADMINISTRATIVE)) {}

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

11:     constructor(address _registry) AcceptableRegistryImplementationClaimableAdmin(_registry, "LexPool") {}

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

12:     constructor(address _registry) AcceptableRegistryImplementationClaimableAdmin(_registry, "PoolAccountant") {}

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

429:         {} catch {}

429:         {} catch {}

461:         {} catch {}

461:         {} catch {}

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

11:     constructor(address _registry) AcceptableRegistryImplementationClaimableAdmin(_registry, "OrderBook") {}

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

10: contract RegistryProxy is AcceptableImplementationClaimableAdmin {

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

11:     constructor(address _registry) AcceptableRegistryImplementationClaimableAdmin(_registry, "TradingFloor") {}

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

36:     receive() external payable {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

13:     constructor(address _initialOwner) Ownable(_initialOwner) {}

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

13:     constructor() MutableSingleKinkRateModel(msg.sender) {}

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

10:     ) SteadyRateModel(msg.sender, _defaultSteadyFundingRate) {}

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

13:     constructor() MutableSingleKinkRateModel(msg.sender) {}

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

10:     ) SteadyRateModel(msg.sender, _defaultSteadyInterestRate) {}

```

</details> 
 


 ### <a name="L-10"></a>[L-10]
 ### Initializers could be front-run
Initializers could be front-run, allowing an attacker to either set their own values, take ownership of the contract, and in the best case forcing a re-deployment

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

213:     function initialize(

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

30:     function initialize(

```

</details> 
 


 ### <a name="L-11"></a>[L-11]
 ### Use Ownable2Step instead of Ownable
Add a description of why Ownable2Step is recommended.

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

44:     ) OFT(_name, _symbol, _lzEndpoint, _delegate) BaseChip(_registry, ChipMode.REMOTE) Ownable(_initialOwner)  {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

44:     ) OFTAdapter(_token, _layerZeroEndpoint, _delegate) Ownable(_initialOwner) {}

```

```solidity
File: Lynx/Common/CaptainBase.sol

11:     constructor(address _initialOwner, uint8 _administrativeRole) Ownable(_initialOwner) {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

4: import "@openzeppelin/contracts/access/Ownable.sol";

11: contract MutableSingleKinkRateModel is Ownable, BaseSingleKinkRateModel {

13:     constructor(address _initialOwner) Ownable(_initialOwner) {}

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

4: import "@openzeppelin/contracts/access/Ownable.sol";

6: contract SteadyRateModel is Ownable {

11:     constructor(address _owner, uint _defaultRate) Ownable(_owner) {

```

</details> 
 


 ### <a name="L-12"></a>[L-12]
 ### Owner can renounce Ownership  
Each of the following contracts implements or inherits the renounceOwnership() function. This can represent a certain risk if the ownership is renounced for any other reason than by design. Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

44:     ) OFT(_name, _symbol, _lzEndpoint, _delegate) BaseChip(_registry, ChipMode.REMOTE) Ownable(_initialOwner)  {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

5: import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

44:     ) OFTAdapter(_token, _layerZeroEndpoint, _delegate) Ownable(_initialOwner) {}

```

```solidity
File: Lynx/Common/CaptainBase.sol

11:     constructor(address _initialOwner, uint8 _administrativeRole) Ownable(_initialOwner) {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

4: import "@openzeppelin/contracts/access/Ownable.sol";

11: contract MutableSingleKinkRateModel is Ownable, BaseSingleKinkRateModel {

13:     constructor(address _initialOwner) Ownable(_initialOwner) {}

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

4: import "@openzeppelin/contracts/access/Ownable.sol";

6: contract SteadyRateModel is Ownable {

11:     constructor(address _owner, uint _defaultRate) Ownable(_owner) {

```

</details> 
 


 ### <a name="L-13"></a>[L-13]
 ### Loss of precision
Division by large numbers or variables may result in the result being zero, due to Solidity not supporting fractions.

*Instances (29)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

290:         ownAmount = (underlyingAmount * SELF_UNIT_SCALE) / exchangeRate;

299:         underlyingAmount = (ownAmount * exchangeRate) / SELF_UNIT_SCALE;

```

```solidity
File: Lynx/Common/CommonScales.sol

20:         return (collateral * leverage) / LEVERAGE_SCALE;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

45:         uint256 virtualEpochIndex = block.timestamp / duration;

122:         return (totalBorrows * PRECISION) / virtualBalance;

447:             (FRACTION_SCALE + maxExtraWithdrawalAmountF)) / FRACTION_SCALE;

723:                 (virtualUnderlyingBalance * (SELF_UNIT_SCALE)) /

785:         ownAmount = (underlyingAmount * SELF_UNIT_SCALE) / exchangeRate;

795:         underlyingAmount = (ownAmount * exchangeRate) / SELF_UNIT_SCALE;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

121:             valueLargePay = simpleFundingRate * ACCURACY_IMPROVEMENT_SCALE; // Logically it's fundingPaidByLargeScaled / oiLarge;

123:                 (fundingPaidByLargeScaled * ACCURACY_IMPROVEMENT_SCALE) /

172:             (pricesDiff * int256((PRECISION * leverage) / LEVERAGE_SCALE)) /

191:         return (uint256(profitPrecision) * collateral) / PRECISION;

323:         return (fee * lexPartF) / FRACTION_SCALE;

573:         return (amount * feeFraction) / FRACTION_SCALE;

651:                 int256(PRECISION * ACCURACY_IMPROVEMENT_SCALE)) /

678:             effEntryPrice /

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

71:             (groups[groupId].maxBorrowF * selfCurrentBalance) / FRACTION_SCALE;

79:         return (pairs[pairId].maxBorrowF * selfCurrentBalance) / FRACTION_SCALE;

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

173:         return (borrows * PRECISION) / availableCash;

211:         uint256 interestAccumulated = (simpleInterestFactor * borrowsPrior) /

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

77:     uint256 internal constant MIN_LEVERAGE = (1 * LEVERAGE_SCALE) / 2; // 0.5X

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

387:         uint256 maxGainPrecision = (maxGainF * PRECISION) / FRACTION_SCALE;

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

720:         uint positionOpenFee = (leveragedPosition * openFeeF) / FRACTION_SCALE;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

29:     uint public constant MAX_FEE_FRACTION_FOR_CANCEL = FRACTION_SCALE / 100; // FRACTION_SCALE

1457:         return (amount * feeFraction) / FRACTION_SCALE;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

48:     uint public marketOrderCancelFeeFraction = (1 * FRACTION_SCALE) / 1000; // FRACTION_SCALE (0.001 = 0.01%)

51:         (2 * FRACTION_SCALE) / 1000; // FRACTION_SCALE (0.002 = 0.02%)

1080:         return (amount * fraction) / FRACTION_SCALE;

```

</details> 
 


 ### <a name="L-14"></a>[L-14]
 ### State variables not capped at reasonable values
Consider adding minimum/maximum value checks to ensure that the state variables below can never be used to excessively harm users, including via griefing

*Instances (184)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

63: 

135:         return true;

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

11:         string name;

12:         string version;

13:         uint256 chainId;

14:         address verifyingContract;

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

46: 

49:             return storedDomainSeparator;

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

36:         uint256 nonce;

37:         address chip;

38:         address holder;

39:         address receiver;

40:         uint256 amount;

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

35:         uint256 nonce;

36:         address pool;

37:         address liquidityProvider;

38:         uint256 epoch;

39:         uint256 amount;

40:         uint256 minAmountOut;

44:         uint256 nonce;

45:         address pool;

46:         address liquidityProvider;

47:         uint256 epoch;

48:         uint256 amount;

49:         uint256 minAmountOut;

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

76:         return domainSeparator;

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

53:         uint256 nonce;

60:         uint256 nonce;

61: 

63:         uint64 minPrice;

64:         uint64 maxPrice;

68:         uint256 nonce;

69: 

72:         uint64 fieldValue;

76:         uint256 nonce;

77: 

80:         uint64 fieldValueA;

81:         uint64 fieldValueB;

85:         uint256 nonce;

86: 

88:         uint64 minPrice;

89:         uint64 maxPrice;

90:         uint64 tp;

91:         uint64 sl;

95:         uint256 nonce;

96: 

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

35:         return 18;

44:         return true;

56:         return true;

74: 

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

115:             return 0;

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

11:     uint256 pairId;

67:         return pairsPricePnl;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

86: 

88:         int256 indexShortChange;

317:             return 0;

468:         uint256 interest;

469:         int256 funding;

646:             return 0;

671:             return 0;

716:         bool freshened;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

122: 

144:         return supportedPairIds;

155:         return supportedGroupIds;

162:         return supportedFeeIds;

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

128:         bool freshened;

292:         return interestShare;

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

30:         public pendingUpdateTradeFieldOrdersById;

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

60:         return allPendingUpdateOrderIds;

128: 

174: 

```

```solidity
File: Lynx/Registry/RegistryV1.sol

98:         return supportedTradingFloors;

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

526: 

549: 

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

64:         public pairTradersInfo;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

239: 

611:         uint effectiveClosingPrice;

612:         PositionCloseType positionCloseType;

689: 

691:         uint64 slToUse;

1033:                 uint256 value;

1282:         uint assetForTraderFromFloor;

1509:         return tp;

1540: 

1571:         return diffInPrice;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

842: 

856: 

867:                 uint256 value;

883:                 return false;

981: 

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

11:         uint256 amount;

12:         uint256 minAmountOut;

16:         uint256 amount;

17:         uint256 minAmountOut;

18:         uint256 maxAmountOut;

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

13:         uint256 collateral;

14:         uint32 leverage;

15:         bool long;

16:         uint64 openPrice;

17:         uint64 tp;

22:         int256 accPerOiLong; // 32 bytes -- Underlying Decimals

24:         int256 accPerOiShort; // 32 bytes -- Underlying Decimals

26:         uint256 lastUpdateTimestamp; // 32 bytes

31:         uint256 borrowIndex; // 32 bytes

33:         int256 funding; // 32 bytes -- underlying units -- Underlying Decimals

38:         uint256 long; // 32 bytes -- underlying units -- Dynamic open interest for long positions

40:         uint256 short; // 32 bytes -- underlying units -- Dynamic open interest for short positions

45:         string from;

46:         string to;

51:         uint16 id; // 02 bytes

52:         uint16 groupId; // 02 bytes

53:         uint16 feeId; // 02 bytes

54:         uint32 minLeverage; // 04 bytes

55:         uint32 maxLeverage; // 04 bytes

56:         uint32 maxBorrowF; // 04 bytes -- FRACTION_SCALE (5)

58:         uint256 maxPositionSize; // 32 bytes -- underlying units

60:         uint256 maxGain; // 32 bytes -- underlying units

62:         uint256 maxOpenInterest; // 32 bytes -- Underlying units

64:         uint256 maxSkew; // 32 bytes -- underlying units

66:         uint256 minOpenFee; // 32 bytes -- underlying units. MAX_UINT means use the default group level value

68:         uint256 minPerformanceFee; // 32 bytes -- underlying units

73:         uint16 id; // 02 bytes

74:         uint32 minLeverage; // 04 bytes

75:         uint32 maxLeverage; // 04 bytes

76:         uint32 maxBorrowF; // 04 bytes -- FRACTION_SCALE (5)

78:         uint256 maxPositionSize; // 32 bytes (Underlying units)

80:         uint256 minOpenFee; // 32 bytes (Underlying uints). MAX_UINT means use the default global level value

85:         uint16 id; // 02 bytes

86:         uint32 openFeeF; // 04 bytes -- FRACTION_SCALE (5) (Fraction of leveraged pos)

87:         uint32 closeFeeF; // 04 bytes -- FRACTION_SCALE (5) (Fraction of leveraged pos)

88:         uint32 performanceFeeF; // 04 bytes -- FRACTION_SCALE (5) (Fraction of performance)

```

```solidity
File: Lynx/interfaces/IPriceValidatorV1.sol

8:         uint256 timestamp;

9:         uint64 price; // Scaled to PRICE_SCALE

10:         uint64 confidence; // Scaled to PRICE_SCALE

```

```solidity
File: Lynx/interfaces/OrderBookStructsV1.sol

18:         bytes32 positionId; // 32 bytes

21:         UpdatePositionFieldOrderType orderType; // 01 bytes

22:         uint64 timestamp; // 08 bytes

23:         uint64 fieldValueA; // 08 bytes

24:         uint64 fieldValueB; // 08 bytes

```

```solidity
File: Lynx/interfaces/TradingFloorStructsV1.sol

20:         address trader;

21:         uint16 pairId;

22:         address settlementAsset;

23:         uint32 positionIndex;

27:         bool long;

28:         uint256 collateral; // Settlement Asset Decimals

29:         uint32  leverage;

30:         uint64  minPrice; // PRICE_SCALE

31:         uint64  maxPrice; // PRICE_SCALE

32:         uint64  tp; // PRICE_SCALE

33:         uint64  sl; // PRICE_SCALE

34:         uint64 tpByFraction; // FRACTION_SCALE

35:         uint64 slByFraction; // FRACTION_SCALE

43:         address settlementAsset; // 20 bytes

44:         uint16 pairId;           // 02 bytes

45:         uint32 index;            // 04 bytes

48:         address trader;          // 20 bytes

53:         uint collateral;         // 32 bytes -- Settlement Asset Decimals

56:         PositionPhase phase;     // 01 bytes

57:         uint64 inPhaseSince;     // 08 bytes

58:         uint32 leverage;         // 04 bytes

59:         bool long;               // 01 bytes

60:         uint64 openPrice;        // 08 bytes -- PRICE_SCALE (8)

61:         uint32 spreadReductionF; // 04 bytes -- FRACTION_SCALE (5)

68:         uint64 tpLastUpdated;   // 08 bytes -- timestamp

69:         uint64 slLastUpdated;   // 08 bytes -- timestamp

70:         uint64 tp;              // 08 bytes -- PRICE_SCALE (8)

71:         uint64 sl;              // 08 bytes -- PRICE_SCALE (8)

78:         uint64 minPrice; // 08 bytes -- PRICE_SCALE

79:         uint64 maxPrice; // 08 bytes -- PRICE_SCALE

80:         uint64 tpByFraction;        // 04 bytes -- FRACTION_SCALE

81:         uint64 slByFraction;        // 04 bytes -- FRACTION_SCALE

89:         uint32 positionsCounter;    // 04 bytes

90:         uint32 positionInArray;     // 04 bytes (the index + 1)

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

44:         int64 price;

46:         uint64 conf;

48:         int32 expo;

50:         uint256 publishTime;

56:         bytes32 id;

58:         Price price;

60:         Price emaPrice;

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

30:         return true;

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

29:             return 0;

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

19:         return defaultRate;

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

15:         return defaultRate;

```

</details> 
 


 ### <a name="L-15"></a>[L-15]
 ### Some tokens may revert when zero value transfers are made
Despite the fact that [EIP-20](https://github.com/ethereum/EIPs/blob/7500ac4fc1bbdfaf684e7ef851f798f6b667b2fe/EIPS/eip-20.md?plain=1#L116) states that zero-value transfers must be accepted, some tokens, such as LEND, will revert if this is attempted, which may cause transactions that involve other tokens (such as batch operations) to fully revert. Consider skipping the transfer if the amount is zero, which will also save gas.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

157:         payable(admin).transfer(_amount);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

117:         _token.transfer(owner(), _amount);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

114:         innerToken.transfer(owner(), _amount);

128:         _token.transfer(owner(), _amount);

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

228:             IERC20(chip).transfer(receiver, amount);

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

42:     function transfer(address recipient, uint256 amount) public returns (bool) {

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

63:         payable(burner).transfer(unwrappedNativeAmount);

```

</details> 
 


 ### <a name="L-16"></a>[L-16]
 ###  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard  
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks opens the users of this protocol up to [read-only reentrancy](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) vulnerability with no way to protect them except by block-listing the entire protocol.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

157:         payable(admin).transfer(_amount);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

117:         _token.transfer(owner(), _amount);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

114:         innerToken.transfer(owner(), _amount);

128:         _token.transfer(owner(), _amount);

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

228:             IERC20(chip).transfer(receiver, amount);

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

42:     function transfer(address recipient, uint256 amount) public returns (bool) {

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

63:         payable(burner).transfer(unwrappedNativeAmount);

```

</details> 
 


 ### <a name="L-17"></a>[L-17]
 ### Some tokens may revert when large transfers are made
Tokens such as COMP or UNI will revert when an address balance reaches type(uint96).max. Ensure that the calls below can be broken up into smaller batches if necessary.  

*Instances (22)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

146:         _token.safeTransfer(admin, _amount);

157:         payable(admin).transfer(_amount);

249:         underlyingToken.safeTransfer(receiver, underlyingAmount);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

117:         _token.transfer(owner(), _amount);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

114:         innerToken.transfer(owner(), _amount);

128:         _token.transfer(owner(), _amount);

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

228:             IERC20(chip).transfer(receiver, amount);

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

42:     function transfer(address recipient, uint256 amount) public returns (bool) {

43:         _transfer(msg.sender, recipient, amount);

64:         _transfer(sender, recipient, amount);

78:     function _transfer(

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

297:             underlying.safeTransfer(_to, reservesToSend);

435:         _transfer(user, address(this), amount);

536:             underlying.safeTransfer(user, pendingDeposit.amount);

564:             underlying.safeTransfer(user, pendingDeposit.amount);

648:             underlying.safeTransfer(user, finalUnderlyingAmountOut);

651:             _transfer(address(this), user, pendingRedeem.amount);

681:             _transfer(address(this), user, pendingRedeem.amount);

749:         underlying.safeTransfer(to, amount);

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

1327:         IERC20(_asset).safeTransfer(_to, amount);

1385:             IERC20(settlementAsset).safeTransfer(to, amount);

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

63:         payable(burner).transfer(unwrappedNativeAmount);

```

</details> 
 


 ### <a name="L-18"></a>[L-18]
 ### Unsafe casting
Unsafe casting can cause alot of issues especially when a type is downcast to a smaller type, the higher order bits are truncated, effectively applying a modulo to the original value. Without any other checks, this wrapping will lead to unexpected behavior and bugs

*Instances (56)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

182:         _mint(_toAddress, ownAmountToMint);

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

79:         return getLZDstChainIdFromEvmChainIdInternal(uint16(chipSourceChain));

145:             uint8(ChipsIntentsVerifierActions.CHIP_OUT_LZ),

151:         uint16 destChainId = getLZDstChainIdFromEvmChainIdInternal(uint16(chainId));

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

116:             uint8(LiquidityIntentsVerifierActions.REQUEST_EPOCH_DEPOSIT),

136:             uint8(LiquidityIntentsVerifierActions.REQUEST_EPOCH_REDEEM),

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

234:             uint8(TradeIntentsVerifierActions.REQUEST_POSITION_OPEN),

264:         validateNonceForActionAndIncrease(payload.positionId, uint8(TradeIntentsVerifierActions.REQUEST_POSITION_MARKET_CLOSE), payload.nonce);

289:         validateNonceForActionAndIncrease(payload.positionId, uint8(TradeIntentsVerifierActions.REQUEST_POSITION_SINGLE_FIELD_UPDATE), payload.nonce);

316:             uint8(TradeIntentsVerifierActions.REQUEST_POSITION_DOUBLE_FIELD_UPDATE),

344:         validateNonceForActionAndIncrease(payload.positionId, uint8(TradeIntentsVerifierActions.DIRECT_UPDATE_PENDING_LIMIT_POSITION), payload.nonce);

368:         validateNonceForActionAndIncrease(payload.positionId, uint8(TradeIntentsVerifierActions.DIRECT_CANCEL_PENDING_LIMIT_POSITION), payload.nonce);

```

```solidity
File: Lynx/Lex/LexCaptain.sol

25:     constructor() BaseCaptain(msg.sender, uint8(LexRole.ADMINISTRATIVE)) {}

28:         _requireRole(uint8(role));

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

99:     function _mint(address account, uint256 amount) internal {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

322:         _mint(user, amountToMint);

532:             _mint(user, actualAmountOut);

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

120:                 timestamp: uint64(block.timestamp),

166:             timestamp: uint64(block.timestamp),

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

415:         position.inPhaseSince = uint64(block.timestamp);

455:         position.inPhaseSince = uint64(block.timestamp);

493:         _position.inPhaseSince = uint64(block.timestamp);

695:                 uint64(poolAccountant.maxGainF()),

707:             limitInfo.tpLastUpdated = uint64(block.timestamp);

724:                 uint64(poolAccountant.maxGainF()),

737:             limitInfo.slLastUpdated = uint64(block.timestamp);

857:         positionsById[_positionId].inPhaseSince = uint64(block.timestamp);

1004:             _positionStorage.inPhaseSince = uint64(block.timestamp);

1092:             uint64(maxGainF),

1099:         positionLimits.tpLastUpdated = uint64(block.timestamp);

1102:             uint64(maxGainF),

1108:         positionLimits.slLastUpdated = uint64(block.timestamp);

1408:                 .positionInArray = uint32(

1498:             int64(maxGainF)

1500:             uint64 tpDiff = uint64(((uint256(openPrice) * uint256(maxGainF)) * LEVERAGE_SCALE) /

1527:             int(maxSlF) * -1

1529:             uint64 slDiff = uint64(

1555:         int64 maxPnlF = int64(maxGainF);

1558:                             ? int64(currentPrice) - int64(openPrice)

1558:                             ? int64(currentPrice) - int64(openPrice)

1559:                             : int64(openPrice) - int64(currentPrice);

1559:                             : int64(openPrice) - int64(currentPrice);

1561:         int256 nominator = int256(priceDiff) * int256(FRACTION_SCALE) * int256(int64(leverage));

1562:         int256 longF = nominator / int256(LEVERAGE_SCALE) / int256(int64(openPrice));

1564:         f = int64(longF);

1570:         uint64 diffInPrice =  uint64(uint256(originPrice) * uint256(fractionDiff) * LEVERAGE_SCALE / FRACTION_SCALE / uint256(leverage));

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

39:         uint64 spreadPart = uint64(spreadFractionForPair[pairId] * uint256(basePrice) / FRACTION_SCALE);

40:         uint64 safeSpreadPart = spreadPart - uint64((spreadPart * spreadReductionF / FRACTION_SCALE));

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

881:                     uint(capType)

970:             uint(validatedPrice.price),

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

96:         uint64 minTimestamp = uint64(

99:         uint64 maxTimestamp = uint64(block.timestamp);

120:         uint64 price = uint64(priceInfo.price);

121:         uint64 confidence = uint64(priceInfo.conf);

123:             uint256 exponent = uint256(uint32(-priceInfo.expo));

129:             uint256 exponent = uint256(uint32(priceInfo.expo));

```

</details> 
 


 ### <a name="L-19"></a>[L-19]
 ### Unsafe ERC20 operation(s)

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

157:         payable(admin).transfer(_amount);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

117:         _token.transfer(owner(), _amount);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

114:         innerToken.transfer(owner(), _amount);

128:         _token.transfer(owner(), _amount);

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

212:             IERC20(chip).transferFrom(holder, address(this), feeAmount);

228:             IERC20(chip).transfer(receiver, amount);

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

63:         payable(burner).transfer(unwrappedNativeAmount);

87:         IERC20(address(wrappedNativeToken)).approve(address(wrappedNativeEngineChip), 0);

88:         IERC20(address(wrappedNativeToken)).approve(address(wrappedNativeEngineChip), amount);

```

</details> 
 


## Non Critical Issues


 ### <a name="NC-1"></a>[NC-1]
 ### Contracts should have full test coverage
While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.

*Instances (84)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/IContractRegistryBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/BaseChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Common/CaptainBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Common/CommonScales.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexCaptain.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexCommon.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Locks/SystemLocker.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ChipEnumsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IAffiliationV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IBurnHandlerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IGlobalLock.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILzCreditControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILzDebitControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IOrderBookV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolBurnControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolMintControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPriceValidatorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IRateModelV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IRegistryV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradeIncentivizerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradersPortalV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradingFloorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IWrappedNative.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/LexErrors.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/LexPoolAdminEnums.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/OrderBookStructsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/PoolAccountantV1AdminEnums.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/TradingEnumsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/TradingFloorStructsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

</details> 
 


 ### <a name="NC-2"></a>[NC-2]
 ### Consider adding formal verification proofs
Consider using formal verification to mathematically prove that your code does what is intended, and does not have any edge cases with unexpected behavior. The solidity compiler itself has this functionality [built in](https://docs.soliditylang.org/en/latest/smtchecker.html#smtchecker-and-formal-verification)  

*Instances (84)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/IContractRegistryBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/BaseChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Common/CaptainBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Common/CommonScales.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexCaptain.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexCommon.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Locks/SystemLocker.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ChipEnumsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IAffiliationV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IBurnHandlerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IGlobalLock.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILzCreditControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILzDebitControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IOrderBookV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolBurnControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolMintControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPriceValidatorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IRateModelV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IRegistryV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradeIncentivizerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradersPortalV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradingFloorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IWrappedNative.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/LexErrors.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/LexPoolAdminEnums.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/OrderBookStructsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/PoolAccountantV1AdminEnums.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/TradingEnumsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/TradingFloorStructsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

</details> 
 


 ### <a name="NC-3"></a>[NC-3]
 ### Large or complicated code bases should implement invariant tests
Large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts, should implement [invariant fuzzing tests](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05). Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold. Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers, with properly and extensively-written invariants, can close this testing gap significantly.  

*Instances (84)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/IContractRegistryBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/BaseChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Common/CaptainBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Common/CommonScales.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexCaptain.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexCommon.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Locks/SystemLocker.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ChipEnumsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IAffiliationV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IBurnHandlerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IGlobalLock.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILzCreditControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILzDebitControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IOrderBookV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolBurnControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolMintControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPriceValidatorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IRateModelV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IRegistryV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradeIncentivizerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradersPortalV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradingFloorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IWrappedNative.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/LexErrors.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/LexPoolAdminEnums.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/OrderBookStructsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/PoolAccountantV1AdminEnums.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/TradingEnumsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/TradingFloorStructsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

</details> 
 


 ### <a name="NC-4"></a>[NC-4]
 ### Custom error has no error details

#### Impact:
Defining custom errors without error details can make error messages less informative.

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Peripheral/PriceValidators/IPyth.sol

6:     error InvalidArgument();

8:     error InvalidUpdateDataSource();

10:     error InvalidUpdateData();

12:     error InsufficientFee();

14:     error NoFreshUpdate();

16:     error PriceFeedNotFoundWithinRange();

18:     error PriceFeedNotFound();

20:     error StalePrice();

22:     error InvalidWormholeVaa();

24:     error InvalidGovernanceMessage();

26:     error InvalidGovernanceTarget();

28:     error InvalidGovernanceDataSource();

30:     error OldGovernanceMessage();

```

</details> 
 


 ### <a name="NC-5"></a>[NC-5]
 ### NatSpec: Interface declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (39)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/IContractRegistryBase.sol

3: 

```

```solidity
File: Lynx/interfaces/IAffiliationV1.sol

3: 

```

```solidity
File: Lynx/interfaces/IBurnHandlerV1.sol

3: 

```

```solidity
File: Lynx/interfaces/IFundingRateModel.sol

3: 

```

```solidity
File: Lynx/interfaces/IGlobalLock.sol

3: 

```

```solidity
File: Lynx/interfaces/IInterestRateModel.sol

3: 

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

8: 

21: 

72: 

179: 

```

```solidity
File: Lynx/interfaces/ILzCreditControllerV1.sol

3: 

```

```solidity
File: Lynx/interfaces/ILzDebitControllerV1.sol

3: 

```

```solidity
File: Lynx/interfaces/IOrderBookV1.sol

7: 

28: 

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

9: 

91: 

150: 

345: 

```

```solidity
File: Lynx/interfaces/IPoolBurnControllerV1.sol

3: 

```

```solidity
File: Lynx/interfaces/IPoolMintControllerV1.sol

3: 

```

```solidity
File: Lynx/interfaces/IPriceValidatorV1.sol

3: 

```

```solidity
File: Lynx/interfaces/IRateModelV1.sol

3: 

```

```solidity
File: Lynx/interfaces/IRegistryV1.sol

6: 

15: 

```

```solidity
File: Lynx/interfaces/ITradeIncentivizerV1.sol

3: 

```

```solidity
File: Lynx/interfaces/ITradersPortalV1.sol

6: 

49: 

```

```solidity
File: Lynx/interfaces/ITradingFloorV1.sol

7: 

109: 

```

```solidity
File: Lynx/interfaces/IWrappedNative.sol

3: 

```

```solidity
File: Lynx/interfaces/LexErrors.sol

3: 

```

```solidity
File: Lynx/interfaces/LexPoolAdminEnums.sol

3: 

```

```solidity
File: Lynx/interfaces/OrderBookStructsV1.sol

6: 

```

```solidity
File: Lynx/interfaces/PoolAccountantV1AdminEnums.sol

3: 

```

```solidity
File: Lynx/interfaces/TradingEnumsV1.sol

3: 

```

```solidity
File: Lynx/interfaces/TradingFloorStructsV1.sol

5: 

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

3: 

32: 

63: 

```

</details> 
 


 ### <a name="NC-6"></a>[NC-6]
 ### Contract uses both require()/revert() as well as custom errors  

#### Impact:
Consider using just one method in a single file

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

62:         require(balance > pendingAmount, "Fatal error");

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

844:         } catch Error(string memory error) {

```

</details> 
 


 ### <a name="NC-7"></a>[NC-7]
 ### Variables without visibility specifier

#### Impact:
Specifying visibility for variables can improve code readability and maintainability.

*Instances (133)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CryptographyContracts/EIP712Utils.sol

11:         string name;

12:         string version;

13:         uint256 chainId;

14:         address verifyingContract;

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

36:         uint256 nonce;

37:         address chip;

38:         address holder;

39:         address receiver;

40:         uint256 amount;

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

35:         uint256 nonce;

36:         address pool;

37:         address liquidityProvider;

38:         uint256 epoch;

39:         uint256 amount;

40:         uint256 minAmountOut;

44:         uint256 nonce;

45:         address pool;

46:         address liquidityProvider;

47:         uint256 epoch;

48:         uint256 amount;

49:         uint256 minAmountOut;

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

53:         uint256 nonce;

60:         uint256 nonce;

63:         uint64 minPrice;

64:         uint64 maxPrice;

68:         uint256 nonce;

72:         uint64 fieldValue;

76:         uint256 nonce;

80:         uint64 fieldValueA;

81:         uint64 fieldValueB;

85:         uint256 nonce;

88:         uint64 minPrice;

89:         uint64 maxPrice;

90:         uint64 tp;

91:         uint64 sl;

95:         uint256 nonce;

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

11:     uint256 pairId;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

87:         int256 indexLongChange;

88:         int256 indexShortChange;

468:         uint256 interest;

469:         int256 funding;

716:         bool freshened;

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

128:         bool freshened;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

611:         uint effectiveClosingPrice;

690:         uint64 tpToUse;

691:         uint64 slToUse;

1033:                 uint256 value;

1282:         uint assetForTraderFromFloor;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

867:                 uint256 value;

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

11:         uint256 amount;

12:         uint256 minAmountOut;

16:         uint256 amount;

17:         uint256 minAmountOut;

18:         uint256 maxAmountOut;

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

13:         uint256 collateral;

14:         uint32 leverage;

15:         bool long;

16:         uint64 openPrice;

17:         uint64 tp;

22:         int256 accPerOiLong; // 32 bytes -- Underlying Decimals

24:         int256 accPerOiShort; // 32 bytes -- Underlying Decimals

26:         uint256 lastUpdateTimestamp; // 32 bytes

31:         uint256 borrowIndex; // 32 bytes

33:         int256 funding; // 32 bytes -- underlying units -- Underlying Decimals

38:         uint256 long; // 32 bytes -- underlying units -- Dynamic open interest for long positions

40:         uint256 short; // 32 bytes -- underlying units -- Dynamic open interest for short positions

45:         string from;

46:         string to;

51:         uint16 id; // 02 bytes

52:         uint16 groupId; // 02 bytes

53:         uint16 feeId; // 02 bytes

54:         uint32 minLeverage; // 04 bytes

55:         uint32 maxLeverage; // 04 bytes

56:         uint32 maxBorrowF; // 04 bytes -- FRACTION_SCALE (5)

58:         uint256 maxPositionSize; // 32 bytes -- underlying units

60:         uint256 maxGain; // 32 bytes -- underlying units

62:         uint256 maxOpenInterest; // 32 bytes -- Underlying units

64:         uint256 maxSkew; // 32 bytes -- underlying units

66:         uint256 minOpenFee; // 32 bytes -- underlying units. MAX_UINT means use the default group level value

68:         uint256 minPerformanceFee; // 32 bytes -- underlying units

73:         uint16 id; // 02 bytes

74:         uint32 minLeverage; // 04 bytes

75:         uint32 maxLeverage; // 04 bytes

76:         uint32 maxBorrowF; // 04 bytes -- FRACTION_SCALE (5)

78:         uint256 maxPositionSize; // 32 bytes (Underlying units)

80:         uint256 minOpenFee; // 32 bytes (Underlying uints). MAX_UINT means use the default global level value

85:         uint16 id; // 02 bytes

86:         uint32 openFeeF; // 04 bytes -- FRACTION_SCALE (5) (Fraction of leveraged pos)

87:         uint32 closeFeeF; // 04 bytes -- FRACTION_SCALE (5) (Fraction of leveraged pos)

88:         uint32 performanceFeeF; // 04 bytes -- FRACTION_SCALE (5) (Fraction of performance)

```

```solidity
File: Lynx/interfaces/IPriceValidatorV1.sol

8:         uint256 timestamp;

9:         uint64 price; // Scaled to PRICE_SCALE

10:         uint64 confidence; // Scaled to PRICE_SCALE

```

```solidity
File: Lynx/interfaces/OrderBookStructsV1.sol

22:         uint64 timestamp; // 08 bytes

23:         uint64 fieldValueA; // 08 bytes

24:         uint64 fieldValueB; // 08 bytes

```

```solidity
File: Lynx/interfaces/TradingFloorStructsV1.sol

20:         address trader;

21:         uint16 pairId;

22:         address settlementAsset;

23:         uint32 positionIndex;

27:         bool long;

28:         uint256 collateral; // Settlement Asset Decimals

29:         uint32  leverage;

30:         uint64  minPrice; // PRICE_SCALE

31:         uint64  maxPrice; // PRICE_SCALE

32:         uint64  tp; // PRICE_SCALE

33:         uint64  sl; // PRICE_SCALE

34:         uint64 tpByFraction; // FRACTION_SCALE

35:         uint64 slByFraction; // FRACTION_SCALE

43:         address settlementAsset; // 20 bytes

44:         uint16 pairId;           // 02 bytes

45:         uint32 index;            // 04 bytes

48:         address trader;          // 20 bytes

53:         uint collateral;         // 32 bytes -- Settlement Asset Decimals

57:         uint64 inPhaseSince;     // 08 bytes

58:         uint32 leverage;         // 04 bytes

59:         bool long;               // 01 bytes

60:         uint64 openPrice;        // 08 bytes -- PRICE_SCALE (8)

61:         uint32 spreadReductionF; // 04 bytes -- FRACTION_SCALE (5)

68:         uint64 tpLastUpdated;   // 08 bytes -- timestamp

69:         uint64 slLastUpdated;   // 08 bytes -- timestamp

70:         uint64 tp;              // 08 bytes -- PRICE_SCALE (8)

71:         uint64 sl;              // 08 bytes -- PRICE_SCALE (8)

78:         uint64 minPrice; // 08 bytes -- PRICE_SCALE

79:         uint64 maxPrice; // 08 bytes -- PRICE_SCALE

80:         uint64 tpByFraction;        // 04 bytes -- FRACTION_SCALE

81:         uint64 slByFraction;        // 04 bytes -- FRACTION_SCALE

89:         uint32 positionsCounter;    // 04 bytes

90:         uint32 positionInArray;     // 04 bytes (the index + 1)

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

44:         int64 price;

46:         uint64 conf;

48:         int32 expo;

50:         uint256 publishTime;

```

</details> 
 


 ### <a name="NC-8"></a>[NC-8]
 ### Array is push()ed but not pop()ed

#### Impact:
Array entries are added but are never removed. Consider whether this should be the case, or whether there should be a maximum, or whether old entries should be removed.

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

388:             pendingDepositorsArr[epoch].push(user);

456:             pendingRedeemersArr[epoch].push(user);

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

187:         supportedGroupIds.push(_id);

286:         supportedPairIds.push(_pair.id);

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

207:         allPendingUpdateOrderIds.push(_orderId);

```

```solidity
File: Lynx/Registry/RegistryV1.sol

245:         supportedTradingFloors.push(_tradingFloor);

280:         settlementAssetsForTradingFloor[_tradingFloor].push(_asset);

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

1406:             pairTraders[settlementAsset][pairId].push(trader);

```

</details> 
 


 ### <a name="NC-9"></a>[NC-9]
 ### Assembly blocks should have extensive comments
Assembly blocks take a lot more time to audit than normal Solidity code, and often have gotchas and side-effects that the Solidity versions of the same code do not. Consider adding more comments explaining what is being done in every step of the assembly code, and describe why assembly is being used instead of Solidity.  

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

118:         assembly {

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

1034:                 assembly {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

868:                 assembly {

```

</details> 
 


 ### <a name="NC-10"></a>[NC-10]
 ### Constants in comparisons should appear on the left side

#### Impact:
Placing constants on the left side of comparisons can improve code readability and prevent accidental assignment. Doing so will prevent typo [bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*Instances (90)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

35:         if (storedDomainSeparator == bytes32(0)) {

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

185:         if (fee == type(uint256).max) {

203:         if (dustChange > 0) {

211:         if (feeAmount > 0) {

227:         if (amount > 0) {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

383:         if (domainSeparator == bytes32(0) || trader == address(0)) {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

80:         if (

114:         if (totalBorrows == 0) {

121:         if (virtualBalance == 0) return type(uint256).max;

296:         if (reservesToSend > 0) {

314:         if (depositAmount < minDepositAmount)

376:         if (amount < minDepositAmount)

385:         if (pendingDeposit.amount == 0) {

453:         if (pendingRedeem.amount == 0) {

520:         if (0 == pendingDeposit.amount) {

531:         if (actualAmountOut >= pendingDeposit.minAmountOut) {

631:         if (0 == pendingRedeem.amount) {

646:         if (finalUnderlyingAmountOut >= pendingRedeem.minAmountOut) {

709:         if (0 == supply) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

70:         if (timediff == 0) {

84:         if (fundingRate > fundingRateMax)

107:         if (_oiLong == _oiShort) return (0, 0);

120:         if (oiSmall != 0) {

189:         if (profitPrecision <= 0) return 0;

303:         if (0 < profit) {

316:         if (loss > minPerformanceFee) {

600:             if (newOpenInterest > pair.maxOpenInterest) {

610:             if (absSkew > pair.maxSkew) {

645:         if (0 == totalRatioOiToP) {

670:         if (0 == effEntryPrice) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

114:         if (pair.minOpenFee < type(uint256).max) {

119:         if (group.minOpenFee < type(uint256).max) {

131:         if (currentGains > 0 && currentGains >= int256(pairs[pairId].maxGain)) {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

79:         if (utilization > maxVirtualUtilization) {

171:         if (borrows == 0) return 0;

172:         if (availableCash == 0) return type(uint256).max;

194:         if (accrualBlockTimestampPrior == currentBlockTimestamp) {

205:         if (borrowRate > borrowRateMax) {

230:         if (newPairBorrows > pairMaxBorrow(pairId)) {

238:         if (newGroupBorrows > groupMaxBorrow(groupId)) {

245:         if (newTotalBorrows > maxTotalBorrows)

263:         if (amount > totalInterestOld) {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

266:         if (borrowNew > borrowOld) {

276:         } else if (borrowNew < borrowOld) {

325:         if (leverage > pair.maxLeverage) {

327:         } else if (leverage < pair.minLeverage) {

329:         } else if (leveragedPosition > pair.maxPositionSize) {

334:         if (leverage > group.maxLeverage) {

336:         } else if (leverage < group.minLeverage) {

338:         } else if (leveragedPosition > group.maxPositionSize) {

354:         if (openFee < pairMinOpenFee(pairIndex))

366:         if (collateral <= pairMinPerformanceFee(pairIndex)) {

389:         if (potentialProfitPrecision > int256(maxGainPrecision)) {

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

218:         if (allPendingUpdateOrderIds.length > 1) {

222:             if (lastOrderIdInList != _orderId) {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

530:         if (orderType == TradingEnumsV1.OpenOrderType.LIMIT) {

537:         } else if (orderType == TradingEnumsV1.OpenOrderType.MARKET) {

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

309:         if (numericParam == AdminNumericParam.MAX_TRADES_PER_PAIR) {

312:         } else if (numericParam == AdminNumericParam.MAX_SL_F) {

317:         } else if (numericParam == AdminNumericParam.MAX_SANITY_PROFIT_F) {

565:         if (

614:         if (limitTrigger == LimitTrigger.SL) {

620:         } else if (limitTrigger == LimitTrigger.TP) {

626:         } else if (limitTrigger == LimitTrigger.LIQ) {

649:         if (positionCloseType == PositionCloseType.LIQ) {

693:         if (updateField == PositionField.TP) {

722:         } else if (updateField == PositionField.SL) {

793:         if (_orderType == OpenOrderType.MARKET) {

798:         } else if (_orderType == OpenOrderType.LIMIT) {

847:         if (_orderType == CloseOrderType.MARKET) {

902:         if (identifiers.index == 0) {

936:         if (_expectedPhase == PositionPhase.OPEN_MARKET) {

937:             if (

957:         } else if (_expectedPhase == PositionPhase.OPEN_LIMIT) {

1073:         if (triggerPrices.tpByFraction > 0) {

1082:         if (triggerPrices.slByFraction > 0) {

1150:         if (_tradeValue > positionRegistrationParams.collateral) {

1285:         if (tradeValue >= tradeCollateral) {

1299:             if (diff > closingFee) {

1341:         if (_amount > 0) {

1357:         if (amount > 0) {

1384:         if (amount > 0) {

1402:         if (

1423:         if (

1429:             if (p.length > 1) {

1495:         if (

1524:         if (

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

122:         if (0 > priceInfo.expo) {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

66:         if (x <= _kink) {

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

28:         if (sum == 0) {

```

</details> 
 


 ### <a name="NC-11"></a>[NC-11]
 ### constants should be defined rather than using magic numbers
Even [assembly](https://github.com/code-423n4/2022-05-opensea-seaport/blob/9d7ce4d08bf3c3010304a0476a785c70c0e90ae7/contracts/lib/TokenTransferrer.sol#L35-L39) can benefit from using readable constants instead of hex/numeric literals

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

119:             let free_mem_ptr := mload(0x40)

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

27:     address public NATIVE_UNDERLYING_ADDRESS = address(0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE);

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

1035:                     capType := mload(add(err, 0x24))

1036:                     value := mload(add(err, 0x44))

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

869:                     capType := mload(add(err, 0x24))

870:                     value := mload(add(err, 0x44))

```

</details> 
 


 ### <a name="NC-12"></a>[NC-12]
 ### Contract declarations should have NatSpec @author annotations

#### Impact:
Adding a NatSpec @author annotation to contract declarations can improve code documentation.

*Instances (62)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

11: contract AcceptableImplementationClaimableAdmin is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

4: contract ClaimableAdminStorage {

29: contract AcceptableImplementationClaimableAdminStorage is ClaimableAdminStorage {

41: contract AcceptableRegistryImplementationClaimableAdminStorage is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

10: contract AcceptableRegistryImplementationClaimableAdmin is AcceptableImplementationClaimableAdmin, AcceptableRegistryImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

9: contract ClaimableAdmin is ClaimableAdminStorage {

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

9: contract EIP712Utils {

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

10: contract MultiChainEIP712Base is EIP712Utils {

```

```solidity
File: Lynx/Chips/BaseChip.sol

11: contract BaseChip is ChipEnumsV1 {

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

20: contract EngineChip is ClaimableAdmin, ERC20, ReentrancyGuard, BaseChip {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

17: contract OFTChip is OFT, BaseChip {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

16: contract OFTChipAdapter is OFTAdapter {

```

```solidity
File: Lynx/Common/CaptainBase.sol

7: contract BaseCaptain is Ownable2Step {

```

```solidity
File: Lynx/Common/CommonScales.sol

7: contract CommonScales {

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

24: contract ChipsIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

19: contract LiquidityIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

11: contract MultiSourceChainIntentsVerifierBase is ClaimableAdmin, MultiChainEIP712Base {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

8: contract AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

8: contract HashAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

24: contract TradeIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, HashAndActionSerialNonceBase {

```

```solidity
File: Lynx/Lex/LexCaptain.sol

24: contract LexCaptain is BaseCaptain {

```

```solidity
File: Lynx/Lex/LexCommon.sol

12: contract LexCommon is

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

12: contract LexERC20 is IERC20 {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

10: contract LexPoolProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

12: abstract contract LexPoolStorage is LexCommon, LexERC20, LexPoolStructs {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

21: contract LexPoolV1 is LexPoolStorage, ILexPoolFunctionality, IAffiliationV1 {

72:         uint256 extraAmount, // sum of the amounts that are held by the contract but are not part of the available balance for utilization (such as interestShare and )

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

19: contract PNLR is ClaimableAdmin, TriggersPermissionBase {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

12: abstract contract AccountantFees is Debts {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

10: abstract contract AccountantPairGroups is PoolAccountantBase {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

11: abstract contract Debts is AccountantPairGroups {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

11: abstract contract PoolAccountantBase is

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

11: contract PoolAccountantProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

14: abstract contract PoolAccountantStorage is

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

12: contract PoolAccountantV1 is AccountantFees {

```

```solidity
File: Lynx/Locks/SystemLocker.sol

10: contract SystemLocker {

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

10: contract OrderBookProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

12: contract OrderBookStorageV1 is

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

14: contract OrderBookV1 is OrderBookStorageV1, IOrderBookFunctionalityV1 {

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

10: contract RegistryProxy is AcceptableImplementationClaimableAdmin {

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

10: contract RegistryStorage is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

15: contract RegistryV1 is RegistryStorage, IRegistryV1Functionality {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

25: contract TradersPortalV1 is ClaimableAdmin, SystemLocker, ITradersPortalV1Functionality, IAffiliationV1, CommonScales {

52:     bool public isDone; // Prevent any interaction with the contract

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

10: contract TradingFloorProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

12: contract TradingFloorV1Storage is

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

20: contract TradingFloorV1 is

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

8: contract ConfidenceChecker {

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

10: contract PriceAdjustmentBase is CommonScales {

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

10: contract TriggersPermissionBase {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

20: contract TriggersV1 is

60:     bool public isDone; // Prevent any interaction with the contract

```

```solidity
File: Lynx/interfaces/ChipEnumsV1.sol

4: contract ChipEnumsV1 {

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

16: contract WrappedNativeEngineChipHelper is IBurnHandlerV1 {

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

14: contract PythPriceValidator is ClaimableAdmin, IPriceValidatorV1 {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

10: contract BaseSingleKinkRateModel is IRateModelV1 {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

11: contract MutableSingleKinkRateModel is Ownable, BaseSingleKinkRateModel {

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

6: contract SteadyRateModel is Ownable {

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

11: contract MutableSingleKinkFundingRateModel is MutableSingleKinkRateModel, IFundingRateModel {

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

7: contract SteadyFundingRateModel is SteadyRateModel, IFundingRateModel {

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

11: contract MutableSingleKinkInterestRateModel is MutableSingleKinkRateModel, IInterestRateModel {

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

7: contract SteadyInterestRateModel is SteadyRateModel, IInterestRateModel {

```

</details> 
 


 ### <a name="NC-13"></a>[NC-13]
 ### Contract declarations should have NatSpec @Title annotations

#### Impact:
Adding a NatSpec @Title annotation to contract declarations can improve code documentation.

*Instances (62)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

11: contract AcceptableImplementationClaimableAdmin is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

4: contract ClaimableAdminStorage {

29: contract AcceptableImplementationClaimableAdminStorage is ClaimableAdminStorage {

41: contract AcceptableRegistryImplementationClaimableAdminStorage is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

10: contract AcceptableRegistryImplementationClaimableAdmin is AcceptableImplementationClaimableAdmin, AcceptableRegistryImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

9: contract ClaimableAdmin is ClaimableAdminStorage {

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

9: contract EIP712Utils {

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

10: contract MultiChainEIP712Base is EIP712Utils {

```

```solidity
File: Lynx/Chips/BaseChip.sol

11: contract BaseChip is ChipEnumsV1 {

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

20: contract EngineChip is ClaimableAdmin, ERC20, ReentrancyGuard, BaseChip {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

17: contract OFTChip is OFT, BaseChip {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

16: contract OFTChipAdapter is OFTAdapter {

```

```solidity
File: Lynx/Common/CaptainBase.sol

7: contract BaseCaptain is Ownable2Step {

```

```solidity
File: Lynx/Common/CommonScales.sol

7: contract CommonScales {

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

24: contract ChipsIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

19: contract LiquidityIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

11: contract MultiSourceChainIntentsVerifierBase is ClaimableAdmin, MultiChainEIP712Base {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

8: contract AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

8: contract HashAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

24: contract TradeIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, HashAndActionSerialNonceBase {

```

```solidity
File: Lynx/Lex/LexCaptain.sol

24: contract LexCaptain is BaseCaptain {

```

```solidity
File: Lynx/Lex/LexCommon.sol

12: contract LexCommon is

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

12: contract LexERC20 is IERC20 {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

10: contract LexPoolProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

12: abstract contract LexPoolStorage is LexCommon, LexERC20, LexPoolStructs {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

21: contract LexPoolV1 is LexPoolStorage, ILexPoolFunctionality, IAffiliationV1 {

72:         uint256 extraAmount, // sum of the amounts that are held by the contract but are not part of the available balance for utilization (such as interestShare and )

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

19: contract PNLR is ClaimableAdmin, TriggersPermissionBase {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

12: abstract contract AccountantFees is Debts {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

10: abstract contract AccountantPairGroups is PoolAccountantBase {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

11: abstract contract Debts is AccountantPairGroups {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

11: abstract contract PoolAccountantBase is

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

11: contract PoolAccountantProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

14: abstract contract PoolAccountantStorage is

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

12: contract PoolAccountantV1 is AccountantFees {

```

```solidity
File: Lynx/Locks/SystemLocker.sol

10: contract SystemLocker {

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

10: contract OrderBookProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

12: contract OrderBookStorageV1 is

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

14: contract OrderBookV1 is OrderBookStorageV1, IOrderBookFunctionalityV1 {

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

10: contract RegistryProxy is AcceptableImplementationClaimableAdmin {

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

10: contract RegistryStorage is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

15: contract RegistryV1 is RegistryStorage, IRegistryV1Functionality {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

25: contract TradersPortalV1 is ClaimableAdmin, SystemLocker, ITradersPortalV1Functionality, IAffiliationV1, CommonScales {

52:     bool public isDone; // Prevent any interaction with the contract

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

10: contract TradingFloorProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

12: contract TradingFloorV1Storage is

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

20: contract TradingFloorV1 is

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

8: contract ConfidenceChecker {

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

10: contract PriceAdjustmentBase is CommonScales {

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

10: contract TriggersPermissionBase {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

20: contract TriggersV1 is

60:     bool public isDone; // Prevent any interaction with the contract

```

```solidity
File: Lynx/interfaces/ChipEnumsV1.sol

4: contract ChipEnumsV1 {

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

16: contract WrappedNativeEngineChipHelper is IBurnHandlerV1 {

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

14: contract PythPriceValidator is ClaimableAdmin, IPriceValidatorV1 {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

10: contract BaseSingleKinkRateModel is IRateModelV1 {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

11: contract MutableSingleKinkRateModel is Ownable, BaseSingleKinkRateModel {

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

6: contract SteadyRateModel is Ownable {

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

11: contract MutableSingleKinkFundingRateModel is MutableSingleKinkRateModel, IFundingRateModel {

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

7: contract SteadyFundingRateModel is SteadyRateModel, IFundingRateModel {

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

11: contract MutableSingleKinkInterestRateModel is MutableSingleKinkRateModel, IInterestRateModel {

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

7: contract SteadyInterestRateModel is SteadyRateModel, IInterestRateModel {

```

</details> 
 


 ### <a name="NC-14"></a>[NC-14]
 ### NatSpec: Contract declarations should have @dev tags

#### Impact:
@dev is used to explain extra details to developers

*Instances (62)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

11: contract AcceptableImplementationClaimableAdmin is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

4: contract ClaimableAdminStorage {

29: contract AcceptableImplementationClaimableAdminStorage is ClaimableAdminStorage {

41: contract AcceptableRegistryImplementationClaimableAdminStorage is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

10: contract AcceptableRegistryImplementationClaimableAdmin is AcceptableImplementationClaimableAdmin, AcceptableRegistryImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

9: contract ClaimableAdmin is ClaimableAdminStorage {

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

9: contract EIP712Utils {

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

10: contract MultiChainEIP712Base is EIP712Utils {

```

```solidity
File: Lynx/Chips/BaseChip.sol

11: contract BaseChip is ChipEnumsV1 {

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

20: contract EngineChip is ClaimableAdmin, ERC20, ReentrancyGuard, BaseChip {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

17: contract OFTChip is OFT, BaseChip {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

16: contract OFTChipAdapter is OFTAdapter {

```

```solidity
File: Lynx/Common/CaptainBase.sol

7: contract BaseCaptain is Ownable2Step {

```

```solidity
File: Lynx/Common/CommonScales.sol

7: contract CommonScales {

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

24: contract ChipsIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

19: contract LiquidityIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

11: contract MultiSourceChainIntentsVerifierBase is ClaimableAdmin, MultiChainEIP712Base {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

8: contract AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

8: contract HashAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

24: contract TradeIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, HashAndActionSerialNonceBase {

```

```solidity
File: Lynx/Lex/LexCaptain.sol

24: contract LexCaptain is BaseCaptain {

```

```solidity
File: Lynx/Lex/LexCommon.sol

12: contract LexCommon is

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

12: contract LexERC20 is IERC20 {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

10: contract LexPoolProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

12: abstract contract LexPoolStorage is LexCommon, LexERC20, LexPoolStructs {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

21: contract LexPoolV1 is LexPoolStorage, ILexPoolFunctionality, IAffiliationV1 {

72:         uint256 extraAmount, // sum of the amounts that are held by the contract but are not part of the available balance for utilization (such as interestShare and )

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

19: contract PNLR is ClaimableAdmin, TriggersPermissionBase {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

12: abstract contract AccountantFees is Debts {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

10: abstract contract AccountantPairGroups is PoolAccountantBase {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

11: abstract contract Debts is AccountantPairGroups {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

11: abstract contract PoolAccountantBase is

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

11: contract PoolAccountantProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

14: abstract contract PoolAccountantStorage is

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

12: contract PoolAccountantV1 is AccountantFees {

```

```solidity
File: Lynx/Locks/SystemLocker.sol

10: contract SystemLocker {

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

10: contract OrderBookProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

12: contract OrderBookStorageV1 is

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

14: contract OrderBookV1 is OrderBookStorageV1, IOrderBookFunctionalityV1 {

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

10: contract RegistryProxy is AcceptableImplementationClaimableAdmin {

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

10: contract RegistryStorage is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

15: contract RegistryV1 is RegistryStorage, IRegistryV1Functionality {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

25: contract TradersPortalV1 is ClaimableAdmin, SystemLocker, ITradersPortalV1Functionality, IAffiliationV1, CommonScales {

52:     bool public isDone; // Prevent any interaction with the contract

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

10: contract TradingFloorProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

12: contract TradingFloorV1Storage is

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

20: contract TradingFloorV1 is

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

8: contract ConfidenceChecker {

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

10: contract PriceAdjustmentBase is CommonScales {

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

10: contract TriggersPermissionBase {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

20: contract TriggersV1 is

60:     bool public isDone; // Prevent any interaction with the contract

```

```solidity
File: Lynx/interfaces/ChipEnumsV1.sol

4: contract ChipEnumsV1 {

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

16: contract WrappedNativeEngineChipHelper is IBurnHandlerV1 {

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

14: contract PythPriceValidator is ClaimableAdmin, IPriceValidatorV1 {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

10: contract BaseSingleKinkRateModel is IRateModelV1 {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

11: contract MutableSingleKinkRateModel is Ownable, BaseSingleKinkRateModel {

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

6: contract SteadyRateModel is Ownable {

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

11: contract MutableSingleKinkFundingRateModel is MutableSingleKinkRateModel, IFundingRateModel {

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

7: contract SteadyFundingRateModel is SteadyRateModel, IFundingRateModel {

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

11: contract MutableSingleKinkInterestRateModel is MutableSingleKinkRateModel, IInterestRateModel {

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

7: contract SteadyInterestRateModel is SteadyRateModel, IInterestRateModel {

```

</details> 
 


 ### <a name="NC-15"></a>[NC-15]
 ### NatSpec: Contract declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (62)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

11: contract AcceptableImplementationClaimableAdmin is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

4: contract ClaimableAdminStorage {

29: contract AcceptableImplementationClaimableAdminStorage is ClaimableAdminStorage {

41: contract AcceptableRegistryImplementationClaimableAdminStorage is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

10: contract AcceptableRegistryImplementationClaimableAdmin is AcceptableImplementationClaimableAdmin, AcceptableRegistryImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

9: contract ClaimableAdmin is ClaimableAdminStorage {

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

9: contract EIP712Utils {

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

10: contract MultiChainEIP712Base is EIP712Utils {

```

```solidity
File: Lynx/Chips/BaseChip.sol

11: contract BaseChip is ChipEnumsV1 {

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

20: contract EngineChip is ClaimableAdmin, ERC20, ReentrancyGuard, BaseChip {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

17: contract OFTChip is OFT, BaseChip {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

16: contract OFTChipAdapter is OFTAdapter {

```

```solidity
File: Lynx/Common/CaptainBase.sol

7: contract BaseCaptain is Ownable2Step {

```

```solidity
File: Lynx/Common/CommonScales.sol

7: contract CommonScales {

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

24: contract ChipsIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

19: contract LiquidityIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

11: contract MultiSourceChainIntentsVerifierBase is ClaimableAdmin, MultiChainEIP712Base {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

8: contract AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

8: contract HashAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

24: contract TradeIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, HashAndActionSerialNonceBase {

```

```solidity
File: Lynx/Lex/LexCaptain.sol

24: contract LexCaptain is BaseCaptain {

```

```solidity
File: Lynx/Lex/LexCommon.sol

12: contract LexCommon is

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

12: contract LexERC20 is IERC20 {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

10: contract LexPoolProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

12: abstract contract LexPoolStorage is LexCommon, LexERC20, LexPoolStructs {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

21: contract LexPoolV1 is LexPoolStorage, ILexPoolFunctionality, IAffiliationV1 {

72:         uint256 extraAmount, // sum of the amounts that are held by the contract but are not part of the available balance for utilization (such as interestShare and )

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

19: contract PNLR is ClaimableAdmin, TriggersPermissionBase {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

12: abstract contract AccountantFees is Debts {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

10: abstract contract AccountantPairGroups is PoolAccountantBase {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

11: abstract contract Debts is AccountantPairGroups {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

11: abstract contract PoolAccountantBase is

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

11: contract PoolAccountantProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

14: abstract contract PoolAccountantStorage is

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

12: contract PoolAccountantV1 is AccountantFees {

```

```solidity
File: Lynx/Locks/SystemLocker.sol

10: contract SystemLocker {

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

10: contract OrderBookProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

12: contract OrderBookStorageV1 is

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

14: contract OrderBookV1 is OrderBookStorageV1, IOrderBookFunctionalityV1 {

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

10: contract RegistryProxy is AcceptableImplementationClaimableAdmin {

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

10: contract RegistryStorage is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

15: contract RegistryV1 is RegistryStorage, IRegistryV1Functionality {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

25: contract TradersPortalV1 is ClaimableAdmin, SystemLocker, ITradersPortalV1Functionality, IAffiliationV1, CommonScales {

52:     bool public isDone; // Prevent any interaction with the contract

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

10: contract TradingFloorProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

12: contract TradingFloorV1Storage is

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

20: contract TradingFloorV1 is

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

8: contract ConfidenceChecker {

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

10: contract PriceAdjustmentBase is CommonScales {

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

10: contract TriggersPermissionBase {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

20: contract TriggersV1 is

60:     bool public isDone; // Prevent any interaction with the contract

```

```solidity
File: Lynx/interfaces/ChipEnumsV1.sol

4: contract ChipEnumsV1 {

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

16: contract WrappedNativeEngineChipHelper is IBurnHandlerV1 {

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

14: contract PythPriceValidator is ClaimableAdmin, IPriceValidatorV1 {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

10: contract BaseSingleKinkRateModel is IRateModelV1 {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

11: contract MutableSingleKinkRateModel is Ownable, BaseSingleKinkRateModel {

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

6: contract SteadyRateModel is Ownable {

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

11: contract MutableSingleKinkFundingRateModel is MutableSingleKinkRateModel, IFundingRateModel {

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

7: contract SteadyFundingRateModel is SteadyRateModel, IFundingRateModel {

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

11: contract MutableSingleKinkInterestRateModel is MutableSingleKinkRateModel, IInterestRateModel {

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

7: contract SteadyInterestRateModel is SteadyRateModel, IInterestRateModel {

```

</details> 
 


 ### <a name="NC-16"></a>[NC-16]
 ### NatSpec: Contract declarations should have @notice tags
@notice is used to explain to end users what the contract does, and the compiler interprets /// or /** comments as this tag if one wasnt explicitly provided

*Instances (62)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

11: contract AcceptableImplementationClaimableAdmin is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

4: contract ClaimableAdminStorage {

29: contract AcceptableImplementationClaimableAdminStorage is ClaimableAdminStorage {

41: contract AcceptableRegistryImplementationClaimableAdminStorage is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

10: contract AcceptableRegistryImplementationClaimableAdmin is AcceptableImplementationClaimableAdmin, AcceptableRegistryImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

9: contract ClaimableAdmin is ClaimableAdminStorage {

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

9: contract EIP712Utils {

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

10: contract MultiChainEIP712Base is EIP712Utils {

```

```solidity
File: Lynx/Chips/BaseChip.sol

11: contract BaseChip is ChipEnumsV1 {

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

20: contract EngineChip is ClaimableAdmin, ERC20, ReentrancyGuard, BaseChip {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

17: contract OFTChip is OFT, BaseChip {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

16: contract OFTChipAdapter is OFTAdapter {

```

```solidity
File: Lynx/Common/CaptainBase.sol

7: contract BaseCaptain is Ownable2Step {

```

```solidity
File: Lynx/Common/CommonScales.sol

7: contract CommonScales {

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

24: contract ChipsIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

19: contract LiquidityIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

11: contract MultiSourceChainIntentsVerifierBase is ClaimableAdmin, MultiChainEIP712Base {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

8: contract AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

8: contract HashAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

24: contract TradeIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, HashAndActionSerialNonceBase {

```

```solidity
File: Lynx/Lex/LexCaptain.sol

24: contract LexCaptain is BaseCaptain {

```

```solidity
File: Lynx/Lex/LexCommon.sol

12: contract LexCommon is

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

12: contract LexERC20 is IERC20 {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

10: contract LexPoolProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

12: abstract contract LexPoolStorage is LexCommon, LexERC20, LexPoolStructs {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

21: contract LexPoolV1 is LexPoolStorage, ILexPoolFunctionality, IAffiliationV1 {

72:         uint256 extraAmount, // sum of the amounts that are held by the contract but are not part of the available balance for utilization (such as interestShare and )

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

19: contract PNLR is ClaimableAdmin, TriggersPermissionBase {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

12: abstract contract AccountantFees is Debts {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

10: abstract contract AccountantPairGroups is PoolAccountantBase {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

11: abstract contract Debts is AccountantPairGroups {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

11: abstract contract PoolAccountantBase is

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

11: contract PoolAccountantProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

14: abstract contract PoolAccountantStorage is

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

12: contract PoolAccountantV1 is AccountantFees {

```

```solidity
File: Lynx/Locks/SystemLocker.sol

10: contract SystemLocker {

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

10: contract OrderBookProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

12: contract OrderBookStorageV1 is

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

14: contract OrderBookV1 is OrderBookStorageV1, IOrderBookFunctionalityV1 {

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

10: contract RegistryProxy is AcceptableImplementationClaimableAdmin {

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

10: contract RegistryStorage is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

15: contract RegistryV1 is RegistryStorage, IRegistryV1Functionality {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

25: contract TradersPortalV1 is ClaimableAdmin, SystemLocker, ITradersPortalV1Functionality, IAffiliationV1, CommonScales {

52:     bool public isDone; // Prevent any interaction with the contract

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

10: contract TradingFloorProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

12: contract TradingFloorV1Storage is

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

20: contract TradingFloorV1 is

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

8: contract ConfidenceChecker {

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

10: contract PriceAdjustmentBase is CommonScales {

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

10: contract TriggersPermissionBase {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

20: contract TriggersV1 is

60:     bool public isDone; // Prevent any interaction with the contract

```

```solidity
File: Lynx/interfaces/ChipEnumsV1.sol

4: contract ChipEnumsV1 {

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

16: contract WrappedNativeEngineChipHelper is IBurnHandlerV1 {

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

14: contract PythPriceValidator is ClaimableAdmin, IPriceValidatorV1 {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

10: contract BaseSingleKinkRateModel is IRateModelV1 {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

11: contract MutableSingleKinkRateModel is Ownable, BaseSingleKinkRateModel {

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

6: contract SteadyRateModel is Ownable {

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

11: contract MutableSingleKinkFundingRateModel is MutableSingleKinkRateModel, IFundingRateModel {

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

7: contract SteadyFundingRateModel is SteadyRateModel, IFundingRateModel {

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

11: contract MutableSingleKinkInterestRateModel is MutableSingleKinkRateModel, IInterestRateModel {

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

7: contract SteadyInterestRateModel is SteadyRateModel, IInterestRateModel {

```

</details> 
 


 ### <a name="NC-17"></a>[NC-17]
 ### Consider using delete rather than assigning zero to clear value

#### Impact:
Consider using delete rather than assigning zero to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (21)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

186:             fee = 0;

```

```solidity
File: Lynx/Lex/LexCaptain.sol

39:         pair.maxOpenInterest = 0;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

489:         for (uint8 index = 0; index < users.length; index++) {

555:         for (uint8 index = 0; index < users.length; index++) {

588:         uint256 underlyingFreeAllocatedAmount = 0;

590:         for (uint8 index = 0; index < users.length; index++) {

672:         for (uint8 index = 0; index < users.length; index++) {

707:         uint256 virtualUnderlyingBalance = 0;

773:         for (uint256 index = 0; index < count; index++) {

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

78:         for (uint256 index = 0; index < pairPrices.length; index++) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

117:         uint256 valueLargePay = 0;

118:         uint256 valueSmallReceive = 0;

299:         uint256 performanceFee = 0;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

251:         for (uint256 i = 0; i < _pairs.length; i++) {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

264:             totalInterest = 0;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

71:         interestShare = 0;

```

```solidity
File: Lynx/Registry/RegistryV1.sol

231:         for (uint256 i = 0; i < contractNameHashes.length; i++) {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

350:         uint noFee = 0;

411:         uint noFee = 0;

449:         uint noFee = 0;

525:         uint32 spreadReductionF = 0;

```

</details> 
 


 ### <a name="NC-18"></a>[NC-18]
 ### Consider using delete rather than assigning false to clear value

#### Impact:
Consider using delete rather than assigning alse to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

537:             deposited = false;

652:             redeemed = false;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

610:         bool triggerValid = false;

```

</details> 
 


 ### <a name="NC-19"></a>[NC-19]
 ### Consider adding a block/deny-list"
Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens  

*Instances (62)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

11: contract AcceptableImplementationClaimableAdmin is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

4: contract ClaimableAdminStorage {

29: contract AcceptableImplementationClaimableAdminStorage is ClaimableAdminStorage {

41: contract AcceptableRegistryImplementationClaimableAdminStorage is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

10: contract AcceptableRegistryImplementationClaimableAdmin is AcceptableImplementationClaimableAdmin, AcceptableRegistryImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

9: contract ClaimableAdmin is ClaimableAdminStorage {

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

9: contract EIP712Utils {

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

10: contract MultiChainEIP712Base is EIP712Utils {

```

```solidity
File: Lynx/Chips/BaseChip.sol

11: contract BaseChip is ChipEnumsV1 {

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

20: contract EngineChip is ClaimableAdmin, ERC20, ReentrancyGuard, BaseChip {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

17: contract OFTChip is OFT, BaseChip {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

16: contract OFTChipAdapter is OFTAdapter {

```

```solidity
File: Lynx/Common/CaptainBase.sol

7: contract BaseCaptain is Ownable2Step {

```

```solidity
File: Lynx/Common/CommonScales.sol

7: contract CommonScales {

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

24: contract ChipsIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

19: contract LiquidityIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

11: contract MultiSourceChainIntentsVerifierBase is ClaimableAdmin, MultiChainEIP712Base {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

8: contract AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

8: contract HashAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

24: contract TradeIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, HashAndActionSerialNonceBase {

```

```solidity
File: Lynx/Lex/LexCaptain.sol

24: contract LexCaptain is BaseCaptain {

```

```solidity
File: Lynx/Lex/LexCommon.sol

12: contract LexCommon is

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

12: contract LexERC20 is IERC20 {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

10: contract LexPoolProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

12: abstract contract LexPoolStorage is LexCommon, LexERC20, LexPoolStructs {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

21: contract LexPoolV1 is LexPoolStorage, ILexPoolFunctionality, IAffiliationV1 {

72:         uint256 extraAmount, // sum of the amounts that are held by the contract but are not part of the available balance for utilization (such as interestShare and )

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

19: contract PNLR is ClaimableAdmin, TriggersPermissionBase {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

12: abstract contract AccountantFees is Debts {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

10: abstract contract AccountantPairGroups is PoolAccountantBase {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

11: abstract contract Debts is AccountantPairGroups {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

11: abstract contract PoolAccountantBase is

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

11: contract PoolAccountantProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

14: abstract contract PoolAccountantStorage is

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

12: contract PoolAccountantV1 is AccountantFees {

```

```solidity
File: Lynx/Locks/SystemLocker.sol

10: contract SystemLocker {

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

10: contract OrderBookProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

12: contract OrderBookStorageV1 is

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

14: contract OrderBookV1 is OrderBookStorageV1, IOrderBookFunctionalityV1 {

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

10: contract RegistryProxy is AcceptableImplementationClaimableAdmin {

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

10: contract RegistryStorage is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

15: contract RegistryV1 is RegistryStorage, IRegistryV1Functionality {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

25: contract TradersPortalV1 is ClaimableAdmin, SystemLocker, ITradersPortalV1Functionality, IAffiliationV1, CommonScales {

52:     bool public isDone; // Prevent any interaction with the contract

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

10: contract TradingFloorProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

12: contract TradingFloorV1Storage is

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

20: contract TradingFloorV1 is

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

8: contract ConfidenceChecker {

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

10: contract PriceAdjustmentBase is CommonScales {

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

10: contract TriggersPermissionBase {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

20: contract TriggersV1 is

60:     bool public isDone; // Prevent any interaction with the contract

```

```solidity
File: Lynx/interfaces/ChipEnumsV1.sol

4: contract ChipEnumsV1 {

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

16: contract WrappedNativeEngineChipHelper is IBurnHandlerV1 {

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

14: contract PythPriceValidator is ClaimableAdmin, IPriceValidatorV1 {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

10: contract BaseSingleKinkRateModel is IRateModelV1 {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

11: contract MutableSingleKinkRateModel is Ownable, BaseSingleKinkRateModel {

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

6: contract SteadyRateModel is Ownable {

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

11: contract MutableSingleKinkFundingRateModel is MutableSingleKinkRateModel, IFundingRateModel {

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

7: contract SteadyFundingRateModel is SteadyRateModel, IFundingRateModel {

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

11: contract MutableSingleKinkInterestRateModel is MutableSingleKinkRateModel, IInterestRateModel {

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

7: contract SteadyInterestRateModel is SteadyRateModel, IInterestRateModel {

```

</details> 
 


 ### <a name="NC-20"></a>[NC-20]
 ### Use bytes.concat() on bytes instead of abi.encodePacked() for clearer semantic meaning
Starting with version 0.8.4, Solidity has the bytes.concat() function, which allows one to concatenate a list of bytes/strings, without extra padding. Using this function rather than abi.encodePacked() makes the intended operation more clear, leading to less reviewer confusion.  

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

16:         CONTRACT_NAME_HASH = keccak256(abi.encodePacked(proxyName));

```

```solidity
File: Lynx/Chips/BaseChip.sol

33:         bytes32 roleHash =  keccak256(abi.encodePacked(role));

56:         bytes32 roleHash =  keccak256(abi.encodePacked(role));

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

87:         bytes32 digest = keccak256(abi.encodePacked(

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

70:         bytes32 digest = keccak256(abi.encodePacked(

80:         bytes32 digest = keccak256(abi.encodePacked(

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

133:         bytes32 digest = keccak256(abi.encodePacked(

143:         bytes32 digest = keccak256(abi.encodePacked(

153:         bytes32 digest = keccak256(abi.encodePacked(

163:         bytes32 digest = keccak256(abi.encodePacked(

173:         bytes32 digest = keccak256(abi.encodePacked(

183:         bytes32 digest = keccak256(abi.encodePacked(

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

795:             abi.encodePacked(settlementAsset, trader, pairId, index)

```

```solidity
File: Lynx/Registry/RegistryV1.sol

89:         bytes32 nameHash = keccak256(abi.encodePacked(proxyName));

112:         bytes32 roleHash =  keccak256(abi.encodePacked(_role));

120:         bytes32 roleHash = keccak256(abi.encodePacked(role));

130:         bytes32 roleHash =  keccak256(abi.encodePacked(_role));

339:         bytes32 roleHash = keccak256(abi.encodePacked(role));

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

173:             abi.encodePacked(settlementAsset, trader, pairId, index)

```

</details> 
 


 ### <a name="NC-21"></a>[NC-21]
 ### Consider adding emergency-stop functionality

#### Impact:
Adding a way to quickly halt protocol functionality in an emergency, rather than having to pause individual contracts one-by-one, will make in-progress hack mitigation faster and much less stressful.

*Instances (62)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

11: contract AcceptableImplementationClaimableAdmin is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

4: contract ClaimableAdminStorage {

29: contract AcceptableImplementationClaimableAdminStorage is ClaimableAdminStorage {

41: contract AcceptableRegistryImplementationClaimableAdminStorage is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

10: contract AcceptableRegistryImplementationClaimableAdmin is AcceptableImplementationClaimableAdmin, AcceptableRegistryImplementationClaimableAdminStorage {

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

9: contract ClaimableAdmin is ClaimableAdminStorage {

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

9: contract EIP712Utils {

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

10: contract MultiChainEIP712Base is EIP712Utils {

```

```solidity
File: Lynx/Chips/BaseChip.sol

11: contract BaseChip is ChipEnumsV1 {

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

20: contract EngineChip is ClaimableAdmin, ERC20, ReentrancyGuard, BaseChip {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

17: contract OFTChip is OFT, BaseChip {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

16: contract OFTChipAdapter is OFTAdapter {

```

```solidity
File: Lynx/Common/CaptainBase.sol

7: contract BaseCaptain is Ownable2Step {

```

```solidity
File: Lynx/Common/CommonScales.sol

7: contract CommonScales {

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

24: contract ChipsIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

19: contract LiquidityIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

11: contract MultiSourceChainIntentsVerifierBase is ClaimableAdmin, MultiChainEIP712Base {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

8: contract AccountAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

8: contract HashAndActionSerialNonceBase {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

24: contract TradeIntentsVerifierV1 is MultiSourceChainIntentsVerifierBase, HashAndActionSerialNonceBase {

```

```solidity
File: Lynx/Lex/LexCaptain.sol

24: contract LexCaptain is BaseCaptain {

```

```solidity
File: Lynx/Lex/LexCommon.sol

12: contract LexCommon is

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

12: contract LexERC20 is IERC20 {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

10: contract LexPoolProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

12: abstract contract LexPoolStorage is LexCommon, LexERC20, LexPoolStructs {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

21: contract LexPoolV1 is LexPoolStorage, ILexPoolFunctionality, IAffiliationV1 {

72:         uint256 extraAmount, // sum of the amounts that are held by the contract but are not part of the available balance for utilization (such as interestShare and )

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

19: contract PNLR is ClaimableAdmin, TriggersPermissionBase {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

12: abstract contract AccountantFees is Debts {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

10: abstract contract AccountantPairGroups is PoolAccountantBase {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

11: abstract contract Debts is AccountantPairGroups {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

11: abstract contract PoolAccountantBase is

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

11: contract PoolAccountantProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

14: abstract contract PoolAccountantStorage is

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

12: contract PoolAccountantV1 is AccountantFees {

```

```solidity
File: Lynx/Locks/SystemLocker.sol

10: contract SystemLocker {

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

10: contract OrderBookProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

12: contract OrderBookStorageV1 is

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

14: contract OrderBookV1 is OrderBookStorageV1, IOrderBookFunctionalityV1 {

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

10: contract RegistryProxy is AcceptableImplementationClaimableAdmin {

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

10: contract RegistryStorage is AcceptableImplementationClaimableAdminStorage {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

15: contract RegistryV1 is RegistryStorage, IRegistryV1Functionality {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

25: contract TradersPortalV1 is ClaimableAdmin, SystemLocker, ITradersPortalV1Functionality, IAffiliationV1, CommonScales {

52:     bool public isDone; // Prevent any interaction with the contract

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

10: contract TradingFloorProxy is AcceptableRegistryImplementationClaimableAdmin {

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

12: contract TradingFloorV1Storage is

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

20: contract TradingFloorV1 is

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

8: contract ConfidenceChecker {

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

10: contract PriceAdjustmentBase is CommonScales {

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

10: contract TriggersPermissionBase {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

20: contract TriggersV1 is

60:     bool public isDone; // Prevent any interaction with the contract

```

```solidity
File: Lynx/interfaces/ChipEnumsV1.sol

4: contract ChipEnumsV1 {

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

16: contract WrappedNativeEngineChipHelper is IBurnHandlerV1 {

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

14: contract PythPriceValidator is ClaimableAdmin, IPriceValidatorV1 {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

10: contract BaseSingleKinkRateModel is IRateModelV1 {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

11: contract MutableSingleKinkRateModel is Ownable, BaseSingleKinkRateModel {

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

6: contract SteadyRateModel is Ownable {

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

11: contract MutableSingleKinkFundingRateModel is MutableSingleKinkRateModel, IFundingRateModel {

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

7: contract SteadyFundingRateModel is SteadyRateModel, IFundingRateModel {

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

11: contract MutableSingleKinkInterestRateModel is MutableSingleKinkRateModel, IInterestRateModel {

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

7: contract SteadyInterestRateModel is SteadyRateModel, IInterestRateModel {

```

</details> 
 


 ### <a name="NC-22"></a>[NC-22]
 ### Error declarations should have NatSpec descriptions

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

62:         require(balance > pendingAmount, "Fatal error");

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

1028:         } catch Error(string memory error) {

1029:             revert(error);

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

844:         } catch Error(string memory error) {

853:                 error,

```

```solidity
File: Lynx/interfaces/LexErrors.sol

26:     error CapError(CapType, uint256 value);

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

6:     error InvalidArgument();

8:     error InvalidUpdateDataSource();

10:     error InvalidUpdateData();

12:     error InsufficientFee();

14:     error NoFreshUpdate();

16:     error PriceFeedNotFoundWithinRange();

18:     error PriceFeedNotFound();

20:     error StalePrice();

22:     error InvalidWormholeVaa();

24:     error InvalidGovernanceMessage();

26:     error InvalidGovernanceTarget();

28:     error InvalidGovernanceDataSource();

30:     error OldGovernanceMessage();

```

</details> 
 


 ### <a name="NC-23"></a>[NC-23]
 ### Custom error has no error details
Custom errors should have a description of the error. This is used to explain to end users what the error means. 

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

62:         require(balance > pendingAmount, "Fatal error");

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

1028:         } catch Error(string memory error) {

1029:             revert(error);

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

844:         } catch Error(string memory error) {

853:                 error,

```

```solidity
File: Lynx/interfaces/LexErrors.sol

26:     error CapError(CapType, uint256 value);

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

6:     error InvalidArgument();

8:     error InvalidUpdateDataSource();

10:     error InvalidUpdateData();

12:     error InsufficientFee();

14:     error NoFreshUpdate();

16:     error PriceFeedNotFoundWithinRange();

18:     error PriceFeedNotFound();

20:     error StalePrice();

22:     error InvalidWormholeVaa();

24:     error InvalidGovernanceMessage();

26:     error InvalidGovernanceTarget();

28:     error InvalidGovernanceDataSource();

30:     error OldGovernanceMessage();

```

</details> 
 


 ### <a name="NC-24"></a>[NC-24]
 ### Events are missing sender information

#### Impact:
Including msg.sender in events triggered by user actions can make events more useful for end users.

*Instances (141)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

42:         emit NewPendingImplementation(oldPendingImplementation, pendingImplementation);

61:         emit NewImplementation(oldImplementation, implementation);

62:         emit NewPendingImplementation(oldPendingImplementation, pendingImplementation);

84:         emit NewPendingAdmin(oldPendingAdmin, newPendingAdmin);

105:         emit NewAdmin(oldAdmin, admin);

106:         emit NewPendingAdmin(oldPendingAdmin, pendingAdmin);

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

38:         emit NewPendingAdmin(oldPendingAdmin, newPendingAdmin);

59:         emit NewAdmin(oldAdmin, admin);

60:         emit NewPendingAdmin(oldPendingAdmin, pendingAdmin);

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

45:             emit DomainSeparatorForChainStored(chainId, domainSeparator);

```

```solidity
File: Lynx/Chips/BaseChip.sol

59:         emit AutoApprovedSpenderSet(role, oldSpender, spender);

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

100:         emit IsMintingPausedSet(_value);

184:         emit ChipMinted(minter, _toAddress, _amount, ownAmountToMint);

252:         emit ChipBurned(burner, receiver, underlyingAmount, chipAmount);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

70:         emit IsSendPausedSet(_isPaused);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

59:         emit IsSendPausedSet(_isPaused);

103:         emit UnderlyingRecoveryRenounced();

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

110:         emit ChipOutFeeSet(chip, fee);

120:         emit LzEidSet(evmId, lzEid);

128:         emit FeesReceiverSet(receiver);

177:         emit ChipsIntentVerified(msg.sender, payload.chip, payload.holder, ChipsIntentsVerifierActions.CHIP_OUT_LZ, amountAfterFeeWithoutDust, fee);

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

123:         emit LiquidityIntentVerified(msg.sender, payload.pool, payload.liquidityProvider, LiquidityIntentsVerifierActions.REQUEST_EPOCH_DEPOSIT, payload.nonce);

143:         emit LiquidityIntentVerified(msg.sender, payload.pool, payload.liquidityProvider, LiquidityIntentsVerifierActions.REQUEST_EPOCH_REDEEM, payload.nonce);

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

65:         emit SourceChainIdForAssetStored(asset, chainId);

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

250:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.REQUEST_POSITION_OPEN, positionId, payload.nonce);

270:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.REQUEST_POSITION_MARKET_CLOSE, payload.positionId, payload.nonce);

295:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.REQUEST_POSITION_SINGLE_FIELD_UPDATE, payload.positionId, payload.nonce);

324:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.REQUEST_POSITION_DOUBLE_FIELD_UPDATE, payload.positionId, payload.nonce);

350:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.DIRECT_UPDATE_PENDING_LIMIT_POSITION, payload.positionId, payload.nonce);

374:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.DIRECT_CANCEL_PENDING_LIMIT_POSITION, payload.positionId, payload.nonce);

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

96:         emit Transfer(sender, recipient, amount);

125:         emit Approval(owner, spender, amount);

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

250:         emit NumberUpdated(

258:         emit NumberUpdated(LexPoolNumbersEnum.epochsDelayDeposit, delay);

263:         emit NumberUpdated(LexPoolNumbersEnum.epochsDelayRedeem, delay);

268:         emit NumberUpdated(LexPoolNumbersEnum.epochDuration, duration);

273:         emit NumberUpdated(LexPoolNumbersEnum.minDepositAmount, amount);

281:         emit ImmediateDepositAllowedToggled(immediateDepositAllowed);

326:         emit ImmediateDeposit(user, depositAmount, amountToMint);

327:         emit LiquidityProvided(

396:         emit DepositRequest(user, amount, minAmountOut, epoch);

397:         emit LiquidityProvided(domain, referralCode, user, amount, epoch);

465:         emit RedeemRequest(user, amount, minAmountOut, epoch);

541:         emit ProcessedDeposit(user, deposited, amount);

566:             emit CanceledDeposit(user, epoch, pendingDeposit.amount);

658:         emit ProcessedRedeem(user, redeemed, amount);

683:             emit CanceledRedeem(user, epoch, pendingRedeem.amount);

731:         emit NewEpoch(

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

20:         emit NumberUpdated(PoolAccountantV1NumbersEnum.minOpenFee, min);

25:         emit NumberUpdated(PoolAccountantV1NumbersEnum.lexPartF, partF);

30:         emit NumberUpdated(

39:         emit NumberUpdated(

48:         emit NumberUpdated(PoolAccountantV1NumbersEnum.liquidationFeeF, fee);

409:         emit TradeInitialAccFeesStored(positionId, t.borrowIndex, t.funding);

488:         emit FeesCharged(

550:         emit PerformanceFeeCharging(positionId, performanceFee);

726:             emit AccrueFunding(pairId, valueLong, valueShort);

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

172:         emit TradersPairGainsReset(pairId);

191:         emit GroupAdded(_id, _name, _group);

201:         emit GroupUpdated(_group.id, _group);

221:         emit FeeAdded(_id, _name, _fee);

231:         emit FeeUpdated(_fee.id, _fee);

264:         emit PairUpdated(_pair.id, _pair);

291:         emit PairAdded(_pair.id, _pairFromTo.from, _pairFromTo.to, _pair);

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

33:         emit NumberUpdated(

41:         emit NumberUpdated(PoolAccountantV1NumbersEnum.borrowRateMax, rate);

46:         emit NumberUpdated(

60:         emit NumberUpdated(

142:             emit AccrueInterest(

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

51:         emit NumberUpdated(PoolAccountantV1NumbersEnum.maxGainF, _maxGainF);

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

83:         emit TradingFloorSet(tradingFloor);

127:         emit UpdateLivePositionOrderSet(_positionId, updateTradeFieldOrder);

173:         emit UpdateLivePositionOrderSet(_positionId, updateTradeFieldOrder);

235:         emit UpdateLivePositionOrderRemoved(_orderId);

```

```solidity
File: Lynx/Registry/RegistryV1.sol

132:         emit AddressUpdated(_role, _address);

172:         emit AddressUpdated("tradeIntentsVerifier", _tradeIntentsVerifier);

180:         emit AddressUpdated("liquidityIntentsVerifier", _liquidityIntentsVerifier);

188:         emit AddressUpdated("chipsIntentsVerifier", _chipsIntentsVerifier);

197:         emit FeesManagerSet(asset, feesManager);

247:         emit TradingFloorSupported(_tradingFloor);

298:         emit SettlementAssetForTradingFloorAdded(_tradingFloor, _asset, _lexPool, _poolAccountant);

321:         emit NewVersionPublished(versionToPublish, contractNameHash, contractImplementation);

335:         emit AddressUpdated(name, _newLocker);

349:         emit ValidChipSpenderTargetByRoleSet(chip, role, spender);

362:         emit ValidChipBurnHandlerSet(chip, burnHandler);

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

143:         emit PausedToggled(isPaused);

149:         emit DoneToggled(isDone);

158:         emit NumberUpdated("limitOrdersTimelock", value);

165:         emit NumberUpdated("marketOrdersTimeout", value);

171:         emit IsLimitingMarketClosePriceRangeToggled(

178:         emit ActionFeeSet(action, requiredFee);

357:         emit PendingOpenLimitPositionCancelled(_positionId);

418:         emit PendingMarketOpenOrderTimeoutCancelled(_positionId, trader);

456:         emit PendingMarketCloseOrderTimeoutCancelled(_positionId, trader);

548:         emit PositionRequested(domain, referralCode, positionId);

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

294:         emit SettlementAssetAdded(_asset, _lexPool, _poolAccountant);

326:         emit NumberUpdated(name, value);

334:         emit PairPausedChange(_pairId, _isPaused);

432:         emit PendingPositionStored(

463:         emit PositionSetForMarketClose(_positionId, _minPrice, _maxPrice);

509:         emit PendingPositionUpdated(

585:             emit PositionClosedMarket(

656:         emit PositionClosedLimit(

761:         emit OpenedPositionUpdated(

859:         emit PositionMarketCloseCancelled(_positionId, source, 0);

908:             emit PositionIdentifiersStored(positionId, identifiers);

941:                 emit PositionOpenCancelledByMarketPriceRange(

1020:             emit PositionOpened(

1038:                 emit PositionOpenCancelledByCap(_positionId, capType, value);

1268:         emit PendingPositionCancelled(positionId, canceller, cancellationFee);

1329:         emit FeeCollected(_asset, _feeType, _to, amount);

1343:             emit FeeRegistered(_positionId, _token, _feeType, _amount);

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

32:         emit MaxConfidenceForPairSet(_pairId, _maxConfidenceFractionForPair);

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

34:         emit SpreadFractionForPairSet(_pairId, _spreadF);

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

44:         emit TriggerAccountAllowed(account);

50:         emit TriggerAccountDisallowed(account);

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

205:         emit PausedToggled(isPaused);

211:         emit DoneToggled(isDone);

225:         emit AddressUpdated("PriceValidator", _priceValidator);

258:         emit NumberUpdated(

272:         emit NumberUpdated(

282:         emit NumberUpdated(

292:         emit NumberUpdated("marketOrdersTimeout", _marketOrdersTimeout);

299:         emit NumberUpdated(

309:         emit NumberUpdated(

319:         emit NumberUpdated(

329:         emit NumberUpdated(

339:         emit NumberUpdated("maxTriggersPerBlock", _maxTriggersPerBlock);

398:         emit OpenPositionExecuted(

456:         emit OpenPositionExecuted(

510:         emit ClosePositionExecuted(

557:         emit SlExecuted(

610:         emit TpExecuted(

646:         emit LiquidationExecuted(

809:         emit PositionUpdateTimeoutTriggered(

834:             emit UpdatePositionSingleFieldExecuted(

846:             emit UpdatePositionSingleFieldRejected(

918:         emit MarketOpenTimeoutTriggered(msg.sender, _positionId, pairId);

947:         emit MarketCloseTimeoutTriggered(msg.sender, _positionId, pairId);

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

59:         emit NewRateParams(_baseRate, _multiplier, _kink,_postKinkMultiplier, rateOnKink);

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

17:         emit DefaultRateUpdated(defaultRate);

```

</details> 
 


 ### <a name="NC-25"></a>[NC-25]
 ### NatSpec: Event declarations should have NatSpec descriptions

*Instances (116)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

15:     event NewPendingImplementation(address oldPendingImplementation, address newPendingImplementation);

20:     event NewImplementation(address oldImplementation, address newImplementation);

25:     event NewPendingAdmin(address oldPendingAdmin, address newPendingAdmin);

30:     event NewAdmin(address oldAdmin, address newAdmin);

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

13:     event NewPendingAdmin(address oldPendingAdmin, address newPendingAdmin);

18:     event NewAdmin(address oldAdmin, address newAdmin);

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

13:     event DomainSeparatorForChainStored(uint256 indexed chainId, bytes32 domainSeparator);

```

```solidity
File: Lynx/Chips/BaseChip.sol

15:     event AutoApprovedSpenderSet(string indexed role, address indexed oldSpender, address indexed newSpender);

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

26:     event IsMintingPausedSet(bool indexed value);

28:     event BurnHandlerSet(address indexed previousHandler, address indexed handler);

30:     event MintControllerSet(address indexed previousController, address indexed newController);

31:     event BurnControllerSet(address indexed previousController, address indexed newController);

33:     event TokensSwept(address indexed token, address indexed receiver, uint256 amount);

35:     event ChipMinted(address indexed minter, address indexed to, uint256 underlyingAmount, uint256 amount);

36:     event ChipBurned(address indexed burner, address indexed receiver, uint256 underlyingAmount, uint256 amount);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

21:     event IsSendPausedSet(bool isPaused);

23:     event CreditControllerSet(address indexed previousController, address indexed newController);

24:     event DebitControllerSet(address indexed previousController, address indexed newController);

26:     event TokensSwept(address indexed token, address indexed receiver, uint256 amount);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

20:     event IsSendPausedSet(bool isPaused);

22:     event CreditControllerSet(address indexed previousController, address indexed newController);

23:     event DebitControllerSet(address indexed previousController, address indexed newController);

25:     event UnderlyingRecoveryRenounced();

26:     event UnderlyingRecovered(address indexed receiver, uint256 amount);

27:     event TokensSwept(address indexed token, address indexed receiver, uint256 amount);

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

59:     event ChipOutFeeSet(address indexed chip, uint256 fee);

60:     event LzEidSet(uint16 indexed evmId, uint16 indexed lzEid);

61:     event FeesReceiverSet(address indexed receiver);

63:     event ChipsIntentVerified(address indexed sender, address indexed chip, address indexed holder, ChipsIntentsVerifierActions action, uint256 amount, uint256 fee);

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

58:     event LiquidityIntentVerified(address indexed sender, address indexed pool, address indexed liquidityProvider, LiquidityIntentsVerifierActions action, uint256 nonce);

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

15:     event SourceChainIdForAssetStored(address indexed asset, uint256 indexed chainId);

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

113:     event TradeIntentVerified(address indexed sender, TradeIntentsVerifierActions indexed action, bytes32 positionId, uint256 nonce);

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

13:     event TradersPairGainsReset(uint indexed pairId);

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

20:     event AddressUpdated(

24:     event NumberUpdated(

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

18:     event TradingFloorSet(address indexed tradingFloor);

20:     event NumberUpdated(string indexed name, uint value);

22:     event UpdateLivePositionOrderSet(

27:     event UpdateLivePositionOrderRemoved(bytes32 indexed positionId);

```

```solidity
File: Lynx/Registry/RegistryV1.sol

17:     event AddressUpdated(string indexed name, address a);

18:     event NewVersionPublished(uint256 indexed version, bytes32 indexed contractNameHash, address contractImplementation);

19:     event FeesManagerSet(address indexed asset, address indexed feesManager);

21:     event TradingFloorSupported(address indexed tradingFloor);

22:     event SettlementAssetForTradingFloorAdded(address indexed tradingFloor, address indexed settlementAsset,address indexed lexPool, address poolAccountant);

24:     event ValidChipSpenderTargetByRoleSet(address indexed chip, string indexed role, address indexed spender);

25:     event ValidChipBurnHandlerSet(address indexed chip, address indexed burnHandler);

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

60:     event DoneToggled(bool done);

61:     event PausedToggled(bool paused);

63:     event NumberUpdated(string name, uint value);

65:     event IsLimitingMarketClosePriceRangeToggled(bool done);

67:     event ActionFeeSet(TradersPortalActions indexed action, uint256 requiredFee);

69:     event PendingOpenLimitPositionCancelled(bytes32 indexed positionId);

71:     event PendingMarketOpenOrderTimeoutCancelled(

76:     event PendingMarketCloseOrderTimeoutCancelled(

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

33:     event SettlementAssetAdded(

39:     event NumberUpdated(string indexed name, uint value);

40:     event PairPausedChange(uint indexed pairId, bool indexed isPaused);

42:     event PositionIdentifiersStored(

47:     event PendingPositionStored(

55:     event PositionOpenCancelledByMarketPriceRange(

60:     event PositionOpenCancelledByCap(

66:     event PositionOpened(

75:     event PositionSetForMarketClose(

81:     event PositionClosedMarket(

87:     event PositionClosedLimit(

96:     event FeeRegistered(

103:     event FeeCollected(

110:     event PendingPositionCancelled(

115:     event PositionMarketCloseCancelled(

121:     event PendingPositionUpdated(

129:     event OpenedPositionUpdated(

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

19:     event MaxConfidenceForPairSet(uint indexed pairId, uint maxConfidenceFraction);

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

21:     event SpreadFractionForPairSet(uint indexed pairId, uint slippage);

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

26:     event TriggerAccountAllowed(address indexed account);

27:     event TriggerAccountDisallowed(address indexed account);

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

64:     event PausedToggled(bool paused);

65:     event DoneToggled(bool done);

67:     event NumberUpdated(string indexed name, uint value);

68:     event AddressUpdated(string indexed name, address value);

71:     event OpenPositionExecuted(

80:     event ClosePositionExecuted(

89:     event SlExecuted(

98:     event TpExecuted(

107:     event UpdatePositionSingleFieldExecuted(

116:     event UpdatePositionSingleFieldRejected(

127:     event LiquidationExecuted(

136:     event MarketOpenTimeoutTriggered(

142:     event MarketCloseTimeoutTriggered(

148:     event PositionUpdateTimeoutTriggered(

```

```solidity
File: Lynx/interfaces/IAffiliationV1.sol

5:     event PositionRequested(

10:     event LiquidityProvided(

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

23:     event NewEpoch(

31:     event AddressUpdated(LexPoolAddressesEnum indexed enumCode, address a);

32:     event NumberUpdated(LexPoolNumbersEnum indexed enumCode, uint value);

33:     event DepositRequest(

39:     event RedeemRequest(

45:     event ProcessedDeposit(

50:     event ProcessedRedeem(

55:     event CanceledDeposit(

60:     event CanceledRedeem(

65:     event ImmediateDepositAllowedToggled(bool indexed value);

66:     event ImmediateDeposit(

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

93:     event PairAdded(

99:     event PairUpdated(uint256 indexed id, Pair pair);

101:     event GroupAdded(uint256 indexed id, string indexed groupName, Group group);

102:     event GroupUpdated(uint256 indexed id, Group group);

104:     event FeeAdded(uint256 indexed id, string indexed name, Fee fee);

105:     event FeeUpdated(uint256 indexed id, Fee fee);

107:     event TradeInitialAccFeesStored(

114:     event AccrueFunding(

121:     event FeesCharged(

136:     event PerformanceFeeCharging(

141:     event MaxOpenInterestUpdated(uint256 pairIndex, uint256 maxOpenInterest);

143:     event AccrueInterest(

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

39:     event NewRateParams(uint256 baseRate, uint256 multiplier, uint256 kink, uint256 postKinkMultiplier, uint256 rateOnKink);

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

9:     event DefaultRateUpdated(uint newDefaultRate);

```

</details> 
 


 ### <a name="NC-26"></a>[NC-26]
 ### Events should use parameters to convey information

#### Impact:
Using parameters in events can provide additional information to subscribers about the event occurrence.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

103:         emit UnderlyingRecoveryRenounced();

```

</details> 
 


 ### <a name="NC-27"></a>[NC-27]
 ### contracts should use fixed compiler versions
To prevent the contracts being deployed and behaving differently depending on the compiler version, it is recommended to use fixed solidity versions for contracts and libraries. Although we can configure a specific version through config (like hardhat, forge config files), it is recommended to set the fixed version in the solidity pragma directly before deploying to the mainnet.

*Instances (84)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/IContractRegistryBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/BaseChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Common/CaptainBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Common/CommonScales.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexCaptain.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexCommon.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Locks/SystemLocker.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ChipEnumsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IAffiliationV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IBurnHandlerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IGlobalLock.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILzCreditControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILzDebitControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IOrderBookV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolBurnControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolMintControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPriceValidatorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IRateModelV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IRegistryV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradeIncentivizerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradersPortalV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradingFloorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IWrappedNative.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/LexErrors.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/LexPoolAdminEnums.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/OrderBookStructsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/PoolAccountantV1AdminEnums.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/TradingEnumsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/TradingFloorStructsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

</details> 
 


 ### <a name="NC-28"></a>[NC-28]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (664)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

33:     function _setPendingImplementation(address newPendingImplementation) public {

49:     function _acceptImplementation() public returns (uint) {

73:     function _setPendingAdmin(address newPendingAdmin) public {

91:     function _acceptAdmin() public {

132:     function approvePendingImplementationInternal(

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

19:     function approvePendingImplementationInternal(address _implementation) internal view override returns(bool) {

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

27:     function _setPendingAdmin(address newPendingAdmin) public {

45:     function _acceptAdmin() public {

```

```solidity
File: AdministrationContracts/IContractRegistryBase.sol

5:     function isImplementationValidForProxy(bytes32 proxyNameHash, address _implementation) external view returns (bool);

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

21:     function hashDomain(EIP712Domain memory eip712Domain) internal pure returns (bytes32) {

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

32:     function generateAndStoreDomainSeparatorIfMissingInternal(uint256 chainId) internal returns (bytes32) {

```

```solidity
File: Lynx/Chips/BaseChip.sol

32:     function getAutoApprovedSpenderAddressByRole(string calldata role) public view returns (address) {

48:     function setAutoApprovedSpenderForRoleInternal(string calldata role, address spender) internal {

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

73:     function setAutoApprovedSpenderForRole(string calldata role, address spender) external onlyAdmin {

81:     function setBurnHandler(IBurnHandlerV1 _handler) external onlyAdmin {

96:     function setIsMintingPaused(bool _value) external onlyAdmin {

107:     function setMintController(IPoolMintControllerV1 _mintController) external onlyAdmin {

124:     function setBurnController(IPoolBurnControllerV1 _burnController) external onlyAdmin {

143:     function sweepTokens(IERC20 _token, uint256 _amount) external onlyAdmin {

156:     function sweepNative(uint256 _amount) external onlyAdmin {

167:     function mintChip(address _toAddress, uint256 _amount) external nonReentrant {

192:     function burnChip(

205:     function burnChipAndCall(

228:     function safeBurnInternal(address burner, address receiver, uint256 chipAmount) internal returns (uint256 underlyingAmount) {

260:     function allowance(address owner, address spender) public view virtual override returns (uint256) {

274:     function takeUnderlying(address from, uint amount) internal {

287:     function underlyingAmountToOwnAmountInternal(

296:     function ownAmountToUnderlyingAmountInternal(

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

55:     function setAutoApprovedSpenderForRole(string calldata role, address spender) external onlyOwner {

63:     function setIsSendPaused(bool _isPaused) external onlyOwner {

77:     function setCreditController(ILzCreditControllerV1 _creditController) external onlyOwner {

94:     function setDebitController(ILzDebitControllerV1 _debitController) external onlyOwner {

114:     function sweepTokens(ERC20 _token, uint256 _amount) external onlyOwner {

131:     function _credit(

156:     function _debit(

177:     function allowance(address owner, address spender) public view virtual override returns (uint256) {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

52:     function setIsSendPaused(bool _isPaused) external onlyOwner {

66:     function setCreditController(ILzCreditControllerV1 _creditController) external onlyOwner {

83:     function setDebitController(ILzDebitControllerV1 _debitController) external onlyOwner {

100:     function renounceUnderlyingRecovery() external onlyOwner {

111:     function recoverUnderlying(uint256 _amount) external onlyOwner {

125:     function sweepTokens(IERC20 _token, uint256 _amount) external onlyOwner {

146:     function _credit(

179:     function _debit(

```

```solidity
File: Lynx/Common/CaptainBase.sol

15:     function _requireRole(uint8 role) internal view {

24:     function grantRole(uint8 role, address account) external onlyOwner {

28:     function revokeRole(uint8 role, address account) external onlyOwner {

32:     function setPendingAdmin(

39:     function acceptAdmin(

45:     function setPendingImplementation(

```

```solidity
File: Lynx/Common/CommonScales.sol

16:     function calculateLeveragedPosition(

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

74:     function getLZDstChainIdFromChip(address chip) external view returns (uint16) {

82:     function getLZDstChainIdFromEvmChainId(uint16 evmChainId) external view returns (uint16) {

86:     function recoverChipOutLZPayloadSigner(HolderRequestPayload_ChipOutLZ calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

105:     function setChipOutFee(address chip, uint256 fee) external onlyAdmin {

113:     function setLzEndpointId(uint16 evmId, uint16 lzEid) external onlyAdmin {

123:     function setFeesReceiver(address receiver) external onlyAdmin {

133:     function verifyIntent_chipOut(HolderRequestPayload_ChipOutLZ calldata payload, uint8 v, bytes32 r, bytes32 s) external payable {

180:     function handleFeesAndTransfers(address chip, address holder, uint256 amount) internal returns (uint256 amountAfterFeeWithoutDust, uint256 fee) {

210:     function takeChip(address chip, address holder, uint256 feeAmount) internal {

216:     function sendFee(address chip, uint256 feeAmount) internal {

226:     function sendChip(address chip, address receiver, uint256 amount) internal {

234:     function _msgSender() public view returns (address) {

240:     function hashChipOutPayload(HolderRequestPayload_ChipOutLZ memory payload) internal pure returns (bytes32) {

253:     function addressToBytes32Internal(address add) internal pure returns (bytes32) {

258:     function getLZDstChainIdFromEvmChainIdInternal(uint16 evmChainId) internal view returns (uint16) {

262:     function _removeDust(uint256 _amount, uint256 _decimalConversionRate) internal view virtual returns (uint256 amountWithoutDust) {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

69:     function recoverEpochDepositPayloadSigner(LiquidityProviderRequestPayload_EpochDeposit calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

79:     function recoverEpochRedeemPayloadSigner(LiquidityProviderRequestPayload_EpochRedeem calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

100:     function _msgSender() public view returns (address) {

106:     function verifyIntent_epochDeposit(LiquidityProviderRequestPayload_EpochDeposit calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domain, bytes32 referralCode) external payable {

126:     function verifyIntent_epochRedeem(LiquidityProviderRequestPayload_EpochRedeem calldata payload, uint8 v, bytes32 r, bytes32 s) external payable {

148:     function hashEpochDepositPayload(LiquidityProviderRequestPayload_EpochDeposit memory payload) internal pure returns (bytes32) {

160:     function hashEpochRedeemPayload(LiquidityProviderRequestPayload_EpochRedeem memory payload) internal pure returns (bytes32) {

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

29:     function domainSeparatorForAsset(address asset) public view returns (bytes32) {

40:     function storeSourceChainForAsset(address asset, uint256 chainId) virtual external onlyAdmin {

52:     function storeSourceChainForAssetInternal(address asset, uint256 chainId) internal {

74:     function getDomainSeparatorForAssetInternal(address _asset) internal view returns (bytes32) {

86:     function getDomainSeparatorAndChainForAssetInternal(address _asset) internal view returns (bytes32, uint256) {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

23:     function getNextValidNonceFor(address account, uint8 actionType) external view returns (uint256) {

35:     function validateNonceForActionAndIncrease(address account, uint8 actionType, uint256 nonce) internal {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

23:     function getNextValidNonceFor(bytes32 id, uint8 actionType) external view returns (uint256) {

35:     function validateNonceForActionAndIncrease(bytes32 id, uint8 actionType, uint256 nonce) internal {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

124:     function getTradersPortal() public view returns (ITradersPortalV1) {

128:     function getTradingFloor() public view returns (ITradingFloorV1) {

132:     function recoverOpenPositionPayloadSigner(UserRequestPayload_OpenPosition calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

142:     function recoverCloseMarketPayloadSigner(UserRequestPayload_CloseMarket calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

152:     function recoverUpdatePositionSingleFieldPayloadSigner(UserRequestPayload_UpdatePositionSingleField calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

162:     function recoverUpdatePositionDoubleFieldPayloadSigner(UserRequestPayload_UpdatePositionDoubleField calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

172:     function recoverUpdatePendingLimitPositionSigner(UserDirectPayload_UpdatePendingLimitPosition calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

182:     function recoverCancelPendingLimitPositionSigner(UserDirectPayload_CancelPendingLimitPosition calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

206:     function verifyIntent_traderRequest_openNewPosition(

253:     function verifyIntent_traderRequest_marketClosePosition(UserRequestPayload_CloseMarket calldata payload, uint8 v, bytes32 r, bytes32 s) external payable notContract  {

273:     function verifyIntent_traderRequest_updatePositionSingleField(

298:     function verifyIntent_traderRequest_updatePositionDoubleField(

329:     function verifyIntent_traderAction_updatePendingLimitPosition(

353:     function verifyIntent_traderAction_cancelPendingLimitPosition(

379:     function getDomainSeparatorAndTraderForPositionInternal(bytes32 _positionId) internal returns (bytes32 domainSeparator, address trader) {

401:     function _msgSender() public view returns (address) {

407:     function hashOpenPositionPayload(UserRequestPayload_OpenPosition memory payload) internal pure returns (bytes32) {

417:     function hashPositionRequestIdentifiers(ITradingFloorV1.PositionRequestIdentifiers memory payload) internal pure returns (bytes32) {

427:     function hashPositionRequestParams(ITradingFloorV1.PositionRequestParams memory payload) internal pure returns (bytes32) {

442:     function hashCloseMarketPayload(UserRequestPayload_CloseMarket memory payload) internal pure returns (bytes32) {

452:     function hashUpdatePositionSingleFieldPayload(UserRequestPayload_UpdatePositionSingleField memory payload) internal pure returns (bytes32) {

462:     function hashUpdatePositionDoubleFieldPayload(UserRequestPayload_UpdatePositionDoubleField memory payload) internal pure returns (bytes32) {

473:     function hashUpdatePendingLimitPositionPayload(UserDirectPayload_UpdatePendingLimitPosition memory payload) internal pure returns (bytes32) {

485:     function hashCancelPendingLimitPositionPayload(UserDirectPayload_CancelPendingLimitPosition memory payload) internal pure returns (bytes32) {

```

```solidity
File: Lynx/Lex/LexCaptain.sol

34:     function emergencyStopPair(

45:     function setPoolAccountant(

52:     function setPnlRole(

59:     function setMaxExtraWithdrawalAmountF(

66:     function setEpochsDelayDeposit(

73:     function setEpochsDelayRedeem(

80:     function setEpochDuration(

87:     function setMinDepositAmount(

94:     function toggleImmediateDepositAllowed(

100:     function reduceReserves(

109:     function setTradeIncentivizer(

116:     function setMaxGainF(

123:     function setFrm(

130:     function setMinOpenFee(

137:     function setLexPartF(

144:     function setFundingRateMax(

151:     function setLiquidationThresholdF(

158:     function setLiquidationFeeF(

165:     function setIrm(

172:     function setIrmHard(

179:     function setInterestShareFactor(

186:     function setBorrowRateMax(

193:     function setMaxTotalBorrows(

200:     function setMaxVirtualutilization(

207:     function resetTradersPairGains(

214:     function addGroup(

226:     function updateGroup(

237:     function addFee(

245:     function updateFee(

252:     function addPair(

265:     function addPairs(

278:     function updatePair(

```

```solidity
File: Lynx/Lex/LexCommon.sol

20:     function initializeLexCommon(

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

22:     function initializeLexERC20(

34:     function decimals() public pure returns (uint8) {

38:     function balanceOf(address account) public view returns (uint256) {

42:     function transfer(address recipient, uint256 amount) public returns (bool) {

47:     function allowance(

54:     function approve(address spender, uint256 amount) public returns (bool) {

59:     function transferFrom(

78:     function _transfer(

99:     function _mint(address account, uint256 amount) internal {

107:     function _burn(address account, uint256 amount) internal {

120:     function _approve(address owner, address spender, uint256 amount) internal {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

51:     function initializeLexPoolStorage(

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

43:     function calcNextEpochStartMin() public view returns (uint256) {

52:     function currentBalanceInternal() public view returns (uint256) {

59:     function underlyingBalanceForExchangeRate() public view returns (uint256) {

71:     function virtualBalanceForUtilization(

96:     function virtualBalanceForUtilization() public view returns (uint256) {

109:     function currentVirtualUtilization(

130:     function currentVirtualUtilization() public view returns (uint256) {

145:     function isUtilizationForLPsValid() public view returns (bool) {

154:     function underlyingAmountToOwnAmount(

166:     function getDepositorsCount(uint256 epoch) external view returns (uint256) {

173:     function getRedeemersCount(uint256 epoch) external view returns (uint256) {

180:     function getDepositors(

191:     function getRedeemers(

204:     function _become(LexPoolProxy proxy) public {

213:     function initialize(

228:     function setPoolAccountant(

241:     function setPnlRole(address pnl) external onlyAdmin {

248:     function setMaxExtraWithdrawalAmountF(uint256 maxExtra) external onlyAdmin {

256:     function setEpochsDelayDeposit(uint256 delay) external onlyAdmin {

261:     function setEpochsDelayRedeem(uint256 delay) external onlyAdmin {

266:     function setEpochDuration(uint256 duration) external onlyAdmin {

271:     function setMinDepositAmount(uint256 amount) external onlyAdmin {

279:     function toggleImmediateDepositAllowed() external onlyAdmin {

287:     function reduceReserves(address _to) external onlyAdmin {

307:     function immediateDeposit(

341:     function requestDeposit(

355:     function requestDepositViaIntent(

370:     function requestDepositInternal(

404:     function requestRedeem(

415:     function requestRedeemViaIntent(

427:     function requestRedeemInternal(

474:     function processDeposit(

513:     function processDepositSingle(

548:     function cancelDeposits(

574:     function processRedeems(

617:     function processRedeemSingle(

665:     function cancelRedeems(

693:     function nextEpoch(

745:     function sendAssetToTrader(

757:     function verifyUtilizationForLPs() internal view {

764:     function getArrItems(

781:     function underlyingAmountToOwnAmountInternal(

791:     function ownAmountToUnderlyingAmountInternal(

804:     function takeUnderlying(address from, uint amount) internal {

828:     function _beforeNonReentrant() private {

835:     function _afterNonReentrant() private {

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

26:     function allowEpochAdvancingAccount(address account) external onlyAdmin {

30:     function disallowEpochAdvancingAccount(address account) external onlyAdmin {

52:     function advanceEpoch(

63:     function calculateUnrealizedPricePnl(

75:     function pairsTradersPricePnl(

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

13:     function setFrm(IFundingRateModel _frm) external onlyAdmin {

18:     function setMinOpenFee(uint256 min) external onlyAdmin {

23:     function setLexPartF(uint256 partF) external onlyAdmin {

28:     function setFundingRateMax(uint256 maxValue) external onlyAdmin {

36:     function setLiquidationThresholdF(uint256 threshold) external onlyAdmin {

45:     function setLiquidationFeeF(uint256 fee) external onlyAdmin {

52:     function updateRealizedFunding(int256 valueChange) internal {

58:     function calcAccrueFundingValues(

101:     function fundingIndicesCalculation(

135:     function getTradeLiquidationPriceView(

159:     function calcProfitPrecision(

176:     function calcBorrowAmount(

194:     function getTradeInterest(

213:     function restartTradeInterest(

224:     function getTradeInterestPure(

237:     function getTradeFunding(

262:     function getTradeFundingPure(

280:     function calcClosingFee(

293:     function calcPerformanceFee(

322:     function calculateLexPartFee(uint256 fee) internal view returns (uint256) {

326:     function getTradeValueView(

355:     function getTradeLiquidationPrice(

394:     function storeTradeInitialAccFees(

412:     function calcSafeClosingFee(

427:     function calcTradeDynamicFees(

453:     function updateStateForClosingTrade(

501:     function getTradeClosingValues(

569:     function calculateFeeInternal(

579:     function updateOpenInterestInPairInternal(

627:     function updateTotalRatioOiToP(

641:     function effectiveEntryPrice(

655:     function effectiveEntryPrice(

665:     function pricePnL(

682:     function pricePnL(

694:     function calcAbsoluteSkew(

713:     function accrueFunding(

737:     function getAccFundingLong(

745:     function getAccFundingShort(

754:     function getAccFundingUpdateBlock(

763:     function getTradeInitialAccBorrowIndex(

769:     function getTradeInitialAccFundingPerOi(

778:     function pairTotalOpenInterest(

788:     function generatePositionHashId(

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

68:     function groupMaxBorrow(uint16 groupId) public view returns (uint256) {

77:     function pairMaxBorrow(uint16 pairId) public view returns (uint256) {

85:     function pairOpenFeeF(uint16 _pairId) public view returns (uint32) {

92:     function pairCloseFeeF(uint16 _pairId) public view returns (uint32) {

99:     function pairPerformanceFeeF(uint16 _pairId) public view returns (uint32) {

103:     function pairMinPerformanceFee(

112:     function pairMinOpenFee(uint16 _pairId) public view returns (uint256) {

129:     function verifyTradersPairGains(uint16 pairId) public view {

143:     function getAllSupportedPairIds() external view returns (uint16[] memory) {

150:     function getAllSupportedGroupsIds()

161:     function getAllSupportedFeeIds() external view returns (uint16[] memory) {

170:     function resetTradersPairGains(uint256 pairId) external onlyAdmin {

178:     function addGroup(

197:     function updateGroup(

209:     function addFee(

227:     function updateFee(

237:     function addPair(

247:     function addPairs(

259:     function updatePair(

269:     function updateTradersPairGains(

279:     function addPairInternal(

296:     function isPairListed(uint16 pairId) private view returns (bool) {

300:     function isGroupListed(uint16 groupId) private view returns (bool) {

304:     function isFeeListed(uint16 feeId) private view returns (bool) {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

16:     function setIrm(IInterestRateModel _irm) external onlyAdmin {

25:     function setIrmHard(IInterestRateModel _irm) external onlyAdmin {

30:     function setInterestShareFactor(uint256 factor) external onlyAdmin {

39:     function setBorrowRateMax(uint256 rate) external onlyAdmin {

44:     function setMaxTotalBorrows(uint256 maxBorrows) external onlyAdmin {

52:     function setMaxVirtualUtilization(

69:     function verifyUtilizationForTraders(

88:     function accrueInterest(

106:     function accrueInterest()

118:     function accrueInterestInternal(

154:     function calcAccrueInterestValues()

167:     function calcUtilization(

179:     function calcAccrueInterestValues(

222:     function borrow(

253:     function repay(uint16 pairId, uint256 amount) internal {

261:     function repayInterest(uint256 amount) internal {

273:     function unrealizedFunding() public view returns (int256) {

280:     function borrowsAndInterestShare()

291:     function totalReservesView() public view returns (uint256) {

295:     function virtualBalance() internal view override returns (uint256) {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

29:     function accrueFunding(

33:     function virtualBalance() internal view virtual returns (uint256);

35:     function pairTotalOpenInterest(

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

100:     function initializePoolAccountantStorage(

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

18:     function _become(PoolAccountantProxy proxy) external {

30:     function initialize(

39:     function setTradeIncentivizer(

49:     function setMaxGainF(uint256 _maxGainF) external onlyAdmin {

62:     function readAndZeroReserves()

80:     function registerOpenTrade(

148:     function registerCloseTrade(

237:     function registerUpdateTp(

301:     function adjustClosePrice(

317:     function verifyLeveragedPosition(

346:     function verifyOpenFee(

362:     function verifyPerformanceFee(

374:     function verifyMaxPercentProfit(

405:     function incentivizerInformOpen(

437:     function incentivizerInformClose(

```

```solidity
File: Lynx/Locks/SystemLocker.sol

31:     function _beforeNonReentrant() private {

38:     function _afterNonReentrant() private {

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

55:     function getAllPendingUpdateOrderIds()

65:     function _become(OrderBookProxy orderBookProxy) public {

78:     function setTradingFloor(address _tradingFloor) external onlyAdmin {

95:     function storeUpdatePositionSingleFieldOrder(

140:     function storeUpdatePositionDoubleFieldOrder(

184:     function readAndDeleteUpdatePositionOrder(

205:     function addUpdateOrderIdToGeneralList(bytes32 _orderId) internal {

215:     function removeUpdateOrderIdFromGeneralList(bytes32 _orderId) internal {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

32:     function _become(RegistryProxy registryProxy) public {

44:     function lock() external override {

51:     function freeLock() external override onlyLockOwner {

55:     function isTradersPortalAndLocker(address _address) external view returns (bool) {

59:     function isTriggersAndLocker(address _address) external view returns (bool) {

63:     function isTradersPortalOrTriggersAndLocker(address _address) external view returns (bool) {

72:     function isImplementationValidForProxy(bytes32 proxyNameHash, address _implementation) external view returns (bool) {

81:     function getLatestImplementationForProxyByHash(bytes32 proxyNameHash) external view returns (address) {

88:     function getLatestImplementationForProxyByName(string calldata proxyName) external view returns (address) {

97:     function getAllSupportedTradingFloors() external view returns (address[] memory)  {

104:     function getSettlementAssetsForTradingFloor(address _tradingFloor) external view returns (address[] memory) {

111:     function getDynamicRoleAddress(string calldata _role) external view returns (address) {

119:     function getValidSpenderTargetForChipByRole(address chip, string calldata role) external view returns (address) {

129:     function setDynamicRoleAddress(string calldata _role, address _address) external onlyAdmin {

138:     function setOrderBook(address _orderBook) external onlyAdmin {

150:     function setTradersPortal(address _tradersPortal) external onlyAdmin {

162:     function setTriggers(address _triggers) external onlyAdmin {

170:     function setTradeIntentsVerifier(address _tradeIntentsVerifier) external onlyAdmin {

178:     function setLiquidityIntentsVerifier(address _liquidityIntentsVerifier) external onlyAdmin {

186:     function setChipsIntentsVerifier(address _chipsIntentsVerifier) external onlyAdmin {

194:     function setFeesManager(address asset, address feesManager) external onlyAdmin {

203:     function setValidChipSpenderTargetByRole(address chip, string calldata role, address spender) external onlyAdmin {

210:     function setValidChipBurnHandler(address chip, address burnHandler) external onlyAdmin {

217:     function publishNewSystemVersionSingle(uint256 versionToPublish,

226:     function publishNewSystemVersionBatch(uint256 versionToPublish,

242:     function supportTradingFloor(address _tradingFloor) external onlyAdmin {

253:     function addNewSettlementAssetInTradingFloor(

303:     function getLatestImplementationForProxyByHashInternal(bytes32 proxyNameHash) internal view returns (address) {

313:     function publishNewSystemVersionSingleInternal(uint256 versionToPublish, bytes32 contractNameHash, address contractImplementation) internal {

327:     function updateLockerAddressInternal(

338:     function setValidChipSpenderByRoleInternal(address chip, string memory role, address spender) internal {

352:     function setValidChipBurnHandlerInternal(address chip, address burnHandler) internal {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

114:     function getOrderBook() public view returns (IOrderBookV1 orderBook) {

120:     function getTradeIntentsVerifier() public view returns (address tradeIntentsVerifier) {

140:     function togglePause() external onlyAdmin {

146:     function toggleDone() external onlyAdmin {

154:     function setLimitOrdersTimelock(uint value) external onlyAdmin {

161:     function setMarketOrdersTimeout(uint value) external onlyAdmin {

168:     function toggleLimitCloseOrdersRange() external onlyAdmin {

176:     function setNativeFeeForAction(TradersPortalActions action, uint256 requiredFee) external onlyAdmin {

183:     function collectNativeFees(address payable _to) external onlyFeesManager {

200:     function traderRequest_openNewPosition(

220:     function traderRequest_marketClosePosition(

236:     function traderRequest_updatePositionSingleField(

252:     function traderRequest_updatePositionDoubleField(

273:     function directAction_updatePendingPosition_limit(

323:     function directAction_cancelPendingPosition_limit(

365:     function directAction_timeout_updateTradeField(

389:     function directAction_timeout_openMarket(

426:     function directAction_timeout_closeMarket(

471:     function openNewPositionInternal(

560:     function setExistingPositionToMarketCloseInternal(

594:     function updatePositionSingleFieldInternal(

629:     function updatePositionDoubleFieldInternal(

664:     function validateTradeCanBeOpenedInternal(

729:     function _msgSender() public view returns (address) {

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

166:     function generatePositionHashId(

180:     function getPositionTriggerInfo(

205:     function getPositionPortalInfo(

222:     function getPositionRegistrationParams(

246:     function isSettlementAssetSupported(

255:     function pairTradersArray(

267:     function _become(TradingFloorProxy tradingFloorProxy) public {

278:     function supportNewSettlementAsset(

302:     function setTradeParam(

332:     function setPairPaused(uint _pairId, bool _isPaused) external onlyAdmin {

343:     function storePendingPosition(

444:     function setOpenedPositionToMarketClose(

469:     function updatePendingPosition_openLimit(

523:     function openNewPosition_market(

539:     function openNewPosition_limit(

555:     function closeExistingPosition_Market(

597:     function closeExistingPosition_Limit(

669:     function updateOpenedPosition(

775:     function cancelPendingPosition(

823:     function cancelMarketCloseForPosition(

838:     function cancelMarketCloseForPositionInternal(

868:     function collectFee(

884:     function storeIdentifiersIfNeeded(

917:     function openNewTradeInternal(

1058:     function storeCorrectLimitsForOpenedPosition(

1117:     function closeExistingTradeInternal(

1201:     function registerTradeCloseInLexInternal(

1235:     function settleCanceledOpenOrderInternal(

1274:     function settleTradeCloseInternal(

1320:     function collectFeeInternal(

1335:     function registerFeeInternal(

1352:     function takeSettlement(

1379:     function sendSettlement(

1395:     function increaseOrAddToPairTradersLists(

1418:     function decreaseOrRemoveFromPairTradersLists(

1453:     function calculateFractionInternal(

1465:     function requireValidOpenTradeParameters(

1488:     function correctTp(

1517:     function correctSl(

1548:     function currentProfitFraction(

1569:     function calculatePriceDiffFromFractionAndLeverage(uint64 originPrice, uint64 fractionDiff, uint64 leverage) internal pure returns (uint64) {

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

29:     function setMaxConfidenceForPairInternal(uint _pairId, uint32 _maxConfidenceFractionForPair) internal {

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

31:     function setSpreadFractionForPairInternal(uint _pairId, uint32 _spreadF) internal {

37:     function calculatePostSpreadPrice(uint pairId, uint64 basePrice, uint32 spreadReductionF, bool increase) internal view returns (uint64) {

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

31:     function isAllowedToTrigger(address account) public view returns (bool) {

35:     function getAllTriggerPermissionedAccounts() public view returns (address[] memory) {

41:     function allowTriggerAccountInternal(address account) internal {

47:     function disallowTriggerAccountInternal(address account) internal {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

170:     function getValidatedPrice(

202:     function togglePause() external onlyAdmin {

208:     function toggleDone() external onlyAdmin {

216:     function setPriceValidator(address _priceValidator) external onlyAdmin {

228:     function allowTriggerAccount(address account) external onlyAdmin {

232:     function disallowTriggerAccount(address account) external onlyAdmin {

236:     function setMaxConfidenceForPair(

243:     function setSpreadFractionForPair(

250:     function setMinTriggerPeriodForMarketOrders(

264:     function setMaxTriggerPeriodForMarketOrders(

278:     function setMinTriggerPeriodForLimitOrders(

288:     function setMarketOrdersTimeout(

295:     function setMarketOrderTightTimeRange(

305:     function setTriggerPriceFreshnessTimeRange(

315:     function setMarketOrderCancelFeeFraction(

325:     function setOpenPositionCancellationFeeFraction(

335:     function setMaxTriggersPerBlock(

349:     function trigger_openTrade_market(

408:     function trigger_openTrade_limit(

468:     function trigger_closeTrade_market(

520:     function trigger_closeTrade_SL(

567:     function trigger_closeTrade_TP(

620:     function trigger_closeTrade_LIQ(

658:     function trigger_update_TP(

701:     function trigger_update_SL(

744:     function trigger_update_TP_and_SL(

798:     function trigger_timeout_updatePosition(

818:     function safePositionSingleFieldUpdateInternal(

892:     function trigger_timeout_marketOpen(

921:     function trigger_timeout_marketClose(

955:     function validatePriceForPairWithSafeguardsInternal(

985:     function validatePriceForPairInternal(

1001:     function validateMarketOrderTimestampInternal(

1025:     function validateLimitOrderTimestampInternal(

1053:     function validateTriggerPriceRecentInternal(

1065:     function safelyIncreaseTriggersPerBlock() internal {

1076:     function calculateFractionInternal(

```

```solidity
File: Lynx/interfaces/IBurnHandlerV1.sol

5:     function handleBurn(

```

```solidity
File: Lynx/interfaces/IFundingRateModel.sol

7:     function getFundingRate(

```

```solidity
File: Lynx/interfaces/IGlobalLock.sol

5:     function lock() external;

6:     function freeLock() external;

```

```solidity
File: Lynx/interfaces/IInterestRateModel.sol

7:     function getBorrowRate(uint256 utilization) external view returns (uint256);

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

79:     function setPoolAccountant(

83:     function setPnlRole(address pnl) external;

85:     function setMaxExtraWithdrawalAmountF(uint256 maxExtra) external;

87:     function setEpochsDelayDeposit(uint256 delay) external;

89:     function setEpochsDelayRedeem(uint256 delay) external;

91:     function setEpochDuration(uint256 duration) external;

93:     function setMinDepositAmount(uint256 amount) external;

95:     function toggleImmediateDepositAllowed() external;

97:     function reduceReserves(address _to) external;

99:     function requestDeposit(

106:     function requestDepositViaIntent(

114:     function requestRedeem(uint256 amount, uint256 minAmountOut) external;

116:     function requestRedeemViaIntent(

122:     function processDeposit(

133:     function cancelDeposits(

138:     function processRedeems(

149:     function cancelRedeems(

154:     function nextEpoch(

158:     function currentVirtualUtilization() external view returns (uint256);

160:     function currentVirtualUtilization(

166:     function virtualBalanceForUtilization() external view returns (uint256);

168:     function virtualBalanceForUtilization(

173:     function underlyingBalanceForExchangeRate() external view returns (uint256);

175:     function sendAssetToTrader(address to, uint256 amount) external;

177:     function isUtilizationForLPsValid() external view returns (bool);

181:     function name() external view returns (string memory);

183:     function symbol() external view returns (string memory);

185:     function SELF_UNIT_SCALE() external view returns (uint);

187:     function underlyingDecimals() external view returns (uint256);

189:     function poolAccountant() external view returns (address);

191:     function underlying() external view returns (IERC20);

193:     function tradingFloor() external view returns (address);

195:     function currentEpoch() external view returns (uint256);

197:     function currentExchangeRate() external view returns (uint256);

199:     function nextEpochStartMin() external view returns (uint256);

201:     function epochDuration() external view returns (uint256);

203:     function minDepositAmount() external view returns (uint256);

205:     function epochsDelayDeposit() external view returns (uint256);

207:     function epochsDelayRedeem() external view returns (uint256);

209:     function immediateDepositAllowed() external view returns (bool);

211:     function pendingDeposits(

216:     function pendingRedeems(

221:     function pendingDepositAmount() external view returns (uint256);

223:     function pendingWithdrawalAmount() external view returns (uint256);

```

```solidity
File: Lynx/interfaces/ILzCreditControllerV1.sol

5:     function isCreditController() external view returns (bool);

7:     function informLzCreditRequest(

```

```solidity
File: Lynx/interfaces/ILzDebitControllerV1.sol

5:     function isDebitController() external view returns (bool);

7:     function informLzDebitRequest(

13:     function informLzDebitRequestWithSource(

```

```solidity
File: Lynx/interfaces/IOrderBookV1.sol

11:     function storeUpdatePositionSingleFieldOrder(

17:     function storeUpdatePositionDoubleFieldOrder(

24:     function readAndDeleteUpdatePositionOrder(

30:     function PRECISION() external pure returns (uint);

34:     function tradingFloor() external view returns (address);

38:     function pendingUpdateTradeFieldOrdersById(

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

157:     function setTradeIncentivizer(address _tradeIncentivizer) external;

159:     function setMaxGainF(uint256 _maxGainF) external;

161:     function setFrm(IFundingRateModel _frm) external;

163:     function setMinOpenFee(uint256 min) external;

165:     function setLexPartF(uint256 partF) external;

167:     function setFundingRateMax(uint256 maxValue) external;

169:     function setLiquidationThresholdF(uint256 threshold) external;

171:     function setLiquidationFeeF(uint256 fee) external;

173:     function setIrm(IInterestRateModel _irm) external;

175:     function setIrmHard(IInterestRateModel _irm) external;

177:     function setInterestShareFactor(uint256 factor) external;

179:     function setBorrowRateMax(uint256 rate) external;

181:     function setMaxTotalBorrows(uint256 maxBorrows) external;

183:     function setMaxVirtualUtilization(uint256 _maxVirtualUtilization) external;

185:     function resetTradersPairGains(uint256 pairId) external;

187:     function addGroup(Group calldata _group, string calldata _name) external;

189:     function updateGroup(Group calldata _group) external;

191:     function addFee(Fee calldata _fee, string calldata _name) external;

193:     function updateFee(Fee calldata _fee) external;

195:     function addPair(Pair calldata _pair, PairFromTo calldata fromTo) external;

197:     function addPairs(

202:     function updatePair(Pair calldata _pair) external;

204:     function readAndZeroReserves()

208:     function registerOpenTrade(

219:     function registerCloseTrade(

235:     function registerUpdateTp(

258:     function accrueInterest()

267:     function accrueInterest(

277:     function getTradeClosingValues(

293:     function getTradeLiquidationPrice(

307:     function calcTradeDynamicFees(

317:     function unrealizedFunding() external view returns (int256);

319:     function totalBorrows() external view returns (uint256);

321:     function interestShare() external view returns (uint256);

323:     function totalReservesView() external view returns (uint256);

325:     function borrowsAndInterestShare()

330:     function pairTotalOpenInterest(

334:     function pricePnL(

339:     function getAllSupportedPairIds() external view returns (uint16[] memory);

341:     function getAllSupportedGroupsIds() external view returns (uint16[] memory);

343:     function getAllSupportedFeeIds() external view returns (uint16[] memory);

347:     function lexPool() external view returns (ILexPoolV1);

349:     function maxGainF() external view returns (uint256);

351:     function interestShareFactor() external view returns (uint256);

353:     function frm() external view returns (IFundingRateModel);

355:     function irm() external view returns (IInterestRateModel);

357:     function pairs(uint16 pairId) external view returns (Pair memory);

359:     function groups(uint16 groupId) external view returns (Group memory);

361:     function fees(uint16 feeId) external view returns (Fee memory);

363:     function openInterestInPair(

367:     function minOpenFee() external view returns (uint256);

369:     function liquidationThresholdF() external view returns (uint256);

371:     function liquidationFeeF() external view returns (uint256);

373:     function lexPartF() external view returns (uint256);

```

```solidity
File: Lynx/interfaces/IPoolBurnControllerV1.sol

9:     function isPoolBurnController() external view returns (bool);

18:     function informBurnRequest(

```

```solidity
File: Lynx/interfaces/IPoolMintControllerV1.sol

9:     function isPoolMintController() external view returns (bool);

18:     function informMintRequest(

```

```solidity
File: Lynx/interfaces/IPriceValidatorV1.sol

13:     function isPriceValidator() external view returns (bool);

15:     function getUpdateFee(

19:     function validatePrice(

```

```solidity
File: Lynx/interfaces/IRateModelV1.sol

9:     function getRate(uint256 x) external view returns (uint256);

```

```solidity
File: Lynx/interfaces/IRegistryV1.sol

11:     function isTradersPortalAndLocker(address _address) external view returns (bool);

12:     function isTriggersAndLocker(address _address) external view returns (bool);

13:     function isTradersPortalOrTriggersAndLocker(address _address) external view returns (bool);

20:     function feesManagers(address asset) external view returns (address);

21:     function orderBook() external view returns (address);

22:     function tradersPortal() external view returns (address);

23:     function triggers() external view returns (address);

24:     function tradeIntentsVerifier() external view returns (address);

25:     function liquidityIntentsVerifier() external view returns (address);

26:     function chipsIntentsVerifier() external view returns (address);

32:     function getValidSpenderTargetForChipByRole(address chip, string calldata role) external view returns (address);

37:     function validBurnHandlerForChip(address chip) external view returns (address);

```

```solidity
File: Lynx/interfaces/ITradeIncentivizerV1.sol

5:     function informTradeOpen(

15:     function informTradeClose(

```

```solidity
File: Lynx/interfaces/ITradersPortalV1.sol

8:     function traderRequest_openNewPosition(

18:     function traderRequest_marketClosePosition(

24:     function traderRequest_updatePositionSingleField(

30:     function traderRequest_updatePositionDoubleField(

37:     function directAction_updatePendingPosition_limit(

45:     function directAction_cancelPendingPosition_limit(

54:     function tradingFloor() external view returns (address);

```

```solidity
File: Lynx/interfaces/ITradingFloorV1.sol

10:     function supportNewSettlementAsset(

16:     function getPositionTriggerInfo(

29:     function getPositionPortalInfo(

40:     function storePendingPosition(

47:     function setOpenedPositionToMarketClose(

53:     function cancelPendingPosition(

59:     function cancelMarketCloseForPosition(

65:     function updatePendingPosition_openLimit(

73:     function openNewPosition_market(

79:     function openNewPosition_limit(

85:     function closeExistingPosition_Market(

91:     function closeExistingPosition_Limit(

99:     function updateOpenedPosition(

107:     function collectFee(address _asset, FeeType _feeType, address _to) external;

111:     function PRECISION() external pure returns (uint);

115:     function pairTradersArray(

120:     function generatePositionHashId(

129:     function lexPoolForAsset(address asset) external view returns (ILexPoolV1);

131:     function poolAccountantForAsset(

135:     function registry() external view returns (address);

139:     function positionsById(bytes32 id) external view returns (Position memory);

141:     function positionIdentifiersById(

145:     function positionLimitsInfoById(

149:     function triggerPricesById(

153:     function pairTradersInfo(

159:     function spreadReductionsP(uint) external view returns (uint);

161:     function maxSlF() external view returns (uint);

163:     function maxTradesPerPair() external view returns (uint);

165:     function maxSanityProfitF() external view returns (uint);

```

```solidity
File: Lynx/interfaces/IWrappedNative.sol

5:     function deposit() external payable returns (uint256);

6:     function withdraw(uint256 amount) external returns (uint256);

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

42:     function wrapNativeAndMintEngineChip() external payable {

53:     function handleBurn(

68:     function wrapNativeInternal(uint256 amount) internal returns (uint256 wrappedNativeAmount) {

77:     function unwrapNativeInternal(uint256 amount) internal returns (uint256 unwrappedNativeAmount) {

86:     function setAllowanceForChipInternal(uint256 amount) internal {

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

65:     function chainId() external view returns (uint256 chainId);

67:     function getPrice(

71:     function getPriceUnsafe(

75:     function getUpdateFee(

79:     function updatePriceFeeds(bytes[] calldata updateData) external payable;

81:     function parsePriceFeedUpdates(

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

29:     function isPriceValidator() external pure returns (bool) {

35:     function setPriceFeedIdForPair(

43:     function setMaxPublicationPeriodInPast(

53:     function getPriceForPair(

59:     function getPrice(

65:     function getPriceUnsafe(

71:     function getUpdateFee(

79:     function updatePrice(

90:     function validatePrice(

116:     function generateValidatedDataFromPyth(

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

41:     function getRate(uint256 x) external view returns (uint256) {

45:     function setRateParamsInternal(uint256 _baseRate, uint256 _multiplier, uint256 _kink, uint256 _postKinkMultiplier) internal {

62:     function getRateInternal(uint256 x) internal view returns (uint256) {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

15:     function setRateParams(uint256 _baseRate, uint256 _multiplier, uint256 _kink, uint256 _postKinkMultiplier) external onlyOwner {

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

15:     function setDefaultSteadyRate(uint _newDefaultRate) external onlyOwner {

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

16:     function getFundingRate(

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

13:     function getFundingRate(

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

15:     function getBorrowRate(

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

12:     function getBorrowRate(

```

</details> 
 


 ### <a name="NC-29"></a>[NC-29]
 ### NatSpec: function declarations should have @Notice tags
@notice is used to explain to end users what the function does, and the compiler interprets /// or /** comments as this tag if one wasn't explicitly provided.  

*Instances (664)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

33:     function _setPendingImplementation(address newPendingImplementation) public {

49:     function _acceptImplementation() public returns (uint) {

73:     function _setPendingAdmin(address newPendingAdmin) public {

91:     function _acceptAdmin() public {

132:     function approvePendingImplementationInternal(

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

19:     function approvePendingImplementationInternal(address _implementation) internal view override returns(bool) {

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

27:     function _setPendingAdmin(address newPendingAdmin) public {

45:     function _acceptAdmin() public {

```

```solidity
File: AdministrationContracts/IContractRegistryBase.sol

5:     function isImplementationValidForProxy(bytes32 proxyNameHash, address _implementation) external view returns (bool);

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

21:     function hashDomain(EIP712Domain memory eip712Domain) internal pure returns (bytes32) {

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

32:     function generateAndStoreDomainSeparatorIfMissingInternal(uint256 chainId) internal returns (bytes32) {

```

```solidity
File: Lynx/Chips/BaseChip.sol

32:     function getAutoApprovedSpenderAddressByRole(string calldata role) public view returns (address) {

48:     function setAutoApprovedSpenderForRoleInternal(string calldata role, address spender) internal {

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

73:     function setAutoApprovedSpenderForRole(string calldata role, address spender) external onlyAdmin {

81:     function setBurnHandler(IBurnHandlerV1 _handler) external onlyAdmin {

96:     function setIsMintingPaused(bool _value) external onlyAdmin {

107:     function setMintController(IPoolMintControllerV1 _mintController) external onlyAdmin {

124:     function setBurnController(IPoolBurnControllerV1 _burnController) external onlyAdmin {

143:     function sweepTokens(IERC20 _token, uint256 _amount) external onlyAdmin {

156:     function sweepNative(uint256 _amount) external onlyAdmin {

167:     function mintChip(address _toAddress, uint256 _amount) external nonReentrant {

192:     function burnChip(

205:     function burnChipAndCall(

228:     function safeBurnInternal(address burner, address receiver, uint256 chipAmount) internal returns (uint256 underlyingAmount) {

260:     function allowance(address owner, address spender) public view virtual override returns (uint256) {

274:     function takeUnderlying(address from, uint amount) internal {

287:     function underlyingAmountToOwnAmountInternal(

296:     function ownAmountToUnderlyingAmountInternal(

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

55:     function setAutoApprovedSpenderForRole(string calldata role, address spender) external onlyOwner {

63:     function setIsSendPaused(bool _isPaused) external onlyOwner {

77:     function setCreditController(ILzCreditControllerV1 _creditController) external onlyOwner {

94:     function setDebitController(ILzDebitControllerV1 _debitController) external onlyOwner {

114:     function sweepTokens(ERC20 _token, uint256 _amount) external onlyOwner {

131:     function _credit(

156:     function _debit(

177:     function allowance(address owner, address spender) public view virtual override returns (uint256) {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

52:     function setIsSendPaused(bool _isPaused) external onlyOwner {

66:     function setCreditController(ILzCreditControllerV1 _creditController) external onlyOwner {

83:     function setDebitController(ILzDebitControllerV1 _debitController) external onlyOwner {

100:     function renounceUnderlyingRecovery() external onlyOwner {

111:     function recoverUnderlying(uint256 _amount) external onlyOwner {

125:     function sweepTokens(IERC20 _token, uint256 _amount) external onlyOwner {

146:     function _credit(

179:     function _debit(

```

```solidity
File: Lynx/Common/CaptainBase.sol

15:     function _requireRole(uint8 role) internal view {

24:     function grantRole(uint8 role, address account) external onlyOwner {

28:     function revokeRole(uint8 role, address account) external onlyOwner {

32:     function setPendingAdmin(

39:     function acceptAdmin(

45:     function setPendingImplementation(

```

```solidity
File: Lynx/Common/CommonScales.sol

16:     function calculateLeveragedPosition(

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

74:     function getLZDstChainIdFromChip(address chip) external view returns (uint16) {

82:     function getLZDstChainIdFromEvmChainId(uint16 evmChainId) external view returns (uint16) {

86:     function recoverChipOutLZPayloadSigner(HolderRequestPayload_ChipOutLZ calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

105:     function setChipOutFee(address chip, uint256 fee) external onlyAdmin {

113:     function setLzEndpointId(uint16 evmId, uint16 lzEid) external onlyAdmin {

123:     function setFeesReceiver(address receiver) external onlyAdmin {

133:     function verifyIntent_chipOut(HolderRequestPayload_ChipOutLZ calldata payload, uint8 v, bytes32 r, bytes32 s) external payable {

180:     function handleFeesAndTransfers(address chip, address holder, uint256 amount) internal returns (uint256 amountAfterFeeWithoutDust, uint256 fee) {

210:     function takeChip(address chip, address holder, uint256 feeAmount) internal {

216:     function sendFee(address chip, uint256 feeAmount) internal {

226:     function sendChip(address chip, address receiver, uint256 amount) internal {

234:     function _msgSender() public view returns (address) {

240:     function hashChipOutPayload(HolderRequestPayload_ChipOutLZ memory payload) internal pure returns (bytes32) {

253:     function addressToBytes32Internal(address add) internal pure returns (bytes32) {

258:     function getLZDstChainIdFromEvmChainIdInternal(uint16 evmChainId) internal view returns (uint16) {

262:     function _removeDust(uint256 _amount, uint256 _decimalConversionRate) internal view virtual returns (uint256 amountWithoutDust) {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

69:     function recoverEpochDepositPayloadSigner(LiquidityProviderRequestPayload_EpochDeposit calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

79:     function recoverEpochRedeemPayloadSigner(LiquidityProviderRequestPayload_EpochRedeem calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

100:     function _msgSender() public view returns (address) {

106:     function verifyIntent_epochDeposit(LiquidityProviderRequestPayload_EpochDeposit calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domain, bytes32 referralCode) external payable {

126:     function verifyIntent_epochRedeem(LiquidityProviderRequestPayload_EpochRedeem calldata payload, uint8 v, bytes32 r, bytes32 s) external payable {

148:     function hashEpochDepositPayload(LiquidityProviderRequestPayload_EpochDeposit memory payload) internal pure returns (bytes32) {

160:     function hashEpochRedeemPayload(LiquidityProviderRequestPayload_EpochRedeem memory payload) internal pure returns (bytes32) {

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

29:     function domainSeparatorForAsset(address asset) public view returns (bytes32) {

40:     function storeSourceChainForAsset(address asset, uint256 chainId) virtual external onlyAdmin {

52:     function storeSourceChainForAssetInternal(address asset, uint256 chainId) internal {

74:     function getDomainSeparatorForAssetInternal(address _asset) internal view returns (bytes32) {

86:     function getDomainSeparatorAndChainForAssetInternal(address _asset) internal view returns (bytes32, uint256) {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

23:     function getNextValidNonceFor(address account, uint8 actionType) external view returns (uint256) {

35:     function validateNonceForActionAndIncrease(address account, uint8 actionType, uint256 nonce) internal {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

23:     function getNextValidNonceFor(bytes32 id, uint8 actionType) external view returns (uint256) {

35:     function validateNonceForActionAndIncrease(bytes32 id, uint8 actionType, uint256 nonce) internal {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

124:     function getTradersPortal() public view returns (ITradersPortalV1) {

128:     function getTradingFloor() public view returns (ITradingFloorV1) {

132:     function recoverOpenPositionPayloadSigner(UserRequestPayload_OpenPosition calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

142:     function recoverCloseMarketPayloadSigner(UserRequestPayload_CloseMarket calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

152:     function recoverUpdatePositionSingleFieldPayloadSigner(UserRequestPayload_UpdatePositionSingleField calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

162:     function recoverUpdatePositionDoubleFieldPayloadSigner(UserRequestPayload_UpdatePositionDoubleField calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

172:     function recoverUpdatePendingLimitPositionSigner(UserDirectPayload_UpdatePendingLimitPosition calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

182:     function recoverCancelPendingLimitPositionSigner(UserDirectPayload_CancelPendingLimitPosition calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

206:     function verifyIntent_traderRequest_openNewPosition(

253:     function verifyIntent_traderRequest_marketClosePosition(UserRequestPayload_CloseMarket calldata payload, uint8 v, bytes32 r, bytes32 s) external payable notContract  {

273:     function verifyIntent_traderRequest_updatePositionSingleField(

298:     function verifyIntent_traderRequest_updatePositionDoubleField(

329:     function verifyIntent_traderAction_updatePendingLimitPosition(

353:     function verifyIntent_traderAction_cancelPendingLimitPosition(

379:     function getDomainSeparatorAndTraderForPositionInternal(bytes32 _positionId) internal returns (bytes32 domainSeparator, address trader) {

401:     function _msgSender() public view returns (address) {

407:     function hashOpenPositionPayload(UserRequestPayload_OpenPosition memory payload) internal pure returns (bytes32) {

417:     function hashPositionRequestIdentifiers(ITradingFloorV1.PositionRequestIdentifiers memory payload) internal pure returns (bytes32) {

427:     function hashPositionRequestParams(ITradingFloorV1.PositionRequestParams memory payload) internal pure returns (bytes32) {

442:     function hashCloseMarketPayload(UserRequestPayload_CloseMarket memory payload) internal pure returns (bytes32) {

452:     function hashUpdatePositionSingleFieldPayload(UserRequestPayload_UpdatePositionSingleField memory payload) internal pure returns (bytes32) {

462:     function hashUpdatePositionDoubleFieldPayload(UserRequestPayload_UpdatePositionDoubleField memory payload) internal pure returns (bytes32) {

473:     function hashUpdatePendingLimitPositionPayload(UserDirectPayload_UpdatePendingLimitPosition memory payload) internal pure returns (bytes32) {

485:     function hashCancelPendingLimitPositionPayload(UserDirectPayload_CancelPendingLimitPosition memory payload) internal pure returns (bytes32) {

```

```solidity
File: Lynx/Lex/LexCaptain.sol

34:     function emergencyStopPair(

45:     function setPoolAccountant(

52:     function setPnlRole(

59:     function setMaxExtraWithdrawalAmountF(

66:     function setEpochsDelayDeposit(

73:     function setEpochsDelayRedeem(

80:     function setEpochDuration(

87:     function setMinDepositAmount(

94:     function toggleImmediateDepositAllowed(

100:     function reduceReserves(

109:     function setTradeIncentivizer(

116:     function setMaxGainF(

123:     function setFrm(

130:     function setMinOpenFee(

137:     function setLexPartF(

144:     function setFundingRateMax(

151:     function setLiquidationThresholdF(

158:     function setLiquidationFeeF(

165:     function setIrm(

172:     function setIrmHard(

179:     function setInterestShareFactor(

186:     function setBorrowRateMax(

193:     function setMaxTotalBorrows(

200:     function setMaxVirtualutilization(

207:     function resetTradersPairGains(

214:     function addGroup(

226:     function updateGroup(

237:     function addFee(

245:     function updateFee(

252:     function addPair(

265:     function addPairs(

278:     function updatePair(

```

```solidity
File: Lynx/Lex/LexCommon.sol

20:     function initializeLexCommon(

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

22:     function initializeLexERC20(

34:     function decimals() public pure returns (uint8) {

38:     function balanceOf(address account) public view returns (uint256) {

42:     function transfer(address recipient, uint256 amount) public returns (bool) {

47:     function allowance(

54:     function approve(address spender, uint256 amount) public returns (bool) {

59:     function transferFrom(

78:     function _transfer(

99:     function _mint(address account, uint256 amount) internal {

107:     function _burn(address account, uint256 amount) internal {

120:     function _approve(address owner, address spender, uint256 amount) internal {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

51:     function initializeLexPoolStorage(

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

43:     function calcNextEpochStartMin() public view returns (uint256) {

52:     function currentBalanceInternal() public view returns (uint256) {

59:     function underlyingBalanceForExchangeRate() public view returns (uint256) {

71:     function virtualBalanceForUtilization(

96:     function virtualBalanceForUtilization() public view returns (uint256) {

109:     function currentVirtualUtilization(

130:     function currentVirtualUtilization() public view returns (uint256) {

145:     function isUtilizationForLPsValid() public view returns (bool) {

154:     function underlyingAmountToOwnAmount(

166:     function getDepositorsCount(uint256 epoch) external view returns (uint256) {

173:     function getRedeemersCount(uint256 epoch) external view returns (uint256) {

180:     function getDepositors(

191:     function getRedeemers(

204:     function _become(LexPoolProxy proxy) public {

213:     function initialize(

228:     function setPoolAccountant(

241:     function setPnlRole(address pnl) external onlyAdmin {

248:     function setMaxExtraWithdrawalAmountF(uint256 maxExtra) external onlyAdmin {

256:     function setEpochsDelayDeposit(uint256 delay) external onlyAdmin {

261:     function setEpochsDelayRedeem(uint256 delay) external onlyAdmin {

266:     function setEpochDuration(uint256 duration) external onlyAdmin {

271:     function setMinDepositAmount(uint256 amount) external onlyAdmin {

279:     function toggleImmediateDepositAllowed() external onlyAdmin {

287:     function reduceReserves(address _to) external onlyAdmin {

307:     function immediateDeposit(

341:     function requestDeposit(

355:     function requestDepositViaIntent(

370:     function requestDepositInternal(

404:     function requestRedeem(

415:     function requestRedeemViaIntent(

427:     function requestRedeemInternal(

474:     function processDeposit(

513:     function processDepositSingle(

548:     function cancelDeposits(

574:     function processRedeems(

617:     function processRedeemSingle(

665:     function cancelRedeems(

693:     function nextEpoch(

745:     function sendAssetToTrader(

757:     function verifyUtilizationForLPs() internal view {

764:     function getArrItems(

781:     function underlyingAmountToOwnAmountInternal(

791:     function ownAmountToUnderlyingAmountInternal(

804:     function takeUnderlying(address from, uint amount) internal {

828:     function _beforeNonReentrant() private {

835:     function _afterNonReentrant() private {

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

26:     function allowEpochAdvancingAccount(address account) external onlyAdmin {

30:     function disallowEpochAdvancingAccount(address account) external onlyAdmin {

52:     function advanceEpoch(

63:     function calculateUnrealizedPricePnl(

75:     function pairsTradersPricePnl(

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

13:     function setFrm(IFundingRateModel _frm) external onlyAdmin {

18:     function setMinOpenFee(uint256 min) external onlyAdmin {

23:     function setLexPartF(uint256 partF) external onlyAdmin {

28:     function setFundingRateMax(uint256 maxValue) external onlyAdmin {

36:     function setLiquidationThresholdF(uint256 threshold) external onlyAdmin {

45:     function setLiquidationFeeF(uint256 fee) external onlyAdmin {

52:     function updateRealizedFunding(int256 valueChange) internal {

58:     function calcAccrueFundingValues(

101:     function fundingIndicesCalculation(

135:     function getTradeLiquidationPriceView(

159:     function calcProfitPrecision(

176:     function calcBorrowAmount(

194:     function getTradeInterest(

213:     function restartTradeInterest(

224:     function getTradeInterestPure(

237:     function getTradeFunding(

262:     function getTradeFundingPure(

280:     function calcClosingFee(

293:     function calcPerformanceFee(

322:     function calculateLexPartFee(uint256 fee) internal view returns (uint256) {

326:     function getTradeValueView(

355:     function getTradeLiquidationPrice(

394:     function storeTradeInitialAccFees(

412:     function calcSafeClosingFee(

427:     function calcTradeDynamicFees(

453:     function updateStateForClosingTrade(

501:     function getTradeClosingValues(

569:     function calculateFeeInternal(

579:     function updateOpenInterestInPairInternal(

627:     function updateTotalRatioOiToP(

641:     function effectiveEntryPrice(

655:     function effectiveEntryPrice(

665:     function pricePnL(

682:     function pricePnL(

694:     function calcAbsoluteSkew(

713:     function accrueFunding(

737:     function getAccFundingLong(

745:     function getAccFundingShort(

754:     function getAccFundingUpdateBlock(

763:     function getTradeInitialAccBorrowIndex(

769:     function getTradeInitialAccFundingPerOi(

778:     function pairTotalOpenInterest(

788:     function generatePositionHashId(

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

68:     function groupMaxBorrow(uint16 groupId) public view returns (uint256) {

77:     function pairMaxBorrow(uint16 pairId) public view returns (uint256) {

85:     function pairOpenFeeF(uint16 _pairId) public view returns (uint32) {

92:     function pairCloseFeeF(uint16 _pairId) public view returns (uint32) {

99:     function pairPerformanceFeeF(uint16 _pairId) public view returns (uint32) {

103:     function pairMinPerformanceFee(

112:     function pairMinOpenFee(uint16 _pairId) public view returns (uint256) {

129:     function verifyTradersPairGains(uint16 pairId) public view {

143:     function getAllSupportedPairIds() external view returns (uint16[] memory) {

150:     function getAllSupportedGroupsIds()

161:     function getAllSupportedFeeIds() external view returns (uint16[] memory) {

170:     function resetTradersPairGains(uint256 pairId) external onlyAdmin {

178:     function addGroup(

197:     function updateGroup(

209:     function addFee(

227:     function updateFee(

237:     function addPair(

247:     function addPairs(

259:     function updatePair(

269:     function updateTradersPairGains(

279:     function addPairInternal(

296:     function isPairListed(uint16 pairId) private view returns (bool) {

300:     function isGroupListed(uint16 groupId) private view returns (bool) {

304:     function isFeeListed(uint16 feeId) private view returns (bool) {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

16:     function setIrm(IInterestRateModel _irm) external onlyAdmin {

25:     function setIrmHard(IInterestRateModel _irm) external onlyAdmin {

30:     function setInterestShareFactor(uint256 factor) external onlyAdmin {

39:     function setBorrowRateMax(uint256 rate) external onlyAdmin {

44:     function setMaxTotalBorrows(uint256 maxBorrows) external onlyAdmin {

52:     function setMaxVirtualUtilization(

69:     function verifyUtilizationForTraders(

88:     function accrueInterest(

106:     function accrueInterest()

118:     function accrueInterestInternal(

154:     function calcAccrueInterestValues()

167:     function calcUtilization(

179:     function calcAccrueInterestValues(

222:     function borrow(

253:     function repay(uint16 pairId, uint256 amount) internal {

261:     function repayInterest(uint256 amount) internal {

273:     function unrealizedFunding() public view returns (int256) {

280:     function borrowsAndInterestShare()

291:     function totalReservesView() public view returns (uint256) {

295:     function virtualBalance() internal view override returns (uint256) {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

29:     function accrueFunding(

33:     function virtualBalance() internal view virtual returns (uint256);

35:     function pairTotalOpenInterest(

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

100:     function initializePoolAccountantStorage(

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

18:     function _become(PoolAccountantProxy proxy) external {

30:     function initialize(

39:     function setTradeIncentivizer(

49:     function setMaxGainF(uint256 _maxGainF) external onlyAdmin {

62:     function readAndZeroReserves()

80:     function registerOpenTrade(

148:     function registerCloseTrade(

237:     function registerUpdateTp(

301:     function adjustClosePrice(

317:     function verifyLeveragedPosition(

346:     function verifyOpenFee(

362:     function verifyPerformanceFee(

374:     function verifyMaxPercentProfit(

405:     function incentivizerInformOpen(

437:     function incentivizerInformClose(

```

```solidity
File: Lynx/Locks/SystemLocker.sol

31:     function _beforeNonReentrant() private {

38:     function _afterNonReentrant() private {

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

55:     function getAllPendingUpdateOrderIds()

65:     function _become(OrderBookProxy orderBookProxy) public {

78:     function setTradingFloor(address _tradingFloor) external onlyAdmin {

95:     function storeUpdatePositionSingleFieldOrder(

140:     function storeUpdatePositionDoubleFieldOrder(

184:     function readAndDeleteUpdatePositionOrder(

205:     function addUpdateOrderIdToGeneralList(bytes32 _orderId) internal {

215:     function removeUpdateOrderIdFromGeneralList(bytes32 _orderId) internal {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

32:     function _become(RegistryProxy registryProxy) public {

44:     function lock() external override {

51:     function freeLock() external override onlyLockOwner {

55:     function isTradersPortalAndLocker(address _address) external view returns (bool) {

59:     function isTriggersAndLocker(address _address) external view returns (bool) {

63:     function isTradersPortalOrTriggersAndLocker(address _address) external view returns (bool) {

72:     function isImplementationValidForProxy(bytes32 proxyNameHash, address _implementation) external view returns (bool) {

81:     function getLatestImplementationForProxyByHash(bytes32 proxyNameHash) external view returns (address) {

88:     function getLatestImplementationForProxyByName(string calldata proxyName) external view returns (address) {

97:     function getAllSupportedTradingFloors() external view returns (address[] memory)  {

104:     function getSettlementAssetsForTradingFloor(address _tradingFloor) external view returns (address[] memory) {

111:     function getDynamicRoleAddress(string calldata _role) external view returns (address) {

119:     function getValidSpenderTargetForChipByRole(address chip, string calldata role) external view returns (address) {

129:     function setDynamicRoleAddress(string calldata _role, address _address) external onlyAdmin {

138:     function setOrderBook(address _orderBook) external onlyAdmin {

150:     function setTradersPortal(address _tradersPortal) external onlyAdmin {

162:     function setTriggers(address _triggers) external onlyAdmin {

170:     function setTradeIntentsVerifier(address _tradeIntentsVerifier) external onlyAdmin {

178:     function setLiquidityIntentsVerifier(address _liquidityIntentsVerifier) external onlyAdmin {

186:     function setChipsIntentsVerifier(address _chipsIntentsVerifier) external onlyAdmin {

194:     function setFeesManager(address asset, address feesManager) external onlyAdmin {

203:     function setValidChipSpenderTargetByRole(address chip, string calldata role, address spender) external onlyAdmin {

210:     function setValidChipBurnHandler(address chip, address burnHandler) external onlyAdmin {

217:     function publishNewSystemVersionSingle(uint256 versionToPublish,

226:     function publishNewSystemVersionBatch(uint256 versionToPublish,

242:     function supportTradingFloor(address _tradingFloor) external onlyAdmin {

253:     function addNewSettlementAssetInTradingFloor(

303:     function getLatestImplementationForProxyByHashInternal(bytes32 proxyNameHash) internal view returns (address) {

313:     function publishNewSystemVersionSingleInternal(uint256 versionToPublish, bytes32 contractNameHash, address contractImplementation) internal {

327:     function updateLockerAddressInternal(

338:     function setValidChipSpenderByRoleInternal(address chip, string memory role, address spender) internal {

352:     function setValidChipBurnHandlerInternal(address chip, address burnHandler) internal {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

114:     function getOrderBook() public view returns (IOrderBookV1 orderBook) {

120:     function getTradeIntentsVerifier() public view returns (address tradeIntentsVerifier) {

140:     function togglePause() external onlyAdmin {

146:     function toggleDone() external onlyAdmin {

154:     function setLimitOrdersTimelock(uint value) external onlyAdmin {

161:     function setMarketOrdersTimeout(uint value) external onlyAdmin {

168:     function toggleLimitCloseOrdersRange() external onlyAdmin {

176:     function setNativeFeeForAction(TradersPortalActions action, uint256 requiredFee) external onlyAdmin {

183:     function collectNativeFees(address payable _to) external onlyFeesManager {

200:     function traderRequest_openNewPosition(

220:     function traderRequest_marketClosePosition(

236:     function traderRequest_updatePositionSingleField(

252:     function traderRequest_updatePositionDoubleField(

273:     function directAction_updatePendingPosition_limit(

323:     function directAction_cancelPendingPosition_limit(

365:     function directAction_timeout_updateTradeField(

389:     function directAction_timeout_openMarket(

426:     function directAction_timeout_closeMarket(

471:     function openNewPositionInternal(

560:     function setExistingPositionToMarketCloseInternal(

594:     function updatePositionSingleFieldInternal(

629:     function updatePositionDoubleFieldInternal(

664:     function validateTradeCanBeOpenedInternal(

729:     function _msgSender() public view returns (address) {

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

166:     function generatePositionHashId(

180:     function getPositionTriggerInfo(

205:     function getPositionPortalInfo(

222:     function getPositionRegistrationParams(

246:     function isSettlementAssetSupported(

255:     function pairTradersArray(

267:     function _become(TradingFloorProxy tradingFloorProxy) public {

278:     function supportNewSettlementAsset(

302:     function setTradeParam(

332:     function setPairPaused(uint _pairId, bool _isPaused) external onlyAdmin {

343:     function storePendingPosition(

444:     function setOpenedPositionToMarketClose(

469:     function updatePendingPosition_openLimit(

523:     function openNewPosition_market(

539:     function openNewPosition_limit(

555:     function closeExistingPosition_Market(

597:     function closeExistingPosition_Limit(

669:     function updateOpenedPosition(

775:     function cancelPendingPosition(

823:     function cancelMarketCloseForPosition(

838:     function cancelMarketCloseForPositionInternal(

868:     function collectFee(

884:     function storeIdentifiersIfNeeded(

917:     function openNewTradeInternal(

1058:     function storeCorrectLimitsForOpenedPosition(

1117:     function closeExistingTradeInternal(

1201:     function registerTradeCloseInLexInternal(

1235:     function settleCanceledOpenOrderInternal(

1274:     function settleTradeCloseInternal(

1320:     function collectFeeInternal(

1335:     function registerFeeInternal(

1352:     function takeSettlement(

1379:     function sendSettlement(

1395:     function increaseOrAddToPairTradersLists(

1418:     function decreaseOrRemoveFromPairTradersLists(

1453:     function calculateFractionInternal(

1465:     function requireValidOpenTradeParameters(

1488:     function correctTp(

1517:     function correctSl(

1548:     function currentProfitFraction(

1569:     function calculatePriceDiffFromFractionAndLeverage(uint64 originPrice, uint64 fractionDiff, uint64 leverage) internal pure returns (uint64) {

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

29:     function setMaxConfidenceForPairInternal(uint _pairId, uint32 _maxConfidenceFractionForPair) internal {

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

31:     function setSpreadFractionForPairInternal(uint _pairId, uint32 _spreadF) internal {

37:     function calculatePostSpreadPrice(uint pairId, uint64 basePrice, uint32 spreadReductionF, bool increase) internal view returns (uint64) {

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

31:     function isAllowedToTrigger(address account) public view returns (bool) {

35:     function getAllTriggerPermissionedAccounts() public view returns (address[] memory) {

41:     function allowTriggerAccountInternal(address account) internal {

47:     function disallowTriggerAccountInternal(address account) internal {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

170:     function getValidatedPrice(

202:     function togglePause() external onlyAdmin {

208:     function toggleDone() external onlyAdmin {

216:     function setPriceValidator(address _priceValidator) external onlyAdmin {

228:     function allowTriggerAccount(address account) external onlyAdmin {

232:     function disallowTriggerAccount(address account) external onlyAdmin {

236:     function setMaxConfidenceForPair(

243:     function setSpreadFractionForPair(

250:     function setMinTriggerPeriodForMarketOrders(

264:     function setMaxTriggerPeriodForMarketOrders(

278:     function setMinTriggerPeriodForLimitOrders(

288:     function setMarketOrdersTimeout(

295:     function setMarketOrderTightTimeRange(

305:     function setTriggerPriceFreshnessTimeRange(

315:     function setMarketOrderCancelFeeFraction(

325:     function setOpenPositionCancellationFeeFraction(

335:     function setMaxTriggersPerBlock(

349:     function trigger_openTrade_market(

408:     function trigger_openTrade_limit(

468:     function trigger_closeTrade_market(

520:     function trigger_closeTrade_SL(

567:     function trigger_closeTrade_TP(

620:     function trigger_closeTrade_LIQ(

658:     function trigger_update_TP(

701:     function trigger_update_SL(

744:     function trigger_update_TP_and_SL(

798:     function trigger_timeout_updatePosition(

818:     function safePositionSingleFieldUpdateInternal(

892:     function trigger_timeout_marketOpen(

921:     function trigger_timeout_marketClose(

955:     function validatePriceForPairWithSafeguardsInternal(

985:     function validatePriceForPairInternal(

1001:     function validateMarketOrderTimestampInternal(

1025:     function validateLimitOrderTimestampInternal(

1053:     function validateTriggerPriceRecentInternal(

1065:     function safelyIncreaseTriggersPerBlock() internal {

1076:     function calculateFractionInternal(

```

```solidity
File: Lynx/interfaces/IBurnHandlerV1.sol

5:     function handleBurn(

```

```solidity
File: Lynx/interfaces/IFundingRateModel.sol

7:     function getFundingRate(

```

```solidity
File: Lynx/interfaces/IGlobalLock.sol

5:     function lock() external;

6:     function freeLock() external;

```

```solidity
File: Lynx/interfaces/IInterestRateModel.sol

7:     function getBorrowRate(uint256 utilization) external view returns (uint256);

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

79:     function setPoolAccountant(

83:     function setPnlRole(address pnl) external;

85:     function setMaxExtraWithdrawalAmountF(uint256 maxExtra) external;

87:     function setEpochsDelayDeposit(uint256 delay) external;

89:     function setEpochsDelayRedeem(uint256 delay) external;

91:     function setEpochDuration(uint256 duration) external;

93:     function setMinDepositAmount(uint256 amount) external;

95:     function toggleImmediateDepositAllowed() external;

97:     function reduceReserves(address _to) external;

99:     function requestDeposit(

106:     function requestDepositViaIntent(

114:     function requestRedeem(uint256 amount, uint256 minAmountOut) external;

116:     function requestRedeemViaIntent(

122:     function processDeposit(

133:     function cancelDeposits(

138:     function processRedeems(

149:     function cancelRedeems(

154:     function nextEpoch(

158:     function currentVirtualUtilization() external view returns (uint256);

160:     function currentVirtualUtilization(

166:     function virtualBalanceForUtilization() external view returns (uint256);

168:     function virtualBalanceForUtilization(

173:     function underlyingBalanceForExchangeRate() external view returns (uint256);

175:     function sendAssetToTrader(address to, uint256 amount) external;

177:     function isUtilizationForLPsValid() external view returns (bool);

181:     function name() external view returns (string memory);

183:     function symbol() external view returns (string memory);

185:     function SELF_UNIT_SCALE() external view returns (uint);

187:     function underlyingDecimals() external view returns (uint256);

189:     function poolAccountant() external view returns (address);

191:     function underlying() external view returns (IERC20);

193:     function tradingFloor() external view returns (address);

195:     function currentEpoch() external view returns (uint256);

197:     function currentExchangeRate() external view returns (uint256);

199:     function nextEpochStartMin() external view returns (uint256);

201:     function epochDuration() external view returns (uint256);

203:     function minDepositAmount() external view returns (uint256);

205:     function epochsDelayDeposit() external view returns (uint256);

207:     function epochsDelayRedeem() external view returns (uint256);

209:     function immediateDepositAllowed() external view returns (bool);

211:     function pendingDeposits(

216:     function pendingRedeems(

221:     function pendingDepositAmount() external view returns (uint256);

223:     function pendingWithdrawalAmount() external view returns (uint256);

```

```solidity
File: Lynx/interfaces/ILzCreditControllerV1.sol

5:     function isCreditController() external view returns (bool);

7:     function informLzCreditRequest(

```

```solidity
File: Lynx/interfaces/ILzDebitControllerV1.sol

5:     function isDebitController() external view returns (bool);

7:     function informLzDebitRequest(

13:     function informLzDebitRequestWithSource(

```

```solidity
File: Lynx/interfaces/IOrderBookV1.sol

11:     function storeUpdatePositionSingleFieldOrder(

17:     function storeUpdatePositionDoubleFieldOrder(

24:     function readAndDeleteUpdatePositionOrder(

30:     function PRECISION() external pure returns (uint);

34:     function tradingFloor() external view returns (address);

38:     function pendingUpdateTradeFieldOrdersById(

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

157:     function setTradeIncentivizer(address _tradeIncentivizer) external;

159:     function setMaxGainF(uint256 _maxGainF) external;

161:     function setFrm(IFundingRateModel _frm) external;

163:     function setMinOpenFee(uint256 min) external;

165:     function setLexPartF(uint256 partF) external;

167:     function setFundingRateMax(uint256 maxValue) external;

169:     function setLiquidationThresholdF(uint256 threshold) external;

171:     function setLiquidationFeeF(uint256 fee) external;

173:     function setIrm(IInterestRateModel _irm) external;

175:     function setIrmHard(IInterestRateModel _irm) external;

177:     function setInterestShareFactor(uint256 factor) external;

179:     function setBorrowRateMax(uint256 rate) external;

181:     function setMaxTotalBorrows(uint256 maxBorrows) external;

183:     function setMaxVirtualUtilization(uint256 _maxVirtualUtilization) external;

185:     function resetTradersPairGains(uint256 pairId) external;

187:     function addGroup(Group calldata _group, string calldata _name) external;

189:     function updateGroup(Group calldata _group) external;

191:     function addFee(Fee calldata _fee, string calldata _name) external;

193:     function updateFee(Fee calldata _fee) external;

195:     function addPair(Pair calldata _pair, PairFromTo calldata fromTo) external;

197:     function addPairs(

202:     function updatePair(Pair calldata _pair) external;

204:     function readAndZeroReserves()

208:     function registerOpenTrade(

219:     function registerCloseTrade(

235:     function registerUpdateTp(

258:     function accrueInterest()

267:     function accrueInterest(

277:     function getTradeClosingValues(

293:     function getTradeLiquidationPrice(

307:     function calcTradeDynamicFees(

317:     function unrealizedFunding() external view returns (int256);

319:     function totalBorrows() external view returns (uint256);

321:     function interestShare() external view returns (uint256);

323:     function totalReservesView() external view returns (uint256);

325:     function borrowsAndInterestShare()

330:     function pairTotalOpenInterest(

334:     function pricePnL(

339:     function getAllSupportedPairIds() external view returns (uint16[] memory);

341:     function getAllSupportedGroupsIds() external view returns (uint16[] memory);

343:     function getAllSupportedFeeIds() external view returns (uint16[] memory);

347:     function lexPool() external view returns (ILexPoolV1);

349:     function maxGainF() external view returns (uint256);

351:     function interestShareFactor() external view returns (uint256);

353:     function frm() external view returns (IFundingRateModel);

355:     function irm() external view returns (IInterestRateModel);

357:     function pairs(uint16 pairId) external view returns (Pair memory);

359:     function groups(uint16 groupId) external view returns (Group memory);

361:     function fees(uint16 feeId) external view returns (Fee memory);

363:     function openInterestInPair(

367:     function minOpenFee() external view returns (uint256);

369:     function liquidationThresholdF() external view returns (uint256);

371:     function liquidationFeeF() external view returns (uint256);

373:     function lexPartF() external view returns (uint256);

```

```solidity
File: Lynx/interfaces/IPoolBurnControllerV1.sol

9:     function isPoolBurnController() external view returns (bool);

18:     function informBurnRequest(

```

```solidity
File: Lynx/interfaces/IPoolMintControllerV1.sol

9:     function isPoolMintController() external view returns (bool);

18:     function informMintRequest(

```

```solidity
File: Lynx/interfaces/IPriceValidatorV1.sol

13:     function isPriceValidator() external view returns (bool);

15:     function getUpdateFee(

19:     function validatePrice(

```

```solidity
File: Lynx/interfaces/IRateModelV1.sol

9:     function getRate(uint256 x) external view returns (uint256);

```

```solidity
File: Lynx/interfaces/IRegistryV1.sol

11:     function isTradersPortalAndLocker(address _address) external view returns (bool);

12:     function isTriggersAndLocker(address _address) external view returns (bool);

13:     function isTradersPortalOrTriggersAndLocker(address _address) external view returns (bool);

20:     function feesManagers(address asset) external view returns (address);

21:     function orderBook() external view returns (address);

22:     function tradersPortal() external view returns (address);

23:     function triggers() external view returns (address);

24:     function tradeIntentsVerifier() external view returns (address);

25:     function liquidityIntentsVerifier() external view returns (address);

26:     function chipsIntentsVerifier() external view returns (address);

32:     function getValidSpenderTargetForChipByRole(address chip, string calldata role) external view returns (address);

37:     function validBurnHandlerForChip(address chip) external view returns (address);

```

```solidity
File: Lynx/interfaces/ITradeIncentivizerV1.sol

5:     function informTradeOpen(

15:     function informTradeClose(

```

```solidity
File: Lynx/interfaces/ITradersPortalV1.sol

8:     function traderRequest_openNewPosition(

18:     function traderRequest_marketClosePosition(

24:     function traderRequest_updatePositionSingleField(

30:     function traderRequest_updatePositionDoubleField(

37:     function directAction_updatePendingPosition_limit(

45:     function directAction_cancelPendingPosition_limit(

54:     function tradingFloor() external view returns (address);

```

```solidity
File: Lynx/interfaces/ITradingFloorV1.sol

10:     function supportNewSettlementAsset(

16:     function getPositionTriggerInfo(

29:     function getPositionPortalInfo(

40:     function storePendingPosition(

47:     function setOpenedPositionToMarketClose(

53:     function cancelPendingPosition(

59:     function cancelMarketCloseForPosition(

65:     function updatePendingPosition_openLimit(

73:     function openNewPosition_market(

79:     function openNewPosition_limit(

85:     function closeExistingPosition_Market(

91:     function closeExistingPosition_Limit(

99:     function updateOpenedPosition(

107:     function collectFee(address _asset, FeeType _feeType, address _to) external;

111:     function PRECISION() external pure returns (uint);

115:     function pairTradersArray(

120:     function generatePositionHashId(

129:     function lexPoolForAsset(address asset) external view returns (ILexPoolV1);

131:     function poolAccountantForAsset(

135:     function registry() external view returns (address);

139:     function positionsById(bytes32 id) external view returns (Position memory);

141:     function positionIdentifiersById(

145:     function positionLimitsInfoById(

149:     function triggerPricesById(

153:     function pairTradersInfo(

159:     function spreadReductionsP(uint) external view returns (uint);

161:     function maxSlF() external view returns (uint);

163:     function maxTradesPerPair() external view returns (uint);

165:     function maxSanityProfitF() external view returns (uint);

```

```solidity
File: Lynx/interfaces/IWrappedNative.sol

5:     function deposit() external payable returns (uint256);

6:     function withdraw(uint256 amount) external returns (uint256);

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

42:     function wrapNativeAndMintEngineChip() external payable {

53:     function handleBurn(

68:     function wrapNativeInternal(uint256 amount) internal returns (uint256 wrappedNativeAmount) {

77:     function unwrapNativeInternal(uint256 amount) internal returns (uint256 unwrappedNativeAmount) {

86:     function setAllowanceForChipInternal(uint256 amount) internal {

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

65:     function chainId() external view returns (uint256 chainId);

67:     function getPrice(

71:     function getPriceUnsafe(

75:     function getUpdateFee(

79:     function updatePriceFeeds(bytes[] calldata updateData) external payable;

81:     function parsePriceFeedUpdates(

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

29:     function isPriceValidator() external pure returns (bool) {

35:     function setPriceFeedIdForPair(

43:     function setMaxPublicationPeriodInPast(

53:     function getPriceForPair(

59:     function getPrice(

65:     function getPriceUnsafe(

71:     function getUpdateFee(

79:     function updatePrice(

90:     function validatePrice(

116:     function generateValidatedDataFromPyth(

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

41:     function getRate(uint256 x) external view returns (uint256) {

45:     function setRateParamsInternal(uint256 _baseRate, uint256 _multiplier, uint256 _kink, uint256 _postKinkMultiplier) internal {

62:     function getRateInternal(uint256 x) internal view returns (uint256) {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

15:     function setRateParams(uint256 _baseRate, uint256 _multiplier, uint256 _kink, uint256 _postKinkMultiplier) external onlyOwner {

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

15:     function setDefaultSteadyRate(uint _newDefaultRate) external onlyOwner {

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

16:     function getFundingRate(

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

13:     function getFundingRate(

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

15:     function getBorrowRate(

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

12:     function getBorrowRate(

```

</details> 
 


 ### <a name="NC-30"></a>[NC-30]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (664)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

33:     function _setPendingImplementation(address newPendingImplementation) public {

49:     function _acceptImplementation() public returns (uint) {

73:     function _setPendingAdmin(address newPendingAdmin) public {

91:     function _acceptAdmin() public {

132:     function approvePendingImplementationInternal(

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

19:     function approvePendingImplementationInternal(address _implementation) internal view override returns(bool) {

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

27:     function _setPendingAdmin(address newPendingAdmin) public {

45:     function _acceptAdmin() public {

```

```solidity
File: AdministrationContracts/IContractRegistryBase.sol

5:     function isImplementationValidForProxy(bytes32 proxyNameHash, address _implementation) external view returns (bool);

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

21:     function hashDomain(EIP712Domain memory eip712Domain) internal pure returns (bytes32) {

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

32:     function generateAndStoreDomainSeparatorIfMissingInternal(uint256 chainId) internal returns (bytes32) {

```

```solidity
File: Lynx/Chips/BaseChip.sol

32:     function getAutoApprovedSpenderAddressByRole(string calldata role) public view returns (address) {

48:     function setAutoApprovedSpenderForRoleInternal(string calldata role, address spender) internal {

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

73:     function setAutoApprovedSpenderForRole(string calldata role, address spender) external onlyAdmin {

81:     function setBurnHandler(IBurnHandlerV1 _handler) external onlyAdmin {

96:     function setIsMintingPaused(bool _value) external onlyAdmin {

107:     function setMintController(IPoolMintControllerV1 _mintController) external onlyAdmin {

124:     function setBurnController(IPoolBurnControllerV1 _burnController) external onlyAdmin {

143:     function sweepTokens(IERC20 _token, uint256 _amount) external onlyAdmin {

156:     function sweepNative(uint256 _amount) external onlyAdmin {

167:     function mintChip(address _toAddress, uint256 _amount) external nonReentrant {

192:     function burnChip(

205:     function burnChipAndCall(

228:     function safeBurnInternal(address burner, address receiver, uint256 chipAmount) internal returns (uint256 underlyingAmount) {

260:     function allowance(address owner, address spender) public view virtual override returns (uint256) {

274:     function takeUnderlying(address from, uint amount) internal {

287:     function underlyingAmountToOwnAmountInternal(

296:     function ownAmountToUnderlyingAmountInternal(

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

55:     function setAutoApprovedSpenderForRole(string calldata role, address spender) external onlyOwner {

63:     function setIsSendPaused(bool _isPaused) external onlyOwner {

77:     function setCreditController(ILzCreditControllerV1 _creditController) external onlyOwner {

94:     function setDebitController(ILzDebitControllerV1 _debitController) external onlyOwner {

114:     function sweepTokens(ERC20 _token, uint256 _amount) external onlyOwner {

131:     function _credit(

156:     function _debit(

177:     function allowance(address owner, address spender) public view virtual override returns (uint256) {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

52:     function setIsSendPaused(bool _isPaused) external onlyOwner {

66:     function setCreditController(ILzCreditControllerV1 _creditController) external onlyOwner {

83:     function setDebitController(ILzDebitControllerV1 _debitController) external onlyOwner {

100:     function renounceUnderlyingRecovery() external onlyOwner {

111:     function recoverUnderlying(uint256 _amount) external onlyOwner {

125:     function sweepTokens(IERC20 _token, uint256 _amount) external onlyOwner {

146:     function _credit(

179:     function _debit(

```

```solidity
File: Lynx/Common/CaptainBase.sol

15:     function _requireRole(uint8 role) internal view {

24:     function grantRole(uint8 role, address account) external onlyOwner {

28:     function revokeRole(uint8 role, address account) external onlyOwner {

32:     function setPendingAdmin(

39:     function acceptAdmin(

45:     function setPendingImplementation(

```

```solidity
File: Lynx/Common/CommonScales.sol

16:     function calculateLeveragedPosition(

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

74:     function getLZDstChainIdFromChip(address chip) external view returns (uint16) {

82:     function getLZDstChainIdFromEvmChainId(uint16 evmChainId) external view returns (uint16) {

86:     function recoverChipOutLZPayloadSigner(HolderRequestPayload_ChipOutLZ calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

105:     function setChipOutFee(address chip, uint256 fee) external onlyAdmin {

113:     function setLzEndpointId(uint16 evmId, uint16 lzEid) external onlyAdmin {

123:     function setFeesReceiver(address receiver) external onlyAdmin {

133:     function verifyIntent_chipOut(HolderRequestPayload_ChipOutLZ calldata payload, uint8 v, bytes32 r, bytes32 s) external payable {

180:     function handleFeesAndTransfers(address chip, address holder, uint256 amount) internal returns (uint256 amountAfterFeeWithoutDust, uint256 fee) {

210:     function takeChip(address chip, address holder, uint256 feeAmount) internal {

216:     function sendFee(address chip, uint256 feeAmount) internal {

226:     function sendChip(address chip, address receiver, uint256 amount) internal {

234:     function _msgSender() public view returns (address) {

240:     function hashChipOutPayload(HolderRequestPayload_ChipOutLZ memory payload) internal pure returns (bytes32) {

253:     function addressToBytes32Internal(address add) internal pure returns (bytes32) {

258:     function getLZDstChainIdFromEvmChainIdInternal(uint16 evmChainId) internal view returns (uint16) {

262:     function _removeDust(uint256 _amount, uint256 _decimalConversionRate) internal view virtual returns (uint256 amountWithoutDust) {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

69:     function recoverEpochDepositPayloadSigner(LiquidityProviderRequestPayload_EpochDeposit calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

79:     function recoverEpochRedeemPayloadSigner(LiquidityProviderRequestPayload_EpochRedeem calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

100:     function _msgSender() public view returns (address) {

106:     function verifyIntent_epochDeposit(LiquidityProviderRequestPayload_EpochDeposit calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domain, bytes32 referralCode) external payable {

126:     function verifyIntent_epochRedeem(LiquidityProviderRequestPayload_EpochRedeem calldata payload, uint8 v, bytes32 r, bytes32 s) external payable {

148:     function hashEpochDepositPayload(LiquidityProviderRequestPayload_EpochDeposit memory payload) internal pure returns (bytes32) {

160:     function hashEpochRedeemPayload(LiquidityProviderRequestPayload_EpochRedeem memory payload) internal pure returns (bytes32) {

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

29:     function domainSeparatorForAsset(address asset) public view returns (bytes32) {

40:     function storeSourceChainForAsset(address asset, uint256 chainId) virtual external onlyAdmin {

52:     function storeSourceChainForAssetInternal(address asset, uint256 chainId) internal {

74:     function getDomainSeparatorForAssetInternal(address _asset) internal view returns (bytes32) {

86:     function getDomainSeparatorAndChainForAssetInternal(address _asset) internal view returns (bytes32, uint256) {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

23:     function getNextValidNonceFor(address account, uint8 actionType) external view returns (uint256) {

35:     function validateNonceForActionAndIncrease(address account, uint8 actionType, uint256 nonce) internal {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

23:     function getNextValidNonceFor(bytes32 id, uint8 actionType) external view returns (uint256) {

35:     function validateNonceForActionAndIncrease(bytes32 id, uint8 actionType, uint256 nonce) internal {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

124:     function getTradersPortal() public view returns (ITradersPortalV1) {

128:     function getTradingFloor() public view returns (ITradingFloorV1) {

132:     function recoverOpenPositionPayloadSigner(UserRequestPayload_OpenPosition calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

142:     function recoverCloseMarketPayloadSigner(UserRequestPayload_CloseMarket calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

152:     function recoverUpdatePositionSingleFieldPayloadSigner(UserRequestPayload_UpdatePositionSingleField calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

162:     function recoverUpdatePositionDoubleFieldPayloadSigner(UserRequestPayload_UpdatePositionDoubleField calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

172:     function recoverUpdatePendingLimitPositionSigner(UserDirectPayload_UpdatePendingLimitPosition calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

182:     function recoverCancelPendingLimitPositionSigner(UserDirectPayload_CancelPendingLimitPosition calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

206:     function verifyIntent_traderRequest_openNewPosition(

253:     function verifyIntent_traderRequest_marketClosePosition(UserRequestPayload_CloseMarket calldata payload, uint8 v, bytes32 r, bytes32 s) external payable notContract  {

273:     function verifyIntent_traderRequest_updatePositionSingleField(

298:     function verifyIntent_traderRequest_updatePositionDoubleField(

329:     function verifyIntent_traderAction_updatePendingLimitPosition(

353:     function verifyIntent_traderAction_cancelPendingLimitPosition(

379:     function getDomainSeparatorAndTraderForPositionInternal(bytes32 _positionId) internal returns (bytes32 domainSeparator, address trader) {

401:     function _msgSender() public view returns (address) {

407:     function hashOpenPositionPayload(UserRequestPayload_OpenPosition memory payload) internal pure returns (bytes32) {

417:     function hashPositionRequestIdentifiers(ITradingFloorV1.PositionRequestIdentifiers memory payload) internal pure returns (bytes32) {

427:     function hashPositionRequestParams(ITradingFloorV1.PositionRequestParams memory payload) internal pure returns (bytes32) {

442:     function hashCloseMarketPayload(UserRequestPayload_CloseMarket memory payload) internal pure returns (bytes32) {

452:     function hashUpdatePositionSingleFieldPayload(UserRequestPayload_UpdatePositionSingleField memory payload) internal pure returns (bytes32) {

462:     function hashUpdatePositionDoubleFieldPayload(UserRequestPayload_UpdatePositionDoubleField memory payload) internal pure returns (bytes32) {

473:     function hashUpdatePendingLimitPositionPayload(UserDirectPayload_UpdatePendingLimitPosition memory payload) internal pure returns (bytes32) {

485:     function hashCancelPendingLimitPositionPayload(UserDirectPayload_CancelPendingLimitPosition memory payload) internal pure returns (bytes32) {

```

```solidity
File: Lynx/Lex/LexCaptain.sol

34:     function emergencyStopPair(

45:     function setPoolAccountant(

52:     function setPnlRole(

59:     function setMaxExtraWithdrawalAmountF(

66:     function setEpochsDelayDeposit(

73:     function setEpochsDelayRedeem(

80:     function setEpochDuration(

87:     function setMinDepositAmount(

94:     function toggleImmediateDepositAllowed(

100:     function reduceReserves(

109:     function setTradeIncentivizer(

116:     function setMaxGainF(

123:     function setFrm(

130:     function setMinOpenFee(

137:     function setLexPartF(

144:     function setFundingRateMax(

151:     function setLiquidationThresholdF(

158:     function setLiquidationFeeF(

165:     function setIrm(

172:     function setIrmHard(

179:     function setInterestShareFactor(

186:     function setBorrowRateMax(

193:     function setMaxTotalBorrows(

200:     function setMaxVirtualutilization(

207:     function resetTradersPairGains(

214:     function addGroup(

226:     function updateGroup(

237:     function addFee(

245:     function updateFee(

252:     function addPair(

265:     function addPairs(

278:     function updatePair(

```

```solidity
File: Lynx/Lex/LexCommon.sol

20:     function initializeLexCommon(

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

22:     function initializeLexERC20(

34:     function decimals() public pure returns (uint8) {

38:     function balanceOf(address account) public view returns (uint256) {

42:     function transfer(address recipient, uint256 amount) public returns (bool) {

47:     function allowance(

54:     function approve(address spender, uint256 amount) public returns (bool) {

59:     function transferFrom(

78:     function _transfer(

99:     function _mint(address account, uint256 amount) internal {

107:     function _burn(address account, uint256 amount) internal {

120:     function _approve(address owner, address spender, uint256 amount) internal {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

51:     function initializeLexPoolStorage(

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

43:     function calcNextEpochStartMin() public view returns (uint256) {

52:     function currentBalanceInternal() public view returns (uint256) {

59:     function underlyingBalanceForExchangeRate() public view returns (uint256) {

71:     function virtualBalanceForUtilization(

96:     function virtualBalanceForUtilization() public view returns (uint256) {

109:     function currentVirtualUtilization(

130:     function currentVirtualUtilization() public view returns (uint256) {

145:     function isUtilizationForLPsValid() public view returns (bool) {

154:     function underlyingAmountToOwnAmount(

166:     function getDepositorsCount(uint256 epoch) external view returns (uint256) {

173:     function getRedeemersCount(uint256 epoch) external view returns (uint256) {

180:     function getDepositors(

191:     function getRedeemers(

204:     function _become(LexPoolProxy proxy) public {

213:     function initialize(

228:     function setPoolAccountant(

241:     function setPnlRole(address pnl) external onlyAdmin {

248:     function setMaxExtraWithdrawalAmountF(uint256 maxExtra) external onlyAdmin {

256:     function setEpochsDelayDeposit(uint256 delay) external onlyAdmin {

261:     function setEpochsDelayRedeem(uint256 delay) external onlyAdmin {

266:     function setEpochDuration(uint256 duration) external onlyAdmin {

271:     function setMinDepositAmount(uint256 amount) external onlyAdmin {

279:     function toggleImmediateDepositAllowed() external onlyAdmin {

287:     function reduceReserves(address _to) external onlyAdmin {

307:     function immediateDeposit(

341:     function requestDeposit(

355:     function requestDepositViaIntent(

370:     function requestDepositInternal(

404:     function requestRedeem(

415:     function requestRedeemViaIntent(

427:     function requestRedeemInternal(

474:     function processDeposit(

513:     function processDepositSingle(

548:     function cancelDeposits(

574:     function processRedeems(

617:     function processRedeemSingle(

665:     function cancelRedeems(

693:     function nextEpoch(

745:     function sendAssetToTrader(

757:     function verifyUtilizationForLPs() internal view {

764:     function getArrItems(

781:     function underlyingAmountToOwnAmountInternal(

791:     function ownAmountToUnderlyingAmountInternal(

804:     function takeUnderlying(address from, uint amount) internal {

828:     function _beforeNonReentrant() private {

835:     function _afterNonReentrant() private {

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

26:     function allowEpochAdvancingAccount(address account) external onlyAdmin {

30:     function disallowEpochAdvancingAccount(address account) external onlyAdmin {

52:     function advanceEpoch(

63:     function calculateUnrealizedPricePnl(

75:     function pairsTradersPricePnl(

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

13:     function setFrm(IFundingRateModel _frm) external onlyAdmin {

18:     function setMinOpenFee(uint256 min) external onlyAdmin {

23:     function setLexPartF(uint256 partF) external onlyAdmin {

28:     function setFundingRateMax(uint256 maxValue) external onlyAdmin {

36:     function setLiquidationThresholdF(uint256 threshold) external onlyAdmin {

45:     function setLiquidationFeeF(uint256 fee) external onlyAdmin {

52:     function updateRealizedFunding(int256 valueChange) internal {

58:     function calcAccrueFundingValues(

101:     function fundingIndicesCalculation(

135:     function getTradeLiquidationPriceView(

159:     function calcProfitPrecision(

176:     function calcBorrowAmount(

194:     function getTradeInterest(

213:     function restartTradeInterest(

224:     function getTradeInterestPure(

237:     function getTradeFunding(

262:     function getTradeFundingPure(

280:     function calcClosingFee(

293:     function calcPerformanceFee(

322:     function calculateLexPartFee(uint256 fee) internal view returns (uint256) {

326:     function getTradeValueView(

355:     function getTradeLiquidationPrice(

394:     function storeTradeInitialAccFees(

412:     function calcSafeClosingFee(

427:     function calcTradeDynamicFees(

453:     function updateStateForClosingTrade(

501:     function getTradeClosingValues(

569:     function calculateFeeInternal(

579:     function updateOpenInterestInPairInternal(

627:     function updateTotalRatioOiToP(

641:     function effectiveEntryPrice(

655:     function effectiveEntryPrice(

665:     function pricePnL(

682:     function pricePnL(

694:     function calcAbsoluteSkew(

713:     function accrueFunding(

737:     function getAccFundingLong(

745:     function getAccFundingShort(

754:     function getAccFundingUpdateBlock(

763:     function getTradeInitialAccBorrowIndex(

769:     function getTradeInitialAccFundingPerOi(

778:     function pairTotalOpenInterest(

788:     function generatePositionHashId(

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

68:     function groupMaxBorrow(uint16 groupId) public view returns (uint256) {

77:     function pairMaxBorrow(uint16 pairId) public view returns (uint256) {

85:     function pairOpenFeeF(uint16 _pairId) public view returns (uint32) {

92:     function pairCloseFeeF(uint16 _pairId) public view returns (uint32) {

99:     function pairPerformanceFeeF(uint16 _pairId) public view returns (uint32) {

103:     function pairMinPerformanceFee(

112:     function pairMinOpenFee(uint16 _pairId) public view returns (uint256) {

129:     function verifyTradersPairGains(uint16 pairId) public view {

143:     function getAllSupportedPairIds() external view returns (uint16[] memory) {

150:     function getAllSupportedGroupsIds()

161:     function getAllSupportedFeeIds() external view returns (uint16[] memory) {

170:     function resetTradersPairGains(uint256 pairId) external onlyAdmin {

178:     function addGroup(

197:     function updateGroup(

209:     function addFee(

227:     function updateFee(

237:     function addPair(

247:     function addPairs(

259:     function updatePair(

269:     function updateTradersPairGains(

279:     function addPairInternal(

296:     function isPairListed(uint16 pairId) private view returns (bool) {

300:     function isGroupListed(uint16 groupId) private view returns (bool) {

304:     function isFeeListed(uint16 feeId) private view returns (bool) {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

16:     function setIrm(IInterestRateModel _irm) external onlyAdmin {

25:     function setIrmHard(IInterestRateModel _irm) external onlyAdmin {

30:     function setInterestShareFactor(uint256 factor) external onlyAdmin {

39:     function setBorrowRateMax(uint256 rate) external onlyAdmin {

44:     function setMaxTotalBorrows(uint256 maxBorrows) external onlyAdmin {

52:     function setMaxVirtualUtilization(

69:     function verifyUtilizationForTraders(

88:     function accrueInterest(

106:     function accrueInterest()

118:     function accrueInterestInternal(

154:     function calcAccrueInterestValues()

167:     function calcUtilization(

179:     function calcAccrueInterestValues(

222:     function borrow(

253:     function repay(uint16 pairId, uint256 amount) internal {

261:     function repayInterest(uint256 amount) internal {

273:     function unrealizedFunding() public view returns (int256) {

280:     function borrowsAndInterestShare()

291:     function totalReservesView() public view returns (uint256) {

295:     function virtualBalance() internal view override returns (uint256) {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

29:     function accrueFunding(

33:     function virtualBalance() internal view virtual returns (uint256);

35:     function pairTotalOpenInterest(

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

100:     function initializePoolAccountantStorage(

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

18:     function _become(PoolAccountantProxy proxy) external {

30:     function initialize(

39:     function setTradeIncentivizer(

49:     function setMaxGainF(uint256 _maxGainF) external onlyAdmin {

62:     function readAndZeroReserves()

80:     function registerOpenTrade(

148:     function registerCloseTrade(

237:     function registerUpdateTp(

301:     function adjustClosePrice(

317:     function verifyLeveragedPosition(

346:     function verifyOpenFee(

362:     function verifyPerformanceFee(

374:     function verifyMaxPercentProfit(

405:     function incentivizerInformOpen(

437:     function incentivizerInformClose(

```

```solidity
File: Lynx/Locks/SystemLocker.sol

31:     function _beforeNonReentrant() private {

38:     function _afterNonReentrant() private {

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

55:     function getAllPendingUpdateOrderIds()

65:     function _become(OrderBookProxy orderBookProxy) public {

78:     function setTradingFloor(address _tradingFloor) external onlyAdmin {

95:     function storeUpdatePositionSingleFieldOrder(

140:     function storeUpdatePositionDoubleFieldOrder(

184:     function readAndDeleteUpdatePositionOrder(

205:     function addUpdateOrderIdToGeneralList(bytes32 _orderId) internal {

215:     function removeUpdateOrderIdFromGeneralList(bytes32 _orderId) internal {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

32:     function _become(RegistryProxy registryProxy) public {

44:     function lock() external override {

51:     function freeLock() external override onlyLockOwner {

55:     function isTradersPortalAndLocker(address _address) external view returns (bool) {

59:     function isTriggersAndLocker(address _address) external view returns (bool) {

63:     function isTradersPortalOrTriggersAndLocker(address _address) external view returns (bool) {

72:     function isImplementationValidForProxy(bytes32 proxyNameHash, address _implementation) external view returns (bool) {

81:     function getLatestImplementationForProxyByHash(bytes32 proxyNameHash) external view returns (address) {

88:     function getLatestImplementationForProxyByName(string calldata proxyName) external view returns (address) {

97:     function getAllSupportedTradingFloors() external view returns (address[] memory)  {

104:     function getSettlementAssetsForTradingFloor(address _tradingFloor) external view returns (address[] memory) {

111:     function getDynamicRoleAddress(string calldata _role) external view returns (address) {

119:     function getValidSpenderTargetForChipByRole(address chip, string calldata role) external view returns (address) {

129:     function setDynamicRoleAddress(string calldata _role, address _address) external onlyAdmin {

138:     function setOrderBook(address _orderBook) external onlyAdmin {

150:     function setTradersPortal(address _tradersPortal) external onlyAdmin {

162:     function setTriggers(address _triggers) external onlyAdmin {

170:     function setTradeIntentsVerifier(address _tradeIntentsVerifier) external onlyAdmin {

178:     function setLiquidityIntentsVerifier(address _liquidityIntentsVerifier) external onlyAdmin {

186:     function setChipsIntentsVerifier(address _chipsIntentsVerifier) external onlyAdmin {

194:     function setFeesManager(address asset, address feesManager) external onlyAdmin {

203:     function setValidChipSpenderTargetByRole(address chip, string calldata role, address spender) external onlyAdmin {

210:     function setValidChipBurnHandler(address chip, address burnHandler) external onlyAdmin {

217:     function publishNewSystemVersionSingle(uint256 versionToPublish,

226:     function publishNewSystemVersionBatch(uint256 versionToPublish,

242:     function supportTradingFloor(address _tradingFloor) external onlyAdmin {

253:     function addNewSettlementAssetInTradingFloor(

303:     function getLatestImplementationForProxyByHashInternal(bytes32 proxyNameHash) internal view returns (address) {

313:     function publishNewSystemVersionSingleInternal(uint256 versionToPublish, bytes32 contractNameHash, address contractImplementation) internal {

327:     function updateLockerAddressInternal(

338:     function setValidChipSpenderByRoleInternal(address chip, string memory role, address spender) internal {

352:     function setValidChipBurnHandlerInternal(address chip, address burnHandler) internal {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

114:     function getOrderBook() public view returns (IOrderBookV1 orderBook) {

120:     function getTradeIntentsVerifier() public view returns (address tradeIntentsVerifier) {

140:     function togglePause() external onlyAdmin {

146:     function toggleDone() external onlyAdmin {

154:     function setLimitOrdersTimelock(uint value) external onlyAdmin {

161:     function setMarketOrdersTimeout(uint value) external onlyAdmin {

168:     function toggleLimitCloseOrdersRange() external onlyAdmin {

176:     function setNativeFeeForAction(TradersPortalActions action, uint256 requiredFee) external onlyAdmin {

183:     function collectNativeFees(address payable _to) external onlyFeesManager {

200:     function traderRequest_openNewPosition(

220:     function traderRequest_marketClosePosition(

236:     function traderRequest_updatePositionSingleField(

252:     function traderRequest_updatePositionDoubleField(

273:     function directAction_updatePendingPosition_limit(

323:     function directAction_cancelPendingPosition_limit(

365:     function directAction_timeout_updateTradeField(

389:     function directAction_timeout_openMarket(

426:     function directAction_timeout_closeMarket(

471:     function openNewPositionInternal(

560:     function setExistingPositionToMarketCloseInternal(

594:     function updatePositionSingleFieldInternal(

629:     function updatePositionDoubleFieldInternal(

664:     function validateTradeCanBeOpenedInternal(

729:     function _msgSender() public view returns (address) {

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

166:     function generatePositionHashId(

180:     function getPositionTriggerInfo(

205:     function getPositionPortalInfo(

222:     function getPositionRegistrationParams(

246:     function isSettlementAssetSupported(

255:     function pairTradersArray(

267:     function _become(TradingFloorProxy tradingFloorProxy) public {

278:     function supportNewSettlementAsset(

302:     function setTradeParam(

332:     function setPairPaused(uint _pairId, bool _isPaused) external onlyAdmin {

343:     function storePendingPosition(

444:     function setOpenedPositionToMarketClose(

469:     function updatePendingPosition_openLimit(

523:     function openNewPosition_market(

539:     function openNewPosition_limit(

555:     function closeExistingPosition_Market(

597:     function closeExistingPosition_Limit(

669:     function updateOpenedPosition(

775:     function cancelPendingPosition(

823:     function cancelMarketCloseForPosition(

838:     function cancelMarketCloseForPositionInternal(

868:     function collectFee(

884:     function storeIdentifiersIfNeeded(

917:     function openNewTradeInternal(

1058:     function storeCorrectLimitsForOpenedPosition(

1117:     function closeExistingTradeInternal(

1201:     function registerTradeCloseInLexInternal(

1235:     function settleCanceledOpenOrderInternal(

1274:     function settleTradeCloseInternal(

1320:     function collectFeeInternal(

1335:     function registerFeeInternal(

1352:     function takeSettlement(

1379:     function sendSettlement(

1395:     function increaseOrAddToPairTradersLists(

1418:     function decreaseOrRemoveFromPairTradersLists(

1453:     function calculateFractionInternal(

1465:     function requireValidOpenTradeParameters(

1488:     function correctTp(

1517:     function correctSl(

1548:     function currentProfitFraction(

1569:     function calculatePriceDiffFromFractionAndLeverage(uint64 originPrice, uint64 fractionDiff, uint64 leverage) internal pure returns (uint64) {

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

29:     function setMaxConfidenceForPairInternal(uint _pairId, uint32 _maxConfidenceFractionForPair) internal {

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

31:     function setSpreadFractionForPairInternal(uint _pairId, uint32 _spreadF) internal {

37:     function calculatePostSpreadPrice(uint pairId, uint64 basePrice, uint32 spreadReductionF, bool increase) internal view returns (uint64) {

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

31:     function isAllowedToTrigger(address account) public view returns (bool) {

35:     function getAllTriggerPermissionedAccounts() public view returns (address[] memory) {

41:     function allowTriggerAccountInternal(address account) internal {

47:     function disallowTriggerAccountInternal(address account) internal {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

170:     function getValidatedPrice(

202:     function togglePause() external onlyAdmin {

208:     function toggleDone() external onlyAdmin {

216:     function setPriceValidator(address _priceValidator) external onlyAdmin {

228:     function allowTriggerAccount(address account) external onlyAdmin {

232:     function disallowTriggerAccount(address account) external onlyAdmin {

236:     function setMaxConfidenceForPair(

243:     function setSpreadFractionForPair(

250:     function setMinTriggerPeriodForMarketOrders(

264:     function setMaxTriggerPeriodForMarketOrders(

278:     function setMinTriggerPeriodForLimitOrders(

288:     function setMarketOrdersTimeout(

295:     function setMarketOrderTightTimeRange(

305:     function setTriggerPriceFreshnessTimeRange(

315:     function setMarketOrderCancelFeeFraction(

325:     function setOpenPositionCancellationFeeFraction(

335:     function setMaxTriggersPerBlock(

349:     function trigger_openTrade_market(

408:     function trigger_openTrade_limit(

468:     function trigger_closeTrade_market(

520:     function trigger_closeTrade_SL(

567:     function trigger_closeTrade_TP(

620:     function trigger_closeTrade_LIQ(

658:     function trigger_update_TP(

701:     function trigger_update_SL(

744:     function trigger_update_TP_and_SL(

798:     function trigger_timeout_updatePosition(

818:     function safePositionSingleFieldUpdateInternal(

892:     function trigger_timeout_marketOpen(

921:     function trigger_timeout_marketClose(

955:     function validatePriceForPairWithSafeguardsInternal(

985:     function validatePriceForPairInternal(

1001:     function validateMarketOrderTimestampInternal(

1025:     function validateLimitOrderTimestampInternal(

1053:     function validateTriggerPriceRecentInternal(

1065:     function safelyIncreaseTriggersPerBlock() internal {

1076:     function calculateFractionInternal(

```

```solidity
File: Lynx/interfaces/IBurnHandlerV1.sol

5:     function handleBurn(

```

```solidity
File: Lynx/interfaces/IFundingRateModel.sol

7:     function getFundingRate(

```

```solidity
File: Lynx/interfaces/IGlobalLock.sol

5:     function lock() external;

6:     function freeLock() external;

```

```solidity
File: Lynx/interfaces/IInterestRateModel.sol

7:     function getBorrowRate(uint256 utilization) external view returns (uint256);

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

79:     function setPoolAccountant(

83:     function setPnlRole(address pnl) external;

85:     function setMaxExtraWithdrawalAmountF(uint256 maxExtra) external;

87:     function setEpochsDelayDeposit(uint256 delay) external;

89:     function setEpochsDelayRedeem(uint256 delay) external;

91:     function setEpochDuration(uint256 duration) external;

93:     function setMinDepositAmount(uint256 amount) external;

95:     function toggleImmediateDepositAllowed() external;

97:     function reduceReserves(address _to) external;

99:     function requestDeposit(

106:     function requestDepositViaIntent(

114:     function requestRedeem(uint256 amount, uint256 minAmountOut) external;

116:     function requestRedeemViaIntent(

122:     function processDeposit(

133:     function cancelDeposits(

138:     function processRedeems(

149:     function cancelRedeems(

154:     function nextEpoch(

158:     function currentVirtualUtilization() external view returns (uint256);

160:     function currentVirtualUtilization(

166:     function virtualBalanceForUtilization() external view returns (uint256);

168:     function virtualBalanceForUtilization(

173:     function underlyingBalanceForExchangeRate() external view returns (uint256);

175:     function sendAssetToTrader(address to, uint256 amount) external;

177:     function isUtilizationForLPsValid() external view returns (bool);

181:     function name() external view returns (string memory);

183:     function symbol() external view returns (string memory);

185:     function SELF_UNIT_SCALE() external view returns (uint);

187:     function underlyingDecimals() external view returns (uint256);

189:     function poolAccountant() external view returns (address);

191:     function underlying() external view returns (IERC20);

193:     function tradingFloor() external view returns (address);

195:     function currentEpoch() external view returns (uint256);

197:     function currentExchangeRate() external view returns (uint256);

199:     function nextEpochStartMin() external view returns (uint256);

201:     function epochDuration() external view returns (uint256);

203:     function minDepositAmount() external view returns (uint256);

205:     function epochsDelayDeposit() external view returns (uint256);

207:     function epochsDelayRedeem() external view returns (uint256);

209:     function immediateDepositAllowed() external view returns (bool);

211:     function pendingDeposits(

216:     function pendingRedeems(

221:     function pendingDepositAmount() external view returns (uint256);

223:     function pendingWithdrawalAmount() external view returns (uint256);

```

```solidity
File: Lynx/interfaces/ILzCreditControllerV1.sol

5:     function isCreditController() external view returns (bool);

7:     function informLzCreditRequest(

```

```solidity
File: Lynx/interfaces/ILzDebitControllerV1.sol

5:     function isDebitController() external view returns (bool);

7:     function informLzDebitRequest(

13:     function informLzDebitRequestWithSource(

```

```solidity
File: Lynx/interfaces/IOrderBookV1.sol

11:     function storeUpdatePositionSingleFieldOrder(

17:     function storeUpdatePositionDoubleFieldOrder(

24:     function readAndDeleteUpdatePositionOrder(

30:     function PRECISION() external pure returns (uint);

34:     function tradingFloor() external view returns (address);

38:     function pendingUpdateTradeFieldOrdersById(

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

157:     function setTradeIncentivizer(address _tradeIncentivizer) external;

159:     function setMaxGainF(uint256 _maxGainF) external;

161:     function setFrm(IFundingRateModel _frm) external;

163:     function setMinOpenFee(uint256 min) external;

165:     function setLexPartF(uint256 partF) external;

167:     function setFundingRateMax(uint256 maxValue) external;

169:     function setLiquidationThresholdF(uint256 threshold) external;

171:     function setLiquidationFeeF(uint256 fee) external;

173:     function setIrm(IInterestRateModel _irm) external;

175:     function setIrmHard(IInterestRateModel _irm) external;

177:     function setInterestShareFactor(uint256 factor) external;

179:     function setBorrowRateMax(uint256 rate) external;

181:     function setMaxTotalBorrows(uint256 maxBorrows) external;

183:     function setMaxVirtualUtilization(uint256 _maxVirtualUtilization) external;

185:     function resetTradersPairGains(uint256 pairId) external;

187:     function addGroup(Group calldata _group, string calldata _name) external;

189:     function updateGroup(Group calldata _group) external;

191:     function addFee(Fee calldata _fee, string calldata _name) external;

193:     function updateFee(Fee calldata _fee) external;

195:     function addPair(Pair calldata _pair, PairFromTo calldata fromTo) external;

197:     function addPairs(

202:     function updatePair(Pair calldata _pair) external;

204:     function readAndZeroReserves()

208:     function registerOpenTrade(

219:     function registerCloseTrade(

235:     function registerUpdateTp(

258:     function accrueInterest()

267:     function accrueInterest(

277:     function getTradeClosingValues(

293:     function getTradeLiquidationPrice(

307:     function calcTradeDynamicFees(

317:     function unrealizedFunding() external view returns (int256);

319:     function totalBorrows() external view returns (uint256);

321:     function interestShare() external view returns (uint256);

323:     function totalReservesView() external view returns (uint256);

325:     function borrowsAndInterestShare()

330:     function pairTotalOpenInterest(

334:     function pricePnL(

339:     function getAllSupportedPairIds() external view returns (uint16[] memory);

341:     function getAllSupportedGroupsIds() external view returns (uint16[] memory);

343:     function getAllSupportedFeeIds() external view returns (uint16[] memory);

347:     function lexPool() external view returns (ILexPoolV1);

349:     function maxGainF() external view returns (uint256);

351:     function interestShareFactor() external view returns (uint256);

353:     function frm() external view returns (IFundingRateModel);

355:     function irm() external view returns (IInterestRateModel);

357:     function pairs(uint16 pairId) external view returns (Pair memory);

359:     function groups(uint16 groupId) external view returns (Group memory);

361:     function fees(uint16 feeId) external view returns (Fee memory);

363:     function openInterestInPair(

367:     function minOpenFee() external view returns (uint256);

369:     function liquidationThresholdF() external view returns (uint256);

371:     function liquidationFeeF() external view returns (uint256);

373:     function lexPartF() external view returns (uint256);

```

```solidity
File: Lynx/interfaces/IPoolBurnControllerV1.sol

9:     function isPoolBurnController() external view returns (bool);

18:     function informBurnRequest(

```

```solidity
File: Lynx/interfaces/IPoolMintControllerV1.sol

9:     function isPoolMintController() external view returns (bool);

18:     function informMintRequest(

```

```solidity
File: Lynx/interfaces/IPriceValidatorV1.sol

13:     function isPriceValidator() external view returns (bool);

15:     function getUpdateFee(

19:     function validatePrice(

```

```solidity
File: Lynx/interfaces/IRateModelV1.sol

9:     function getRate(uint256 x) external view returns (uint256);

```

```solidity
File: Lynx/interfaces/IRegistryV1.sol

11:     function isTradersPortalAndLocker(address _address) external view returns (bool);

12:     function isTriggersAndLocker(address _address) external view returns (bool);

13:     function isTradersPortalOrTriggersAndLocker(address _address) external view returns (bool);

20:     function feesManagers(address asset) external view returns (address);

21:     function orderBook() external view returns (address);

22:     function tradersPortal() external view returns (address);

23:     function triggers() external view returns (address);

24:     function tradeIntentsVerifier() external view returns (address);

25:     function liquidityIntentsVerifier() external view returns (address);

26:     function chipsIntentsVerifier() external view returns (address);

32:     function getValidSpenderTargetForChipByRole(address chip, string calldata role) external view returns (address);

37:     function validBurnHandlerForChip(address chip) external view returns (address);

```

```solidity
File: Lynx/interfaces/ITradeIncentivizerV1.sol

5:     function informTradeOpen(

15:     function informTradeClose(

```

```solidity
File: Lynx/interfaces/ITradersPortalV1.sol

8:     function traderRequest_openNewPosition(

18:     function traderRequest_marketClosePosition(

24:     function traderRequest_updatePositionSingleField(

30:     function traderRequest_updatePositionDoubleField(

37:     function directAction_updatePendingPosition_limit(

45:     function directAction_cancelPendingPosition_limit(

54:     function tradingFloor() external view returns (address);

```

```solidity
File: Lynx/interfaces/ITradingFloorV1.sol

10:     function supportNewSettlementAsset(

16:     function getPositionTriggerInfo(

29:     function getPositionPortalInfo(

40:     function storePendingPosition(

47:     function setOpenedPositionToMarketClose(

53:     function cancelPendingPosition(

59:     function cancelMarketCloseForPosition(

65:     function updatePendingPosition_openLimit(

73:     function openNewPosition_market(

79:     function openNewPosition_limit(

85:     function closeExistingPosition_Market(

91:     function closeExistingPosition_Limit(

99:     function updateOpenedPosition(

107:     function collectFee(address _asset, FeeType _feeType, address _to) external;

111:     function PRECISION() external pure returns (uint);

115:     function pairTradersArray(

120:     function generatePositionHashId(

129:     function lexPoolForAsset(address asset) external view returns (ILexPoolV1);

131:     function poolAccountantForAsset(

135:     function registry() external view returns (address);

139:     function positionsById(bytes32 id) external view returns (Position memory);

141:     function positionIdentifiersById(

145:     function positionLimitsInfoById(

149:     function triggerPricesById(

153:     function pairTradersInfo(

159:     function spreadReductionsP(uint) external view returns (uint);

161:     function maxSlF() external view returns (uint);

163:     function maxTradesPerPair() external view returns (uint);

165:     function maxSanityProfitF() external view returns (uint);

```

```solidity
File: Lynx/interfaces/IWrappedNative.sol

5:     function deposit() external payable returns (uint256);

6:     function withdraw(uint256 amount) external returns (uint256);

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

42:     function wrapNativeAndMintEngineChip() external payable {

53:     function handleBurn(

68:     function wrapNativeInternal(uint256 amount) internal returns (uint256 wrappedNativeAmount) {

77:     function unwrapNativeInternal(uint256 amount) internal returns (uint256 unwrappedNativeAmount) {

86:     function setAllowanceForChipInternal(uint256 amount) internal {

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

65:     function chainId() external view returns (uint256 chainId);

67:     function getPrice(

71:     function getPriceUnsafe(

75:     function getUpdateFee(

79:     function updatePriceFeeds(bytes[] calldata updateData) external payable;

81:     function parsePriceFeedUpdates(

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

29:     function isPriceValidator() external pure returns (bool) {

35:     function setPriceFeedIdForPair(

43:     function setMaxPublicationPeriodInPast(

53:     function getPriceForPair(

59:     function getPrice(

65:     function getPriceUnsafe(

71:     function getUpdateFee(

79:     function updatePrice(

90:     function validatePrice(

116:     function generateValidatedDataFromPyth(

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

41:     function getRate(uint256 x) external view returns (uint256) {

45:     function setRateParamsInternal(uint256 _baseRate, uint256 _multiplier, uint256 _kink, uint256 _postKinkMultiplier) internal {

62:     function getRateInternal(uint256 x) internal view returns (uint256) {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

15:     function setRateParams(uint256 _baseRate, uint256 _multiplier, uint256 _kink, uint256 _postKinkMultiplier) external onlyOwner {

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

15:     function setDefaultSteadyRate(uint _newDefaultRate) external onlyOwner {

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

16:     function getFundingRate(

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

13:     function getFundingRate(

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

15:     function getBorrowRate(

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

12:     function getBorrowRate(

```

</details> 
 


 ### <a name="NC-31"></a>[NC-31]
 ### If-statement can be converted to a ternary

#### Impact:
The code can be made more compact while also increasing readability by converting the following `if`-statements to ternaries (e.g. `foo += (x > y) ? a : b`)

*Instances (98)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

35:         if (storedDomainSeparator == bytes32(0)) {

48:         } else {

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

177:         if (address(_mintController) != address(0)) {

240:         if (address(_burnController) != address(0)) {

261:         if (autoApproved[spender]) {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

138:         if (address(creditController_) != address(0)) {

165:         if (address(debitController_) != address(0)) {

178:         if (autoApproved[spender]) {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

155:         if (address(creditController_) != address(0)) {

190:         if (address(debitController_) != address(0)) {

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

185:         if (fee == type(uint256).max) {

203:         if (dustChange > 0) {

211:         if (feeAmount > 0) {

227:         if (amount > 0) {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

383:         if (domainSeparator == bytes32(0) || trader == address(0)) {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

114:         if (totalBorrows == 0) {

296:         if (reservesToSend > 0) {

385:         if (pendingDeposit.amount == 0) {

453:         if (pendingRedeem.amount == 0) {

495:             if (!existed) {

498:             if (deposited) {

520:         if (0 == pendingDeposit.amount) {

531:         if (actualAmountOut >= pendingDeposit.minAmountOut) {

597:             if (!existed) {

600:             if (redeemed) {

631:         if (0 == pendingRedeem.amount) {

646:         if (finalUnderlyingAmountOut >= pendingRedeem.minAmountOut) {

709:         if (0 == supply) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

70:         if (timediff == 0) {

120:         if (oiSmall != 0) {

303:         if (0 < profit) {

316:         if (loss > minPerformanceFee) {

342:         if (liquidation) {

599:         if (_open) {

610:             if (absSkew > pair.maxSkew) {

615:         if (_long) {

645:         if (0 == totalRatioOiToP) {

670:         if (0 == effEntryPrice) {

719:         if (freshened) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

114:         if (pair.minOpenFee < type(uint256).max) {

119:         if (group.minOpenFee < type(uint256).max) {

131:         if (currentGains > 0 && currentGains >= int256(pairs[pairId].maxGain)) {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

79:         if (utilization > maxVirtualUtilization) {

136:         if (freshened) {

194:         if (accrualBlockTimestampPrior == currentBlockTimestamp) {

205:         if (borrowRate > borrowRateMax) {

230:         if (newPairBorrows > pairMaxBorrow(pairId)) {

238:         if (newGroupBorrows > groupMaxBorrow(groupId)) {

263:         if (amount > totalInterestOld) {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

266:         if (borrowNew > borrowOld) {

276:         } else if (borrowNew < borrowOld) {

306:         if (long) {

325:         if (leverage > pair.maxLeverage) {

327:         } else if (leverage < pair.minLeverage) {

329:         } else if (leveragedPosition > pair.maxPositionSize) {

334:         if (leverage > group.maxLeverage) {

336:         } else if (leverage < group.minLeverage) {

338:         } else if (leveragedPosition > group.maxPositionSize) {

366:         if (collateral <= pairMinPerformanceFee(pairIndex)) {

389:         if (potentialProfitPrecision > int256(maxGainPrecision)) {

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

218:         if (allPendingUpdateOrderIds.length > 1) {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

518:         if (runCapTests) {

530:         if (orderType == TradingEnumsV1.OpenOrderType.LIMIT) {

537:         } else if (orderType == TradingEnumsV1.OpenOrderType.MARKET) {

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

309:         if (numericParam == AdminNumericParam.MAX_TRADES_PER_PAIR) {

312:         } else if (numericParam == AdminNumericParam.MAX_SL_F) {

317:         } else if (numericParam == AdminNumericParam.MAX_SANITY_PROFIT_F) {

574:         } else {

614:         if (limitTrigger == LimitTrigger.SL) {

620:         } else if (limitTrigger == LimitTrigger.TP) {

626:         } else if (limitTrigger == LimitTrigger.LIQ) {

649:         if (positionCloseType == PositionCloseType.LIQ) {

693:         if (updateField == PositionField.TP) {

722:         } else if (updateField == PositionField.SL) {

793:         if (_orderType == OpenOrderType.MARKET) {

798:         } else if (_orderType == OpenOrderType.LIMIT) {

847:         if (_orderType == CloseOrderType.MARKET) {

902:         if (identifiers.index == 0) {

936:         if (_expectedPhase == PositionPhase.OPEN_MARKET) {

957:         } else if (_expectedPhase == PositionPhase.OPEN_LIMIT) {

1031:             if (bytes4(err) == LexErrors.CapError.selector) {

1049:             } else {

1073:         if (triggerPrices.tpByFraction > 0) {

1082:         if (triggerPrices.slByFraction > 0) {

1150:         if (_tradeValue > positionRegistrationParams.collateral) {

1285:         if (tradeValue >= tradeCollateral) {

1294:         else {

1306:             } else {

1341:         if (_amount > 0) {

1357:         if (amount > 0) {

1384:         if (amount > 0) {

1429:             if (p.length > 1) {

1442:         } else {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

860:             if (bytes4(err) == LexErrors.CapError.selector) {

884:             } else {

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

122:         if (0 > priceInfo.expo) {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

66:         if (x <= _kink) {

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

28:         if (sum == 0) {

```

</details> 
 


 ### <a name="NC-32"></a>[NC-32]
 ### Variable names for immutables should use CONSTANT_CASE

#### Impact:
Using CONSTANT_CASE for immutables improves code readability and maintainability.

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

44:     IERC20 public immutable underlyingToken;

46:     uint256 public immutable exchangeRate;

```

```solidity
File: Lynx/Common/CaptainBase.sol

9:     uint8 private immutable administrativeRole;

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

45:     IRegistryV1 public immutable registry;

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

54:     IRegistryV1 public immutable registry;

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

102:     IRegistryV1 public immutable registry;

```

```solidity
File: Lynx/Locks/SystemLocker.sol

11:     address private immutable globalLock;

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

39:     ITradingFloorV1 public immutable tradingFloor;

40:     IRegistryV1 public immutable registry;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

29:     ITradingFloorV1 public immutable tradingFloor;

30:     IOrderBookV1 public immutable orderBook;

```

</details> 
 


 ### <a name="NC-33"></a>[NC-33]
 ### Large multiples of ten should use scientific notation
Use a scientific notation rather than decimal literals (e.g. 1e6 instead of 1000000), for better code readability.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Common/CommonScales.sol

12:     uint256 public constant FRACTION_SCALE = 100000; // 5 decimal points

```

</details> 
 


 ### <a name="NC-34"></a>[NC-34]
 ### Consider using named mappings

#### Impact:
Using named mappings can improve code readability and maintainability.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Common/CaptainBase.sol

8:     mapping(uint8 => mapping(address => bool)) roles;

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

13:     mapping(address => uint256) internal _balances;

15:     mapping(address => mapping(address => uint256)) internal _allowances;

```

</details> 
 


 ### <a name="NC-35"></a>[NC-35]
 ### Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct

#### Impact:
Combining multiple mappings into a single mapping with a struct can improve readability and maintainability of the code.

*Instances (20)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/BaseChip.sol

25:     mapping(address => bool) public autoApproved;

```

```solidity
File: Lynx/Common/CaptainBase.sol

8:     mapping(uint8 => mapping(address => bool)) roles;

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

52:     mapping(address => uint256) public chipOutFeeForChip;

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

18:     mapping(address => uint256) public sourceChainIdForAsset;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

13:     mapping(address => mapping(uint8 => uint256)) public nonceMap;

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

13:     mapping(address => uint256) internal _balances;

15:     mapping(address => mapping(address => uint256)) internal _allowances;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

23:     mapping(uint256 => mapping(address => PendingDeposit))public pendingDeposits;

25:     mapping(uint256 => mapping(address => PendingRedeem)) public pendingRedeems;

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

20:     mapping(address => bool) public validSystemLockOwners;

34:     mapping(address => bool) public isTradingFloorSupported;

40:     mapping(address => address[]) public settlementAssetsForTradingFloor;

46:     mapping(address => address) public feesManagers;

67:     mapping(address => mapping(bytes32 => address)) public validSpenderTargetForChipByRole;

70:     mapping(address => address) public validBurnHandlerForChip;

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

32:     mapping(address => mapping(FeeType => uint)) public feesMap;

37:     mapping(address => address) public lexPoolForAsset;

39:     mapping(address => address) public poolAccountantForAsset;

61:     mapping(address => mapping(uint => address[])) public pairTraders;

63:     mapping(address => mapping(address => mapping(uint => PairTraderInfo)))

```

</details> 
 


 ### <a name="NC-36"></a>[NC-36]
 ### Use of override is unnecessary

#### Impact:
Starting with Solidity version [0.8.8](https://docs.soliditylang.org/en/v0.8.20/contracts.html#function-overriding), using the override keyword when the function solely overrides an interface function, and the function doesnt exist in multiple base contracts, is unnecessary.

*Instances (39)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

19:     function approvePendingImplementationInternal(address _implementation) internal view override returns(bool) {

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

260:     function allowance(address owner, address spender) public view virtual override returns (uint256) {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

135:     ) internal virtual override returns (uint256 amountReceivedLD) {

161:     ) internal virtual override returns (uint256 amountSentLD, uint256 amountReceivedLD) {

177:     function allowance(address owner, address spender) public view virtual override returns (uint256) {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

150:     ) internal virtual override returns (uint256 amountReceivedLD) {

184:     ) internal virtual override returns (uint256 amountSentLD, uint256 amountReceivedLD) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

365:         override

509:         override

715:     ) public override returns (int256 valueLong, int256 valueShort) {

780:     ) public view override returns (int256) {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

92:         override

108:         override

295:     function virtualBalance() internal view override returns (uint256) {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

91:         override

157:         override

247:     ) external override onlyTradingFloor {

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

101:         override

147:     override

188:         override

```

```solidity
File: Lynx/Registry/RegistryV1.sol

44:     function lock() external override {

51:     function freeLock() external override onlyLockOwner {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

208:     ) external payable override notContract notDoneOrPaused nonReentrant sentEnoughNativeFee(TradersPortalActions.REQUEST_POSITION_OPEN) returns (bytes32) {

224:     ) external payable override notContract notDoneOrPaused nonReentrant sentEnoughNativeFee(TradersPortalActions.REQUEST_POSITION_MARKET_CLOSE) {

240:     ) external payable override notContract notDoneOrPaused nonReentrant sentEnoughNativeFee(TradersPortalActions.REQUEST_POSITION_SINGLE_FIELD_UPDATE) {

257:     ) external payable override notContract notDoneOrPaused nonReentrant sentEnoughNativeFee(TradersPortalActions.REQUEST_POSITION_DOUBLE_FIELD_UPDATE) {

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

348:     ) external override onlyTradersPortal returns (bytes32 positionId) {

448:     ) external override onlyTradersPortal {

475:     ) external override onlyTradersPortal {

559:     ) external override onlyTriggers {

602:     ) external override onlyTriggers {

779:     ) external override onlyTradersPortalOrTriggers {

827:     ) external override onlyTradersPortalOrTriggers {

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

58:     ) external override payable {

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

93:     ) external payable override returns (ValidatedPrice memory validatedPrice) {

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

21:     ) external view override returns (uint256) {

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

18:     ) external view override returns (uint256) {

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

17:     ) external view override returns (uint256) {

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

14:     ) external view override returns (uint256) {

```

</details> 
 


 ### <a name="NC-37"></a>[NC-37]
 ### Consider using descriptive constants when using 0 in the code

#### Impact:
Passing zero as a function argument/Event emission can sometimes result in a security issue (e.g. passing zero as the slippage parameter). Consider using a constant variable with a descriptive name, so its clear that the 0 is intentionally being used, and for the right reasons.

*Instances (71)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

59:         pendingImplementation = address(0);

103:         pendingAdmin = address(0);

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

57:         pendingAdmin = address(0);

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

169:         require(_amount != 0, "AMOUNT_ZERO");

230:         require(chipAmount != 0, "AMOUNT_ZERO");

236:         require(underlyingAmount != 0, "UNDERLYING_AMOUNT_ZERO");

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

77:         require(chipSourceChain != 0, "NO_SOURCE_CHAIN_FOR_CHIP");

114:         require(evmId != 0, "NO_EVM_ID");

115:         require(lzEid != 0, "NO_LZ_EID");

116:         require(evmIdToLzEid[evmId] == 0, "ALREADY_SET");

140:         require(payload.amount > 0, "AMOUNT_ZERO");

152:         require(destChainId != 0, "NO_EID_FOR_CHAIN");

167:         MessagingFee memory messagingFee = MessagingFee({

183:         require(fee > 0, "NO_FEE_DEFINED");

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

111:         require(payload.amount > 0, "AMOUNT_ZERO");

131:         require(payload.amount > 0, "AMOUNT_ZERO");

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

54:         require(sourceChainIdForAsset[asset] == 0, "CHAIN_ID_FOR_ASSET_ALREADY_CONFIGURED");

56:         require(chainId != 0, "CHAIN_ID_ZERO");

88:         require(chainId != 0, "NO_CHAIN_ID_FOR_ASSET");

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

380:         require(pendingRedeems[epoch][user].amount == 0, "Redeem exists");

433:         require(pendingDeposits[epoch][user].amount == 0, "Exists deposit");

521:             return (false, false, 0);

632:             return (false, false, 0, 0);

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

107:         if (_oiLong == _oiShort) return (0, 0);

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

59:         require(_fee.id > 0, "WRONG_FEE_ID");

183:         require(_id != 0, "INVALID_ID");

214:         require(_id != 0, "INVALID_ID");

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

109:         require(

155:         require(

193:         require(order.timestamp > 0, "NO_SUCH_UPDATE_ORDER");

```

```solidity
File: Lynx/Registry/RegistryV1.sol

52:         systemLockOwner = address(0);

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

155:         require(value > 0, "CANNOT_BE_ZERO");

162:         require(value > 0, "CANNOT_BE_ZERO");

288:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

338:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

375:         require(updatePositionFieldOrder.timestamp > 0, "NO_SUCH_UPDATE_ORDER");

400:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

437:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

489:         require(positionRequestParams.tp == 0 || positionRequestParams.tpByFraction == 0, "MULTIPLE_TP_DEFINITIONS");

490:         require(positionRequestParams.sl == 0 || positionRequestParams.slByFraction == 0, "MULTIPLE_SL_DEFINITIONS");

572:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

607:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

643:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

693:         require(

702:         require(

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

249:         return lexPoolForAsset[settlementAsset] != address(0);

306:         require(value > 0, "CANNOT_BE_ZERO");

376:         require(

403:         require(position.collateral == 0, "ID_USED");

451:         require(position.collateral > 0, "NO_SUCH_POSITION");

563:         require(triggerPrices.maxPrice > 0, "NO_SUCH_POSITION");

604:         require(position.collateral > 0, "NO_SUCH_POSITION");

683:         require(p.collateral > 0, "NO_SUCH_POSITION");

788:         require(positionsById[_positionId].collateral > 0, "NO_SUCH_POSITION");

843:         require(positionsById[_positionId].collateral > 0, "NO_SUCH_POSITION");

859:         emit PositionMarketCloseCancelled(_positionId, source, 0);

928:         require(_position.collateral > 0, "NO_SUCH_POSITION");

1070:         require(positionLimits.tp == 0 || triggerPrices.tpByFraction == 0, "MULTIPLE_TP_DEFINITIONS");

1071:         require(positionLimits.sl == 0 || triggerPrices.slByFraction == 0, "MULTIPLE_SL_DEFINITIONS");

1134:         require(positionRegistrationParams.collateral > 0, "NO_SUCH_POSITION");

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

361:         require(timestamp > 0, "NO_PENDING_MARKET_ORDER");

420:         require(timestamp > 0, "NO_PENDING_LIMIT_ORDER");

479:         require(timestamp > 0, "NO_PENDING_MARKET_ORDER");

528:         require(pairId > 0, "NO_SUCH_POSITION");

529:         require(limitInfo.sl > 0, "NO_SL");

575:         require(pairId > 0, "NO_SUCH_POSITION");

576:         require(limitInfo.tp > 0, "NO_TP");

626:         require(pairId > 0, "NO_SUCH_POSITION");

846:             emit UpdatePositionSingleFieldRejected(

902:         require(timestamp > 0, "NO_SUCH_POSITION");

931:         require(timestamp > 0, "NO_SUCH_POSITION");

```

</details> 
 


 ### <a name="NC-38"></a>[NC-38]
 ### Non-external/public variable names should begin with an underscore

#### Impact:
Using an underscore at the beginning of non-external/public variable names can improve code clarity and maintainability. According to the Solidity Style Guide, non-external/public variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*Instances (155)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

8:     address public admin;

13:     address public pendingAdmin;

33:     address public implementation;

38:     address public pendingImplementation;

45:     address public registry;

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

12:     bytes32 immutable public CONTRACT_NAME_HASH;

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

17:     string public CONTRACT_DOMAIN_NAME;

18:     string public CONTRACT_DOMAIN_VERSION;

21:     mapping(uint256 => bytes32) public domainSeparatorForChain;

```

```solidity
File: Lynx/Chips/BaseChip.sol

19:     IRegistryV1 immutable public registry;

20:     ChipMode immutable public chipMode;

25:     mapping(address => bool) public autoApproved;

28:     mapping(bytes32 => address) public autoApprovedSpendersByRoles;

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

48:     IBurnHandlerV1 public burnHandler;

50:     bool public isMintingPaused;

52:     IPoolMintControllerV1 public mintController;

53:     IPoolBurnControllerV1 public burnController;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

30:     bool public isSendPaused;

32:     ILzCreditControllerV1 public creditController;

33:     ILzDebitControllerV1 public debitController;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

31:     bool public isSendPaused;

32:     bool public isUnderlyingRecoveryRenounced;

34:     ILzCreditControllerV1 public creditController;

35:     ILzDebitControllerV1 public debitController;

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

49:     address public feesReceiver;

52:     mapping(address => uint256) public chipOutFeeForChip;

55:     mapping(uint16 => uint16) public evmIdToLzEid;

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

18:     mapping(address => uint256) public sourceChainIdForAsset;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

13:     mapping(address => mapping(uint8 => uint256)) public nonceMap;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

13:     mapping(bytes32 => mapping(uint8 => uint256)) public nonceMap;

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

107:     mapping(bytes32 => bytes32) public domainSeparatorsForPosition;

109:     mapping(bytes32 => address) public tradersForPosition;

```

```solidity
File: Lynx/Lex/LexCommon.sol

16:     IERC20 public underlying;

18:     ITradingFloorV1 public tradingFloor;

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

17:     uint256 public totalSupply;

19:     string public name;

20:     string public symbol;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

13:     uint256 public underlyingDecimals;

17:     IPoolAccountantFunctionality public poolAccountant;

18:     address public pnlRole;

23:     mapping(uint256 => mapping(address => PendingDeposit))public pendingDeposits;

25:     mapping(uint256 => mapping(address => PendingRedeem)) public pendingRedeems;

28:     mapping(uint256 => address[]) public pendingDepositorsArr;

30:     mapping(uint256 => address[]) public pendingRedeemersArr;

32:     uint256 public pendingDepositAmount;

33:     uint256 public pendingWithdrawalAmount;

35:     uint256 public maxExtraWithdrawalAmountF;

36:     uint256 public minDepositAmount;

40:     uint256 public currentEpoch;

41:     uint256 public nextEpochStartMin; // Minimum timestamp that calling nextEpoch will be possible

42:     uint256 public currentExchangeRate;

43:     uint256 public epochsDelayDeposit;

44:     uint256 public epochsDelayRedeem;

45:     uint256 public epochDuration;

49:     bool public immediateDepositAllowed;

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

20:     ILexPoolV1 public pool;

21:     IPoolAccountantFunctionality public accountant;

22:     IPriceValidatorV1 public priceValidator;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

18:     address public tradeIncentivizer;

19:     uint256 public maxGainF; // 900% PnL (10x)

25:     IFundingRateModel public frm;

26:     uint256 public fundingRateMax;

28:     uint256 public liquidationThresholdF; // -90% (of collateral)

29:     uint256 public liquidationFeeF; // 5% (of collateral after fees)

30:     uint256 public lexPartF; // FRACTION_SCALE

32:     mapping(uint256 => int256) public pairTotalRatioOiToP;

34:     int256 public realizedFundingSurplusDeficit;

37:     mapping(uint256 => PairFunding) public pairFunding;

40:     mapping(bytes32 => TradeInitialAccFees) public tradeInitialAccFees;

43:     mapping(bytes32 => uint256) public tradeAccInterest; // Accrued interest for a specific trade and not yet paid

46:     mapping(uint256 => PairOpenInterest) public openInterestInPair;

48:     uint256 public minOpenFee; // Underlying decimals - this is the default value if not set on the pair nor the group level

54:     IInterestRateModel public irm;

56:     uint256 public totalBorrows;

57:     uint256 public borrowIndex;

58:     uint256 public accrualBlockTimestamp;

59:     uint256 public totalInterest;

61:     uint256 public interestShare;

63:     mapping(uint256 => uint256) public pairBorrows;

64:     mapping(uint256 => uint256) public groupBorrows;

66:     uint256 public interestShareFactor; // FRACTION_SCALE

67:     uint256 public borrowRateMax;

69:     uint256 public maxTotalBorrows;

71:     uint256 public maxVirtualUtilization; // Percentage mantissa (85%) (PRECISION SCALE)

80:     uint256 public pairsCount;

81:     uint256 public groupsCount;

82:     uint256 public feesCount;

84:     mapping(uint16 => Pair) public pairs;

85:     mapping(uint16 => Group) public groups;

86:     mapping(uint16 => Fee) public fees;

88:     uint16[] public supportedPairIds;

89:     uint16[] public supportedGroupIds;

90:     uint16[] public supportedFeeIds;

92:     mapping(uint256 => int256) public tradersPairGains; // Gains and losses in pair (traders accumulated gains and losses)

98:     ILexPoolV1 public lexPool;

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

19:     address public tradingFloor;

24:     mapping(bytes32 => uint) public updateOrderIdPositionInList;

26:     bytes32[] public allPendingUpdateOrderIds;

30:         public pendingUpdateTradeFieldOrdersById;

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

17:     address public systemLockOwner;

20:     mapping(address => bool) public validSystemLockOwners;

25:     mapping(bytes32 => uint256) public latestVersions;

28:     mapping(uint256 => mapping(bytes32 => address)) public implementations;

34:     mapping(address => bool) public isTradingFloorSupported;

37:     address[] public supportedTradingFloors;

40:     mapping(address => address[]) public settlementAssetsForTradingFloor;

46:     mapping(address => address) public feesManagers;

49:     mapping(bytes32 => address) public dynamicRoleAddresses;

51:     address public orderBook;

53:     address public tradersPortal;

55:     address public triggers;

57:     address public tradeIntentsVerifier;

59:     address public liquidityIntentsVerifier;

61:     address public chipsIntentsVerifier;

67:     mapping(address => mapping(bytes32 => address)) public validSpenderTargetForChipByRole;

70:     mapping(address => address) public validBurnHandlerForChip;

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

44:     uint public limitOrdersTimelock; // seconds (eg. 30)

45:     uint public marketOrdersTimeout; // seconds (eg. 30)

47:     mapping(TradersPortalActions => uint256) public actionFees;

51:     bool public isPaused; // Prevent opening new trades

52:     bool public isDone; // Prevent any interaction with the contract

56:     bool public isLimitingMarketClosePriceRange;

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

19:     uint public maxTradesPerPair;

21:     uint public maxSlF; // FRACTION_SCALE (5)

23:     uint public maxSanityProfitF; // FRACTION_SCALE (5)

27:     mapping(uint => bool) public pausedPairs;

32:     mapping(address => mapping(FeeType => uint)) public feesMap;

37:     mapping(address => address) public lexPoolForAsset;

39:     mapping(address => address) public poolAccountantForAsset;

44:     mapping(bytes32 => PositionIdentifiers) public positionIdentifiersById;

49:     mapping(bytes32 => Position) public positionsById;

52:     mapping(bytes32 => PositionLimitsInfo) public positionLimitsInfoById;

55:     mapping(bytes32 => PositionTriggerPrices) public triggerPricesById;

58:     mapping(bytes32 => uint) public initialCollateralByPositionId;

61:     mapping(address => mapping(uint => address[])) public pairTraders;

64:         public pairTradersInfo;

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

11:     uint immutable public MAX_ALLOWED_CONFIDENCE_FRACTION;

15:     mapping(uint => uint32) public maxConfidenceFractionForPair; // FRACTION_SCALE (5)

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

13:     uint immutable public MAX_ALLOWED_SPREAD_FRACTION; // FRACTION_SCALE (5)

17:     mapping(uint => uint32) public spreadFractionForPair; // FRACTION_SCALE (5)

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

15:     EnumerableSet.AddressSet private triggerPermissionSet;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

31:     IPriceValidatorV1 public priceValidator;

55:     mapping(uint => uint) public triggersPerBlock;

59:     bool public isPaused; // Prevent opening new trades

60:     bool public isDone; // Prevent any interaction with the contract

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

21:     IWrappedNative immutable public wrappedNativeToken;

22:     EngineChip immutable public wrappedNativeEngineChip;

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

19:     IPyth public pythContract;

21:     mapping(uint256 => bytes32) public priceFeedIdsForPairs; // pair id to PairInfo struct

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

16:     uint256 public baseRate;

21:     uint256 public multiplier;

26:     uint256 public kink;

31:     uint256 public postKinkMultiplier;

37:     uint256 public rateOnKink;

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

7:     uint public defaultRate;

```

</details> 
 


 ### <a name="NC-39"></a>[NC-39]
 ### Return values of `approve()` not checked
Not all IERC20 implementations `revert()` when there's a failure in `approve()`. The function signature has a boolean return value and they indicate errors that way instead. By not checking the return value, operations that should have marked as failed, may potentially go through without actually approving anything

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

55:         _approve(msg.sender, spender, amount);

72:             _approve(sender, msg.sender, currentAllowance - amount);

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

87:         IERC20(address(wrappedNativeToken)).approve(address(wrappedNativeEngineChip), 0);

88:         IERC20(address(wrappedNativeToken)).approve(address(wrappedNativeEngineChip), amount);

```

</details> 
 


 ### <a name="NC-40"></a>[NC-40]
 ### Setters should prevent re-setting of the same value
This especially problematic when the setter also emits the same value, which may be confusing to offline parsers  

*Instances (91)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

33:     function _setPendingImplementation(address newPendingImplementation) public {

73:     function _setPendingAdmin(address newPendingAdmin) public {

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

27:     function _setPendingAdmin(address newPendingAdmin) public {

```

```solidity
File: Lynx/Chips/BaseChip.sol

48:     function setAutoApprovedSpenderForRoleInternal(string calldata role, address spender) internal {

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

73:     function setAutoApprovedSpenderForRole(string calldata role, address spender) external onlyAdmin {

81:     function setBurnHandler(IBurnHandlerV1 _handler) external onlyAdmin {

96:     function setIsMintingPaused(bool _value) external onlyAdmin {

107:     function setMintController(IPoolMintControllerV1 _mintController) external onlyAdmin {

124:     function setBurnController(IPoolBurnControllerV1 _burnController) external onlyAdmin {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

55:     function setAutoApprovedSpenderForRole(string calldata role, address spender) external onlyOwner {

63:     function setIsSendPaused(bool _isPaused) external onlyOwner {

77:     function setCreditController(ILzCreditControllerV1 _creditController) external onlyOwner {

94:     function setDebitController(ILzDebitControllerV1 _debitController) external onlyOwner {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

52:     function setIsSendPaused(bool _isPaused) external onlyOwner {

66:     function setCreditController(ILzCreditControllerV1 _creditController) external onlyOwner {

83:     function setDebitController(ILzDebitControllerV1 _debitController) external onlyOwner {

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

105:     function setChipOutFee(address chip, uint256 fee) external onlyAdmin {

113:     function setLzEndpointId(uint16 evmId, uint16 lzEid) external onlyAdmin {

123:     function setFeesReceiver(address receiver) external onlyAdmin {

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

29:     function domainSeparatorForAsset(address asset) public view returns (bytes32) {

40:     function storeSourceChainForAsset(address asset, uint256 chainId) virtual external onlyAdmin {

52:     function storeSourceChainForAssetInternal(address asset, uint256 chainId) internal {

74:     function getDomainSeparatorForAssetInternal(address _asset) internal view returns (bytes32) {

86:     function getDomainSeparatorAndChainForAssetInternal(address _asset) internal view returns (bytes32, uint256) {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

241:     function setPnlRole(address pnl) external onlyAdmin {

248:     function setMaxExtraWithdrawalAmountF(uint256 maxExtra) external onlyAdmin {

256:     function setEpochsDelayDeposit(uint256 delay) external onlyAdmin {

261:     function setEpochsDelayRedeem(uint256 delay) external onlyAdmin {

266:     function setEpochDuration(uint256 duration) external onlyAdmin {

271:     function setMinDepositAmount(uint256 amount) external onlyAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

13:     function setFrm(IFundingRateModel _frm) external onlyAdmin {

18:     function setMinOpenFee(uint256 min) external onlyAdmin {

23:     function setLexPartF(uint256 partF) external onlyAdmin {

28:     function setFundingRateMax(uint256 maxValue) external onlyAdmin {

36:     function setLiquidationThresholdF(uint256 threshold) external onlyAdmin {

45:     function setLiquidationFeeF(uint256 fee) external onlyAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

170:     function resetTradersPairGains(uint256 pairId) external onlyAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

16:     function setIrm(IInterestRateModel _irm) external onlyAdmin {

25:     function setIrmHard(IInterestRateModel _irm) external onlyAdmin {

30:     function setInterestShareFactor(uint256 factor) external onlyAdmin {

39:     function setBorrowRateMax(uint256 rate) external onlyAdmin {

44:     function setMaxTotalBorrows(uint256 maxBorrows) external onlyAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

49:     function setMaxGainF(uint256 _maxGainF) external onlyAdmin {

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

78:     function setTradingFloor(address _tradingFloor) external onlyAdmin {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

104:     function getSettlementAssetsForTradingFloor(address _tradingFloor) external view returns (address[] memory) {

129:     function setDynamicRoleAddress(string calldata _role, address _address) external onlyAdmin {

138:     function setOrderBook(address _orderBook) external onlyAdmin {

150:     function setTradersPortal(address _tradersPortal) external onlyAdmin {

162:     function setTriggers(address _triggers) external onlyAdmin {

170:     function setTradeIntentsVerifier(address _tradeIntentsVerifier) external onlyAdmin {

178:     function setLiquidityIntentsVerifier(address _liquidityIntentsVerifier) external onlyAdmin {

186:     function setChipsIntentsVerifier(address _chipsIntentsVerifier) external onlyAdmin {

194:     function setFeesManager(address asset, address feesManager) external onlyAdmin {

203:     function setValidChipSpenderTargetByRole(address chip, string calldata role, address spender) external onlyAdmin {

210:     function setValidChipBurnHandler(address chip, address burnHandler) external onlyAdmin {

338:     function setValidChipSpenderByRoleInternal(address chip, string memory role, address spender) internal {

352:     function setValidChipBurnHandlerInternal(address chip, address burnHandler) internal {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

154:     function setLimitOrdersTimelock(uint value) external onlyAdmin {

161:     function setMarketOrdersTimeout(uint value) external onlyAdmin {

176:     function setNativeFeeForAction(TradersPortalActions action, uint256 requiredFee) external onlyAdmin {

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

332:     function setPairPaused(uint _pairId, bool _isPaused) external onlyAdmin {

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

29:     function setMaxConfidenceForPairInternal(uint _pairId, uint32 _maxConfidenceFractionForPair) internal {

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

31:     function setSpreadFractionForPairInternal(uint _pairId, uint32 _spreadF) internal {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

216:     function setPriceValidator(address _priceValidator) external onlyAdmin {

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

83:     function setPnlRole(address pnl) external;

85:     function setMaxExtraWithdrawalAmountF(uint256 maxExtra) external;

87:     function setEpochsDelayDeposit(uint256 delay) external;

89:     function setEpochsDelayRedeem(uint256 delay) external;

91:     function setEpochDuration(uint256 duration) external;

93:     function setMinDepositAmount(uint256 amount) external;

175:     function sendAssetToTrader(address to, uint256 amount) external;

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

157:     function setTradeIncentivizer(address _tradeIncentivizer) external;

159:     function setMaxGainF(uint256 _maxGainF) external;

161:     function setFrm(IFundingRateModel _frm) external;

163:     function setMinOpenFee(uint256 min) external;

165:     function setLexPartF(uint256 partF) external;

167:     function setFundingRateMax(uint256 maxValue) external;

169:     function setLiquidationThresholdF(uint256 threshold) external;

171:     function setLiquidationFeeF(uint256 fee) external;

173:     function setIrm(IInterestRateModel _irm) external;

175:     function setIrmHard(IInterestRateModel _irm) external;

177:     function setInterestShareFactor(uint256 factor) external;

179:     function setBorrowRateMax(uint256 rate) external;

181:     function setMaxTotalBorrows(uint256 maxBorrows) external;

183:     function setMaxVirtualUtilization(uint256 _maxVirtualUtilization) external;

185:     function resetTradersPairGains(uint256 pairId) external;

```

```solidity
File: Lynx/interfaces/ITradingFloorV1.sol

129:     function lexPoolForAsset(address asset) external view returns (ILexPoolV1);

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

86:     function setAllowanceForChipInternal(uint256 amount) internal {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

45:     function setRateParamsInternal(uint256 _baseRate, uint256 _multiplier, uint256 _kink, uint256 _postKinkMultiplier) internal {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

15:     function setRateParams(uint256 _baseRate, uint256 _multiplier, uint256 _kink, uint256 _postKinkMultiplier) external onlyOwner {

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

15:     function setDefaultSteadyRate(uint _newDefaultRate) external onlyOwner {

```

</details> 
 


 ### <a name="NC-41"></a>[NC-41]
 ### Use the latest solidity version for deployment  
Upgrading to a newer Solidity release can optimize gas usage, take advantage of new features and improve overall contract efficiency. Where possible, based on compatibility requirements, it is recommended to use newer/latest solidity version to take advantage of the latest optimizations and features. You can see the latest version [here](https://soliditylang.org/blog/category/releases/)

*Instances (84)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/IContractRegistryBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/BaseChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Common/CaptainBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Common/CommonScales.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexCaptain.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexCommon.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Locks/SystemLocker.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ChipEnumsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IAffiliationV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IBurnHandlerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IGlobalLock.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILzCreditControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILzDebitControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IOrderBookV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolBurnControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolMintControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPriceValidatorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IRateModelV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IRegistryV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradeIncentivizerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradersPortalV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradingFloorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IWrappedNative.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/LexErrors.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/LexPoolAdminEnums.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/OrderBookStructsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/PoolAccountantV1AdminEnums.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/TradingEnumsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/TradingFloorStructsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

</details> 
 


 ### <a name="NC-42"></a>[NC-42]
 ### Consider bounding input array length
The functions below take in an unbounded array, and make function calls for entries in the array. While the function will revert if it eventually runs out of gas, it may be a nicer user experience to require() that the length of the array is below some reasonable maximum, so that the user doesnt have to use up a full transactions gas only to see that the transaction reverts

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

489:         for (uint8 index = 0; index < users.length; index++) {

555:         for (uint8 index = 0; index < users.length; index++) {

590:         for (uint8 index = 0; index < users.length; index++) {

672:         for (uint8 index = 0; index < users.length; index++) {

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

78:         for (uint256 index = 0; index < pairPrices.length; index++) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

251:         for (uint256 i = 0; i < _pairs.length; i++) {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

231:         for (uint256 i = 0; i < contractNameHashes.length; i++) {

```

</details> 
 


 ### <a name="NC-43"></a>[NC-43]
 ### Overflows in unchecked blocks
While integers with a large number of bits are unlikely to overflow on human time scales, it is not strictly correct to use an unchecked block around them, because eventually they will overflow, and unchecked blocks are meant for cases where it is mathematically impossible for an operation to trigger an overflow (e.g. a prior require() statement prevents the overflow case)

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

71:         unchecked {

91:         unchecked {

112:         unchecked {

```

</details> 
 


 ### <a name="NC-44"></a>[NC-44]
 ### Constants should be defined rather than using magic numbers

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

71:     uint256 public maxVirtualUtilization; // Percentage mantissa (85%) (PRECISION SCALE)

```

</details> 
 


 ### <a name="NC-45"></a>[NC-45]
 ### Variables need not be initialized to zero
The default value for variables is zero, so initializing them to zero is superfluous.  

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

489:         for (uint8 index = 0; index < users.length; index++) {

555:         for (uint8 index = 0; index < users.length; index++) {

588:         uint256 underlyingFreeAllocatedAmount = 0;

590:         for (uint8 index = 0; index < users.length; index++) {

672:         for (uint8 index = 0; index < users.length; index++) {

707:         uint256 virtualUnderlyingBalance = 0;

773:         for (uint256 index = 0; index < count; index++) {

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

78:         for (uint256 index = 0; index < pairPrices.length; index++) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

117:         uint256 valueLargePay = 0;

118:         uint256 valueSmallReceive = 0;

299:         uint256 performanceFee = 0;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

251:         for (uint256 i = 0; i < _pairs.length; i++) {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

71:         interestShare = 0;

```

```solidity
File: Lynx/Registry/RegistryV1.sol

231:         for (uint256 i = 0; i < contractNameHashes.length; i++) {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

350:         uint noFee = 0;

411:         uint noFee = 0;

449:         uint noFee = 0;

525:         uint32 spreadReductionF = 0;

```

</details> 
 


 ### <a name="NC-46"></a>[NC-46]
 ### Import Whole Files Instead of Specific Identifiers
Import declarations should import specific identifiers, rather than the whole file.

*Instances (175)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

4: import "./AcceptableImplementationClaimableAdminStorage.sol";

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

4: import "./AcceptableImplementationClaimableAdmin.sol";

5: import "./IContractRegistryBase.sol";

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

4: import "./AcceptableImplementationClaimableAdminStorage.sol";

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

4: import "./EIP712Utils.sol";

```

```solidity
File: Lynx/Chips/BaseChip.sol

5: import "../interfaces/IRegistryV1.sol";

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

4: import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

5: import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

6: import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

8: import "../../interfaces/IPoolMintControllerV1.sol";

9: import "../../interfaces/IPoolBurnControllerV1.sol";

10: import "../../interfaces/IBurnHandlerV1.sol";

12: import "../../../AdministrationContracts/ClaimableAdmin.sol";

14: import "../BaseChip.sol";

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

4: import "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/OFT.sol";

7: import "../../interfaces/IRegistryV1.sol";

8: import "../../interfaces/ILzCreditControllerV1.sol";

9: import "../../interfaces/ILzDebitControllerV1.sol";

11: import "../BaseChip.sol";

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

4: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

7: import "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/OFTAdapter.sol";

9: import "../../interfaces/ILzCreditControllerV1.sol";

10: import "../../interfaces/ILzDebitControllerV1.sol";

```

```solidity
File: Lynx/Common/CaptainBase.sol

4: import "@openzeppelin/contracts/access/Ownable2Step.sol";

5: import "../../AdministrationContracts/AcceptableImplementationClaimableAdmin.sol";

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

4: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

5: import "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/OFT.sol";

6: import "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/OFTCore.sol";

8: import "../interfaces/IRegistryV1.sol";

10: import "./NonceMechanisms/AccountAndActionSerialNonceBase.sol";

11: import "./MultiSourceChainIntentsVerifierBase.sol";

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

4: import "../interfaces/IRegistryV1.sol";

5: import "../interfaces/ILexPoolV1.sol";

7: import "./NonceMechanisms/AccountAndActionSerialNonceBase.sol";

8: import "./MultiSourceChainIntentsVerifierBase.sol";

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

4: import "../../AdministrationContracts/ClaimableAdmin.sol";

5: import "../../CryptographyContracts/MultiChainEIP712Base.sol";

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

4: import "../interfaces/IRegistryV1.sol";

5: import "../interfaces/ITradingFloorV1.sol";

6: import "../interfaces/IOrderBookV1.sol";

7: import "../interfaces/ITradersPortalV1.sol";

9: import "./NonceMechanisms/HashAndActionSerialNonceBase.sol";

10: import "./MultiSourceChainIntentsVerifierBase.sol";

```

```solidity
File: Lynx/Lex/LexCaptain.sol

4: import "../interfaces/ILexPoolV1.sol";

5: import "../interfaces/IPoolAccountantV1.sol";

6: import "../Common/CaptainBase.sol";

```

```solidity
File: Lynx/Lex/LexCommon.sol

4: import "../../AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol";

5: import "../interfaces/ITradingFloorV1.sol";

6: import "../Common/CommonScales.sol";

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

4: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

4: import "../../../AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol";

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

4: import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

5: import "../LexCommon.sol";

6: import "./LexERC20.sol";

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

4: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

5: import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

6: import "@openzeppelin/contracts/utils/math/SafeCast.sol";

8: import "../../interfaces/ILexPoolV1.sol";

9: import "../../interfaces/IPoolAccountantV1.sol";

10: import "../../interfaces/IRegistryV1.sol";

11: import "../LexCommon.sol";

12: import "./LexPoolStorage.sol";

13: import "./LexPoolProxy.sol";

14: import "../../interfaces/IAffiliationV1.sol";

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

4: import "../../interfaces/ILexPoolV1.sol";

5: import "../../interfaces/IPoolAccountantV1.sol";

6: import "../../interfaces/IPriceValidatorV1.sol";

7: import "../../Triggers/TriggersPermissionBase.sol";

8: import "../../../AdministrationContracts/ClaimableAdmin.sol";

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

4: import "./Debts.sol";

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

4: import "./PoolAccountantBase.sol";

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

4: import "./AccountantPairGroups.sol";

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

4: import "./PoolAccountantStorage.sol";

5: import "../../interfaces/PoolAccountantV1AdminEnums.sol";

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

4: import "../../../AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol";

5: import "../LexPool/LexPoolStorage.sol";

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

4: import "../../interfaces/ITradeIncentivizerV1.sol";

5: import "../../interfaces/IPoolAccountantV1.sol";

6: import "../LexCommon.sol";

7: import "../../interfaces/IInterestRateModel.sol";

8: import "../../interfaces/IFundingRateModel.sol";

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

4: import "./AccountantFees.sol";

5: import "./PoolAccountantStorage.sol";

6: import "./PoolAccountantProxy.sol";

```

```solidity
File: Lynx/Locks/SystemLocker.sol

4: import "../interfaces/IGlobalLock.sol";

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

4: import "../../AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol";

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

4: import "../../AdministrationContracts/AcceptableImplementationClaimableAdmin.sol";

5: import "../interfaces/OrderBookStructsV1.sol";

6: import "../Common/CommonScales.sol";

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

4: import "../interfaces/IOrderBookV1.sol";

5: import "../interfaces/IRegistryV1.sol";

6: import "../interfaces/ITradingFloorV1.sol";

7: import "./OrderBookStorage.sol";

8: import "./OrderBookProxy.sol";

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

4: import "../../AdministrationContracts/AcceptableImplementationClaimableAdmin.sol";

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

4: import "../../AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol";

```

```solidity
File: Lynx/Registry/RegistryV1.sol

4: import "../interfaces/IRegistryV1.sol";

5: import "../interfaces/ITradingFloorV1.sol";

6: import "../interfaces/ChipEnumsV1.sol";

8: import "./RegistryStorage.sol";

9: import "./RegistryProxy.sol";

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

4: import "../interfaces/IRegistryV1.sol";

5: import "../interfaces/TradingFloorStructsV1.sol";

6: import "../interfaces/OrderBookStructsV1.sol";

7: import "../interfaces/IAffiliationV1.sol";

8: import "../interfaces/ITradersPortalV1.sol";

10: import "../IntentsVerifier/TradeIntentsVerifierV1.sol";

12: import "../Locks/SystemLocker.sol";

14: import "../../AdministrationContracts/ClaimableAdmin.sol";

16: import "../../Lynx/Triggers/TriggersV1.sol";

17: import "../../CryptographyContracts/EIP712Utils.sol";

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

4: import "../../AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol";

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

4: import "../../AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol";

5: import "../interfaces/ITradingFloorV1.sol";

6: import "../Common/CommonScales.sol";

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

4: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

5: import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

7: import "../interfaces/ITradingFloorV1.sol";

8: import "../interfaces/IRegistryV1.sol";

9: import "../interfaces/ILexPoolV1.sol";

10: import "../interfaces/IPoolAccountantV1.sol";

12: import "./TradingFloorStorage.sol";

13: import "./TradingFloorProxy.sol";

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

4: import "../Common/CommonScales.sol";

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

4: import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

4: import "../interfaces/IRegistryV1.sol";

5: import "../interfaces/ITradingFloorV1.sol";

6: import "../interfaces/IPriceValidatorV1.sol";

7: import "../interfaces/IOrderBookV1.sol";

9: import "../../AdministrationContracts/ClaimableAdmin.sol";

11: import "./TriggersPermissionBase.sol";

12: import "./ConfidenceChecker.sol";

13: import "./PriceAdjustmentBase.sol";

14: import "../Locks/SystemLocker.sol";

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

4: import "./LexErrors.sol";

5: import "./LexPoolAdminEnums.sol";

6: import "./IPoolAccountantV1.sol";

7: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

```

```solidity
File: Lynx/interfaces/IOrderBookV1.sol

5: import "./OrderBookStructsV1.sol";

6: import "./TradingFloorStructsV1.sol";

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

4: import "./LexErrors.sol";

5: import "./ILexPoolV1.sol";

6: import "./IInterestRateModel.sol";

7: import "./IFundingRateModel.sol";

8: import "./TradingEnumsV1.sol";

```

```solidity
File: Lynx/interfaces/IRegistryV1.sol

4: import "../../AdministrationContracts/IContractRegistryBase.sol";

5: import "./IGlobalLock.sol";

```

```solidity
File: Lynx/interfaces/ITradersPortalV1.sol

4: import "./ITradingFloorV1.sol";

5: import "./IOrderBookV1.sol";

```

```solidity
File: Lynx/interfaces/ITradingFloorV1.sol

4: import "./TradingFloorStructsV1.sol";

5: import "./IPoolAccountantV1.sol";

6: import "./ILexPoolV1.sol";

```

```solidity
File: Lynx/interfaces/OrderBookStructsV1.sol

5: import "./TradingFloorStructsV1.sol";

```

```solidity
File: Lynx/interfaces/TradingFloorStructsV1.sol

4: import "./TradingEnumsV1.sol";

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

4: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

5: import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

7: import "../../Lynx/interfaces/IWrappedNative.sol";

8: import "../../Lynx/interfaces/ChipEnumsV1.sol";

9: import "../../Lynx/interfaces/IBurnHandlerV1.sol";

10: import "../../Lynx/Chips/EngineChip/EngineChip.sol";

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

4: import "@openzeppelin/contracts/utils/math/SafeCast.sol";

6: import "./IPyth.sol";

7: import "../../AdministrationContracts/ClaimableAdmin.sol";

8: import "../../Lynx/interfaces/IPriceValidatorV1.sol";

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

4: import "@openzeppelin/contracts/access/Ownable.sol";

5: import "./BaseSingleKinkRateModel.sol";

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

4: import "@openzeppelin/contracts/access/Ownable.sol";

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

4: import "../../../Lynx/interfaces/IFundingRateModel.sol";

5: import "../BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol";

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

4: import "../../../Lynx/interfaces/IFundingRateModel.sol";

5: import "../BaseModels/SteadyRateModel/SteadyRateModel.sol";

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

4: import "../../../Lynx/interfaces/IInterestRateModel.sol";

5: import "../BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol";

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

4: import "../../../Lynx/interfaces/IInterestRateModel.sol";

5: import "../BaseModels/SteadyRateModel/SteadyRateModel.sol";

```

</details> 
 


 ### <a name="NC-47"></a>[NC-47]
 ### Consider moving msg.sender checks to modifiers
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.  

*Instances (82)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

35:         require(msg.sender == admin, "not admin");

51:         require(msg.sender == pendingImplementation && pendingImplementation != address(0), "Not the EXISTING pending implementation");

75:         require(msg.sender == admin, "Not Admin");

93:         require(msg.sender == pendingAdmin && pendingAdmin != address(0), "Not the EXISTING pending admin");

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

17:     modifier onlyAdmin() { require(msg.sender == admin, "ONLY_ADMIN"); _; }

23:         admin = msg.sender;

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

29:         require(msg.sender == admin, "Not Admin");

47:         require(msg.sender == pendingAdmin && pendingAdmin != address(0), "Not the EXISTING pending admin");

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

171:         address minter = msg.sender;

196:         address burner = msg.sender;

212:         address burner = msg.sender;

```

```solidity
File: Lynx/Common/CaptainBase.sol

16:         require(roles[role][msg.sender], "!Allowed");

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

172:         address refundAddress = msg.sender;

177:         emit ChipsIntentVerified(msg.sender, payload.chip, payload.holder, ChipsIntentsVerifierActions.CHIP_OUT_LZ, amountAfterFeeWithoutDust, fee);

235:         return msg.sender;

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

101:         return msg.sender;

123:         emit LiquidityIntentVerified(msg.sender, payload.pool, payload.liquidityProvider, LiquidityIntentsVerifierActions.REQUEST_EPOCH_DEPOSIT, payload.nonce);

143:         emit LiquidityIntentVerified(msg.sender, payload.pool, payload.liquidityProvider, LiquidityIntentsVerifierActions.REQUEST_EPOCH_REDEEM, payload.nonce);

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

250:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.REQUEST_POSITION_OPEN, positionId, payload.nonce);

270:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.REQUEST_POSITION_MARKET_CLOSE, payload.positionId, payload.nonce);

295:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.REQUEST_POSITION_SINGLE_FIELD_UPDATE, payload.positionId, payload.nonce);

324:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.REQUEST_POSITION_DOUBLE_FIELD_UPDATE, payload.positionId, payload.nonce);

350:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.DIRECT_UPDATE_PENDING_LIMIT_POSITION, payload.positionId, payload.nonce);

374:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.DIRECT_CANCEL_PENDING_LIMIT_POSITION, payload.positionId, payload.nonce);

402:         return msg.sender;

```

```solidity
File: Lynx/Lex/LexCaptain.sol

25:     constructor() BaseCaptain(msg.sender, uint8(LexRole.ADMINISTRATIVE)) {}

```

```solidity
File: Lynx/Lex/LexCommon.sol

34:         require(msg.sender == address(tradingFloor), "TRADING_FLOOR_ONLY");

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

43:         _transfer(msg.sender, recipient, amount);

55:         _approve(msg.sender, spender, amount);

66:         uint256 currentAllowance = _allowances[sender][msg.sender];

72:             _approve(sender, msg.sender, currentAllowance - amount);

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

33:         require(msg.sender == IRegistryV1(registry).liquidityIntentsVerifier(), "!LiquidityIntentsVerifier");

205:         require(msg.sender == proxy.admin(), "!proxy.admin");

289:             msg.sender ==

317:         address user = msg.sender;

348:         address user = msg.sender;

408:         address user = msg.sender;

696:         require(msg.sender == pnlRole, "!Auth");

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

16:         require(msg.sender == address(lexPool), "!Auth");

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

66:         require(msg.sender == address(lexPool), "!Pool");

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

32:         require(msg.sender == tradingFloor, "!TradingFloor");

38:             msg.sender == IRegistryV1(registry).tradersPortal(),

46:             msg.sender == IRegistryV1(registry).tradersPortal() ||

47:                 msg.sender == IRegistryV1(registry).triggers(),

67:             msg.sender == orderBookProxy.admin(),

```

```solidity
File: Lynx/Registry/RegistryV1.sol

33:         require(msg.sender == registryProxy.admin(), "!proxy.admin");

40:         require(msg.sender == systemLockOwner, "!LockOwner");

45:         require(validSystemLockOwners[msg.sender], "!ValidLocker");

47:         systemLockOwner = msg.sender;

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

84:         require(tx.origin == msg.sender || msg.sender == registry.tradeIntentsVerifier(), "NOT_CONTRACT");

84:         require(tx.origin == msg.sender || msg.sender == registry.tradeIntentsVerifier(), "NOT_CONTRACT");

98:         require(msg.sender == IRegistryV1(tradingFloor.registry()).feesManagers(NATIVE_UNDERLYING_ADDRESS), "NOT_FEES_MANAGER");

103:         require(msg.sender == IRegistryV1(tradingFloor.registry()).feesManagers(NATIVE_UNDERLYING_ADDRESS), "NOT_TRADER_INTENT_VERIFIER");

730:         return msg.sender;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

141:             IRegistryV1(registry).isTradersPortalAndLocker(msg.sender),

148:             IRegistryV1(registry).isTriggersAndLocker(msg.sender),

155:             IRegistryV1(registry).isTradersPortalOrTriggersAndLocker(msg.sender),

268:         require(msg.sender == tradingFloorProxy.admin(), "!proxy.admin");

283:         require(msg.sender == registry, "!Registry");

815:             msg.sender

829:             msg.sender,

873:         require(msg.sender == IRegistryV1(registry).feesManagers(_asset), "!FeesManager");

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

20:         require(isAllowedToTrigger(msg.sender), "NOT_ALLOWED_TO_TRIGGER");

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

399:             msg.sender,

457:             msg.sender,

511:             msg.sender,

558:             msg.sender,

611:             msg.sender,

647:             msg.sender,

692:             msg.sender,

735:             msg.sender,

779:             msg.sender,

789:             msg.sender,

810:             msg.sender,

918:         emit MarketOpenTimeoutTriggered(msg.sender, _positionId, pairId);

947:         emit MarketCloseTimeoutTriggered(msg.sender, _positionId, pairId);

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

50:         wrappedNativeEngineChip.mintChip(msg.sender, wrappedNativeAmount);

59:         require(msg.sender == address(wrappedNativeEngineChip), "INVALID_CALLER");

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

13:     constructor() MutableSingleKinkRateModel(msg.sender) {}

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

10:     ) SteadyRateModel(msg.sender, _defaultSteadyFundingRate) {}

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

13:     constructor() MutableSingleKinkRateModel(msg.sender) {}

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

10:     ) SteadyRateModel(msg.sender, _defaultSteadyInterestRate) {}

```

</details> 
 


 ### <a name="NC-48"></a>[NC-48]
 ### Dont use _msgSender() if not supporting EIP-2771
Use msg.sender if the code does not implement EIP-2771 trusted forwarder support

*Instances (15)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

68:         require(tx.origin == _msgSender());

234:     function _msgSender() public view returns (address) {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

63:         require(tx.origin == _msgSender());

100:     function _msgSender() public view returns (address) {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

118:         require(tx.origin == _msgSender());

401:     function _msgSender() public view returns (address) {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

209:         address trader = _msgSender();

225:         address trader = _msgSender();

241:         address trader = _msgSender();

258:         address trader = _msgSender();

280:         address trader = _msgSender();

330:         address trader = _msgSender();

392:         address trader = _msgSender();

429:         address trader = _msgSender();

729:     function _msgSender() public view returns (address) {

```

</details> 
 


 ### <a name="NC-49"></a>[NC-49]
 ### Array indices should be referenced via enums rather than numeric literals

#### Impact:
Referencing array indices via enums can improve code readability and maintainability.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

102:         priceIdsArr[0] = priceFeedId;

110:         PythStructs.PriceFeed memory priceFeed = priceFeeds[0];

```

</details> 
 


 ### <a name="NC-50"></a>[NC-50]
 ### <array>.length should not be looked up in every loop of a for-loop
The overheads outlined below are PER LOOP, excluding the first loop. Storage arrays incur a Gwarmaccess (100 gas), memory arrays use MLOAD (3 gas), calldata arrays use CALLDATALOAD (3 gas). Caching the length changes each of these to a DUP<N> (3 gas), and gets rid of the extra DUP<N> needed to store the stack offset.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

489:         for (uint8 index = 0; index < users.length; index++) {

555:         for (uint8 index = 0; index < users.length; index++) {

590:         for (uint8 index = 0; index < users.length; index++) {

672:         for (uint8 index = 0; index < users.length; index++) {

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

78:         for (uint256 index = 0; index < pairPrices.length; index++) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

251:         for (uint256 i = 0; i < _pairs.length; i++) {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

231:         for (uint256 i = 0; i < contractNameHashes.length; i++) {

```

</details> 
 


 ### <a name="NC-51"></a>[NC-51]
 ### Use assembly to emit events, in order to save gas
Using the [scratch space](https://github.com/Vectorized/solady/blob/30558f5402f02351b96eeb6eaf32bcea29773841/src/tokens/ERC1155.sol#L501-L504) for event arguments (two words or fewer) will save gas over needing Soliditys full abi memory expansion used for emitting normally.

*Instances (161)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

42:         emit NewPendingImplementation(oldPendingImplementation, pendingImplementation);

61:         emit NewImplementation(oldImplementation, implementation);

62:         emit NewPendingImplementation(oldPendingImplementation, pendingImplementation);

84:         emit NewPendingAdmin(oldPendingAdmin, newPendingAdmin);

105:         emit NewAdmin(oldAdmin, admin);

106:         emit NewPendingAdmin(oldPendingAdmin, pendingAdmin);

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

38:         emit NewPendingAdmin(oldPendingAdmin, newPendingAdmin);

59:         emit NewAdmin(oldAdmin, admin);

60:         emit NewPendingAdmin(oldPendingAdmin, pendingAdmin);

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

45:             emit DomainSeparatorForChainStored(chainId, domainSeparator);

```

```solidity
File: Lynx/Chips/BaseChip.sol

59:         emit AutoApprovedSpenderSet(role, oldSpender, spender);

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

89:         emit BurnHandlerSet(previousHandler, address(_handler));

100:         emit IsMintingPausedSet(_value);

117:         emit MintControllerSet(previousController, address(_mintController));

134:         emit BurnControllerSet(previousController, address(_burnController));

148:         emit TokensSwept(address(_token), admin, _amount);

184:         emit ChipMinted(minter, _toAddress, _amount, ownAmountToMint);

252:         emit ChipBurned(burner, receiver, underlyingAmount, chipAmount);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

70:         emit IsSendPausedSet(_isPaused);

87:         emit CreditControllerSet(previousController, address(_creditController));

104:         emit DebitControllerSet(previousController, address(_debitController));

119:         emit TokensSwept(address(_token), owner(), _amount);

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

59:         emit IsSendPausedSet(_isPaused);

76:         emit CreditControllerSet(previousController, address(_creditController));

93:         emit DebitControllerSet(previousController, address(_debitController));

103:         emit UnderlyingRecoveryRenounced();

116:         emit UnderlyingRecovered(owner(), _amount);

130:         emit TokensSwept(address(_token), owner(), _amount);

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

110:         emit ChipOutFeeSet(chip, fee);

120:         emit LzEidSet(evmId, lzEid);

128:         emit FeesReceiverSet(receiver);

177:         emit ChipsIntentVerified(msg.sender, payload.chip, payload.holder, ChipsIntentsVerifierActions.CHIP_OUT_LZ, amountAfterFeeWithoutDust, fee);

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

123:         emit LiquidityIntentVerified(msg.sender, payload.pool, payload.liquidityProvider, LiquidityIntentsVerifierActions.REQUEST_EPOCH_DEPOSIT, payload.nonce);

143:         emit LiquidityIntentVerified(msg.sender, payload.pool, payload.liquidityProvider, LiquidityIntentsVerifierActions.REQUEST_EPOCH_REDEEM, payload.nonce);

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

65:         emit SourceChainIdForAssetStored(asset, chainId);

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

250:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.REQUEST_POSITION_OPEN, positionId, payload.nonce);

270:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.REQUEST_POSITION_MARKET_CLOSE, payload.positionId, payload.nonce);

295:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.REQUEST_POSITION_SINGLE_FIELD_UPDATE, payload.positionId, payload.nonce);

324:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.REQUEST_POSITION_DOUBLE_FIELD_UPDATE, payload.positionId, payload.nonce);

350:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.DIRECT_UPDATE_PENDING_LIMIT_POSITION, payload.positionId, payload.nonce);

374:         emit TradeIntentVerified(msg.sender, TradeIntentsVerifierActions.DIRECT_CANCEL_PENDING_LIMIT_POSITION, payload.positionId, payload.nonce);

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

96:         emit Transfer(sender, recipient, amount);

104:         emit Transfer(address(0), account, amount);

117:         emit Transfer(account, address(0), amount);

125:         emit Approval(owner, spender, amount);

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

235:         emit AddressUpdated(

245:         emit AddressUpdated(LexPoolAddressesEnum.pnlRole, address(pnl));

250:         emit NumberUpdated(

258:         emit NumberUpdated(LexPoolNumbersEnum.epochsDelayDeposit, delay);

263:         emit NumberUpdated(LexPoolNumbersEnum.epochsDelayRedeem, delay);

268:         emit NumberUpdated(LexPoolNumbersEnum.epochDuration, duration);

273:         emit NumberUpdated(LexPoolNumbersEnum.minDepositAmount, amount);

281:         emit ImmediateDepositAllowedToggled(immediateDepositAllowed);

326:         emit ImmediateDeposit(user, depositAmount, amountToMint);

327:         emit LiquidityProvided(

396:         emit DepositRequest(user, amount, minAmountOut, epoch);

397:         emit LiquidityProvided(domain, referralCode, user, amount, epoch);

465:         emit RedeemRequest(user, amount, minAmountOut, epoch);

541:         emit ProcessedDeposit(user, deposited, amount);

566:             emit CanceledDeposit(user, epoch, pendingDeposit.amount);

658:         emit ProcessedRedeem(user, redeemed, amount);

683:             emit CanceledRedeem(user, epoch, pendingRedeem.amount);

731:         emit NewEpoch(

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

15:         emit AddressUpdated(PoolAccountantAddressesEnum.frm, address(_frm));

20:         emit NumberUpdated(PoolAccountantV1NumbersEnum.minOpenFee, min);

25:         emit NumberUpdated(PoolAccountantV1NumbersEnum.lexPartF, partF);

30:         emit NumberUpdated(

39:         emit NumberUpdated(

48:         emit NumberUpdated(PoolAccountantV1NumbersEnum.liquidationFeeF, fee);

409:         emit TradeInitialAccFeesStored(positionId, t.borrowIndex, t.funding);

488:         emit FeesCharged(

550:         emit PerformanceFeeCharging(positionId, performanceFee);

726:             emit AccrueFunding(pairId, valueLong, valueShort);

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

172:         emit TradersPairGainsReset(pairId);

191:         emit GroupAdded(_id, _name, _group);

201:         emit GroupUpdated(_group.id, _group);

221:         emit FeeAdded(_id, _name, _fee);

231:         emit FeeUpdated(_fee.id, _fee);

264:         emit PairUpdated(_pair.id, _pair);

291:         emit PairAdded(_pair.id, _pairFromTo.from, _pairFromTo.to, _pair);

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

19:         emit AddressUpdated(PoolAccountantAddressesEnum.irm, address(irm));

27:         emit AddressUpdated(PoolAccountantAddressesEnum.irm, address(irm));

33:         emit NumberUpdated(

41:         emit NumberUpdated(PoolAccountantV1NumbersEnum.borrowRateMax, rate);

46:         emit NumberUpdated(

60:         emit NumberUpdated(

142:             emit AccrueInterest(

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

43:         emit AddressUpdated(

51:         emit NumberUpdated(PoolAccountantV1NumbersEnum.maxGainF, _maxGainF);

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

83:         emit TradingFloorSet(tradingFloor);

127:         emit UpdateLivePositionOrderSet(_positionId, updateTradeFieldOrder);

173:         emit UpdateLivePositionOrderSet(_positionId, updateTradeFieldOrder);

235:         emit UpdateLivePositionOrderRemoved(_orderId);

```

```solidity
File: Lynx/Registry/RegistryV1.sol

132:         emit AddressUpdated(_role, _address);

172:         emit AddressUpdated("tradeIntentsVerifier", _tradeIntentsVerifier);

180:         emit AddressUpdated("liquidityIntentsVerifier", _liquidityIntentsVerifier);

188:         emit AddressUpdated("chipsIntentsVerifier", _chipsIntentsVerifier);

197:         emit FeesManagerSet(asset, feesManager);

247:         emit TradingFloorSupported(_tradingFloor);

298:         emit SettlementAssetForTradingFloorAdded(_tradingFloor, _asset, _lexPool, _poolAccountant);

321:         emit NewVersionPublished(versionToPublish, contractNameHash, contractImplementation);

335:         emit AddressUpdated(name, _newLocker);

349:         emit ValidChipSpenderTargetByRoleSet(chip, role, spender);

362:         emit ValidChipBurnHandlerSet(chip, burnHandler);

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

143:         emit PausedToggled(isPaused);

149:         emit DoneToggled(isDone);

158:         emit NumberUpdated("limitOrdersTimelock", value);

165:         emit NumberUpdated("marketOrdersTimeout", value);

171:         emit IsLimitingMarketClosePriceRangeToggled(

178:         emit ActionFeeSet(action, requiredFee);

357:         emit PendingOpenLimitPositionCancelled(_positionId);

418:         emit PendingMarketOpenOrderTimeoutCancelled(_positionId, trader);

456:         emit PendingMarketCloseOrderTimeoutCancelled(_positionId, trader);

548:         emit PositionRequested(domain, referralCode, positionId);

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

294:         emit SettlementAssetAdded(_asset, _lexPool, _poolAccountant);

326:         emit NumberUpdated(name, value);

334:         emit PairPausedChange(_pairId, _isPaused);

432:         emit PendingPositionStored(

463:         emit PositionSetForMarketClose(_positionId, _minPrice, _maxPrice);

509:         emit PendingPositionUpdated(

585:             emit PositionClosedMarket(

656:         emit PositionClosedLimit(

761:         emit OpenedPositionUpdated(

859:         emit PositionMarketCloseCancelled(_positionId, source, 0);

908:             emit PositionIdentifiersStored(positionId, identifiers);

941:                 emit PositionOpenCancelledByMarketPriceRange(

1020:             emit PositionOpened(

1038:                 emit PositionOpenCancelledByCap(_positionId, capType, value);

1268:         emit PendingPositionCancelled(positionId, canceller, cancellationFee);

1329:         emit FeeCollected(_asset, _feeType, _to, amount);

1343:             emit FeeRegistered(_positionId, _token, _feeType, _amount);

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

32:         emit MaxConfidenceForPairSet(_pairId, _maxConfidenceFractionForPair);

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

34:         emit SpreadFractionForPairSet(_pairId, _spreadF);

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

44:         emit TriggerAccountAllowed(account);

50:         emit TriggerAccountDisallowed(account);

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

205:         emit PausedToggled(isPaused);

211:         emit DoneToggled(isDone);

225:         emit AddressUpdated("PriceValidator", _priceValidator);

258:         emit NumberUpdated(

272:         emit NumberUpdated(

282:         emit NumberUpdated(

292:         emit NumberUpdated("marketOrdersTimeout", _marketOrdersTimeout);

299:         emit NumberUpdated(

309:         emit NumberUpdated(

319:         emit NumberUpdated(

329:         emit NumberUpdated(

339:         emit NumberUpdated("maxTriggersPerBlock", _maxTriggersPerBlock);

398:         emit OpenPositionExecuted(

456:         emit OpenPositionExecuted(

510:         emit ClosePositionExecuted(

557:         emit SlExecuted(

610:         emit TpExecuted(

646:         emit LiquidationExecuted(

809:         emit PositionUpdateTimeoutTriggered(

834:             emit UpdatePositionSingleFieldExecuted(

846:             emit UpdatePositionSingleFieldRejected(

873:                 emit UpdatePositionSingleFieldRejected(

918:         emit MarketOpenTimeoutTriggered(msg.sender, _positionId, pairId);

947:         emit MarketCloseTimeoutTriggered(msg.sender, _positionId, pairId);

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

59:         emit NewRateParams(_baseRate, _multiplier, _kink,_postKinkMultiplier, rateOnKink);

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

17:         emit DefaultRateUpdated(defaultRate);

```

</details> 
 


 ### <a name="NC-52"></a>[NC-52]
 ### Don't initialize variables with default value

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

489:         for (uint8 index = 0; index < users.length; index++) {

555:         for (uint8 index = 0; index < users.length; index++) {

588:         uint256 underlyingFreeAllocatedAmount = 0;

590:         for (uint8 index = 0; index < users.length; index++) {

672:         for (uint8 index = 0; index < users.length; index++) {

707:         uint256 virtualUnderlyingBalance = 0;

773:         for (uint256 index = 0; index < count; index++) {

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

78:         for (uint256 index = 0; index < pairPrices.length; index++) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

117:         uint256 valueLargePay = 0;

118:         uint256 valueSmallReceive = 0;

299:         uint256 performanceFee = 0;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

251:         for (uint256 i = 0; i < _pairs.length; i++) {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

71:         interestShare = 0;

```

```solidity
File: Lynx/Registry/RegistryV1.sol

231:         for (uint256 i = 0; i < contractNameHashes.length; i++) {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

350:         uint noFee = 0;

411:         uint noFee = 0;

449:         uint noFee = 0;

525:         uint32 spreadReductionF = 0;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

610:         bool triggerValid = false;

```

</details> 
 


 ### <a name="NC-53"></a>[NC-53]
 ### Long revert strings

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

51:         require(msg.sender == pendingImplementation && pendingImplementation != address(0), "Not the EXISTING pending implementation");

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

54:         require(sourceChainIdForAsset[asset] == 0, "CHAIN_ID_FOR_ASSET_ALREADY_CONFIGURED");

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

83:         require(sender != address(0), "ERC20: transfer from the zero address");

84:         require(recipient != address(0), "ERC20: transfer to the zero address");

108:         require(account != address(0), "ERC20: burn from the zero address");

111:         require(accountBalance >= amount, "ERC20: burn amount exceeds balance");

121:         require(owner != address(0), "ERC20: approve from the zero address");

122:         require(spender != address(0), "ERC20: approve to the zero address");

```

</details> 
 


## Gas Optimizations


 ### <a name="GAS-1"></a>[GAS-1]
 ### Enable IR-based code generation
By using `--via-ir` or `{"viaIR": true}`, the compiler is able to use more advanced [multi-function optimizations](https://docs.soliditylang.org/en/v0.8.17/ir-breaking-changes.html#solidity-ir-based-codegen-changes), for extra gas savings.

*Instances (84)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/IContractRegistryBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/BaseChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Common/CaptainBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Common/CommonScales.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexCaptain.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexCommon.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Locks/SystemLocker.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ChipEnumsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IAffiliationV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IBurnHandlerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IGlobalLock.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILzCreditControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILzDebitControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IOrderBookV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolBurnControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolMintControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPriceValidatorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IRateModelV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IRegistryV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradeIncentivizerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradersPortalV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradingFloorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IWrappedNative.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/LexErrors.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/LexPoolAdminEnums.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/OrderBookStructsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/PoolAccountantV1AdminEnums.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/TradingEnumsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/TradingFloorStructsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

</details> 
 


 ### <a name="GAS-2"></a>[GAS-2]
 ### Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18)
While the compiler knows to optimize away the exponentiation, its still better coding practice to use idioms that do not require compiler optimization, if they exist.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

63:         exchangeRate = 10 ** underlyingDecimals;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

219:         currentExchangeRate = 10 ** underlyingDecimals;

711:             newExchangeRate = (10 ** underlyingDecimals); // 1.00

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

125:                 (10 ** exponent)).toUint64();

127:                 (10 ** exponent)).toUint64();

132:                 (10 ** exponent)).toUint64();

135:                 (10 ** exponent)).toUint64();

```

</details> 
 


 ### <a name="GAS-3"></a>[GAS-3]
 ### Nesting if-statements is cheaper than using &&
Nesting if-statements avoids the stack operations of setting up and using an extra jumpdest, and saves 6 [gas](https://gist.github.com/IllIllI000/7f3b818abecfadbef93b894481ae7d19)

*Instances (20)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

51:         require(msg.sender == pendingImplementation && pendingImplementation != address(0), "Not the EXISTING pending implementation");

93:         require(msg.sender == pendingAdmin && pendingAdmin != address(0), "Not the EXISTING pending admin");

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

47:         require(msg.sender == pendingAdmin && pendingAdmin != address(0), "Not the EXISTING pending admin");

```

```solidity
File: Lynx/Lex/LexCommon.sol

25:             address(tradingFloor) == address(0) &&

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

27:             bytes(name).length == 0 && bytes(symbol).length == 0,

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

34:             _group.minLeverage >= MIN_LEVERAGE &&

35:                 _group.maxLeverage <= MAX_LEVERAGE &&

47:             _pair.minLeverage >= MIN_LEVERAGE &&

48:                 _pair.maxLeverage <= MAX_LEVERAGE &&

131:         if (currentGains > 0 && currentGains >= int256(pairs[pairId].maxGain)) {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

56:         return (systemLockOwner == _address) && (_address == tradersPortal);

60:         return (systemLockOwner == _address) && (_address == triggers);

64:         return (systemLockOwner == _address) && (_address == tradersPortal || _address == triggers);

260:             _asset != address(0) &&

261:             _lexPool != address(0) &&

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

694:             params.leverage > 0 && params.leverage >= pair.minLeverage,

703:             params.leverage > 0 && params.leverage >= group.minLeverage,

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

377:             _requestIdentifiers.positionIndex <= maxTradesPerPair &&

960:                 triggerPrices.minPrice <= assetEffectivePrice &&

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

1019:             priceTimestamp >= orderActivationEarliestTimestamp &&

```

</details> 
 


 ### <a name="GAS-4"></a>[GAS-4]
 ### Consider using = instead of += and -= for gas efficiency
Using = instead of += and -= can save gas in certain scenarios. Consider using = when appropriate.

*Instances (25)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

102:         totalSupply += amount;

115:         totalSupply -= amount;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

382:         pendingDepositAmount += amount;

449:         pendingWithdrawalAmount += maxUnderlyingAmountOut;

499:                 amountDeposited += amount;

500:                 counterDeposited += 1;

502:                 amountCanceled += amount;

503:                 counterCanceled += 1;

506:         pendingDepositAmount -= amountDeposited + amountCanceled;

563:             pendingDepositAmount -= pendingDeposit.amount;

601:                 amountRedeemed += amount;

602:                 counterRedeemed += 1;

604:                 amountCanceled += amount;

605:                 counterCanceled += 1;

607:             underlyingFreeAllocatedAmount += underlyingAllocated;

610:         pendingWithdrawalAmount -= underlyingFreeAllocatedAmount;

680:             pendingWithdrawalAmount -= pendingRedeem.maxAmountOut;

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

87:             pricePnl += accountant.pricePnL(

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

53:         realizedFundingSurplusDeficit += valueChange;

95:         valueLong += indexLongChange;

96:         valueShort += indexShortChange;

551:         closingFeeUnsafe += performanceFee;

704:         skew += signedAddition;

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

256:         totalBorrows -= amount;

266:             totalInterest -= amount;

```

</details> 
 


 ### <a name="GAS-5"></a>[GAS-5]
 ### Use >= instead of > for gas efficiency
Using >= costs less gas than >. Consider using >= when appropriate.

*Instances (88)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

140:         require(payload.amount > 0, "AMOUNT_ZERO");

183:         require(fee > 0, "NO_FEE_DEFINED");

188:         require(amount > fee, "AMOUNT_LESS_OR_EQUAL_FEE");

203:         if (dustChange > 0) {

211:         if (feeAmount > 0) {

227:         if (amount > 0) {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

111:         require(payload.amount > 0, "AMOUNT_ZERO");

131:         require(payload.amount > 0, "AMOUNT_ZERO");

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

62:         require(balance > pendingAmount, "Fatal error");

296:         if (reservesToSend > 0) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

84:         if (fundingRate > fundingRateMax)

109:         bool isLongLarger = _oiLong > _oiShort;

156:         return liqPrice > 0 ? uint256(liqPrice) : 0;

316:         if (loss > minPerformanceFee) {

348:         return value > 0 ? uint256(value) : 0;

417:         uint256 collateralAfterFunding = funding > int256(collateral)

600:             if (newOpenInterest > pair.maxOpenInterest) {

610:             if (absSkew > pair.maxSkew) {

705:         return skew > 0 ? uint256(skew) : uint256(-skew);

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

59:         require(_fee.id > 0, "WRONG_FEE_ID");

131:         if (currentGains > 0 && currentGains >= int256(pairs[pairId].maxGain)) {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

79:         if (utilization > maxVirtualUtilization) {

205:         if (borrowRate > borrowRateMax) {

230:         if (newPairBorrows > pairMaxBorrow(pairId)) {

238:         if (newGroupBorrows > groupMaxBorrow(groupId)) {

245:         if (newTotalBorrows > maxTotalBorrows)

263:         if (amount > totalInterestOld) {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

266:         if (borrowNew > borrowOld) {

307:             return closePrice > tp ? tp : closePrice;

325:         if (leverage > pair.maxLeverage) {

329:         } else if (leveragedPosition > pair.maxPositionSize) {

334:         if (leverage > group.maxLeverage) {

338:         } else if (leveragedPosition > group.maxPositionSize) {

389:         if (potentialProfitPrecision > int256(maxGainPrecision)) {

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

193:         require(order.timestamp > 0, "NO_SUCH_UPDATE_ORDER");

218:         if (allPendingUpdateOrderIds.length > 1) {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

315:         require(versionToPublish > latestSystemVersion, "MUST_PUBLISH_NEWER_VERSION");

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

155:         require(value > 0, "CANNOT_BE_ZERO");

162:         require(value > 0, "CANNOT_BE_ZERO");

288:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

338:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

375:         require(updatePositionFieldOrder.timestamp > 0, "NO_SUCH_UPDATE_ORDER");

400:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

437:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

497:                     ? positionRequestParams.tp >

511:                     : positionRequestParams.sl >

572:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

607:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

643:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

694:             params.leverage > 0 && params.leverage >= pair.minLeverage,

703:             params.leverage > 0 && params.leverage >= group.minLeverage,

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

306:         require(value > 0, "CANNOT_BE_ZERO");

451:         require(position.collateral > 0, "NO_SUCH_POSITION");

563:         require(triggerPrices.maxPrice > 0, "NO_SUCH_POSITION");

566:             triggerPrices.minPrice > effectivePrice ||

604:         require(position.collateral > 0, "NO_SUCH_POSITION");

683:         require(p.collateral > 0, "NO_SUCH_POSITION");

742:         uint effectiveMinPrice = p.openPrice > effectivePrice

788:         require(positionsById[_positionId].collateral > 0, "NO_SUCH_POSITION");

843:         require(positionsById[_positionId].collateral > 0, "NO_SUCH_POSITION");

928:         require(_position.collateral > 0, "NO_SUCH_POSITION");

938:                 triggerPrices.minPrice > assetEffectivePrice ||

1073:         if (triggerPrices.tpByFraction > 0) {

1082:         if (triggerPrices.slByFraction > 0) {

1134:         require(positionRegistrationParams.collateral > 0, "NO_SUCH_POSITION");

1150:         if (_tradeValue > positionRegistrationParams.collateral) {

1299:             if (diff > closingFee) {

1341:         if (_amount > 0) {

1357:         if (amount > 0) {

1384:         if (amount > 0) {

1429:             if (p.length > 1) {

1474:             tp == 0 || (isLong ? tp > maxPrice : tp < minPrice),

1478:             sl == 0 || (isLong ? sl < minPrice : sl > maxPrice),

1566:         f = f > maxPnlF ? maxPnlF : f;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

268:             _maxTriggerPeriodForMarketOrders > minTriggerPeriodForMarketOrders,

361:         require(timestamp > 0, "NO_PENDING_MARKET_ORDER");

420:         require(timestamp > 0, "NO_PENDING_LIMIT_ORDER");

479:         require(timestamp > 0, "NO_PENDING_MARKET_ORDER");

528:         require(pairId > 0, "NO_SUCH_POSITION");

529:         require(limitInfo.sl > 0, "NO_SL");

575:         require(pairId > 0, "NO_SUCH_POSITION");

576:         require(limitInfo.tp > 0, "NO_TP");

626:         require(pairId > 0, "NO_SUCH_POSITION");

902:         require(timestamp > 0, "NO_SUCH_POSITION");

931:         require(timestamp > 0, "NO_SUCH_POSITION");

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

122:         if (0 > priceInfo.expo) {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

63:         uint256 safeX = x > PRECISION ? PRECISION : x ;

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

22:         uint256 absDIff = openInterestLong > openInterestShort ?

```

</details> 
 


 ### <a name="GAS-6"></a>[GAS-6]
 ### Using bools for storage incurs overhead
Use uint256(1) and uint256(2) for true/false to avoid a Gwarmaccess (100 gas), and to avoid Gsset (20000 gas) when changing from ‘false’ to ‘true’, after having been ‘true’ in the past. See [source](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/58f635312aa21f947cae5f8578638a85aa2519f5/contracts/security/ReentrancyGuard.sol#L23-L27).

*Instances (15)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/BaseChip.sol

25:     mapping(address => bool) public autoApproved;

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

50:     bool public isMintingPaused;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

30:     bool public isSendPaused;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

31:     bool public isSendPaused;

32:     bool public isUnderlyingRecoveryRenounced;

```

```solidity
File: Lynx/Common/CaptainBase.sol

8:     mapping(uint8 => mapping(address => bool)) roles;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

49:     bool public immediateDepositAllowed;

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

20:     mapping(address => bool) public validSystemLockOwners;

34:     mapping(address => bool) public isTradingFloorSupported;

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

51:     bool public isPaused; // Prevent opening new trades

52:     bool public isDone; // Prevent any interaction with the contract

56:     bool public isLimitingMarketClosePriceRange;

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

27:     mapping(uint => bool) public pausedPairs;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

59:     bool public isPaused; // Prevent opening new trades

60:     bool public isDone; // Prevent any interaction with the contract

```

</details> 
 


 ### <a name="GAS-7"></a>[GAS-7]
 ### Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

489:         for (uint8 index = 0; index < users.length; index++) {

555:         for (uint8 index = 0; index < users.length; index++) {

590:         for (uint8 index = 0; index < users.length; index++) {

672:         for (uint8 index = 0; index < users.length; index++) {

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

78:         for (uint256 index = 0; index < pairPrices.length; index++) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

251:         for (uint256 i = 0; i < _pairs.length; i++) {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

231:         for (uint256 i = 0; i < contractNameHashes.length; i++) {

```

</details> 
 


 ### <a name="GAS-8"></a>[GAS-8]
 ### Consider using assembly for simple zero checks to save gas
Using assembly for simple zero checks can save gas. Consider using assembly when appropriate.

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

114:         if (totalBorrows == 0) {

121:         if (virtualBalance == 0) return type(uint256).max;

709:         if (0 == supply) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

70:         if (timediff == 0) {

645:         if (0 == totalRatioOiToP) {

670:         if (0 == effEntryPrice) {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

171:         if (borrows == 0) return 0;

172:         if (availableCash == 0) return type(uint256).max;

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

28:         if (sum == 0) {

```

</details> 
 


 ### <a name="GAS-9"></a>[GAS-9]
 ### Expressions for constant values should use immutable rather than constant

#### Impact:
While it doesnt save any gas because the compiler knows that developers often make this mistake, its still best to use the right tool for the task at hand. There is a difference between constant variables and immutable variables, and they should each be used in their appropriate contexts. constants should be used for literal values written into the code, and immutable variables should be used for expressions, or values calculated in, or passed into the constructor.  

*Instances (24)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CryptographyContracts/EIP712Utils.sol

17:     bytes32 public constant EIP712DOMAIN_TYPEHASH = keccak256(

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

40:     uint public constant SELF_UNIT_SCALE = 1e18;

```

```solidity
File: Lynx/Common/CommonScales.sol

8:     uint256 public constant PRECISION = 1e18; // 18 decimals

10:     uint256 public constant LEVERAGE_SCALE = 100; // 2 decimal points

12:     uint256 public constant FRACTION_SCALE = 100000; // 5 decimal points

14:     uint256 public constant ACCURACY_IMPROVEMENT_SCALE = 1e9;

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

33:     string public constant REQUEST_PAYLOAD_CHIP_OUT_LZ_TYPE_DESCRIPTOR = "HolderRequestPayload_ChipOutLZ(uint256 nonce,address chip,address holder,address receiver,uint256 amount)";

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

31:     string public constant REQUEST_PAYLOAD_EPOCH_DEPOSIT_TYPE_DESCRIPTOR = "LiquidityProviderRequestPayload_EpochDeposit(uint256 nonce,address pool,address liquidityProvider,uint256 epoch,uint256 amount,uint256 minAmountOut)";

32:     string public constant REQUEST_PAYLOAD_EPOCH_REDEEM_TYPE_DESCRIPTOR = "LiquidityProviderRequestPayload_EpochRedeem(uint256 nonce,address pool,address liquidityProvider,uint256 epoch,uint256 amount,uint256 minAmountOut)";

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

40:     string public constant REQUEST_PAYLOAD_OPEN_POSITION_TYPE_DESCRIPTOR = "UserRequestPayload_OpenPosition(uint256 nonce,PositionRequestIdentifiers positionRequestIdentifiers,PositionRequestParams positionRequestParams,uint8 orderType)PositionRequestIdentifiers(address trader,uint16 pairId,address settlementAsset,uint32 positionIndex)PositionRequestParams(bool long,uint256 collateral,uint32 leverage,uint64 minPrice,uint64 maxPrice,uint64 tp,uint64 sl,uint64 tpByFraction,uint64 slByFraction)";

41:     string public constant POSITION_REQUEST_IDENTIFIERS_TYPE_DESCRIPTOR = "PositionRequestIdentifiers(address trader,uint16 pairId,address settlementAsset,uint32 positionIndex)";

42:     string public constant POSITION_REQUEST_PARAMS_TYPE_DESCRIPTOR = "PositionRequestParams(bool long,uint256 collateral,uint32 leverage,uint64 minPrice,uint64 maxPrice,uint64 tp,uint64 sl,uint64 tpByFraction,uint64 slByFraction)";

44:     string public constant REQUEST_PAYLOAD_CLOSE_MARKET_TYPE_DESCRIPTOR = "UserRequestPayload_CloseMarket(uint256 nonce,bytes32 positionId,uint64 minPrice,uint64 maxPrice)";

46:     string public constant REQUEST_PAYLOAD_UPDATE_POSITION_SINGLE_FIELD_TYPE_DESCRIPTOR = "UserRequestPayload_UpdatePositionSingleField(uint256 nonce,bytes32 positionId,uint8 orderType,uint64 fieldValue)";

47:     string public constant REQUEST_PAYLOAD_UPDATE_POSITION_DOUBLE_FIELD_TYPE_DESCRIPTOR = "UserRequestPayload_UpdatePositionDoubleField(uint256 nonce,bytes32 positionId,uint8 orderType,uint64 fieldValueA,uint64 fieldValueB)";

49:     string public constant DIRECT_PAYLOAD_UPDATE_PENDING_LIMIT_POSITION_TYPE_DESCRIPTOR = "UserDirectPayload_UpdatePendingLimitPosition(uint256 nonce,bytes32 positionId,uint64 minPrice,uint64 maxPrice,uint64 tp,uint64 sl)";

50:     string public constant DIRECT_PAYLOAD_CANCEL_PENDING_LIMIT_POSITION_TYPE_DESCRIPTOR = "UserDirectPayload_CancelPendingLimitPosition(uint256 nonce,bytes32 positionId)";

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

28:     uint public constant SELF_UNIT_SCALE = 1e18;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

77:     uint256 internal constant MIN_LEVERAGE = (1 * LEVERAGE_SCALE) / 2; // 0.5X

78:     uint256 internal constant MAX_LEVERAGE = 1000 * LEVERAGE_SCALE; // 1000X

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

12:     uint256 public constant VERSION_SCALE = 1000; // 1,000 = 1.00, 1,120 = 1.12

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

29:     uint public constant MAX_FEE_FRACTION_FOR_CANCEL = FRACTION_SCALE / 100; // FRACTION_SCALE

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

17:     uint constant PRICE_SCALE = 1e8;

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

11:     uint public constant PRECISION = 1e18;

```

</details> 
 


 ### <a name="GAS-10"></a>[GAS-10]
 ### Constructors can be marked payable
Payable functions cost less gas to execute, since the compiler does not have to add extra checks to ensure that a payment wasn  t provided. A constructor can safely be marked as payable, since only the deployer would be able to pass funds, and the project itself would not pass any funds.

*Instances (31)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

21:     constructor() {

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

14:     constructor(address _registry, string memory proxyName) {

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

25:     constructor(string memory _contractDomainName, string memory _contractDomainVersion) {

```

```solidity
File: Lynx/Chips/BaseChip.sol

39:     constructor(IRegistryV1 _registry, ChipMode _chipMode) {

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

57:     constructor(IRegistryV1 _registry, string memory _name, string memory _symbol, IERC20 _underlyingToken)

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

37:     constructor(

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

39:     constructor(

```

```solidity
File: Lynx/Common/CaptainBase.sol

11:     constructor(address _initialOwner, uint8 _administrativeRole) Ownable(_initialOwner) {

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

98:     constructor(IRegistryV1 _registry) MultiSourceChainIntentsVerifierBase("Chips Intents Verifier","1") {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

91:     constructor(

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

20:     constructor(string memory _contractDomainName, string memory _contractDomainVersion) MultiChainEIP712Base(_contractDomainName, _contractDomainVersion) {}

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

194:     constructor(

```

```solidity
File: Lynx/Lex/LexCaptain.sol

25:     constructor() BaseCaptain(msg.sender, uint8(LexRole.ADMINISTRATIVE)) {}

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

11:     constructor(address _registry) AcceptableRegistryImplementationClaimableAdmin(_registry, "LexPool") {}

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

36:     constructor(

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

12:     constructor(address _registry) AcceptableRegistryImplementationClaimableAdmin(_registry, "PoolAccountant") {}

```

```solidity
File: Lynx/Locks/SystemLocker.sol

13:     constructor(address _globalLock) {

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

11:     constructor(address _registry) AcceptableRegistryImplementationClaimableAdmin(_registry, "OrderBook") {}

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

126:     constructor(

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

11:     constructor(address _registry) AcceptableRegistryImplementationClaimableAdmin(_registry, "TradingFloor") {}

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

23:     constructor(uint _maxAllowedConfidenceFraction) {

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

25:     constructor(uint _maxAllowedSpreadReduction) {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

184:     constructor(

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

26:     constructor(address _wrappedNativeEngineChip) {

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

25:     constructor(IPyth _pythContract) {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

13:     constructor(address _initialOwner) Ownable(_initialOwner) {}

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

11:     constructor(address _owner, uint _defaultRate) Ownable(_owner) {

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

13:     constructor() MutableSingleKinkRateModel(msg.sender) {}

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

8:     constructor(

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

13:     constructor() MutableSingleKinkRateModel(msg.sender) {}

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

8:     constructor(

```

</details> 
 


 ### <a name="GAS-11"></a>[GAS-11]
 ### Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (238)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

35:         require(msg.sender == admin, "not admin");

36:         require(approvePendingImplementationInternal(newPendingImplementation), "INVALID_IMPLEMENTATION");

51:         require(msg.sender == pendingImplementation && pendingImplementation != address(0), "Not the EXISTING pending implementation");

75:         require(msg.sender == admin, "Not Admin");

93:         require(msg.sender == pendingAdmin && pendingAdmin != address(0), "Not the EXISTING pending admin");

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

17:     modifier onlyAdmin() { require(msg.sender == admin, "ONLY_ADMIN"); _; }

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

29:         require(msg.sender == admin, "Not Admin");

47:         require(msg.sender == pendingAdmin && pendingAdmin != address(0), "Not the EXISTING pending admin");

```

```solidity
File: Lynx/Chips/BaseChip.sol

40:         require(address(_registry) != address(0), "!_registry");

49:         require(spender == address(0) || registry.getValidSpenderTargetForChipByRole(address(this), role) == spender, "NOT_REGISTRY_APPROVED");

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

59:         require(address(_underlyingToken) != address(0), "!_underlyingToken");

82:         require(address(_handler) == address(0) || registry.validBurnHandlerForChip(address(this)) == address(_handler), "NOT_REGISTRY_APPROVED");

86:         require(previousHandler != address(_handler), "ALREADY_SET");

97:         require(isMintingPaused != _value, "ALREADY_SET");

109:         require(address(_mintController) == address(0) || _mintController.isPoolMintController(), "NOT_POOL_MINT_CONTROLLER");

113:         require(previousController != address(_mintController), "ALREADY_SET");

126:         require(address(_burnController) == address(0) || _burnController.isPoolBurnController(), "NOT_POOL_BURN_CONTROLLER");

130:         require(previousController != address(_burnController), "ALREADY_SET");

144:         require(address(_token) != address(underlyingToken), "CANNOT_SWEEP_UNDERLYING_TOKEN");

168:         require(!isMintingPaused, "MINT_PAUSED");

169:         require(_amount != 0, "AMOUNT_ZERO");

179:             require(isPermitted, "MINT_CONTROLLER_REFUSAL");

209:         require(burnHandler != IBurnHandlerV1(address(0)), "NO_BURN_HANDLER");

230:         require(chipAmount != 0, "AMOUNT_ZERO");

236:         require(underlyingAmount != 0, "UNDERLYING_AMOUNT_ZERO");

242:             require(isPermitted, "BURN_CONTROLLER_REFUSAL");

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

45:         require(address(_lzEndpoint) != address(0), "!_lzEndpoint");

66:         require(_isPaused != currentState, "ALREADY_SET");

79:         require(address(_creditController) == address(0) || _creditController.isCreditController(), "NOT_CREDIT_CONTROLLER");

83:         require(previousController != address(_creditController), "ALREADY_SET");

96:         require(address(_debitController) == address(0) || _debitController.isDebitController(), "NOT_DEBIT_CONTROLLER");

100:         require(previousController != address(_debitController), "ALREADY_SET");

115:         require(address(_token) != address(this), "CANNOT_SWEEP_SELF");

162:         require(!isSendPaused, "SEND_PAUSED");

166:             require(debitController_.informLzDebitRequestWithSource(_from, _amountLD, _minAmountLD, _dstEid), "DEBIT_NOT_APPROVED");

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

55:         require(_isPaused != currentState, "ALREADY_SET");

68:         require(address(_creditController) == address(0) || _creditController.isCreditController(), "NOT_CREDIT_CONTROLLER");

72:         require(previousController != address(_creditController), "ALREADY_SET");

85:         require(address(_debitController) == address(0) || _debitController.isDebitController(), "NOT_DEBIT_CONTROLLER");

89:         require(previousController != address(_debitController), "ALREADY_SET");

101:         require(!isUnderlyingRecoveryRenounced, "ALREADY_RENOUNCED");

112:         require(!isUnderlyingRecoveryRenounced, "UNDERLYING_RECOVERY_RENOUNCED");

126:         require(address(_token) != address(innerToken), "CANNOT_SWEEP_ADAPTER_TOKEN");

186:         require(!isSendPaused, "SEND_PAUSED");

191:             require(debitController_.informLzDebitRequestWithSource(_from, _amountLD, _minAmountLD, _dstEid), "DEBIT_NOT_APPROVED");

```

```solidity
File: Lynx/Common/CaptainBase.sol

16:         require(roles[role][msg.sender], "!Allowed");

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

77:         require(chipSourceChain != 0, "NO_SOURCE_CHAIN_FOR_CHIP");

99:         require(address(_registry) != address(0), "WRONG_PARAMS");

114:         require(evmId != 0, "NO_EVM_ID");

115:         require(lzEid != 0, "NO_LZ_EID");

116:         require(evmIdToLzEid[evmId] == 0, "ALREADY_SET");

136:         require(recoverChipOutLZPayloadSigner(payload, v, r, s, domainSeparator) == payload.holder, "HOLDER_NOT_SIGNER");

138:         require(payload.receiver == payload.holder, "HOLDER_NOT_RECEIVER");

140:         require(payload.amount > 0, "AMOUNT_ZERO");

152:         require(destChainId != 0, "NO_EID_FOR_CHAIN");

183:         require(fee > 0, "NO_FEE_DEFINED");

188:         require(amount > fee, "AMOUNT_LESS_OR_EQUAL_FEE");

219:         require(_feesReceiver != address(0), "NO_FEES_RECEIVER");

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

94:         require(address(_registry) != address(0), "WRONG_PARAMS");

109:         require(recoverEpochDepositPayloadSigner(payload, v, r, s, domainSeparator) == payload.liquidityProvider, "NOT_SIGNED_BY_LIQUIDITY_PROVIDER");

111:         require(payload.amount > 0, "AMOUNT_ZERO");

129:         require(recoverEpochRedeemPayloadSigner(payload, v, r, s, domainSeparator) == payload.liquidityProvider, "NOT_SIGNED_BY_LIQUIDITY_PROVIDER");

131:         require(payload.amount > 0, "AMOUNT_ZERO");

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

54:         require(sourceChainIdForAsset[asset] == 0, "CHAIN_ID_FOR_ASSET_ALREADY_CONFIGURED");

56:         require(chainId != 0, "CHAIN_ID_ZERO");

88:         require(chainId != 0, "NO_CHAIN_ID_FOR_ASSET");

91:         require(domainSeparator != bytes32(0), "NO_DOMAIN_SEPARATOR_FOR_CHAIN");

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

37:         require(nonce == currentNonceMapValue, "INCORRECT_NONCE");

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

37:         require(nonce == currentNonceMapValue, "INCORRECT_NONCE");

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

197:         require(address(_registry) != address(0), "WRONG_PARAMS");

220:         require(payload.positionRequestIdentifiers.trader == trader, "NOT_SIGNED_BY_TRADER");

243:         require(positionId == expectedPositionId, "UNEXPECTED_POSITION_ID");

261:         require(traderForPosition == trader, "NOT_SIGNED_BY_TRADER");

286:         require(traderForPosition == trader, "NOT_SIGNED_BY_TRADER");

311:         require(traderForPosition == trader, "NOT_SIGNED_BY_TRADER");

341:         require(traderForPosition == trader, "NOT_SIGNED_BY_TRADER");

365:         require(traderForPosition == trader, "NOT_SIGNED_BY_TRADER");

391:             require(domainSeparator != bytes32(0), "NO_DOMAIN_SEPARATOR_FOR_CHAIN");

392:             require(trader != address(0), "NO_TRADER_FOR_POSITION");

```

```solidity
File: Lynx/Lex/LexCommon.sol

34:         require(msg.sender == address(tradingFloor), "TRADING_FLOOR_ONLY");

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

83:         require(sender != address(0), "ERC20: transfer from the zero address");

84:         require(recipient != address(0), "ERC20: transfer to the zero address");

100:         require(account != address(0), "ERC20: mint to the zero address");

108:         require(account != address(0), "ERC20: burn from the zero address");

111:         require(accountBalance >= amount, "ERC20: burn amount exceeds balance");

121:         require(owner != address(0), "ERC20: approve from the zero address");

122:         require(spender != address(0), "ERC20: approve to the zero address");

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

33:         require(msg.sender == IRegistryV1(registry).liquidityIntentsVerifier(), "!LiquidityIntentsVerifier");

62:         require(balance > pendingAmount, "Fatal error");

205:         require(msg.sender == proxy.admin(), "!proxy.admin");

206:         require(proxy._acceptImplementation() == 0, "fail");

231:         require(address(_poolAccountant) != address(0), "InvalidAddress");

242:         require(address(pnl) != address(0), "InvalidAddress");

312:         require(immediateDepositAllowed, "!Allowed");

347:         require(!immediateDepositAllowed, "!Allowed");

362:         require(!immediateDepositAllowed, "!Allowed");

380:         require(pendingRedeems[epoch][user].amount == 0, "Redeem exists");

433:         require(pendingDeposits[epoch][user].amount == 0, "Exists deposit");

552:         require(users.length == epochs.length, "!ArrayLengths");

558:             require(epoch <= maxEpochToCancel, "Epoch too soon");

669:         require(users.length == epochs.length, "!ArrayLengths");

675:             require(epoch <= maxEpochToCancel, "Epoch too soon");

696:         require(msg.sender == pnlRole, "!Auth");

697:         require(block.timestamp >= nextEpochStartMin, "!Time pass new epoch");

758:         require(isUtilizationForLPsValid(), "LP utilization");

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

37:         require(threshold <= FRACTION_SCALE, "!LiqThreshold");

46:         require(fee <= FRACTION_SCALE, "!LiqFee");

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

18:         require(isGroupListed(_groupId), "GROUP_NOT_LISTED");

23:         require(isFeeListed(_feeId), "FEE_NOT_LISTED");

28:         require(isPairListed(_pairId), "PAIR_NOT_LISTED");

39:         require(_group.maxBorrowF <= 1 * PRECISION, "Wrong maxBorrowF");

44:         require(isGroupListed(_pair.groupId), "Wrong group");

45:         require(isFeeListed(_pair.feeId), "Wrong fee");

52:         require(_pair.maxBorrowF <= 1 * PRECISION, "Wrong maxBorrowF");

53:         require(_pair.maxSkew <= _pair.maxOpenInterest, "MaxSkew<=MaxIO");

59:         require(_fee.id > 0, "WRONG_FEE_ID");

183:         require(_id != 0, "INVALID_ID");

184:         require(!isGroupListed(_id), "GROUP_EXISTS");

214:         require(_id != 0, "INVALID_ID");

215:         require(!isFeeListed(_id), "FEE_EXISTS");

283:         require(!isPairListed(_pair.id), "PAIR_EXISTS");

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

16:         require(msg.sender == address(lexPool), "!Auth");

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

105:         require(address(lexPool) == address(0), "Initialized");

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

23:         require(proxy._acceptImplementation() == 0, "fail");

66:         require(msg.sender == address(lexPool), "!Pool");

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

32:         require(msg.sender == tradingFloor, "!TradingFloor");

79:         require(tradingFloor == address(0), "ALREADY_INITIALIZED");

80:         require(_tradingFloor != address(0), "CANNOT_BE_ZERO_ADDRESS");

193:         require(order.timestamp > 0, "NO_SUCH_UPDATE_ORDER");

```

```solidity
File: Lynx/Registry/RegistryV1.sol

33:         require(msg.sender == registryProxy.admin(), "!proxy.admin");

34:         require(registryProxy._acceptImplementation() == 0, "fail");

40:         require(msg.sender == systemLockOwner, "!LockOwner");

45:         require(validSystemLockOwners[msg.sender], "!ValidLocker");

46:         require(systemLockOwner == address(0), "AlreadyLocked");

73:         require(_implementation != address(0), "ZERO_ADDRESS");

229:         require(contractNameHashes.length == contractImplementations.length, "Arrays must be 1:1");

315:         require(versionToPublish > latestSystemVersion, "MUST_PUBLISH_NEWER_VERSION");

316:         require(contractImplementation != address(0), "IMPLEMENTATION_ZERO");

332:         require(_newLocker != address(0), "CANNOT_BE_ZERO_ADDRESS");

343:         require(currentSpenderByRole != spender, "ALREADY_SET");

356:         require(currentBurnHandler != burnHandler, "ALREADY_SET");

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

84:         require(tx.origin == msg.sender || msg.sender == registry.tradeIntentsVerifier(), "NOT_CONTRACT");

88:         require(!isDone, "DONE");

92:         require(!isDone, "DONE");

93:         require(!isPaused, "PAUSED");

98:         require(msg.sender == IRegistryV1(tradingFloor.registry()).feesManagers(NATIVE_UNDERLYING_ADDRESS), "NOT_FEES_MANAGER");

103:         require(msg.sender == IRegistryV1(tradingFloor.registry()).feesManagers(NATIVE_UNDERLYING_ADDRESS), "NOT_TRADER_INTENT_VERIFIER");

108:         require(msg.value >= actionFees[action], "NOT_ENOUGH_NATIVE");

155:         require(value > 0, "CANNOT_BE_ZERO");

162:         require(value > 0, "CANNOT_BE_ZERO");

185:         require(_to.send(selfNativeBalance), "SEND_FAILED");

288:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

289:         require(trader == positionTrader || trader == getTradeIntentsVerifier(), "NOT_YOUR_POSITION");

338:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

339:         require(trader == positionTrader || trader == getTradeIntentsVerifier(), "NOT_YOUR_POSITION");

375:         require(updatePositionFieldOrder.timestamp > 0, "NO_SUCH_UPDATE_ORDER");

400:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

437:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

481:         require(trader == positionRequestIdentifiers.trader || trader == getTradeIntentsVerifier(), "NOT_TRADER");

489:         require(positionRequestParams.tp == 0 || positionRequestParams.tpByFraction == 0, "MULTIPLE_TP_DEFINITIONS");

490:         require(positionRequestParams.sl == 0 || positionRequestParams.slByFraction == 0, "MULTIPLE_SL_DEFINITIONS");

491:         require(positionRequestParams.slByFraction < FRACTION_SCALE, "SL_OF_MORE_THAN_100_PERCENT");

545:             revert("UNSUPPORTED");

572:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

573:         require(trader == positionTrader || trader == getTradeIntentsVerifier(), "NOT_YOUR_POSITION");

607:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

610:         require(trader == positionTrader || trader == getTradeIntentsVerifier(), "NOT_YOUR_POSITION");

643:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

646:         require(trader == positionTrader || trader == getTradeIntentsVerifier(), "NOT_YOUR_POSITION");

672:         require(address(poolAccountant) != address(0), "NO_ACCOUNTANT");

715:         require(leveragedPosition <= pair.maxPositionSize, "POSITION_TOO_BIG");

721:         require(positionOpenFee >= minOpenFee, "DOES_NOT_REACH_MIN_OPEN_FEE");

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

268:         require(msg.sender == tradingFloorProxy.admin(), "!proxy.admin");

269:         require(tradingFloorProxy._acceptImplementation() == 0, "fail");

283:         require(msg.sender == registry, "!Registry");

306:         require(value > 0, "CANNOT_BE_ZERO");

314:             require(value >= FRACTION_SCALE * 50 / 100, "TRADE_PARAM_RESTRICTION");

319:             require(value >= 2 * FRACTION_SCALE, "TRADE_PARAM_RESTRICTION");

323:             revert("UNSUPPORTED");

353:         require(!pausedPairs[_requestIdentifiers.pairId], "PAIR_PAUSED");

403:         require(position.collateral == 0, "ID_USED");

451:         require(position.collateral > 0, "NO_SUCH_POSITION");

453:         require(position.phase == PositionPhase.OPENED, "WRONG_PHASE");

478:         require(_position.phase == PositionPhase.OPEN_LIMIT, "WRONG_PHASE");

563:         require(triggerPrices.maxPrice > 0, "NO_SUCH_POSITION");

604:         require(position.collateral > 0, "NO_SUCH_POSITION");

632:             revert("WRONG_LIMIT_TRIGGER");

636:         require(triggerValid, "FALSE_TRIGGER");

653:             require(triggerValid, "FALSE_TRIGGER");

683:         require(p.collateral > 0, "NO_SUCH_POSITION");

684:         require(p.phase == PositionPhase.OPENED, "WRONG_PHASE");

703:             require(correctedTp == fieldValue, "BAD_FIELD_VALUE");

704:             require(correctedTp != limitInfo.tp, "SAME_TP");

732:             require(correctedSl == fieldValue, "BAD_FIELD_VALUE");

733:             require(correctedSl != limitInfo.sl, "SAME_SL");

739:             revert("UNSUPPORTED");

788:         require(positionsById[_positionId].collateral > 0, "NO_SUCH_POSITION");

804:             revert("WRONG_ORDER_TYPE");

843:         require(positionsById[_positionId].collateral > 0, "NO_SUCH_POSITION");

853:             revert("WRONG_ORDER_TYPE");

873:         require(msg.sender == IRegistryV1(registry).feesManagers(_asset), "!FeesManager");

928:         require(_position.collateral > 0, "NO_SUCH_POSITION");

932:         require(!pausedPairs[identifiers.pairId], "PAIR_PAUSED");

934:         require(_position.phase == _expectedPhase, "WRONG_PHASE");

965:             revert("UNSUPPORTED");

1070:         require(positionLimits.tp == 0 || triggerPrices.tpByFraction == 0, "MULTIPLE_TP_DEFINITIONS");

1071:         require(positionLimits.sl == 0 || triggerPrices.slByFraction == 0, "MULTIPLE_SL_DEFINITIONS");

1134:         require(positionRegistrationParams.collateral > 0, "NO_SUCH_POSITION");

1154:             require(totalProfitF <= maxSanityProfitF, "INVALID_PROFIT");

1472:         require(minPrice <= maxPrice, "MIN_MAX_REVERSE");

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

30:         require(_maxConfidenceFractionForPair <= MAX_ALLOWED_CONFIDENCE_FRACTION, "CONFIDENCE_FRACTION_TOO_HIGH");

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

32:         require(_spreadF <= MAX_ALLOWED_SPREAD_FRACTION, "SPREAD_TOO_HIGH");

38:         require(spreadReductionF <= FRACTION_SCALE, "SPREAD_REDUCTION_TOO_HIGH");

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

20:         require(isAllowedToTrigger(msg.sender), "NOT_ALLOWED_TO_TRIGGER");

42:         require(!isAllowedToTrigger(account), "ACCOUNT_ALREADY_ALLOWED");

48:         require(isAllowedToTrigger(account), "ACCOUNT_NOT_ALLOWED");

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

159:         require(!isDone, "DONE");

163:         require(!isDone, "DONE");

164:         require(!isPaused, "PAUSED");

361:         require(timestamp > 0, "NO_PENDING_MARKET_ORDER");

420:         require(timestamp > 0, "NO_PENDING_LIMIT_ORDER");

479:         require(timestamp > 0, "NO_PENDING_MARKET_ORDER");

528:         require(pairId > 0, "NO_SUCH_POSITION");

529:         require(limitInfo.sl > 0, "NO_SL");

575:         require(pairId > 0, "NO_SUCH_POSITION");

576:         require(limitInfo.tp > 0, "NO_TP");

626:         require(pairId > 0, "NO_SUCH_POSITION");

885:                 revert("UNKNOWN_CUSTOM_ERROR");

902:         require(timestamp > 0, "NO_SUCH_POSITION");

931:         require(timestamp > 0, "NO_SUCH_POSITION");

1058:         require(priceTimestamp >= oldestTimestamp, "PRICE_TOO_OLD");

1060:         require(priceTimestamp <= block.timestamp, "PRICE_TOO_NEW");

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

30:         require(wrappedNativeEngineChip.chipMode() == ChipEnumsV1.ChipMode.LOCAL, "INVALID_CHIP_MODE");

59:         require(msg.sender == address(wrappedNativeEngineChip), "INVALID_CALLER");

74:         require(wrappedNativeAmount == amount, "WRAP_NATIVE_NOT_PRECISE");

83:         require(unwrappedNativeAmount == amount, "UNWRAP_NATIVE_NOT_PRECISE");

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

39:         require(priceFeedIdsForPairs[pairId] == bytes32(0), "ALREADY_EXISTS");

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

47:         require(_kink <= PRECISION, "KINK_TOO_HIGH");

```

</details> 
 


 ### <a name="GAS-12"></a>[GAS-12]
 ### Initializers can be marked as payable to save deployment gas
Payable functions cost less gas to execute, because the compiler does not have to add extra checks to ensure that no payment is provided. Initializers can be safely marked as payable, because only the deployer or the factory contract would call the function without carrying any funds.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

213:     function initialize(

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

30:     function initialize(

```

</details> 
 


 ### <a name="GAS-13"></a>[GAS-13]
 ### Use assembly for small keccak256 hashes, in order to save gas
If the arguments to the encode call can fit into the scratch space (two words or fewer), then its more efficient to use assembly to generate the hash (80 gas): keccak256(abi.encodePacked(x, y)) -> assembly {mstore(0x00, a); mstore(0x20, b); let hash := keccak256(0x00, 0x40); }

*Instances (31)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

16:         CONTRACT_NAME_HASH = keccak256(abi.encodePacked(proxyName));

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

22:         return keccak256(abi.encode(

```

```solidity
File: Lynx/Chips/BaseChip.sol

33:         bytes32 roleHash =  keccak256(abi.encodePacked(role));

56:         bytes32 roleHash =  keccak256(abi.encodePacked(role));

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

87:         bytes32 digest = keccak256(abi.encodePacked(

241:         return keccak256(abi.encode(

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

70:         bytes32 digest = keccak256(abi.encodePacked(

80:         bytes32 digest = keccak256(abi.encodePacked(

149:         return keccak256(abi.encode(

161:         return keccak256(abi.encode(

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

133:         bytes32 digest = keccak256(abi.encodePacked(

143:         bytes32 digest = keccak256(abi.encodePacked(

153:         bytes32 digest = keccak256(abi.encodePacked(

163:         bytes32 digest = keccak256(abi.encodePacked(

173:         bytes32 digest = keccak256(abi.encodePacked(

183:         bytes32 digest = keccak256(abi.encodePacked(

408:         return keccak256(abi.encode(

418:         return keccak256(abi.encode(

428:         return keccak256(abi.encode(

443:         return keccak256(abi.encode(

453:         return keccak256(abi.encode(

463:         return keccak256(abi.encode(

474:         return keccak256(abi.encode(

486:         return keccak256(abi.encode(

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

794:         hashId = keccak256(

```

```solidity
File: Lynx/Registry/RegistryV1.sol

89:         bytes32 nameHash = keccak256(abi.encodePacked(proxyName));

112:         bytes32 roleHash =  keccak256(abi.encodePacked(_role));

120:         bytes32 roleHash = keccak256(abi.encodePacked(role));

130:         bytes32 roleHash =  keccak256(abi.encodePacked(_role));

339:         bytes32 roleHash = keccak256(abi.encodePacked(role));

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

172:         hashId = keccak256(

```

</details> 
 


 ### <a name="GAS-14"></a>[GAS-14]
 ### Reduce gas usage by moving to Solidity 0.8.19 or later
Solidity version 0.8.19 introduced a number of gas optimizations, refer to the [Solidity 0.8.19 Release Announcement](https://soliditylang.org/blog/2023/02/22/solidity-0.8.19-release-announcement) for details.

*Instances (84)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: AdministrationContracts/IContractRegistryBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/BaseChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Common/CaptainBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Common/CommonScales.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexCaptain.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexCommon.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Locks/SystemLocker.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Registry/RegistryV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorProxy.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ChipEnumsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IAffiliationV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IBurnHandlerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IGlobalLock.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILzCreditControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ILzDebitControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IOrderBookV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolBurnControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPoolMintControllerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IPriceValidatorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IRateModelV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IRegistryV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradeIncentivizerV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradersPortalV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/ITradingFloorV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/IWrappedNative.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/LexErrors.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/LexPoolAdminEnums.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/OrderBookStructsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/PoolAccountantV1AdminEnums.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/TradingEnumsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Lynx/interfaces/TradingFloorStructsV1.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

2: pragma solidity ^0.8.24;

```

</details> 
 


 ### <a name="GAS-15"></a>[GAS-15]
 ### Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (74)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

73:     function setAutoApprovedSpenderForRole(string calldata role, address spender) external onlyAdmin {

81:     function setBurnHandler(IBurnHandlerV1 _handler) external onlyAdmin {

96:     function setIsMintingPaused(bool _value) external onlyAdmin {

107:     function setMintController(IPoolMintControllerV1 _mintController) external onlyAdmin {

124:     function setBurnController(IPoolBurnControllerV1 _burnController) external onlyAdmin {

143:     function sweepTokens(IERC20 _token, uint256 _amount) external onlyAdmin {

156:     function sweepNative(uint256 _amount) external onlyAdmin {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

55:     function setAutoApprovedSpenderForRole(string calldata role, address spender) external onlyOwner {

63:     function setIsSendPaused(bool _isPaused) external onlyOwner {

77:     function setCreditController(ILzCreditControllerV1 _creditController) external onlyOwner {

94:     function setDebitController(ILzDebitControllerV1 _debitController) external onlyOwner {

114:     function sweepTokens(ERC20 _token, uint256 _amount) external onlyOwner {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

52:     function setIsSendPaused(bool _isPaused) external onlyOwner {

66:     function setCreditController(ILzCreditControllerV1 _creditController) external onlyOwner {

83:     function setDebitController(ILzDebitControllerV1 _debitController) external onlyOwner {

100:     function renounceUnderlyingRecovery() external onlyOwner {

111:     function recoverUnderlying(uint256 _amount) external onlyOwner {

125:     function sweepTokens(IERC20 _token, uint256 _amount) external onlyOwner {

```

```solidity
File: Lynx/Common/CaptainBase.sol

24:     function grantRole(uint8 role, address account) external onlyOwner {

28:     function revokeRole(uint8 role, address account) external onlyOwner {

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

105:     function setChipOutFee(address chip, uint256 fee) external onlyAdmin {

113:     function setLzEndpointId(uint16 evmId, uint16 lzEid) external onlyAdmin {

123:     function setFeesReceiver(address receiver) external onlyAdmin {

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

40:     function storeSourceChainForAsset(address asset, uint256 chainId) virtual external onlyAdmin {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

241:     function setPnlRole(address pnl) external onlyAdmin {

248:     function setMaxExtraWithdrawalAmountF(uint256 maxExtra) external onlyAdmin {

256:     function setEpochsDelayDeposit(uint256 delay) external onlyAdmin {

261:     function setEpochsDelayRedeem(uint256 delay) external onlyAdmin {

266:     function setEpochDuration(uint256 duration) external onlyAdmin {

271:     function setMinDepositAmount(uint256 amount) external onlyAdmin {

279:     function toggleImmediateDepositAllowed() external onlyAdmin {

287:     function reduceReserves(address _to) external onlyAdmin {

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

26:     function allowEpochAdvancingAccount(address account) external onlyAdmin {

30:     function disallowEpochAdvancingAccount(address account) external onlyAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

13:     function setFrm(IFundingRateModel _frm) external onlyAdmin {

18:     function setMinOpenFee(uint256 min) external onlyAdmin {

23:     function setLexPartF(uint256 partF) external onlyAdmin {

28:     function setFundingRateMax(uint256 maxValue) external onlyAdmin {

36:     function setLiquidationThresholdF(uint256 threshold) external onlyAdmin {

45:     function setLiquidationFeeF(uint256 fee) external onlyAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

170:     function resetTradersPairGains(uint256 pairId) external onlyAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

16:     function setIrm(IInterestRateModel _irm) external onlyAdmin {

25:     function setIrmHard(IInterestRateModel _irm) external onlyAdmin {

30:     function setInterestShareFactor(uint256 factor) external onlyAdmin {

39:     function setBorrowRateMax(uint256 rate) external onlyAdmin {

44:     function setMaxTotalBorrows(uint256 maxBorrows) external onlyAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

49:     function setMaxGainF(uint256 _maxGainF) external onlyAdmin {

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

78:     function setTradingFloor(address _tradingFloor) external onlyAdmin {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

51:     function freeLock() external override onlyLockOwner {

129:     function setDynamicRoleAddress(string calldata _role, address _address) external onlyAdmin {

138:     function setOrderBook(address _orderBook) external onlyAdmin {

150:     function setTradersPortal(address _tradersPortal) external onlyAdmin {

162:     function setTriggers(address _triggers) external onlyAdmin {

170:     function setTradeIntentsVerifier(address _tradeIntentsVerifier) external onlyAdmin {

178:     function setLiquidityIntentsVerifier(address _liquidityIntentsVerifier) external onlyAdmin {

186:     function setChipsIntentsVerifier(address _chipsIntentsVerifier) external onlyAdmin {

194:     function setFeesManager(address asset, address feesManager) external onlyAdmin {

203:     function setValidChipSpenderTargetByRole(address chip, string calldata role, address spender) external onlyAdmin {

210:     function setValidChipBurnHandler(address chip, address burnHandler) external onlyAdmin {

242:     function supportTradingFloor(address _tradingFloor) external onlyAdmin {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

140:     function togglePause() external onlyAdmin {

146:     function toggleDone() external onlyAdmin {

154:     function setLimitOrdersTimelock(uint value) external onlyAdmin {

161:     function setMarketOrdersTimeout(uint value) external onlyAdmin {

168:     function toggleLimitCloseOrdersRange() external onlyAdmin {

176:     function setNativeFeeForAction(TradersPortalActions action, uint256 requiredFee) external onlyAdmin {

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

332:     function setPairPaused(uint _pairId, bool _isPaused) external onlyAdmin {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

202:     function togglePause() external onlyAdmin {

208:     function toggleDone() external onlyAdmin {

216:     function setPriceValidator(address _priceValidator) external onlyAdmin {

228:     function allowTriggerAccount(address account) external onlyAdmin {

232:     function disallowTriggerAccount(address account) external onlyAdmin {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

15:     function setRateParams(uint256 _baseRate, uint256 _multiplier, uint256 _kink, uint256 _postKinkMultiplier) external onlyOwner {

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

15:     function setDefaultSteadyRate(uint _newDefaultRate) external onlyOwner {

```

</details> 
 


 ### <a name="GAS-16"></a>[GAS-16]
 ### `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

489:         for (uint8 index = 0; index < users.length; index++) {

555:         for (uint8 index = 0; index < users.length; index++) {

590:         for (uint8 index = 0; index < users.length; index++) {

672:         for (uint8 index = 0; index < users.length; index++) {

773:         for (uint256 index = 0; index < count; index++) {

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

78:         for (uint256 index = 0; index < pairPrices.length; index++) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

189:         groupsCount++;

219:         feesCount++;

251:         for (uint256 i = 0; i < _pairs.length; i++) {

289:         pairsCount++;

```

```solidity
File: Lynx/Registry/RegistryV1.sol

231:         for (uint256 i = 0; i < contractNameHashes.length; i++) {

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

1400:         pairTradersInfo[settlementAsset][trader][pairId].positionsCounter++;

```

</details> 
 


 ### <a name="GAS-17"></a>[GAS-17]
 ### Using `private` rather than `public` for constants, saves gas
If needed, the values can be read from the verified contract source code, or if there are multiple values there can be a single getter function that [returns a tuple](https://github.com/code-423n4/2022-08-frax/blob/90f55a9ce4e25bceed3a74290b854341d8de6afa/src/contracts/FraxlendPair.sol#L156-L178) of the values of all currently-public constants. Saves **3406-3606 gas** in deployment gas due to the compiler not having to create non-payable getter functions for deployment calldata, not having to store the bytes of the value outside of where it's used, and not adding another entry to the method ID table

*Instances (21)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CryptographyContracts/EIP712Utils.sol

17:     bytes32 public constant EIP712DOMAIN_TYPEHASH = keccak256(

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

40:     uint public constant SELF_UNIT_SCALE = 1e18;

```

```solidity
File: Lynx/Common/CommonScales.sol

8:     uint256 public constant PRECISION = 1e18; // 18 decimals

10:     uint256 public constant LEVERAGE_SCALE = 100; // 2 decimal points

12:     uint256 public constant FRACTION_SCALE = 100000; // 5 decimal points

14:     uint256 public constant ACCURACY_IMPROVEMENT_SCALE = 1e9;

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

33:     string public constant REQUEST_PAYLOAD_CHIP_OUT_LZ_TYPE_DESCRIPTOR = "HolderRequestPayload_ChipOutLZ(uint256 nonce,address chip,address holder,address receiver,uint256 amount)";

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

31:     string public constant REQUEST_PAYLOAD_EPOCH_DEPOSIT_TYPE_DESCRIPTOR = "LiquidityProviderRequestPayload_EpochDeposit(uint256 nonce,address pool,address liquidityProvider,uint256 epoch,uint256 amount,uint256 minAmountOut)";

32:     string public constant REQUEST_PAYLOAD_EPOCH_REDEEM_TYPE_DESCRIPTOR = "LiquidityProviderRequestPayload_EpochRedeem(uint256 nonce,address pool,address liquidityProvider,uint256 epoch,uint256 amount,uint256 minAmountOut)";

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

40:     string public constant REQUEST_PAYLOAD_OPEN_POSITION_TYPE_DESCRIPTOR = "UserRequestPayload_OpenPosition(uint256 nonce,PositionRequestIdentifiers positionRequestIdentifiers,PositionRequestParams positionRequestParams,uint8 orderType)PositionRequestIdentifiers(address trader,uint16 pairId,address settlementAsset,uint32 positionIndex)PositionRequestParams(bool long,uint256 collateral,uint32 leverage,uint64 minPrice,uint64 maxPrice,uint64 tp,uint64 sl,uint64 tpByFraction,uint64 slByFraction)";

41:     string public constant POSITION_REQUEST_IDENTIFIERS_TYPE_DESCRIPTOR = "PositionRequestIdentifiers(address trader,uint16 pairId,address settlementAsset,uint32 positionIndex)";

42:     string public constant POSITION_REQUEST_PARAMS_TYPE_DESCRIPTOR = "PositionRequestParams(bool long,uint256 collateral,uint32 leverage,uint64 minPrice,uint64 maxPrice,uint64 tp,uint64 sl,uint64 tpByFraction,uint64 slByFraction)";

44:     string public constant REQUEST_PAYLOAD_CLOSE_MARKET_TYPE_DESCRIPTOR = "UserRequestPayload_CloseMarket(uint256 nonce,bytes32 positionId,uint64 minPrice,uint64 maxPrice)";

46:     string public constant REQUEST_PAYLOAD_UPDATE_POSITION_SINGLE_FIELD_TYPE_DESCRIPTOR = "UserRequestPayload_UpdatePositionSingleField(uint256 nonce,bytes32 positionId,uint8 orderType,uint64 fieldValue)";

47:     string public constant REQUEST_PAYLOAD_UPDATE_POSITION_DOUBLE_FIELD_TYPE_DESCRIPTOR = "UserRequestPayload_UpdatePositionDoubleField(uint256 nonce,bytes32 positionId,uint8 orderType,uint64 fieldValueA,uint64 fieldValueB)";

49:     string public constant DIRECT_PAYLOAD_UPDATE_PENDING_LIMIT_POSITION_TYPE_DESCRIPTOR = "UserDirectPayload_UpdatePendingLimitPosition(uint256 nonce,bytes32 positionId,uint64 minPrice,uint64 maxPrice,uint64 tp,uint64 sl)";

50:     string public constant DIRECT_PAYLOAD_CANCEL_PENDING_LIMIT_POSITION_TYPE_DESCRIPTOR = "UserDirectPayload_CancelPendingLimitPosition(uint256 nonce,bytes32 positionId)";

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

28:     uint public constant SELF_UNIT_SCALE = 1e18;

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

12:     uint256 public constant VERSION_SCALE = 1000; // 1,000 = 1.00, 1,120 = 1.12

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

29:     uint public constant MAX_FEE_FRACTION_FOR_CANCEL = FRACTION_SCALE / 100; // FRACTION_SCALE

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

11:     uint public constant PRECISION = 1e18;

```

</details> 
 


 ### <a name="GAS-18"></a>[GAS-18]
 ### require()/revert() strings longer than 32 bytes cost extra gas
Each extra memory word of bytes past the original 32 [incurs an MSTORE](https://gist.github.com/hrkrshnn/ee8fabd532058307229d65dcd5836ddc#consider-having-short-revert-strings) which costs 3 gas.

*Instances (117)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

35:         require(msg.sender == admin, "not admin");

75:         require(msg.sender == admin, "Not Admin");

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

29:         require(msg.sender == admin, "Not Admin");

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

97:         require(isMintingPaused != _value, "ALREADY_SET");

168:         require(!isMintingPaused, "MINT_PAUSED");

179:             require(isPermitted, "MINT_CONTROLLER_REFUSAL");

230:         require(chipAmount != 0, "AMOUNT_ZERO");

242:             require(isPermitted, "BURN_CONTROLLER_REFUSAL");

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

66:         require(_isPaused != currentState, "ALREADY_SET");

162:         require(!isSendPaused, "SEND_PAUSED");

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

55:         require(_isPaused != currentState, "ALREADY_SET");

101:         require(!isUnderlyingRecoveryRenounced, "ALREADY_RENOUNCED");

186:         require(!isSendPaused, "SEND_PAUSED");

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

77:         require(chipSourceChain != 0, "NO_SOURCE_CHAIN_FOR_CHIP");

115:         require(lzEid != 0, "NO_LZ_EID");

138:         require(payload.receiver == payload.holder, "HOLDER_NOT_RECEIVER");

152:         require(destChainId != 0, "NO_EID_FOR_CHAIN");

188:         require(amount > fee, "AMOUNT_LESS_OR_EQUAL_FEE");

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

111:         require(payload.amount > 0, "AMOUNT_ZERO");

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

54:         require(sourceChainIdForAsset[asset] == 0, "CHAIN_ID_FOR_ASSET_ALREADY_CONFIGURED");

88:         require(chainId != 0, "NO_CHAIN_ID_FOR_ASSET");

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

220:         require(payload.positionRequestIdentifiers.trader == trader, "NOT_SIGNED_BY_TRADER");

261:         require(traderForPosition == trader, "NOT_SIGNED_BY_TRADER");

311:         require(traderForPosition == trader, "NOT_SIGNED_BY_TRADER");

365:         require(traderForPosition == trader, "NOT_SIGNED_BY_TRADER");

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

67:         require(

87:         require(

111:         require(accountBalance >= amount, "ERC20: burn amount exceeds balance");

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

62:         require(balance > pendingAmount, "Fatal error");

312:         require(immediateDepositAllowed, "!Allowed");

362:         require(!immediateDepositAllowed, "!Allowed");

433:         require(pendingDeposits[epoch][user].amount == 0, "Exists deposit");

552:         require(users.length == epochs.length, "!ArrayLengths");

669:         require(users.length == epochs.length, "!ArrayLengths");

696:         require(msg.sender == pnlRole, "!Auth");

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

37:         require(threshold <= FRACTION_SCALE, "!LiqThreshold");

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

33:         require(

46:         require(

53:         require(_pair.maxSkew <= _pair.maxOpenInterest, "MaxSkew<=MaxIO");

59:         require(_fee.id > 0, "WRONG_FEE_ID");

214:         require(_id != 0, "INVALID_ID");

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

32:         require(msg.sender == tradingFloor, "!TradingFloor");

105:         require(

151:         require(

```

```solidity
File: Lynx/Registry/RegistryV1.sol

40:         require(msg.sender == systemLockOwner, "!LockOwner");

229:         require(contractNameHashes.length == contractImplementations.length, "Arrays must be 1:1");

315:         require(versionToPublish > latestSystemVersion, "MUST_PUBLISH_NEWER_VERSION");

343:         require(currentSpenderByRole != spender, "ALREADY_SET");

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

88:         require(!isDone, "DONE");

93:         require(!isPaused, "PAUSED");

108:         require(msg.value >= actionFees[action], "NOT_ENOUGH_NATIVE");

155:         require(value > 0, "CANNOT_BE_ZERO");

162:         require(value > 0, "CANNOT_BE_ZERO");

288:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

290:         require(

338:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

340:         require(

375:         require(updatePositionFieldOrder.timestamp > 0, "NO_SUCH_UPDATE_ORDER");

400:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

402:         require(

437:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

440:         require(

483:         require(

490:         require(positionRequestParams.sl == 0 || positionRequestParams.slByFraction == 0, "MULTIPLE_SL_DEFINITIONS");

545:             revert("UNSUPPORTED");

574:         require(

612:         require(

648:         require(

693:         require(

702:         require(

715:         require(leveragedPosition <= pair.maxPositionSize, "POSITION_TOO_BIG");

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

283:         require(msg.sender == registry, "!Registry");

306:         require(value > 0, "CANNOT_BE_ZERO");

323:             revert("UNSUPPORTED");

353:         require(!pausedPairs[_requestIdentifiers.pairId], "PAIR_PAUSED");

369:         require(

403:         require(position.collateral == 0, "ID_USED");

453:         require(position.phase == PositionPhase.OPENED, "WRONG_PHASE");

479:         require(

604:         require(position.collateral > 0, "NO_SUCH_POSITION");

636:         require(triggerValid, "FALSE_TRIGGER");

683:         require(p.collateral > 0, "NO_SUCH_POSITION");

703:             require(correctedTp == fieldValue, "BAD_FIELD_VALUE");

732:             require(correctedSl == fieldValue, "BAD_FIELD_VALUE");

739:             revert("UNSUPPORTED");

788:         require(positionsById[_positionId].collateral > 0, "NO_SUCH_POSITION");

799:             require(

843:         require(positionsById[_positionId].collateral > 0, "NO_SUCH_POSITION");

853:             revert("WRONG_ORDER_TYPE");

928:         require(_position.collateral > 0, "NO_SUCH_POSITION");

934:         require(_position.phase == _expectedPhase, "WRONG_PHASE");

965:             revert("UNSUPPORTED");

1071:         require(positionLimits.sl == 0 || triggerPrices.slByFraction == 0, "MULTIPLE_SL_DEFINITIONS");

1154:             require(totalProfitF <= maxSanityProfitF, "INVALID_PROFIT");

1369:             require(

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

32:         require(_spreadF <= MAX_ALLOWED_SPREAD_FRACTION, "SPREAD_TOO_HIGH");

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

159:         require(!isDone, "DONE");

164:         require(!isPaused, "PAUSED");

253:         require(

267:         require(

361:         require(timestamp > 0, "NO_PENDING_MARKET_ORDER");

420:         require(timestamp > 0, "NO_PENDING_LIMIT_ORDER");

479:         require(timestamp > 0, "NO_PENDING_MARKET_ORDER");

528:         require(pairId > 0, "NO_SUCH_POSITION");

575:         require(pairId > 0, "NO_SUCH_POSITION");

626:         require(pairId > 0, "NO_SUCH_POSITION");

708:         require(

804:         require(

885:                 revert("UNKNOWN_CUSTOM_ERROR");

903:         require(

931:         require(timestamp > 0, "NO_SUCH_POSITION");

936:         require(

977:         require(

1014:         require(

1033:         require(

1058:         require(priceTimestamp >= oldestTimestamp, "PRICE_TOO_OLD");

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

74:         require(wrappedNativeAmount == amount, "WRAP_NATIVE_NOT_PRECISE");

```

</details> 
 


 ### <a name="GAS-19"></a>[GAS-19]
 ### Use shift Right/Left instead of division/multiplication if possible

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

77:     uint256 internal constant MIN_LEVERAGE = (1 * LEVERAGE_SCALE) / 2; // 0.5X

```

</details> 
 


 ### <a name="GAS-20"></a>[GAS-20]
 ### Splitting require() statements that use && saves gas

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

51:         require(msg.sender == pendingImplementation && pendingImplementation != address(0), "Not the EXISTING pending implementation");

93:         require(msg.sender == pendingAdmin && pendingAdmin != address(0), "Not the EXISTING pending admin");

```

```solidity
File: AdministrationContracts/ClaimableAdmin.sol

47:         require(msg.sender == pendingAdmin && pendingAdmin != address(0), "Not the EXISTING pending admin");

```

</details> 
 


 ### <a name="GAS-21"></a>[GAS-21]
 ### Structs can be packed into fewer storage slots
Each slot saved can avoid an extra Gsset (20000 gas) for the first setting of the struct. Subsequent reads as well as writes have smaller gas savings

*Instances (33)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: CryptographyContracts/EIP712Utils.sol

10:     struct EIP712Domain {

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

35:     struct HolderRequestPayload_ChipOutLZ {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

34:     struct LiquidityProviderRequestPayload_EpochDeposit {

43:     struct LiquidityProviderRequestPayload_EpochRedeem {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

52:     struct UserRequestPayload_OpenPosition {

59:     struct UserRequestPayload_CloseMarket {

67:     struct UserRequestPayload_UpdatePositionSingleField {

75:     struct UserRequestPayload_UpdatePositionDoubleField {

84:     struct UserDirectPayload_UpdatePendingLimitPosition {

94:     struct UserDirectPayload_CancelPendingLimitPosition {

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

10: struct PairPrice {

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

10:     struct PendingDeposit {

15:     struct PendingRedeem {

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

12:     struct PositionRegistrationParams {

20:     struct PairFunding {

29:     struct TradeInitialAccFees {

36:     struct PairOpenInterest {

44:     struct PairFromTo {

49:     struct Pair {

71:     struct Group {

83:     struct Fee {

```

```solidity
File: Lynx/interfaces/IPriceValidatorV1.sol

7:     struct ValidatedPrice {

```

```solidity
File: Lynx/interfaces/OrderBookStructsV1.sol

16:     struct UpdatePositionFieldOrder {

```

```solidity
File: Lynx/interfaces/TradingFloorStructsV1.sol

19:     struct PositionRequestIdentifiers {

26:     struct PositionRequestParams {

41:     struct PositionIdentifiers {

51:     struct Position {

67:     struct PositionLimitsInfo {

77:     struct PositionTriggerPrices {

88:     struct PairTraderInfo {

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

42:     struct Price {

54:     struct PriceFeed {

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

21:     mapping(uint256 => bytes32) public priceFeedIdsForPairs; // pair id to PairInfo struct

```

</details> 
 


 ### <a name="GAS-22"></a>[GAS-22]
 ### Variables can be packed into fewer storage slots by truncating timestamp bytes
By using a uint32 rather than a larger type for variables that track timestamps, one can save gas at the expense of the protocol breaking after the year 2106 (when uint32 wraps). Subsequent reads as well as writes have smaller gas savings

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

191:         uint256 currentBlockTimestamp = block.timestamp;

```

</details> 
 


 ### <a name="GAS-23"></a>[GAS-23]
 ### Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency
Using uint256(1) and uint256(2) instead of true and false can save gas for certain changes. Consider using uint256(1)/uint256(2) when appropriate.

*Instances (35)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdmin.sol

135:         return true;

```

```solidity
File: Lynx/Chips/BaseChip.sol

53:         autoApproved[oldSpender] = false;

54:         autoApproved[spender] = true;

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

102:         isUnderlyingRecoveryRenounced = true;

```

```solidity
File: Lynx/Common/CaptainBase.sol

25:         roles[role][account] = true;

29:         roles[role][account] = false;

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

44:         return true;

56:         return true;

75:         return true;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

521:             return (false, false, 0);

521:             return (false, false, 0);

523:         existed = true;

533:             deposited = true;

537:             deposited = false;

632:             return (false, false, 0, 0);

632:             return (false, false, 0, 0);

634:         existed = true;

649:             redeemed = true;

652:             redeemed = false;

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

72:             return (false, valueLong, valueShort);

98:         return (true, valueLong, valueShort);

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

195:             return (false, totalInterest, borrowIndex, interestShare);

219:         freshened = true;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

117:             true,

191:             false,

```

```solidity
File: Lynx/Registry/RegistryV1.sol

243:         isTradingFloorSupported[_tradingFloor] = true;

277:         validSystemLockOwners[_lexPool] = true;

333:         validSystemLockOwners[_currentLocker] = false;

334:         validSystemLockOwners[_newLocker] = true;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

610:         bool triggerValid = false;

628:             triggerValid = true;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

843:             return true;

857:             return false;

883:                 return false;

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

30:         return true;

```

</details> 
 


 ### <a name="GAS-24"></a>[GAS-24]
 ### Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead
Using uints or ints smaller than 32 bytes (256 bits) can incur overhead. Consider using uint256 or int256 to avoid potential issues.

*Instances (163)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/Common/CaptainBase.sol

8:     mapping(uint8 => mapping(address => bool)) roles;

9:     uint8 private immutable administrativeRole;

11:     constructor(address _initialOwner, uint8 _administrativeRole) Ownable(_initialOwner) {

15:     function _requireRole(uint8 role) internal view {

19:     modifier _onlyRole(uint8 role) {

24:     function grantRole(uint8 role, address account) external onlyOwner {

28:     function revokeRole(uint8 role, address account) external onlyOwner {

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

55:     mapping(uint16 => uint16) public evmIdToLzEid;

55:     mapping(uint16 => uint16) public evmIdToLzEid;

60:     event LzEidSet(uint16 indexed evmId, uint16 indexed lzEid);

60:     event LzEidSet(uint16 indexed evmId, uint16 indexed lzEid);

74:     function getLZDstChainIdFromChip(address chip) external view returns (uint16) {

79:         return getLZDstChainIdFromEvmChainIdInternal(uint16(chipSourceChain));

82:     function getLZDstChainIdFromEvmChainId(uint16 evmChainId) external view returns (uint16) {

82:     function getLZDstChainIdFromEvmChainId(uint16 evmChainId) external view returns (uint16) {

86:     function recoverChipOutLZPayloadSigner(HolderRequestPayload_ChipOutLZ calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

113:     function setLzEndpointId(uint16 evmId, uint16 lzEid) external onlyAdmin {

113:     function setLzEndpointId(uint16 evmId, uint16 lzEid) external onlyAdmin {

133:     function verifyIntent_chipOut(HolderRequestPayload_ChipOutLZ calldata payload, uint8 v, bytes32 r, bytes32 s) external payable {

145:             uint8(ChipsIntentsVerifierActions.CHIP_OUT_LZ),

151:         uint16 destChainId = getLZDstChainIdFromEvmChainIdInternal(uint16(chainId));

151:         uint16 destChainId = getLZDstChainIdFromEvmChainIdInternal(uint16(chainId));

258:     function getLZDstChainIdFromEvmChainIdInternal(uint16 evmChainId) internal view returns (uint16) {

258:     function getLZDstChainIdFromEvmChainIdInternal(uint16 evmChainId) internal view returns (uint16) {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

69:     function recoverEpochDepositPayloadSigner(LiquidityProviderRequestPayload_EpochDeposit calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

79:     function recoverEpochRedeemPayloadSigner(LiquidityProviderRequestPayload_EpochRedeem calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

106:     function verifyIntent_epochDeposit(LiquidityProviderRequestPayload_EpochDeposit calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domain, bytes32 referralCode) external payable {

116:             uint8(LiquidityIntentsVerifierActions.REQUEST_EPOCH_DEPOSIT),

126:     function verifyIntent_epochRedeem(LiquidityProviderRequestPayload_EpochRedeem calldata payload, uint8 v, bytes32 r, bytes32 s) external payable {

136:             uint8(LiquidityIntentsVerifierActions.REQUEST_EPOCH_REDEEM),

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

13:     mapping(address => mapping(uint8 => uint256)) public nonceMap;

23:     function getNextValidNonceFor(address account, uint8 actionType) external view returns (uint256) {

35:     function validateNonceForActionAndIncrease(address account, uint8 actionType, uint256 nonce) internal {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

13:     mapping(bytes32 => mapping(uint8 => uint256)) public nonceMap;

23:     function getNextValidNonceFor(bytes32 id, uint8 actionType) external view returns (uint256) {

35:     function validateNonceForActionAndIncrease(bytes32 id, uint8 actionType, uint256 nonce) internal {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

40:     string public constant REQUEST_PAYLOAD_OPEN_POSITION_TYPE_DESCRIPTOR = "UserRequestPayload_OpenPosition(uint256 nonce,PositionRequestIdentifiers positionRequestIdentifiers,PositionRequestParams positionRequestParams,uint8 orderType)PositionRequestIdentifiers(address trader,uint16 pairId,address settlementAsset,uint32 positionIndex)PositionRequestParams(bool long,uint256 collateral,uint32 leverage,uint64 minPrice,uint64 maxPrice,uint64 tp,uint64 sl,uint64 tpByFraction,uint64 slByFraction)";

40:     string public constant REQUEST_PAYLOAD_OPEN_POSITION_TYPE_DESCRIPTOR = "UserRequestPayload_OpenPosition(uint256 nonce,PositionRequestIdentifiers positionRequestIdentifiers,PositionRequestParams positionRequestParams,uint8 orderType)PositionRequestIdentifiers(address trader,uint16 pairId,address settlementAsset,uint32 positionIndex)PositionRequestParams(bool long,uint256 collateral,uint32 leverage,uint64 minPrice,uint64 maxPrice,uint64 tp,uint64 sl,uint64 tpByFraction,uint64 slByFraction)";

41:     string public constant POSITION_REQUEST_IDENTIFIERS_TYPE_DESCRIPTOR = "PositionRequestIdentifiers(address trader,uint16 pairId,address settlementAsset,uint32 positionIndex)";

46:     string public constant REQUEST_PAYLOAD_UPDATE_POSITION_SINGLE_FIELD_TYPE_DESCRIPTOR = "UserRequestPayload_UpdatePositionSingleField(uint256 nonce,bytes32 positionId,uint8 orderType,uint64 fieldValue)";

47:     string public constant REQUEST_PAYLOAD_UPDATE_POSITION_DOUBLE_FIELD_TYPE_DESCRIPTOR = "UserRequestPayload_UpdatePositionDoubleField(uint256 nonce,bytes32 positionId,uint8 orderType,uint64 fieldValueA,uint64 fieldValueB)";

132:     function recoverOpenPositionPayloadSigner(UserRequestPayload_OpenPosition calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

142:     function recoverCloseMarketPayloadSigner(UserRequestPayload_CloseMarket calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

152:     function recoverUpdatePositionSingleFieldPayloadSigner(UserRequestPayload_UpdatePositionSingleField calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

162:     function recoverUpdatePositionDoubleFieldPayloadSigner(UserRequestPayload_UpdatePositionDoubleField calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

172:     function recoverUpdatePendingLimitPositionSigner(UserDirectPayload_UpdatePendingLimitPosition calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

182:     function recoverCancelPendingLimitPositionSigner(UserDirectPayload_CancelPendingLimitPosition calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

208:         uint8 v,

234:             uint8(TradeIntentsVerifierActions.REQUEST_POSITION_OPEN),

253:     function verifyIntent_traderRequest_marketClosePosition(UserRequestPayload_CloseMarket calldata payload, uint8 v, bytes32 r, bytes32 s) external payable notContract  {

264:         validateNonceForActionAndIncrease(payload.positionId, uint8(TradeIntentsVerifierActions.REQUEST_POSITION_MARKET_CLOSE), payload.nonce);

275:         uint8 v,

289:         validateNonceForActionAndIncrease(payload.positionId, uint8(TradeIntentsVerifierActions.REQUEST_POSITION_SINGLE_FIELD_UPDATE), payload.nonce);

300:         uint8 v,

316:             uint8(TradeIntentsVerifierActions.REQUEST_POSITION_DOUBLE_FIELD_UPDATE),

331:         uint8 v,

344:         validateNonceForActionAndIncrease(payload.positionId, uint8(TradeIntentsVerifierActions.DIRECT_UPDATE_PENDING_LIMIT_POSITION), payload.nonce);

355:         uint8 v,

368:         validateNonceForActionAndIncrease(payload.positionId, uint8(TradeIntentsVerifierActions.DIRECT_CANCEL_PENDING_LIMIT_POSITION), payload.nonce);

```

```solidity
File: Lynx/Lex/LexCaptain.sol

25:     constructor() BaseCaptain(msg.sender, uint8(LexRole.ADMINISTRATIVE)) {}

28:         _requireRole(uint8(role));

36:         uint16 pairId

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

34:     function decimals() public pure returns (uint8) {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

489:         for (uint8 index = 0; index < users.length; index++) {

555:         for (uint8 index = 0; index < users.length; index++) {

590:         for (uint8 index = 0; index < users.length; index++) {

672:         for (uint8 index = 0; index < users.length; index++) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

59:         uint16 pairId

239:         uint16 pairId,

281:         uint16 pairId,

294:         uint16 pairId,

357:         uint16 pairId,

396:         uint16 pairId,

429:         uint16 pairId,

456:         uint16 pairId,

503:         uint16 pairId,

580:         uint16 _pairId,

714:         uint16 pairId

791:         uint16 pairId,

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

17:     modifier groupListed(uint16 _groupId) {

22:     modifier feeListed(uint16 _feeId) {

27:     modifier pairListed(uint16 _pairId) {

68:     function groupMaxBorrow(uint16 groupId) public view returns (uint256) {

77:     function pairMaxBorrow(uint16 pairId) public view returns (uint256) {

85:     function pairOpenFeeF(uint16 _pairId) public view returns (uint32) {

92:     function pairCloseFeeF(uint16 _pairId) public view returns (uint32) {

99:     function pairPerformanceFeeF(uint16 _pairId) public view returns (uint32) {

104:         uint16 _pairId

112:     function pairMinOpenFee(uint16 _pairId) public view returns (uint256) {

129:     function verifyTradersPairGains(uint16 pairId) public view {

143:     function getAllSupportedPairIds() external view returns (uint16[] memory) {

153:         returns (uint16[] memory)

161:     function getAllSupportedFeeIds() external view returns (uint16[] memory) {

182:         uint16 _id = _group.id;

213:         uint16 _id = _fee.id;

296:     function isPairListed(uint16 pairId) private view returns (bool) {

300:     function isGroupListed(uint16 groupId) private view returns (bool) {

304:     function isFeeListed(uint16 feeId) private view returns (bool) {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

223:         uint16 pairId,

234:         uint16 groupId = pairs[pairId].groupId;

253:     function repay(uint16 pairId, uint256 amount) internal {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

30:         uint16 pairId

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

84:     mapping(uint16 => Pair) public pairs;

85:     mapping(uint16 => Group) public groups;

86:     mapping(uint16 => Fee) public fees;

88:     uint16[] public supportedPairIds;

89:     uint16[] public supportedGroupIds;

90:     uint16[] public supportedFeeIds;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

83:         uint16 pairId,

151:         uint16 pairId,

240:         uint16 pairId,

318:         uint16 pairIndex,

347:         uint16 pairIndex,

363:         uint16 pairIndex,

408:         uint16 pairId,

440:         uint16 pairId,

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

131:         uint16 indexed pairId,

169:         uint16 pairId,

188:             uint16 pairId,

887:         uint16 pairId,

1239:         uint16 pairId,

1398:         uint16 pairId

1421:         uint16 pairId

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

92:         uint16 indexed pairId,

101:         uint16 indexed pairId,

130:         uint16 indexed pairId,

139:         uint16 indexed pairId

145:         uint16 indexed pairId

356:             uint16 pairId,

415:             uint16 pairId,

475:             uint16 pairId,

524:         (, , uint16 pairId, , ) = tradingFloor

571:         (, , uint16 pairId, , ) = tradingFloor

624:         (, , uint16 pairId, , ) = tradingFloor

670:         (, , uint16 pairId, , ) = tradingFloor.getPositionTriggerInfo(

713:         (, , uint16 pairId, , ) = tradingFloor.getPositionTriggerInfo(

756:         (, , uint16 pairId, , ) = tradingFloor.getPositionTriggerInfo(

898:             uint16 pairId,

927:             uint16 pairId,

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

51:         uint16 id; // 02 bytes

52:         uint16 groupId; // 02 bytes

53:         uint16 feeId; // 02 bytes

73:         uint16 id; // 02 bytes

85:         uint16 id; // 02 bytes

124:         uint16 indexed pairId,

211:         uint16 pairId,

222:         uint16 pairId,

238:         uint16 pairId,

279:         uint16 pairId,

295:         uint16 pairId,

309:         uint16 pairId,

339:     function getAllSupportedPairIds() external view returns (uint16[] memory);

341:     function getAllSupportedGroupsIds() external view returns (uint16[] memory);

343:     function getAllSupportedFeeIds() external view returns (uint16[] memory);

357:     function pairs(uint16 pairId) external view returns (Pair memory);

359:     function groups(uint16 groupId) external view returns (Group memory);

361:     function fees(uint16 feeId) external view returns (Fee memory);

```

```solidity
File: Lynx/interfaces/ITradeIncentivizerV1.sol

8:         uint16 pairId,

18:         uint16 pairId,

```

```solidity
File: Lynx/interfaces/ITradingFloorV1.sol

24:             uint16 pairId,

123:         uint16 pairId,

```

```solidity
File: Lynx/interfaces/TradingFloorStructsV1.sol

21:         uint16 pairId;

44:         uint16 pairId;           // 02 bytes

```

</details> 
 


 ### <a name="GAS-25"></a>[GAS-25]
 ### Use != 0 instead of > for unsigned integer comparison

*Instances (88)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

140:         require(payload.amount > 0, "AMOUNT_ZERO");

183:         require(fee > 0, "NO_FEE_DEFINED");

188:         require(amount > fee, "AMOUNT_LESS_OR_EQUAL_FEE");

203:         if (dustChange > 0) {

211:         if (feeAmount > 0) {

227:         if (amount > 0) {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

111:         require(payload.amount > 0, "AMOUNT_ZERO");

131:         require(payload.amount > 0, "AMOUNT_ZERO");

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

62:         require(balance > pendingAmount, "Fatal error");

296:         if (reservesToSend > 0) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

84:         if (fundingRate > fundingRateMax)

109:         bool isLongLarger = _oiLong > _oiShort;

156:         return liqPrice > 0 ? uint256(liqPrice) : 0;

316:         if (loss > minPerformanceFee) {

348:         return value > 0 ? uint256(value) : 0;

417:         uint256 collateralAfterFunding = funding > int256(collateral)

600:             if (newOpenInterest > pair.maxOpenInterest) {

610:             if (absSkew > pair.maxSkew) {

705:         return skew > 0 ? uint256(skew) : uint256(-skew);

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

59:         require(_fee.id > 0, "WRONG_FEE_ID");

131:         if (currentGains > 0 && currentGains >= int256(pairs[pairId].maxGain)) {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

79:         if (utilization > maxVirtualUtilization) {

205:         if (borrowRate > borrowRateMax) {

230:         if (newPairBorrows > pairMaxBorrow(pairId)) {

238:         if (newGroupBorrows > groupMaxBorrow(groupId)) {

245:         if (newTotalBorrows > maxTotalBorrows)

263:         if (amount > totalInterestOld) {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

266:         if (borrowNew > borrowOld) {

307:             return closePrice > tp ? tp : closePrice;

325:         if (leverage > pair.maxLeverage) {

329:         } else if (leveragedPosition > pair.maxPositionSize) {

334:         if (leverage > group.maxLeverage) {

338:         } else if (leveragedPosition > group.maxPositionSize) {

389:         if (potentialProfitPrecision > int256(maxGainPrecision)) {

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

193:         require(order.timestamp > 0, "NO_SUCH_UPDATE_ORDER");

218:         if (allPendingUpdateOrderIds.length > 1) {

```

```solidity
File: Lynx/Registry/RegistryV1.sol

315:         require(versionToPublish > latestSystemVersion, "MUST_PUBLISH_NEWER_VERSION");

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

155:         require(value > 0, "CANNOT_BE_ZERO");

162:         require(value > 0, "CANNOT_BE_ZERO");

288:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

338:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

375:         require(updatePositionFieldOrder.timestamp > 0, "NO_SUCH_UPDATE_ORDER");

400:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

437:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

497:                     ? positionRequestParams.tp >

511:                     : positionRequestParams.sl >

572:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

607:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

643:         require(inPhaseSince > 0, "NO_SUCH_POSITION");

694:             params.leverage > 0 && params.leverage >= pair.minLeverage,

703:             params.leverage > 0 && params.leverage >= group.minLeverage,

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

306:         require(value > 0, "CANNOT_BE_ZERO");

451:         require(position.collateral > 0, "NO_SUCH_POSITION");

563:         require(triggerPrices.maxPrice > 0, "NO_SUCH_POSITION");

566:             triggerPrices.minPrice > effectivePrice ||

604:         require(position.collateral > 0, "NO_SUCH_POSITION");

683:         require(p.collateral > 0, "NO_SUCH_POSITION");

742:         uint effectiveMinPrice = p.openPrice > effectivePrice

788:         require(positionsById[_positionId].collateral > 0, "NO_SUCH_POSITION");

843:         require(positionsById[_positionId].collateral > 0, "NO_SUCH_POSITION");

928:         require(_position.collateral > 0, "NO_SUCH_POSITION");

938:                 triggerPrices.minPrice > assetEffectivePrice ||

1073:         if (triggerPrices.tpByFraction > 0) {

1082:         if (triggerPrices.slByFraction > 0) {

1134:         require(positionRegistrationParams.collateral > 0, "NO_SUCH_POSITION");

1150:         if (_tradeValue > positionRegistrationParams.collateral) {

1299:             if (diff > closingFee) {

1341:         if (_amount > 0) {

1357:         if (amount > 0) {

1384:         if (amount > 0) {

1429:             if (p.length > 1) {

1474:             tp == 0 || (isLong ? tp > maxPrice : tp < minPrice),

1478:             sl == 0 || (isLong ? sl < minPrice : sl > maxPrice),

1566:         f = f > maxPnlF ? maxPnlF : f;

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

268:             _maxTriggerPeriodForMarketOrders > minTriggerPeriodForMarketOrders,

361:         require(timestamp > 0, "NO_PENDING_MARKET_ORDER");

420:         require(timestamp > 0, "NO_PENDING_LIMIT_ORDER");

479:         require(timestamp > 0, "NO_PENDING_MARKET_ORDER");

528:         require(pairId > 0, "NO_SUCH_POSITION");

529:         require(limitInfo.sl > 0, "NO_SL");

575:         require(pairId > 0, "NO_SUCH_POSITION");

576:         require(limitInfo.tp > 0, "NO_TP");

626:         require(pairId > 0, "NO_SUCH_POSITION");

902:         require(timestamp > 0, "NO_SUCH_POSITION");

931:         require(timestamp > 0, "NO_SUCH_POSITION");

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

122:         if (0 > priceInfo.expo) {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

63:         uint256 safeX = x > PRECISION ? PRECISION : x ;

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

22:         uint256 absDIff = openInterestLong > openInterestShort ?

```

</details> 
 


 ### <a name="GAS-26"></a>[GAS-26]
 ### Optimize names to save gas
public/external function names and public member variable names can be optimized to save gas. See [this](https://gist.github.com/IllIllI000/a5d8b486a8259f9f77891a919febd1a9) link for an example of how it works. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save 128 gas each during deployment, and renaming functions to have lower method IDs will save 22 gas per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

*Instances (584)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AdministrationContracts/AcceptableImplementationClaimableAdminStorage.sol

8:     address public admin;

13:     address public pendingAdmin;

33:     address public implementation;

38:     address public pendingImplementation;

45:     address public registry;

```

```solidity
File: AdministrationContracts/AcceptableRegistryImplementationClaimableAdmin.sol

12:     bytes32 immutable public CONTRACT_NAME_HASH;

```

```solidity
File: AdministrationContracts/IContractRegistryBase.sol

5:     function isImplementationValidForProxy(bytes32 proxyNameHash, address _implementation) external view returns (bool);

```

```solidity
File: CryptographyContracts/EIP712Utils.sol

17:     bytes32 public constant EIP712DOMAIN_TYPEHASH = keccak256(

```

```solidity
File: CryptographyContracts/MultiChainEIP712Base.sol

17:     string public CONTRACT_DOMAIN_NAME;

18:     string public CONTRACT_DOMAIN_VERSION;

21:     mapping(uint256 => bytes32) public domainSeparatorForChain;

```

```solidity
File: Lynx/Chips/BaseChip.sol

19:     IRegistryV1 immutable public registry;

20:     ChipMode immutable public chipMode;

25:     mapping(address => bool) public autoApproved;

28:     mapping(bytes32 => address) public autoApprovedSpendersByRoles;

32:     function getAutoApprovedSpenderAddressByRole(string calldata role) public view returns (address) {

```

```solidity
File: Lynx/Chips/EngineChip/EngineChip.sol

40:     uint public constant SELF_UNIT_SCALE = 1e18;

44:     IERC20 public immutable underlyingToken;

46:     uint256 public immutable exchangeRate;

48:     IBurnHandlerV1 public burnHandler;

50:     bool public isMintingPaused;

52:     IPoolMintControllerV1 public mintController;

53:     IPoolBurnControllerV1 public burnController;

73:     function setAutoApprovedSpenderForRole(string calldata role, address spender) external onlyAdmin {

81:     function setBurnHandler(IBurnHandlerV1 _handler) external onlyAdmin {

96:     function setIsMintingPaused(bool _value) external onlyAdmin {

107:     function setMintController(IPoolMintControllerV1 _mintController) external onlyAdmin {

124:     function setBurnController(IPoolBurnControllerV1 _burnController) external onlyAdmin {

143:     function sweepTokens(IERC20 _token, uint256 _amount) external onlyAdmin {

156:     function sweepNative(uint256 _amount) external onlyAdmin {

167:     function mintChip(address _toAddress, uint256 _amount) external nonReentrant {

195:     ) external nonReentrant {

208:     ) external payable nonReentrant {

260:     function allowance(address owner, address spender) public view virtual override returns (uint256) {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChip.sol

30:     bool public isSendPaused;

32:     ILzCreditControllerV1 public creditController;

33:     ILzDebitControllerV1 public debitController;

55:     function setAutoApprovedSpenderForRole(string calldata role, address spender) external onlyOwner {

63:     function setIsSendPaused(bool _isPaused) external onlyOwner {

77:     function setCreditController(ILzCreditControllerV1 _creditController) external onlyOwner {

94:     function setDebitController(ILzDebitControllerV1 _debitController) external onlyOwner {

114:     function sweepTokens(ERC20 _token, uint256 _amount) external onlyOwner {

177:     function allowance(address owner, address spender) public view virtual override returns (uint256) {

```

```solidity
File: Lynx/Chips/OFTChip/OFTChipAdapter.sol

31:     bool public isSendPaused;

32:     bool public isUnderlyingRecoveryRenounced;

34:     ILzCreditControllerV1 public creditController;

35:     ILzDebitControllerV1 public debitController;

52:     function setIsSendPaused(bool _isPaused) external onlyOwner {

66:     function setCreditController(ILzCreditControllerV1 _creditController) external onlyOwner {

83:     function setDebitController(ILzDebitControllerV1 _debitController) external onlyOwner {

100:     function renounceUnderlyingRecovery() external onlyOwner {

111:     function recoverUnderlying(uint256 _amount) external onlyOwner {

125:     function sweepTokens(IERC20 _token, uint256 _amount) external onlyOwner {

```

```solidity
File: Lynx/Common/CaptainBase.sol

24:     function grantRole(uint8 role, address account) external onlyOwner {

28:     function revokeRole(uint8 role, address account) external onlyOwner {

```

```solidity
File: Lynx/Common/CommonScales.sol

8:     uint256 public constant PRECISION = 1e18; // 18 decimals

10:     uint256 public constant LEVERAGE_SCALE = 100; // 2 decimal points

12:     uint256 public constant FRACTION_SCALE = 100000; // 5 decimal points

14:     uint256 public constant ACCURACY_IMPROVEMENT_SCALE = 1e9;

```

```solidity
File: Lynx/IntentsVerifier/ChipsIntentsVerifierV1.sol

33:     string public constant REQUEST_PAYLOAD_CHIP_OUT_LZ_TYPE_DESCRIPTOR = "HolderRequestPayload_ChipOutLZ(uint256 nonce,address chip,address holder,address receiver,uint256 amount)";

45:     IRegistryV1 public immutable registry;

49:     address public feesReceiver;

52:     mapping(address => uint256) public chipOutFeeForChip;

55:     mapping(uint16 => uint16) public evmIdToLzEid;

74:     function getLZDstChainIdFromChip(address chip) external view returns (uint16) {

82:     function getLZDstChainIdFromEvmChainId(uint16 evmChainId) external view returns (uint16) {

86:     function recoverChipOutLZPayloadSigner(HolderRequestPayload_ChipOutLZ calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

105:     function setChipOutFee(address chip, uint256 fee) external onlyAdmin {

113:     function setLzEndpointId(uint16 evmId, uint16 lzEid) external onlyAdmin {

123:     function setFeesReceiver(address receiver) external onlyAdmin {

133:     function verifyIntent_chipOut(HolderRequestPayload_ChipOutLZ calldata payload, uint8 v, bytes32 r, bytes32 s) external payable {

234:     function _msgSender() public view returns (address) {

```

```solidity
File: Lynx/IntentsVerifier/LiquidityIntentsVerifierV1.sol

31:     string public constant REQUEST_PAYLOAD_EPOCH_DEPOSIT_TYPE_DESCRIPTOR = "LiquidityProviderRequestPayload_EpochDeposit(uint256 nonce,address pool,address liquidityProvider,uint256 epoch,uint256 amount,uint256 minAmountOut)";

32:     string public constant REQUEST_PAYLOAD_EPOCH_REDEEM_TYPE_DESCRIPTOR = "LiquidityProviderRequestPayload_EpochRedeem(uint256 nonce,address pool,address liquidityProvider,uint256 epoch,uint256 amount,uint256 minAmountOut)";

54:     IRegistryV1 public immutable registry;

69:     function recoverEpochDepositPayloadSigner(LiquidityProviderRequestPayload_EpochDeposit calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

79:     function recoverEpochRedeemPayloadSigner(LiquidityProviderRequestPayload_EpochRedeem calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

100:     function _msgSender() public view returns (address) {

106:     function verifyIntent_epochDeposit(LiquidityProviderRequestPayload_EpochDeposit calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domain, bytes32 referralCode) external payable {

126:     function verifyIntent_epochRedeem(LiquidityProviderRequestPayload_EpochRedeem calldata payload, uint8 v, bytes32 r, bytes32 s) external payable {

```

```solidity
File: Lynx/IntentsVerifier/MultiSourceChainIntentsVerifierBase.sol

18:     mapping(address => uint256) public sourceChainIdForAsset;

29:     function domainSeparatorForAsset(address asset) public view returns (bytes32) {

40:     function storeSourceChainForAsset(address asset, uint256 chainId) virtual external onlyAdmin {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/AccountAndActionSerialNonceBase.sol

13:     mapping(address => mapping(uint8 => uint256)) public nonceMap;

23:     function getNextValidNonceFor(address account, uint8 actionType) external view returns (uint256) {

```

```solidity
File: Lynx/IntentsVerifier/NonceMechanisms/HashAndActionSerialNonceBase.sol

13:     mapping(bytes32 => mapping(uint8 => uint256)) public nonceMap;

23:     function getNextValidNonceFor(bytes32 id, uint8 actionType) external view returns (uint256) {

```

```solidity
File: Lynx/IntentsVerifier/TradeIntentsVerifierV1.sol

40:     string public constant REQUEST_PAYLOAD_OPEN_POSITION_TYPE_DESCRIPTOR = "UserRequestPayload_OpenPosition(uint256 nonce,PositionRequestIdentifiers positionRequestIdentifiers,PositionRequestParams positionRequestParams,uint8 orderType)PositionRequestIdentifiers(address trader,uint16 pairId,address settlementAsset,uint32 positionIndex)PositionRequestParams(bool long,uint256 collateral,uint32 leverage,uint64 minPrice,uint64 maxPrice,uint64 tp,uint64 sl,uint64 tpByFraction,uint64 slByFraction)";

41:     string public constant POSITION_REQUEST_IDENTIFIERS_TYPE_DESCRIPTOR = "PositionRequestIdentifiers(address trader,uint16 pairId,address settlementAsset,uint32 positionIndex)";

42:     string public constant POSITION_REQUEST_PARAMS_TYPE_DESCRIPTOR = "PositionRequestParams(bool long,uint256 collateral,uint32 leverage,uint64 minPrice,uint64 maxPrice,uint64 tp,uint64 sl,uint64 tpByFraction,uint64 slByFraction)";

44:     string public constant REQUEST_PAYLOAD_CLOSE_MARKET_TYPE_DESCRIPTOR = "UserRequestPayload_CloseMarket(uint256 nonce,bytes32 positionId,uint64 minPrice,uint64 maxPrice)";

46:     string public constant REQUEST_PAYLOAD_UPDATE_POSITION_SINGLE_FIELD_TYPE_DESCRIPTOR = "UserRequestPayload_UpdatePositionSingleField(uint256 nonce,bytes32 positionId,uint8 orderType,uint64 fieldValue)";

47:     string public constant REQUEST_PAYLOAD_UPDATE_POSITION_DOUBLE_FIELD_TYPE_DESCRIPTOR = "UserRequestPayload_UpdatePositionDoubleField(uint256 nonce,bytes32 positionId,uint8 orderType,uint64 fieldValueA,uint64 fieldValueB)";

49:     string public constant DIRECT_PAYLOAD_UPDATE_PENDING_LIMIT_POSITION_TYPE_DESCRIPTOR = "UserDirectPayload_UpdatePendingLimitPosition(uint256 nonce,bytes32 positionId,uint64 minPrice,uint64 maxPrice,uint64 tp,uint64 sl)";

50:     string public constant DIRECT_PAYLOAD_CANCEL_PENDING_LIMIT_POSITION_TYPE_DESCRIPTOR = "UserDirectPayload_CancelPendingLimitPosition(uint256 nonce,bytes32 positionId)";

102:     IRegistryV1 public immutable registry;

107:     mapping(bytes32 => bytes32) public domainSeparatorsForPosition;

109:     mapping(bytes32 => address) public tradersForPosition;

124:     function getTradersPortal() public view returns (ITradersPortalV1) {

128:     function getTradingFloor() public view returns (ITradingFloorV1) {

132:     function recoverOpenPositionPayloadSigner(UserRequestPayload_OpenPosition calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

142:     function recoverCloseMarketPayloadSigner(UserRequestPayload_CloseMarket calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

152:     function recoverUpdatePositionSingleFieldPayloadSigner(UserRequestPayload_UpdatePositionSingleField calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

162:     function recoverUpdatePositionDoubleFieldPayloadSigner(UserRequestPayload_UpdatePositionDoubleField calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

172:     function recoverUpdatePendingLimitPositionSigner(UserDirectPayload_UpdatePendingLimitPosition calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

182:     function recoverCancelPendingLimitPositionSigner(UserDirectPayload_CancelPendingLimitPosition calldata payload, uint8 v, bytes32 r, bytes32 s, bytes32 domainSeparator) public pure returns (address) {

213:         bool runCapTests) external payable notContract {

253:     function verifyIntent_traderRequest_marketClosePosition(UserRequestPayload_CloseMarket calldata payload, uint8 v, bytes32 r, bytes32 s) external payable notContract  {

278:     ) external payable notContract {

303:     ) external payable notContract {

333:         bytes32 s) external payable notContract {

357:         bytes32 s) external payable notContract {

401:     function _msgSender() public view returns (address) {

```

```solidity
File: Lynx/Lex/LexCommon.sol

16:     IERC20 public underlying;

18:     ITradingFloorV1 public tradingFloor;

```

```solidity
File: Lynx/Lex/LexPool/LexERC20.sol

17:     uint256 public totalSupply;

19:     string public name;

20:     string public symbol;

34:     function decimals() public pure returns (uint8) {

38:     function balanceOf(address account) public view returns (uint256) {

50:     ) public view returns (uint256) {

```

```solidity
File: Lynx/Lex/LexPool/LexPoolStorage.sol

13:     uint256 public underlyingDecimals;

17:     IPoolAccountantFunctionality public poolAccountant;

18:     address public pnlRole;

23:     mapping(uint256 => mapping(address => PendingDeposit))public pendingDeposits;

25:     mapping(uint256 => mapping(address => PendingRedeem)) public pendingRedeems;

28:     mapping(uint256 => address[]) public pendingDepositorsArr;

30:     mapping(uint256 => address[]) public pendingRedeemersArr;

32:     uint256 public pendingDepositAmount;

33:     uint256 public pendingWithdrawalAmount;

35:     uint256 public maxExtraWithdrawalAmountF;

36:     uint256 public minDepositAmount;

40:     uint256 public currentEpoch;

41:     uint256 public nextEpochStartMin; // Minimum timestamp that calling nextEpoch will be possible

42:     uint256 public currentExchangeRate;

43:     uint256 public epochsDelayDeposit;

44:     uint256 public epochsDelayRedeem;

45:     uint256 public epochDuration;

49:     bool public immediateDepositAllowed;

```

```solidity
File: Lynx/Lex/LexPool/LexPoolV1.sol

28:     uint public constant SELF_UNIT_SCALE = 1e18;

43:     function calcNextEpochStartMin() public view returns (uint256) {

52:     function currentBalanceInternal() public view returns (uint256) {

59:     function underlyingBalanceForExchangeRate() public view returns (uint256) {

74:     ) public view returns (uint256) {

96:     function virtualBalanceForUtilization() public view returns (uint256) {

113:     ) public view returns (uint256) {

130:     function currentVirtualUtilization() public view returns (uint256) {

145:     function isUtilizationForLPsValid() public view returns (bool) {

156:     ) public view returns (uint256 ownAmount) {

166:     function getDepositorsCount(uint256 epoch) external view returns (uint256) {

173:     function getRedeemersCount(uint256 epoch) external view returns (uint256) {

184:     ) external view returns (address[] memory depositors) {

195:     ) external view returns (address[] memory redeemers) {

230:     ) external onlyAdmin {

241:     function setPnlRole(address pnl) external onlyAdmin {

248:     function setMaxExtraWithdrawalAmountF(uint256 maxExtra) external onlyAdmin {

256:     function setEpochsDelayDeposit(uint256 delay) external onlyAdmin {

261:     function setEpochsDelayRedeem(uint256 delay) external onlyAdmin {

266:     function setEpochDuration(uint256 duration) external onlyAdmin {

271:     function setMinDepositAmount(uint256 amount) external onlyAdmin {

279:     function toggleImmediateDepositAllowed() external onlyAdmin {

287:     function reduceReserves(address _to) external onlyAdmin {

311:     ) external nonReentrant {

346:     ) external nonReentrant {

361:     ) external nonReentrant onlyLiquidityIntentsVerifier {

407:     ) external nonReentrant {

419:     ) external nonReentrant onlyLiquidityIntentsVerifier {

477:         external

668:     ) external nonReentrant {

695:     ) external nonReentrant returns (uint256 newExchangeRate) {

748:     ) external onlyTradingFloor {

```

```solidity
File: Lynx/Lex/PNLR/PNLR.sol

20:     ILexPoolV1 public pool;

21:     IPoolAccountantFunctionality public accountant;

22:     IPriceValidatorV1 public priceValidator;

26:     function allowEpochAdvancingAccount(address account) external onlyAdmin {

30:     function disallowEpochAdvancingAccount(address account) external onlyAdmin {

54:     ) external payable onlyAllowedTriggerAccount {

65:     ) public payable returns (int256) {

77:     ) public payable returns (int256 pricePnl) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantFees.sol

13:     function setFrm(IFundingRateModel _frm) external onlyAdmin {

18:     function setMinOpenFee(uint256 min) external onlyAdmin {

23:     function setLexPartF(uint256 partF) external onlyAdmin {

28:     function setFundingRateMax(uint256 maxValue) external onlyAdmin {

36:     function setLiquidationThresholdF(uint256 threshold) external onlyAdmin {

45:     function setLiquidationFeeF(uint256 fee) external onlyAdmin {

61:         public

106:     ) public pure returns (int256 indexLongChange, int256 indexShortChange) {

143:     ) public view returns (uint256) {

182:     ) public pure returns (uint256) {

229:     ) public pure returns (uint256) {

268:         public

284:     ) public view returns (uint256) {

297:     ) public view returns (uint256) {

333:     ) public view returns (uint256) {

364:         public

508:         public

685:     ) public view returns (int256) {

699:     ) public pure returns (uint256) {

715:     ) public override returns (int256 valueLong, int256 valueShort) {

739:     ) external view returns (int256) {

747:     ) external view returns (int256) {

756:     ) external view returns (uint256) {

765:     ) external view returns (uint256) {

771:     ) external view returns (int256) {

780:     ) public view override returns (int256) {

793:     ) public pure returns (bytes32 hashId) {

```

```solidity
File: Lynx/Lex/PoolAccountant/AccountantPairGroups.sol

68:     function groupMaxBorrow(uint16 groupId) public view returns (uint256) {

77:     function pairMaxBorrow(uint16 pairId) public view returns (uint256) {

85:     function pairOpenFeeF(uint16 _pairId) public view returns (uint32) {

92:     function pairCloseFeeF(uint16 _pairId) public view returns (uint32) {

99:     function pairPerformanceFeeF(uint16 _pairId) public view returns (uint32) {

112:     function pairMinOpenFee(uint16 _pairId) public view returns (uint256) {

129:     function verifyTradersPairGains(uint16 pairId) public view {

143:     function getAllSupportedPairIds() external view returns (uint16[] memory) {

151:         external

161:     function getAllSupportedFeeIds() external view returns (uint16[] memory) {

170:     function resetTradersPairGains(uint256 pairId) external onlyAdmin {

181:     ) external onlyAdmin groupOk(_group) {

199:     ) external onlyAdmin groupListed(_group.id) groupOk(_group) {

212:     ) external onlyAdmin feeOk(_fee) {

229:     ) external onlyAdmin feeListed(_fee.id) feeOk(_fee) {

240:     ) external onlyAdmin {

250:     ) external onlyAdmin {

```

```solidity
File: Lynx/Lex/PoolAccountant/Debts.sol

16:     function setIrm(IInterestRateModel _irm) external onlyAdmin {

25:     function setIrmHard(IInterestRateModel _irm) external onlyAdmin {

30:     function setInterestShareFactor(uint256 factor) external onlyAdmin {

39:     function setBorrowRateMax(uint256 rate) external onlyAdmin {

44:     function setMaxTotalBorrows(uint256 maxBorrows) external onlyAdmin {

54:     ) external onlyAdmin {

73:     ) public view {

91:         external

107:         public

155:         public

182:         public

273:     function unrealizedFunding() public view returns (int256) {

281:         public

291:     function totalReservesView() public view returns (uint256) {

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantBase.sol

31:     ) public virtual returns (int256 valueLong, int256 valueShort);

37:     ) public view virtual returns (int256);

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantStorage.sol

18:     address public tradeIncentivizer;

19:     uint256 public maxGainF; // 900% PnL (10x)

25:     IFundingRateModel public frm;

26:     uint256 public fundingRateMax;

28:     uint256 public liquidationThresholdF; // -90% (of collateral)

29:     uint256 public liquidationFeeF; // 5% (of collateral after fees)

30:     uint256 public lexPartF; // FRACTION_SCALE

32:     mapping(uint256 => int256) public pairTotalRatioOiToP;

34:     int256 public realizedFundingSurplusDeficit;

37:     mapping(uint256 => PairFunding) public pairFunding;

40:     mapping(bytes32 => TradeInitialAccFees) public tradeInitialAccFees;

43:     mapping(bytes32 => uint256) public tradeAccInterest; // Accrued interest for a specific trade and not yet paid

46:     mapping(uint256 => PairOpenInterest) public openInterestInPair;

48:     uint256 public minOpenFee; // Underlying decimals - this is the default value if not set on the pair nor the group level

54:     IInterestRateModel public irm;

56:     uint256 public totalBorrows;

57:     uint256 public borrowIndex;

58:     uint256 public accrualBlockTimestamp;

59:     uint256 public totalInterest;

61:     uint256 public interestShare;

63:     mapping(uint256 => uint256) public pairBorrows;

64:     mapping(uint256 => uint256) public groupBorrows;

66:     uint256 public interestShareFactor; // FRACTION_SCALE

67:     uint256 public borrowRateMax;

69:     uint256 public maxTotalBorrows;

71:     uint256 public maxVirtualUtilization; // Percentage mantissa (85%) (PRECISION SCALE)

80:     uint256 public pairsCount;

81:     uint256 public groupsCount;

82:     uint256 public feesCount;

84:     mapping(uint16 => Pair) public pairs;

85:     mapping(uint16 => Group) public groups;

86:     mapping(uint16 => Fee) public fees;

88:     uint16[] public supportedPairIds;

89:     uint16[] public supportedGroupIds;

90:     uint16[] public supportedFeeIds;

92:     mapping(uint256 => int256) public tradersPairGains; // Gains and losses in pair (traders accumulated gains and losses)

98:     ILexPoolV1 public lexPool;

```

```solidity
File: Lynx/Lex/PoolAccountant/PoolAccountantV1.sol

41:     ) external onlyAdmin {

49:     function setMaxGainF(uint256 _maxGainF) external onlyAdmin {

90:         external

156:         external

247:     ) external override onlyTradingFloor {

305:     ) public pure returns (uint256) {

321:     ) public view returns (uint256 leveragedPosition) {

349:     ) public view returns (uint256 openFee, uint256 lexPartFee) {

365:     ) public view {

379:     ) public view {

```

```solidity
File: Lynx/OrderBook/OrderBookStorage.sol

19:     address public tradingFloor;

24:     mapping(bytes32 => uint) public updateOrderIdPositionInList;

26:     bytes32[] public allPendingUpdateOrderIds;

30:         public pendingUpdateTradeFieldOrdersById;

```

```solidity
File: Lynx/OrderBook/OrderBookV1.sol

56:     external

78:     function setTradingFloor(address _tradingFloor) external onlyAdmin {

100:         external

146:     external

187:         external

```

```solidity
File: Lynx/Registry/RegistryStorage.sol

12:     uint256 public constant VERSION_SCALE = 1000; // 1,000 = 1.00, 1,120 = 1.12

17:     address public systemLockOwner;

20:     mapping(address => bool) public validSystemLockOwners;

25:     mapping(bytes32 => uint256) public latestVersions;

28:     mapping(uint256 => mapping(bytes32 => address)) public implementations;

34:     mapping(address => bool) public isTradingFloorSupported;

37:     address[] public supportedTradingFloors;

40:     mapping(address => address[]) public settlementAssetsForTradingFloor;

46:     mapping(address => address) public feesManagers;

49:     mapping(bytes32 => address) public dynamicRoleAddresses;

51:     address public orderBook;

53:     address public tradersPortal;

55:     address public triggers;

57:     address public tradeIntentsVerifier;

59:     address public liquidityIntentsVerifier;

61:     address public chipsIntentsVerifier;

67:     mapping(address => mapping(bytes32 => address)) public validSpenderTargetForChipByRole;

70:     mapping(address => address) public validBurnHandlerForChip;

```

```solidity
File: Lynx/Registry/RegistryV1.sol

44:     function lock() external override {

51:     function freeLock() external override onlyLockOwner {

55:     function isTradersPortalAndLocker(address _address) external view returns (bool) {

59:     function isTriggersAndLocker(address _address) external view returns (bool) {

63:     function isTradersPortalOrTriggersAndLocker(address _address) external view returns (bool) {

72:     function isImplementationValidForProxy(bytes32 proxyNameHash, address _implementation) external view returns (bool) {

81:     function getLatestImplementationForProxyByHash(bytes32 proxyNameHash) external view returns (address) {

88:     function getLatestImplementationForProxyByName(string calldata proxyName) external view returns (address) {

97:     function getAllSupportedTradingFloors() external view returns (address[] memory)  {

104:     function getSettlementAssetsForTradingFloor(address _tradingFloor) external view returns (address[] memory) {

111:     function getDynamicRoleAddress(string calldata _role) external view returns (address) {

119:     function getValidSpenderTargetForChipByRole(address chip, string calldata role) external view returns (address) {

129:     function setDynamicRoleAddress(string calldata _role, address _address) external onlyAdmin {

138:     function setOrderBook(address _orderBook) external onlyAdmin {

150:     function setTradersPortal(address _tradersPortal) external onlyAdmin {

162:     function setTriggers(address _triggers) external onlyAdmin {

170:     function setTradeIntentsVerifier(address _tradeIntentsVerifier) external onlyAdmin {

178:     function setLiquidityIntentsVerifier(address _liquidityIntentsVerifier) external onlyAdmin {

186:     function setChipsIntentsVerifier(address _chipsIntentsVerifier) external onlyAdmin {

194:     function setFeesManager(address asset, address feesManager) external onlyAdmin {

203:     function setValidChipSpenderTargetByRole(address chip, string calldata role, address spender) external onlyAdmin {

210:     function setValidChipBurnHandler(address chip, address burnHandler) external onlyAdmin {

219:         address contractImplementation) external onlyAdmin {

228:         address[] calldata contractImplementations) external onlyAdmin {

242:     function supportTradingFloor(address _tradingFloor) external onlyAdmin {

258:     ) external onlyAdmin {

```

```solidity
File: Lynx/TradersPortal/TradersPortalV1.sol

27:     address public NATIVE_UNDERLYING_ADDRESS = address(0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE);

39:     ITradingFloorV1 public immutable tradingFloor;

40:     IRegistryV1 public immutable registry;

44:     uint public limitOrdersTimelock; // seconds (eg. 30)

45:     uint public marketOrdersTimeout; // seconds (eg. 30)

47:     mapping(TradersPortalActions => uint256) public actionFees;

51:     bool public isPaused; // Prevent opening new trades

52:     bool public isDone; // Prevent any interaction with the contract

56:     bool public isLimitingMarketClosePriceRange;

114:     function getOrderBook() public view returns (IOrderBookV1 orderBook) {

120:     function getTradeIntentsVerifier() public view returns (address tradeIntentsVerifier) {

140:     function togglePause() external onlyAdmin {

146:     function toggleDone() external onlyAdmin {

154:     function setLimitOrdersTimelock(uint value) external onlyAdmin {

161:     function setMarketOrdersTimeout(uint value) external onlyAdmin {

168:     function toggleLimitCloseOrdersRange() external onlyAdmin {

176:     function setNativeFeeForAction(TradersPortalActions action, uint256 requiredFee) external onlyAdmin {

183:     function collectNativeFees(address payable _to) external onlyFeesManager {

208:     ) external payable override notContract notDoneOrPaused nonReentrant sentEnoughNativeFee(TradersPortalActions.REQUEST_POSITION_OPEN) returns (bytes32) {

224:     ) external payable override notContract notDoneOrPaused nonReentrant sentEnoughNativeFee(TradersPortalActions.REQUEST_POSITION_MARKET_CLOSE) {

240:     ) external payable override notContract notDoneOrPaused nonReentrant sentEnoughNativeFee(TradersPortalActions.REQUEST_POSITION_SINGLE_FIELD_UPDATE) {

257:     ) external payable override notContract notDoneOrPaused nonReentrant sentEnoughNativeFee(TradersPortalActions.REQUEST_POSITION_DOUBLE_FIELD_UPDATE) {

279:     ) external notContract notDoneOrPaused nonReentrant {

325:     ) external notContract notDoneOrPaused nonReentrant {

367:     ) external notContract notDone nonReentrant {

391:     ) external notContract notDone nonReentrant {

428:     ) external notContract notDone nonReentrant {

729:     function _msgSender() public view returns (address) {

```

```solidity
File: Lynx/TradingFloor/TradingFloorStorage.sol

19:     uint public maxTradesPerPair;

21:     uint public maxSlF; // FRACTION_SCALE (5)

23:     uint public maxSanityProfitF; // FRACTION_SCALE (5)

27:     mapping(uint => bool) public pausedPairs;

32:     mapping(address => mapping(FeeType => uint)) public feesMap;

37:     mapping(address => address) public lexPoolForAsset;

39:     mapping(address => address) public poolAccountantForAsset;

44:     mapping(bytes32 => PositionIdentifiers) public positionIdentifiersById;

49:     mapping(bytes32 => Position) public positionsById;

52:     mapping(bytes32 => PositionLimitsInfo) public positionLimitsInfoById;

55:     mapping(bytes32 => PositionTriggerPrices) public triggerPricesById;

58:     mapping(bytes32 => uint) public initialCollateralByPositionId;

61:     mapping(address => mapping(uint => address[])) public pairTraders;

64:         public pairTradersInfo;

```

```solidity
File: Lynx/TradingFloor/TradingFloorV1.sol

29:     uint public constant MAX_FEE_FRACTION_FOR_CANCEL = FRACTION_SCALE / 100; // FRACTION_SCALE

171:     ) public pure returns (bytes32 hashId) {

183:         external

208:         external

225:         public

248:     ) public view returns (bool) {

258:     ) external view returns (address[] memory) {

305:     ) external onlyAdmin {

332:     function setPairPaused(uint _pairId, bool _isPaused) external onlyAdmin {

348:     ) external override onlyTradersPortal returns (bytes32 positionId) {

448:     ) external override onlyTradersPortal {

475:     ) external override onlyTradersPortal {

527:     ) external onlyTriggers {

543:     ) external onlyTriggers {

559:     ) external override onlyTriggers {

602:     ) external override onlyTriggers {

674:     ) external onlyTriggers {

779:     ) external override onlyTradersPortalOrTriggers {

827:     ) external override onlyTradersPortalOrTriggers {

```

```solidity
File: Lynx/Triggers/ConfidenceChecker.sol

11:     uint immutable public MAX_ALLOWED_CONFIDENCE_FRACTION;

15:     mapping(uint => uint32) public maxConfidenceFractionForPair; // FRACTION_SCALE (5)

```

```solidity
File: Lynx/Triggers/PriceAdjustmentBase.sol

13:     uint immutable public MAX_ALLOWED_SPREAD_FRACTION; // FRACTION_SCALE (5)

17:     mapping(uint => uint32) public spreadFractionForPair; // FRACTION_SCALE (5)

```

```solidity
File: Lynx/Triggers/TriggersPermissionBase.sol

31:     function isAllowedToTrigger(address account) public view returns (bool) {

35:     function getAllTriggerPermissionedAccounts() public view returns (address[] memory) {

```

```solidity
File: Lynx/Triggers/TriggersV1.sol

29:     ITradingFloorV1 public immutable tradingFloor;

30:     IOrderBookV1 public immutable orderBook;

31:     IPriceValidatorV1 public priceValidator;

35:     uint public minTriggerPeriodForMarketOrders = 3; // seconds

36:     uint public maxTriggerPeriodForMarketOrders = 60; // seconds

38:     uint public minTriggerPeriodForLimitOrders = 60; // seconds

40:     uint public marketOrdersTimeout = 60; // seconds e.g 30

43:     uint public marketOrderTightTimeRange = 60 * 3; // 5 seconds

46:     uint public triggerPriceFreshnessTimeRange = 60 * 30; // 30 minutes

48:     uint public marketOrderCancelFeeFraction = (1 * FRACTION_SCALE) / 1000; // FRACTION_SCALE (0.001 = 0.01%)

50:     uint public openPositionCancellationFeeFraction =

53:     uint public maxTriggersPerBlock = 3;

55:     mapping(uint => uint) public triggersPerBlock;

59:     bool public isPaused; // Prevent opening new trades

60:     bool public isDone; // Prevent any interaction with the contract

173:     ) public payable returns (IPriceValidatorV1.ValidatedPrice memory) {

202:     function togglePause() external onlyAdmin {

208:     function toggleDone() external onlyAdmin {

216:     function setPriceValidator(address _priceValidator) external onlyAdmin {

228:     function allowTriggerAccount(address account) external onlyAdmin {

232:     function disallowTriggerAccount(address account) external onlyAdmin {

239:     ) external onlyAdmin {

246:     ) external onlyAdmin {

252:     ) external onlyAdmin {

266:     ) external onlyAdmin {

280:     ) external onlyAdmin {

290:     ) external onlyAdmin {

297:     ) external onlyAdmin {

307:     ) external onlyAdmin {

317:     ) external onlyAdmin {

327:     ) external onlyAdmin {

337:     ) external onlyAdmin {

352:     ) external payable notDoneOrPaused onlyAllowedTriggerAccount nonReentrant {

411:     ) external payable notDoneOrPaused onlyAllowedTriggerAccount nonReentrant {

471:     ) external payable notDoneOrPaused onlyAllowedTriggerAccount nonReentrant {

523:     ) external payable notDoneOrPaused onlyAllowedTriggerAccount nonReentrant {

570:     ) external payable notDoneOrPaused onlyAllowedTriggerAccount nonReentrant {

623:     ) external payable notDoneOrPaused onlyAllowedTriggerAccount nonReentrant {

661:     ) external payable notDoneOrPaused onlyAllowedTriggerAccount nonReentrant {

704:     ) external payable notDoneOrPaused onlyAllowedTriggerAccount nonReentrant {

747:     ) external payable notDoneOrPaused onlyAllowedTriggerAccount nonReentrant {

800:     ) external notDoneOrPaused onlyAllowedTriggerAccount nonReentrant {

894:     ) external notDoneOrPaused onlyAllowedTriggerAccount nonReentrant {

923:     ) external notDoneOrPaused onlyAllowedTriggerAccount nonReentrant {

```

```solidity
File: Lynx/interfaces/IBurnHandlerV1.sol

10:     ) external payable;

```

```solidity
File: Lynx/interfaces/IFundingRateModel.sol

12:     ) external view returns (uint256);

```

```solidity
File: Lynx/interfaces/IInterestRateModel.sol

7:     function getBorrowRate(uint256 utilization) external view returns (uint256);

```

```solidity
File: Lynx/interfaces/ILexPoolV1.sol

158:     function currentVirtualUtilization() external view returns (uint256);

164:     ) external view returns (uint256);

166:     function virtualBalanceForUtilization() external view returns (uint256);

171:     ) external view returns (uint256);

173:     function underlyingBalanceForExchangeRate() external view returns (uint256);

177:     function isUtilizationForLPsValid() external view returns (bool);

181:     function name() external view returns (string memory);

183:     function symbol() external view returns (string memory);

185:     function SELF_UNIT_SCALE() external view returns (uint);

187:     function underlyingDecimals() external view returns (uint256);

189:     function poolAccountant() external view returns (address);

191:     function underlying() external view returns (IERC20);

193:     function tradingFloor() external view returns (address);

195:     function currentEpoch() external view returns (uint256);

197:     function currentExchangeRate() external view returns (uint256);

199:     function nextEpochStartMin() external view returns (uint256);

201:     function epochDuration() external view returns (uint256);

203:     function minDepositAmount() external view returns (uint256);

205:     function epochsDelayDeposit() external view returns (uint256);

207:     function epochsDelayRedeem() external view returns (uint256);

209:     function immediateDepositAllowed() external view returns (bool);

214:     ) external view returns (PendingDeposit memory);

219:     ) external view returns (PendingRedeem memory);

221:     function pendingDepositAmount() external view returns (uint256);

223:     function pendingWithdrawalAmount() external view returns (uint256);

```

```solidity
File: Lynx/interfaces/ILzCreditControllerV1.sol

5:     function isCreditController() external view returns (bool);

```

```solidity
File: Lynx/interfaces/ILzDebitControllerV1.sol

5:     function isDebitController() external view returns (bool);

```

```solidity
File: Lynx/interfaces/IOrderBookV1.sol

30:     function PRECISION() external pure returns (uint);

34:     function tradingFloor() external view returns (address);

40:     ) external view returns (UpdatePositionFieldOrder memory);

```

```solidity
File: Lynx/interfaces/IPoolAccountantV1.sol

317:     function unrealizedFunding() external view returns (int256);

319:     function totalBorrows() external view returns (uint256);

321:     function interestShare() external view returns (uint256);

323:     function totalReservesView() external view returns (uint256);

326:         external

332:     ) external view returns (int256);

337:     ) external view returns (int256);

339:     function getAllSupportedPairIds() external view returns (uint16[] memory);

341:     function getAllSupportedGroupsIds() external view returns (uint16[] memory);

343:     function getAllSupportedFeeIds() external view returns (uint16[] memory);

347:     function lexPool() external view returns (ILexPoolV1);

349:     function maxGainF() external view returns (uint256);

351:     function interestShareFactor() external view returns (uint256);

353:     function frm() external view returns (IFundingRateModel);

355:     function irm() external view returns (IInterestRateModel);

357:     function pairs(uint16 pairId) external view returns (Pair memory);

359:     function groups(uint16 groupId) external view returns (Group memory);

361:     function fees(uint16 feeId) external view returns (Fee memory);

365:     ) external view returns (PairOpenInterest memory);

367:     function minOpenFee() external view returns (uint256);

369:     function liquidationThresholdF() external view returns (uint256);

371:     function liquidationFeeF() external view returns (uint256);

373:     function lexPartF() external view returns (uint256);

```

```solidity
File: Lynx/interfaces/IPoolBurnControllerV1.sol

9:     function isPoolBurnController() external view returns (bool);

```

```solidity
File: Lynx/interfaces/IPoolMintControllerV1.sol

9:     function isPoolMintController() external view returns (bool);

```

```solidity
File: Lynx/interfaces/IPriceValidatorV1.sol

13:     function isPriceValidator() external view returns (bool);

17:     ) external view returns (uint256 feeAmount);

22:     ) external payable returns (ValidatedPrice memory validatedPrice);

```

```solidity
File: Lynx/interfaces/IRateModelV1.sol

9:     function getRate(uint256 x) external view returns (uint256);

```

```solidity
File: Lynx/interfaces/IRegistryV1.sol

11:     function isTradersPortalAndLocker(address _address) external view returns (bool);

12:     function isTriggersAndLocker(address _address) external view returns (bool);

13:     function isTradersPortalOrTriggersAndLocker(address _address) external view returns (bool);

20:     function feesManagers(address asset) external view returns (address);

21:     function orderBook() external view returns (address);

22:     function tradersPortal() external view returns (address);

23:     function triggers() external view returns (address);

24:     function tradeIntentsVerifier() external view returns (address);

25:     function liquidityIntentsVerifier() external view returns (address);

26:     function chipsIntentsVerifier() external view returns (address);

32:     function getValidSpenderTargetForChipByRole(address chip, string calldata role) external view returns (address);

37:     function validBurnHandlerForChip(address chip) external view returns (address);

```

```solidity
File: Lynx/interfaces/ITradersPortalV1.sol

16:     ) external payable returns (bytes32);

22:     ) external payable;

28:     ) external payable;

35:     ) external payable;

54:     function tradingFloor() external view returns (address);

```

```solidity
File: Lynx/interfaces/ITradingFloorV1.sol

19:         external

32:         external

111:     function PRECISION() external pure returns (uint);

118:     ) external view returns (address[] memory);

125:     ) external pure returns (bytes32 hashId);

129:     function lexPoolForAsset(address asset) external view returns (ILexPoolV1);

133:     ) external view returns (IPoolAccountantV1);

135:     function registry() external view returns (address);

139:     function positionsById(bytes32 id) external view returns (Position memory);

143:     ) external view returns (PositionIdentifiers memory);

147:     ) external view returns (PositionLimitsInfo memory);

151:     ) external view returns (PositionTriggerPrices memory);

157:     ) external view returns (PairTraderInfo memory);

159:     function spreadReductionsP(uint) external view returns (uint);

161:     function maxSlF() external view returns (uint);

163:     function maxTradesPerPair() external view returns (uint);

165:     function maxSanityProfitF() external view returns (uint);

```

```solidity
File: Lynx/interfaces/IWrappedNative.sol

5:     function deposit() external payable returns (uint256);

```

```solidity
File: Peripheral/Chips/WrappedNativeEngineChipHelper.sol

21:     IWrappedNative immutable public wrappedNativeToken;

22:     EngineChip immutable public wrappedNativeEngineChip;

36:     receive() external payable {

42:     function wrapNativeAndMintEngineChip() external payable {

58:     ) external override payable {

```

```solidity
File: Peripheral/PriceValidators/IPyth.sol

65:     function chainId() external view returns (uint256 chainId);

69:     ) external view returns (PythStructs.Price memory price);

73:     ) external view returns (PythStructs.Price memory price);

77:     ) external view returns (uint256 feeAmount);

79:     function updatePriceFeeds(bytes[] calldata updateData) external payable;

86:     ) external payable returns (PythStructs.PriceFeed[] memory priceFeeds);

```

```solidity
File: Peripheral/PriceValidators/PythPriceValidator.sol

19:     IPyth public pythContract;

21:     mapping(uint256 => bytes32) public priceFeedIdsForPairs; // pair id to PairInfo struct

23:     uint public maxPublicationPeriodInPast = 5 * 60; // in seconds

29:     function isPriceValidator() external pure returns (bool) {

38:     ) external onlyAdmin {

45:     ) external onlyAdmin {

55:     ) external view returns (PythStructs.Price memory price) {

61:     ) external view returns (PythStructs.Price memory price) {

67:     ) external view returns (PythStructs.Price memory price) {

73:     ) external view returns (uint256 feeAmount) {

82:     ) external payable returns (PythStructs.Price memory price) {

93:     ) external payable override returns (ValidatedPrice memory validatedPrice) {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/BaseSingleKinkRateModel.sol

11:     uint public constant PRECISION = 1e18;

16:     uint256 public baseRate;

21:     uint256 public multiplier;

26:     uint256 public kink;

31:     uint256 public postKinkMultiplier;

37:     uint256 public rateOnKink;

41:     function getRate(uint256 x) external view returns (uint256) {

```

```solidity
File: Peripheral/RateModels/BaseModels/SingleKinkRateModel/MutableSingleKinkRateModel.sol

15:     function setRateParams(uint256 _baseRate, uint256 _multiplier, uint256 _kink, uint256 _postKinkMultiplier) external onlyOwner {

```

```solidity
File: Peripheral/RateModels/BaseModels/SteadyRateModel/SteadyRateModel.sol

7:     uint public defaultRate;

15:     function setDefaultSteadyRate(uint _newDefaultRate) external onlyOwner {

```

```solidity
File: Peripheral/RateModels/FRM/MutableSingleKinkFundingRateModel.sol

21:     ) external view override returns (uint256) {

```

```solidity
File: Peripheral/RateModels/FRM/SteadyFundingRateModel.sol

18:     ) external view override returns (uint256) {

```

```solidity
File: Peripheral/RateModels/IRM/MutableSingleKinkInterestRateModel.sol

17:     ) external view override returns (uint256) {

```

```solidity
File: Peripheral/RateModels/IRM/SteadyInterestRateModel.sol

14:     ) external view override returns (uint256) {

```

</details> 
 

