import FrontendStack from './FrontendStack'
import { Construct } from '@aws-cdk/core'

export default function main(app: Construct) {
  new FrontendStack(app, 'frontend-stack')
}
