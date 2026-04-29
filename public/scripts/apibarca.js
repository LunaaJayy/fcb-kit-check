const barcaBaseURL = "https://api.fc-barcelona.app/api/";

async function getNextMatch() {
	const nextMatchEndpoint = "next-match";
	const nextMatchResponse = await fetch(barcaBaseURL + nextMatchEndpoint);
	const nextMatchArray = await nextMatchResponse.json();
	return nextMatchArray.data;
}

// in bestand: 
// import { getNextMatch } from '/scripts/apibarca.js'
// const nextMatch = await getNextMatch();