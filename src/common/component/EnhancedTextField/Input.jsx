import {createElement} from "react"
import {shape} from "prop-types"

import forwardRef from "lib/hoc/forwardRef"

import enhance from "common/hoc/enhanceTextField"

const Input = ({forwardedRef, ...props}) => (
  <input {...props} ref={forwardedRef} />
)

Input.propTypes = {
  forwardedRef: shape({}).isRequired
}

export default Input |> forwardRef |> enhance