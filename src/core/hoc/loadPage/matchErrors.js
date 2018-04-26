import NotFound from "core/page/error/Http/NotFound"

const matchErrors = error => {
  const [err] = error.graphQLErrors

  if (err.code === "HTTP_NOT_FOUND_EXCEPTION" || err.status === 404) {
    return NotFound
  }

  return null
}

export default matchErrors