import { useState, useCallback, useEffect } from 'react';
import { StellarWalletsKit, Networks } from '@creit.tech/stellar-wallets-kit';
import { defaultModules } from '@creit.tech/stellar-wallets-kit/modules/utils';
import { rpc } from '@stellar/stellar-sdk';
import { RPC_URL } from '../services/stellar';

const server = new rpc.Server(RPC_URL);

export function useWallet() {
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      StellarWalletsKit.init({
        network: Networks.TESTNET,
        modules: defaultModules()
      });
    } catch (e) {
      console.warn("SWK already configured", e);
    }
  }, []);

  const fetchBalance = useCallback(async (addr) => {
    if (!addr) return;
    try {
      const account = await server.getAccount(addr);
      const nativeBalance = account.balances.find(b => b.asset_type === 'native');
      setBalance(nativeBalance ? nativeBalance.balance : '0');
    } catch (e) {
      console.error("Fetch balance error", e);
      setBalance('0');
    }
  }, []);

  useEffect(() => {
    if (address) {
      fetchBalance(address);
    } else {
      setBalance(null);
    }
  }, [address, fetchBalance]);

  const connect = useCallback(async () => {
    try {
      setError(null);
      // Calls the native V2 modal module! 
      const { address } = await StellarWalletsKit.authModal();
      setAddress(address);
    } catch (e) {
      console.error(e);
      let errorString = String(e).toLowerCase();
      if (errorString.includes('not installed') || errorString.includes('extension')) {
          setError('WALLET_NOT_FOUND');
      } else if (errorString.includes('reject') || errorString.includes('declined') || errorString.includes('user cancelled')) {
          setError('TRANSACTION_REJECTED');
      } else {
          setError('UNKNOWN');
      }
    }
  }, []);

  const disconnect = async () => {
    setAddress(null);
    try { await StellarWalletsKit.disconnect(); } catch(e) {}
  };
  const clearError = () => setError(null);

  return { address, balance, connect, disconnect, error, clearError, fetchBalance, kit: StellarWalletsKit };
}
