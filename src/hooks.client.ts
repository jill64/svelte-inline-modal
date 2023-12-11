import { init } from '@jill64/sentry-sveltekit-cloudflare/client'

const onError = init(
  'https://e128c58b4bac19d8c159bcb3dd1840ff@o4505814639312896.ingest.sentry.io/4506378666835968'
)

export const handleError = onError()
