// function calculatePrizes(awards) {
//     const result = [];

//     for (const { name, category, team, year } of awards) {
//         const existing = result.find(item => item.category === category && item.year === year);

//         if (existing) {
//             const teamEntry = existing.winners.find(w => w.name === team);
//             if (teamEntry) {
//                 teamEntry.members.push(name);
//             } else {
//                 existing.winners.push({ name: team, members: [name] });
//             }
//         } else {
//             result.push({
//                 category,
//                 year,
//                 winners: [{ name: team, members: [name] }]
//             });
//         }
//     }

//     for (const item of result) {
//         const numberOfTeams = item.winners.length;
//         const prize = 1 / numberOfTeams;

//         for (const winner of item.winners) {
//             const numberOfMembers = winner.members.length;
//             const share = prize / numberOfMembers;

//             winner.members = winner.members.map(member => ({ name: member, share }));
//         }
//     }

//     return result;
// }

// const awards = [
  
// { name: "James Peebles", category: "javelin", team: "Mumbai Indians", year: 2019 },
//     { name: "Michel Mayor", category: "javelin", team: "Gujarat Titans", year: 2019 },
//     { name: "Didier Queloz", category: "javelin", team: "Gujarat Titans", year: 2019 },
//     { name: "John", category: "shooting", team: "Chennai Super kings", year: 2019 },
//     { name: "M. Stanley Whittingham", category: "shooting", team: "Chennai Super kings", year: 2019 },
//     { name: "Akira Yoshino", category: "shooting", team: "Chennai Super kings", year: 2019 },
//     { name: "Arthur Ashkin", category: "javelin", team: "Pune Warriors", year: 2018 },
//     { name: "Gerard Mourou", category: "javelin", team: "Deccan Chargers", year: 2018 },
//     { name: "Donna Strickland", category: "javelin", team: "Deccan Chargers", year: 2018 },
//     { name: "Frances H. Arnold", category: "shooting", team: "Kolkata Riders", year: 2018 },
//     { name: "George P. Smith", category: "shooting", team: "Sunrisers Hyderabad", year: 2018 },
//     { name: "Sir Gregory P. Winter", category: "shooting", team: "Sunrisers Hyderabad", year: 2018 },
// ];

// console.log(JSON.stringify(calculatePrizes(awards), null, 2));


function calculatePrizes(awards) {
    const result = [];

    for (const { name, category, team, year } of awards) {
        const existing = result.find(item => item.category === category && item.year === year);

        if (existing) {
            const teamEntry = existing.winners.find(w => w.name === team);
            if (teamEntry) {
                teamEntry.members.push(name);
            } else {
                existing.winners.push({ name: team, members: [name] });
            }
        } else {
            result.push({
                category,
                year,
                winners: [{ name: team, members: [name] }]
            });
        }
    }

    for (const item of result) {
        const numberOfTeams = item.winners.length;
        const prize = 1 / numberOfTeams;

        for (const winner of item.winners) {
            const numberOfMembers = winner.members.length;
            const share = prize / numberOfMembers;

            winner.members = winner.members.map(member => ({ name: member, share }));
        }
    }

   
    result.sort((a, b) => a.year - b.year);

    return result;
}

const awards = [
    { name: "James Peebles", category: "javelin", team: "Mumbai Indians", year: 2019 },
    { name: "Michel Mayor", category: "javelin", team: "Gujarat Titans", year: 2019 },
    { name: "Didier Queloz", category: "javelin", team: "Gujarat Titans", year: 2019 },
    { name: "John", category: "shooting", team: "Chennai Super kings", year: 2019 },
    { name: "M. Stanley Whittingham", category: "shooting", team: "Chennai Super kings", year: 2019 },
    { name: "Akira Yoshino", category: "shooting", team: "Chennai Super kings", year: 2019 },
    { name: "Arthur Ashkin", category: "javelin", team: "Pune Warriors", year: 2018 },
    { name: "Gerard Mourou", category: "javelin", team: "Deccan Chargers", year: 2018 },
    { name: "Donna Strickland", category: "javelin", team: "Deccan Chargers", year: 2018 },
    { name: "Frances H. Arnold", category: "shooting", team: "Kolkata Riders", year: 2018 },
    { name: "George P. Smith", category: "shooting", team: "Sunrisers Hyderabad", year: 2018 },
    { name: "Sir Gregory P. Winter", category: "shooting", team: "Sunrisers Hyderabad", year: 2018 },
];

console.log(JSON.stringify(calculatePrizes(awards), null, 2));
