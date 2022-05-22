import React from 'react';
import { Button } from '../button';
import './nft-buy.css';

export const NFTImageBuy =( {nftimage} )=> {
  return (
    <div className='nft-buy'>
       <span className='nft-buy_price'> {nftimage.price} валюта </span>    
       <Button
        type ="primary"
        onClick={ () => null}
      >
       В корзину
      </Button>
    </div>
  )
}
