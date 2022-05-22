import React from 'react';
import { NFTCover } from '../nft-cover';
import { NFTImageBuy } from '../nft-buy';
import './nftimage-item.css';

export const NFTImageItem = ({ nftimage }) => {
  return (
    <div className="nftimage-item">
      <NFTCover image={nftimage.image} />
      <div className="nftimage-item_details">
        <span className="nftimage-item_title">{nftimage.title}</span>
        <div className="nftimage-item_buy"></div>
        <NFTImageBuy nftimage={nftimage}/>
      </div>
    </div>
  )
}
