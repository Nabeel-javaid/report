# 🛠️ Analysis - Salty.IO
***An Ethereum-based DEX with zero swap fees, yield-generating Automatic Arbitrage, and a native WBTC/WETH backed stablecoin.***

### Summary
| List |Head |Details|
|:--|:----------------|:------|
|a) |Overview of the Salty.IO Project| Summary of the whole Protocol |
|b) |Technical Architecture| Architecture of the smart contracts |
|c) |The approach I would follow when reviewing the code | Stages in my code review and analysis |
|d) |Analysis of the code base | What is unique? How are the existing patterns used? "Solidity-metrics" was used  |
|e) |Test analysis | Test scope of the project and quality of tests |
|f) |Security Approach of the Project | Audit approach of the Project |
|g) |Codebase Quality | Overall Code Quality of the Project |
|h) |Other Audit Reports and Automated Findings | What are the previous Audit reports and their analysis |
|i) |Full representation of the project’s risk model| What are the risks associated with the project |
|j) |Packages and Dependencies Analysis | Details about the project Packages |
|k) |New insights and learning of project from this audit | Things learned from the project |



## a) Overview of the Salty Project

The Salty.IO project is a comprehensive ecosystem, focusing on token staking, liquidity provision, and efficient management of digital assets. The project is designed to incentivize users to participate actively in the ecosystem through staking and liquidity provision, while also ensuring secure and efficient management of crucial wallet addresses.

### Key Features and Functionalities:

1. **Staking Rewards Management:**
   - Manages the distribution of rewards for users staking SALT tokens or liquidity shares.
   - Provides mechanisms for users to claim accumulated rewards based on their share in the staking pool.

2. **Token Staking System:**
   - Allows users to stake SALT tokens and receive xSALT, representing their staked amount.
   - Implements a flexible unstaking process with varying durations, influencing the amount of SALT reclaimed.
   - Includes a feature for expedited unstaking with reduced returns, offering users a choice between speed and efficiency.

3. **Secure Wallet Management:**
   - Manages critical wallet addresses using a dual-wallet system (main and confirmation wallets).
   - Enables secure and controlled changes to wallet addresses through a proposal and confirmation process.
   - Incorporates a 30-day timelock for implementing confirmed changes, adding an extra layer of security.



<br/>

