#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, symbol_short, Address, Env, Vec};

#[contract]
pub struct CrowdfundContract;

#[contracttype]
pub enum DataKey {
    TotalFunds,
    Donors,
}

#[contractimpl]
impl CrowdfundContract {
    pub fn donate(env: Env, donor: Address, amount_stroops: i128) {
        donor.require_auth();

        let mut total: i128 = env.storage().instance().get(&DataKey::TotalFunds).unwrap_or(0);
        total += amount_stroops;
        env.storage().instance().set(&DataKey::TotalFunds, &total);

        let mut donors: Vec<Address> = env.storage().instance().get(&DataKey::Donors).unwrap_or(Vec::new(&env));
        if !donors.contains(&donor) {
            donors.push_back(donor.clone());
            env.storage().instance().set(&DataKey::Donors, &donors);
        }

        // Emit an event
        let topics = (symbol_short!("Donate"), donor);
        env.events().publish(topics, amount_stroops);
    }

    pub fn get_total_funds(env: Env) -> i128 {
        env.storage().instance().get(&DataKey::TotalFunds).unwrap_or(0)
    }

    pub fn get_donors(env: Env) -> Vec<Address> {
        env.storage().instance().get(&DataKey::Donors).unwrap_or(Vec::new(&env))
    }
}
