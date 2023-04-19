import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: Rule => Rule.required().min(4).max(64)
    }),
    defineField({
        name: 'position',
        title: 'Position',
        type: 'string',
        validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'from',
      title: 'From',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
        name: 'to',
        title: 'To',
        type: 'string',
        validation: Rule => Rule.required()
    }),
    defineField({
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
  ],
  preview: {
    select: {
      title: 'company',
      media: 'logo',
    },
  },
})
