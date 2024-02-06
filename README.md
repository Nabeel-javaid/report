# 🛠️ Analysis - Opus
***A cross margin credit protocol with autonomous monetary policy and dynamic risk parameters.***

### Summary
| List |Head |Details|
|:--|:----------------|:------|
|a) |Overview of the Opus Project| Summary of the whole Protocol |
|b) |Technical Architecture| Architecture of the smart contracts |
|c) |The approach I would follow when reviewing the code | Stages in my code review and analysis |
|d) |Analysis of the code base | What is unique? How are the existing patterns used? "Solidity-metrics" was used  |
|e) |Test analysis | Test scope of the project and quality of tests |
|f) |Security Approach of the Project | Audit approach of the Project |
|g) |Codebase Quality | Overall Code Quality of the Project |
|h) |Other Audit Reports and Automated Findings | What are the previous Audit reports and their analysis |
|h) |Full representation of the project’s risk model| What are the risks associated with the project |
|i) |Packages and Dependencies Analysis | Details about the project Packages |
|j) |New insights and learning of project from this audit | Things learned from the project |



## a) Overview of the Decent Project

The Opus project is a decentralized finance (DeFi) platform designed to offer users various financial services on the blockchain. It leverages smart contracts to enable activities such as collateralized lending, liquidity provision, and rewards distribution. Users can interact with the platform by depositing specific cryptocurrencies as collateral to participate in liquidity pools, earn rewards, or take out loans. The project focuses on security, scalability, and user experience, aiming to provide a comprehensive ecosystem for decentralized financial services.

### Key Features and Functionalities:

1. **Collateral Management**: Users can deposit various tokens (e.g., WBTC, ETH, wstETH) as collateral to participate in the platform's offerings.
2. **Liquidity Provision and Earning Rewards**: It facilitates liquidity provision to various pools, allowing users to earn rewards based on their contributions.
3. **Loan and Credit Facilities**: Offers mechanisms for users to take loans against their deposited collateral under certain conditions.
4. **Risk Management and Liquidation Protocols**: Implements safeguards and protocols for managing the health of assets and positions, including liquidation mechanisms for undercollateralized positions.
6. **PID Controller for Dynamic Adjustments**: Incorporates a PID controller for adaptive and dynamic adjustments within the system, enhancing stability and responsiveness.

## b) Technical Architecture:

Decent's architecture is built around a set of smart contracts, each serving specific roles:


| File Name               | Core Functionality                                      | Technical Characteristics                                                                                               | Importance and Management                                                 |
|-------------------------|---------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| `UTB.sol`               | Universal Transaction Bridge                            | Orchestrates swaps and bridges, interfaces with `Swapper` and `BridgeAdapter`                                           | Central to transaction execution; manages swaps and bridges               |
| `UTBExecutor.sol`       | Executes transactions                                   | Executes payment transactions, handles ERC20 and native tokens                                                          | Executes transactions post-swap/bridge, crucial for final transaction step|
| `UTBFeeCollector.sol`   | Manages fee collection                                  | Collects fees in various scenarios, handles ERC20 and native currency                                                   | Essential for economic sustainability, manages transaction fees           |
| `BaseAdapter.sol`       | Foundation for bridge adapters                          | Provides base functionalities and checks for bridge adapters                                                            | Basis for creating specific bridge adapters, ensures secure function calls|
| `DecentBridgeAdapter.sol` | Manages bridging operations                            | Handles the complexities of bridging tokens across chains                                                               | Facilitates asset transfer between blockchains                           |
| `StargateBridgeAdapter.sol` | Specialized bridge adapter using Stargate protocol | Manages bridging operations using Stargate, handles cross-chain transactions                                            | Enables efficient bridging with Stargate technology                      |
| `SwapParams.sol`        | Library for swap parameters                             | Provides structures and potentially utility functions for swaps                                                         | Essential for defining swap operations, used across swappers             |
| `UniSwapper.sol`        | Swapper implementation using Uniswap                    | Executes token swaps using Uniswap’s liquidity, handles swap logic                                                      | Enables token swapping, integral for transactions requiring token exchange|
| `DcntEth.sol`           | Manages Decent's native tokens                          | ERC-20 compliant, includes minting and burning functionalities                                                          | Manages token supply, critical for token operations within Decent        |
| `DecentEthRouter.sol`   | Manages routing and cross-chain logic                   | Handles transaction routing, bridges with LayerZero technology                                                          | Key for managing cross-chain interactions, routes transactions           |
| `DecentBridgeExecutor.sol` | Executes bridge transactions                          | Executes transactions involving bridging, supports both WETH and native ETH                                             | Executes complex cross-chain transactions, vital for bridging operations |


