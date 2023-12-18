const fs = require('fs');

const RATING_HEADING = "Rate";
const RATING_LENGTH = 5; // 4 plus an extra buffer of 1 in case heading is off by 1

// Read the content of the standings.txt file
fs.readFile('./data/standings.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Split the content into lines
    const lines = data.split('\n');

    // Create new files for standings below 800 and for 800 to 1099
    const stream800under = fs.createWriteStream('./data/standings-below-800.txt');
    const stream800to1099 = fs.createWriteStream('./data/standings-800-to-1099.txt');

    let ratingIndex = -1;
    let ratingEndIndex = -1;

    // Process each line
    lines.forEach((line) => {
        if (ratingIndex < 0) {
            ratingIndex = line.indexOf(RATING_HEADING);
            ratingEndIndex = ratingIndex + RATING_LENGTH;
        } else {
            const rating = parseInt(line.substring(ratingIndex, ratingEndIndex), 10);
            
            console.log(line, "-->", rating); // for debugging
            
            if (isNaN(rating) || rating < 800) {
                // Write the line to the new file
                stream800under.write(line + '\n');
            } else if (rating < 1100) {
                // Write the line to the new file
                stream800to1099.write(line + '\n');
            }
        }
    });

    // Close the new file stream
    stream800under.end();
    stream800to1099.end();

    console.log('Processing complete. Check data/standings-below-800.txt & data/standings-800-to-1099.txt for the result.');
});