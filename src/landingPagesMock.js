import { ReactComponent as IcnAssetFreezing } from "./assets/icons/icn-asset-freezing.svg";
import { ReactComponent as Icn2FA } from "./assets/icons/icn-2FA.svg";
import { ReactComponent as IcnReversibleTransactions } from "./assets/icons/icn-reversible-transactions.svg";
import { ReactComponent as IcnRecoverableVaults } from "./assets/icons/icn-recoverable-vaults.svg";
import { ReactComponent as IcnApprovalManager } from "./assets/icons/icn-approval-manager.svg";
import { ReactComponent as IcnCryptoPayments } from "./assets/icons/icn-crypto-payments.svg";
import { ReactComponent as IcnPeriodicSwapping } from "./assets/icons/icn-periodic-swapping.svg";
import { ReactComponent as IcnBusinessAnalytics } from "./assets/icons/icn-business-analytics.svg";
import { ReactComponent as IcnClientManagement } from "./assets/icons/icn-client-management.svg";

export const walletManagementFeatureCards = [
  {
    title: "Asset Freezing",
    description:
      "Traverse allows you to freeze your tokens in your personal Vault, eliminating concerns around malicious DAPPs and exploits. The days of worrying about losing your tokens are over.",
    icon: <IcnAssetFreezing />,
  },
  {
    title: "On-Chain 2FA",
    description:
      "Traverse offers on-chain 2FA approval for Vault and Business Wallet management, reducing the risk of compromise under the worst circumstances. A bad actor can no longer move your assets without the necessary proof.",
    icon: <Icn2FA />,
  },
  {
    title: "Reversible Transactions",
    description:
      "A major limitation of commercial transactions performed on the blockchain is irreversibility: we offer the ability for customers to file disputes against purchases of goods and services.",
    icon: <IcnReversibleTransactions />,
  },
  {
    title: "Recoverable Vaults",
    description:
      "You need not worry about losing your private keys, you can now recover your frozen assets through a combination of recovery wallets, 2FA, and KYC.",
    icon: <IcnRecoverableVaults />,
  },
  {
    title: "Approval Manager",
    description: "Manage all your token approvals in one place.",
    icon: <IcnApprovalManager />,
  },
];

export const walletManagementAccordion = [
  {
    title: "Where are frozen/business assets held?",
    content:
      "<p>In your own smart contract, out of our reach. Smart contract code is continuously audited by a third party company.</p>",
  },
  {
    title: "Does on-chain 2FA mean that Traverse can move your funds?",
    content: "<p>No.</p>",
  },
  {
    title: "What if I don’t trust Traverse in handling 2FA approvals?",
    content:
      "<p>You can disable 2FA when creating your vault, however this makes your assets vulnerable to malicious contracts that can potentially unfreeze and move tokens on your behalf.</p>",
  },
  {
    title: "Which wallets are supported on Traverse?",
    content:
      "<ul>" +
      "<li>Meta Mask</li>" +
      "<li>Coinbase Wallet</li>" +
      "<li>Rainbow Wallet</li>" +
      "<li>WalletConnect</li>" +
      "<li>Trust Wallet</li>" +
      "<li>Argent Wallet</li>" +
      "<li>Ledger Live</li>" +
      "<li>More to come...</li>" +
      "</ul>",
  },
  {
    title: "How much does it cost to create a Vault?",
    content:
      "<p>One time fee = gas fee + $2.5</p>" +
      "<p>No other fees associated with maintaining your vault, you just have to pay the relevant gas fees whenever freezing/unfreezing tokens</p>",
  },
  {
    title: "How can I file for a dispute?",
    content:
      "<p>Users deciding to file a dispute need to navigate the transaction history on\n" +
      "their wallet management dashboard. Under the dispute section, users can note all transactions with a Traverse registered business wallet. Users are able to click on the dispute wallet present next to all applicable transactions, which opens a dispute ticket.</p>",
  },
  {
    title: "What is the Approval Manager?",
    content:
      "<p>Users can note all relevant approvals for all their digital assets in\n" +
      "Traverse’s approval manager. Each asset notes the approvals next to it, and users are able to revoke any approvals as desired.</p>",
  },
];