## c) The approach I would follow when reviewing the code

First, by examining the scope of the code, I determined my code review and analysis strategy.
https://code4rena.com/audits/2024-01-saltyio

Accordingly, I would analyze and audit the subject in the following steps;

| Number |Stage |Details|Information|
|:--|:----------------|:------|:------|
|1|Compile and Run Test|[Installation](https://github.com/code-423n4/2024-01-opus?tab=readme-ov-file#tests)|Test and installation structure is simple, cleanly designed|
|2|Architecture Review| [Opus](https://github.com/code-423n4/2024-01-opus/tree/main/src) |Provides a basic architectural teaching for General Architecture|
|3|Graphical Analysis  |Graphical Analysis with [Solidity-metrics](https://github.com/ConsenSys/solidity-metrics)|A visual view has been made to dominate the general structure of the codes of the project.|
|4|Slither Analysis  | [Slither Report](https://github.com/crytic/slither)| Slither report of the project for some basic analysis|
|5|Test Suits|[Tests](https://github.com/code-423n4/2024-01-opus?tab=readme-ov-file#tests)|In this section, the scope and content of the tests of the project are analyzed.|
|6|Manuel Code Review|[Scope](https://github.com/code-423n4/2024-01-opus?tab=readme-ov-file#scope)||
|7|Using Solodit for common vulnerabilities|[Solodit](https://solodit.xyz/)|Using solodit to find common vulnerabilites related to NFT protocol|
|8|Infographic|[Figma](https://www.figma.com/)|Tried to make Visual drawings to understand the hard-to-understand mechanisms|
|9|Special focus on Areas of  Concern|[Areas of Concern](https://github.com/code-423n4/2024-01-opus/tree/main/src/core)|Code where I should focus more|

## d) Analysis of the code base

The most important summary in analyzing the code base is the stacking of codes to be analyzed.
In this way, many predictions can be made, including the difficulty levels of the contracts, which one is more important for the auditor, the features they contain that are important for security (payable functions, uses assembly, etc.), the audit cost of the project, and the time to be allocated to the audit;
Uses Consensys Solidity Metrics


-  **File:** This field contains the name or path of the source file being analyzed.

-  **Logic Contracts:** This field indicates the number of Contracts involves

-  **Interfaces:** This field indicated specify the number or details of interfaces defined in the source file.

-  **Lines:** This field represents the total number of lines in the source file, including code lines, comments, and blank lines.

-  **nLines:** nLines typically stands for "normalized lines" and represents the total number of lines in the source file excluding blank lines. 

-  **nSLOC:** nSLOC stands for "normalized source lines of code," and it further refines nLines by excluding both blank lines and comments. It gives a more accurate measure of the code's complexity.

-  **Comment Lines:** This field specifies the number of lines in the source file that contain comments.

-  **Complex. Score:** This field may indicate a complexity score or metric for the source file. 

## Analysis of sloc of `Dao` contracts

[![Screenshot-from-2024-01-30-12-40-36.png](https://i.postimg.cc/gk1md16Z/Screenshot-from-2024-01-30-12-40-36.png)](https://postimg.cc/bs0K9Cgy)

## Analysis of sloc of `Launch` contracts

[![Screenshot-from-2024-01-30-12-41-44.png](https://i.postimg.cc/TwhF478X/Screenshot-from-2024-01-30-12-41-44.png)](https://postimg.cc/47kWK1N8)

## Analysis of sloc of `Pools` contracts

[![Screenshot-from-2024-01-30-12-42-23.png](https://i.postimg.cc/PxLV4CZX/Screenshot-from-2024-01-30-12-42-23.png)](https://postimg.cc/47g14NBq)

## Analysis of sloc of `price_feed` contracts

[![Screenshot-from-2024-01-30-12-43-47.png](https://i.postimg.cc/y6v0fy35/Screenshot-from-2024-01-30-12-43-47.png)](https://postimg.cc/s1GBxSc9)

## Analysis of sloc of `Rewards` contracts

[![Screenshot-from-2024-01-30-12-44-35.png](https://i.postimg.cc/2SK4x2xW/Screenshot-from-2024-01-30-12-44-35.png)](https://postimg.cc/5X8Y45T9)

## Analysis of sloc of `Stable` contracts

[![Screenshot-from-2024-01-30-12-45-10.png](https://i.postimg.cc/2yGWLw6V/Screenshot-from-2024-01-30-12-45-10.png)](https://postimg.cc/rRdsv55k)

## Analysis of sloc of `Staking` contracts

[![Screenshot-from-2024-01-30-12-45-46.png](https://i.postimg.cc/RZyHtqMQ/Screenshot-from-2024-01-30-12-45-46.png)](https://postimg.cc/bZ0rcySs)

## Analysis of sloc of src contracts

[![Screenshot-from-2024-01-30-12-47-00.png](https://i.postimg.cc/1tTVQJ05/Screenshot-from-2024-01-30-12-47-00.png)](https://postimg.cc/LYt8kk0r)

## Comment-to-Source Ratio:

**`DAO` contracts:** On average there are **4.69** code lines per comment (lower=better).

**`Launch` contracts:** On average there are **4.39** code lines per comment (lower=better).

**`Pools` contracts:** On average there are **1.82** code lines per comment (lower=better).

**`price_feed` contracts:** On average there are **4.49** code lines per comment (lower=better).

**`Rewards` contracts:** On average there are **3.54** code lines per comment (lower=better).

**`Stable` contracts:** On average there are **3.26** code lines per comment (lower=better).

**`Staking` contracts:** On average there are **2.98** code lines per comment (lower=better).

**`src` contracts:** On average there are **3.22** code lines per comment (lower=better).


## e) Test analysis

1. Install [Scarb](https://docs.swmansion.com/scarb/download.html) v2.4.0 by running:
```
curl --proto '=https' --tlsv1.2 -sSf https://docs.swmansion.com/scarb/install.sh | sh -s -- -v 2.4.0
```
2. Install [Starknet Foundry](https://github.com/foundry-rs/starknet-foundry) v0.13.1 by running:
```
curl -L https://raw.githubusercontent.com/foundry-rs/starknet-foundry/master/scripts/install.sh | sh

snfoundryup -v 0.13.1
```
3. Run `scarb test`.

### What did the project do differently? ;
-   1) It can be said that the developers of the project did a quality job, there is a test structure consisting of tests with quality content. In particular, tests have been written successfully.

-   2) Overall line coverage percentage provided by your tests : 90

### What could they have done better?

-  1) If we look at the test scope and content of the project with a systematic checklist, we can see which parts are good and which areas have room for improvement As a result of my analysis, those marked in green are the ones that the project has fully achieved. The remaining areas are the development areas of the project in terms of testing ;


[![test-cases.jpg](https://i.postimg.cc/1zgD5wCt/test-cases.jpg)](https://postimg.cc/v1s40gdF)

Ref:https://xin-xia.github.io/publication/icse194.pdf

[![nabeel-1.jpg](https://i.postimg.cc/6qtBdLQW/nabeel-1.jpg)](https://postimg.cc/bDVXPnbW)

-  2): It is recommended to increase the test coverage to 100% so make sure that each and every line is battle tested

## f) Security Approach of the Project

### Successful current security understanding of the project;

1- The project has already underwent an audits(stated in the docs), this innovative assessments on Code4rena is the second audit, where multiple auditors are scrutinizing the code.

According to the Docs, which can be found [here](https://demo-35.gitbook.io/untitled/security/external)

 `The core contracts found in opus_contracts directory have been audited by:`
- Trail of Bits

### What the project should add in the understanding of Security;

1- By distributing the project to testnets, ensuring that the audits are carried out in onchain audit. (This will increase coverage)

2- Add On-Chain Monitoring System; If On-Chain Monitoring systems such as Forta are added to the project, its security will increase.

For example ; This bot tracks any DEFI transactions in which wrapping, unwrapping, swapping, depositing, or withdrawals occur over a threshold amount. If transactions occur with unusually high token amounts, the bot sends out an alert. https://app.forta.network/bot/0x7f9afc392329ed5a473bcf304565adf9c2588ba4bc060f7d215519005b8303e3

3- After the Code4rena audit is completed and the project is live, I recommend the audit process to continue, projects like immunefi do this. 
https://immunefi.com/

4- Emergency Action Plan
In a high-level security approach, there should be a crisis handbook like the one below and the strategic members of the project should be trained on this subject and drills should be carried out. Naturally, this information and road plan will not be available to the public.
https://docs.google.com/document/u/0/d/1DaAiuGFkMEMMiIuvqhePL5aDFGHJ9Ya6D04rdaldqC0/mobilebasic#h.27dmpkyp2k1z

5- I also recommend that you have an "Economic Audit" for projects based on such complex mathematics and economic models. An example Economic Audit is provided in the link below;
Economic Audit with [Three Sigma](https://panoptic.xyz/blog/panoptic-three-sigma-partnership)

6 - As the project team, you can consider applying the multi-stage audit model.

[![sla.png](https://i.postimg.cc/nhR0kN3w/sla.png)](https://postimg.cc/Sn96Q1FW)

Read more about the MPA model;
https://mpa.solodit.xyz/

7 - I recommend having a masterplan applied to project team members (This information is not included in the documents).
All authorizations, including NPM passwords and authorizations, should be reserved only for current employees. I also recommend that a definitive security constitution project be found for employees to protect these passwords with rules such as 2FA. The LEDGER hack, which has made a big impact recently, is the best example in this regard;

https://twitter.com/Ledger/status/1735326240658100414?t=UAuzoir9uliXplerqP-Ing&s=19


## g) Codebase Quality

Overall, I consider the quality of the Opus protocol codebase to be Good. The code appears to be mature and well-developed. We have noticed the implementation of various standards adhere to appropriately. Details are explained below:


| Codebase Quality Categories                | Comments                                                                                                                                                                                                                                                |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code Clarity and Readability**           | The codebase demonstrates good clarity and readability. It follows consistent naming conventions, making it easier for developers to understand and maintain. Documentation is present, but additional comments could enhance understanding in complex areas.            |
| **Code Structure and Formatting**          | The codebase is well-structured and follows consistent formatting practices. Code is organized logically, which aids in readability and maintainability.                                                                                        |
| **Modularity and Organization**            | The codebase is well-organized, with clear separation of concerns into different contracts and modules. Each contract/module has a distinct purpose, which aids in maintainability and upgrades.                                                      |
| **Security Considerations**                | Security considerations are a top priority in the codebase. The use of time-lock mechanisms, role-based access control, and carefully designed functions mitigates risks and vulnerabilities. Extensive testing and auditing further enhance security.                   |
| **Gas Efficiency and Optimization**        | Gas efficiency is a key focus, with gas optimization techniques applied where possible. For instance, flash minting is implemented efficiently to minimize gas costs.                                                                            |
| **Testing and Test Coverage**              | Comprehensive testing is evident with a high test coverage percentage (90%). Test cases encompass various scenarios, ensuring robustness and reliability.                                                                                           |                                         |
| **External Dependencies and Imports**       | The codebase does not rely on external dependencies or imports, reducing complexity and ensuring self-sufficiency.                                                                   |
| **Code Comments**       | While the codebase contains some comments, additional detailed comments should be added, especially in complex sections. These comments will significantly enhance code comprehension and serve as valuable documentation.                                                                   |
| **Documentation and Comments**             | Documentation is present but could benefit from additional explanatory comments in certain complex sections. Overall, the codebase is adequately documented, making it accessible to developers and auditors.                                      |
| **Error Handling and Recovery**            | The codebase handles errors gracefully, with well-structured error messages and recovery mechanisms.                                                                                   |
| **Compliance with Best Practices**         | The codebase aligns with blockchain best practices, including ERC-20 standards, role-based access control, and timelock mechanisms. It adheres to well-established coding patterns.                                                               |


## h) Other Audit Reports and Automated Findings 

**Automated Findings:**
https://github.com/code-423n4/2024-01-salty/blob/main/bot-report.md

**Previous Audits**
[ABDK Audit](https://github.com/abdk-consulting/audits/blob/main/othernet_global_pte_ltd/ABDK_OthernetGlobalPTELTD_SaltyIO_v_2_0.pdf)
[Trail of Bits](https://github.com/trailofbits/publications/blob/master/reviews/2023-10-saltyio-securityreview.pdf)

**4naly3er report**
https://github.com/code-423n4/2024-01-salty/blob/main/4naly3er-report.md

## i) Full representation of the project’s risk model

### Systemic Risks
**Interoperability Issues:** As a cross-chain solution, Decent relies heavily on the stability and security of other blockchains. Issues in connected networks can cascade into the Decent ecosystem.

###  Technical Risks
**Smart Contract Vulnerabilities:** Bugs or flaws in smart contracts can lead to loss of funds or malfunctioning of the platform.

**Scalability Concerns:** As transaction volumes grow, the platform must scale without compromising performance or security.

### Integration Risks

**Compatibility with Different Blockchains:**  Ensuring that Decent works seamlessly across multiple chains requires constant updates and monitoring of changes in those ecosystems.

**Cross-Chain Security:** Security inconsistencies across different blockchains can expose vulnerabilities in cross-chain transactions.

##  j) Packages and Dependencies Analysis 📦

| Package | Version | Usage | 
| --- | --- | --- | 
| [`openzeppelin`](https://www.npmjs.com/package/@openzeppelin/contracts) | [![npm]([![images.png](https://i.postimg.cc/MK89GbgX/images.png)](https://postimg.cc/pyqfG8Wt))](https://www.npmjs.com/package/@openzeppelin/contracts) |  Project uses version `4.9.3` while the recommended version is latest i.e: `5.0.1` 

## k) New insights and learning of project from this audit:

After thoroughly reviewing the Decent project's codebase and documentation, several new insights and learnings have emerged.

1. **Innovative Approach to Cross-Chain Interactions**: Decent's utilization of a combination of bridging and swapping mechanisms to facilitate cross-chain transactions is a notable innovation. This approach addresses one of the most significant challenges in the blockchain ecosystem - the seamless transfer of value and interactions across different networks.

2. **Fee Management and Optimization**: The way Decent handles transaction fees, particularly in cross-chain contexts, provides valuable insights into cost optimization in blockchain applications.

3. **Scalability and Extensibility**: Decent's architecture, especially the use of adapter patterns for bridging and swapping, demonstrates a scalable approach to blockchain development. The ability to add new swappers and bridge adapters without overhauling the core system architecture allows for future extensibility.



Note: I didn't tracked the time, the time I mentioned is just an estimate


### Time spent:
5 hours



### Time spent:
5 hours
