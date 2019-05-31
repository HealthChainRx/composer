import {Asset,AssetInterface,Participant,ParticipantInterface,Transaction,TransactionInterface,Event,EventInterface} from './org.hyperledger.composer.system';
import {DispenseRequest,Patient,Prescriber,PharmacyLocation,Annotation,MedicationRequest,AcknowledgementType,QueryParameter} from './org.healthchain';
import {Dosage,CodeableConcept,Identifier,Intent,Substitution} from './org.fhir';
// export namespace org.healthchain.medicationrequests{
   export interface Prescribe_MedicationRequestInterface  {
      id: string;
      dosageInstruction: Dosage[];
      dispenseRequest: DispenseRequest;
      patient: string;
      prescriber?: string;
      assignedPharmacy?: string;
      medicationCodeableConcept?: CodeableConcept;
      medication?: string;
      identifier?: Identifier[];
      intent?: Intent;
      note?: Annotation;
      substitution?: Substitution;
      reasonCode?: CodeableConcept[];
   }
   
   export  class Prescribe_MedicationRequest  implements Prescribe_MedicationRequestInterface {
      id: string;
      dosageInstruction: Dosage[];
      dispenseRequest: DispenseRequest;
      patient: string;
      prescriber?: string;
      assignedPharmacy?: string;
      medicationCodeableConcept?: CodeableConcept;
      medication?: string;
      identifier?: Identifier[];
      intent: Intent = Intent.proposal;
      note?: Annotation;
      substitution?: Substitution;
      reasonCode?: CodeableConcept[];
      constructor(input : Prescribe_MedicationRequestInterface, setOptionalDefaults : boolean = false) {
         this.id = input.id;
         this.dosageInstruction = input.dosageInstruction;
         this.dispenseRequest = input.dispenseRequest;
         this.patient = input.patient;
         if (input.prescriber) {
            this.prescriber = input.prescriber;
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
         if (input.intent) {
            this.intent = input.intent;
         }
         if (input.note) {
            this.note = input.note;
         }
         if (input.substitution) {
            this.substitution = input.substitution;
         }
         if (input.reasonCode) {
            this.reasonCode = input.reasonCode;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.Prescribe_MedicationRequest';
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
   export interface BaseEventInterface  extends EventInterface {
      id: string;
      clinicLocationId: string;
      pharmacyLocationId?: string;
      prescriberId?: string;
      groupIdentifierValue?: string;
   }
   
   export abstract  class BaseEvent  extends Event implements BaseEventInterface {
      id: string;
      clinicLocationId: string;
      pharmacyLocationId?: string;
      prescriberId?: string;
      groupIdentifierValue?: string;
      constructor(input : BaseEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.id = input.id;
         this.clinicLocationId = input.clinicLocationId;
         if (input.pharmacyLocationId) {
            this.pharmacyLocationId = input.pharmacyLocationId;
         }
         if (input.prescriberId) {
            this.prescriberId = input.prescriberId;
         }
         if (input.groupIdentifierValue) {
            this.groupIdentifierValue = input.groupIdentifierValue;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.BaseEvent';
      }
   }
   export interface CreateEventInterface  extends BaseEventInterface {
   }
   
   export  class CreateEvent  extends BaseEvent implements CreateEventInterface {
      constructor(input : CreateEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.CreateEvent';
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
   export interface ApproveEventInterface  extends BaseEventInterface {
   }
   
   export  class ApproveEvent  extends BaseEvent implements ApproveEventInterface {
      constructor(input : ApproveEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.ApproveEvent';
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
   export interface ApproveManyEventInterface  extends BaseEventInterface {
      medicationRequestIds: string[];
   }
   
   export  class ApproveManyEvent  extends BaseEvent implements ApproveManyEventInterface {
      medicationRequestIds: string[];
      constructor(input : ApproveManyEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequestIds = input.medicationRequestIds;
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.ApproveManyEvent';
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
   export interface StopEventInterface  extends BaseEventInterface {
   }
   
   export  class StopEvent  extends BaseEvent implements StopEventInterface {
      constructor(input : StopEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.StopEvent';
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
   export interface CancelEventInterface  extends BaseEventInterface {
   }
   
   export  class CancelEvent  extends BaseEvent implements CancelEventInterface {
      constructor(input : CancelEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.CancelEvent';
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
   export interface CompleteEventInterface  extends BaseEventInterface {
   }
   
   export  class CompleteEvent  extends BaseEvent implements CompleteEventInterface {
      constructor(input : CompleteEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.CompleteEvent';
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
   export interface AssignPharmacyLocationEventInterface  extends BaseEventInterface {
   }
   
   export  class AssignPharmacyLocationEvent  extends BaseEvent implements AssignPharmacyLocationEventInterface {
      constructor(input : AssignPharmacyLocationEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.AssignPharmacyLocationEvent';
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
   export interface NoteAddEventInterface  extends BaseEventInterface {
   }
   
   export  class NoteAddEvent  extends BaseEvent implements NoteAddEventInterface {
      constructor(input : NoteAddEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.NoteAddEvent';
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
   export interface RenewEventInterface  extends BaseEventInterface {
      priorPrescriptionId: string;
   }
   
   export  class RenewEvent  extends BaseEvent implements RenewEventInterface {
      priorPrescriptionId: string;
      constructor(input : RenewEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.priorPrescriptionId = input.priorPrescriptionId;
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.RenewEvent';
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
   export interface AcknowledgeEventInterface  extends BaseEventInterface {
      type: string;
   }
   
   export  class AcknowledgeEvent  extends BaseEvent implements AcknowledgeEventInterface {
      type: string;
      constructor(input : AcknowledgeEventInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.type = input.type;
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.AcknowledgeEvent';
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
   export interface PrescribeInterface  extends TransactionInterface {
      groupIdentifier?: Identifier;
      medicationRequests: Prescribe_MedicationRequest[];
   }
   
   export  class Prescribe  extends Transaction implements PrescribeInterface {
      static decorators() {
         return {
            returns: [{"array":true,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      groupIdentifier?: Identifier;
      medicationRequests: Prescribe_MedicationRequest[];
      constructor(input : PrescribeInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.groupIdentifier) {
            this.groupIdentifier = input.groupIdentifier;
         }
         this.medicationRequests = input.medicationRequests;
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.Prescribe';
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
   export interface RenewInterface  extends TransactionInterface {
      medicationRequest: string;
      note?: Annotation;
      medicationCodeableConcept?: CodeableConcept;
      medication?: string;
      identifier?: Identifier[];
      intent?: Intent;
      dosageInstruction?: Dosage[];
      dispenseRequest?: DispenseRequest;
   }
   
   export  class Renew  extends Transaction implements RenewInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      medicationRequest: string;
      note?: Annotation;
      medicationCodeableConcept?: CodeableConcept;
      medication?: string;
      identifier?: Identifier[];
      intent?: Intent;
      dosageInstruction?: Dosage[];
      dispenseRequest?: DispenseRequest;
      constructor(input : RenewInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
         if (input.note) {
            this.note = input.note;
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
         if (input.intent) {
            this.intent = input.intent;
         }
         if (input.dosageInstruction) {
            this.dosageInstruction = input.dosageInstruction;
         }
         if (input.dispenseRequest) {
            this.dispenseRequest = input.dispenseRequest;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.Renew';
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
   export interface ApproveInterface  extends TransactionInterface {
      medicationRequest: string;
      note?: Annotation;
      medicationCodeableConcept?: CodeableConcept;
      medication?: string;
      identifier?: Identifier[];
      intent?: Intent;
      dosageInstruction?: Dosage[];
      dispenseRequest?: DispenseRequest;
   }
   
   export  class Approve  extends Transaction implements ApproveInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      medicationRequest: string;
      note?: Annotation;
      medicationCodeableConcept?: CodeableConcept;
      medication?: string;
      identifier?: Identifier[];
      intent?: Intent;
      dosageInstruction?: Dosage[];
      dispenseRequest?: DispenseRequest;
      constructor(input : ApproveInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
         if (input.note) {
            this.note = input.note;
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
         if (input.intent) {
            this.intent = input.intent;
         }
         if (input.dosageInstruction) {
            this.dosageInstruction = input.dosageInstruction;
         }
         if (input.dispenseRequest) {
            this.dispenseRequest = input.dispenseRequest;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.Approve';
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
   export interface RejectInterface  extends TransactionInterface {
      medicationRequest: string;
      statusReason?: CodeableConcept;
   }
   
   export  class Reject  extends Transaction implements RejectInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      medicationRequest: string;
      statusReason?: CodeableConcept;
      constructor(input : RejectInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
         if (input.statusReason) {
            this.statusReason = input.statusReason;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.Reject';
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
   export interface CancelInterface  extends TransactionInterface {
      medicationRequest: string;
      statusReason?: CodeableConcept;
   }
   
   export  class Cancel  extends Transaction implements CancelInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      medicationRequest: string;
      statusReason?: CodeableConcept;
      constructor(input : CancelInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
         if (input.statusReason) {
            this.statusReason = input.statusReason;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.Cancel';
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
   export interface CompleteInterface  extends TransactionInterface {
      medicationRequest: string;
   }
   
   export  class Complete  extends Transaction implements CompleteInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      medicationRequest: string;
      constructor(input : CompleteInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.Complete';
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
   export interface AcknowledgeInterface  extends TransactionInterface {
      medicationRequest: string;
      type?: AcknowledgementType;
   }
   
   export  class Acknowledge  extends Transaction implements AcknowledgeInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      medicationRequest: string;
      type: AcknowledgementType = AcknowledgementType.MedicationRequestAdded;
      constructor(input : AcknowledgeInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
         if (input.type) {
            this.type = input.type;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.Acknowledge';
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
   export interface AssignPharmacyLocationInterface  extends TransactionInterface {
      medicationRequest: string;
      pharmacyLocation?: string;
   }
   
   export  class AssignPharmacyLocation  extends Transaction implements AssignPharmacyLocationInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      medicationRequest: string;
      pharmacyLocation?: string;
      constructor(input : AssignPharmacyLocationInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
         if (input.pharmacyLocation) {
            this.pharmacyLocation = input.pharmacyLocation;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.AssignPharmacyLocation';
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
   export interface AddNoteInterface  extends TransactionInterface {
      medicationRequest: string;
      note: Annotation;
   }
   
   export  class AddNote  extends Transaction implements AddNoteInterface {
      static decorators() {
         return {
            returns: [{"array":false,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      medicationRequest: string;
      note: Annotation;
      constructor(input : AddNoteInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
         this.note = input.note;
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.AddNote';
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
   export interface GetNotesInterface  extends TransactionInterface {
      medicationRequest: string;
   }
   
   export  class GetNotes  extends Transaction implements GetNotesInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":true,"type":"Identifier","name":"Annotation"}]
         };
      };
      medicationRequest: string;
      constructor(input : GetNotesInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.GetNotes';
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
      params?: QueryParameter[];
   }
   
   export  class Query  extends Transaction implements QueryInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":true,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      params?: QueryParameter[];
      constructor(input : QueryInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.params) {
            this.params = input.params;
         }
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.Query';
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
      params?: QueryParameter[];
      resolve?: string[];
      authToken?: string;
      baseUrl?: string;
   }
   
   export  class QueryJson  extends Transaction implements QueryJsonInterface {
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
      constructor(input : QueryJsonInterface, setOptionalDefaults : boolean = false) {
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
         return 'org.healthchain.medicationrequests.QueryJson';
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
      medicationRequest: string;
   }
   
   export  class Get  extends Transaction implements GetInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"MedicationRequest"}]
         };
      };
      medicationRequest: string;
      constructor(input : GetInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
      }
      getResourceType() : string {
         return 'org.healthchain.medicationrequests.Get';
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
      medicationRequest: string;
      resolve?: string[];
      authToken?: string;
      baseUrl?: string;
   }
   
   export  class GetJson  extends Transaction implements GetJsonInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            headers: ["authToken","baseUrl"],
            json: [true]
         };
      };
      medicationRequest: string;
      resolve?: string[];
      authToken?: string;
      baseUrl?: string;
      constructor(input : GetJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.medicationRequest = input.medicationRequest;
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
         return 'org.healthchain.medicationrequests.GetJson';
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
            returns: [{"array":false,"type":"Identifier","name":"MedicationRequest"}]
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
         return 'org.healthchain.medicationrequests.Fetch';
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
      authToken?: string;
      baseUrl?: string;
   }
   
   export  class FetchJson  extends Transaction implements FetchJsonInterface {
      static decorators() {
         return {
            commit: [false],
            returns: [{"array":false,"type":"Identifier","name":"String"}],
            headers: ["authToken","baseUrl"],
            json: [true]
         };
      };
      assigner: string;
      value: string;
      resolve?: string[];
      authToken?: string;
      baseUrl?: string;
      constructor(input : FetchJsonInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.assigner = input.assigner;
         this.value = input.value;
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
         return 'org.healthchain.medicationrequests.FetchJson';
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
