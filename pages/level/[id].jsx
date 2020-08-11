import React, { useContext, useState, useCallback } from 'react';
import { LinkButtonPrimary, ButtonSecondary } from '../../components/buttons';
import { Game } from '../../components/game';
import { GameContext } from '../../context/game';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useResults } from '../../components/game/results.hooks';

export default function Level() {
  const router = useRouter();
  const { data } = useContext(GameContext);
  const { id } = router.query;
  const [ showAnswers, setShowAnswers ] = useState(false);
  const level = data.levels[id - 1];
  const { results, calculateResults } = useResults(level, data.word);

  const finishGame = useCallback(() =>{
    calculateResults();
    setShowAnswers(true);
  },[]);

  return (
    <>
      <Head>
        <title>Sopa de Letras / Nivel {id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>Encuentra la palabra: <u>{data.word}</u></h3>
      <Game level={level} showAnswers={showAnswers} results={results}/>
      <Link href='/'>
        <a><LinkButtonPrimary>Volver</LinkButtonPrimary></a>
      </Link>
      <ButtonSecondary onClick={finishGame}>Ver respustas</ButtonSecondary>
    </>
  );
}