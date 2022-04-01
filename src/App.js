import { Route, Switch } from "react-router-dom";

import HomePage from "./modules/home-page";
import AboutPage from "./modules/about-page";
import NewsPage from "./modules/news-page";
import HelpPage from "./modules/help-page";

import { ROUTES } from "./config";

import "./index.scss";

const { root, about, news, help } = ROUTES;

/**
 * @desc component "App".
 * @return {JSX.Element} - main component with routing
 */
const App = () => {
  return (
    <Switch>
      <Route exact path={root} component={HomePage} />
      <Route exact path={about} component={AboutPage} />
      <Route exact path={news} component={NewsPage} />
      <Route exact path={help} component={HelpPage} />
    </Switch>
  );
};

export default App;
