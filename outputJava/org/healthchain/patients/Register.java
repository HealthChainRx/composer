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
public class Register extends Transaction {
   
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
   public boolean deceased;
   public java.util.Date deceasedDateTime;
   public Address[] address;
   public PrescriberRelationship[] prescribers;
   public ClinicLocationRelationship[] clinicLocations;
   public DispenserRelationship[] dispensers;
   public PharmacyLocationRelationship[] pharmacyLocations;
}
