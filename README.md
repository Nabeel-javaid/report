# Report


## Medium Issues


| |Issue|Instances|
|-|:-|:-:|
| [M-1](#M-1) | Centralization Risk for trusted owners | 50 |
| [M-2](#M-2) | Unsafe use of ERC20 transferFrom() | 3 |

## Low Issues


| |Issue|Instances|
|-|:-|:-:|
| [L-1](#L-1) | complex casting | 17 |
| [L-2](#L-2) | Functions calling contracts/addresses with transfer hooks are missing reentrancy guards | 1 |
| [L-3](#L-3) | decimals() is not a part of the ERC-20 standard | 3 |
| [L-4](#L-4) | Tokens may be minted to address(0x0) | 3 |
| [L-5](#L-5) | constructor/initialize function lacks parameter validation | 7 |
| [L-6](#L-6) | Do not use deprecated library functions | 1 |
| [L-7](#L-7) | Empty function body | 6 |
| [L-8](#L-8) | Initializers could be front-run | 7 |
| [L-9](#L-9) | safeApprove() is deprecated | 1 |
| [L-10](#L-10) | State variables not capped at reasonable values | 25 |
| [L-11](#L-11) | Some tokens may revert when large transfers are made | 2 |
| [L-12](#L-12) | Unsafe casting | 17 |
| [L-13](#L-13) | Unsafe ERC20 operation(s) | 7 |

## Non Critical Issues


| |Issue|Instances|
|-|:-|:-:|
| [NC-1](#NC-1) | Contracts should have full test coverage | 12 |
| [NC-2](#NC-2) | Consider adding formal verification proofs | 12 |
| [NC-3](#NC-3) | Large or complicated code bases should implement invariant tests | 12 |
| [NC-4](#NC-4) | Custom error has no error details | 1 |
| [NC-5](#NC-5) | Contract uses both require()/revert() as well as custom errors   | 1 |
| [NC-6](#NC-6) | Variables without visibility specifier | 20 |
| [NC-7](#NC-7) | Constants in comparisons should appear on the left side | 21 |
| [NC-8](#NC-8) | Contract declarations should have NatSpec @author annotations | 8 |
| [NC-9](#NC-9) | Contract declarations should have NatSpec @Title annotations | 8 |
| [NC-10](#NC-10) | NatSpec: Contract declarations should have @dev tags | 8 |
| [NC-11](#NC-11) | NatSpec: Contract declarations should have NatSpec descriptions | 8 |
| [NC-12](#NC-12) | NatSpec: Contract declarations should have @notice tags | 8 |
| [NC-13](#NC-13) | Consider adding a block/deny-list" | 10 |
| [NC-14](#NC-14) | Consider adding emergency-stop functionality | 8 |
| [NC-15](#NC-15) | Error declarations should have NatSpec descriptions | 2 |
| [NC-16](#NC-16) | Custom error has no error details | 2 |
| [NC-17](#NC-17) | Events are missing sender information | 3 |
| [NC-18](#NC-18) | NatSpec: Event declarations should have NatSpec descriptions | 23 |
| [NC-19](#NC-19) | NatSpec: function declarations should have NatSpec descriptions | 169 |
| [NC-20](#NC-20) | NatSpec: function declarations should have @Notice tags | 169 |
| [NC-21](#NC-21) | NatSpec: function declarations should have NatSpec descriptions | 169 |
| [NC-22](#NC-22) | If-statement can be converted to a ternary | 20 |
| [NC-23](#NC-23) | Consider combining multiple address/ID mappings into a single mapping of an address/ID to a struct | 2 |
| [NC-24](#NC-24) | Use of override is unnecessary | 57 |
| [NC-25](#NC-25) | Consider using descriptive constants when using 0 in the code | 29 |
| [NC-26](#NC-26) | Non-external/public variable names should begin with an underscore | 25 |
| [NC-27](#NC-27) | Return values of `approve()` not checked | 6 |
| [NC-28](#NC-28) | Setters should prevent re-setting of the same value | 18 |
| [NC-29](#NC-29) | Use the latest solidity version for deployment   | 12 |
| [NC-30](#NC-30) | Strings should use double quotes rather than single quotes | 2 |
| [NC-31](#NC-31) | Owner can renounce while system is paused | 6 |
| [NC-32](#NC-32) | Dont use _msgSender() if not supporting EIP-2771 | 63 |
| [NC-33](#NC-33) | Array indices should be referenced via enums rather than numeric literals | 1 |
| [NC-34](#NC-34) | Use assembly to emit events, in order to save gas | 28 |
| [NC-35](#NC-35) | Long revert strings | 14 |

## Gas Optimizations


| |Issue|Instances|
|-|:-|:-:|
| [GAS-1](#GAS-1) | Enable IR-based code generation | 12 |
| [GAS-2](#GAS-2) | Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18) | 4 |
| [GAS-3](#GAS-3) | Nesting if-statements is cheaper than using && | 23 |
| [GAS-4](#GAS-4) | Consider using = instead of += and -= for gas efficiency | 1 |
| [GAS-5](#GAS-5) | Use >= instead of > for gas efficiency | 1 |
| [GAS-6](#GAS-6) | Using bools for storage incurs overhead | 1 |
| [GAS-7](#GAS-7) | Consider using assembly for simple zero checks to save gas | 2 |
| [GAS-8](#GAS-8) | Expressions for constant values should use immutable rather than constant | 25 |
| [GAS-9](#GAS-9) | Constructors can be marked payable | 7 |
| [GAS-10](#GAS-10) | Use Custom Errors | 94 |
| [GAS-11](#GAS-11) | Initializers can be marked as payable to save deployment gas | 7 |
| [GAS-12](#GAS-12) | Use assembly for small keccak256 hashes, in order to save gas | 3 |
| [GAS-13](#GAS-13) | Reduce gas usage by moving to Solidity 0.8.19 or later | 12 |
| [GAS-14](#GAS-14) | Functions guaranteed to revert when called by normal users can be marked `payable` | 31 |
| [GAS-15](#GAS-15) | Using `private` rather than `public` for constants, saves gas | 25 |
| [GAS-16](#GAS-16) | require()/revert() strings longer than 32 bytes cost extra gas | 31 |
| [GAS-17](#GAS-17) | Splitting require() statements that use && saves gas | 1 |
| [GAS-18](#GAS-18) | Structs can be packed into fewer storage slots | 4 |
| [GAS-19](#GAS-19) | Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency | 9 |
| [GAS-20](#GAS-20) | Use != 0 instead of > for unsigned integer comparison | 1 |
| [GAS-21](#GAS-21) | Optimize names to save gas | 171 |

##################################################################### 
 
 DETAILED REPORT:: 


##################################################################### 


## Medium Issues


 ### <a name="M-1"></a>[M-1]
 ### Centralization Risk for trusted owners

#### Impact:
Contracts have owners with privileged rights to perform admin tasks and need to be trusted to not perform malicious updates or drain funds.

*Instances (50)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

171:     ) external virtual onlyRole(MINTER_ROLE) {

191:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

206:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

401:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: AssetFlowController.sol

508:     ) external virtual whenNotPaused onlyRole(OFFERER_ROLE) {

549:     function verifyOffer(uint256 offerId, string memory uri) external virtual whenNotPaused onlyRole(VERIFIER_ROLE) {

627:     function settle(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

714:     function rejectSettlement(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

746:     ) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

808:     ) external virtual whenNotPaused onlyRole(OFFERER_ROLE) {

839:     function acceptBuyOut(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

874:     function rejectBuyout(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

895:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

913:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

1077:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: AssetValuer.sol

142:     ) external virtual whenNotPaused onlyRole(VALUER_ROLE) {

157:     function pause() external onlyRole(PAUSER_ROLE) {

172:     function unpause() external onlyRole(PAUSER_ROLE) {

311:     function _authorizeUpgrade(address newImplementation) internal override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: Offer.sol

172:     function safeMint(address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) returns (uint256) {

194:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

209:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

454:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: Vault.sol

472:     ) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

499:     function deregisterInvestor(address investor) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) { //@audit check if investor is already registered

525:     ) external virtual whenNotPaused onlyRole(INVESTOR_ROLE) returns (uint256) {

556:     ) external virtual whenNotPaused onlyRole(ASSET_CONTROLLER_ROLE) returns (uint256) {

628:     ) external virtual whenNotPaused onlyRole(ASSET_CONTROLLER_ROLE) {

663:     ) external virtual whenNotPaused onlyRole(ASSET_CONTROLLER_ROLE) {

696:     ) external virtual whenNotPaused onlyRole(ASSET_CONTROLLER_ROLE) {

733:     ) external virtual whenNotPaused onlyRole(ASSET_CONTROLLER_ROLE) {

758:     ) external virtual whenNotPaused onlyRole(ASSET_CONTROLLER_ROLE) {

772:     function setMinDeposit(uint256 _minDeposit) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

792:     function setAssetValuer(address _assetValuer) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

809:     function requestWithdraw(uint256 amountAssets) external virtual whenNotPaused onlyRole(INVESTOR_ROLE) {

827:     function cancelRequest() external virtual whenNotPaused onlyRole(INVESTOR_ROLE) {

853:     ) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

867:     function cleanHoldings(bytes32[] memory holdingIds) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

889:     ) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

904:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

919:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

1057:         onlyRole(CONTRACT_ADMIN_ROLE)

1152:     ) public virtual override whenNotPaused onlyRole(INVESTOR_ROLE) returns (uint256) {

1401:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: VaultOfVault.sol

101:     ) external virtual whenNotPaused onlyRole(PARENT_ASSET_CONTROLLER) {

126:     ) external virtual whenNotPaused onlyRole(PARENT_ASSET_CONTROLLER) {

```

```solidity
File: Verifier.sol

153:     function safeMint(uint256 tokenId, address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) {

170:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

185:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

372:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

</details> 
 


 ### <a name="M-2"></a>[M-2]
 ### Unsafe use of ERC20 transferFrom()
Some tokens do not implement the ERC20 standard properly. For example Tether (USDT)'s transferFrom() function does not return a boolean as the ERC20 specification requires, and instead has no return value. When these sorts of tokens are cast to IERC20/ERC20, their function signatures do not match and therefore the calls made will revert. It is recommended to use the SafeERC20's safeTransferFrom() from OpenZeppelin instead.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Offer.sol

288:     function transferFrom(

293:         super.transferFrom(from, to, tokenId);

```

```solidity
File: interfaces/IOffer.sol

53:     function transferFrom(address from, address to, uint256 tokenId) external;

```

</details> 
 


## Low Issues


 ### <a name="L-1"></a>[L-1]
 ### complex casting
Consider whether the number of casts is really necessary, or whether using a different type would be more appropriate. Alternatively, add comments to explain in detail why the casts are necessary, and any implicit reasons why the cast does not introduce an overflow.

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

165:     function safeMint(

177:         _mint(to, id, numTokens, data); //@audit if to is a smart contract it must implement IERC1155Receiver

```

```solidity
File: AssetFlowController.sol

520:         uint256 offerId = offerCollection.safeMint(_msgSender(), uri); 

554:         verifiedOfferCollection.safeMint(offerId, address(vault), uri);

670:                 assetCollection.safeMint(offerId, address(this), details.numTokens, details.uri, "");

697:                 assetCollection.safeMint(offerId, address(vault), details.numTokens, details.uri, "");

1065:         assetCollection.safeMint(offerId, address(vault), buyOut.numTokens, "", "");

```

```solidity
File: Offer.sol

172:     function safeMint(address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) returns (uint256) {

175:         _safeMint(to, tokenId);

```

```solidity
File: Vault.sol

578:         _mint(receiver, shares);

1160:     function mint(uint256, address) public virtual override returns (uint256) {

1288:         _mint(receiver, shares);

```

```solidity
File: Verifier.sol

153:     function safeMint(uint256 tokenId, address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) {

155:         _safeMint(to, tokenId); // re-entrancy attack

```

```solidity
File: interfaces/IAsset.sol

50:     function safeMint(uint256 id, address to, uint256 numTokens, string memory uri_, bytes memory data) external;

```

```solidity
File: interfaces/IOffer.sol

40:     function safeMint(address to, string memory uri) external returns (uint256);

```

```solidity
File: interfaces/IVerifier.sol

33:     function safeMint(uint256 tokenId, address to, string memory uri) external;

```

</details> 
 


 ### <a name="L-2"></a>[L-2]
 ### Functions calling contracts/addresses with transfer hooks are missing reentrancy guards
Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks will open the users of this protocol up to [read-only reentrancies](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) with no way to protect against it, except by block-listing the whole protocol.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Offer.sol

293:         super.transferFrom(from, to, tokenId);

```

</details> 
 


 ### <a name="L-3"></a>[L-3]
 ### decimals() is not a part of the ERC-20 standard
The name() function is not a part of the ERC-20 standard, and was added later as an optional extension. As such, some valid ERC20 tokens do not support this interface, so it is unsafe to blindly cast all tokens to this interface, and then call this function.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

1019:                         10 ** IERC20MetadataUpgradeable(assetAddress).decimals(),

```

```solidity
File: AssetValuer.sol

339:                         10 ** IERC20MetadataUpgradeable(holding.collection).decimals()

```

```solidity
File: Vault.sol

565:                 10 ** IERC20MetadataUpgradeable(assetAddress).decimals()

```

</details> 
 


 ### <a name="L-4"></a>[L-4]
 ### Tokens may be minted to address(0x0)
Neither the  functions, nor _mint() prevent minting to address(0x0)  

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

177:         _mint(to, id, numTokens, data); //@audit if to is a smart contract it must implement IERC1155Receiver

```

```solidity
File: Vault.sol

578:         _mint(receiver, shares);

1288:         _mint(receiver, shares);

```

</details> 
 


 ### <a name="L-5"></a>[L-5]
 ### constructor/initialize function lacks parameter validation
Constructors and initialization functions play a critical role in contracts by setting important initial states when the contract is first deployed before the system starts. The parameters passed to the constructor and initialization functions directly affect the behavior of the contract / protocol. If incorrect parameters are provided, the system may fail to run, behave abnormally, be unstable, or lack security. Therefore, it's crucial to carefully check each parameter in the constructor and initialization functions. If an exception is found, the transaction should be rolled back.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

110:     function initialize(

```

```solidity
File: AssetFlowController.sol

439:     function initialize(

```

```solidity
File: AssetValuer.sol

99:     function initialize(address pauserRole, address upgraderRole, address valuerRole) external initializer {

```

```solidity
File: Offer.sol

115:     function initialize(

```

```solidity
File: Vault.sol

363:     function initialize(

```

```solidity
File: VaultOfVault.sol

70:     function initialize(

```

```solidity
File: Verifier.sol

103:     function initialize(

```

</details> 
 


 ### <a name="L-6"></a>[L-6]
 ### Do not use deprecated library functions

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Vault.sol

760:         IERC20Upgradeable(asset()).safeApprove(spender, amount);

```

</details> 
 


 ### <a name="L-7"></a>[L-7]
 ### Empty function body
Consider adding a comment about why the function body is empty

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

401:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: AssetFlowController.sol

1077:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: AssetValuer.sol

311:     function _authorizeUpgrade(address newImplementation) internal override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: Offer.sol

454:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: Vault.sol

1401:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: Verifier.sol

372:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

</details> 
 


 ### <a name="L-8"></a>[L-8]
 ### Initializers could be front-run
Initializers could be front-run, allowing an attacker to either set their own values, take ownership of the contract, and in the best case forcing a re-deployment

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

110:     function initialize(

```

```solidity
File: AssetFlowController.sol

439:     function initialize(

```

```solidity
File: AssetValuer.sol

99:     function initialize(address pauserRole, address upgraderRole, address valuerRole) external initializer {

```

```solidity
File: Offer.sol

115:     function initialize(

```

```solidity
File: Vault.sol

363:     function initialize(

```

```solidity
File: VaultOfVault.sol

70:     function initialize(

```

```solidity
File: Verifier.sol

103:     function initialize(

```

</details> 
 


 ### <a name="L-9"></a>[L-9]
 ### safeApprove() is deprecated
Deprecated in favor of safeIncreaseAllowance() and safeDecreaseAllowance(). If only setting the initial allowance to the value that means infinite, safeIncreaseAllowance() can be used instead. The function may currently work, but if a bug is found in this version of OpenZeppelin, and the version that you are forced to upgrade to no longer has this function, you will encounter unnecessary delays in porting and testing replacement contracts.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Vault.sol

760:         IERC20Upgradeable(asset()).safeApprove(spender, amount);

```

</details> 
 


 ### <a name="L-10"></a>[L-10]
 ### State variables not capped at reasonable values
Consider adding minimum/maximum value checks to ensure that the state variables below can never be used to excessively harm users, including via griefing

*Instances (25)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

76:         bool isExistingAsset;

77:         bool isSeeding;

78:         address assetAddress; // if existing Asset

79:         uint256 assetTokenId; // if existing Asset

93:         uint256 settlementPrice;

94:         uint256 numTokens;

95:         string uri;

96:         address recipient; // Functionally we don't need this but it has some security benefits. You can use ownerOf on

110:         uint256 numTokens;

111:         uint256 amount;

112:         address broker;

113:         BuyOutBy who;

```

```solidity
File: AssetValuer.sol

239:         uint256 vaultValuation;

245:         return vaultValuation;

322:         uint256 numTokensHeld;

323:         uint256 valuation;

354: 

```

```solidity
File: Offer.sol

180:         return tokenId;

462:         return baseURI;

```

```solidity
File: Vault.sol

560:         uint256 assets;

598: 

```

```solidity
File: Verifier.sol

380:         return baseURI;

```

```solidity
File: interfaces/IVault.sol

38:         uint256 id;

39:         address collection;

40:         AssetType assetType;

```

</details> 
 


 ### <a name="L-11"></a>[L-11]
 ### Some tokens may revert when large transfers are made
Tokens such as COMP or UNI will revert when an address balance reaches type(uint96).max. Ensure that the calls below can be broken up into smaller batches if necessary.  

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Vault.sol

668:         IERC20Upgradeable(erc20Address).safeTransfer(to, amount);

1266:         SafeERC20Upgradeable.safeTransfer(IERC20Upgradeable(asset()), receiver, assets);

```

</details> 
 


 ### <a name="L-12"></a>[L-12]
 ### Unsafe casting
Unsafe casting can cause alot of issues especially when a type is downcast to a smaller type, the higher order bits are truncated, effectively applying a modulo to the original value. Without any other checks, this wrapping will lead to unexpected behavior and bugs

*Instances (17)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

165:     function safeMint(

177:         _mint(to, id, numTokens, data); //@audit if to is a smart contract it must implement IERC1155Receiver

```

```solidity
File: AssetFlowController.sol

520:         uint256 offerId = offerCollection.safeMint(_msgSender(), uri); 

554:         verifiedOfferCollection.safeMint(offerId, address(vault), uri);

670:                 assetCollection.safeMint(offerId, address(this), details.numTokens, details.uri, "");

697:                 assetCollection.safeMint(offerId, address(vault), details.numTokens, details.uri, "");

1065:         assetCollection.safeMint(offerId, address(vault), buyOut.numTokens, "", "");

```

```solidity
File: Offer.sol

172:     function safeMint(address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) returns (uint256) {

175:         _safeMint(to, tokenId);

```

```solidity
File: Vault.sol

578:         _mint(receiver, shares);

1160:     function mint(uint256, address) public virtual override returns (uint256) {

1288:         _mint(receiver, shares);

```

```solidity
File: Verifier.sol

153:     function safeMint(uint256 tokenId, address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) {

155:         _safeMint(to, tokenId); // re-entrancy attack

```

```solidity
File: interfaces/IAsset.sol

50:     function safeMint(uint256 id, address to, uint256 numTokens, string memory uri_, bytes memory data) external;

```

```solidity
File: interfaces/IOffer.sol

40:     function safeMint(address to, string memory uri) external returns (uint256);

```

```solidity
File: interfaces/IVerifier.sol

33:     function safeMint(uint256 tokenId, address to, string memory uri) external;

```

</details> 
 


 ### <a name="L-13"></a>[L-13]
 ### Unsafe ERC20 operation(s)

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

1025:             if (isSeeding) token.approve(address(vault), amount);

```

```solidity
File: Offer.sol

244:         super.approve(to, tokenId);

293:         super.transferFrom(from, to, tokenId);

```

```solidity
File: Vault.sol

980:         return super.approve(spender, amount);

```

```solidity
File: VaultOfVault.sol

105:         IERC20Upgradeable(asset()).approve(vaultToDepositInto, assets);     

130:         IVault(vaultToWithdrawFrom).approve(vaultToWithdrawFrom, assets);

```

```solidity
File: Verifier.sol

222:         super.approve(to, tokenId);

```

</details> 
 


## Non Critical Issues


 ### <a name="NC-1"></a>[NC-1]
 ### Contracts should have full test coverage
While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

2: pragma solidity 0.8.19;

```

```solidity
File: AssetFlowController.sol

2: pragma solidity 0.8.19;

```

```solidity
File: AssetValuer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Offer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Vault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: VaultOfVault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Verifier.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IAsset.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IAssetValuer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IOffer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IVault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IVerifier.sol

2: pragma solidity 0.8.19;

```

</details> 
 


 ### <a name="NC-2"></a>[NC-2]
 ### Consider adding formal verification proofs
Consider using formal verification to mathematically prove that your code does what is intended, and does not have any edge cases with unexpected behavior. The solidity compiler itself has this functionality [built in](https://docs.soliditylang.org/en/latest/smtchecker.html#smtchecker-and-formal-verification)  

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

2: pragma solidity 0.8.19;

```

```solidity
File: AssetFlowController.sol

2: pragma solidity 0.8.19;

```

```solidity
File: AssetValuer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Offer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Vault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: VaultOfVault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Verifier.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IAsset.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IAssetValuer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IOffer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IVault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IVerifier.sol

2: pragma solidity 0.8.19;

```

</details> 
 


 ### <a name="NC-3"></a>[NC-3]
 ### Large or complicated code bases should implement invariant tests
Large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts, should implement [invariant fuzzing tests](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05). Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold. Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers, with properly and extensively-written invariants, can close this testing gap significantly.  

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

2: pragma solidity 0.8.19;

```

```solidity
File: AssetFlowController.sol

2: pragma solidity 0.8.19;

```

```solidity
File: AssetValuer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Offer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Vault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: VaultOfVault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Verifier.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IAsset.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IAssetValuer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IOffer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IVault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IVerifier.sol

2: pragma solidity 0.8.19;

```

</details> 
 


 ### <a name="NC-4"></a>[NC-4]
 ### Custom error has no error details

#### Impact:
Defining custom errors without error details can make error messages less informative.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Vault.sol

182:     error FunctionNotSupported();

```

</details> 
 


 ### <a name="NC-5"></a>[NC-5]
 ### Contract uses both require()/revert() as well as custom errors  

#### Impact:
Consider using just one method in a single file

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Vault.sol

182:     error FunctionNotSupported();

```

</details> 
 


 ### <a name="NC-6"></a>[NC-6]
 ### Variables without visibility specifier

#### Impact:
Specifying visibility for variables can improve code readability and maintainability.

*Instances (20)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

76:         bool isExistingAsset;

77:         bool isSeeding;

78:         address assetAddress; // if existing Asset

79:         uint256 assetTokenId; // if existing Asset

93:         uint256 settlementPrice;

94:         uint256 numTokens;

95:         string uri;

96:         address recipient; // Functionally we don't need this but it has some security benefits. You can use ownerOf on

110:         uint256 numTokens;

111:         uint256 amount;

112:         address broker;

936:         for (uint256 i; i < numOffers; ++i) {

```

```solidity
File: AssetValuer.sol

239:         uint256 vaultValuation;

242:         for (uint256 i; i < numHoldings; ++i) {

322:         uint256 numTokensHeld;

323:         uint256 valuation;

```

```solidity
File: Vault.sol

560:         uint256 assets;

869:         for (uint256 i; i < numHoldings; ++i) {

```

```solidity
File: interfaces/IVault.sol

38:         uint256 id;

39:         address collection;

```

</details> 
 


 ### <a name="NC-7"></a>[NC-7]
 ### Constants in comparisons should appear on the left side

#### Impact:
Placing constants on the left side of comparisons can improve code readability and prevent accidental assignment. Doing so will prevent typo [bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*Instances (21)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

852:         if (buyOut.who == BuyOutBy.ASSET_OWNER) {

1001:         if (assetType == IVault.AssetType.ERC721) {

1006:         } else if (assetType == IVault.AssetType.ERC1155) {

1013:             if (assetAddress != vault.asset()) {

```

```solidity
File: AssetValuer.sol

324:         if (holding.assetType == IVault.AssetType.ERC1155) {

326:             if (numTokensHeld != 0) valuation = (valuations[key] * numTokensHeld);

327:         } else if (holding.assetType == IVault.AssetType.ERC721) {

329:             if (tokenOwner == address(vault)) valuation = valuations[key];

330:         } else if (holding.assetType == IVault.AssetType.ERC20) {

332:             if (numTokensHeld != 0) {

333:                 if (holding.collection == vault.asset()) {

343:         } else if (holding.assetType == IVault.AssetType.VaultToken) {

348:             if (numTokensHeld != 0) {

```

```solidity
File: Vault.sol

561:         if (assetType == AssetType.ERC20) {

580:         if (assetType == AssetType.ERC721) {

583:         } else if (assetType == AssetType.ERC1155) {

592:         } else if (assetType == AssetType.ERC20 || assetType == AssetType.VaultToken) {

670:         if (balance == 0) _removeHolding(0, erc20Address);

1261:         if (caller != owner) {

1355:         if (holdingId == _genHoldingId(0, asset())) return; // Don't remove base asset

```

```solidity
File: VaultOfVault.sol

134:         if (balance == 0) _removeHolding(0, vaultToWithdrawFrom);

```

</details> 
 


 ### <a name="NC-8"></a>[NC-8]
 ### Contract declarations should have NatSpec @author annotations

#### Impact:
Adding a NatSpec @author annotation to contract declarations can improve code documentation.

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

20: contract Asset is

177:         _mint(to, id, numTokens, data); //@audit if to is a smart contract it must implement IERC1155Receiver

```

```solidity
File: AssetFlowController.sol

40: contract AssetFlowController is

```

```solidity
File: AssetValuer.sol

23: contract AssetValuer is Initializable, PausableUpgradeable, AccessControlUpgradeable, UUPSUpgradeable, IAssetValuer {

```

```solidity
File: Offer.sol

23: contract Offer is

```

```solidity
File: Vault.sol

36: contract Vault is

```

```solidity
File: VaultOfVault.sol

28: contract VaultOfVault is Vault {

```

```solidity
File: Verifier.sol

22: contract Verifier is

```

</details> 
 


 ### <a name="NC-9"></a>[NC-9]
 ### Contract declarations should have NatSpec @Title annotations

#### Impact:
Adding a NatSpec @Title annotation to contract declarations can improve code documentation.

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

20: contract Asset is

177:         _mint(to, id, numTokens, data); //@audit if to is a smart contract it must implement IERC1155Receiver

```

```solidity
File: AssetFlowController.sol

40: contract AssetFlowController is

```

```solidity
File: AssetValuer.sol

23: contract AssetValuer is Initializable, PausableUpgradeable, AccessControlUpgradeable, UUPSUpgradeable, IAssetValuer {

```

```solidity
File: Offer.sol

23: contract Offer is

```

```solidity
File: Vault.sol

36: contract Vault is

```

```solidity
File: VaultOfVault.sol

28: contract VaultOfVault is Vault {

```

```solidity
File: Verifier.sol

22: contract Verifier is

```

</details> 
 


 ### <a name="NC-10"></a>[NC-10]
 ### NatSpec: Contract declarations should have @dev tags

#### Impact:
@dev is used to explain extra details to developers

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

20: contract Asset is

177:         _mint(to, id, numTokens, data); //@audit if to is a smart contract it must implement IERC1155Receiver

```

```solidity
File: AssetFlowController.sol

40: contract AssetFlowController is

```

```solidity
File: AssetValuer.sol

23: contract AssetValuer is Initializable, PausableUpgradeable, AccessControlUpgradeable, UUPSUpgradeable, IAssetValuer {

```

```solidity
File: Offer.sol

23: contract Offer is

```

```solidity
File: Vault.sol

36: contract Vault is

```

```solidity
File: VaultOfVault.sol

28: contract VaultOfVault is Vault {

```

```solidity
File: Verifier.sol

22: contract Verifier is

```

</details> 
 


 ### <a name="NC-11"></a>[NC-11]
 ### NatSpec: Contract declarations should have NatSpec descriptions
e.g. @dev or @notice, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

20: contract Asset is

177:         _mint(to, id, numTokens, data); //@audit if to is a smart contract it must implement IERC1155Receiver

```

```solidity
File: AssetFlowController.sol

40: contract AssetFlowController is

```

```solidity
File: AssetValuer.sol

23: contract AssetValuer is Initializable, PausableUpgradeable, AccessControlUpgradeable, UUPSUpgradeable, IAssetValuer {

```

```solidity
File: Offer.sol

23: contract Offer is

```

```solidity
File: Vault.sol

36: contract Vault is

```

```solidity
File: VaultOfVault.sol

28: contract VaultOfVault is Vault {

```

```solidity
File: Verifier.sol

22: contract Verifier is

```

</details> 
 


 ### <a name="NC-12"></a>[NC-12]
 ### NatSpec: Contract declarations should have @notice tags
@notice is used to explain to end users what the contract does, and the compiler interprets /// or /** comments as this tag if one wasnt explicitly provided

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

20: contract Asset is

177:         _mint(to, id, numTokens, data); //@audit if to is a smart contract it must implement IERC1155Receiver

```

```solidity
File: AssetFlowController.sol

40: contract AssetFlowController is

```

```solidity
File: AssetValuer.sol

23: contract AssetValuer is Initializable, PausableUpgradeable, AccessControlUpgradeable, UUPSUpgradeable, IAssetValuer {

```

```solidity
File: Offer.sol

23: contract Offer is

```

```solidity
File: Vault.sol

36: contract Vault is

```

```solidity
File: VaultOfVault.sol

28: contract VaultOfVault is Vault {

```

```solidity
File: Verifier.sol

22: contract Verifier is

```

</details> 
 


 ### <a name="NC-13"></a>[NC-13]
 ### Consider adding a block/deny-list"
Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens  

*Instances (10)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

20: contract Asset is

177:         _mint(to, id, numTokens, data); //@audit if to is a smart contract it must implement IERC1155Receiver

```

```solidity
File: AssetFlowController.sol

40: contract AssetFlowController is

```

```solidity
File: AssetValuer.sol

23: contract AssetValuer is Initializable, PausableUpgradeable, AccessControlUpgradeable, UUPSUpgradeable, IAssetValuer {

```

```solidity
File: Offer.sol

23: contract Offer is

```

```solidity
File: Vault.sol

36: contract Vault is

1335:         require(hasRole(WHITELISTED_CONTRACT, collection), "V:Contract not whitelisted");

```

```solidity
File: VaultOfVault.sol

28: contract VaultOfVault is Vault {

129:         require(hasRole(WHITELISTED_CONTRACT, vaultToWithdrawFrom), "VOV: Contract not whitelisted");

```

```solidity
File: Verifier.sol

22: contract Verifier is

```

</details> 
 


 ### <a name="NC-14"></a>[NC-14]
 ### Consider adding emergency-stop functionality

#### Impact:
Adding a way to quickly halt protocol functionality in an emergency, rather than having to pause individual contracts one-by-one, will make in-progress hack mitigation faster and much less stressful.

*Instances (8)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

20: contract Asset is

177:         _mint(to, id, numTokens, data); //@audit if to is a smart contract it must implement IERC1155Receiver

```

```solidity
File: AssetFlowController.sol

40: contract AssetFlowController is

```

```solidity
File: AssetValuer.sol

23: contract AssetValuer is Initializable, PausableUpgradeable, AccessControlUpgradeable, UUPSUpgradeable, IAssetValuer {

```

```solidity
File: Offer.sol

23: contract Offer is

```

```solidity
File: Vault.sol

36: contract Vault is

```

```solidity
File: VaultOfVault.sol

28: contract VaultOfVault is Vault {

```

```solidity
File: Verifier.sol

22: contract Verifier is

```

</details> 
 


 ### <a name="NC-15"></a>[NC-15]
 ### Error declarations should have NatSpec descriptions

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

847:             diff <= 10 ** 6, // Max acceptable rounding error $1

```

```solidity
File: Vault.sol

182:     error FunctionNotSupported();

```

</details> 
 


 ### <a name="NC-16"></a>[NC-16]
 ### Custom error has no error details
Custom errors should have a description of the error. This is used to explain to end users what the error means. 

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

847:             diff <= 10 ** 6, // Max acceptable rounding error $1

```

```solidity
File: Vault.sol

182:     error FunctionNotSupported();

```

</details> 
 


 ### <a name="NC-17"></a>[NC-17]
 ### Events are missing sender information

#### Impact:
Including msg.sender in events triggered by user actions can make events more useful for end users.

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Vault.sol

759:         emit FundAllocationApproved(spender, amount);

1268:         emit Withdraw(caller, receiver, owner, assets, shares);

1287:         emit Deposit(caller, receiver, assets, shares);

```

</details> 
 


 ### <a name="NC-18"></a>[NC-18]
 ### NatSpec: Event declarations should have NatSpec descriptions

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

273:     event OfferSubmitted(address indexed caller, uint256 indexed offerId, string uri, OfferExtendedDetails details);

283:     event OfferVerified(address indexed caller, uint256 indexed offerId, string uri);

295:     event SettlementSubmitted(

314:     event AssetSettled(

332:     event SettlementRejected(address indexed caller, uint256 indexed offerId, Settlement settlement);

343:     event BuyOutSubmitted(

363:     event BuyOutAccepted(

380:     event BuyOutRejected(address indexed caller, uint256 indexed offerId);

390:     event RentPriceSet(address indexed caller, bytes32 indexed assetKey, uint256 rentPrice);

400:     event RentPaid(address indexed caller, bytes32 indexed assetKey, uint256 rentPrice, string tag);

```

```solidity
File: Vault.sol

196:     event AssetDeposited(

210:     event AssetValuerSet(address indexed caller, address indexed assetValuer);

219:     event InvestorRegistered(address indexed caller, address indexed investor, uint256 depositMax);

227:     event InvestorDeregistered(address indexed caller, address indexed investor);

236:     event FundAllocationApproved(address indexed spender, uint256 amountAsset);

247:     event FundsTransferred(

261:     event MinDepositSet(address indexed caller, uint256 minDeposit);

271:     event MaxDepositSet(address indexed caller, address indexed investor, uint256 depositMax);

279:     event WithdrawRequested(address indexed investor, uint256 amountAsset);

287:     event RequestCancelled(address indexed investor, uint256 amountOfAssetBefore);

299:     event TokenReceived(

319:     event VaultHoldingsUpdated(

```

```solidity
File: interfaces/IAssetValuer.sol

22:     event AssetValued(address indexed sender, address indexed collection, uint256 indexed tokenId, uint256 amount);

```

</details> 
 


 ### <a name="NC-19"></a>[NC-19]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (169)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

110:     function initialize(

165:     function safeMint(

191:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

206:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

228:     function safeTransferFrom(

252:     function burn(

272:     function setApprovalForAll(address operator, bool approved) public virtual override whenNotPaused {

283:     function renounceRole(bytes32, address) public virtual override {

295:     function supportsInterface(

311:     function exists(uint256 id) public view virtual override(ERC1155SupplyUpgradeable, IAsset) returns (bool) {

326:     function balanceOf(

342:     function uri(

374:     function _beforeTokenTransfer(

401:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: AssetFlowController.sol

439:     function initialize(

505:     function submitOffer(

549:     function verifyOffer(uint256 offerId, string memory uri) external virtual whenNotPaused onlyRole(VERIFIER_ROLE) {

585:     function submitSettlement(

627:     function settle(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

714:     function rejectSettlement(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

742:     function setRentPrice(

773:     function payRent(uint256 id, address collection, string memory tag) external virtual whenNotPaused {

803:     function submitBuyOut(

839:     function acceptBuyOut(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

874:     function rejectBuyout(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

895:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

913:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

923:     function getOfferOwner(uint256 offerId) external view virtual returns (address) {

932:     function getOffers() external view virtual returns (uint256[] memory, address[] memory) {

942:     function onERC1155Received(address, address, uint256, uint256, bytes memory) public virtual returns (bytes4) {

953:     function renounceRole(bytes32, address) public virtual override {

966:     function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {

991:     function _collectAsset(

1046:     function _sellToAssetOwner(uint256 offerId, BuyOutDetails memory buyOut) internal virtual {

1063:     function _buyFromAssetOwner(uint256 offerId, BuyOutDetails memory buyOut) internal virtual {

1077:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

1086:     function _genHoldingId(uint256 id, address collection) internal pure virtual returns (bytes32) {

```

```solidity
File: AssetValuer.sol

99:     function initialize(address pauserRole, address upgraderRole, address valuerRole) external initializer {

138:     function setValuation(

157:     function pause() external onlyRole(PAUSER_ROLE) {

172:     function unpause() external onlyRole(PAUSER_ROLE) {

185:     function getValuation(address collection, uint256 tokenId) external view virtual returns (uint256) {

197:     function getValuation(bytes32 key) external view virtual returns (uint256) {

208:     function getAssetValuation(IVault vault, bytes32 key) external view virtual returns (uint256) {

220:     function getAssetValuation(

238:     function getVaultValuation(IVault vault) external view virtual returns (uint256) {

255:     function renounceRole(bytes32, address) public virtual override {

267:     function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {

289:     function _setValuation(address collection, uint256 tokenId, uint256 value) internal virtual {

311:     function _authorizeUpgrade(address newImplementation) internal override onlyRole(UPGRADER_ROLE) {}

320:     function _getAssetValuation(IVault vault, bytes32 key) internal view virtual returns (uint256) {

365:     function _genHoldingId(uint256 id, address collection) internal pure virtual returns (bytes32) {

```

```solidity
File: Offer.sol

115:     function initialize(

150:     function renounceRole(bytes32, address) public virtual override {

172:     function safeMint(address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) returns (uint256) {

194:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

209:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

219:     function exists(uint256 tokenId) external view virtual returns (bool) {

240:     function approve(

261:     function setApprovalForAll(

288:     function transferFrom(

312:     function safeTransferFrom(

330:     function isApprovedForAll(

346:     function ownerOf(

360:     function tokenURI(

374:     function supportsInterface(

414:     function _beforeTokenTransfer(

436:     function _burn(uint256 tokenId) internal virtual override(ERC721Upgradeable, ERC721URIStorageUpgradeable) {

454:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

461:     function _baseURI() internal view virtual override returns (string memory) {

```

```solidity
File: Vault.sol

363:     function initialize(

399:     function __Vault_init(

445:     function renounceRole(bytes32, address) public virtual override {

469:     function registerInvestor(

499:     function deregisterInvestor(address investor) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) { //@audit check if investor is already registered

521:     function safeDeposit(

550:     function depositAsset(

624:     function transferFundsFrom(

658:     function transferFundsTo(

692:     function transferERC721(

727:     function transferERC1155(

755:     function approveFundAllocation(

772:     function setMinDeposit(uint256 _minDeposit) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

792:     function setAssetValuer(address _assetValuer) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

809:     function requestWithdraw(uint256 amountAssets) external virtual whenNotPaused onlyRole(INVESTOR_ROLE) {

827:     function cancelRequest() external virtual whenNotPaused onlyRole(INVESTOR_ROLE) {

849:     function addHolding(

867:     function cleanHoldings(bytes32[] memory holdingIds) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

886:     function setMaxDeposit(

904:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

919:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

929:     function getHoldings() external view virtual returns (bytes32[] memory) {

939:     function getHoldingDetails(bytes32 holdingId) external view virtual returns (Holding memory) {

951:     function getHoldingId(address collection, uint256 tokenId) external view virtual returns (bytes32) {

976:     function approve(

997:     function increaseAllowance(

1019:     function decreaseAllowance(

1048:     function withdraw(

1071:     function redeem(uint256, address, address) public virtual override returns (uint256) {

1097:     function onERC1155Received(

1123:     function onERC721Received(

1149:     function deposit(

1160:     function mint(uint256, address) public virtual override returns (uint256) {

1172:     function supportsInterface(

1194:     function totalAssets() public view virtual override(ERC4626Upgradeable, IVault) returns (uint256) {

1208:     function maxDeposit(address investor) public view virtual override returns (uint256) {

1221:     function asset() public view virtual override(ERC4626Upgradeable, IVault) returns (address) {

1232:     function hasRole(

1254:     function _withdraw(

1284:     function _deposit(address caller, address receiver, uint256 assets, uint256 shares) internal virtual override {

1302:     function _setMinDeposit(uint256 _minDeposit) internal virtual {

1315:     function _setMaxDeposit(address investor, uint256 depositMax) internal virtual {

1334:     function _addHoldings(uint256 id, address collection, AssetType assetType) internal virtual {

1354:     function _removeHolding(bytes32 holdingId) internal virtual {

1371:     function _removeHolding(uint256 id, address collection) internal virtual {

1390:     function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual override whenNotPaused {

1401:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

1409:     function _genHoldingId(uint256 id, address collection) internal pure virtual returns (bytes32) {

```

```solidity
File: VaultOfVault.sol

70:     function initialize(

97:     function safeDepositIntoChild(

123:     function withdrawFromChild(

```

```solidity
File: Verifier.sol

103:     function initialize(

153:     function safeMint(uint256 tokenId, address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) {

170:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

185:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

198:     function exists(uint256 tokenId) external view virtual returns (bool) {

218:     function approve(

236:     function setApprovalForAll(

251:     function renounceRole(bytes32, address) public virtual override {

264:     function tokenURI(

278:     function supportsInterface(

300:     function ownerOf(

330:     function _beforeTokenTransfer(

352:     function _burn(uint256 tokenId) internal virtual override(ERC721Upgradeable, ERC721URIStorageUpgradeable) {

372:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

379:     function _baseURI() internal view virtual override returns (string memory) {

```

```solidity
File: interfaces/IAsset.sol

20:     function balanceOf(address account, uint256 id) external view returns (uint256);

29:     function burn(address account, uint256 id, uint256 value) external;

37:     function exists(uint256 id) external view returns (bool);

50:     function safeMint(uint256 id, address to, uint256 numTokens, string memory uri_, bytes memory data) external;

70:     function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes memory data) external;

```

```solidity
File: interfaces/IAssetValuer.sol

37:     function setValuation(address collection, uint256 tokenId, uint256 value) external;

48:     function getVaultValuation(IVault vault) external view returns (uint256);

57:     function getValuation(address collection, uint256 tokenId) external view returns (uint256);

65:     function getValuation(bytes32 key) external view returns (uint256);

67:     function getAssetValuation(IVault vault, bytes32 key) external view returns (uint256);

```

```solidity
File: interfaces/IOffer.sol

23:     function isApprovedForAll(address owner, address operator) external view returns (bool);

31:     function ownerOf(uint256 tokenId) external view returns (address);

40:     function safeMint(address to, string memory uri) external returns (uint256);

53:     function transferFrom(address from, address to, uint256 tokenId) external;

62:     function safeTransferFrom(address from, address to, uint256 tokenId) external;

```

```solidity
File: interfaces/IVault.sol

54:     function totalAssets() external view returns (uint256);

62:     function asset() external view returns (address);

69:     function isParent() external view returns (bool);

76:     function assetValuer() external view returns (IAssetValuer);

84:     function getHoldings() external view returns (bytes32[] memory);

92:     function getHoldingDetails(bytes32 holdingId) external view returns (Holding memory);

101:     function hasRole(bytes32 role, address account) external view returns (bool);

112:     function transferFundsFrom(address erc20Address, address from, uint256 amount) external;

123:     function transferFundsTo(address erc20Address, address to, uint256 amount, string memory tag) external;

134:     function safeDeposit(uint256 assets, address receiver, uint256 expectedShares) external returns (uint256);

141:     function requestWithdraw(uint256 amountAssets) external;

152:     function withdraw(uint256 assets, address receiver, address owner) external returns (uint256);

162:     function supportsInterface(bytes4 interfaceId) external view returns (bool);

176:     function transferERC1155(

193:     function depositAsset(

```

```solidity
File: interfaces/IVerifier.sol

16:     function exists(uint256 tokenId) external view returns (bool);

24:     function ownerOf(uint256 tokenId) external view returns (address);

33:     function safeMint(uint256 tokenId, address to, string memory uri) external;

```

</details> 
 


 ### <a name="NC-20"></a>[NC-20]
 ### NatSpec: function declarations should have @Notice tags
@notice is used to explain to end users what the function does, and the compiler interprets /// or /** comments as this tag if one wasn't explicitly provided.  

*Instances (169)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

110:     function initialize(

165:     function safeMint(

191:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

206:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

228:     function safeTransferFrom(

252:     function burn(

272:     function setApprovalForAll(address operator, bool approved) public virtual override whenNotPaused {

283:     function renounceRole(bytes32, address) public virtual override {

295:     function supportsInterface(

311:     function exists(uint256 id) public view virtual override(ERC1155SupplyUpgradeable, IAsset) returns (bool) {

326:     function balanceOf(

342:     function uri(

374:     function _beforeTokenTransfer(

401:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: AssetFlowController.sol

439:     function initialize(

505:     function submitOffer(

549:     function verifyOffer(uint256 offerId, string memory uri) external virtual whenNotPaused onlyRole(VERIFIER_ROLE) {

585:     function submitSettlement(

627:     function settle(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

714:     function rejectSettlement(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

742:     function setRentPrice(

773:     function payRent(uint256 id, address collection, string memory tag) external virtual whenNotPaused {

803:     function submitBuyOut(

839:     function acceptBuyOut(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

874:     function rejectBuyout(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

895:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

913:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

923:     function getOfferOwner(uint256 offerId) external view virtual returns (address) {

932:     function getOffers() external view virtual returns (uint256[] memory, address[] memory) {

942:     function onERC1155Received(address, address, uint256, uint256, bytes memory) public virtual returns (bytes4) {

953:     function renounceRole(bytes32, address) public virtual override {

966:     function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {

991:     function _collectAsset(

1046:     function _sellToAssetOwner(uint256 offerId, BuyOutDetails memory buyOut) internal virtual {

1063:     function _buyFromAssetOwner(uint256 offerId, BuyOutDetails memory buyOut) internal virtual {

1077:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

1086:     function _genHoldingId(uint256 id, address collection) internal pure virtual returns (bytes32) {

```

```solidity
File: AssetValuer.sol

99:     function initialize(address pauserRole, address upgraderRole, address valuerRole) external initializer {

138:     function setValuation(

157:     function pause() external onlyRole(PAUSER_ROLE) {

172:     function unpause() external onlyRole(PAUSER_ROLE) {

185:     function getValuation(address collection, uint256 tokenId) external view virtual returns (uint256) {

197:     function getValuation(bytes32 key) external view virtual returns (uint256) {

208:     function getAssetValuation(IVault vault, bytes32 key) external view virtual returns (uint256) {

220:     function getAssetValuation(

238:     function getVaultValuation(IVault vault) external view virtual returns (uint256) {

255:     function renounceRole(bytes32, address) public virtual override {

267:     function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {

289:     function _setValuation(address collection, uint256 tokenId, uint256 value) internal virtual {

311:     function _authorizeUpgrade(address newImplementation) internal override onlyRole(UPGRADER_ROLE) {}

320:     function _getAssetValuation(IVault vault, bytes32 key) internal view virtual returns (uint256) {

365:     function _genHoldingId(uint256 id, address collection) internal pure virtual returns (bytes32) {

```

```solidity
File: Offer.sol

115:     function initialize(

150:     function renounceRole(bytes32, address) public virtual override {

172:     function safeMint(address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) returns (uint256) {

194:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

209:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

219:     function exists(uint256 tokenId) external view virtual returns (bool) {

240:     function approve(

261:     function setApprovalForAll(

288:     function transferFrom(

312:     function safeTransferFrom(

330:     function isApprovedForAll(

346:     function ownerOf(

360:     function tokenURI(

374:     function supportsInterface(

414:     function _beforeTokenTransfer(

436:     function _burn(uint256 tokenId) internal virtual override(ERC721Upgradeable, ERC721URIStorageUpgradeable) {

454:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

461:     function _baseURI() internal view virtual override returns (string memory) {

```

```solidity
File: Vault.sol

363:     function initialize(

399:     function __Vault_init(

445:     function renounceRole(bytes32, address) public virtual override {

469:     function registerInvestor(

499:     function deregisterInvestor(address investor) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) { //@audit check if investor is already registered

521:     function safeDeposit(

550:     function depositAsset(

624:     function transferFundsFrom(

658:     function transferFundsTo(

692:     function transferERC721(

727:     function transferERC1155(

755:     function approveFundAllocation(

772:     function setMinDeposit(uint256 _minDeposit) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

792:     function setAssetValuer(address _assetValuer) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

809:     function requestWithdraw(uint256 amountAssets) external virtual whenNotPaused onlyRole(INVESTOR_ROLE) {

827:     function cancelRequest() external virtual whenNotPaused onlyRole(INVESTOR_ROLE) {

849:     function addHolding(

867:     function cleanHoldings(bytes32[] memory holdingIds) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

886:     function setMaxDeposit(

904:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

919:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

929:     function getHoldings() external view virtual returns (bytes32[] memory) {

939:     function getHoldingDetails(bytes32 holdingId) external view virtual returns (Holding memory) {

951:     function getHoldingId(address collection, uint256 tokenId) external view virtual returns (bytes32) {

976:     function approve(

997:     function increaseAllowance(

1019:     function decreaseAllowance(

1048:     function withdraw(

1071:     function redeem(uint256, address, address) public virtual override returns (uint256) {

1097:     function onERC1155Received(

1123:     function onERC721Received(

1149:     function deposit(

1160:     function mint(uint256, address) public virtual override returns (uint256) {

1172:     function supportsInterface(

1194:     function totalAssets() public view virtual override(ERC4626Upgradeable, IVault) returns (uint256) {

1208:     function maxDeposit(address investor) public view virtual override returns (uint256) {

1221:     function asset() public view virtual override(ERC4626Upgradeable, IVault) returns (address) {

1232:     function hasRole(

1254:     function _withdraw(

1284:     function _deposit(address caller, address receiver, uint256 assets, uint256 shares) internal virtual override {

1302:     function _setMinDeposit(uint256 _minDeposit) internal virtual {

1315:     function _setMaxDeposit(address investor, uint256 depositMax) internal virtual {

1334:     function _addHoldings(uint256 id, address collection, AssetType assetType) internal virtual {

1354:     function _removeHolding(bytes32 holdingId) internal virtual {

1371:     function _removeHolding(uint256 id, address collection) internal virtual {

1390:     function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual override whenNotPaused {

1401:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

1409:     function _genHoldingId(uint256 id, address collection) internal pure virtual returns (bytes32) {

```

```solidity
File: VaultOfVault.sol

70:     function initialize(

97:     function safeDepositIntoChild(

123:     function withdrawFromChild(

```

```solidity
File: Verifier.sol

103:     function initialize(

153:     function safeMint(uint256 tokenId, address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) {

170:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

185:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

198:     function exists(uint256 tokenId) external view virtual returns (bool) {

218:     function approve(

236:     function setApprovalForAll(

251:     function renounceRole(bytes32, address) public virtual override {

264:     function tokenURI(

278:     function supportsInterface(

300:     function ownerOf(

330:     function _beforeTokenTransfer(

352:     function _burn(uint256 tokenId) internal virtual override(ERC721Upgradeable, ERC721URIStorageUpgradeable) {

372:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

379:     function _baseURI() internal view virtual override returns (string memory) {

```

```solidity
File: interfaces/IAsset.sol

20:     function balanceOf(address account, uint256 id) external view returns (uint256);

29:     function burn(address account, uint256 id, uint256 value) external;

37:     function exists(uint256 id) external view returns (bool);

50:     function safeMint(uint256 id, address to, uint256 numTokens, string memory uri_, bytes memory data) external;

70:     function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes memory data) external;

```

```solidity
File: interfaces/IAssetValuer.sol

37:     function setValuation(address collection, uint256 tokenId, uint256 value) external;

48:     function getVaultValuation(IVault vault) external view returns (uint256);

57:     function getValuation(address collection, uint256 tokenId) external view returns (uint256);

65:     function getValuation(bytes32 key) external view returns (uint256);

67:     function getAssetValuation(IVault vault, bytes32 key) external view returns (uint256);

```

```solidity
File: interfaces/IOffer.sol

23:     function isApprovedForAll(address owner, address operator) external view returns (bool);

31:     function ownerOf(uint256 tokenId) external view returns (address);

40:     function safeMint(address to, string memory uri) external returns (uint256);

53:     function transferFrom(address from, address to, uint256 tokenId) external;

62:     function safeTransferFrom(address from, address to, uint256 tokenId) external;

```

```solidity
File: interfaces/IVault.sol

54:     function totalAssets() external view returns (uint256);

62:     function asset() external view returns (address);

69:     function isParent() external view returns (bool);

76:     function assetValuer() external view returns (IAssetValuer);

84:     function getHoldings() external view returns (bytes32[] memory);

92:     function getHoldingDetails(bytes32 holdingId) external view returns (Holding memory);

101:     function hasRole(bytes32 role, address account) external view returns (bool);

112:     function transferFundsFrom(address erc20Address, address from, uint256 amount) external;

123:     function transferFundsTo(address erc20Address, address to, uint256 amount, string memory tag) external;

134:     function safeDeposit(uint256 assets, address receiver, uint256 expectedShares) external returns (uint256);

141:     function requestWithdraw(uint256 amountAssets) external;

152:     function withdraw(uint256 assets, address receiver, address owner) external returns (uint256);

162:     function supportsInterface(bytes4 interfaceId) external view returns (bool);

176:     function transferERC1155(

193:     function depositAsset(

```

```solidity
File: interfaces/IVerifier.sol

16:     function exists(uint256 tokenId) external view returns (bool);

24:     function ownerOf(uint256 tokenId) external view returns (address);

33:     function safeMint(uint256 tokenId, address to, string memory uri) external;

```

</details> 
 


 ### <a name="NC-21"></a>[NC-21]
 ### NatSpec: function declarations should have NatSpec descriptions

*Instances (169)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

110:     function initialize(

165:     function safeMint(

191:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

206:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

228:     function safeTransferFrom(

252:     function burn(

272:     function setApprovalForAll(address operator, bool approved) public virtual override whenNotPaused {

283:     function renounceRole(bytes32, address) public virtual override {

295:     function supportsInterface(

311:     function exists(uint256 id) public view virtual override(ERC1155SupplyUpgradeable, IAsset) returns (bool) {

326:     function balanceOf(

342:     function uri(

374:     function _beforeTokenTransfer(

401:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: AssetFlowController.sol

439:     function initialize(

505:     function submitOffer(

549:     function verifyOffer(uint256 offerId, string memory uri) external virtual whenNotPaused onlyRole(VERIFIER_ROLE) {

585:     function submitSettlement(

627:     function settle(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

714:     function rejectSettlement(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

742:     function setRentPrice(

773:     function payRent(uint256 id, address collection, string memory tag) external virtual whenNotPaused {

803:     function submitBuyOut(

839:     function acceptBuyOut(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

874:     function rejectBuyout(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

895:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

913:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

923:     function getOfferOwner(uint256 offerId) external view virtual returns (address) {

932:     function getOffers() external view virtual returns (uint256[] memory, address[] memory) {

942:     function onERC1155Received(address, address, uint256, uint256, bytes memory) public virtual returns (bytes4) {

953:     function renounceRole(bytes32, address) public virtual override {

966:     function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {

991:     function _collectAsset(

1046:     function _sellToAssetOwner(uint256 offerId, BuyOutDetails memory buyOut) internal virtual {

1063:     function _buyFromAssetOwner(uint256 offerId, BuyOutDetails memory buyOut) internal virtual {

1077:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

1086:     function _genHoldingId(uint256 id, address collection) internal pure virtual returns (bytes32) {

```

```solidity
File: AssetValuer.sol

99:     function initialize(address pauserRole, address upgraderRole, address valuerRole) external initializer {

138:     function setValuation(

157:     function pause() external onlyRole(PAUSER_ROLE) {

172:     function unpause() external onlyRole(PAUSER_ROLE) {

185:     function getValuation(address collection, uint256 tokenId) external view virtual returns (uint256) {

197:     function getValuation(bytes32 key) external view virtual returns (uint256) {

208:     function getAssetValuation(IVault vault, bytes32 key) external view virtual returns (uint256) {

220:     function getAssetValuation(

238:     function getVaultValuation(IVault vault) external view virtual returns (uint256) {

255:     function renounceRole(bytes32, address) public virtual override {

267:     function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {

289:     function _setValuation(address collection, uint256 tokenId, uint256 value) internal virtual {

311:     function _authorizeUpgrade(address newImplementation) internal override onlyRole(UPGRADER_ROLE) {}

320:     function _getAssetValuation(IVault vault, bytes32 key) internal view virtual returns (uint256) {

365:     function _genHoldingId(uint256 id, address collection) internal pure virtual returns (bytes32) {

```

```solidity
File: Offer.sol

115:     function initialize(

150:     function renounceRole(bytes32, address) public virtual override {

172:     function safeMint(address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) returns (uint256) {

194:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

209:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

219:     function exists(uint256 tokenId) external view virtual returns (bool) {

240:     function approve(

261:     function setApprovalForAll(

288:     function transferFrom(

312:     function safeTransferFrom(

330:     function isApprovedForAll(

346:     function ownerOf(

360:     function tokenURI(

374:     function supportsInterface(

414:     function _beforeTokenTransfer(

436:     function _burn(uint256 tokenId) internal virtual override(ERC721Upgradeable, ERC721URIStorageUpgradeable) {

454:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

461:     function _baseURI() internal view virtual override returns (string memory) {

```

```solidity
File: Vault.sol

363:     function initialize(

399:     function __Vault_init(

445:     function renounceRole(bytes32, address) public virtual override {

469:     function registerInvestor(

499:     function deregisterInvestor(address investor) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) { //@audit check if investor is already registered

521:     function safeDeposit(

550:     function depositAsset(

624:     function transferFundsFrom(

658:     function transferFundsTo(

692:     function transferERC721(

727:     function transferERC1155(

755:     function approveFundAllocation(

772:     function setMinDeposit(uint256 _minDeposit) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

792:     function setAssetValuer(address _assetValuer) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

809:     function requestWithdraw(uint256 amountAssets) external virtual whenNotPaused onlyRole(INVESTOR_ROLE) {

827:     function cancelRequest() external virtual whenNotPaused onlyRole(INVESTOR_ROLE) {

849:     function addHolding(

867:     function cleanHoldings(bytes32[] memory holdingIds) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

886:     function setMaxDeposit(

904:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

919:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

929:     function getHoldings() external view virtual returns (bytes32[] memory) {

939:     function getHoldingDetails(bytes32 holdingId) external view virtual returns (Holding memory) {

951:     function getHoldingId(address collection, uint256 tokenId) external view virtual returns (bytes32) {

976:     function approve(

997:     function increaseAllowance(

1019:     function decreaseAllowance(

1048:     function withdraw(

1071:     function redeem(uint256, address, address) public virtual override returns (uint256) {

1097:     function onERC1155Received(

1123:     function onERC721Received(

1149:     function deposit(

1160:     function mint(uint256, address) public virtual override returns (uint256) {

1172:     function supportsInterface(

1194:     function totalAssets() public view virtual override(ERC4626Upgradeable, IVault) returns (uint256) {

1208:     function maxDeposit(address investor) public view virtual override returns (uint256) {

1221:     function asset() public view virtual override(ERC4626Upgradeable, IVault) returns (address) {

1232:     function hasRole(

1254:     function _withdraw(

1284:     function _deposit(address caller, address receiver, uint256 assets, uint256 shares) internal virtual override {

1302:     function _setMinDeposit(uint256 _minDeposit) internal virtual {

1315:     function _setMaxDeposit(address investor, uint256 depositMax) internal virtual {

1334:     function _addHoldings(uint256 id, address collection, AssetType assetType) internal virtual {

1354:     function _removeHolding(bytes32 holdingId) internal virtual {

1371:     function _removeHolding(uint256 id, address collection) internal virtual {

1390:     function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual override whenNotPaused {

1401:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

1409:     function _genHoldingId(uint256 id, address collection) internal pure virtual returns (bytes32) {

```

```solidity
File: VaultOfVault.sol

70:     function initialize(

97:     function safeDepositIntoChild(

123:     function withdrawFromChild(

```

```solidity
File: Verifier.sol

103:     function initialize(

153:     function safeMint(uint256 tokenId, address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) {

170:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

185:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

198:     function exists(uint256 tokenId) external view virtual returns (bool) {

218:     function approve(

236:     function setApprovalForAll(

251:     function renounceRole(bytes32, address) public virtual override {

264:     function tokenURI(

278:     function supportsInterface(

300:     function ownerOf(

330:     function _beforeTokenTransfer(

352:     function _burn(uint256 tokenId) internal virtual override(ERC721Upgradeable, ERC721URIStorageUpgradeable) {

372:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

379:     function _baseURI() internal view virtual override returns (string memory) {

```

```solidity
File: interfaces/IAsset.sol

20:     function balanceOf(address account, uint256 id) external view returns (uint256);

29:     function burn(address account, uint256 id, uint256 value) external;

37:     function exists(uint256 id) external view returns (bool);

50:     function safeMint(uint256 id, address to, uint256 numTokens, string memory uri_, bytes memory data) external;

70:     function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes memory data) external;

```

```solidity
File: interfaces/IAssetValuer.sol

37:     function setValuation(address collection, uint256 tokenId, uint256 value) external;

48:     function getVaultValuation(IVault vault) external view returns (uint256);

57:     function getValuation(address collection, uint256 tokenId) external view returns (uint256);

65:     function getValuation(bytes32 key) external view returns (uint256);

67:     function getAssetValuation(IVault vault, bytes32 key) external view returns (uint256);

```

```solidity
File: interfaces/IOffer.sol

23:     function isApprovedForAll(address owner, address operator) external view returns (bool);

31:     function ownerOf(uint256 tokenId) external view returns (address);

40:     function safeMint(address to, string memory uri) external returns (uint256);

53:     function transferFrom(address from, address to, uint256 tokenId) external;

62:     function safeTransferFrom(address from, address to, uint256 tokenId) external;

```

```solidity
File: interfaces/IVault.sol

54:     function totalAssets() external view returns (uint256);

62:     function asset() external view returns (address);

69:     function isParent() external view returns (bool);

76:     function assetValuer() external view returns (IAssetValuer);

84:     function getHoldings() external view returns (bytes32[] memory);

92:     function getHoldingDetails(bytes32 holdingId) external view returns (Holding memory);

101:     function hasRole(bytes32 role, address account) external view returns (bool);

112:     function transferFundsFrom(address erc20Address, address from, uint256 amount) external;

123:     function transferFundsTo(address erc20Address, address to, uint256 amount, string memory tag) external;

134:     function safeDeposit(uint256 assets, address receiver, uint256 expectedShares) external returns (uint256);

141:     function requestWithdraw(uint256 amountAssets) external;

152:     function withdraw(uint256 assets, address receiver, address owner) external returns (uint256);

162:     function supportsInterface(bytes4 interfaceId) external view returns (bool);

176:     function transferERC1155(

193:     function depositAsset(

```

```solidity
File: interfaces/IVerifier.sol

16:     function exists(uint256 tokenId) external view returns (bool);

24:     function ownerOf(uint256 tokenId) external view returns (address);

33:     function safeMint(uint256 tokenId, address to, string memory uri) external;

```

</details> 
 


 ### <a name="NC-22"></a>[NC-22]
 ### If-statement can be converted to a ternary

#### Impact:
The code can be made more compact while also increasing readability by converting the following `if`-statements to ternaries (e.g. `foo += (x > y) ? a : b`)

*Instances (20)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

172:         if (totalSupply(id) == 0) {

```

```solidity
File: AssetFlowController.sol

646:         if (extendedDetails.isSeeding) {

680:         } else {

691:             } else {

852:         if (buyOut.who == BuyOutBy.ASSET_OWNER) {

1001:         if (assetType == IVault.AssetType.ERC721) {

1006:         } else if (assetType == IVault.AssetType.ERC1155) {

```

```solidity
File: AssetValuer.sol

324:         if (holding.assetType == IVault.AssetType.ERC1155) {

327:         } else if (holding.assetType == IVault.AssetType.ERC721) {

330:         } else if (holding.assetType == IVault.AssetType.ERC20) {

343:         } else if (holding.assetType == IVault.AssetType.VaultToken) {

351:         } else {

```

```solidity
File: Offer.sol

177:         if (_msgSender() != to) {

```

```solidity
File: Vault.sol

561:         if (assetType == AssetType.ERC20) {

580:         if (assetType == AssetType.ERC721) {

583:         } else if (assetType == AssetType.ERC1155) {

592:         } else if (assetType == AssetType.ERC20 || assetType == AssetType.VaultToken) {

1261:         if (caller != owner) {

1342:         if (holdings.add(holdingId)) {

1356:         if (holdings.remove(holdingId)) {

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
File: Vault.sol

137:     mapping(address => uint) public withdrawalRequests;

149:     mapping(address => uint256) public maxDeposits;

```

</details> 
 


 ### <a name="NC-24"></a>[NC-24]
 ### Use of override is unnecessary

#### Impact:
Starting with Solidity version [0.8.8](https://docs.soliditylang.org/en/v0.8.20/contracts.html#function-overriding), using the override keyword when the function solely overrides an interface function, and the function doesnt exist in multiple base contracts, is unnecessary.

*Instances (57)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

234:     ) public virtual override(ERC1155Upgradeable, IAsset) {

256:     ) public virtual override(ERC1155BurnableUpgradeable, IAsset) {

272:     function setApprovalForAll(address operator, bool approved) public virtual override whenNotPaused {

283:     function renounceRole(bytes32, address) public virtual override {

297:     ) public view virtual override(ERC1155Upgradeable, AccessControlUpgradeable) returns (bool) {

311:     function exists(uint256 id) public view virtual override(ERC1155SupplyUpgradeable, IAsset) returns (bool) {

329:     ) public view virtual override(ERC1155Upgradeable, IAsset) returns (uint256) {

344:     ) public view virtual override(ERC1155Upgradeable, ERC1155URIStorageUpgradeable) returns (string memory) {

381:     ) internal virtual override(ERC1155Upgradeable, ERC1155SupplyUpgradeable) whenNotPaused {

401:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: AssetFlowController.sol

953:     function renounceRole(bytes32, address) public virtual override {

966:     function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {

1077:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: AssetValuer.sol

255:     function renounceRole(bytes32, address) public virtual override {

267:     function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {

311:     function _authorizeUpgrade(address newImplementation) internal override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: Offer.sol

150:     function renounceRole(bytes32, address) public virtual override {

243:     ) public virtual override(ERC721Upgradeable, IERC721Upgradeable) whenNotPaused {

264:     ) public virtual override(ERC721Upgradeable, IERC721Upgradeable) whenNotPaused {

292:     ) public virtual override(ERC721Upgradeable, IERC721Upgradeable, IOffer) {

316:     ) public virtual override(ERC721Upgradeable, IERC721Upgradeable, IOffer) {

333:     ) public view virtual override(ERC721Upgradeable, IERC721Upgradeable, IOffer) returns (bool) {

348:     ) public view virtual override(ERC721Upgradeable, IERC721Upgradeable, IOffer) returns (address) {

362:     ) public view virtual override(ERC721Upgradeable, ERC721URIStorageUpgradeable) returns (string memory) {

380:         override(ERC721Upgradeable, ERC721EnumerableUpgradeable, ERC721URIStorageUpgradeable, AccessControlUpgradeable)

419:     ) internal virtual override(ERC721Upgradeable, ERC721EnumerableUpgradeable) whenNotPaused {

436:     function _burn(uint256 tokenId) internal virtual override(ERC721Upgradeable, ERC721URIStorageUpgradeable) {

454:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

461:     function _baseURI() internal view virtual override returns (string memory) {

```

```solidity
File: Vault.sol

445:     function renounceRole(bytes32, address) public virtual override {

979:     ) public virtual override(ERC20Upgradeable, IERC20Upgradeable) whenNotPaused returns (bool) {

1000:     ) public virtual override whenNotPaused returns (bool) {

1022:     ) public virtual override whenNotPaused returns (bool) {

1055:         override(ERC4626Upgradeable, IVault)

1071:     function redeem(uint256, address, address) public virtual override returns (uint256) {

1152:     ) public virtual override whenNotPaused onlyRole(INVESTOR_ROLE) returns (uint256) {

1160:     function mint(uint256, address) public virtual override returns (uint256) {

1174:     ) public view virtual override(AccessControlUpgradeable, IVault) returns (bool) {

1194:     function totalAssets() public view virtual override(ERC4626Upgradeable, IVault) returns (uint256) {

1208:     function maxDeposit(address investor) public view virtual override returns (uint256) {

1221:     function asset() public view virtual override(ERC4626Upgradeable, IVault) returns (address) {

1235:     ) public view virtual override(AccessControlUpgradeable, IVault) returns (bool) {

1260:     ) internal virtual override {

1284:     function _deposit(address caller, address receiver, uint256 assets, uint256 shares) internal virtual override {

1390:     function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual override whenNotPaused {

1401:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: VaultOfVault.sol

79:     ) external virtual override initializer {

```

```solidity
File: Verifier.sol

221:     ) public virtual override(ERC721Upgradeable, IERC721Upgradeable) whenNotPaused {

239:     ) public virtual override(ERC721Upgradeable, IERC721Upgradeable) whenNotPaused {

251:     function renounceRole(bytes32, address) public virtual override {

266:     ) public view virtual override(ERC721Upgradeable, ERC721URIStorageUpgradeable) returns (string memory) {

284:         override(ERC721Upgradeable, ERC721EnumerableUpgradeable, ERC721URIStorageUpgradeable, AccessControlUpgradeable)

302:     ) public view virtual override(ERC721Upgradeable, IERC721Upgradeable, IVerifier) returns (address) {

335:     ) internal virtual override(ERC721Upgradeable, ERC721EnumerableUpgradeable) whenNotPaused {

352:     function _burn(uint256 tokenId) internal virtual override(ERC721Upgradeable, ERC721URIStorageUpgradeable) {

372:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

379:     function _baseURI() internal view virtual override returns (string memory) {

```

</details> 
 


 ### <a name="NC-25"></a>[NC-25]
 ### Consider using descriptive constants when using 0 in the code

#### Impact:
Passing zero as a function argument/Event emission can sometimes result in a security issue (e.g. passing zero as the slippage parameter). Consider using a constant variable with a descriptive name, so its clear that the 0 is intentionally being used, and for the right reasons.

*Instances (29)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

551:         require(offerId != 0, "AFC: offerId must be non-zero");

592:         require(numTokens != 0, "AFC: numTokens must be non-zero");

593:         require(settlementPrice != 0, "AFC: settlementPrice must be non-zero");

597:         require(settlement[offerId].numTokens == 0, "AFC: Offer already submitted");

628:         require(offerId != 0, "AFC: offerId must be non-zero");

632:         require(details.numTokens != 0, "AFC: Settlement details not set");

715:         require(offerId != 0, "AFC: offerId must be non-zero");

716:         require(settlement[offerId].numTokens != 0, "AFC: Settlement does not exist");

775:         require(rentPrices[assetKey] != 0, "AFC: No rent price set");

809:         require(offerId != 0, "AFC: offerId must non-zero");

811:         require(numTokens != 0, "AFC: Specify number of tokens");

812:         require(amount != 0, "AFC: Must specify amount");

813:         require(buyOutDetails[offerId].numTokens == 0, "AFC: Buyout already submitted");

840:         require(offerId != 0, "AFC: offerId must be non-zero");

843:         require(buyOut.numTokens != 0, "AFC: BuyOutDetails not submitted");

875:         require(offerId != 0, "AFC: offerId must be non-zero");

876:         require(buyOutDetails[offerId].numTokens != 0, "AFC: buyOutDetails doesn't exist");

```

```solidity
File: Vault.sol

502:         _setMaxDeposit(investor, 0);

570:         require(assets != 0, "V:Asset has no valuation");

594:             _addHoldings(0, assetAddress, assetType);

631:         require(amount != 0, "V:amount should be non-zero");

666:         require(amount != 0, "V:amount should be non-zero");

670:         if (balance == 0) _removeHolding(0, erc20Address);

810:         require(amountAssets != 0, "V:amountAssets cant be 0");

829:         require(amountBefore != 0, "V:No withdrawal request exists");

```

```solidity
File: VaultOfVault.sol

103:         require(assets != 0, "VOV: assets must not be 0");

104:         _addHoldings(0, vaultToDepositInto, AssetType.VaultToken); 

128:         require(assets != 0, "VOV: assets must not be 0");

134:         if (balance == 0) _removeHolding(0, vaultToWithdrawFrom);

```

</details> 
 


 ### <a name="NC-26"></a>[NC-26]
 ### Non-external/public variable names should begin with an underscore

#### Impact:
Using an underscore at the beginning of non-external/public variable names can improve code clarity and maintainability. According to the Solidity Style Guide, non-external/public variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*Instances (25)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

65:     string public name;

70:     string public symbol;

76:     bytes32 public version;

```

```solidity
File: AssetFlowController.sol

177:     IVault public vault;

184:     IOffer public offerCollection;

191:     IAsset public assetCollection;

198:     IVerifier public verifiedOfferCollection;

218:     mapping(uint256 => OfferExtendedDetails) public offerExtendedDetails;

230:     mapping(uint256 => Settlement) public settlement;

242:     mapping(uint256 => BuyOutDetails) public buyOutDetails;

254:     mapping(bytes32 => uint256) public rentPrices;

260:     bytes32 public version;

```

```solidity
File: AssetValuer.sol

64:     mapping(bytes32 => uint256) public valuations;

70:     bytes32 public version;

```

```solidity
File: Offer.sol

75:     string internal baseURI;

81:     bytes32 public version;

```

```solidity
File: Vault.sol

124:     mapping(bytes32 => Holding) public holdingsDetails;

137:     mapping(address => uint) public withdrawalRequests;

149:     mapping(address => uint256) public maxDeposits;

156:     IAssetValuer public assetValuer;

164:     bool public isParent;

169:     uint256 public minDeposit;

175:     bytes32 public version;

```

```solidity
File: Verifier.sol

67:     string internal baseURI;

73:     bytes32 public version;

```

</details> 
 


 ### <a name="NC-27"></a>[NC-27]
 ### Return values of `approve()` not checked
Not all IERC20 implementations `revert()` when there's a failure in `approve()`. The function signature has a boolean return value and they indicate errors that way instead. By not checking the return value, operations that should have marked as failed, may potentially go through without actually approving anything

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

1025:             if (isSeeding) token.approve(address(vault), amount);

```

```solidity
File: Offer.sol

244:         super.approve(to, tokenId);

```

```solidity
File: Vault.sol

980:         return super.approve(spender, amount);

```

```solidity
File: VaultOfVault.sol

105:         IERC20Upgradeable(asset()).approve(vaultToDepositInto, assets);     

130:         IVault(vaultToWithdrawFrom).approve(vaultToWithdrawFrom, assets);

```

```solidity
File: Verifier.sol

222:         super.approve(to, tokenId);

```

</details> 
 


 ### <a name="NC-28"></a>[NC-28]
 ### Setters should prevent re-setting of the same value
This especially problematic when the setter also emits the same value, which may be confusing to offline parsers  

*Instances (18)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

272:     function setApprovalForAll(address operator, bool approved) public virtual override whenNotPaused {

```

```solidity
File: AssetFlowController.sol

627:     function settle(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

1046:     function _sellToAssetOwner(uint256 offerId, BuyOutDetails memory buyOut) internal virtual {

1063:     function _buyFromAssetOwner(uint256 offerId, BuyOutDetails memory buyOut) internal virtual {

```

```solidity
File: AssetValuer.sol

208:     function getAssetValuation(IVault vault, bytes32 key) external view virtual returns (uint256) {

289:     function _setValuation(address collection, uint256 tokenId, uint256 value) internal virtual {

320:     function _getAssetValuation(IVault vault, bytes32 key) internal view virtual returns (uint256) {

```

```solidity
File: Vault.sol

772:     function setMinDeposit(uint256 _minDeposit) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

792:     function setAssetValuer(address _assetValuer) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

1194:     function totalAssets() public view virtual override(ERC4626Upgradeable, IVault) returns (uint256) {

1221:     function asset() public view virtual override(ERC4626Upgradeable, IVault) returns (address) {

1302:     function _setMinDeposit(uint256 _minDeposit) internal virtual {

1315:     function _setMaxDeposit(address investor, uint256 depositMax) internal virtual {

```

```solidity
File: interfaces/IAssetValuer.sol

37:     function setValuation(address collection, uint256 tokenId, uint256 value) external;

67:     function getAssetValuation(IVault vault, bytes32 key) external view returns (uint256);

```

```solidity
File: interfaces/IVault.sol

54:     function totalAssets() external view returns (uint256);

62:     function asset() external view returns (address);

76:     function assetValuer() external view returns (IAssetValuer);

```

</details> 
 


 ### <a name="NC-29"></a>[NC-29]
 ### Use the latest solidity version for deployment  
Upgrading to a newer Solidity release can optimize gas usage, take advantage of new features and improve overall contract efficiency. Where possible, based on compatibility requirements, it is recommended to use newer/latest solidity version to take advantage of the latest optimizations and features. You can see the latest version [here](https://soliditylang.org/blog/category/releases/)

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

2: pragma solidity 0.8.19;

```

```solidity
File: AssetFlowController.sol

2: pragma solidity 0.8.19;

```

```solidity
File: AssetValuer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Offer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Vault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: VaultOfVault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Verifier.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IAsset.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IAssetValuer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IOffer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IVault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IVerifier.sol

2: pragma solidity 0.8.19;

```

</details> 
 


 ### <a name="NC-30"></a>[NC-30]
 ### Strings should use double quotes rather than single quotes

#### Impact:
Using consistent double quotes for strings improves code readability and maintainability. Also see it here https://docs.soliditylang.org/en/v0.8.20/style-guide.html#other-recommendations

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

173:             _setURI(id, uri_); // according to natspec if token hasn't been minted before uri_ must be set but what if URI is emtpy?  

```

```solidity
File: AssetFlowController.sol

96:         address recipient; // Functionally we don't need this but it has some security benefits. You can use ownerOf on

```

</details> 
 


 ### <a name="NC-31"></a>[NC-31]
 ### Owner can renounce while system is paused
The contract owner or single user with a role is not prevented from renouncing the role/ownership while the contract is paused, which would cause any user assets stored in the protocol, to be locked indefinitely.

*Instances (6)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

191:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

```

```solidity
File: AssetFlowController.sol

895:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

```

```solidity
File: AssetValuer.sol

157:     function pause() external onlyRole(PAUSER_ROLE) {

```

```solidity
File: Offer.sol

194:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

```

```solidity
File: Vault.sol

904:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

```

```solidity
File: Verifier.sol

170:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

```

</details> 
 


 ### <a name="NC-32"></a>[NC-32]
 ### Dont use _msgSender() if not supporting EIP-2771
Use msg.sender if the code does not implement EIP-2771 trusted forwarder support

*Instances (63)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

136:         _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());

137:         _grantRole(UPGRADER_ROLE, _msgSender());

138:         _grantRole(PAUSER_ROLE, _msgSender());

```

```solidity
File: AssetFlowController.sol

467:         _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());

468:         _grantRole(UPGRADER_ROLE, _msgSender());

469:         _grantRole(PAUSER_ROLE, _msgSender());

470:         _grantRole(CONTRACT_ADMIN_ROLE, _msgSender());

520:         uint256 offerId = offerCollection.safeMint(_msgSender(), uri); 

521:         emit OfferSubmitted(_msgSender(), offerId, uri, extendedDetails);

523:         _offerOwners.set(offerId, _msgSender());

552:         emit OfferVerified(_msgSender(), offerId, uri); // emiting before fuction ending

591:         require(offerCollection.ownerOf(offerId) == _msgSender(), "AFC: Not offer owner");

595:         require(offerCollection.isApprovedForAll(_msgSender(), address(this)), "AFC: Offer not approved");

598:         emit SettlementSubmitted(_msgSender(), offerId, numTokens, settlementPrice, uri);

599:         settlement[offerId] = Settlement(settlementPrice, numTokens, uri, _msgSender());

637:             _msgSender(),

717:         emit SettlementRejected(_msgSender(), offerId, settlement[offerId]);

749:         emit RentPriceSet(_msgSender(), assetKey, rentPrice);

776:         emit RentPaid(_msgSender(), assetKey, rentPrices[assetKey], tag);

777:         IERC20Upgradeable(vault.asset()).safeTransferFrom(_msgSender(), address(vault), rentPrices[assetKey]);

814:         buyOutDetails[offerId] = BuyOutDetails(numTokens, amount, _msgSender(), who);

815:         emit BuyOutSubmitted(_msgSender(), offerId, numTokens, amount, who);

851:         emit BuyOutAccepted(_msgSender(), buyOut.broker, offerId, buyOut.numTokens, buyOut.amount, buyOut.who);

878:         emit BuyOutRejected(_msgSender(), offerId);

```

```solidity
File: AssetValuer.sol

107:         _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());

108:         _grantRole(PAUSER_ROLE, _msgSender());

109:         _grantRole(UPGRADER_ROLE, _msgSender());

292:         emit AssetValued(_msgSender(), collection, tokenId, value);

```

```solidity
File: Offer.sol

140:         _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());

141:         _grantRole(UPGRADER_ROLE, _msgSender());

142:         _grantRole(PAUSER_ROLE, _msgSender());

177:         if (_msgSender() != to) {

178:             _setApprovalForAll(to, _msgSender(), true); // Allow AssetFlowController to transfer

```

```solidity
File: Vault.sol

428:         _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());

429:         _grantRole(CONTRACT_ADMIN_ROLE, _msgSender());

430:         _grantRole(UPGRADER_ROLE, _msgSender());

431:         _grantRole(PAUSER_ROLE, _msgSender());

476:         emit InvestorRegistered(_msgSender(), investor, _maxDeposit);

503:         emit InvestorDeregistered(_msgSender(), investor);

577:         emit AssetDeposited(_msgSender(), receiver, assetAddress, assetTokenId, assetAmount, assetType);

581:             IERC721Upgradeable(assetAddress).safeTransferFrom(_msgSender(), address(this), assetTokenId);

585:                 _msgSender(),

593:             IERC20Upgradeable(assetAddress).safeTransferFrom(_msgSender(), address(this), assetAmount);

667:         emit FundsTransferred(_msgSender(), erc20Address, to, amount, tag);

795:         emit AssetValuerSet(_msgSender(), _assetValuer);

811:         require(withdrawalRequests[_msgSender()] == 0, "V:Request already exists");

812:         require(allowance(_msgSender(), address(this)) >= amountAssets, "V:Insufficient allowance");

813:         withdrawalRequests[_msgSender()] = amountAssets;

814:         emit WithdrawRequested(_msgSender(), amountAssets);

828:         uint256 amountBefore = withdrawalRequests[_msgSender()];

830:         withdrawalRequests[_msgSender()] = 0;

831:         emit RequestCancelled(_msgSender(), amountBefore);

1104:         _addHoldings(id, _msgSender(), AssetType.ERC1155);

1105:         emit TokenReceived(_msgSender(), operator, from, id, amount, AssetType.ERC1155);

1129:         _addHoldings(tokenId, _msgSender(), AssetType.ERC721);

1130:         emit TokenReceived(_msgSender(), operator, from, tokenId, 1, AssetType.ERC721);

1304:         emit MinDepositSet(_msgSender(), minDeposit);

1317:         emit MaxDepositSet(_msgSender(), investor, depositMax);

1344:             emit VaultHoldingsUpdated(_msgSender(), collection, id, assetType, true);

1359:             emit VaultHoldingsUpdated(_msgSender(), holding.collection, holding.id, holding.assetType, false);

```

```solidity
File: Verifier.sol

124:         _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());

125:         _grantRole(UPGRADER_ROLE, _msgSender());

126:         _grantRole(PAUSER_ROLE, _msgSender());

```

</details> 
 


 ### <a name="NC-33"></a>[NC-33]
 ### Array indices should be referenced via enums rather than numeric literals

#### Impact:
Referencing array indices via enums can improve code readability and maintainability.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Vault.sol

1413:     uint256[44] private __gap;

```

</details> 
 


 ### <a name="NC-34"></a>[NC-34]
 ### Use assembly to emit events, in order to save gas
Using the [scratch space](https://github.com/Vectorized/solady/blob/30558f5402f02351b96eeb6eaf32bcea29773841/src/tokens/ERC1155.sol#L501-L504) for event arguments (two words or fewer) will save gas over needing Soliditys full abi memory expansion used for emitting normally.

*Instances (28)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

521:         emit OfferSubmitted(_msgSender(), offerId, uri, extendedDetails);

552:         emit OfferVerified(_msgSender(), offerId, uri); // emiting before fuction ending

598:         emit SettlementSubmitted(_msgSender(), offerId, numTokens, settlementPrice, uri);

636:         emit AssetSettled(

717:         emit SettlementRejected(_msgSender(), offerId, settlement[offerId]);

749:         emit RentPriceSet(_msgSender(), assetKey, rentPrice);

776:         emit RentPaid(_msgSender(), assetKey, rentPrices[assetKey], tag);

815:         emit BuyOutSubmitted(_msgSender(), offerId, numTokens, amount, who);

851:         emit BuyOutAccepted(_msgSender(), buyOut.broker, offerId, buyOut.numTokens, buyOut.amount, buyOut.who);

878:         emit BuyOutRejected(_msgSender(), offerId);

```

```solidity
File: AssetValuer.sol

292:         emit AssetValued(_msgSender(), collection, tokenId, value);

```

```solidity
File: Vault.sol

476:         emit InvestorRegistered(_msgSender(), investor, _maxDeposit);

503:         emit InvestorDeregistered(_msgSender(), investor);

577:         emit AssetDeposited(_msgSender(), receiver, assetAddress, assetTokenId, assetAmount, assetType);

632:         emit FundsTransferred(from, erc20Address, address(this), amount, "");

667:         emit FundsTransferred(_msgSender(), erc20Address, to, amount, tag);

759:         emit FundAllocationApproved(spender, amount);

795:         emit AssetValuerSet(_msgSender(), _assetValuer);

814:         emit WithdrawRequested(_msgSender(), amountAssets);

831:         emit RequestCancelled(_msgSender(), amountBefore);

1105:         emit TokenReceived(_msgSender(), operator, from, id, amount, AssetType.ERC1155);

1130:         emit TokenReceived(_msgSender(), operator, from, tokenId, 1, AssetType.ERC721);

1268:         emit Withdraw(caller, receiver, owner, assets, shares);

1287:         emit Deposit(caller, receiver, assets, shares);

1304:         emit MinDepositSet(_msgSender(), minDeposit);

1317:         emit MaxDepositSet(_msgSender(), investor, depositMax);

1344:             emit VaultHoldingsUpdated(_msgSender(), collection, id, assetType, true);

1359:             emit VaultHoldingsUpdated(_msgSender(), holding.collection, holding.id, holding.assetType, false);

```

</details> 
 


 ### <a name="NC-35"></a>[NC-35]
 ### Long revert strings

*Instances (14)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

120:         require(upgraderRole != address(0), "Asset: `upgraderRole` cannot be the zero address");

121:         require(pauserRole != address(0), "Asset: `pauserRole` cannot be the zero address");

```

```solidity
File: AssetFlowController.sol

593:         require(settlementPrice != 0, "AFC: settlementPrice must be non-zero");

630:         require(verifiedOfferCollection.ownerOf(offerId) == address(vault), "AFC: Verified offer not owned by Vault");

```

```solidity
File: AssetValuer.sol

100:         require(pauserRole != address(0), "AssetValuer: `pauserRole` cannot be the zero address");

101:         require(upgraderRole != address(0), "AssetValuer: `upgraderRole` cannot be the zero address");

102:         require(valuerRole != address(0), "AssetValuer: `valuerRole` cannot be the zero address");

```

```solidity
File: Offer.sol

126:         require(offerer != address(0), "Offer: Offerer cannot be the zero address");

127:         require(upgraderRole != address(0), "Offer: `upgraderRole` cannot be the zero address");

128:         require(pauserRole != address(0), "Offer: `pauserRole` cannot be the zero address");

```

```solidity
File: Vault.sol

527:         require(shares >= expectedShares, "V:Share issue lower than expected"); // since there is slippage protection so its okay

```

```solidity
File: Verifier.sol

112:         require(bytes(baseURI_).length != 0, "Verifier: baseURI cannot be empty");

113:         require(upgraderRole != address(0), "Verifier: `upgraderRole` cannot be the zero address");

114:         require(pauserRole != address(0), "Verifier: `pauserRole` cannot be the zero address");

```

</details> 
 


## Gas Optimizations


 ### <a name="GAS-1"></a>[GAS-1]
 ### Enable IR-based code generation
By using `--via-ir` or `{"viaIR": true}`, the compiler is able to use more advanced [multi-function optimizations](https://docs.soliditylang.org/en/v0.8.17/ir-breaking-changes.html#solidity-ir-based-codegen-changes), for extra gas savings.

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

2: pragma solidity 0.8.19;

```

```solidity
File: AssetFlowController.sol

2: pragma solidity 0.8.19;

```

```solidity
File: AssetValuer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Offer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Vault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: VaultOfVault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Verifier.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IAsset.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IAssetValuer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IOffer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IVault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IVerifier.sol

2: pragma solidity 0.8.19;

```

</details> 
 


 ### <a name="GAS-2"></a>[GAS-2]
 ### Use scientific notation (e.g. 1e18) rather than exponentiation (e.g. 10**18)
While the compiler knows to optimize away the exponentiation, its still better coding practice to use idioms that do not require compiler optimization, if they exist.

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

847:             diff <= 10 ** 6, // Max acceptable rounding error $1

1019:                         10 ** IERC20MetadataUpgradeable(assetAddress).decimals(),

```

```solidity
File: AssetValuer.sol

339:                         10 ** IERC20MetadataUpgradeable(holding.collection).decimals()

```

```solidity
File: Vault.sol

565:                 10 ** IERC20MetadataUpgradeable(assetAddress).decimals()

```

</details> 
 


 ### <a name="GAS-3"></a>[GAS-3]
 ### Nesting if-statements is cheaper than using &&
Nesting if-statements avoids the stack operations of setting up and using an extra jumpdest, and saves 6 [gas](https://gist.github.com/IllIllI000/7f3b818abecfadbef93b894481ae7d19)

*Instances (23)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

451:             address(_vault) != address(0) &&

452:                 address(_offerCollection) != address(0) &&

453:                 address(_assetCollection) != address(0) &&

454:                 address(_verifiedOfferCollection) != address(0) &&

455:                 upgraderRole != address(0) &&

456:                 pauserRole != address(0) &&

457:                 investmentManagerRole != address(0) &&

458:                 verifierRole != address(0) &&

511:             (extendedDetails.isExistingAsset &&

512:                 extendedDetails.assetType != IVault.AssetType.NONE &&

514:                 (!extendedDetails.isExistingAsset &&

515:                     extendedDetails.assetType == IVault.AssetType.NONE &&

516:                     extendedDetails.assetAddress == address(0) &&

```

```solidity
File: Vault.sol

410:             bytes(_name).length != 0 &&

411:                 bytes(_symbol).length != 0 &&

412:                 vaultCurrency != address(0) &&

413:                 assetController != address(0) &&

414:                 contractAdmin != address(0) &&

415:                 upgrader != address(0) &&

1060:         require(assets != 0 && owner != address(0) && receiver != address(0), "V:Invalid 0 args");

1060:         require(assets != 0 && owner != address(0) && receiver != address(0), "V:Invalid 0 args");

1338:                 (!IVault(collection).isParent() && isParent && IVault(collection).asset() == asset()),

1338:                 (!IVault(collection).isParent() && isParent && IVault(collection).asset() == asset()),

```

</details> 
 


 ### <a name="GAS-4"></a>[GAS-4]
 ### Consider using = instead of += and -= for gas efficiency
Using = instead of += and -= can save gas in certain scenarios. Consider using = when appropriate.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetValuer.sol

243:             vaultValuation += _getAssetValuation(vault, holdingIds[i]);

```

</details> 
 


 ### <a name="GAS-5"></a>[GAS-5]
 ### Use >= instead of > for gas efficiency
Using >= costs less gas than >. Consider using >= when appropriate.

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

845:         uint256 diff = expectedAmount > buyOut.amount ? expectedAmount - buyOut.amount : buyOut.amount - expectedAmount;

```

</details> 
 


 ### <a name="GAS-6"></a>[GAS-6]
 ### Using bools for storage incurs overhead
Use uint256(1) and uint256(2) for true/false to avoid a Gwarmaccess (100 gas), and to avoid Gsset (20000 gas) when changing from ‘false’ to ‘true’, after having been ‘true’ in the past. See [source](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/58f635312aa21f947cae5f8578638a85aa2519f5/contracts/security/ReentrancyGuard.sol#L23-L27).

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Vault.sol

164:     bool public isParent;

```

</details> 
 


 ### <a name="GAS-7"></a>[GAS-7]
 ### Consider using assembly for simple zero checks to save gas
Using assembly for simple zero checks can save gas. Consider using assembly when appropriate.

*Instances (2)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Vault.sol

670:         if (balance == 0) _removeHolding(0, erc20Address);

```

```solidity
File: VaultOfVault.sol

134:         if (balance == 0) _removeHolding(0, vaultToWithdrawFrom);

```

</details> 
 


 ### <a name="GAS-8"></a>[GAS-8]
 ### Expressions for constant values should use immutable rather than constant

#### Impact:
While it doesnt save any gas because the compiler knows that developers often make this mistake, its still best to use the right tool for the task at hand. There is a difference between constant variables and immutable variables, and they should each be used in their appropriate contexts. constants should be used for literal values written into the code, and immutable variables should be used for expressions, or values calculated in, or passed into the constructor.  

*Instances (25)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

40:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

49:     bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

58:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

```

```solidity
File: AssetFlowController.sol

125:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

134:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

141:     bytes32 public constant CONTRACT_ADMIN_ROLE = keccak256("CONTRACT_ADMIN_ROLE");

150:     bytes32 public constant INVESTMENT_MANAGER_ROLE = keccak256("INVESTMENT_MANAGER_ROLE");

159:     bytes32 public constant OFFERER_ROLE = keccak256("OFFERER_ROLE");

168:     bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");

```

```solidity
File: AssetValuer.sol

33:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

42:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

51:     bytes32 public constant VALUER_ROLE = keccak256("VALUER_ROLE");

```

```solidity
File: Offer.sol

45:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

54:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

63:     bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

```

```solidity
File: Vault.sol

55:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

64:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

73:     bytes32 public constant ASSET_CONTROLLER_ROLE = keccak256("ASSET_CONTROLLER_ROLE");

82:     bytes32 public constant CONTRACT_ADMIN_ROLE = keccak256("CONTRACT_ADMIN_ROLE");

91:     bytes32 public constant INVESTOR_ROLE = keccak256("INVESTOR_ROLE");

100:     bytes32 public constant WHITELISTED_CONTRACT = keccak256("WHITELISTED_CONTRACT");

```

```solidity
File: VaultOfVault.sol

36:     bytes32 public constant PARENT_ASSET_CONTROLLER = keccak256("PARENT_ASSET_CONTROLLER");

```

```solidity
File: Verifier.sol

42:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

51:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

60:     bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

```

</details> 
 


 ### <a name="GAS-9"></a>[GAS-9]
 ### Constructors can be marked payable
Payable functions cost less gas to execute, since the compiler does not have to add extra checks to ensure that a payment wasn  t provided. A constructor can safely be marked as payable, since only the deployer would be able to pass funds, and the project itself would not pass any funds.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

81:     constructor() {

```

```solidity
File: AssetFlowController.sol

403:     constructor() {

```

```solidity
File: AssetValuer.sol

75:     constructor() {

```

```solidity
File: Offer.sol

86:     constructor() {

```

```solidity
File: Vault.sol

330:     constructor() {

```

```solidity
File: VaultOfVault.sol

41:     constructor() {

```

```solidity
File: Verifier.sol

76:     constructor() {

```

</details> 
 


 ### <a name="GAS-10"></a>[GAS-10]
 ### Use Custom Errors
[Source](https://blog.soliditylang.org/2021/04/21/custom-errors/)
Instead of using error strings, to reduce deployment and runtime cost, you should use Custom Errors. This would save both deployment and runtime cost.

*Instances (94)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

117:         require(bytes(_name).length != 0, "Asset: name cannot be empty");

118:         require(bytes(_symbol).length != 0, "Asset: symbol cannot be empty");

119:         require(bytes(baseURI_).length != 0, "Asset: baseUri cannot be empty");

120:         require(upgraderRole != address(0), "Asset: `upgraderRole` cannot be the zero address");

121:         require(pauserRole != address(0), "Asset: `pauserRole` cannot be the zero address");

175:             require(bytes(uri_).length == 0, "Asset: URI already set"); // if token is already minted how can URI be empty

284:         revert("Asset: renounceRole has been disabled");

```

```solidity
File: AssetFlowController.sol

509:         require(bytes(uri).length != 0, "AFC: Uri cannot be empty");

550:         require(bytes(uri).length != 0, "AFC: Uri cannot be empty");

551:         require(offerId != 0, "AFC: offerId must be non-zero");

553:         require(_offerOwners.remove(offerId), "AFC: Offer not submitted");

591:         require(offerCollection.ownerOf(offerId) == _msgSender(), "AFC: Not offer owner");

592:         require(numTokens != 0, "AFC: numTokens must be non-zero");

593:         require(settlementPrice != 0, "AFC: settlementPrice must be non-zero");

594:         require(bytes(uri).length != 0, "AFC: Uri cannot be empty");

595:         require(offerCollection.isApprovedForAll(_msgSender(), address(this)), "AFC: Offer not approved");

596:         require(!assetCollection.exists(offerId), "AFC: Offer already settled");

597:         require(settlement[offerId].numTokens == 0, "AFC: Offer already submitted");

628:         require(offerId != 0, "AFC: offerId must be non-zero");

629:         require(verifiedOfferCollection.exists(offerId), "AFC: Offer not verified");

630:         require(verifiedOfferCollection.ownerOf(offerId) == address(vault), "AFC: Verified offer not owned by Vault");

632:         require(details.numTokens != 0, "AFC: Settlement details not set");

715:         require(offerId != 0, "AFC: offerId must be non-zero");

716:         require(settlement[offerId].numTokens != 0, "AFC: Settlement does not exist");

775:         require(rentPrices[assetKey] != 0, "AFC: No rent price set");

809:         require(offerId != 0, "AFC: offerId must non-zero");

810:         require(assetCollection.balanceOf(address(vault), offerId) != 0, "AFC: Asset not held by vault");

811:         require(numTokens != 0, "AFC: Specify number of tokens");

812:         require(amount != 0, "AFC: Must specify amount");

813:         require(buyOutDetails[offerId].numTokens == 0, "AFC: Buyout already submitted");

840:         require(offerId != 0, "AFC: offerId must be non-zero");

841:         require(assetCollection.balanceOf(address(vault), offerId) != 0, "AFC: Asset not held by vault");

843:         require(buyOut.numTokens != 0, "AFC: BuyOutDetails not submitted");

875:         require(offerId != 0, "AFC: offerId must be non-zero");

876:         require(buyOutDetails[offerId].numTokens != 0, "AFC: buyOutDetails doesn't exist");

954:         revert("AFC: renounceRole is disabled");

1002:             require(amount == 1, "AFC: ERC721 amount must be 1");

```

```solidity
File: AssetValuer.sol

100:         require(pauserRole != address(0), "AssetValuer: `pauserRole` cannot be the zero address");

101:         require(upgraderRole != address(0), "AssetValuer: `upgraderRole` cannot be the zero address");

102:         require(valuerRole != address(0), "AssetValuer: `valuerRole` cannot be the zero address");

256:         revert("AssetValuer: renounceRole has been disabled");

352:             revert("Unsupported asset type");

```

```solidity
File: Offer.sol

123:         require(bytes(name_).length != 0, "Offer: name cannot be empty");

124:         require(bytes(symbol_).length != 0, "Offer: symbol cannot be empty");

125:         require(bytes(baseURI_).length != 0, "Offer: baseURI cannot be empty");

126:         require(offerer != address(0), "Offer: Offerer cannot be the zero address");

127:         require(upgraderRole != address(0), "Offer: `upgraderRole` cannot be the zero address");

128:         require(pauserRole != address(0), "Offer: `pauserRole` cannot be the zero address");

151:         revert("Offer: renounceRole has been disabled");

```

```solidity
File: Vault.sol

446:         revert("V:renounceRole has been disabled");

473:         require(investor != address(0), "V:Investor cant be 0");

500:         require(investor != address(0), "V:Investor cant be 0");

527:         require(shares >= expectedShares, "V:Share issue lower than expected"); // since there is slippage protection so its okay

557:         require(receiver != address(0), "V:receiver cant be 0");

558:         require(assetAddress != address(0), "V:assetAddress cant be 0");

559:         require(asset() != assetAddress, "V:Please use safeDeposit()");

570:         require(assets != 0, "V:Asset has no valuation");

572:         require(assets <= maxDeposit(receiver), "V:deposit more than max");

575:         require(assets >= minDeposit, "V:amount below minimum");

596:             revert("V:Invalid asset type");

629:         require(erc20Address != address(0), "V:erc20Address cant be 0");

630:         require(from != address(0), "V:from cant be 0");

631:         require(amount != 0, "V:amount should be non-zero");

664:         require(erc20Address != address(0), "V:erc20Address cant be 0");

665:         require(to != address(0), "V:to cant be 0");

666:         require(amount != 0, "V:amount should be non-zero");

697:         require(to != address(0), "V:To address cant be 0");

698:         require(collection != address(0), "V:collection cant be 0");

734:         require(to != address(0), "V:To address cant be 0");

735:         require(collection != address(0), "V:collection cant be 0");

793:         require(_assetValuer != address(0), "V:Asset valuer cant be 0");

810:         require(amountAssets != 0, "V:amountAssets cant be 0");

811:         require(withdrawalRequests[_msgSender()] == 0, "V:Request already exists");

812:         require(allowance(_msgSender(), address(this)) >= amountAssets, "V:Insufficient allowance");

829:         require(amountBefore != 0, "V:No withdrawal request exists");

870:             require(assetValuer.getAssetValuation(IVault(address(this)), holdingIds[i]) == 0, "V:Holding has value");

940:         require(holdingsDetails[holdingId].collection != address(0), "V:Holding does not exist");

1060:         require(assets != 0 && owner != address(0) && receiver != address(0), "V:Invalid 0 args");

1062:         require(assets <= requestedAmount, "V:Exceeds requested");

1285:         require(assets >= minDeposit, "V:Deposit below minimum");

1335:         require(hasRole(WHITELISTED_CONTRACT, collection), "V:Contract not whitelisted");

1391:         require(hasRole(INVESTOR_ROLE, to) || to == address(0), "V:to is not an investor");

```

```solidity
File: VaultOfVault.sol

102:         require(vaultToDepositInto != address(0), "VOV: vault must not be 0");

103:         require(assets != 0, "VOV: assets must not be 0");

127:         require(vaultToWithdrawFrom != address(0), "VOV: vault must not be 0");

128:         require(assets != 0, "VOV: assets must not be 0");

129:         require(hasRole(WHITELISTED_CONTRACT, vaultToWithdrawFrom), "VOV: Contract not whitelisted");

```

```solidity
File: Verifier.sol

110:         require(bytes(name_).length != 0, "Verifier: Name cannot be empty");

111:         require(bytes(symbol_).length != 0, "Verifier: Symbol cannot be empty");

112:         require(bytes(baseURI_).length != 0, "Verifier: baseURI cannot be empty");

113:         require(upgraderRole != address(0), "Verifier: `upgraderRole` cannot be the zero address");

114:         require(pauserRole != address(0), "Verifier: `pauserRole` cannot be the zero address");

154:         require(bytes(uri).length != 0, "Verifier: uri cannot be empty");

252:         revert("Verifier: renounceRole has been disabled");

```

</details> 
 


 ### <a name="GAS-11"></a>[GAS-11]
 ### Initializers can be marked as payable to save deployment gas
Payable functions cost less gas to execute, because the compiler does not have to add extra checks to ensure that no payment is provided. Initializers can be safely marked as payable, because only the deployer or the factory contract would call the function without carrying any funds.

*Instances (7)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

110:     function initialize(

```

```solidity
File: AssetFlowController.sol

439:     function initialize(

```

```solidity
File: AssetValuer.sol

99:     function initialize(address pauserRole, address upgraderRole, address valuerRole) external initializer {

```

```solidity
File: Offer.sol

115:     function initialize(

```

```solidity
File: Vault.sol

363:     function initialize(

```

```solidity
File: VaultOfVault.sol

70:     function initialize(

```

```solidity
File: Verifier.sol

103:     function initialize(

```

</details> 
 


 ### <a name="GAS-12"></a>[GAS-12]
 ### Use assembly for small keccak256 hashes, in order to save gas
If the arguments to the encode call can fit into the scratch space (two words or fewer), then its more efficient to use assembly to generate the hash (80 gas): keccak256(abi.encodePacked(x, y)) -> assembly {mstore(0x00, a); mstore(0x20, b); let hash := keccak256(0x00, 0x40); }

*Instances (3)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

1087:         return keccak256(abi.encode(id, collection));

```

```solidity
File: AssetValuer.sol

366:         return keccak256(abi.encode(id, collection));

```

```solidity
File: Vault.sol

1410:         return keccak256(abi.encode(id, collection));

```

</details> 
 


 ### <a name="GAS-13"></a>[GAS-13]
 ### Reduce gas usage by moving to Solidity 0.8.19 or later
Solidity version 0.8.19 introduced a number of gas optimizations, refer to the [Solidity 0.8.19 Release Announcement](https://soliditylang.org/blog/2023/02/22/solidity-0.8.19-release-announcement) for details.

*Instances (12)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

2: pragma solidity 0.8.19;

```

```solidity
File: AssetFlowController.sol

2: pragma solidity 0.8.19;

```

```solidity
File: AssetValuer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Offer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Vault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: VaultOfVault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: Verifier.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IAsset.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IAssetValuer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IOffer.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IVault.sol

2: pragma solidity 0.8.19;

```

```solidity
File: interfaces/IVerifier.sol

2: pragma solidity 0.8.19;

```

</details> 
 


 ### <a name="GAS-14"></a>[GAS-14]
 ### Functions guaranteed to revert when called by normal users can be marked `payable`
If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.

*Instances (31)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

191:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

206:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

401:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: AssetFlowController.sol

549:     function verifyOffer(uint256 offerId, string memory uri) external virtual whenNotPaused onlyRole(VERIFIER_ROLE) {

627:     function settle(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

714:     function rejectSettlement(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

839:     function acceptBuyOut(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

874:     function rejectBuyout(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

895:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

913:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

1077:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: AssetValuer.sol

157:     function pause() external onlyRole(PAUSER_ROLE) {

172:     function unpause() external onlyRole(PAUSER_ROLE) {

311:     function _authorizeUpgrade(address newImplementation) internal override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: Offer.sol

172:     function safeMint(address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) returns (uint256) {

194:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

209:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

454:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: Vault.sol

499:     function deregisterInvestor(address investor) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) { //@audit check if investor is already registered

772:     function setMinDeposit(uint256 _minDeposit) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

792:     function setAssetValuer(address _assetValuer) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

809:     function requestWithdraw(uint256 amountAssets) external virtual whenNotPaused onlyRole(INVESTOR_ROLE) {

827:     function cancelRequest() external virtual whenNotPaused onlyRole(INVESTOR_ROLE) {

867:     function cleanHoldings(bytes32[] memory holdingIds) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

904:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

919:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

1401:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

```solidity
File: Verifier.sol

153:     function safeMint(uint256 tokenId, address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) {

170:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

185:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

372:     function _authorizeUpgrade(address newImplementation) internal virtual override onlyRole(UPGRADER_ROLE) {}

```

</details> 
 


 ### <a name="GAS-15"></a>[GAS-15]
 ### Using `private` rather than `public` for constants, saves gas
If needed, the values can be read from the verified contract source code, or if there are multiple values there can be a single getter function that [returns a tuple](https://github.com/code-423n4/2022-08-frax/blob/90f55a9ce4e25bceed3a74290b854341d8de6afa/src/contracts/FraxlendPair.sol#L156-L178) of the values of all currently-public constants. Saves **3406-3606 gas** in deployment gas due to the compiler not having to create non-payable getter functions for deployment calldata, not having to store the bytes of the value outside of where it's used, and not adding another entry to the method ID table

*Instances (25)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

40:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

49:     bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

58:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

```

```solidity
File: AssetFlowController.sol

125:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

134:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

141:     bytes32 public constant CONTRACT_ADMIN_ROLE = keccak256("CONTRACT_ADMIN_ROLE");

150:     bytes32 public constant INVESTMENT_MANAGER_ROLE = keccak256("INVESTMENT_MANAGER_ROLE");

159:     bytes32 public constant OFFERER_ROLE = keccak256("OFFERER_ROLE");

168:     bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");

```

```solidity
File: AssetValuer.sol

33:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

42:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

51:     bytes32 public constant VALUER_ROLE = keccak256("VALUER_ROLE");

```

```solidity
File: Offer.sol

45:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

54:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

63:     bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

```

```solidity
File: Vault.sol

55:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

64:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

73:     bytes32 public constant ASSET_CONTROLLER_ROLE = keccak256("ASSET_CONTROLLER_ROLE");

82:     bytes32 public constant CONTRACT_ADMIN_ROLE = keccak256("CONTRACT_ADMIN_ROLE");

91:     bytes32 public constant INVESTOR_ROLE = keccak256("INVESTOR_ROLE");

100:     bytes32 public constant WHITELISTED_CONTRACT = keccak256("WHITELISTED_CONTRACT");

```

```solidity
File: VaultOfVault.sol

36:     bytes32 public constant PARENT_ASSET_CONTROLLER = keccak256("PARENT_ASSET_CONTROLLER");

```

```solidity
File: Verifier.sol

42:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

51:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

60:     bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

```

</details> 
 


 ### <a name="GAS-16"></a>[GAS-16]
 ### require()/revert() strings longer than 32 bytes cost extra gas
Each extra memory word of bytes past the original 32 [incurs an MSTORE](https://gist.github.com/hrkrshnn/ee8fabd532058307229d65dcd5836ddc#consider-having-short-revert-strings) which costs 3 gas.

*Instances (31)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

284:         revert("Asset: renounceRole has been disabled");

```

```solidity
File: AssetFlowController.sol

551:         require(offerId != 0, "AFC: offerId must be non-zero");

592:         require(numTokens != 0, "AFC: numTokens must be non-zero");

597:         require(settlement[offerId].numTokens == 0, "AFC: Offer already submitted");

628:         require(offerId != 0, "AFC: offerId must be non-zero");

632:         require(details.numTokens != 0, "AFC: Settlement details not set");

715:         require(offerId != 0, "AFC: offerId must be non-zero");

775:         require(rentPrices[assetKey] != 0, "AFC: No rent price set");

809:         require(offerId != 0, "AFC: offerId must non-zero");

812:         require(amount != 0, "AFC: Must specify amount");

840:         require(offerId != 0, "AFC: offerId must be non-zero");

843:         require(buyOut.numTokens != 0, "AFC: BuyOutDetails not submitted");

875:         require(offerId != 0, "AFC: offerId must be non-zero");

954:         revert("AFC: renounceRole is disabled");

1002:             require(amount == 1, "AFC: ERC721 amount must be 1");

```

```solidity
File: AssetValuer.sol

256:         revert("AssetValuer: renounceRole has been disabled");

```

```solidity
File: Offer.sol

151:         revert("Offer: renounceRole has been disabled");

```

```solidity
File: Vault.sol

446:         revert("V:renounceRole has been disabled");

527:         require(shares >= expectedShares, "V:Share issue lower than expected"); // since there is slippage protection so its okay

570:         require(assets != 0, "V:Asset has no valuation");

575:         require(assets >= minDeposit, "V:amount below minimum");

596:             revert("V:Invalid asset type");

631:         require(amount != 0, "V:amount should be non-zero");

666:         require(amount != 0, "V:amount should be non-zero");

810:         require(amountAssets != 0, "V:amountAssets cant be 0");

829:         require(amountBefore != 0, "V:No withdrawal request exists");

1062:         require(assets <= requestedAmount, "V:Exceeds requested");

1285:         require(assets >= minDeposit, "V:Deposit below minimum");

```

```solidity
File: VaultOfVault.sol

103:         require(assets != 0, "VOV: assets must not be 0");

128:         require(assets != 0, "VOV: assets must not be 0");

```

```solidity
File: Verifier.sol

252:         revert("Verifier: renounceRole has been disabled");

```

</details> 
 


 ### <a name="GAS-17"></a>[GAS-17]
 ### Splitting require() statements that use && saves gas

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Vault.sol

1060:         require(assets != 0 && owner != address(0) && receiver != address(0), "V:Invalid 0 args");

```

</details> 
 


 ### <a name="GAS-18"></a>[GAS-18]
 ### Structs can be packed into fewer storage slots
Each slot saved can avoid an extra Gsset (20000 gas) for the first setting of the struct. Subsequent reads as well as writes have smaller gas savings

*Instances (4)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

74:     struct OfferExtendedDetails {

92:     struct Settlement {

109:     struct BuyOutDetails {

```

```solidity
File: interfaces/IVault.sol

37:     struct Holding {

```

</details> 
 


 ### <a name="GAS-19"></a>[GAS-19]
 ### Consider using uint256(1)/uint256(2) instead of true/false for gas efficiency
Using uint256(1) and uint256(2) instead of true and false can save gas for certain changes. Consider using uint256(1)/uint256(2) when appropriate.

*Instances (9)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

649:                     true,

671:                 IERC1155Upgradeable(address(assetCollection)).setApprovalForAll(address(vault), true);

683:                     false,

1005:             if (isSeeding) IERC721Upgradeable(assetAddress).setApprovalForAll(address(vault), true);

1009:             if (isSeeding) IERC1155Upgradeable(assetAddress).setApprovalForAll(address(vault), true);

```

```solidity
File: Offer.sol

178:             _setApprovalForAll(to, _msgSender(), true); // Allow AssetFlowController to transfer

```

```solidity
File: Vault.sol

1344:             emit VaultHoldingsUpdated(_msgSender(), collection, id, assetType, true);

1359:             emit VaultHoldingsUpdated(_msgSender(), holding.collection, holding.id, holding.assetType, false);

```

```solidity
File: VaultOfVault.sol

81:         isParent = true;

```

</details> 
 


 ### <a name="GAS-20"></a>[GAS-20]
 ### Use != 0 instead of > for unsigned integer comparison

*Instances (1)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: AssetFlowController.sol

845:         uint256 diff = expectedAmount > buyOut.amount ? expectedAmount - buyOut.amount : buyOut.amount - expectedAmount;

```

</details> 
 


 ### <a name="GAS-21"></a>[GAS-21]
 ### Optimize names to save gas
public/external function names and public member variable names can be optimized to save gas. See [this](https://gist.github.com/IllIllI000/a5d8b486a8259f9f77891a919febd1a9) link for an example of how it works. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save 128 gas each during deployment, and renaming functions to have lower method IDs will save 22 gas per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92)

*Instances (171)*:
 
 <details>
 <summary>Click to expand!</summary>

```solidity
File: Asset.sol

40:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

49:     bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

58:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

65:     string public name;

70:     string public symbol;

76:     bytes32 public version;

116:     ) public initializer {

171:     ) external virtual onlyRole(MINTER_ROLE) {

191:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

206:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

234:     ) public virtual override(ERC1155Upgradeable, IAsset) {

256:     ) public virtual override(ERC1155BurnableUpgradeable, IAsset) {

272:     function setApprovalForAll(address operator, bool approved) public virtual override whenNotPaused {

283:     function renounceRole(bytes32, address) public virtual override {

297:     ) public view virtual override(ERC1155Upgradeable, AccessControlUpgradeable) returns (bool) {

311:     function exists(uint256 id) public view virtual override(ERC1155SupplyUpgradeable, IAsset) returns (bool) {

329:     ) public view virtual override(ERC1155Upgradeable, IAsset) returns (uint256) {

344:     ) public view virtual override(ERC1155Upgradeable, ERC1155URIStorageUpgradeable) returns (string memory) {

```

```solidity
File: AssetFlowController.sol

125:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

134:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

141:     bytes32 public constant CONTRACT_ADMIN_ROLE = keccak256("CONTRACT_ADMIN_ROLE");

150:     bytes32 public constant INVESTMENT_MANAGER_ROLE = keccak256("INVESTMENT_MANAGER_ROLE");

159:     bytes32 public constant OFFERER_ROLE = keccak256("OFFERER_ROLE");

168:     bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");

177:     IVault public vault;

184:     IOffer public offerCollection;

191:     IAsset public assetCollection;

198:     IVerifier public verifiedOfferCollection;

218:     mapping(uint256 => OfferExtendedDetails) public offerExtendedDetails;

230:     mapping(uint256 => Settlement) public settlement;

242:     mapping(uint256 => BuyOutDetails) public buyOutDetails;

254:     mapping(bytes32 => uint256) public rentPrices;

260:     bytes32 public version;

449:     ) external initializer {

508:     ) external virtual whenNotPaused onlyRole(OFFERER_ROLE) {

549:     function verifyOffer(uint256 offerId, string memory uri) external virtual whenNotPaused onlyRole(VERIFIER_ROLE) {

590:     ) external virtual whenNotPaused {

627:     function settle(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

714:     function rejectSettlement(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

746:     ) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

773:     function payRent(uint256 id, address collection, string memory tag) external virtual whenNotPaused {

808:     ) external virtual whenNotPaused onlyRole(OFFERER_ROLE) {

839:     function acceptBuyOut(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

874:     function rejectBuyout(uint256 offerId) external virtual whenNotPaused onlyRole(INVESTMENT_MANAGER_ROLE) {

895:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

913:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

923:     function getOfferOwner(uint256 offerId) external view virtual returns (address) {

932:     function getOffers() external view virtual returns (uint256[] memory, address[] memory) {

942:     function onERC1155Received(address, address, uint256, uint256, bytes memory) public virtual returns (bytes4) {

953:     function renounceRole(bytes32, address) public virtual override {

966:     function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {

```

```solidity
File: AssetValuer.sol

33:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

42:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

51:     bytes32 public constant VALUER_ROLE = keccak256("VALUER_ROLE");

64:     mapping(bytes32 => uint256) public valuations;

70:     bytes32 public version;

99:     function initialize(address pauserRole, address upgraderRole, address valuerRole) external initializer {

142:     ) external virtual whenNotPaused onlyRole(VALUER_ROLE) {

185:     function getValuation(address collection, uint256 tokenId) external view virtual returns (uint256) {

197:     function getValuation(bytes32 key) external view virtual returns (uint256) {

208:     function getAssetValuation(IVault vault, bytes32 key) external view virtual returns (uint256) {

224:     ) external view virtual returns (uint256) {

238:     function getVaultValuation(IVault vault) external view virtual returns (uint256) {

255:     function renounceRole(bytes32, address) public virtual override {

267:     function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {

```

```solidity
File: Offer.sol

45:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

54:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

63:     bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

70:     CountersUpgradeable.Counter public _tokenIdCounter;

81:     bytes32 public version;

122:     ) external initializer {

150:     function renounceRole(bytes32, address) public virtual override {

172:     function safeMint(address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) returns (uint256) {

194:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

209:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

219:     function exists(uint256 tokenId) external view virtual returns (bool) {

243:     ) public virtual override(ERC721Upgradeable, IERC721Upgradeable) whenNotPaused {

264:     ) public virtual override(ERC721Upgradeable, IERC721Upgradeable) whenNotPaused {

292:     ) public virtual override(ERC721Upgradeable, IERC721Upgradeable, IOffer) {

316:     ) public virtual override(ERC721Upgradeable, IERC721Upgradeable, IOffer) {

333:     ) public view virtual override(ERC721Upgradeable, IERC721Upgradeable, IOffer) returns (bool) {

348:     ) public view virtual override(ERC721Upgradeable, IERC721Upgradeable, IOffer) returns (address) {

362:     ) public view virtual override(ERC721Upgradeable, ERC721URIStorageUpgradeable) returns (string memory) {

377:         public

```

```solidity
File: Vault.sol

55:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

64:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

73:     bytes32 public constant ASSET_CONTROLLER_ROLE = keccak256("ASSET_CONTROLLER_ROLE");

82:     bytes32 public constant CONTRACT_ADMIN_ROLE = keccak256("CONTRACT_ADMIN_ROLE");

91:     bytes32 public constant INVESTOR_ROLE = keccak256("INVESTOR_ROLE");

100:     bytes32 public constant WHITELISTED_CONTRACT = keccak256("WHITELISTED_CONTRACT");

124:     mapping(bytes32 => Holding) public holdingsDetails;

137:     mapping(address => uint) public withdrawalRequests;

149:     mapping(address => uint256) public maxDeposits;

156:     IAssetValuer public assetValuer;

164:     bool public isParent;

169:     uint256 public minDeposit;

175:     bytes32 public version;

372:     ) external virtual initializer {

445:     function renounceRole(bytes32, address) public virtual override {

472:     ) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

499:     function deregisterInvestor(address investor) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) { //@audit check if investor is already registered

525:     ) external virtual whenNotPaused onlyRole(INVESTOR_ROLE) returns (uint256) {

556:     ) external virtual whenNotPaused onlyRole(ASSET_CONTROLLER_ROLE) returns (uint256) {

628:     ) external virtual whenNotPaused onlyRole(ASSET_CONTROLLER_ROLE) {

663:     ) external virtual whenNotPaused onlyRole(ASSET_CONTROLLER_ROLE) {

696:     ) external virtual whenNotPaused onlyRole(ASSET_CONTROLLER_ROLE) {

733:     ) external virtual whenNotPaused onlyRole(ASSET_CONTROLLER_ROLE) {

758:     ) external virtual whenNotPaused onlyRole(ASSET_CONTROLLER_ROLE) {

772:     function setMinDeposit(uint256 _minDeposit) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

792:     function setAssetValuer(address _assetValuer) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

809:     function requestWithdraw(uint256 amountAssets) external virtual whenNotPaused onlyRole(INVESTOR_ROLE) {

827:     function cancelRequest() external virtual whenNotPaused onlyRole(INVESTOR_ROLE) {

853:     ) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

867:     function cleanHoldings(bytes32[] memory holdingIds) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

889:     ) external virtual whenNotPaused onlyRole(CONTRACT_ADMIN_ROLE) {

904:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

919:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

929:     function getHoldings() external view virtual returns (bytes32[] memory) {

939:     function getHoldingDetails(bytes32 holdingId) external view virtual returns (Holding memory) {

951:     function getHoldingId(address collection, uint256 tokenId) external view virtual returns (bytes32) {

979:     ) public virtual override(ERC20Upgradeable, IERC20Upgradeable) whenNotPaused returns (bool) {

1000:     ) public virtual override whenNotPaused returns (bool) {

1022:     ) public virtual override whenNotPaused returns (bool) {

1053:         public

1071:     function redeem(uint256, address, address) public virtual override returns (uint256) {

1103:     ) public virtual whenNotPaused returns (bytes4) {

1128:     ) public virtual whenNotPaused returns (bytes4) { //@audit can directly call this

1152:     ) public virtual override whenNotPaused onlyRole(INVESTOR_ROLE) returns (uint256) {

1160:     function mint(uint256, address) public virtual override returns (uint256) {

1174:     ) public view virtual override(AccessControlUpgradeable, IVault) returns (bool) {

1194:     function totalAssets() public view virtual override(ERC4626Upgradeable, IVault) returns (uint256) {

1208:     function maxDeposit(address investor) public view virtual override returns (uint256) {

1221:     function asset() public view virtual override(ERC4626Upgradeable, IVault) returns (address) {

1235:     ) public view virtual override(AccessControlUpgradeable, IVault) returns (bool) {

```

```solidity
File: VaultOfVault.sol

36:     bytes32 public constant PARENT_ASSET_CONTROLLER = keccak256("PARENT_ASSET_CONTROLLER");

79:     ) external virtual override initializer {

101:     ) external virtual whenNotPaused onlyRole(PARENT_ASSET_CONTROLLER) {

126:     ) external virtual whenNotPaused onlyRole(PARENT_ASSET_CONTROLLER) {

```

```solidity
File: Verifier.sol

42:     bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

51:     bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

60:     bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

73:     bytes32 public version;

109:     ) public initializer {

153:     function safeMint(uint256 tokenId, address to, string calldata uri) external virtual onlyRole(MINTER_ROLE) {

170:     function pause() external virtual whenNotPaused onlyRole(PAUSER_ROLE) {

185:     function unpause() external virtual whenPaused onlyRole(PAUSER_ROLE) {

198:     function exists(uint256 tokenId) external view virtual returns (bool) {

221:     ) public virtual override(ERC721Upgradeable, IERC721Upgradeable) whenNotPaused {

239:     ) public virtual override(ERC721Upgradeable, IERC721Upgradeable) whenNotPaused {

251:     function renounceRole(bytes32, address) public virtual override {

266:     ) public view virtual override(ERC721Upgradeable, ERC721URIStorageUpgradeable) returns (string memory) {

281:         public

302:     ) public view virtual override(ERC721Upgradeable, IERC721Upgradeable, IVerifier) returns (address) {

```

```solidity
File: interfaces/IAsset.sol

20:     function balanceOf(address account, uint256 id) external view returns (uint256);

37:     function exists(uint256 id) external view returns (bool);

```

```solidity
File: interfaces/IAssetValuer.sol

48:     function getVaultValuation(IVault vault) external view returns (uint256);

57:     function getValuation(address collection, uint256 tokenId) external view returns (uint256);

65:     function getValuation(bytes32 key) external view returns (uint256);

67:     function getAssetValuation(IVault vault, bytes32 key) external view returns (uint256);

```

```solidity
File: interfaces/IOffer.sol

23:     function isApprovedForAll(address owner, address operator) external view returns (bool);

31:     function ownerOf(uint256 tokenId) external view returns (address);

```

```solidity
File: interfaces/IVault.sol

54:     function totalAssets() external view returns (uint256);

62:     function asset() external view returns (address);

69:     function isParent() external view returns (bool);

76:     function assetValuer() external view returns (IAssetValuer);

84:     function getHoldings() external view returns (bytes32[] memory);

92:     function getHoldingDetails(bytes32 holdingId) external view returns (Holding memory);

101:     function hasRole(bytes32 role, address account) external view returns (bool);

162:     function supportsInterface(bytes4 interfaceId) external view returns (bool);

```

```solidity
File: interfaces/IVerifier.sol

16:     function exists(uint256 tokenId) external view returns (bool);

24:     function ownerOf(uint256 tokenId) external view returns (address);

```

</details> 
 

