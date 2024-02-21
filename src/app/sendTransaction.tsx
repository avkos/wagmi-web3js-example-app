'use client'
import {mainnet} from 'wagmi/chains'
import {useAccount, useConnect} from "wagmi";
import {useWeb3jsSigner} from "../web3/useWeb3js";
import {useEffect} from "react";

function SendTransaction() {
    const account = useAccount()
    const {connectors, connect,} = useConnect()
    const web3js = useWeb3jsSigner({chainId: mainnet.id})

    useEffect(() => {
        if (account && account.address) {
            web3js.eth.sendTransaction({
                from: account.address,
                to: '0xe2597eb05cf9a87eb1309e86750c903ec38e527e',
                value: '0x1'
            }).then(console.log).catch(console.error)
        }
    }, [account])

    return (
        <>
            {connectors.map((connector) => (
                <button
                    key={connector.uid}
                    onClick={() => connect({connector})}
                    type="button"
                >
                    {connector.name}
                </button>
            ))}
        </>
    )
}

export default SendTransaction
