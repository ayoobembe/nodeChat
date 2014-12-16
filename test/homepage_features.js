var home_url = 'http://localhost:3000/';

describe('homepage', function() {
	before(function() {
		casper.start('http://localhost:3000/')
	});

	// casper.then(function() {
	// 	home_url = this.getCurrentUrl();
	// });

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
		});
	});

	it('navigates to sign up page', function() {
		casper.then(function() {
			this.click('#signUp');
			casper.waitFor(function check() {
				return this.getCurrentUrl() != home_url
			}, function then() {
				expect('body').to.contain.text("Please sign up: ");
			});
		});
	});

});