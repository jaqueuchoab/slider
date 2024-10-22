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