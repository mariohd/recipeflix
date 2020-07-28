import React from 'react';
import Header from './components/header';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import data from './dados_iniciais.json';

function App() {

  function carousels() {
    return data.categorias.map((category, index) => <Carousel key={index} ignoreFirstVideo={index === 0} category={category} /> );
  };

  return (
    <div style={{ background: '#141414'}}>
      <Header />

      <BannerMain 
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url }
        videoDescription={data.categorias[0].videos[0].descricao}
      />

      { carousels() }

      <Footer />

    </div>
  );
}

export default App;
