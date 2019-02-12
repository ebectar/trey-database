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
        paragraph2: 'paragraph 2',
        paragraph3: 'paragraph 3',
        paragraph4: 'paragraph 4',
        paragraph5: 'paragraph 5',
        paragraph6: 'paragraph 6',
        paragraph7: 'paragraph 7',
        paragraph8: 'paragraph 8',
        paragraph9: 'paragraph 9',
        paragraph10: 'paragraph 10',
      }]);
    });
};