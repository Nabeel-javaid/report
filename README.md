# Report


## Medium Issues


| |Issue|Instances|
|-|:-|:-:|
| [M-1](#M-1) | Centralization Risk for trusted owners | 15 |
| [M-2](#M-2) | Unsafe use of ERC20 transferFrom() | 7 |
| [M-3](#M-3) | Unsafe use of ERC20 transfer() | 19 |

## Low Issues


| |Issue|Instances|
|-|:-|:-:|
| [L-1](#L-1) | complex casting | 14 |
| [L-2](#L-2) | Functions calling contracts/addresses with transfer hooks are missing reentrancy guards | 7 |
| [L-3](#L-3) | Tokens may be minted to address(0x0) | 5 |
| [L-4](#L-4) |  `abi.encodePacked()` should not be used with dynamic types when passing the result to a hash function such as `keccak256()` | 3 |
| [L-5](#L-5) | Division by zero not prevented | 13 |
| [L-6](#L-6) | Empty function body | 2 |
| [L-7](#L-7) | Use Ownable2Step instead of Ownable | 9 |
| [L-8](#L-8) | Owner can renounce Ownership   | 9 |
| [L-9](#L-9) | Loss of precision | 13 |
| [L-10](#L-10) | State variables not capped at reasonable values | 59 |
| [L-11](#L-11) | Some tokens may revert when zero value transfers are made | 19 |
| [L-12](#L-12) |  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard   | 19 |
| [L-13](#L-13) | Some tokens may revert when large transfers are made | 20 |
| [L-14](#L-14) | Unsafe casting | 11 |
| [L-15](#L-15) | Unsafe ERC20 operation(s) | 26 |

## Non Critical Issues


| |Issue|Instances|
|-|:-|:-:|
| [NC-1](#NC-1) | Contracts should have full test coverage | 13 |
| [NC-2](#NC-2) | Consider adding formal verification proofs | 13 |
| [NC-3](#NC-3) | Large or complicated code bases should implement invariant tests | 13 |
| [NC-4](#NC-4) | NatSpec: Library declarations should have NatSpec descriptions | 1 |
| [NC-5](#NC-5) | Variables without visibility specifier | 29 |
| [NC-6](#NC-6) | Array is push()ed but not pop()ed | 7 |
| [NC-7](#NC-7) | Constants in comparisons should appear on the left side | 78 |
| [NC-8](#NC-8) | constants should be defined rather than using magic numbers | 6 |
| [NC-9](#NC-9) | Contract declarations should have NatSpec @author annotations | 36 |
| [NC-10](#NC-10) | Contract declarations should have NatSpec @Title annotations | 36 |
| [NC-11](#NC-11) | NatSpec: Contract declarations should have @dev tags | 36 |
| [NC-12](#NC-12) | NatSpec: Contract declarations should have NatSpec descriptions | 36 |
| [NC-13](#NC-13) | NatSpec: Contract declarations should have @notice tags | 36 |
| [NC-14](#NC-14) | Consider using delete rather than assigning zero to clear value | 68 |
| [NC-15](#NC-15) | Consider using delete rather than assigning false to clear value | 3 |
| [NC-16](#NC-16) | Consider adding a block/deny-list" | 36 |
| [NC-17](#NC-17) | Use bytes.concat() on bytes instead of abi.encodePacked() for clearer semantic meaning | 6 |
| [NC-18](#NC-18) | Consider adding emergency-stop functionality | 36 |
| [NC-19](#NC-19) | Events are missing sender information | 31 |
| [NC-20](#NC-20) | NatSpec: Event declarations should have NatSpec descriptions | 38 |
| [NC-21](#NC-21) | contracts should use fixed compiler versions | 13 |
| [NC-22](#NC-22) | NatSpec: function declarations should have NatSpec descriptions | 108 |
| [NC-23](#NC-23) | NatSpec: function declarations should have @Notice tags | 108 |
| [NC-24](#NC-24) | NatSpec: function declarations should have NatSpec descriptions | 108 |
| [NC-25](#NC-25) | Order of Functions Does Not Follow Solidity Style Guide | 1 |
| [NC-26](#NC-26) | If-statement can be converted to a ternary | 72 |
| [NC-27](#NC-27) | Large multiples of ten should use scientific notation | 3 |
| [NC-28](#NC-28) | Consider using named mappings | 1 |
| [NC-29](#NC-29) | Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct | 9 |
| [NC-30](#NC-30) | Use of override is unnecessary | 17 |
| [NC-31](#NC-31) | Consider using descriptive constants when using 0 in the code | 37 |
| [NC-32](#NC-32) | Non-external/public variable names should begin with an underscore | 39 |
| [NC-33](#NC-33) | Setters should prevent re-setting of the same value | 11 |
| [NC-34](#NC-34) | Use the latest solidity version for deployment   | 13 |
| [NC-35](#NC-35) | Consider bounding input array length | 23 |
| [NC-36](#NC-36) | Event is missing `indexed` fields | 10 |
| [NC-37](#NC-37) | Strings should use double quotes rather than single quotes | 2 |
| [NC-38](#NC-38) | Functions not used internally could be marked external | 4 |
| [NC-39](#NC-39) | Variables need not be initialized to zero | 55 |
| [NC-40](#NC-40) | Consider implementing two-step procedure for updation | 1 |
| [NC-41](#NC-41) | Consider moving msg.sender checks to modifiers | 137 |
| [NC-42](#NC-42) | Dont use _msgSender() if not supporting EIP-2771 | 6 |
| [NC-43](#NC-43) | <array>.length should not be looked up in every loop of a for-loop | 11 |
| [NC-44](#NC-44) | Use assembly to emit events, in order to save gas | 41 |
| [NC-45](#NC-45) | Don't initialize variables with default value | 58 |
| [NC-46](#NC-46) | Long revert strings | 1 |

## Gas Optimizations


| |Issue|Instances|
|-|:-|:-:|
| [GAS-1](#GAS-1) | Enable IR-based code generation | 13 |
| [GAS-2](#GAS-2) | Nesting if-statements is cheaper than using && | 12 |
| [GAS-3](#GAS-3) | Consider using = instead of += and -= for gas efficiency | 40 |
| [GAS-4](#GAS-4) | Use >= instead of > for gas efficiency | 44 |
| [GAS-5](#GAS-5) | Using bools for storage incurs overhead | 1 |
| [GAS-6](#GAS-6) | Cache array length outside of loop | 23 |
| [GAS-7](#GAS-7) | Consider using assembly for simple zero checks to save gas | 5 |
| [GAS-8](#GAS-8) | Expressions for constant values should use immutable rather than constant | 6 |
| [GAS-9](#GAS-9) | Constructors can be marked payable | 11 |
| [GAS-10](#GAS-10) | Use Custom Errors | 35 |
| [GAS-11](#GAS-11) | Use assembly for small keccak256 hashes, in order to save gas | 7 |
| [GAS-12](#GAS-12) | Reduce gas usage by moving to Solidity 0.8.19 or later | 13 |
| [GAS-13](#GAS-13) | Functions guaranteed to revert when called by normal users can be marked `payable` | 4 |
| [GAS-14](#GAS-14) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 36 |
| [GAS-15](#GAS-15) | require()/revert() strings longer than 32 bytes cost extra gas | 28 |
| [GAS-16](#GAS-16) | Splitting require() statements that use && saves gas | 2 |
| [GAS-17](#GAS-17) | Structs can be packed into fewer storage slots | 7 |
| [GAS-18](#GAS-18) | Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency | 18 |
| [GAS-19](#GAS-19) | Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead | 6 |
| [GAS-20](#GAS-20) | Use != 0 instead of > for unsigned integer comparison | 44 |
| [GAS-21](#GAS-21) | Optimize names to save gas | 105 |

##################################################################### 
 
 DETAILED REPORT:: 


##################################################################### 


## Medium Issues


 ### <a name="M-1"></a>[M-1]
 ### Centralization Risk for trusted owners

#### Impact:
Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (15)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

9: contract Config is IConfig, Ownable {

14:     constructor(address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: example/ListMarket.sol

10: contract ListMarket is Ownable {

16:     constructor(address _config, address _collector, address _initialOwner) Ownable(_initialOwner) {

24:     function setPrice(string memory list_name, uint256 price) public onlyOwner {

33:     function setCollector(address payable _collector) public onlyOwner {

```

```solidity
File: example/Promo.sol

10: contract Promo is Ownable {

45:     constructor(address _config, address _initialOwner) Ownable(_initialOwner) {

59:     function setProcessor(address payable _processor) external onlyOwner {

63:     function setProcessorFee(uint256 _fee) external onlyOwner {

```

```solidity
File: example/RandomOracle.sol

10: contract RandomOracle is IRandomOracle, Ownable {

18:     constructor(address _initialOwner) Ownable(_initialOwner) {

22:     function setUpdaterAccount(address _updaterAccount) public onlyOwner {

```

```solidity
File: example/SavvaToken.sol

20:         Ownable(_initialOwner)

27:     function mint(uint256 amount) public override onlyOwner {

```

</details> 
 


 ### <a name="M-2"></a>[M-2]
 ### Unsafe use of ERC20 transferFrom()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transferFrom() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransferFrom() from OpenZeppelin instead.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

210:         token.transferFrom(msg.sender, address(this), amount);

```

```solidity
File: example/NFTMarketplace.sol

49:         c_nft.transferFrom(msg.sender, address(this), tokenId);

75:         c_nft.transferFrom(address(this), msg.sender, tokenId); //@audit use safeTransferFrom

137:         token.transferFrom(msg.sender, oldOwner, price);

171:         token.transferFrom(msg.sender, oldOwner, price);

```

```solidity
File: example/Promo.sol

122:             token.transferFrom(msg.sender, address(this), _savva_amount);

```

```solidity
File: example/Staking.sol

215:         savvaToken.transferFrom(msg.sender, address(this), amount);

```

</details> 
 


 ### <a name="M-3"></a>[M-3]
 ### Unsafe use of ERC20 transfer()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transfer() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransfer() from OpenZeppelin instead.

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

217:             token.transfer(author, authorShare);

318:             token.transfer(winner, prize);

401:         token.transfer(msg.sender, amount);

475:                 token.transfer(msg.sender, amount);

487:                     token.transfer(msg.sender, amount);

```

```solidity
File: example/ContentNFT.sol

48:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/ListMarket.sol

48:             bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

50:             collector.transfer(msg.value);

```

```solidity
File: example/Promo.sol

109:         processor.transfer(processor_fee);

187:                     token.transfer(_user, savva_amount);

191:                     payable(_user).transfer(pls_amount);

230:                 token.transfer(donator, savva_amount);

231:                 payable(donator).transfer(pls_amount);

```

```solidity
File: example/SavvaFaucet.sol

106:         ORIGIN_ADDRESS.transfer(msg.value);

135:                 savvaToken.transfer(depositor, amount);

146:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: example/Staking.sol

266:             savvaToken.transfer(msg.sender, gain);

295:         savvaToken.transfer(msg.sender, amount);

395:         savvaToken.transfer(msg.sender, totalAmount);

```

</details> 
 


## Low Issues


 ### <a name="L-1"></a>[L-1]
 ### complex casting
Consider whether the number of casts is really necessary, or whether using a different type would be more appropriate. Alternatively, add comments to explain in detail why the casts are necessary, and any implicit reasons why the cast does not introduce an overflow.

*Instances (14)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

372:                 random = uint256(

496:             uint256(total),

```

```solidity
File: example/ContentNFT.sol

19:     event Mint(

29:     function mint(

50:         _mint(author, tokenId); //@audit

53:         emit Mint(author, tokenId, domain, guid, uri, price, block.timestamp);

```

```solidity
File: example/SavvaFaucet.sol

118:         savvaToken.mint(roundTokensToShare);

```

```solidity
File: example/SavvaToken.sol

27:     function mint(uint256 amount) public override onlyOwner {

28:         _mint(owner(), amount);

```

```solidity
File: example/Staking.sol

208:         _mint(msg.sender, amount); // mint the voting tokens

309:         _mint(msg.sender, amount); // mint the voting tokens

707:             _mint(to, from_ag); // mint the voting tokens

```

```solidity
File: example/UserProfile.sol

33:             uint8 ch = uint8(b[i]);

```

```solidity
File: example/utils.sol

16:         return uint256(keccak256(abi.encodePacked(author, domain, guid)));

```

</details> 
 


 ### <a name="L-2"></a>[L-2]
 ### Functions calling contracts/addresses with transfer hooks are missing reentrancy guards
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks will open the users of this protocol up to [read-only reentrancies](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) with no way to protect against it, except by block-listing the whole protocol.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

210:         token.transferFrom(msg.sender, address(this), amount);

```

```solidity
File: example/NFTMarketplace.sol

49:         c_nft.transferFrom(msg.sender, address(this), tokenId);

75:         c_nft.transferFrom(address(this), msg.sender, tokenId); //@audit use safeTransferFrom

137:         token.transferFrom(msg.sender, oldOwner, price);

171:         token.transferFrom(msg.sender, oldOwner, price);

```

```solidity
File: example/Promo.sol

122:             token.transferFrom(msg.sender, address(this), _savva_amount);

```

```solidity
File: example/Staking.sol

215:         savvaToken.transferFrom(msg.sender, address(this), amount);

```

</details> 
 


 ### <a name="L-3"></a>[L-3]
 ### Tokens may be minted to address(0x0)
Neither the  functions, nor _mint() prevent minting to address(0x0)  

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentNFT.sol

50:         _mint(author, tokenId); //@audit

```

```solidity
File: example/SavvaToken.sol

28:         _mint(owner(), amount);

```

```solidity
File: example/Staking.sol

208:         _mint(msg.sender, amount); // mint the voting tokens

309:         _mint(msg.sender, amount); // mint the voting tokens

707:             _mint(to, from_ag); // mint the voting tokens

```

</details> 
 


 ### <a name="L-4"></a>[L-4]
 ###  `abi.encodePacked()` should not be used with dynamic types when passing the result to a hash function such as `keccak256()`
Use `abi.encode()` instead which will pad items to 32 bytes, which will [prevent hash collisions](https://docs.soliditylang.org/en/v0.8.13/abi-spec.html#non-standard-packed-mode) (e.g. `abi.encodePacked(0x123,0x456)` => `0x123456` => `abi.encodePacked(0x1,0x23456)`, but `abi.encode(0x123,0x456)` => `0x0...1230...456`). "Unless there is a compelling reason, `abi.encode` should be preferred". If there is only one argument to `abi.encodePacked()` it can often be cast to `bytes()` or `bytes32()` [instead](https://ethereum.stackexchange.com/questions/30912/how-to-compare-strings-in-solidity#answer-82739).
If all arguments are strings and or bytes, `bytes.concat()` should be used instead

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Promo.sol

167:                     promoCodes[i].hash == keccak256(abi.encodePacked(_secret)),

```

```solidity
File: example/Staking.sol

592:         bytes32 key = keccak256(abi.encodePacked(msg.sender, event_id, author));

```

```solidity
File: example/utils.sol

16:         return uint256(keccak256(abi.encodePacked(author, domain, guid)));

```

</details> 
 


 ### <a name="L-5"></a>[L-5]
 ### Division by zero not prevented
The divisions below take an input parameter that has no zero-value checks, which can cause the functions reverting if zero is passed.  

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

163:                 (amount * config.getUInt(bytes32("authorShare"))) /

168:                     (amount * config.getUInt(bytes32("nftOwnerCut"))) /

308:             prize = (total * config.getUInt(bytes32("winnerShare"))) / 100;

```

```solidity
File: example/SavvaFaucet.sol

46:         lastRoundPayWeek = block.timestamp / SECONDS_IN_WEEK;

50:         uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

67:         uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

93:             uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

112:         uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

125:             (100 - STAKING_SHARE)) / 100;

129:             uint256 amount = (deposited[depositor] * totalForEverybody) /

```

```solidity
File: example/Staking.sol

91:         currentFrameNumber = block.timestamp / SECONDS_PER_WEEK;

121:         uint256 frame_n = block.timestamp / SECONDS_PER_WEEK;

191:             uint256 user_gain = (balanceOf(userAddress) * frame_tokens) /

```

</details> 
 


 ### <a name="L-6"></a>[L-6]
 ### Empty function body
Consider adding a comment about why the function body is empty

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

149:         } catch {}

```

```solidity
File: example/ContentRegistry.sol

81:         } catch {}

```

</details> 
 


 ### <a name="L-7"></a>[L-7]
 ### Use Ownable2Step instead of Ownable
Add a description of why Ownable2Step is recommended.

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

9: contract Config is IConfig, Ownable {

14:     constructor(address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: example/ListMarket.sol

10: contract ListMarket is Ownable {

16:     constructor(address _config, address _collector, address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: example/Promo.sol

10: contract Promo is Ownable {

45:     constructor(address _config, address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: example/RandomOracle.sol

10: contract RandomOracle is IRandomOracle, Ownable {

18:     constructor(address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: example/SavvaToken.sol

20:         Ownable(_initialOwner)

```

</details> 
 


 ### <a name="L-8"></a>[L-8]
 ### Owner can renounce Ownership  
Each of the following contracts implements or inherits the renounceOwnership() function. This can represent a certain risk if the ownership is renounced for any other reason than by design. Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

9: contract Config is IConfig, Ownable {

14:     constructor(address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: example/ListMarket.sol

10: contract ListMarket is Ownable {

16:     constructor(address _config, address _collector, address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: example/Promo.sol

10: contract Promo is Ownable {

45:     constructor(address _config, address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: example/RandomOracle.sol

10: contract RandomOracle is IRandomOracle, Ownable {

18:     constructor(address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: example/SavvaToken.sol

20:         Ownable(_initialOwner)

```

</details> 
 


 ### <a name="L-9"></a>[L-9]
 ### Loss of precision
Division by large numbers or variables may result in the result being zero, due to Solidity not supporting fractions.

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

163:                 (amount * config.getUInt(bytes32("authorShare"))) /

168:                     (amount * config.getUInt(bytes32("nftOwnerCut"))) /

308:             prize = (total * config.getUInt(bytes32("winnerShare"))) / 100;

```

```solidity
File: example/SavvaFaucet.sol

46:         lastRoundPayWeek = block.timestamp / SECONDS_IN_WEEK;

50:         uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

67:         uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

93:             uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

112:         uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

125:             (100 - STAKING_SHARE)) / 100;

129:             uint256 amount = (deposited[depositor] * totalForEverybody) /

```

```solidity
File: example/Staking.sol

91:         currentFrameNumber = block.timestamp / SECONDS_PER_WEEK;

121:         uint256 frame_n = block.timestamp / SECONDS_PER_WEEK;

191:             uint256 user_gain = (balanceOf(userAddress) * frame_tokens) /

```

</details> 
 


 ### <a name="L-10"></a>[L-10]
 ### State variables not capped at reasonable values
Consider adding minimum/maximum value checks to ensure that the state variables below can never be used to excessively harm users, including via griefing

*Instances (59)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

13:         address author;

14:         string domain;

15:         string guid;

17:         uint256 amount;

18:         uint256 round_time;

19:         uint256 SLLeft; // Sorted List left

20:         uint256 SLRight; // Sorted List right

120:                 return false;

129:                 return false;

132: 

301:             return h_next;

303: 

353: 

361:         uint256 h;

428: 

453: 

533:         return total;

```

```solidity
File: example/ContentRegistry.sol

101:         return savva_cid;

120:         return ids;

```

```solidity
File: example/NFTMarketplace.sol

14:         address owner;

15:         uint256 price;

```

```solidity
File: example/Promo.sol

50:         address donator;

51:         uint256 savva_amount;

52:         bytes32 hash;

53:         uint256 pls_amount;

54:         uint256 valid_till;

251:                     return false;

252:                 return true;

255:         return false;

```

```solidity
File: example/RandomOracle.sol

27:         return random;

31:         return lastUpdateTime;

```

```solidity
File: example/SavvaFaucet.sol

33:         return SECONDS_IN_WEEK;

58:                 return roundTokensToShare;

155:         delete depositors;

```

```solidity
File: example/Staking.sol

9:         uint256 amount;

10:         uint256 timestamp;

14:         address author;

15:         address event_contract;

16:         bytes32 event_id;

17:         uint256 amount;

18:         uint256 index; // index in the array of keys

22:         uint256 accruedGain;

24:         uint256 nextUnstakeRequestId;

25:         uint256 stake_frame;

29:         uint256 event_contract;

30:         uint256 last_paid_by_patrons;

100:         uint256 to_share; // tokens accumulated for sharing

101:         uint256 staked; // total staked in this frame

174:             return 0;

196:         return result;

355: 

556:             return 0;

577:         return total;

683:             return false;

687:             return true;

714:                 return false;

719:         return true;

```

```solidity
File: example/utils.sol

38: 

44: 

```

</details> 
 


 ### <a name="L-11"></a>[L-11]
 ### Some tokens may revert when zero value transfers are made
Despite the fact that [EIP-20](https://github.com/ethereum/EIPs/blob/7500ac4fc1bbdfaf684e7ef851f798f6b667b2fe/EIPS/eip-20.md?plain=1#L116) states that zero-value transfers must be accepted, some tokens, such as LEND, will revert if this is attempted, which may cause transactions that involve other tokens (such as batch operations) to fully revert. Consider skipping the transfer if the amount is zero, which will also save gas.

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

217:             token.transfer(author, authorShare);

318:             token.transfer(winner, prize);

401:         token.transfer(msg.sender, amount);

475:                 token.transfer(msg.sender, amount);

487:                     token.transfer(msg.sender, amount);

```

```solidity
File: example/ContentNFT.sol

48:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/ListMarket.sol

48:             bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

50:             collector.transfer(msg.value);

```

```solidity
File: example/Promo.sol

109:         processor.transfer(processor_fee);

187:                     token.transfer(_user, savva_amount);

191:                     payable(_user).transfer(pls_amount);

230:                 token.transfer(donator, savva_amount);

231:                 payable(donator).transfer(pls_amount);

```

```solidity
File: example/SavvaFaucet.sol

106:         ORIGIN_ADDRESS.transfer(msg.value);

135:                 savvaToken.transfer(depositor, amount);

146:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: example/Staking.sol

266:             savvaToken.transfer(msg.sender, gain);

295:         savvaToken.transfer(msg.sender, amount);

395:         savvaToken.transfer(msg.sender, totalAmount);

```

</details> 
 


 ### <a name="L-12"></a>[L-12]
 ###  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard  
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks opens the users of this protocol up to [read-only reentrancy](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) vulnerability with no way to protect them except by block-listing the entire protocol.

*Instances (19)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

217:             token.transfer(author, authorShare);

318:             token.transfer(winner, prize);

401:         token.transfer(msg.sender, amount);

475:                 token.transfer(msg.sender, amount);

487:                     token.transfer(msg.sender, amount);

```

```solidity
File: example/ContentNFT.sol

48:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/ListMarket.sol

48:             bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

50:             collector.transfer(msg.value);

```

```solidity
File: example/Promo.sol

109:         processor.transfer(processor_fee);

187:                     token.transfer(_user, savva_amount);

191:                     payable(_user).transfer(pls_amount);

230:                 token.transfer(donator, savva_amount);

231:                 payable(donator).transfer(pls_amount);

```

```solidity
File: example/SavvaFaucet.sol

106:         ORIGIN_ADDRESS.transfer(msg.value);

135:                 savvaToken.transfer(depositor, amount);

146:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: example/Staking.sol

266:             savvaToken.transfer(msg.sender, gain);

295:         savvaToken.transfer(msg.sender, amount);

395:         savvaToken.transfer(msg.sender, totalAmount);

```

</details> 
 


 ### <a name="L-13"></a>[L-13]
 ### Some tokens may revert when large transfers are made
Tokens such as COMP or UNI will revert when an address balance reaches type(uint96).max. Ensure that the calls below can be broken up into smaller batches if necessary.  

*Instances (20)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

217:             token.transfer(author, authorShare);

318:             token.transfer(winner, prize);

401:         token.transfer(msg.sender, amount);

475:                 token.transfer(msg.sender, amount);

487:                     token.transfer(msg.sender, amount);

```

```solidity
File: example/ContentNFT.sol

48:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/ListMarket.sol

48:             bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

50:             collector.transfer(msg.value);

```

```solidity
File: example/Promo.sol

109:         processor.transfer(processor_fee);

187:                     token.transfer(_user, savva_amount);

191:                     payable(_user).transfer(pls_amount);

230:                 token.transfer(donator, savva_amount);

231:                 payable(donator).transfer(pls_amount);

```

```solidity
File: example/SavvaFaucet.sol

106:         ORIGIN_ADDRESS.transfer(msg.value);

135:                 savvaToken.transfer(depositor, amount);

146:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: example/Staking.sol

266:             savvaToken.transfer(msg.sender, gain);

295:         savvaToken.transfer(msg.sender, amount);

395:         savvaToken.transfer(msg.sender, totalAmount);

717:             _transfer(from, to, left2send);

```

</details> 
 


 ### <a name="L-14"></a>[L-14]
 ### Unsafe casting
Unsafe casting can cause alot of issues especially when a type is downcast to a smaller type, the higher order bits are truncated, effectively applying a modulo to the original value. Without any other checks, this wrapping will lead to unexpected behavior and bugs

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentNFT.sol

19:     event Mint(

29:     function mint(

50:         _mint(author, tokenId); //@audit

53:         emit Mint(author, tokenId, domain, guid, uri, price, block.timestamp);

```

```solidity
File: example/SavvaFaucet.sol

118:         savvaToken.mint(roundTokensToShare);

```

```solidity
File: example/SavvaToken.sol

27:     function mint(uint256 amount) public override onlyOwner {

28:         _mint(owner(), amount);

```

```solidity
File: example/Staking.sol

208:         _mint(msg.sender, amount); // mint the voting tokens

309:         _mint(msg.sender, amount); // mint the voting tokens

707:             _mint(to, from_ag); // mint the voting tokens

```

```solidity
File: example/UserProfile.sol

33:             uint8 ch = uint8(b[i]);

```

</details> 
 


 ### <a name="L-15"></a>[L-15]
 ### Unsafe ERC20 operation(s)

*Instances (26)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

210:         token.transferFrom(msg.sender, address(this), amount);

217:             token.transfer(author, authorShare);

318:             token.transfer(winner, prize);

401:         token.transfer(msg.sender, amount);

475:                 token.transfer(msg.sender, amount);

487:                     token.transfer(msg.sender, amount);

```

```solidity
File: example/ContentNFT.sol

48:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/ListMarket.sol

48:             bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

50:             collector.transfer(msg.value);

```

```solidity
File: example/NFTMarketplace.sol

49:         c_nft.transferFrom(msg.sender, address(this), tokenId);

75:         c_nft.transferFrom(address(this), msg.sender, tokenId); //@audit use safeTransferFrom

137:         token.transferFrom(msg.sender, oldOwner, price);

171:         token.transferFrom(msg.sender, oldOwner, price);

```

```solidity
File: example/Promo.sol

109:         processor.transfer(processor_fee);

122:             token.transferFrom(msg.sender, address(this), _savva_amount);

187:                     token.transfer(_user, savva_amount);

191:                     payable(_user).transfer(pls_amount);

230:                 token.transfer(donator, savva_amount);

231:                 payable(donator).transfer(pls_amount);

```

```solidity
File: example/SavvaFaucet.sol

106:         ORIGIN_ADDRESS.transfer(msg.value);

135:                 savvaToken.transfer(depositor, amount);

146:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: example/Staking.sol

215:         savvaToken.transferFrom(msg.sender, address(this), amount);

266:             savvaToken.transfer(msg.sender, gain);

295:         savvaToken.transfer(msg.sender, amount);

395:         savvaToken.transfer(msg.sender, totalAmount);

```

</details> 
 


## Non Critical Issues


 ### <a name="NC-1"></a>[NC-1]
 ### Contracts should have full test coverage
While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentFund.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentNFT.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentRegistry.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ListMarket.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/NFTMarketplace.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/Promo.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/RandomOracle.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/SavvaFaucet.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/SavvaToken.sol

8: pragma solidity ^0.8.18;

```

```solidity
File: example/Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: example/UserProfile.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/utils.sol

7: pragma solidity ^0.8.18;

```

</details> 
 


 ### <a name="NC-2"></a>[NC-2]
 ### Consider adding formal verification proofs
Consider using formal verification to mathematically prove that your code does what is intended, and does not have any edge cases with unexpected behavior. The solidity compiler itself has this functionality [built in](https://docs.soliditylang.org/en/latest/smtchecker.html#smtchecker-and-formal-verification)  

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentFund.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentNFT.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentRegistry.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ListMarket.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/NFTMarketplace.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/Promo.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/RandomOracle.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/SavvaFaucet.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/SavvaToken.sol

8: pragma solidity ^0.8.18;

```

```solidity
File: example/Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: example/UserProfile.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/utils.sol

7: pragma solidity ^0.8.18;

```

</details> 
 


 ### <a name="NC-3"></a>[NC-3]
 ### Large or complicated code bases should implement invariant tests
Large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts, should implement [invariant fuzzing tests](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05). Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold. Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers, with properly and extensively-written invariants, can close this testing gap significantly.  

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentFund.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentNFT.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentRegistry.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ListMarket.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/NFTMarketplace.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/Promo.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/RandomOracle.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/SavvaFaucet.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/SavvaToken.sol

8: pragma solidity ^0.8.18;

```

```solidity
File: example/Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: example/UserProfile.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/utils.sol

7: pragma solidity ^0.8.18;

```

</details> 
 


 ### <a name="NC-4"></a>[NC-4]
 ### NatSpec: Library declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/utils.sol

9: library utils {

```

</details> 
 


 ### <a name="NC-5"></a>[NC-5]
 ### Variables without visibility specifier

#### Impact:
Specifying visibility for variables can improve code readability and maintainability.

*Instances (29)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

13:         address author;

14:         string domain;

15:         string guid;

17:         uint256 amount;

18:         uint256 round_time;

19:         uint256 SLLeft; // Sorted List left

20:         uint256 SLRight; // Sorted List right

304:         uint256 prize;

361:         uint256 h;

```

```solidity
File: example/NFTMarketplace.sol

14:         address owner;

15:         uint256 price;

```

```solidity
File: example/Promo.sol

50:         address donator;

51:         uint256 savva_amount;

53:         uint256 pls_amount;

54:         uint256 valid_till;

```

```solidity
File: example/Staking.sol

9:         uint256 amount;

10:         uint256 timestamp;

14:         address author;

15:         address event_contract;

17:         uint256 amount;

18:         uint256 index; // index in the array of keys

22:         uint256 accruedGain;

24:         uint256 nextUnstakeRequestId;

25:         uint256 stake_frame;

29:         uint256 event_contract;

30:         uint256 last_paid_by_patrons;

100:         uint256 to_share; // tokens accumulated for sharing

101:         uint256 staked; // total staked in this frame

```

```solidity
File: example/UserProfile.sol

32:         for (uint256 i; i < b.length; i++) {

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
File: example/ContentFund.sol

237:             funds[savva_cid].contributors.push(msg.sender);

248:                 funds[savva_cid].contributors.push(msg.sender);

```

```solidity
File: example/NFTMarketplace.sol

51:         nftsByOwner[msg.sender].push(tokenId);

188:         nftsByOwner[msg.sender].push(tokenId);

```

```solidity
File: example/SavvaFaucet.sol

98:             depositors.push(msg.sender);

```

```solidity
File: example/Staking.sol

428:             user.PayRecordsKeys.push(key);

444:                 s_author.patrons.push(msg.sender);

```

</details> 
 


 ### <a name="NC-7"></a>[NC-7]
 ### Constants in comparisons should appear on the left side

#### Impact:
Placing constants on the left side of comparisons can improve code readability and prevent accidental assignment. Doing so will prevent typo [bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*Instances (78)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

63:         if (SLRoot == 0) {

70:                 if (funds[h].round_time > rt) {

74:                     if (funds[h].SLLeft != 0) {

83:                 if (funds[h].SLRight == 0) {

95:         if (funds[savva_cid].SLLeft != 0) {

101:         if (funds[savva_cid].SLRight != 0) {

115:         if (funds[savva_cid].SLLeft != 0) {

116:             if (

124:         if (funds[savva_cid].SLRight != 0) {

125:             if (

155:         if (

166:             if (nft_owner != address(0)) {

216:         if (authorShare > 0) {

221:         if (nftShare > 0) {

226:         if (funds[savva_cid].author == address(0)) {

247:             if (contributions[savva_cid][msg.sender] == 0) {

283:             if (winnerIndex < runningShareSum) {

299:         if (winner == address(0)) {

307:         if (total >= config.getUInt(bytes32("minFundToShare"))) {

316:         if (prize > 0) {

321:         if (funds[h].amount > 0) {

365:             if (funds[h].round_time > block.timestamp) break; // Round is not finished yet

366:             if (funds[h].round_time > getRandom.getLastUpdateTime()) break; // Need to wait for new random

368:             if (random == 0) {

471:             if (nftBalance[tokenId] > 0) {

483:                 if (nftBalance[tokenId] > 0) {

```

```solidity
File: example/ListMarket.sol

44:         if (collector == address(0)) {

```

```solidity
File: example/NFTMarketplace.sol

61:             if (nftsByOwnerArray[i] == tokenId) {

62:                 if (i != nftsByOwnerArray.length - 1) {

176:             if (nftsByOwnerArray[i] == tokenId) {

177:                 if (i != nftsByOwnerArray.length - 1) {

```

```solidity
File: example/Promo.sol

118:         if (_savva_amount > 0) {

161:             if (promoCodes[i].hash == _hash) {

178:                 if (i != promoCodes.length - 1) {

183:                 if (savva_amount > 0) {

190:                 if (pls_amount > 0) {

213:             if (promoCodes[i].valid_till < block.timestamp) {

225:                 if (i != promoCodes.length - 1) {

249:             if (promoCodes[i].hash == _hash) {

250:                 if ( promoCodes[i].valid_till <= block.timestamp )

262:             if (promoCodes[i].hash == _hash) {

```

```solidity
File: example/SavvaFaucet.sol

38:         if ( _round_seconds == 0 ) {  // non zero used for testing

52:         if (roundPayWeek == 0) {

56:             if (week_now < roundPayWeek) {

90:         if (roundPayWeek == 0) {

97:         if (deposited[msg.sender] == 0) {

114:         if (roundPayWeek == 0 || week_now < roundPayWeek) {

134:             if (amount > 0 && amount <= tokensLeft) {

145:         if (tokensLeft > 0) {

```

```solidity
File: example/Staking.sol

137:             if (frame.staked == 0) {

158:         if (new_gain > 0) {

179:             if (currentFrameNumber - i < user.stake_frame) {

187:             if (frame_stake == 0 || frame_tokens == 0) {

351:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

366:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

378:             if (user.unstakeRequests[i].amount > 0) {

379:                 if (i != j) {

421:         if (payment.amount == 0) {

438:                 if (s_author.patrons[i] == msg.sender) {

449:             if (payment.amount < amount) {

491:         if (index != last_index) {

503:             if (p.author == author) {

514:                 if (s_author.patrons[i] == msg.sender) {

515:                     if (i != n_to_pop - 1) {

551:         if (

567:             if (payment.amount > 0) {

584:         if (

598:             if (payment.amount > 0) {

620:         if (total > 0) {

637:         if( _user == address(0) || balanceOf(_user) == 0) {

644:             if (currentFrameNumber - i < user.stake_frame) {

650:             if (frame.staked == 0 || frame.to_share == 0) {

656:             if (frame.staked < user_stake) {

682:         if (from == address(0) || to == address(0)) {

686:         if (from == to || amount == 0) {

698:         if (sender.accruedGain > 0) {

712:         if (left2send > 0) {

```

```solidity
File: example/utils.sol

25:             if (r[z] == 0) {

```

</details> 
 


 ### <a name="NC-8"></a>[NC-8]
 ### constants should be defined rather than using magic numbers
Even [assembly](https://github.com/code-423n4/2022-05-opensea-seaport/blob/9d7ce4d08bf3c3010304a0476a785c70c0e90ae7/contracts/lib/TokenTransferrer.sol#L35-L39) can benefit from using readable constants instead of hex/numeric literals

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

44:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

47:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: example/Promo.sol

14:     address payable processor = payable(0x0);

```

```solidity
File: example/SavvaFaucet.sol

26:         payable(0x69d6A50d2AB95FBa5582463148aD61C9a0AD6d1f);

```

```solidity
File: example/Staking.sol

97:     uint256 constant FRAME_MASK = 0x1F; // X & FRAME_MASK equals X % TOTAL_FRAMES

```

```solidity
File: example/utils.sol

42:             r |= bytes32(b[i] & 0xFF) >> (i * 8);

```

</details> 
 


 ### <a name="NC-9"></a>[NC-9]
 ### Contract declarations should have NatSpec @author annotations

#### Impact:
Adding a NatSpec @author annotation to contract declarations can improve code documentation.

*Instances (36)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

9: contract Config is IConfig, Ownable {

27:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

29:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

30:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

31:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

32:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

33:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

34:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

35:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

36:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

37:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

38:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

39:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

40:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

44:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

47:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: example/ContentFund.sol

11: contract ContentFund {

50:     IConfig public config; // Config contract

```

```solidity
File: example/ContentNFT.sol

10: contract ContentNFT is ERC721, ERC721Enumerable, ERC721URIStorage {

48:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/ContentRegistry.sol

9: contract ContentRegistry is IContentRegistry {

```

```solidity
File: example/ListMarket.sol

10: contract ListMarket is Ownable {

11:     IConfig public config; // Config contract

48:             bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/NFTMarketplace.sol

10: contract NFTMarketplace is INFTMarketplace, IERC721Receiver {

11:     IConfig public config; // Config contract

```

```solidity
File: example/Promo.sol

10: contract Promo is Ownable {

```

```solidity
File: example/RandomOracle.sol

10: contract RandomOracle is IRandomOracle, Ownable {

```

```solidity
File: example/SavvaFaucet.sol

9: contract SavvaFaucet {

12:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

14:     IConfig public config; // Config contract

15:     ISavvaToken public savvaToken; // Savva token contract

146:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: example/SavvaToken.sol

11: contract SavvaToken is ISavvaToken {

```

```solidity
File: example/Staking.sol

5: contract Staking is IStaking, ERC20, ERC20Permit, ERC20Votes { 

```

```solidity
File: example/UserProfile.sol

9: contract UserProfile {

```

</details> 
 


 ### <a name="NC-10"></a>[NC-10]
 ### Contract declarations should have NatSpec @Title annotations

#### Impact:
Adding a NatSpec @Title annotation to contract declarations can improve code documentation.

*Instances (36)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

9: contract Config is IConfig, Ownable {

27:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

29:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

30:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

31:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

32:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

33:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

34:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

35:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

36:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

37:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

38:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

39:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

40:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

44:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

47:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: example/ContentFund.sol

11: contract ContentFund {

50:     IConfig public config; // Config contract

```

```solidity
File: example/ContentNFT.sol

10: contract ContentNFT is ERC721, ERC721Enumerable, ERC721URIStorage {

48:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/ContentRegistry.sol

9: contract ContentRegistry is IContentRegistry {

```

```solidity
File: example/ListMarket.sol

10: contract ListMarket is Ownable {

11:     IConfig public config; // Config contract

48:             bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/NFTMarketplace.sol

10: contract NFTMarketplace is INFTMarketplace, IERC721Receiver {

11:     IConfig public config; // Config contract

```

```solidity
File: example/Promo.sol

10: contract Promo is Ownable {

```

```solidity
File: example/RandomOracle.sol

10: contract RandomOracle is IRandomOracle, Ownable {

```

```solidity
File: example/SavvaFaucet.sol

9: contract SavvaFaucet {

12:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

14:     IConfig public config; // Config contract

15:     ISavvaToken public savvaToken; // Savva token contract

146:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: example/SavvaToken.sol

11: contract SavvaToken is ISavvaToken {

```

```solidity
File: example/Staking.sol

5: contract Staking is IStaking, ERC20, ERC20Permit, ERC20Votes { 

```

```solidity
File: example/UserProfile.sol

9: contract UserProfile {

```

</details> 
 


 ### <a name="NC-11"></a>[NC-11]
 ### NatSpec: Contract declarations should have @dev tags

#### Impact:
@dev is used to explain extra details to developers

*Instances (36)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

9: contract Config is IConfig, Ownable {

27:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

29:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

30:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

31:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

32:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

33:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

34:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

35:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

36:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

37:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

38:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

39:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

40:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

44:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

47:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: example/ContentFund.sol

11: contract ContentFund {

50:     IConfig public config; // Config contract

```

```solidity
File: example/ContentNFT.sol

10: contract ContentNFT is ERC721, ERC721Enumerable, ERC721URIStorage {

48:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/ContentRegistry.sol

9: contract ContentRegistry is IContentRegistry {

```

```solidity
File: example/ListMarket.sol

10: contract ListMarket is Ownable {

11:     IConfig public config; // Config contract

48:             bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/NFTMarketplace.sol

10: contract NFTMarketplace is INFTMarketplace, IERC721Receiver {

11:     IConfig public config; // Config contract

```

```solidity
File: example/Promo.sol

10: contract Promo is Ownable {

```

```solidity
File: example/RandomOracle.sol

10: contract RandomOracle is IRandomOracle, Ownable {

```

```solidity
File: example/SavvaFaucet.sol

9: contract SavvaFaucet {

12:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

14:     IConfig public config; // Config contract

15:     ISavvaToken public savvaToken; // Savva token contract

146:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: example/SavvaToken.sol

11: contract SavvaToken is ISavvaToken {

```

```solidity
File: example/Staking.sol

5: contract Staking is IStaking, ERC20, ERC20Permit, ERC20Votes { 

```

```solidity
File: example/UserProfile.sol

9: contract UserProfile {

```

</details> 
 


 ### <a name="NC-12"></a>[NC-12]
 ### NatSpec: Contract declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (36)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

9: contract Config is IConfig, Ownable {

27:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

29:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

30:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

31:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

32:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

33:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

34:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

35:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

36:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

37:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

38:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

39:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

40:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

44:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

47:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: example/ContentFund.sol

11: contract ContentFund {

50:     IConfig public config; // Config contract

```

```solidity
File: example/ContentNFT.sol

10: contract ContentNFT is ERC721, ERC721Enumerable, ERC721URIStorage {

48:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/ContentRegistry.sol

9: contract ContentRegistry is IContentRegistry {

```

```solidity
File: example/ListMarket.sol

10: contract ListMarket is Ownable {

11:     IConfig public config; // Config contract

48:             bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/NFTMarketplace.sol

10: contract NFTMarketplace is INFTMarketplace, IERC721Receiver {

11:     IConfig public config; // Config contract

```

```solidity
File: example/Promo.sol

10: contract Promo is Ownable {

```

```solidity
File: example/RandomOracle.sol

10: contract RandomOracle is IRandomOracle, Ownable {

```

```solidity
File: example/SavvaFaucet.sol

9: contract SavvaFaucet {

12:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

14:     IConfig public config; // Config contract

15:     ISavvaToken public savvaToken; // Savva token contract

146:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: example/SavvaToken.sol

11: contract SavvaToken is ISavvaToken {

```

```solidity
File: example/Staking.sol

5: contract Staking is IStaking, ERC20, ERC20Permit, ERC20Votes { 

```

```solidity
File: example/UserProfile.sol

9: contract UserProfile {

```

</details> 
 


 ### <a name="NC-13"></a>[NC-13]
 ### NatSpec: Contract declarations should have @notice tags
@notice is used to explain to end users what the contract does, and the compiler interprets /// or /** comments as this tag if one wasnt explicitly provided

*Instances (36)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

9: contract Config is IConfig, Ownable {

27:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

29:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

30:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

31:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

32:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

33:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

34:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

35:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

36:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

37:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

38:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

39:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

40:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

44:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

47:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: example/ContentFund.sol

11: contract ContentFund {

50:     IConfig public config; // Config contract

```

```solidity
File: example/ContentNFT.sol

10: contract ContentNFT is ERC721, ERC721Enumerable, ERC721URIStorage {

48:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/ContentRegistry.sol

9: contract ContentRegistry is IContentRegistry {

```

```solidity
File: example/ListMarket.sol

10: contract ListMarket is Ownable {

11:     IConfig public config; // Config contract

48:             bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/NFTMarketplace.sol

10: contract NFTMarketplace is INFTMarketplace, IERC721Receiver {

11:     IConfig public config; // Config contract

```

```solidity
File: example/Promo.sol

10: contract Promo is Ownable {

```

```solidity
File: example/RandomOracle.sol

10: contract RandomOracle is IRandomOracle, Ownable {

```

```solidity
File: example/SavvaFaucet.sol

9: contract SavvaFaucet {

12:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

14:     IConfig public config; // Config contract

15:     ISavvaToken public savvaToken; // Savva token contract

146:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: example/SavvaToken.sol

11: contract SavvaToken is ISavvaToken {

```

```solidity
File: example/Staking.sol

5: contract Staking is IStaking, ERC20, ERC20Permit, ERC20Votes { 

```

```solidity
File: example/UserProfile.sol

9: contract UserProfile {

```

</details> 
 


 ### <a name="NC-14"></a>[NC-14]
 ### Consider using delete rather than assigning zero to clear value

#### Impact:
Consider using delete rather than assigning zero to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (68)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

65:             funds[savva_cid].SLLeft = 0;

66:             funds[savva_cid].SLRight = 0;

85:                     funds[savva_cid].SLRight = 0;

141:         uint256 authorShare = 0;

142:         uint256 nftShare = 0;

212:         uint256 authorShare = 0;

213:         uint256 nftShare = 0;

272:         uint256 totalShares = 0;

274:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

279:         uint256 runningShareSum = 0;

280:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

342:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

346:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

362:         uint256 random = 0;

413:         uint256 total = 0;

415:         for (uint256 i = 0; i < nft.balanceOf(owner); i++) {

421:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

433:         uint256 total = 0;

440:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

446:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

458:        uint256 total = 0;

468:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

479:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

529:         uint256 total = 0;

530:         for (uint256 i = 0; i < funds[savva_cid].contributors.length; i++) {

```

```solidity
File: example/ContentRegistry.sol

111:         for (uint256 i = 0; i < domains.length; i++) {

```

```solidity
File: example/NFTMarketplace.sol

60:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

175:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

```

```solidity
File: example/Promo.sol

101:         for (uint256 i = 0; i < promoCodes.length; i++) {

160:         for (uint256 i = 0; i < promoCodes.length; i++) {

212:         for (uint256 i = 0; i < promoCodes.length; i++) {

248:         for (uint256 i = 0; i < promoCodes.length; i++) {

261:         for (uint256 i = 0; i < promoCodes.length; i++) {

```

```solidity
File: example/SavvaFaucet.sol

20:     uint256 public lastRoundPayWeek = 0;

21:     uint256 public roundTotalDeposits = 0;

22:     uint256 public roundTokensToShare = 0;

23:     uint256 public roundPayWeek = 0;

127:         for (uint256 i = 0; i < depositors.length; i++) {

151:         roundTokensToShare = 0;

152:         roundTotalDeposits = 0;

154:         roundPayWeek = 0; //round will start after first deposit

```

```solidity
File: example/Staking.sol

105:     uint256 public currentFrameNumber = 0;

139:                 frame.to_share = 0;

141:                 OldestFrame.to_share = 0;

171:         uint256 result = 0;

265:             user.accruedGain = 0;

289:         user.accruedGain = 0;

306:         user.accruedGain = 0;

347:         uint256 totalAmount = 0;

349:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

362:         uint256 totalAmount = 0;

364:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

369:                 request.amount = 0; // Mark for deletion

376:         uint256 j = 0;

377:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

389:         for (uint256 i = 0; i < n_to_pop; i++) {

419:         uint256 paid = 0;

437:             for (uint256 i = 0; i < s_author.patrons.length; i++) {

501:         for (uint256 i = 0; i < user.PayRecordsKeys.length; i++) {

513:             for (uint256 i = 0; i < n_to_pop; i++) {

549:         uint256 total = 0;

563:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

581:         uint256 total = 0;

594:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

641:         uint256 total_gain = 0;

```

```solidity
File: example/utils.sol

22:         uint z = 0;

24:         for (z = 0; z < 32; z++) {

41:         for (uint256 i = 0; i < b.length; i++) {

```

</details> 
 


 ### <a name="NC-15"></a>[NC-15]
 ### Consider using delete rather than assigning false to clear value

#### Impact:
Consider using delete rather than assigning alse to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentRegistry.sol

74:         bool exists = false;

```

```solidity
File: example/Staking.sol

436:             bool found = false;

500:         bool found = false;

```

</details> 
 


 ### <a name="NC-16"></a>[NC-16]
 ### Consider adding a block/deny-list"
Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens  

*Instances (36)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

9: contract Config is IConfig, Ownable {

27:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

29:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

30:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

31:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

32:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

33:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

34:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

35:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

36:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

37:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

38:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

39:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

40:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

44:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

47:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: example/ContentFund.sol

11: contract ContentFund {

50:     IConfig public config; // Config contract

```

```solidity
File: example/ContentNFT.sol

10: contract ContentNFT is ERC721, ERC721Enumerable, ERC721URIStorage {

48:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/ContentRegistry.sol

9: contract ContentRegistry is IContentRegistry {

```

```solidity
File: example/ListMarket.sol

10: contract ListMarket is Ownable {

11:     IConfig public config; // Config contract

48:             bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/NFTMarketplace.sol

10: contract NFTMarketplace is INFTMarketplace, IERC721Receiver {

11:     IConfig public config; // Config contract

```

```solidity
File: example/Promo.sol

10: contract Promo is Ownable {

```

```solidity
File: example/RandomOracle.sol

10: contract RandomOracle is IRandomOracle, Ownable {

```

```solidity
File: example/SavvaFaucet.sol

9: contract SavvaFaucet {

12:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

14:     IConfig public config; // Config contract

15:     ISavvaToken public savvaToken; // Savva token contract

146:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: example/SavvaToken.sol

11: contract SavvaToken is ISavvaToken {

```

```solidity
File: example/Staking.sol

5: contract Staking is IStaking, ERC20, ERC20Permit, ERC20Votes { 

```

```solidity
File: example/UserProfile.sol

9: contract UserProfile {

```

</details> 
 


 ### <a name="NC-17"></a>[NC-17]
 ### Use bytes.concat() on bytes instead of abi.encodePacked() for clearer semantic meaning
Starting with version 0.8.4, Solidity has the bytes.concat() function, which allows one to concatenate a list of bytes/strings, without extra padding. Using this function rather than abi.encodePacked() makes the intended operation more clear, leading to less reviewer confusion.  

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Promo.sol

167:                     promoCodes[i].hash == keccak256(abi.encodePacked(_secret)),

```

```solidity
File: example/Staking.sol

414:             abi.encodePacked(event_contract, event_id, author)

481:             abi.encodePacked(event_contract, event_id, author)

560:             abi.encodePacked(contract_address, event_id, author)

592:         bytes32 key = keccak256(abi.encodePacked(msg.sender, event_id, author));

```

```solidity
File: example/utils.sol

16:         return uint256(keccak256(abi.encodePacked(author, domain, guid)));

```

</details> 
 


 ### <a name="NC-18"></a>[NC-18]
 ### Consider adding emergency-stop functionality

#### Impact:
Adding a way to quickly halt protocol functionality in an emergency, rather than having to pause individual contracts one-by-one, will make in-progress hack mitigation faster and much less stressful.

*Instances (36)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

9: contract Config is IConfig, Ownable {

27:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

29:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

30:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

31:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

32:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

33:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

34:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

35:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

36:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

37:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

38:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

39:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

40:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

44:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

47:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: example/ContentFund.sol

11: contract ContentFund {

50:     IConfig public config; // Config contract

```

```solidity
File: example/ContentNFT.sol

10: contract ContentNFT is ERC721, ERC721Enumerable, ERC721URIStorage {

48:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/ContentRegistry.sol

9: contract ContentRegistry is IContentRegistry {

```

```solidity
File: example/ListMarket.sol

10: contract ListMarket is Ownable {

11:     IConfig public config; // Config contract

48:             bb.transfer(msg.value); // Send ETH to Buy&Burn contract //@audit

```

```solidity
File: example/NFTMarketplace.sol

10: contract NFTMarketplace is INFTMarketplace, IERC721Receiver {

11:     IConfig public config; // Config contract

```

```solidity
File: example/Promo.sol

10: contract Promo is Ownable {

```

```solidity
File: example/RandomOracle.sol

10: contract RandomOracle is IRandomOracle, Ownable {

```

```solidity
File: example/SavvaFaucet.sol

9: contract SavvaFaucet {

12:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

14:     IConfig public config; // Config contract

15:     ISavvaToken public savvaToken; // Savva token contract

146:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: example/SavvaToken.sol

11: contract SavvaToken is ISavvaToken {

```

```solidity
File: example/Staking.sol

5: contract Staking is IStaking, ERC20, ERC20Permit, ERC20Votes { 

```

```solidity
File: example/UserProfile.sol

9: contract UserProfile {

```

</details> 
 


 ### <a name="NC-19"></a>[NC-19]
 ### Events are missing sender information

#### Impact:
Including msg.sender in events triggered by user actions can make events more useful for end users.

*Instances (31)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

67:         emit ConfigSet(key, value);

82:         emit ConfigUintSet(key, value);

97:         emit ConfigAddressSet(key, value);

```

```solidity
File: example/ContentFund.sol

255:         emit ContributeEvent(

329:             emit PrizeEvent(

339:             emit PrizeEvent(h, winner, prize, 0, block.timestamp, 0);

```

```solidity
File: example/ContentNFT.sol

53:         emit Mint(author, tokenId, domain, guid, uri, price, block.timestamp);

```

```solidity
File: example/ContentRegistry.sol

91:         emit RegEvent(

131:         emit Command(msg.sender, domain, cmd, p1, p2, p3, p4, block.timestamp);

```

```solidity
File: example/ListMarket.sol

26:         emit PriceSet(list_name, price, block.timestamp);

59:         emit Bought(list_name, msg.sender, msg.value, block.timestamp);

```

```solidity
File: example/NFTMarketplace.sol

53:         emit NFTAddedToMarket(tokenId, msg.sender, price);

86:         emit NFTRemovedFromMarket(tokenId, msg.sender);

140:         emit NFTBought(tokenId, oldOwner, msg.sender, price);

192:         emit NFTOwnerChanged(tokenId, oldOwner, msg.sender, price, new_price);

203:         emit NFTPriceChanged(tokenId, msg.sender, price);

```

```solidity
File: example/Promo.sol

144:         emit PromoCodeCreated(

194:                 emit PromoCodeRedeemed(

233:                 emit PromoCodeReturned(

```

```solidity
File: example/RandomOracle.sol

44:         emit RandomUpdated(_random, _db_index, block.timestamp);

```

```solidity
File: example/SavvaFaucet.sol

108:         emit Deposit(msg.sender, msg.value, block.timestamp);

120:         emit RoundFinished(roundPayWeek, roundTokensToShare, block.timestamp);

136:                 emit TokensSent(depositor, amount, block.timestamp);

```

```solidity
File: example/Staking.sol

527:         emit PayRecordDeleted(msg.sender, event_contract, event_id, author);

```

```solidity
File: example/UserProfile.sol

51:         emit NameSet(msg.sender, name);

61:         emit NameSet(msg.sender, "");

66:         emit AvatarSet(msg.sender, avatar);

80:         emit NameSet(to, name);

81:         emit NameSet(msg.sender, "");

90:         emit StringSet(msg.sender, domain, key, value);

100:         emit UIntSet(msg.sender, domain, key, value);

```

</details> 
 


 ### <a name="NC-20"></a>[NC-20]
 ### NatSpec: Event declarations should have NatSpec descriptions

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

55:     event ConfigSet(bytes32 key, string value);

56:     event ConfigUintSet(bytes32 key, uint256 value);

57:     event ConfigAddressSet(bytes32 key, address value);

```

```solidity
File: example/ContentFund.sol

23:     event ContributeEvent(

35:     event PrizeEvent(

44:     event NFTGainWithdrawEvent(

```

```solidity
File: example/ContentNFT.sol

19:     event Mint(

```

```solidity
File: example/ContentRegistry.sol

10:     event RegEvent(

21:     event Command(

```

```solidity
File: example/ListMarket.sol

21:     event PriceSet(string list_name, uint256 price, uint256 timestamp);

22:     event Bought(string list_name, address buyer, uint256 price, uint256 timestamp);

```

```solidity
File: example/NFTMarketplace.sol

18:     event NFTAddedToMarket(uint256 token_id, address owner, uint256 price);

19:     event NFTRemovedFromMarket(uint256 token_id, address owner);

20:     event NFTBought(uint256 token_id, address old_owner, address new_owner, uint256 price);

21:     event NFTPriceChanged(uint256 token_id, address owner, uint256 price);

22:     event NFTOwnerChanged(

```

```solidity
File: example/Promo.sol

16:     event PromoCodeCreated(

25:     event PromoCodeRedeemed(

36:     event PromoCodeReturned(

```

```solidity
File: example/RandomOracle.sol

16:     event RandomUpdated(uint256 random, uint256 db_index, uint256 timestamp);

```

```solidity
File: example/SavvaFaucet.sol

28:     event Deposit(address user, uint256 amount, uint256 timestamp);

29:     event RoundFinished(uint256 round, uint256 tokensToShare, uint256 timestamp);

30:     event TokensSent(address user, uint256 amount, uint256 timestamp);

```

```solidity
File: example/Staking.sol

39:     event Staked(address indexed user, uint256 amount, uint256 staked);

40:     event Unstaked(address indexed user, uint256 amount, uint256 staked);

41:     event GainClaimed(address indexed user, uint256 amount, uint256 staked);

42:     event ClaimUnstaked(address indexed user, uint256 amount, uint256 staked);

43:     event Transferred(

50:     event Compounded(address indexed user, uint256 amount, uint256 staked);

52:     event PayRecordSet(

63:     event PayRecordDeleted(

70:     event PatronPaid(

78:     event PatronPaymentClaimed(

410:             "Invalid event"

```

```solidity
File: example/UserProfile.sol

17:     event NameSet(address user, string name);

18:     event AvatarSet(address user, string avatar);

19:     event StringSet(address user, bytes32 domain, bytes32 key, string value);

20:     event UIntSet(address user, bytes32 domain, bytes32 key, uint256 value);

```

</details> 
 


 ### <a name="NC-21"></a>[NC-21]
 ### contracts should use fixed compiler versions
To prevent the contracts being deployed and behaving differently depending on the compiler version, it is recommended to use fixed solidity versions for contracts and libraries. Although we can configure a specific version through config (like hardhat, forge config files), it is recommended to set the fixed version in the solidity pragma directly before deploying to the mainnet.

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentFund.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentNFT.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentRegistry.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ListMarket.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/NFTMarketplace.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/Promo.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/RandomOracle.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/SavvaFaucet.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/SavvaToken.sol

8: pragma solidity ^0.8.18;

```

```solidity
File: example/Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: example/UserProfile.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/utils.sol

7: pragma solidity ^0.8.18;

```

</details> 
 


 ### <a name="NC-22"></a>[NC-22]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (108)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

59:     function set(bytes32 key, string memory value) public override {

70:     function get(bytes32 key) public view override returns (string memory) {

74:     function setUInt(bytes32 key, uint256 value) public override {

85:     function getUInt(bytes32 key) public view override returns (uint256) {

89:     function setAddr(bytes32 key, address value) public override {

100:     function getAddr(bytes32 key) public view override returns (address) {

```

```solidity
File: example/ContentFund.sol

62:     function _sl_insert(uint256 savva_cid) private {

94:     function _sl_remove(uint256 savva_cid) private {

106:     function _sl_update_position(uint256 savva_cid) private {

112:     function _sl_is_position_correct(

136:     function _calc_shares(

176:     function contributeWithPermit(

194:     function contribute(

268:     function _choose_winner(

291:     function _process_round(

357:     function processRounds() public {

381:     function withdrawNFTGain(uint256 tokenId) public {

404:     function getNFTCut(uint256 tokenId) public view returns (uint256) {

408:     function getTotalOwnerCut(address owner) public view returns (uint256) {

432:     function getMyNFTGain() public view returns (uint256) {

457:     function withdrawMyNFTGain() public {

502:     function getNumberOfContributors(

508:     function getContributor(

515:     function getContribution(

522:     function getFund(uint256 savva_cid) public view returns (Fund memory) {

526:     function getTotalContributed(

```

```solidity
File: example/ContentNFT.sol

29:     function mint(

56:     function burn(uint256 tokenId) public {

64:     function _update(

72:     function _increaseBalance(

79:     function tokenURI(

85:     function supportsInterface(

```

```solidity
File: example/ContentRegistry.sol

40:     function allow(address allowed_address) public {

45:     function disallow(address allowed_address) public {

50:     function reg(

104:     function regArray(

123:     function command(

```

```solidity
File: example/ListMarket.sol

24:     function setPrice(string memory list_name, uint256 price) public onlyOwner {

29:     function getPrice(string memory list_name) public view returns (uint256) {

33:     function setCollector(address payable _collector) public onlyOwner {

37:     function buy(

```

```solidity
File: example/NFTMarketplace.sol

37:     function addToMarket(uint256 tokenId, uint256 price) public {

56:     function _removeFromMarket(uint256 tokenId) public {

78:     function removeFromMarket(uint256 tokenId) public {

89:     function getPrice(uint256 tokenId) public view returns (uint256) {

93:     function getNFTOwner(uint256 tokenId) public view returns (address) {

97:     function buyWithPermit( //buy with permit

112:     function buy(uint256 tokenId, uint256 amount) public {

143:     function buyAndLeaveOnMarket(

195:     function changePrice(uint256 tokenId, uint256 price) public {

206:     function onERC721Received(

```

```solidity
File: example/Promo.sol

59:     function setProcessor(address payable _processor) external onlyOwner {

63:     function setProcessorFee(uint256 _fee) external onlyOwner {

67:     function getPromoCodesCount() public view returns (uint256) {

71:     function createPromoCodeWithPermit(

95:     function createPromoCode(

154:     function redeemPromoCode(

211:     function returnAllExpired() public {

247:     function isHashValid(bytes32 _hash) public view returns (bool) {

258:     function getPromoCode(

```

```solidity
File: example/RandomOracle.sol

22:     function setUpdaterAccount(address _updaterAccount) public onlyOwner {

26:     function getRandom() public view override returns (uint256) {

30:     function getLastUpdateTime() public view override returns (uint256) {

34:     function update(uint256 _random, uint256 _db_index) public {

```

```solidity
File: example/SavvaFaucet.sol

32:     function getRoundLength() public view returns (uint256) {

49:     function TokensToShare() public view returns (uint256) {

66:     function IsRoundFinished() public view returns (bool) {

71:     function NumberOfDepositors() public view returns (uint256) {

79:     function deposit() public payable {

111:     function finishRound() public {

158:     function ChangeOrigin(address payable newOrigin) public {

```

```solidity
File: example/SavvaToken.sol

27:     function mint(uint256 amount) public override onlyOwner {

```

```solidity
File: example/Staking.sol

107:     function getUnprocessedGane() external view returns (uint256) {

120:     function updatePool() public override {

166:     function getPendingGain(

199:     function stake(uint256 amount) public {

220:     function stakeWithPermit(

242:     function unstake(uint256 amount) external {

282:     function claimGain() external {

299:     function compoundGain() external {

315:     function getAccruedGain(address _user) external view returns (uint256) {

319:     function transferStake(address to, uint256 amount) public {

336:     function getUnstakeRequests(

342:     function getAvailableUnstaked(

359:     function claimUnstaked() external {

400:     function setPayRecord(

475:     function deletePayRecord(

530:     function getPayRecordsKeys(

536:     function getPayRecord(

543:     function getExpectedPatronPayment(

580:     function claimPayment(address author, bytes32 event_id) external override {

634:     function _accrue_gain(address _user) internal {

677:     function _safe_transfer_stake_from(

722:     function _update(

732:     function nonces(

```

```solidity
File: example/UserProfile.sol

22:     function setName(string memory name) public {

54:     function removeName() public {

64:     function setAvatar(string memory avatar) public {

69:     function transferName(address to) public {

84:     function setString(

93:     function setUInt(

103:     function getString(

111:     function getUInt(

119:     function setPubKey(string memory _modifier, string memory _pub_key) public {

124:     function setAll( 

```

```solidity
File: example/utils.sol

11:     function SavvaID(

20:     function concat(bytes32 a, bytes32 b) public pure returns (bytes32) {

34:     function str2bytes32(

```

</details> 
 


 ### <a name="NC-23"></a>[NC-23]
 ### NatSpec: function declarations should have @Notice tags
@notice is used to explain to end users what the function does, and the compiler interprets /// or /** comments as this tag if one wasn't explicitly provided.  

*Instances (108)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

59:     function set(bytes32 key, string memory value) public override {

70:     function get(bytes32 key) public view override returns (string memory) {

74:     function setUInt(bytes32 key, uint256 value) public override {

85:     function getUInt(bytes32 key) public view override returns (uint256) {

89:     function setAddr(bytes32 key, address value) public override {

100:     function getAddr(bytes32 key) public view override returns (address) {

```

```solidity
File: example/ContentFund.sol

62:     function _sl_insert(uint256 savva_cid) private {

94:     function _sl_remove(uint256 savva_cid) private {

106:     function _sl_update_position(uint256 savva_cid) private {

112:     function _sl_is_position_correct(

136:     function _calc_shares(

176:     function contributeWithPermit(

194:     function contribute(

268:     function _choose_winner(

291:     function _process_round(

357:     function processRounds() public {

381:     function withdrawNFTGain(uint256 tokenId) public {

404:     function getNFTCut(uint256 tokenId) public view returns (uint256) {

408:     function getTotalOwnerCut(address owner) public view returns (uint256) {

432:     function getMyNFTGain() public view returns (uint256) {

457:     function withdrawMyNFTGain() public {

502:     function getNumberOfContributors(

508:     function getContributor(

515:     function getContribution(

522:     function getFund(uint256 savva_cid) public view returns (Fund memory) {

526:     function getTotalContributed(

```

```solidity
File: example/ContentNFT.sol

29:     function mint(

56:     function burn(uint256 tokenId) public {

64:     function _update(

72:     function _increaseBalance(

79:     function tokenURI(

85:     function supportsInterface(

```

```solidity
File: example/ContentRegistry.sol

40:     function allow(address allowed_address) public {

45:     function disallow(address allowed_address) public {

50:     function reg(

104:     function regArray(

123:     function command(

```

```solidity
File: example/ListMarket.sol

24:     function setPrice(string memory list_name, uint256 price) public onlyOwner {

29:     function getPrice(string memory list_name) public view returns (uint256) {

33:     function setCollector(address payable _collector) public onlyOwner {

37:     function buy(

```

```solidity
File: example/NFTMarketplace.sol

37:     function addToMarket(uint256 tokenId, uint256 price) public {

56:     function _removeFromMarket(uint256 tokenId) public {

78:     function removeFromMarket(uint256 tokenId) public {

89:     function getPrice(uint256 tokenId) public view returns (uint256) {

93:     function getNFTOwner(uint256 tokenId) public view returns (address) {

97:     function buyWithPermit( //buy with permit

112:     function buy(uint256 tokenId, uint256 amount) public {

143:     function buyAndLeaveOnMarket(

195:     function changePrice(uint256 tokenId, uint256 price) public {

206:     function onERC721Received(

```

```solidity
File: example/Promo.sol

59:     function setProcessor(address payable _processor) external onlyOwner {

63:     function setProcessorFee(uint256 _fee) external onlyOwner {

67:     function getPromoCodesCount() public view returns (uint256) {

71:     function createPromoCodeWithPermit(

95:     function createPromoCode(

154:     function redeemPromoCode(

211:     function returnAllExpired() public {

247:     function isHashValid(bytes32 _hash) public view returns (bool) {

258:     function getPromoCode(

```

```solidity
File: example/RandomOracle.sol

22:     function setUpdaterAccount(address _updaterAccount) public onlyOwner {

26:     function getRandom() public view override returns (uint256) {

30:     function getLastUpdateTime() public view override returns (uint256) {

34:     function update(uint256 _random, uint256 _db_index) public {

```

```solidity
File: example/SavvaFaucet.sol

32:     function getRoundLength() public view returns (uint256) {

49:     function TokensToShare() public view returns (uint256) {

66:     function IsRoundFinished() public view returns (bool) {

71:     function NumberOfDepositors() public view returns (uint256) {

79:     function deposit() public payable {

111:     function finishRound() public {

158:     function ChangeOrigin(address payable newOrigin) public {

```

```solidity
File: example/SavvaToken.sol

27:     function mint(uint256 amount) public override onlyOwner {

```

```solidity
File: example/Staking.sol

107:     function getUnprocessedGane() external view returns (uint256) {

120:     function updatePool() public override {

166:     function getPendingGain(

199:     function stake(uint256 amount) public {

220:     function stakeWithPermit(

242:     function unstake(uint256 amount) external {

282:     function claimGain() external {

299:     function compoundGain() external {

315:     function getAccruedGain(address _user) external view returns (uint256) {

319:     function transferStake(address to, uint256 amount) public {

336:     function getUnstakeRequests(

342:     function getAvailableUnstaked(

359:     function claimUnstaked() external {

400:     function setPayRecord(

475:     function deletePayRecord(

530:     function getPayRecordsKeys(

536:     function getPayRecord(

543:     function getExpectedPatronPayment(

580:     function claimPayment(address author, bytes32 event_id) external override {

634:     function _accrue_gain(address _user) internal {

677:     function _safe_transfer_stake_from(

722:     function _update(

732:     function nonces(

```

```solidity
File: example/UserProfile.sol

22:     function setName(string memory name) public {

54:     function removeName() public {

64:     function setAvatar(string memory avatar) public {

69:     function transferName(address to) public {

84:     function setString(

93:     function setUInt(

103:     function getString(

111:     function getUInt(

119:     function setPubKey(string memory _modifier, string memory _pub_key) public {

124:     function setAll( 

```

```solidity
File: example/utils.sol

11:     function SavvaID(

20:     function concat(bytes32 a, bytes32 b) public pure returns (bytes32) {

34:     function str2bytes32(

```

</details> 
 


 ### <a name="NC-24"></a>[NC-24]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (108)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

59:     function set(bytes32 key, string memory value) public override {

70:     function get(bytes32 key) public view override returns (string memory) {

74:     function setUInt(bytes32 key, uint256 value) public override {

85:     function getUInt(bytes32 key) public view override returns (uint256) {

89:     function setAddr(bytes32 key, address value) public override {

100:     function getAddr(bytes32 key) public view override returns (address) {

```

```solidity
File: example/ContentFund.sol

62:     function _sl_insert(uint256 savva_cid) private {

94:     function _sl_remove(uint256 savva_cid) private {

106:     function _sl_update_position(uint256 savva_cid) private {

112:     function _sl_is_position_correct(

136:     function _calc_shares(

176:     function contributeWithPermit(

194:     function contribute(

268:     function _choose_winner(

291:     function _process_round(

357:     function processRounds() public {

381:     function withdrawNFTGain(uint256 tokenId) public {

404:     function getNFTCut(uint256 tokenId) public view returns (uint256) {

408:     function getTotalOwnerCut(address owner) public view returns (uint256) {

432:     function getMyNFTGain() public view returns (uint256) {

457:     function withdrawMyNFTGain() public {

502:     function getNumberOfContributors(

508:     function getContributor(

515:     function getContribution(

522:     function getFund(uint256 savva_cid) public view returns (Fund memory) {

526:     function getTotalContributed(

```

```solidity
File: example/ContentNFT.sol

29:     function mint(

56:     function burn(uint256 tokenId) public {

64:     function _update(

72:     function _increaseBalance(

79:     function tokenURI(

85:     function supportsInterface(

```

```solidity
File: example/ContentRegistry.sol

40:     function allow(address allowed_address) public {

45:     function disallow(address allowed_address) public {

50:     function reg(

104:     function regArray(

123:     function command(

```

```solidity
File: example/ListMarket.sol

24:     function setPrice(string memory list_name, uint256 price) public onlyOwner {

29:     function getPrice(string memory list_name) public view returns (uint256) {

33:     function setCollector(address payable _collector) public onlyOwner {

37:     function buy(

```

```solidity
File: example/NFTMarketplace.sol

37:     function addToMarket(uint256 tokenId, uint256 price) public {

56:     function _removeFromMarket(uint256 tokenId) public {

78:     function removeFromMarket(uint256 tokenId) public {

89:     function getPrice(uint256 tokenId) public view returns (uint256) {

93:     function getNFTOwner(uint256 tokenId) public view returns (address) {

97:     function buyWithPermit( //buy with permit

112:     function buy(uint256 tokenId, uint256 amount) public {

143:     function buyAndLeaveOnMarket(

195:     function changePrice(uint256 tokenId, uint256 price) public {

206:     function onERC721Received(

```

```solidity
File: example/Promo.sol

59:     function setProcessor(address payable _processor) external onlyOwner {

63:     function setProcessorFee(uint256 _fee) external onlyOwner {

67:     function getPromoCodesCount() public view returns (uint256) {

71:     function createPromoCodeWithPermit(

95:     function createPromoCode(

154:     function redeemPromoCode(

211:     function returnAllExpired() public {

247:     function isHashValid(bytes32 _hash) public view returns (bool) {

258:     function getPromoCode(

```

```solidity
File: example/RandomOracle.sol

22:     function setUpdaterAccount(address _updaterAccount) public onlyOwner {

26:     function getRandom() public view override returns (uint256) {

30:     function getLastUpdateTime() public view override returns (uint256) {

34:     function update(uint256 _random, uint256 _db_index) public {

```

```solidity
File: example/SavvaFaucet.sol

32:     function getRoundLength() public view returns (uint256) {

49:     function TokensToShare() public view returns (uint256) {

66:     function IsRoundFinished() public view returns (bool) {

71:     function NumberOfDepositors() public view returns (uint256) {

79:     function deposit() public payable {

111:     function finishRound() public {

158:     function ChangeOrigin(address payable newOrigin) public {

```

```solidity
File: example/SavvaToken.sol

27:     function mint(uint256 amount) public override onlyOwner {

```

```solidity
File: example/Staking.sol

107:     function getUnprocessedGane() external view returns (uint256) {

120:     function updatePool() public override {

166:     function getPendingGain(

199:     function stake(uint256 amount) public {

220:     function stakeWithPermit(

242:     function unstake(uint256 amount) external {

282:     function claimGain() external {

299:     function compoundGain() external {

315:     function getAccruedGain(address _user) external view returns (uint256) {

319:     function transferStake(address to, uint256 amount) public {

336:     function getUnstakeRequests(

342:     function getAvailableUnstaked(

359:     function claimUnstaked() external {

400:     function setPayRecord(

475:     function deletePayRecord(

530:     function getPayRecordsKeys(

536:     function getPayRecord(

543:     function getExpectedPatronPayment(

580:     function claimPayment(address author, bytes32 event_id) external override {

634:     function _accrue_gain(address _user) internal {

677:     function _safe_transfer_stake_from(

722:     function _update(

732:     function nonces(

```

```solidity
File: example/UserProfile.sol

22:     function setName(string memory name) public {

54:     function removeName() public {

64:     function setAvatar(string memory avatar) public {

69:     function transferName(address to) public {

84:     function setString(

93:     function setUInt(

103:     function getString(

111:     function getUInt(

119:     function setPubKey(string memory _modifier, string memory _pub_key) public {

124:     function setAll( 

```

```solidity
File: example/utils.sol

11:     function SavvaID(

20:     function concat(bytes32 a, bytes32 b) public pure returns (bytes32) {

34:     function str2bytes32(

```

</details> 
 


 ### <a name="NC-25"></a>[NC-25]
 ### Order of Functions Does Not Follow Solidity Style Guide
According to the Solidity Style Guide, functions should be grouped according to their visibility and ordered: constructor, receive, fallback, external, public, internal, private.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Staking.sol

86:     constructor(

```

</details> 
 


 ### <a name="NC-26"></a>[NC-26]
 ### If-statement can be converted to a ternary

#### Impact:
The code can be made more compact while also increasing readability by converting the following `if`-statements to ternaries (e.g. `foo += (x > y) ? a : b`)

*Instances (72)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

63:         if (SLRoot == 0) {

76:                     } else {

83:                 if (funds[h].SLRight == 0) {

95:         if (funds[savva_cid].SLLeft != 0) {

101:         if (funds[savva_cid].SLRight != 0) {

115:         if (funds[savva_cid].SLLeft != 0) {

124:         if (funds[savva_cid].SLRight != 0) {

166:             if (nft_owner != address(0)) {

216:         if (authorShare > 0) {

221:         if (nftShare > 0) {

226:         if (funds[savva_cid].author == address(0)) {

250:             } else {

283:             if (winnerIndex < runningShareSum) {

299:         if (winner == address(0)) {

307:         if (total >= config.getUInt(bytes32("minFundToShare"))) {

316:         if (prize > 0) {

321:         if (funds[h].amount > 0) {

368:             if (random == 0) {

424:             if (mp.getNFTOwner(tokenId) == owner) {

449:             if (mp.getNFTOwner(tokenId) == msg.sender) {

471:             if (nftBalance[tokenId] > 0) {

482:             if (mp.getNFTOwner(tokenId) == msg.sender) {

```

```solidity
File: example/ListMarket.sol

44:         if (collector == address(0)) {

```

```solidity
File: example/NFTMarketplace.sol

61:             if (nftsByOwnerArray[i] == tokenId) {

176:             if (nftsByOwnerArray[i] == tokenId) {

```

```solidity
File: example/Promo.sol

118:         if (_savva_amount > 0) {

161:             if (promoCodes[i].hash == _hash) {

183:                 if (savva_amount > 0) {

190:                 if (pls_amount > 0) {

213:             if (promoCodes[i].valid_till < block.timestamp) {

249:             if (promoCodes[i].hash == _hash) {

262:             if (promoCodes[i].hash == _hash) {

```

```solidity
File: example/SavvaFaucet.sol

38:         if ( _round_seconds == 0 ) {  // non zero used for testing

52:         if (roundPayWeek == 0) {

59:             } else {

90:         if (roundPayWeek == 0) {

97:         if (deposited[msg.sender] == 0) {

114:         if (roundPayWeek == 0 || week_now < roundPayWeek) {

134:             if (amount > 0 && amount <= tokensLeft) {

145:         if (tokensLeft > 0) {

```

```solidity
File: example/Staking.sol

137:             if (frame.staked == 0) {

158:         if (new_gain > 0) {

173:         if (balanceOf(userAddress) == 0) {

179:             if (currentFrameNumber - i < user.stake_frame) {

187:             if (frame_stake == 0 || frame_tokens == 0) {

256:         if (balanceOf(msg.sender) == 0 && user.accruedGain > 0) {

351:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

366:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

378:             if (user.unstakeRequests[i].amount > 0) {

421:         if (payment.amount == 0) {

443:             if (!found) {

446:         } else {

491:         if (index != last_index) {

503:             if (p.author == author) {

509:         if (!found) {

567:             if (payment.amount > 0) {

598:             if (payment.amount > 0) {

620:         if (total > 0) {

637:         if( _user == address(0) || balanceOf(_user) == 0) {

644:             if (currentFrameNumber - i < user.stake_frame) {

650:             if (frame.staked == 0 || frame.to_share == 0) {

656:             if (frame.staked < user_stake) {

682:         if (from == address(0) || to == address(0)) {

686:         if (from == to || amount == 0) {

698:         if (sender.accruedGain > 0) {

712:         if (left2send > 0) {

```

```solidity
File: example/UserProfile.sol

23:         if (bytes(name).length == 0) {

43:         if (bytes(names[msg.sender]).length != 0) {

130:         if( keccak256(bytes(name) ) != keccak256(bytes(names[msg.sender])) ) {

135:         if( keccak256(bytes(avatar)) != keccak256(bytes(avatars[msg.sender])) ) {

140:         if( keccak256(bytes(profile) ) != keccak256(bytes(getString(msg.sender, domain, bytes32("profile_cid")))) ) {

```

```solidity
File: example/utils.sol

25:             if (r[z] == 0) {

```

</details> 
 


 ### <a name="NC-27"></a>[NC-27]
 ### Large multiples of ten should use scientific notation
Use a scientific notation rather than decimal literals (e.g. 1e6 instead of 1000000), for better code readability.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Promo.sol

13:     uint256 public processor_fee = 400000000000000 wei;

```

```solidity
File: example/SavvaFaucet.sol

11:     uint256 constant TOKENS_PER_ROUND = 240000 ether; // (in SAVVA) Approximately 5% per year initially

```

```solidity
File: example/Staking.sol

95:     uint256 constant SECONDS_PER_WEEK = 604800; //

```

</details> 
 


 ### <a name="NC-28"></a>[NC-28]
 ### Consider using named mappings

#### Impact:
Using named mappings can improve code readability and maintainability.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Staking.sol

26:         mapping(bytes32 => PayRecord) PayRecords;

```

</details> 
 


 ### <a name="NC-29"></a>[NC-29]
 ### Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct

#### Impact:
Combining multiple mappings into a single mapping with a struct can improve readability and maintainability of the code.

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

52:     mapping(uint256 => mapping(address => uint256)) public contributions;

```

```solidity
File: example/ContentRegistry.sol

33:     mapping(address => mapping(address => bool)) public allowed;

```

```solidity
File: example/NFTMarketplace.sol

35:     mapping(address => uint256[]) public nftsByOwner;

```

```solidity
File: example/SavvaFaucet.sol

17:     mapping(address => uint256) public deposited;

```

```solidity
File: example/Staking.sol

37:     mapping(address => Staker) public stakers;

```

```solidity
File: example/UserProfile.sol

10:     mapping(address => mapping(bytes32 => mapping(bytes32 => string))) public profileString;

11:     mapping(address => mapping(bytes32 => mapping(bytes32 => uint256))) public profileUInt;

14:     mapping(address => string) public names;

15:     mapping(address => string) public avatars;

```

</details> 
 


 ### <a name="NC-30"></a>[NC-30]
 ### Use of override is unnecessary

#### Impact:
Starting with Solidity version [0.8.8](https://docs.soliditylang.org/en/v0.8.20/contracts.html#function-overriding), using the override keyword when the function solely overrides an interface function, and the function doesnt exist in multiple base contracts, is unnecessary.

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

59:     function set(bytes32 key, string memory value) public override {

70:     function get(bytes32 key) public view override returns (string memory) {

74:     function setUInt(bytes32 key, uint256 value) public override {

85:     function getUInt(bytes32 key) public view override returns (uint256) {

89:     function setAddr(bytes32 key, address value) public override {

100:     function getAddr(bytes32 key) public view override returns (address) {

```

```solidity
File: example/ContentNFT.sol

68:     ) internal override(ERC721, ERC721Enumerable) returns (address) {

75:     ) internal override(ERC721, ERC721Enumerable) {

81:     ) public view override(ERC721, ERC721URIStorage) returns (string memory) {

90:         override(ERC721, ERC721Enumerable, ERC721URIStorage)

```

```solidity
File: example/RandomOracle.sol

26:     function getRandom() public view override returns (uint256) {

30:     function getLastUpdateTime() public view override returns (uint256) {

```

```solidity
File: example/SavvaToken.sol

27:     function mint(uint256 amount) public override onlyOwner {

```

```solidity
File: example/Staking.sol

120:     function updatePool() public override {

580:     function claimPayment(address author, bytes32 event_id) external override {

726:     ) internal override(ERC20, ERC20Votes) {

734:     ) public view override(ERC20Permit, Nonces) returns (uint256) {

```

</details> 
 


 ### <a name="NC-31"></a>[NC-31]
 ### Consider using descriptive constants when using 0 in the code

#### Impact:
Passing zero as a function argument/Event emission can sometimes result in a security issue (e.g. passing zero as the slippage parameter). Consider using a constant variable with a descriptive name, so its clear that the 0 is intentionally being used, and for the right reasons.

*Instances (37)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

27:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

28:         configAddress[bytes32("contract_randomOracle")] = address(0); // random oracle (0 - no oracle)

29:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

30:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

31:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

32:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

33:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

34:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

35:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

36:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

37:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

38:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

39:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

40:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

```

```solidity
File: example/ContentFund.sol

144:         address nft_owner = address(0);

288:         return address(0); // should never happen

339:             emit PrizeEvent(h, winner, prize, 0, block.timestamp, 0);

370:                 require(random != 0, "Random is zero");

382:         require(nftBalance[tokenId] > 0, "Nothing to withdraw");

415:         for (uint256 i = 0; i < nft.balanceOf(owner); i++) {

440:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

468:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

492:         require(total > 0, "Nothing to withdraw");

```

```solidity
File: example/ListMarket.sol

42:         require(msg.value > 0 && msg.value == prices[list_name], "Wrong price");

57:         reg.command(domain, "list_add_post", list_name, savva_cid, "0", "");

```

```solidity
File: example/NFTMarketplace.sol

47:         require(price > 0, "Price must be greater than 0");

200:         require(price > 0, "Price must be greater than 0");

```

```solidity
File: example/Promo.sol

113:         require(

```

```solidity
File: example/Staking.sol

200:         require(amount > 0, "Cannot stake 0");

287:         require(user.accruedGain > 0, "No gain to claim");

304:         require(user.accruedGain > 0, "No gain to compound");

320:         require(amount > 0, "Amount must be greater than 0");

373:         require(totalAmount > 0, "Nothing to claim");

406:         require(amount > 0, "Amount must be greater than 0");

486:         require(payment.amount > 0, "No such payment");

```

```solidity
File: example/UserProfile.sol

45:             owners[names[msg.sender]] = address(0);

58:         owners[name] = address(0);

```

</details> 
 


 ### <a name="NC-32"></a>[NC-32]
 ### Non-external/public variable names should begin with an underscore

#### Impact:
Using an underscore at the beginning of non-external/public variable names can improve code clarity and maintainability. According to the Solidity Style Guide, non-external/public variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*Instances (39)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

10:     mapping(bytes32 => string) public config;

11:     mapping(bytes32 => uint256) public configUint;

12:     mapping(bytes32 => address) public configAddress;

```

```solidity
File: example/ContentFund.sol

50:     IConfig public config; // Config contract

51:     mapping(uint256 => Fund) public funds;

52:     mapping(uint256 => mapping(address => uint256)) public contributions;

53:     mapping(uint256 => uint256) public nftBalance; // NFT balance

54:     uint256 public SLRoot; // Sorted List root

```

```solidity
File: example/ContentNFT.sol

13:     IConfig public config;

```

```solidity
File: example/ContentRegistry.sol

32:     IConfig public config;

33:     mapping(address => mapping(address => bool)) public allowed;

```

```solidity
File: example/ListMarket.sol

11:     IConfig public config; // Config contract

12:     address payable public collector; // Payment collector

14:     mapping(string => uint256) public prices;

```

```solidity
File: example/NFTMarketplace.sol

11:     IConfig public config; // Config contract

34:     mapping(uint256 => NFT) public nfts;

35:     mapping(address => uint256[]) public nftsByOwner;

```

```solidity
File: example/Promo.sol

11:     IConfig public config;

57:     PromoCode[] public promoCodes;

```

```solidity
File: example/RandomOracle.sol

11:     uint256 public lastUpdateTime;

12:     uint256 public random;

13:     address public updaterAccount;

14:     uint256 public db_index;  // index in DB where the prove is stored

```

```solidity
File: example/SavvaFaucet.sol

14:     IConfig public config; // Config contract

15:     ISavvaToken public savvaToken; // Savva token contract

17:     mapping(address => uint256) public deposited;

18:     address[] public depositors;

```

```solidity
File: example/SavvaToken.sol

12:     IConfig public config;

```

```solidity
File: example/Staking.sol

6:     IConfig public config;

33:     uint256 public totalUnstaking;

34:     uint256 public totalAccruedGain;

35:     uint256 public totalInFrames;

37:     mapping(address => Staker) public stakers;

104:     Frame[TOTAL_FRAMES] public frames;

```

```solidity
File: example/UserProfile.sol

10:     mapping(address => mapping(bytes32 => mapping(bytes32 => string))) public profileString;

11:     mapping(address => mapping(bytes32 => mapping(bytes32 => uint256))) public profileUInt;

13:     mapping(string => address) public owners; // name owners

14:     mapping(address => string) public names;

15:     mapping(address => string) public avatars;

```

</details> 
 


 ### <a name="NC-33"></a>[NC-33]
 ### Setters should prevent re-setting of the same value
This especially problematic when the setter also emits the same value, which may be confusing to offline parsers  

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

59:     function set(bytes32 key, string memory value) public override {

74:     function setUInt(bytes32 key, uint256 value) public override {

89:     function setAddr(bytes32 key, address value) public override {

```

```solidity
File: example/ListMarket.sol

24:     function setPrice(string memory list_name, uint256 price) public onlyOwner {

33:     function setCollector(address payable _collector) public onlyOwner {

```

```solidity
File: example/Promo.sol

59:     function setProcessor(address payable _processor) external onlyOwner {

63:     function setProcessorFee(uint256 _fee) external onlyOwner {

```

```solidity
File: example/RandomOracle.sol

22:     function setUpdaterAccount(address _updaterAccount) public onlyOwner {

```

```solidity
File: example/UserProfile.sol

22:     function setName(string memory name) public {

64:     function setAvatar(string memory avatar) public {

119:     function setPubKey(string memory _modifier, string memory _pub_key) public {

```

</details> 
 


 ### <a name="NC-34"></a>[NC-34]
 ### Use the latest solidity version for deployment  
Upgrading to a newer Solidity release can optimize gas usage, take advantage of new features and improve overall contract efficiency. Where possible, based on compatibility requirements, it is recommended to use newer/latest solidity version to take advantage of the latest optimizations and features. You can see the latest version [here](https://soliditylang.org/blog/category/releases/)

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentFund.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentNFT.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentRegistry.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ListMarket.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/NFTMarketplace.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/Promo.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/RandomOracle.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/SavvaFaucet.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/SavvaToken.sol

8: pragma solidity ^0.8.18;

```

```solidity
File: example/Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: example/UserProfile.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/utils.sol

7: pragma solidity ^0.8.18;

```

</details> 
 


 ### <a name="NC-35"></a>[NC-35]
 ### Consider bounding input array length
The functions below take in an unbounded array, and make function calls for entries in the array. While the function will revert if it eventually runs out of gas, it may be a nicer user experience to require() that the length of the array is below some reasonable maximum, so that the user doesnt have to use up a full transactions gas only to see that the transaction reverts

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

274:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

280:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

342:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

346:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

530:         for (uint256 i = 0; i < funds[savva_cid].contributors.length; i++) {

```

```solidity
File: example/ContentRegistry.sol

111:         for (uint256 i = 0; i < domains.length; i++) {

```

```solidity
File: example/NFTMarketplace.sol

60:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

175:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

```

```solidity
File: example/Promo.sol

101:         for (uint256 i = 0; i < promoCodes.length; i++) {

160:         for (uint256 i = 0; i < promoCodes.length; i++) {

212:         for (uint256 i = 0; i < promoCodes.length; i++) {

248:         for (uint256 i = 0; i < promoCodes.length; i++) {

261:         for (uint256 i = 0; i < promoCodes.length; i++) {

```

```solidity
File: example/SavvaFaucet.sol

127:         for (uint256 i = 0; i < depositors.length; i++) {

```

```solidity
File: example/Staking.sol

349:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

364:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

377:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

437:             for (uint256 i = 0; i < s_author.patrons.length; i++) {

501:         for (uint256 i = 0; i < user.PayRecordsKeys.length; i++) {

563:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

594:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

```

```solidity
File: example/UserProfile.sol

32:         for (uint256 i; i < b.length; i++) {

```

```solidity
File: example/utils.sol

41:         for (uint256 i = 0; i < b.length; i++) {

```

</details> 
 


 ### <a name="NC-36"></a>[NC-36]
 ### Event is missing `indexed` fields
Index event fields make the field more quickly accessible to off-chain tools that parse events. However, note that each index field costs extra gas during emission, so it's not necessarily best to index the maximum allowed per event (three fields). Each event should use three indexed fields if there are three or more fields, and gas usage is not particularly of concern for the events in question. If there are fewer than three fields, all of the fields should be indexed.

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Staking.sol

39:     event Staked(address indexed user, uint256 amount, uint256 staked);

40:     event Unstaked(address indexed user, uint256 amount, uint256 staked);

41:     event GainClaimed(address indexed user, uint256 amount, uint256 staked);

42:     event ClaimUnstaked(address indexed user, uint256 amount, uint256 staked);

43:     event Transferred(

50:     event Compounded(address indexed user, uint256 amount, uint256 staked);

52:     event PayRecordSet(

63:     event PayRecordDeleted(

70:     event PatronPaid(

78:     event PatronPaymentClaimed(

```

</details> 
 


 ### <a name="NC-37"></a>[NC-37]
 ### Strings should use double quotes rather than single quotes

#### Impact:
Using consistent double quotes for strings improves code readability and maintainability. Also see it here https://docs.soliditylang.org/en/v0.8.20/style-guide.html#other-recommendations

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentRegistry.sol

57:         require(bytes(guid).length > 0, "Guid can't be empty");

```

```solidity
File: example/NFTMarketplace.sol

118:             "Owner can't buy his own NFT"

```

</details> 
 


 ### <a name="NC-38"></a>[NC-38]
 ### Functions not used internally could be marked external

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Staking.sol

319:     function transferStake(address to, uint256 amount) public {

400:     function setPayRecord(

475:     function deletePayRecord(

732:     function nonces(

```

</details> 
 


 ### <a name="NC-39"></a>[NC-39]
 ### Variables need not be initialized to zero
The default value for variables is zero, so initializing them to zero is superfluous.  

*Instances (55)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

141:         uint256 authorShare = 0;

142:         uint256 nftShare = 0;

212:         uint256 authorShare = 0;

213:         uint256 nftShare = 0;

272:         uint256 totalShares = 0;

274:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

279:         uint256 runningShareSum = 0;

280:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

342:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

346:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

362:         uint256 random = 0;

413:         uint256 total = 0;

415:         for (uint256 i = 0; i < nft.balanceOf(owner); i++) {

421:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

433:         uint256 total = 0;

440:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

446:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

458:        uint256 total = 0;

468:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

479:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

529:         uint256 total = 0;

530:         for (uint256 i = 0; i < funds[savva_cid].contributors.length; i++) {

```

```solidity
File: example/ContentRegistry.sol

111:         for (uint256 i = 0; i < domains.length; i++) {

```

```solidity
File: example/NFTMarketplace.sol

60:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

175:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

```

```solidity
File: example/Promo.sol

101:         for (uint256 i = 0; i < promoCodes.length; i++) {

160:         for (uint256 i = 0; i < promoCodes.length; i++) {

212:         for (uint256 i = 0; i < promoCodes.length; i++) {

248:         for (uint256 i = 0; i < promoCodes.length; i++) {

261:         for (uint256 i = 0; i < promoCodes.length; i++) {

```

```solidity
File: example/SavvaFaucet.sol

20:     uint256 public lastRoundPayWeek = 0;

21:     uint256 public roundTotalDeposits = 0;

22:     uint256 public roundTokensToShare = 0;

23:     uint256 public roundPayWeek = 0;

127:         for (uint256 i = 0; i < depositors.length; i++) {

```

```solidity
File: example/Staking.sol

105:     uint256 public currentFrameNumber = 0;

171:         uint256 result = 0;

347:         uint256 totalAmount = 0;

349:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

362:         uint256 totalAmount = 0;

364:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

376:         uint256 j = 0;

377:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

389:         for (uint256 i = 0; i < n_to_pop; i++) {

419:         uint256 paid = 0;

437:             for (uint256 i = 0; i < s_author.patrons.length; i++) {

501:         for (uint256 i = 0; i < user.PayRecordsKeys.length; i++) {

513:             for (uint256 i = 0; i < n_to_pop; i++) {

549:         uint256 total = 0;

563:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

581:         uint256 total = 0;

594:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

641:         uint256 total_gain = 0;

```

```solidity
File: example/utils.sol

22:         uint z = 0;

41:         for (uint256 i = 0; i < b.length; i++) {

```

</details> 
 


 ### <a name="NC-40"></a>[NC-40]
 ### Consider implementing two-step procedure for updation
A typo error or a copy-paste error can end up bricking the whole protocol. 

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Staking.sol

400:     function setPayRecord(

```

</details> 
 


 ### <a name="NC-41"></a>[NC-41]
 ### Consider moving msg.sender checks to modifiers
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.  

*Instances (137)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

156:             msg.sender != author &&

157:             msg.sender != nft_owner &&

158:             msg.sender != mp.getNFTOwner(savva_cid)

189:         token.permit(msg.sender, address(this), amount, deadline, v, r, s);

210:         token.transferFrom(msg.sender, address(this), amount);

237:             funds[savva_cid].contributors.push(msg.sender);

238:             contributions[savva_cid][msg.sender] = amount;

247:             if (contributions[savva_cid][msg.sender] == 0) {

248:                 funds[savva_cid].contributors.push(msg.sender);

249:                 contributions[savva_cid][msg.sender] = amount;

251:                 contributions[savva_cid][msg.sender] += amount;

257:             msg.sender,

390:             nft.ownerOf(tokenId) == msg.sender ||

391:                 mp.getNFTOwner(tokenId) == msg.sender,

401:         token.transfer(msg.sender, amount);

440:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

442:                 .tokenOfOwnerByIndex(msg.sender, i);

449:             if (mp.getNFTOwner(tokenId) == msg.sender) {

468:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

470:                 .tokenOfOwnerByIndex(msg.sender, i);

475:                 token.transfer(msg.sender, amount);

482:             if (mp.getNFTOwner(tokenId) == msg.sender) {

487:                     token.transfer(msg.sender, amount);

495:             msg.sender,

```

```solidity
File: example/ContentNFT.sol

36:         require(msg.sender == author, "Only author can mint");

58:         require(msg.sender == owner, "Only owner can burn");

```

```solidity
File: example/ContentRegistry.sol

41:         allowed[msg.sender][allowed_address] = true;

46:         allowed[msg.sender][allowed_address] = false;

60:             author == msg.sender || allowed[author][msg.sender],

60:             author == msg.sender || allowed[author][msg.sender],

67:             IERC20(staking).balanceOf(msg.sender) >=

89:         IStaking(staking).claimPayment(msg.sender, event_id);

94:             msg.sender,

114:                 msg.sender,

131:         emit Command(msg.sender, domain, cmd, p1, p2, p3, p4, block.timestamp);

```

```solidity
File: example/ListMarket.sol

59:         emit Bought(list_name, msg.sender, msg.value, block.timestamp);

```

```solidity
File: example/NFTMarketplace.sol

44:             c_nft.ownerOf(tokenId) == msg.sender,

49:         c_nft.transferFrom(msg.sender, address(this), tokenId);

50:         nfts[tokenId] = NFT(msg.sender, price);

51:         nftsByOwner[msg.sender].push(tokenId);

53:         emit NFTAddedToMarket(tokenId, msg.sender, price);

59:         uint256[] storage nftsByOwnerArray = nftsByOwner[msg.sender];

75:         c_nft.transferFrom(address(this), msg.sender, tokenId); //@audit use safeTransferFrom

80:             nfts[tokenId].owner == msg.sender,

86:         emit NFTRemovedFromMarket(tokenId, msg.sender);

108:         token.permit(msg.sender, address(this), amount, deadline, v, r, s);

117:             nft.owner != msg.sender,

127:             token.balanceOf(msg.sender) >= price,

137:         token.transferFrom(msg.sender, oldOwner, price);

140:         emit NFTBought(tokenId, oldOwner, msg.sender, price);

152:             nft.owner != msg.sender,

161:             token.balanceOf(msg.sender) >= price,

171:         token.transferFrom(msg.sender, oldOwner, price);

174:         uint256[] storage nftsByOwnerArray = nftsByOwner[msg.sender];

188:         nftsByOwner[msg.sender].push(tokenId);

190:         nfts[tokenId] = NFT(msg.sender, new_price);

192:         emit NFTOwnerChanged(tokenId, oldOwner, msg.sender, price, new_price);

197:             nfts[tokenId].owner == msg.sender,

203:         emit NFTPriceChanged(tokenId, msg.sender, price);

216:             msg.sender == address(c_nft),

```

```solidity
File: example/Promo.sol

84:             msg.sender,

122:             token.transferFrom(msg.sender, address(this), _savva_amount);

136:                 donator: msg.sender,

145:             msg.sender,

```

```solidity
File: example/RandomOracle.sol

19:         updaterAccount = msg.sender;

36:             msg.sender == updaterAccount,

```

```solidity
File: example/SavvaFaucet.sol

97:         if (deposited[msg.sender] == 0) {

98:             depositors.push(msg.sender);

99:             deposited[msg.sender] = msg.value;

101:             deposited[msg.sender] += msg.value;

108:         emit Deposit(msg.sender, msg.value, block.timestamp);

159:         require(msg.sender == ORIGIN_ADDRESS, "Only origin can change origin");

```

```solidity
File: example/Staking.sol

204:         Staker storage user = stakers[msg.sender];

206:         _accrue_gain(msg.sender);

208:         _mint(msg.sender, amount); // mint the voting tokens

215:         savvaToken.transferFrom(msg.sender, address(this), amount);

217:         emit Staked(msg.sender, amount, balanceOf(msg.sender));

217:         emit Staked(msg.sender, amount, balanceOf(msg.sender));

231:             msg.sender,

243:         Staker storage user = stakers[msg.sender];

245:             balanceOf(msg.sender) >= amount,

250:         _accrue_gain(msg.sender);

253:         _burn(msg.sender, amount);

256:         if (balanceOf(msg.sender) == 0 && user.accruedGain > 0) {

266:             savvaToken.transfer(msg.sender, gain);

279:         emit Unstaked(msg.sender, amount, balanceOf(msg.sender));

279:         emit Unstaked(msg.sender, amount, balanceOf(msg.sender));

284:         Staker storage user = stakers[msg.sender];

285:         _accrue_gain(msg.sender);

295:         savvaToken.transfer(msg.sender, amount);

296:         emit GainClaimed(msg.sender, amount, balanceOf(msg.sender));

296:         emit GainClaimed(msg.sender, amount, balanceOf(msg.sender));

301:         Staker storage user = stakers[msg.sender];

302:         _accrue_gain(msg.sender);

309:         _mint(msg.sender, amount); // mint the voting tokens

312:         emit Staked(msg.sender, amount, balanceOf(msg.sender));

312:         emit Staked(msg.sender, amount, balanceOf(msg.sender));

321:         require(to != address(0) && to != msg.sender, "Invalid recipient");

323:         bool success = _safe_transfer_stake_from(msg.sender, to, amount);

328:             msg.sender,

331:             balanceOf(msg.sender),

360:         Staker storage user = stakers[msg.sender];

395:         savvaToken.transfer(msg.sender, totalAmount);

396:         emit ClaimUnstaked(msg.sender, totalAmount, balanceOf(msg.sender));

396:         emit ClaimUnstaked(msg.sender, totalAmount, balanceOf(msg.sender));

416:         Staker storage user = stakers[msg.sender];

430:             bool ok = _safe_transfer_stake_from(msg.sender, author, amount);

438:                 if (s_author.patrons[i] == msg.sender) {

444:                 s_author.patrons.push(msg.sender);

452:                     msg.sender,

464:             msg.sender,

469:             balanceOf(msg.sender),

483:         Staker storage user = stakers[msg.sender];

514:                 if (s_author.patrons[i] == msg.sender) {

527:         emit PayRecordDeleted(msg.sender, event_contract, event_id, author);

592:         bytes32 key = keccak256(abi.encodePacked(msg.sender, event_id, author));

623:                 msg.sender,

```

```solidity
File: example/UserProfile.sol

43:         if (bytes(names[msg.sender]).length != 0) {

45:             owners[names[msg.sender]] = address(0);

48:         owners[name] = msg.sender;

49:         names[msg.sender] = name;

51:         emit NameSet(msg.sender, name);

55:         string memory name = names[msg.sender];

59:         delete names[msg.sender];

61:         emit NameSet(msg.sender, "");

65:         avatars[msg.sender] = avatar;

66:         emit AvatarSet(msg.sender, avatar);

70:         string memory name = names[msg.sender];

78:         delete names[msg.sender];

81:         emit NameSet(msg.sender, "");

89:         profileString[msg.sender][domain][key] = value;

90:         emit StringSet(msg.sender, domain, key, value);

98:         profileUInt[msg.sender][domain][key] = value;

100:         emit UIntSet(msg.sender, domain, key, value);

130:         if( keccak256(bytes(name) ) != keccak256(bytes(names[msg.sender])) ) {

135:         if( keccak256(bytes(avatar)) != keccak256(bytes(avatars[msg.sender])) ) {

140:         if( keccak256(bytes(profile) ) != keccak256(bytes(getString(msg.sender, domain, bytes32("profile_cid")))) ) {

```

</details> 
 


 ### <a name="NC-42"></a>[NC-42]
 ### Dont use _msgSender() if not supporting EIP-2771
Use msg.sender if the code does not implement EIP-2771 trusted forwarder support

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

61:             _msgSender() == owner() ||

62:                 _msgSender() == configAddress[bytes32("contract_governance")],

76:             _msgSender() == owner() ||

77:                 _msgSender() == configAddress[bytes32("contract_governance")],

91:             _msgSender() == owner() ||

92:                 _msgSender() == configAddress[bytes32("contract_governance")],

```

</details> 
 


 ### <a name="NC-43"></a>[NC-43]
 ### <array>.length should not be looked up in every loop of a for-loop
The overheads outlined below are PER LOOP, excluding the first loop. Storage arrays incur a Gwarmaccess (100 gas), memory arrays use MLOAD (3 gas), calldata arrays use CALLDATALOAD (3 gas). Caching the length changes each of these to a DUP<N> (3 gas), and gets rid of the extra DUP<N> needed to store the stack offset.

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentRegistry.sol

111:         for (uint256 i = 0; i < domains.length; i++) {

```

```solidity
File: example/NFTMarketplace.sol

60:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

175:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

```

```solidity
File: example/Promo.sol

101:         for (uint256 i = 0; i < promoCodes.length; i++) {

160:         for (uint256 i = 0; i < promoCodes.length; i++) {

212:         for (uint256 i = 0; i < promoCodes.length; i++) {

248:         for (uint256 i = 0; i < promoCodes.length; i++) {

261:         for (uint256 i = 0; i < promoCodes.length; i++) {

```

```solidity
File: example/SavvaFaucet.sol

127:         for (uint256 i = 0; i < depositors.length; i++) {

```

```solidity
File: example/UserProfile.sol

32:         for (uint256 i; i < b.length; i++) {

```

```solidity
File: example/utils.sol

41:         for (uint256 i = 0; i < b.length; i++) {

```

</details> 
 


 ### <a name="NC-44"></a>[NC-44]
 ### Use assembly to emit events, in order to save gas
Using the [scratch space](https://github.com/Vectorized/solady/blob/30558f5402f02351b96eeb6eaf32bcea29773841/src/tokens/ERC1155.sol#L501-L504) for event arguments (two words or fewer) will save gas over needing Soliditys full abi memory expansion used for emitting normally.

*Instances (41)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

67:         emit ConfigSet(key, value);

82:         emit ConfigUintSet(key, value);

97:         emit ConfigAddressSet(key, value);

```

```solidity
File: example/ContentFund.sol

255:         emit ContributeEvent(

329:             emit PrizeEvent(

339:             emit PrizeEvent(h, winner, prize, 0, block.timestamp, 0);

494:         emit NFTGainWithdrawEvent(

```

```solidity
File: example/ContentNFT.sol

53:         emit Mint(author, tokenId, domain, guid, uri, price, block.timestamp);

```

```solidity
File: example/ContentRegistry.sol

91:         emit RegEvent(

131:         emit Command(msg.sender, domain, cmd, p1, p2, p3, p4, block.timestamp);

```

```solidity
File: example/ListMarket.sol

26:         emit PriceSet(list_name, price, block.timestamp);

59:         emit Bought(list_name, msg.sender, msg.value, block.timestamp);

```

```solidity
File: example/NFTMarketplace.sol

53:         emit NFTAddedToMarket(tokenId, msg.sender, price);

86:         emit NFTRemovedFromMarket(tokenId, msg.sender);

140:         emit NFTBought(tokenId, oldOwner, msg.sender, price);

192:         emit NFTOwnerChanged(tokenId, oldOwner, msg.sender, price, new_price);

203:         emit NFTPriceChanged(tokenId, msg.sender, price);

```

```solidity
File: example/Promo.sol

144:         emit PromoCodeCreated(

194:                 emit PromoCodeRedeemed(

233:                 emit PromoCodeReturned(

```

```solidity
File: example/RandomOracle.sol

44:         emit RandomUpdated(_random, _db_index, block.timestamp);

```

```solidity
File: example/SavvaFaucet.sol

108:         emit Deposit(msg.sender, msg.value, block.timestamp);

120:         emit RoundFinished(roundPayWeek, roundTokensToShare, block.timestamp);

136:                 emit TokensSent(depositor, amount, block.timestamp);

```

```solidity
File: example/Staking.sol

217:         emit Staked(msg.sender, amount, balanceOf(msg.sender));

279:         emit Unstaked(msg.sender, amount, balanceOf(msg.sender));

296:         emit GainClaimed(msg.sender, amount, balanceOf(msg.sender));

312:         emit Staked(msg.sender, amount, balanceOf(msg.sender));

327:         emit Transferred(

396:         emit ClaimUnstaked(msg.sender, totalAmount, balanceOf(msg.sender));

463:         emit PayRecordSet(

527:         emit PayRecordDeleted(msg.sender, event_contract, event_id, author);

608:                     emit PatronPaid(

621:             emit PatronPaymentClaimed(

```

```solidity
File: example/UserProfile.sol

51:         emit NameSet(msg.sender, name);

61:         emit NameSet(msg.sender, "");

66:         emit AvatarSet(msg.sender, avatar);

80:         emit NameSet(to, name);

81:         emit NameSet(msg.sender, "");

90:         emit StringSet(msg.sender, domain, key, value);

100:         emit UIntSet(msg.sender, domain, key, value);

```

</details> 
 


 ### <a name="NC-45"></a>[NC-45]
 ### Don't initialize variables with default value

*Instances (58)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

141:         uint256 authorShare = 0;

142:         uint256 nftShare = 0;

212:         uint256 authorShare = 0;

213:         uint256 nftShare = 0;

272:         uint256 totalShares = 0;

274:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

279:         uint256 runningShareSum = 0;

280:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

342:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

346:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

362:         uint256 random = 0;

413:         uint256 total = 0;

415:         for (uint256 i = 0; i < nft.balanceOf(owner); i++) {

421:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

433:         uint256 total = 0;

440:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

446:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

458:        uint256 total = 0;

468:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

479:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

529:         uint256 total = 0;

530:         for (uint256 i = 0; i < funds[savva_cid].contributors.length; i++) {

```

```solidity
File: example/ContentRegistry.sol

74:         bool exists = false;

111:         for (uint256 i = 0; i < domains.length; i++) {

```

```solidity
File: example/NFTMarketplace.sol

60:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

175:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

```

```solidity
File: example/Promo.sol

101:         for (uint256 i = 0; i < promoCodes.length; i++) {

160:         for (uint256 i = 0; i < promoCodes.length; i++) {

212:         for (uint256 i = 0; i < promoCodes.length; i++) {

248:         for (uint256 i = 0; i < promoCodes.length; i++) {

261:         for (uint256 i = 0; i < promoCodes.length; i++) {

```

```solidity
File: example/SavvaFaucet.sol

20:     uint256 public lastRoundPayWeek = 0;

21:     uint256 public roundTotalDeposits = 0;

22:     uint256 public roundTokensToShare = 0;

23:     uint256 public roundPayWeek = 0;

127:         for (uint256 i = 0; i < depositors.length; i++) {

```

```solidity
File: example/Staking.sol

105:     uint256 public currentFrameNumber = 0;

171:         uint256 result = 0;

347:         uint256 totalAmount = 0;

349:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

362:         uint256 totalAmount = 0;

364:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

376:         uint256 j = 0;

377:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

389:         for (uint256 i = 0; i < n_to_pop; i++) {

419:         uint256 paid = 0;

436:             bool found = false;

437:             for (uint256 i = 0; i < s_author.patrons.length; i++) {

500:         bool found = false;

501:         for (uint256 i = 0; i < user.PayRecordsKeys.length; i++) {

513:             for (uint256 i = 0; i < n_to_pop; i++) {

549:         uint256 total = 0;

563:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

581:         uint256 total = 0;

594:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

641:         uint256 total_gain = 0;

```

```solidity
File: example/utils.sol

22:         uint z = 0;

41:         for (uint256 i = 0; i < b.length; i++) {

```

</details> 
 


 ### <a name="NC-46"></a>[NC-46]
 ### Long revert strings

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentRegistry.sol

83:         require(!exists, "NFT minted. Content change is not allowed.");

```

</details> 
 


## Gas Optimizations


 ### <a name="GAS-1"></a>[GAS-1]
 ### Enable IR-based code generation
By using `--via-ir` or `{"viaIR": true}`, the compiler is able to use more advanced [multi-function optimizations](https://docs.soliditylang.org/en/v0.8.17/ir-breaking-changes.html#solidity-ir-based-codegen-changes), for extra gas savings.

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentFund.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentNFT.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentRegistry.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ListMarket.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/NFTMarketplace.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/Promo.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/RandomOracle.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/SavvaFaucet.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/SavvaToken.sol

8: pragma solidity ^0.8.18;

```

```solidity
File: example/Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: example/UserProfile.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/utils.sol

7: pragma solidity ^0.8.18;

```

</details> 
 


 ### <a name="GAS-2"></a>[GAS-2]
 ### Nesting if-statements is cheaper than using &&
Nesting if-statements avoids the stack operations of setting up and using an extra jumpdest, and saves 6 [gas](https://gist.github.com/IllIllI000/7f3b818abecfadbef93b894481ae7d19)

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

156:             msg.sender != author &&

157:             msg.sender != nft_owner &&

```

```solidity
File: example/ListMarket.sol

42:         require(msg.value > 0 && msg.value == prices[list_name], "Wrong price");

```

```solidity
File: example/SavvaFaucet.sol

68:         return roundPayWeek != 0 && week_now >= roundPayWeek;

134:             if (amount > 0 && amount <= tokensLeft) {

```

```solidity
File: example/Staking.sol

256:         if (balanceOf(msg.sender) == 0 && user.accruedGain > 0) {

321:         require(to != address(0) && to != msg.sender, "Invalid recipient");

351:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

366:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

409:             event_contract != address(0) && event_id != bytes32(0),

```

```solidity
File: example/UserProfile.sol

35:                     (ch > 96 && ch < 123) || // a-z

36:                     (ch > 47 && ch < 58) ||  // 0-9

```

</details> 
 


 ### <a name="GAS-3"></a>[GAS-3]
 ### Consider using = instead of += and -= for gas efficiency
Using = instead of += and -= can save gas in certain scenarios. Consider using = when appropriate.

*Instances (40)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

218:             amount -= authorShare;

223:             amount -= nftShare;

246:             funds[savva_cid].amount += amount;

275:             totalShares += contributions[h][funds[h].contributors[i]];

281:             runningShareSum += contributions[h][funds[h].contributors[i]];

317:             funds[h].amount -= prize;

418:             total += nftBalance[tokenId];

425:                 total += nftBalance[tokenId];

443:                 total += nftBalance[tokenId];

450:                 total += nftBalance[tokenId];

473:                 total += nftBalance[tokenId];

485:                     total += nftBalance[tokenId];

531:             total += contributions[savva_cid][funds[savva_cid].contributors[i]];

```

```solidity
File: example/SavvaFaucet.sol

104:         roundTotalDeposits += msg.value;

137:                 tokensLeft -= amount;

```

```solidity
File: example/Staking.sol

134:             Second2OldestFrame.to_share += OldestFrame.to_share;

159:             frames[currentFrameNumber & FRAME_MASK].to_share += new_gain;

160:             totalInFrames += new_gain;

193:             result += user_gain;

195:         result += user.accruedGain;

209:         frames[currentFrameNumber & FRAME_MASK].staked += amount;

264:             totalAccruedGain -= gain;

277:         totalUnstaking += amount;

290:         totalAccruedGain -= amount;

307:         totalAccruedGain -= amount;

310:         frames[currentFrameNumber & FRAME_MASK].staked += amount;

352:                 totalAmount += request.amount;

367:                 totalAmount += request.amount;

368:                 totalUnstaking -= request.amount;

573:                     total += payment.amount;

606:                     total += payment.amount;

665:             frame.to_share -= user_gain;

666:             totalInFrames -= user_gain;

667:             frame.staked -= user_stake;

669:             total_gain += user_gain;

672:         user.accruedGain += total_gain;

673:         totalAccruedGain += total_gain;

702:             left2send -= from_ag;

704:             sender.accruedGain -= from_ag;

705:             totalAccruedGain -= from_ag;

```

</details> 
 


 ### <a name="GAS-4"></a>[GAS-4]
 ### Use >= instead of > for gas efficiency
Using >= costs less gas than >. Consider using >= when appropriate.

*Instances (44)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

70:                 if (funds[h].round_time > rt) {

117:                 funds[funds[savva_cid].SLLeft].round_time >

216:         if (authorShare > 0) {

221:         if (nftShare > 0) {

242:                 funds[savva_cid].round_time > block.timestamp,

316:         if (prize > 0) {

321:         if (funds[h].amount > 0) {

365:             if (funds[h].round_time > block.timestamp) break; // Round is not finished yet

366:             if (funds[h].round_time > getRandom.getLastUpdateTime()) break; // Need to wait for new random

492:         require(total > 0, "Nothing to withdraw");

```

```solidity
File: example/ContentRegistry.sol

57:         require(bytes(guid).length > 0, "Guid can't be empty");

58:         require(bytes(domain).length > 0, "Domain can't be empty");

```

```solidity
File: example/ListMarket.sol

42:         require(msg.value > 0 && msg.value == prices[list_name], "Wrong price");

```

```solidity
File: example/NFTMarketplace.sol

47:         require(price > 0, "Price must be greater than 0");

200:         require(price > 0, "Price must be greater than 0");

```

```solidity
File: example/Promo.sol

114:             _savva_amount > 0 || pls_amount > 0,

114:             _savva_amount > 0 || pls_amount > 0,

118:         if (_savva_amount > 0) {

126:             _valid_till > block.timestamp + 1 hours,

163:                     promoCodes[i].valid_till > block.timestamp,

183:                 if (savva_amount > 0) {

190:                 if (pls_amount > 0) {

```

```solidity
File: example/SavvaFaucet.sol

134:             if (amount > 0 && amount <= tokensLeft) {

145:         if (tokensLeft > 0) {

```

```solidity
File: example/Staking.sol

158:         if (new_gain > 0) {

200:         require(amount > 0, "Cannot stake 0");

256:         if (balanceOf(msg.sender) == 0 && user.accruedGain > 0) {

287:         require(user.accruedGain > 0, "No gain to claim");

304:         require(user.accruedGain > 0, "No gain to compound");

320:         require(amount > 0, "Amount must be greater than 0");

351:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

366:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

373:         require(totalAmount > 0, "Nothing to claim");

378:             if (user.unstakeRequests[i].amount > 0) {

406:         require(amount > 0, "Amount must be greater than 0");

486:         require(payment.amount > 0, "No such payment");

567:             if (payment.amount > 0) {

598:             if (payment.amount > 0) {

620:         if (total > 0) {

698:         if (sender.accruedGain > 0) {

699:             uint256 from_ag = (left2send > sender.accruedGain)

712:         if (left2send > 0) {

```

```solidity
File: example/UserProfile.sol

35:                     (ch > 96 && ch < 123) || // a-z

36:                     (ch > 47 && ch < 58) ||  // 0-9

```

</details> 
 


 ### <a name="GAS-5"></a>[GAS-5]
 ### Using bools for storage incurs overhead
Use uint256(1) and uint256(2) for true/false to avoid a Gwarmaccess (100 gas), and to avoid Gsset (20000 gas) when changing from ‘false’ to ‘true’, after having been ‘true’ in the past. See [source](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/58f635312aa21f947cae5f8578638a85aa2519f5/contracts/security/ReentrancyGuard.sol#L23-L27).

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentRegistry.sol

33:     mapping(address => mapping(address => bool)) public allowed;

```

</details> 
 


 ### <a name="GAS-6"></a>[GAS-6]
 ### Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

274:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

280:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

342:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

346:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

530:         for (uint256 i = 0; i < funds[savva_cid].contributors.length; i++) {

```

```solidity
File: example/ContentRegistry.sol

111:         for (uint256 i = 0; i < domains.length; i++) {

```

```solidity
File: example/NFTMarketplace.sol

60:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

175:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

```

```solidity
File: example/Promo.sol

101:         for (uint256 i = 0; i < promoCodes.length; i++) {

160:         for (uint256 i = 0; i < promoCodes.length; i++) {

212:         for (uint256 i = 0; i < promoCodes.length; i++) {

248:         for (uint256 i = 0; i < promoCodes.length; i++) {

261:         for (uint256 i = 0; i < promoCodes.length; i++) {

```

```solidity
File: example/SavvaFaucet.sol

127:         for (uint256 i = 0; i < depositors.length; i++) {

```

```solidity
File: example/Staking.sol

349:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

364:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

377:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

437:             for (uint256 i = 0; i < s_author.patrons.length; i++) {

501:         for (uint256 i = 0; i < user.PayRecordsKeys.length; i++) {

563:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

594:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

```

```solidity
File: example/UserProfile.sol

32:         for (uint256 i; i < b.length; i++) {

```

```solidity
File: example/utils.sol

41:         for (uint256 i = 0; i < b.length; i++) {

```

</details> 
 


 ### <a name="GAS-7"></a>[GAS-7]
 ### Consider using assembly for simple zero checks to save gas
Using assembly for simple zero checks can save gas. Consider using assembly when appropriate.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

63:         if (SLRoot == 0) {

368:             if (random == 0) {

```

```solidity
File: example/SavvaFaucet.sol

38:         if ( _round_seconds == 0 ) {  // non zero used for testing

52:         if (roundPayWeek == 0) {

90:         if (roundPayWeek == 0) {

```

</details> 
 


 ### <a name="GAS-8"></a>[GAS-8]
 ### Expressions for constant values should use immutable rather than constant

#### Impact:
While it doesnt save any gas because the compiler knows that developers often make this mistake, its still best to use the right tool for the task at hand. There is a difference between constant variables and immutable variables, and they should each be used in their appropriate contexts. constants should be used for literal values written into the code, and immutable variables should be used for expressions, or values calculated in, or passed into the constructor.  

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/SavvaFaucet.sol

11:     uint256 constant TOKENS_PER_ROUND = 240000 ether; // (in SAVVA) Approximately 5% per year initially

12:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

```

```solidity
File: example/SavvaToken.sol

13:     bytes32 private constant DELEGATION_TYPEHASH =

```

```solidity
File: example/Staking.sol

95:     uint256 constant SECONDS_PER_WEEK = 604800; //

96:     uint256 constant TOTAL_FRAMES = 32; // approximatly 8 months

97:     uint256 constant FRAME_MASK = 0x1F; // X & FRAME_MASK equals X % TOTAL_FRAMES

```

</details> 
 


 ### <a name="GAS-9"></a>[GAS-9]
 ### Constructors can be marked payable
Payable functions cost less gas to execute, since the compiler does not have to add extra checks to ensure that a payment wasn  t provided. A constructor can safely be marked as payable, since only the deployer would be able to pass funds, and the project itself would not pass any funds.

*Instances (11)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

14:     constructor(address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: example/ContentFund.sol

56:     constructor(address _config) {

```

```solidity
File: example/ContentNFT.sol

15:     constructor(address _config) ERC721("Savva Content NFT", "CNFT") {

```

```solidity
File: example/ContentRegistry.sol

35:     constructor(address _config) {

```

```solidity
File: example/ListMarket.sol

16:     constructor(address _config, address _collector, address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: example/NFTMarketplace.sol

30:     constructor(address _config) {

```

```solidity
File: example/Promo.sol

45:     constructor(address _config, address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: example/RandomOracle.sol

18:     constructor(address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: example/SavvaFaucet.sol

36:     constructor(address _config, address _token, uint256 _round_seconds) {

```

```solidity
File: example/SavvaToken.sol

16:     constructor(

```

```solidity
File: example/Staking.sol

86:     constructor(

```

</details> 
 


 ### <a name="GAS-10"></a>[GAS-10]
 ### Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (35)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

370:                 require(random != 0, "Random is zero");

382:         require(nftBalance[tokenId] > 0, "Nothing to withdraw");

492:         require(total > 0, "Nothing to withdraw");

```

```solidity
File: example/ContentNFT.sol

36:         require(msg.sender == author, "Only author can mint");

43:         require(msg.value == price, "Wrong price"); //@audit allow more and return dust

58:         require(msg.sender == owner, "Only owner can burn");

```

```solidity
File: example/ContentRegistry.sol

57:         require(bytes(guid).length > 0, "Guid can't be empty");

58:         require(bytes(domain).length > 0, "Domain can't be empty");

83:         require(!exists, "NFT minted. Content change is not allowed.");

```

```solidity
File: example/ListMarket.sol

42:         require(msg.value > 0 && msg.value == prices[list_name], "Wrong price");

```

```solidity
File: example/NFTMarketplace.sol

42:         require(nfts[tokenId].owner == address(0), "NFT already on market");

47:         require(price > 0, "Price must be greater than 0");

115:         require(nft.owner != address(0), "NFT not on market");

150:         require(nft.owner != address(0), "NFT not on market");

200:         require(price > 0, "Price must be greater than 0");

```

```solidity
File: example/Promo.sol

108:         require(msg.value >= processor_fee, "Promo: insufficient fee");

208:         revert("Promo: promo code not found");

266:         revert("Promo: promo code not found");

```

```solidity
File: example/SavvaFaucet.sol

159:         require(msg.sender == ORIGIN_ADDRESS, "Only origin can change origin");

```

```solidity
File: example/Staking.sol

200:         require(amount > 0, "Cannot stake 0");

287:         require(user.accruedGain > 0, "No gain to claim");

304:         require(user.accruedGain > 0, "No gain to compound");

320:         require(amount > 0, "Amount must be greater than 0");

321:         require(to != address(0) && to != msg.sender, "Invalid recipient");

326:         require(success, "Insufficient staked balance");

373:         require(totalAmount > 0, "Nothing to claim");

406:         require(amount > 0, "Amount must be greater than 0");

407:         require(author != address(0), "Invalid author");

431:             require(ok, "Insufficient staked balance");

456:                 require(ok, "Insufficient staked balance");

486:         require(payment.amount > 0, "No such payment");

```

```solidity
File: example/UserProfile.sol

28:         require(owners[name] == address(0), "Name already taken"); //@audit-ok unique name

56:         require(bytes(name).length != 0, "Name not set");

72:         require(bytes(name).length != 0, "Name not set");

73:         require(bytes(names[to]).length == 0, "Recipient already has a name");

```

</details> 
 


 ### <a name="GAS-11"></a>[GAS-11]
 ### Use assembly for small keccak256 hashes, in order to save gas
If the arguments to the encode call can fit into the scratch space (two words or fewer), then its more efficient to use assembly to generate the hash (80 gas): keccak256(abi.encodePacked(x, y)) -> assembly {mstore(0x00, a); mstore(0x20, b); let hash := keccak256(0x00, 0x40); }

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

373:                     keccak256(abi.encode(random ^ block.timestamp))

```

```solidity
File: example/Promo.sol

167:                     promoCodes[i].hash == keccak256(abi.encodePacked(_secret)),

```

```solidity
File: example/Staking.sol

413:         bytes32 key = keccak256(

480:         bytes32 key = keccak256(

559:         bytes32 key = keccak256(

592:         bytes32 key = keccak256(abi.encodePacked(msg.sender, event_id, author));

```

```solidity
File: example/utils.sol

16:         return uint256(keccak256(abi.encodePacked(author, domain, guid)));

```

</details> 
 


 ### <a name="GAS-12"></a>[GAS-12]
 ### Reduce gas usage by moving to Solidity 0.8.19 or later
Solidity version 0.8.19 introduced a number of gas optimizations, refer to the [Solidity 0.8.19 Release Announcement](https://soliditylang.org/blog/2023/02/22/solidity-0.8.19-release-announcement) for details.

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentFund.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentNFT.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ContentRegistry.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/ListMarket.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/NFTMarketplace.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/Promo.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/RandomOracle.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/SavvaFaucet.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/SavvaToken.sol

8: pragma solidity ^0.8.18;

```

```solidity
File: example/Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: example/UserProfile.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: example/utils.sol

7: pragma solidity ^0.8.18;

```

</details> 
 


 ### <a name="GAS-13"></a>[GAS-13]
 ### Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ListMarket.sol

24:     function setPrice(string memory list_name, uint256 price) public onlyOwner {

```

```solidity
File: example/Promo.sol

63:     function setProcessorFee(uint256 _fee) external onlyOwner {

```

```solidity
File: example/RandomOracle.sol

22:     function setUpdaterAccount(address _updaterAccount) public onlyOwner {

```

```solidity
File: example/SavvaToken.sol

27:     function mint(uint256 amount) public override onlyOwner {

```

</details> 
 


 ### <a name="GAS-14"></a>[GAS-14]
 ### `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (36)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

274:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

280:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

342:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

346:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

415:         for (uint256 i = 0; i < nft.balanceOf(owner); i++) {

421:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

440:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

446:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

468:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

479:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

530:         for (uint256 i = 0; i < funds[savva_cid].contributors.length; i++) {

```

```solidity
File: example/ContentRegistry.sol

111:         for (uint256 i = 0; i < domains.length; i++) {

```

```solidity
File: example/NFTMarketplace.sol

60:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

175:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

```

```solidity
File: example/Promo.sol

101:         for (uint256 i = 0; i < promoCodes.length; i++) {

160:         for (uint256 i = 0; i < promoCodes.length; i++) {

212:         for (uint256 i = 0; i < promoCodes.length; i++) {

248:         for (uint256 i = 0; i < promoCodes.length; i++) {

261:         for (uint256 i = 0; i < promoCodes.length; i++) {

```

```solidity
File: example/SavvaFaucet.sol

127:         for (uint256 i = 0; i < depositors.length; i++) {

```

```solidity
File: example/Staking.sol

145:             currentFrameNumber++;

177:         for (uint256 i = 1; i < TOTAL_FRAMES; i++) {

349:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

364:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

377:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

382:                 j++;

389:         for (uint256 i = 0; i < n_to_pop; i++) {

437:             for (uint256 i = 0; i < s_author.patrons.length; i++) {

501:         for (uint256 i = 0; i < user.PayRecordsKeys.length; i++) {

513:             for (uint256 i = 0; i < n_to_pop; i++) {

563:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

594:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

643:         for (uint256 i = 1; i < TOTAL_FRAMES; i++) {

```

```solidity
File: example/UserProfile.sol

32:         for (uint256 i; i < b.length; i++) {

```

```solidity
File: example/utils.sol

24:         for (z = 0; z < 32; z++) {

41:         for (uint256 i = 0; i < b.length; i++) {

```

</details> 
 


 ### <a name="GAS-15"></a>[GAS-15]
 ### require()/revert() strings longer than 32 bytes cost extra gas
Each extra memory word of bytes past the original 32 [incurs an MSTORE](https://gist.github.com/hrkrshnn/ee8fabd532058307229d65dcd5836ddc#consider-having-short-revert-strings) which costs 3 gas.

*Instances (28)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

241:             require(

370:                 require(random != 0, "Random is zero");

```

```solidity
File: example/ContentNFT.sol

36:         require(msg.sender == author, "Only author can mint");

43:         require(msg.value == price, "Wrong price"); //@audit allow more and return dust

```

```solidity
File: example/ContentRegistry.sol

59:         require(

83:         require(!exists, "NFT minted. Content change is not allowed.");

```

```solidity
File: example/ListMarket.sol

42:         require(msg.value > 0 && msg.value == prices[list_name], "Wrong price");

```

```solidity
File: example/NFTMarketplace.sol

47:         require(price > 0, "Price must be greater than 0");

79:         require(

116:         require(

130:         require(

151:         require(

164:         require(

200:         require(price > 0, "Price must be greater than 0");

```

```solidity
File: example/Promo.sol

102:             require(

113:         require(

125:         require(

162:                 require(

208:         revert("Promo: promo code not found");

```

```solidity
File: example/RandomOracle.sol

35:         require(

```

```solidity
File: example/SavvaFaucet.sol

83:         require(

```

```solidity
File: example/Staking.sol

200:         require(amount > 0, "Cannot stake 0");

287:         require(user.accruedGain > 0, "No gain to claim");

304:         require(user.accruedGain > 0, "No gain to compound");

326:         require(success, "Insufficient staked balance");

406:         require(amount > 0, "Amount must be greater than 0");

431:             require(ok, "Insufficient staked balance");

486:         require(payment.amount > 0, "No such payment");

```

</details> 
 


 ### <a name="GAS-16"></a>[GAS-16]
 ### Splitting require() statements that use && saves gas

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ListMarket.sol

42:         require(msg.value > 0 && msg.value == prices[list_name], "Wrong price");

```

```solidity
File: example/Staking.sol

321:         require(to != address(0) && to != msg.sender, "Invalid recipient");

```

</details> 
 


 ### <a name="GAS-17"></a>[GAS-17]
 ### Structs can be packed into fewer storage slots
Each slot saved can avoid an extra Gsset (20000 gas) for the first setting of the struct. Subsequent reads as well as writes have smaller gas savings

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

12:     struct Fund {

```

```solidity
File: example/NFTMarketplace.sol

13:     struct NFT {

```

```solidity
File: example/Promo.sol

49:     struct PromoCode {

```

```solidity
File: example/Staking.sol

8:     struct UnstakeRequest {

13:     struct PayRecord {

21:     struct Staker {

99:     struct Frame {

```

</details> 
 


 ### <a name="GAS-18"></a>[GAS-18]
 ### Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency
Using uint256(1) and uint256(2) instead of true and false can save gas for certain changes. Consider using uint256(1)/uint256(2) when appropriate.

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

120:                 return false;

129:                 return false;

133:         return true;

```

```solidity
File: example/ContentRegistry.sol

41:         allowed[msg.sender][allowed_address] = true;

46:         allowed[msg.sender][allowed_address] = false;

74:         bool exists = false;

80:             exists = true;

```

```solidity
File: example/Promo.sol

251:                     return false;

252:                 return true;

255:         return false;

```

```solidity
File: example/Staking.sol

436:             bool found = false;

439:                     found = true;

500:         bool found = false;

504:                 found = true;

683:             return false;

687:             return true;

714:                 return false;

719:         return true;

```

</details> 
 


 ### <a name="GAS-19"></a>[GAS-19]
 ### Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead
Using uints or ints smaller than 32 bytes (256 bits) can incur overhead. Consider using uint256 or int256 to avoid potential issues.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

182:         uint8 v,

```

```solidity
File: example/NFTMarketplace.sol

101:         uint8 v,

```

```solidity
File: example/Promo.sol

76:         uint8 _v,

```

```solidity
File: example/Staking.sol

223:         uint8 _v,

```

```solidity
File: example/UserProfile.sol

33:             uint8 ch = uint8(b[i]);

33:             uint8 ch = uint8(b[i]);

```

</details> 
 


 ### <a name="GAS-20"></a>[GAS-20]
 ### Use != 0 instead of > for unsigned integer comparison

*Instances (44)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/ContentFund.sol

70:                 if (funds[h].round_time > rt) {

117:                 funds[funds[savva_cid].SLLeft].round_time >

216:         if (authorShare > 0) {

221:         if (nftShare > 0) {

242:                 funds[savva_cid].round_time > block.timestamp,

316:         if (prize > 0) {

321:         if (funds[h].amount > 0) {

365:             if (funds[h].round_time > block.timestamp) break; // Round is not finished yet

366:             if (funds[h].round_time > getRandom.getLastUpdateTime()) break; // Need to wait for new random

492:         require(total > 0, "Nothing to withdraw");

```

```solidity
File: example/ContentRegistry.sol

57:         require(bytes(guid).length > 0, "Guid can't be empty");

58:         require(bytes(domain).length > 0, "Domain can't be empty");

```

```solidity
File: example/ListMarket.sol

42:         require(msg.value > 0 && msg.value == prices[list_name], "Wrong price");

```

```solidity
File: example/NFTMarketplace.sol

47:         require(price > 0, "Price must be greater than 0");

200:         require(price > 0, "Price must be greater than 0");

```

```solidity
File: example/Promo.sol

114:             _savva_amount > 0 || pls_amount > 0,

114:             _savva_amount > 0 || pls_amount > 0,

118:         if (_savva_amount > 0) {

126:             _valid_till > block.timestamp + 1 hours,

163:                     promoCodes[i].valid_till > block.timestamp,

183:                 if (savva_amount > 0) {

190:                 if (pls_amount > 0) {

```

```solidity
File: example/SavvaFaucet.sol

134:             if (amount > 0 && amount <= tokensLeft) {

145:         if (tokensLeft > 0) {

```

```solidity
File: example/Staking.sol

158:         if (new_gain > 0) {

200:         require(amount > 0, "Cannot stake 0");

256:         if (balanceOf(msg.sender) == 0 && user.accruedGain > 0) {

287:         require(user.accruedGain > 0, "No gain to claim");

304:         require(user.accruedGain > 0, "No gain to compound");

320:         require(amount > 0, "Amount must be greater than 0");

351:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

366:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

373:         require(totalAmount > 0, "Nothing to claim");

378:             if (user.unstakeRequests[i].amount > 0) {

406:         require(amount > 0, "Amount must be greater than 0");

486:         require(payment.amount > 0, "No such payment");

567:             if (payment.amount > 0) {

598:             if (payment.amount > 0) {

620:         if (total > 0) {

698:         if (sender.accruedGain > 0) {

699:             uint256 from_ag = (left2send > sender.accruedGain)

712:         if (left2send > 0) {

```

```solidity
File: example/UserProfile.sol

35:                     (ch > 96 && ch < 123) || // a-z

36:                     (ch > 47 && ch < 58) ||  // 0-9

```

</details> 
 


 ### <a name="GAS-21"></a>[GAS-21]
 ### Optimize names to save gas
public/external function names and public member variable names can be optimized to save gas. See [this](https://gist.github.com/IllIllI000/a5d8b486a8259f9f77891a919febd1a9) link for an example of how it works. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save 128 gas each during deployment, and renaming functions to have lower method IDs will save 22 gas per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

*Instances (105)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: example/Config.sol

10:     mapping(bytes32 => string) public config;

11:     mapping(bytes32 => uint256) public configUint;

12:     mapping(bytes32 => address) public configAddress;

59:     function set(bytes32 key, string memory value) public override {

70:     function get(bytes32 key) public view override returns (string memory) {

74:     function setUInt(bytes32 key, uint256 value) public override {

85:     function getUInt(bytes32 key) public view override returns (uint256) {

89:     function setAddr(bytes32 key, address value) public override {

100:     function getAddr(bytes32 key) public view override returns (address) {

```

```solidity
File: example/ContentFund.sol

50:     IConfig public config; // Config contract

51:     mapping(uint256 => Fund) public funds;

52:     mapping(uint256 => mapping(address => uint256)) public contributions;

53:     mapping(uint256 => uint256) public nftBalance; // NFT balance

54:     uint256 public SLRoot; // Sorted List root

185:     ) public payable {

199:     ) public payable {

404:     function getNFTCut(uint256 tokenId) public view returns (uint256) {

408:     function getTotalOwnerCut(address owner) public view returns (uint256) {

432:     function getMyNFTGain() public view returns (uint256) {

504:     ) public view returns (uint256) {

511:     ) public view returns (address) {

518:     ) public view returns (uint256) {

522:     function getFund(uint256 savva_cid) public view returns (Fund memory) {

528:     ) public view returns (uint256) {

```

```solidity
File: example/ContentNFT.sol

13:     IConfig public config;

35:     ) public payable {

81:     ) public view override(ERC721, ERC721URIStorage) returns (string memory) {

88:         public

```

```solidity
File: example/ContentRegistry.sol

32:     IConfig public config;

33:     mapping(address => mapping(address => bool)) public allowed;

```

```solidity
File: example/ListMarket.sol

11:     IConfig public config; // Config contract

12:     address payable public collector; // Payment collector

14:     mapping(string => uint256) public prices;

24:     function setPrice(string memory list_name, uint256 price) public onlyOwner {

29:     function getPrice(string memory list_name) public view returns (uint256) {

33:     function setCollector(address payable _collector) public onlyOwner {

41:     ) public payable {

```

```solidity
File: example/NFTMarketplace.sol

11:     IConfig public config; // Config contract

34:     mapping(uint256 => NFT) public nfts;

35:     mapping(address => uint256[]) public nftsByOwner;

89:     function getPrice(uint256 tokenId) public view returns (uint256) {

93:     function getNFTOwner(uint256 tokenId) public view returns (address) {

211:     ) external view returns (bytes4) {

```

```solidity
File: example/Promo.sol

11:     IConfig public config;

13:     uint256 public processor_fee = 400000000000000 wei;

57:     PromoCode[] public promoCodes;

59:     function setProcessor(address payable _processor) external onlyOwner {

63:     function setProcessorFee(uint256 _fee) external onlyOwner {

67:     function getPromoCodesCount() public view returns (uint256) {

79:     ) public payable {

99:     ) public payable {

247:     function isHashValid(bytes32 _hash) public view returns (bool) {

260:     ) public view returns (PromoCode memory) {

```

```solidity
File: example/RandomOracle.sol

11:     uint256 public lastUpdateTime;

12:     uint256 public random;

13:     address public updaterAccount;

14:     uint256 public db_index;  // index in DB where the prove is stored

22:     function setUpdaterAccount(address _updaterAccount) public onlyOwner {

26:     function getRandom() public view override returns (uint256) {

30:     function getLastUpdateTime() public view override returns (uint256) {

```

```solidity
File: example/SavvaFaucet.sol

14:     IConfig public config; // Config contract

15:     ISavvaToken public savvaToken; // Savva token contract

17:     mapping(address => uint256) public deposited;

18:     address[] public depositors;

20:     uint256 public lastRoundPayWeek = 0;

21:     uint256 public roundTotalDeposits = 0;

22:     uint256 public roundTokensToShare = 0;

23:     uint256 public roundPayWeek = 0;

25:     address payable public ORIGIN_ADDRESS =

32:     function getRoundLength() public view returns (uint256) {

49:     function TokensToShare() public view returns (uint256) {

66:     function IsRoundFinished() public view returns (bool) {

71:     function NumberOfDepositors() public view returns (uint256) {

75:     receive() external payable {

79:     function deposit() public payable {

```

```solidity
File: example/SavvaToken.sol

12:     IConfig public config;

27:     function mint(uint256 amount) public override onlyOwner {

```

```solidity
File: example/Staking.sol

6:     IConfig public config;

33:     uint256 public totalUnstaking;

34:     uint256 public totalAccruedGain;

35:     uint256 public totalInFrames;

37:     mapping(address => Staker) public stakers;

104:     Frame[TOTAL_FRAMES] public frames;

105:     uint256 public currentFrameNumber = 0;

107:     function getUnprocessedGane() external view returns (uint256) {

120:     function updatePool() public override {

168:     ) external view returns (uint256) {

315:     function getAccruedGain(address _user) external view returns (uint256) {

338:     ) external view returns (UnstakeRequest[] memory) {

344:     ) external view returns (uint256) {

532:     ) external view returns (bytes32[] memory) {

539:     ) external view returns (PayRecord memory) {

547:     ) external view returns (uint256) {

580:     function claimPayment(address author, bytes32 event_id) external override {

734:     ) public view override(ERC20Permit, Nonces) returns (uint256) {

```

```solidity
File: example/UserProfile.sol

10:     mapping(address => mapping(bytes32 => mapping(bytes32 => string))) public profileString;

11:     mapping(address => mapping(bytes32 => mapping(bytes32 => uint256))) public profileUInt;

13:     mapping(string => address) public owners; // name owners

14:     mapping(address => string) public names;

15:     mapping(address => string) public avatars;

107:     ) public view returns (string memory) {

115:     ) public view returns (uint256) {

```

```solidity
File: example/utils.sol

15:     ) public pure returns (uint256) {

20:     function concat(bytes32 a, bytes32 b) public pure returns (bytes32) {

36:     ) public pure returns (bytes32 result) {

```

</details> 
 

