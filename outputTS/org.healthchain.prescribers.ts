import {Asset,AssetInterface,Participant,ParticipantInterface,Transaction,TransactionInterface,Event,EventInterface} from './org.hyperledger.composer.system';
import {ClinicLocationRelationship,Sig,Prescriber,ClinicLocation,RelationshipType} from './org.healthchain';
import {HumanName,Gender,Identifier,ContactPoint,Address} from './org.fhir';
// export namespace org.healthchain.prescribers{
   export interface BaseEventInterface  extends EventInterface {
      id: string;
      clinicLocationIds?: string[];
   }
   
   export abstract  class BaseEvent  extends Event implements BaseEventInterface {
      id: string;
      clinicLocationIds?: string[];
      constructor(input : BaseEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         if (input.clinicLocationIds) {
            this.clinicLocationIds = input.clinicLocationIds;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.prescribers.BaseEvent';
      }
   }
   export interface CreateEventInterface  extends BaseEventInterface {
   }
   
   export  class CreateEvent  extends BaseEvent implements CreateEventInterface {
      constructor(input : CreateEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.prescribers.CreateEvent';
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
         return 'org.healthchain.prescribers.UpdateEvent';
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
            returns: [{"array":false,"type":"Identifier","name":"Prescriber"}]
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
         return 'org.healthchain.prescribers.Register';
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
         return 'org.healthchain.prescribers.RegisterJson';
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
      prescriber: string;
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
            returns: [{"array":false,"type":"Identifier","name":"Prescriber"}]
         };
      };
      prescriber: string;
      name?: HumanName;
      gender?: Gender;
      telecom?: ContactPoint[];
      birthDate?: Date;
      address?: Address[];
      favoriteSigs?: string[];
      constructor(input : UpdateInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.prescriber = input.prescriber;
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
         return 'org.healthchain.prescribers.Update';
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
      prescriber: string;
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
      prescriber: string;
      name?: HumanName;
      gender?: Gender;
      telecom?: ContactPoint[];
      birthDate?: Date;
      address?: Address[];
      favoriteSigs?: string[];
      constructor(input : UpdateJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.prescriber = input.prescriber;
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
         return 'org.healthchain.prescribers.UpdateJson';
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
      prescriber: string;
      identifier: Identifier[];
   }
   
   export  class AddIdentifiers  extends Transaction implements AddIdentifiersInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Prescriber"}]
         };
      };
      prescriber: string;
      identifier: Identifier[];
      constructor(input : AddIdentifiersInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.prescriber = input.prescriber;
         this.identifier = input.identifier;
      }
      getResourceType() : string {
         return 'org.healthchain.prescribers.AddIdentifiers';
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
      prescriber: string;
      identifier: Identifier[];
   }
   
   export  class AddIdentifiersJson  extends Transaction implements AddIdentifiersJsonInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      prescriber: string;
      identifier: Identifier[];
      constructor(input : AddIdentifiersJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.prescriber = input.prescriber;
         this.identifier = input.identifier;
      }
      getResourceType() : string {
         return 'org.healthchain.prescribers.AddIdentifiersJson';
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
   export interface AddToClinicLocationInterface  extends TransactionInterface {
      prescriber: string;
      clinicLocation?: string;
      relationshipType?: RelationshipType;
   }
   
   export  class AddToClinicLocation  extends Transaction implements AddToClinicLocationInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Prescriber"}]
         };
      };
      prescriber: string;
      clinicLocation?: string;
      relationshipType: RelationshipType = RelationshipType.employed;
      constructor(input : AddToClinicLocationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.prescriber = input.prescriber;
         if (input.clinicLocation) {
            this.clinicLocation = input.clinicLocation;
         }
         if (input.relationshipType) {
            this.relationshipType = input.relationshipType;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.prescribers.AddToClinicLocation';
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
   export interface AddToClinicLocationJsonInterface  extends TransactionInterface {
      prescriber: string;
      clinicLocation?: string;
      relationshipType?: RelationshipType;
   }
   
   export  class AddToClinicLocationJson  extends Transaction implements AddToClinicLocationJsonInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      prescriber: string;
      clinicLocation?: string;
      relationshipType: RelationshipType = RelationshipType.employed;
      constructor(input : AddToClinicLocationJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.prescriber = input.prescriber;
         if (input.clinicLocation) {
            this.clinicLocation = input.clinicLocation;
         }
         if (input.relationshipType) {
            this.relationshipType = input.relationshipType;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.prescribers.AddToClinicLocationJson';
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
      clinicLocation?: string;
   }
   
   export  class Query  extends Transaction implements QueryInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":true,"type":"Identifier","name":"Prescriber"}]
         };
      };
      name?: string;
      gender?: Gender;
      clinicLocation?: string;
      constructor(input : QueryInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.name) {
            this.name = input.name;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.clinicLocation) {
            this.clinicLocation = input.clinicLocation;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.prescribers.Query';
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
      clinicLocation?: string;
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
      clinicLocation?: string;
      resolve?: string[];
      constructor(input : QueryJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.name) {
            this.name = input.name;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.clinicLocation) {
            this.clinicLocation = input.clinicLocation;
         }
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.prescribers.QueryJson';
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
      prescriber: string;
   }
   
   export  class Get  extends Transaction implements GetInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"Prescriber"}]
         };
      };
      prescriber: string;
      constructor(input : GetInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.prescriber = input.prescriber;
      }
      getResourceType() : string {
         return 'org.healthchain.prescribers.Get';
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
      prescriber: string;
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
      prescriber: string;
      resolve?: string[];
      constructor(input : GetJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.prescriber = input.prescriber;
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.prescribers.GetJson';
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
            returns: [{"array":false,"type":"Identifier","name":"Prescriber"}]
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
         return 'org.healthchain.prescribers.Fetch';
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
         return 'org.healthchain.prescribers.FetchJson';
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
