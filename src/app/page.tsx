'use client'

import {useAccount, useConnect, useDisconnect} from 'wagmi'
import {useWeb3js} from '../web3/useWeb3js'
import {useEffect, useState} from "react";
import {zkSync} from 'wagmi/chains'

function App() {
    const account = useAccount()
    const {connectors, connect, status, error} = useConnect()
    const {disconnect} = useDisconnect()
    const web3js = useWeb3js({chainId: zkSync.id})
    const [balance, setBalance] = useState('')
    useEffect(() => {
        if(account?.address){
            web3js.eth.getBalance(account.address).then((b) => {
                console.log('b',b)
                setBalance(web3js.utils.fromWei(b, 'ether'))
            }).catch(console.error)
        }

    }, [account,setBalance])
    return (
        <>
            <div>
                <h2>Account</h2>

                <div>
                    status: {account.status}
                    <br/>
                    addresses: {JSON.stringify(account.addresses)}
                    <br/>
                    chainId: {account.chainId}
                    <br />
                    balance: {Number(balance).toFixed(4)} ETH
                </div>

                {account.status === 'connected' && (
                    <button type="button" onClick={() => disconnect()}>
                        Disconnect
                    </button>
                )}
            </div>

            <div>
                <h2>Connect</h2>
                {connectors.map((connector) => (
                    <button
                        key={connector.uid}
                        onClick={() => connect({connector})}
                        type="button"
                    >
                        {connector.name}
                    </button>
                ))}
                <div>{status}</div>
                <div>{error?.message}</div>
            </div>
        </>
    )
}

export default App
