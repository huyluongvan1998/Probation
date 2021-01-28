import fs from 'fs';
const obj = []

const output = fs.readFileSync('./test.txt', 'utf8')
//split into arr by newline
//each el is defined on newline
.trim()
.split('\r\n')
.map(line => line.split('\t'))
.reduce((customer ,line) =>{
    customer = {
        name: line[0],
        gender: line[1],
        nation: line[2],
        id: line[3]
    }
    obj.push(customer);
    return obj
})


console.log('output: ' ,JSON.stringify(output, null, 2));
