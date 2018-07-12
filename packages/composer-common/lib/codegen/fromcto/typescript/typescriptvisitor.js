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

const BusinessNetworkDefinition = require('../../../businessnetworkdefinition');
const ModelManager = require('../../../modelmanager');
const ModelUtil = require('../../../modelutil');
const ModelFile = require('../../../introspect/modelfile');
const ClassDeclaration = require('../../../introspect/classdeclaration');
const Field = require('../../../introspect/field');
const RelationshipDeclaration = require('../../../introspect/relationshipdeclaration');
const EnumDeclaration = require('../../../introspect/enumdeclaration');
const EnumValueDeclaration = require('../../../introspect/enumvaluedeclaration');
const util = require('util');

/**
 * Convert the contents of a ModelManager to TypeScript code.
 * All generated code is placed into the 'main' package. Set a
 * fileWriter property (instance of FileWriter) on the parameters
 * object to control where the generated code is written to disk.
 *
 * @private
 * @class
 * @memberof module:composer-common
 */
class TypescriptVisitor {
    /**
     * Visitor design pattern
     * @param {Object} thing - the object being visited
     * @param {Object} parameters  - the parameter
     * @return {Object} the result of visiting or null
     * @private
     */
    visit(thing, parameters) {
        if (thing instanceof BusinessNetworkDefinition) {
            return this.visitBusinessNetworkDefinition(thing, parameters);
        } else if (thing instanceof ModelManager) {
            return this.visitModelManager(thing, parameters);
        } else if (thing instanceof ModelFile) {
            return this.visitModelFile(thing, parameters);
        } else if (thing instanceof EnumDeclaration) {
            return this.visitEnumDeclaration(thing, parameters);
        } else if (thing instanceof ClassDeclaration) {
            return this.visitClassDeclaration(thing, parameters);
        } else if (thing instanceof Field) {
            return this.visitField(thing, parameters);
        } else if (thing instanceof RelationshipDeclaration) {
            return this.visitRelationship(thing, parameters);
        } else if (thing instanceof EnumValueDeclaration) {
            return this.visitEnumValueDeclaration(thing, parameters);
        } else {
            throw new Error('Unrecognised type: ' + typeof thing + ', value: ' + util.inspect(thing, { showHidden: true, depth: 2 }));
        }
    }

    /**
     * Visitor design pattern
     * @param {BusinessNetworkDefinition} businessNetworkDefinition - the object being visited
     * @param {Object} parameters  - the parameter
     * @return {Object} the result of visiting or null
     * @private
     */
    visitBusinessNetworkDefinition(businessNetworkDefinition, parameters) {
        businessNetworkDefinition.getModelManager().accept(this,parameters);
        return null;
    }

    /**
     * Visitor design pattern
     * @param {ModelManager} modelManager - the object being visited
     * @param {Object} parameters  - the parameter
     * @return {Object} the result of visiting or null
     * @private
     */
    visitModelManager(modelManager, parameters) {
        // let decls = {};
        // if (parameters.properties === undefined) {
        //     parameters.properties = {};
        // }

        // modelManager.getModelFiles().forEach((modelFile) => {
        //     modelFile.getAllDeclarations().filter(v => !v.isEnum().forEach((decl) => {
        //         decl[decl.getFullyQualifiedName()] = decl;
        //     }));
        // });

        // // let done = false;

        // // while (!done) {
        //     // done = true;

        // while (decls.length > 0) {
        //     Object.keys(decls).forEach((name) => {
        //         let decl = decls[name];

        //         // const name = decl.getFullyQualifiedName();
        //         if (!parameters.properties.hasOwnProperty(name)) {
        //             // done = false;

        //             let allClassProperties = [];

        //             if (classDeclaration.getSuperType()) {

        //             }

        //             allClassProperties = allClassProperties.concat(decl.getOwnProperties());

        //             parameters.properties[name] = allClassProperties;
        //         }
        //     });
        // }





//         let allClassProperties = [];
//         if (classDeclaration.getSuperType()) {
//             let superProperties = parameters.properties[classDeclaration.getSuperType()];
// console.log(classDeclaration.getName())
// console.log(superProperties === undefined);
//             allClassProperties = allClassProperties.concat(superProperties);
//         }
//         allClassProperties = allClassProperties.concat(classDeclaration.getOwnProperties());
//         parameters.properties[classDeclaration.getFullyQualifiedName()] = allClassProperties;



        // modelManager.getModelFiles().forEach((modelFile) => {
        //     modelFile.getAllDeclarations()
        //         .filter(v => !v.isEnum())
        //         .forEach((decl) => {
        //             if (decl instanceof ClassDeclaration) {
        //                 parameters.properties[decl.getFullyQualifiedName()] = decl.getProperties();
        //             }
        //         });
        // });

        modelManager.getModelFiles().forEach((modelFile) => {
            modelFile.accept(this,parameters);
        });
        return null;
    }

