exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('post_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('post_table').insert([{
        heading: 'heading1',
        subHeading: 'subheading 1',
        date: null,
        imageURL: 'image URL',
        paragraph1: 'paragraph 1',
        paragraph1: 'paragraph 2',
        paragraph1: 'paragraph 3',
        paragraph1: 'paragraph 4',
        paragraph1: 'paragraph 5',
        paragraph1: 'paragraph 6',
        paragraph1: 'paragraph 7',
        paragraph1: 'paragraph 8',
        paragraph1: 'paragraph 9',
        paragraph1: 'paragraph 10',
      }]);
    });
};