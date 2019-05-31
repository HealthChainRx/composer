import {Asset,AssetInterface,Participant,ParticipantInterface,Transaction,TransactionInterface,Event,EventInterface} from './org.hyperledger.composer.system';
import {Identifier} from './org.fhir';
import {Practitioner} from './org.healthchain';
// export namespace healthchain.channel.prescription{
   export interface SeedEventInterface  extends EventInterface {
      participants?: string[];
      assets?: string[];
   }
   
   export abstract  class SeedEvent  extends Event implements SeedEventInterface {
      participants?: string[];
      assets?: string[];
      constructor(input : SeedEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.participants) {
            this.participants = input.participants;
         }
         if (input.assets) {
            this.assets = input.assets;
         }
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.SeedEvent';
      }
   }
   export interface UpdateEventInterface  extends EventInterface {
      id: string;
   }
   
   export abstract  class UpdateEvent  extends Event implements UpdateEventInterface {
      id: string;
      constructor(input : UpdateEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.UpdateEvent';
      }
   }
   export interface RegisterEventInterface  extends EventInterface {
      id: string;
   }
   
   export abstract  class RegisterEvent  extends Event implements RegisterEventInterface {
      id: string;
      constructor(input : RegisterEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.RegisterEvent';
      }
   }
   export interface RelationshipEventInterface  extends EventInterface {
      id: string;
   }
   
   export abstract  class RelationshipEvent  extends Event implements RelationshipEventInterface {
      id: string;
      constructor(input : RelationshipEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.RelationshipEvent';
      }
   }
   export interface AddRelationshipInterface  extends EventInterface {
      id: string;
      type: string;
   }
   
   export  class AddRelationship  extends Event implements AddRelationshipInterface {
      id: string;
      type: string;
      constructor(input : AddRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.type = input.type;
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.AddRelationship';
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
   export interface ClinicRegisteredInterface  extends RegisterEventInterface {
   }
   
   export  class ClinicRegistered  extends RegisterEvent implements ClinicRegisteredInterface {
      constructor(input : ClinicRegisteredInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.ClinicRegistered';
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
   export interface ClinicLocationRegisteredInterface  extends RegisterEventInterface {
   }
   
   export  class ClinicLocationRegistered  extends RegisterEvent implements ClinicLocationRegisteredInterface {
      constructor(input : ClinicLocationRegisteredInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.ClinicLocationRegistered';
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
   export interface PharmacyLocationRegisteredInterface  extends RegisterEventInterface {
   }
   
   export  class PharmacyLocationRegistered  extends RegisterEvent implements PharmacyLocationRegisteredInterface {
      constructor(input : PharmacyLocationRegisteredInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.PharmacyLocationRegistered';
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
   export interface ClinicAdminRegisteredInterface  extends RegisterEventInterface {
      clinicLocationId?: string;
   }
   
   export  class ClinicAdminRegistered  extends RegisterEvent implements ClinicAdminRegisteredInterface {
      clinicLocationId?: string;
      constructor(input : ClinicAdminRegisteredInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.clinicLocationId) {
            this.clinicLocationId = input.clinicLocationId;
         }
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.ClinicAdminRegistered';
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
   export interface PrescriberRegisteredInterface  extends RegisterEventInterface {
   }
   
   export  class PrescriberRegistered  extends RegisterEvent implements PrescriberRegisteredInterface {
      constructor(input : PrescriberRegisteredInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.PrescriberRegistered';
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
   export interface DispenserRegisteredInterface  extends RegisterEventInterface {
   }
   
   export  class DispenserRegistered  extends RegisterEvent implements DispenserRegisteredInterface {
      constructor(input : DispenserRegisteredInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.DispenserRegistered';
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
   export interface PatientRegisteredInterface  extends RegisterEventInterface {
   }
   
   export  class PatientRegistered  extends RegisterEvent implements PatientRegisteredInterface {
      constructor(input : PatientRegisteredInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.PatientRegistered';
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
   export interface PharmacyLocationUpdatedInterface  extends UpdateEventInterface {
   }
   
   export  class PharmacyLocationUpdated  extends UpdateEvent implements PharmacyLocationUpdatedInterface {
      constructor(input : PharmacyLocationUpdatedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.PharmacyLocationUpdated';
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
   export interface PatientUpdatedInterface  extends UpdateEventInterface {
   }
   
   export  class PatientUpdated  extends UpdateEvent implements PatientUpdatedInterface {
      constructor(input : PatientUpdatedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.PatientUpdated';
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
   export interface PrescriberUpdatedInterface  extends UpdateEventInterface {
   }
   
   export  class PrescriberUpdated  extends UpdateEvent implements PrescriberUpdatedInterface {
      constructor(input : PrescriberUpdatedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.PrescriberUpdated';
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
   export interface ClinicAdminUpdatedInterface  extends UpdateEventInterface {
   }
   
   export  class ClinicAdminUpdated  extends UpdateEvent implements ClinicAdminUpdatedInterface {
      constructor(input : ClinicAdminUpdatedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.ClinicAdminUpdated';
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
   export interface DispenserUpdatedInterface  extends UpdateEventInterface {
   }
   
   export  class DispenserUpdated  extends UpdateEvent implements DispenserUpdatedInterface {
      constructor(input : DispenserUpdatedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.DispenserUpdated';
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
   export interface SigCreatedInterface  extends RegisterEventInterface {
   }
   
   export  class SigCreated  extends RegisterEvent implements SigCreatedInterface {
      constructor(input : SigCreatedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.SigCreated';
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
   export interface PrescriberUpdatedSigAddedInterface  extends UpdateEventInterface {
   }
   
   export  class PrescriberUpdatedSigAdded  extends UpdateEvent implements PrescriberUpdatedSigAddedInterface {
      constructor(input : PrescriberUpdatedSigAddedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.PrescriberUpdatedSigAdded';
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
   export interface PrescriberUpdatedSigRemovedInterface  extends UpdateEventInterface {
   }
   
   export  class PrescriberUpdatedSigRemoved  extends UpdateEvent implements PrescriberUpdatedSigRemovedInterface {
      constructor(input : PrescriberUpdatedSigRemovedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.PrescriberUpdatedSigRemoved';
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
   export interface ClinicAdminUpdatedSigAddedInterface  extends UpdateEventInterface {
   }
   
   export  class ClinicAdminUpdatedSigAdded  extends UpdateEvent implements ClinicAdminUpdatedSigAddedInterface {
      constructor(input : ClinicAdminUpdatedSigAddedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.ClinicAdminUpdatedSigAdded';
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
   export interface ClinicAdminUpdatedSigRemovedInterface  extends UpdateEventInterface {
   }
   
   export  class ClinicAdminUpdatedSigRemoved  extends UpdateEvent implements ClinicAdminUpdatedSigRemovedInterface {
      constructor(input : ClinicAdminUpdatedSigRemovedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.ClinicAdminUpdatedSigRemoved';
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
   export interface VendorRegisteredInterface  extends RegisterEventInterface {
   }
   
   export  class VendorRegistered  extends RegisterEvent implements VendorRegisteredInterface {
      constructor(input : VendorRegisteredInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.VendorRegistered';
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
   export interface VendorAdminRegisteredInterface  extends RegisterEventInterface {
   }
   
   export  class VendorAdminRegistered  extends RegisterEvent implements VendorAdminRegisteredInterface {
      constructor(input : VendorAdminRegisteredInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.VendorAdminRegistered';
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
   export interface VendorAdminUpdatedInterface  extends UpdateEventInterface {
   }
   
   export  class VendorAdminUpdated  extends UpdateEvent implements VendorAdminUpdatedInterface {
      constructor(input : VendorAdminUpdatedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.VendorAdminUpdated';
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
   export interface ApplicationRegisteredInterface  extends RegisterEventInterface {
   }
   
   export  class ApplicationRegistered  extends RegisterEvent implements ApplicationRegisteredInterface {
      constructor(input : ApplicationRegisteredInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.ApplicationRegistered';
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
   export interface VendorAdminApplicationRelationshipInterface  extends RelationshipEventInterface {
   }
   
   export  class VendorAdminApplicationRelationship  extends RelationshipEvent implements VendorAdminApplicationRelationshipInterface {
      constructor(input : VendorAdminApplicationRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.VendorAdminApplicationRelationship';
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
   export interface VendorAdminVendorRelationshipInterface  extends RelationshipEventInterface {
   }
   
   export  class VendorAdminVendorRelationship  extends RelationshipEvent implements VendorAdminVendorRelationshipInterface {
      constructor(input : VendorAdminVendorRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.VendorAdminVendorRelationship';
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
   export interface PatientClinicRelationshipInterface  extends RelationshipEventInterface {
   }
   
   export  class PatientClinicRelationship  extends RelationshipEvent implements PatientClinicRelationshipInterface {
      constructor(input : PatientClinicRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.PatientClinicRelationship';
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
   export interface PatientPharmacyLocationRelationshipInterface  extends RelationshipEventInterface {
   }
   
   export  class PatientPharmacyLocationRelationship  extends RelationshipEvent implements PatientPharmacyLocationRelationshipInterface {
      constructor(input : PatientPharmacyLocationRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.PatientPharmacyLocationRelationship';
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
   export interface PatientPrescriberRelationshipInterface  extends RelationshipEventInterface {
   }
   
   export  class PatientPrescriberRelationship  extends RelationshipEvent implements PatientPrescriberRelationshipInterface {
      constructor(input : PatientPrescriberRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.PatientPrescriberRelationship';
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
   export interface PatientDispenserRelationshipInterface  extends RelationshipEventInterface {
   }
   
   export  class PatientDispenserRelationship  extends RelationshipEvent implements PatientDispenserRelationshipInterface {
      constructor(input : PatientDispenserRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.PatientDispenserRelationship';
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
   export interface PrescriberClinicRelationshipInterface  extends RelationshipEventInterface {
   }
   
   export  class PrescriberClinicRelationship  extends RelationshipEvent implements PrescriberClinicRelationshipInterface {
      constructor(input : PrescriberClinicRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.PrescriberClinicRelationship';
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
   export interface ClinicAdminClinicRelationshipInterface  extends RelationshipEventInterface {
   }
   
   export  class ClinicAdminClinicRelationship  extends RelationshipEvent implements ClinicAdminClinicRelationshipInterface {
      constructor(input : ClinicAdminClinicRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.ClinicAdminClinicRelationship';
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
   export interface DispenserPharmacyLocationRelationshipInterface  extends RelationshipEventInterface {
   }
   
   export  class DispenserPharmacyLocationRelationship  extends RelationshipEvent implements DispenserPharmacyLocationRelationshipInterface {
      constructor(input : DispenserPharmacyLocationRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.DispenserPharmacyLocationRelationship';
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
   export interface MedicationRequestAddedInterface  extends RegisterEventInterface {
      pharmacyLocationId?: string;
      clinicLocationId: string;
   }
   
   export  class MedicationRequestAdded  extends RegisterEvent implements MedicationRequestAddedInterface {
      pharmacyLocationId?: string;
      clinicLocationId: string;
      constructor(input : MedicationRequestAddedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.pharmacyLocationId) {
            this.pharmacyLocationId = input.pharmacyLocationId;
         }
         this.clinicLocationId = input.clinicLocationId;
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.MedicationRequestAdded';
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
   export interface MedicationRequestRenewedInterface  extends RegisterEventInterface {
      pharmacyLocationId: string;
      clinicLocationId: string;
   }
   
   export  class MedicationRequestRenewed  extends RegisterEvent implements MedicationRequestRenewedInterface {
      pharmacyLocationId: string;
      clinicLocationId: string;
      constructor(input : MedicationRequestRenewedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.pharmacyLocationId = input.pharmacyLocationId;
         this.clinicLocationId = input.clinicLocationId;
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.MedicationRequestRenewed';
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
   export interface MedicationRequestApprovedInterface  extends UpdateEventInterface {
      pharmacyLocationId?: string;
      clinicLocationId: string;
   }
   
   export  class MedicationRequestApproved  extends UpdateEvent implements MedicationRequestApprovedInterface {
      pharmacyLocationId?: string;
      clinicLocationId: string;
      constructor(input : MedicationRequestApprovedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.pharmacyLocationId) {
            this.pharmacyLocationId = input.pharmacyLocationId;
         }
         this.clinicLocationId = input.clinicLocationId;
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.MedicationRequestApproved';
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
   export interface MedicationRequestStoppedInterface  extends UpdateEventInterface {
      pharmacyLocationId?: string;
      clinicLocationId: string;
   }
   
   export  class MedicationRequestStopped  extends UpdateEvent implements MedicationRequestStoppedInterface {
      pharmacyLocationId?: string;
      clinicLocationId: string;
      constructor(input : MedicationRequestStoppedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.pharmacyLocationId) {
            this.pharmacyLocationId = input.pharmacyLocationId;
         }
         this.clinicLocationId = input.clinicLocationId;
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.MedicationRequestStopped';
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
   export interface MedicationRequestCompletedInterface  extends UpdateEventInterface {
      pharmacyLocationId?: string;
      clinicLocationId: string;
   }
   
   export  class MedicationRequestCompleted  extends UpdateEvent implements MedicationRequestCompletedInterface {
      pharmacyLocationId?: string;
      clinicLocationId: string;
      constructor(input : MedicationRequestCompletedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.pharmacyLocationId) {
            this.pharmacyLocationId = input.pharmacyLocationId;
         }
         this.clinicLocationId = input.clinicLocationId;
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.MedicationRequestCompleted';
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
   export interface MedicationRequestCancelledInterface  extends UpdateEventInterface {
      pharmacyLocationId?: string;
      clinicLocationId: string;
   }
   
   export  class MedicationRequestCancelled  extends UpdateEvent implements MedicationRequestCancelledInterface {
      pharmacyLocationId?: string;
      clinicLocationId: string;
      constructor(input : MedicationRequestCancelledInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.pharmacyLocationId) {
            this.pharmacyLocationId = input.pharmacyLocationId;
         }
         this.clinicLocationId = input.clinicLocationId;
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.MedicationRequestCancelled';
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
   export interface MedicationRequestAcknowledgedInterface  extends UpdateEventInterface {
      type: string;
      pharmacyLocationId?: string;
      clinicLocationId?: string;
   }
   
   export  class MedicationRequestAcknowledged  extends UpdateEvent implements MedicationRequestAcknowledgedInterface {
      type: string;
      pharmacyLocationId?: string;
      clinicLocationId?: string;
      constructor(input : MedicationRequestAcknowledgedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.type = input.type;
         if (input.pharmacyLocationId) {
            this.pharmacyLocationId = input.pharmacyLocationId;
         }
         if (input.clinicLocationId) {
            this.clinicLocationId = input.clinicLocationId;
         }
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.MedicationRequestAcknowledged';
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
   export interface MedicationDispenseAddedInterface  extends RegisterEventInterface {
   }
   
   export  class MedicationDispenseAdded  extends RegisterEvent implements MedicationDispenseAddedInterface {
      constructor(input : MedicationDispenseAddedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.MedicationDispenseAdded';
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
   export interface MedicationRequestImportedInterface  extends RegisterEventInterface {
   }
   
   export  class MedicationRequestImported  extends RegisterEvent implements MedicationRequestImportedInterface {
      constructor(input : MedicationRequestImportedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.MedicationRequestImported';
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
   export interface MedicationDispenseImportedInterface  extends RegisterEventInterface {
   }
   
   export  class MedicationDispenseImported  extends RegisterEvent implements MedicationDispenseImportedInterface {
      constructor(input : MedicationDispenseImportedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.MedicationDispenseImported';
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
   export interface MedicationRequestNoteAddedInterface  extends UpdateEventInterface {
   }
   
   export  class MedicationRequestNoteAdded  extends UpdateEvent implements MedicationRequestNoteAddedInterface {
      constructor(input : MedicationRequestNoteAddedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.MedicationRequestNoteAdded';
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
   export interface MedicationDispenseNoteAddedInterface  extends UpdateEventInterface {
   }
   
   export  class MedicationDispenseNoteAdded  extends UpdateEvent implements MedicationDispenseNoteAddedInterface {
      constructor(input : MedicationDispenseNoteAddedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.MedicationDispenseNoteAdded';
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
   export interface MedicationRequestAssignedPharmacyLocationInterface  extends RelationshipEventInterface {
      pharmacyLocationId: string;
   }
   
   export  class MedicationRequestAssignedPharmacyLocation  extends RelationshipEvent implements MedicationRequestAssignedPharmacyLocationInterface {
      pharmacyLocationId: string;
      constructor(input : MedicationRequestAssignedPharmacyLocationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.pharmacyLocationId = input.pharmacyLocationId;
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.MedicationRequestAssignedPharmacyLocation';
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
   export interface HealthChainTestSeededInterface  extends SeedEventInterface {
   }
   
   export  class HealthChainTestSeeded  extends SeedEvent implements HealthChainTestSeededInterface {
      constructor(input : HealthChainTestSeededInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.HealthChainTestSeeded';
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
   export interface HealthChainTestCleanedInterface  extends SeedEventInterface {
   }
   
   export  class HealthChainTestCleaned  extends SeedEvent implements HealthChainTestCleanedInterface {
      constructor(input : HealthChainTestCleanedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.HealthChainTestCleaned';
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
   export interface PatientReadInterface  extends EventInterface {
      practitioner: string;
      patientId?: string;
      identifier?: Identifier;
   }
   
   export  class PatientRead  extends Event implements PatientReadInterface {
      practitioner: string;
      patientId?: string;
      identifier?: Identifier;
      constructor(input : PatientReadInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.practitioner = input.practitioner;
         if (input.patientId) {
            this.patientId = input.patientId;
         }
         if (input.identifier) {
            this.identifier = input.identifier;
         }
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.PatientRead';
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
   export interface TestInterface  extends EventInterface {
      socketId?: string;
      message?: string;
   }
   
   export  class Test  extends Event implements TestInterface {
      socketId?: string;
      message?: string;
      constructor(input : TestInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.socketId) {
            this.socketId = input.socketId;
         }
         if (input.message) {
            this.message = input.message;
         }
      }
      getResourceType() : string {
         return 'healthchain.channel.prescription.Test';
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