## b) Technical Architecture
[![Screenshot-from-2024-01-30-23-20-24.png](https://i.postimg.cc/B6FHcCmy/Screenshot-from-2024-01-30-23-20-24.png)](https://postimg.cc/CBFRwbTH)

| File Name               | Core Functionality                                      | Technical Characteristics                                                                                               | Importance and Management                                                 |
|-------------------------|---------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| `PoolMath.sol`          | Mathematical operations for liquidity pools             | Implements core math for pool operations, ensuring precise and efficient calculations for liquidity management         | Critical for accurate pool operations and ensuring financial stability    |
| `CoreChainlinkFeed.sol` | Price feed using Chainlink                              | Integrates Chainlink oracles for accurate BTC and ETH prices, crucial for asset valuation in various operations        | Essential for market-relevant pricing and reducing risks in valuations    |
| `CoreUniswapFeed.sol`   | TWAPs (Time-Weighted Average Prices) from Uniswap       | Provides TWAPs for WBTC and WETH, aiding in accurate and time-relevant pricing for these assets                        | Vital for maintaining up-to-date and fair asset pricing in the ecosystem  |
| `PriceAggregator.sol`   | Price aggregation and validation                        | Compares different price feeds for reliability, crucial for maintaining robust and accurate pricing in the ecosystem   | Ensures price integrity by filtering out anomalies and errors in feeds    |
| `CoreSaltyFeed.sol`     | Price retrieval using Salty.IO pools                    | Uses internal Salty.IO pools for asset pricing, adding an additional layer of pricing data                              | Adds a layer of internal validation for asset prices                      |
| `RewardsConfig.sol`     | Management of rewards configurations                    | Sets parameters for reward distribution, including daily percentages and allocation strategies                         | Key in managing how rewards are distributed, impacting user incentives    |
| `SaltRewards.sol`       | Handling of SALT rewards                                | Manages the distribution of SALT rewards from emissions and profits, crucial for incentivizing participation           | Central to the reward system, directly impacting user engagement          |
| `USDS.sol`              | USDS stablecoin management                              | Manages minting and burning of USDS, pivotal for maintaining its stablecoin properties                                  | Critical for the stablecoin's integrity and trustworthiness               |
| `StableConfig.sol`      | Configuration of stablecoin-related parameters          | Sets crucial parameters like collateral ratios and liquidation rewards, affecting the stablecoin's financial health    | Ensures the stablecoin system remains balanced and sustainable            |
| `CollateralAndLiquidity.sol` | Collateral and liquidity management              | Manages user collateral and liquidity provisions, fundamental for the platform's lending and borrowing features        | A cornerstone for the platform's financial activities and user trust      |
| `Liquidizer.sol`        | Token conversion and burning                            | Handles conversion of assets to USDS and burning excess tokens, important for maintaining token supply balance         | Plays a critical role in tokenomics and maintaining market equilibrium   |
| `StakingConfig.sol`     | Configuration of staking parameters                     | Sets key staking parameters like unstake periods and percentages, affecting how users interact with staking features  | Directly influences user staking behavior and platform liquidity          |
| `Liquidity.sol`         | Liquidity provision and management                      | Facilitates adding and withdrawing liquidity, crucial for the platform's liquidity pool operations                     | Key to ensuring sufficient liquidity in the platform's pools             |
| `StakingRewards.sol`    | Management of staking rewards                           | Oversees the distribution of rewards for staking, a major incentive for user participation                              | Central to the platform's staking mechanism and user retention           |
| `Staking.sol`           | SALT token staking functionalities                      | Handles the staking of SALT tokens, a fundamental aspect of the platform's tokenomics                                   | Critical for user engagement and maintaining the token's value stability |
| `ManagedWallet.sol`     | Secure management of crucial wallet addresses           | Ensures safe and controlled management of key wallets, a crucial aspect of platform security                            | Vital for maintaining trust and security in managing significant assets  |


## c) The approach I would follow when reviewing the code

First, by examining the scope of the code, I determined my code review and analysis strategy.
https://code4rena.com/audits/2024-01-saltyio

Accordingly, I would analyze and audit the subject in the following steps;

| Number |Stage |Details|Information|
|:--|:----------------|:------|:------|
|1|Compile and Run Test|[Installation](https://github.com/code-423n4/2024-01-salty?tab=readme-ov-file#build--test-instructions)|Test and installation structure is simple, cleanly designed|
|2|Architecture Review| [Salty](https://github.com/code-423n4/2024-01-salty/tree/main/src) |Provides a basic architectural teaching for General Architecture|
|3|Graphical Analysis  |Graphical Analysis with [Solidity-metrics](https://github.com/ConsenSys/solidity-metrics)|A visual view has been made to dominate the general structure of the codes of the project.|
|4|Slither Analysis  | [Slither Report](https://github.com/crytic/slither)| Slither report of the project for some basic analysis|
|5|Test Suits|[Tests](https://github.com/code-423n4/2024-01-salty?tab=readme-ov-file#build--test-instructions)|In this section, the scope and content of the tests of the project are analyzed.|
|6|Manuel Code Review|[Scope](https://github.com/code-423n4/2024-01-salty?tab=readme-ov-file#scope)||
|7|Using Solodit for common vulnerabilities|[Solodit](https://solodit.xyz/)|Using solodit to find common vulnerabilites related to Lending Borrowing protocol|
|8|Infographic|[Figma](https://www.figma.com/)|Tried to make Visual drawings to understand the hard-to-understand mechanisms|
|9|Special focus on Areas of  Concern|[Areas of Concern](https://github.com/code-423n4/2024-01-salty?tab=readme-ov-file#attack-ideas-where-to-look-for-bugs)|Code where I should focus more|

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

# Call Graph of Important Contracts

## Call graph of `Launch` contract
[![Screenshot-from-2024-01-30-12-52-14.png](https://i.postimg.cc/RVRdrJp6/Screenshot-from-2024-01-30-12-52-14.png)](https://postimg.cc/w71LLMpg)

## Call graph of `Pools` contracts

[![Screenshot-from-2024-01-30-12-53-45.png](https://i.postimg.cc/R09vW8Qb/Screenshot-from-2024-01-30-12-53-45.png)](https://postimg.cc/G4MWNXfk)

## Call graph of `Price_feed` contracts

[![Screenshot-from-2024-01-30-15-46-04.png](https://i.postimg.cc/SKZfSKhb/Screenshot-from-2024-01-30-15-46-04.png)](https://postimg.cc/R3HHG4hg)

## Call graph of `Staking` contracts

[![Screenshot-from-2024-01-30-15-53-21.png](https://i.postimg.cc/nL5TKLwY/Screenshot-from-2024-01-30-15-53-21.png)](https://postimg.cc/QBQphjDH)

## Contract Integration Graph

[![Screenshot-from-2024-01-30-15-54-15.png](https://i.postimg.cc/5yfz8d1S/Screenshot-from-2024-01-30-15-54-15.png)](https://postimg.cc/cg56Nzvv)


# High Level Domain Model

This domain model provides an overview of the key components  and how they are interconnected.

[![Screenshot-from-2024-01-30-22-20-55.png](https://i.postimg.cc/P51HHnpR/Screenshot-from-2024-01-30-22-20-55.png)](https://postimg.cc/RWCy18T7)


## e) Test analysis

 **Foundry Testing:**
   
   Foundry, a modern smart contract testing framework, was utilized to test the Salty contracts. This involved several key steps:
   
   a. **Installation and Setup:**
      - Foundry was installed using the command `curl -L https://foundry.paradigm.xyz | bash`, followed by `foundryup` to ensure the latest version was in use.
      - Dependencies were installed using `forge install`, ensuring all necessary components were available for the testing process.
      - Then to run the tests, I simply added the relevant files to the .env, referencing .env.example.
   
   b. **Execution of Tests:**
      - Tests were run using `fCOVERAGE="yes" NETWORK="sep" forge test -vv --rpc-url  https://rpc.sepolia.org`, executing a suite of predefined test cases that covered various functionalities and scenarios.
   
   c. **Test Coverage and Documentation:**
      - The overview of the testing suite, as referred to in the provided documentation, likely details the scope, scenarios, and objectives of each test, ensuring a comprehensive assessment of the contracts.
   

### What did the project do differently? ;
-   1) It can be said that the developers of the project did a quality job, there is a test structure consisting of tests with quality content. In particular, tests have been written successfully.

-   2) Overall line coverage percentage provided by your tests : 99

### What could they have done better?

-  1) If we look at the test scope and content of the project with a systematic checklist, we can see which parts are good and which areas have room for improvement As a result of my analysis, those marked in green are the ones that the project has fully achieved. The remaining areas are the development areas of the project in terms of testing ;


[![test-cases.jpg](https://i.postimg.cc/1zgD5wCt/test-cases.jpg)](https://postimg.cc/v1s40gdF)

Ref:https://xin-xia.github.io/publication/icse194.pdf

[![nabeel-1.jpg](https://i.postimg.cc/6qtBdLQW/nabeel-1.jpg)](https://postimg.cc/bDVXPnbW)


## f) Security Approach of the Project

### Successful current security understanding of the project;

1- The project hasn't underwent any audits(nothing stated in the docs), this innovative assessments on Code4rena is the first, where multiple auditors are scrutinizing the code.

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

Overall, I consider the quality of the Salty.io protocol codebase to be Good. The code appears to be mature and well-developed, though there are areas for improvement, particularly in code commenting. We have noticed the implementation of various standards adhere to appropriately. Details are explained below:

| Codebase Quality Categories              | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code Maintainability and Reliability** | The codebase demonstrates a high level of maintainability and reliability. It is clear that the developers have focused on creating a robust and scalable architecture. The use of established Ethereum development patterns and adherence to Solidity best practices contributes significantly to the code's overall reliability. |
| **Code Comments**                        | The codebase shows a lack of comprehensive comments, particularly in complex logic areas. This can make it challenging to understand the purpose and functionality of certain sections, which might hinder the onboarding of new developers and code audits. Improving the comments would significantly enhance the codebase's clarity and maintainability. |
| **Documentation**                        | The project includes comprehensive documentation. It covers the overall architecture, functionality, and specific details about key components like staking mechanisms and wallet management. This level of documentation is essential for both developers and end-users to understand and interact with the protocol effectively. |
| **Testing**                              | The protocol demonstrates a strong emphasis on testing, which is evident from the extensive test cases covering various scenarios. Regular and thorough testing enhances the code's stability and reduces the likelihood of unforeseen issues in a live environment. |
| **Code Structure and Formatting**        | The code is well-structured and consistently formatted. It follows a logical structure that makes it easy to navigate and understand. Consistent formatting across the codebase not only improves readability but also indicates a professional development approach. |

While the codebase is robust and well-structured, the lack of detailed comments in the code is a notable area for improvement. Enhancing the code commenting would further elevate the overall quality and accessibility of the project.


## h) Other Audit Reports and Automated Findings 

**Automated Findings:**
https://github.com/code-423n4/2024-01-salty/blob/main/bot-report.md

**Previous Audits**
[ABDK Audit](https://github.com/abdk-consulting/audits/blob/main/othernet_global_pte_ltd/ABDK_OthernetGlobalPTELTD_SaltyIO_v_2_0.pdf)
[Trail of Bits](https://github.com/trailofbits/publications/blob/master/reviews/2023-10-saltyio-securityreview.pdf)

**4naly3er report**
https://github.com/code-423n4/2024-01-salty/blob/main/4naly3er-report.md

## i) Full representation of the project’s risk model

Given the extensive documentation and smart contract code of the Salty.IO project, I will analyze and represent the project's risk model across different dimensions:

### 1. Admin Abuse Risks:
- **Centralized Control Points**: The project's governance is heavily reliant on smart contracts like `ManagedWallet.sol`, `ExchangeConfig.sol`, and the `DAO`. While these contracts ostensibly distribute control, there's a risk of centralization if few actors hold significant control.
- **Upgrade and Proposal Approval**: The `DAO` and `ManagedWallet.sol` contracts have functionalities to approve upgrades and changes. If these mechanisms are compromised or controlled by a small group, they could be used maliciously.
- **Emergency Functions**: Certain contracts may have emergency functions or owner-only privileges that could be exploited.

### 2. Systemic Risks:
- **Interconnected Contract Dependencies**: The project's DeFi ecosystem comprises various interdependent contracts (like `Liquidity.sol`, `Staking.sol`, `Emissions.sol`). A malfunction or exploitation in one contract could ripple through the entire system.
- **Market Volatility**: The project is exposed to market risks, especially due to its reliance on token prices (`SALT`, `USDS`, etc.). Sharp price movements can affect loan collateralization ratios, liquidity pool stability, and staking rewards.
- **Liquidity Risks**: The liquidity pools (`Pools.sol`) are central to the ecosystem. Any liquidity crunch or imbalance can pose systemic risks.

### 3. Technical Risks:
- **Smart Contract Vulnerabilities**: Given the complexity of contracts like `Upkeep.sol`, `Staking.sol`, and others, there's a risk of bugs or vulnerabilities that could be exploited, despite thorough auditing.
- **Oracle Failures**: The system relies on `PriceAggregator.sol` for market data. Any failure or manipulation in the price feeds can lead to incorrect valuations and system responses.
- **Upgradeability Issues**: If the system's contracts are upgradable, there's a risk of introducing new vulnerabilities during upgrades.

### 4. Integration Risks:
- **Third-Party Dependencies**: Dependencies on external protocols or contracts, such as OpenZeppelin's contracts (`SafeERC20.sol`, `ReentrancyGuard.sol`), can be a point of risk if these external elements have vulnerabilities.
- **Interoperability with Other Chains and Services**: Any integration with other blockchains or external services increases the risk of compatibility issues or security breaches from those external systems.
- **User Interface and External Application Integration**: Risks can arise from the integration of the core smart contracts with user interfaces or external applications, which might misrepresent or incorrectly interact with the underlying contracts.

### Mitigation Strategies:
1. **Decentralization and Governance**: Encourage broader participation in governance to reduce the concentration of power.
2. **Continuous Audits and Monitoring**: Regular audits of smart contracts and monitoring of system health to identify and rectify vulnerabilities.
3. **Insurance Mechanisms**: Exploring DeFi insurance options to mitigate potential losses due to systemic failures.
4. **Oracle Diversification**: Utilizing multiple oracles to mitigate the risk of single-point oracle failure.

By continuously monitoring these risk factors and implementing robust mitigation strategies, Salty.IO can aim to ensure a secure and resilient DeFi ecosystem for its users.

##  j) Packages and Dependencies Analysis 📦

| Package | Version | Usage | 
| --- | --- | --- | 
| [`openzeppelin`](https://www.npmjs.com/package/@openzeppelin/contracts) | [![npm]([![images.png](https://i.postimg.cc/MK89GbgX/images.png)](https://postimg.cc/pyqfG8Wt))](https://www.npmjs.com/package/@openzeppelin/contracts) |  Project uses version `4.9.3` while the recommended version is latest i.e: `5.0.1` 

## k) New insights and learning of project from this audit:

After thoroughly reviewing the Salty.io project's codebase and documentation, several new insights and learnings have emerged.

1. **Use of Uniswap and Chainlink**: The project utilizes Uniswap for decentralized trading and Chainlink for secure and reliable external data. This combination indicates an emphasis on robustness and security in obtaining market data and executing trades.

2. **Stablecoin Implementation**: The `USDS.sol` contract and related `StableConfig.sol` suggest the implementation of a stablecoin (`USDS`), backed by crypto assets like WBTC and WETH. This approach is critical for maintaining stability in a volatile crypto market.

3. **Rewards and Incentivization**: Contracts like `SaltRewards.sol` and `StakingRewards.sol` indicate a mechanism to reward users for participating in the ecosystem, such as through liquidity provision or staking. This is a common practice in DeFi to encourage user participation and liquidity.

4. **Governance and DAO**: The use of a DAO (Decentralized Autonomous Organization) structure for governance, as seen in `DAO.sol` and `ExchangeConfig.sol`, indicates a decentralized governance model. This aligns with the broader ethos of the DeFi sector promoting community-driven decision-making.

5. **Risk Management**: Contracts like `CollateralAndLiquidity.sol` and `Liquidizer.sol` show mechanisms for managing risks associated with collateralized debt positions and liquidity provision. This is essential for maintaining the system's health and user trust.

Overall, your project presents a sophisticated and multifaceted DeFi ecosystem, incorporating key elements like liquidity provision, stablecoin implementation, rewards, governance, and compliance. It shows a strong alignment with DeFi's principles of open finance and community governance, while also considering critical aspects like security and risk management.

Note: I didn't tracked the time, the time I mentioned is just an estimate