    /**
     * Visitor design pattern
     * @param {ModelFile} modelFile - the object being visited
     * @param {Object} parameters  - the parameter
     * @return {Object} the result of visiting or null
     * @private
     */
    visitModelFile(modelFile, parameters) {
        parameters.fileWriter.openFile(modelFile.getNamespace() + '.ts');

        const dot = '.';
        const properties = new Map();
        properties.set('org.hyperledger.composer.system', new Set());

        // if this is not the system model file we have to import the system types
        // so that they can be extended
        if( !modelFile.isSystemModelFile() ) {
            const systemTypes = modelFile.getModelManager().getSystemTypes();
            systemTypes.forEach(systemType => {
                properties.get('org.hyperledger.composer.system').add(systemType.name);
                properties.get('org.hyperledger.composer.system').add(systemType.name + 'Interface');
                // parameters.fileWriter.writeLine(0, `import {${systemType.getName()}} from './org.hyperledger.composer.system';`);
            });
        }

        // Import property types that are imported from other cto files.
        modelFile.getAllDeclarations()
            .filter(v => !v.isEnum())
            .forEach(classDeclaration => classDeclaration.getProperties().forEach(property => {
                if(!property.isPrimitive()){
                    const fullyQualifiedTypeName = property.getFullyQualifiedTypeName();
                    const lastIndexOfDot = fullyQualifiedTypeName.lastIndexOf(dot);
                    const propertyNamespace =  fullyQualifiedTypeName.substring(0, lastIndexOfDot);
                    const propertyTypeName = fullyQualifiedTypeName.substring(lastIndexOfDot + 1);
                    if(!properties.has(propertyNamespace)) {
                        properties.set(propertyNamespace, new Set());
                    }
                    properties.get(propertyNamespace).add(propertyTypeName);
                }
            }));

        modelFile.getImports().map(importString => {
            const lastIndexOfDot = importString.lastIndexOf(dot);
            const namespace = importString.substring(0, lastIndexOfDot);
            return namespace;
        }).filter(namespace => namespace !== modelFile.getNamespace()) // Skip own namespace.
            .filter((v, i, a) => a.indexOf(v) === i) // Remove any duplicates from direct imports
            .forEach(namespace => {
                const propertyTypeNames = properties.get(namespace);
                if(propertyTypeNames){
                    const csvPropertyTypeNames = Array.from(propertyTypeNames).join();
                    parameters.fileWriter.writeLine(0, `import {${csvPropertyTypeNames}} from './${namespace}';`);
                }
            });

        parameters.fileWriter.writeLine(0, '// export namespace ' + modelFile.getNamespace() + '{');

        modelFile.getAllDeclarations().forEach((decl) => {
            // TODO: Update parameter
            decl.accept(this, parameters);
        });

        parameters.fileWriter.writeLine(0, '// }');
        parameters.fileWriter.closeFile();

        return null;
    }

