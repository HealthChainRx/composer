import {Asset,AssetInterface,Participant,ParticipantInterface,Transaction,TransactionInterface,Event,EventInterface} from './org.hyperledger.composer.system';
import {OrganizationStatus,PharmacyLocation} from './org.healthchain';
import {Identifier,ContactPoint,Country} from './org.fhir';
// export namespace org.healthchain.pharmacylocations{
   export interface BaseEventInterface  extends EventInterface {
      id: string;
      pharmacyLocationId?: string;
   }
   
   export abstract  class BaseEvent  extends Event implements BaseEventInterface {
      id: string;
      pharmacyLocationId?: string;
      constructor(input : BaseEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         if (input.pharmacyLocationId) {
            this.pharmacyLocationId = input.pharmacyLocationId;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.pharmacylocations.BaseEvent';
      }
   }
   export interface CreateEventInterface  extends BaseEventInterface {
   }
   
   export  class CreateEvent  extends BaseEvent implements CreateEventInterface {
      constructor(input : CreateEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.pharmacylocations.CreateEvent';
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
         return 'org.healthchain.pharmacylocations.UpdateEvent';
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
      identifier?: Identifier[];
      telecom?: ContactPoint[];
      line?: string[];
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      coordinates?: string;
   }
   
   export  class Register  extends Transaction implements RegisterInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"PharmacyLocation"}]
         };
      };
      id: string;
      name: string;
      status: OrganizationStatus = OrganizationStatus.active;
      identifier?: Identifier[];
      telecom?: ContactPoint[];
      line?: string[];
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      coordinates?: string;
      constructor(input : RegisterInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.name = input.name;
         if (input.status) {
            this.status = input.status;
         }
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.line) {
            this.line = input.line;
         }
         if (input.city) {
            this.city = input.city;
         }
         if (input.district) {
            this.district = input.district;
         }
         if (input.state) {
            this.state = input.state;
         }
         if (input.postalCode) {
            this.postalCode = input.postalCode;
         }
         if (input.country) {
            this.country = input.country;
         }
         if (input.coordinates) {
            this.coordinates = input.coordinates;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.pharmacylocations.Register';
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
      identifier?: Identifier[];
      telecom?: ContactPoint[];
      line?: string[];
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      coordinates?: string;
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
      identifier?: Identifier[];
      telecom?: ContactPoint[];
      line?: string[];
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      coordinates?: string;
      constructor(input : RegisterJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.name = input.name;
         if (input.status) {
            this.status = input.status;
         }
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.line) {
            this.line = input.line;
         }
         if (input.city) {
            this.city = input.city;
         }
         if (input.district) {
            this.district = input.district;
         }
         if (input.state) {
            this.state = input.state;
         }
         if (input.postalCode) {
            this.postalCode = input.postalCode;
         }
         if (input.country) {
            this.country = input.country;
         }
         if (input.coordinates) {
            this.coordinates = input.coordinates;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.pharmacylocations.RegisterJson';
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
      pharmacyLocation: string;
      name?: string;
      status?: OrganizationStatus;
      telecom?: ContactPoint[];
      line?: string[];
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      coordinates?: string;
   }
   
   export  class Update  extends Transaction implements UpdateInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"PharmacyLocation"}]
         };
      };
      pharmacyLocation: string;
      name?: string;
      status?: OrganizationStatus;
      telecom?: ContactPoint[];
      line?: string[];
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      coordinates?: string;
      constructor(input : UpdateInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.pharmacyLocation = input.pharmacyLocation;
         if (input.name) {
            this.name = input.name;
         }
         if (input.status) {
            this.status = input.status;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.line) {
            this.line = input.line;
         }
         if (input.city) {
            this.city = input.city;
         }
         if (input.district) {
            this.district = input.district;
         }
         if (input.state) {
            this.state = input.state;
         }
         if (input.postalCode) {
            this.postalCode = input.postalCode;
         }
         if (input.country) {
            this.country = input.country;
         }
         if (input.coordinates) {
            this.coordinates = input.coordinates;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.pharmacylocations.Update';
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
      pharmacyLocation: string;
      name?: string;
      status?: OrganizationStatus;
      telecom?: ContactPoint[];
      line?: string[];
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      coordinates?: string;
   }
   
   export  class UpdateJson  extends Transaction implements UpdateJsonInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      pharmacyLocation: string;
      name?: string;
      status?: OrganizationStatus;
      telecom?: ContactPoint[];
      line?: string[];
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      coordinates?: string;
      constructor(input : UpdateJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.pharmacyLocation = input.pharmacyLocation;
         if (input.name) {
            this.name = input.name;
         }
         if (input.status) {
            this.status = input.status;
         }
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.line) {
            this.line = input.line;
         }
         if (input.city) {
            this.city = input.city;
         }
         if (input.district) {
            this.district = input.district;
         }
         if (input.state) {
            this.state = input.state;
         }
         if (input.postalCode) {
            this.postalCode = input.postalCode;
         }
         if (input.country) {
            this.country = input.country;
         }
         if (input.coordinates) {
            this.coordinates = input.coordinates;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.pharmacylocations.UpdateJson';
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
      pharmacyLocation: string;
      identifier: Identifier[];
   }
   
   export  class AddIdentifiers  extends Transaction implements AddIdentifiersInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"PharmacyLocation"}]
         };
      };
      pharmacyLocation: string;
      identifier: Identifier[];
      constructor(input : AddIdentifiersInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.pharmacyLocation = input.pharmacyLocation;
         this.identifier = input.identifier;
      }
      getResourceType() : string {
         return 'org.healthchain.pharmacylocations.AddIdentifiers';
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
      pharmacyLocation: string;
      identifier: Identifier[];
   }
   
   export  class AddIdentifiersJson  extends Transaction implements AddIdentifiersJsonInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            json: [true]
         };
      };
      pharmacyLocation: string;
      identifier: Identifier[];
      constructor(input : AddIdentifiersJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.pharmacyLocation = input.pharmacyLocation;
         this.identifier = input.identifier;
      }
      getResourceType() : string {
         return 'org.healthchain.pharmacylocations.AddIdentifiersJson';
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
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
   }
   
   export  class Query  extends Transaction implements QueryInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":true,"type":"Identifier","name":"PharmacyLocation"}]
         };
      };
      name?: string;
      status?: OrganizationStatus;
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      constructor(input : QueryInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.name) {
            this.name = input.name;
         }
         if (input.status) {
            this.status = input.status;
         }
         if (input.city) {
            this.city = input.city;
         }
         if (input.district) {
            this.district = input.district;
         }
         if (input.state) {
            this.state = input.state;
         }
         if (input.postalCode) {
            this.postalCode = input.postalCode;
         }
         if (input.country) {
            this.country = input.country;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.pharmacylocations.Query';
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
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
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
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      resolve?: string[];
      constructor(input : QueryJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.name) {
            this.name = input.name;
         }
         if (input.status) {
            this.status = input.status;
         }
         if (input.city) {
            this.city = input.city;
         }
         if (input.district) {
            this.district = input.district;
         }
         if (input.state) {
            this.state = input.state;
         }
         if (input.postalCode) {
            this.postalCode = input.postalCode;
         }
         if (input.country) {
            this.country = input.country;
         }
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.pharmacylocations.QueryJson';
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
      pharmacyLocation: string;
   }
   
   export  class Get  extends Transaction implements GetInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"PharmacyLocation"}]
         };
      };
      pharmacyLocation: string;
      constructor(input : GetInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.pharmacyLocation = input.pharmacyLocation;
      }
      getResourceType() : string {
         return 'org.healthchain.pharmacylocations.Get';
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
      pharmacyLocation: string;
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
      pharmacyLocation: string;
      resolve?: string[];
      constructor(input : GetJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.pharmacyLocation = input.pharmacyLocation;
         if (input.resolve) {
            this.resolve = input.resolve;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.pharmacylocations.GetJson';
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
            returns: [{"array":false,"type":"Identifier","name":"PharmacyLocation"}]
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
         return 'org.healthchain.pharmacylocations.Fetch';
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
         return 'org.healthchain.pharmacylocations.FetchJson';
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
