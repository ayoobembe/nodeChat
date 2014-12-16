describe('User signs up', function() {
	
	before(function() {
		casper.start('http://http://localhost:3000/signup')
	});

	// it('should add a signed up user to database', function() {
	// 	expect(signup("tester","test")).to.be.true;
	// });

});


function signup(name, password){
	casper.waitForSelector('#signUp_form', function() {
		this.fillSelectors('form#signUp_form', {
			'input[name="name"]': name,
			'input[name="password"]': password, 
		}, true);
	});
}