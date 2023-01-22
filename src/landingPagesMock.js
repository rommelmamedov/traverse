import React from 'react';
import {ReactComponent as IcnAssetFreezing} from "./assets/icons/icn-asset-freezing.svg";
import {ReactComponent as Icn2FA} from "./assets/icons/icn-2FA.svg";
import {ReactComponent as IcnReversibleTransactions} from "./assets/icons/icn-reversible-transactions.svg";
import {ReactComponent as IcnRecoverableVaults} from "./assets/icons/icn-recoverable-vaults.svg";
import {ReactComponent as IcnApprovalManager} from "./assets/icons/icn-approval-manager.svg";
import {ReactComponent as IcnCryptoPayments} from "./assets/icons/icn-crypto-payments.svg";
import {ReactComponent as IcnPeriodicSwapping} from "./assets/icons/icn-periodic-swapping.svg";
import {ReactComponent as IcnBusinessAnalytics} from "./assets/icons/icn-business-analytics.svg";
import {ReactComponent as IcnClientManagement} from "./assets/icons/icn-client-management.svg";

export const walletManagementFeatureCards= [
  {
    title: "Asset Freezing",
    description: "Traverse allows you to freeze your tokens in your personal Vault, eliminating concerns around malicious DAPPs and exploits. The days of worrying about losing your tokens are over.",
    icon: <IcnAssetFreezing/>
  },
  {
    title: "On-Chain 2FA",
    description: "Traverse offers on-chain 2FA approval for Vault and Business Wallet management, reducing the risk of compromise under the worst circumstances. A bad actor can no longer move your assets without the necessary proof.",
    icon: <Icn2FA/>
  },
  {
    title: "Reversible Transactions",
    description: "A major limitation of commercial transactions performed on the blockchain is irreversibility: we offer the ability for customers to file disputes against purchases of goods and services.",
    icon: <IcnReversibleTransactions/>
  },
  {
    title: "Recoverable Vaults",
    description: "You need not worry about losing your private keys, you can now recover your frozen assets through a combination of recovery wallets, 2FA, and KYC.",
    icon: <IcnRecoverableVaults/>
  },
  {
    title: "Approval Manager",
    description: "Manage all your token approvals in one place. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: <IcnApprovalManager/>
  },
]

export const walletManagementAccordion = [
  {
    title: "Where are frozen/business assets held?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>"
  },
  {
    title: "How are Business Wallets secured?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>"
  },
  {
    title: "Does on-chain 2FA mean that Traverse can move your funds?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>"
  },
  {
    title: "What if I don’t trust Traverse in handling 2FA approvals?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>"
  },
  {
    title: "Which wallets are supported on Traverse?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>"
  },
  {
    title: "How much does it cost to create a Vault?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>"
  },
  {
    title: "How can I file for a dispute?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>"
  },
  {
    title: "What is the Approval Manager?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>"
  },
]

export const businessSolutionsFeatureCards= [
  {
    title: "Crypto Payments",
    description: "Traverse allows any business to start accepting Ethereum Tokens as easy as a web embed.",
    icon: <IcnCryptoPayments/>
  },
  {
    title: "Periodic Swapping",
    description: "Cryptocurrency assets can have volatile prices which can result in losses for businesses that accept them as payment. Traverse allows businesses to periodically swap their holdings to stable coins, worry-free.",
    icon: <IcnPeriodicSwapping/>
  },
  {
    title: "Business Analytics",
    description: "Come tax season, businesses are required to accurately report their sales and costs. This can be difficult for transactions carried over the blockchain, that is why Traverse offers detailed analytics for sales and revenues reported in the user’s preferred base currency.",
    icon: <IcnBusinessAnalytics/>
  },
    {
    title: "Client Management",
    description: "Customer relationships are hard to manage, and they can be even harder to track over web3. Traverse introduces a comprehensive dashboard to allow businesses to track sales, invoices, and customer disputes in one place.",
    icon: <IcnClientManagement/>
  },
  {
    title: "Access Management",
    description: "It can be difficult for businesses with multiple employees to enable shared access to business funds. Business Wallets enable businesses to provide access to an unlimited number of wallets to manage their funds, each with their own set of permissions and spending limits.",
    icon: <IcnApprovalManager/>
  },
  {
    title: "Reversible Transactions",
    description: "Similar to how individuals are given the power to dispute a Business Transaction when things go wrong, we offer Business Wallets the ability to dispute transactions initiated with other Business Wallets.",
    icon: <IcnReversibleTransactions/>
  },
]

export const businessSolutionsAccordion = [
  {
    title: "As a business, why should I use the Traverse platform?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>"
  },
  {
    title: "How are Business Wallets secured?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>"
  },
  {
    title: "What is a Signer and how can I add one?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>"
  },
  {
    title: "How are spending limits imposed?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>"
  },
  {
    title: "What is the Business Analytics segment for Business Wallets?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>"
  },
  {
    title: "Does Traverse charge a fee for handling Business Transactions?",
    content:
      "<p>Traverse provides business analytics to our business wallet users. The business analytics serves to track the overall sales made from the business wallet, track the number of transactions made, and provides businesses and merchants the opportunity to routinely and automatically convert their crypto to stablecoins to protect against the volatile nature of cryptocurrency. This segment also tracks the total number of disputes both (open and closed) the business has.</p>"
  },
]

