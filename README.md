chess-standings
===============
A script I very quickly wrote while my son was participating in the
[US Chess Federation 2023 National K-12 Grade Championships](https://www.uschess.org/tournaments/2023/k12/)
to parse the standings that were posted online and break them up into 
separate files based on the rating class groupings of my son and
his friends.

To use, copy & paste standings into the `data/standings.txt` file
and run `npm start` from the root of this project. Then open the
standings file you want to see the standings for and check the
line numbers of the file to see the standings for each player.

You may need to modify `index.js` to meet your needs based on updates
to the standings format or the rating class groupings you wish to 
see the standings for.

The format of the standings changed during the tournament, so I 
included anonymized samples of the standings I saw in the `samples`
folder to assist with updating the code in the future. I anonymized
the names by asking ChatGPT for a list of random names and 
replacing the actual names with the names ChatGPT generated.