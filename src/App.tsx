import { Router } from './router'
import './App.css'
import { Layout } from './components'
import { AlertProvider } from './context/AlerctContext'
function App() {
  return (
    <AlertProvider>
      <Layout>
        <Router />
      </Layout>
    </AlertProvider>
  )
}

export default App