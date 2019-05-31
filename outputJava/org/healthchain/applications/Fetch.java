// this code is generated and should not be modified
package org.healthchain.applications;

import org.hyperledger.composer.system.*;
import org.hyperledger.composer.system.Event;
import org.hyperledger.composer.system.Transaction;
import org.hyperledger.composer.system.Participant;
import org.hyperledger.composer.system.Asset;
import org.healthchain.Application;
import org.healthchain.Vendor;
import org.healthchain.ClinicLocation;
import org.healthchain.PharmacyLocation;
import org.healthchain.ApplicationStatus;
import org.healthchain.Annotation;
import org.fhir.Identifier;
public class Fetch extends Transaction {
   
   // the accessor for the identifying field
   public String getID() {
      return transactionId;
   }

   public ApplicationType applicationType;
   public String assigner;
   public String value;
}
