import fs from 'fs';
// afegiu codi per llegir './data/movies.json'

const data = fs.readFileSync('./data/movies.json');
export default JSON.parse(data); 


