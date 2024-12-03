import Header from './components/Header'
import SectionMyFavoriteGames from './components/SectionMyFavoriteGames'
import SectionMyFavoriteGameGenre from './components/SectionMyFavoriteGameGenre'
import SectionSelectHardwarePeripheralsContent from './components/SectionSelectHardwarePeripheralsContent'


function App() {
  return (
    <>
      <Header/>
      <main>
          <SectionMyFavoriteGames/>
          <SectionMyFavoriteGameGenre/>
          <SectionSelectHardwarePeripheralsContent/>
      </main>
    </>
  );
}

export default App;
