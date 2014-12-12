describe('homepage', function() {
	before(function() {
		casper.start('http://localhost:3000/')
	});

	it('says hello world', function() {
		casper.then(function() {
			expect("body").to.have.text("Hello world");
		});
	});

});