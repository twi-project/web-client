import {oneOfType, shape, string, bool, node, object} from "prop-types"
import {Route as BaseRoute} from "react-router-dom"
import {createElement as h, Suspense, lazy} from "react"

import partial from "lodash/partial"

import useTitle from "lib/hook/useTitle"
import Delay from "lib/component/Delay"
import createLoadable from "lib/hoc/loadable"
import getName from "lib/helper/component/getName"
import Loader from "lib/component/Loader/PageLoader"

const DefaultLayout = lazy(() => import("layout/DefaultLayout"))

/**
 * Extends Route component of react-router-dom with layouts support
 */
function Route(props) {
  const {id = getName(Route), delay, page, serial, ...routeProps} = props
  let {component: Component, layout: Layout, prepare, title} = page

  Component = Component |> createLoadable({
    name: "Route",
    loaders: prepare,
    id: {id, path: routeProps.path}
  })

  const suspense = partial(h, Suspense, {
    fallback: h(Delay, {amount: delay}, h(Loader))
  })

  useTitle(title)

  return suspense(
    h(BaseRoute, {
      ...routeProps,

      render: renderProps => do {
        if (Layout === false) {
          h(Component, renderProps)
        } else if (Layout) {
          suspense(h(Layout, null, h(Component, renderProps)))
        } else {
          suspense(h(DefaultLayout, null, h(Component, renderProps)))
        }
      }
    })
  )
}

Route.displayName = "ApplicationRoute"

Route.propTypes = {
  page: shape({
    layout: oneOfType([node, bool]),
    component: oneOfType([node, object]).isRequired,
    state: shape({})
  }).isRequired,
  path: string,
  exact: bool
}

Route.defaultProps = {
  path: null,
  exact: true
}

export default Route
