const { processStandings } = require('./index');
const fs = require('fs');

describe('processStandings', () => {
    it('should process standings correctly for standings-final.txt', (done) => {
        fs.readFile('./samples/standings-final.txt', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const { standingsBelow800, standings800to1099 } = processStandings(data);
            
            fs.readFile('./samples/standings-final-below-800.txt', 'utf8', (err, below800Data) => {
                if (err) {
                    throw err;
                }
                expect(standingsBelow800.join('\n')).toEqual(below800Data);

                fs.readFile('./samples/standings-final-800-to-1099.txt', 'utf8', (err, from800to1099Data) => {
                    if (err) {
                        throw err;
                    }
                    expect(standings800to1099.join('\n')).toEqual(from800to1099Data);
                    done();
                });
            });
        });
    });

    it('should process standings correctly for standings-rnd5.txt', (done) => {
        fs.readFile('./samples/standings-rnd5.txt', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const { standingsBelow800, standings800to1099 } = processStandings(data);
            
            fs.readFile('./samples/standings-rnd5-below-800.txt', 'utf8', (err, below800Data) => {
                if (err) {
                    throw err;
                }
                expect(standingsBelow800.join('\n')).toEqual(below800Data);

                fs.readFile('./samples/standings-rnd5-800-to-1099.txt', 'utf8', (err, from800to1099Data) => {
                    if (err) {
                        throw err;
                    }
                    expect(standings800to1099.join('\n')).toEqual(from800to1099Data);
                    done();
                });
            });
        });
    });

    it('should process standings correctly for standings-rnd6.txt', (done) => {
        fs.readFile('./samples/standings-rnd6.txt', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const { standingsBelow800, standings800to1099 } = processStandings(data);
            
            fs.readFile('./samples/standings-rnd6-below-800.txt', 'utf8', (err, below800Data) => {
                if (err) {
                    throw err;
                }
                expect(standingsBelow800.join('\n')).toEqual(below800Data);

                fs.readFile('./samples/standings-rnd6-800-to-1099.txt', 'utf8', (err, from800to1099Data) => {
                    if (err) {
                        throw err;
                    }
                    expect(standings800to1099.join('\n')).toEqual(from800to1099Data);
                    done();
                });
            });
        });
    });
});