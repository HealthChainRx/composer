import {Asset,AssetInterface,Participant,ParticipantInterface,Transaction,TransactionInterface,Event,EventInterface} from './org.hyperledger.composer.system';
// export namespace org.healthchain.seed{
   export interface HealthChainInterface  extends TransactionInterface {
   }
   
   export  class HealthChain  extends Transaction implements HealthChainInterface {
      static decorators() {
         return {
            returns: [{"array":true,"type":"Identifier","name":"Participant"}]
         };
      };
      constructor(input : HealthChainInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.seed.HealthChain';
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
   export interface HealthChainTestingDataInterface  extends TransactionInterface {
   }
   
   export  class HealthChainTestingData  extends Transaction implements HealthChainTestingDataInterface {
      static decorators() {
         return {
            returns: [{"array":true,"type":"Identifier","name":"Participant"}]
         };
      };
      constructor(input : HealthChainTestingDataInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.seed.HealthChainTestingData';
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
   export interface CleanHealthChainTestingDataInterface  extends TransactionInterface {
   }
   
   export  class CleanHealthChainTestingData  extends Transaction implements CleanHealthChainTestingDataInterface {
      static decorators() {
         return {
            returns: [{"array":true,"type":"Identifier","name":"String"}]
         };
      };
      constructor(input : CleanHealthChainTestingDataInterface, setOptionalDefaults : boolean = false) {
         super(input, setOptionalDefaults);
      }
      getResourceType() : string {
         return 'org.healthchain.seed.CleanHealthChainTestingData';
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
