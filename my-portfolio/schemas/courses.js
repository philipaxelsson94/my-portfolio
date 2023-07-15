export default {
  name: 'courses',
	title: 'Courses',
  type: 'document',
  fields: [
    {
      name: 'imageurl',
      title: 'imageurl',
      type: 'image',
    },
    {
      title: 'title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'hp',
      name: 'hp',
      type: 'number'
    },
    {
      title: 'desc',
      name: 'desc',
      type: 'string'
    },
    {
      title: 'Year',
      name: 'year',
      type: 'string',
      options: {
        list: [
          { title: 'Year 1', value: 'one' },
          { title: 'Year 2', value: 'two' },
          { title: 'Year 3',  value: 'three' },
          { title: 'Year 4',  value: 'four' },
          { title: 'Year 5',  value: 'five' },
        ],
      }
    },
  ],
}