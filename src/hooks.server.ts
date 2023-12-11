import { hooks } from '@jill64/npm-demo-layout'
import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const { onHandle, onError } = init(
  'https://e128c58b4bac19d8c159bcb3dd1840ff@o4505814639312896.ingest.sentry.io/4506378666835968'
)

export const handle = onHandle(hooks)
export const handleError = onError()
