# Report


## Medium Issues


| |Issue|Instances|
|-|:-|:-:|
| [M-1](#M-1) | Centralization Risk for trusted owners | 23 |
| [M-2](#M-2) | Unsafe use of ERC20 transferFrom() | 8 |
| [M-3](#M-3) | Unsafe use of ERC20 transfer() | 16 |

## Low Issues


| |Issue|Instances|
|-|:-|:-:|
| [L-1](#L-1) | complex casting | 16 |
| [L-2](#L-2) | Functions calling contracts/addresses with transfer hooks are missing reentrancy guards | 6 |
| [L-3](#L-3) | Tokens may be minted to address(0x0) | 7 |
| [L-4](#L-4) |  `abi.encodePacked()` should not be used with dynamic types when passing the result to a hash function such as `keccak256()` | 2 |
| [L-5](#L-5) | Division by zero not prevented | 17 |
| [L-6](#L-6) | Empty function body | 4 |
| [L-7](#L-7) | Use Ownable2Step instead of Ownable | 15 |
| [L-8](#L-8) | Owner can renounce Ownership   | 15 |
| [L-9](#L-9) | Loss of precision | 17 |
| [L-10](#L-10) | State variables not capped at reasonable values | 61 |
| [L-11](#L-11) | Some tokens may revert when zero value transfers are made | 16 |
| [L-12](#L-12) |  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard   | 16 |
| [L-13](#L-13) | Some tokens may revert when large transfers are made | 26 |
| [L-14](#L-14) | Unsafe casting | 13 |
| [L-15](#L-15) | Unsafe ERC20 operation(s) | 20 |

## Non Critical Issues


| |Issue|Instances|
|-|:-|:-:|
| [NC-1](#NC-1) | Contracts should have full test coverage | 18 |
| [NC-2](#NC-2) | Consider adding formal verification proofs | 18 |
| [NC-3](#NC-3) | Large or complicated code bases should implement invariant tests | 18 |
| [NC-4](#NC-4) | NatSpec: Library declarations should have NatSpec descriptions | 1 |
| [NC-5](#NC-5) | Variables without visibility specifier | 25 |
| [NC-6](#NC-6) | Array is push()ed but not pop()ed | 7 |
| [NC-7](#NC-7) | Constants in comparisons should appear on the left side | 69 |
| [NC-8](#NC-8) | constants should be defined rather than using magic numbers | 5 |
| [NC-9](#NC-9) | Contract declarations should have NatSpec @author annotations | 38 |
| [NC-10](#NC-10) | Contract declarations should have NatSpec @Title annotations | 38 |
| [NC-11](#NC-11) | NatSpec: Contract declarations should have @dev tags | 38 |
| [NC-12](#NC-12) | NatSpec: Contract declarations should have NatSpec descriptions | 38 |
| [NC-13](#NC-13) | NatSpec: Contract declarations should have @notice tags | 38 |
| [NC-14](#NC-14) | Consider using delete rather than assigning zero to clear value | 63 |
| [NC-15](#NC-15) | Consider using delete rather than assigning false to clear value | 3 |
| [NC-16](#NC-16) | Consider adding a block/deny-list" | 38 |
| [NC-17](#NC-17) | Use bytes.concat() on bytes instead of abi.encodePacked() for clearer semantic meaning | 5 |
| [NC-18](#NC-18) | Consider adding emergency-stop functionality | 38 |
| [NC-19](#NC-19) | Events are missing sender information | 31 |
| [NC-20](#NC-20) | NatSpec: Event declarations should have NatSpec descriptions | 38 |
| [NC-21](#NC-21) | contracts should use fixed compiler versions | 18 |
| [NC-22](#NC-22) | NatSpec: function declarations should have NatSpec descriptions | 143 |
| [NC-23](#NC-23) | NatSpec: function declarations should have @Notice tags | 143 |
| [NC-24](#NC-24) | NatSpec: function declarations should have NatSpec descriptions | 143 |
| [NC-25](#NC-25) | If-statement can be converted to a ternary | 67 |
| [NC-26](#NC-26) | Large multiples of ten should use scientific notation | 3 |
| [NC-27](#NC-27) | Consider using named mappings | 3 |
| [NC-28](#NC-28) | Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct | 13 |
| [NC-29](#NC-29) | Use of override is unnecessary | 27 |
| [NC-30](#NC-30) | Consider using descriptive constants when using 0 in the code | 36 |
| [NC-31](#NC-31) | Non-external/public variable names should begin with an underscore | 42 |
| [NC-32](#NC-32) | Return values of `approve()` not checked | 4 |
| [NC-33](#NC-33) | Setters should prevent re-setting of the same value | 17 |
| [NC-34](#NC-34) | Use the latest solidity version for deployment   | 18 |
| [NC-35](#NC-35) | Consider bounding input array length | 18 |
| [NC-36](#NC-36) | Overflows in unchecked blocks | 5 |
| [NC-37](#NC-37) | Strings should use double quotes rather than single quotes | 2 |
| [NC-38](#NC-38) | Variables need not be initialized to zero | 50 |
| [NC-39](#NC-39) | Import Whole Files Instead of Specific Identifiers | 48 |
| [NC-40](#NC-40) | Consider moving msg.sender checks to modifiers | 135 |
| [NC-41](#NC-41) | Dont use _msgSender() if not supporting EIP-2771 | 14 |
| [NC-42](#NC-42) | <array>.length should not be looked up in every loop of a for-loop | 6 |
| [NC-43](#NC-43) | Use assembly to emit events, in order to save gas | 43 |
| [NC-44](#NC-44) | Don't initialize variables with default value | 53 |
| [NC-45](#NC-45) | Long revert strings | 10 |

## Gas Optimizations


| |Issue|Instances|
|-|:-|:-:|
| [GAS-1](#GAS-1) | Enable IR-based code generation | 18 |
| [GAS-2](#GAS-2) | Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18) | 1 |
| [GAS-3](#GAS-3) | Nesting if-statements is cheaper than using && | 12 |
| [GAS-4](#GAS-4) | Consider using = instead of += and -= for gas efficiency | 42 |
| [GAS-5](#GAS-5) | Use >= instead of > for gas efficiency | 37 |
| [GAS-6](#GAS-6) | Using bools for storage incurs overhead | 3 |
| [GAS-7](#GAS-7) | Cache array length outside of loop | 18 |
| [GAS-8](#GAS-8) | Consider using assembly for simple zero checks to save gas | 5 |
| [GAS-9](#GAS-9) | Expressions for constant values should use immutable rather than constant | 8 |
| [GAS-10](#GAS-10) | Constructors can be marked payable | 13 |
| [GAS-11](#GAS-11) | Use Custom Errors | 45 |
| [GAS-12](#GAS-12) | Use assembly for small keccak256 hashes, in order to save gas | 6 |
| [GAS-13](#GAS-13) | Reduce gas usage by moving to Solidity 0.8.19 or later | 18 |
| [GAS-14](#GAS-14) | Functions guaranteed to revert when called by normal users can be marked `payable` | 13 |
| [GAS-15](#GAS-15) | `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too) | 31 |
| [GAS-16](#GAS-16) | Using `private` rather than `public` for constants, saves gas | 2 |
| [GAS-17](#GAS-17) | require()/revert() strings longer than 32 bytes cost extra gas | 27 |
| [GAS-18](#GAS-18) | Splitting require() statements that use && saves gas | 2 |
| [GAS-19](#GAS-19) | Structs can be packed into fewer storage slots | 6 |
| [GAS-20](#GAS-20) | Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency | 20 |
| [GAS-21](#GAS-21) | Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead | 7 |
| [GAS-22](#GAS-22) | Use != 0 instead of > for unsigned integer comparison | 37 |
| [GAS-23](#GAS-23) | Optimize names to save gas | 136 |

##################################################################### 
 
 DETAILED REPORT:: 


##################################################################### 


## Medium Issues


 ### <a name="M-1"></a>[M-1]
 ### Centralization Risk for trusted owners

#### Impact:
Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

12: contract Config is IConfig, Ownable {

17:     constructor(address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: ListMarket.sol

13: contract ListMarket is Ownable {

19:     constructor(address _config, address _collector, address _initialOwner) Ownable(_initialOwner) {

27:     function setPrice(string memory list_name, uint256 price) public onlyOwner {

36:     function setCollector(address payable _collector) public onlyOwner {

```

```solidity
File: Promo.sol

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

```solidity
File: RandomOracle.sol

12: contract RandomOracle is IRandomOracle, Ownable {

20:     constructor(address _initialOwner) Ownable(_initialOwner) {

24:     function setUpdaterAccount(address _updaterAccount) public onlyOwner {

```

```solidity
File: SavvaToken.sol

24:         Ownable(_initialOwner)

31:     function mint(uint256 amount) public override onlyOwner {

```

</details> 
 


 ### <a name="M-2"></a>[M-2]
 ### Unsafe use of ERC20 transferFrom()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transferFrom() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransferFrom() from OpenZeppelin instead.

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

219:         token.transferFrom(msg.sender, address(this), amount);

```

```solidity
File: NFTMarketplace.sol

55:         c_nft.transferFrom(msg.sender, address(this), tokenId);

81:         c_nft.transferFrom(address(this), msg.sender, tokenId); // use safeTransferFrom

143:         token.transferFrom(msg.sender, oldOwner, price);

177:         token.transferFrom(msg.sender, oldOwner, price);

```

```solidity
File: Promo.sol

192:     function transferFrom(address from, address to, uint256 amount) external returns (bool);

383:     function transferFrom(address from, address to, uint256 amount) public virtual override returns (bool) {

```

```solidity
File: Staking.sol

222:         savvaToken.transferFrom(msg.sender, address(this), amount);

```

</details> 
 


 ### <a name="M-3"></a>[M-3]
 ### Unsafe use of ERC20 transfer()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transfer() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransfer() from OpenZeppelin instead.

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

226:             token.transfer(author, authorShare);

327:             token.transfer(winner, prize);

410:         token.transfer(msg.sender, amount);

484:                 token.transfer(msg.sender, amount);

496:                     token.transfer(msg.sender, amount);

```

```solidity
File: ContentNFT.sol

54:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //

```

```solidity
File: ListMarket.sol

51:             bb.transfer(msg.value); 

53:             collector.transfer(msg.value);

```

```solidity
File: Promo.sol

156:     function transfer(address to, uint256 amount) external returns (bool);

338:     function transfer(address to, uint256 amount) public virtual override returns (bool) {

```

```solidity
File: SavvaFaucet.sol

111:         ORIGIN_ADDRESS.transfer(msg.value);

140:                 savvaToken.transfer(depositor, amount);

151:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: Staking.sol

273:             savvaToken.transfer(msg.sender, gain);

302:         savvaToken.transfer(msg.sender, amount);

402:         savvaToken.transfer(msg.sender, totalAmount);

```

</details> 
 


## Low Issues


 ### <a name="L-1"></a>[L-1]
 ### complex casting
Consider whether the number of casts is really necessary, or whether using a different type would be more appropriate. Alternatively, add comments to explain in detail why the casts are necessary, and any implicit reasons why the cast does not introduce an overflow.

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

381:                 random = uint256(

505:             uint256(total),

```

```solidity
File: ContentNFT.sol

25:     event Mint(

35:     function mint(

56:         _mint(author, tokenId); //

59:         emit Mint(author, tokenId, domain, guid, uri, price, block.timestamp);

```

```solidity
File: Promo.sol

476:     function _mint(address account, uint256 amount) internal virtual {

623:         _mint(msg.sender, TOTAL_SUPPLY);

```

```solidity
File: SavvaFaucet.sol

123:         savvaToken.mint(roundTokensToShare);

```

```solidity
File: SavvaToken.sol

31:     function mint(uint256 amount) public override onlyOwner {

32:         _mint(owner(), amount); // no total supply check

```

```solidity
File: Staking.sol

215:         _mint(msg.sender, amount); // mint the voting tokens

316:         _mint(msg.sender, amount); // mint the voting tokens

714:             _mint(to, from_ag); // mint the voting tokens

```

```solidity
File: UserProfile.sol

33:             uint8 ch = uint8(b[i]);

```

```solidity
File: utils.sol

16:         return uint256(keccak256(abi.encodePacked(author, domain, guid)));

```

</details> 
 


 ### <a name="L-2"></a>[L-2]
 ### Functions calling contracts/addresses with transfer hooks are missing reentrancy guards
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks will open the users of this protocol up to [read-only reentrancies](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) with no way to protect against it, except by block-listing the whole protocol.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

219:         token.transferFrom(msg.sender, address(this), amount);

```

```solidity
File: NFTMarketplace.sol

55:         c_nft.transferFrom(msg.sender, address(this), tokenId);

81:         c_nft.transferFrom(address(this), msg.sender, tokenId); // use safeTransferFrom

143:         token.transferFrom(msg.sender, oldOwner, price);

177:         token.transferFrom(msg.sender, oldOwner, price);

```

```solidity
File: Staking.sol

222:         savvaToken.transferFrom(msg.sender, address(this), amount);

```

</details> 
 


 ### <a name="L-3"></a>[L-3]
 ### Tokens may be minted to address(0x0)
Neither the  functions, nor _mint() prevent minting to address(0x0)  

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentNFT.sol

56:         _mint(author, tokenId); //

```

```solidity
File: Promo.sol

476:     function _mint(address account, uint256 amount) internal virtual {

623:         _mint(msg.sender, TOTAL_SUPPLY);

```

```solidity
File: SavvaToken.sol

32:         _mint(owner(), amount); // no total supply check

```

```solidity
File: Staking.sol

215:         _mint(msg.sender, amount); // mint the voting tokens

316:         _mint(msg.sender, amount); // mint the voting tokens

714:             _mint(to, from_ag); // mint the voting tokens

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
File: Staking.sol

599:         bytes32 key = keccak256(abi.encodePacked(msg.sender, event_id, author));

```

```solidity
File: utils.sol

16:         return uint256(keccak256(abi.encodePacked(author, domain, guid)));

```

</details> 
 


 ### <a name="L-5"></a>[L-5]
 ### Division by zero not prevented
The divisions below take an input parameter that has no zero-value checks, which can cause the functions reverting if zero is passed.  

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

172:                 (amount * config.getUInt(bytes32("authorShare"))) /

177:                     (amount * config.getUInt(bytes32("nftOwnerCut"))) /

317:             prize = (total * config.getUInt(bytes32("winnerShare"))) / 100;

```

```solidity
File: Promo.sol

632:             uint256 taxAmount = (amount * sellTax) / 100;

634:             uint256 liquidityAmount = (taxAmount * liquidityTax) / 100;

635:             uint256 marketingAmount = (taxAmount * marketingTax) / 100;

636:             uint256 developmentAmount = (taxAmount * developmentTax) / 100;

```

```solidity
File: SavvaFaucet.sol

51:         lastRoundPayWeek = block.timestamp / SECONDS_IN_WEEK;

55:         uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

72:         uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

98:             uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

117:         uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

130:             (100 - STAKING_SHARE)) / 100;

134:             uint256 amount = (deposited[depositor] * totalForEverybody) /

```

```solidity
File: Staking.sol

98:         currentFrameNumber = block.timestamp / SECONDS_PER_WEEK;

128:         uint256 frame_n = block.timestamp / SECONDS_PER_WEEK;

198:             uint256 user_gain = (balanceOf(userAddress) * frame_tokens) /

```

</details> 
 


 ### <a name="L-6"></a>[L-6]
 ### Empty function body
Consider adding a comment about why the function body is empty

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

158:         } catch {}

```

```solidity
File: ContentRegistry.sol

90:         } catch {}

```

```solidity
File: Promo.sol

573:     function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual {}

589:     function _afterTokenTransfer(address from, address to, uint256 amount) internal virtual {}

```

</details> 
 


 ### <a name="L-7"></a>[L-7]
 ### Use Ownable2Step instead of Ownable
Add a description of why Ownable2Step is recommended.

*Instances (15)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

9: import "@openzeppelin/contracts/access/Ownable.sol";

12: contract Config is IConfig, Ownable {

17:     constructor(address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: ListMarket.sol

9: import "@openzeppelin/contracts/access/Ownable.sol";

13: contract ListMarket is Ownable {

19:     constructor(address _config, address _collector, address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: Promo.sol

49: abstract contract Ownable is Context {

80:         require(owner() == _msgSender(), "Ownable: caller is not the owner");

99:         require(newOwner != address(0), "Ownable: new owner is the zero address");

599: contract BlockChat is ERC20, Ownable {

```

```solidity
File: RandomOracle.sol

9: import "@openzeppelin/contracts/access/Ownable.sol";

12: contract RandomOracle is IRandomOracle, Ownable {

20:     constructor(address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: SavvaToken.sol

10: import "@openzeppelin/contracts/access/Ownable.sol";

24:         Ownable(_initialOwner)

```

</details> 
 


 ### <a name="L-8"></a>[L-8]
 ### Owner can renounce Ownership  
Each of the following contracts implements or inherits the renounceOwnership() function. This can represent a certain risk if the ownership is renounced for any other reason than by design. Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

*Instances (15)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

9: import "@openzeppelin/contracts/access/Ownable.sol";

12: contract Config is IConfig, Ownable {

17:     constructor(address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: ListMarket.sol

9: import "@openzeppelin/contracts/access/Ownable.sol";

13: contract ListMarket is Ownable {

19:     constructor(address _config, address _collector, address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: Promo.sol

49: abstract contract Ownable is Context {

80:         require(owner() == _msgSender(), "Ownable: caller is not the owner");

99:         require(newOwner != address(0), "Ownable: new owner is the zero address");

599: contract BlockChat is ERC20, Ownable {

```

```solidity
File: RandomOracle.sol

9: import "@openzeppelin/contracts/access/Ownable.sol";

12: contract RandomOracle is IRandomOracle, Ownable {

20:     constructor(address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: SavvaToken.sol

10: import "@openzeppelin/contracts/access/Ownable.sol";

24:         Ownable(_initialOwner)

```

</details> 
 


 ### <a name="L-9"></a>[L-9]
 ### Loss of precision
Division by large numbers or variables may result in the result being zero, due to Solidity not supporting fractions.

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

172:                 (amount * config.getUInt(bytes32("authorShare"))) /

177:                     (amount * config.getUInt(bytes32("nftOwnerCut"))) /

317:             prize = (total * config.getUInt(bytes32("winnerShare"))) / 100;

```

```solidity
File: Promo.sol

632:             uint256 taxAmount = (amount * sellTax) / 100;

634:             uint256 liquidityAmount = (taxAmount * liquidityTax) / 100;

635:             uint256 marketingAmount = (taxAmount * marketingTax) / 100;

636:             uint256 developmentAmount = (taxAmount * developmentTax) / 100;

```

```solidity
File: SavvaFaucet.sol

51:         lastRoundPayWeek = block.timestamp / SECONDS_IN_WEEK;

55:         uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

72:         uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

98:             uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

117:         uint256 week_now = block.timestamp / SECONDS_IN_WEEK;

130:             (100 - STAKING_SHARE)) / 100;

134:             uint256 amount = (deposited[depositor] * totalForEverybody) /

```

```solidity
File: Staking.sol

98:         currentFrameNumber = block.timestamp / SECONDS_PER_WEEK;

128:         uint256 frame_n = block.timestamp / SECONDS_PER_WEEK;

198:             uint256 user_gain = (balanceOf(userAddress) * frame_tokens) /

```

</details> 
 


 ### <a name="L-10"></a>[L-10]
 ### State variables not capped at reasonable values
Consider adding minimum/maximum value checks to ensure that the state variables below can never be used to excessively harm users, including via griefing

*Instances (61)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

21:         address author;

22:         string domain;

23:         string guid;

25:         uint256 amount;

26:         uint256 round_time;

27:         uint256 SLLeft; // Sorted List left

28:         uint256 SLRight; // Sorted List right

129:                 return false;

138:                 return false;

141: 

310:             return h_next;

312: 

362: 

370:         uint256 h;

437: 

462: 

542:         return total;

```

```solidity
File: ContentRegistry.sol

110:         return savva_cid;

129:         return ids;

```

```solidity
File: NFTMarketplace.sol

20:         address owner;

21:         uint256 price;

```

```solidity
File: Promo.sol

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

```solidity
File: RandomOracle.sol

29:         return random;

33:         return lastUpdateTime;

```

```solidity
File: SavvaFaucet.sol

38:         return SECONDS_IN_WEEK;

63:                 return roundTokensToShare;

160:         delete depositors;

```

```solidity
File: Staking.sol

16:         uint256 amount;

17:         uint256 timestamp;

21:         address author;

22:         address event_contract;

23:         bytes32 event_id;

24:         uint256 amount;

25:         uint256 index; // index in the array of keys

29:         uint256 accruedGain;

31:         uint256 nextUnstakeRequestId;

32:         uint256 stake_frame;

36:         uint256 event_contract;

37:         uint256 last_paid_by_patrons;

107:         uint256 to_share; // tokens accumulated for sharing

108:         uint256 staked; // total staked in this frame

181:             return 0;

203:         return result;

362: 

563:             return 0;

584:         return total;

690:             return false;

694:             return true;

721:                 return false;

726:         return true;

```

```solidity
File: utils.sol

38: 

44: 

```

</details> 
 


 ### <a name="L-11"></a>[L-11]
 ### Some tokens may revert when zero value transfers are made
Despite the fact that [EIP-20](https://github.com/ethereum/EIPs/blob/7500ac4fc1bbdfaf684e7ef851f798f6b667b2fe/EIPS/eip-20.md?plain=1#L116) states that zero-value transfers must be accepted, some tokens, such as LEND, will revert if this is attempted, which may cause transactions that involve other tokens (such as batch operations) to fully revert. Consider skipping the transfer if the amount is zero, which will also save gas.

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

226:             token.transfer(author, authorShare);

327:             token.transfer(winner, prize);

410:         token.transfer(msg.sender, amount);

484:                 token.transfer(msg.sender, amount);

496:                     token.transfer(msg.sender, amount);

```

```solidity
File: ContentNFT.sol

54:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //

```

```solidity
File: ListMarket.sol

51:             bb.transfer(msg.value); 

53:             collector.transfer(msg.value);

```

```solidity
File: Promo.sol

156:     function transfer(address to, uint256 amount) external returns (bool);

338:     function transfer(address to, uint256 amount) public virtual override returns (bool) {

```

```solidity
File: SavvaFaucet.sol

111:         ORIGIN_ADDRESS.transfer(msg.value);

140:                 savvaToken.transfer(depositor, amount);

151:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: Staking.sol

273:             savvaToken.transfer(msg.sender, gain);

302:         savvaToken.transfer(msg.sender, amount);

402:         savvaToken.transfer(msg.sender, totalAmount);

```

</details> 
 


 ### <a name="L-12"></a>[L-12]
 ###  Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard  
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks opens the users of this protocol up to [read-only reentrancy](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) vulnerability with no way to protect them except by block-listing the entire protocol.

*Instances (16)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

226:             token.transfer(author, authorShare);

327:             token.transfer(winner, prize);

410:         token.transfer(msg.sender, amount);

484:                 token.transfer(msg.sender, amount);

496:                     token.transfer(msg.sender, amount);

```

```solidity
File: ContentNFT.sol

54:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //

```

```solidity
File: ListMarket.sol

51:             bb.transfer(msg.value); 

53:             collector.transfer(msg.value);

```

```solidity
File: Promo.sol

156:     function transfer(address to, uint256 amount) external returns (bool);

338:     function transfer(address to, uint256 amount) public virtual override returns (bool) {

```

```solidity
File: SavvaFaucet.sol

111:         ORIGIN_ADDRESS.transfer(msg.value);

140:                 savvaToken.transfer(depositor, amount);

151:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: Staking.sol

273:             savvaToken.transfer(msg.sender, gain);

302:         savvaToken.transfer(msg.sender, amount);

402:         savvaToken.transfer(msg.sender, totalAmount);

```

</details> 
 


 ### <a name="L-13"></a>[L-13]
 ### Some tokens may revert when large transfers are made
Tokens such as COMP or UNI will revert when an address balance reaches type(uint96).max. Ensure that the calls below can be broken up into smaller batches if necessary.  

*Instances (26)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

226:             token.transfer(author, authorShare);

327:             token.transfer(winner, prize);

410:         token.transfer(msg.sender, amount);

484:                 token.transfer(msg.sender, amount);

496:                     token.transfer(msg.sender, amount);

```

```solidity
File: ContentNFT.sol

54:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //

```

```solidity
File: ListMarket.sol

51:             bb.transfer(msg.value); 

53:             collector.transfer(msg.value);

```

```solidity
File: Promo.sol

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

```solidity
File: SavvaFaucet.sol

111:         ORIGIN_ADDRESS.transfer(msg.value);

140:                 savvaToken.transfer(depositor, amount);

151:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: Staking.sol

273:             savvaToken.transfer(msg.sender, gain);

302:         savvaToken.transfer(msg.sender, amount);

402:         savvaToken.transfer(msg.sender, totalAmount);

724:             _transfer(from, to, left2send);

```

</details> 
 


 ### <a name="L-14"></a>[L-14]
 ### Unsafe casting
Unsafe casting can cause alot of issues especially when a type is downcast to a smaller type, the higher order bits are truncated, effectively applying a modulo to the original value. Without any other checks, this wrapping will lead to unexpected behavior and bugs

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentNFT.sol

25:     event Mint(

35:     function mint(

56:         _mint(author, tokenId); //

59:         emit Mint(author, tokenId, domain, guid, uri, price, block.timestamp);

```

```solidity
File: Promo.sol

476:     function _mint(address account, uint256 amount) internal virtual {

623:         _mint(msg.sender, TOTAL_SUPPLY);

```

```solidity
File: SavvaFaucet.sol

123:         savvaToken.mint(roundTokensToShare);

```

```solidity
File: SavvaToken.sol

31:     function mint(uint256 amount) public override onlyOwner {

32:         _mint(owner(), amount); // no total supply check

```

```solidity
File: Staking.sol

215:         _mint(msg.sender, amount); // mint the voting tokens

316:         _mint(msg.sender, amount); // mint the voting tokens

714:             _mint(to, from_ag); // mint the voting tokens

```

```solidity
File: UserProfile.sol

33:             uint8 ch = uint8(b[i]);

```

</details> 
 


 ### <a name="L-15"></a>[L-15]
 ### Unsafe ERC20 operation(s)

*Instances (20)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

219:         token.transferFrom(msg.sender, address(this), amount);

226:             token.transfer(author, authorShare);

327:             token.transfer(winner, prize);

410:         token.transfer(msg.sender, amount);

484:                 token.transfer(msg.sender, amount);

496:                     token.transfer(msg.sender, amount);

```

```solidity
File: ContentNFT.sol

54:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //

```

```solidity
File: ListMarket.sol

51:             bb.transfer(msg.value); 

53:             collector.transfer(msg.value);

```

```solidity
File: NFTMarketplace.sol

55:         c_nft.transferFrom(msg.sender, address(this), tokenId);

81:         c_nft.transferFrom(address(this), msg.sender, tokenId); // use safeTransferFrom

143:         token.transferFrom(msg.sender, oldOwner, price);

177:         token.transferFrom(msg.sender, oldOwner, price);

```

```solidity
File: SavvaFaucet.sol

111:         ORIGIN_ADDRESS.transfer(msg.value);

140:                 savvaToken.transfer(depositor, amount);

151:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: Staking.sol

222:         savvaToken.transferFrom(msg.sender, address(this), amount);

273:             savvaToken.transfer(msg.sender, gain);

302:         savvaToken.transfer(msg.sender, amount);

402:         savvaToken.transfer(msg.sender, totalAmount);

```

</details> 
 


## Non Critical Issues


 ### <a name="NC-1"></a>[NC-1]
 ### Contracts should have full test coverage
While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentFund.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentNFT.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentRegistry.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ListMarket.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: NFTMarketplace.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: Promo.sol

7: pragma solidity ^0.8.0;

34: pragma solidity ^0.8.0;

119: pragma solidity ^0.8.0;

200: pragma solidity ^0.8.0;

230: pragma solidity ^0.8.0;

595: pragma solidity ^0.8.0;

```

```solidity
File: RandomOracle.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: SavvaFaucet.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: SavvaToken.sol

8: pragma solidity ^0.8.18;

```

```solidity
File: Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: UserProfile.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: utils.sol

7: pragma solidity ^0.8.18;

```

</details> 
 


 ### <a name="NC-2"></a>[NC-2]
 ### Consider adding formal verification proofs
Consider using formal verification to mathematically prove that your code does what is intended, and does not have any edge cases with unexpected behavior. The solidity compiler itself has this functionality [built in](https://docs.soliditylang.org/en/latest/smtchecker.html#smtchecker-and-formal-verification)  

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentFund.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentNFT.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentRegistry.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ListMarket.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: NFTMarketplace.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: Promo.sol

7: pragma solidity ^0.8.0;

34: pragma solidity ^0.8.0;

119: pragma solidity ^0.8.0;

200: pragma solidity ^0.8.0;

230: pragma solidity ^0.8.0;

595: pragma solidity ^0.8.0;

```

```solidity
File: RandomOracle.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: SavvaFaucet.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: SavvaToken.sol

8: pragma solidity ^0.8.18;

```

```solidity
File: Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: UserProfile.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: utils.sol

7: pragma solidity ^0.8.18;

```

</details> 
 


 ### <a name="NC-3"></a>[NC-3]
 ### Large or complicated code bases should implement invariant tests
Large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts, should implement [invariant fuzzing tests](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05). Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold. Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers, with properly and extensively-written invariants, can close this testing gap significantly.  

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentFund.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentNFT.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentRegistry.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ListMarket.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: NFTMarketplace.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: Promo.sol

7: pragma solidity ^0.8.0;

34: pragma solidity ^0.8.0;

119: pragma solidity ^0.8.0;

200: pragma solidity ^0.8.0;

230: pragma solidity ^0.8.0;

595: pragma solidity ^0.8.0;

```

```solidity
File: RandomOracle.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: SavvaFaucet.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: SavvaToken.sol

8: pragma solidity ^0.8.18;

```

```solidity
File: Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: UserProfile.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: utils.sol

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
File: utils.sol

9: library utils {

```

</details> 
 


 ### <a name="NC-5"></a>[NC-5]
 ### Variables without visibility specifier

#### Impact:
Specifying visibility for variables can improve code readability and maintainability.

*Instances (25)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

21:         address author;

22:         string domain;

23:         string guid;

25:         uint256 amount;

26:         uint256 round_time;

27:         uint256 SLLeft; // Sorted List left

28:         uint256 SLRight; // Sorted List right

313:         uint256 prize;

370:         uint256 h;

```

```solidity
File: NFTMarketplace.sol

20:         address owner;

21:         uint256 price;

```

```solidity
File: Staking.sol

16:         uint256 amount;

17:         uint256 timestamp;

21:         address author;

22:         address event_contract;

24:         uint256 amount;

25:         uint256 index; // index in the array of keys

29:         uint256 accruedGain;

31:         uint256 nextUnstakeRequestId;

32:         uint256 stake_frame;

36:         uint256 event_contract;

37:         uint256 last_paid_by_patrons;

107:         uint256 to_share; // tokens accumulated for sharing

108:         uint256 staked; // total staked in this frame

```

```solidity
File: UserProfile.sol

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
File: ContentFund.sol

246:             funds[savva_cid].contributors.push(msg.sender);

257:                 funds[savva_cid].contributors.push(msg.sender);

```

```solidity
File: NFTMarketplace.sol

57:         nftsByOwner[msg.sender].push(tokenId);

194:         nftsByOwner[msg.sender].push(tokenId);

```

```solidity
File: SavvaFaucet.sol

103:             depositors.push(msg.sender);

```

```solidity
File: Staking.sol

435:             user.PayRecordsKeys.push(key);

451:                 s_author.patrons.push(msg.sender);

```

</details> 
 


 ### <a name="NC-7"></a>[NC-7]
 ### Constants in comparisons should appear on the left side

#### Impact:
Placing constants on the left side of comparisons can improve code readability and prevent accidental assignment. Doing so will prevent typo [bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*Instances (69)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

71:         if (SLRoot == 0) {     

79:                 if (funds[h].round_time > rt) {

83:                     if (funds[h].SLLeft != 0) {

92:                 if (funds[h].SLRight == 0) {

104:         if (funds[savva_cid].SLLeft != 0) {

110:         if (funds[savva_cid].SLRight != 0) {

124:         if (funds[savva_cid].SLLeft != 0) {

125:             if (

133:         if (funds[savva_cid].SLRight != 0) {

134:             if (

164:         if (

175:             if (nft_owner != address(0)) {

225:         if (authorShare > 0) {

230:         if (nftShare > 0) {

235:         if (funds[savva_cid].author == address(0)) {

256:             if (contributions[savva_cid][msg.sender] == 0) {

292:             if (winnerIndex < runningShareSum) {

308:         if (winner == address(0)) {

316:         if (total >= config.getUInt(bytes32("minFundToShare"))) {

325:         if (prize > 0) {

330:         if (funds[h].amount > 0) {

374:             if (funds[h].round_time > block.timestamp) break; // Round is not finished yet

375:             if (funds[h].round_time > getRandom.getLastUpdateTime()) break; // Need to wait for new random

377:             if (random == 0) {

480:             if (nftBalance[tokenId] > 0) {

492:                 if (nftBalance[tokenId] > 0) {

```

```solidity
File: ListMarket.sol

47:         if (collector == address(0)) {

```

```solidity
File: NFTMarketplace.sol

67:             if (nftsByOwnerArray[i] == tokenId) {

68:                 if (i != nftsByOwnerArray.length - 1) {

182:             if (nftsByOwnerArray[i] == tokenId) {

183:                 if (i != nftsByOwnerArray.length - 1) {

```

```solidity
File: Promo.sol

551:         if (currentAllowance != type(uint256).max) {

```

```solidity
File: SavvaFaucet.sol

43:         if ( _round_seconds == 0 ) {  // non zero used for testing

57:         if (roundPayWeek == 0) {

61:             if (week_now < roundPayWeek) {

95:         if (roundPayWeek == 0) {

102:         if (deposited[msg.sender] == 0) {

119:         if (roundPayWeek == 0 || week_now < roundPayWeek) {

139:             if (amount > 0 && amount <= tokensLeft) {

150:         if (tokensLeft > 0) {

```

```solidity
File: Staking.sol

144:             if (frame.staked == 0) {

165:         if (new_gain > 0) {

186:             if (currentFrameNumber - i < user.stake_frame) {

194:             if (frame_stake == 0 || frame_tokens == 0) {

358:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

373:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

385:             if (user.unstakeRequests[i].amount > 0) {

386:                 if (i != j) {

428:         if (payment.amount == 0) {

445:                 if (s_author.patrons[i] == msg.sender) {

456:             if (payment.amount < amount) {

498:         if (index != last_index) {

510:             if (p.author == author) {

521:                 if (s_author.patrons[i] == msg.sender) {

522:                     if (i != n_to_pop - 1) {

558:         if (

574:             if (payment.amount > 0) {

591:         if (

605:             if (payment.amount > 0) {

627:         if (total > 0) {

644:         if( _user == address(0) || balanceOf(_user) == 0) {

651:             if (currentFrameNumber - i < user.stake_frame) {

657:             if (frame.staked == 0 || frame.to_share == 0) {

663:             if (frame.staked < user_stake) {

689:         if (from == address(0) || to == address(0)) {

693:         if (from == to || amount == 0) {

705:         if (sender.accruedGain > 0) {

719:         if (left2send > 0) {

```

```solidity
File: utils.sol

25:             if (r[z] == 0) {

```

</details> 
 


 ### <a name="NC-8"></a>[NC-8]
 ### constants should be defined rather than using magic numbers
Even [assembly](https://github.com/code-423n4/2022-05-opensea-seaport/blob/9d7ce4d08bf3c3010304a0476a785c70c0e90ae7/contracts/lib/TokenTransferrer.sol#L35-L39) can benefit from using readable constants instead of hex/numeric literals

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

47:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

50:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: SavvaFaucet.sol

31:         payable(0x69d6A50d2AB95FBa5582463148aD61C9a0AD6d1f);

```

```solidity
File: Staking.sol

104:     uint256 constant FRAME_MASK = 0x1F; // X & FRAME_MASK equals X % TOTAL_FRAMES

```

```solidity
File: utils.sol

42:             r |= bytes32(b[i] & 0xFF) >> (i * 8);

```

</details> 
 


 ### <a name="NC-9"></a>[NC-9]
 ### Contract declarations should have NatSpec @author annotations

#### Impact:
Adding a NatSpec @author annotation to contract declarations can improve code documentation.

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

12: contract Config is IConfig, Ownable {

30:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

32:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

33:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

34:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

35:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

36:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

37:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

38:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

39:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

40:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

41:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

42:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

43:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

47:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

50:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: ContentFund.sol

19: contract ContentFund {

58:     IConfig public config; // Config contract

```

```solidity
File: ContentNFT.sol

16: contract ContentNFT is ERC721, ERC721Enumerable, ERC721URIStorage {

54:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //

```

```solidity
File: ContentRegistry.sol

16: contract ContentRegistry is IContentRegistry {

```

```solidity
File: ListMarket.sol

13: contract ListMarket is Ownable {

14:     IConfig public config; // Config contract

```

```solidity
File: NFTMarketplace.sol

16: contract NFTMarketplace is INFTMarketplace, IERC721Receiver {

17:     IConfig public config; // Config contract

```

```solidity
File: Promo.sol

19: abstract contract Context {

49: abstract contract Ownable is Context {

263: contract ERC20 is Context, IERC20, IERC20Metadata {

599: contract BlockChat is ERC20, Ownable {

```

```solidity
File: RandomOracle.sol

12: contract RandomOracle is IRandomOracle, Ownable {

```

```solidity
File: SavvaFaucet.sol

14: contract SavvaFaucet {

17:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

19:     IConfig public config; // Config contract

20:     ISavvaToken public savvaToken; // Savva token contract

151:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: SavvaToken.sol

15: contract SavvaToken is ISavvaToken {

```

```solidity
File: Staking.sol

12: contract Staking is IStaking, ERC20, ERC20Permit, ERC20Votes { 

```

```solidity
File: UserProfile.sol

9: contract UserProfile {

```

</details> 
 


 ### <a name="NC-10"></a>[NC-10]
 ### Contract declarations should have NatSpec @Title annotations

#### Impact:
Adding a NatSpec @Title annotation to contract declarations can improve code documentation.

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

12: contract Config is IConfig, Ownable {

30:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

32:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

33:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

34:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

35:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

36:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

37:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

38:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

39:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

40:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

41:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

42:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

43:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

47:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

50:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: ContentFund.sol

19: contract ContentFund {

58:     IConfig public config; // Config contract

```

```solidity
File: ContentNFT.sol

16: contract ContentNFT is ERC721, ERC721Enumerable, ERC721URIStorage {

54:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //

```

```solidity
File: ContentRegistry.sol

16: contract ContentRegistry is IContentRegistry {

```

```solidity
File: ListMarket.sol

13: contract ListMarket is Ownable {

14:     IConfig public config; // Config contract

```

```solidity
File: NFTMarketplace.sol

16: contract NFTMarketplace is INFTMarketplace, IERC721Receiver {

17:     IConfig public config; // Config contract

```

```solidity
File: Promo.sol

19: abstract contract Context {

49: abstract contract Ownable is Context {

263: contract ERC20 is Context, IERC20, IERC20Metadata {

599: contract BlockChat is ERC20, Ownable {

```

```solidity
File: RandomOracle.sol

12: contract RandomOracle is IRandomOracle, Ownable {

```

```solidity
File: SavvaFaucet.sol

14: contract SavvaFaucet {

17:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

19:     IConfig public config; // Config contract

20:     ISavvaToken public savvaToken; // Savva token contract

151:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: SavvaToken.sol

15: contract SavvaToken is ISavvaToken {

```

```solidity
File: Staking.sol

12: contract Staking is IStaking, ERC20, ERC20Permit, ERC20Votes { 

```

```solidity
File: UserProfile.sol

9: contract UserProfile {

```

</details> 
 


 ### <a name="NC-11"></a>[NC-11]
 ### NatSpec: Contract declarations should have @dev tags

#### Impact:
@dev is used to explain extra details to developers

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

12: contract Config is IConfig, Ownable {

30:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

32:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

33:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

34:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

35:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

36:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

37:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

38:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

39:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

40:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

41:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

42:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

43:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

47:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

50:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: ContentFund.sol

19: contract ContentFund {

58:     IConfig public config; // Config contract

```

```solidity
File: ContentNFT.sol

16: contract ContentNFT is ERC721, ERC721Enumerable, ERC721URIStorage {

54:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //

```

```solidity
File: ContentRegistry.sol

16: contract ContentRegistry is IContentRegistry {

```

```solidity
File: ListMarket.sol

13: contract ListMarket is Ownable {

14:     IConfig public config; // Config contract

```

```solidity
File: NFTMarketplace.sol

16: contract NFTMarketplace is INFTMarketplace, IERC721Receiver {

17:     IConfig public config; // Config contract

```

```solidity
File: Promo.sol

19: abstract contract Context {

49: abstract contract Ownable is Context {

263: contract ERC20 is Context, IERC20, IERC20Metadata {

599: contract BlockChat is ERC20, Ownable {

```

```solidity
File: RandomOracle.sol

12: contract RandomOracle is IRandomOracle, Ownable {

```

```solidity
File: SavvaFaucet.sol

14: contract SavvaFaucet {

17:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

19:     IConfig public config; // Config contract

20:     ISavvaToken public savvaToken; // Savva token contract

151:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: SavvaToken.sol

15: contract SavvaToken is ISavvaToken {

```

```solidity
File: Staking.sol

12: contract Staking is IStaking, ERC20, ERC20Permit, ERC20Votes { 

```

```solidity
File: UserProfile.sol

9: contract UserProfile {

```

</details> 
 


 ### <a name="NC-12"></a>[NC-12]
 ### NatSpec: Contract declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

12: contract Config is IConfig, Ownable {

30:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

32:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

33:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

34:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

35:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

36:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

37:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

38:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

39:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

40:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

41:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

42:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

43:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

47:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

50:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: ContentFund.sol

19: contract ContentFund {

58:     IConfig public config; // Config contract

```

```solidity
File: ContentNFT.sol

16: contract ContentNFT is ERC721, ERC721Enumerable, ERC721URIStorage {

54:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //

```

```solidity
File: ContentRegistry.sol

16: contract ContentRegistry is IContentRegistry {

```

```solidity
File: ListMarket.sol

13: contract ListMarket is Ownable {

14:     IConfig public config; // Config contract

```

```solidity
File: NFTMarketplace.sol

16: contract NFTMarketplace is INFTMarketplace, IERC721Receiver {

17:     IConfig public config; // Config contract

```

```solidity
File: Promo.sol

19: abstract contract Context {

49: abstract contract Ownable is Context {

263: contract ERC20 is Context, IERC20, IERC20Metadata {

599: contract BlockChat is ERC20, Ownable {

```

```solidity
File: RandomOracle.sol

12: contract RandomOracle is IRandomOracle, Ownable {

```

```solidity
File: SavvaFaucet.sol

14: contract SavvaFaucet {

17:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

19:     IConfig public config; // Config contract

20:     ISavvaToken public savvaToken; // Savva token contract

151:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: SavvaToken.sol

15: contract SavvaToken is ISavvaToken {

```

```solidity
File: Staking.sol

12: contract Staking is IStaking, ERC20, ERC20Permit, ERC20Votes { 

```

```solidity
File: UserProfile.sol

9: contract UserProfile {

```

</details> 
 


 ### <a name="NC-13"></a>[NC-13]
 ### NatSpec: Contract declarations should have @notice tags
@notice is used to explain to end users what the contract does, and the compiler interprets /// or /** comments as this tag if one wasnt explicitly provided

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

12: contract Config is IConfig, Ownable {

30:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

32:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

33:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

34:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

35:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

36:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

37:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

38:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

39:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

40:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

41:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

42:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

43:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

47:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

50:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: ContentFund.sol

19: contract ContentFund {

58:     IConfig public config; // Config contract

```

```solidity
File: ContentNFT.sol

16: contract ContentNFT is ERC721, ERC721Enumerable, ERC721URIStorage {

54:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //

```

```solidity
File: ContentRegistry.sol

16: contract ContentRegistry is IContentRegistry {

```

```solidity
File: ListMarket.sol

13: contract ListMarket is Ownable {

14:     IConfig public config; // Config contract

```

```solidity
File: NFTMarketplace.sol

16: contract NFTMarketplace is INFTMarketplace, IERC721Receiver {

17:     IConfig public config; // Config contract

```

```solidity
File: Promo.sol

19: abstract contract Context {

49: abstract contract Ownable is Context {

263: contract ERC20 is Context, IERC20, IERC20Metadata {

599: contract BlockChat is ERC20, Ownable {

```

```solidity
File: RandomOracle.sol

12: contract RandomOracle is IRandomOracle, Ownable {

```

```solidity
File: SavvaFaucet.sol

14: contract SavvaFaucet {

17:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

19:     IConfig public config; // Config contract

20:     ISavvaToken public savvaToken; // Savva token contract

151:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: SavvaToken.sol

15: contract SavvaToken is ISavvaToken {

```

```solidity
File: Staking.sol

12: contract Staking is IStaking, ERC20, ERC20Permit, ERC20Votes { 

```

```solidity
File: UserProfile.sol

9: contract UserProfile {

```

</details> 
 


 ### <a name="NC-14"></a>[NC-14]
 ### Consider using delete rather than assigning zero to clear value

#### Impact:
Consider using delete rather than assigning zero to clear values. The delete keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

*Instances (63)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

74:             funds[savva_cid].SLLeft = 0;

75:             funds[savva_cid].SLRight = 0;

94:                     funds[savva_cid].SLRight = 0;

150:         uint256 authorShare = 0;

151:         uint256 nftShare = 0;

221:         uint256 authorShare = 0;

222:         uint256 nftShare = 0;

281:         uint256 totalShares = 0;

283:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

288:         uint256 runningShareSum = 0;

289:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

351:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

355:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

371:         uint256 random = 0;

422:         uint256 total = 0;

424:         for (uint256 i = 0; i < nft.balanceOf(owner); i++) {

430:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

442:         uint256 total = 0;

449:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

455:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

467:        uint256 total = 0;

477:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

488:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

538:         uint256 total = 0;

539:         for (uint256 i = 0; i < funds[savva_cid].contributors.length; i++) {

```

```solidity
File: ContentRegistry.sol

120:         for (uint256 i = 0; i < domains.length; i++) {

```

```solidity
File: NFTMarketplace.sol

66:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

181:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

```

```solidity
File: SavvaFaucet.sol

25:     uint256 public lastRoundPayWeek = 0;

26:     uint256 public roundTotalDeposits = 0;

27:     uint256 public roundTokensToShare = 0;

28:     uint256 public roundPayWeek = 0;

132:         for (uint256 i = 0; i < depositors.length; i++) {

156:         roundTokensToShare = 0;

157:         roundTotalDeposits = 0;

159:         roundPayWeek = 0; //round will start after first deposit

```

```solidity
File: Staking.sol

112:     uint256 public currentFrameNumber = 0;

146:                 frame.to_share = 0;

148:                 OldestFrame.to_share = 0;

178:         uint256 result = 0;

272:             user.accruedGain = 0;

296:         user.accruedGain = 0;

313:         user.accruedGain = 0;

354:         uint256 totalAmount = 0;

356:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

369:         uint256 totalAmount = 0;

371:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

376:                 request.amount = 0; // Mark for deletion

383:         uint256 j = 0;

384:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

396:         for (uint256 i = 0; i < n_to_pop; i++) {

426:         uint256 paid = 0;

444:             for (uint256 i = 0; i < s_author.patrons.length; i++) {

508:         for (uint256 i = 0; i < user.PayRecordsKeys.length; i++) {

520:             for (uint256 i = 0; i < n_to_pop; i++) {

556:         uint256 total = 0;

570:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

588:         uint256 total = 0;

601:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

648:         uint256 total_gain = 0;

```

```solidity
File: utils.sol

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
File: ContentRegistry.sol

83:         bool exists = false;

```

```solidity
File: Staking.sol

443:             bool found = false;

507:         bool found = false;

```

</details> 
 


 ### <a name="NC-16"></a>[NC-16]
 ### Consider adding a block/deny-list"
Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens  

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

12: contract Config is IConfig, Ownable {

30:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

32:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

33:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

34:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

35:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

36:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

37:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

38:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

39:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

40:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

41:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

42:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

43:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

47:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

50:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: ContentFund.sol

19: contract ContentFund {

58:     IConfig public config; // Config contract

```

```solidity
File: ContentNFT.sol

16: contract ContentNFT is ERC721, ERC721Enumerable, ERC721URIStorage {

54:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //

```

```solidity
File: ContentRegistry.sol

16: contract ContentRegistry is IContentRegistry {

```

```solidity
File: ListMarket.sol

13: contract ListMarket is Ownable {

14:     IConfig public config; // Config contract

```

```solidity
File: NFTMarketplace.sol

16: contract NFTMarketplace is INFTMarketplace, IERC721Receiver {

17:     IConfig public config; // Config contract

```

```solidity
File: Promo.sol

19: abstract contract Context {

49: abstract contract Ownable is Context {

263: contract ERC20 is Context, IERC20, IERC20Metadata {

599: contract BlockChat is ERC20, Ownable {

```

```solidity
File: RandomOracle.sol

12: contract RandomOracle is IRandomOracle, Ownable {

```

```solidity
File: SavvaFaucet.sol

14: contract SavvaFaucet {

17:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

19:     IConfig public config; // Config contract

20:     ISavvaToken public savvaToken; // Savva token contract

151:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: SavvaToken.sol

15: contract SavvaToken is ISavvaToken {

```

```solidity
File: Staking.sol

12: contract Staking is IStaking, ERC20, ERC20Permit, ERC20Votes { 

```

```solidity
File: UserProfile.sol

9: contract UserProfile {

```

</details> 
 


 ### <a name="NC-17"></a>[NC-17]
 ### Use bytes.concat() on bytes instead of abi.encodePacked() for clearer semantic meaning
Starting with version 0.8.4, Solidity has the bytes.concat() function, which allows one to concatenate a list of bytes/strings, without extra padding. Using this function rather than abi.encodePacked() makes the intended operation more clear, leading to less reviewer confusion.  

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Staking.sol

421:             abi.encodePacked(event_contract, event_id, author)

488:             abi.encodePacked(event_contract, event_id, author)

567:             abi.encodePacked(contract_address, event_id, author)

599:         bytes32 key = keccak256(abi.encodePacked(msg.sender, event_id, author));

```

```solidity
File: utils.sol

16:         return uint256(keccak256(abi.encodePacked(author, domain, guid)));

```

</details> 
 


 ### <a name="NC-18"></a>[NC-18]
 ### Consider adding emergency-stop functionality

#### Impact:
Adding a way to quickly halt protocol functionality in an emergency, rather than having to pause individual contracts one-by-one, will make in-progress hack mitigation faster and much less stressful.

*Instances (38)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

12: contract Config is IConfig, Ownable {

30:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

32:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

33:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

34:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

35:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

36:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

37:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

38:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

39:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

40:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

41:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

42:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

43:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

47:             0x29eA7545DEf87022BAdc76323F373EA1e707C523 // Buy&Burn PulseX factory contract

50:             0xA1077a294dDE1B09bB078844df40758a5D0f9a27 // WETH contract (WPLS)

```

```solidity
File: ContentFund.sol

19: contract ContentFund {

58:     IConfig public config; // Config contract

```

```solidity
File: ContentNFT.sol

16: contract ContentNFT is ERC721, ERC721Enumerable, ERC721URIStorage {

54:         bb.transfer(msg.value); // Send ETH to Buy&Burn contract //

```

```solidity
File: ContentRegistry.sol

16: contract ContentRegistry is IContentRegistry {

```

```solidity
File: ListMarket.sol

13: contract ListMarket is Ownable {

14:     IConfig public config; // Config contract

```

```solidity
File: NFTMarketplace.sol

16: contract NFTMarketplace is INFTMarketplace, IERC721Receiver {

17:     IConfig public config; // Config contract

```

```solidity
File: Promo.sol

19: abstract contract Context {

49: abstract contract Ownable is Context {

263: contract ERC20 is Context, IERC20, IERC20Metadata {

599: contract BlockChat is ERC20, Ownable {

```

```solidity
File: RandomOracle.sol

12: contract RandomOracle is IRandomOracle, Ownable {

```

```solidity
File: SavvaFaucet.sol

14: contract SavvaFaucet {

17:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

19:     IConfig public config; // Config contract

20:     ISavvaToken public savvaToken; // Savva token contract

151:             savvaToken.transfer(stakingContract, tokensLeft); // send the rest to staking contract

```

```solidity
File: SavvaToken.sol

15: contract SavvaToken is ISavvaToken {

```

```solidity
File: Staking.sol

12: contract Staking is IStaking, ERC20, ERC20Permit, ERC20Votes { 

```

```solidity
File: UserProfile.sol

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
File: Config.sol

70:         emit ConfigSet(key, value);

85:         emit ConfigUintSet(key, value);

100:         emit ConfigAddressSet(key, value);

```

```solidity
File: ContentFund.sol

264:         emit ContributeEvent(

338:             emit PrizeEvent(

348:             emit PrizeEvent(h, winner, prize, 0, block.timestamp, 0);

```

```solidity
File: ContentNFT.sol

59:         emit Mint(author, tokenId, domain, guid, uri, price, block.timestamp);

```

```solidity
File: ContentRegistry.sol

100:         emit RegEvent(

140:         emit Command(msg.sender, domain, cmd, p1, p2, p3, p4, block.timestamp);

```

```solidity
File: ListMarket.sol

29:         emit PriceSet(list_name, price, block.timestamp);

62:         emit Bought(list_name, msg.sender, msg.value, block.timestamp);

```

```solidity
File: NFTMarketplace.sol

59:         emit NFTAddedToMarket(tokenId, msg.sender, price);

92:         emit NFTRemovedFromMarket(tokenId, msg.sender);

146:         emit NFTBought(tokenId, oldOwner, msg.sender, price);

198:         emit NFTOwnerChanged(tokenId, oldOwner, msg.sender, price, new_price);

209:         emit NFTPriceChanged(tokenId, msg.sender, price);

```

```solidity
File: Promo.sol

110:         emit OwnershipTransferred(oldOwner, newOwner);

462:         emit Transfer(from, to, amount);

538:         emit Approval(owner, spender, amount);

```

```solidity
File: RandomOracle.sol

46:         emit RandomUpdated(_random, _db_index, block.timestamp);

```

```solidity
File: SavvaFaucet.sol

113:         emit Deposit(msg.sender, msg.value, block.timestamp);

125:         emit RoundFinished(roundPayWeek, roundTokensToShare, block.timestamp);

141:                 emit TokensSent(depositor, amount, block.timestamp);

```

```solidity
File: Staking.sol

534:         emit PayRecordDeleted(msg.sender, event_contract, event_id, author);

```

```solidity
File: UserProfile.sol

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
File: Config.sol

58:     event ConfigSet(bytes32 key, string value);

59:     event ConfigUintSet(bytes32 key, uint256 value);

60:     event ConfigAddressSet(bytes32 key, address value);

```

```solidity
File: ContentFund.sol

31:     event ContributeEvent(

43:     event PrizeEvent(

52:     event NFTGainWithdrawEvent(

```

```solidity
File: ContentNFT.sol

25:     event Mint(

```

```solidity
File: ContentRegistry.sol

17:     event RegEvent(

28:     event Command(

```

```solidity
File: ListMarket.sol

24:     event PriceSet(string list_name, uint256 price, uint256 timestamp);

25:     event Bought(string list_name, address buyer, uint256 price, uint256 timestamp);

```

```solidity
File: NFTMarketplace.sol

24:     event NFTAddedToMarket(uint256 token_id, address owner, uint256 price);

25:     event NFTRemovedFromMarket(uint256 token_id, address owner);

26:     event NFTBought(uint256 token_id, address old_owner, address new_owner, uint256 price);

27:     event NFTPriceChanged(uint256 token_id, address owner, uint256 price);

28:     event NFTOwnerChanged(

```

```solidity
File: Promo.sol

52:     event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

131:     event Transfer(address indexed from, address indexed to, uint256 value);

137:     event Approval(address indexed owner, address indexed spender, uint256 value);

```

```solidity
File: RandomOracle.sol

18:     event RandomUpdated(uint256 random, uint256 db_index, uint256 timestamp);

```

```solidity
File: SavvaFaucet.sol

33:     event Deposit(address user, uint256 amount, uint256 timestamp);

34:     event RoundFinished(uint256 round, uint256 tokensToShare, uint256 timestamp);

35:     event TokensSent(address user, uint256 amount, uint256 timestamp);

```

```solidity
File: Staking.sol

46:     event Staked(address indexed user, uint256 amount, uint256 staked);

47:     event Unstaked(address indexed user, uint256 amount, uint256 staked);

48:     event GainClaimed(address indexed user, uint256 amount, uint256 staked);

49:     event ClaimUnstaked(address indexed user, uint256 amount, uint256 staked);

50:     event Transferred(

57:     event Compounded(address indexed user, uint256 amount, uint256 staked);

59:     event PayRecordSet(

70:     event PayRecordDeleted(

77:     event PatronPaid(

85:     event PatronPaymentClaimed(

417:             "Invalid event"

```

```solidity
File: UserProfile.sol

17:     event NameSet(address user, string name);

18:     event AvatarSet(address user, string avatar);

19:     event StringSet(address user, bytes32 domain, bytes32 key, string value);

20:     event UIntSet(address user, bytes32 domain, bytes32 key, uint256 value);

```

</details> 
 


 ### <a name="NC-21"></a>[NC-21]
 ### contracts should use fixed compiler versions
To prevent the contracts being deployed and behaving differently depending on the compiler version, it is recommended to use fixed solidity versions for contracts and libraries. Although we can configure a specific version through config (like hardhat, forge config files), it is recommended to set the fixed version in the solidity pragma directly before deploying to the mainnet.

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentFund.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentNFT.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentRegistry.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ListMarket.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: NFTMarketplace.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: Promo.sol

7: pragma solidity ^0.8.0;

34: pragma solidity ^0.8.0;

119: pragma solidity ^0.8.0;

200: pragma solidity ^0.8.0;

230: pragma solidity ^0.8.0;

595: pragma solidity ^0.8.0;

```

```solidity
File: RandomOracle.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: SavvaFaucet.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: SavvaToken.sol

8: pragma solidity ^0.8.18;

```

```solidity
File: Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: UserProfile.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: utils.sol

7: pragma solidity ^0.8.18;

```

</details> 
 


 ### <a name="NC-22"></a>[NC-22]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (143)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

62:     function set(bytes32 key, string memory value) public override {

73:     function get(bytes32 key) public view override returns (string memory) {

77:     function setUInt(bytes32 key, uint256 value) public override {

88:     function getUInt(bytes32 key) public view override returns (uint256) {

92:     function setAddr(bytes32 key, address value) public override {

103:     function getAddr(bytes32 key) public view override returns (address) {

```

```solidity
File: ContentFund.sol

70:     function _sl_insert(uint256 savva_cid) private {

103:     function _sl_remove(uint256 savva_cid) private {

115:     function _sl_update_position(uint256 savva_cid) private {

121:     function _sl_is_position_correct(

145:     function _calc_shares(

185:     function contributeWithPermit(

203:     function contribute(

277:     function _choose_winner(

300:     function _process_round(

366:     function processRounds() public { //@audit i think should have any modifier

390:     function withdrawNFTGain(uint256 tokenId) public {

413:     function getNFTCut(uint256 tokenId) public view returns (uint256) {

417:     function getTotalOwnerCut(address owner) public view returns (uint256) {

441:     function getMyNFTGain() public view returns (uint256) {

466:     function withdrawMyNFTGain() public {

511:     function getNumberOfContributors(

517:     function getContributor(

524:     function getContribution(

531:     function getFund(uint256 savva_cid) public view returns (Fund memory) {

535:     function getTotalContributed(

```

```solidity
File: ContentNFT.sol

35:     function mint(

62:     function burn(uint256 tokenId) public {

70:     function _update(

78:     function _increaseBalance(

85:     function tokenURI(

91:     function supportsInterface(

```

```solidity
File: ContentRegistry.sol

47:     function allow(address allowed_address) public {

52:     function disallow(address allowed_address) public {

59:     function reg(

113:     function regArray(

122:                 domains[i], // no check on length, if length is different, it will revert also if length is too long then this function will revert due to gas limit

132:     function command(

```

```solidity
File: ListMarket.sol

27:     function setPrice(string memory list_name, uint256 price) public onlyOwner {

32:     function getPrice(string memory list_name) public view returns (uint256) {

36:     function setCollector(address payable _collector) public onlyOwner {

40:     function buy(

```

```solidity
File: NFTMarketplace.sol

43:     function addToMarket(uint256 tokenId, uint256 price) public {

62:     function _removeFromMarket(uint256 tokenId) public { // https://chat.openai.com/c/0dcd0a5a-17ac-4139-866f-b39b4de7251f

84:     function removeFromMarket(uint256 tokenId) public {

95:     function getPrice(uint256 tokenId) public view returns (uint256) {

99:     function getNFTOwner(uint256 tokenId) public view returns (address) {

103:     function buyWithPermit( //buy with permit

118:     function buy(uint256 tokenId, uint256 amount) public {

149:     function buyAndLeaveOnMarket(

201:     function changePrice(uint256 tokenId, uint256 price) public {

212:     function onERC721Received(

```

```solidity
File: Promo.sol

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

```solidity
File: RandomOracle.sol

24:     function setUpdaterAccount(address _updaterAccount) public onlyOwner {

28:     function getRandom() public view override returns (uint256) {

32:     function getLastUpdateTime() public view override returns (uint256) {

36:     function update(uint256 _random, uint256 _db_index) public {

```

```solidity
File: SavvaFaucet.sol

37:     function getRoundLength() public view returns (uint256) {

54:     function TokensToShare() public view returns (uint256) {

71:     function IsRoundFinished() public view returns (bool) {

76:     function NumberOfDepositors() public view returns (uint256) {

84:     function deposit() public payable {

116:     function finishRound() public {

163:     function ChangeOrigin(address payable newOrigin) public {

```

```solidity
File: SavvaToken.sol

31:     function mint(uint256 amount) public override onlyOwner {

```

```solidity
File: Staking.sol

114:     function getUnprocessedGane() external view returns (uint256) {

127:     function updatePool() public override {

173:     function getPendingGain(

206:     function stake(uint256 amount) public {

227:     function stakeWithPermit(

249:     function unstake(uint256 amount) external {

289:     function claimGain() external {

306:     function compoundGain() external {

322:     function getAccruedGain(address _user) external view returns (uint256) {

326:     function transferStake(address to, uint256 amount) public {

343:     function getUnstakeRequests(

349:     function getAvailableUnstaked(

366:     function claimUnstaked() external {

407:     function setPayRecord(

482:     function deletePayRecord(

537:     function getPayRecordsKeys(

543:     function getPayRecord(

550:     function getExpectedPatronPayment(

587:     function claimPayment(address author, bytes32 event_id) external override {

641:     function _accrue_gain(address _user) internal {

684:     function _safe_transfer_stake_from(

729:     function _update(

739:     function nonces(

```

```solidity
File: UserProfile.sol

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
File: utils.sol

11:     function SavvaID(

20:     function concat(bytes32 a, bytes32 b) public pure returns (bytes32) {

34:     function str2bytes32(

```

</details> 
 


 ### <a name="NC-23"></a>[NC-23]
 ### NatSpec: function declarations should have @Notice tags
@notice is used to explain to end users what the function does, and the compiler interprets /// or /** comments as this tag if one wasn't explicitly provided.  

*Instances (143)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

62:     function set(bytes32 key, string memory value) public override {

73:     function get(bytes32 key) public view override returns (string memory) {

77:     function setUInt(bytes32 key, uint256 value) public override {

88:     function getUInt(bytes32 key) public view override returns (uint256) {

92:     function setAddr(bytes32 key, address value) public override {

103:     function getAddr(bytes32 key) public view override returns (address) {

```

```solidity
File: ContentFund.sol

70:     function _sl_insert(uint256 savva_cid) private {

103:     function _sl_remove(uint256 savva_cid) private {

115:     function _sl_update_position(uint256 savva_cid) private {

121:     function _sl_is_position_correct(

145:     function _calc_shares(

185:     function contributeWithPermit(

203:     function contribute(

277:     function _choose_winner(

300:     function _process_round(

366:     function processRounds() public { //@audit i think should have any modifier

390:     function withdrawNFTGain(uint256 tokenId) public {

413:     function getNFTCut(uint256 tokenId) public view returns (uint256) {

417:     function getTotalOwnerCut(address owner) public view returns (uint256) {

441:     function getMyNFTGain() public view returns (uint256) {

466:     function withdrawMyNFTGain() public {

511:     function getNumberOfContributors(

517:     function getContributor(

524:     function getContribution(

531:     function getFund(uint256 savva_cid) public view returns (Fund memory) {

535:     function getTotalContributed(

```

```solidity
File: ContentNFT.sol

35:     function mint(

62:     function burn(uint256 tokenId) public {

70:     function _update(

78:     function _increaseBalance(

85:     function tokenURI(

91:     function supportsInterface(

```

```solidity
File: ContentRegistry.sol

47:     function allow(address allowed_address) public {

52:     function disallow(address allowed_address) public {

59:     function reg(

113:     function regArray(

122:                 domains[i], // no check on length, if length is different, it will revert also if length is too long then this function will revert due to gas limit

132:     function command(

```

```solidity
File: ListMarket.sol

27:     function setPrice(string memory list_name, uint256 price) public onlyOwner {

32:     function getPrice(string memory list_name) public view returns (uint256) {

36:     function setCollector(address payable _collector) public onlyOwner {

40:     function buy(

```

```solidity
File: NFTMarketplace.sol

43:     function addToMarket(uint256 tokenId, uint256 price) public {

62:     function _removeFromMarket(uint256 tokenId) public { // https://chat.openai.com/c/0dcd0a5a-17ac-4139-866f-b39b4de7251f

84:     function removeFromMarket(uint256 tokenId) public {

95:     function getPrice(uint256 tokenId) public view returns (uint256) {

99:     function getNFTOwner(uint256 tokenId) public view returns (address) {

103:     function buyWithPermit( //buy with permit

118:     function buy(uint256 tokenId, uint256 amount) public {

149:     function buyAndLeaveOnMarket(

201:     function changePrice(uint256 tokenId, uint256 price) public {

212:     function onERC721Received(

```

```solidity
File: Promo.sol

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

```solidity
File: RandomOracle.sol

24:     function setUpdaterAccount(address _updaterAccount) public onlyOwner {

28:     function getRandom() public view override returns (uint256) {

32:     function getLastUpdateTime() public view override returns (uint256) {

36:     function update(uint256 _random, uint256 _db_index) public {

```

```solidity
File: SavvaFaucet.sol

37:     function getRoundLength() public view returns (uint256) {

54:     function TokensToShare() public view returns (uint256) {

71:     function IsRoundFinished() public view returns (bool) {

76:     function NumberOfDepositors() public view returns (uint256) {

84:     function deposit() public payable {

116:     function finishRound() public {

163:     function ChangeOrigin(address payable newOrigin) public {

```

```solidity
File: SavvaToken.sol

31:     function mint(uint256 amount) public override onlyOwner {

```

```solidity
File: Staking.sol

114:     function getUnprocessedGane() external view returns (uint256) {

127:     function updatePool() public override {

173:     function getPendingGain(

206:     function stake(uint256 amount) public {

227:     function stakeWithPermit(

249:     function unstake(uint256 amount) external {

289:     function claimGain() external {

306:     function compoundGain() external {

322:     function getAccruedGain(address _user) external view returns (uint256) {

326:     function transferStake(address to, uint256 amount) public {

343:     function getUnstakeRequests(

349:     function getAvailableUnstaked(

366:     function claimUnstaked() external {

407:     function setPayRecord(

482:     function deletePayRecord(

537:     function getPayRecordsKeys(

543:     function getPayRecord(

550:     function getExpectedPatronPayment(

587:     function claimPayment(address author, bytes32 event_id) external override {

641:     function _accrue_gain(address _user) internal {

684:     function _safe_transfer_stake_from(

729:     function _update(

739:     function nonces(

```

```solidity
File: UserProfile.sol

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
File: utils.sol

11:     function SavvaID(

20:     function concat(bytes32 a, bytes32 b) public pure returns (bytes32) {

34:     function str2bytes32(

```

</details> 
 


 ### <a name="NC-24"></a>[NC-24]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (143)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

62:     function set(bytes32 key, string memory value) public override {

73:     function get(bytes32 key) public view override returns (string memory) {

77:     function setUInt(bytes32 key, uint256 value) public override {

88:     function getUInt(bytes32 key) public view override returns (uint256) {

92:     function setAddr(bytes32 key, address value) public override {

103:     function getAddr(bytes32 key) public view override returns (address) {

```

```solidity
File: ContentFund.sol

70:     function _sl_insert(uint256 savva_cid) private {

103:     function _sl_remove(uint256 savva_cid) private {

115:     function _sl_update_position(uint256 savva_cid) private {

121:     function _sl_is_position_correct(

145:     function _calc_shares(

185:     function contributeWithPermit(

203:     function contribute(

277:     function _choose_winner(

300:     function _process_round(

366:     function processRounds() public { //@audit i think should have any modifier

390:     function withdrawNFTGain(uint256 tokenId) public {

413:     function getNFTCut(uint256 tokenId) public view returns (uint256) {

417:     function getTotalOwnerCut(address owner) public view returns (uint256) {

441:     function getMyNFTGain() public view returns (uint256) {

466:     function withdrawMyNFTGain() public {

511:     function getNumberOfContributors(

517:     function getContributor(

524:     function getContribution(

531:     function getFund(uint256 savva_cid) public view returns (Fund memory) {

535:     function getTotalContributed(

```

```solidity
File: ContentNFT.sol

35:     function mint(

62:     function burn(uint256 tokenId) public {

70:     function _update(

78:     function _increaseBalance(

85:     function tokenURI(

91:     function supportsInterface(

```

```solidity
File: ContentRegistry.sol

47:     function allow(address allowed_address) public {

52:     function disallow(address allowed_address) public {

59:     function reg(

113:     function regArray(

122:                 domains[i], // no check on length, if length is different, it will revert also if length is too long then this function will revert due to gas limit

132:     function command(

```

```solidity
File: ListMarket.sol

27:     function setPrice(string memory list_name, uint256 price) public onlyOwner {

32:     function getPrice(string memory list_name) public view returns (uint256) {

36:     function setCollector(address payable _collector) public onlyOwner {

40:     function buy(

```

```solidity
File: NFTMarketplace.sol

43:     function addToMarket(uint256 tokenId, uint256 price) public {

62:     function _removeFromMarket(uint256 tokenId) public { // https://chat.openai.com/c/0dcd0a5a-17ac-4139-866f-b39b4de7251f

84:     function removeFromMarket(uint256 tokenId) public {

95:     function getPrice(uint256 tokenId) public view returns (uint256) {

99:     function getNFTOwner(uint256 tokenId) public view returns (address) {

103:     function buyWithPermit( //buy with permit

118:     function buy(uint256 tokenId, uint256 amount) public {

149:     function buyAndLeaveOnMarket(

201:     function changePrice(uint256 tokenId, uint256 price) public {

212:     function onERC721Received(

```

```solidity
File: Promo.sol

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

```solidity
File: RandomOracle.sol

24:     function setUpdaterAccount(address _updaterAccount) public onlyOwner {

28:     function getRandom() public view override returns (uint256) {

32:     function getLastUpdateTime() public view override returns (uint256) {

36:     function update(uint256 _random, uint256 _db_index) public {

```

```solidity
File: SavvaFaucet.sol

37:     function getRoundLength() public view returns (uint256) {

54:     function TokensToShare() public view returns (uint256) {

71:     function IsRoundFinished() public view returns (bool) {

76:     function NumberOfDepositors() public view returns (uint256) {

84:     function deposit() public payable {

116:     function finishRound() public {

163:     function ChangeOrigin(address payable newOrigin) public {

```

```solidity
File: SavvaToken.sol

31:     function mint(uint256 amount) public override onlyOwner {

```

```solidity
File: Staking.sol

114:     function getUnprocessedGane() external view returns (uint256) {

127:     function updatePool() public override {

173:     function getPendingGain(

206:     function stake(uint256 amount) public {

227:     function stakeWithPermit(

249:     function unstake(uint256 amount) external {

289:     function claimGain() external {

306:     function compoundGain() external {

322:     function getAccruedGain(address _user) external view returns (uint256) {

326:     function transferStake(address to, uint256 amount) public {

343:     function getUnstakeRequests(

349:     function getAvailableUnstaked(

366:     function claimUnstaked() external {

407:     function setPayRecord(

482:     function deletePayRecord(

537:     function getPayRecordsKeys(

543:     function getPayRecord(

550:     function getExpectedPatronPayment(

587:     function claimPayment(address author, bytes32 event_id) external override {

641:     function _accrue_gain(address _user) internal {

684:     function _safe_transfer_stake_from(

729:     function _update(

739:     function nonces(

```

```solidity
File: UserProfile.sol

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
File: utils.sol

11:     function SavvaID(

20:     function concat(bytes32 a, bytes32 b) public pure returns (bytes32) {

34:     function str2bytes32(

```

</details> 
 


 ### <a name="NC-25"></a>[NC-25]
 ### If-statement can be converted to a ternary

#### Impact:
The code can be made more compact while also increasing readability by converting the following `if`-statements to ternaries (e.g. `foo += (x > y) ? a : b`)

*Instances (67)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

71:         if (SLRoot == 0) {     

85:                     } else {

92:                 if (funds[h].SLRight == 0) {

104:         if (funds[savva_cid].SLLeft != 0) {

110:         if (funds[savva_cid].SLRight != 0) {

124:         if (funds[savva_cid].SLLeft != 0) {

133:         if (funds[savva_cid].SLRight != 0) {

175:             if (nft_owner != address(0)) {

225:         if (authorShare > 0) {

230:         if (nftShare > 0) {

235:         if (funds[savva_cid].author == address(0)) {

259:             } else {

292:             if (winnerIndex < runningShareSum) {

308:         if (winner == address(0)) {

316:         if (total >= config.getUInt(bytes32("minFundToShare"))) {

325:         if (prize > 0) {

330:         if (funds[h].amount > 0) {

377:             if (random == 0) {

433:             if (mp.getNFTOwner(tokenId) == owner) {

458:             if (mp.getNFTOwner(tokenId) == msg.sender) {

480:             if (nftBalance[tokenId] > 0) {

491:             if (mp.getNFTOwner(tokenId) == msg.sender) {

```

```solidity
File: ListMarket.sol

47:         if (collector == address(0)) {

```

```solidity
File: NFTMarketplace.sol

67:             if (nftsByOwnerArray[i] == tokenId) {

182:             if (nftsByOwnerArray[i] == tokenId) {

```

```solidity
File: Promo.sol

551:         if (currentAllowance != type(uint256).max) {

631:         if(automatedMarketMakerPairs[recipient]) {

```

```solidity
File: SavvaFaucet.sol

43:         if ( _round_seconds == 0 ) {  // non zero used for testing

57:         if (roundPayWeek == 0) {

64:             } else {

95:         if (roundPayWeek == 0) {

102:         if (deposited[msg.sender] == 0) {

119:         if (roundPayWeek == 0 || week_now < roundPayWeek) {

139:             if (amount > 0 && amount <= tokensLeft) {

150:         if (tokensLeft > 0) {

```

```solidity
File: Staking.sol

144:             if (frame.staked == 0) {

165:         if (new_gain > 0) {

180:         if (balanceOf(userAddress) == 0) {

186:             if (currentFrameNumber - i < user.stake_frame) {

194:             if (frame_stake == 0 || frame_tokens == 0) {

263:         if (balanceOf(msg.sender) == 0 && user.accruedGain > 0) {

358:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

373:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

385:             if (user.unstakeRequests[i].amount > 0) {

428:         if (payment.amount == 0) {

450:             if (!found) {

453:         } else {

498:         if (index != last_index) {

510:             if (p.author == author) {

516:         if (!found) {

574:             if (payment.amount > 0) {

605:             if (payment.amount > 0) {

627:         if (total > 0) {

644:         if( _user == address(0) || balanceOf(_user) == 0) {

651:             if (currentFrameNumber - i < user.stake_frame) {

657:             if (frame.staked == 0 || frame.to_share == 0) {

663:             if (frame.staked < user_stake) {

689:         if (from == address(0) || to == address(0)) {

693:         if (from == to || amount == 0) {

705:         if (sender.accruedGain > 0) {

719:         if (left2send > 0) {

```

```solidity
File: UserProfile.sol

23:         if (bytes(name).length == 0) {

43:         if (bytes(names[msg.sender]).length != 0) {

130:         if( keccak256(bytes(name) ) != keccak256(bytes(names[msg.sender])) ) {

135:         if( keccak256(bytes(avatar)) != keccak256(bytes(avatars[msg.sender])) ) {

140:         if( keccak256(bytes(profile) ) != keccak256(bytes(getString(msg.sender, domain, bytes32("profile_cid")))) ) {

```

```solidity
File: utils.sol

25:             if (r[z] == 0) {

```

</details> 
 


 ### <a name="NC-26"></a>[NC-26]
 ### Large multiples of ten should use scientific notation
Use a scientific notation rather than decimal literals (e.g. 1e6 instead of 1000000), for better code readability.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Promo.sol

601:     uint256 public constant TOTAL_SUPPLY = 23383574 * 10 ** DECIMALS;

```

```solidity
File: SavvaFaucet.sol

16:     uint256 constant TOKENS_PER_ROUND = 240000 ether; // (in SAVVA) Approximately 5% per year initially

```

```solidity
File: Staking.sol

102:     uint256 constant SECONDS_PER_WEEK = 604800; //

```

</details> 
 


 ### <a name="NC-27"></a>[NC-27]
 ### Consider using named mappings

#### Impact:
Using named mappings can improve code readability and maintainability.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Promo.sol

264:     mapping(address => uint256) private _balances;

266:     mapping(address => mapping(address => uint256)) private _allowances;

```

```solidity
File: Staking.sol

33:         mapping(bytes32 => PayRecord) PayRecords;

```

</details> 
 


 ### <a name="NC-28"></a>[NC-28]
 ### Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct

#### Impact:
Combining multiple mappings into a single mapping with a struct can improve readability and maintainability of the code.

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

60:     mapping(uint256 => mapping(address => uint256)) public contributions;

```

```solidity
File: ContentRegistry.sol

40:     mapping(address => mapping(address => bool)) public allowed;

56:     mapping(address => mapping(address => bool)) public allowed;

```

```solidity
File: NFTMarketplace.sol

41:     mapping(address => uint256[]) public nftsByOwner;

```

```solidity
File: Promo.sol

264:     mapping(address => uint256) private _balances;

266:     mapping(address => mapping(address => uint256)) private _allowances;

612:     mapping(address => bool) public automatedMarketMakerPairs;

```

```solidity
File: SavvaFaucet.sol

22:     mapping(address => uint256) public deposited;

```

```solidity
File: Staking.sol

44:     mapping(address => Staker) public stakers;

```

```solidity
File: UserProfile.sol

10:     mapping(address => mapping(bytes32 => mapping(bytes32 => string))) public profileString;

11:     mapping(address => mapping(bytes32 => mapping(bytes32 => uint256))) public profileUInt;

14:     mapping(address => string) public names;

15:     mapping(address => string) public avatars;

```

</details> 
 


 ### <a name="NC-29"></a>[NC-29]
 ### Use of override is unnecessary

#### Impact:
Starting with Solidity version [0.8.8](https://docs.soliditylang.org/en/v0.8.20/contracts.html#function-overriding), using the override keyword when the function solely overrides an interface function, and the function doesnt exist in multiple base contracts, is unnecessary.

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

62:     function set(bytes32 key, string memory value) public override {

73:     function get(bytes32 key) public view override returns (string memory) {

77:     function setUInt(bytes32 key, uint256 value) public override {

88:     function getUInt(bytes32 key) public view override returns (uint256) {

92:     function setAddr(bytes32 key, address value) public override {

103:     function getAddr(bytes32 key) public view override returns (address) {

```

```solidity
File: ContentNFT.sol

74:     ) internal override(ERC721, ERC721Enumerable) returns (address) {

81:     ) internal override(ERC721, ERC721Enumerable) {

87:     ) public view override(ERC721, ERC721URIStorage) returns (string memory) {

96:         override(ERC721, ERC721Enumerable, ERC721URIStorage)

```

```solidity
File: Promo.sol

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

```solidity
File: RandomOracle.sol

28:     function getRandom() public view override returns (uint256) {

32:     function getLastUpdateTime() public view override returns (uint256) {

```

```solidity
File: SavvaToken.sol

31:     function mint(uint256 amount) public override onlyOwner {

```

```solidity
File: Staking.sol

127:     function updatePool() public override {

587:     function claimPayment(address author, bytes32 event_id) external override {

733:     ) internal override(ERC20, ERC20Votes) {

741:     ) public view override(ERC20Permit, Nonces) returns (uint256) {

```

</details> 
 


 ### <a name="NC-30"></a>[NC-30]
 ### Consider using descriptive constants when using 0 in the code

#### Impact:
Passing zero as a function argument/Event emission can sometimes result in a security issue (e.g. passing zero as the slippage parameter). Consider using a constant variable with a descriptive name, so its clear that the 0 is intentionally being used, and for the right reasons.

*Instances (36)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

30:         configAddress[bytes32("contract_savvaToken")] = address(0); // SAVVA token contract

31:         configAddress[bytes32("contract_randomOracle")] = address(0); // random oracle (0 - no oracle)

32:         configAddress[bytes32("contract_staking")] = address(0); // Staking contract

33:         configAddress[bytes32("contract_userProfile")] = address(0); // Staking contract

34:         configAddress[bytes32("contract_contentNFT")] = address(0); // Content NFT contract

35:         configAddress[bytes32("contract_contentFund")] = address(0); // Content Fund contract

36:         configAddress[bytes32("contract_governance")] = address(0); // Governance contract

37:         configAddress[bytes32("contract_contentRegistry")] = address(0); // Content Registry contract

38:         configAddress[bytes32("contract_savvaFaucet")] = address(0); // SAVVA Faucet contract

39:         configAddress[bytes32("contract_nftMarketplace")] = address(0); // NFT Market Place contract

40:         configAddress[bytes32("contract_promo")] = address(0); // Promo contract

41:         configAddress[bytes32("contract_buyBurn")] = address(0); // Buy&Burn contract

42:         configAddress[bytes32("contract_listMarket")] = address(0); // List Market contract

43:         configAddress[bytes32("contract_authorOfTheMonth")] = address(0); // Author of the Month contract

```

```solidity
File: ContentFund.sol

153:         address nft_owner = address(0);

297:         return address(0); // should never happen

348:             emit PrizeEvent(h, winner, prize, 0, block.timestamp, 0);

379:                 require(random != 0, "Random is zero");

391:         require(nftBalance[tokenId] > 0, "Nothing to withdraw");

424:         for (uint256 i = 0; i < nft.balanceOf(owner); i++) {

449:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

477:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

501:         require(total > 0, "Nothing to withdraw");

```

```solidity
File: ListMarket.sol

45:         require(msg.value > 0 && msg.value == prices[list_name], "Wrong price");  // allow more price also owner can change

60:         reg.command(domain, "list_add_post", list_name, savva_cid, "0", "");

```

```solidity
File: NFTMarketplace.sol

53:         require(price > 0, "Price must be greater than 0");

206:         require(price > 0, "Price must be greater than 0");

```

```solidity
File: Staking.sol

207:         require(amount > 0, "Cannot stake 0");

294:         require(user.accruedGain > 0, "No gain to claim");

311:         require(user.accruedGain > 0, "No gain to compound");

327:         require(amount > 0, "Amount must be greater than 0");

380:         require(totalAmount > 0, "Nothing to claim");

413:         require(amount > 0, "Amount must be greater than 0");

493:         require(payment.amount > 0, "No such payment");

```

```solidity
File: UserProfile.sol

45:             owners[names[msg.sender]] = address(0);

58:         owners[name] = address(0);

```

</details> 
 


 ### <a name="NC-31"></a>[NC-31]
 ### Non-external/public variable names should begin with an underscore

#### Impact:
Using an underscore at the beginning of non-external/public variable names can improve code clarity and maintainability. According to the Solidity Style Guide, non-external/public variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*Instances (42)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

13:     mapping(bytes32 => string) public config;

14:     mapping(bytes32 => uint256) public configUint;

15:     mapping(bytes32 => address) public configAddress;

```

```solidity
File: ContentFund.sol

58:     IConfig public config; // Config contract

59:     mapping(uint256 => Fund) public funds;

60:     mapping(uint256 => mapping(address => uint256)) public contributions;

61:     mapping(uint256 => uint256) public nftBalance; // NFT balance

62:     uint256 public SLRoot; // Sorted List root

```

```solidity
File: ContentNFT.sol

19:     IConfig public config;

```

```solidity
File: ContentRegistry.sol

39:     IConfig public config;

40:     mapping(address => mapping(address => bool)) public allowed;

56:     mapping(address => mapping(address => bool)) public allowed;

```

```solidity
File: ListMarket.sol

14:     IConfig public config; // Config contract

15:     address payable public collector; // Payment collector

17:     mapping(string => uint256) public prices;

```

```solidity
File: NFTMarketplace.sol

17:     IConfig public config; // Config contract

40:     mapping(uint256 => NFT) public nfts;

41:     mapping(address => uint256[]) public nftsByOwner;

```

```solidity
File: Promo.sol

603:     address public liquidityWallet;

604:     address public marketingWallet;

605:     address public developmentWallet;

612:     mapping(address => bool) public automatedMarketMakerPairs;

```

```solidity
File: RandomOracle.sol

13:     uint256 public lastUpdateTime;

14:     uint256 public random; //@audit so random number is public

15:     address public updaterAccount;

16:     uint256 public db_index;  // index in DB where the prove is stored

```

```solidity
File: SavvaFaucet.sol

19:     IConfig public config; // Config contract

20:     ISavvaToken public savvaToken; // Savva token contract

22:     mapping(address => uint256) public deposited;

23:     address[] public depositors;

```

```solidity
File: SavvaToken.sol

16:     IConfig public config;

```

```solidity
File: Staking.sol

13:     IConfig public config;

40:     uint256 public totalUnstaking;

41:     uint256 public totalAccruedGain;

42:     uint256 public totalInFrames;

44:     mapping(address => Staker) public stakers;

111:     Frame[TOTAL_FRAMES] public frames;

```

```solidity
File: UserProfile.sol

10:     mapping(address => mapping(bytes32 => mapping(bytes32 => string))) public profileString;

11:     mapping(address => mapping(bytes32 => mapping(bytes32 => uint256))) public profileUInt;

13:     mapping(string => address) public owners; // name owners

14:     mapping(address => string) public names;

15:     mapping(address => string) public avatars;

```

</details> 
 


 ### <a name="NC-32"></a>[NC-32]
 ### Return values of `approve()` not checked
Not all IERC20 implementations `revert()` when there's a failure in `approve()`. The function signature has a boolean return value and they indicate errors that way instead. By not checking the return value, operations that should have marked as failed, may potentially go through without actually approving anything

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Promo.sol

363:         _approve(owner, spender, amount);

404:         _approve(owner, spender, allowance(owner, spender) + addedValue);

427:             _approve(owner, spender, currentAllowance - subtractedValue);

554:                 _approve(owner, spender, currentAllowance - amount);

```

</details> 
 


 ### <a name="NC-33"></a>[NC-33]
 ### Setters should prevent re-setting of the same value
This especially problematic when the setter also emits the same value, which may be confusing to offline parsers  

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

62:     function set(bytes32 key, string memory value) public override {

77:     function setUInt(bytes32 key, uint256 value) public override {

92:     function setAddr(bytes32 key, address value) public override {

```

```solidity
File: ListMarket.sol

27:     function setPrice(string memory list_name, uint256 price) public onlyOwner {

36:     function setCollector(address payable _collector) public onlyOwner {

```

```solidity
File: Promo.sol

649:     function setLiquidityWallet(address _liquidityWallet) external onlyOwner {

653:     function setMarketingWallet(address _marketingWallet) external onlyOwner {

657:     function setDevelopmentWallet(address _developmentWallet) external onlyOwner {

661:     function setSellTax(uint256 _sellTax) external onlyOwner {

665:     function setLiquidityTax(uint256 _liquidityTax) external onlyOwner {

669:     function setMarketingTax(uint256 _marketingTax) external onlyOwner {

673:     function setDevelopmentTax(uint256 _devTax) external onlyOwner {

677:     function setAutomatedMarketMakerPair(address pair, bool enabled) public onlyOwner {   

```

```solidity
File: RandomOracle.sol

24:     function setUpdaterAccount(address _updaterAccount) public onlyOwner {

```

```solidity
File: UserProfile.sol

22:     function setName(string memory name) public {

64:     function setAvatar(string memory avatar) public {

119:     function setPubKey(string memory _modifier, string memory _pub_key) public {

```

</details> 
 


 ### <a name="NC-34"></a>[NC-34]
 ### Use the latest solidity version for deployment  
Upgrading to a newer Solidity release can optimize gas usage, take advantage of new features and improve overall contract efficiency. Where possible, based on compatibility requirements, it is recommended to use newer/latest solidity version to take advantage of the latest optimizations and features. You can see the latest version [here](https://soliditylang.org/blog/category/releases/)

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentFund.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentNFT.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentRegistry.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ListMarket.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: NFTMarketplace.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: Promo.sol

7: pragma solidity ^0.8.0;

34: pragma solidity ^0.8.0;

119: pragma solidity ^0.8.0;

200: pragma solidity ^0.8.0;

230: pragma solidity ^0.8.0;

595: pragma solidity ^0.8.0;

```

```solidity
File: RandomOracle.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: SavvaFaucet.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: SavvaToken.sol

8: pragma solidity ^0.8.18;

```

```solidity
File: Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: UserProfile.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: utils.sol

7: pragma solidity ^0.8.18;

```

</details> 
 


 ### <a name="NC-35"></a>[NC-35]
 ### Consider bounding input array length
The functions below take in an unbounded array, and make function calls for entries in the array. While the function will revert if it eventually runs out of gas, it may be a nicer user experience to require() that the length of the array is below some reasonable maximum, so that the user doesnt have to use up a full transactions gas only to see that the transaction reverts

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

283:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

289:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

351:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

355:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

539:         for (uint256 i = 0; i < funds[savva_cid].contributors.length; i++) {

```

```solidity
File: ContentRegistry.sol

120:         for (uint256 i = 0; i < domains.length; i++) {

```

```solidity
File: NFTMarketplace.sol

66:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

181:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

```

```solidity
File: SavvaFaucet.sol

132:         for (uint256 i = 0; i < depositors.length; i++) {

```

```solidity
File: Staking.sol

356:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

371:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

384:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

444:             for (uint256 i = 0; i < s_author.patrons.length; i++) {

508:         for (uint256 i = 0; i < user.PayRecordsKeys.length; i++) {

570:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

601:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

```

```solidity
File: UserProfile.sol

32:         for (uint256 i; i < b.length; i++) {

```

```solidity
File: utils.sol

41:         for (uint256 i = 0; i < b.length; i++) {

```

</details> 
 


 ### <a name="NC-36"></a>[NC-36]
 ### Overflows in unchecked blocks
While integers with a large number of bits are unlikely to overflow on human time scales, it is not strictly correct to use an unchecked block around them, because eventually they will overflow, and unchecked blocks are meant for cases where it is mathematically impossible for an operation to trigger an overflow (e.g. a prior require() statement prevents the overflow case)

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Promo.sol

426:         unchecked {

455:         unchecked {

482:         unchecked {

509:         unchecked {

553:             unchecked {

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
File: ContentRegistry.sol

66:         require(bytes(guid).length > 0, "Guid can't be empty");

```

```solidity
File: NFTMarketplace.sol

124:             "Owner can't buy his own NFT"

```

</details> 
 


 ### <a name="NC-38"></a>[NC-38]
 ### Variables need not be initialized to zero
The default value for variables is zero, so initializing them to zero is superfluous.  

*Instances (50)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

150:         uint256 authorShare = 0;

151:         uint256 nftShare = 0;

221:         uint256 authorShare = 0;

222:         uint256 nftShare = 0;

281:         uint256 totalShares = 0;

283:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

288:         uint256 runningShareSum = 0;

289:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

351:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

355:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

371:         uint256 random = 0;

422:         uint256 total = 0;

424:         for (uint256 i = 0; i < nft.balanceOf(owner); i++) {

430:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

442:         uint256 total = 0;

449:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

455:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

467:        uint256 total = 0;

477:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

488:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

538:         uint256 total = 0;

539:         for (uint256 i = 0; i < funds[savva_cid].contributors.length; i++) {

```

```solidity
File: ContentRegistry.sol

120:         for (uint256 i = 0; i < domains.length; i++) {

```

```solidity
File: NFTMarketplace.sol

66:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

181:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

```

```solidity
File: SavvaFaucet.sol

25:     uint256 public lastRoundPayWeek = 0;

26:     uint256 public roundTotalDeposits = 0;

27:     uint256 public roundTokensToShare = 0;

28:     uint256 public roundPayWeek = 0;

132:         for (uint256 i = 0; i < depositors.length; i++) {

```

```solidity
File: Staking.sol

112:     uint256 public currentFrameNumber = 0;

178:         uint256 result = 0;

354:         uint256 totalAmount = 0;

356:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

369:         uint256 totalAmount = 0;

371:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

383:         uint256 j = 0;

384:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

396:         for (uint256 i = 0; i < n_to_pop; i++) {

426:         uint256 paid = 0;

444:             for (uint256 i = 0; i < s_author.patrons.length; i++) {

508:         for (uint256 i = 0; i < user.PayRecordsKeys.length; i++) {

520:             for (uint256 i = 0; i < n_to_pop; i++) {

556:         uint256 total = 0;

570:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

588:         uint256 total = 0;

601:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

648:         uint256 total_gain = 0;

```

```solidity
File: utils.sol

22:         uint z = 0;

41:         for (uint256 i = 0; i < b.length; i++) {

```

</details> 
 


 ### <a name="NC-39"></a>[NC-39]
 ### Import Whole Files Instead of Specific Identifiers
Import declarations should import specific identifiers, rather than the whole file.

*Instances (48)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

9: import "@openzeppelin/contracts/access/Ownable.sol";

10: import "../interfaces/IConfig.sol";

```

```solidity
File: ContentFund.sol

9: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

10: import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol";

11: import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

12: import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";

13: import "../interfaces/IConfig.sol";

14: import "../interfaces/IRandomOracle.sol";

15: import "../interfaces/INFTMarketplace.sol";

16: import "../audited/utils.sol";

```

```solidity
File: ContentNFT.sol

9: import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

10: import "../interfaces/ISavvaToken.sol";

11: import "../interfaces/IConfig.sol";

12: import "../audited/utils.sol";

13: import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

14: import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

```

```solidity
File: ContentRegistry.sol

9: import "./utils.sol";

10: import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

11: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

12: import "../interfaces/IConfig.sol";

13: import "../interfaces/IStaking.sol";

14: import "../interfaces/IContentRegistry.sol";

```

```solidity
File: ListMarket.sol

9: import "@openzeppelin/contracts/access/Ownable.sol";

10: import "../interfaces/IConfig.sol";

11: import "../interfaces/IContentRegistry.sol";

```

```solidity
File: NFTMarketplace.sol

9: import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

10: import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

11: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

12: import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol";

13: import "../interfaces/IConfig.sol";

14: import "../interfaces/INFTMarketplace.sol";

```

```solidity
File: RandomOracle.sol

9: import "@openzeppelin/contracts/access/Ownable.sol";

10: import "../interfaces/IRandomOracle.sol";

```

```solidity
File: SavvaFaucet.sol

9: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

10: import "../interfaces/ISavvaToken.sol";

11: import "../interfaces/IConfig.sol";

12: import "../interfaces/IStaking.sol";

```

```solidity
File: SavvaToken.sol

10: import "@openzeppelin/contracts/access/Ownable.sol";

11: import "../interfaces/ISavvaToken.sol";

12: import "../interfaces/IConfig.sol";

13: import "../interfaces/IStaking.sol";

```

```solidity
File: Staking.sol

4: import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

5: import "@openzeppelin/contracts/governance/utils/Votes.sol";

6: import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

7: import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

8: import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

9: import "../interfaces/IConfig.sol";

10: import "../interfaces/IStaking.sol";

```

</details> 
 


 ### <a name="NC-40"></a>[NC-40]
 ### Consider moving msg.sender checks to modifiers
If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.  

*Instances (135)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

165:             msg.sender != author &&

166:             msg.sender != nft_owner &&

167:             msg.sender != mp.getNFTOwner(savva_cid)

198:         token.permit(msg.sender, address(this), amount, deadline, v, r, s);

219:         token.transferFrom(msg.sender, address(this), amount);

246:             funds[savva_cid].contributors.push(msg.sender);

247:             contributions[savva_cid][msg.sender] = amount;

256:             if (contributions[savva_cid][msg.sender] == 0) {

257:                 funds[savva_cid].contributors.push(msg.sender);

258:                 contributions[savva_cid][msg.sender] = amount;

260:                 contributions[savva_cid][msg.sender] += amount;

266:             msg.sender,

399:             nft.ownerOf(tokenId) == msg.sender ||

400:                 mp.getNFTOwner(tokenId) == msg.sender,

410:         token.transfer(msg.sender, amount);

449:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

451:                 .tokenOfOwnerByIndex(msg.sender, i);

458:             if (mp.getNFTOwner(tokenId) == msg.sender) {

477:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

479:                 .tokenOfOwnerByIndex(msg.sender, i);

484:                 token.transfer(msg.sender, amount);

491:             if (mp.getNFTOwner(tokenId) == msg.sender) {

496:                     token.transfer(msg.sender, amount);

504:             msg.sender,

```

```solidity
File: ContentNFT.sol

42:         require(msg.sender == author, "Only author can mint");

64:         require(msg.sender == owner, "Only owner can burn");

```

```solidity
File: ContentRegistry.sol

48:         allowed[msg.sender][allowed_address] = true;

53:         allowed[msg.sender][allowed_address] = false;

69:             author == msg.sender || allowed[author][msg.sender],

69:             author == msg.sender || allowed[author][msg.sender],

76:             IERC20(staking).balanceOf(msg.sender) >=

98:         IStaking(staking).claimPayment(msg.sender, event_id);

103:             msg.sender,

123:                 msg.sender,

140:         emit Command(msg.sender, domain, cmd, p1, p2, p3, p4, block.timestamp);

```

```solidity
File: ListMarket.sol

62:         emit Bought(list_name, msg.sender, msg.value, block.timestamp);

```

```solidity
File: NFTMarketplace.sol

50:             c_nft.ownerOf(tokenId) == msg.sender,

55:         c_nft.transferFrom(msg.sender, address(this), tokenId);

56:         nfts[tokenId] = NFT(msg.sender, price);

57:         nftsByOwner[msg.sender].push(tokenId);

59:         emit NFTAddedToMarket(tokenId, msg.sender, price);

65:         uint256[] storage nftsByOwnerArray = nftsByOwner[msg.sender];

81:         c_nft.transferFrom(address(this), msg.sender, tokenId); // use safeTransferFrom

86:             nfts[tokenId].owner == msg.sender,

92:         emit NFTRemovedFromMarket(tokenId, msg.sender);

114:         token.permit(msg.sender, address(this), amount, deadline, v, r, s);

123:             nft.owner != msg.sender,

133:             token.balanceOf(msg.sender) >= price,

143:         token.transferFrom(msg.sender, oldOwner, price);

146:         emit NFTBought(tokenId, oldOwner, msg.sender, price);

158:             nft.owner != msg.sender,

167:             token.balanceOf(msg.sender) >= price,

177:         token.transferFrom(msg.sender, oldOwner, price);

180:         uint256[] storage nftsByOwnerArray = nftsByOwner[msg.sender];

194:         nftsByOwner[msg.sender].push(tokenId);

196:         nfts[tokenId] = NFT(msg.sender, new_price);

198:         emit NFTOwnerChanged(tokenId, oldOwner, msg.sender, price, new_price);

203:             nfts[tokenId].owner == msg.sender,

209:         emit NFTPriceChanged(tokenId, msg.sender, price);

222:             msg.sender == address(c_nft),

```

```solidity
File: Promo.sol

21:         return msg.sender;

623:         _mint(msg.sender, TOTAL_SUPPLY);

```

```solidity
File: RandomOracle.sol

21:         updaterAccount = msg.sender;

38:             msg.sender == updaterAccount,

```

```solidity
File: SavvaFaucet.sol

102:         if (deposited[msg.sender] == 0) {

103:             depositors.push(msg.sender);

104:             deposited[msg.sender] = msg.value;

106:             deposited[msg.sender] += msg.value;

113:         emit Deposit(msg.sender, msg.value, block.timestamp);

164:         require(msg.sender == ORIGIN_ADDRESS, "Only origin can change origin");

```

```solidity
File: Staking.sol

211:         Staker storage user = stakers[msg.sender];

213:         _accrue_gain(msg.sender);

215:         _mint(msg.sender, amount); // mint the voting tokens

222:         savvaToken.transferFrom(msg.sender, address(this), amount);

224:         emit Staked(msg.sender, amount, balanceOf(msg.sender));

224:         emit Staked(msg.sender, amount, balanceOf(msg.sender));

238:             msg.sender,

250:         Staker storage user = stakers[msg.sender];

252:             balanceOf(msg.sender) >= amount,

257:         _accrue_gain(msg.sender);

260:         _burn(msg.sender, amount);

263:         if (balanceOf(msg.sender) == 0 && user.accruedGain > 0) {

273:             savvaToken.transfer(msg.sender, gain);

286:         emit Unstaked(msg.sender, amount, balanceOf(msg.sender));

286:         emit Unstaked(msg.sender, amount, balanceOf(msg.sender));

291:         Staker storage user = stakers[msg.sender];

292:         _accrue_gain(msg.sender);

302:         savvaToken.transfer(msg.sender, amount);

303:         emit GainClaimed(msg.sender, amount, balanceOf(msg.sender));

303:         emit GainClaimed(msg.sender, amount, balanceOf(msg.sender));

308:         Staker storage user = stakers[msg.sender];

309:         _accrue_gain(msg.sender);

316:         _mint(msg.sender, amount); // mint the voting tokens

319:         emit Staked(msg.sender, amount, balanceOf(msg.sender));

319:         emit Staked(msg.sender, amount, balanceOf(msg.sender));

328:         require(to != address(0) && to != msg.sender, "Invalid recipient");

330:         bool success = _safe_transfer_stake_from(msg.sender, to, amount);

335:             msg.sender,

338:             balanceOf(msg.sender),

367:         Staker storage user = stakers[msg.sender];

402:         savvaToken.transfer(msg.sender, totalAmount);

403:         emit ClaimUnstaked(msg.sender, totalAmount, balanceOf(msg.sender));

403:         emit ClaimUnstaked(msg.sender, totalAmount, balanceOf(msg.sender));

423:         Staker storage user = stakers[msg.sender];

437:             bool ok = _safe_transfer_stake_from(msg.sender, author, amount);

445:                 if (s_author.patrons[i] == msg.sender) {

451:                 s_author.patrons.push(msg.sender);

459:                     msg.sender,

471:             msg.sender,

476:             balanceOf(msg.sender),

490:         Staker storage user = stakers[msg.sender];

521:                 if (s_author.patrons[i] == msg.sender) {

534:         emit PayRecordDeleted(msg.sender, event_contract, event_id, author);

599:         bytes32 key = keccak256(abi.encodePacked(msg.sender, event_id, author));

630:                 msg.sender,

```

```solidity
File: UserProfile.sol

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
 


 ### <a name="NC-41"></a>[NC-41]
 ### Dont use _msgSender() if not supporting EIP-2771
Use msg.sender if the code does not implement EIP-2771 trusted forwarder support

*Instances (14)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

64:             _msgSender() == owner() ||

65:                 _msgSender() == configAddress[bytes32("contract_governance")],

79:             _msgSender() == owner() ||

80:                 _msgSender() == configAddress[bytes32("contract_governance")],

94:             _msgSender() == owner() ||

95:                 _msgSender() == configAddress[bytes32("contract_governance")],

```

```solidity
File: Promo.sol

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
 


 ### <a name="NC-42"></a>[NC-42]
 ### <array>.length should not be looked up in every loop of a for-loop
The overheads outlined below are PER LOOP, excluding the first loop. Storage arrays incur a Gwarmaccess (100 gas), memory arrays use MLOAD (3 gas), calldata arrays use CALLDATALOAD (3 gas). Caching the length changes each of these to a DUP<N> (3 gas), and gets rid of the extra DUP<N> needed to store the stack offset.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentRegistry.sol

120:         for (uint256 i = 0; i < domains.length; i++) {

```

```solidity
File: NFTMarketplace.sol

66:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

181:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

```

```solidity
File: SavvaFaucet.sol

132:         for (uint256 i = 0; i < depositors.length; i++) {

```

```solidity
File: UserProfile.sol

32:         for (uint256 i; i < b.length; i++) {

```

```solidity
File: utils.sol

41:         for (uint256 i = 0; i < b.length; i++) {

```

</details> 
 


 ### <a name="NC-43"></a>[NC-43]
 ### Use assembly to emit events, in order to save gas
Using the [scratch space](https://github.com/Vectorized/solady/blob/30558f5402f02351b96eeb6eaf32bcea29773841/src/tokens/ERC1155.sol#L501-L504) for event arguments (two words or fewer) will save gas over needing Soliditys full abi memory expansion used for emitting normally.

*Instances (43)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

70:         emit ConfigSet(key, value);

85:         emit ConfigUintSet(key, value);

100:         emit ConfigAddressSet(key, value);

```

```solidity
File: ContentFund.sol

264:         emit ContributeEvent(

338:             emit PrizeEvent(

348:             emit PrizeEvent(h, winner, prize, 0, block.timestamp, 0);

503:         emit NFTGainWithdrawEvent(

```

```solidity
File: ContentNFT.sol

59:         emit Mint(author, tokenId, domain, guid, uri, price, block.timestamp);

```

```solidity
File: ContentRegistry.sol

100:         emit RegEvent(

140:         emit Command(msg.sender, domain, cmd, p1, p2, p3, p4, block.timestamp);

```

```solidity
File: ListMarket.sol

29:         emit PriceSet(list_name, price, block.timestamp);

62:         emit Bought(list_name, msg.sender, msg.value, block.timestamp);

```

```solidity
File: NFTMarketplace.sol

59:         emit NFTAddedToMarket(tokenId, msg.sender, price);

92:         emit NFTRemovedFromMarket(tokenId, msg.sender);

146:         emit NFTBought(tokenId, oldOwner, msg.sender, price);

198:         emit NFTOwnerChanged(tokenId, oldOwner, msg.sender, price, new_price);

209:         emit NFTPriceChanged(tokenId, msg.sender, price);

```

```solidity
File: Promo.sol

110:         emit OwnershipTransferred(oldOwner, newOwner);

462:         emit Transfer(from, to, amount);

486:         emit Transfer(address(0), account, amount);

515:         emit Transfer(account, address(0), amount);

538:         emit Approval(owner, spender, amount);

```

```solidity
File: RandomOracle.sol

46:         emit RandomUpdated(_random, _db_index, block.timestamp);

```

```solidity
File: SavvaFaucet.sol

113:         emit Deposit(msg.sender, msg.value, block.timestamp);

125:         emit RoundFinished(roundPayWeek, roundTokensToShare, block.timestamp);

141:                 emit TokensSent(depositor, amount, block.timestamp);

```

```solidity
File: Staking.sol

224:         emit Staked(msg.sender, amount, balanceOf(msg.sender));

286:         emit Unstaked(msg.sender, amount, balanceOf(msg.sender));

303:         emit GainClaimed(msg.sender, amount, balanceOf(msg.sender));

319:         emit Staked(msg.sender, amount, balanceOf(msg.sender));

334:         emit Transferred(

403:         emit ClaimUnstaked(msg.sender, totalAmount, balanceOf(msg.sender));

470:         emit PayRecordSet(

534:         emit PayRecordDeleted(msg.sender, event_contract, event_id, author);

615:                     emit PatronPaid(

628:             emit PatronPaymentClaimed(

```

```solidity
File: UserProfile.sol

51:         emit NameSet(msg.sender, name);

61:         emit NameSet(msg.sender, "");

66:         emit AvatarSet(msg.sender, avatar);

80:         emit NameSet(to, name);

81:         emit NameSet(msg.sender, "");

90:         emit StringSet(msg.sender, domain, key, value);

100:         emit UIntSet(msg.sender, domain, key, value);

```

</details> 
 


 ### <a name="NC-44"></a>[NC-44]
 ### Don't initialize variables with default value

*Instances (53)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

150:         uint256 authorShare = 0;

151:         uint256 nftShare = 0;

221:         uint256 authorShare = 0;

222:         uint256 nftShare = 0;

281:         uint256 totalShares = 0;

283:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

288:         uint256 runningShareSum = 0;

289:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

351:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

355:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

371:         uint256 random = 0;

422:         uint256 total = 0;

424:         for (uint256 i = 0; i < nft.balanceOf(owner); i++) {

430:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

442:         uint256 total = 0;

449:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

455:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

467:        uint256 total = 0;

477:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

488:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

538:         uint256 total = 0;

539:         for (uint256 i = 0; i < funds[savva_cid].contributors.length; i++) {

```

```solidity
File: ContentRegistry.sol

83:         bool exists = false;

120:         for (uint256 i = 0; i < domains.length; i++) {

```

```solidity
File: NFTMarketplace.sol

66:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

181:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

```

```solidity
File: SavvaFaucet.sol

25:     uint256 public lastRoundPayWeek = 0;

26:     uint256 public roundTotalDeposits = 0;

27:     uint256 public roundTokensToShare = 0;

28:     uint256 public roundPayWeek = 0;

132:         for (uint256 i = 0; i < depositors.length; i++) {

```

```solidity
File: Staking.sol

112:     uint256 public currentFrameNumber = 0;

178:         uint256 result = 0;

354:         uint256 totalAmount = 0;

356:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

369:         uint256 totalAmount = 0;

371:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

383:         uint256 j = 0;

384:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

396:         for (uint256 i = 0; i < n_to_pop; i++) {

426:         uint256 paid = 0;

443:             bool found = false;

444:             for (uint256 i = 0; i < s_author.patrons.length; i++) {

507:         bool found = false;

508:         for (uint256 i = 0; i < user.PayRecordsKeys.length; i++) {

520:             for (uint256 i = 0; i < n_to_pop; i++) {

556:         uint256 total = 0;

570:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

588:         uint256 total = 0;

601:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

648:         uint256 total_gain = 0;

```

```solidity
File: utils.sol

22:         uint z = 0;

41:         for (uint256 i = 0; i < b.length; i++) {

```

</details> 
 


 ### <a name="NC-45"></a>[NC-45]
 ### Long revert strings

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentRegistry.sol

92:         require(!exists, "NFT minted. Content change is not allowed.");

```

```solidity
File: Promo.sol

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

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentFund.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentNFT.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentRegistry.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ListMarket.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: NFTMarketplace.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: Promo.sol

7: pragma solidity ^0.8.0;

34: pragma solidity ^0.8.0;

119: pragma solidity ^0.8.0;

200: pragma solidity ^0.8.0;

230: pragma solidity ^0.8.0;

595: pragma solidity ^0.8.0;

```

```solidity
File: RandomOracle.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: SavvaFaucet.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: SavvaToken.sol

8: pragma solidity ^0.8.18;

```

```solidity
File: Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: UserProfile.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: utils.sol

7: pragma solidity ^0.8.18;

```

</details> 
 


 ### <a name="GAS-2"></a>[GAS-2]
 ### Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18)
While the compiler knows to optimize away the exponentiation, its still better coding practice to use idioms that do not require compiler optimization, if they exist.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Promo.sol

601:     uint256 public constant TOTAL_SUPPLY = 23383574 * 10 ** DECIMALS;

```

</details> 
 


 ### <a name="GAS-3"></a>[GAS-3]
 ### Nesting if-statements is cheaper than using &&
Nesting if-statements avoids the stack operations of setting up and using an extra jumpdest, and saves 6 [gas](https://gist.github.com/IllIllI000/7f3b818abecfadbef93b894481ae7d19)

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

165:             msg.sender != author &&

166:             msg.sender != nft_owner &&

```

```solidity
File: ListMarket.sol

45:         require(msg.value > 0 && msg.value == prices[list_name], "Wrong price");  // allow more price also owner can change

```

```solidity
File: SavvaFaucet.sol

73:         return roundPayWeek != 0 && week_now >= roundPayWeek;

139:             if (amount > 0 && amount <= tokensLeft) {

```

```solidity
File: Staking.sol

263:         if (balanceOf(msg.sender) == 0 && user.accruedGain > 0) {

328:         require(to != address(0) && to != msg.sender, "Invalid recipient");

358:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

373:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

416:             event_contract != address(0) && event_id != bytes32(0),

```

```solidity
File: UserProfile.sol

35:                     (ch > 96 && ch < 123) || // a-z

36:                     (ch > 47 && ch < 58) ||  // 0-9

```

</details> 
 


 ### <a name="GAS-4"></a>[GAS-4]
 ### Consider using = instead of += and -= for gas efficiency
Using = instead of += and -= can save gas in certain scenarios. Consider using = when appropriate.

*Instances (42)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

227:             amount -= authorShare;

232:             amount -= nftShare;

255:             funds[savva_cid].amount += amount;

284:             totalShares += contributions[h][funds[h].contributors[i]];

290:             runningShareSum += contributions[h][funds[h].contributors[i]];

326:             funds[h].amount -= prize;

427:             total += nftBalance[tokenId];

434:                 total += nftBalance[tokenId];

452:                 total += nftBalance[tokenId];

459:                 total += nftBalance[tokenId];

482:                 total += nftBalance[tokenId];

494:                     total += nftBalance[tokenId];

540:             total += contributions[savva_cid][funds[savva_cid].contributors[i]];

```

```solidity
File: Promo.sol

481:         _totalSupply += amount;

512:             _totalSupply -= amount;

```

```solidity
File: SavvaFaucet.sol

109:         roundTotalDeposits += msg.value;

142:                 tokensLeft -= amount;

```

```solidity
File: Staking.sol

141:             Second2OldestFrame.to_share += OldestFrame.to_share;

166:             frames[currentFrameNumber & FRAME_MASK].to_share += new_gain;

167:             totalInFrames += new_gain;

200:             result += user_gain;

202:         result += user.accruedGain;

216:         frames[currentFrameNumber & FRAME_MASK].staked += amount;

271:             totalAccruedGain -= gain;

284:         totalUnstaking += amount;

297:         totalAccruedGain -= amount;

314:         totalAccruedGain -= amount;

317:         frames[currentFrameNumber & FRAME_MASK].staked += amount;

359:                 totalAmount += request.amount;

374:                 totalAmount += request.amount;

375:                 totalUnstaking -= request.amount;

580:                     total += payment.amount;

613:                     total += payment.amount;

672:             frame.to_share -= user_gain;

673:             totalInFrames -= user_gain;

674:             frame.staked -= user_stake;

676:             total_gain += user_gain;

679:         user.accruedGain += total_gain;

680:         totalAccruedGain += total_gain;

709:             left2send -= from_ag;

711:             sender.accruedGain -= from_ag;

712:             totalAccruedGain -= from_ag;

```

</details> 
 


 ### <a name="GAS-5"></a>[GAS-5]
 ### Use >= instead of > for gas efficiency
Using >= costs less gas than >. Consider using >= when appropriate.

*Instances (37)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

79:                 if (funds[h].round_time > rt) {

126:                 funds[funds[savva_cid].SLLeft].round_time >

225:         if (authorShare > 0) {

230:         if (nftShare > 0) {

251:                 funds[savva_cid].round_time > block.timestamp,

325:         if (prize > 0) {

330:         if (funds[h].amount > 0) {

374:             if (funds[h].round_time > block.timestamp) break; // Round is not finished yet

375:             if (funds[h].round_time > getRandom.getLastUpdateTime()) break; // Need to wait for new random

501:         require(total > 0, "Nothing to withdraw");

```

```solidity
File: ContentRegistry.sol

66:         require(bytes(guid).length > 0, "Guid can't be empty");

67:         require(bytes(domain).length > 0, "Domain can't be empty");

```

```solidity
File: ListMarket.sol

45:         require(msg.value > 0 && msg.value == prices[list_name], "Wrong price");  // allow more price also owner can change

```

```solidity
File: NFTMarketplace.sol

53:         require(price > 0, "Price must be greater than 0");

206:         require(price > 0, "Price must be greater than 0");

```

```solidity
File: SavvaFaucet.sol

139:             if (amount > 0 && amount <= tokensLeft) {

150:         if (tokensLeft > 0) {

```

```solidity
File: Staking.sol

165:         if (new_gain > 0) {

207:         require(amount > 0, "Cannot stake 0");

263:         if (balanceOf(msg.sender) == 0 && user.accruedGain > 0) {

294:         require(user.accruedGain > 0, "No gain to claim");

311:         require(user.accruedGain > 0, "No gain to compound");

327:         require(amount > 0, "Amount must be greater than 0");

358:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

373:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

380:         require(totalAmount > 0, "Nothing to claim");

385:             if (user.unstakeRequests[i].amount > 0) {

413:         require(amount > 0, "Amount must be greater than 0");

493:         require(payment.amount > 0, "No such payment");

574:             if (payment.amount > 0) {

605:             if (payment.amount > 0) {

627:         if (total > 0) {

705:         if (sender.accruedGain > 0) {

706:             uint256 from_ag = (left2send > sender.accruedGain)

719:         if (left2send > 0) {

```

```solidity
File: UserProfile.sol

35:                     (ch > 96 && ch < 123) || // a-z

36:                     (ch > 47 && ch < 58) ||  // 0-9

```

</details> 
 


 ### <a name="GAS-6"></a>[GAS-6]
 ### Using bools for storage incurs overhead
Use uint256(1) and uint256(2) for true/false to avoid a Gwarmaccess (100 gas), and to avoid Gsset (20000 gas) when changing from ‘false’ to ‘true’, after having been ‘true’ in the past. See [source](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/58f635312aa21f947cae5f8578638a85aa2519f5/contracts/security/ReentrancyGuard.sol#L23-L27).

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentRegistry.sol

40:     mapping(address => mapping(address => bool)) public allowed;

56:     mapping(address => mapping(address => bool)) public allowed;

```

```solidity
File: Promo.sol

612:     mapping(address => bool) public automatedMarketMakerPairs;

```

</details> 
 


 ### <a name="GAS-7"></a>[GAS-7]
 ### Cache array length outside of loop
If not cached, the solidity compiler will always read the length of the array during each iteration. That is, if it is a storage array, this is an extra sload operation (100 additional extra gas for each iteration except for the first) and if it is a memory array, this is an extra mload operation (3 additional gas for each iteration except for the first).

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

283:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

289:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

351:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

355:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

539:         for (uint256 i = 0; i < funds[savva_cid].contributors.length; i++) {

```

```solidity
File: ContentRegistry.sol

120:         for (uint256 i = 0; i < domains.length; i++) {

```

```solidity
File: NFTMarketplace.sol

66:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

181:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

```

```solidity
File: SavvaFaucet.sol

132:         for (uint256 i = 0; i < depositors.length; i++) {

```

```solidity
File: Staking.sol

356:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

371:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

384:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

444:             for (uint256 i = 0; i < s_author.patrons.length; i++) {

508:         for (uint256 i = 0; i < user.PayRecordsKeys.length; i++) {

570:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

601:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

```

```solidity
File: UserProfile.sol

32:         for (uint256 i; i < b.length; i++) {

```

```solidity
File: utils.sol

41:         for (uint256 i = 0; i < b.length; i++) {

```

</details> 
 


 ### <a name="GAS-8"></a>[GAS-8]
 ### Consider using assembly for simple zero checks to save gas
Using assembly for simple zero checks can save gas. Consider using assembly when appropriate.

*Instances (5)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

71:         if (SLRoot == 0) {     

377:             if (random == 0) {

```

```solidity
File: SavvaFaucet.sol

43:         if ( _round_seconds == 0 ) {  // non zero used for testing

57:         if (roundPayWeek == 0) {

95:         if (roundPayWeek == 0) {

```

</details> 
 


 ### <a name="GAS-9"></a>[GAS-9]
 ### Expressions for constant values should use immutable rather than constant

#### Impact:
While it doesnt save any gas because the compiler knows that developers often make this mistake, its still best to use the right tool for the task at hand. There is a difference between constant variables and immutable variables, and they should each be used in their appropriate contexts. constants should be used for literal values written into the code, and immutable variables should be used for expressions, or values calculated in, or passed into the constructor.  

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Promo.sol

600:     uint256 public constant DECIMALS = 18;

601:     uint256 public constant TOTAL_SUPPLY = 23383574 * 10 ** DECIMALS;

```

```solidity
File: SavvaFaucet.sol

16:     uint256 constant TOKENS_PER_ROUND = 240000 ether; // (in SAVVA) Approximately 5% per year initially

17:     uint256 constant STAKING_SHARE = 50; // 50% of the minted tokens go to staking contract

```

```solidity
File: SavvaToken.sol

17:     bytes32 private constant DELEGATION_TYPEHASH =

```

```solidity
File: Staking.sol

102:     uint256 constant SECONDS_PER_WEEK = 604800; //

103:     uint256 constant TOTAL_FRAMES = 32; // approximatly 8 months

104:     uint256 constant FRAME_MASK = 0x1F; // X & FRAME_MASK equals X % TOTAL_FRAMES

```

</details> 
 


 ### <a name="GAS-10"></a>[GAS-10]
 ### Constructors can be marked payable
Payable functions cost less gas to execute, since the compiler does not have to add extra checks to ensure that a payment wasn  t provided. A constructor can safely be marked as payable, since only the deployer would be able to pass funds, and the project itself would not pass any funds.

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

17:     constructor(address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: ContentFund.sol

64:     constructor(address _config) {

```

```solidity
File: ContentNFT.sol

21:     constructor(address _config) ERC721("Savva Content NFT", "CNFT") {

```

```solidity
File: ContentRegistry.sol

42:     constructor(address _config) {

```

```solidity
File: ListMarket.sol

19:     constructor(address _config, address _collector, address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: NFTMarketplace.sol

36:     constructor(address _config) {

```

```solidity
File: Promo.sol

57:     constructor() {

279:     constructor(string memory name_, string memory symbol_) {

614:     constructor(

```

```solidity
File: RandomOracle.sol

20:     constructor(address _initialOwner) Ownable(_initialOwner) {

```

```solidity
File: SavvaFaucet.sol

41:     constructor(address _config, address _token, uint256 _round_seconds) {

```

```solidity
File: SavvaToken.sol

20:     constructor(

```

```solidity
File: Staking.sol

93:     constructor(

```

</details> 
 


 ### <a name="GAS-11"></a>[GAS-11]
 ### Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (45)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

379:                 require(random != 0, "Random is zero");

391:         require(nftBalance[tokenId] > 0, "Nothing to withdraw");

501:         require(total > 0, "Nothing to withdraw");

```

```solidity
File: ContentNFT.sol

42:         require(msg.sender == author, "Only author can mint");

49:         require(msg.value == price, "Wrong price"); // allow more and return dust

64:         require(msg.sender == owner, "Only owner can burn");

```

```solidity
File: ContentRegistry.sol

66:         require(bytes(guid).length > 0, "Guid can't be empty");

67:         require(bytes(domain).length > 0, "Domain can't be empty");

92:         require(!exists, "NFT minted. Content change is not allowed.");

```

```solidity
File: ListMarket.sol

45:         require(msg.value > 0 && msg.value == prices[list_name], "Wrong price");  // allow more price also owner can change

```

```solidity
File: NFTMarketplace.sol

48:         require(nfts[tokenId].owner == address(0), "NFT already on market");

53:         require(price > 0, "Price must be greater than 0");

121:         require(nft.owner != address(0), "NFT not on market");

156:         require(nft.owner != address(0), "NFT not on market");

206:         require(price > 0, "Price must be greater than 0");

```

```solidity
File: Promo.sol

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

```solidity
File: SavvaFaucet.sol

164:         require(msg.sender == ORIGIN_ADDRESS, "Only origin can change origin");

```

```solidity
File: Staking.sol

207:         require(amount > 0, "Cannot stake 0");

294:         require(user.accruedGain > 0, "No gain to claim");

311:         require(user.accruedGain > 0, "No gain to compound");

327:         require(amount > 0, "Amount must be greater than 0");

328:         require(to != address(0) && to != msg.sender, "Invalid recipient");

333:         require(success, "Insufficient staked balance");

380:         require(totalAmount > 0, "Nothing to claim");

413:         require(amount > 0, "Amount must be greater than 0");

414:         require(author != address(0), "Invalid author");

438:             require(ok, "Insufficient staked balance");

463:                 require(ok, "Insufficient staked balance");

493:         require(payment.amount > 0, "No such payment");

```

```solidity
File: UserProfile.sol

28:         require(owners[name] == address(0), "Name already taken"); // unique name

56:         require(bytes(name).length != 0, "Name not set");

72:         require(bytes(name).length != 0, "Name not set");

73:         require(bytes(names[to]).length == 0, "Recipient already has a name");

```

</details> 
 


 ### <a name="GAS-12"></a>[GAS-12]
 ### Use assembly for small keccak256 hashes, in order to save gas
If the arguments to the encode call can fit into the scratch space (two words or fewer), then its more efficient to use assembly to generate the hash (80 gas): keccak256(abi.encodePacked(x, y)) -> assembly {mstore(0x00, a); mstore(0x20, b); let hash := keccak256(0x00, 0x40); }

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

382:                     keccak256(abi.encode(random ^ block.timestamp))

```

```solidity
File: Staking.sol

420:         bytes32 key = keccak256(

487:         bytes32 key = keccak256(

566:         bytes32 key = keccak256(

599:         bytes32 key = keccak256(abi.encodePacked(msg.sender, event_id, author));

```

```solidity
File: utils.sol

16:         return uint256(keccak256(abi.encodePacked(author, domain, guid)));

```

</details> 
 


 ### <a name="GAS-13"></a>[GAS-13]
 ### Reduce gas usage by moving to Solidity 0.8.19 or later
Solidity version 0.8.19 introduced a number of gas optimizations, refer to the [Solidity 0.8.19 Release Announcement](https://soliditylang.org/blog/2023/02/22/solidity-0.8.19-release-announcement) for details.

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentFund.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentNFT.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ContentRegistry.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: ListMarket.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: NFTMarketplace.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: Promo.sol

7: pragma solidity ^0.8.0;

34: pragma solidity ^0.8.0;

119: pragma solidity ^0.8.0;

200: pragma solidity ^0.8.0;

230: pragma solidity ^0.8.0;

595: pragma solidity ^0.8.0;

```

```solidity
File: RandomOracle.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: SavvaFaucet.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: SavvaToken.sol

8: pragma solidity ^0.8.18;

```

```solidity
File: Staking.sol

2: pragma solidity ^0.8.0;

```

```solidity
File: UserProfile.sol

7: pragma solidity ^0.8.18;

```

```solidity
File: utils.sol

7: pragma solidity ^0.8.18;

```

</details> 
 


 ### <a name="GAS-14"></a>[GAS-14]
 ### Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (13)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ListMarket.sol

27:     function setPrice(string memory list_name, uint256 price) public onlyOwner {

```

```solidity
File: Promo.sol

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

```solidity
File: RandomOracle.sol

24:     function setUpdaterAccount(address _updaterAccount) public onlyOwner {

```

```solidity
File: SavvaToken.sol

31:     function mint(uint256 amount) public override onlyOwner {

```

</details> 
 


 ### <a name="GAS-15"></a>[GAS-15]
 ### `++i` costs less gas than `i++`, especially when it's used in `for`-loops (`--i`/`i--` too)
*Saves 5 gas per loop*

*Instances (31)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

283:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

289:         for (uint256 i = 0; i < funds[h].contributors.length; i++) {

351:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

355:             for (uint256 j = 0; j < funds[h].contributors.length; j++) {

424:         for (uint256 i = 0; i < nft.balanceOf(owner); i++) {

430:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

449:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

455:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

477:         for (uint256 i = 0; i < nft.balanceOf(msg.sender); i++) {

488:         for (uint256 i = 0; i < nft.balanceOf(address(mp)); i++) {

539:         for (uint256 i = 0; i < funds[savva_cid].contributors.length; i++) {

```

```solidity
File: ContentRegistry.sol

120:         for (uint256 i = 0; i < domains.length; i++) {

```

```solidity
File: NFTMarketplace.sol

66:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

181:         for (uint256 i = 0; i < nftsByOwnerArray.length; i++) {

```

```solidity
File: SavvaFaucet.sol

132:         for (uint256 i = 0; i < depositors.length; i++) {

```

```solidity
File: Staking.sol

152:             currentFrameNumber++;

184:         for (uint256 i = 1; i < TOTAL_FRAMES; i++) {

356:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

371:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

384:         for (uint256 i = 0; i < user.unstakeRequests.length; i++) {

389:                 j++;

396:         for (uint256 i = 0; i < n_to_pop; i++) {

444:             for (uint256 i = 0; i < s_author.patrons.length; i++) {

508:         for (uint256 i = 0; i < user.PayRecordsKeys.length; i++) {

520:             for (uint256 i = 0; i < n_to_pop; i++) {

570:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

601:         for (uint256 i = 0; i < s_author.patrons.length; i++) {

650:         for (uint256 i = 1; i < TOTAL_FRAMES; i++) {

```

```solidity
File: UserProfile.sol

32:         for (uint256 i; i < b.length; i++) {

```

```solidity
File: utils.sol

24:         for (z = 0; z < 32; z++) {

41:         for (uint256 i = 0; i < b.length; i++) {

```

</details> 
 


 ### <a name="GAS-16"></a>[GAS-16]
 ### Using `private` rather than `public` for constants, saves gas
If needed, the values can be read from the verified contract source code, or if there are multiple values there can be a single getter function that [returns a tuple](https://github.com/code-423n4/2022-08-frax/blob/90f55a9ce4e25bceed3a74290b854341d8de6afa/src/contracts/FraxlendPair.sol#L156-L178) of the values of all currently-public constants. Saves **3406-3606 gas** in deployment gas due to the compiler not having to create non-payable getter functions for deployment calldata, not having to store the bytes of the value outside of where it's used, and not adding another entry to the method ID table

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Promo.sol

600:     uint256 public constant DECIMALS = 18;

601:     uint256 public constant TOTAL_SUPPLY = 23383574 * 10 ** DECIMALS;

```

</details> 
 


 ### <a name="GAS-17"></a>[GAS-17]
 ### require()/revert() strings longer than 32 bytes cost extra gas
Each extra memory word of bytes past the original 32 [incurs an MSTORE](https://gist.github.com/hrkrshnn/ee8fabd532058307229d65dcd5836ddc#consider-having-short-revert-strings) which costs 3 gas.

*Instances (27)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

250:             require(

379:                 require(random != 0, "Random is zero");

```

```solidity
File: ContentNFT.sol

42:         require(msg.sender == author, "Only author can mint");

49:         require(msg.value == price, "Wrong price"); // allow more and return dust

```

```solidity
File: ContentRegistry.sol

68:         require(

92:         require(!exists, "NFT minted. Content change is not allowed.");

```

```solidity
File: ListMarket.sol

45:         require(msg.value > 0 && msg.value == prices[list_name], "Wrong price");  // allow more price also owner can change

```

```solidity
File: NFTMarketplace.sol

53:         require(price > 0, "Price must be greater than 0");

85:         require(

122:         require(

136:         require(

157:         require(

170:         require(

206:         require(price > 0, "Price must be greater than 0");

```

```solidity
File: Promo.sol

425:         require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");

454:         require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");

508:         require(accountBalance >= amount, "ERC20: burn amount exceeds balance");

552:             require(currentAllowance >= amount, "ERC20: insufficient allowance");

```

```solidity
File: RandomOracle.sol

37:         require(

```

```solidity
File: SavvaFaucet.sol

88:         require(

```

```solidity
File: Staking.sol

207:         require(amount > 0, "Cannot stake 0");

294:         require(user.accruedGain > 0, "No gain to claim");

311:         require(user.accruedGain > 0, "No gain to compound");

333:         require(success, "Insufficient staked balance");

413:         require(amount > 0, "Amount must be greater than 0");

438:             require(ok, "Insufficient staked balance");

493:         require(payment.amount > 0, "No such payment");

```

</details> 
 


 ### <a name="GAS-18"></a>[GAS-18]
 ### Splitting require() statements that use && saves gas

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ListMarket.sol

45:         require(msg.value > 0 && msg.value == prices[list_name], "Wrong price");  // allow more price also owner can change

```

```solidity
File: Staking.sol

328:         require(to != address(0) && to != msg.sender, "Invalid recipient");

```

</details> 
 


 ### <a name="GAS-19"></a>[GAS-19]
 ### Structs can be packed into fewer storage slots
Each slot saved can avoid an extra Gsset (20000 gas) for the first setting of the struct. Subsequent reads as well as writes have smaller gas savings

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

20:     struct Fund {

```

```solidity
File: NFTMarketplace.sol

19:     struct NFT {

```

```solidity
File: Staking.sol

15:     struct UnstakeRequest {

20:     struct PayRecord {

28:     struct Staker {

106:     struct Frame {

```

</details> 
 


 ### <a name="GAS-20"></a>[GAS-20]
 ### Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency
Using uint256(1) and uint256(2) instead of true and false can save gas for certain changes. Consider using uint256(1)/uint256(2) when appropriate.

*Instances (20)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

129:                 return false;

138:                 return false;

142:         return true;

```

```solidity
File: ContentRegistry.sol

48:         allowed[msg.sender][allowed_address] = true;

53:         allowed[msg.sender][allowed_address] = false;

83:         bool exists = false;

89:             exists = true;

```

```solidity
File: Promo.sol

341:         return true;

364:         return true;

387:         return true;

405:         return true;

430:         return true;

```

```solidity
File: Staking.sol

443:             bool found = false;

446:                     found = true;

507:         bool found = false;

511:                 found = true;

690:             return false;

694:             return true;

721:                 return false;

726:         return true;

```

</details> 
 


 ### <a name="GAS-21"></a>[GAS-21]
 ### Usage of uints/ints smaller than 32 bytes (256 bits) incurs overhead
Using uints or ints smaller than 32 bytes (256 bits) can incur overhead. Consider using uint256 or int256 to avoid potential issues.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

191:         uint8 v,

```

```solidity
File: NFTMarketplace.sol

107:         uint8 v,

```

```solidity
File: Promo.sol

222:     function decimals() external view returns (uint8);

312:     function decimals() public view virtual override returns (uint8) {

```

```solidity
File: Staking.sol

230:         uint8 _v,

```

```solidity
File: UserProfile.sol

33:             uint8 ch = uint8(b[i]);

33:             uint8 ch = uint8(b[i]);

```

</details> 
 


 ### <a name="GAS-22"></a>[GAS-22]
 ### Use != 0 instead of > for unsigned integer comparison

*Instances (37)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: ContentFund.sol

79:                 if (funds[h].round_time > rt) {

126:                 funds[funds[savva_cid].SLLeft].round_time >

225:         if (authorShare > 0) {

230:         if (nftShare > 0) {

251:                 funds[savva_cid].round_time > block.timestamp,

325:         if (prize > 0) {

330:         if (funds[h].amount > 0) {

374:             if (funds[h].round_time > block.timestamp) break; // Round is not finished yet

375:             if (funds[h].round_time > getRandom.getLastUpdateTime()) break; // Need to wait for new random

501:         require(total > 0, "Nothing to withdraw");

```

```solidity
File: ContentRegistry.sol

66:         require(bytes(guid).length > 0, "Guid can't be empty");

67:         require(bytes(domain).length > 0, "Domain can't be empty");

```

```solidity
File: ListMarket.sol

45:         require(msg.value > 0 && msg.value == prices[list_name], "Wrong price");  // allow more price also owner can change

```

```solidity
File: NFTMarketplace.sol

53:         require(price > 0, "Price must be greater than 0");

206:         require(price > 0, "Price must be greater than 0");

```

```solidity
File: SavvaFaucet.sol

139:             if (amount > 0 && amount <= tokensLeft) {

150:         if (tokensLeft > 0) {

```

```solidity
File: Staking.sol

165:         if (new_gain > 0) {

207:         require(amount > 0, "Cannot stake 0");

263:         if (balanceOf(msg.sender) == 0 && user.accruedGain > 0) {

294:         require(user.accruedGain > 0, "No gain to claim");

311:         require(user.accruedGain > 0, "No gain to compound");

327:         require(amount > 0, "Amount must be greater than 0");

358:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

373:             if (request.amount > 0 && block.timestamp >= request.timestamp) {

380:         require(totalAmount > 0, "Nothing to claim");

385:             if (user.unstakeRequests[i].amount > 0) {

413:         require(amount > 0, "Amount must be greater than 0");

493:         require(payment.amount > 0, "No such payment");

574:             if (payment.amount > 0) {

605:             if (payment.amount > 0) {

627:         if (total > 0) {

705:         if (sender.accruedGain > 0) {

706:             uint256 from_ag = (left2send > sender.accruedGain)

719:         if (left2send > 0) {

```

```solidity
File: UserProfile.sol

35:                     (ch > 96 && ch < 123) || // a-z

36:                     (ch > 47 && ch < 58) ||  // 0-9

```

</details> 
 


 ### <a name="GAS-23"></a>[GAS-23]
 ### Optimize names to save gas
public/external function names and public member variable names can be optimized to save gas. See [this](https://gist.github.com/IllIllI000/a5d8b486a8259f9f77891a919febd1a9) link for an example of how it works. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save 128 gas each during deployment, and renaming functions to have lower method IDs will save 22 gas per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

*Instances (136)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Config.sol

13:     mapping(bytes32 => string) public config;

14:     mapping(bytes32 => uint256) public configUint;

15:     mapping(bytes32 => address) public configAddress;

62:     function set(bytes32 key, string memory value) public override {

73:     function get(bytes32 key) public view override returns (string memory) {

77:     function setUInt(bytes32 key, uint256 value) public override {

88:     function getUInt(bytes32 key) public view override returns (uint256) {

92:     function setAddr(bytes32 key, address value) public override {

103:     function getAddr(bytes32 key) public view override returns (address) {

```

```solidity
File: ContentFund.sol

58:     IConfig public config; // Config contract

59:     mapping(uint256 => Fund) public funds;

60:     mapping(uint256 => mapping(address => uint256)) public contributions;

61:     mapping(uint256 => uint256) public nftBalance; // NFT balance

62:     uint256 public SLRoot; // Sorted List root

194:     ) public payable {

208:     ) public payable {

413:     function getNFTCut(uint256 tokenId) public view returns (uint256) {

417:     function getTotalOwnerCut(address owner) public view returns (uint256) {

441:     function getMyNFTGain() public view returns (uint256) {

513:     ) public view returns (uint256) {

520:     ) public view returns (address) {

527:     ) public view returns (uint256) {

531:     function getFund(uint256 savva_cid) public view returns (Fund memory) {

537:     ) public view returns (uint256) {

```

```solidity
File: ContentNFT.sol

19:     IConfig public config;

41:     ) public payable {

87:     ) public view override(ERC721, ERC721URIStorage) returns (string memory) {

94:         public

```

```solidity
File: ContentRegistry.sol

39:     IConfig public config;

40:     mapping(address => mapping(address => bool)) public allowed;

56:     mapping(address => mapping(address => bool)) public allowed;

122:                 domains[i], // no check on length, if length is different, it will revert also if length is too long then this function will revert due to gas limit

```

```solidity
File: ListMarket.sol

14:     IConfig public config; // Config contract

15:     address payable public collector; // Payment collector

17:     mapping(string => uint256) public prices;

27:     function setPrice(string memory list_name, uint256 price) public onlyOwner {

32:     function getPrice(string memory list_name) public view returns (uint256) {

36:     function setCollector(address payable _collector) public onlyOwner {

44:     ) public payable {

```

```solidity
File: NFTMarketplace.sol

17:     IConfig public config; // Config contract

40:     mapping(uint256 => NFT) public nfts;

41:     mapping(address => uint256[]) public nftsByOwner;

95:     function getPrice(uint256 tokenId) public view returns (uint256) {

99:     function getNFTOwner(uint256 tokenId) public view returns (address) {

217:     ) external view returns (bytes4) {

```

```solidity
File: Promo.sol

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

```solidity
File: RandomOracle.sol

13:     uint256 public lastUpdateTime;

14:     uint256 public random; //@audit so random number is public

14:     uint256 public random; //@audit so random number is public

15:     address public updaterAccount;

16:     uint256 public db_index;  // index in DB where the prove is stored

24:     function setUpdaterAccount(address _updaterAccount) public onlyOwner {

28:     function getRandom() public view override returns (uint256) {

32:     function getLastUpdateTime() public view override returns (uint256) {

```

```solidity
File: SavvaFaucet.sol

19:     IConfig public config; // Config contract

20:     ISavvaToken public savvaToken; // Savva token contract

22:     mapping(address => uint256) public deposited;

23:     address[] public depositors;

25:     uint256 public lastRoundPayWeek = 0;

26:     uint256 public roundTotalDeposits = 0;

27:     uint256 public roundTokensToShare = 0;

28:     uint256 public roundPayWeek = 0;

30:     address payable public ORIGIN_ADDRESS =

37:     function getRoundLength() public view returns (uint256) {

54:     function TokensToShare() public view returns (uint256) {

71:     function IsRoundFinished() public view returns (bool) {

76:     function NumberOfDepositors() public view returns (uint256) {

80:     receive() external payable {

84:     function deposit() public payable {

```

```solidity
File: SavvaToken.sol

16:     IConfig public config;

31:     function mint(uint256 amount) public override onlyOwner {

```

```solidity
File: Staking.sol

13:     IConfig public config;

40:     uint256 public totalUnstaking;

41:     uint256 public totalAccruedGain;

42:     uint256 public totalInFrames;

44:     mapping(address => Staker) public stakers;

111:     Frame[TOTAL_FRAMES] public frames;

112:     uint256 public currentFrameNumber = 0;

114:     function getUnprocessedGane() external view returns (uint256) {

127:     function updatePool() public override {

175:     ) external view returns (uint256) {

322:     function getAccruedGain(address _user) external view returns (uint256) {

345:     ) external view returns (UnstakeRequest[] memory) {

351:     ) external view returns (uint256) {

539:     ) external view returns (bytes32[] memory) {

546:     ) external view returns (PayRecord memory) {

554:     ) external view returns (uint256) {

587:     function claimPayment(address author, bytes32 event_id) external override {

741:     ) public view override(ERC20Permit, Nonces) returns (uint256) {

```

```solidity
File: UserProfile.sol

10:     mapping(address => mapping(bytes32 => mapping(bytes32 => string))) public profileString;

11:     mapping(address => mapping(bytes32 => mapping(bytes32 => uint256))) public profileUInt;

13:     mapping(string => address) public owners; // name owners

14:     mapping(address => string) public names;

15:     mapping(address => string) public avatars;

107:     ) public view returns (string memory) {

115:     ) public view returns (uint256) {

```

```solidity
File: utils.sol

15:     ) public pure returns (uint256) {

20:     function concat(bytes32 a, bytes32 b) public pure returns (bytes32) {

36:     ) public pure returns (bytes32 result) {

```

</details> 
 

