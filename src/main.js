import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
// import { Currency } from './money-api-fetch';

function showCurrrencies(curOne, curTwo) {
	$('#curOneDisp').text('This is your first currency' + curOne);
	$('#curTwoDisp').text('this is your 2nd currency' + curTwo);
}

$(document).ready(function() {
	$('#submit-form').submit(function(event) {
		event.preventDefault();
		$('#curOne').text(' ');
		$('#curTwo').text(' ');

		let curOne = $('#curOne').val();
		let curTwo = $('#curTwo').val();

		$('#curOneDisp').val('');
		$('#curTwoDisp').val(' ');
		showCurrrencies(curOne, curTwo);
		console.log(curOne);
		$('#submit-form').hide();
	});
});
// (async () => {
// 	let currency = new Currency();
// 	const response = await currency.getCurrency(curOne);
// 	const responseTwo = await currency.getCurrency(curTwo);
// 	getElementsForCurOne(response);
// })();
