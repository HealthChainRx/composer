import {Asset,AssetInterface,Participant,ParticipantInterface,Transaction,TransactionInterface,Event,EventInterface} from './org.hyperledger.composer.system';
import {VendorRelationship,ApplicationRelationship,VendorAdmin,Vendor,RelationshipType,Application} from './org.healthchain';
import {HumanName,Identifier,Gender,ContactPoint,Address} from './org.fhir';
// export namespace org.healthchain.vendoradmins{
   export interface BaseEventInterface  extends EventInterface {
      id: string;
      vendorIds?: string[];
   }
   
   export abstract  class BaseEvent  extends Event implements BaseEventInterface {
      id: string;
      vendorIds?: string[];
      constructor(input : BaseEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         if (input.vendorIds) {
            this.vendorIds = input.vendorIds;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.BaseEvent';
      }
   }
   export interface CreateEventInterface  extends BaseEventInterface {
   }
   
   export  class CreateEvent  extends BaseEvent implements CreateEventInterface {
      constructor(input : CreateEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.CreateEvent';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.id;
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface UpdateEventInterface  extends BaseEventInterface {
   }
   
   export  class UpdateEvent  extends BaseEvent implements UpdateEventInterface {
      constructor(input : UpdateEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.UpdateEvent';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.id;
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface RegisterInterface  extends TransactionInterface {
      id: string;
      name: HumanName;
      identifier?: Identifier[];
      gender?: Gender;
      birthDate?: Date;
      telecom?: ContactPoint[];
      address?: Address[];
      vendors?: VendorRelationship[];
      applications?: ApplicationRelationship[];
   }
   
   export  class Register  extends Transaction implements RegisterInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"VendorAdmin"}]
         };
      };
      id: string;
      name: HumanName;
      identifier?: Identifier[];
      gender?: Gender;
      birthDate?: Date;
      telecom?: ContactPoint[];
      address?: Address[];
      vendors?: VendorRelationship[];
      applications?: ApplicationRelationship[];
      constructor(input : RegisterInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.name = input.name;
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.birthDate) {
            this.birthDate = input.birthDate;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.address) {
            this.address = input.address;
         }
         if (input.vendors) {
            this.vendors = input.vendors;
         }
         if (input.applications) {
            this.applications = input.applications;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.Register';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.id;
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface RegisterJsonInterface  extends TransactionInterface {
      id: string;
      name: HumanName;
      identifier?: Identifier[];
      gender?: Gender;
      birthDate?: Date;
      telecom?: ContactPoint[];
      address?: Address[];
      vendors?: VendorRelationship[];
      applications?: ApplicationRelationship[];
   }
   
   export  class RegisterJson  extends Transaction implements RegisterJsonInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      id: string;
      name: HumanName;
      identifier?: Identifier[];
      gender?: Gender;
      birthDate?: Date;
      telecom?: ContactPoint[];
      address?: Address[];
      vendors?: VendorRelationship[];
      applications?: ApplicationRelationship[];
      constructor(input : RegisterJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.name = input.name;
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.birthDate) {
            this.birthDate = input.birthDate;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.address) {
            this.address = input.address;
         }
         if (input.vendors) {
            this.vendors = input.vendors;
         }
         if (input.applications) {
            this.applications = input.applications;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.RegisterJson';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.id;
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface UpdateInterface  extends TransactionInterface {
      vendorAdmin: string;
      name?: HumanName;
      gender?: Gender;
      telecom?: ContactPoint[];
      birthDate?: Date;
      address?: Address[];
   }
   
   export  class Update  extends Transaction implements UpdateInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"VendorAdmin"}]
         };
      };
      vendorAdmin: string;
      name?: HumanName;
      gender?: Gender;
      telecom?: ContactPoint[];
      birthDate?: Date;
      address?: Address[];
      constructor(input : UpdateInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.vendorAdmin = input.vendorAdmin;
         if (input.name) {
            this.name = input.name;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.birthDate) {
            this.birthDate = input.birthDate;
         }
         if (input.address) {
            this.address = input.address;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.Update';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface UpdateJsonInterface  extends TransactionInterface {
      vendorAdmin: string;
      name?: HumanName;
      gender?: Gender;
      telecom?: ContactPoint[];
      birthDate?: Date;
      address?: Address[];
   }
   
   export  class UpdateJson  extends Transaction implements UpdateJsonInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      vendorAdmin: string;
      name?: HumanName;
      gender?: Gender;
      telecom?: ContactPoint[];
      birthDate?: Date;
      address?: Address[];
      constructor(input : UpdateJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.vendorAdmin = input.vendorAdmin;
         if (input.name) {
            this.name = input.name;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.birthDate) {
            this.birthDate = input.birthDate;
         }
         if (input.address) {
            this.address = input.address;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.UpdateJson';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface AddIdentifiersInterface  extends TransactionInterface {
      vendorAdmin: string;
      identifier: Identifier[];
   }
   
   export  class AddIdentifiers  extends Transaction implements AddIdentifiersInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"VendorAdmin"}]
         };
      };
      vendorAdmin: string;
      identifier: Identifier[];
      constructor(input : AddIdentifiersInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.vendorAdmin = input.vendorAdmin;
         this.identifier = input.identifier;
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.AddIdentifiers';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface AddIdentifiersJsonInterface  extends TransactionInterface {
      vendorAdmin: string;
      identifier: Identifier[];
   }
   
   export  class AddIdentifiersJson  extends Transaction implements AddIdentifiersJsonInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      vendorAdmin: string;
      identifier: Identifier[];
      constructor(input : AddIdentifiersJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.vendorAdmin = input.vendorAdmin;
         this.identifier = input.identifier;
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.AddIdentifiersJson';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface AddToVendorInterface  extends TransactionInterface {
      vendorAdmin: string;
      vendor: string;
      relationshipType?: RelationshipType;
   }
   
   export  class AddToVendor  extends Transaction implements AddToVendorInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"VendorAdmin"}]
         };
      };
      vendorAdmin: string;
      vendor: string;
      relationshipType: RelationshipType = RelationshipType.implied;
      constructor(input : AddToVendorInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.vendorAdmin = input.vendorAdmin;
         this.vendor = input.vendor;
         if (input.relationshipType) {
            this.relationshipType = input.relationshipType;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.AddToVendor';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface AddToVendorJsonInterface  extends TransactionInterface {
      vendorAdmin: string;
      vendor: string;
      relationshipType?: RelationshipType;
   }
   
   export  class AddToVendorJson  extends Transaction implements AddToVendorJsonInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      vendorAdmin: string;
      vendor: string;
      relationshipType: RelationshipType = RelationshipType.implied;
      constructor(input : AddToVendorJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.vendorAdmin = input.vendorAdmin;
         this.vendor = input.vendor;
         if (input.relationshipType) {
            this.relationshipType = input.relationshipType;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.AddToVendorJson';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface AddToApplicationInterface  extends TransactionInterface {
      vendorAdmin: string;
      application: string;
      relationshipType?: RelationshipType;
   }
   
   export  class AddToApplication  extends Transaction implements AddToApplicationInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"VendorAdmin"}]
         };
      };
      vendorAdmin: string;
      application: string;
      relationshipType: RelationshipType = RelationshipType.implied;
      constructor(input : AddToApplicationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.vendorAdmin = input.vendorAdmin;
         this.application = input.application;
         if (input.relationshipType) {
            this.relationshipType = input.relationshipType;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.AddToApplication';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface AddToApplicationJsonInterface  extends TransactionInterface {
      vendorAdmin: string;
      application: string;
      relationshipType?: RelationshipType;
   }
   
   export  class AddToApplicationJson  extends Transaction implements AddToApplicationJsonInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      vendorAdmin: string;
      application: string;
      relationshipType: RelationshipType = RelationshipType.implied;
      constructor(input : AddToApplicationJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.vendorAdmin = input.vendorAdmin;
         this.application = input.application;
         if (input.relationshipType) {
            this.relationshipType = input.relationshipType;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.AddToApplicationJson';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface QueryInterface  extends TransactionInterface {
      name?: string;
      gender?: Gender;
      vendor?: string;
      application?: string;
   }
   
   export  class Query  extends Transaction implements QueryInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":true,"type":"Identifier","name":"VendorAdmin"}]
         };
      };
      name?: string;
      gender?: Gender;
      vendor?: string;
      application?: string;
      constructor(input : QueryInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.name) {
            this.name = input.name;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.vendor) {
            this.vendor = input.vendor;
         }
         if (input.application) {
            this.application = input.application;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.Query';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface QueryJsonInterface  extends TransactionInterface {
      name?: string;
      gender?: Gender;
      vendor?: string;
      application?: string;
      resolve?: string[];
   }
   
   export  class QueryJson  extends Transaction implements QueryJsonInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      name?: string;
      gender?: Gender;
      vendor?: string;
      application?: string;
      resolve?: string[];
      constructor(input : QueryJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.name) {
            this.name = input.name;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.vendor) {
            this.vendor = input.vendor;
         }
         if (input.application) {
            this.application = input.application;
         }
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.QueryJson';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface GetInterface  extends TransactionInterface {
      vendorAdmin: string;
   }
   
   export  class Get  extends Transaction implements GetInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"VendorAdmin"}]
         };
      };
      vendorAdmin: string;
      constructor(input : GetInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.vendorAdmin = input.vendorAdmin;
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.Get';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface GetJsonInterface  extends TransactionInterface {
      vendorAdmin: string;
      resolve?: string[];
   }
   
   export  class GetJson  extends Transaction implements GetJsonInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      vendorAdmin: string;
      resolve?: string[];
      constructor(input : GetJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.vendorAdmin = input.vendorAdmin;
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.GetJson';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface FetchInterface  extends TransactionInterface {
      assigner: string;
      value: string;
   }
   
   export  class Fetch  extends Transaction implements FetchInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"VendorAdmin"}]
         };
      };
      assigner: string;
      value: string;
      constructor(input : FetchInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.assigner = input.assigner;
         this.value = input.value;
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.Fetch';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
   export interface FetchJsonInterface  extends TransactionInterface {
      assigner: string;
      value: string;
      resolve?: string[];
   }
   
   export  class FetchJson  extends Transaction implements FetchJsonInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      assigner: string;
      value: string;
      resolve?: string[];
      constructor(input : FetchJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.assigner = input.assigner;
         this.value = input.value;
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.vendoradmins.FetchJson';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         Object.keys(json).forEach((key) => {
            if (json[key] === undefined) {
               delete json[key];
            } else if (json[key] instanceof Array) {
               json[key] = json[key].map((el : any) => {
                  if (typeof el === 'object' && !(el instanceof Date)) {
                     return el.serializeToJson();
                  } else {
                     return el;
                  }
               });
            } else if (typeof json[key] === 'object' && !(json[key] instanceof Date)) {
               json[key] = json[key].serializeToJson();
            }
         });
         return json;
      }
   }
// }
