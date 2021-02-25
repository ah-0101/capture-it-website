'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          */
        return queryInterface.bulkInsert('Comments', [
            { id: 1, comments: 'nice, i like this design', createdAt: new Date(), updatedAt: new Date(), },
            { id: 2, comments: 'I kinda like it', createdAt: new Date(), updatedAt: new Date(), },
            { id: 3, comments: 'very nice', createdAt: new Date(), updatedAt: new Date(), },
            { id: 4, comments: 'nice, i like this design', createdAt: new Date(), updatedAt: new Date(), },
            { id: 5, comments: 'I kinda like it...!', createdAt: new Date(), updatedAt: new Date(), },
            { id: 6, comments: 'very nice....', createdAt: new Date(), updatedAt: new Date(), },
            { id: 7, comments: 'nice, i like this design!', createdAt: new Date(), updatedAt: new Date(), },
            { id: 8, comments: 'I kinda like it!', createdAt: new Date(), updatedAt: new Date(), },
            { id: 9, comments: 'very nice!', createdAt: new Date(), updatedAt: new Date(), },
            { id: 10, comments: 'nice, i like this design!!', createdAt: new Date(), updatedAt: new Date(), },
            { id: 11, comments: 'I kinda like it!!', createdAt: new Date(), updatedAt: new Date(), },
            { id: 12, comments: 'very nice!!', createdAt: new Date(), updatedAt: new Date(), },
            { id: 50, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 13, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 14, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 15, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 16, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 17, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 18, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 19, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 20, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 21, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 22, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 23, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 24, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 25, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 26, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 27, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 28, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 29, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 30, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 31, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 32, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 33, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 34, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 35, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 36, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 37, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 38, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 39, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 40, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 41, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 42, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 43, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 44, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 45, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 46, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 47, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 48, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },
            { id: 49, comments: "Home decor", createdAt: new Date(), updatedAt: new Date(), },

        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          */
        return queryInterface.bulkDelete('Comments', null, {});
    }
};