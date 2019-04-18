import {createElement} from "react"
import {shape, oneOfType, arrayOf, string, element} from "prop-types"

import cn from "classnames"

import forwardRef from "core/hoc/forwardRef"

import Plain from "../Button"

import {container} from "./primary.scss"

const Primary = ({className, children, forwardedRef, ...props}) => (
  <Plain {...props} className={cn(container, className)} ref={forwardedRef}>
    {children}
  </Plain>
)

Primary.displayName = "PrimaryButton"

Primary.propTypes = {
  className: string,
  children: oneOfType([
    arrayOf(string), arrayOf(element),
    string, element
  ]).isRequired,
  forwardedRef: shape({})
}

Primary.defaultProps = {
  className: null,
  forwardedRef: null
}

export default Primary |> forwardRef
