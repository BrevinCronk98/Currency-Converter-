import { Keys } from './keys';

export class Currency {
	async getCurrencyUSD() {
		try {
			let response = await fetch(`https://prime.exchangerate-api.com/v5/${Keys.API_KEY}/latest/USD`);
			let jsonifiedResponse;
			if (response.ok && response.status == 200) {
				jsonifiedResponse = await response.json();
			} else {
				jsonifiedResponse = false;
			}
			return jsonifiedResponse;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}

// 	async getConversion(curOne, num) {
// 		try {
// 			let responseTwo = await fetch(`https://prime.exchangerate-api.com/v5/${Keys.API_KEY}/latest/${curOne}`);
// 			let jsonifiedResponse;
// 			if (responseTwo.ok && responseTwo.status == 200) {
// 				jsonifiedResponse = await responseTwo.json();
// 			} else {
// 				jsonifiedResponse = false;
// 			}
// 			return jsonifiedResponse;
// 		} catch (error) {
// 			console.log(error);
// 			return false;
// 		}
// 	}
// }

// async getConversion(num, response, curTwo) {
// 	let conversion;
// 	let response = response.conversion_rates.curTwo;
// 	conversion = num * response;
