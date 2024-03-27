# 🛠️ Taiko
**A based rollup -- inspired, secured, and sequenced by Ethereum.**

## Conceptual overview of the project:
The Taiko protocol is designed as an advanced Layer 2 (L2) solution for Ethereum, aiming to extend Ethereum's scalability, security, and decentralization. Its unique architecture is built upon the principles of Based Contestable Rollup (BCR), providing a novel approach to handling transactions, state transitions, and inter-layer communications. The protocol leverages several core mechanisms to ensure efficient operation, seamless user interaction, and robust security.

### Architecture and Functionalities:
Taiko introduces a multi-tiered rollup strategy, operating directly atop Ethereum's Layer 1 (L1) and capable of deploying further Taiko instances as Layer 3 (L3), essentially enabling horizontal scalability. This structure allows each layer to maintain its own state while synchronizing with the L1 state, thus ensuring data integrity and security without compromising scalability.

Central to Taiko's design is the Based Contestable Rollup (BCR) architecture, which employs a unique contestation mechanism to ensure the integrity of state transitions. This is achieved through a process where proposed blocks can be contested by the community, with economic incentives designed to encourage honest participation and penalize incorrect submissions. This process relies heavily on cryptographic proofs and the use of Merkle proofs for efficient and secure cross-chain communication.

### Core Mechanisms:
1. **Secure Cross-Chain Messaging:** Taiko implements a secure communication protocol between chains using a Signal Service and Merkle proofs. This allows for the verification of message integrity and transaction states across layers without compromising security.
2. **Token Bridging and Asset Management:** The protocol manages the bridging of assets across Ethereum and Taiko layers through specialized vault contracts. These contracts handle the locking, minting, and burning of tokens as they move between layers, ensuring secure and consistent asset management.
3. **Decentralized Rollup Operation (BCR):** Taiko's rollup operation is based on contestability, where blocks proposed by validators can be contested by others through the submission of proofs. This mechanism ensures that only valid state transitions are accepted, maintaining the network's integrity.
4. **Governance and Protocol Upgrades:** Governance in Taiko is decentralized and open to all token holders, facilitating collective decision-making on protocol upgrades and parameter adjustments. This approach ensures that the protocol evolves in a way that reflects the community's needs and priorities.
5. **Ethereum-Equivalence:** Taiko maintains Ethereum-equivalence, ensuring that developers can seamlessly port applications to the Taiko network. This compatibility extends to the execution environment, allowing for the deployment of smart contracts with minimal modifications.

<br/>

