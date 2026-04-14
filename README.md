# 🌟 Stellar Crowdfund dApp

### 🚀 Level 2 – Yellow Belt Submission

A production-ready decentralized crowdfunding application built on the **Stellar Testnet** using **Soroban smart contracts**.
This dApp enables users to connect multiple wallets, donate XLM, and view real-time campaign progress directly from the blockchain — with **zero centralized backend**.

---

## 🌐 Live Demo

👉 https://stellar-crowdfunding-aj.netlify.app/<img width="1364" height="692" alt="Screenshot 2026-04-14 133808" src="https://github.com/user-attachments/assets/e3037d61-ff51-415b-9c45-ba429b3e8c56" />


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
<img width="1364" height="692" alt="Screenshot 2026-04-14 133808" src="https://github.com/user-attachments/assets/db0b0d2c-dc5e-4fc9-9871-b6f408e8f759" />

### 🔗 Wallet Selection

<img width="1364" height="685" alt="Screenshot 2026-04-14 133908" src="https://github.com/user-attachments/assets/b4fe197c-fec0-498f-8cfe-ea33fa5af820" />


### 💰 Donation Interface

<img width="1348" height="766" alt="Screenshot 2026-04-14 134440" src="https://github.com/user-attachments/assets/6cf9ee8d-c366-4ef5-a52d-e3285e1b02ee" />

<img width="1348" height="766" alt="Screenshot 2026-04-14 134440" src="https://github.com/user-attachments/assets/f2f9589c-6394-45e7-a749-dc87a9e9efcc" />



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

⭐ If you found this project useful, consider giving it a star!
