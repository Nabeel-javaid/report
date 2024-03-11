# 🛠️ Wise Lending
**Decentralized liquidity market that allows users to supply crypto assets and start earning a variable APY from borrowers.**

## Overview of the protocol
The wiseLending protocol presents itself as a sophisticated construct within the Ethereum blockchain ecosystem, designed to intricately blend traditional DeFi lending models with an advanced leveraged farming mechanism. This melding of functionalities aims to redefine the user experience in the DeFi space by offering a more granular control over asset management and yield optimization.

Initiating the user journey with the fundamental act of depositing assets into the protocol, wiseLending leverages these deposits either as collateral for loans or as stakes in yield farming activities. This is where the project distinguishes itself, particularly through the integration with Aave for lending services and the novel implementation of the PowerFarm feature for enhanced yield farming operations. The PowerFarm, specifically, allows users to employ leveraged positions in farming activities, thereby amplifying the potential returns on their staked assets.

Central to orchestrating this complex interaction of depositing, borrowing, and farming is the suite of smart contracts developed for the protocol. Notably, contracts such as AaveHelper and PendlePowerFarm play crucial roles. AaveHelper facilitates seamless interactions with the Aave lending platform, enabling users to borrow against their deposits or earn interest. On the other hand, the PendlePowerFarm contract manages the leveraged yield farming activities, optimizing strategies to maximize user returns from staked assets.

Moreover, the protocol's design encompasses mechanisms for tokenizing yield through its partnership with Pendle, adding another layer of strategic asset management. This feature allows users to capitalize on future yield prospects, further enhancing the utility and flexibility of their investments within the platform.

The intricate web of functionalities, from asset deposits to strategy optimization for leveraged farming, is underpinned by robust governance structures ensured through contracts like OwnableMaster. This governance framework secures the protocol's integrity, operational

<br/>

