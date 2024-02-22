# Report


## Medium Issues


| |Issue|Instances|
|-|:-|:-:|
| [M-1](#M-1) | Code will not work properly on L2 due to block.number | 2 |
| [M-2](#M-2) | Return Value of Call or Delegatecall Not Checked | 1 |
| [M-3](#M-3) | Centralization Risk for trusted owners | 13 |
| [M-4](#M-4) | Unsafe use of ERC20 transferFrom() | 5 |
| [M-5](#M-5) | Unsafe use of ERC20 transfer() | 3 |

## Low Issues


| |Issue|Instances|
|-|:-|:-:|
| [L-1](#L-1) | complex casting | 69 |
| [L-2](#L-2) | Avoid using abi.encodeWithSelector and abi.encodeWithSignature | 1 |
| [L-3](#L-3) | Functions calling contracts/addresses with transfer hooks are missing reentrancy guards | 3 |
| [L-4](#L-4) | decimals() is not a part of the ERC-20 standard | 1 |
| [L-5](#L-5) | Tokens may be minted to address(0x0) | 4 |
| [L-6](#L-6) | constructor/initialize function lacks parameter validation | 3 |
| [L-7](#L-7) | Division by zero not prevented | 38 |
| [L-8](#L-8) | Empty function body | 2 |
| [L-9](#L-9) | External Function Calls Within Loops | 1 |
| [L-10](#L-10) | Initializers could be front-run | 3 |
| [L-11](#L-11) | Missing contract existence checks before low-level calls | 1 |
| [L-12](#L-12) | Use Ownable2Step instead of Ownable | 6 |
| [L-13](#L-13) | Owner can renounce Ownership   | 6 |
| [L-14](#L-14) | Loss of precision | 38 |
| [L-15](#L-15) | State variables not capped at reasonable values | 44 |
| [L-16](#L-16) | Some tokens may revert when zero value transfers are made | 3 |
| [L-17](#L-17) |  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard   | 3 |
| [L-18](#L-18) | Some tokens may revert when large transfers are made | 9 |
| [L-19](#L-19) | Unsafe casting | 6 |
| [L-20](#L-20) | Unsafe ERC20 operation(s) | 5 |

## Non Critical Issues


| |Issue|Instances|
|-|:-|:-:|
| [NC-1](#NC-1) | Contracts should have full test coverage | 9 |
| [NC-2](#NC-2) | Consider adding formal verification proofs | 9 |
| [NC-3](#NC-3) | Large or complicated code bases should implement invariant tests | 9 |
| [NC-4](#NC-4) | assert() should be replaced with require() or revert() | 1 |
| [NC-5](#NC-5) | Custom error has no error details | 17 |
| [NC-6](#NC-6) | NatSpec: Interface declarations should have NatSpec descriptions | 5 |
| [NC-7](#NC-7) | NatSpec: Library declarations should have NatSpec descriptions | 3 |
| [NC-8](#NC-8) | Variables without visibility specifier | 23 |
| [NC-9](#NC-9) | Array is push()ed but not pop()ed | 1 |
| [NC-10](#NC-10) | Assembly blocks should have extensive comments | 1 |
| [NC-11](#NC-11) | Constants in comparisons should appear on the left side | 82 |
| [NC-12](#NC-12) | constants should be defined rather than using magic numbers | 104 |
| [NC-13](#NC-13) | Contracts Defined in Separate Files | 3 |
| [NC-14](#NC-14) | Contract declarations should have NatSpec @author annotations | 8 |
| [NC-15](#NC-15) | Contract declarations should have NatSpec @Title annotations | 8 |
| [NC-16](#NC-16) | NatSpec: Contract declarations should have @dev tags | 8 |
| [NC-17](#NC-17) | NatSpec: Contract declarations should have NatSpec descriptions | 8 |
| [NC-18](#NC-18) | NatSpec: Contract declarations should have @notice tags | 8 |
| [NC-19](#NC-19) | Consider using delete rather than assigning zero to clear value | 20 |
| [NC-20](#NC-20) | Consider using delete rather than assigning false to clear value | 3 |
| [NC-21](#NC-21) | Consider adding a block/deny-list" | 8 |
| [NC-22](#NC-22) | Use bytes.concat() on bytes instead of abi.encodePacked() for clearer semantic meaning | 2 |
| [NC-23](#NC-23) | Consider adding emergency-stop functionality | 8 |
| [NC-24](#NC-24) | Error declarations should have NatSpec descriptions | 26 |
| [NC-25](#NC-25) | Custom error has no error details | 26 |
| [NC-26](#NC-26) | Events are missing sender information | 22 |
| [NC-27](#NC-27) | NatSpec: Event declarations should have NatSpec descriptions | 24 |
| [NC-28](#NC-28) | contracts should use fixed compiler versions | 2 |
| [NC-29](#NC-29) | NatSpec: function declarations should have NatSpec descriptions | 114 |
| [NC-30](#NC-30) | NatSpec: function declarations should have @Notice tags | 114 |
| [NC-31](#NC-31) | NatSpec: function declarations should have NatSpec descriptions | 114 |
| [NC-32](#NC-32) | Order of Functions Does Not Follow Solidity Style Guide | 3 |
| [NC-33](#NC-33) | If-statement can be converted to a ternary | 72 |
| [NC-34](#NC-34) | Variable names for immutables should use CONSTANT_CASE | 7 |
| [NC-35](#NC-35) | Contract Does Not Implement Any Interfaces | 2 |
| [NC-36](#NC-36) | Large multiples of ten should use scientific notation | 1 |
| [NC-37](#NC-37) | Consider using named mappings | 4 |
| [NC-38](#NC-38) | Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct | 15 |
| [NC-39](#NC-39) | Use of override is unnecessary | 6 |
| [NC-40](#NC-40) | Consider using descriptive constants when using 0 in the code | 10 |
| [NC-41](#NC-41) | Non-external/public variable names should begin with an underscore | 36 |
| [NC-42](#NC-42) | Return values of `approve()` not checked | 3 |
| [NC-43](#NC-43) | Setters should prevent re-setting of the same value | 7 |
| [NC-44](#NC-44) | Use the latest solidity version for deployment   | 9 |
| [NC-45](#NC-45) | Use uint256/int256 Instead of uint/int | 2 |
| [NC-46](#NC-46) | Consider bounding input array length | 10 |
| [NC-47](#NC-47) | Overflows in unchecked blocks | 12 |
| [NC-48](#NC-48) | Event is missing `indexed` fields | 2 |
| [NC-49](#NC-49) | Constants should be defined rather than using magic numbers | 20 |
| [NC-50](#NC-50) | Consider Turning Utility Contract Into a Library | 1 |
| [NC-51](#NC-51) | Variables need not be initialized to zero | 14 |
| [NC-52](#NC-52) | Import Whole Files Instead of Specific Identifiers | 4 |
| [NC-53](#NC-53) | Empty receive()/fallback() function | 2 |
| [NC-54](#NC-54) | Consider implementing two-step procedure for updation | 1 |
| [NC-55](#NC-55) | Consider moving msg.sender checks to modifiers | 18 |
| [NC-56](#NC-56) | Dont use _msgSender() if not supporting EIP-2771 | 8 |
| [NC-57](#NC-57) | Array indices should be referenced via enums rather than numeric literals | 4 |
| [NC-58](#NC-58) | Use assembly to emit events, in order to save gas | 27 |
| [NC-59](#NC-59) | Don't initialize variables with default value | 14 |
| [NC-60](#NC-60) | Long revert strings | 4 |

## Gas Optimizations


| |Issue|Instances|
|-|:-|:-:|
| [GAS-1](#GAS-1) | Enable IR-based code generation | 9 |
| [GAS-2](#GAS-2) | Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18) | 1 |
| [GAS-3](#GAS-3) | Nesting if-statements is cheaper than using && | 11 |
| [GAS-4](#GAS-4) | Consider using = instead of += and -= for gas efficiency | 32 |
| [GAS-5](#GAS-5) | Use >= instead of > for gas efficiency | 28 |
| [GAS-6](#GAS-6) | Using bools for storage incurs overhead | 3 |
| [GAS-7](#GAS-7) | Cache array length outside of loop | 10 |
| [GAS-8](#GAS-8) | State variables should be cached in stack variables rather than re-reading them from storage | 2 |
| [GAS-9](#GAS-9) | Use calldata instead of memory for function arguments that do not get mutated | 2 |
| [GAS-10](#GAS-10) | Consider using assembly for simple zero checks to save gas | 9 |
| [GAS-11](#GAS-11) | Expressions for constant values should use immutable rather than constant | 20 |
| [GAS-12](#GAS-12) | Constructors can be marked payable | 6 |
| [GAS-13](#GAS-13) | Use Custom Errors | 8 |
| [GAS-14](#GAS-14) | Initializers can be marked as payable to save deployment gas | 3 |
| [GAS-15](#GAS-15) | Use assembly for small keccak256 hashes, in order to save gas | 1 |
| [GAS-16](#GAS-16) | Reduce gas usage by moving to Solidity 0.8.19 or later | 9 |
| [GAS-17](#GAS-17) | Functions guaranteed to revert when called by normal users can be marked `payable` | 10 |
| [GAS-18](#GAS-18) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 14 |
| [GAS-19](#GAS-19) | Using `private` rather than `public` for constants, saves gas | 4 |
| [GAS-20](#GAS-20) | require()/revert() strings longer than 32 bytes cost extra gas | 3 |
| [GAS-21](#GAS-21) | Structs can be packed into fewer storage slots | 4 |
| [GAS-22](#GAS-22) | Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency | 20 |
| [GAS-23](#GAS-23) | Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead | 4 |
| [GAS-24](#GAS-24) | Use != 0 instead of > for unsigned integer comparison | 28 |
| [GAS-25](#GAS-25) | Optimize names to save gas | 75 |

##################################################################### 
 
 DETAILED REPORT:: 


##################################################################### 


## Medium Issues


 ### <a name="M-1"></a>[M-1]
 ### Code will not work properly on L2 due to block.number
On L2, the block.number is not a reliable source of timing information and the time between each block is also different from Ethereum. This is because each transaction on L2 is placed in a separate block and blocks are not produce at a constant rate.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/PrimeLiquidityProvider.sol

284:         return block.number;

```

```solidity
File: example/ddf.sol

242:         launchBlock = block.number;

```

</details> 
 


 ### <a name="M-2"></a>[M-2]
 ### Return Value of Call or Delegatecall Not Checked
The return value of call or delegatecall should be checked to ensure the call was successful.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/PrimeLiquidityProvider.sol

168:            (bool success, ) = ERC20.call(abi.encodeWithSelector(0x18160ddd, tokens_[i]));

```

</details> 
 


 ### <a name="M-3"></a>[M-3]
 ### Centralization Risk for trusted owners

#### Impact:
Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

32: contract ERC20MultiDelegate is ERC1155, Ownable {

158:     function setUri(string memory uri) external onlyOwner {

```

```solidity
File: example/PrimeLiquidityProvider.sol

182:     function setPrimeToken(address prime_) external onlyOwner {

223:     function sweepToken(IERC20Upgradeable token_, address to_, uint256 amount_) external onlyOwner {

```

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
 


 ### <a name="M-4"></a>[M-4]
 ### Unsafe use of ERC20 transferFrom()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transferFrom() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransferFrom() from OpenZeppelin instead.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

155:         token.transferFrom(proxyAddressFrom, msg.sender, amount);

167:         token.transferFrom(msg.sender, proxyAddress, amount);

177:         token.transferFrom(proxyAddressFrom, proxyAddressTo, amount);

```

```solidity
File: example/ddf.sol

26:     function transferFrom(

210:     function transferFrom(

```

</details> 
 


 ### <a name="M-5"></a>[M-5]
 ### Unsafe use of ERC20 transfer()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transfer() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransfer() from OpenZeppelin instead.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/PrimeLiquidityProvider.sol

210:                 IERC20Upgradeable(token_).transfer(prime, accruedAmount);

```

```solidity
File: example/ddf.sol

15:     function transfer(address recipient, uint256 amount)

183:     function transfer(address recipient, uint256 amount)

```

</details> 
 


## Low Issues


 ### <a name="L-1"></a>[L-1]
 ### complex casting
Consider whether the number of casts is really necessary, or whether using a different type would be more appropriate. Alternatively, add comments to explain in detail why the casts are necessary, and any implicit reasons why the cast does not introduce an overflow.

*Instances (69)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

204:         return ERC1155(this).balanceOf(msg.sender, uint256(uint160(delegate)));

219:                 uint256(0), // salt

223:         return address(uint160(uint256(hash)));

```

```solidity
File: example/FixedMath.sol

23:         return (n.toInt256() * FixedMath0x.FIXED_1) / int256(d.toInt256());

35:         return uint256((u.toInt256() * FixedMath0x.FIXED_1) / f);

47:         return uint256((u.toInt256() * f) / FixedMath0x.FIXED_1);

```

```solidity
File: example/FixedMath0x.sol

40:     int256 internal constant FIXED_1 = int256(0x0000000000000000000000000000000080000000000000000000000000000000);

44:     int256 private constant LN_MIN_VAL = int256(0x0000000000000000000000000000000000000000000000000000000733048c5a);

48:     int256 private constant EXP_MIN_VAL = -int256(0x0000000000000000000000000000001ff0000000000000000000000000000000);

73:         if (x <= int256(0x00000000000000000000000000000000000000000001c8464f76164760000000)) {

74:             r -= int256(0x0000000000000000000000000000001000000000000000000000000000000000); // - 32

75:             x = (x * FIXED_1) / int256(0x00000000000000000000000000000000000000000001c8464f76164760000000); // / e ^ -32

78:         if (x <= int256(0x00000000000000000000000000000000000000f1aaddd7742e90000000000000)) {

79:             r -= int256(0x0000000000000000000000000000000800000000000000000000000000000000); // - 16

80:             x = (x * FIXED_1) / int256(0x00000000000000000000000000000000000000f1aaddd7742e90000000000000); // / e ^ -16

83:         if (x <= int256(0x00000000000000000000000000000000000afe10820813d78000000000000000)) {

84:             r -= int256(0x0000000000000000000000000000000400000000000000000000000000000000); // - 8

85:             x = (x * FIXED_1) / int256(0x00000000000000000000000000000000000afe10820813d78000000000000000); // / e ^ -8

88:         if (x <= int256(0x0000000000000000000000000000000002582ab704279ec00000000000000000)) {

89:             r -= int256(0x0000000000000000000000000000000200000000000000000000000000000000); // - 4

90:             x = (x * FIXED_1) / int256(0x0000000000000000000000000000000002582ab704279ec00000000000000000); // / e ^ -4

93:         if (x <= int256(0x000000000000000000000000000000001152aaa3bf81cc000000000000000000)) {

94:             r -= int256(0x0000000000000000000000000000000100000000000000000000000000000000); // - 2

95:             x = (x * FIXED_1) / int256(0x000000000000000000000000000000001152aaa3bf81cc000000000000000000); // / e ^ -2

98:         if (x <= int256(0x000000000000000000000000000000002f16ac6c59de70000000000000000000)) {

99:             r -= int256(0x0000000000000000000000000000000080000000000000000000000000000000); // - 1

100:             x = (x * FIXED_1) / int256(0x000000000000000000000000000000002f16ac6c59de70000000000000000000); // / e ^ -1

103:         if (x <= int256(0x000000000000000000000000000000004da2cbf1be5828000000000000000000)) {

104:             r -= int256(0x0000000000000000000000000000000040000000000000000000000000000000); // - 0.5

105:             x = (x * FIXED_1) / int256(0x000000000000000000000000000000004da2cbf1be5828000000000000000000); // / e ^ -0.5

108:         if (x <= int256(0x0000000000000000000000000000000063afbe7ab2082c000000000000000000)) {

109:             r -= int256(0x0000000000000000000000000000000020000000000000000000000000000000); // - 0.25

110:             x = (x * FIXED_1) / int256(0x0000000000000000000000000000000063afbe7ab2082c000000000000000000); // / e ^ -0.25

113:         if (x <= int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d)) {

114:             r -= int256(0x0000000000000000000000000000000010000000000000000000000000000000); // - 0.125

115:             x = (x * FIXED_1) / int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d); // / e ^ -0.125

206:         if ((x & int256(0x0000000000000000000000000000001000000000000000000000000000000000)) != 0) {

208:                 (r * int256(0x00000000000000000000000000000000000000f1aaddd7742e56d32fb9f99744)) /

209:                 int256(0x0000000000000000000000000043cbaf42a000812488fc5c220ad7b97bf6e99e); // * e ^ -32

212:         if ((x & int256(0x0000000000000000000000000000000800000000000000000000000000000000)) != 0) {

214:                 (r * int256(0x00000000000000000000000000000000000afe10820813d65dfe6a33c07f738f)) /

215:                 int256(0x000000000000000000000000000005d27a9f51c31b7c2f8038212a0574779991); // * e ^ -16

218:         if ((x & int256(0x0000000000000000000000000000000400000000000000000000000000000000)) != 0) {

220:                 (r * int256(0x0000000000000000000000000000000002582ab704279e8efd15e0265855c47a)) /

221:                 int256(0x0000000000000000000000000000001b4c902e273a58678d6d3bfdb93db96d02); // * e ^ -8

224:         if ((x & int256(0x0000000000000000000000000000000200000000000000000000000000000000)) != 0) {

226:                 (r * int256(0x000000000000000000000000000000001152aaa3bf81cb9fdb76eae12d029571)) /

227:                 int256(0x00000000000000000000000000000003b1cc971a9bb5b9867477440d6d157750); // * e ^ -4

230:         if ((x & int256(0x0000000000000000000000000000000100000000000000000000000000000000)) != 0) {

232:                 (r * int256(0x000000000000000000000000000000002f16ac6c59de6f8d5d6f63c1482a7c86)) /

233:                 int256(0x000000000000000000000000000000015bf0a8b1457695355fb8ac404e7a79e3); // * e ^ -2

236:         if ((x & int256(0x0000000000000000000000000000000080000000000000000000000000000000)) != 0) {

238:                 (r * int256(0x000000000000000000000000000000004da2cbf1be5827f9eb3ad1aa9866ebb3)) /

239:                 int256(0x00000000000000000000000000000000d3094c70f034de4b96ff7d5b6f99fcd8); // * e ^ -1

242:         if ((x & int256(0x0000000000000000000000000000000040000000000000000000000000000000)) != 0) {

244:                 (r * int256(0x0000000000000000000000000000000063afbe7ab2082ba1a0ae5e4eb1b479dc)) /

245:                 int256(0x00000000000000000000000000000000a45af1e1f40c333b3de1db4dd55f29a7); // * e ^ -0.5

248:         if ((x & int256(0x0000000000000000000000000000000020000000000000000000000000000000)) != 0) {

250:                 (r * int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d)) /

251:                 int256(0x00000000000000000000000000000000910b022db7ae67ce76b441c27035c6a1); // * e ^ -0.25

254:         if ((x & int256(0x0000000000000000000000000000000010000000000000000000000000000000)) != 0) {

256:                 (r * int256(0x00000000000000000000000000000000783eafef1c0a8f3978c7f81824d62ebf)) /

257:                 int256(0x0000000000000000000000000000000088415abbe9a76bead8d00cf112e4d4a8); // * e ^ -0.125

```

```solidity
File: example/Prime.sol

36:     event Mint(address indexed user, bool isIrrevocable);

325:                     _mint(true, users[i]);

335:                 _mint(false, users[i]);

388:         _mint(false, msg.sender);

689:     function _mint(bool isIrrevocable, address user) internal {

703:         emit Mint(user, isIrrevocable);

```

</details> 
 


 ### <a name="L-2"></a>[L-2]
 ### Avoid using abi.encodeWithSelector and abi.encodeWithSignature
abi.encodeCall() has compiler [type safety](https://github.com/OpenZeppelin/openzeppelin-contracts/issues/3693), whereas the other two functions do not

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/PrimeLiquidityProvider.sol

168:            (bool success, ) = ERC20.call(abi.encodeWithSelector(0x18160ddd, tokens_[i]));

```

</details> 
 


 ### <a name="L-3"></a>[L-3]
 ### Functions calling contracts/addresses with transfer hooks are missing reentrancy guards
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks will open the users of this protocol up to [read-only reentrancies](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) with no way to protect against it, except by block-listing the whole protocol.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

155:         token.transferFrom(proxyAddressFrom, msg.sender, amount);

167:         token.transferFrom(msg.sender, proxyAddress, amount);

177:         token.transferFrom(proxyAddressFrom, proxyAddressTo, amount);

```

</details> 
 


 ### <a name="L-4"></a>[L-4]
 ### decimals() is not a part of the ERC-20 standard
The name() function is not a part of the ERC-20 standard, and was added later as an optional extension. As such, some valid ERC20 tokens do not support this interface, so it is unsafe to blindly cast all tokens to this interface, and then call this function.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

646:         capital = capital * (10 ** (18 - vToken.decimals()));

```

</details> 
 


 ### <a name="L-5"></a>[L-5]
 ### Tokens may be minted to address(0x0)
Neither the  functions, nor _mint() prevent minting to address(0x0)  

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

325:                     _mint(true, users[i]);

335:                 _mint(false, users[i]);

388:         _mint(false, msg.sender);

689:     function _mint(bool isIrrevocable, address user) internal {

```

</details> 
 


 ### <a name="L-6"></a>[L-6]
 ### constructor/initialize function lacks parameter validation
Constructors and initialization functions play a critical role in contracts by setting important initial states when the contract is first deployed before the system starts. The parameters passed to the constructor and initialization functions directly affect the behavior of the contract / protocol. If incorrect parameters are provided, the system may fail to run, behave abnormally, be unstable, or lack security. Therefore, it's crucial to carefully check each parameter in the constructor and initialization functions. If an exception is found, the transaction should be rolled back.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

115:     function initialize(

```

```solidity
File: example/PrimeLiquidityProvider.sol

8:     function initialize(address recipient) public {

94:     function initialize(

```

</details> 
 


 ### <a name="L-7"></a>[L-7]
 ### Division by zero not prevented
The divisions below take an input parameter that has no zero-value checks, which can cause the functions reverting if zero is passed.  

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/FixedMath0x.sol

121:         w = (y * y) / FIXED_1;

123:         z = (z * w) / FIXED_1; // add y^01 / 01 - y^02 / 02

125:         z = (z * w) / FIXED_1; // add y^03 / 03 - y^04 / 04

127:         z = (z * w) / FIXED_1; // add y^05 / 05 - y^06 / 06

129:         z = (z * w) / FIXED_1; // add y^07 / 07 - y^08 / 08

131:         z = (z * w) / FIXED_1; // add y^09 / 09 - y^10 / 10

133:         z = (z * w) / FIXED_1; // add y^11 / 11 - y^12 / 12

135:         z = (z * w) / FIXED_1; // add y^13 / 13 - y^14 / 14

163:         z = (z * y) / FIXED_1;

165:         z = (z * y) / FIXED_1;

167:         z = (z * y) / FIXED_1;

169:         z = (z * y) / FIXED_1;

171:         z = (z * y) / FIXED_1;

173:         z = (z * y) / FIXED_1;

175:         z = (z * y) / FIXED_1;

177:         z = (z * y) / FIXED_1;

179:         z = (z * y) / FIXED_1;

181:         z = (z * y) / FIXED_1;

183:         z = (z * y) / FIXED_1;

185:         z = (z * y) / FIXED_1;

187:         z = (z * y) / FIXED_1;

189:         z = (z * y) / FIXED_1;

191:         z = (z * y) / FIXED_1;

193:         z = (z * y) / FIXED_1;

195:         z = (z * y) / FIXED_1;

197:         z = (z * y) / FIXED_1;

199:         z = (z * y) / FIXED_1;

```

```solidity
File: example/Prime.sol

486:         uint256 supply = (exchangeRate * balanceOfAccount) / EXP_SCALE;

639:         uint256 supply = (exchangeRate * balanceOfAccount) / EXP_SCALE;

866:         uint256 borrowCapUSD = (xvsPrice * ((xvs * markets[market].borrowMultiplier) / EXP_SCALE)) / EXP_SCALE;

867:         uint256 supplyCapUSD = (xvsPrice * ((xvs * markets[market].supplyMultiplier) / EXP_SCALE)) / EXP_SCALE;

870:         uint256 supplyUSD = (tokenPrice * supply) / EXP_SCALE;

871:         uint256 borrowUSD = (tokenPrice * borrow) / EXP_SCALE;

907:         return (index * score) / EXP_SCALE;

989:         uint256 userYearlyIncome = (userScore * _incomeDistributionYearly(vToken)) / totalScore;

994:         uint256 userSupplyIncomeYearly = (userYearlyIncome * totalCappedSupply) / totalCappedValue;

995:         uint256 userBorrowIncomeYearly = (userYearlyIncome * totalCappedBorrow) / totalCappedValue;

```

```solidity
File: example/ddf.sol

331:             uint256 taxTokens = (amount * _tax) / 100;

```

</details> 
 


 ### <a name="L-8"></a>[L-8]
 ### Empty function body
Consider adding a comment about why the function body is empty

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/PrimeLiquidityProvider.sol

357:     receive() external payable {

```

```solidity
File: example/ddf.sol

346:     receive() external payable {}

```

</details> 
 


 ### <a name="L-9"></a>[L-9]
 ### External Function Calls Within Loops
Calling external functions within loops can easily result in insufficient gas. This greatly increases the likelihood of transaction failures, DOS attacks, and other unexpected actions. It is recommended to limit the number of loops within loops that call external functions, and to limit the gas line for each external call.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/PrimeLiquidityProvider.sol

165:         for (uint256 i; i < numTokens; ) {

```

</details> 
 


 ### <a name="L-10"></a>[L-10]
 ### Initializers could be front-run
Initializers could be front-run, allowing an attacker to either set their own values, take ownership of the contract, and in the best case forcing a re-deployment

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

115:     function initialize(

```

```solidity
File: example/PrimeLiquidityProvider.sol

8:     function initialize(address recipient) public {

94:     function initialize(

```

</details> 
 


 ### <a name="L-11"></a>[L-11]
 ### Missing contract existence checks before low-level calls
Low-level calls return success if there is no code present at the specified address. In addition to the zero-address checks, add a check to verify that `<address>.code.length > 0`.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/PrimeLiquidityProvider.sol

168:            (bool success, ) = ERC20.call(abi.encodeWithSelector(0x18160ddd, tokens_[i]));

```

</details> 
 


 ### <a name="L-12"></a>[L-12]
 ### Use Ownable2Step instead of Ownable
Add a description of why Ownable2Step is recommended.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

6: import "@openzeppelin/contracts/access/Ownable.sol";

32: contract ERC20MultiDelegate is ERC1155, Ownable {

```

```solidity
File: example/ddf.sol

40: contract Ownable is Context {

59:         require(_owner == _msgSender(), "Ownable: caller is not the owner");

70:             "Ownable: new owner is the zero address"

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="L-13"></a>[L-13]
 ### Owner can renounce Ownership  
Each of the following contracts implements or inherits the renounceOwnership() function. This can represent a certain risk if the ownership is renounced for any other reason than by design. Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

6: import "@openzeppelin/contracts/access/Ownable.sol";

32: contract ERC20MultiDelegate is ERC1155, Ownable {

```

```solidity
File: example/ddf.sol

40: contract Ownable is Context {

59:         require(_owner == _msgSender(), "Ownable: caller is not the owner");

70:             "Ownable: new owner is the zero address"

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="L-14"></a>[L-14]
 ### Loss of precision
Division by large numbers or variables may result in the result being zero, due to Solidity not supporting fractions.

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/FixedMath0x.sol

121:         w = (y * y) / FIXED_1;

123:         z = (z * w) / FIXED_1; // add y^01 / 01 - y^02 / 02

125:         z = (z * w) / FIXED_1; // add y^03 / 03 - y^04 / 04

127:         z = (z * w) / FIXED_1; // add y^05 / 05 - y^06 / 06

129:         z = (z * w) / FIXED_1; // add y^07 / 07 - y^08 / 08

131:         z = (z * w) / FIXED_1; // add y^09 / 09 - y^10 / 10

133:         z = (z * w) / FIXED_1; // add y^11 / 11 - y^12 / 12

135:         z = (z * w) / FIXED_1; // add y^13 / 13 - y^14 / 14

163:         z = (z * y) / FIXED_1;

165:         z = (z * y) / FIXED_1;

167:         z = (z * y) / FIXED_1;

169:         z = (z * y) / FIXED_1;

171:         z = (z * y) / FIXED_1;

173:         z = (z * y) / FIXED_1;

175:         z = (z * y) / FIXED_1;

177:         z = (z * y) / FIXED_1;

179:         z = (z * y) / FIXED_1;

181:         z = (z * y) / FIXED_1;

183:         z = (z * y) / FIXED_1;

185:         z = (z * y) / FIXED_1;

187:         z = (z * y) / FIXED_1;

189:         z = (z * y) / FIXED_1;

191:         z = (z * y) / FIXED_1;

193:         z = (z * y) / FIXED_1;

195:         z = (z * y) / FIXED_1;

197:         z = (z * y) / FIXED_1;

199:         z = (z * y) / FIXED_1;

```

```solidity
File: example/Prime.sol

486:         uint256 supply = (exchangeRate * balanceOfAccount) / EXP_SCALE;

639:         uint256 supply = (exchangeRate * balanceOfAccount) / EXP_SCALE;

866:         uint256 borrowCapUSD = (xvsPrice * ((xvs * markets[market].borrowMultiplier) / EXP_SCALE)) / EXP_SCALE;

867:         uint256 supplyCapUSD = (xvsPrice * ((xvs * markets[market].supplyMultiplier) / EXP_SCALE)) / EXP_SCALE;

870:         uint256 supplyUSD = (tokenPrice * supply) / EXP_SCALE;

871:         uint256 borrowUSD = (tokenPrice * borrow) / EXP_SCALE;

907:         return (index * score) / EXP_SCALE;

989:         uint256 userYearlyIncome = (userScore * _incomeDistributionYearly(vToken)) / totalScore;

994:         uint256 userSupplyIncomeYearly = (userYearlyIncome * totalCappedSupply) / totalCappedValue;

995:         uint256 userBorrowIncomeYearly = (userYearlyIncome * totalCappedBorrow) / totalCappedValue;

```

```solidity
File: example/ddf.sol

331:             uint256 taxTokens = (amount * _tax) / 100;

```

</details> 
 


 ### <a name="L-15"></a>[L-15]
 ### State variables not capped at reasonable values
Consider adding minimum/maximum value checks to ensure that the state variables below can never be used to excessively harm users, including via griefing

*Instances (44)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

186:         uint bytecodeSize;

196:         return proxyAddress;

```

```solidity
File: example/FixedMath0x.sol

59:             return 0;

62:             return EXP_MIN_VAL;

64: 

66:         int256 z;

67:         int256 w;

143:             return 0;

146:             return FIXED_1;

159:         int256 y;

160:         int256 z;

```

```solidity
File: example/Prime.sol

177: 

455:         return allMarkets;

470:             return 0;

567: 

680: 

841:             return MAXIMUM_XVS_CAP;

843:             return xvs;

891:             return true;

893: 

917:             return WBNB;

```

```solidity
File: example/PrimeLiquidityProvider.sol

245:             return distributionSpeed;

247: 

```

```solidity
File: example/PrimeStorage.sol

7:         bool exists;

8:         bool isIrrevocable;

12:         uint256 supplyMultiplier;

13:         uint256 borrowMultiplier;

14:         uint256 rewardIndex;

15:         uint256 sumOfMembersScore;

16:         bool exists;

20:         uint256 accrued;

21:         uint256 score;

22:         uint256 rewardIndex;

26:         address market;

27:         uint256 amount;

```

```solidity
File: example/ddf.sol

55:         return _owner;

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
 


 ### <a name="L-16"></a>[L-16]
 ### Some tokens may revert when zero value transfers are made
Despite the fact that [EIP-20](https://github.com/ethereum/EIPs/blob/7500ac4fc1bbdfaf684e7ef851f798f6b667b2fe/EIPS/eip-20.md?plain=1#L116) states that zero-value transfers must be accepted, some tokens, such as LEND, will revert if this is attempted, which may cause transactions that involve other tokens (such as batch operations) to fully revert. Consider skipping the transfer if the amount is zero, which will also save gas.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/PrimeLiquidityProvider.sol

210:                 IERC20Upgradeable(token_).transfer(prime, accruedAmount);

```

```solidity
File: example/ddf.sol

15:     function transfer(address recipient, uint256 amount)

183:     function transfer(address recipient, uint256 amount)

```

</details> 
 


 ### <a name="L-17"></a>[L-17]
 ###  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard  
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks opens the users of this protocol up to [read-only reentrancy](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) vulnerability with no way to protect them except by block-listing the entire protocol.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/PrimeLiquidityProvider.sol

210:                 IERC20Upgradeable(token_).transfer(prime, accruedAmount);

```

```solidity
File: example/ddf.sol

15:     function transfer(address recipient, uint256 amount)

183:     function transfer(address recipient, uint256 amount)

```

</details> 
 


 ### <a name="L-18"></a>[L-18]
 ### Some tokens may revert when large transfers are made
Tokens such as COMP or UNI will revert when an address balance reaches type(uint96).max. Ensure that the calls below can be broken up into smaller batches if necessary.  

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

677:         asset.safeTransfer(user, amount);

```

```solidity
File: example/PrimeLiquidityProvider.sol

209:         IERC20Upgradeable(token_).safeTransfer(prime, accruedAmount);

210:                 IERC20Upgradeable(token_).transfer(prime, accruedAmount);

231:         token_.safeTransfer(to_, amount_);

```

```solidity
File: example/ddf.sol

15:     function transfer(address recipient, uint256 amount)

183:     function transfer(address recipient, uint256 amount)

188:         _transfer(_msgSender(), recipient, amount);

215:         _transfer(sender, recipient, amount);

260:     function _transfer(

```

</details> 
 


 ### <a name="L-19"></a>[L-19]
 ### Unsafe casting
Unsafe casting can cause alot of issues especially when a type is downcast to a smaller type, the higher order bits are truncated, effectively applying a modulo to the original value. Without any other checks, this wrapping will lead to unexpected behavior and bugs

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

36:     event Mint(address indexed user, bool isIrrevocable);

325:                     _mint(true, users[i]);

335:                 _mint(false, users[i]);

388:         _mint(false, msg.sender);

689:     function _mint(bool isIrrevocable, address user) internal {

703:         emit Mint(user, isIrrevocable);

```

</details> 
 


 ### <a name="L-20"></a>[L-20]
 ### Unsafe ERC20 operation(s)

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

22:         _token.approve(msg.sender, type(uint256).max);

155:         token.transferFrom(proxyAddressFrom, msg.sender, amount);

167:         token.transferFrom(msg.sender, proxyAddress, amount);

177:         token.transferFrom(proxyAddressFrom, proxyAddressTo, amount);

```

```solidity
File: example/PrimeLiquidityProvider.sol

210:                 IERC20Upgradeable(token_).transfer(prime, accruedAmount);

```

</details> 
 


## Non Critical Issues


 ### <a name="NC-1"></a>[NC-1]
 ### Contracts should have full test coverage
While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

2: pragma solidity ^0.8.2;

```

```solidity
File: example/FixedMath.sol

4: pragma solidity 0.8.13;

```

```solidity
File: example/FixedMath0x.sol

4: pragma solidity 0.8.13;

```

```solidity
File: example/IPrime.sol

2: pragma solidity ^0.5.16;

```

```solidity
File: example/Prime.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/PrimeLiquidityProvider.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/PrimeStorage.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/Scores.sol

3: pragma solidity 0.8.13;

```

```solidity
File: example/ddf.sol

2: pragma solidity 0.8.18;

```

</details> 
 


 ### <a name="NC-2"></a>[NC-2]
 ### Consider adding formal verification proofs
Consider using formal verification to mathematically prove that your code does what is intended, and does not have any edge cases with unexpected behavior. The solidity compiler itself has this functionality [built in](https://docs.soliditylang.org/en/latest/smtchecker.html#smtchecker-and-formal-verification)  

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

2: pragma solidity ^0.8.2;

```

```solidity
File: example/FixedMath.sol

4: pragma solidity 0.8.13;

```

```solidity
File: example/FixedMath0x.sol

4: pragma solidity 0.8.13;

```

```solidity
File: example/IPrime.sol

2: pragma solidity ^0.5.16;

```

```solidity
File: example/Prime.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/PrimeLiquidityProvider.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/PrimeStorage.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/Scores.sol

3: pragma solidity 0.8.13;

```

```solidity
File: example/ddf.sol

2: pragma solidity 0.8.18;

```

</details> 
 


 ### <a name="NC-3"></a>[NC-3]
 ### Large or complicated code bases should implement invariant tests
Large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts, should implement [invariant fuzzing tests](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05). Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold. Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers, with properly and extensively-written invariants, can close this testing gap significantly.  

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

2: pragma solidity ^0.8.2;

```

```solidity
File: example/FixedMath.sol

4: pragma solidity 0.8.13;

```

```solidity
File: example/FixedMath0x.sol

4: pragma solidity 0.8.13;

```

```solidity
File: example/IPrime.sol

2: pragma solidity ^0.5.16;

```

```solidity
File: example/Prime.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/PrimeLiquidityProvider.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/PrimeStorage.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/Scores.sol

3: pragma solidity 0.8.13;

```

```solidity
File: example/ddf.sol

2: pragma solidity 0.8.18;

```

</details> 
 


 ### <a name="NC-4"></a>[NC-4]
 ### assert() should be replaced with require() or revert()
In versions of Solidity prior to 0.8.0, when encountering an assert all the remaining gas will be consumed. Even after Solidity 0.8.0, the assert function is still not recommended, as described in the [documentation:](https://docs.soliditylang.org/en/v0.8.20/control-structures.html#panic-via-assert-and-error-via-require)

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

138:         assert(amount <= balance);

```

</details> 
 


 ### <a name="NC-5"></a>[NC-5]
 ### Custom error has no error details

#### Impact:
Defining custom errors without error details can make error messages less informative.

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/FixedMath.sol

9: error InvalidFixedPoint();

```

```solidity
File: example/Prime.sol

5: error MarketNotSupported();

6: error InvalidLimit();

7: error IneligibleToClaim();

8: error WaitMoreTime();

9: error UserHasNoPrimeToken();

10: error InvalidCaller();

11: error InvalidComptroller();

12: error NoScoreUpdatesRequired();

13: error MarketAlreadyExists();

14: error InvalidAddress();

15: error InvalidBlocksPerYear();

16: error InvalidAlphaArguments();

17: error InvalidVToken();

```

```solidity
File: example/PrimeLiquidityProvider.sol

61:     error InvalidArguments();

67:     error InvalidCaller();

76:     error FundsTransferIsPaused();

```

</details> 
 


 ### <a name="NC-6"></a>[NC-6]
 ### NatSpec: Interface declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

15: 

```

```solidity
File: example/IPrime.sol

3: 

```

```solidity
File: example/ddf.sol

9: 

81: 

87: 

```

</details> 
 


 ### <a name="NC-7"></a>[NC-7]
 ### NatSpec: Library declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/FixedMath.sol

11: library FixedMath {

```

```solidity
File: example/FixedMath0x.sol

38: library FixedMath0x {

```

```solidity
File: example/Scores.sol

8: library Scores {

```

</details> 
 


 ### <a name="NC-8"></a>[NC-8]
 ### Variables without visibility specifier

#### Impact:
Specifying visibility for variables can improve code readability and maintainability.

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

186:         uint bytecodeSize;

```

```solidity
File: example/FixedMath0x.sol

65:         int256 y;

66:         int256 z;

67:         int256 w;

159:         int256 y;

160:         int256 z;

```

```solidity
File: example/Prime.sol

568:         uint256 delta;

```

```solidity
File: example/PrimeLiquidityProvider.sol

107:         for (uint256 i; i < numTokens; ) {

123:         for (uint256 i; i < tokens_.length; ) {

165:         for (uint256 i; i < numTokens; ) {

```

```solidity
File: example/PrimeStorage.sol

7:         bool exists;

8:         bool isIrrevocable;

12:         uint256 supplyMultiplier;

13:         uint256 borrowMultiplier;

14:         uint256 rewardIndex;

15:         uint256 sumOfMembersScore;

16:         bool exists;

20:         uint256 accrued;

21:         uint256 score;

22:         uint256 rewardIndex;

26:         address market;

27:         uint256 amount;

```

```solidity
File: example/ddf.sol

268:         uint256 _tax;

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
File: example/Prime.sol

288:         allMarkets.push(vToken);

```

</details> 
 


 ### <a name="NC-10"></a>[NC-10]
 ### Assembly blocks should have extensive comments
Assembly blocks take a lot more time to audit than normal Solidity code, and often have gotchas and side-effects that the Solidity versions of the same code do not. Consider adding more comments explaining what is being done in every step of the assembly code, and describe why assembly is being used instead of Solidity.  

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

187:         assembly {

```

</details> 
 


 ### <a name="NC-11"></a>[NC-11]
 ### Constants in comparisons should appear on the left side

#### Impact:
Placing constants on the left side of comparisons can improve code readability and prevent accidental assignment. Doing so will prevent typo [bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*Instances (82)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

105:             if (transferIndex < Math.min(sourcesLength, targetsLength)) {

108:             } else if (transferIndex < sourcesLength) {

111:             } else if (transferIndex < targetsLength) {

117:         if (sourcesLength > 0) {

120:         if (targetsLength > 0) {

192:         if (bytecodeSize == 0) {

```

```solidity
File: example/FixedMath.sol

33:         if (f < 0) revert InvalidFixedPoint();

45:         if (f < 0) revert InvalidFixedPoint();

```

```solidity
File: example/FixedMath0x.sol

52:         if (x > LN_MAX_VAL) {

55:         if (x <= 0) {

58:         if (x == FIXED_1) {

61:         if (x <= LN_MIN_VAL) {

73:         if (x <= int256(0x00000000000000000000000000000000000000000001c8464f76164760000000)) {

78:         if (x <= int256(0x00000000000000000000000000000000000000f1aaddd7742e90000000000000)) {

83:         if (x <= int256(0x00000000000000000000000000000000000afe10820813d78000000000000000)) {

88:         if (x <= int256(0x0000000000000000000000000000000002582ab704279ec00000000000000000)) {

93:         if (x <= int256(0x000000000000000000000000000000001152aaa3bf81cc000000000000000000)) {

98:         if (x <= int256(0x000000000000000000000000000000002f16ac6c59de70000000000000000000)) {

103:         if (x <= int256(0x000000000000000000000000000000004da2cbf1be5828000000000000000000)) {

108:         if (x <= int256(0x0000000000000000000000000000000063afbe7ab2082c000000000000000000)) {

113:         if (x <= int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d)) {

141:         if (x < EXP_MIN_VAL) {

145:         if (x == 0) {

148:         if (x > EXP_MAX_VAL) {

```

```solidity
File: example/Prime.sol

89:         if (_wbnb == address(0)) revert InvalidAddress();

90:         if (_vbnb == address(0)) revert InvalidAddress();

91:         if (_blocksPerYear == 0) revert InvalidBlocksPerYear();

128:         if (_xvsVault == address(0)) revert InvalidAddress();

129:         if (_xvsVaultRewardToken == address(0)) revert InvalidAddress();

130:         if (_protocolShareReserve == address(0)) revert InvalidAddress();

131:         if (_comptroller == address(0)) revert InvalidAddress();

132:         if (_oracle == address(0)) revert InvalidAddress();

133:         if (_primeLiquidityProvider == address(0)) revert InvalidAddress();

186:         if (pendingScoreUpdates == 0) revert NoScoreUpdatesRequired();

187:         if (nextScoreUpdateRoundId == 0) revert NoScoreUpdatesRequired();

303:         if (_irrevocableLimit < totalIrrevocable || _revocableLimit < totalRevocable) revert InvalidLimit();

360:         } else if (!isAccountEligible && !tokens[user].exists && stakedAt[user] > 0) {

362:         } else if (stakedAt[user] == 0 && isAccountEligible && !tokens[user].exists) {

383:         if (stakedAt[msg.sender] == 0) revert IneligibleToClaim();

384:         if (block.timestamp - stakedAt[msg.sender] < STAKING_PERIOD) revert WaitMoreTime();

438:         if (msg.sender != protocolShareReserve) revert InvalidCaller();

439:         if (comptroller != _comptroller) revert InvalidComptroller();

442:         if (vToken == address(0)) revert MarketNotSupported();

464:         if (stakedAt[user] == 0) return STAKING_PERIOD;

467:         if (totalTimeStaked < STAKING_PERIOD) {

561:         if (distributionIncome == 0) {

569:         if (markets[vToken].sumOfMembersScore > 0) {

667:         if (amount > asset.balanceOf(address(this))) {

671:             if (amount > asset.balanceOf(address(this))) {

701:         if (totalIrrevocable > irrevocableLimit || totalRevocable > revocableLimit) revert InvalidLimit();

754:         if (totalIrrevocable > irrevocableLimit) revert InvalidLimit();

795:         if (_alphaDenominator == 0 || _alphaNumerator > _alphaDenominator) {

813:         if (totalScoreUpdatesRequired > 0) totalScoreUpdatesRequired--;

815:         if (pendingScoreUpdates > 0 && !isScoreUpdated[nextScoreUpdateRoundId][user]) {

840:         if (xvs > MAXIMUM_XVS_CAP) {

873:         if (supplyUSD >= supplyCapUSD) {

877:         if (borrowUSD >= borrowCapUSD) {

890:         if (amount >= MINIMUM_STAKED_XVS) {

916:         if (vToken == VBNB) {

987:         if (totalScore == 0) return (0, 0);

992:         if (totalCappedValue == 0) return (0, 0);

```

```solidity
File: example/PrimeLiquidityProvider.sol

103:         if (numTokens != distributionSpeeds_.length) {

161:         if (numTokens != distributionSpeeds_.length) {

198:         if (msg.sender != prime) revert InvalidCaller();

225:         if (amount_ > balance) {

244:         if (balance - accrued > 0) {

264:         if (deltaBlocks > 0) {

269:             if (distributionSpeed > 0 && balanceDiff > 0) {

298:         if (initializedBlock > 0) {

318:         if (distributionSpeed_ > MAX_DISTRIBUTION_SPEED) {

322:         if (tokenDistributionSpeeds[token_] != distributionSpeed_) {

342:         if (lastBlockAccrued == 0) {

352:         if (address_ == address(0)) {

```

```solidity
File: example/Scores.sol

42:         if (xvs == 0 || capital == 0) return 0;

48:         if (xvs == capital) return xvs;

```

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
 


 ### <a name="NC-12"></a>[NC-12]
 ### constants should be defined rather than using magic numbers
Even [assembly](https://github.com/code-423n4/2022-05-opensea-seaport/blob/9d7ce4d08bf3c3010304a0476a785c70c0e90ae7/contracts/lib/TokenTransferrer.sol#L35-L39) can benefit from using readable constants instead of hex/numeric literals

*Instances (104)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

217:                 bytes1(0xff),

```

```solidity
File: example/FixedMath.sol

23:         return (n.toInt256() * FixedMath0x.FIXED_1) / int256(d.toInt256());

35:         return uint256((u.toInt256() * FixedMath0x.FIXED_1) / f);

47:         return uint256((u.toInt256() * f) / FixedMath0x.FIXED_1);

52:         return FixedMath0x.ln(x);

57:         return FixedMath0x.exp(x);

```

```solidity
File: example/FixedMath0x.sol

38: library FixedMath0x {

40:     int256 internal constant FIXED_1 = int256(0x0000000000000000000000000000000080000000000000000000000000000000);

44:     int256 private constant LN_MIN_VAL = int256(0x0000000000000000000000000000000000000000000000000000000733048c5a);

48:     int256 private constant EXP_MIN_VAL = -int256(0x0000000000000000000000000000001ff0000000000000000000000000000000);

73:         if (x <= int256(0x00000000000000000000000000000000000000000001c8464f76164760000000)) {

74:             r -= int256(0x0000000000000000000000000000001000000000000000000000000000000000); // - 32

75:             x = (x * FIXED_1) / int256(0x00000000000000000000000000000000000000000001c8464f76164760000000); // / e ^ -32

78:         if (x <= int256(0x00000000000000000000000000000000000000f1aaddd7742e90000000000000)) {

79:             r -= int256(0x0000000000000000000000000000000800000000000000000000000000000000); // - 16

80:             x = (x * FIXED_1) / int256(0x00000000000000000000000000000000000000f1aaddd7742e90000000000000); // / e ^ -16

83:         if (x <= int256(0x00000000000000000000000000000000000afe10820813d78000000000000000)) {

84:             r -= int256(0x0000000000000000000000000000000400000000000000000000000000000000); // - 8

85:             x = (x * FIXED_1) / int256(0x00000000000000000000000000000000000afe10820813d78000000000000000); // / e ^ -8

88:         if (x <= int256(0x0000000000000000000000000000000002582ab704279ec00000000000000000)) {

89:             r -= int256(0x0000000000000000000000000000000200000000000000000000000000000000); // - 4

90:             x = (x * FIXED_1) / int256(0x0000000000000000000000000000000002582ab704279ec00000000000000000); // / e ^ -4

93:         if (x <= int256(0x000000000000000000000000000000001152aaa3bf81cc000000000000000000)) {

94:             r -= int256(0x0000000000000000000000000000000100000000000000000000000000000000); // - 2

95:             x = (x * FIXED_1) / int256(0x000000000000000000000000000000001152aaa3bf81cc000000000000000000); // / e ^ -2

98:         if (x <= int256(0x000000000000000000000000000000002f16ac6c59de70000000000000000000)) {

99:             r -= int256(0x0000000000000000000000000000000080000000000000000000000000000000); // - 1

100:             x = (x * FIXED_1) / int256(0x000000000000000000000000000000002f16ac6c59de70000000000000000000); // / e ^ -1

103:         if (x <= int256(0x000000000000000000000000000000004da2cbf1be5828000000000000000000)) {

104:             r -= int256(0x0000000000000000000000000000000040000000000000000000000000000000); // - 0.5

105:             x = (x * FIXED_1) / int256(0x000000000000000000000000000000004da2cbf1be5828000000000000000000); // / e ^ -0.5

108:         if (x <= int256(0x0000000000000000000000000000000063afbe7ab2082c000000000000000000)) {

109:             r -= int256(0x0000000000000000000000000000000020000000000000000000000000000000); // - 0.25

110:             x = (x * FIXED_1) / int256(0x0000000000000000000000000000000063afbe7ab2082c000000000000000000); // / e ^ -0.25

113:         if (x <= int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d)) {

114:             r -= int256(0x0000000000000000000000000000000010000000000000000000000000000000); // - 0.125

115:             x = (x * FIXED_1) / int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d); // / e ^ -0.125

122:         r += (z * (0x100000000000000000000000000000000 - y)) / 0x100000000000000000000000000000000;

122:         r += (z * (0x100000000000000000000000000000000 - y)) / 0x100000000000000000000000000000000;

124:         r += (z * (0x0aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa - y)) / 0x200000000000000000000000000000000;

124:         r += (z * (0x0aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa - y)) / 0x200000000000000000000000000000000;

126:         r += (z * (0x099999999999999999999999999999999 - y)) / 0x300000000000000000000000000000000;

126:         r += (z * (0x099999999999999999999999999999999 - y)) / 0x300000000000000000000000000000000;

128:         r += (z * (0x092492492492492492492492492492492 - y)) / 0x400000000000000000000000000000000;

128:         r += (z * (0x092492492492492492492492492492492 - y)) / 0x400000000000000000000000000000000;

130:         r += (z * (0x08e38e38e38e38e38e38e38e38e38e38e - y)) / 0x500000000000000000000000000000000;

130:         r += (z * (0x08e38e38e38e38e38e38e38e38e38e38e - y)) / 0x500000000000000000000000000000000;

132:         r += (z * (0x08ba2e8ba2e8ba2e8ba2e8ba2e8ba2e8b - y)) / 0x600000000000000000000000000000000;

132:         r += (z * (0x08ba2e8ba2e8ba2e8ba2e8ba2e8ba2e8b - y)) / 0x600000000000000000000000000000000;

134:         r += (z * (0x089d89d89d89d89d89d89d89d89d89d89 - y)) / 0x700000000000000000000000000000000;

134:         r += (z * (0x089d89d89d89d89d89d89d89d89d89d89 - y)) / 0x700000000000000000000000000000000;

136:         r += (z * (0x088888888888888888888888888888888 - y)) / 0x800000000000000000000000000000000; // add y^15 / 15 - y^16 / 16

136:         r += (z * (0x088888888888888888888888888888888 - y)) / 0x800000000000000000000000000000000; // add y^15 / 15 - y^16 / 16

162:         z = y = x % 0x0000000000000000000000000000000010000000000000000000000000000000;

164:         r += z * 0x10e1b3be415a0000; // add y^02 * (20! / 02!)

166:         r += z * 0x05a0913f6b1e0000; // add y^03 * (20! / 03!)

168:         r += z * 0x0168244fdac78000; // add y^04 * (20! / 04!)

170:         r += z * 0x004807432bc18000; // add y^05 * (20! / 05!)

172:         r += z * 0x000c0135dca04000; // add y^06 * (20! / 06!)

174:         r += z * 0x0001b707b1cdc000; // add y^07 * (20! / 07!)

176:         r += z * 0x000036e0f639b800; // add y^08 * (20! / 08!)

178:         r += z * 0x00000618fee9f800; // add y^09 * (20! / 09!)

180:         r += z * 0x0000009c197dcc00; // add y^10 * (20! / 10!)

182:         r += z * 0x0000000e30dce400; // add y^11 * (20! / 11!)

184:         r += z * 0x000000012ebd1300; // add y^12 * (20! / 12!)

186:         r += z * 0x0000000017499f00; // add y^13 * (20! / 13!)

188:         r += z * 0x0000000001a9d480; // add y^14 * (20! / 14!)

190:         r += z * 0x00000000001c6380; // add y^15 * (20! / 15!)

192:         r += z * 0x000000000001c638; // add y^16 * (20! / 16!)

194:         r += z * 0x0000000000001ab8; // add y^17 * (20! / 17!)

196:         r += z * 0x000000000000017c; // add y^18 * (20! / 18!)

198:         r += z * 0x0000000000000014; // add y^19 * (20! / 19!)

200:         r += z * 0x0000000000000001; // add y^20 * (20! / 20!)

201:         r = r / 0x21c3677c82b40000 + y + FIXED_1; // divide by 20! and then add y^1 / 1! + y^0 / 0!

206:         if ((x & int256(0x0000000000000000000000000000001000000000000000000000000000000000)) != 0) {

208:                 (r * int256(0x00000000000000000000000000000000000000f1aaddd7742e56d32fb9f99744)) /

209:                 int256(0x0000000000000000000000000043cbaf42a000812488fc5c220ad7b97bf6e99e); // * e ^ -32

212:         if ((x & int256(0x0000000000000000000000000000000800000000000000000000000000000000)) != 0) {

214:                 (r * int256(0x00000000000000000000000000000000000afe10820813d65dfe6a33c07f738f)) /

215:                 int256(0x000000000000000000000000000005d27a9f51c31b7c2f8038212a0574779991); // * e ^ -16

218:         if ((x & int256(0x0000000000000000000000000000000400000000000000000000000000000000)) != 0) {

220:                 (r * int256(0x0000000000000000000000000000000002582ab704279e8efd15e0265855c47a)) /

221:                 int256(0x0000000000000000000000000000001b4c902e273a58678d6d3bfdb93db96d02); // * e ^ -8

224:         if ((x & int256(0x0000000000000000000000000000000200000000000000000000000000000000)) != 0) {

226:                 (r * int256(0x000000000000000000000000000000001152aaa3bf81cb9fdb76eae12d029571)) /

227:                 int256(0x00000000000000000000000000000003b1cc971a9bb5b9867477440d6d157750); // * e ^ -4

230:         if ((x & int256(0x0000000000000000000000000000000100000000000000000000000000000000)) != 0) {

232:                 (r * int256(0x000000000000000000000000000000002f16ac6c59de6f8d5d6f63c1482a7c86)) /

233:                 int256(0x000000000000000000000000000000015bf0a8b1457695355fb8ac404e7a79e3); // * e ^ -2

236:         if ((x & int256(0x0000000000000000000000000000000080000000000000000000000000000000)) != 0) {

238:                 (r * int256(0x000000000000000000000000000000004da2cbf1be5827f9eb3ad1aa9866ebb3)) /

239:                 int256(0x00000000000000000000000000000000d3094c70f034de4b96ff7d5b6f99fcd8); // * e ^ -1

242:         if ((x & int256(0x0000000000000000000000000000000040000000000000000000000000000000)) != 0) {

244:                 (r * int256(0x0000000000000000000000000000000063afbe7ab2082ba1a0ae5e4eb1b479dc)) /

245:                 int256(0x00000000000000000000000000000000a45af1e1f40c333b3de1db4dd55f29a7); // * e ^ -0.5

248:         if ((x & int256(0x0000000000000000000000000000000020000000000000000000000000000000)) != 0) {

250:                 (r * int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d)) /

251:                 int256(0x00000000000000000000000000000000910b022db7ae67ce76b441c27035c6a1); // * e ^ -0.25

254:         if ((x & int256(0x0000000000000000000000000000000010000000000000000000000000000000)) != 0) {

256:                 (r * int256(0x00000000000000000000000000000000783eafef1c0a8f3978c7f81824d62ebf)) /

257:                 int256(0x0000000000000000000000000000000088415abbe9a76bead8d00cf112e4d4a8); // * e ^ -0.125

```

```solidity
File: example/PrimeLiquidityProvider.sol

168:            (bool success, ) = ERC20.call(abi.encodeWithSelector(0x18160ddd, tokens_[i]));

```

```solidity
File: example/ddf.sol

140:             0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D

151:         marketingWallet = payable(0x01c972546e1a24AB0f9614D9aDD4f935c227263F);

```

</details> 
 


 ### <a name="NC-13"></a>[NC-13]
 ### Contracts Defined in Separate Files
Contracts should each be defined in separate files.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

16: interface ERC20ProxyDelegatorInterface {

20: contract ERC20ProxyDelegator {

32: contract ERC20MultiDelegate is ERC1155, Ownable {

```

</details> 
 


 ### <a name="NC-14"></a>[NC-14]
 ### Contract declarations should have NatSpec @author annotations

#### Impact:
Adding a NatSpec @author annotation to contract declarations can improve code documentation.

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

20: contract ERC20ProxyDelegator {

32: contract ERC20MultiDelegate is ERC1155, Ownable {

```

```solidity
File: example/Prime.sol

20: contract Prime is IIncomeDestination, AccessControlledV8, PausableUpgradeable, MaxLoopsLimitHelper, PrimeStorageV1 {

```

```solidity
File: example/PrimeLiquidityProvider.sol

6: contract PrimeLiquidityProvider{

```

```solidity
File: example/PrimeStorage.sol

5: contract PrimeStorageV1 {

```

```solidity
File: example/ddf.sol

4: abstract contract Context {

40: contract Ownable is Context {

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="NC-15"></a>[NC-15]
 ### Contract declarations should have NatSpec @Title annotations

#### Impact:
Adding a NatSpec @Title annotation to contract declarations can improve code documentation.

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

20: contract ERC20ProxyDelegator {

32: contract ERC20MultiDelegate is ERC1155, Ownable {

```

```solidity
File: example/Prime.sol

20: contract Prime is IIncomeDestination, AccessControlledV8, PausableUpgradeable, MaxLoopsLimitHelper, PrimeStorageV1 {

```

```solidity
File: example/PrimeLiquidityProvider.sol

6: contract PrimeLiquidityProvider{

```

```solidity
File: example/PrimeStorage.sol

5: contract PrimeStorageV1 {

```

```solidity
File: example/ddf.sol

4: abstract contract Context {

40: contract Ownable is Context {

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="NC-16"></a>[NC-16]
 ### NatSpec: Contract declarations should have @dev tags

#### Impact:
@dev is used to explain extra details to developers

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

20: contract ERC20ProxyDelegator {

32: contract ERC20MultiDelegate is ERC1155, Ownable {

```

```solidity
File: example/Prime.sol

20: contract Prime is IIncomeDestination, AccessControlledV8, PausableUpgradeable, MaxLoopsLimitHelper, PrimeStorageV1 {

```

```solidity
File: example/PrimeLiquidityProvider.sol

6: contract PrimeLiquidityProvider{

```

```solidity
File: example/PrimeStorage.sol

5: contract PrimeStorageV1 {

```

```solidity
File: example/ddf.sol

4: abstract contract Context {

40: contract Ownable is Context {

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="NC-17"></a>[NC-17]
 ### NatSpec: Contract declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

20: contract ERC20ProxyDelegator {

32: contract ERC20MultiDelegate is ERC1155, Ownable {

```

```solidity
File: example/Prime.sol

20: contract Prime is IIncomeDestination, AccessControlledV8, PausableUpgradeable, MaxLoopsLimitHelper, PrimeStorageV1 {

```

```solidity
File: example/PrimeLiquidityProvider.sol

6: contract PrimeLiquidityProvider{

```

```solidity
File: example/PrimeStorage.sol

5: contract PrimeStorageV1 {

```

```solidity
File: example/ddf.sol

4: abstract contract Context {

40: contract Ownable is Context {

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="NC-18"></a>[NC-18]
 ### NatSpec: Contract declarations should have @notice tags
@notice is used to explain to end users what the contract does, and the compiler interprets /// or /** comments as this tag if one wasnt explicitly provided

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

20: contract ERC20ProxyDelegator {

32: contract ERC20MultiDelegate is ERC1155, Ownable {

```

```solidity
File: example/Prime.sol

20: contract Prime is IIncomeDestination, AccessControlledV8, PausableUpgradeable, MaxLoopsLimitHelper, PrimeStorageV1 {

```

```solidity
File: example/PrimeLiquidityProvider.sol

6: contract PrimeLiquidityProvider{

```

```solidity
File: example/PrimeStorage.sol

5: contract PrimeStorageV1 {

```

```solidity
File: example/ddf.sol

4: abstract contract Context {

40: contract Ownable is Context {

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="NC-19"></a>[NC-19]
 ### Consider using delete rather than assigning zero to clear value

#### Impact:
Consider using delete rather than assigning zero to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (20)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

93:             uint transferIndex = 0;

```

```solidity
File: example/FixedMath0x.sol

46:     int256 private constant EXP_MAX_VAL = 0;

```

```solidity
File: example/Prime.sol

141:         nextScoreUpdateRoundId = 0;

163:         for (uint256 i = 0; i < _allMarkets.length; ) {

189:         for (uint256 i = 0; i < users.length; ) {

196:             for (uint256 j = 0; j < _allMarkets.length; ) {

231:         for (uint256 i = 0; i < allMarkets.length; ) {

280:         markets[vToken].rewardIndex = 0;

283:         markets[vToken].sumOfMembersScore = 0;

320:             for (uint256 i = 0; i < users.length; ) {

334:             for (uint256 i = 0; i < users.length; ) {

594:         for (uint256 i = 0; i < _allMarkets.length; ) {

610:         for (uint256 i = 0; i < _allMarkets.length; ) {

662:         interests[vToken][user].accrued = 0;

715:         for (uint256 i = 0; i < _allMarkets.length; ) {

721:             interests[_allMarkets[i]][user].score = 0;

722:             interests[_allMarkets[i]][user].rewardIndex = 0;

```

```solidity
File: example/ddf.sol

270:             _tax = 0;

321:                     inSwapAndLiquify = 0;

325:                 _tax = 0;

```

</details> 
 


 ### <a name="NC-20"></a>[NC-20]
 ### Consider using delete rather than assigning false to clear value

#### Impact:
Consider using delete rather than assigning alse to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

735:         tokens[user].exists = false;

736:         tokens[user].isIrrevocable = false;

```

```solidity
File: example/ddf.sol

251:         limitsInEffect = false;

```

</details> 
 


 ### <a name="NC-21"></a>[NC-21]
 ### Consider adding a block/deny-list"
Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens  

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

20: contract ERC20ProxyDelegator {

32: contract ERC20MultiDelegate is ERC1155, Ownable {

```

```solidity
File: example/Prime.sol

20: contract Prime is IIncomeDestination, AccessControlledV8, PausableUpgradeable, MaxLoopsLimitHelper, PrimeStorageV1 {

```

```solidity
File: example/PrimeLiquidityProvider.sol

6: contract PrimeLiquidityProvider{

```

```solidity
File: example/PrimeStorage.sol

5: contract PrimeStorageV1 {

```

```solidity
File: example/ddf.sol

4: abstract contract Context {

40: contract Ownable is Context {

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="NC-22"></a>[NC-22]
 ### Use bytes.concat() on bytes instead of abi.encodePacked() for clearer semantic meaning
Starting with version 0.8.4, Solidity has the bytes.concat() function, which allows one to concatenate a list of bytes/strings, without extra padding. Using this function rather than abi.encodePacked() makes the intended operation more clear, leading to less reviewer confusion.  

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

211:         bytes memory bytecode = abi.encodePacked(

216:             abi.encodePacked(

```

</details> 
 


 ### <a name="NC-23"></a>[NC-23]
 ### Consider adding emergency-stop functionality

#### Impact:
Adding a way to quickly halt protocol functionality in an emergency, rather than having to pause individual contracts one-by-one, will make in-progress hack mitigation faster and much less stressful.

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

20: contract ERC20ProxyDelegator {

32: contract ERC20MultiDelegate is ERC1155, Ownable {

```

```solidity
File: example/Prime.sol

20: contract Prime is IIncomeDestination, AccessControlledV8, PausableUpgradeable, MaxLoopsLimitHelper, PrimeStorageV1 {

```

```solidity
File: example/PrimeLiquidityProvider.sol

6: contract PrimeLiquidityProvider{

```

```solidity
File: example/PrimeStorage.sol

5: contract PrimeStorageV1 {

```

```solidity
File: example/ddf.sol

4: abstract contract Context {

40: contract Ownable is Context {

102: contract SpectreAI is Context, IERC20, Ownable {

```

</details> 
 


 ### <a name="NC-24"></a>[NC-24]
 ### Error declarations should have NatSpec descriptions

*Instances (26)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/FixedMath.sol

9: error InvalidFixedPoint();

12:     error InvalidFraction(uint256 n, uint256 d);

```

```solidity
File: example/FixedMath0x.sol

30: error LnTooLarge(int256 x);

32: error LnNonRealResult(int256 x);

34: error ExpTooLarge(int256 x);

36: error UnsignedValueTooLarge(uint256 x);

```

```solidity
File: example/Prime.sol

5: error MarketNotSupported();

6: error InvalidLimit();

7: error IneligibleToClaim();

8: error WaitMoreTime();

9: error UserHasNoPrimeToken();

10: error InvalidCaller();

11: error InvalidComptroller();

12: error NoScoreUpdatesRequired();

13: error MarketAlreadyExists();

14: error InvalidAddress();

15: error InvalidBlocksPerYear();

16: error InvalidAlphaArguments();

17: error InvalidVToken();

```

```solidity
File: example/PrimeLiquidityProvider.sol

61:     error InvalidArguments();

64:     error InvalidDistributionSpeed(uint256 speed, uint256 maxSpeed);

67:     error InvalidCaller();

70:     error TokenAlreadyInitialized(address token);

73:     error InsufficientBalance(uint256 sweepAmount, uint256 balance);

76:     error FundsTransferIsPaused();

79:     error TokenNotInitialized(address token_);

```

</details> 
 


 ### <a name="NC-25"></a>[NC-25]
 ### Custom error has no error details
Custom errors should have a description of the error. This is used to explain to end users what the error means. 

*Instances (26)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/FixedMath.sol

9: error InvalidFixedPoint();

12:     error InvalidFraction(uint256 n, uint256 d);

```

```solidity
File: example/FixedMath0x.sol

30: error LnTooLarge(int256 x);

32: error LnNonRealResult(int256 x);

34: error ExpTooLarge(int256 x);

36: error UnsignedValueTooLarge(uint256 x);

```

```solidity
File: example/Prime.sol

5: error MarketNotSupported();

6: error InvalidLimit();

7: error IneligibleToClaim();

8: error WaitMoreTime();

9: error UserHasNoPrimeToken();

10: error InvalidCaller();

11: error InvalidComptroller();

12: error NoScoreUpdatesRequired();

13: error MarketAlreadyExists();

14: error InvalidAddress();

15: error InvalidBlocksPerYear();

16: error InvalidAlphaArguments();

17: error InvalidVToken();

```

```solidity
File: example/PrimeLiquidityProvider.sol

61:     error InvalidArguments();

64:     error InvalidDistributionSpeed(uint256 speed, uint256 maxSpeed);

67:     error InvalidCaller();

70:     error TokenAlreadyInitialized(address token);

73:     error InsufficientBalance(uint256 sweepAmount, uint256 balance);

76:     error FundsTransferIsPaused();

79:     error TokenNotInitialized(address token_);

```

</details> 
 


 ### <a name="NC-26"></a>[NC-26]
 ### Events are missing sender information

#### Impact:
Including msg.sender in events triggered by user actions can make events more useful for end users.

*Instances (22)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

143:         emit DelegationProcessed(source, target, amount);

194:             emit ProxyDeployed(delegate, proxyAddress);

```

```solidity
File: example/Prime.sol

213:             emit UserScoreUpdated(user);

226:         emit AlphaUpdated(alphaNumerator, alphaDenominator, _alphaNumerator, _alphaDenominator);

254:         emit MultiplierUpdated(

293:         emit MarketAdded(vToken, supplyMultiplier, borrowMultiplier);

305:         emit MintLimitsUpdated(irrevocableLimit, revocableLimit, _irrevocableLimit, _revocableLimit);

447:         emit UpdatedAssetsState(comptroller, asset);

679:         emit InterestClaimed(user, vToken, amount);

703:         emit Mint(user, isIrrevocable);

740:         emit Burn(user);

756:         emit TokenUpgraded(user);

```

```solidity
File: example/PrimeLiquidityProvider.sol

185:         emit PrimeTokenUpdated(prime, prime_);

207:         emit TokenTransferredToPrime(token_, accruedAmount);

274:                 emit TokensAccrued(token_, tokenAccrued);

307:         emit TokenDistributionInitialized(token_);

331:             emit TokenDistributionSpeedUpdated(token_, distributionSpeed_);

```

```solidity
File: example/ddf.sol

72:         emit OwnershipTransferred(_owner, newOwner);

232:         emit Approval(owner, spender, amount);

297:                 emit Transfer(from, to, amount);

337:             emit Transfer(from, to, transferAmount);

342:             emit Transfer(from, to, amount);

```

</details> 
 


 ### <a name="NC-27"></a>[NC-27]
 ### NatSpec: Event declarations should have NatSpec descriptions

*Instances (24)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

39:     event ProxyDeployed(address indexed delegate, address proxyAddress);

40:     event DelegationProcessed(

```

```solidity
File: example/Prime.sol

36:     event Mint(address indexed user, bool isIrrevocable);

39:     event Burn(address indexed user);

42:     event UpdatedAssetsState(address indexed comptroller, address indexed asset);

45:     event MarketAdded(address indexed market, uint256 indexed supplyMultiplier, uint256 indexed borrowMultiplier);

48:     event MintLimitsUpdated(

56:     event UserScoreUpdated(address indexed user);

59:     event AlphaUpdated(

67:     event MultiplierUpdated(

76:     event InterestClaimed(address indexed user, address indexed market, uint256 amount);

79:     event TokenUpgraded(address indexed user);

```

```solidity
File: example/PrimeLiquidityProvider.sol

34:     event TokenDistributionInitialized(address indexed token);

37:     event TokenDistributionSpeedUpdated(address indexed token, uint256 newSpeed);

40:     event PrimeTokenUpdated(address oldPrimeToken, address newPrimeToken);

43:     event TokensAccrued(address indexed token, uint256 amount);

46:     event TokenTransferredToPrime(address indexed token, uint256 amount);

49:     event SweepToken(address indexed token, address indexed to, uint256 sweepAmount);

52:     event TokenInitialBalanceUpdated(address indexed token, uint256 balance);

55:     event FundsTransferPaused();

58:     event FundsTransferResumed();

```

```solidity
File: example/ddf.sol

32:     event Transfer(address indexed from, address indexed to, uint256 value);

33:     event Approval(

43:     event OwnershipTransferred(

```

</details> 
 


 ### <a name="NC-28"></a>[NC-28]
 ### contracts should use fixed compiler versions
To prevent the contracts being deployed and behaving differently depending on the compiler version, it is recommended to use fixed solidity versions for contracts and libraries. Although we can configure a specific version through config (like hardhat, forge config files), it is recommended to set the fixed version in the solidity pragma directly before deploying to the mainnet.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

2: pragma solidity ^0.8.2;

```

```solidity
File: example/IPrime.sol

2: pragma solidity ^0.5.16;

```

</details> 
 


 ### <a name="NC-29"></a>[NC-29]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (114)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

17:     function token() external view returns (ERC20Votes);

18:     function delegate() external view returns (address);

64:     function delegateMulti(

72:     function _delegateMulti(

131:     function _processDelegation(

151:     function _reimburse(address source, uint256 amount) internal {

158:     function setUri(string memory uri) external onlyOwner {

162:     function createProxyDelegatorAndTransfer(

170:     function transferBetweenDelegators(

180:     function deployProxyDelegatorIfNeeded(

201:     function getBalanceForDelegate(

207:     function retrieveProxyContractAddress(

```

```solidity
File: example/FixedMath.sol

20:     function toFixed(uint256 n, uint256 d) internal pure returns (int256) {

32:     function uintDiv(uint256 u, int256 f) internal pure returns (uint256) {

44:     function uintMul(uint256 u, int256 f) internal pure returns (uint256) {

51:     function ln(int256 x) internal pure returns (int256 r) {

56:     function exp(int256 x) internal pure returns (int256 r) {

```

```solidity
File: example/FixedMath0x.sol

51:     function ln(int256 x) internal pure returns (int256 r) {

140:     function exp(int256 x) internal pure returns (int256 r) {

```

```solidity
File: example/IPrime.sol

5:     function xvsUpdated(address user) external;

7:     function accrueInterestAndUpdateScore(address user, address market) external;

9:     function accrueInterest(address vToken) external;

```

```solidity
File: example/Prime.sol

115:     function initialize(

159:     function getPendingInterests(address user) external returns (PendingInterest[] memory pendingInterests) {

185:     function updateScores(address[] memory users) external {

222:     function updateAlpha(uint128 _alphaNumerator, uint128 _alphaDenominator) external {

248:     function updateMultipliers(address market, uint256 supplyMultiplier, uint256 borrowMultiplier) external {

273:     function addMarket(address vToken, uint256 supplyMultiplier, uint256 borrowMultiplier) external {

301:     function setLimit(uint256 _irrevocableLimit, uint256 _revocableLimit) external {

316:     function issue(bool isIrrevocable, address[] calldata users) external {

350:     function xvsUpdated(address user) external {

374:     function accrueInterestAndUpdateScore(address user, address market) external {

382:     function claim() external {

396:     function burn(address user) external {

404:     function togglePause() external {

418:     function claimInterest(address vToken) external whenNotPaused returns (uint256) {

428:     function claimInterest(address vToken, address user) external whenNotPaused returns (uint256) {

437:     function updateAssetsState(address _comptroller, address asset) external {

454:     function getAllMarkets() external view returns (address[] memory) {

463:     function claimTimeRemaining(address user) external view returns (uint256) {

481:     function calculateAPR(address market, address user) external view returns (uint256 supplyAPR, uint256 borrowAPR) {

512:     function estimateAPR(

539:     function accrueInterest(address vToken) public {

582:     function getInterestAccrued(address vToken, address user) public returns (uint256) {

592:     function _accrueInterestAndUpdateScore(address user) internal {

608:     function _initializeMarkets(address account) internal {

632:     function _calculateScore(address market, address user) internal returns (uint256) {

657:     function _claimInterest(address vToken, address user) internal returns (uint256) {

689:     function _mint(bool isIrrevocable, address user) internal {

710:     function _burn(address user) internal {

747:     function _upgrade(address user) internal {

764:     function _executeBoost(address user, address vToken) internal {

779:     function _updateScore(address user, address market) internal {

794:     function _checkAlphaArguments(uint128 _alphaNumerator, uint128 _alphaDenominator) internal {

803:     function _startScoreUpdateRound() internal {

812:     function _updateRoundAfterTokenBurned(address user) internal {

825:     function _xvsBalanceOfUser(address user) internal view returns (uint256) {

839:     function _xvsBalanceForScore(uint256 xvs) internal view returns (uint256) {

857:     function _capitalForScore(

889:     function isEligible(uint256 amount) internal view returns (bool) {

903:     function _interestAccrued(address vToken, address user) internal view returns (uint256) {

915:     function _getUnderlying(address vToken) internal view returns (address) {

932:     function _incomePerBlock(address vToken) internal view returns (uint256) {

942:     function _distributionPercentage() internal view returns (uint256) {

955:     function _incomeDistributionYearly(address vToken) internal view returns (uint256 amount) {

978:     function _calculateUserAPR(

```

```solidity
File: example/PrimeLiquidityProvider.sol

8:     function initialize(address recipient) public {

94:     function initialize(

122:     function initializeTokens(address[] calldata tokens_) external  {

136:     function pauseFundsTransfer() external {

145:     function resumeFundsTransfer() external {

157:     function setTokensDistributionSpeed(address[] calldata tokens_, uint256[] calldata distributionSpeeds_) external {

182:     function setPrimeToken(address prime_) external onlyOwner {

197:     function releaseFunds(address token_) external {

223:     function sweepToken(IERC20Upgradeable token_, address to_, uint256 amount_) external onlyOwner {

239:     function getEffectiveDistributionSpeed(address token_) external view returns (uint256) {

256:     function accrueTokens(address token_) public {

283:     function getBlockNumber() public view virtual returns (uint256) {

293:     function _initializeToken(address token_) internal {

317:     function _setTokenDistributionSpeed(address token_, uint256 distributionSpeed_) internal {

339:     function _ensureTokenInitialized(address token_) internal view {

351:     function _ensureZeroAddress(address address_) internal pure {

```

```solidity
File: example/Scores.sol

20:     function calculateScore(

```

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
 


 ### <a name="NC-30"></a>[NC-30]
 ### NatSpec: function declarations should have @Notice tags
@notice is used to explain to end users what the function does, and the compiler interprets /// or /** comments as this tag if one wasn't explicitly provided.  

*Instances (114)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

17:     function token() external view returns (ERC20Votes);

18:     function delegate() external view returns (address);

64:     function delegateMulti(

72:     function _delegateMulti(

131:     function _processDelegation(

151:     function _reimburse(address source, uint256 amount) internal {

158:     function setUri(string memory uri) external onlyOwner {

162:     function createProxyDelegatorAndTransfer(

170:     function transferBetweenDelegators(

180:     function deployProxyDelegatorIfNeeded(

201:     function getBalanceForDelegate(

207:     function retrieveProxyContractAddress(

```

```solidity
File: example/FixedMath.sol

20:     function toFixed(uint256 n, uint256 d) internal pure returns (int256) {

32:     function uintDiv(uint256 u, int256 f) internal pure returns (uint256) {

44:     function uintMul(uint256 u, int256 f) internal pure returns (uint256) {

51:     function ln(int256 x) internal pure returns (int256 r) {

56:     function exp(int256 x) internal pure returns (int256 r) {

```

```solidity
File: example/FixedMath0x.sol

51:     function ln(int256 x) internal pure returns (int256 r) {

140:     function exp(int256 x) internal pure returns (int256 r) {

```

```solidity
File: example/IPrime.sol

5:     function xvsUpdated(address user) external;

7:     function accrueInterestAndUpdateScore(address user, address market) external;

9:     function accrueInterest(address vToken) external;

```

```solidity
File: example/Prime.sol

115:     function initialize(

159:     function getPendingInterests(address user) external returns (PendingInterest[] memory pendingInterests) {

185:     function updateScores(address[] memory users) external {

222:     function updateAlpha(uint128 _alphaNumerator, uint128 _alphaDenominator) external {

248:     function updateMultipliers(address market, uint256 supplyMultiplier, uint256 borrowMultiplier) external {

273:     function addMarket(address vToken, uint256 supplyMultiplier, uint256 borrowMultiplier) external {

301:     function setLimit(uint256 _irrevocableLimit, uint256 _revocableLimit) external {

316:     function issue(bool isIrrevocable, address[] calldata users) external {

350:     function xvsUpdated(address user) external {

374:     function accrueInterestAndUpdateScore(address user, address market) external {

382:     function claim() external {

396:     function burn(address user) external {

404:     function togglePause() external {

418:     function claimInterest(address vToken) external whenNotPaused returns (uint256) {

428:     function claimInterest(address vToken, address user) external whenNotPaused returns (uint256) {

437:     function updateAssetsState(address _comptroller, address asset) external {

454:     function getAllMarkets() external view returns (address[] memory) {

463:     function claimTimeRemaining(address user) external view returns (uint256) {

481:     function calculateAPR(address market, address user) external view returns (uint256 supplyAPR, uint256 borrowAPR) {

512:     function estimateAPR(

539:     function accrueInterest(address vToken) public {

582:     function getInterestAccrued(address vToken, address user) public returns (uint256) {

592:     function _accrueInterestAndUpdateScore(address user) internal {

608:     function _initializeMarkets(address account) internal {

632:     function _calculateScore(address market, address user) internal returns (uint256) {

657:     function _claimInterest(address vToken, address user) internal returns (uint256) {

689:     function _mint(bool isIrrevocable, address user) internal {

710:     function _burn(address user) internal {

747:     function _upgrade(address user) internal {

764:     function _executeBoost(address user, address vToken) internal {

779:     function _updateScore(address user, address market) internal {

794:     function _checkAlphaArguments(uint128 _alphaNumerator, uint128 _alphaDenominator) internal {

803:     function _startScoreUpdateRound() internal {

812:     function _updateRoundAfterTokenBurned(address user) internal {

825:     function _xvsBalanceOfUser(address user) internal view returns (uint256) {

839:     function _xvsBalanceForScore(uint256 xvs) internal view returns (uint256) {

857:     function _capitalForScore(

889:     function isEligible(uint256 amount) internal view returns (bool) {

903:     function _interestAccrued(address vToken, address user) internal view returns (uint256) {

915:     function _getUnderlying(address vToken) internal view returns (address) {

932:     function _incomePerBlock(address vToken) internal view returns (uint256) {

942:     function _distributionPercentage() internal view returns (uint256) {

955:     function _incomeDistributionYearly(address vToken) internal view returns (uint256 amount) {

978:     function _calculateUserAPR(

```

```solidity
File: example/PrimeLiquidityProvider.sol

8:     function initialize(address recipient) public {

94:     function initialize(

122:     function initializeTokens(address[] calldata tokens_) external  {

136:     function pauseFundsTransfer() external {

145:     function resumeFundsTransfer() external {

157:     function setTokensDistributionSpeed(address[] calldata tokens_, uint256[] calldata distributionSpeeds_) external {

182:     function setPrimeToken(address prime_) external onlyOwner {

197:     function releaseFunds(address token_) external {

223:     function sweepToken(IERC20Upgradeable token_, address to_, uint256 amount_) external onlyOwner {

239:     function getEffectiveDistributionSpeed(address token_) external view returns (uint256) {

256:     function accrueTokens(address token_) public {

283:     function getBlockNumber() public view virtual returns (uint256) {

293:     function _initializeToken(address token_) internal {

317:     function _setTokenDistributionSpeed(address token_, uint256 distributionSpeed_) internal {

339:     function _ensureTokenInitialized(address token_) internal view {

351:     function _ensureZeroAddress(address address_) internal pure {

```

```solidity
File: example/Scores.sol

20:     function calculateScore(

```

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
 


 ### <a name="NC-31"></a>[NC-31]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (114)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

17:     function token() external view returns (ERC20Votes);

18:     function delegate() external view returns (address);

64:     function delegateMulti(

72:     function _delegateMulti(

131:     function _processDelegation(

151:     function _reimburse(address source, uint256 amount) internal {

158:     function setUri(string memory uri) external onlyOwner {

162:     function createProxyDelegatorAndTransfer(

170:     function transferBetweenDelegators(

180:     function deployProxyDelegatorIfNeeded(

201:     function getBalanceForDelegate(

207:     function retrieveProxyContractAddress(

```

```solidity
File: example/FixedMath.sol

20:     function toFixed(uint256 n, uint256 d) internal pure returns (int256) {

32:     function uintDiv(uint256 u, int256 f) internal pure returns (uint256) {

44:     function uintMul(uint256 u, int256 f) internal pure returns (uint256) {

51:     function ln(int256 x) internal pure returns (int256 r) {

56:     function exp(int256 x) internal pure returns (int256 r) {

```

```solidity
File: example/FixedMath0x.sol

51:     function ln(int256 x) internal pure returns (int256 r) {

140:     function exp(int256 x) internal pure returns (int256 r) {

```

```solidity
File: example/IPrime.sol

5:     function xvsUpdated(address user) external;

7:     function accrueInterestAndUpdateScore(address user, address market) external;

9:     function accrueInterest(address vToken) external;

```

```solidity
File: example/Prime.sol

115:     function initialize(

159:     function getPendingInterests(address user) external returns (PendingInterest[] memory pendingInterests) {

185:     function updateScores(address[] memory users) external {

222:     function updateAlpha(uint128 _alphaNumerator, uint128 _alphaDenominator) external {

248:     function updateMultipliers(address market, uint256 supplyMultiplier, uint256 borrowMultiplier) external {

273:     function addMarket(address vToken, uint256 supplyMultiplier, uint256 borrowMultiplier) external {

301:     function setLimit(uint256 _irrevocableLimit, uint256 _revocableLimit) external {

316:     function issue(bool isIrrevocable, address[] calldata users) external {

350:     function xvsUpdated(address user) external {

374:     function accrueInterestAndUpdateScore(address user, address market) external {

382:     function claim() external {

396:     function burn(address user) external {

404:     function togglePause() external {

418:     function claimInterest(address vToken) external whenNotPaused returns (uint256) {

428:     function claimInterest(address vToken, address user) external whenNotPaused returns (uint256) {

437:     function updateAssetsState(address _comptroller, address asset) external {

454:     function getAllMarkets() external view returns (address[] memory) {

463:     function claimTimeRemaining(address user) external view returns (uint256) {

481:     function calculateAPR(address market, address user) external view returns (uint256 supplyAPR, uint256 borrowAPR) {

512:     function estimateAPR(

539:     function accrueInterest(address vToken) public {

582:     function getInterestAccrued(address vToken, address user) public returns (uint256) {

592:     function _accrueInterestAndUpdateScore(address user) internal {

608:     function _initializeMarkets(address account) internal {

632:     function _calculateScore(address market, address user) internal returns (uint256) {

657:     function _claimInterest(address vToken, address user) internal returns (uint256) {

689:     function _mint(bool isIrrevocable, address user) internal {

710:     function _burn(address user) internal {

747:     function _upgrade(address user) internal {

764:     function _executeBoost(address user, address vToken) internal {

779:     function _updateScore(address user, address market) internal {

794:     function _checkAlphaArguments(uint128 _alphaNumerator, uint128 _alphaDenominator) internal {

803:     function _startScoreUpdateRound() internal {

812:     function _updateRoundAfterTokenBurned(address user) internal {

825:     function _xvsBalanceOfUser(address user) internal view returns (uint256) {

839:     function _xvsBalanceForScore(uint256 xvs) internal view returns (uint256) {

857:     function _capitalForScore(

889:     function isEligible(uint256 amount) internal view returns (bool) {

903:     function _interestAccrued(address vToken, address user) internal view returns (uint256) {

915:     function _getUnderlying(address vToken) internal view returns (address) {

932:     function _incomePerBlock(address vToken) internal view returns (uint256) {

942:     function _distributionPercentage() internal view returns (uint256) {

955:     function _incomeDistributionYearly(address vToken) internal view returns (uint256 amount) {

978:     function _calculateUserAPR(

```

```solidity
File: example/PrimeLiquidityProvider.sol

8:     function initialize(address recipient) public {

94:     function initialize(

122:     function initializeTokens(address[] calldata tokens_) external  {

136:     function pauseFundsTransfer() external {

145:     function resumeFundsTransfer() external {

157:     function setTokensDistributionSpeed(address[] calldata tokens_, uint256[] calldata distributionSpeeds_) external {

182:     function setPrimeToken(address prime_) external onlyOwner {

197:     function releaseFunds(address token_) external {

223:     function sweepToken(IERC20Upgradeable token_, address to_, uint256 amount_) external onlyOwner {

239:     function getEffectiveDistributionSpeed(address token_) external view returns (uint256) {

256:     function accrueTokens(address token_) public {

283:     function getBlockNumber() public view virtual returns (uint256) {

293:     function _initializeToken(address token_) internal {

317:     function _setTokenDistributionSpeed(address token_, uint256 distributionSpeed_) internal {

339:     function _ensureTokenInitialized(address token_) internal view {

351:     function _ensureZeroAddress(address address_) internal pure {

```

```solidity
File: example/Scores.sol

20:     function calculateScore(

```

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
 


 ### <a name="NC-32"></a>[NC-32]
 ### Order of Functions Does Not Follow Solidity Style Guide
According to the Solidity Style Guide, functions should be grouped according to their visibility and ordered: constructor, receive, fallback, external, public, internal, private.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

17:     function token() external view returns (ERC20Votes);

21:     constructor(ERC20Votes _token, address _delegate) {

51:     constructor(

```

</details> 
 


 ### <a name="NC-33"></a>[NC-33]
 ### If-statement can be converted to a ternary

#### Impact:
The code can be made more compact while also increasing readability by converting the following `if`-statements to ternaries (e.g. `foo += (x > y) ? a : b`)

*Instances (72)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

105:             if (transferIndex < Math.min(sourcesLength, targetsLength)) {

108:             } else if (transferIndex < sourcesLength) {

111:             } else if (transferIndex < targetsLength) {

117:         if (sourcesLength > 0) {

120:         if (targetsLength > 0) {

192:         if (bytecodeSize == 0) {

```

```solidity
File: example/FixedMath0x.sol

52:         if (x > LN_MAX_VAL) {

55:         if (x <= 0) {

58:         if (x == FIXED_1) {

61:         if (x <= LN_MIN_VAL) {

73:         if (x <= int256(0x00000000000000000000000000000000000000000001c8464f76164760000000)) {

78:         if (x <= int256(0x00000000000000000000000000000000000000f1aaddd7742e90000000000000)) {

83:         if (x <= int256(0x00000000000000000000000000000000000afe10820813d78000000000000000)) {

88:         if (x <= int256(0x0000000000000000000000000000000002582ab704279ec00000000000000000)) {

93:         if (x <= int256(0x000000000000000000000000000000001152aaa3bf81cc000000000000000000)) {

98:         if (x <= int256(0x000000000000000000000000000000002f16ac6c59de70000000000000000000)) {

103:         if (x <= int256(0x000000000000000000000000000000004da2cbf1be5828000000000000000000)) {

108:         if (x <= int256(0x0000000000000000000000000000000063afbe7ab2082c000000000000000000)) {

113:         if (x <= int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d)) {

141:         if (x < EXP_MIN_VAL) {

145:         if (x == 0) {

148:         if (x > EXP_MAX_VAL) {

206:         if ((x & int256(0x0000000000000000000000000000001000000000000000000000000000000000)) != 0) {

212:         if ((x & int256(0x0000000000000000000000000000000800000000000000000000000000000000)) != 0) {

218:         if ((x & int256(0x0000000000000000000000000000000400000000000000000000000000000000)) != 0) {

224:         if ((x & int256(0x0000000000000000000000000000000200000000000000000000000000000000)) != 0) {

230:         if ((x & int256(0x0000000000000000000000000000000100000000000000000000000000000000)) != 0) {

236:         if ((x & int256(0x0000000000000000000000000000000080000000000000000000000000000000)) != 0) {

242:         if ((x & int256(0x0000000000000000000000000000000040000000000000000000000000000000)) != 0) {

248:         if ((x & int256(0x0000000000000000000000000000000020000000000000000000000000000000)) != 0) {

254:         if ((x & int256(0x0000000000000000000000000000000010000000000000000000000000000000)) != 0) {

```

```solidity
File: example/Prime.sol

319:         if (isIrrevocable) {

333:         } else {

354:         if (tokens[user].exists && !isAccountEligible) {

360:         } else if (!isAccountEligible && !tokens[user].exists && stakedAt[user] > 0) {

362:         } else if (stakedAt[user] == 0 && isAccountEligible && !tokens[user].exists) {

364:         } else if (tokens[user].exists && isAccountEligible) {

406:         if (paused()) {

467:         if (totalTimeStaked < STAKING_PERIOD) {

561:         if (distributionIncome == 0) {

569:         if (markets[vToken].sumOfMembersScore > 0) {

667:         if (amount > asset.balanceOf(address(this))) {

695:         if (isIrrevocable) {

729:         if (tokens[user].isIrrevocable) {

765:         if (!markets[vToken].exists || !tokens[user].exists) {

780:         if (!markets[market].exists || !tokens[user].exists) {

795:         if (_alphaDenominator == 0 || _alphaNumerator > _alphaDenominator) {

815:         if (pendingScoreUpdates > 0 && !isScoreUpdated[nextScoreUpdateRoundId][user]) {

840:         if (xvs > MAXIMUM_XVS_CAP) {

873:         if (supplyUSD >= supplyCapUSD) {

877:         if (borrowUSD >= borrowCapUSD) {

890:         if (amount >= MINIMUM_STAKED_XVS) {

916:         if (vToken == VBNB) {

```

```solidity
File: example/PrimeLiquidityProvider.sol

103:         if (numTokens != distributionSpeeds_.length) {

161:         if (numTokens != distributionSpeeds_.length) {

199:         if (paused()) {

225:         if (amount_ > balance) {

244:         if (balance - accrued > 0) {

264:         if (deltaBlocks > 0) {

298:         if (initializedBlock > 0) {

318:         if (distributionSpeed_ > MAX_DISTRIBUTION_SPEED) {

322:         if (tokenDistributionSpeeds[token_] != distributionSpeed_) {

342:         if (lastBlockAccrued == 0) {

352:         if (address_ == address(0)) {

```

```solidity
File: example/Scores.sol

60:         if (lessxvsThanCapital) {

```

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
 


 ### <a name="NC-34"></a>[NC-34]
 ### Variable names for immutables should use CONSTANT_CASE

#### Impact:
Using CONSTANT_CASE for immutables improves code readability and maintainability.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

25:     uint256 public immutable BLOCKS_PER_YEAR;

29:     address public immutable WBNB;

33:     address public immutable VBNB;

```

```solidity
File: example/ddf.sol

113:     IUniswapV2Router02 immutable uniswapV2Router;

115:     address immutable uniswapV2Pair;

116:     address immutable WETH;

118:     address payable immutable marketingWallet;

```

</details> 
 


 ### <a name="NC-35"></a>[NC-35]
 ### Contract Does Not Implement Any Interfaces
It is recommended to implement relevant interfaces for better code organization and clarity.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

16: interface ERC20ProxyDelegatorInterface {

20: contract ERC20ProxyDelegator {

```

</details> 
 


 ### <a name="NC-36"></a>[NC-36]
 ### Large multiples of ten should use scientific notation
Use a scientific notation rather than decimal literals (e.g. 1e6 instead of 1000000), for better code readability.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/PrimeStorage.sol

36:     uint256 public constant MAXIMUM_XVS_CAP = 100000 * EXP_SCALE;

```

</details> 
 


 ### <a name="NC-37"></a>[NC-37]
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
 


 ### <a name="NC-38"></a>[NC-38]
 ### Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct

#### Impact:
Combining multiple mappings into a single mapping with a struct can improve readability and maintainability of the code.

*Instances (15)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/PrimeLiquidityProvider.sol

25:     mapping(address => uint256) public tokenDistributionSpeeds;

28:     mapping(address => uint256) public lastAccruedBlock;

31:     mapping(address => uint256) public tokenAmountAccrued;

```

```solidity
File: example/PrimeStorage.sol

45:     mapping(address => Token) public tokens;

60:     mapping(address => uint256) public stakedAt;

63:     mapping(address => Market) public markets;

66:     mapping(address => mapping(address => Interest)) public interests;

87:     mapping(uint256 => mapping(address => bool)) public isScoreUpdated;

99:     mapping(address => address) public vTokenForAsset;

109:     mapping(address => uint256) public unreleasedPSRIncome;

113:     mapping(address => uint256) public unreleasedPLPIncome;

```

```solidity
File: example/ddf.sol

109:     mapping(address => uint256) private _previousTx;

134:     mapping(address => uint256) private _balance;

135:     mapping(address => mapping(address => uint256)) private _allowances;

136:     mapping(address => bool) private _isExcludedFromFeeWallet;

```

</details> 
 


 ### <a name="NC-39"></a>[NC-39]
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
 


 ### <a name="NC-40"></a>[NC-40]
 ### Consider using descriptive constants when using 0 in the code

#### Impact:
Passing zero as a function argument/Event emission can sometimes result in a security issue (e.g. passing zero as the slippage parameter). Consider using a constant variable with a descriptive name, so its clear that the 0 is intentionally being used, and for the right reasons.

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

81:         require(

92:         for (

99:                 : address(0);

102:                 : address(0);

```

```solidity
File: example/Prime.sol

987:         if (totalScore == 0) return (0, 0);

992:         if (totalCappedValue == 0) return (0, 0);

```

```solidity
File: example/ddf.sol

78:         _owner = address(0);

266:         require(amount > 0, "Min transfer amount");

273:             require(

314:                         .swapExactTokensForETHSupportingFeeOnTransferTokens(

```

</details> 
 


 ### <a name="NC-41"></a>[NC-41]
 ### Non-external/public variable names should begin with an underscore

#### Impact:
Using an underscore at the beginning of non-external/public variable names can improve code clarity and maintainability. According to the Solidity Style Guide, non-external/public variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*Instances (36)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

35:     ERC20Votes public token;

```

```solidity
File: example/PrimeLiquidityProvider.sol

22:     address public prime;

25:     mapping(address => uint256) public tokenDistributionSpeeds;

28:     mapping(address => uint256) public lastAccruedBlock;

31:     mapping(address => uint256) public tokenAmountAccrued;

```

```solidity
File: example/PrimeStorage.sol

45:     mapping(address => Token) public tokens;

48:     uint256 public totalIrrevocable;

51:     uint256 public totalRevocable;

54:     uint256 public revocableLimit;

57:     uint256 public irrevocableLimit;

60:     mapping(address => uint256) public stakedAt;

63:     mapping(address => Market) public markets;

66:     mapping(address => mapping(address => Interest)) public interests;

69:     address[] internal allMarkets;

72:     uint128 public alphaNumerator;

75:     uint128 public alphaDenominator;

78:     address internal xvsVault;

81:     address internal xvsVaultRewardToken;

84:     uint256 internal xvsVaultPoolId;

87:     mapping(uint256 => mapping(address => bool)) public isScoreUpdated;

90:     uint256 public nextScoreUpdateRoundId;

93:     uint256 public totalScoreUpdatesRequired;

96:     uint256 public pendingScoreUpdates;

99:     mapping(address => address) public vTokenForAsset;

102:     address public protocolShareReserve;

105:     address public comptroller;

109:     mapping(address => uint256) public unreleasedPSRIncome;

113:     mapping(address => uint256) public unreleasedPLPIncome;

116:     address public primeLiquidityProvider;

119:     ResilientOracleInterface public oracle;

```

```solidity
File: example/ddf.sol

120:     uint256 public buyTax;

121:     uint256 public sellTax;

123:     uint8 private launch;

124:     uint8 private inSwapAndLiquify;

126:     uint256 private launchBlock;

132:     bool public limitsInEffect;

```

</details> 
 


 ### <a name="NC-42"></a>[NC-42]
 ### Return values of `approve()` not checked
Not all IERC20 implementations `revert()` when there's a failure in `approve()`. The function signature has a boolean return value and they indicate errors that way instead. By not checking the return value, operations that should have marked as failed, may potentially go through without actually approving anything

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

22:         _token.approve(msg.sender, type(uint256).max);

```

```solidity
File: example/ddf.sol

206:         _approve(_msgSender(), spender, amount);

216:         _approve(

```

</details> 
 


 ### <a name="NC-43"></a>[NC-43]
 ### Setters should prevent re-setting of the same value
This especially problematic when the setter also emits the same value, which may be confusing to offline parsers  

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

158:     function setUri(string memory uri) external onlyOwner {

```

```solidity
File: example/Prime.sol

301:     function setLimit(uint256 _irrevocableLimit, uint256 _revocableLimit) external {

437:     function updateAssetsState(address _comptroller, address asset) external {

```

```solidity
File: example/PrimeLiquidityProvider.sol

157:     function setTokensDistributionSpeed(address[] calldata tokens_, uint256[] calldata distributionSpeeds_) external {

182:     function setPrimeToken(address prime_) external onlyOwner {

317:     function _setTokenDistributionSpeed(address token_, uint256 distributionSpeed_) internal {

```

```solidity
File: example/ddf.sol

245:     function setLimit(uint256 amountLimit) external onlyOwner {

```

</details> 
 


 ### <a name="NC-44"></a>[NC-44]
 ### Use the latest solidity version for deployment  
Upgrading to a newer Solidity release can optimize gas usage, take advantage of new features and improve overall contract efficiency. Where possible, based on compatibility requirements, it is recommended to use newer/latest solidity version to take advantage of the latest optimizations and features. You can see the latest version [here](https://soliditylang.org/blog/category/releases/)

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

2: pragma solidity ^0.8.2;

```

```solidity
File: example/FixedMath.sol

4: pragma solidity 0.8.13;

```

```solidity
File: example/FixedMath0x.sol

4: pragma solidity 0.8.13;

```

```solidity
File: example/IPrime.sol

2: pragma solidity ^0.5.16;

```

```solidity
File: example/Prime.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/PrimeLiquidityProvider.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/PrimeStorage.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/Scores.sol

3: pragma solidity 0.8.13;

```

```solidity
File: example/ddf.sol

2: pragma solidity 0.8.18;

```

</details> 
 


 ### <a name="NC-45"></a>[NC-45]
 ### Use uint256/int256 Instead of uint/int
It is recommended to use uint256 and int256 for clarity and consistency in specifying integer types.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

93:             uint transferIndex = 0;

186:         uint bytecodeSize;

```

</details> 
 


 ### <a name="NC-46"></a>[NC-46]
 ### Consider bounding input array length
The functions below take in an unbounded array, and make function calls for entries in the array. While the function will revert if it eventually runs out of gas, it may be a nicer user experience to require() that the length of the array is below some reasonable maximum, so that the user doesnt have to use up a full transactions gas only to see that the transaction reverts

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

163:         for (uint256 i = 0; i < _allMarkets.length; ) {

189:         for (uint256 i = 0; i < users.length; ) {

196:             for (uint256 j = 0; j < _allMarkets.length; ) {

231:         for (uint256 i = 0; i < allMarkets.length; ) {

320:             for (uint256 i = 0; i < users.length; ) {

334:             for (uint256 i = 0; i < users.length; ) {

594:         for (uint256 i = 0; i < _allMarkets.length; ) {

610:         for (uint256 i = 0; i < _allMarkets.length; ) {

715:         for (uint256 i = 0; i < _allMarkets.length; ) {

```

```solidity
File: example/PrimeLiquidityProvider.sol

123:         for (uint256 i; i < tokens_.length; ) {

```

</details> 
 


 ### <a name="NC-47"></a>[NC-47]
 ### Overflows in unchecked blocks
While integers with a large number of bits are unlikely to overflow on human time scales, it is not strictly correct to use an unchecked block around them, because eventually they will overflow, and unchecked blocks are meant for cases where it is mathematically impossible for an operation to trigger an overflow (e.g. a prior require() statement prevents the overflow case)

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

173:             unchecked {

201:                 unchecked {

209:             unchecked {

234:             unchecked {

329:                 unchecked {

339:                 unchecked {

598:             unchecked {

620:             unchecked {

724:             unchecked {

```

```solidity
File: example/PrimeLiquidityProvider.sol

111:             unchecked {

126:             unchecked {

170:             unchecked {

```

</details> 
 


 ### <a name="NC-48"></a>[NC-48]
 ### Event is missing `indexed` fields
Index event fields make the field more quickly accessible to off-chain tools that parse events. However, note that each index field costs extra gas during emission, so it's not necessarily best to index the maximum allowed per event (three fields). Each event should use three indexed fields if there are three or more fields, and gas usage is not particularly of concern for the events in question. If there are fewer than three fields, all of the fields should be indexed.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

39:     event ProxyDeployed(address indexed delegate, address proxyAddress);

40:     event DelegationProcessed(

```

</details> 
 


 ### <a name="NC-49"></a>[NC-49]
 ### Constants should be defined rather than using magic numbers

*Instances (20)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/FixedMath0x.sol

164:         r += z * 0x10e1b3be415a0000; // add y^02 * (20! / 02!)

166:         r += z * 0x05a0913f6b1e0000; // add y^03 * (20! / 03!)

168:         r += z * 0x0168244fdac78000; // add y^04 * (20! / 04!)

170:         r += z * 0x004807432bc18000; // add y^05 * (20! / 05!)

172:         r += z * 0x000c0135dca04000; // add y^06 * (20! / 06!)

174:         r += z * 0x0001b707b1cdc000; // add y^07 * (20! / 07!)

176:         r += z * 0x000036e0f639b800; // add y^08 * (20! / 08!)

178:         r += z * 0x00000618fee9f800; // add y^09 * (20! / 09!)

180:         r += z * 0x0000009c197dcc00; // add y^10 * (20! / 10!)

182:         r += z * 0x0000000e30dce400; // add y^11 * (20! / 11!)

184:         r += z * 0x000000012ebd1300; // add y^12 * (20! / 12!)

186:         r += z * 0x0000000017499f00; // add y^13 * (20! / 13!)

188:         r += z * 0x0000000001a9d480; // add y^14 * (20! / 14!)

190:         r += z * 0x00000000001c6380; // add y^15 * (20! / 15!)

192:         r += z * 0x000000000001c638; // add y^16 * (20! / 16!)

194:         r += z * 0x0000000000001ab8; // add y^17 * (20! / 17!)

196:         r += z * 0x000000000000017c; // add y^18 * (20! / 18!)

198:         r += z * 0x0000000000000014; // add y^19 * (20! / 19!)

200:         r += z * 0x0000000000000001; // add y^20 * (20! / 20!)

```

```solidity
File: example/Prime.sol

646:         capital = capital * (10 ** (18 - vToken.decimals()));

```

</details> 
 


 ### <a name="NC-50"></a>[NC-50]
 ### Consider Turning Utility Contract Into a Library
Contracts containing only a constructor should be considered for conversion into libraries.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

20: contract ERC20ProxyDelegator {

```

</details> 
 


 ### <a name="NC-51"></a>[NC-51]
 ### Variables need not be initialized to zero
The default value for variables is zero, so initializing them to zero is superfluous.  

*Instances (14)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

93:             uint transferIndex = 0;

```

```solidity
File: example/FixedMath0x.sol

46:     int256 private constant EXP_MAX_VAL = 0;

```

```solidity
File: example/Prime.sol

163:         for (uint256 i = 0; i < _allMarkets.length; ) {

189:         for (uint256 i = 0; i < users.length; ) {

196:             for (uint256 j = 0; j < _allMarkets.length; ) {

231:         for (uint256 i = 0; i < allMarkets.length; ) {

320:             for (uint256 i = 0; i < users.length; ) {

334:             for (uint256 i = 0; i < users.length; ) {

594:         for (uint256 i = 0; i < _allMarkets.length; ) {

610:         for (uint256 i = 0; i < _allMarkets.length; ) {

662:         interests[vToken][user].accrued = 0;

715:         for (uint256 i = 0; i < _allMarkets.length; ) {

721:             interests[_allMarkets[i]][user].score = 0;

722:             interests[_allMarkets[i]][user].rewardIndex = 0;

```

</details> 
 


 ### <a name="NC-52"></a>[NC-52]
 ### Import Whole Files Instead of Specific Identifiers
Import declarations should import specific identifiers, rather than the whole file.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

6: import "@openzeppelin/contracts/access/Ownable.sol";

7: import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

8: import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

9: import "@openzeppelin/contracts/utils/math/Math.sol";

```

</details> 
 


 ### <a name="NC-53"></a>[NC-53]
 ### Empty receive()/fallback() function
If the intention is for Ether sent by a caller to be used for an actual purpose (i.e. the function is not just a WETH withdraw() handler), the function should call another function (e.g. call weth.deposit() and use the token on the caller's behalf) or at least emit an event to track that funds were sent directly to it.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/PrimeLiquidityProvider.sol

356: 

```

```solidity
File: example/ddf.sol

345: 

```

</details> 
 


 ### <a name="NC-54"></a>[NC-54]
 ### Consider implementing two-step procedure for updation
A typo error or a copy-paste error can end up bricking the whole protocol. 

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

158:     function setUri(string memory uri) external onlyOwner {

```

</details> 
 


 ### <a name="NC-55"></a>[NC-55]
 ### Consider moving msg.sender checks to modifiers
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.  

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

22:         _token.approve(msg.sender, type(uint256).max);

118:             _burnBatch(msg.sender, sources, amounts[:sourcesLength]);

121:             _mintBatch(msg.sender, targets, amounts[:targetsLength], "");

155:         token.transferFrom(proxyAddressFrom, msg.sender, amount);

167:         token.transferFrom(msg.sender, proxyAddress, amount);

204:         return ERC1155(this).balanceOf(msg.sender, uint256(uint160(delegate)));

```

```solidity
File: example/Prime.sol

383:         if (stakedAt[msg.sender] == 0) revert IneligibleToClaim();

384:         if (block.timestamp - stakedAt[msg.sender] < STAKING_PERIOD) revert WaitMoreTime();

386:         stakedAt[msg.sender] = 0;

388:         _mint(false, msg.sender);

389:         _initializeMarkets(msg.sender);

419:         return _claimInterest(vToken, msg.sender);

438:         if (msg.sender != protocolShareReserve) revert InvalidCaller();

```

```solidity
File: example/PrimeLiquidityProvider.sol

198:         if (msg.sender != prime) revert InvalidCaller();

```

```solidity
File: example/ddf.sol

6:         return msg.sender;

152:         _balance[msg.sender] = _totalSupply;

154:         _isExcludedFromFeeWallet[msg.sender] = true;

157:         _allowances[msg.sender][address(uniswapV2Router)] = type(uint256).max;

```

</details> 
 


 ### <a name="NC-56"></a>[NC-56]
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
 


 ### <a name="NC-57"></a>[NC-57]
 ### Array indices should be referenced via enums rather than numeric literals

#### Impact:
Referencing array indices via enums can improve code readability and maintainability.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

669:             assets[0] = address(asset);

```

```solidity
File: example/PrimeStorage.sol

123:     uint256[25] private __gap;

```

```solidity
File: example/ddf.sol

311:                     path[0] = address(this);

312:                     path[1] = WETH;

```

</details> 
 


 ### <a name="NC-58"></a>[NC-58]
 ### Use assembly to emit events, in order to save gas
Using the [scratch space](https://github.com/Vectorized/solady/blob/30558f5402f02351b96eeb6eaf32bcea29773841/src/tokens/ERC1155.sol#L501-L504) for event arguments (two words or fewer) will save gas over needing Soliditys full abi memory expansion used for emitting normally.

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

143:         emit DelegationProcessed(source, target, amount);

194:             emit ProxyDeployed(delegate, proxyAddress);

```

```solidity
File: example/Prime.sol

213:             emit UserScoreUpdated(user);

226:         emit AlphaUpdated(alphaNumerator, alphaDenominator, _alphaNumerator, _alphaDenominator);

254:         emit MultiplierUpdated(

293:         emit MarketAdded(vToken, supplyMultiplier, borrowMultiplier);

305:         emit MintLimitsUpdated(irrevocableLimit, revocableLimit, _irrevocableLimit, _revocableLimit);

447:         emit UpdatedAssetsState(comptroller, asset);

679:         emit InterestClaimed(user, vToken, amount);

703:         emit Mint(user, isIrrevocable);

740:         emit Burn(user);

756:         emit TokenUpgraded(user);

```

```solidity
File: example/PrimeLiquidityProvider.sol

185:         emit PrimeTokenUpdated(prime, prime_);

207:         emit TokenTransferredToPrime(token_, accruedAmount);

229:         emit SweepToken(address(token_), to_, amount_);

274:                 emit TokensAccrued(token_, tokenAccrued);

307:         emit TokenDistributionInitialized(token_);

331:             emit TokenDistributionSpeedUpdated(token_, distributionSpeed_);

```

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
 


 ### <a name="NC-59"></a>[NC-59]
 ### Don't initialize variables with default value

*Instances (14)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

93:             uint transferIndex = 0;

```

```solidity
File: example/FixedMath0x.sol

46:     int256 private constant EXP_MAX_VAL = 0;

```

```solidity
File: example/Prime.sol

163:         for (uint256 i = 0; i < _allMarkets.length; ) {

189:         for (uint256 i = 0; i < users.length; ) {

196:             for (uint256 j = 0; j < _allMarkets.length; ) {

231:         for (uint256 i = 0; i < allMarkets.length; ) {

320:             for (uint256 i = 0; i < users.length; ) {

334:             for (uint256 i = 0; i < users.length; ) {

594:         for (uint256 i = 0; i < _allMarkets.length; ) {

610:         for (uint256 i = 0; i < _allMarkets.length; ) {

662:         interests[vToken][user].accrued = 0;

715:         for (uint256 i = 0; i < _allMarkets.length; ) {

721:             interests[_allMarkets[i]][user].score = 0;

722:             interests[_allMarkets[i]][user].rewardIndex = 0;

```

</details> 
 


 ### <a name="NC-60"></a>[NC-60]
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

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

2: pragma solidity ^0.8.2;

```

```solidity
File: example/FixedMath.sol

4: pragma solidity 0.8.13;

```

```solidity
File: example/FixedMath0x.sol

4: pragma solidity 0.8.13;

```

```solidity
File: example/IPrime.sol

2: pragma solidity ^0.5.16;

```

```solidity
File: example/Prime.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/PrimeLiquidityProvider.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/PrimeStorage.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/Scores.sol

3: pragma solidity 0.8.13;

```

```solidity
File: example/ddf.sol

2: pragma solidity 0.8.18;

```

</details> 
 


 ### <a name="GAS-2"></a>[GAS-2]
 ### Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18)
While the compiler knows to optimize away the exponentiation, its still better coding practice to use idioms that do not require compiler optimization, if they exist.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

646:         capital = capital * (10 ** (18 - vToken.decimals()));

```

</details> 
 


 ### <a name="GAS-3"></a>[GAS-3]
 ### Nesting if-statements is cheaper than using &&
Nesting if-statements avoids the stack operations of setting up and using an extra jumpdest, and saves 6 [gas](https://gist.github.com/IllIllI000/7f3b818abecfadbef93b894481ae7d19)

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

322:                 if (userToken.exists && !userToken.isIrrevocable) {

354:         if (tokens[user].exists && !isAccountEligible) {

360:         } else if (!isAccountEligible && !tokens[user].exists && stakedAt[user] > 0) {

360:         } else if (!isAccountEligible && !tokens[user].exists && stakedAt[user] > 0) {

362:         } else if (stakedAt[user] == 0 && isAccountEligible && !tokens[user].exists) {

362:         } else if (stakedAt[user] == 0 && isAccountEligible && !tokens[user].exists) {

364:         } else if (tokens[user].exists && isAccountEligible) {

815:         if (pendingScoreUpdates > 0 && !isScoreUpdated[nextScoreUpdateRoundId][user]) {

```

```solidity
File: example/PrimeLiquidityProvider.sol

269:             if (distributionSpeed > 0 && balanceDiff > 0) {

```

```solidity
File: example/ddf.sol

274:                 launch != 0 && amount <= maxTxAmount,

305:                 if (tokensToSwap > minSwap && inSwapAndLiquify == 0) {

```

</details> 
 


 ### <a name="GAS-4"></a>[GAS-4]
 ### Consider using = instead of += and -= for gas efficiency
Using = instead of += and -= can save gas in certain scenarios. Consider using = when appropriate.

*Instances (32)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/FixedMath0x.sol

74:             r -= int256(0x0000000000000000000000000000001000000000000000000000000000000000); // - 32

79:             r -= int256(0x0000000000000000000000000000000800000000000000000000000000000000); // - 16

84:             r -= int256(0x0000000000000000000000000000000400000000000000000000000000000000); // - 8

89:             r -= int256(0x0000000000000000000000000000000200000000000000000000000000000000); // - 4

94:             r -= int256(0x0000000000000000000000000000000100000000000000000000000000000000); // - 2

99:             r -= int256(0x0000000000000000000000000000000080000000000000000000000000000000); // - 1

104:             r -= int256(0x0000000000000000000000000000000040000000000000000000000000000000); // - 0.5

109:             r -= int256(0x0000000000000000000000000000000020000000000000000000000000000000); // - 0.25

114:             r -= int256(0x0000000000000000000000000000000010000000000000000000000000000000); // - 0.125

164:         r += z * 0x10e1b3be415a0000; // add y^02 * (20! / 02!)

166:         r += z * 0x05a0913f6b1e0000; // add y^03 * (20! / 03!)

168:         r += z * 0x0168244fdac78000; // add y^04 * (20! / 04!)

170:         r += z * 0x004807432bc18000; // add y^05 * (20! / 05!)

172:         r += z * 0x000c0135dca04000; // add y^06 * (20! / 06!)

174:         r += z * 0x0001b707b1cdc000; // add y^07 * (20! / 07!)

176:         r += z * 0x000036e0f639b800; // add y^08 * (20! / 08!)

178:         r += z * 0x00000618fee9f800; // add y^09 * (20! / 09!)

180:         r += z * 0x0000009c197dcc00; // add y^10 * (20! / 10!)

182:         r += z * 0x0000000e30dce400; // add y^11 * (20! / 11!)

184:         r += z * 0x000000012ebd1300; // add y^12 * (20! / 12!)

186:         r += z * 0x0000000017499f00; // add y^13 * (20! / 13!)

188:         r += z * 0x0000000001a9d480; // add y^14 * (20! / 14!)

190:         r += z * 0x00000000001c6380; // add y^15 * (20! / 15!)

192:         r += z * 0x000000000001c638; // add y^16 * (20! / 16!)

194:         r += z * 0x0000000000001ab8; // add y^17 * (20! / 17!)

196:         r += z * 0x000000000000017c; // add y^18 * (20! / 18!)

198:         r += z * 0x0000000000000014; // add y^19 * (20! / 19!)

200:         r += z * 0x0000000000000001; // add y^20 * (20! / 20!)

```

```solidity
File: example/Prime.sol

559:         distributionIncome += unreleasedPLPAccruedInterest;

659:         amount += interests[vToken][user].accrued;

770:         interests[vToken][user].accrued += _interestAccrued(vToken, user);

963:         amount += BLOCKS_PER_YEAR * totalIncomePerBlockFromPLP;

```

</details> 
 


 ### <a name="GAS-5"></a>[GAS-5]
 ### Use >= instead of > for gas efficiency
Using >= costs less gas than >. Consider using >= when appropriate.

*Instances (28)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

82:             sourcesLength > 0 || targetsLength > 0,

82:             sourcesLength > 0 || targetsLength > 0,

117:         if (sourcesLength > 0) {

120:         if (targetsLength > 0) {

```

```solidity
File: example/FixedMath0x.sol

52:         if (x > LN_MAX_VAL) {

148:         if (x > EXP_MAX_VAL) {

```

```solidity
File: example/Prime.sol

569:         if (markets[vToken].sumOfMembersScore > 0) {

667:         if (amount > asset.balanceOf(address(this))) {

671:             if (amount > asset.balanceOf(address(this))) {

701:         if (totalIrrevocable > irrevocableLimit || totalRevocable > revocableLimit) revert InvalidLimit();

701:         if (totalIrrevocable > irrevocableLimit || totalRevocable > revocableLimit) revert InvalidLimit();

754:         if (totalIrrevocable > irrevocableLimit) revert InvalidLimit();

795:         if (_alphaDenominator == 0 || _alphaNumerator > _alphaDenominator) {

813:         if (totalScoreUpdatesRequired > 0) totalScoreUpdatesRequired--;

815:         if (pendingScoreUpdates > 0 && !isScoreUpdated[nextScoreUpdateRoundId][user]) {

840:         if (xvs > MAXIMUM_XVS_CAP) {

874:             supply = supplyUSD > 0 ? (supply * supplyCapUSD) / supplyUSD : 0;

878:             borrow = borrowUSD > 0 ? (borrow * borrowCapUSD) / borrowUSD : 0;

```

```solidity
File: example/PrimeLiquidityProvider.sol

225:         if (amount_ > balance) {

244:         if (balance - accrued > 0) {

264:         if (deltaBlocks > 0) {

269:             if (distributionSpeed > 0 && balanceDiff > 0) {

269:             if (distributionSpeed > 0 && balanceDiff > 0) {

298:         if (initializedBlock > 0) {

318:         if (distributionSpeed_ > MAX_DISTRIBUTION_SPEED) {

```

```solidity
File: example/ddf.sol

266:         require(amount > 0, "Min transfer amount");

305:                 if (tokensToSwap > minSwap && inSwapAndLiquify == 0) {

306:                     if (tokensToSwap > onePercent) {

```

</details> 
 


 ### <a name="GAS-6"></a>[GAS-6]
 ### Using bools for storage incurs overhead
Use uint256(1) and uint256(2) for true/false to avoid a Gwarmaccess (100 gas), and to avoid Gsset (20000 gas) when changing from ‘false’ to ‘true’, after having been ‘true’ in the past. See [source](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/58f635312aa21f947cae5f8578638a85aa2519f5/contracts/security/ReentrancyGuard.sol#L23-L27).

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/PrimeStorage.sol

87:     mapping(uint256 => mapping(address => bool)) public isScoreUpdated;

```

```solidity
File: example/ddf.sol

132:     bool public limitsInEffect;

136:     mapping(address => bool) private _isExcludedFromFeeWallet;

```

</details> 
 


 ### <a name="GAS-7"></a>[GAS-7]
 ### Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

163:         for (uint256 i = 0; i < _allMarkets.length; ) {

189:         for (uint256 i = 0; i < users.length; ) {

196:             for (uint256 j = 0; j < _allMarkets.length; ) {

231:         for (uint256 i = 0; i < allMarkets.length; ) {

320:             for (uint256 i = 0; i < users.length; ) {

334:             for (uint256 i = 0; i < users.length; ) {

594:         for (uint256 i = 0; i < _allMarkets.length; ) {

610:         for (uint256 i = 0; i < _allMarkets.length; ) {

715:         for (uint256 i = 0; i < _allMarkets.length; ) {

```

```solidity
File: example/PrimeLiquidityProvider.sol

123:         for (uint256 i; i < tokens_.length; ) {

```

</details> 
 


 ### <a name="GAS-8"></a>[GAS-8]
 ### State variables should be cached in stack variables rather than re-reading them from storage
The instances below point to the second+ access of a state variable within a function. Caching of a state variable replaces each Gwarmaccess (100 gas) with a much cheaper stack read. Other less obvious fixes/optimizations include having local memory caches of state variable structs, or having local caches of state variable contracts/addresses.

*Saves 100 gas per instance*

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

176:         address proxyAddressTo = retrieveProxyContractAddress(token, to);

193:             new ERC20ProxyDelegator{salt: 0}(token, delegate);

```

</details> 
 


 ### <a name="GAS-9"></a>[GAS-9]
 ### Use calldata instead of memory for function arguments that do not get mutated
Mark data types as `calldata` instead of `memory` where possible. This makes it so that the data is not automatically loaded into memory. If the data passed into the function does not need to be changed (like updating values in an array), it can be passed in as `calldata`. The one exception to this is if the argument must later be passed into another function that takes an argument that specifies `memory` storage.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

53:         string memory _metadata_uri

158:     function setUri(string memory uri) external onlyOwner {

```

</details> 
 


 ### <a name="GAS-10"></a>[GAS-10]
 ### Consider using assembly for simple zero checks to save gas
Using assembly for simple zero checks can save gas. Consider using assembly when appropriate.

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

192:         if (bytecodeSize == 0) {

```

```solidity
File: example/FixedMath0x.sol

145:         if (x == 0) {

```

```solidity
File: example/Prime.sol

91:         if (_blocksPerYear == 0) revert InvalidBlocksPerYear();

186:         if (pendingScoreUpdates == 0) revert NoScoreUpdatesRequired();

187:         if (nextScoreUpdateRoundId == 0) revert NoScoreUpdatesRequired();

561:         if (distributionIncome == 0) {

987:         if (totalScore == 0) return (0, 0);

992:         if (totalCappedValue == 0) return (0, 0);

```

```solidity
File: example/PrimeLiquidityProvider.sol

342:         if (lastBlockAccrued == 0) {

```

</details> 
 


 ### <a name="GAS-11"></a>[GAS-11]
 ### Expressions for constant values should use immutable rather than constant

#### Impact:
While it doesnt save any gas because the compiler knows that developers often make this mistake, its still best to use the right tool for the task at hand. There is a difference between constant variables and immutable variables, and they should each be used in their appropriate contexts. constants should be used for literal values written into the code, and immutable variables should be used for expressions, or values calculated in, or passed into the constructor.  

*Instances (20)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/FixedMath0x.sol

40:     int256 internal constant FIXED_1 = int256(0x0000000000000000000000000000000080000000000000000000000000000000);

42:     int256 private constant LN_MAX_VAL = FIXED_1;

44:     int256 private constant LN_MIN_VAL = int256(0x0000000000000000000000000000000000000000000000000000000733048c5a);

46:     int256 private constant EXP_MAX_VAL = 0;

48:     int256 private constant EXP_MIN_VAL = -int256(0x0000000000000000000000000000001ff0000000000000000000000000000000);

```

```solidity
File: example/PrimeLiquidityProvider.sol

16:     uint256 public constant MAX_DISTRIBUTION_SPEED = 1e18;

19:     uint256 internal constant EXP_SCALE = 1e18;

```

```solidity
File: example/PrimeStorage.sol

30:     uint256 internal constant EXP_SCALE = 1e18;

33:     uint256 public constant MINIMUM_STAKED_XVS = 1000 * EXP_SCALE;

36:     uint256 public constant MAXIMUM_XVS_CAP = 100000 * EXP_SCALE;

39:     uint256 public constant STAKING_PERIOD = 90 * 24 * 60 * 60;

42:     uint256 internal constant MAXIMUM_BPS = 10000;

```

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
 


 ### <a name="GAS-12"></a>[GAS-12]
 ### Constructors can be marked payable
Payable functions cost less gas to execute, since the compiler does not have to add extra checks to ensure that a payment wasn  t provided. A constructor can safely be marked as payable, since only the deployer would be able to pass funds, and the project itself would not pass any funds.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

21:     constructor(ERC20Votes _token, address _delegate) {

51:     constructor(

```

```solidity
File: example/Prime.sol

88:     constructor(address _wbnb, address _vbnb, uint256 _blocksPerYear) {

```

```solidity
File: example/PrimeLiquidityProvider.sol

82:     constructor() {

```

```solidity
File: example/ddf.sol

48:     constructor() {

138:     constructor() {

```

</details> 
 


 ### <a name="GAS-13"></a>[GAS-13]
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
 


 ### <a name="GAS-14"></a>[GAS-14]
 ### Initializers can be marked as payable to save deployment gas
Payable functions cost less gas to execute, because the compiler does not have to add extra checks to ensure that no payment is provided. Initializers can be safely marked as payable, because only the deployer or the factory contract would call the function without carrying any funds.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

115:     function initialize(

```

```solidity
File: example/PrimeLiquidityProvider.sol

8:     function initialize(address recipient) public {

94:     function initialize(

```

</details> 
 


 ### <a name="GAS-15"></a>[GAS-15]
 ### Use assembly for small keccak256 hashes, in order to save gas
If the arguments to the encode call can fit into the scratch space (two words or fewer), then its more efficient to use assembly to generate the hash (80 gas): keccak256(abi.encodePacked(x, y)) -> assembly {mstore(0x00, a); mstore(0x20, b); let hash := keccak256(0x00, 0x40); }

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

215:         bytes32 hash = keccak256(

```

</details> 
 


 ### <a name="GAS-16"></a>[GAS-16]
 ### Reduce gas usage by moving to Solidity 0.8.19 or later
Solidity version 0.8.19 introduced a number of gas optimizations, refer to the [Solidity 0.8.19 Release Announcement](https://soliditylang.org/blog/2023/02/22/solidity-0.8.19-release-announcement) for details.

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

2: pragma solidity ^0.8.2;

```

```solidity
File: example/FixedMath.sol

4: pragma solidity 0.8.13;

```

```solidity
File: example/FixedMath0x.sol

4: pragma solidity 0.8.13;

```

```solidity
File: example/IPrime.sol

2: pragma solidity ^0.5.16;

```

```solidity
File: example/Prime.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/PrimeLiquidityProvider.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/PrimeStorage.sol

2: pragma solidity 0.8.13;

```

```solidity
File: example/Scores.sol

3: pragma solidity 0.8.13;

```

```solidity
File: example/ddf.sol

2: pragma solidity 0.8.18;

```

</details> 
 


 ### <a name="GAS-17"></a>[GAS-17]
 ### Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

158:     function setUri(string memory uri) external onlyOwner {

```

```solidity
File: example/PrimeLiquidityProvider.sol

182:     function setPrimeToken(address prime_) external onlyOwner {

223:     function sweepToken(IERC20Upgradeable token_, address to_, uint256 amount_) external onlyOwner {

```

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
 


 ### <a name="GAS-18"></a>[GAS-18]
 ### `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (14)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

95:             transferIndex++

```

```solidity
File: example/Prime.sol

174:                 i++;

202:                     j++;

210:                 i++;

235:                 i++;

330:                     i++;

340:                     i++;

599:                 i++;

621:                 i++;

696:             totalIrrevocable++;

698:             totalRevocable++;

725:                 i++;

751:         totalIrrevocable++;

804:         nextScoreUpdateRoundId++;

```

</details> 
 


 ### <a name="GAS-19"></a>[GAS-19]
 ### Using `private` rather than `public` for constants, saves gas
If needed, the values can be read from the verified contract source code, or if there are multiple values there can be a single getter function that [returns a tuple](https://github.com/code-423n4/2022-08-frax/blob/90f55a9ce4e25bceed3a74290b854341d8de6afa/src/contracts/FraxlendPair.sol#L156-L178) of the values of all currently-public constants. Saves **3406-3606 gas** in deployment gas due to the compiler not having to create non-payable getter functions for deployment calldata, not having to store the bytes of the value outside of where it's used, and not adding another entry to the method ID table

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/PrimeLiquidityProvider.sol

16:     uint256 public constant MAX_DISTRIBUTION_SPEED = 1e18;

```

```solidity
File: example/PrimeStorage.sol

33:     uint256 public constant MINIMUM_STAKED_XVS = 1000 * EXP_SCALE;

36:     uint256 public constant MAXIMUM_XVS_CAP = 100000 * EXP_SCALE;

39:     uint256 public constant STAKING_PERIOD = 90 * 24 * 60 * 60;

```

</details> 
 


 ### <a name="GAS-20"></a>[GAS-20]
 ### require()/revert() strings longer than 32 bytes cost extra gas
Each extra memory word of bytes past the original 32 [incurs an MSTORE](https://gist.github.com/hrkrshnn/ee8fabd532058307229d65dcd5836ddc#consider-having-short-revert-strings) which costs 3 gas.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

81:         require(

```

```solidity
File: example/ddf.sol

266:         require(amount > 0, "Min transfer amount");

281:                     require(_previousTx[to] + _delayBetweenTx <= block.timestamp, "Protection: 120 sec/tx allowed");

```

</details> 
 


 ### <a name="GAS-21"></a>[GAS-21]
 ### Structs can be packed into fewer storage slots
Each slot saved can avoid an extra Gsset (20000 gas) for the first setting of the struct. Subsequent reads as well as writes have smaller gas savings

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/PrimeStorage.sol

6:     struct Token {

11:     struct Market {

19:     struct Interest {

25:     struct PendingInterest {

```

</details> 
 


 ### <a name="GAS-22"></a>[GAS-22]
 ### Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency
Using uint256(1) and uint256(2) instead of true and false can save gas for certain changes. Consider using uint256(1)/uint256(2) when appropriate.

*Instances (20)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Prime.sol

207:             isScoreUpdated[nextScoreUpdateRoundId][user] = true;

284:         markets[vToken].exists = true;

325:                     _mint(true, users[i]);

335:                 _mint(false, users[i]);

388:         _mint(false, msg.sender);

692:         tokens[user].exists = true;

735:         tokens[user].exists = false;

736:         tokens[user].isIrrevocable = false;

750:         userToken.isIrrevocable = true;

891:             return true;

894:         return false;

```

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
 


 ### <a name="GAS-23"></a>[GAS-23]
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
 


 ### <a name="GAS-24"></a>[GAS-24]
 ### Use != 0 instead of > for unsigned integer comparison

*Instances (28)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

82:             sourcesLength > 0 || targetsLength > 0,

82:             sourcesLength > 0 || targetsLength > 0,

117:         if (sourcesLength > 0) {

120:         if (targetsLength > 0) {

```

```solidity
File: example/FixedMath0x.sol

52:         if (x > LN_MAX_VAL) {

148:         if (x > EXP_MAX_VAL) {

```

```solidity
File: example/Prime.sol

569:         if (markets[vToken].sumOfMembersScore > 0) {

667:         if (amount > asset.balanceOf(address(this))) {

671:             if (amount > asset.balanceOf(address(this))) {

701:         if (totalIrrevocable > irrevocableLimit || totalRevocable > revocableLimit) revert InvalidLimit();

701:         if (totalIrrevocable > irrevocableLimit || totalRevocable > revocableLimit) revert InvalidLimit();

754:         if (totalIrrevocable > irrevocableLimit) revert InvalidLimit();

795:         if (_alphaDenominator == 0 || _alphaNumerator > _alphaDenominator) {

813:         if (totalScoreUpdatesRequired > 0) totalScoreUpdatesRequired--;

815:         if (pendingScoreUpdates > 0 && !isScoreUpdated[nextScoreUpdateRoundId][user]) {

840:         if (xvs > MAXIMUM_XVS_CAP) {

874:             supply = supplyUSD > 0 ? (supply * supplyCapUSD) / supplyUSD : 0;

878:             borrow = borrowUSD > 0 ? (borrow * borrowCapUSD) / borrowUSD : 0;

```

```solidity
File: example/PrimeLiquidityProvider.sol

225:         if (amount_ > balance) {

244:         if (balance - accrued > 0) {

264:         if (deltaBlocks > 0) {

269:             if (distributionSpeed > 0 && balanceDiff > 0) {

269:             if (distributionSpeed > 0 && balanceDiff > 0) {

298:         if (initializedBlock > 0) {

318:         if (distributionSpeed_ > MAX_DISTRIBUTION_SPEED) {

```

```solidity
File: example/ddf.sol

266:         require(amount > 0, "Min transfer amount");

305:                 if (tokensToSwap > minSwap && inSwapAndLiquify == 0) {

306:                     if (tokensToSwap > onePercent) {

```

</details> 
 


 ### <a name="GAS-25"></a>[GAS-25]
 ### Optimize names to save gas
public/external function names and public member variable names can be optimized to save gas. See [this](https://gist.github.com/IllIllI000/a5d8b486a8259f9f77891a919febd1a9) link for an example of how it works. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save 128 gas each during deployment, and renaming functions to have lower method IDs will save 22 gas per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

*Instances (75)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/BaseJumpRateModelV2.sol

17:     function token() external view returns (ERC20Votes);

18:     function delegate() external view returns (address);

35:     ERC20Votes public token;

158:     function setUri(string memory uri) external onlyOwner {

```

```solidity
File: example/Prime.sol

25:     uint256 public immutable BLOCKS_PER_YEAR;

29:     address public immutable WBNB;

33:     address public immutable VBNB;

127:     ) external virtual initializer {

418:     function claimInterest(address vToken) external whenNotPaused returns (uint256) {

428:     function claimInterest(address vToken, address user) external whenNotPaused returns (uint256) {

454:     function getAllMarkets() external view returns (address[] memory) {

463:     function claimTimeRemaining(address user) external view returns (uint256) {

481:     function calculateAPR(address market, address user) external view returns (uint256 supplyAPR, uint256 borrowAPR) {

518:     ) external view returns (uint256 supplyAPR, uint256 borrowAPR) {

```

```solidity
File: example/PrimeLiquidityProvider.sol

16:     uint256 public constant MAX_DISTRIBUTION_SPEED = 1e18;

22:     address public prime;

25:     mapping(address => uint256) public tokenDistributionSpeeds;

28:     mapping(address => uint256) public lastAccruedBlock;

31:     mapping(address => uint256) public tokenAmountAccrued;

182:     function setPrimeToken(address prime_) external onlyOwner {

223:     function sweepToken(IERC20Upgradeable token_, address to_, uint256 amount_) external onlyOwner {

239:     function getEffectiveDistributionSpeed(address token_) external view returns (uint256) {

283:     function getBlockNumber() public view virtual returns (uint256) {

357:     receive() external payable {

```

```solidity
File: example/PrimeStorage.sol

33:     uint256 public constant MINIMUM_STAKED_XVS = 1000 * EXP_SCALE;

36:     uint256 public constant MAXIMUM_XVS_CAP = 100000 * EXP_SCALE;

39:     uint256 public constant STAKING_PERIOD = 90 * 24 * 60 * 60;

45:     mapping(address => Token) public tokens;

48:     uint256 public totalIrrevocable;

51:     uint256 public totalRevocable;

54:     uint256 public revocableLimit;

57:     uint256 public irrevocableLimit;

60:     mapping(address => uint256) public stakedAt;

63:     mapping(address => Market) public markets;

66:     mapping(address => mapping(address => Interest)) public interests;

72:     uint128 public alphaNumerator;

75:     uint128 public alphaDenominator;

87:     mapping(uint256 => mapping(address => bool)) public isScoreUpdated;

90:     uint256 public nextScoreUpdateRoundId;

93:     uint256 public totalScoreUpdatesRequired;

96:     uint256 public pendingScoreUpdates;

99:     mapping(address => address) public vTokenForAsset;

102:     address public protocolShareReserve;

105:     address public comptroller;

109:     mapping(address => uint256) public unreleasedPSRIncome;

113:     mapping(address => uint256) public unreleasedPLPIncome;

116:     address public primeLiquidityProvider;

119:     ResilientOracleInterface public oracle;

```

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

132:     bool public limitsInEffect;

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
 

