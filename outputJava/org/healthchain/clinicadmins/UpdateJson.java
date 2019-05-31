// this code is generated and should not be modified
package org.healthchain.clinicadmins;

import org.hyperledger.composer.system.*;
import org.hyperledger.composer.system.Event;
import org.hyperledger.composer.system.Transaction;
import org.hyperledger.composer.system.Participant;
import org.hyperledger.composer.system.Asset;
import org.healthchain.ClinicAdmin;
import org.healthchain.PrescriberRelationship;
import org.healthchain.ClinicLocationRelationship;
import org.healthchain.Sig;
import org.fhir.Identifier;
import org.fhir.ContactPoint;
import org.fhir.Address;
import org.fhir.HumanName;
import org.fhir.Gender;
public class UpdateJson extends Transaction {
   
   // the accessor for the identifying field
   public String getID() {
      return transactionId;
   }

   public ClinicAdmin clinicAdmin;
   public HumanName name;
   public Gender gender;
   public ContactPoint[] telecom;
   public java.util.Date birthDate;
   public Address[] address;
   public Sig[] favoriteSigs;
}
