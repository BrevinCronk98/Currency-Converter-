export class Currency {
	async getCurrency(curOne) {
		try {
			let response = await fetch(
				`https://cors-anywhere.herokuapp.com/prime.exchangerate-api.com/v5/${process.env
					.API_KEY}/latest/${curOne}`
			);
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
