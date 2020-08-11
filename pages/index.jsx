import Head from 'next/head';
import React from 'react';
import { LevelSelector } from '../components/level-selector';
import { useContext } from 'react';
import { GameContext } from '../context/game';

export default function Home() {
  const levels = useContext(GameContext);
  return (
    <div >
      <Head>
        <title>Sopa de Letras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LevelSelector levels={levels}/>

      <footer >
        
      </footer>
    </div>
  );
}
