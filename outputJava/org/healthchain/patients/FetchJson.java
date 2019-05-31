// this code is generated and should not be modified
package org.healthchain.patients;

import org.hyperledger.composer.system.*;
import org.hyperledger.composer.system.Event;
import org.hyperledger.composer.system.Transaction;
import org.hyperledger.composer.system.Participant;
import org.hyperledger.composer.system.Asset;
import org.healthchain.Patient;
import org.healthchain.Prescriber;
import org.healthchain.PharmacyLocation;
import org.healthchain.PrescriberRelationship;
import org.healthchain.ClinicLocationRelationship;
import org.healthchain.DispenserRelationship;
import org.healthchain.PharmacyLocationRelationship;
import org.fhir.Identifier;
import org.fhir.ContactPoint;
import org.fhir.Address;
import org.fhir.HumanName;
import org.fhir.Gender;
public class FetchJson extends Transaction {
   
   // the accessor for the identifying field
   public String getID() {
      return transactionId;
   }

   public String assigner;
   public String value;
   public String[] resolve;
}