    /**
     * Visitor design pattern
     * @param {EnumDeclaration} enumDeclaration - the object being visited
     * @param {Object} parameters  - the parameter
     * @return {Object} the result of visiting or null
     * @private
     */
    visitEnumDeclaration(enumDeclaration, parameters) {

        parameters.fileWriter.writeLine(1, 'export enum ' + enumDeclaration.getName() + ' {' );

        enumDeclaration.getOwnProperties().forEach((property) => {
            property.accept(this,parameters);
        });

        parameters.fileWriter.writeLine(1, '}' );
        return null;
    }

    /**
     * Visitor design pattern
     * @param {ClassDeclaration} classDeclaration - the object being visited
     * @param {Object} parameters  - the parameter
     * @return {Object} the result of visiting or null
     * @private
     */
    visitClassDeclaration(classDeclaration, parameters) {
//         if (parameters.properties === undefined) {
//             parameters.properties = {};
//         }
//         let allClassProperties = [];
//         if (classDeclaration.getSuperType()) {
//             let superProperties = parameters.properties[classDeclaration.getSuperType()];
// console.log(classDeclaration.getName())
// console.log(superProperties === undefined);
//             allClassProperties = allClassProperties.concat(superProperties);
//         }
//         allClassProperties = allClassProperties.concat(classDeclaration.getOwnProperties());
//         parameters.properties[classDeclaration.getFullyQualifiedName()] = allClassProperties;

        let allClassProperties = classDeclaration.getProperties();

        const className = classDeclaration.getName();
        const interfaceName = `${className}Interface`;

        // Write Interface
        let superType = classDeclaration.getSuperType() ? ` extends ${ModelUtil.getShortName(classDeclaration.getSuperType())}Interface` : '';

        parameters.fileWriter.writeLine(1, `export interface ${interfaceName} ${superType} {`);

        // if (classDeclaration.decorators && classDeclaration.decorators.length > 0) {
        //     parameters.fileWriter.writeLine(2, 'decorators: object;');
        // }

        classDeclaration.getOwnProperties().forEach((property) => {
            let isInterfaceParameters = Object.assign({isInterface: true}, parameters);
            property.accept(this, isInterfaceParameters);
        });

        parameters.fileWriter.writeLine(1, '}' );
        parameters.fileWriter.writeLine(1, '');

        // Write Class
        let isAbstract = classDeclaration.isAbstract() ? 'export abstract ' : 'export ';
        superType = classDeclaration.getSuperType() ? ' extends ' + ModelUtil.getShortName(classDeclaration.getSuperType()) : '';

        parameters.fileWriter.writeLine(1, `${isAbstract} class ${className} ${superType} implements ${interfaceName} {`);

        if (classDeclaration.decorators && classDeclaration.decorators.length > 0) {
            parameters.fileWriter.writeLine(2, 'static decorators() {');
            parameters.fileWriter.writeLine(3, 'return {');

            classDeclaration.decorators.forEach((decorator, idx, array) => {
                if (idx !== array.length - 1) {
                    parameters.fileWriter.writeLine(4, `${decorator.name}: ${JSON.stringify(decorator.arguments)},`);
                } else {
                    parameters.fileWriter.writeLine(4, `${decorator.name}: ${JSON.stringify(decorator.arguments)}`);
                }
            });

            parameters.fileWriter.writeLine(3, '};');
            parameters.fileWriter.writeLine(2, '};');
        }

        classDeclaration.getOwnProperties().forEach((property) => {
            property.accept(this, parameters);
        });

        // parameters.fileWriter.writeIndented(2, 'constructor(' );

        // parameters.fileWriter.write('' );


        // parameters.fileWriter.writeLine(2, `constructor(input : ${interfaceName} | null = null) {`);
        parameters.fileWriter.writeLine(2, `constructor(input : ${interfaceName}, setOptionalDefaults : boolean = false) {`);
        if (classDeclaration.getSuperType()) {
            parameters.fileWriter.writeLine(3, 'super(input, setOptionalDefaults);');
        }
        // parameters.fileWriter.writeLine(3, 'if (input !== undefined) {');



        // parameters.fileWriter.writeLine(4, 'Object.keys(input).forEach(key => this[key] = input[key]);');

        classDeclaration.getOwnProperties().forEach((property) => {
            if (property.optional && (property instanceof Field && property.getDefaultValue())) {
                parameters.fileWriter.writeLine(3, `if (input.${property.name}) {` );
                parameters.fileWriter.writeLine(4, `this.${property.name} = input.${property.name};` );
                parameters.fileWriter.writeLine(3, '} else if (!setOptionalDefaults) {' );
                parameters.fileWriter.writeLine(4, `delete this.${property.name};` );
                parameters.fileWriter.writeLine(3, '}' );
            } else if (property.optional || (property instanceof Field && property.getDefaultValue())) {
                parameters.fileWriter.writeLine(3, `if (input.${property.name}) {` );
                parameters.fileWriter.writeLine(4, `this.${property.name} = input.${property.name};` );
                parameters.fileWriter.writeLine(3, '}' );
            } else {
                parameters.fileWriter.writeLine(3, `this.${property.name} = input.${property.name};` );
            }


            // parameters.fileWriter.writeIndented(2, `this.${property.name} = ${property.name};` );
            // let writeParameters = Object.assign(parameters, {write: true});
            // property.accept(this, writeParameters);
            // parameters.fileWriter.write(';');
        });




        // parameters.fileWriter.writeLine(3, '}');






        // const classHasOwnProperties = classDeclaration.getOwnProperties().length > 0;

        // if (classDeclaration.getSuperType()) {
        //     parameters.properties[classDeclaration.getSuperType()].forEach((property, idx, array) => {
        //         let writeParameters = Object.assign({write: true}, parameters);
        //         property.accept(this, writeParameters);
        //         if (classHasOwnProperties) {
        //             parameters.fileWriter.write(', ');
        //         } else if (idx !== array.length - 1) {
        //             parameters.fileWriter.write(', ');
        //         }
        //     });
        // }


        // classDeclaration.getOwnProperties().forEach((property, idx, array) => {
        // allClassProperties.forEach((property, idx, array) => {
        //     let writeParameters = Object.assign({write: true}, parameters);
        //     property.accept(this, writeParameters);
        //     if (idx !== array.length - 1){
        //         parameters.fileWriter.write(', ');
        //     }
        // });

        // parameters.fileWriter.writeLine(0,') {');

        // Only call super for derived classes
        // if (classDeclaration.getSuperType()) {
        //     parameters.fileWriter.writeIndented(3, 'super(');

        //     // parameters.properties[classDeclaration.getSuperType()].forEach((property, idx, array) => {
        //     classDeclaration.getSuperTypeDeclaration().getProperties().forEach((property, idx, array) => {
        //         let writeNameParameters = Object.assign({writeName: true}, parameters);
        //         property.accept(this, writeNameParameters);
        //         if (idx !== array.length - 1) {
        //             parameters.fileWriter.write(', ');
        //         }
        //     });

        //     parameters.fileWriter.writeLine(0, ');');
        // }

        // classDeclaration.getOwnProperties().forEach((property) => {
        //     parameters.fileWriter.writeLine(3, `this.${property.name} = ${property.name};` );

        //     // parameters.fileWriter.writeIndented(2, `this.${property.name} = ${property.name};` );
        //     // let writeParameters = Object.assign(parameters, {write: true});
        //     // property.accept(this, writeParameters);
        //     // parameters.fileWriter.write(';');
        // });


        parameters.fileWriter.writeLine(2, '}' );

        const hasVersion = allClassProperties.find((property) => property.name === 'version') !== undefined;
        const hasId = allClassProperties.find((property) => property.name === 'id') !== undefined;



        parameters.fileWriter.writeLine(2, 'getResourceType() : string {');
        parameters.fileWriter.writeLine(3, `return '${classDeclaration.getFullyQualifiedName()}';`);
        parameters.fileWriter.writeLine(2, '}');

        if (!classDeclaration.isAbstract()) {
            parameters.fileWriter.writeLine(2, 'serializeToJson() {');
            parameters.fileWriter.writeLine(3, 'let json : any = Object.assign( { resourceType: this.getResourceType() }, this);');
            if (hasVersion) {
                parameters.fileWriter.writeLine(3, 'delete json.version;');
            }
            if (hasId) {
                parameters.fileWriter.writeLine(3, 'delete json.id;');
            }
            parameters.fileWriter.writeLine(3, 'Object.keys(json).forEach((key) => { if (json[key] === undefined) delete json[key]; });' );
            parameters.fileWriter.writeLine(3, 'return json;' );
            parameters.fileWriter.writeLine(2, '}');
        }


        parameters.fileWriter.writeLine(1, '}' );

        return null;
    }