[![Screenshot-from-2024-03-11-19-04-35.png](https://i.postimg.cc/9FSnCMKk/Screenshot-from-2024-03-11-19-04-35.png)](https://postimg.cc/GHFQjccP)

## Approach taken while auditing the codebase
When I began the audit of the wiseLending protocol, my first step was to dive into the documentation provided. This crucial step helped me understand the protocol's intended functionality, architecture, and key components. I also reviewed any previous audit reports available. These reports offered insights into past vulnerabilities, how they were addressed, and areas that might require extra scrutiny.

Next, I systematically went through each smart contract provided, starting with the core contracts like `AaveHelper.sol`, `PositionNFTs.sol`, and `Declarations.sol`. I looked at the contracts' structure, inheritance patterns, and how they interact with external contracts and protocols. Understanding the flow between contracts was essential, so I paid close attention to function calls that crossed contract boundaries, ensuring they were properly authenticated and validated.

I then focused on the contracts managing user interactions, such as those related to lending, borrowing, and yield farming strategies. Here, I was particularly vigilant about identifying any functions that could be exploited due to reentrancy attacks, improper access controls, or mishandling of user funds.

The contracts related to oracles and price feeds, like `PendleLpOracle.sol` and `PtOracleDerivative.sol`, were also a critical area of my audit. I checked for any issues that could arise from oracle manipulation or stale data, which could lead to incorrect price reporting and, consequently, impact the protocol's operations.

After the initial review, I moved on to testing the contracts for common vulnerabilities using both static analysis(my own bot) and manual testing. This involved looking for issues such as integer overflows/underflows, reentrancy, gas limit vulnerabilities, and more. I also performed behavioral testing to observe how the contracts interact under various scenarios, including edge cases.

In summary, my approach was methodical, starting from a comprehensive review of the documentation and previous audits, moving through a detailed examination of each contract, and conducting thorough testing for vulnerabilities. This structured approach ensured that I covered all aspects of the protocol, understanding its intended functionality, and identifying any areas of concern.

## Codebase Quality

Overall, I consider the quality of the wise lending protocol codebase to be Good. The code appears to be mature and well-developed. I have noticed the implementation of various standards adhere to appropriately. Details are explained below:

| Codebase Quality Categories              | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Documentation**                        | The codebase is accompanied by comprehensive documentation that clearly explains the purpose and functionality of each contract and function. Comments within the code are helpful for understanding the logic and flow, although there are areas where additional details could further clarify complex processes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Consistency**                          | The naming conventions, file structure, and coding style are consistent throughout the project, facilitating readability and maintainability. This consistency extends to the use of modifiers, error handling, and event logging, which are uniformly applied across the contracts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Security Practices**                   | Security considerations are evident in the implementation of reentrancy guards, access controls, and checks-effects-interactions patterns. The use of well-established standards and libraries, such as OpenZeppelin for token standards and security utilities, adds to the robustness. However, the complexity of interactions between contracts, especially in the lending and borrowing mechanisms, necessitates rigorous security audits to ensure all edge cases and potential attack vectors are covered.                                                                                                                                                                                                                                                                           |
| **Testing and Coverage**                 | The protocol includes a suite of tests covering critical functionalities such as lending, borrowing, token transfers, and interaction with external protocols like AAVE. While the coverage is comprehensive for major flows, the addition of more tests for edge cases and stress conditions could further solidify confidence in the codebase's reliability.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Optimization and Gas Efficiency**      | The code demonstrates awareness of gas optimization, with practices like minimizing state changes, using efficient data storage types, and optimizing loops and calculations. However, given the protocol's complexity and interactions with external contracts, there are inherent challenges in achieving optimal gas efficiency. Continuous efforts to identify and implement optimizations would be beneficial, especially as the protocol scales.                                                                                                                                                                                                                                                                                                                                  |
| **Modularity and Upgradability**         | The protocol is designed with modularity in mind, allowing for easier maintenance and future expansion. Contracts are well-separated by functionality, which helps isolate changes and reduces the risk of unintended side effects. The approach to upgradability is cautious, with a clear governance process for making changes to critical components. This careful balance between modularity and upgradability is crucial for maintaining security while allowing the protocol to evolve.                                                                                                                                                                                                                                                                                 |
| **Dependency Management**                | Dependencies on external contracts and libraries are carefully managed, with explicit versioning for solidity and imported libraries. This reduces the risk of breaking changes and vulnerabilities introduced through dependencies. The protocol's reliance on external oracles and protocols like AAVE is a necessary aspect of its functionality, but it also introduces dependencies that need to be monitored for updates and potential security issues.                                                                                                                                                                                                                                                                                                                               |
| **Community and Ecosystem Integration**  | The protocol integrates well with the broader DeFi ecosystem, leveraging established protocols for lending, borrowing, and price feeds. This not only enriches the protocol's offerings but also encourages interoperability within the DeFi space. Active engagement with the community through documentation, open-source code, and channels for feedback contributes positively to the protocol's development and adoption.                                                                                                                                                                                                                                                                                                                             |


### Core Contracts and Functions:


In the wiseLending protocol, the liquidation and interest rate mechanisms are integral to maintaining the protocol's health and ensuring a stable equilibrium between lenders and borrowers. These mechanisms are meticulously designed, governed by a set of mathematical models to dynamically adjust interest rates and execute liquidations based on predefined conditions.

### Liquidation Mechanism

The liquidation process is initiated when a borrower's position becomes under-collateralized, defined by the Health Factor formula:

\[ \text{Health Factor} = \frac{\text{Total Collateral Value} \times \text{Collateral Factor}}{\text{Total Borrow Value}} \]

This calculation is pivotal, ensuring that borrowed positions are sufficiently over-collateralized to cover potential losses. The `LiquidationManager.sol` contract encapsulates the logic for triggering liquidations. It assesses positions against the health factor threshold; positions falling below this threshold are marked for liquidation. The contract’s `executeLiquidation` function is then called, facilitating the transfer of collateral from the borrower to the liquidator, often at a discount to incentivize liquidation and quickly secure the protocol's assets.

### Interest Rate Model

The interest rate model is critical for balancing supply and demand within the lending pool. It adjusts borrowing costs and lending yields in response to the utilization rate of the pool, defined as the ratio of total borrows to total liquidity. The formula used to calculate interest rates based on utilization is:

\[ \text{Interest Rate} = \text{Base Rate} + \left(\frac{\text{Utilization Rate}}{\text{Optimal Utilization Rate}}\right) \times \text{Slope Rate} \]

The `BorrowRateModel.sol` contract implements this model, specifically through the `getInterestRate` function, which calculates the current interest rate based on the pool's state. As utilization increases, borrowing costs rise to discourage further borrowing and encourage repayment, thereby replenishing liquidity. Conversely, lower utilization leads to lower borrowing costs, incentivizing borrowing activities.

This dynamic interest rate adjustment is essential for maintaining liquidity within the protocol and ensuring that lenders receive competitive yields on their deposits. The mathematical model behind this mechanism allows the protocol to respond to market conditions efficiently, ensuring stability and encouraging healthy lending and borrowing activities.




### Lending Mechanism

The lending process allows users to deposit assets into the protocol's liquidity pools, receiving pool tokens in return. These tokens represent the lender's share of the pool and entitle the holder to a portion of the interest payments collected from borrowers. The interest rate model adjusts the yield on deposited assets based on pool utilization, governed by the formula:

\[ \text{Yield} = \text{f(Interest Rate, Pool Utilization)} \]

This formula ensures that lenders are compensated according to the current demand for borrowing. The `deposit` function in `WiseLending.sol` handles the asset transfer, minting of pool tokens, and recording of the deposit in the lender's account. Interest accrual is dynamically calculated based on the changing state of the pool, ensuring fair and transparent compensation for lenders.

### Borrowing Mechanism

Borrowing entails users locking collateral in exchange for liquidity from the pool. The amount one can borrow is determined by the collateral value and the pool's collateral factor, a safeguard to prevent under-collateralization. The borrowable amount and interest rates are recalculated using:

\[ \text{Borrowable Amount} = \text{Collateral Value} \times \text{Collateral Factor} \]

\[ \text{Interest Payment} = \text{Borrowed Amount} \times \text{Interest Rate} \]

The `borrow` function within `WiseLending.sol` manages these calculations, ensuring that borrowers receive liquidity according to their collateral's value while maintaining a buffer against market volatility. Interest rates are adjusted in real-time to reflect the pool's utilization rate, balancing supply and demand dynamics.


