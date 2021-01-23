import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ROUTE_ALBUMS, ROUTE_ARTIST, ROUTE_NOT_FOUND } from "routes";
import Albums from "views/Albums";
import Artist from "views/Artist";
import NotFound from "views/NotFound";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path={`${ROUTE_ARTIST}/:artistId`}>
            <Artist />
          </Route>
          <Route exact path={ROUTE_ALBUMS}>
            <Albums />
          </Route>
          <Route path={ROUTE_NOT_FOUND}>
            <NotFound />
          </Route>
          <Redirect to={ROUTE_NOT_FOUND} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
