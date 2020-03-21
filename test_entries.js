const example_entry1 = {
    type : "block",
    category : "programming",
    focus : 3,
    start_time : new Date(2020, 3, 1, 5, 30)
};

const example_entry2 = {
    type : "block",
    category : "analyses",
    focus : 2,
    start_time : new Date(2020, 3, 1, 6, 30)
};

const example_entry3 = {
    type : "block",
    category : "analyses",
    focus : 2,
    start_time : new Date(2020, 3, 1, 7, 30)
};

const example_entry4 = {
    type : "block",
    category : "analyses",
    focus : 2,
    start_time : new Date(2020, 3, 1, 8, 30)
};

exports.getTestEntries = function() {
    return [example_entry1, example_entry2, example_entry3, example_entry4];
};

