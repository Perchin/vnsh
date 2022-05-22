import React from 'react';
import {NFTImageItem } from '../../components/nftimage-item'
import './home-page.css';


const NFTIMAGES = [
    {
        image: '/nft-covers/xo.PNG',
        title: 'XO Bike',
        price: 2343,
        id: 1,
        description: "Описание",
    },
    {
        image: '/nft-covers/battlefield_2042.jpg',
        title: 'Отличительные черта',
        price: 2433,
        id: 2,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: '/nft-covers/life_is_strange_true_colors.jpeg',
        title: 'Отличительные черта',
        price: 3021,
        id: 3,
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
    },
    {
        image: '/nft-covers/gta_v.jpeg',
        title: 'Отличительные черта',
        price: 789,
        id: 4,
        description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
    },
    {
        image: '/nft-covers/rainbow_siege.jpeg',
        title: 'Отличительные черта',
        price: 982,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {
        image: '/nft-covers/assassins_creed_valhalla.png',
        title: 'Отличительные черта',
        price: 2863,
        id: 6,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
]
export const HomePage = () => {
  return (
    <div className="home-page">
        {NFTIMAGES.map(nftimage => <NFTImageItem nftimage={nftimage} key={nftimage.id}/>)}
    </div>
  )
}
