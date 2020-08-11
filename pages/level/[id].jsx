import React, { useContext, useState } from 'react';
import { LinkButtonPrimary, ButtonSecondary } from '../../components/buttons';
import { Game } from '../../components/game';
import { GameContext } from '../../context/game';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Level() {
  const router = useRouter();
  const { data } = useContext(GameContext);
  const { id } = router.query;
  const [ showAnswers, setShowAnswers ] = useState(false);
  const level = data.resources[id - 1];
  return (
    <>
      <Head>
        <title>Sopa de Letras / Nivel {id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Game level={level} showAnswers={showAnswers}/>
      <Link href='/'>
        <a><LinkButtonPrimary>Volver</LinkButtonPrimary></a>
      </Link>
      <ButtonSecondary onClick={() => setShowAnswers(true)}>Ver respustas</ButtonSecondary>
    </>
  );
}