import {Asset,AssetInterface,Participant,ParticipantInterface,Transaction,TransactionInterface,Event,EventInterface} from './org.hyperledger.composer.system';
import {Identifier,ContactPoint,Contact,Address,Country,HumanName,Gender,CodeableConcept,Intent,Dosage,Substitution,Period,Quantity,Duration,DispenseSubstitution,Ratio} from './org.fhir';
// export namespace org.healthchain{
   export interface ActorInterface  extends ParticipantInterface {
   }
   
   export abstract  class Actor  extends Participant implements ActorInterface {
      constructor(input : ActorInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.Actor';
      }
   }
   export interface RegistrarInterface  extends ParticipantInterface {
      version?: number;
      registrarId: string;
   }
   
   export  class Registrar  extends Participant implements RegistrarInterface {
      version: number = 1;
      registrarId: string;
      constructor(input : RegistrarInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
         this.registrarId = input.registrarId;
      }
      getResourceType() : string {
         return 'org.healthchain.Registrar';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface OrganizationInterface  extends ParticipantInterface {
      id: string;
      status: OrganizationStatus;
      name: string;
      identifier: Identifier[];
      telecom?: ContactPoint[];
      contact?: Contact[];
      address?: Address[];
      partOf?: string;
      endpoint?: string;
   }
   
   export abstract  class Organization  extends Participant implements OrganizationInterface {
      id: string;
      status: OrganizationStatus;
      name: string;
      identifier: Identifier[];
      telecom?: ContactPoint[];
      contact?: Contact[];
      address?: Address[];
      partOf?: string;
      endpoint?: string;
      constructor(input : OrganizationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.status = input.status;
         this.name = input.name;
         this.identifier = input.identifier;
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.contact) {
            this.contact = input.contact;
         }
         if (input.address) {
            this.address = input.address;
         }
         if (input.partOf) {
            this.partOf = input.partOf;
         }
         if (input.endpoint) {
            this.endpoint = input.endpoint;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.Organization';
      }
   }
   export interface ClinicInterface  extends OrganizationInterface {
      version?: number;
      clinicLocations?: string[];
      vendor?: string;
      vendors?: VendorRelationship[];
   }
   
   export  class Clinic  extends Organization implements ClinicInterface {
      version: number = 3;
      clinicLocations?: string[];
      vendor?: string;
      vendors?: VendorRelationship[];
      constructor(input : ClinicInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
         if (input.clinicLocations) {
            this.clinicLocations = input.clinicLocations;
         }
         if (input.vendor) {
            this.vendor = input.vendor;
         }
         if (input.vendors) {
            this.vendors = input.vendors;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.Clinic';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface ClinicLocationInterface  extends ParticipantInterface {
      version?: number;
      id: string;
      status: OrganizationStatus;
      name: string;
      identifier: Identifier[];
      telecom?: ContactPoint[];
      line?: string[];
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      partOf: string;
   }
   
   export  class ClinicLocation  extends Participant implements ClinicLocationInterface {
      version: number = 2;
      id: string;
      status: OrganizationStatus;
      name: string;
      identifier: Identifier[];
      telecom?: ContactPoint[];
      line?: string[];
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      partOf: string;
      constructor(input : ClinicLocationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
         this.id = input.id;
         this.status = input.status;
         this.name = input.name;
         this.identifier = input.identifier;
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
         this.partOf = input.partOf;
      }
      getResourceType() : string {
         return 'org.healthchain.ClinicLocation';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface PractitionerInterface  extends ActorInterface {
      id: string;
   }
   
   export abstract  class Practitioner  extends Actor implements PractitionerInterface {
      id: string;
      constructor(input : PractitionerInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
      }
      getResourceType() : string {
         return 'org.healthchain.Practitioner';
      }
   }
   export interface ClinicAdminInterface  extends PractitionerInterface {
      version?: number;
      identifier: Identifier[];
      name: HumanName;
      telecom?: ContactPoint[];
      address?: Address[];
      gender?: Gender;
      birthDate?: Date;
      clinicLocations?: ClinicLocationRelationship[];
      favoriteSigs?: string[];
   }
   
   export  class ClinicAdmin  extends Practitioner implements ClinicAdminInterface {
      version: number = 1;
      identifier: Identifier[];
      name: HumanName;
      telecom?: ContactPoint[];
      address?: Address[];
      gender?: Gender;
      birthDate?: Date;
      clinicLocations?: ClinicLocationRelationship[];
      favoriteSigs?: string[];
      constructor(input : ClinicAdminInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
         this.identifier = input.identifier;
         this.name = input.name;
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.address) {
            this.address = input.address;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.birthDate) {
            this.birthDate = input.birthDate;
         }
         if (input.clinicLocations) {
            this.clinicLocations = input.clinicLocations;
         }
         if (input.favoriteSigs) {
            this.favoriteSigs = input.favoriteSigs;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.ClinicAdmin';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface PrescriberInterface  extends PractitionerInterface {
      version?: number;
      identifier: Identifier[];
      name: HumanName;
      telecom?: ContactPoint[];
      address?: Address[];
      gender?: Gender;
      birthDate?: Date;
      clinicLocations?: ClinicLocationRelationship[];
      favoriteSigs?: string[];
      approver?: boolean;
   }
   
   export  class Prescriber  extends Practitioner implements PrescriberInterface {
      version: number = 3;
      identifier: Identifier[];
      name: HumanName;
      telecom?: ContactPoint[];
      address?: Address[];
      gender?: Gender;
      birthDate?: Date;
      clinicLocations?: ClinicLocationRelationship[];
      favoriteSigs?: string[];
      approver?: boolean = true;
      constructor(input : PrescriberInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
         this.identifier = input.identifier;
         this.name = input.name;
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.address) {
            this.address = input.address;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.birthDate) {
            this.birthDate = input.birthDate;
         }
         if (input.clinicLocations) {
            this.clinicLocations = input.clinicLocations;
         }
         if (input.favoriteSigs) {
            this.favoriteSigs = input.favoriteSigs;
         }
         if (input.approver) {
            this.approver = input.approver;
         } else if (!setOptionalDefaults) {
            delete this.approver;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.Prescriber';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface DispensingPractitionerInterface  extends PractitionerInterface {
   }
   
   export abstract  class DispensingPractitioner  extends Practitioner implements DispensingPractitionerInterface {
      constructor(input : DispensingPractitionerInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.DispensingPractitioner';
      }
   }
   export interface DispenserInterface  extends DispensingPractitionerInterface {
      version?: number;
      identifier: Identifier[];
      name: HumanName;
      telecom?: ContactPoint[];
      address?: Address[];
      gender?: Gender;
      birthDate?: Date;
      pharmacyLocations?: PharmacyLocationRelationship[];
   }
   
   export  class Dispenser  extends DispensingPractitioner implements DispenserInterface {
      version: number = 2;
      identifier: Identifier[];
      name: HumanName;
      telecom?: ContactPoint[];
      address?: Address[];
      gender?: Gender;
      birthDate?: Date;
      pharmacyLocations?: PharmacyLocationRelationship[];
      constructor(input : DispenserInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
         this.identifier = input.identifier;
         this.name = input.name;
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.address) {
            this.address = input.address;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.birthDate) {
            this.birthDate = input.birthDate;
         }
         if (input.pharmacyLocations) {
            this.pharmacyLocations = input.pharmacyLocations;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.Dispenser';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface PharmacyLocationInterface  extends DispensingPractitionerInterface {
      version?: number;
      name: string;
      identifier: Identifier[];
      status: OrganizationStatus;
      telecom?: ContactPoint[];
      line?: string[];
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      coordinates?: string;
   }
   
   export  class PharmacyLocation  extends DispensingPractitioner implements PharmacyLocationInterface {
      version: number = 2;
      name: string;
      identifier: Identifier[];
      status: OrganizationStatus;
      telecom?: ContactPoint[];
      line?: string[];
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      coordinates?: string;
      constructor(input : PharmacyLocationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
         this.name = input.name;
         this.identifier = input.identifier;
         this.status = input.status;
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
         return 'org.healthchain.PharmacyLocation';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface PharmacyLocationStubInterface  {
      version?: number;
      id?: string;
      name?: string;
      identifier: Identifier[];
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
   
   export  class PharmacyLocationStub  implements PharmacyLocationStubInterface {
      version: number = 1;
      id?: string;
      name?: string;
      identifier: Identifier[];
      status?: OrganizationStatus;
      telecom?: ContactPoint[];
      line?: string[];
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      coordinates?: string;
      constructor(input : PharmacyLocationStubInterface, setOptionalDefaults : boolean = false) {
         if (input.version) {
            this.version = input.version;
         }
         if (input.id) {
            this.id = input.id;
         }
         if (input.name) {
            this.name = input.name;
         }
         this.identifier = input.identifier;
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
         return 'org.healthchain.PharmacyLocationStub';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface AcknowledgementInterface  {
      participant: string;
      pharmacyLocation?: string;
      clinicLocation?: string;
      type?: AcknowledgementType;
      time: Date;
   }
   
   export  class Acknowledgement  implements AcknowledgementInterface {
      participant: string;
      pharmacyLocation?: string;
      clinicLocation?: string;
      type: AcknowledgementType = AcknowledgementType.MedicationRequestAdded;
      time: Date;
      constructor(input : AcknowledgementInterface, setOptionalDefaults : boolean = false) {
         this.participant = input.participant;
         if (input.pharmacyLocation) {
            this.pharmacyLocation = input.pharmacyLocation;
         }
         if (input.clinicLocation) {
            this.clinicLocation = input.clinicLocation;
         }
         if (input.type) {
            this.type = input.type;
         }
         this.time = input.time;
      }
      getResourceType() : string {
         return 'org.healthchain.Acknowledgement';
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
   export enum AcknowledgementType {
      MedicationRequestAdded = 'MedicationRequestAdded',
      MedicationRequestCancelled = 'MedicationRequestCancelled',
   }
   export interface PatientInterface  extends ActorInterface {
      version?: number;
      id: string;
      identifier: Identifier[];
      name: HumanName;
      gender: Gender;
      telecom?: ContactPoint[];
      birthDate: Date;
      deceased?: boolean;
      deceasedDateTime?: Date;
      address?: Address[];
      prescribers?: PrescriberRelationship[];
      clinicLocations?: ClinicLocationRelationship[];
      dispensers?: DispenserRelationship[];
      pharmacyLocations?: PharmacyLocationRelationship[];
   }
   
   export  class Patient  extends Actor implements PatientInterface {
      version: number = 1;
      id: string;
      identifier: Identifier[];
      name: HumanName;
      gender: Gender;
      telecom?: ContactPoint[];
      birthDate: Date;
      deceased?: boolean = false;
      deceasedDateTime?: Date;
      address?: Address[];
      prescribers?: PrescriberRelationship[];
      clinicLocations?: ClinicLocationRelationship[];
      dispensers?: DispenserRelationship[];
      pharmacyLocations?: PharmacyLocationRelationship[];
      constructor(input : PatientInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
         this.id = input.id;
         this.identifier = input.identifier;
         this.name = input.name;
         this.gender = input.gender;
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         this.birthDate = input.birthDate;
         if (input.deceased) {
            this.deceased = input.deceased;
         } else if (!setOptionalDefaults) {
            delete this.deceased;
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
         return 'org.healthchain.Patient';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface VendorInterface  extends OrganizationInterface {
      version?: number;
      authoredOn?: Date;
   }
   
   export  class Vendor  extends Organization implements VendorInterface {
      version: number = 1;
      authoredOn?: Date;
      constructor(input : VendorInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
         if (input.authoredOn) {
            this.authoredOn = input.authoredOn;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.Vendor';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface VendorAdminInterface  extends ActorInterface {
      id: string;
      version?: number;
      identifier?: Identifier[];
      name: HumanName;
      telecom?: ContactPoint[];
      address?: Address[];
      gender?: Gender;
      birthDate?: Date;
      vendors?: VendorRelationship[];
      applications?: ApplicationRelationship[];
   }
   
   export  class VendorAdmin  extends Actor implements VendorAdminInterface {
      id: string;
      version: number = 1;
      identifier?: Identifier[];
      name: HumanName;
      telecom?: ContactPoint[];
      address?: Address[];
      gender?: Gender;
      birthDate?: Date;
      vendors?: VendorRelationship[];
      applications?: ApplicationRelationship[];
      constructor(input : VendorAdminInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         if (input.version) {
            this.version = input.version;
         }
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         this.name = input.name;
         if (input.telecom) {
            this.telecom = input.telecom;
         }
         if (input.address) {
            this.address = input.address;
         }
         if (input.gender) {
            this.gender = input.gender;
         }
         if (input.birthDate) {
            this.birthDate = input.birthDate;
         }
         if (input.vendors) {
            this.vendors = input.vendors;
         }
         if (input.applications) {
            this.applications = input.applications;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.VendorAdmin';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface ApplicationInterface  extends ParticipantInterface {
      id: string;
      status?: ApplicationStatus;
      name: string;
      description?: string;
      identifier: Identifier[];
      note?: Annotation[];
      owner?: string;
      recorder?: string;
      authoredOn: Date;
   }
   
   export abstract  class Application  extends Participant implements ApplicationInterface {
      id: string;
      status: ApplicationStatus = ApplicationStatus.active;
      name: string;
      description?: string;
      identifier: Identifier[];
      note?: Annotation[];
      owner?: string;
      recorder?: string;
      authoredOn: Date;
      constructor(input : ApplicationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         if (input.status) {
            this.status = input.status;
         }
         this.name = input.name;
         if (input.description) {
            this.description = input.description;
         }
         this.identifier = input.identifier;
         if (input.note) {
            this.note = input.note;
         }
         if (input.owner) {
            this.owner = input.owner;
         }
         if (input.recorder) {
            this.recorder = input.recorder;
         }
         this.authoredOn = input.authoredOn;
      }
      getResourceType() : string {
         return 'org.healthchain.Application';
      }
   }
   export interface ClinicLocationApplicationInterface  extends ApplicationInterface {
      version?: number;
      clinicLocation: string;
   }
   
   export  class ClinicLocationApplication  extends Application implements ClinicLocationApplicationInterface {
      version: number = 1;
      clinicLocation: string;
      constructor(input : ClinicLocationApplicationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
         this.clinicLocation = input.clinicLocation;
      }
      getResourceType() : string {
         return 'org.healthchain.ClinicLocationApplication';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface PharmacyLocationApplicationInterface  extends ApplicationInterface {
      version?: number;
      pharmacyLocation: string;
   }
   
   export  class PharmacyLocationApplication  extends Application implements PharmacyLocationApplicationInterface {
      version: number = 1;
      pharmacyLocation: string;
      constructor(input : PharmacyLocationApplicationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
         this.pharmacyLocation = input.pharmacyLocation;
      }
      getResourceType() : string {
         return 'org.healthchain.PharmacyLocationApplication';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface VendorAdminApplicationInterface  extends ApplicationInterface {
      version?: number;
   }
   
   export  class VendorAdminApplication  extends Application implements VendorAdminApplicationInterface {
      version: number = 1;
      constructor(input : VendorAdminApplicationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.VendorAdminApplication';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface AdminApplicationInterface  extends ApplicationInterface {
      version?: number;
   }
   
   export  class AdminApplication  extends Application implements AdminApplicationInterface {
      version: number = 1;
      constructor(input : AdminApplicationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.AdminApplication';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export enum ApplicationStatus {
      active = 'active',
      inactive = 'inactive',
   }
   export interface VendorTxRegisterInterface  extends TransactionInterface {
      vendor: Vendor;
   }
   
   export  class VendorTxRegister  extends Transaction implements VendorTxRegisterInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Vendor"}]
         };
      };
      vendor: Vendor;
      constructor(input : VendorTxRegisterInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.vendor = input.vendor;
      }
      getResourceType() : string {
         return 'org.healthchain.VendorTxRegister';
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
   export interface HealthChainAdminTxRegisterInterface  extends TransactionInterface {
      healthChainIdentifier: string;
      id?: string;
      name?: HumanName;
   }
   
   export  class HealthChainAdminTxRegister  extends Transaction implements HealthChainAdminTxRegisterInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"VendorAdmin"}]
         };
      };
      healthChainIdentifier: string;
      id?: string;
      name?: HumanName;
      constructor(input : HealthChainAdminTxRegisterInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.healthChainIdentifier = input.healthChainIdentifier;
         if (input.id) {
            this.id = input.id;
         }
         if (input.name) {
            this.name = input.name;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.HealthChainAdminTxRegister';
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
   export interface VendorAdminTxRegisterInterface  extends TransactionInterface {
      vendorAdmin: VendorAdmin;
   }
   
   export  class VendorAdminTxRegister  extends Transaction implements VendorAdminTxRegisterInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"VendorAdmin"}]
         };
      };
      vendorAdmin: VendorAdmin;
      constructor(input : VendorAdminTxRegisterInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.vendorAdmin = input.vendorAdmin;
      }
      getResourceType() : string {
         return 'org.healthchain.VendorAdminTxRegister';
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
   export interface VendorAdminTxAddVendorRelationshipInterface  extends TransactionInterface {
      vendorAdmin: string;
      vendor: string;
      relationshipType?: RelationshipType;
   }
   
   export  class VendorAdminTxAddVendorRelationship  extends Transaction implements VendorAdminTxAddVendorRelationshipInterface {
      static decorators() {
         return {
            returns: [{"array":true,"type":"Identifier","name":"VendorRelationship"}]
         };
      };
      vendorAdmin: string;
      vendor: string;
      relationshipType: RelationshipType = RelationshipType.employed;
      constructor(input : VendorAdminTxAddVendorRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.vendorAdmin = input.vendorAdmin;
         this.vendor = input.vendor;
         if (input.relationshipType) {
            this.relationshipType = input.relationshipType;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.VendorAdminTxAddVendorRelationship';
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
   export interface VendorAdminTxRemoveVendorRelationshipInterface  extends TransactionInterface {
      vendorAdmin: string;
      vendor: string;
   }
   
   export  class VendorAdminTxRemoveVendorRelationship  extends Transaction implements VendorAdminTxRemoveVendorRelationshipInterface {
      static decorators() {
         return {
            returns: [{"array":true,"type":"Identifier","name":"VendorRelationship"}]
         };
      };
      vendorAdmin: string;
      vendor: string;
      constructor(input : VendorAdminTxRemoveVendorRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.vendorAdmin = input.vendorAdmin;
         this.vendor = input.vendor;
      }
      getResourceType() : string {
         return 'org.healthchain.VendorAdminTxRemoveVendorRelationship';
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
   export interface ApplicationTxRegisterInterface  extends TransactionInterface {
      application: Application;
   }
   
   export  class ApplicationTxRegister  extends Transaction implements ApplicationTxRegisterInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Application"}]
         };
      };
      application: Application;
      constructor(input : ApplicationTxRegisterInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.application = input.application;
      }
      getResourceType() : string {
         return 'org.healthchain.ApplicationTxRegister';
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
   export interface ApplicationTxAddAdminInterface  extends TransactionInterface {
      application: string;
      admin: string;
   }
   
   export  class ApplicationTxAddAdmin  extends Transaction implements ApplicationTxAddAdminInterface {
      static decorators() {
         return {
            returns: [{"array":true,"type":"Identifier","name":"ApplicationRelationship"}]
         };
      };
      application: string;
      admin: string;
      constructor(input : ApplicationTxAddAdminInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.application = input.application;
         this.admin = input.admin;
      }
      getResourceType() : string {
         return 'org.healthchain.ApplicationTxAddAdmin';
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
   export interface ApplicationTxRemoveAdminInterface  extends TransactionInterface {
      application: string;
      admin: string;
   }
   
   export  class ApplicationTxRemoveAdmin  extends Transaction implements ApplicationTxRemoveAdminInterface {
      static decorators() {
         return {
            returns: [{"array":true,"type":"Identifier","name":"ApplicationRelationship"}]
         };
      };
      application: string;
      admin: string;
      constructor(input : ApplicationTxRemoveAdminInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.application = input.application;
         this.admin = input.admin;
      }
      getResourceType() : string {
         return 'org.healthchain.ApplicationTxRemoveAdmin';
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
   export interface ApplicationTxAddNoteInterface  extends TransactionInterface {
      application: string;
      note: Annotation;
   }
   
   export  class ApplicationTxAddNote  extends Transaction implements ApplicationTxAddNoteInterface {
      static decorators() {
         return {
            returns: [{"array":true,"type":"Identifier","name":"Annotation"}]
         };
      };
      application: string;
      note: Annotation;
      constructor(input : ApplicationTxAddNoteInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.application = input.application;
         this.note = input.note;
      }
      getResourceType() : string {
         return 'org.healthchain.ApplicationTxAddNote';
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
   export interface ApplicationTxTransferOwnershipInterface  extends TransactionInterface {
      application: string;
      owner: string;
   }
   
   export  class ApplicationTxTransferOwnership  extends Transaction implements ApplicationTxTransferOwnershipInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Application"}]
         };
      };
      application: string;
      owner: string;
      constructor(input : ApplicationTxTransferOwnershipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.application = input.application;
         this.owner = input.owner;
      }
      getResourceType() : string {
         return 'org.healthchain.ApplicationTxTransferOwnership';
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
   export interface ApplicationTxUpdateStatusInterface  extends TransactionInterface {
      application: string;
      status: ApplicationStatus;
   }
   
   export  class ApplicationTxUpdateStatus  extends Transaction implements ApplicationTxUpdateStatusInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"ApplicationStatus"}]
         };
      };
      application: string;
      status: ApplicationStatus;
      constructor(input : ApplicationTxUpdateStatusInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.application = input.application;
         this.status = input.status;
      }
      getResourceType() : string {
         return 'org.healthchain.ApplicationTxUpdateStatus';
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
   export interface GetApplicationInterface  extends TransactionInterface {
   }
   
   export  class GetApplication  extends Transaction implements GetApplicationInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"Application"}]
         };
      };
      constructor(input : GetApplicationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.GetApplication';
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
   export interface GetParticipantInterface  extends TransactionInterface {
   }
   
   export  class GetParticipant  extends Transaction implements GetParticipantInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"Participant"}]
         };
      };
      constructor(input : GetParticipantInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.GetParticipant';
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
   export interface RecordPatientReadInterface  extends TransactionInterface {
      patient?: string;
      identifier?: Identifier;
   }
   
   export  class RecordPatientRead  extends Transaction implements RecordPatientReadInterface {
      patient?: string;
      identifier?: Identifier;
      constructor(input : RecordPatientReadInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.patient) {
            this.patient = input.patient;
         }
         if (input.identifier) {
            this.identifier = input.identifier;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.RecordPatientRead';
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
   export interface RelationshipInterface  {
      relationshipType: RelationshipType;
      isPreferred?: boolean;
   }
   
   export abstract  class Relationship  implements RelationshipInterface {
      relationshipType: RelationshipType;
      isPreferred?: boolean = false;
      constructor(input : RelationshipInterface, setOptionalDefaults : boolean = false) {
         this.relationshipType = input.relationshipType;
         if (input.isPreferred) {
            this.isPreferred = input.isPreferred;
         } else if (!setOptionalDefaults) {
            delete this.isPreferred;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.Relationship';
      }
   }
   export interface PrescriberRelationshipInterface  extends RelationshipInterface {
      prescriber: string;
   }
   
   export  class PrescriberRelationship  extends Relationship implements PrescriberRelationshipInterface {
      static decorators() {
         return {
            participant: ["prescriber"],
            relationship: ["prescribers"]
         };
      };
      prescriber: string;
      constructor(input : PrescriberRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.prescriber = input.prescriber;
      }
      getResourceType() : string {
         return 'org.healthchain.PrescriberRelationship';
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
   export interface ClinicLocationRelationshipInterface  extends RelationshipInterface {
      clinicLocation: string;
   }
   
   export  class ClinicLocationRelationship  extends Relationship implements ClinicLocationRelationshipInterface {
      static decorators() {
         return {
            participant: ["clinicLocation"],
            relationship: ["clinicLocations"]
         };
      };
      clinicLocation: string;
      constructor(input : ClinicLocationRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinicLocation = input.clinicLocation;
      }
      getResourceType() : string {
         return 'org.healthchain.ClinicLocationRelationship';
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
   export interface DispenserRelationshipInterface  extends RelationshipInterface {
      dispenser: string;
   }
   
   export  class DispenserRelationship  extends Relationship implements DispenserRelationshipInterface {
      static decorators() {
         return {
            participant: ["dispenser"],
            relationship: ["dispensers"]
         };
      };
      dispenser: string;
      constructor(input : DispenserRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.dispenser = input.dispenser;
      }
      getResourceType() : string {
         return 'org.healthchain.DispenserRelationship';
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
   export interface PharmacyLocationRelationshipInterface  extends RelationshipInterface {
      pharmacyLocation: string;
   }
   
   export  class PharmacyLocationRelationship  extends Relationship implements PharmacyLocationRelationshipInterface {
      static decorators() {
         return {
            participant: ["pharmacyLocation"],
            relationship: ["pharmacyLocations"]
         };
      };
      pharmacyLocation: string;
      constructor(input : PharmacyLocationRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.pharmacyLocation = input.pharmacyLocation;
      }
      getResourceType() : string {
         return 'org.healthchain.PharmacyLocationRelationship';
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
   export interface VendorRelationshipInterface  extends RelationshipInterface {
      vendor: string;
   }
   
   export  class VendorRelationship  extends Relationship implements VendorRelationshipInterface {
      static decorators() {
         return {
            participant: ["vendor"],
            relationship: ["vendors"]
         };
      };
      vendor: string;
      constructor(input : VendorRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.vendor = input.vendor;
      }
      getResourceType() : string {
         return 'org.healthchain.VendorRelationship';
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
   export interface ApplicationRelationshipInterface  extends RelationshipInterface {
      application: string;
   }
   
   export  class ApplicationRelationship  extends Relationship implements ApplicationRelationshipInterface {
      static decorators() {
         return {
            asset: ["application"],
            relationship: ["applications"]
         };
      };
      application: string;
      constructor(input : ApplicationRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.application = input.application;
      }
      getResourceType() : string {
         return 'org.healthchain.ApplicationRelationship';
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
   export enum RelationshipType {
      implied = 'implied',
      referred = 'referred',
      consent = 'consent',
      employed = 'employed',
      admin = 'admin',
   }
   export enum OrganizationStatus {
      active = 'active',
      inactive = 'inactive',
      sold = 'sold',
      closed = 'closed',
      relocated = 'relocated',
   }
   export interface AddIdentifierInterface  extends TransactionInterface {
      participant: string;
      identifier: Identifier;
   }
   
   export  class AddIdentifier  extends Transaction implements AddIdentifierInterface {
      static decorators() {
         return {
            returns: [{"array":true,"type":"Identifier","name":"Identifier"}]
         };
      };
      participant: string;
      identifier: Identifier;
      constructor(input : AddIdentifierInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.participant = input.participant;
         this.identifier = input.identifier;
      }
      getResourceType() : string {
         return 'org.healthchain.AddIdentifier';
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
   export interface RegisterPharmacyLocationInterface  extends TransactionInterface {
      pharmacyLocation: PharmacyLocation;
   }
   
   export  class RegisterPharmacyLocation  extends Transaction implements RegisterPharmacyLocationInterface {
      pharmacyLocation: PharmacyLocation;
      constructor(input : RegisterPharmacyLocationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.pharmacyLocation = input.pharmacyLocation;
      }
      getResourceType() : string {
         return 'org.healthchain.RegisterPharmacyLocation';
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
   export interface AddIdentifierToPharmacyLocationInterface  extends TransactionInterface {
      pharmacyLocation: string;
      identifier: Identifier;
   }
   
   export  class AddIdentifierToPharmacyLocation  extends Transaction implements AddIdentifierToPharmacyLocationInterface {
      pharmacyLocation: string;
      identifier: Identifier;
      constructor(input : AddIdentifierToPharmacyLocationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.pharmacyLocation = input.pharmacyLocation;
         this.identifier = input.identifier;
      }
      getResourceType() : string {
         return 'org.healthchain.AddIdentifierToPharmacyLocation';
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
   export interface RemoveIdentifierFromPharmacyLocationInterface  extends TransactionInterface {
      pharmacyLocation: string;
      assigner: string;
   }
   
   export  class RemoveIdentifierFromPharmacyLocation  extends Transaction implements RemoveIdentifierFromPharmacyLocationInterface {
      pharmacyLocation: string;
      assigner: string;
      constructor(input : RemoveIdentifierFromPharmacyLocationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.pharmacyLocation = input.pharmacyLocation;
         this.assigner = input.assigner;
      }
      getResourceType() : string {
         return 'org.healthchain.RemoveIdentifierFromPharmacyLocation';
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
   export interface BulkPharmacyLocationInterface  extends TransactionInterface {
      pharmacyLocations: PharmacyLocationStub[];
   }
   
   export  class BulkPharmacyLocation  extends Transaction implements BulkPharmacyLocationInterface {
      pharmacyLocations: PharmacyLocationStub[];
      constructor(input : BulkPharmacyLocationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.pharmacyLocations = input.pharmacyLocations;
      }
      getResourceType() : string {
         return 'org.healthchain.BulkPharmacyLocation';
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
   export interface RegisterClinicInterface  extends TransactionInterface {
      clinic: Clinic;
   }
   
   export  class RegisterClinic  extends Transaction implements RegisterClinicInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Clinic"}]
         };
      };
      clinic: Clinic;
      constructor(input : RegisterClinicInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinic = input.clinic;
      }
      getResourceType() : string {
         return 'org.healthchain.RegisterClinic';
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
   export interface RegisterClinicLocationInterface  extends TransactionInterface {
      clinicLocation: ClinicLocation;
   }
   
   export  class RegisterClinicLocation  extends Transaction implements RegisterClinicLocationInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"ClinicLocation"}]
         };
      };
      clinicLocation: ClinicLocation;
      constructor(input : RegisterClinicLocationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinicLocation = input.clinicLocation;
      }
      getResourceType() : string {
         return 'org.healthchain.RegisterClinicLocation';
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
   export interface RegisterPrescriberInterface  extends TransactionInterface {
      prescriber: Prescriber;
   }
   
   export  class RegisterPrescriber  extends Transaction implements RegisterPrescriberInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Prescriber"}]
         };
      };
      prescriber: Prescriber;
      constructor(input : RegisterPrescriberInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.prescriber = input.prescriber;
      }
      getResourceType() : string {
         return 'org.healthchain.RegisterPrescriber';
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
   export interface RegisterClinicAdminInterface  extends TransactionInterface {
      clinicAdmin: ClinicAdmin;
   }
   
   export  class RegisterClinicAdmin  extends Transaction implements RegisterClinicAdminInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"ClinicAdmin"}]
         };
      };
      clinicAdmin: ClinicAdmin;
      constructor(input : RegisterClinicAdminInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinicAdmin = input.clinicAdmin;
      }
      getResourceType() : string {
         return 'org.healthchain.RegisterClinicAdmin';
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
   export interface RegisterDispenserInterface  extends TransactionInterface {
      dispenser: Dispenser;
   }
   
   export  class RegisterDispenser  extends Transaction implements RegisterDispenserInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Dispenser"}]
         };
      };
      dispenser: Dispenser;
      constructor(input : RegisterDispenserInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.dispenser = input.dispenser;
      }
      getResourceType() : string {
         return 'org.healthchain.RegisterDispenser';
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
   export interface RegisterPatientInterface  extends TransactionInterface {
      patient: Patient;
   }
   
   export  class RegisterPatient  extends Transaction implements RegisterPatientInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Patient"}]
         };
      };
      patient: Patient;
      constructor(input : RegisterPatientInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.patient = input.patient;
      }
      getResourceType() : string {
         return 'org.healthchain.RegisterPatient';
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
   export interface RegisterPatientsBulkInterface  extends TransactionInterface {
      clinicLocation: string;
      patients: Patient[];
   }
   
   export  class RegisterPatientsBulk  extends Transaction implements RegisterPatientsBulkInterface {
      clinicLocation: string;
      patients: Patient[];
      constructor(input : RegisterPatientsBulkInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinicLocation = input.clinicLocation;
         this.patients = input.patients;
      }
      getResourceType() : string {
         return 'org.healthchain.RegisterPatientsBulk';
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
   export interface UpdateParticipantInterface  extends TransactionInterface {
      id: string;
      participantType: string;
      identifier: Identifier[];
      name?: HumanName;
      gender?: Gender;
      telecom?: ContactPoint[];
      birthDate?: Date;
      address?: Address[];
   }
   
   export  class UpdateParticipant  extends Transaction implements UpdateParticipantInterface {
      id: string;
      participantType: string;
      identifier: Identifier[];
      name?: HumanName;
      gender?: Gender;
      telecom?: ContactPoint[];
      birthDate?: Date;
      address?: Address[];
      constructor(input : UpdateParticipantInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.participantType = input.participantType;
         this.identifier = input.identifier;
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
         return 'org.healthchain.UpdateParticipant';
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
   export interface AddRelationshipInterface  extends TransactionInterface {
      field: string;
      relationshipType?: RelationshipType;
      from: Resource;
      to: Resource;
   }
   
   export  class AddRelationship  extends Transaction implements AddRelationshipInterface {
      static decorators() {
         return {
            returns: [{"array":true,"type":"Identifier","name":"Relationship"}]
         };
      };
      field: string;
      relationshipType?: RelationshipType;
      from: Resource;
      to: Resource;
      constructor(input : AddRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.field = input.field;
         if (input.relationshipType) {
            this.relationshipType = input.relationshipType;
         }
         this.from = input.from;
         this.to = input.to;
      }
      getResourceType() : string {
         return 'org.healthchain.AddRelationship';
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
   export interface ResourceInterface  {
      participant?: string;
      asset?: string;
   }
   
   export  class Resource  implements ResourceInterface {
      participant?: string;
      asset?: string;
      constructor(input : ResourceInterface, setOptionalDefaults : boolean = false) {
         if (input.participant) {
            this.participant = input.participant;
         }
         if (input.asset) {
            this.asset = input.asset;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.Resource';
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
   export interface AddPatientRelationshipInterface  extends TransactionInterface {
      patientIdentifier: Identifier;
      clinicLocation?: string;
      pharmacyLocation?: string;
   }
   
   export  class AddPatientRelationship  extends Transaction implements AddPatientRelationshipInterface {
      patientIdentifier: Identifier;
      clinicLocation?: string;
      pharmacyLocation?: string;
      constructor(input : AddPatientRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.patientIdentifier = input.patientIdentifier;
         if (input.clinicLocation) {
            this.clinicLocation = input.clinicLocation;
         }
         if (input.pharmacyLocation) {
            this.pharmacyLocation = input.pharmacyLocation;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.AddPatientRelationship';
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
   export interface AddPatientPharmacyLocationRelationshipInterface  extends TransactionInterface {
      patient: string;
      pharmacyLocation: string;
      relationshipType: RelationshipType;
   }
   
   export  class AddPatientPharmacyLocationRelationship  extends Transaction implements AddPatientPharmacyLocationRelationshipInterface {
      patient: string;
      pharmacyLocation: string;
      relationshipType: RelationshipType;
      constructor(input : AddPatientPharmacyLocationRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.patient = input.patient;
         this.pharmacyLocation = input.pharmacyLocation;
         this.relationshipType = input.relationshipType;
      }
      getResourceType() : string {
         return 'org.healthchain.AddPatientPharmacyLocationRelationship';
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
   export interface AddPatientClinicLocationRelationshipInterface  extends TransactionInterface {
      patient: string;
      clinicLocation: string;
      relationshipType: RelationshipType;
   }
   
   export  class AddPatientClinicLocationRelationship  extends Transaction implements AddPatientClinicLocationRelationshipInterface {
      patient: string;
      clinicLocation: string;
      relationshipType: RelationshipType;
      constructor(input : AddPatientClinicLocationRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.patient = input.patient;
         this.clinicLocation = input.clinicLocation;
         this.relationshipType = input.relationshipType;
      }
      getResourceType() : string {
         return 'org.healthchain.AddPatientClinicLocationRelationship';
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
   export interface AddPatientPrescriberRelationshipInterface  extends TransactionInterface {
      patient: string;
      prescriber: string;
      relationshipType: RelationshipType;
   }
   
   export  class AddPatientPrescriberRelationship  extends Transaction implements AddPatientPrescriberRelationshipInterface {
      patient: string;
      prescriber: string;
      relationshipType: RelationshipType;
      constructor(input : AddPatientPrescriberRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.patient = input.patient;
         this.prescriber = input.prescriber;
         this.relationshipType = input.relationshipType;
      }
      getResourceType() : string {
         return 'org.healthchain.AddPatientPrescriberRelationship';
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
   export interface AddPatientDispenserRelationshipInterface  extends TransactionInterface {
      patient: string;
      dispenser: string;
      relationshipType: RelationshipType;
   }
   
   export  class AddPatientDispenserRelationship  extends Transaction implements AddPatientDispenserRelationshipInterface {
      patient: string;
      dispenser: string;
      relationshipType: RelationshipType;
      constructor(input : AddPatientDispenserRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.patient = input.patient;
         this.dispenser = input.dispenser;
         this.relationshipType = input.relationshipType;
      }
      getResourceType() : string {
         return 'org.healthchain.AddPatientDispenserRelationship';
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
   export interface AddDispenserPharmacyLocationRelationshipInterface  extends TransactionInterface {
      dispenser: string;
      pharmacyLocation: string;
      relationshipType: RelationshipType;
   }
   
   export  class AddDispenserPharmacyLocationRelationship  extends Transaction implements AddDispenserPharmacyLocationRelationshipInterface {
      dispenser: string;
      pharmacyLocation: string;
      relationshipType: RelationshipType;
      constructor(input : AddDispenserPharmacyLocationRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.dispenser = input.dispenser;
         this.pharmacyLocation = input.pharmacyLocation;
         this.relationshipType = input.relationshipType;
      }
      getResourceType() : string {
         return 'org.healthchain.AddDispenserPharmacyLocationRelationship';
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
   export interface AddPrescriberClinicLocationRelationshipInterface  extends TransactionInterface {
      prescriber: string;
      clinicLocation: string;
      relationshipType: RelationshipType;
   }
   
   export  class AddPrescriberClinicLocationRelationship  extends Transaction implements AddPrescriberClinicLocationRelationshipInterface {
      prescriber: string;
      clinicLocation: string;
      relationshipType: RelationshipType;
      constructor(input : AddPrescriberClinicLocationRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.prescriber = input.prescriber;
         this.clinicLocation = input.clinicLocation;
         this.relationshipType = input.relationshipType;
      }
      getResourceType() : string {
         return 'org.healthchain.AddPrescriberClinicLocationRelationship';
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
   export interface AddClinicAdminClinicLocationRelationshipInterface  extends TransactionInterface {
      clinicAdmin: string;
      clinicLocation: string;
      relationshipType: RelationshipType;
   }
   
   export  class AddClinicAdminClinicLocationRelationship  extends Transaction implements AddClinicAdminClinicLocationRelationshipInterface {
      clinicAdmin: string;
      clinicLocation: string;
      relationshipType: RelationshipType;
      constructor(input : AddClinicAdminClinicLocationRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.clinicAdmin = input.clinicAdmin;
         this.clinicLocation = input.clinicLocation;
         this.relationshipType = input.relationshipType;
      }
      getResourceType() : string {
         return 'org.healthchain.AddClinicAdminClinicLocationRelationship';
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
   export enum ResourceType {
      participant = 'participant',
      asset = 'asset',
   }
   export enum LocationStatus {
      active = 'active',
      sold = 'sold',
      relocated = 'relocated',
      closed = 'closed',
   }
   export interface AddSigInterface  extends TransactionInterface {
      sig: Sig;
   }
   
   export  class AddSig  extends Transaction implements AddSigInterface {
      sig: Sig;
      constructor(input : AddSigInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.sig = input.sig;
      }
      getResourceType() : string {
         return 'org.healthchain.AddSig';
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
   export interface AddFavoriteSigInterface  extends TransactionInterface {
      sig: string;
   }
   
   export  class AddFavoriteSig  extends Transaction implements AddFavoriteSigInterface {
      sig: string;
      constructor(input : AddFavoriteSigInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.sig = input.sig;
      }
      getResourceType() : string {
         return 'org.healthchain.AddFavoriteSig';
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
   export interface RemoveFavoriteSigInterface  extends TransactionInterface {
      sig: string;
   }
   
   export  class RemoveFavoriteSig  extends Transaction implements RemoveFavoriteSigInterface {
      sig: string;
      constructor(input : RemoveFavoriteSigInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.sig = input.sig;
      }
      getResourceType() : string {
         return 'org.healthchain.RemoveFavoriteSig';
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
   export interface AddMedicationRequestInterface  extends TransactionInterface {
      medicationRequest: MedicationRequest;
   }
   
   export  class AddMedicationRequest  extends Transaction implements AddMedicationRequestInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      medicationRequest: MedicationRequest;
      constructor(input : AddMedicationRequestInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
      }
      getResourceType() : string {
         return 'org.healthchain.AddMedicationRequest';
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
   export interface AddMedicationRequestNoteInterface  extends TransactionInterface {
      medicationRequest: string;
      note: Annotation;
   }
   
   export  class AddMedicationRequestNote  extends Transaction implements AddMedicationRequestNoteInterface {
      static decorators() {
         return {
            returns: [{"array":true,"type":"Identifier","name":"Annotation"}]
         };
      };
      medicationRequest: string;
      note: Annotation;
      constructor(input : AddMedicationRequestNoteInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
         this.note = input.note;
      }
      getResourceType() : string {
         return 'org.healthchain.AddMedicationRequestNote';
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
   export interface AcknowledgeMedicationRequestInterface  extends TransactionInterface {
      medicationRequest: string;
      time: Date;
      type?: AcknowledgementType;
   }
   
   export  class AcknowledgeMedicationRequest  extends Transaction implements AcknowledgeMedicationRequestInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Acknowledgement"}]
         };
      };
      medicationRequest: string;
      time: Date;
      type: AcknowledgementType = AcknowledgementType.MedicationRequestAdded;
      constructor(input : AcknowledgeMedicationRequestInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
         this.time = input.time;
         if (input.type) {
            this.type = input.type;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.AcknowledgeMedicationRequest';
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
   export interface AddMedicationRequestsInterface  extends TransactionInterface {
      medicationRequests: MedicationRequest[];
   }
   
   export  class AddMedicationRequests  extends Transaction implements AddMedicationRequestsInterface {
      static decorators() {
         return {
            returns: [{"array":true,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      medicationRequests: MedicationRequest[];
      constructor(input : AddMedicationRequestsInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequests = input.medicationRequests;
      }
      getResourceType() : string {
         return 'org.healthchain.AddMedicationRequests';
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
   export interface ImportMedicationRequestInterface  extends TransactionInterface {
      medicationRequest: MedicationRequest;
   }
   
   export  class ImportMedicationRequest  extends Transaction implements ImportMedicationRequestInterface {
      medicationRequest: MedicationRequest;
      constructor(input : ImportMedicationRequestInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
      }
      getResourceType() : string {
         return 'org.healthchain.ImportMedicationRequest';
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
   export interface ApproveMedicationRequestInterface  extends TransactionInterface {
      medicationRequest: string;
   }
   
   export  class ApproveMedicationRequest  extends Transaction implements ApproveMedicationRequestInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      medicationRequest: string;
      constructor(input : ApproveMedicationRequestInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
      }
      getResourceType() : string {
         return 'org.healthchain.ApproveMedicationRequest';
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
   export interface CompleteMedicationRequestInterface  extends TransactionInterface {
      medicationRequest: string;
   }
   
   export  class CompleteMedicationRequest  extends Transaction implements CompleteMedicationRequestInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      medicationRequest: string;
      constructor(input : CompleteMedicationRequestInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
      }
      getResourceType() : string {
         return 'org.healthchain.CompleteMedicationRequest';
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
   export interface MedicationPrescribedEventInterface  extends EventInterface {
   }
   
   export  class MedicationPrescribedEvent  extends Event implements MedicationPrescribedEventInterface {
      constructor(input : MedicationPrescribedEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.MedicationPrescribedEvent';
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
   export interface AddMedicationDispenseInterface  extends TransactionInterface {
      medicationDispense: MedicationDispense;
   }
   
   export  class AddMedicationDispense  extends Transaction implements AddMedicationDispenseInterface {
      medicationDispense: MedicationDispense;
      constructor(input : AddMedicationDispenseInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationDispense = input.medicationDispense;
      }
      getResourceType() : string {
         return 'org.healthchain.AddMedicationDispense';
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
   export interface AddMedicationDispenseNoteInterface  extends TransactionInterface {
      medicationDispense: string;
      note: Annotation;
   }
   
   export  class AddMedicationDispenseNote  extends Transaction implements AddMedicationDispenseNoteInterface {
      static decorators() {
         return {
            returns: [{"array":true,"type":"Identifier","name":"Annotation"}]
         };
      };
      medicationDispense: string;
      note: Annotation;
      constructor(input : AddMedicationDispenseNoteInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationDispense = input.medicationDispense;
         this.note = input.note;
      }
      getResourceType() : string {
         return 'org.healthchain.AddMedicationDispenseNote';
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
   export interface ImportMedicationDispenseInterface  extends TransactionInterface {
      medicationDispense: MedicationDispense;
   }
   
   export  class ImportMedicationDispense  extends Transaction implements ImportMedicationDispenseInterface {
      medicationDispense: MedicationDispense;
      constructor(input : ImportMedicationDispenseInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationDispense = input.medicationDispense;
      }
      getResourceType() : string {
         return 'org.healthchain.ImportMedicationDispense';
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
   export interface MedicationRequestInterface  extends AssetInterface {
      version?: number;
      id: string;
      prescriber?: string;
      onBehalfOf: string;
      patient: string;
      recorder?: string;
      assignedPharmacy?: string;
      medicationCodeableConcept?: CodeableConcept;
      medication?: string;
      identifier?: Identifier[];
      groupIdentifier?: Identifier;
      status?: PrescribeStatus;
      intent?: Intent;
      reasonCode?: CodeableConcept[];
      note?: Annotation[];
      dosageInstruction: Dosage[];
      dispenseRequest: DispenseRequest;
      substitution?: Substitution;
      medicationDispenses?: string[];
      priorPrescription?: string;
      authoredOn: Date;
      acknowledgements?: Acknowledgement[];
      statusReason?: CodeableConcept;
   }
   
   export  class MedicationRequest  extends Asset implements MedicationRequestInterface {
      version: number = 5;
      id: string;
      prescriber?: string;
      onBehalfOf: string;
      patient: string;
      recorder?: string;
      assignedPharmacy?: string;
      medicationCodeableConcept?: CodeableConcept;
      medication?: string;
      identifier?: Identifier[];
      groupIdentifier?: Identifier;
      status: PrescribeStatus = PrescribeStatus.draft;
      intent?: Intent = Intent.proposal;
      reasonCode?: CodeableConcept[];
      note?: Annotation[];
      dosageInstruction: Dosage[];
      dispenseRequest: DispenseRequest;
      substitution?: Substitution;
      medicationDispenses?: string[];
      priorPrescription?: string;
      authoredOn: Date;
      acknowledgements?: Acknowledgement[];
      statusReason?: CodeableConcept;
      constructor(input : MedicationRequestInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
         this.id = input.id;
         if (input.prescriber) {
            this.prescriber = input.prescriber;
         }
         this.onBehalfOf = input.onBehalfOf;
         this.patient = input.patient;
         if (input.recorder) {
            this.recorder = input.recorder;
         }
         if (input.assignedPharmacy) {
            this.assignedPharmacy = input.assignedPharmacy;
         }
         if (input.medicationCodeableConcept) {
            this.medicationCodeableConcept = input.medicationCodeableConcept;
         }
         if (input.medication) {
            this.medication = input.medication;
         }
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         if (input.groupIdentifier) {
            this.groupIdentifier = input.groupIdentifier;
         }
         if (input.status) {
            this.status = input.status;
         }
         if (input.intent) {
            this.intent = input.intent;
         } else if (!setOptionalDefaults) {
            delete this.intent;
         }
         if (input.reasonCode) {
            this.reasonCode = input.reasonCode;
         }
         if (input.note) {
            this.note = input.note;
         }
         this.dosageInstruction = input.dosageInstruction;
         this.dispenseRequest = input.dispenseRequest;
         if (input.substitution) {
            this.substitution = input.substitution;
         }
         if (input.medicationDispenses) {
            this.medicationDispenses = input.medicationDispenses;
         }
         if (input.priorPrescription) {
            this.priorPrescription = input.priorPrescription;
         }
         this.authoredOn = input.authoredOn;
         if (input.acknowledgements) {
            this.acknowledgements = input.acknowledgements;
         }
         if (input.statusReason) {
            this.statusReason = input.statusReason;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.MedicationRequest';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface DispenseRequestInterface  {
      validityPeriod?: Period;
      numberOfRepeatsAllowed: number;
      quantity?: Quantity;
      expectedSupplyDuration?: Duration;
      totalQuantity?: Quantity;
      pharmacyInstruction?: string;
      type?: CodeableConcept;
   }
   
   export  class DispenseRequest  implements DispenseRequestInterface {
      validityPeriod?: Period;
      numberOfRepeatsAllowed: number;
      quantity?: Quantity;
      expectedSupplyDuration?: Duration;
      totalQuantity?: Quantity;
      pharmacyInstruction?: string;
      type?: CodeableConcept;
      constructor(input : DispenseRequestInterface, setOptionalDefaults : boolean = false) {
         if (input.validityPeriod) {
            this.validityPeriod = input.validityPeriod;
         }
         this.numberOfRepeatsAllowed = input.numberOfRepeatsAllowed;
         if (input.quantity) {
            this.quantity = input.quantity;
         }
         if (input.expectedSupplyDuration) {
            this.expectedSupplyDuration = input.expectedSupplyDuration;
         }
         if (input.totalQuantity) {
            this.totalQuantity = input.totalQuantity;
         }
         if (input.pharmacyInstruction) {
            this.pharmacyInstruction = input.pharmacyInstruction;
         }
         if (input.type) {
            this.type = input.type;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.DispenseRequest';
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
   export interface SigInterface  extends AssetInterface {
      version?: number;
      id: string;
      medicationCodeableConcept?: CodeableConcept;
      medication?: string;
      dosageInstruction?: Dosage[];
      dispenseRequest?: DispenseRequest;
   }
   
   export  class Sig  extends Asset implements SigInterface {
      version: number = 3;
      id: string;
      medicationCodeableConcept?: CodeableConcept;
      medication?: string;
      dosageInstruction?: Dosage[];
      dispenseRequest?: DispenseRequest;
      constructor(input : SigInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
         this.id = input.id;
         if (input.medicationCodeableConcept) {
            this.medicationCodeableConcept = input.medicationCodeableConcept;
         }
         if (input.medication) {
            this.medication = input.medication;
         }
         if (input.dosageInstruction) {
            this.dosageInstruction = input.dosageInstruction;
         }
         if (input.dispenseRequest) {
            this.dispenseRequest = input.dispenseRequest;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.Sig';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface MedicationDispenseInterface  extends AssetInterface {
      version?: number;
      id: string;
      medicationRequest?: string;
      dispenser?: string;
      patient: string;
      pharmacyLocation: string;
      identifier?: Identifier[];
      status?: DispenseStatus;
      category?: CodeableConcept;
      medicationCodeableConcept?: CodeableConcept;
      medication?: string;
      dispenseType?: CodeableConcept;
      quantity?: Quantity;
      daysSupply?: Quantity;
      whenPrepared?: Date;
      whenHandedOver?: Date;
      receiver?: Receiver;
      note?: Annotation[];
      dosageInstruction?: Dosage[];
      substitution: DispenseSubstitution;
      cancelReason?: CodeableConcept;
   }
   
   export  class MedicationDispense  extends Asset implements MedicationDispenseInterface {
      version: number = 5;
      id: string;
      medicationRequest?: string;
      dispenser?: string;
      patient: string;
      pharmacyLocation: string;
      identifier?: Identifier[];
      status: DispenseStatus = DispenseStatus.completed;
      category?: CodeableConcept;
      medicationCodeableConcept?: CodeableConcept;
      medication?: string;
      dispenseType?: CodeableConcept;
      quantity?: Quantity;
      daysSupply?: Quantity;
      whenPrepared?: Date;
      whenHandedOver?: Date;
      receiver?: Receiver;
      note?: Annotation[];
      dosageInstruction?: Dosage[];
      substitution: DispenseSubstitution;
      cancelReason?: CodeableConcept;
      constructor(input : MedicationDispenseInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.version) {
            this.version = input.version;
         }
         this.id = input.id;
         if (input.medicationRequest) {
            this.medicationRequest = input.medicationRequest;
         }
         if (input.dispenser) {
            this.dispenser = input.dispenser;
         }
         this.patient = input.patient;
         this.pharmacyLocation = input.pharmacyLocation;
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         if (input.status) {
            this.status = input.status;
         }
         if (input.category) {
            this.category = input.category;
         }
         if (input.medicationCodeableConcept) {
            this.medicationCodeableConcept = input.medicationCodeableConcept;
         }
         if (input.medication) {
            this.medication = input.medication;
         }
         if (input.dispenseType) {
            this.dispenseType = input.dispenseType;
         }
         if (input.quantity) {
            this.quantity = input.quantity;
         }
         if (input.daysSupply) {
            this.daysSupply = input.daysSupply;
         }
         if (input.whenPrepared) {
            this.whenPrepared = input.whenPrepared;
         }
         if (input.whenHandedOver) {
            this.whenHandedOver = input.whenHandedOver;
         }
         if (input.receiver) {
            this.receiver = input.receiver;
         }
         if (input.note) {
            this.note = input.note;
         }
         if (input.dosageInstruction) {
            this.dosageInstruction = input.dosageInstruction;
         }
         this.substitution = input.substitution;
         if (input.cancelReason) {
            this.cancelReason = input.cancelReason;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.MedicationDispense';
      }
      serializeToJson() {
         let json : any = Object.assign( { resourceType: this.getResourceType() }, this);
         delete json.version;
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
   export interface ReceiverInterface  {
      participantType?: ReceiverType;
      participant?: string;
      text?: string;
   }
   
   export  class Receiver  implements ReceiverInterface {
      participantType?: ReceiverType;
      participant?: string;
      text?: string;
      constructor(input : ReceiverInterface, setOptionalDefaults : boolean = false) {
         if (input.participantType) {
            this.participantType = input.participantType;
         }
         if (input.participant) {
            this.participant = input.participant;
         }
         if (input.text) {
            this.text = input.text;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.Receiver';
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
   export enum ReceiverType {
      Prescriber = 'Prescriber',
      Dispenser = 'Dispenser',
      Patient = 'Patient',
   }
   export interface AnnotationInterface  {
      author?: string;
      authorName?: string;
      time?: Date;
      text: string;
   }
   
   export  class Annotation  implements AnnotationInterface {
      author?: string;
      authorName?: string;
      time?: Date;
      text: string;
      constructor(input : AnnotationInterface, setOptionalDefaults : boolean = false) {
         if (input.author) {
            this.author = input.author;
         }
         if (input.authorName) {
            this.authorName = input.authorName;
         }
         if (input.time) {
            this.time = input.time;
         }
         this.text = input.text;
      }
      getResourceType() : string {
         return 'org.healthchain.Annotation';
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
   export interface AuthorInterface  {
      participantType: AuthorType;
      participantId: string;
   }
   
   export  class Author  implements AuthorInterface {
      participantType: AuthorType;
      participantId: string;
      constructor(input : AuthorInterface, setOptionalDefaults : boolean = false) {
         this.participantType = input.participantType;
         this.participantId = input.participantId;
      }
      getResourceType() : string {
         return 'org.healthchain.Author';
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
   export enum AuthorType {
      ClinicAdmin = 'ClinicAdmin',
      Prescriber = 'Prescriber',
      Dispenser = 'Dispenser',
      Patient = 'Patient',
   }
   export interface PositionInterface  {
      lat: number;
      lon: number;
      alt?: number;
   }
   
   export  class Position  implements PositionInterface {
      lat: number;
      lon: number;
      alt?: number;
      constructor(input : PositionInterface, setOptionalDefaults : boolean = false) {
         this.lat = input.lat;
         this.lon = input.lon;
         if (input.alt) {
            this.alt = input.alt;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.Position';
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
   export interface MedicationInterface  {
      id: string;
      code?: CodeableConcept;
      status: MedicationStatus;
      isBrand?: boolean;
      isOverTheCounter?: boolean;
      manufacturer?: string;
      form: CodeableConcept;
      ingredient: Ingredient[];
      brandName?: string;
      chemicalName?: string;
      strength?: string;
      isGeneric: boolean;
      isBiological: boolean;
      isService: boolean;
      isNarcotic: boolean;
      isHomeopathic: boolean;
      isDisinfectant: boolean;
      isPseudoDIN: boolean;
   }
   
   export  class Medication  implements MedicationInterface {
      id: string;
      code?: CodeableConcept;
      status: MedicationStatus;
      isBrand?: boolean;
      isOverTheCounter?: boolean;
      manufacturer?: string;
      form: CodeableConcept;
      ingredient: Ingredient[];
      brandName?: string;
      chemicalName?: string;
      strength?: string;
      isGeneric: boolean;
      isBiological: boolean;
      isService: boolean;
      isNarcotic: boolean;
      isHomeopathic: boolean;
      isDisinfectant: boolean;
      isPseudoDIN: boolean;
      constructor(input : MedicationInterface, setOptionalDefaults : boolean = false) {
         this.id = input.id;
         if (input.code) {
            this.code = input.code;
         }
         this.status = input.status;
         if (input.isBrand) {
            this.isBrand = input.isBrand;
         }
         if (input.isOverTheCounter) {
            this.isOverTheCounter = input.isOverTheCounter;
         }
         if (input.manufacturer) {
            this.manufacturer = input.manufacturer;
         }
         this.form = input.form;
         this.ingredient = input.ingredient;
         if (input.brandName) {
            this.brandName = input.brandName;
         }
         if (input.chemicalName) {
            this.chemicalName = input.chemicalName;
         }
         if (input.strength) {
            this.strength = input.strength;
         }
         this.isGeneric = input.isGeneric;
         this.isBiological = input.isBiological;
         this.isService = input.isService;
         this.isNarcotic = input.isNarcotic;
         this.isHomeopathic = input.isHomeopathic;
         this.isDisinfectant = input.isDisinfectant;
         this.isPseudoDIN = input.isPseudoDIN;
      }
      getResourceType() : string {
         return 'org.healthchain.Medication';
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
   export interface IngredientInterface  {
      substance: Substance;
      isActive?: boolean;
      amount?: Ratio;
   }
   
   export  class Ingredient  implements IngredientInterface {
      substance: Substance;
      isActive?: boolean;
      amount?: Ratio;
      constructor(input : IngredientInterface, setOptionalDefaults : boolean = false) {
         this.substance = input.substance;
         if (input.isActive) {
            this.isActive = input.isActive;
         }
         if (input.amount) {
            this.amount = input.amount;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.Ingredient';
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
   export interface SubstanceInterface  {
      identifier?: Identifier[];
      status?: MedicationStatus;
      category?: CodeableConcept;
      code?: CodeableConcept;
      form?: CodeableConcept;
      description?: string;
      instance?: SubstanceInstance[];
      ingredient?: Ingredient;
   }
   
   export  class Substance  implements SubstanceInterface {
      identifier?: Identifier[];
      status?: MedicationStatus;
      category?: CodeableConcept;
      code?: CodeableConcept;
      form?: CodeableConcept;
      description?: string;
      instance?: SubstanceInstance[];
      ingredient?: Ingredient;
      constructor(input : SubstanceInterface, setOptionalDefaults : boolean = false) {
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         if (input.status) {
            this.status = input.status;
         }
         if (input.category) {
            this.category = input.category;
         }
         if (input.code) {
            this.code = input.code;
         }
         if (input.form) {
            this.form = input.form;
         }
         if (input.description) {
            this.description = input.description;
         }
         if (input.instance) {
            this.instance = input.instance;
         }
         if (input.ingredient) {
            this.ingredient = input.ingredient;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.Substance';
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
   export interface SubstanceInstanceInterface  {
      identifier?: Identifier[];
      expiry?: Date;
      quantity?: Quantity;
   }
   
   export  class SubstanceInstance  implements SubstanceInstanceInterface {
      identifier?: Identifier[];
      expiry?: Date;
      quantity?: Quantity;
      constructor(input : SubstanceInstanceInterface, setOptionalDefaults : boolean = false) {
         if (input.identifier) {
            this.identifier = input.identifier;
         }
         if (input.expiry) {
            this.expiry = input.expiry;
         }
         if (input.quantity) {
            this.quantity = input.quantity;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.SubstanceInstance';
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
   export enum MedicationStatus {
      active = 'active',
      inactive = 'inactive',
   }
   export interface AssignPharmacyLocationInterface  extends TransactionInterface {
      medicationRequest: string;
      pharmacyLocation: string;
   }
   
   export  class AssignPharmacyLocation  extends Transaction implements AssignPharmacyLocationInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"String"}]
         };
      };
      medicationRequest: string;
      pharmacyLocation: string;
      constructor(input : AssignPharmacyLocationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
         this.pharmacyLocation = input.pharmacyLocation;
      }
      getResourceType() : string {
         return 'org.healthchain.AssignPharmacyLocation';
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
   export interface CancelMedicationRequestInterface  extends TransactionInterface {
      medicationRequest: string;
      statusReason?: CodeableConcept;
   }
   
   export  class CancelMedicationRequest  extends Transaction implements CancelMedicationRequestInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      medicationRequest: string;
      statusReason?: CodeableConcept;
      constructor(input : CancelMedicationRequestInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
         if (input.statusReason) {
            this.statusReason = input.statusReason;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.CancelMedicationRequest';
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
   export enum PrescribeStatus {
      draft = 'draft',
      active = 'active',
      duplicate = 'duplicate',
      completed = 'completed',
      cancelled = 'cancelled',
      stopped = 'stopped',
   }
   export enum DispenseStatus {
      preparation = 'preparation',
      in_progress = 'in_progress',
      on_hold = 'on_hold',
      completed = 'completed',
      entered_in_error = 'entered_in_error',
      stopped = 'stopped',
   }
   export enum DispenserType {
      pharmacist = 'pharmacist',
      other = 'other',
   }
   export enum PractionerStatus {
      active = 'active',
      suspended = 'suspended',
      expired = 'expired',
   }
   export enum PrescriberType {
      physician = 'physician',
      dentist = 'dentist',
      nurse = 'nurse',
      pharmacist = 'pharmacist',
      other = 'other',
   }
   export enum NoSubReason {
      CT = 'CT',
      FP = 'FP',
      OS = 'OS',
      RR = 'RR',
   }
   export interface IdentifierRelationshipInterface  extends AssetInterface {
      id: string;
      assigner: string;
      value: string;
      participant?: string;
      asset?: string;
   }
   
   export  class IdentifierRelationship  extends Asset implements IdentifierRelationshipInterface {
      id: string;
      assigner: string;
      value: string;
      participant?: string;
      asset?: string;
      constructor(input : IdentifierRelationshipInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.assigner = input.assigner;
         this.value = input.value;
         if (input.participant) {
            this.participant = input.participant;
         }
         if (input.asset) {
            this.asset = input.asset;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.IdentifierRelationship';
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
   export interface MigrateIdentifierRelationshipsInterface  extends TransactionInterface {
      limit?: number;
   }
   
   export  class MigrateIdentifierRelationships  extends Transaction implements MigrateIdentifierRelationshipsInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"Integer"}]
         };
      };
      limit: number = 1000;
      constructor(input : MigrateIdentifierRelationshipsInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.limit) {
            this.limit = input.limit;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.MigrateIdentifierRelationships';
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
   export interface TestEventInterface  extends TransactionInterface {
      socketId?: string;
      message?: string;
   }
   
   export  class TestEvent  extends Transaction implements TestEventInterface {
      socketId?: string;
      message?: string;
      constructor(input : TestEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.socketId) {
            this.socketId = input.socketId;
         }
         if (input.message) {
            this.message = input.message;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.TestEvent';
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
   export interface DebugIdentityInterface  extends TransactionInterface {
   }
   
   export  class DebugIdentity  extends Transaction implements DebugIdentityInterface {
      static decorators() {
         return {
            commit: [false]
         };
      };
      constructor(input : DebugIdentityInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.DebugIdentity';
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
   export interface QueryParameterInterface  {
      name: string;
      value: string;
   }
   
   export  class QueryParameter  implements QueryParameterInterface {
      name: string;
      value: string;
      constructor(input : QueryParameterInterface, setOptionalDefaults : boolean = false) {
         this.name = input.name;
         this.value = input.value;
      }
      getResourceType() : string {
         return 'org.healthchain.QueryParameter';
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
   export interface QueryMedicationRequestsInterface  extends TransactionInterface {
      params?: QueryParameter[];
   }
   
   export  class QueryMedicationRequests  extends Transaction implements QueryMedicationRequestsInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":true,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      params?: QueryParameter[];
      constructor(input : QueryMedicationRequestsInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.params) {
            this.params = input.params;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.QueryMedicationRequests';
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
   export interface QueryMedicationRequestsJsonInterface  extends TransactionInterface {
      params?: QueryParameter[];
      resolve?: string[];
      authToken?: string;
      baseUrl?: string;
   }
   
   export  class QueryMedicationRequestsJson  extends Transaction implements QueryMedicationRequestsJsonInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            headers: ["authToken","baseUrl"],
            json: [true]
         };
      };
      params?: QueryParameter[];
      resolve?: string[];
      authToken?: string;
      baseUrl?: string;
      constructor(input : QueryMedicationRequestsJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.params) {
            this.params = input.params;
         }
         if (input.resolve) {
            this.resolve = input.resolve;
         }
         if (input.authToken) {
            this.authToken = input.authToken;
         }
         if (input.baseUrl) {
            this.baseUrl = input.baseUrl;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.QueryMedicationRequestsJson';
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
   export interface IsMedicationRequestDispensedInterface  extends TransactionInterface {
      medicationRequest: string;
   }
   
   export  class IsMedicationRequestDispensed  extends Transaction implements IsMedicationRequestDispensedInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"Boolean"}]
         };
      };
      medicationRequest: string;
      constructor(input : IsMedicationRequestDispensedInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
      }
      getResourceType() : string {
         return 'org.healthchain.IsMedicationRequestDispensed';
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
   export interface GetMedicationByDINInterface  extends TransactionInterface {
      din: string;
      authToken: string;
      baseUrl: string;
   }
   
   export  class GetMedicationByDIN  extends Transaction implements GetMedicationByDINInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"Medication"}],
            headers: ["authToken","baseUrl"]
         };
      };
      din: string;
      authToken: string;
      baseUrl: string;
      constructor(input : GetMedicationByDINInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.din = input.din;
         this.authToken = input.authToken;
         this.baseUrl = input.baseUrl;
      }
      getResourceType() : string {
         return 'org.healthchain.GetMedicationByDIN';
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
   export interface CalculateMMEforMedicationInterface  extends TransactionInterface {
      medication: Medication;
   }
   
   export  class CalculateMMEforMedication  extends Transaction implements CalculateMMEforMedicationInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"Double"}]
         };
      };
      medication: Medication;
      constructor(input : CalculateMMEforMedicationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medication = input.medication;
      }
      getResourceType() : string {
         return 'org.healthchain.CalculateMMEforMedication';
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
   export interface CalculateMMEforMedicationRequestsInterface  extends TransactionInterface {
      medicationRequests: MedicationRequest[];
      authToken?: string;
      baseUrl?: string;
   }
   
   export  class CalculateMMEforMedicationRequests  extends Transaction implements CalculateMMEforMedicationRequestsInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"Double"}],
            headers: ["authToken","baseUrl"]
         };
      };
      medicationRequests: MedicationRequest[];
      authToken?: string;
      baseUrl?: string;
      constructor(input : CalculateMMEforMedicationRequestsInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequests = input.medicationRequests;
         if (input.authToken) {
            this.authToken = input.authToken;
         }
         if (input.baseUrl) {
            this.baseUrl = input.baseUrl;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.CalculateMMEforMedicationRequests';
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
   export interface CalculateMMEforPatientInterface  extends TransactionInterface {
      patient: string;
      authToken?: string;
      baseUrl?: string;
   }
   
   export  class CalculateMMEforPatient  extends Transaction implements CalculateMMEforPatientInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"Double"}],
            headers: ["authToken","baseUrl"]
         };
      };
      patient: string;
      authToken?: string;
      baseUrl?: string;
      constructor(input : CalculateMMEforPatientInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.patient = input.patient;
         if (input.authToken) {
            this.authToken = input.authToken;
         }
         if (input.baseUrl) {
            this.baseUrl = input.baseUrl;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.CalculateMMEforPatient';
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
   export interface GetMedicationRequestNotesInterface  extends TransactionInterface {
      medicationRequest: string;
   }
   
   export  class GetMedicationRequestNotes  extends Transaction implements GetMedicationRequestNotesInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":true,"type":"Identifier","name":"Annotation"}]
         };
      };
      medicationRequest: string;
      constructor(input : GetMedicationRequestNotesInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
      }
      getResourceType() : string {
         return 'org.healthchain.GetMedicationRequestNotes';
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
   export interface GetMedicationDispenseNotesInterface  extends TransactionInterface {
      medicationDispense: string;
   }
   
   export  class GetMedicationDispenseNotes  extends Transaction implements GetMedicationDispenseNotesInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":true,"type":"Identifier","name":"Annotation"}]
         };
      };
      medicationDispense: string;
      constructor(input : GetMedicationDispenseNotesInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationDispense = input.medicationDispense;
      }
      getResourceType() : string {
         return 'org.healthchain.GetMedicationDispenseNotes';
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
   export interface IsHealthChainAdminInterface  extends TransactionInterface {
      participant?: string;
   }
   
   export  class IsHealthChainAdmin  extends Transaction implements IsHealthChainAdminInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"Boolean"}]
         };
      };
      participant?: string;
      constructor(input : IsHealthChainAdminInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.participant) {
            this.participant = input.participant;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.IsHealthChainAdmin';
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
   export interface MigrateClinicVendorsInterface  extends TransactionInterface {
   }
   
   export  class MigrateClinicVendors  extends Transaction implements MigrateClinicVendorsInterface {
      static decorators() {
         return {
            returns: [{"array":true,"type":"Identifier","name":"String"}]
         };
      };
      constructor(input : MigrateClinicVendorsInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.MigrateClinicVendors';
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
