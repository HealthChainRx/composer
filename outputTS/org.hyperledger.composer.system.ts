// export namespace org.hyperledger.composer.system{
   export interface AssetInterface  {
   }
   
   export abstract  class Asset  implements AssetInterface {
      static decorators() {
         return {
            docs: ["asset.md"]
         };
      };
      constructor(input : AssetInterface, setOptionalDefaults : boolean = false) {
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.Asset';
      }
   }
   export interface ParticipantInterface  {
   }
   
   export abstract  class Participant  implements ParticipantInterface {
      static decorators() {
         return {
            docs: ["participant.md"]
         };
      };
      constructor(input : ParticipantInterface, setOptionalDefaults : boolean = false) {
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.Participant';
      }
   }
   export interface TransactionInterface  {
      transactionId: string;
      timestamp: Date;
   }
   
   export abstract  class Transaction  implements TransactionInterface {
      static decorators() {
         return {
            docs: ["transaction.md"]
         };
      };
      transactionId: string;
      timestamp: Date;
      constructor(input : TransactionInterface, setOptionalDefaults : boolean = false) {
         this.transactionId = input.transactionId;
         this.timestamp = input.timestamp;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.Transaction';
      }
   }
   export interface EventInterface  {
      eventId: string;
      timestamp: Date;
   }
   
   export abstract  class Event  implements EventInterface {
      static decorators() {
         return {
            docs: ["event.md"]
         };
      };
      eventId: string;
      timestamp: Date;
      constructor(input : EventInterface, setOptionalDefaults : boolean = false) {
         this.eventId = input.eventId;
         this.timestamp = input.timestamp;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.Event';
      }
   }
   export interface RegistryInterface  extends AssetInterface {
      registryId: string;
      name: string;
      type: string;
      system: boolean;
   }
   
   export abstract  class Registry  extends Asset implements RegistryInterface {
      static decorators() {
         return {
            docs: ["registry.md"]
         };
      };
      registryId: string;
      name: string;
      type: string;
      system: boolean;
      constructor(input : RegistryInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.registryId = input.registryId;
         this.name = input.name;
         this.type = input.type;
         this.system = input.system;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.Registry';
      }
   }
   export interface AssetRegistryInterface  extends RegistryInterface {
   }
   
   export  class AssetRegistry  extends Registry implements AssetRegistryInterface {
      static decorators() {
         return {
            docs: ["assetRegistry.md"]
         };
      };
      constructor(input : AssetRegistryInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.AssetRegistry';
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
   export interface ParticipantRegistryInterface  extends RegistryInterface {
   }
   
   export  class ParticipantRegistry  extends Registry implements ParticipantRegistryInterface {
      static decorators() {
         return {
            docs: ["participantRegistry.md"]
         };
      };
      constructor(input : ParticipantRegistryInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.ParticipantRegistry';
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
   export interface TransactionRegistryInterface  extends RegistryInterface {
   }
   
   export  class TransactionRegistry  extends Registry implements TransactionRegistryInterface {
      static decorators() {
         return {
            docs: ["transactionRegistry.md"]
         };
      };
      constructor(input : TransactionRegistryInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.TransactionRegistry';
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
   export interface NetworkInterface  extends AssetInterface {
      networkId: string;
      runtimeVersion: string;
   }
   
   export  class Network  extends Asset implements NetworkInterface {
      static decorators() {
         return {
            docs: ["network.md"]
         };
      };
      networkId: string;
      runtimeVersion: string;
      constructor(input : NetworkInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.networkId = input.networkId;
         this.runtimeVersion = input.runtimeVersion;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.Network';
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
   export interface NetworkAdminInterface  extends ParticipantInterface {
      participantId: string;
   }
   
   export  class NetworkAdmin  extends Participant implements NetworkAdminInterface {
      static decorators() {
         return {
            docs: ["networkAdmin.md"]
         };
      };
      participantId: string;
      constructor(input : NetworkAdminInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.participantId = input.participantId;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.NetworkAdmin';
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
   export interface HistorianRecordInterface  extends AssetInterface {
      transactionId: string;
      transactionType: string;
      transactionInvoked: string;
      participantInvoking?: string;
      identityUsed?: string;
      eventsEmitted?: Event[];
      transactionTimestamp: Date;
   }
   
   export  class HistorianRecord  extends Asset implements HistorianRecordInterface {
      static decorators() {
         return {
            docs: ["historian.md"],
            docsuri: ["Composer Documentation","../business-network/historian"]
         };
      };
      transactionId: string;
      transactionType: string;
      transactionInvoked: string;
      participantInvoking?: string;
      identityUsed?: string;
      eventsEmitted?: Event[];
      transactionTimestamp: Date;
      constructor(input : HistorianRecordInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.transactionId = input.transactionId;
         this.transactionType = input.transactionType;
         this.transactionInvoked = input.transactionInvoked;
         if (input.participantInvoking) {
            this.participantInvoking = input.participantInvoking;
         }
         if (input.identityUsed) {
            this.identityUsed = input.identityUsed;
         }
         if (input.eventsEmitted) {
            this.eventsEmitted = input.eventsEmitted;
         }
         this.transactionTimestamp = input.transactionTimestamp;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.HistorianRecord';
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
   export interface RegistryTransactionInterface  extends TransactionInterface {
      targetRegistry: string;
   }
   
   export abstract  class RegistryTransaction  extends Transaction implements RegistryTransactionInterface {
      static decorators() {
         return {
            docs: ["registryTransaction.md"]
         };
      };
      targetRegistry: string;
      constructor(input : RegistryTransactionInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.targetRegistry = input.targetRegistry;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.RegistryTransaction';
      }
   }
   export interface AssetTransactionInterface  extends RegistryTransactionInterface {
      resources: Asset[];
   }
   
   export abstract  class AssetTransaction  extends RegistryTransaction implements AssetTransactionInterface {
      static decorators() {
         return {
            docs: ["assetTransaction.md"]
         };
      };
      resources: Asset[];
      constructor(input : AssetTransactionInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.resources = input.resources;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.AssetTransaction';
      }
   }
   export interface ParticipantTransactionInterface  extends RegistryTransactionInterface {
      resources: Participant[];
   }
   
   export abstract  class ParticipantTransaction  extends RegistryTransaction implements ParticipantTransactionInterface {
      static decorators() {
         return {
            docs: ["participantTransaction.md"]
         };
      };
      resources: Participant[];
      constructor(input : ParticipantTransactionInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.resources = input.resources;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.ParticipantTransaction';
      }
   }
   export interface AddAssetInterface  extends AssetTransactionInterface {
   }
   
   export  class AddAsset  extends AssetTransaction implements AddAssetInterface {
      constructor(input : AddAssetInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.AddAsset';
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
   export interface UpdateAssetInterface  extends AssetTransactionInterface {
   }
   
   export  class UpdateAsset  extends AssetTransaction implements UpdateAssetInterface {
      constructor(input : UpdateAssetInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.UpdateAsset';
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
   export interface RemoveAssetInterface  extends AssetTransactionInterface {
      resourceIds: string[];
   }
   
   export  class RemoveAsset  extends AssetTransaction implements RemoveAssetInterface {
      resourceIds: string[];
      constructor(input : RemoveAssetInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.resourceIds = input.resourceIds;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.RemoveAsset';
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
   export interface AddParticipantInterface  extends ParticipantTransactionInterface {
   }
   
   export  class AddParticipant  extends ParticipantTransaction implements AddParticipantInterface {
      constructor(input : AddParticipantInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.AddParticipant';
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
   export interface UpdateParticipantInterface  extends ParticipantTransactionInterface {
   }
   
   export  class UpdateParticipant  extends ParticipantTransaction implements UpdateParticipantInterface {
      constructor(input : UpdateParticipantInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.UpdateParticipant';
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
   export interface RemoveParticipantInterface  extends ParticipantTransactionInterface {
      resourceIds: string[];
   }
   
   export  class RemoveParticipant  extends ParticipantTransaction implements RemoveParticipantInterface {
      resourceIds: string[];
      constructor(input : RemoveParticipantInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.resourceIds = input.resourceIds;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.RemoveParticipant';
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
   export enum IdentityState {
      ISSUED = 'ISSUED',
      BOUND = 'BOUND',
      ACTIVATED = 'ACTIVATED',
      REVOKED = 'REVOKED',
   }
   export interface IdentityInterface  extends AssetInterface {
      identityId: string;
      name: string;
      issuer: string;
      certificate: string;
      state: IdentityState;
      participant: string;
   }
   
   export  class Identity  extends Asset implements IdentityInterface {
      static decorators() {
         return {
            docs: ["identity.md"]
         };
      };
      identityId: string;
      name: string;
      issuer: string;
      certificate: string;
      state: IdentityState;
      participant: string;
      constructor(input : IdentityInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.identityId = input.identityId;
         this.name = input.name;
         this.issuer = input.issuer;
         this.certificate = input.certificate;
         this.state = input.state;
         this.participant = input.participant;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.Identity';
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
   export interface IssueIdentityInterface  extends TransactionInterface {
      participant: string;
      identityName: string;
   }
   
   export  class IssueIdentity  extends Transaction implements IssueIdentityInterface {
      static decorators() {
         return {
            docs: ["issueIdentity.md"]
         };
      };
      participant: string;
      identityName: string;
      constructor(input : IssueIdentityInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.participant = input.participant;
         this.identityName = input.identityName;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.IssueIdentity';
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
   export interface BindIdentityInterface  extends TransactionInterface {
      participant: string;
      certificate: string;
   }
   
   export  class BindIdentity  extends Transaction implements BindIdentityInterface {
      static decorators() {
         return {
            docs: ["bindIdentity.md"]
         };
      };
      participant: string;
      certificate: string;
      constructor(input : BindIdentityInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.participant = input.participant;
         this.certificate = input.certificate;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.BindIdentity';
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
   export interface ActivateCurrentIdentityInterface  extends TransactionInterface {
   }
   
   export  class ActivateCurrentIdentity  extends Transaction implements ActivateCurrentIdentityInterface {
      static decorators() {
         return {
            docs: ["activateIdentity.md"]
         };
      };
      constructor(input : ActivateCurrentIdentityInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.ActivateCurrentIdentity';
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
   export interface RevokeIdentityInterface  extends TransactionInterface {
      identity: string;
   }
   
   export  class RevokeIdentity  extends Transaction implements RevokeIdentityInterface {
      static decorators() {
         return {
            docs: ["revokeIdentity.md"]
         };
      };
      identity: string;
      constructor(input : RevokeIdentityInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.identity = input.identity;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.RevokeIdentity';
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
   export interface StartBusinessNetworkInterface  extends TransactionInterface {
      logLevel?: string;
      bootstrapTransactions?: Transaction[];
   }
   
   export  class StartBusinessNetwork  extends Transaction implements StartBusinessNetworkInterface {
      static decorators() {
         return {
            docs: ["startBusinessNetwork.md"]
         };
      };
      logLevel?: string;
      bootstrapTransactions?: Transaction[];
      constructor(input : StartBusinessNetworkInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         if (input.logLevel) {
            this.logLevel = input.logLevel;
         }
         if (input.bootstrapTransactions) {
            this.bootstrapTransactions = input.bootstrapTransactions;
         }
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.StartBusinessNetwork';
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
   export interface ResetBusinessNetworkInterface  extends TransactionInterface {
   }
   
   export  class ResetBusinessNetwork  extends Transaction implements ResetBusinessNetworkInterface {
      static decorators() {
         return {
            docs: ["resetBusinessNetwork.md"]
         };
      };
      constructor(input : ResetBusinessNetworkInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.ResetBusinessNetwork';
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
   export interface SetLogLevelInterface  extends TransactionInterface {
      newLogLevel: string;
   }
   
   export  class SetLogLevel  extends Transaction implements SetLogLevelInterface {
      static decorators() {
         return {
            docs: ["setLogLevel.md"]
         };
      };
      newLogLevel: string;
      constructor(input : SetLogLevelInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
         this.newLogLevel = input.newLogLevel;
      }
      getResourceType() : string {
         return 'org.hyperledger.composer.system.SetLogLevel';
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
