// script.js

$(document).ready(function () {
    // Dummy data for the leaderboard
    const leaderboardData = [
        { rank: 1, name: 'Edan 0x', frens: 6848 },
        { rank: 2, name: 'Alex | SEED', frens: 6732 },
        { rank: 3, name: 'Dan', frens: 2335 },
        { rank: 4, name: 'Serge', frens: 2261 },
        { rank: 5, name: 'Dadi', frens: 1446 },
        { rank: 6, name: 'Duy', frens: 1404 },
        { rank: 7, name: 'Paul', frens: 1243 }
    ];

    // Function to populate the leaderboard
    function populateLeaderboard(data) {
        const leaderboard = $('#leaderboard');
        leaderboard.empty(); // Clear any existing content

        data.forEach(item => {
            const listItem = `
                <li>
                    <span>${item.rank}</span>
                    <span>${item.name}</span>
                    <span>${item.frens} frens</span>
                </li>
            `;
            leaderboard.append(listItem);
        });
    }

    // Populate the leaderboard with dummy data
    populateLeaderboard(leaderboardData);
});
