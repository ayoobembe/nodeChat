describe('homepage', function() {
	before(function() {
		casper.start('http://localhost:3000/')
	});

	it('has a title', function() {
		casper.then(function() {
			expect("body nav").to.contain.text("NodeChat")
		});
	});

	it('has a sign up button', function() {
		casper.then(function() {
			expect("nav a").to.contain.text("Sign up");
		});
	});

	it('has a sign in button', function() {
		casper.then(function() {
			expect("nav a").to.contain.text("Sign in");
		})
	})

});