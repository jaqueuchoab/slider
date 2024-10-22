# Slider com ReactJS e Swiper

A biblioteca Swiper é uma ferramenta popular de ReactJS que permite criar carrosséis, slideshows e galerias de forma simples e responsiva em páginas web. Ela é amplamente usada para criar interfaces deslizáveis, como galerias de imagens ou sliders de conteúdo. Algumas de suas características incluem:

- Responsividade: Funciona bem em dispositivos móveis e desktops.
- Customização: Altamente personalizável, com várias opções para controlar a navegação, efeitos de transição e comportamento.
- Suporte a toques: Suporta interações de toque (touch) em dispositivos móveis, além de cliques com o mouse.
- Animações: Oferece animações suaves e efeitos visuais variados (como slides, fades, etc.).
- Compatibilidade: Pode ser usada com diversos frameworks JavaScript como React, Vue e Angular.

É útil para criar experiências interativas e visuais em sites e aplicativos.

# Passos importantes para iniciar o uso do Swiper:

1.  Importar estilo swiper: Dentro do swiper vários módulos css, no que dizem respeitos a diferentes componentes que compõe um slide, sendo eles, uma arrow, slide ou outros. Isso torna o uso de cada módulo opcional, dependendo de qual a forma em que o slide deve ser montado.
    `import {register} from 'swiper/element/bundle'`
    `register()`
    O register é uma função que foi introduzida para o registro explícito dos módulos que o Swiper utiliza, especialmente em projetos baseados em frameworks como React, Vue, e outros ambientes de desenvolvimento moderno.

    - Performance: Ao registrar apenas os módulos que irá usar, o Swiper pode gerar um build mais enxuto, removendo módulos desnecessários.
    - Modularidade: Ajuda a gerenciar os recursos que o Swiper carrega, mantendo o projeto mais organizado.

2.  Importar componentes react do Swiper: Elementos que irão compor o slide.
    `import { Swiper, SwiperSlide } from 'swiper/react';`

    Swiper é o container principal que envolve todo o carrossel. Ele é responsável por controlar e configurar o comportamento geral do Swiper, como o número de slides visíveis, espaçamento entre eles, ativação de navegação, paginação, e outras funcionalidades.
        Exemplos de opções do Swiper: 
            - spaceBetween: Define o espaço (em pixels) entre os slides. 
            - slidesPerView: Quantos slides são exibidos por vez. 
            - navigation: Ativa setas de navegação (próximo/anterior). 
            - pagination: Adiciona um controle de paginação (geralmente bolinhas que indicam o slide atual). 
            - loop: Faz com que o Swiper continue indefinidamente, reiniciando após o último slide.

    `<Swiper spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>`

    SwiperSlide  é o componente individual que representa cada slide dentro do carrossel. Ele deve ser colocado como filho direto do componente Swiper. Cada instância de SwiperSlide corresponde a um slide no carrossel.

    `<Swiper`
    `  spaceBetween={30}`
    `  slidesPerView={1}`
    `  pagination={{ clickable: true }}`
    `>`
    `  <SwiperSlide><img src="image1.jpg" alt="Slide 1" /></SwiperSlide>`
    `  <SwiperSlide><img src="image2.jpg" alt="Slide 2" /></SwiperSlide>`
    `  <SwiperSlide><img src="image3.jpg" alt="Slide 3" /></SwiperSlide>`
    `</Swiper>`
