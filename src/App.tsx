import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

const App = () => {
  // Usando o conceito de estado para definir quantas imagens serão mostradas em uma pagina do slide, para assim deixar dinâmica e facilitar o manuseio em momentos de responsividade.
  const [slidePreview, setSlidePreview] = useState(2);
  const data = [
    { id: '1', image: 'https://www.petz.com.br/blog/wp-content/uploads/2020/04/meu-primeiro-gato.jpg' },
    { id: '2', image: 'https://www.petz.com.br/blog/wp-content/uploads/2020/04/meu-primeiro-gato.jpg' },
    { id: '3', image: 'https://www.petz.com.br/blog/wp-content/uploads/2020/04/meu-primeiro-gato.jpg' }
  ];

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth < 720) {
        setSlidePreview(1);
      } else {
        setSlidePreview(2);
      }
    }

    handleResize();

    // Garantir que a função será executada sempre que a tela for redimensionada, o useEffect age apenas na montagem do componente, primeiro carregamento.
    window.addEventListener('resize', handleResize);

    // Desmontando o componente, removendo o evento, para não perder performance caso haja uma troca de páginas.
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <div className="container">
      <h1 className="title">Slider com ReactJS e Swiper</h1>

      {/**A parte de modules e effect é para demonstrar como usar outros efeitos que o swiper possibilita */}
      <Swiper modules={[EffectFade]} effect='fade' slidesPerView={slidePreview} pagination={{clickable: true}} navigation>
        {data.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.image} alt="gatin" className='slide-item'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default App;
