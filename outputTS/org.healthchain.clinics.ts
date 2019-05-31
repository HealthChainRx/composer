import {Asset,AssetInterface,Participant,ParticipantInterface,Transaction,TransactionInterface,Event,EventInterface} from './org.hyperledger.composer.system';
import {OrganizationStatus,Organization,Vendor,Clinic} from './org.healthchain';
import {ContactPoint,Identifier,Contact,Address} from './org.fhir';
// export namespace org.healthchain.clinics{
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
         return 'org.healthchain.clinics.BaseEvent';
      }
   }
   export interface CreateEventInterface  extends BaseEventInterface {
   }
   
   export  class CreateEvent  extends BaseEvent implements CreateEventInterface {
      constructor(input : CreateEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.clinics.CreateEvent';
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
         return 'org.healthchain.clinics.UpdateEvent';
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
      name: string;
      status?: OrganizationStatus;
      telecom?: ContactPoint[];
      identifier?: Identifier[];
      contact?: Contact[];
      address?: Address[];
      endpoint?: string;
      partOf?: string;
      vendor?: string;
   }
   
   export  class Register  extends Transaction implements RegisterInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Clinic"}]
         };
      };
      id: string;
      name: string;
      status: OrganizationStatus = OrganizationStatus.active;
      telecom?: ContactPoint[];
      identifier?: Identifier[];
      contact?: Contact[];
      address?: Address[];
      endpoint?: string;
      partOf?: string;
      vendor?: string;
      constructor(input : RegisterInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.name = input.name;
         if (input.status) {
            this.status = input.status;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         if (input.contact) {
            this.contact = input.contact;
         }
         if (input.address) {
            this.address = input.address;
         }
         if (input.endpoint) {
            this.endpoint = input.endpoint;
         }
         if (input.partOf) {
            this.partOf = input.partOf;
         }
         if (input.vendor) {
            this.vendor = input.vendor;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.clinics.Register';
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
      name: string;
      status?: OrganizationStatus;
      telecom?: ContactPoint[];
      identifier?: Identifier[];
      contact?: Contact[];
      address?: Address[];
      endpoint?: string;
      partOf?: string;
      vendor?: string;
   }
   
   export  class RegisterJson  extends Transaction implements RegisterJsonInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      id: string;
      name: string;
      status: OrganizationStatus = OrganizationStatus.active;
      telecom?: ContactPoint[];
      identifier?: Identifier[];
      contact?: Contact[];
      address?: Address[];
      endpoint?: string;
      partOf?: string;
      vendor?: string;
      constructor(input : RegisterJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.name = input.name;
         if (input.status) {
            this.status = input.status;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         if (input.contact) {
            this.contact = input.contact;
         }
         if (input.address) {
            this.address = input.address;
         }
         if (input.endpoint) {
            this.endpoint = input.endpoint;
         }
         if (input.partOf) {
            this.partOf = input.partOf;
         }
         if (input.vendor) {
            this.vendor = input.vendor;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.clinics.RegisterJson';
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
      clinic: string;
      name?: string;
      status?: OrganizationStatus;
      telecom?: ContactPoint[];
      contact?: Contact[];
      address?: Address[];
      endpoint?: string;
      partOf?: string;
   }
   
   export  class Update  extends Transaction implements UpdateInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Clinic"}]
         };
      };
      clinic: string;
      name?: string;
      status?: OrganizationStatus;
      telecom?: ContactPoint[];
      contact?: Contact[];
      address?: Address[];
      endpoint?: string;
      partOf?: string;
      constructor(input : UpdateInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinic = input.clinic;
         if (input.name) {
            this.name = input.name;
         }
         if (input.status) {
            this.status = input.status;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.contact) {
            this.contact = input.contact;
         }
         if (input.address) {
            this.address = input.address;
         }
         if (input.endpoint) {
            this.endpoint = input.endpoint;
         }
         if (input.partOf) {
            this.partOf = input.partOf;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.clinics.Update';
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
      clinic: string;
      name?: string;
      status?: OrganizationStatus;
      telecom?: ContactPoint[];
      contact?: Contact[];
      address?: Address[];
      endpoint?: string;
      partOf?: string;
   }
   
   export  class UpdateJson  extends Transaction implements UpdateJsonInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      clinic: string;
      name?: string;
      status?: OrganizationStatus;
      telecom?: ContactPoint[];
      contact?: Contact[];
      address?: Address[];
      endpoint?: string;
      partOf?: string;
      constructor(input : UpdateJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinic = input.clinic;
         if (input.name) {
            this.name = input.name;
         }
         if (input.status) {
            this.status = input.status;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.contact) {
            this.contact = input.contact;
         }
         if (input.address) {
            this.address = input.address;
         }
         if (input.endpoint) {
            this.endpoint = input.endpoint;
         }
         if (input.partOf) {
            this.partOf = input.partOf;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.clinics.UpdateJson';
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
      clinic: string;
      identifier: Identifier[];
   }
   
   export  class AddIdentifiers  extends Transaction implements AddIdentifiersInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Clinic"}]
         };
      };
      clinic: string;
      identifier: Identifier[];
      constructor(input : AddIdentifiersInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinic = input.clinic;
         this.identifier = input.identifier;
      }
      getResourceType() : string {
         return 'org.healthchain.clinics.AddIdentifiers';
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
      clinic: string;
      identifier: Identifier[];
   }
   
   export  class AddIdentifiersJson  extends Transaction implements AddIdentifiersJsonInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      clinic: string;
      identifier: Identifier[];
      constructor(input : AddIdentifiersJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinic = input.clinic;
         this.identifier = input.identifier;
      }
      getResourceType() : string {
         return 'org.healthchain.clinics.AddIdentifiersJson';
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
      status?: OrganizationStatus;
      endpoint?: string;
      partOf?: string;
      vendor?: string;
   }
   
   export  class Query  extends Transaction implements QueryInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":true,"type":"Identifier","name":"Clinic"}]
         };
      };
      name?: string;
      status?: OrganizationStatus;
      endpoint?: string;
      partOf?: string;
      vendor?: string;
      constructor(input : QueryInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.name) {
            this.name = input.name;
         }
         if (input.status) {
            this.status = input.status;
         }
         if (input.endpoint) {
            this.endpoint = input.endpoint;
         }
         if (input.partOf) {
            this.partOf = input.partOf;
         }
         if (input.vendor) {
            this.vendor = input.vendor;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.clinics.Query';
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
      status?: OrganizationStatus;
      endpoint?: string;
      partOf?: string;
      vendor?: string;
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
      status?: OrganizationStatus;
      endpoint?: string;
      partOf?: string;
      vendor?: string;
      resolve?: string[];
      constructor(input : QueryJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.name) {
            this.name = input.name;
         }
         if (input.status) {
            this.status = input.status;
         }
         if (input.endpoint) {
            this.endpoint = input.endpoint;
         }
         if (input.partOf) {
            this.partOf = input.partOf;
         }
         if (input.vendor) {
            this.vendor = input.vendor;
         }
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.clinics.QueryJson';
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
      clinic: string;
   }
   
   export  class Get  extends Transaction implements GetInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"Clinic"}]
         };
      };
      clinic: string;
      constructor(input : GetInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinic = input.clinic;
      }
      getResourceType() : string {
         return 'org.healthchain.clinics.Get';
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
      clinic: string;
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
      clinic: string;
      resolve?: string[];
      constructor(input : GetJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinic = input.clinic;
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.clinics.GetJson';
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
            returns: [{"array":false,"type":"Identifier","name":"Clinic"}]
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
         return 'org.healthchain.clinics.Fetch';
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
         return 'org.healthchain.clinics.FetchJson';
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
