import './App.css';
import { MovieProvider } from './context/movie/MovieProvider';
import { AppRouter } from './routers/AppRouter';
import { UserProvider } from './context/user/UserProvider';
import { ModalProvider } from './context/ui/ModalProvider';

function App() {
  return (
    <>
      <UserProvider>
      <MovieProvider>
        <ModalProvider>
          <AppRouter/>
        </ModalProvider>
      </MovieProvider>
      </UserProvider>
    </>
  );
}

export default App;
