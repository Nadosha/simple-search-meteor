Albums = new Mongo.Collection('albums');

if (Meteor.isSrever) {
	Albums._ensureIndex({
		title: 1,
		artist: 1,
		year: 1
	})
}

Albums.allow({
	insert: function() {
		return false
	},
	update: function() {
		return false
	},
	remove: function() {
		return false
	}
});

Albums.deny({
	insert: function() {
		return true
	},
	update: function() {
		return true
	},
	remove: function() {
		return true
	}
});

AlbumsSchema = new SimpleSchema({
  'title': {
    type: String,
    label: 'The title of this album.'
  },
  'artist': {
    type: String,
    label: 'The artist of this album.'
  },
  'year': {
    type: String,
    label: 'The year this album was released.'
  }
});

Albums.attachSchema( AlbumsSchema );

