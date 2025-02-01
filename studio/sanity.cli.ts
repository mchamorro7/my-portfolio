import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'xqwb2285',
    dataset: 'production',
  },
  graphql: [
    {
      playground: true,
      tag: 'default',
      workspace: 'default',
      id: 'schema-production',
    },
  ]
})
