import Card from '../templates/card/card';
import appStyles from './app.module.scss';

function App() {
  return (
    <div className={appStyles.wrapper}>
      <Card>hello word)</Card>
      <Card nopadding>hello word)</Card>
    </div>
  );
}

export default App;
