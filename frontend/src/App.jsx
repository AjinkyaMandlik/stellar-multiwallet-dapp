import { useState, useEffect } from 'react';
import { useWallet } from './hooks/useWallet';
import { useContract } from './hooks/useContract';
import { useEvents } from './hooks/useEvents';
import { WalletConnection } from './components/WalletConnection';
import confetti from 'canvas-confetti';
import './index.css';

const GOAL_XLM = 5000;

function App() {
  const wallet = useWallet();
  const { donate, txStatus, txHash } = useContract(wallet.kit, wallet.address);
  const { totalFunds, donors } = useEvents();
  
  const [amount, setAmount] = useState('');
  const [isPledging, setIsPledging] = useState(false);

  useEffect(() => {
      if (txStatus === 'success') {
          confetti({
              particleCount: 150,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#60a5fa', '#c084fc', '#f59e0b']
          });
          wallet.fetchBalance(wallet.address);
      }
  }, [txStatus, wallet]);

  const totalXLM = Number(totalFunds) / 10000000;
  const progressPercent = Math.min((totalXLM / GOAL_XLM) * 100, 100);

  const handleDonate = async () => {
    if (!amount) return;
    setIsPledging(true);
    await donate(amount, () => {}, () => {
        setIsPledging(false);
        setAmount('');
    });
  };

  const getStatusClass = () => {
      if (txStatus === 'success') return 'status-success';
      if (txStatus === 'pending') return 'status-pending';
      return 'status-failed';
  };

  return (
    <div className="container">
      <header>
        <h1>Stellar Crowdfund</h1>
        <p className="subtitle">A pure Web3 application built heavily on Soroban, beautifully designed.</p>
      </header>

      <WalletConnection wallet={wallet} />

      <div className="glass-card">
        <h2>Campaign: Decentralized Future</h2>
        
        <div className="progress-bg">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          <strong style={{ color: 'white', fontSize: '1.2rem' }}>{totalXLM.toLocaleString()} XLM</strong> raised of {GOAL_XLM.toLocaleString()} XLM goal
        </p>

        {wallet.address && wallet.balance !== null && (
          <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Your Balance: <strong style={{ color: 'var(--secondary)' }}>{Number(wallet.balance).toLocaleString()} XLM</strong>
          </div>
        )}

        <div style={{ marginTop: '2rem', display: 'flex', gap: '16px' }}>
          <input 
            type="number" 
            className="input-field"
            placeholder="Amount to donate (XLM)" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
            disabled={!wallet.address || isPledging}
          />
          <button 
            className="btn btn-primary" 
            onClick={handleDonate} 
            disabled={!wallet.address || isPledging || !amount}
          >
            {isPledging ? 'Processing...' : 'Donate XLM'}
          </button>
        </div>

        {txStatus && (
          <div className={`status-badge ${getStatusClass()}`} style={{ marginTop: '20px' }}>
            <span>Status: <strong>{txStatus.toUpperCase()}</strong></span>
            {txHash && (
               <a className="hash-link" href={`https://stellar.expert/explorer/testnet/tx/${txHash}`} target="_blank" rel="noreferrer">
                 {txHash.slice(0, 6)}...{txHash.slice(-6)} ↗
               </a>
            )}
          </div>
        )}
      </div>

      <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--card-border)', background: 'rgba(255,255,255,0.02)' }}>
          <h2 style={{ margin: 0 }}>Recent Backers ({donors.length})</h2>
        </div>
        
        {donors.length === 0 ? (
          <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)' }}>
            No donations yet. Be the first to shape the future!
          </div>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {donors.map((donor, idx) => (
              <li key={idx} className="donor-item" style={{ padding: '16px 32px', display: 'flex', justifyContent: 'space-between' }}>
                <div><span style={{ fontSize: '1.2rem', marginRight: '8px' }}>✨</span> {donor.address.slice(0, 10)}...{donor.address.slice(-4)}</div>
                <div style={{ color: '#f59e0b', fontWeight: 'bold' }}>{donor.amount.toLocaleString()} XLM</div>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}

export default App;
