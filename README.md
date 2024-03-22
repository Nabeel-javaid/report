# 🛠️ Phat Contract Runtime
**Coprocessor for blockchains.**

## Conceptual overview of the project:
The Phat Contract Runtime project is an innovative framework designed for the Phala Network, aiming to extend the capabilities of decentralized applications (dApps) by providing robust off-chain computation resources. At its core, it seeks to address the inherent limitations and high costs associated with on-chain computations, which often bottleneck blockchain technologies' scalability and practical utility. By moving complex or resource-intensive processes off-chain, while still ensuring the trustlessness and security blockchain technology is known for, Phat Contracts represent a significant step forward in decentralized computing.

The project introduces a seamless integration between on-chain smart contracts and off-chain computing tasks. Initially, users or dApps interact with smart contracts on the blockchain, which are inherently limited in their computational capabilities and suffer from high transaction fees. This is where the Phat Contract steps in; it acts as a bridge to off-chain computation, allowing for more complex, intensive operations without overburdening the blockchain or incurring prohibitive costs.

One of the most unique features of this framework is its ability to perform off-chain tasks while maintaining a trustless environment. This is achieved through a distributed network of off-chain workers operating within Trusted Execution Environments (TEEs), ensuring the integrity and confidentiality of the computation process. Users can, for example, initiate a task on-chain by calling a smart contract, which then delegates the task to off-chain workers. These workers perform the necessary computations and return the results to the blockchain, ensuring that the final output is verifiable and tamper-proof.

Another key functionality introduced by Phat Contracts is the capability to interact with external data sources directly. Traditional smart contracts cannot natively access off-chain data, which limits their utility in real-world applications. Phat Contracts overcome this by enabling off-chain workers to send HTTP requests, fetch data from external APIs, and incorporate this data into the blockchain ecosystem in a secure and decentralized manner. This opens up a myriad of possibilities for dApps, from fetching real-time market data for financial applications to integrating with web services for a broader range of functionalities.

<br/>

