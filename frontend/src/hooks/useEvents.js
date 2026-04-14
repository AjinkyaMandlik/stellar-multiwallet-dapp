import { useState, useEffect } from 'react';
import { rpc, xdr, scValToNative } from '@stellar/stellar-sdk';
import { RPC_URL, CONTRACT_ID } from '../services/stellar';

const server = new rpc.Server(RPC_URL);

export function useEvents() {
  const [totalFunds, setTotalFunds] = useState(0n);
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    let timeoutId;

    const fetchEvents = async () => {
      if (!CONTRACT_ID) return;
      try {
        const net = await server.getLatestLedger();
        
        const response = await server.getEvents({
          startLedger: Math.max(1, net.sequence - 5000), 
          filters: [ { type: "contract", contractIds: [CONTRACT_ID] } ]
        });

        if (response.events) {
          let localTotal = 0n;
          const donorMap = new Map();

          const parseXdr = (v) => {
              if (typeof v === 'string') return xdr.ScVal.fromXDR(v, 'base64');
              if (v && v.xdr) return xdr.ScVal.fromXDR(v.xdr, 'base64');
              return v; // likely already parsed xdr.ScVal
          };

          response.events.forEach(ev => {
             const topics = ev.topic.map(parseXdr);
             const data = parseXdr(ev.value);
             
             const topicName = scValToNative(topics[0]);
             if (topicName === 'Donate') {
                const donor = scValToNative(topics[1]);
                const amount = scValToNative(data);
                
                localTotal += BigInt(amount);
                
                const currentDonated = donorMap.get(donor) || 0n;
                donorMap.set(donor, currentDonated + BigInt(amount));
             }
          });
          
          setTotalFunds(localTotal);
          
          const sortedDonors = Array.from(donorMap.entries())
              .map(([address, amount]) => ({ address, amount: Number(amount) / 10000000 }))
              .sort((a, b) => b.amount - a.amount);
              
          setDonors(sortedDonors);
        }
      } catch (e) {
        console.error("Event poll error", e);
      }
      
      timeoutId = setTimeout(fetchEvents, 3000);
    };

    fetchEvents();
    return () => clearTimeout(timeoutId);
  }, []);

  return { totalFunds, donors };
}
