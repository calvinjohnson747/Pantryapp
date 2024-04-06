const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class User {
    constructor(userid, name, email) {
        this.userid = userid;
        this.name = name;
        this.email = email;
    }
}

class House {
    constructor(groupID, groupName) {
        this.groupID = groupID;
        this.groupName = groupName;
    }
}

class Item {
    constructor(itemID, itemName) {
        this.itemID = itemID;
        this.itemName = itemName;
    }
}

const HouseItemSchema = new Schema({
    group_ID: {
        type: Number,
        required: true
    },
    itemID: [{
        type: Number,
        required: true
    }]
});

const HouseItem = mongoose.model('House_Item', HouseItemSchema);

const HouseFavouritesSchema = new Schema({
    group_ID: {
        type: Number,
        required: true
    },
    itemID: [{
        type: Number,
        required: true
    }]
});

const HouseFavourites = mongoose.model('House_Favourites', HouseFavouritesSchema);

module.exports = {
    User,
    House,
    Item,
    HouseItem,
    HouseFavourites
};
