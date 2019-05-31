import {Asset,AssetInterface,Participant,ParticipantInterface,Transaction,TransactionInterface,Event,EventInterface} from './org.hyperledger.composer.system';
import {ClinicLocationRelationship,Sig,ClinicAdmin} from './org.healthchain';
import {HumanName,Gender,Identifier,ContactPoint,Address} from './org.fhir';
// export namespace org.healthchain.clinicadmins{
   export interface BaseEventInterface  extends EventInterface {
      id: string;
      clinicLocationId?: string;
   }
   
   export abstract  class BaseEvent  extends Event implements BaseEventInterface {
      id: string;
      clinicLocationId?: string;
      constructor(input : BaseEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         if (input.clinicLocationId) {
            this.clinicLocationId = input.clinicLocationId;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.clinicadmins.BaseEvent';
      }
   }
   export interface CreateEventInterface  extends BaseEventInterface {
   }
   
   export  class CreateEvent  extends BaseEvent implements CreateEventInterface {
      constructor(input : CreateEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.clinicadmins.CreateEvent';
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
         return 'org.healthchain.clinicadmins.UpdateEvent';
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
      gender?: Gender;
      birthDate?: Date;
      identifier?: Identifier[];
      telecom?: ContactPoint[];
      address?: Address[];
      clinicLocations?: ClinicLocationRelationship[];
      favoriteSigs?: string[];
   }
   
   export  class Register  extends Transaction implements RegisterInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"ClinicAdmin"}]
         };
      };
      id: string;
      name: HumanName;
      gender?: Gender;
      birthDate?: Date;
      identifier?: Identifier[];
      telecom?: ContactPoint[];
      address?: Address[];
      clinicLocations?: ClinicLocationRelationship[];
      favoriteSigs?: string[];
      constructor(input : RegisterInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.name = input.name;
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.birthDate) {
            this.birthDate = input.birthDate;
         }
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.address) {
            this.address = input.address;
         }
         if (input.clinicLocations) {
            this.clinicLocations = input.clinicLocations;
         }
         if (input.favoriteSigs) {
            this.favoriteSigs = input.favoriteSigs;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.clinicadmins.Register';
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
      gender?: Gender;
      birthDate?: Date;
      identifier?: Identifier[];
      telecom?: ContactPoint[];
      address?: Address[];
      clinicLocations?: ClinicLocationRelationship[];
      favoriteSigs?: string[];
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
      gender?: Gender;
      birthDate?: Date;
      identifier?: Identifier[];
      telecom?: ContactPoint[];
      address?: Address[];
      clinicLocations?: ClinicLocationRelationship[];
      favoriteSigs?: string[];
      constructor(input : RegisterJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.name = input.name;
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.birthDate) {
            this.birthDate = input.birthDate;
         }
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.address) {
            this.address = input.address;
         }
         if (input.clinicLocations) {
            this.clinicLocations = input.clinicLocations;
         }
         if (input.favoriteSigs) {
            this.favoriteSigs = input.favoriteSigs;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.clinicadmins.RegisterJson';
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
      clinicAdmin: string;
      name?: HumanName;
      gender?: Gender;
      telecom?: ContactPoint[];
      birthDate?: Date;
      address?: Address[];
      favoriteSigs?: string[];
   }
   
   export  class Update  extends Transaction implements UpdateInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"ClinicAdmin"}]
         };
      };
      clinicAdmin: string;
      name?: HumanName;
      gender?: Gender;
      telecom?: ContactPoint[];
      birthDate?: Date;
      address?: Address[];
      favoriteSigs?: string[];
      constructor(input : UpdateInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinicAdmin = input.clinicAdmin;
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
         if (input.favoriteSigs) {
            this.favoriteSigs = input.favoriteSigs;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.clinicadmins.Update';
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
      clinicAdmin: string;
      name?: HumanName;
      gender?: Gender;
      telecom?: ContactPoint[];
      birthDate?: Date;
      address?: Address[];
      favoriteSigs?: string[];
   }
   
   export  class UpdateJson  extends Transaction implements UpdateJsonInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      clinicAdmin: string;
      name?: HumanName;
      gender?: Gender;
      telecom?: ContactPoint[];
      birthDate?: Date;
      address?: Address[];
      favoriteSigs?: string[];
      constructor(input : UpdateJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinicAdmin = input.clinicAdmin;
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
         if (input.favoriteSigs) {
            this.favoriteSigs = input.favoriteSigs;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.clinicadmins.UpdateJson';
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
      clinicAdmin: string;
      identifier: Identifier[];
   }
   
   export  class AddIdentifiers  extends Transaction implements AddIdentifiersInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"ClinicAdmin"}]
         };
      };
      clinicAdmin: string;
      identifier: Identifier[];
      constructor(input : AddIdentifiersInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinicAdmin = input.clinicAdmin;
         this.identifier = input.identifier;
      }
      getResourceType() : string {
         return 'org.healthchain.clinicadmins.AddIdentifiers';
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
      clinicAdmin: string;
      identifier: Identifier[];
   }
   
   export  class AddIdentifiersJson  extends Transaction implements AddIdentifiersJsonInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      clinicAdmin: string;
      identifier: Identifier[];
      constructor(input : AddIdentifiersJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinicAdmin = input.clinicAdmin;
         this.identifier = input.identifier;
      }
      getResourceType() : string {
         return 'org.healthchain.clinicadmins.AddIdentifiersJson';
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
   }
   
   export  class Query  extends Transaction implements QueryInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":true,"type":"Identifier","name":"ClinicAdmin"}]
         };
      };
      name?: string;
      gender?: Gender;
      constructor(input : QueryInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.name) {
            this.name = input.name;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.clinicadmins.Query';
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
      resolve?: string[];
      constructor(input : QueryJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.name) {
            this.name = input.name;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.clinicadmins.QueryJson';
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
      clinicAdmin: string;
   }
   
   export  class Get  extends Transaction implements GetInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"ClinicAdmin"}]
         };
      };
      clinicAdmin: string;
      constructor(input : GetInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinicAdmin = input.clinicAdmin;
      }
      getResourceType() : string {
         return 'org.healthchain.clinicadmins.Get';
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
      clinicAdmin: string;
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
      clinicAdmin: string;
      resolve?: string[];
      constructor(input : GetJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinicAdmin = input.clinicAdmin;
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.clinicadmins.GetJson';
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
            returns: [{"array":false,"type":"Identifier","name":"ClinicAdmin"}]
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
         return 'org.healthchain.clinicadmins.Fetch';
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
         return 'org.healthchain.clinicadmins.FetchJson';
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
