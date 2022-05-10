import FrontendStack from './FrontendStack'
import { Construct } from '@aws-cdk/core'

export default function main(app: Construct) {
  // @ts-ignore
  app.setDefaultFunctionProps({
    runtime: 'nodejs14.x'
  })

  new FrontendStack(app, 'frontend-stack')
}
