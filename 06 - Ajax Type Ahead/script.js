const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchInput = document.querySelector('input.search');
const suggestionsNode = document.querySelector('.suggestions');

let cities = [];

fetch(endpoint)
.then((response) => {
	if (response.ok) {
		return response.json()
			.then((json) => {
				cities = json;
			});
	}
}).catch((error) => {
	console.error("Ooop, cannot get suggestions because of ${error.message}");
});

const hasStr = (target, criteria) => {
	return target.toLowerCase().includes(criteria.toLowerCase());
}

const clearSuggestions = () => {
	while (suggestionsNode.firstChild) {
		suggestionsNode.removeChild(suggestionsNode.firstChild);
	}
};

const showSuggestionPlaceholder = (text) => {
	const element = document.createElement('li');
	element.innerHTML = text;
	suggestionsNode.appendChild(element);
};

const showSuggestions = (e) => {
	clearSuggestions();

	const searchText = e.target.value;
	if (searchText === "") {
		showSuggestionPlaceholder('Filter for a city or state');
		return;
	}

	const suggestions = cities
	.filter(c => hasStr(c.city, searchText) || hasStr(c.state, searchText))
	.sort((a, b) => b.population - a.population);

	if (!suggestions.length) {
		showSuggestionPlaceholder('Nothing found');
		return;
	}
	const re = new RegExp(`(${searchText})`, 'gi');
	suggestions.forEach((s) => {
		const element = document.createElement('li');
		const cityName = s.city.replace(re, '<span class="match">$1</span>');
		const stateName = s.state.replace(re, '<span class="match">$1</span>');
		element.innerHTML = `<span class="city">${cityName}, ${stateName}</span> ` +
							`<span class="population">${parseInt(s.population, 10).toLocaleString('en')}</span>`;
		suggestionsNode.appendChild(element);
	})
}


searchInput.addEventListener('input', showSuggestions);