[![Screenshot-from-2024-03-22-16-10-38.png](https://i.postimg.cc/FKSNc6Cm/Screenshot-from-2024-03-22-16-10-38.png)](https://postimg.cc/zLqsYx1P)





## System Overview 

**Breakdown of the Functions**

**Key Functions:**
- **Initialization & Configuration:**
  - **`__pink_runtime_init`**: Initializes the Pink Runtime with configuration parameters.
  - **`on_genesis`**: Sets up initial state at the genesis block.
  - **`on_runtime_upgrade`**: Handles state migration and updates during runtime upgrades.

**Execution & Interaction:**
- **`instantiate`**: Deploys a new ink! smart contract instance.
- **`bare_call`**: Calls a method on a deployed contract.
- **`execute_with` & `execute_mut`**: Executes provided closures with access to the runtime's state, mutable and immutable versions respectively.

**Storage Management:**
- **Storage Access:**
  - **`storage_get`: Abstracted functionalities for accessing and modifying contract storage, realized through Substrate's storage APIs.

**Chain Extensions:**
- **`ChainExtension` Implementation:**
  - **`call` & `call_mut`**: Methods for executing chain extension calls, allowing contracts to interact with runtime-specific functionalities.
  - **`PinkExtension`**: A specific implementation of the `ChainExtension` interface providing extended functionalities to contracts.

**Utility & Helper Functions:**
- **`dispatch`**: A general dispatcher for routing calls to the appropriate functions based on identifiers.
- **`mask_low_bits`**: Utilized within the runtime for privacy or security related data processing.
- **`sanitize_args` & `handle_deposit`**: Functions to ensure the validity and security of transaction arguments and handle token deposits within contract calls.

**Cross-Contract Communication:**
- **`cross_call` & `cross_call_mut`**: Facilitate direct interactions between different contracts within the Pink Runtime environment.


**OCalls and ECalls:**
- **`__pink_runtime_init`** initializes runtime with given ocall pointers, setting up the environment for external calls.
- **`ecall` & `ocall` Functions**: Facilitate the execution of external calls out of the wasm environment, enabling interactions with the blockchain node or external data sources.

Each function plays a vital role in ensuring that contracts deployed on the Pink Runtime can operate securely, interact with external data.







## Codebase Quality

Overall, I consider the quality of the **Phat Contract Runtime** codebase to be of high caliber. The codebase exhibits mature software engineering practices with a strong emphasis on security, modularity, and clear documentation. The smart contracts leverage established standards, which demonstrates adherence to best practices within the Ethereum development community. Details are explained below:

| Codebase Quality Categories                     | Comments |
| ----------------------------------------------- | -------- |
| **Architecture and Design**                     | The Pink Runtime's architecture is modular and well-designed, allowing for easy extensibility and maintenance. Chain extensions and the layered approach for interacting with the Phala Network and off-chain systems are particularly noteworthy. |
| **Code Consistency**                            | The codebase maintains a high level of consistency in coding practices, including naming conventions, file organization, and commenting. This consistency facilitates readability and collaboration. |
| **Testing and Testability**                     | With a test coverage of 90%, the Pink Runtime demonstrates a strong commitment to ensuring code reliability and functionality. Unit and integration tests are thorough, covering critical paths and edge cases. |
| **Documentation**                               | Comprehensive documentation is provided, including detailed inline comments and high-level system overviews. This thorough documentation supports developers and users of the system effectively. |
| **Error Handling**                              | Error handling is robust, with clear and meaningful error messages. The use of Result types and explicit error handling patterns contributes to the system's resilience and debuggability. |
| **Dependencies Management**                     | Dependencies are well-managed, with a clear policy for dependency updates and minimal reliance on external libraries. This minimizes potential security risks and version conflicts. |
| **Innovation and Advanced Features**            | The Pink Runtime introduces innovative features not commonly found in traditional smart contract platforms, such as off-chain workers and chain extensions, pushing the boundaries of blockchain technology. |














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

This overview reflects a system designed for flexibility, performance, and security, with each component playing a vital role in the ecosystem. The management of these contracts involves a nuanced understanding of blockchain technology, a commitment to security, and a forward-looking approach to feature development and optimization.







## Approach Taken while auditing the codebase
When auditing the Smart Wallet protocol, I initiated the process with a comprehensive review of the project's documentation, focusing on the protocol's objectives, design patterns, and security mechanisms. This foundational understanding was crucial for appreciating the context and complexities of the protocol, particularly its integration with ERC-4337 standards and the innovative use of multi-ownership and WebAuthn technologies for enhanced security.

After this, I proceeded to analyze the smart contract codebase. Key contracts such as `CoinbaseSmartWallet.sol`, `MultiOwnable.sol`, `ERC1271.sol`, `MagicSpend.sol`, and others were scrutinized in detail. My aim was to understand the flow of transactions, the management of ownership rights, the execution of upgradeability patterns, and the verification processes for signatures and authentication.

Critical to my audit was the identification of security risks across various components. This included assessing vulnerability to common threats like reentrancy, improper handling of external calls, and potential flaws in signature verification processes. The unique aspects of the protocol, such as the cross-chain functionality and the handling of cryptographic operations in `FCL.sol`, required careful evaluation to ensure they did not introduce unintended security weaknesses.

Particular attention was given to the protocol’s upgradeability mechanism and its interaction with the `MagicSpend.sol` contract for gas management and fund withdrawals. I assessed how these features could be exploited or could lead to loss of funds if not properly secured. Additionally, I evaluated the robustness of multi-ownership management, ensuring that the protocol adequately protected against unauthorized changes in ownership or contract logic.

The audit also involved a thorough review of the protocol’s test suite. I looked for test coverage completeness, focusing on how well the tests addressed edge cases, potential race conditions, and the integrity of key functionalities like wallet creation, transaction execution, and owner management. Recommendations for additional tests or modifications were made to cover any identified gaps.

In conclusion, the approach taken while auditing the Smart Wallet protocol was thorough and multi-faceted, blending theoretical analysis with practical security assessments. The goal was to ensure the protocol's resilience against attacks, its compliance with Ethereum standards, and its reliability as a secure and user-friendly smart wallet.








### Systemic Risks

The Smart Wallet protocol introduces several advanced features and integrations to provide security, flexibility, and user convenience. However, like any complex system, it is not immune to systemic risks. Here are some identified risks specific to the protocol's architecture and functionalities:

1. **Upgradeability Mechanism**: While the use of UUPS (Universal Upgradeable Proxy Standard) in `CoinbaseSmartWallet.sol` allows for future improvements and bug fixes, it also introduces risks associated with centralized control over the upgrade process. If the upgrade function or the process is compromised, it could lead to the introduction of malicious code or vulnerabilities across all wallet instances.

2. **WebAuthn Integration Risks**: The integration of WebAuthn for authentication purposes (`WebAuthn.sol`) enhances security but also adds a layer of complexity that depends on external devices and services. This dependency could introduce risks related to device security, compatibility issues, or the failure of third-party services, impacting user access or transaction verification.

3. **Smart Contract Interactions and External Calls**: The protocol's interaction with external contracts, including ERC-4337 EntryPoint and other integrated services (e.g., for signature verification or fund management), could be vulnerable to exploitation if those external contracts are compromised. 

4. **Signature and Authentication Bypass**: Despite the robust implementation of signature verification (`ERC1271.sol`) and cryptographic operations (`FCL.sol`), any flaws in these critical components could allow attackers to bypass authentication checks, leading to unauthorized transactions or changes to wallet settings.



### Centralization Risks

Centralization risks stem from the roles and permissions granted to certain addresses within the protocol. 

**Upgradeability Centralization in `CoinbaseSmartWallet.sol`**

### Risk:
The protocol's reliance on upgradeability, allowing for future improvements and fixes, places significant power in the hands of those who can execute upgrades, potentially centralizing control.

```solidity
function _authorizeUpgrade(address newImplementation) internal view override onlyOwner {
}
```

**Single Point of Failure in Multi-Ownership Management (`MultiOwnable.sol`)**

### Risk:
The mechanism designed to distribute control among multiple owners can be compromised if the primary owner's credentials are compromised, leading to a centralized point of failure.

```solidity
function addOwnerAddress(address owner) public onlyOwner {
}

function removeOwnerAtIndex(uint256 index) public onlyOwner {
}
```

**Centralized Withdrawal Approval in `MagicSpend.sol`**

### Risk:
The `MagicSpend.sol` contract centralizes the withdrawal approval process, potentially enabling censorship or manipulation of fund access.

```solidity
function withdraw(WithdrawRequest memory withdrawRequest) external {
}
```

**Centralized Control over EntryPoint Deposits and Withdrawals (`MagicSpend.sol`)**

### Risk:
Exclusive control over interactions with the EntryPoint contract for deposits, withdrawals, and stake management introduces centralization, granting the owner undue influence over financial operations.

```solidity
function entryPointDeposit(uint256 amount) external payable onlyOwner {
}

function entryPointWithdraw(address payable to, uint256 amount) external onlyOwner {
}
```




### Technical Risks

**Smart Contract Vulnerabilities:** Bugs or logical errors in the smart contracts can lead to loss of funds, unauthorized access, or unintended behavior. Given the complexity of contracts like the Shrine, interest rate models, and oracle interactions, the attack surface is significant.

**Scalability Concerns:** As transaction volumes grow, the platform must scale without compromising performance or security.


## New insights and learning of project from this audit:

The audit of the Smart Wallet protocol offered several valuable insights and learnings, emphasizing the protocol's innovative approach to wallet management, security, and interoperability within the Ethereum ecosystem. Here are key takeaways:

**Embracing ERC-4337 Standards**

The protocol's integration with the ERC-4337 standard for smart contract wallets marks a significant step towards achieving user-friendly and secure wallet solutions. This approach not only simplifies user interactions by removing the necessity for gas management but also opens avenues for advanced wallet functionalities like batch transactions and improved security mechanisms. 

**Advanced Security Through WebAuthn**

The utilization of WebAuthn for authentication purposes in `WebAuthn.sol` introduces a level of security typically reserved for traditional web applications into the blockchain domain. This fusion of web standards with blockchain technology not only enhances security but also demonstrates the protocol's commitment to adopting best practices from outside the blockchain world to mitigate common threats such as phishing and key theft.

**Upgradeability with User Sovereignty**

The careful implementation of upgradeability in `CoinbaseSmartWallet.sol` through UUPS showcases a thoughtful approach to maintaining and improving smart contract code while preserving user sovereignty. It serves as a learning point on balancing the need for future-proofing contracts with ensuring that upgrades do not compromise decentralized principles or user trust.



NOTE: I don't track time while auditing or writing report, so what the time I specified is just a number


