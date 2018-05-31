import {h} from "preact"

import session from "core/auth/hoc/session"
import loadable from "core/hoc/loadable"
import connect from "core/model/connect"
import loadingProcess from "core/hoc/loadingProcess"
import Loading from "common/component/Loading/Page"

import ApplicationError from "core/page/error/ApplicationError"

import Model from "./Model"
import getViewer from "./graphql/query/getViewer"

const LoadingProcess = loadingProcess({
  onLoading: Loading,

  // TODO: Replace with AuthosizationError or ForbiddenError
  onError: ApplicationError
})

const hoc = () => import("./viewer")

const viewer = () => getViewer()

const createViewer = state => ({viewer: state ? Model.create(state) : null})

const loadableViewer = Target => session(
  loadable({
    delay: 300,
    loading: LoadingProcess,
    loaders: {viewer, hoc},

    render: (loaded, props) => (
      h(loaded.hoc(Target) |> connect(loaded.viewer |> createViewer), props)
    )
  })
)

export default loadableViewer