    /**
     * Visitor design pattern
     * @param {Field} field - the object being visited
     * @param {Object} parameters  - the parameter
     * @return {Object} the result of visiting or null
     * @private
     */
    visitField(field, parameters) {
        let array = field.isArray() ? '[]' : '';
        const name = field.getName();

        let operator = '';
        if (field.optional || (field.getDefaultValue() && parameters.isInterface)) {
            operator = '?';
        }
        // else if (field.getDefaultValue() === undefined && !parameters.isInterface) {
        //     operator = '!';
        // }

        const type = this.toTsType(field.getType());

        // const defaultValue = field.getDefaultValue() && !parameters.isInterface ? ` = ${field.getDefaultValue()}` : '';
        let defaultValue = '';
        if (field.getDefaultValue() && !parameters.isInterface) {
            if (type === 'number' || type === 'boolean' || type === 'Date') {
                defaultValue = ` = ${field.getDefaultValue()}`;
            } else if (type === 'string') {
                defaultValue = ` = '${field.getDefaultValue()}'`;
            } else {
                defaultValue = ` = ${type}.${field.getDefaultValue()}`;
            }
        }

        if (parameters.writeName) {
            parameters.fileWriter.write(name);
        } else if (parameters.write) {
            parameters.fileWriter.write(`${name}${operator}: ${type}${array}${defaultValue}`);
        } else {
            parameters.fileWriter.writeLine(2, `${name}${operator}: ${type}${array}${defaultValue};`);
        }

        return null;
    }

