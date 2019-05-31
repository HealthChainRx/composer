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
public class RegisterJson extends Transaction {
   
   // the accessor for the identifying field
   public String getID() {
      return transactionId;
   }

   public String id;
   public HumanName name;
   public Gender gender;
   public java.util.Date birthDate;
   public Identifier[] identifier;
   public ContactPoint[] telecom;
   public Address[] address;
   public ClinicLocationRelationship[] clinicLocations;
   public Sig[] favoriteSigs;
}
