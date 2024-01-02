async function getMatchData() {
    try {
        const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=db22ac56-f341-464f-9bb5-9832e9c327e8&offset=0");

        const data = await response.json();

        if (data.status !== "success") {
            return;
        }

        const matchesList = data.data;

        if (!matchesList) {
            return [];
        }

        const relevantData = matchesList.map(match => `${match.name} , ${match.status}`);

        console.log({ relevantData });
    } catch (error) {
        console.error("Error fetching match data:", error);
    }
}

getMatchData();
