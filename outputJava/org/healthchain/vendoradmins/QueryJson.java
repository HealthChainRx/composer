// this code is generated and should not be modified
package org.healthchain.vendoradmins;

import org.hyperledger.composer.system.*;
import org.hyperledger.composer.system.Event;
import org.hyperledger.composer.system.Transaction;
import org.hyperledger.composer.system.Participant;
import org.hyperledger.composer.system.Asset;
import org.healthchain.Application;
import org.healthchain.Vendor;
import org.healthchain.VendorAdmin;
import org.healthchain.VendorRelationship;
import org.healthchain.ApplicationRelationship;
import org.healthchain.RelationshipType;
import org.fhir.Identifier;
import org.fhir.ContactPoint;
import org.fhir.Address;
import org.fhir.HumanName;
import org.fhir.Gender;
public class QueryJson extends Transaction {
   
   // the accessor for the identifying field
   public String getID() {
      return transactionId;
   }

   public String name;
   public Gender gender;
   public Vendor vendor;
   public Application application;
   public String[] resolve;
}