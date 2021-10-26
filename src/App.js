import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PageContainer } from './components'
import Landing from './Landing'

function App() {
  return <BrowserRouter>
    <PageContainer>
      <Switch>
        <Route path='/' component={Landing} />
      </Switch>
    </PageContainer>
  </BrowserRouter>
}

export default App;
