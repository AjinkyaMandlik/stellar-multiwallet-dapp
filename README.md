# 🌟 Stellar Crowdfund dApp

### 🚀 Level 2 – Yellow Belt Submission

A production-ready decentralized crowdfunding application built on the **Stellar Testnet** using **Soroban smart contracts**.
This dApp enables users to connect multiple wallets, donate XLM, and view real-time campaign progress directly from the blockchain — with **zero centralized backend**.

---

## 🌐 Live Demo

👉 https://your-live-link.netlify.app

---

## 🎯 Objective

To build a decentralized application that:

* Supports multi-wallet integration
* Interacts with a deployed smart contract
* Displays real-time blockchain data
* Handles transactions and errors effectively

---

## 🚀 Core Features

### 🔗 Multi-Wallet Integration

* Integrated using `StellarWalletsKit`
* Supports:

  * Freighter (mandatory)
  * Extensible for other Stellar wallets
* Connect & disconnect functionality
* Displays connected wallet address

---

### 📜 Soroban Smart Contract

* **Contract ID**:
  `CAXJ47NQ4U4BDLNARPTPBUXGCKSX7U2TP3CEEKIAJYRQ6D3TFDGFAAYS`

* **Functions**:

  * `donate(amount)` → Accepts XLM and updates total funds
  * `get_total_funds()` → Returns current campaign balance

* **Events**:

  * Emits `Donate` event for each transaction

---

### 🔄 Real-Time Data Synchronization

* Uses Soroban RPC (`getEvents`)
* No backend required
* Features:

  * Live total funds update
  * Dynamic donor leaderboard
  * Automatic UI refresh after transactions

---

### 💸 Transaction Handling

* Tracks transaction lifecycle:

  * ⏳ Pending
  * ✅ Success
  * ❌ Failed

* Displays:

  * Transaction hash
  * Explorer link (Stellar Expert)

---

### ⚠️ Error Handling (Required)

Handles all mandatory cases:

* ❌ Wallet not found
* ❌ Transaction rejected by user
* ❌ Insufficient balance

---

### 🎨 UI / UX

* Clean glassmorphism design
* Responsive layout
* Interactive components
* Confetti animation on success
* Real-time progress bar

---

## 📸 Screenshots

### 🔗 Wallet Selection

![Wallet](./screenshots/wallet.png)

### 💰 Donation Interface

![Donate](./screenshots/donate.png)

### 📊 Real-Time Progress

![Progress](./screenshots/progress.png)

---

## 📂 Project Structure

```bash
stellar-crowdfunding-dapp/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── contract/
│   └── crowdfunding.rs
│
├── README.md
└── package.json
```

---

## 🧪 Testnet Details

* **Network**: Stellar Testnet
* **Explorer**: https://stellar.expert
* **Fund Wallet**: https://friendbot.stellar.org

---

## 🔗 Contract Interaction Proof

* **Contract Address**:
  `CAXJ47NQ4U4BDLNARPTPBUXGCKSX7U2TP3CEEKIAJYRQ6D3TFDGFAAYS`

* **Sample Transaction Hash**:
  `<add-your-tx-hash-here>`

---

## 💻 Running Locally

### Prerequisites

* Node.js installed
* Freighter Wallet installed
* Freighter set to Testnet

### Installation

```bash
git clone <your-repo-url>
cd frontend
npm install
npm run dev
```

Open:
👉 http://localhost:5173

---

## 🛠 Tech Stack

* **Frontend**: React (Vite)
* **Smart Contract**: Soroban (Rust)
* **Blockchain SDK**: @stellar/stellar-sdk
* **Wallet Integration**: StellarWalletsKit
* **Styling**: Custom CSS

---

## ✅ Yellow Belt Requirements Checklist

* [x] Multi-wallet integration
* [x] Smart contract deployed
* [x] Contract called from frontend
* [x] Transaction status tracking
* [x] 3 error types handled
* [x] Real-time event updates
* [x] Minimum 2+ commits

---

## 🚀 Future Improvements

* Multi-campaign support
* Transaction history dashboard
* Mobile optimization
* Enhanced animations

---

## 👨‍💻 Author

**Ajinkya Mandlik**

---

## 📄 License

This project is built for educational purposes as part of the Stellar Yellow Belt Program.

---

⭐ If you found this project useful, consider giving it a star!
