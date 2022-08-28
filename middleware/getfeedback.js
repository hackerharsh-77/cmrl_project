const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const feedback_passenger = require("../database/database.js").feedback;

module.exports.getfeedback = async (req, res) => {
    const all_feedbacks = await feedback_passenger.find({});
    console.log(all_feedbacks);

    const csvWriter = createCsvWriter({
        path: 'all_feedbacks.csv',
        header: [{
                id: '_id',
                title: '_id'
            },
            {
                id: 'username',
                title: 'username'
            },
            {
                id: 'gender',
                title: 'gender'
            },
            {
                id: 'mobile',
                title: 'mobile'
            },
            {
                id: 'empStatus',
                title: 'empStatus'
            },
            {
                id: 'age',
                title: 'age'
            },
            {
                id: 'duration',
                title: 'duration'
            },
            {
                id: 'distance',
                title: 'distance'
            },
            {
                id: 'commute',
                title: 'commute'
            },
            {
                id: 'cleanliness',
                title: 'cleanliness'
            },
            {
                id: 'support',
                title: 'support'
            },
            {
                id: 'safety',
                title: 'safety'
            },
            {
                id: 'otherSuggestion',
                title: 'otherSuggestion'
            },
            {
                id: '_v',
                title: '_v'
            },

        ]
    });


    csvWriter.writeRecords(all_feedbacks) // returns a promise
        .then(() => {
            console.log('...Done');
        });
    res.send(all_feedbacks);

}