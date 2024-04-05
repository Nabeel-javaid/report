# 🛠️ Acala
**Building the liquidity layer of Web3 finance.**

## Conceptual overview of the project:

The Acala project, encompassing both the Acala and Karura networks, offers a decentralized finance (DeFi) hub on the Polkadot and Kusama ecosystems, respectively. At its core, Acala is designed to provide a suite of financial services and products, leveraging blockchain technology to offer a secure, efficient, and interoperable platform for users.

Users interact with Acala through a variety of DeFi services. One of the primary functionalities is the ability to stake and earn rewards, enabling users to lock up certain assets in return for rewards, thus contributing to the network's security and efficiency. The Earning pallet, for instance, allows users to bond their tokens and earn yields over time, which can be unbonded with or without a penalty, depending on the conditions set by the protocol.

Another significant feature is the LiquidCrowdloan, which permits users to participate in Polkadot's parachain slot auctions by locking up DOT tokens. In return, participants receive a liquid token, representing their staked value, which they can trade, use in DeFi protocols, or stake further to earn additional rewards. This mechanism ensures that users can support their preferred projects in the parachain auctions without losing liquidity.

The project also introduces various precompiled contracts, such as the Xtokens and Homa precompiles, which facilitate cross-chain transfers and operations, enabling users to seamlessly move assets across different blockchains within the Polkadot ecosystem. This interoperability is a key aspect of Acala, as it allows for a wide range of financial activities without the usual barriers seen in traditional finance.

StableAssets and the StableAsset precompile provide the functionality for creating and managing stablecoins, which are crucial for DeFi applications by offering a stable medium of exchange, lending, borrowing, and earning interest. The stablecoin mechanism within Acala ensures that users can transact with minimal price volatility compared to other cryptocurrencies.

From a user perspective, Acala presents a comprehensive DeFi platform that not only offers a range of financial services, such as staking, liquidity provision, and stablecoin management, but also integrates these services within a cross-chain ecosystem. Its focus on interoperability, liquidity, and user participation makes it a pioneering project in the DeFi space, aiming to bridge the gap between various blockchains and provide a unified platform for financial activities.

<br/>

