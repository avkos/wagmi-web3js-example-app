'use client'

import {useWeb3js} from '../web3/useWeb3js'
import {mainnet} from 'wagmi/chains'
import {useEffect, useState} from "react";

type Block = {
    hash: string
    extraData: string
    miner: string

}

function Block() {
    const web3js = useWeb3js({chainId: mainnet.id})
    const [block, setBlock] = useState<Block>()

    useEffect(() => {
        web3js.eth.getBlock(19235006).then((b) => {
            setBlock(b as Block)
        }).catch(console.error)
    }, [setBlock]);


    if (!block) return (<div>Loading...</div>)

    return (
        <>
            <div id='hash'>{block.hash}</div>
            <div id='extraData'>{block.extraData}</div>
            <div id='miner'>{block.miner}</div>

        </>
    )
}

export default Block
