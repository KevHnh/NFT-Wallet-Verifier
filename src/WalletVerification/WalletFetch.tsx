import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { FC } from 'react';
import { useWalletNfts } from "@nfteyez/sol-rayz-react";
import { NFTCard } from './NFTCard.tsx';
import './WalletFetch.css';

var walletPublicKey = "";
var index;

export const WalletFetch: FC = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();

    const { nfts, isLoading } = useWalletNfts({
        publicAddress: walletPublicKey,
        connection
    })

    if (!publicKey) return (
        <div className='text'>
            Let's check if you are an EzseaNFT Holder
        </div>
    )
    else {
        walletPublicKey = publicKey.toBase58();
    }
    
    if (isLoading) return (
        <div className='text'>
            Loading...
        </div>
    )

    console.log(nfts)

    for (let i = 0; i < nfts.length; i++) {
        if (nfts[i].data.creators[0].address === "Hc5V7YKgFsUXyipkkSopctYF8HL8jkTaGBBK9vjHX4At" && nfts[i].data.symbol === "EZS") {
            index = i;
            console.log("FOUND")
            break;
        }
        else if (nfts[i].data.creators[0].address !== "9JurCwd2qza7cHyWtbEtR4FJeihPQBE6UwyYwYCkRZcJ" && i === nfts.length - 2) {
            return (
                <div className='text'>
                    You are not an EzseaNFT Holder
                </div>
            )
        }
    }

    if (index === null || index === undefined) {
        return <div className='text'>
            You are not an EzseaNFT Holder
        </div>
    }

    if (!nfts?.length) {
        return (
            <div className="text">
            No NFTs found in this wallet
            </div>
        );
    }

    console.log("INDEX VALUE: " + index)

    return (
        <div className="main1">
            <div className="text"> FOUND {nfts[index].data.name} </div>
            <div className="card">
                <NFTCard key={nfts[index].mint} details={nfts[index]} onSelect={() => {}} />
            </div>
        </div>
    )
}

export default WalletFetch;