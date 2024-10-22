import './App.css';
import { register } from 'swiper/element/bundle';

// Chamando função de registro de módulos
register();
// Importando módulos css (podem ser consultados na documentação do Swiper)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

register();

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Slider com ReactJS</h1>
    </div>
  );
};

export default App;
