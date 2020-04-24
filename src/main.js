import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Currency } from './money-api-fetch';

$(document).ready(function() {
	$('#number-form').submit(function(event) {
		event.preventDefault();
		$('#num-input').text('');
		let num = $('#num-input').val();
		displayUserNum(num);
		(async () => {
			let currency = new Currency();
			const response = await currency.getCurrencyUSD();
		})();
	});

	function displayUserNum(num) {
		$('#num-display').text(`This is how many dollars you want to convert  ${num}. `);
	}
});
