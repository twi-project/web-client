import {ApolloLink} from "apollo-link"

import requestHandler from "./requestHandler"

class HttpLink extends ApolloLink {
  constructor(options = {}) {
    super(requestHandler(options).request)
  }
}

export default HttpLink