class HttpError extends Error {
    message = ''
    code = 0
    constructor(code = 500, message = 'Internal server error', ...params) {
      super(...params)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, HttpError)
      }
      this.name = 'HttpError'
      this.message = message
      this.code = code
    }
}

module.exports = HttpError