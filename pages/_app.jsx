import '../styles/globals.css';
import React from 'react';
import { Header } from '../components/header';
import { Theme } from '../components/theme';
import { ContentWrapper } from '../components/wrappers';
import { GameContextProvider } from '../context/game';



function AlphabetSoupApp({ Component, pageProps }) {
  return <Theme>
    <Header/>
    <ContentWrapper>
      <GameContextProvider>
        <Component {...pageProps} />
      </GameContextProvider>
    </ContentWrapper>
    
  </Theme>;
}

export default AlphabetSoupApp;
