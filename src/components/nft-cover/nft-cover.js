import React from 'react';
import './nft-cover.css';

export const NFTCover =({ image = "" })=> {
  return (
    <div className="nft-cover" style={{ backgroundImage: `url(${ image })` }}/>
  )
}
