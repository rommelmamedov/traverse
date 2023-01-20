import React from 'react';
import {ReactComponent as Icn2FA} from "./assets/icons/icn-2FA.svg";
import {ReactComponent as IcnReversibleTransactions} from "./assets/icons/icn-reversible-transactions.svg";
import {ReactComponent as IcnRecoverableVaults} from "./assets/icons/icn-recoverable-vaults.svg";
import {ReactComponent as IcnApprovalManager} from "./assets/icons/icn-approval-manager.svg";

export const walletManagementFeatureCards= [
  {
    title: "Asset Freezing",
    description: "Traverse allows you to freeze your tokens in your personal Vault, eliminating concerns around malicious DAPPs and exploits. The days of worrying about losing your tokens are over.",
    icon: ""
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
  }
]

