const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
	it(`should return 'fizz-buzz'
		if there is no remainder when
		the number is divided by 15.
		and 'buzz' when divided by 5
		and 'fizz' when divided by 3
		otherwise, it should just return
		the number`, function(){
			const cripCases = [
				[15, 5 , 3],
				[45, 15, 9],
				[60, 20, 12]
			];

			cripCases.forEach(function(input){
				const answer = fizzBuzzer(input[0]);
				answer.should.be.zero;
			});


		});
	it(`should raise an error if the arguments
		are not number`, function(){
			const bloodCases = [
				['DMX', 'Wu-Tang Clan', 'C-Murder'],
				['Royce da', '5', 'nine'],
				[true, 'one', 'b']

			];
			bloodCases.forEach(function(input){
				(function(){
					fizzBuzzer(input[0])
				}).should.throw(Error);
			});
		});

});