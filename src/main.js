import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Currency } from './money-api-fetch';

function showCurrrencies(curOne, curTwo) {
	$('#curOneFont').text('This is your first currency: ' + curOne);
	$('#curTwoFont').text('this is your 2nd currency: ' + curTwo);
	$('#disp-row').show();
	$('#submit-form').hide();
	$('#number-form').show();
	$('#curOneFont').val('');
	$('#curTwoFont').val(' ');
}

$(document).ready(function() {
	$('#submit-form').submit(function(event) {
		event.preventDefault();
		$('#curOne').text(' ');
		$('#curTwo').text(' ');
		let curOne = $('#curOne').val();
		let curTwo = $('#curTwo').val();

		showCurrrencies(curOne, curTwo);
	});

	$('#number-form').submit(function(event) {
		event.preventDefault();
		$('#num-input').text('');
		let num = $('#num-input').val();
		let curOne = $('#curOne').val();
		let curTwo = $('#curTwo').val();
		console.log(num);
		(async () => {
			let currency = new Currency();
			const response = await currency.getCurrencyOne(curOne);
			getElementsForCurOne(response);
			getValue(response, curTwo);
		})();

		function getValue(response, curTwo) {
			let rate = response.conversion_rates;
			rate = curTwo;
			console.log(rate);
			return rate;
		}

		function getElementsForCurOne(response) {
			if (response) {
				$('#num-display').text(`This is the Conversion:  ${response.base}. `);
				console.log(response);
			} else {
				$('#num-display').text(`Oh no there was an error`);
			}
		}
	});
});
// let conv = curOne * num * curTwo;
// console.log(conv);
