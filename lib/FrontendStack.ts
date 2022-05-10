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
      NEXT_PUBLIC_SUPABASE_URL: 'https://kynipcbxmydblnjghgqc.supabase.co',
      NEXT_PUBLIC_SUPABASE_KEY:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5bmlwY2J4bXlkYmxuamdoZ3FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTEzMDQyMTMsImV4cCI6MTk2Njg4MDIxM30.v0UjBTGnyIHr0jIx1jUsnrTwljwC_MFWEyavQNoVvz4',
      SUPABASE_SERVICE_LEVEL_KEY:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5bmlwY2J4bXlkYmxuamdoZ3FjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1MTMwNDIxMywiZXhwIjoxOTY2ODgwMjEzfQ.7K59sc_V9UiFyASVyZQv-YEsw_jc8XNhws4vfX146qE'
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
