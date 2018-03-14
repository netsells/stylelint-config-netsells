const fs = require('fs');
const { mkdir } = require('../../modules/utils.js');
const glob = require('glob');
const globRules = glob.sync(`${ __dirname }/stubs/*`);
const path = require('path');

/**
 * copyStub - Copies the contents of a stub to a location.
 */
const copyStub = (stubLocation, destination) => {
    let stubData = fs.readFileSync(stubLocation, 'utf8');

    stubData = stubData.replace(/\<rule-name\>/g, path.basename(destination));

    fs.writeFileSync(`${destination}/${path.basename(stubLocation)}`, stubData);
};

const userArg = process.argv[2];
const rulePath = `${ process.cwd() }/rules/${ userArg }`;

if (fs.existsSync(rulePath)) {
    console.log(`Failed. Rule already exists!`);
    process.exit(1);
}

mkdir(rulePath);

globRules.forEach((file) => {
    copyStub(file, rulePath);
});

console.log(`Success! Created template ${ userArg }. 🔥`);