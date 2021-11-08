import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PageContainer } from './components'
import Landing from './pages/Landing'

function App() {
  return <PageContainer>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Landing} />
      </Switch>
    </BrowserRouter>
  </PageContainer>
}

export default App