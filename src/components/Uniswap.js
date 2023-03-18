import React, { useState, useEffect, useCallback } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Contract } from 'ethers';
import { JsonRpcProvider } from 'ethers';
import { FixedNumber } from 'ethers';
import { Token } from '@uniswap/sdk-core';

const INFURA_KEY = '7913d50b92f64b6e84ea01475acf49ff';
const OPTIMISM_CHAIN_ID = 10;
const TOKEN_ADDRESS = '0x21b43Bf5f136335a2630e66B18DE65bab84e37c2';

const Uniswap = () => {
    const [balance, setBalance] = useState('');
    const [loading, setLoading] = useState(false);

    const { activate, active, account, library } = useWeb3React();
    const injectedConnector = new InjectedConnector({ supportedChainIds: [10] });


    const provider = new JsonRpcProvider(`https://optimism-mainnet.infura.io/v3/${INFURA_KEY}`, OPTIMISM_CHAIN_ID);

    const getBalance = useCallback(async () => {
        if (account) {
            const token = new Token(OPTIMISM_CHAIN_ID, TOKEN_ADDRESS, 18);
            const contract = new Contract.Contract(token.address, ['function balanceOf(address) view returns (uint256)'], provider);
            const balance = await contract.balanceOf(account);
            setBalance(FixedNumber.formatUnits(balance, 18));
        }
    }, [account, provider]);

    useEffect(() => {
        if (active && account) {
            getBalance();
        }
    }, [active, account]);

    const connectWallet = async () => {
        try {
            await activate(injectedConnector);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <h1>Uniswap Instance</h1>
            {balance && <p>Your token balance: {balance}</p>}
            <button onClick={connectWallet}>
                {active ? 'Connected' : 'Connect Wallet'}
            </button>

        </div>


    );
};

export default Uniswap;

