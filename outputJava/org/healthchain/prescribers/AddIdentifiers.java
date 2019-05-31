// this code is generated and should not be modified
package org.healthchain.prescribers;

import org.hyperledger.composer.system.*;
import org.hyperledger.composer.system.Event;
import org.hyperledger.composer.system.Transaction;
import org.hyperledger.composer.system.Participant;
import org.hyperledger.composer.system.Asset;
import org.healthchain.Prescriber;
import org.healthchain.PrescriberRelationship;
import org.healthchain.ClinicLocationRelationship;
import org.healthchain.ClinicLocation;
import org.healthchain.Sig;
import org.healthchain.RelationshipType;
import org.fhir.Identifier;
import org.fhir.ContactPoint;
import org.fhir.Address;
import org.fhir.HumanName;
import org.fhir.Gender;
public class AddIdentifiers extends Transaction {
   
   // the accessor for the identifying field
   public String getID() {
      return transactionId;
   }

   public Prescriber prescriber;
   public Identifier[] identifier;
}
