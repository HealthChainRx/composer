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
public class Register extends Transaction {
   
   // the accessor for the identifying field
   public String getID() {
      return transactionId;
   }

   public String id;
   public String name;
   public ApplicationType applicationType;
   public String description;
   public ApplicationStatus status;
   public Identifier[] identifier;
   public Annotation[] note;
   public Vendor owner;
   public ClinicLocation clinicLocation;
   public PharmacyLocation pharmacyLocation;
}
