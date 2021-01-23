import AppContainer from "components/molecules/AppContainer/AppContainer";
import Header from "components/organisms/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ROUTE_ALBUMS, ROUTE_ARTIST } from "routes";
import Albums from "views/Albums";
import Artist from "views/Artist";

function App() {
  return (
    <AppContainer>
      <Header>Album list</Header>
      <Router>
        <Switch>
          <Route path={ROUTE_ARTIST}>
            <Artist />
          </Route>
          <Route path={ROUTE_ALBUMS}>
            <Albums />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
