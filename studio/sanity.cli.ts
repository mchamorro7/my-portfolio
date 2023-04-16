import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  graphql: [
    {
      playground: true,
      tag: 'default',
      workspace: 'default',
      id: 'schema-production',
    },
  ]
})
