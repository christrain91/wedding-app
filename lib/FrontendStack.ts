import { Stack, NextjsSite } from '@serverless-stack/resources'

export default class WebsiteStack extends Stack {
  constructor(scope, id: string) {
    super(scope, id)

    const stage = (this.node.root as unknown as { stage: string }).stage
    let customDomain = `${stage}.train-wedding.uk`

    if (stage === 'prod') {
      customDomain = 'train-wedding.uk'
    }

    const site = new NextjsSite(this, 'Site', {
      customDomain: {
        domainName: customDomain,
        domainAlias: customDomain ? `www.${customDomain}` : undefined
      },
      path: 'frontend'
    })

    // Show the endpoint in the output
    this.addOutputs({
      WebsiteURL: site.url,
      Stage: stage
    })
  }
}