    /**
     * Visitor design pattern
     * @param {EnumValueDeclaration} enumValueDeclaration - the object being visited
     * @param {Object} parameters  - the parameter
     * @return {Object} the result of visiting or null
     * @private
     */
    visitEnumValueDeclaration(enumValueDeclaration, parameters) {
        parameters.fileWriter.writeLine(2, `${enumValueDeclaration.getName()} = '${enumValueDeclaration.getName()}',`);
        return null;
    }

    /**
     * Visitor design pattern
     * @param {Relationship} relationship - the object being visited
     * @param {Object} parameters  - the parameter
     * @return {Object} the result of visiting or null
     * @private
     */
    visitRelationship(relationship, parameters) {
        let array = relationship.isArray() ? '[]' : '';
        const name = relationship.getName();
        const optional = relationship.optional ? '?' : '';
        // const optional = relationship.optional ? '?' : parameters.isInterface ? '' : '!';
        // const orUndefined = relationship.optional ? ' | undefined' : '';
        const orUndefined = '';

        // we export all relationships by capitalizing them
        if (parameters.writeName) {
            parameters.fileWriter.write(name);
        } else if (parameters.write) {
            parameters.fileWriter.write(`${name}${optional}: string${array}${orUndefined}`);
        } else {
            parameters.fileWriter.writeLine(2, `${name}${optional}: string${array}${orUndefined};`);
        }
        return null;
    }

    /**
     * Converts a Composer type to a Typescript  type. Primitive types are converted
     * everything else is passed through unchanged.
     * @param {string} type  - the composer type
     * @return {string} the corresponding type in Typescript
     * @private
     */
    toTsType(type) {
        switch(type) {
        case 'DateTime':
            return 'Date';
        case 'Boolean':
            return 'boolean';
        case 'String':
            return 'string';
        case 'Double':
            return 'number';
        case 'Long':
            return 'number';
        case 'Integer':
            return 'number';
        default:
            return type;
        }
    }
}

module.exports = TypescriptVisitor;
