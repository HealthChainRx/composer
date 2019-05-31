import {Asset,AssetInterface,Participant,ParticipantInterface,Transaction,TransactionInterface,Event,EventInterface} from './org.hyperledger.composer.system';
// export namespace org.fhir{
   export interface NoteInterface  {
      text: string;
   }
   
   export  class Note  implements NoteInterface {
      text: string;
      constructor(input : NoteInterface, setOptionalDefaults : boolean = false) {
         this.text = input.text;
      }
      getResourceType() : string {
         return 'org.fhir.Note';
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
   export interface RatioInterface  {
      numerator: Quantity;
      denominator?: Quantity;
   }
   
   export  class Ratio  implements RatioInterface {
      numerator: Quantity;
      denominator?: Quantity;
      constructor(input : RatioInterface, setOptionalDefaults : boolean = false) {
         this.numerator = input.numerator;
         if (input.denominator) {
            this.denominator = input.denominator;
         }
      }
      getResourceType() : string {
         return 'org.fhir.Ratio';
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
   export enum Category {
      allergen = 'allergen',
      biological = 'biological',
      body = 'body',
      chemical = 'chemical',
      food = 'food',
      drug = 'drug',
      material = 'material',
   }
   export interface ContactPointInterface  {
      system: string;
      value: string;
      use?: string;
      rank?: number;
   }
   
   export  class ContactPoint  implements ContactPointInterface {
      system: string;
      value: string;
      use?: string;
      rank?: number;
      constructor(input : ContactPointInterface, setOptionalDefaults : boolean = false) {
         this.system = input.system;
         this.value = input.value;
         if (input.use) {
            this.use = input.use;
         }
         if (input.rank) {
            this.rank = input.rank;
         }
      }
      getResourceType() : string {
         return 'org.fhir.ContactPoint';
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
   export interface ContactInterface  {
      purpose?: string;
      name: HumanName;
      telecom: ContactPoint[];
      address: Address;
   }
   
   export  class Contact  implements ContactInterface {
      purpose?: string;
      name: HumanName;
      telecom: ContactPoint[];
      address: Address;
      constructor(input : ContactInterface, setOptionalDefaults : boolean = false) {
         if (input.purpose) {
            this.purpose = input.purpose;
         }
         this.name = input.name;
         this.telecom = input.telecom;
         this.address = input.address;
      }
      getResourceType() : string {
         return 'org.fhir.Contact';
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
   export interface IdentifierInterface  {
      use?: string;
      assigner: string;
      value: string;
      system?: string;
      type?: Code;
      period?: Period;
   }
   
   export  class Identifier  implements IdentifierInterface {
      use?: string = 'ref';
      assigner: string;
      value: string;
      system?: string;
      type?: Code;
      period?: Period;
      constructor(input : IdentifierInterface, setOptionalDefaults : boolean = false) {
         if (input.use) {
            this.use = input.use;
         } else if (!setOptionalDefaults) {
            delete this.use;
         }
         this.assigner = input.assigner;
         this.value = input.value;
         if (input.system) {
            this.system = input.system;
         }
         if (input.type) {
            this.type = input.type;
         }
         if (input.period) {
            this.period = input.period;
         }
      }
      getResourceType() : string {
         return 'org.fhir.Identifier';
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
   export interface HumanNameInterface  {
      use?: HumanNameUse;
      family: string;
      given: string[];
      prefix?: string[];
      suffix?: string[];
   }
   
   export  class HumanName  implements HumanNameInterface {
      use?: HumanNameUse;
      family: string;
      given: string[];
      prefix?: string[];
      suffix?: string[];
      constructor(input : HumanNameInterface, setOptionalDefaults : boolean = false) {
         if (input.use) {
            this.use = input.use;
         }
         this.family = input.family;
         this.given = input.given;
         if (input.prefix) {
            this.prefix = input.prefix;
         }
         if (input.suffix) {
            this.suffix = input.suffix;
         }
      }
      getResourceType() : string {
         return 'org.fhir.HumanName';
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
   export interface AddressInterface  {
      use?: AddressUse;
      type?: AddressType;
      line?: string[];
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
   }
   
   export  class Address  implements AddressInterface {
      use?: AddressUse;
      type?: AddressType;
      line?: string[];
      city?: string;
      district?: string;
      state?: string;
      postalCode?: string;
      country?: Country;
      constructor(input : AddressInterface, setOptionalDefaults : boolean = false) {
         if (input.use) {
            this.use = input.use;
         }
         if (input.type) {
            this.type = input.type;
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
      }
      getResourceType() : string {
         return 'org.fhir.Address';
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
   export enum AddressType {
      postal = 'postal',
      physical = 'physical',
      both = 'both',
   }
   export interface CodeInterface  {
      coding: Coding[];
   }
   
   export  class Code  implements CodeInterface {
      coding: Coding[];
      constructor(input : CodeInterface, setOptionalDefaults : boolean = false) {
         this.coding = input.coding;
      }
      getResourceType() : string {
         return 'org.fhir.Code';
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
   export interface CodingInterface  {
      system?: string;
      version?: string;
      code?: string;
      display: string;
      userSelected?: boolean;
   }
   
   export  class Coding  implements CodingInterface {
      system?: string;
      version?: string;
      code?: string;
      display: string;
      userSelected?: boolean;
      constructor(input : CodingInterface, setOptionalDefaults : boolean = false) {
         if (input.system) {
            this.system = input.system;
         }
         if (input.version) {
            this.version = input.version;
         }
         if (input.code) {
            this.code = input.code;
         }
         this.display = input.display;
         if (input.userSelected) {
            this.userSelected = input.userSelected;
         }
      }
      getResourceType() : string {
         return 'org.fhir.Coding';
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
   export interface DosageInterface  {
      sequence?: number;
      text: string;
      additionalInstruction?: CodeableConcept[];
      patientInstruction?: string;
      timing?: Timing;
      asNeededBoolean?: boolean;
      asNeededCodeableConcept?: CodeableConcept;
      site?: CodeableConcept;
      route?: CodeableConcept;
      method?: CodeableConcept;
      doseRange?: Range;
      doseQuantity?: Quantity;
      maxDosePerPeriod?: Ratio;
      maxDosePerAdministration?: Quantity;
      maxDosePerLifetime?: Quantity;
      rateRatio?: Ratio;
      rateRange?: Range;
      rateQuantity?: Quantity;
   }
   
   export  class Dosage  implements DosageInterface {
      sequence?: number;
      text: string;
      additionalInstruction?: CodeableConcept[];
      patientInstruction?: string;
      timing?: Timing;
      asNeededBoolean: boolean = false;
      asNeededCodeableConcept?: CodeableConcept;
      site?: CodeableConcept;
      route?: CodeableConcept;
      method?: CodeableConcept;
      doseRange?: Range;
      doseQuantity?: Quantity;
      maxDosePerPeriod?: Ratio;
      maxDosePerAdministration?: Quantity;
      maxDosePerLifetime?: Quantity;
      rateRatio?: Ratio;
      rateRange?: Range;
      rateQuantity?: Quantity;
      constructor(input : DosageInterface, setOptionalDefaults : boolean = false) {
         if (input.sequence) {
            this.sequence = input.sequence;
         }
         this.text = input.text;
         if (input.additionalInstruction) {
            this.additionalInstruction = input.additionalInstruction;
         }
         if (input.patientInstruction) {
            this.patientInstruction = input.patientInstruction;
         }
         if (input.timing) {
            this.timing = input.timing;
         }
         if (input.asNeededBoolean) {
            this.asNeededBoolean = input.asNeededBoolean;
         }
         if (input.asNeededCodeableConcept) {
            this.asNeededCodeableConcept = input.asNeededCodeableConcept;
         }
         if (input.site) {
            this.site = input.site;
         }
         if (input.route) {
            this.route = input.route;
         }
         if (input.method) {
            this.method = input.method;
         }
         if (input.doseRange) {
            this.doseRange = input.doseRange;
         }
         if (input.doseQuantity) {
            this.doseQuantity = input.doseQuantity;
         }
         if (input.maxDosePerPeriod) {
            this.maxDosePerPeriod = input.maxDosePerPeriod;
         }
         if (input.maxDosePerAdministration) {
            this.maxDosePerAdministration = input.maxDosePerAdministration;
         }
         if (input.maxDosePerLifetime) {
            this.maxDosePerLifetime = input.maxDosePerLifetime;
         }
         if (input.rateRatio) {
            this.rateRatio = input.rateRatio;
         }
         if (input.rateRange) {
            this.rateRange = input.rateRange;
         }
         if (input.rateQuantity) {
            this.rateQuantity = input.rateQuantity;
         }
      }
      getResourceType() : string {
         return 'org.fhir.Dosage';
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
   export interface CodeableConceptInterface  {
      coding?: Coding[];
      text?: string;
   }
   
   export  class CodeableConcept  implements CodeableConceptInterface {
      coding?: Coding[];
      text?: string;
      constructor(input : CodeableConceptInterface, setOptionalDefaults : boolean = false) {
         if (input.coding) {
            this.coding = input.coding;
         }
         if (input.text) {
            this.text = input.text;
         }
      }
      getResourceType() : string {
         return 'org.fhir.CodeableConcept';
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
   export interface TimingInterface  {
      eventDate?: Date[];
      repeat?: Repeat;
      code?: CodeableConcept;
   }
   
   export  class Timing  implements TimingInterface {
      eventDate?: Date[];
      repeat?: Repeat;
      code?: CodeableConcept;
      constructor(input : TimingInterface, setOptionalDefaults : boolean = false) {
         if (input.eventDate) {
            this.eventDate = input.eventDate;
         }
         if (input.repeat) {
            this.repeat = input.repeat;
         }
         if (input.code) {
            this.code = input.code;
         }
      }
      getResourceType() : string {
         return 'org.fhir.Timing';
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
   export interface RepeatInterface  {
      boundsDuration?: Duration;
      boundsRange?: Range;
      boundsPeriod?: Period;
      count?: number;
      countMax?: number;
      duration?: number;
      durationMax?: number;
      durationUnit?: string;
      frequency?: number;
      frequencyMax?: number;
      period?: number;
      periodMax?: number;
      periodUnit?: string;
      dayOfWeek?: DayOfWeek[];
      timeOfDay?: string;
      when?: string[];
      offset?: number;
   }
   
   export  class Repeat  implements RepeatInterface {
      boundsDuration?: Duration;
      boundsRange?: Range;
      boundsPeriod?: Period;
      count?: number;
      countMax?: number;
      duration?: number;
      durationMax?: number;
      durationUnit?: string;
      frequency?: number;
      frequencyMax?: number;
      period?: number;
      periodMax?: number;
      periodUnit?: string;
      dayOfWeek?: DayOfWeek[];
      timeOfDay?: string;
      when?: string[];
      offset?: number;
      constructor(input : RepeatInterface, setOptionalDefaults : boolean = false) {
         if (input.boundsDuration) {
            this.boundsDuration = input.boundsDuration;
         }
         if (input.boundsRange) {
            this.boundsRange = input.boundsRange;
         }
         if (input.boundsPeriod) {
            this.boundsPeriod = input.boundsPeriod;
         }
         if (input.count) {
            this.count = input.count;
         }
         if (input.countMax) {
            this.countMax = input.countMax;
         }
         if (input.duration) {
            this.duration = input.duration;
         }
         if (input.durationMax) {
            this.durationMax = input.durationMax;
         }
         if (input.durationUnit) {
            this.durationUnit = input.durationUnit;
         }
         if (input.frequency) {
            this.frequency = input.frequency;
         }
         if (input.frequencyMax) {
            this.frequencyMax = input.frequencyMax;
         }
         if (input.period) {
            this.period = input.period;
         }
         if (input.periodMax) {
            this.periodMax = input.periodMax;
         }
         if (input.periodUnit) {
            this.periodUnit = input.periodUnit;
         }
         if (input.dayOfWeek) {
            this.dayOfWeek = input.dayOfWeek;
         }
         if (input.timeOfDay) {
            this.timeOfDay = input.timeOfDay;
         }
         if (input.when) {
            this.when = input.when;
         }
         if (input.offset) {
            this.offset = input.offset;
         }
      }
      getResourceType() : string {
         return 'org.fhir.Repeat';
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
   export enum DayOfWeek {
      sun = 'sun',
      mon = 'mon',
      tue = 'tue',
      wed = 'wed',
      thu = 'thu',
      fri = 'fri',
      sat = 'sat',
   }
   export interface RangeInterface  {
      low: Quantity;
      high: Quantity;
   }
   
   export  class Range  implements RangeInterface {
      low: Quantity;
      high: Quantity;
      constructor(input : RangeInterface, setOptionalDefaults : boolean = false) {
         this.low = input.low;
         this.high = input.high;
      }
      getResourceType() : string {
         return 'org.fhir.Range';
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
   export interface DispenseRequestInterface  {
      validityPeriod?: Period;
      numberOfRepeatsAllowed: number;
      quantity?: Quantity;
      expectedSupplyDuration?: Duration;
   }
   
   export  class DispenseRequest  implements DispenseRequestInterface {
      validityPeriod?: Period;
      numberOfRepeatsAllowed: number;
      quantity?: Quantity;
      expectedSupplyDuration?: Duration;
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
      }
      getResourceType() : string {
         return 'org.fhir.DispenseRequest';
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
   export interface PeriodInterface  {
      start: Date;
      end?: Date;
   }
   
   export  class Period  implements PeriodInterface {
      start: Date;
      end?: Date;
      constructor(input : PeriodInterface, setOptionalDefaults : boolean = false) {
         this.start = input.start;
         if (input.end) {
            this.end = input.end;
         }
      }
      getResourceType() : string {
         return 'org.fhir.Period';
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
   export interface QuantityInterface  {
      value: number;
      comparator?: Coding;
      unit?: string;
      system?: string;
      code?: string;
   }
   
   export  class Quantity  implements QuantityInterface {
      value: number;
      comparator?: Coding;
      unit?: string;
      system?: string;
      code?: string;
      constructor(input : QuantityInterface, setOptionalDefaults : boolean = false) {
         this.value = input.value;
         if (input.comparator) {
            this.comparator = input.comparator;
         }
         if (input.unit) {
            this.unit = input.unit;
         }
         if (input.system) {
            this.system = input.system;
         }
         if (input.code) {
            this.code = input.code;
         }
      }
      getResourceType() : string {
         return 'org.fhir.Quantity';
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
   export interface DurationInterface  {
      value: number;
      unit?: string;
      system?: string;
      code?: string;
   }
   
   export  class Duration  implements DurationInterface {
      value: number;
      unit?: string;
      system?: string;
      code?: string;
      constructor(input : DurationInterface, setOptionalDefaults : boolean = false) {
         this.value = input.value;
         if (input.unit) {
            this.unit = input.unit;
         }
         if (input.system) {
            this.system = input.system;
         }
         if (input.code) {
            this.code = input.code;
         }
      }
      getResourceType() : string {
         return 'org.fhir.Duration';
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
   export interface SubstitutionInterface  {
      allowed: boolean;
      reason?: CodeableConcept;
   }
   
   export  class Substitution  implements SubstitutionInterface {
      allowed: boolean;
      reason?: CodeableConcept;
      constructor(input : SubstitutionInterface, setOptionalDefaults : boolean = false) {
         this.allowed = input.allowed;
         if (input.reason) {
            this.reason = input.reason;
         }
      }
      getResourceType() : string {
         return 'org.fhir.Substitution';
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
   export interface DispenseSubstitutionInterface  {
      wasSubstituted: boolean;
      reason?: CodeableConcept;
   }
   
   export  class DispenseSubstitution  implements DispenseSubstitutionInterface {
      wasSubstituted: boolean;
      reason?: CodeableConcept;
      constructor(input : DispenseSubstitutionInterface, setOptionalDefaults : boolean = false) {
         this.wasSubstituted = input.wasSubstituted;
         if (input.reason) {
            this.reason = input.reason;
         }
      }
      getResourceType() : string {
         return 'org.fhir.DispenseSubstitution';
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
   export enum AddressUse {
      home = 'home',
      business = 'business',
      work = 'work',
      temp = 'temp',
      old = 'old',
   }
   export enum HumanNameUse {
      usual = 'usual',
      official = 'official',
      temp = 'temp',
      nickname = 'nickname',
      old = 'old',
      maiden = 'maiden',
   }
   export enum Gender {
      male = 'male',
      female = 'female',
      other = 'other',
      unknown = 'unknown',
   }
   export enum Intent {
      proposal = 'proposal',
      plan = 'plan',
      order = 'order',
      instance = 'instance',
   }
   export enum Country {
      CA = 'CA',
      US = 'US',
   }
// }
