import { QueryClientProvider, QueryClient } from 'react-query'
import { Provider } from 'react-redux';
import store from './store/store.ts';
import MainLayout from "./layouts/MainLayout.tsx"
import RoutesCom from "./routes"
import Notification from './components/Snackbar/Notification.tsx';
import AuthLayout from './layouts/AuthLayout.tsx';
import { useNavigate } from 'react-router-dom';


const query = new QueryClient();
function App() {
// 
  const navigate = useNavigate()
  const token = window.localStorage.getItem('accessToken')

  if (!token) {
    navigate("/login")
  }

  return (
    <QueryClientProvider client={query}>
      <Provider store={store}>
        {
          token ? (
            <MainLayout>
              <RoutesCom />
            </MainLayout>
          ) : <AuthLayout />
        }
        <Notification />
      </Provider>
      <Notification />
    </QueryClientProvider>
  )
}
export default App;