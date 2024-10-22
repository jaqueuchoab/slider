import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';

import { register } from 'swiper/element/bundle';

// Chamando função de registro de módulos
register();
// Importando módulos css (podem ser consultados na documentação do Swiper)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
