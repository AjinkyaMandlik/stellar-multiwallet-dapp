# 🌟 Stellar Crowdfund dApp
### *Level 2 - Yellow Belt Certification Submission*

A premium, production-ready decentralized application built on the **Stellar Testnet**. This dApp allows users to connect their wallets, donate XLM to a campaign goal, and view real-time progress synced directly from the Soroban blockchain without any centralized backend.

---

## 🚀 Live Features

### 1. Multi-Wallet Integration
- Seamlessly integrates with **Freighter** and other Stellar wallets via the modern `StellarWalletsKit` (V2.1.0).
- Static singleton architecture ensures a single source of truth for wallet state.

### 2. Soroban Smart Contract
- **Contract ID**: `CAXJ47NQ4U4BDLNARPTPBUXGCKSX7U2TP3CEEKIAJYRQ6D3TFDGFAAYS`
- **Functions**:
    - `donate(amount)`: Authenticates donor and updates global ledger state.
    - `get_total_funds()`: On-chain tallying of campaign progress.
    - **Custom Events**: Publishes `Donate` events on every successful pledge.

### 3. Real-Time Data Synchronization
- **Zero Backend**: Uses Soroban RPC `getEvents` to poll ledger logs.
- **Dynamic Leaderboard**: Automatically parses XDR event data to show top donors and their exact XLM contributions.
- **Progress Tracking**: Real-time visual progress bar updates for all users.

### 4. Robust Error Handling
Explicitly handles the 3 mandatory Yellow Belt error types:
- ❌ **Wallet Not Found**: Detects if Freighter is missing.
- ❌ **Transaction Rejected**: Handles user cancellations in the signature window.
- ❌ **Insufficient Balance**: Simulates transactions to catch funding errors before submission.

### 5. Premium UX/UI
- Glassmorphism design system.
- Confetti celebration animations on successful donations.
- **Protocol 22 Ready**: Handles Meta V4 XDR envelopes natively.

---

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite 8
- **Smart Contract**: Soroban (Rust SDK)
- **Blockchain Connectivity**: `@stellar/stellar-sdk` (Latest)
- **Wallet Kit**: `@creit.tech/stellar-wallets-kit`
- **Styling**: Vanilla CSS (Custom Glassmorphism)

---

## 📖 Getting Started

### Prerequisites
- [Freighter Wallet](https://www.freighter.app/) extension installed.
- Freighter set to **Testnet** mode.

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## ⚖️ Yellow Belt Requirements Checklist
- [x] **3 Error Types Handled**: (NotFound, Rejected, Insufficient)
- [x] **Contract Deployed on Testnet**: Verified on `stellar.expert`.
- [x] **Contract Called from Frontend**: `donate()` interaction functional.
- [x] **Transaction Status Visible**: Pending/Success/Failed UI feedback.
- [x] **Real-time Event Integration**: `useEvents` polling implemented.

---

## 📄 License
This project is for educational purposes under the Stellar development program.
