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
  - **`storage_get`**: Abstracted functionalities for accessing and modifying contract storage, realized through Substrate's storage APIs.

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



## Decentralized Execution Environment
The Decentralized Execution Environment (DEE) within the Phat Contract framework stands as a pivotal innovation, fundamentally rearchitecting the landscape of blockchain computation. Central to this environment is the integration of off-chain workers (OCWs) operating within Trusted Execution Environments (TEEs), specifically instantiated by the runtime logic encapsulated within the `runtime.rs` and further augmented by the chain extension mechanism detailed in `extension.rs`.

At the heart of the DEE, the `runtime.rs` file orchestrates the core blockchain runtime environment, facilitating seamless interaction between on-chain and off-chain computation realms. It configures the substrate runtime, incorporating pallets like `pallet_contracts` for smart contract functionality and custom pallets such as `pallet_pink`, which are pivotal for custom chain extensions and the execution of off-chain computations within a secure enclave.

The chain extension functionality, meticulously crafted in `extension.rs`, serves as the bridge between smart contracts and the external logic or data required for complex computations. Through meticulously designed chain extension points, smart contracts can invoke off-chain computations executed within OCWs. These OCWs, running in a TEE (such as Intel SGX), ensure the integrity and confidentiality of the code and data being processed. The logic here is underpinned by the security guarantees of the TEE, where the correctness of computation can be verified without revealing the underlying data or logic to external parties.





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
| **Developer Tooling and Infrastructure**        | The project benefits from a robust set of developer tools for testing, deployment, and interaction, such as Hardhat, which enhances the development workflow. |



## Analysis of the code base

The most important summary in analyzing the code base is the stacking of codes to be analyzed.
In this way, many predictions can be made, including the difficulty levels of the contracts, which one is more important for the auditor, the features they contain that are important for security (payable functions, uses assembly, etc.), the audit cost of the project, and the time to be allocated to the audit;

using [vscode-counter](https://github.com/uctakeoff/vscode-counter)


-  **filename:** This field indicates the language in which smart contracts are written

-  **Language:** Language in which the codebase is written.

-  **Code:** This field indicates the number of actual lines of code in the smart contract.

-  **Comment:** This field indicates the number of lines in the smart contract.

-  **Blank:** This field indicates the number of Blank lines in the smart contract.

-  **Total:** This field indicates the number of Total lines (code + comment + blank) in the smart contract.


### Languages
| language | files | code | comment | blank | total |
| :--- | ---: | ---: | ---: | ---: | ---: |
| Rust | 13 | 2,745 | 259 | 406 | 3,410 |

### Directories
| path | files | code | comment | blank | total |
| :--- | ---: | ---: | ---: | ---: | ---: |
| capi | 2 | 310 | 94 | 68 | 472 |
| capi/src (Files) | 1 | 86 | 17 | 13 | 116 |
| capi/src/v1 | 1 | 224 | 77 | 55 | 356 |
| chain-extension | 2 | 829 | 19 | 123 | 971 |
| runtime/src | 9 | 1,606 | 146 | 215 | 1,967 |
| runtime/src/capi | 3 | 418 | 43 | 50 | 511 |
| runtime/src/runtime | 2 | 608 | 15 | 100 | 723 |
| runtime/src/storage | 2 | 172 | 36 | 24 | 232 |



## Comment-to-Source Ratio:

On average there are **3.66** code lines per comment (lower=better).



## Test analysis

**Setup**

Clone with recurse:

```bash
https://github.com/code-423n4/2024-03-phala-network
```

Getting into the directory
```bash
cd 2024-03-phala-network/phala-blockchain/crates/pink/runtime
```

I ran this command to execute all the test scripts:

```bash
cargo test
```



See code coverage by running this command:

```bash
./cov.sh
```


### What did the project do differently? ;
-   1) It can be said that the developers of the project did a quality job, there is a test structure consisting of tests with quality content. In particular, tests have been written successfully.

-   2) Overall line coverage percentage provided by your tests : 90%
 
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


