const fs = require('fs');

const RATING_HEADING = "Rate";
const RATING_LENGTH = 5; // 4 plus an extra buffer of 1 in case heading is off by 1

function processStandings(data) {
    const lines = data.split('\n');
    const standingsBelow800 = [];
    const standings800to1099 = [];

    let ratingIndex = -1;
    let ratingEndIndex = -1;

    // Process each line
    lines.forEach((line) => {
        if (ratingIndex < 0) {
            ratingIndex = line.indexOf(RATING_HEADING);
            ratingEndIndex = ratingIndex + RATING_LENGTH;
        } else {
            const rating = parseInt(line.substring(ratingIndex, ratingEndIndex), 10);
            
            if (isNaN(rating) || rating < 800) {
                standingsBelow800.push(line);
            } else if (rating < 1100) {
                standings800to1099.push(line);
            }
        }
    });

    return { standingsBelow800, standings800to1099 };
}

if (require.main === module) {
    fs.readFile('./data/standings.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const { standingsBelow800, standings800to1099 } = processStandings(data);

        fs.writeFile('./data/standings-below-800.txt', standingsBelow800.join('\n'), (err) => {
            if (err) throw err;
        });
        fs.writeFile('./data/standings-800-to-1099.txt', standings800to1099.join('\n'), (err) => {
            if (err) throw err;
        });

        console.log('Processing complete. Check data/standings-below-800.txt & data/standings-800-to-1099.txt for the result.');
    });
}

module.exports = { processStandings };