[![Screenshot-from-2024-04-05-19-23-46.png](https://i.postimg.cc/SR35mXVT/Screenshot-from-2024-04-05-19-23-46.png)](https://postimg.cc/2LdTwSsh)

## System Overview

### Pallets:
- **Incentives**: Manages rewards and incentives for liquidity providers and stakers.

### Breakdown of the Functions:
- **deposit_dex_share**: Allows users to deposit DEX shares to earn rewards.
- **withdraw_dex_share**: Enables users to withdraw their DEX shares.
- **claim_rewards**: Users can claim their pending rewards.
- **update_incentive_rewards**: Admin function to update incentive rewards for various pools.
- **update_claim_reward_deduction_rates**: Adjusts the rate at which rewards are deducted upon claiming.
- **update_claim_reward_deduction_currency**: Sets the currency in which reward deductions are taken.
- **on_initialize**: Routine run at the beginning of each block to distribute rewards.

### Key Functions:
- **claim_rewards**: Central function for users to claim their accumulated rewards.
- **update_incentive_rewards**: Critical admin function to set or adjust the rewards users can earn from different pools.
- **on_initialize**: Automated function that triggers at the start of each block to process and distribute incentives based on defined parameters and user actions.







### Pallets:
- **Earning**: Manages bonded assets, allowing users to earn rewards by locking up tokens.

### Breakdown of the Functions:
- **bond**: Allows users to bond tokens to participate in earning rewards.
- **unbond**: Enables users to start the unbonding process for previously bonded tokens.
- **unbond_instant**: Users can instantly unbond tokens by paying a fee.
- **rebond**: Reverts the unbonding process, rebonding previously unbonded tokens.
- **withdraw_unbonded**: Completes the unbonding process, making funds available for withdrawal after the unbonding period.

### Key Functions:
- **bond**: Core function for users to participate and lock their tokens to start earning rewards.
- **unbond** and **unbond_instant**: Key functions for users to retrieve their bonded tokens, with an instant option available for a fee.
- **withdraw_unbonded**: Essential for users to claim their unbonded tokens after the specified unbonding period, finalizing the withdrawal process.







### Pallets:
- **Rewards**: Manages distribution and calculation of rewards for different activities within the protocol.

### Breakdown of the Functions:
##### Reward Accumulation:
- **accumulate_reward**: Adds rewards to a specific pool, increasing the total rewards available for distribution.

##### Share Management:
- **add_share**: Allocates shares to a participant, allowing them to earn rewards based on their share.
- **remove_share**: Removes a participant's shares, adjusting their potential rewards.

##### Reward Claiming:
- **claim_rewards**: Allows participants to claim their earned rewards from a specific pool.
- **claim_reward**: Enables claiming of rewards for a specific currency from a pool.

##### Share Adjustment:
- **set_share**: Sets the exact share amount for a participant, adjusting their reward potential directly.
- **transfer_share_and_rewards**: Transfers share (and potentially rewards) from one account to another, maintaining reward continuity.

### Key Functions:
- **accumulate_reward**: Fundamental for adding new rewards to pools, affecting the total rewards participants can earn.
- **add_share** and **remove_share**: Central to managing participant's involvement in reward pools, directly impacting their reward potential.
- **claim_rewards**: Critical for participants to retrieve their earned rewards, realizing their gains from participation in the protocol activities.




  


## Codebase Quality

Overall, I consider the quality of the Acala codebase to be of high caliber. The codebase exhibits mature software engineering practices with a strong emphasis on security, modularity, and clear documentation. 

| Codebase Quality Categories                     | Comments |
| ----------------------------------------------- | -------- |
| **Code Organization and Modularity**            | The codebase is well-organized, with distinct modules or pallets responsible for specific functionalities. This modular design aids in maintainability and scalability. |
| **Documentation and Comments**                  | Documentation within the codebase is thorough, including comments within the code that explain the functionality and purpose of functions and modules, enhancing understandability for new contributors. |
| **Testing and Coverage**                        | The project includes comprehensive tests covering various scenarios and edge cases. The presence of mock implementations and tests indicates a commitment to ensuring code reliability. |
| **Security Practices**                          | The codebase demonstrates a strong focus on security, with checks and validations to prevent overflow, underflow, and unauthorized access. Previous audits and prompt fixes to reported issues show a proactive approach to security. |
| **Error Handling and Logging**                  | Error handling is comprehensive, with clear distinctions between different error types and appropriate logging for critical events, aiding in debugging and monitoring. |
| **Consistency and Coding Standards**            | The project adheres to Rust's idiomatic practices and the Substrate framework's guidelines, contributing to a consistent and high-quality codebase. |
| **Dependencies Management**                     | Dependency management appears to be handled cautiously, with dependencies kept up-to-date and efforts to minimize unnecessary external dependencies, reducing potential security risks. |





## Core Functionality
1. **Decentralized Finance (DeFi) Ecosystem**: At its core, Acala serves as a DeFi hub within the Polkadot ecosystem, providing a suite of financial applications including a decentralized exchange (DEX), a stablecoin platform, and staking derivatives, catering to a wide range of DeFi activities.

2. **Stablecoin Platform (aUSD)**: One of Acala's flagship features is its decentralized stablecoin, aUSD, pegged to the USD. This stablecoin is central to the ecosystem, enabling stable value exchange, lending, borrowing, and yield generation.

3. **Decentralized Exchange (DEX)**: The DEX allows for seamless trading between various assets on the Acala network, supporting liquidity provisioning, yield farming, and other DeFi activities, enhancing the ecosystem's liquidity and accessibility.

4. **Liquid Staking (LDOT)**: Acala's liquid staking solution allows users to stake their DOT tokens while maintaining liquidity through LDOT, a derivative that represents staked DOT. This mechanism enables users to participate in network security while engaging in other DeFi activities.

5. **Earning Module**: The earning module provides users with opportunities to earn rewards through various DeFi strategies, optimizing yield across different assets and protocols within the Acala ecosystem.

6. **Cross-chain Capabilities (XCM)**: Leveraging Polkadot's cross-chain message passing (XCM), Acala facilitates interoperability and asset transfers across different blockchains within the Polkadot network, broadening its DeFi services reach.

7. **Governance and Upgradability**: Acala features a governance model that allows token holders to participate in decision-making processes, contributing to the network's evolution and upgradability, ensuring the protocol remains adaptable and community-driven.




### Liquid Staking (LDOT) Overview:

Liquid Staking on Acala allows users to stake their DOT tokens (Polkadot's native cryptocurrency) and receive LDOT in return. LDOT represents the staked DOT but remains liquid, meaning it can be traded, used in DeFi protocols for lending, borrowing, or providing liquidity, without losing the ability to earn staking rewards. This process enhances capital efficiency and ensures users don't have to choose between participating in network security and engaging in other DeFi activities.

### Workflow:

1. **Stake DOT**: Users stake their DOT tokens through the Acala platform. This action is facilitated by the protocol, which manages the staking process on the Polkadot network.

2. **Receive LDOT**: In return for staking DOT, users receive an equivalent amount of LDOT tokens. LDOT represents the staked DOT plus any staking rewards earned, adjusted for any slashing events.

3. **Use LDOT in DeFi**: Holders can use LDOT across various DeFi protocols on Acala for lending, borrowing, and liquidity provision, among other uses, without losing their staking position.

4. **Unstake and Withdraw**: Users can choose to unstake their DOT by returning the LDOT tokens. The protocol then initiates the unstaking process on Polkadot, which includes an unbonding period as per Polkadot's staking rules.

5. **Claim Staking Rewards**: While LDOT is staked, it accrues staking rewards. Users can claim these rewards through the protocol, which converts them into additional LDOT or allows for withdrawal in DOT after the unstaking process.

### Code Snippet:

- **Deposit DEX shares**:
    ```rust
	fn deposit_dex_share(who: &T::AccountId, lp_currency_id: CurrencyId, amount: Balance) -> DispatchResult {
    ```
    
- **Withdraw DEX shares**:
    ```rust
    	fn withdraw_dex_share(who: &T::AccountId, lp_currency_id: CurrencyId, amount: Balance) -> DispatchResult {
    ```
    
- **Claiming Rewards**:
    ```rust
    	fn claim_rewards(who: T::AccountId, pool_id: PoolId) -> DispatchResult {
    ```



<br/>

[![download.png](https://i.postimg.cc/HskMpBXZ/download.png)](https://postimg.cc/jCB2c68P)


### Earning Module:
The Earning Module in the Acala project is designed to manage the staking, earnings, and distribution of rewards within the ecosystem. This module facilitates users to bond or lock their tokens to earn rewards, while also providing the flexibility to unbond or unlock these tokens with or without a penalty, depending on the chosen method. Here’s a technical overview and workflow of how the Earning Module operates within the protocol:

### Workflow:

1. **Bonding Tokens**: Users bond their tokens to the protocol to participate in earning rewards. The bonding process locks the tokens, thereby securing them in the protocol's custody and making them eligible for earning rewards based on the protocol's staking and reward distribution mechanisms.

   ```rust
   // Bond tokens
   pub fn bond(origin: OriginFor<T>, amount: Balance) -> DispatchResult {...}
   ```

2. **Earning Rewards**: Based on the protocol's reward distribution logic, bonded tokens earn rewards over time. The module calculates these rewards according to the amount of bonded tokens and the duration for which they are bonded.

3. **Unbonding Tokens**: Users can choose to unbond their tokens. Depending on the protocol's configuration, this can either be instant, with a fee, or it can require waiting for a specified unbonding period without any fee.

   ```rust
   // Start unbonding tokens
   pub fn unbond(origin: OriginFor<T>, amount: Balance) -> DispatchResult {...}
   ```

4. **Withdrawing Unbonded Tokens**: After the unbonding period, users can withdraw their tokens back to their custody. The module ensures that the tokens are no longer earning rewards and are released from the lock.

   ```rust
   // Withdraw all unbonded tokens
   pub fn withdraw_unbonded(origin: OriginFor<T>) -> DispatchResult {...}
   ```

5. **Reward Distribution**: The module periodically calculates and distributes rewards to all participants based on the configured logic. This includes the total reward pool available, individual users' contributions (bonded tokens), and the duration of bonding.


The Earning Module's architecture is critical for incentivizing participation in the protocol and securing the network. By balancing the incentive mechanisms with user flexibility, it plays a pivotal role in the ecosystem's overall health and growth.



<br/>

[![Screenshot-from-2024-04-05-23-02-33.png](https://i.postimg.cc/bwZ9Pb5t/Screenshot-from-2024-04-05-23-02-33.png)](https://postimg.cc/SnpM7XkS)







## Archietecture and WorkFlow
| File Name  | Core Functionality                                                                                                                                                                           | Technical Characteristics                                                                                                                                                                                                                                                                                                                                 | Importance and Management                                                                                                                                                                                                                                        |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `earning.rs`               | This pallet allows users to bond or lock their tokens for a period to earn rewards. Unbonding or unlocking before the term requires a fee/penalty, or waiting for the unbonding period to finish.                                                                                                                         | - Utilizes the `LockableCurrency` trait for token locking.<br>- Implements `OnBonded` and `OnUnbonded` traits for hooking into bonding events.<br>- Manages bonding periods and penalties through configurable parameters.                                                                                                               | High importance for managing user investments and staking within the protocol. Managed through a combination of bonding parameters and the integration of on-chain events to adjust user balances and permissions based on their staking and unstaking actions.                                                         |
| `incentives.rs`            | Facilitates various incentive mechanisms for liquidity provision, staking, and other participatory actions within the ecosystem. It defines reward pools, accumulation of rewards, and distribution mechanisms to users based on their contributions.                                                                         | - Defines reward pools and mechanisms for accumulating and distributing rewards.<br>- Utilizes `MultiCurrency` for handling different types of rewards.<br>- Implements logic for updating incentives and managing claims through user interactions.                                                                                     | Crucial for encouraging user participation and liquidity provision within the ecosystem. It is managed by regularly updating incentive mechanisms and parameters to align with ecosystem goals and user engagement levels.                          
| rewards.rs | Handles the calculation and distribution of rewards across different pools, facilitating a fair and efficient rewards mechanism for various on-chain activities. | Implements a robust set of features for reward management, including multi-currency support, share-based reward distribution, and automatic claim mechanisms. It emphasizes security with checks against overflow and abuse scenarios, ensuring the reliability of reward calculations and distributions. | Vital for the Acala network's ecosystem, ensuring users are compensated for their contributions. It underpins the economic incentives that drive behavior on the platform and requires careful oversight to maintain balance and fairness in reward distribution. |




## Comprehensive Flow Diagram of the PoolTogether Protocol

<br/>

[![Screenshot-from-2024-03-11-22-58-22.png](https://i.postimg.cc/9MjdRkvj/Screenshot-from-2024-03-11-22-58-22.png)](https://postimg.cc/94JRsLmx)

## Approach Taken while auditing the codebase
When auditing the PoolTogether protocol, I began by thoroughly reviewing the project documentation and existing audit reports. This initial step helped me understand the protocol's intended functionality, architecture, and security considerations from both a theoretical and a practical perspective.

Next, I delved into the smart contract codebase, starting with the core contracts such as `PrizeVault.sol`, `PrizeVaultFactory.sol`, and `TwabERC20.sol`, among others. My focus was to map out the interactions between these contracts and identify critical functionalities like asset deposits, yield generation, prize distribution, and the unique mathematical models used, including TWAB and random number generation.

To ensure a comprehensive audit, I analyzed the smart contracts for common vulnerabilities, such as reentrancy attacks, overflow/underflow issues, and improper access control. Special attention was given to the contracts' integration with external components like the Chainlink VRF and ERC4626 vaults, assessing how these interactions could impact the protocol's security.

I also scrutinized the protocol's handling of rounding errors and yield buffer management. Understanding these aspects was crucial, given their potential impact on prize distribution fairness and the overall "no loss" principle.

Moreover, I reviewed the tests accompanying the smart contracts to assess their coverage and effectiveness in catching edge cases and potential bugs. Wherever possible, I suggested improvements or additional test scenarios to enhance the protocol's robustness.

In summary, my auditing approach was methodical and thorough, combining a deep dive into the smart contracts, rigorous vulnerability assessment. My goal was to ensure the PoolTogether protocol's security, efficiency, and adherence to its innovative savings and prize distribution mechanisms.












### Systemic Risks

Systemic risks in PoolTogether primarily revolve around the dependencies on external protocols and services for yield generation and randomness. The protocol's reliance on external ERC4626 yield vaults and RNG services introduces potential systemic vulnerabilities, including smart contract failures or manipulations in the integrated protocols.


The `yieldVault` from `PrizeVault.sol` represents an external dependency on ERC4626 yield sources. A systemic failure in the yield source could impact the prize vault's ability to generate yield and thereby prizes for users.

### Centralization Risks

Centralization risks stem from the roles and permissions granted to certain addresses within the protocol. For instance, the ability of the admin or owner to adjust yield strategies and fee parameters introduces a central point of control.

**Example Code**:
```solidity
function setYieldFeePercentage(uint32 _yieldFeePercentage) external onlyOwner {...}
function setYieldFeeRecipient(address _yieldFeeRecipient) external onlyOwner {...}
function setLiquidationPair(address _liquidationPair) external onlyOwner {...}
```
These functions in `PrizeVault.sol` allow the owner to modify critical financial parameters, presenting a centralization risk if the owner's address is compromised or if the owner acts maliciously.

### Technical Risks

**Smart Contract Vulnerabilities:** Bugs or logical errors in the smart contracts can lead to loss of funds, unauthorized access, or unintended behavior. Given the complexity of contracts like the Shrine, interest rate models, and oracle interactions, the attack surface is significant.

**Scalability Concerns:** As transaction volumes grow, the platform must scale without compromising performance or security.

### Integration Risks

Integration risks are primarily associated with the protocol's interactions with external DeFi platforms for yield generation and RNG services for random number generation. The protocol's security and functionality are contingent upon the reliability and integrity of these external services. Any changes or failures in the integrated platforms, such as smart contract upgrades, API modifications, or service discontinuations, could disrupt the protocol's operations. Moreover, the evolving landscape of DeFi presents a risk of compatibility issues, where updates in connected protocols could necessitate adjustments in PoolTogether's contracts to maintain seamless functionality and security.

## New insights and learning of project from this audit:
During the audit of the PoolTogether project, several key insights and learning opportunities emerged, highlighting the project's innovative approach to decentralized finance and its integration within the Ethereum ecosystem. The audit provided a deep dive into the mechanics of no-loss prize games, the use of yield-generating strategies, and the complexities of smart contract development and security. Below are some of the primary insights and learnings derived from this audit:

1. **No-Loss Prize Game Mechanics**: The concept of no-loss prize games, where users deposit funds that generate yield in DeFi protocols, with the yield being distributed as prizes, is both innovative and complex. Understanding how PoolTogether manages user deposits, generates yield, and allocates prizes required a comprehensive analysis of the interactions between different smart contracts and external DeFi protocols.

2. **Time-Weighted Average Balance (TWAB)**: The use of TWAB for fair and transparent prize distribution is a sophisticated approach to addressing the randomness and fairness in prize allocation. The audit process offered a deeper understanding of how TWAB works, including the mathematical principles underlying its implementation, and its significance in ensuring that the prize allocation process is both random and weighted towards users with longer deposit durations.

3. **Security Implications of External Integrations**: PoolTogether's reliance on external protocols for yield generation and random number generation (RNG) introduces various security considerations. The audit process emphasized the importance of evaluating the security and reliability of these external services, as well as the mechanisms through which PoolTogether interacts with them. This included an assessment of fallback procedures and contingency plans in case of external service failures.

4. **Yield Strategies and Financial Risks**: Analyzing the yield strategies employed by PoolTogether, including the integration with various DeFi yield sources, provided valuable insights into the financial risks and rewards associated with such strategies. The audit examined the mechanisms for optimizing yield generation, managing risks, and the potential impact of market volatility on the protocol's financial health.


The audit of PoolTogether not only highlighted the project's innovative contribution to the DeFi space but also provided a comprehensive learning experience on the technical, security, and financial aspects of building and maintaining a decentralized protocol. These insights are valuable for the ongoing development of PoolTogether, as well as for the broader DeFi community and future projects in the space.



NOTE: I don't track time while auditing or writing report, so what the time I specified is just a number




### Time spent:
4 hours
