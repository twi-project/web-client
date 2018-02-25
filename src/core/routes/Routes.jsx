import {h} from "preact"
import {Switch, Route} from "react-router-dom"

import NotFound from "core/page/error/Http/NotFound"

import routes from "./createRoutes"

const Routes = () => (
  <Switch>
    {routes.map(props => <Route exact {...props} />)}

    {/* Render 404 error when no page found */}
    <Route component={NotFound} />
  </Switch>
)

export default Routes