import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Currency } from './money-api-fetch';

$(document).ready(function() {
	$('#submit-form').submit(function(event) {
		event.preventDefault();
		$('#conv-disp').text(' ');

		let curOne = $('#curOne').val();

		$('#curOne').val('');

		console.log(curOne);

		(async () => {
			let currency = new Currency();
			const response = await currency.getCurrency(curOne);
			getElementsForCur(response);
		})();

		function getElementsForCur(response) {
			if (response) {
				$('#conv-disp').text(`This is the conversion ${response.result}`);
			} else {
				$('#conv-disp').text(`Oh no there was an error`);
			}
		}
	});
});
