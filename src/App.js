import { Header } from './component/Header/Header'
import { Content } from './component/Content/Content'
import { Foother } from './component/Foother/Foother'
import { Container } from './component/Container/Container'

import './App.css'
function App() {
  return (
    <div className="App">
      <Header title="Page title" />
      <Content title="Lorem Ipsum" desc='react hes been' />
      <Foother copy="all for reservs" />
      <Container />
      <Container />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Images />
//       <Images />
//     </div>
//   );
// }

export default App;