export const businessSolutionsFeatureCards = [
  {
    title: "Cryptocurrency Payments",
    description:
      "Traverse allows any business to start accepting Ethereum Tokens as easy as a web embed.",
    icon: <IcnCryptoPayments />,
  },
  {
    title: "Periodic Swapping",
    description:
      "Cryptocurrency assets can have volatile prices which can result in losses for businesses that accept them as payment. Traverse allows businesses to periodically swap their holdings to stable coins, worry-free.",
    icon: <IcnPeriodicSwapping />,
  },
  {
    title: "Business Analytics",
    description:
      "Come tax season, businesses are required to accurately report their sales and costs. This can be difficult for transactions carried over the blockchain, that is why Traverse offers detailed analytics for sales and revenues reported in the user’s preferred base currency.",
    icon: <IcnBusinessAnalytics />,
  },
  {
    title: "Customer Management",
    description:
      "Customer relationships are hard to manage, and they can be even harder to track over web3. Traverse introduces a comprehensive dashboard to allow businesses to track sales, invoices, and customer disputes in one place.",
    icon: <IcnClientManagement />,
  },
  {
    title: "Access Management",
    description:
      "It can be difficult for businesses with multiple employees to enable shared access to business funds. Business Wallets enable businesses to provide access to an unlimited number of wallets to manage their funds, each with their own set of permissions and spending limits.",
    icon: <IcnApprovalManager />,
  },
  {
    title: "Reversible Transactions",
    description:
      "Similar to how individuals are given the power to dispute a Business Transaction when things go wrong, we offer Business Wallets the ability to dispute transactions initiated with other Business Wallets.",
    icon: <IcnReversibleTransactions />,
  },
];

export const businessSolutionsAccordion = [
  {
    title: "As a business, why should I use the Traverse platform?",
    content:
      "<p>Traverse allows businesses to accept and manage their crypto holdings\n" +
      "without having to worry about handling customer disputes. Businesses can now set up a Business Wallet and start accepting cryptocurrency at the click of a button. We also help businesses with preparing necessary documents to estimate sales and costs in fiat value.</p>",
  },
  {
    title: "How are Business Wallets secured?",
    content:
      "<p>On chain, a Business Wallet is a smart contract deployed and owned by its creator. All holdings are held in the wallet, where the management of assets (such as withdrawals, transfers, swaps) are performed by the authorized wallets, as managed by the wallet owner.</p>",
  },
  {
    title: "What is a Signer and how can I add one?",
    content:
      "<p>A Business Wallet owner can manage wallet access and spending limits\n" +
      "for their business under the Access Management section in their dashboard.</p>",
  },
  {
    title: "How are spending limits imposed?",
    content:
      "<p>Each signer attached to a business wallet has their own signature key, and\n" +
      "a signer uses this key to verify the transaction. For example, assuming John is a signer on Walmart’s Business Wallet with the authorization to transact up to $20,000 on a weekly basis. If John exceeds his spending limit or uses the incorrect wallet, the transaction will fail.</p>",
  },
  {
    title: "What is the Business Analytics segment for Business Wallets?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The\n" +
      "business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
  {
    title: "Does Traverse charge a fee for handling Business Transactions?",
    content: "<p>Yes, but we will not start collection fees until...</p>",
  },
];

export const generalFaqAccordion = [
  {
    title: "Where are frozen/business assets held?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
  {
    title: "Can I claim airdrops using my frozen tokens?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
  {
    title: "Does on-chain 2FA mean that Traverse can move your funds?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
  {
    title: "What if I don’t trust Traverse in handling 2FA approvals?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
  {
    title: "Which wallets are supported on Traverse?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
  {
    title: "How much does it cost to create a Vault?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
  {
    title: "How can I file for a dispute?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
  {
    title: "What is the Approval Manager?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
];

export const aboutTeam = [
  {
    name: "Abdulrahman Al Ali",
    title: "Co-Founder and CFO",
    link: "abdulrahman@traverselabs.xyz",
    url: "mailto:abdulrahman@traverselabs.xyz",
  },
  {
    name: "Kareem Fakhuri",
    title: "Co-Founder and CEO",
    link: "kareem@traverselabs.xyz",
    url: "mailto:kareem@traverselabs.xyz",
  },
  {
    name: "Mohammad Dweik",
    title: "Co-Founder, CTO, and Head of Cybersecurity",
    link: "moe@traverselabs.xyz",
    url: "mailto:moe@traverselabs.xyz",
  },
];

export const aboutAccordion = [
  {
    title: "Where are frozen/business assets held?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
  {
    title: "Can I claim airdrops using my frozen tokens?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
  {
    title: "Does on-chain 2FA mean that Traverse can move your funds?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
  {
    title: "What if I don’t trust Traverse in handling 2FA approvals?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
  {
    title: "Which wallets are supported on Traverse?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
  {
    title: "How much does it cost to create a Vault?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
  {
    title: "How can I file for a dispute?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
  {
    title: "What is the Approval Manager?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>",
  },
];
