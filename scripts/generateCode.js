/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const Admin = require('../packages/composer-admin');
const BusinessNetworkDefinition = Admin.BusinessNetworkDefinition;
const CodeGen = require('../packages/composer-common').CodeGen;
const FileWriter = CodeGen.FileWriter;
const fs = require('fs');
const GoLangVisitor = CodeGen.GoLangVisitor;
const JavaVisitor = CodeGen.JavaVisitor;
const JSONSchemaVisitor = CodeGen.JSONSchemaVisitor;
const PlantUMLVisitor = CodeGen.PlantUMLVisitor;
const TypescriptVisitor = CodeGen.TypescriptVisitor;


/**
* @param {string} archiveFile path to bna file
* @param {string} format format to generate
* @param {string} outputDir directory to output to

* @return {Promise} promise when command complete
*/
function generate(archiveFile, format, outputDir) {
    console.log('Listing Business Network Archive from '+archiveFile);
    let readFile = fs.readFileSync(archiveFile);
    return BusinessNetworkDefinition.fromArchive(readFile).then((businessNetwork) => {
        console.log('Identifier:'+businessNetwork.getIdentifier());
        console.log('Name:'+businessNetwork.getName());
        console.log('Version:'+businessNetwork.getVersion());

        let visitor = null;

        switch(format) {
        case 'Go':
            visitor = new GoLangVisitor();
            break;
        case 'PlantUML':
            visitor = new PlantUMLVisitor();
            break;
        case 'Typescript':
            visitor = new TypescriptVisitor();
            break;
        case 'Java':
            visitor = new JavaVisitor();
            break;
        case 'JSONSchema':
            visitor = new JSONSchemaVisitor();
            break;
        default:
            throw new Error ('Unrecognized code generator: ' + format );
        }

        let parameters = {};
        parameters.fileWriter = new FileWriter(outputDir);
        businessNetwork.accept(visitor, parameters);

        return;
    });
}

let args = process.argv.slice(2);

if (args.length !== 3) {
    throw new Error('Must pass 3 arguments: archiveFile, format, outputDir');

}

generate(args[0], args[1], args[2]);