
Template.search.onCreated(function() {
	let template = Template.instance();
	template.searchQuery = new ReactiveVar();
	template.searching = new ReactiveVar( false );

	template.autorun(function() {
		template.subscribe( 'albums', template.searchQuery.get(), function() {
			setTimeout( function() {
				template.searching.set( false );
			}, 300)
		});
	});
});

Template.search.helpers({
	searching: function() {
		var searching = Template.instance().searching.get();
		console.log(searching);
		return searching;
	},
	query: function() {
		var searching = Template.instance().searchQuery.get();
		console.log(searching);
		return searching;
	},
	albums: function() {
		let albums = Albums.find();
		console.log(albums.fetch());
		if (albums) {
			return albums;

		}
	}
});

Template.search.events({
	'keyup [name="search"]': function(event, template) {
		let value = event.target.value.trim();
		
		if(value !== '' && event.keyCode === 13) {
			template.searchQuery.set(value);
			template.searching.set(true);
			console.log(value);
		}

		if(value === '') {
			template.searchQuery.set(value);
		}
	}
});