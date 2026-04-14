export function WalletConnection({ wallet }) {
  const { address, connect, disconnect, error, clearError } = wallet;
  return (
    <div className="glass-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>Wallet Connection</h2>
        {address ? (
          <button className="btn btn-secondary" onClick={disconnect}>
            Disconnect {address.slice(0,5)}...
          </button>
        ) : (
          <button className="btn btn-primary" onClick={connect}>
            Connect Wallet
          </button>
        )}
      </div>

      {error && (
        <div className="error-banner" style={{ marginTop: '20px' }}>
          <div>
            <strong style={{ display: 'block', marginBottom: '4px', color: '#f87171' }}>Error Encountered</strong> 
            <span style={{ fontSize: '0.95rem' }}>
                {error === 'WALLET_NOT_FOUND' && 'Wallet extension not found. Please install the Freighter extension.'}
                {error === 'TRANSACTION_REJECTED' && 'Transaction was rejected by user. Please try again.'}
                {error === 'INSUFFICIENT_BALANCE' && 'Insufficient XLM balance for this network.'}
                {error === 'UNKNOWN' && 'An unexpected unknown error occurred.'}
            </span>
          </div>
          <button onClick={clearError} style={{ background: 'transparent', border: 'none', color: '#fca5a5', cursor: 'pointer', fontSize: '1.5rem', padding: '0 8px' }}>&times;</button>
        </div>
      )}
    </div>
  );
}
