import Accordion from './components/Accordion/Accordion';
import GlobalStyle from './styles/global';
import DatAccordion from './components/Mocks/DataAccordion';
function App() {
  return (
    <>
      <GlobalStyle />
      <Accordion data={DatAccordion}/>
    </>
  );
}
export default App;
