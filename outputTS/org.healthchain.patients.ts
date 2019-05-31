import {Asset,AssetInterface,Participant,ParticipantInterface,Transaction,TransactionInterface,Event,EventInterface} from './org.hyperledger.composer.system';
import {PrescriberRelationship,ClinicLocationRelationship,DispenserRelationship,PharmacyLocationRelationship,Patient,Prescriber,PharmacyLocation} from './org.healthchain';
import {HumanName,Gender,Identifier,ContactPoint,Address} from './org.fhir';
// export namespace org.healthchain.patients{
   export interface BaseEventInterface  extends EventInterface {
      id: string;
      pharmacyLocationIds?: string[];
      clinicLocationIds?: string[];
   }
   
   export abstract  class BaseEvent  extends Event implements BaseEventInterface {
      id: string;
      pharmacyLocationIds?: string[];
      clinicLocationIds?: string[];
      constructor(input : BaseEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         if (input.pharmacyLocationIds) {
            this.pharmacyLocationIds = input.pharmacyLocationIds;
         }
         if (input.clinicLocationIds) {
            this.clinicLocationIds = input.clinicLocationIds;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.patients.BaseEvent';
      }
   }
   export interface CreateEventInterface  extends BaseEventInterface {
   }
   
   export  class CreateEvent  extends BaseEvent implements CreateEventInterface {
      constructor(input : CreateEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.patients.CreateEvent';
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
         return 'org.healthchain.patients.UpdateEvent';
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
      gender: Gender;
      birthDate: Date;
      identifier?: Identifier[];
      telecom?: ContactPoint[];
      deceased?: boolean;
      deceasedDateTime?: Date;
      address?: Address[];
      prescribers?: PrescriberRelationship[];
      clinicLocations?: ClinicLocationRelationship[];
      dispensers?: DispenserRelationship[];
      pharmacyLocations?: PharmacyLocationRelationship[];
   }
   
   export  class Register  extends Transaction implements RegisterInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Patient"}]
         };
      };
      id: string;
      name: HumanName;
      gender: Gender;
      birthDate: Date;
      identifier?: Identifier[];
      telecom?: ContactPoint[];
      deceased: boolean = false;
      deceasedDateTime?: Date;
      address?: Address[];
      prescribers?: PrescriberRelationship[];
      clinicLocations?: ClinicLocationRelationship[];
      dispensers?: DispenserRelationship[];
      pharmacyLocations?: PharmacyLocationRelationship[];
      constructor(input : RegisterInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.name = input.name;
         this.gender = input.gender;
         this.birthDate = input.birthDate;
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.deceased) {
            this.deceased = input.deceased;
         }
         if (input.deceasedDateTime) {
            this.deceasedDateTime = input.deceasedDateTime;
         }
         if (input.address) {
            this.address = input.address;
         }
         if (input.prescribers) {
            this.prescribers = input.prescribers;
         }
         if (input.clinicLocations) {
            this.clinicLocations = input.clinicLocations;
         }
         if (input.dispensers) {
            this.dispensers = input.dispensers;
         }
         if (input.pharmacyLocations) {
            this.pharmacyLocations = input.pharmacyLocations;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.patients.Register';
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
      gender: Gender;
      birthDate: Date;
      identifier?: Identifier[];
      telecom?: ContactPoint[];
      deceased?: boolean;
      deceasedDateTime?: Date;
      address?: Address[];
      prescribers?: PrescriberRelationship[];
      clinicLocations?: ClinicLocationRelationship[];
      dispensers?: DispenserRelationship[];
      pharmacyLocations?: PharmacyLocationRelationship[];
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
      gender: Gender;
      birthDate: Date;
      identifier?: Identifier[];
      telecom?: ContactPoint[];
      deceased: boolean = false;
      deceasedDateTime?: Date;
      address?: Address[];
      prescribers?: PrescriberRelationship[];
      clinicLocations?: ClinicLocationRelationship[];
      dispensers?: DispenserRelationship[];
      pharmacyLocations?: PharmacyLocationRelationship[];
      constructor(input : RegisterJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.name = input.name;
         this.gender = input.gender;
         this.birthDate = input.birthDate;
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.deceased) {
            this.deceased = input.deceased;
         }
         if (input.deceasedDateTime) {
            this.deceasedDateTime = input.deceasedDateTime;
         }
         if (input.address) {
            this.address = input.address;
         }
         if (input.prescribers) {
            this.prescribers = input.prescribers;
         }
         if (input.clinicLocations) {
            this.clinicLocations = input.clinicLocations;
         }
         if (input.dispensers) {
            this.dispensers = input.dispensers;
         }
         if (input.pharmacyLocations) {
            this.pharmacyLocations = input.pharmacyLocations;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.patients.RegisterJson';
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
      patient: string;
      name?: HumanName;
      gender?: Gender;
      telecom?: ContactPoint[];
      birthDate?: Date;
      address?: Address[];
   }
   
   export  class Update  extends Transaction implements UpdateInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Patient"}]
         };
      };
      patient: string;
      name?: HumanName;
      gender?: Gender;
      telecom?: ContactPoint[];
      birthDate?: Date;
      address?: Address[];
      constructor(input : UpdateInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.patient = input.patient;
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
         return 'org.healthchain.patients.Update';
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
      patient: string;
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
      patient: string;
      name?: HumanName;
      gender?: Gender;
      telecom?: ContactPoint[];
      birthDate?: Date;
      address?: Address[];
      constructor(input : UpdateJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.patient = input.patient;
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
         return 'org.healthchain.patients.UpdateJson';
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
      patient: string;
      identifier: Identifier[];
   }
   
   export  class AddIdentifiers  extends Transaction implements AddIdentifiersInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Patient"}]
         };
      };
      patient: string;
      identifier: Identifier[];
      constructor(input : AddIdentifiersInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.patient = input.patient;
         this.identifier = input.identifier;
      }
      getResourceType() : string {
         return 'org.healthchain.patients.AddIdentifiers';
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
      patient: string;
      identifier: Identifier[];
   }
   
   export  class AddIdentifiersJson  extends Transaction implements AddIdentifiersJsonInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      patient: string;
      identifier: Identifier[];
      constructor(input : AddIdentifiersJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.patient = input.patient;
         this.identifier = input.identifier;
      }
      getResourceType() : string {
         return 'org.healthchain.patients.AddIdentifiersJson';
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
      direct?: boolean;
      name?: string;
      gender?: Gender;
      deceased?: boolean;
      prescriber?: string;
      pharmacyLocation?: string;
   }
   
   export  class Query  extends Transaction implements QueryInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":true,"type":"Identifier","name":"Patient"}]
         };
      };
      direct: boolean = false;
      name?: string;
      gender?: Gender;
      deceased?: boolean;
      prescriber?: string;
      pharmacyLocation?: string;
      constructor(input : QueryInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.direct) {
            this.direct = input.direct;
         }
         if (input.name) {
            this.name = input.name;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.deceased) {
            this.deceased = input.deceased;
         }
         if (input.prescriber) {
            this.prescriber = input.prescriber;
         }
         if (input.pharmacyLocation) {
            this.pharmacyLocation = input.pharmacyLocation;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.patients.Query';
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
      direct?: boolean;
      name?: string;
      gender?: Gender;
      deceased?: boolean;
      prescriber?: string;
      pharmacyLocation?: string;
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
      direct: boolean = false;
      name?: string;
      gender?: Gender;
      deceased?: boolean;
      prescriber?: string;
      pharmacyLocation?: string;
      resolve?: string[];
      constructor(input : QueryJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.direct) {
            this.direct = input.direct;
         }
         if (input.name) {
            this.name = input.name;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.deceased) {
            this.deceased = input.deceased;
         }
         if (input.prescriber) {
            this.prescriber = input.prescriber;
         }
         if (input.pharmacyLocation) {
            this.pharmacyLocation = input.pharmacyLocation;
         }
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.patients.QueryJson';
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
      patient: string;
   }
   
   export  class Get  extends Transaction implements GetInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"Patient"}]
         };
      };
      patient: string;
      constructor(input : GetInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.patient = input.patient;
      }
      getResourceType() : string {
         return 'org.healthchain.patients.Get';
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
      patient: string;
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
      patient: string;
      resolve?: string[];
      constructor(input : GetJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.patient = input.patient;
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.patients.GetJson';
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
            returns: [{"array":false,"type":"Identifier","name":"Patient"}]
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
         return 'org.healthchain.patients.Fetch';
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
         return 'org.healthchain.patients.FetchJson';
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
