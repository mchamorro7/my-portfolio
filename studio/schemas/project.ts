import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required().min(10).max(100)
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'stack',
      title: 'Tech stack',
      type: 'array',
      of: [
        {
          title: 'Technology',
          type: 'string',
          options: {
            layout: 'tags'
          }
        },
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
        name: 'code',
        title: 'GitHub repository',
        type: 'string',
    }),
    defineField({
        name: 'demo',
        title: 'Demo',
        type: 'string',
    }),
    defineField({
        name: 'thumbnail',
        title: 'Thumbnail',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
  },
})
