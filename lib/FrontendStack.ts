import { Stack, NextjsSite, Api } from '@serverless-stack/resources'

export default class WebsiteStack extends Stack {
  constructor(scope, id: string) {
    super(scope, id)

    const stage = (this.node.root as unknown as { stage: string }).stage
    let customDomain: string | null = null

    if (stage === 'prod') {
      customDomain = 'train-wedding.uk'
    }

    const environment = {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY,
      SUPABASE_SERVICE_LEVEL_KEY: process.env.SUPABASE_SERVICE_LEVEL_KEY
    }

    const api = new Api(this, 'Api', {
      routes: {
        'POST /post/create': 'src/createPost.main'
      },
      defaultFunctionProps: {
        environment
      }
    })

    const site = new NextjsSite(this, 'Site', {
      customDomain: customDomain
        ? {
            domainName: customDomain,
            domainAlias: customDomain ? `www.${customDomain}` : undefined
          }
        : undefined,
      path: 'frontend',
      environment: {
        ...environment,
        NEXT_PUBLIC_API_URL: api.url
      }
    })

    // Show the endpoint in the output
    this.addOutputs({
      WebsiteURL: site.url,
      APIUrl: api.url,
      Stage: stage
    })
  }
}
