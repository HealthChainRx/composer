import {Asset,AssetInterface,Participant,ParticipantInterface,Transaction,TransactionInterface,Event,EventInterface} from './org.hyperledger.composer.system';
import {ApplicationStatus,Annotation,Vendor,ClinicLocation,PharmacyLocation,Application} from './org.healthchain';
import {Identifier} from './org.fhir';
// export namespace org.healthchain.applications{
   export enum ApplicationType {
      ClinicLocationApplication = 'ClinicLocationApplication',
      PharmacyLocationApplication = 'PharmacyLocationApplication',
      VendorAdminApplication = 'VendorAdminApplication',
      AdminApplication = 'AdminApplication',
   }
   export interface BaseEventInterface  extends EventInterface {
      id: string;
      applicationType: ApplicationType;
      vendorId?: string;
      clinicLocationId?: string;
      pharmacyLocationId?: string;
   }
   
   export abstract  class BaseEvent  extends Event implements BaseEventInterface {
      id: string;
      applicationType: ApplicationType;
      vendorId?: string;
      clinicLocationId?: string;
      pharmacyLocationId?: string;
      constructor(input : BaseEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.applicationType = input.applicationType;
         if (input.vendorId) {
            this.vendorId = input.vendorId;
         }
         if (input.clinicLocationId) {
            this.clinicLocationId = input.clinicLocationId;
         }
         if (input.pharmacyLocationId) {
            this.pharmacyLocationId = input.pharmacyLocationId;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.applications.BaseEvent';
      }
   }
   export interface CreateEventInterface  extends BaseEventInterface {
   }
   
   export  class CreateEvent  extends BaseEvent implements CreateEventInterface {
      constructor(input : CreateEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.applications.CreateEvent';
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
         return 'org.healthchain.applications.UpdateEvent';
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
      applicationType: ApplicationType;
      description?: string;
      status?: ApplicationStatus;
      identifier?: Identifier[];
      note?: Annotation[];
      owner?: string;
      clinicLocation?: string;
      pharmacyLocation?: string;
   }
   
   export  class Register  extends Transaction implements RegisterInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Application"}]
         };
      };
      id: string;
      name: string;
      applicationType: ApplicationType;
      description?: string;
      status: ApplicationStatus = ApplicationStatus.active;
      identifier?: Identifier[];
      note?: Annotation[];
      owner?: string;
      clinicLocation?: string;
      pharmacyLocation?: string;
      constructor(input : RegisterInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.name = input.name;
         this.applicationType = input.applicationType;
         if (input.description) {
            this.description = input.description;
         }
         if (input.status) {
            this.status = input.status;
         }
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         if (input.note) {
            this.note = input.note;
         }
         if (input.owner) {
            this.owner = input.owner;
         }
         if (input.clinicLocation) {
            this.clinicLocation = input.clinicLocation;
         }
         if (input.pharmacyLocation) {
            this.pharmacyLocation = input.pharmacyLocation;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.applications.Register';
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
      application: string;
      name?: string;
      description?: string;
      status?: ApplicationStatus;
   }
   
   export  class Update  extends Transaction implements UpdateInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Application"}]
         };
      };
      application: string;
      name?: string;
      description?: string;
      status?: ApplicationStatus;
      constructor(input : UpdateInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.application = input.application;
         if (input.name) {
            this.name = input.name;
         }
         if (input.description) {
            this.description = input.description;
         }
         if (input.status) {
            this.status = input.status;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.applications.Update';
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
      application: string;
      identifier: Identifier[];
   }
   
   export  class AddIdentifiers  extends Transaction implements AddIdentifiersInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Application"}]
         };
      };
      application: string;
      identifier: Identifier[];
      constructor(input : AddIdentifiersInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.application = input.application;
         this.identifier = input.identifier;
      }
      getResourceType() : string {
         return 'org.healthchain.applications.AddIdentifiers';
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
      applicationType?: ApplicationType;
      status?: ApplicationStatus;
      owner?: string;
   }
   
   export  class Query  extends Transaction implements QueryInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":true,"type":"Identifier","name":"Application"}]
         };
      };
      name?: string;
      applicationType?: ApplicationType;
      status?: ApplicationStatus;
      owner?: string;
      constructor(input : QueryInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.name) {
            this.name = input.name;
         }
         if (input.applicationType) {
            this.applicationType = input.applicationType;
         }
         if (input.status) {
            this.status = input.status;
         }
         if (input.owner) {
            this.owner = input.owner;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.applications.Query';
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
      applicationType?: ApplicationType;
      status?: ApplicationStatus;
      owner?: string;
      clinicLocation?: string;
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
      name?: string;
      applicationType?: ApplicationType;
      status?: ApplicationStatus;
      owner?: string;
      clinicLocation?: string;
      pharmacyLocation?: string;
      resolve?: string[];
      constructor(input : QueryJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.name) {
            this.name = input.name;
         }
         if (input.applicationType) {
            this.applicationType = input.applicationType;
         }
         if (input.status) {
            this.status = input.status;
         }
         if (input.owner) {
            this.owner = input.owner;
         }
         if (input.clinicLocation) {
            this.clinicLocation = input.clinicLocation;
         }
         if (input.pharmacyLocation) {
            this.pharmacyLocation = input.pharmacyLocation;
         }
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.applications.QueryJson';
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
      application: string;
   }
   
   export  class Get  extends Transaction implements GetInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"Application"}]
         };
      };
      application: string;
      constructor(input : GetInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.application = input.application;
      }
      getResourceType() : string {
         return 'org.healthchain.applications.Get';
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
      application: string;
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
      application: string;
      resolve?: string[];
      constructor(input : GetJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.application = input.application;
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.applications.GetJson';
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
      applicationType: ApplicationType;
      assigner: string;
      value: string;
   }
   
   export  class Fetch  extends Transaction implements FetchInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"Application"}]
         };
      };
      applicationType: ApplicationType;
      assigner: string;
      value: string;
      constructor(input : FetchInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.applicationType = input.applicationType;
         this.assigner = input.assigner;
         this.value = input.value;
      }
      getResourceType() : string {
         return 'org.healthchain.applications.Fetch';
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
      applicationType: ApplicationType;
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
      applicationType: ApplicationType;
      assigner: string;
      value: string;
      resolve?: string[];
      constructor(input : FetchJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.applicationType = input.applicationType;
         this.assigner = input.assigner;
         this.value = input.value;
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.applications.FetchJson';
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
