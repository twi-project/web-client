import {h} from "preact"

import compose from "lodash/fp/compose"

import Fragment from "common/component/Fragment"
import Title from "common/component/Title"

import withLayout from "common/component/Layout/withLayout"
import withViewer from "common/component/Viewer/withViewer"

const Feed = () => (
  <Fragment>
    <Title title="Stories Feed" />
    <div>Stories feed page.</div>
  </Fragment>
)

export default compose([withViewer, withLayout])(Feed)