[![Screenshot-from-2024-03-27-14-19-25.png](https://i.postimg.cc/yWqZXSnP/Screenshot-from-2024-03-27-14-19-25.png)](https://postimg.cc/N24FQF39)


## Main Functionality of Protocol
Following is the main functioclity of the protocol ordered by significance and impact.

1. **State Transition Verification with Merkle Proofs**: At the heart of Taiko's operational integrity is the state transition verification mechanism. Leveraging Merkle proofs, it ensures that state changes across its layered architecture are accurately and securely validated. This functionality underpins the trust and security model of Taiko, allowing for decentralized verification of state changes without compromising scalability.

2. **Cross-Chain Communication and Signal Service**: Essential for interoperability within Taiko's ecosystem, the Signal Service facilitates secure and efficient communication between different layers (L1, L2, L3) and instances of Taiko. This service manages the emission, recording, and verification of signals across chains, crucial for asset bridging and maintaining coherence across the network.

3. **Decentralized Rollup Operation (Based Contestable Rollup - BCR)**: Taiko introduces a novel rollup mechanism where state transitions can be contested, ensuring the network's integrity through community-driven checks and balances. This approach not only enhances security but also aligns with the decentralized ethos of blockchain technology by allowing participants to challenge and verify state changes.

4. **Token Bridging and Asset Management**: Facilitating the seamless transfer and management of assets across Taiko's multi-layered ecosystem, this functionality includes smart contracts and mechanisms for locking, minting, and burning tokens as they move between layers. It's critical for enabling a fluid user experience and asset interoperability within Taiko and with external chains.

5. **Ethereum-Equivalence and EVM Compatibility**: By maintaining compatibility with Ethereum's Virtual Machine (EVM), Taiko ensures that developers can easily migrate existing Ethereum dApps to Taiko's network without significant modifications. This feature is pivotal for fostering adoption and facilitating a rich ecosystem of applications on Taiko.

6. **Governance through Decentralization**: Implementing a token-based governance model, Taiko empowers TKO token holders to participate in crucial decision-making processes, such as protocol upgrades and parameter adjustments. This functionality is key to ensuring that Taiko remains adaptive, community-driven, and aligned with the interests of its stakeholders.

## 1): State Transition Verification with Merkle Proofs:
State Transition Verification within Taiko leverages Merkle Proofs to ensure the integrity and security of transitions between states across its network. This mechanism is a cornerstone of Taiko's architecture, providing a decentralized and efficient method for validating state changes without requiring the full transaction data. By utilizing cryptographic proofs, Taiko can verify the inclusion or absence of a particular transaction in a block, thus ensuring the authenticity and finality of cross-chain communications and state transitions.

### Logic and Implementation:

1. **Merkle Tree Construction**: At the core of the Merkle Proof mechanism is the construction of a Merkle Tree for each block of transactions. Each leaf node of the tree represents a hash of individual transaction data, and each non-leaf node represents a hash of its child nodes. This recursive hashing continues until there is a single hash, the Merkle Root, which represents the entire block.

2. **Merkle Proof Verification**: To verify the inclusion of a transaction within a block, Taiko uses a Merkle Proof, which is a sequence of hashes that, when combined with the transaction hash, can recreate the Merkle Root stored in the block header. If the calculated root matches the stored root, the transaction's inclusion is proven.

    ```solidity
     function verifyMerkleProof(
        bytes32 _rootHash,
        address _addr,
        bytes32 _slot,
        bytes32 _value,
        bytes[] memory _accountProof,
        bytes[] memory _storageProof
    )
        internal
        pure
        returns (bytes32 storageRoot_)
    {
        if (_accountProof.length != 0) {
            bytes memory rlpAccount =
                SecureMerkleTrie.get(abi.encodePacked(_addr), _accountProof, _rootHash);

            if (rlpAccount.length == 0) revert LTP_INVALID_ACCOUNT_PROOF();

            RLPReader.RLPItem[] memory accountState = RLPReader.readList(rlpAccount);

            storageRoot_ =
                bytes32(RLPReader.readBytes(accountState[_ACCOUNT_FIELD_INDEX_STORAGE_HASH]));
        } else {
            storageRoot_ = _rootHash;
        }

        bool verified = SecureMerkleTrie.verifyInclusionProof(
            bytes.concat(_slot), RLPWriter.writeUint(uint256(_value)), _storageProof, storageRoot_
        );

        if (!verified) revert LTP_INVALID_INCLUSION_PROOF();
    }
    ```

3. **Block Header and Merkle Root Storage**: Taiko stores the Merkle Root of each block within its smart contracts, enabling the verification of Merkle Proofs without requiring access to the full block data. This approach significantly reduces the data and computational requirements for verification.


4. **Cross-Chain Verification**: For cross-chain communication and state transitions, Taiko employs Merkle Proofs to verify the state or transaction on one chain within another chain's smart contracts. This ensures that actions taken on one layer or instance are accurately reflected across the network.

    

<br/>

[![download-1.png](https://i.postimg.cc/GtTtPHvz/download-1.png)](https://postimg.cc/T5GTf27W)




## 2): Cross-Chain Communication and the Signal Service:
Cross-Chain Communication and the Signal Service in Taiko represent core components designed to enable secure and verified interactions between different blockchain layers or entirely separate blockchain networks. This mechanism is pivotal for maintaining the integrity and security of state transitions and data exchange across Taiko's layered architecture and external blockchains.

### Technical Overview and Implementation:

#### Signal Service:
At its core, the Signal Service facilitates the broadcasting and verification of signals (or messages) across chains. Signals could encompass state changes, token transfers, or generic messages that need to be communicated securely between chains.

1. **Signal Generation and Storage:**
   - **Contract Role:** `SignalService.sol` plays a pivotal role here. It defines the structure for storing signal-related data and the functionality to emit signals.
   - **Logic:** When a particular action is performed on one chain that needs to be communicated to another, a signal is generated within this service. This could be triggered by user actions, smart contract calls, or automated processes within the Taiko ecosystem.
   - **Data Storage:** Signals are stored with their respective metadata, including the source chain ID, the type of signal, and a unique identifier. This data structure ensures that each signal can be efficiently identified and processed.

2. **Cross-Chain Signal Transmission:**
   - **Contract Role:** Integrations with `Bridge.sol` facilitate the secure transmission of signals across chains. The bridge utilizes the signal data from `SignalService.sol` to initiate cross-chain messages.
   - **Logic:** The bridge contract captures the signal, encapsulates it into a cross-chain message, and transmits it to the target chain. This process involves cryptographic operations to ensure the integrity and authenticity of the signal.

```solidity
function _sendSignal(
        address _app,
        bytes32 _signal,
        bytes32 _value
    )
        private
        validSender(_app)
        nonZeroValue(_signal)
        nonZeroValue(_value)
        returns (bytes32 slot_)
    {
        slot_ = getSignalSlot(uint64(block.chainid), _app, _signal);
        assembly {
            sstore(slot_, _value)
        }
        emit SignalSent(_app, _signal, slot_, _value);
    }
```

3. **Signal Verification:**
   - **Contract Role:** Upon receiving a signal on the target chain, contracts `SignalService.sol` on the destination chain are responsible for verifying the signal's authenticity and integrity.
   - **Logic:** Verification involves checking the signal's metadata against expected parameters and cryptographic proofs (such as Merkle proofs) to ensure the signal was indeed emitted by the source chain and has not been tampered with during transmission.

```solidity
 function proveSignalReceived(
        uint64 _chainId,
        address _app,
        bytes32 _signal,
        bytes calldata _proof
    )
        public
        virtual
        validSender(_app)
        nonZeroValue(_signal)
    {
        HopProof[] memory hopProofs = abi.decode(_proof, (HopProof[]));
        if (hopProofs.length == 0) revert SS_EMPTY_PROOF();

        uint64 chainId = _chainId;
        address app = _app;
        bytes32 signal = _signal;
        bytes32 value = _signal;
        address signalService = resolve(chainId, "signal_service", false);

        HopProof memory hop;
        for (uint256 i; i < hopProofs.length; ++i) {
            hop = hopProofs[i];

            bytes32 signalRoot = _verifyHopProof(chainId, app, signal, value, hop, signalService);
            bool isLastHop = i == hopProofs.length - 1;

            if (isLastHop) {
                if (hop.chainId != block.chainid) revert SS_INVALID_LAST_HOP_CHAINID();
                signalService = address(this);
            } else {
                if (hop.chainId == 0 || hop.chainId == block.chainid) {
                    revert SS_INVALID_MID_HOP_CHAINID();
                }
                signalService = resolve(hop.chainId, "signal_service", false);
            }

            bool isFullProof = hop.accountProof.length > 0;

            _cacheChainData(hop, chainId, hop.blockId, signalRoot, isFullProof, isLastHop);

            bytes32 kind = isFullProof ? LibSignals.STATE_ROOT : LibSignals.SIGNAL_ROOT;
            signal = signalForChainData(chainId, kind, hop.blockId);
            value = hop.rootHash;
            chainId = hop.chainId;
            app = signalService;
        }

        if (value == 0 || value != _loadSignalValue(address(this), signal)) {
            revert SS_SIGNAL_NOT_FOUND();
        }
    }
```  

<br/>
[![Screenshot-from-2024-03-27-16-33-54.png](https://i.postimg.cc/qB3f289y/Screenshot-from-2024-03-27-16-33-54.png)](https://postimg.cc/t7pmjVR4)

## Codebase Quality

Overall, I consider the quality of the **Phat Contract Runtime** codebase to be of high caliber. The codebase exhibits mature software engineering practices with a strong emphasis on security, modularity, and clear documentation. The smart contracts leverage established standards, which demonstrates adherence to best practices within the Ethereum development community. Details are explained below:

| Codebase Quality Categories                     | Comments |
| ----------------------------------------------- | -------- |
| **Documentation and Comments**                  | The codebase is well-documented with comprehensive comments that explain the functionality and purpose of each contract and function, facilitating understandability and maintainability. |
| **Code Structure and Organization**             | Code is logically organized into directories and files based on functionality, making navigation and understanding of the project's architecture straightforward. |
| **Consistency and Coding Standards**            | The project adheres to common Solidity coding standards and naming conventions, ensuring consistency and readability across the codebase. |
| **Test Coverage and Quality**                   | With a test coverage of 79%, the project demonstrates a strong commitment to testing, though there's room for improvement to cover edge cases and potential security vulnerabilities more comprehensively. |
| **Security Practices and Considerations**       | The use of libraries like OpenZeppelin and custom security mechanisms indicates a focus on security. However, continuous security audits and reviews are essential to maintain high security standards. |
| **Use of Libraries and Dependencies**            | The project effectively uses reputable libraries (e.g., OpenZeppelin) to leverage pre-built functionalities, reducing the likelihood of bugs in foundational components. |
| **Upgradability and Maintenance**               | The project is designed with upgradability in mind, using proxy patterns and carefully managing state to ensure future improvements can be made with minimal disruption. |
| **Performance and Gas Optimization**            | The code shows considerations for gas optimization, crucial for scalability and user experience on Ethereum. Continuous profiling and optimization can further enhance performance. |
| **Error Handling and Data Validation**          | Solid error handling and data validation are present throughout, using require statements and custom error messages to ensure contract integrity and inform users of issues. |



## Analysis of the code base

The most important summary in analyzing the code base is the stacking of codes to be analyzed.
In this way, many predictions can be made, including the difficulty levels of the contracts, which one is more important for the auditor, the features they contain that are important for security (payable functions, uses assembly, etc.).

using [vscode-counter](https://github.com/uctakeoff/vscode-counter)


-  **filename:** This field indicates the language in which smart contracts are written

-  **Language:** Language in which the codebase is written.

-  **Code:** This field indicates the number of actual lines of code in the smart contract.

-  **Comment:** This field indicates the number of lines in the smart contract.

-  **Blank:** This field indicates the number of Blank lines in the smart contract.

-  **Total:** This field indicates the number of Total lines (code + comment + blank) in the smart contract.



Total : 85 files,  7611 codes, 2757 comments, 1534 blanks, all 11902 lines


## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [L1/ITaikoL1.sol](/L1/ITaikoL1.sol) | Solidity | 14 | 17 | 6 | 37 |
| [L1/TaikoData.sol](/L1/TaikoData.sol) | Solidity | 124 | 60 | 14 | 198 |
| [L1/TaikoErrors.sol](/L1/TaikoErrors.sol) | Solidity | 34 | 8 | 2 | 44 |
| [L1/TaikoEvents.sol](/L1/TaikoEvents.sol) | Solidity | 37 | 43 | 8 | 88 |
| [L1/TaikoL1.sol](/L1/TaikoL1.sol) | Solidity | 149 | 52 | 27 | 228 |
| [L1/TaikoToken.sol](/L1/TaikoToken.sol) | Solidity | 85 | 26 | 14 | 125 |
| [L1/gov/TaikoGovernor.sol](/L1/gov/TaikoGovernor.sol) | Solidity | 121 | 25 | 16 | 162 |
| [L1/gov/TaikoTimelockController.sol](/L1/gov/TaikoTimelockController.sol) | Solidity | 14 | 9 | 5 | 28 |
| [L1/hooks/AssignmentHook.sol](/L1/hooks/AssignmentHook.sol) | Solidity | 119 | 36 | 23 | 178 |
| [L1/hooks/IHook.sol](/L1/hooks/IHook.sol) | Solidity | 11 | 7 | 3 | 21 |
| [L1/libs/LibDepositing.sol](/L1/libs/LibDepositing.sol) | Solidity | 97 | 40 | 17 | 154 |
| [L1/libs/LibProposing.sol](/L1/libs/LibProposing.sol) | Solidity | 188 | 91 | 40 | 319 |
| [L1/libs/LibProving.sol](/L1/libs/LibProving.sol) | Solidity | 243 | 134 | 51 | 428 |
| [L1/libs/LibUtils.sol](/L1/libs/LibUtils.sol) | Solidity | 61 | 18 | 10 | 89 |
| [L1/libs/LibVerifying.sol](/L1/libs/LibVerifying.sol) | Solidity | 162 | 67 | 39 | 268 |
| [L1/provers/GuardianProver.sol](/L1/provers/GuardianProver.sol) | Solidity | 32 | 17 | 8 | 57 |
| [L1/provers/Guardians.sol](/L1/provers/Guardians.sol) | Solidity | 79 | 38 | 25 | 142 |
| [L1/tiers/DevnetTierProvider.sol](/L1/tiers/DevnetTierProvider.sol) | Solidity | 40 | 9 | 9 | 58 |
| [L1/tiers/ITierProvider.sol](/L1/tiers/ITierProvider.sol) | Solidity | 21 | 19 | 10 | 50 |
| [L1/tiers/MainnetTierProvider.sol](/L1/tiers/MainnetTierProvider.sol) | Solidity | 52 | 10 | 10 | 72 |
| [L1/tiers/TestnetTierProvider.sol](/L1/tiers/TestnetTierProvider.sol) | Solidity | 52 | 11 | 10 | 73 |
| [L2/CrossChainOwned.sol](/L2/CrossChainOwned.sol) | Solidity | 45 | 19 | 12 | 76 |
| [L2/Lib1559Math.sol](/L2/Lib1559Math.sol) | Solidity | 33 | 9 | 6 | 48 |
| [L2/TaikoL2.sol](/L2/TaikoL2.sol) | Solidity | 180 | 77 | 42 | 299 |
| [L2/TaikoL2EIP1559Configurable.sol](/L2/TaikoL2EIP1559Configurable.sol) | Solidity | 25 | 12 | 10 | 47 |
| [automata-attestation/AutomataDcapV3Attestation.sol](/automata-attestation/AutomataDcapV3Attestation.sol) | Solidity | 360 | 70 | 57 | 487 |
| [automata-attestation/interfaces/IAttestation.sol](/automata-attestation/interfaces/IAttestation.sol) | Solidity | 8 | 3 | 3 | 14 |
| [automata-attestation/interfaces/ISigVerifyLib.sol](/automata-attestation/interfaces/ISigVerifyLib.sol) | Solidity | 68 | 6 | 11 | 85 |
| [automata-attestation/lib/EnclaveIdStruct.sol](/automata-attestation/lib/EnclaveIdStruct.sol) | Solidity | 23 | 3 | 5 | 31 |
| [automata-attestation/lib/PEMCertChainLib.sol](/automata-attestation/lib/PEMCertChainLib.sol) | Solidity | 279 | 38 | 59 | 376 |
| [automata-attestation/lib/QuoteV3Auth/V3Parser.sol](/automata-attestation/lib/QuoteV3Auth/V3Parser.sol) | Solidity | 246 | 10 | 32 | 288 |
| [automata-attestation/lib/QuoteV3Auth/V3Struct.sol](/automata-attestation/lib/QuoteV3Auth/V3Struct.sol) | Solidity | 48 | 7 | 7 | 62 |
| [automata-attestation/lib/TCBInfoStruct.sol](/automata-attestation/lib/TCBInfoStruct.sol) | Solidity | 23 | 3 | 4 | 30 |
| [automata-attestation/lib/interfaces/IPEMCertChainLib.sol](/automata-attestation/lib/interfaces/IPEMCertChainLib.sol) | Solidity | 42 | 3 | 7 | 52 |
| [automata-attestation/utils/Asn1Decode.sol](/automata-attestation/utils/Asn1Decode.sol) | Solidity | 107 | 82 | 23 | 212 |
| [automata-attestation/utils/BytesUtils.sol](/automata-attestation/utils/BytesUtils.sol) | Solidity | 225 | 122 | 28 | 375 |
| [automata-attestation/utils/RsaVerify.sol](/automata-attestation/utils/RsaVerify.sol) | Solidity | 208 | 80 | 32 | 320 |
| [automata-attestation/utils/SHA1.sol](/automata-attestation/utils/SHA1.sol) | Solidity | 166 | 16 | 14 | 196 |
| [automata-attestation/utils/SigVerifyLib.sol](/automata-attestation/utils/SigVerifyLib.sol) | Solidity | 114 | 15 | 14 | 143 |
| [automata-attestation/utils/X509DateUtils.sol](/automata-attestation/utils/X509DateUtils.sol) | Solidity | 63 | 3 | 12 | 78 |
| [bridge/Bridge.sol](/bridge/Bridge.sol) | Solidity | 404 | 115 | 75 | 594 |
| [bridge/IBridge.sol](/bridge/IBridge.sol) | Solidity | 63 | 95 | 22 | 180 |
| [common/AddressManager.sol](/common/AddressManager.sol) | Solidity | 35 | 17 | 10 | 62 |
| [common/AddressResolver.sol](/common/AddressResolver.sol) | Solidity | 60 | 19 | 11 | 90 |
| [common/EssentialContract.sol](/common/EssentialContract.sol) | Solidity | 91 | 26 | 27 | 144 |
| [common/IAddressManager.sol](/common/IAddressManager.sol) | Solidity | 4 | 10 | 2 | 16 |
| [common/IAddressResolver.sol](/common/IAddressResolver.sol) | Solidity | 18 | 22 | 3 | 43 |
| [libs/Lib4844.sol](/libs/Lib4844.sol) | Solidity | 38 | 14 | 10 | 62 |
| [libs/LibAddress.sol](/libs/LibAddress.sol) | Solidity | 55 | 14 | 12 | 81 |
| [libs/LibMath.sol](/libs/LibMath.sol) | Solidity | 9 | 12 | 3 | 24 |
| [libs/LibTrieProof.sol](/libs/LibTrieProof.sol) | Solidity | 36 | 20 | 11 | 67 |
| [signal/ISignalService.sol](/signal/ISignalService.sol) | Solidity | 68 | 65 | 13 | 146 |
| [signal/LibSignals.sol](/signal/LibSignals.sol) | Solidity | 5 | 5 | 3 | 13 |
| [signal/SignalService.sol](/signal/SignalService.sol) | Solidity | 246 | 31 | 37 | 314 |
| [team/TimelockTokenPool.sol](/team/TimelockTokenPool.sol) | Solidity | 159 | 72 | 51 | 282 |
| [team/airdrop/ERC20Airdrop.sol](/team/airdrop/ERC20Airdrop.sol) | Solidity | 40 | 24 | 10 | 74 |
| [team/airdrop/ERC20Airdrop2.sol](/team/airdrop/ERC20Airdrop2.sol) | Solidity | 61 | 41 | 21 | 123 |
| [team/airdrop/ERC721Airdrop.sol](/team/airdrop/ERC721Airdrop.sol) | Solidity | 37 | 18 | 9 | 64 |
| [team/airdrop/MerkleClaimable.sol](/team/airdrop/MerkleClaimable.sol) | Solidity | 65 | 14 | 17 | 96 |
| [thirdparty/nomad-xyz/ExcessivelySafeCall.sol](/thirdparty/nomad-xyz/ExcessivelySafeCall.sol) | Solidity | 36 | 26 | 3 | 65 |
| [thirdparty/optimism/Bytes.sol](/thirdparty/optimism/Bytes.sol) | Solidity | 70 | 60 | 23 | 153 |
| [thirdparty/optimism/rlp/RLPReader.sol](/thirdparty/optimism/rlp/RLPReader.sol) | Solidity | 191 | 63 | 50 | 304 |
| [thirdparty/optimism/rlp/RLPWriter.sol](/thirdparty/optimism/rlp/RLPWriter.sol) | Solidity | 44 | 19 | 8 | 71 |
| [thirdparty/optimism/trie/MerkleTrie.sol](/thirdparty/optimism/trie/MerkleTrie.sol) | Solidity | 148 | 74 | 29 | 251 |
| [thirdparty/optimism/trie/SecureMerkleTrie.sol](/thirdparty/optimism/trie/SecureMerkleTrie.sol) | Solidity | 32 | 21 | 5 | 58 |
| [thirdparty/solmate/LibFixedPointMath.sol](/thirdparty/solmate/LibFixedPointMath.sol) | Solidity | 35 | 37 | 11 | 83 |
| [tokenvault/BaseNFTVault.sol](/tokenvault/BaseNFTVault.sol) | Solidity | 79 | 56 | 18 | 153 |
| [tokenvault/BaseVault.sol](/tokenvault/BaseVault.sol) | Solidity | 46 | 12 | 10 | 68 |
| [tokenvault/BridgedERC1155.sol](/tokenvault/BridgedERC1155.sol) | Solidity | 91 | 34 | 16 | 141 |
| [tokenvault/BridgedERC20.sol](/tokenvault/BridgedERC20.sol) | Solidity | 128 | 32 | 23 | 183 |
| [tokenvault/BridgedERC20Base.sol](/tokenvault/BridgedERC20Base.sol) | Solidity | 56 | 30 | 19 | 105 |
| [tokenvault/BridgedERC721.sol](/tokenvault/BridgedERC721.sol) | Solidity | 83 | 31 | 15 | 129 |
| [tokenvault/ERC1155Vault.sol](/tokenvault/ERC1155Vault.sol) | Solidity | 230 | 62 | 31 | 323 |
| [tokenvault/ERC20Vault.sol](/tokenvault/ERC20Vault.sol) | Solidity | 291 | 95 | 49 | 435 |
| [tokenvault/ERC721Vault.sol](/tokenvault/ERC721Vault.sol) | Solidity | 193 | 35 | 31 | 259 |
| [tokenvault/IBridgedERC20.sol](/tokenvault/IBridgedERC20.sol) | Solidity | 7 | 18 | 5 | 30 |
| [tokenvault/LibBridgedToken.sol](/tokenvault/LibBridgedToken.sol) | Solidity | 52 | 5 | 7 | 64 |
| [tokenvault/adapters/USDCAdapter.sol](/tokenvault/adapters/USDCAdapter.sol) | Solidity | 22 | 21 | 9 | 52 |
| [verifiers/GuardianVerifier.sol](/verifiers/GuardianVerifier.sol) | Solidity | 23 | 7 | 6 | 36 |
| [verifiers/IVerifier.sol](/verifiers/IVerifier.sol) | Solidity | 19 | 8 | 4 | 31 |
| [verifiers/SgxVerifier.sol](/verifiers/SgxVerifier.sol) | Solidity | 137 | 62 | 41 | 240 |


### Dependencies / External Imports

| Dependency / Import Path | Count |
| ------------------------ | ----- |
| `access/Ownable2StepUpgradeable.sol` | 1 |
| `governance/GovernorUpgradeable.sol` | 1 |
| `governance/TimelockControllerUpgradeable.sol` | 1 |
| `governance/compatibility/GovernorCompatibilityBravoUpgradeable.sol` | 1 |
| `governance/extensions/GovernorTimelockControlUpgradeable.sol` | 1 |
| `governance/extensions/GovernorVotesQuorumFractionUpgradeable.sol` | 1 |
| `governance/extensions/GovernorVotesUpgradeable.sol` | 1 |
| `proxy/utils/Initializable.sol` | 1 |
| `token/ERC1155/ERC1155Upgradeable.sol` | 1 |
| `token/ERC1155/extensions/IERC1155MetadataURIUpgradeable.sol` | 1 |
| `token/ERC1155/utils/ERC1155ReceiverUpgradeable.sol` | 1 |
| `token/ERC20/ERC20Upgradeable.sol` | 1 |
| `token/ERC20/extensions/ERC20SnapshotUpgradeable.sol` | 2 |
| `token/ERC20/extensions/ERC20VotesUpgradeable.sol` | 2 |
| `token/ERC20/extensions/IERC20MetadataUpgradeable.sol` | 1 |
| `token/ERC721/ERC721Upgradeable.sol` | 1 |
| `utils/introspection/IERC165Upgradeable.sol` | 1 |
| `utils/IVotes.sol` | 1 |
| `interfaces/IERC1271.sol` | 1 |
| `ERC1967/ERC1967Proxy.sol` | 1 |
| `utils/UUPSUpgradeable.sol` | 1 |
| `ERC1155/IERC1155.sol` | 1 |
| `ERC20/IERC20.sol` | 10 |
| `ERC20/extensions/IERC20Metadata.sol` | 1 |
| `ERC20/utils/SafeERC20.sol` | 4 |
| `ERC721/IERC721.sol` | 2 |
| `ERC721/IERC721Receiver.sol` | 1 |
| `utils/Address.sol` | 2 |
| `utils/Strings.sol` | 4 |
| `utils/cryptography/ECDSA.sol` | 3 |
| `utils/cryptography/MerkleProof.sol` | 1 |
| `utils/introspection/IERC165.sol` | 1 |
| `utils/math/SafeCast.sol` | 1 |
| `solady/src/utils/Base64.sol` | 2 |
| `solady/src/utils/LibString.sol` | 2 |


## Comment-to-Source Ratio:

On average there are **2.59** code lines per comment (lower=better).



## Test analysis

**Setup**

Clone using:

```bash
git clone https://github.com/code-423n4/2024-03-taiko
```

Getting into the directory
```bash
cd 2024-03-taiko/packages/protocol
```

I ran this command to install dependencies:

```bash
pnpm install
```
Then to compile the testcases I ran this:
```bash
pnpm compile
```

Then for testcases I ran this:
```bash
pnpm test
```



### What did the project do differently? ;
-   1) It can be said that the developers of the project did a quality job, there is a test structure consisting of tests with quality content. In particular, tests have been written successfully.

-   2) Overall line coverage percentage provided by your tests : 79%
 
### What can be done better:
-  1): It is recommended to increase the test coverage to 100% so make sure that each and every line is battle tested.












## Comprehensive Flow Diagram of the Phat Contract Runtime

<br/>

[![download.png](https://i.postimg.cc/1z2V8SNH/download.png)](https://postimg.cc/67VpPDc2)




## Architecture and Workflow

| File Name                          | Core Functionality                                                                                                                                                                                                                                                                                                         | Technical Characteristics                                                                                                                                                                                                                                                                                                                  | Importance and Management                                                                                                                                                                                                                                                                                                   |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `runtime.rs`                       | Constructs and configures the substrate runtime for Pink, integrating various pallets and configurations necessary for the execution of smart contracts within the Phala Network.                                                                                                                                             | Utilizes Rust's powerful type system and macros to declaratively construct a blockchain runtime. Highlights include parameter configuration and the inclusion of custom pallets like `pallet_pink`.                                                                                                                                         | Critical for the foundation of the Pink Runtime. Maintenance involves updating configurations, dependencies, and ensuring compatibility with Substrate updates.                                                                                                                                                             |
| `contract.rs`                      | Defines the API for instantiating and interacting with smart contracts, including logic for contract creation, execution, and querying.                                                                                                                                                                                     | Demonstrates Rust's capabilities for abstracting complex blockchain operations into a more accessible API. Leverages pallet_contracts to handle the intricacies of Wasm-based contract execution.                                                                                                                                            | Essential for the functionality of deploying and managing smart contracts on the network. Requires regular updates for new features or optimizations and thorough testing for security and functionality.                                                                                                                  |
| `storage/mod.rs` & `storage/external_backend.rs`  | Abstracts the storage interface, offering a clean API for runtime interactions with blockchain storage, enabling integration of custom storage solutions and optimized data manipulation.                                                                                                                                    | Showcases Rust's modularity and encapsulation features, enabling separation of concerns that enhances code maintainability. Facilitates the integration of custom storage solutions.                                                                                                                                                       | High importance for performance and data integrity. Regular updates may be required to optimize storage operations or introduce new mechanisms. Rigorous testing is crucial to prevent data loss or inconsistencies.                                                                                                          |
| `capi/mod.rs` & `capi/ecall_impl.rs` & `capi/ocall_impl.rs` | Serves as the bridge between the runtime and external calls, allowing communication with the host environment and external services through a defined C API, managing entry points for external calls.                                                                                                                       | Utilizes Rust's FFI capabilities for cross-language interoperability, ensuring type safety and efficient data exchange between the runtime and other components or services.                                                                                                                                                                 | Core to the extensibility and interoperability of the Pink Runtime with external systems. Maintenance involves ensuring API's backward compatibility, extending functionality, and safeguarding against potential security vulnerabilities in cross-language interactions.                         |
| `runtime/extension.rs`             | Implements custom chain extensions to provide additional functionalities to smart contracts, like access to off-chain data and custom cryptographic operations.                                                                                                                                                             | Demonstrates advanced Rust features like traits and generics to extend blockchain functionalities in a modular and reusable manner. Highlights the flexibility of Substrate and Pink Runtime's approach to enhance smart contract capabilities.                                                                                              | Vital for offering advanced features to smart contracts and expanding the Phala Network's use cases. Managing this component requires keeping up with the evolving needs of developers and ensuring that new extensions are secure, efficient, and well-integrated into the existing runtime architecture. |
| `runtime/pallet_pink.rs`           | The pallet used to store some custom configuration of the runtime, integrating the Pink Runtime with Substrate's pallet architecture to manage smart contract behaviors and settings.                                                                                                                                        | Incorporates Substrate's pallet system to extend blockchain functionality with custom configurations and behaviors tailored to the needs of the Pink Runtime.                                                                                                                                                                               | Key to customizing and fine-tuning the blockchain's operation to suit the specific requirements of smart contracts running on the Phala Network. Maintenance involves updating configurations and ensuring compatibility with broader runtime updates.                                         |
| `chain-extension/src/lib.rs` & `chain-extension/src/local_cache.rs` | Defines the chain extension feature implementation, including worker local cache management, facilitating advanced interactions between smart contracts and the blockchain.                                                                                                                                                    | Highlights Rust's capability to extend smart contract functionalities through chain extensions, providing a richer development environment and enabling more complex contract logic.                                                                                                                                                        | Crucial for enriching the smart contract ecosystem with enhanced capabilities and ensuring developers have access to the tools needed for complex applications. Management involves regular enhancements, security checks, and ensuring seamless integration with existing functionalities.    |







## Approach Taken while auditing the codebase
When auditing the Phat Contract, I initiated the process with review of the project's documentation to thoroughly understand its architectural design, intended functionalities, and the overall goal. This foundational knowledge set the stage for a more focused and effective code review, allowing me to evaluate the implementation against the project's objectives.

My approach to the audit was methodical, starting with a diving into the smart contracts due to their critical role in defining the project's core functionalities. I meticulously examined the code, focusing on the logic and flow of each function, the security measures in place, and how each piece contributes to the overall system's integrity and performance. Looked at placed to identify areas where the code deviated from best practices or could potentially lead to vulnerabilities.

Understanding the importance of the user interactions and data flows within the system, I scrutinized the mechanisms for handling user inputs, data storage, and contract interactions. This included reviewing function modifiers, access controls, and the handling of external calls to ensure robust defense mechanisms against common attack vectors such as reentrancy and overflow/underflow issues.

Given the project's reliance on off-chain computations and interactions with the Substrate runtime, I paid attention to the integration points and data exchange protocols. Assessing the security and efficiency of these interactions was paramount to ensure the system's resilience against manipulation and unauthorized access.

For each component of the system, from the smart contracts to the off-chain runtime logic, I evaluated the coding standards and documentation quality. Well-documented code and adherence to established coding conventions are crucial for maintaining code quality, facilitating future updates, and ensuring that new developers can easily understand and contribute to the project.



## Other Audit Reports and Automated Findings 

**Previous Audits**
There isn't any previous audit (mentioned on C4 overview)

**Known issues and risks**: Since it was a rust audt there wasn't any Bot race.





## Full representation of the project’s risk model


### Systemic Risks
The Phat Contract project, while innovative, presents several systemic risks that stem from its unique features and the interdependencies within its ecosystem. These risks are specifically tailored to its architecture and functionalities, as outlined below:

1. **Complexity and Interdependency**: The project's architecture is characterized by a high degree of complexity and interdependency between different components, such as the Pink Runtime, chain extensions, and smart contracts. This complexity increases the risk of systemic failures, where a bug or vulnerability in one part of the system could have cascading effects on the entire ecosystem.

2. **Chain Extension Execution Risk**: The reliance on chain extensions for executing off-chain computations introduces a risk of inconsistent execution environments or failures in the external infrastructure. This dependency not only increases the attack surface but also adds a layer of uncertainty regarding the execution of critical contract logic.

3. **Smart Contract Interaction Risks**: The system involves complex interactions between various smart contracts, where contracts call each other or interact in a composable manner. This interconnectivity increases the risk of unforeseen vulnerabilities emerging from contract interactions, potentially leading to exploits that can affect multiple components of the system.

### Centalization Risks:
Centralization could undermine the network's security, privacy, and decentralized ethos. Here are some centralization risks identified within the Phala protocol:

1. **Validator Concentration**: A small number of validators controlling a significant portion of the network poses a risk to the security and integrity of the blockchain. It could lead to censorship issues or collusion in governance decisions.

2. **Off-chain Worker (OCW) Centralization**: The reliance on off-chain workers for processing confidential smart contracts introduces a risk if a few entities operate a majority of these workers. It could compromise the confidentiality and integrity of the computation.

3. **TEE Hardware Manufacturer Dependence**: The reliance on Trusted Execution Environment (TEE) technology means that hardware manufacturers could potentially become central points of failure or influence. Any vulnerabilities in TEEs or monopolistic control by manufacturers could impact network security.

4. **Governance Dominance**: If a small group of stakeholders or entities gains disproportionate control over the governance process, they could steer the network in ways that serve their interests over the wider community. This includes decisions on protocol upgrades, treasury allocations, and feature implementations.




### Technical Risks

**Smart Contract Vulnerabilities:** Bugs or logical errors in the smart contracts can lead to loss of funds, unauthorized access, or unintended behavior.

**Scalability Concerns:** As transaction volumes grow, the platform must scale without compromising performance or security.


## New insights and learning of project from this audit:

Auditing the Phat Contract provided several new insights and learnings that are invaluable not only for this project but also for future blockchain development and security practices. Here are the key takeaways from the audit:

1. **Interplay Between On-chain and Off-chain Computation**: The architecture of Phat Contract, leveraging both on-chain smart contracts and off-chain computation, showcased the potential and challenges of hybrid decentralized applications. This dual approach can optimize performance and cost but also introduces complexity in ensuring data integrity and security across the boundary.

2. **Substrate Framework Utilization**: The project's use of the Substrate framework for off-chain computation highlighted the versatility of Substrate in supporting complex decentralized applications. It was insightful to see how Substrate's extensibility could be harnessed to build sophisticated off-chain logic that complements the on-chain smart contracts.

3. **Chain Extension Mechanism**: The audit provided a deep dive into the use of chain extensions for extending the functionalities of smart contracts. This mechanism is a powerful tool for bridging smart contracts with off-chain features, yet it requires careful design to maintain security and data consistency.

4. **Smart Contract Upgradeability**: The project's approach to smart contract upgradeability, ensuring that contracts can evolve over time without compromising on decentralization or security, was an important learning aspect. It emphasized the need for a robust governance mechanism to manage upgrades responsibly.

5. **Storage Optimization Techniques**: The strategies employed by Phat Contract for optimizing on-chain storage, including the use of efficient data structures and minimizing unnecessary state changes, were enlightening. These practices are crucial for managing gas costs and ensuring scalability.


NOTE: I don't track time while auditing or writing report, so what the time I specified is just a number


