// this code is generated and should not be modified
package org.healthchain;

import org.hyperledger.composer.system.*;
import org.hyperledger.composer.system.Event;
import org.hyperledger.composer.system.Transaction;
import org.hyperledger.composer.system.Participant;
import org.hyperledger.composer.system.Asset;
import org.fhir.HumanName;
import org.fhir.Address;
import org.fhir.ContactPoint;
import org.fhir.Contact;
import org.fhir.Identifier;
import org.fhir.Dosage;
import org.fhir.Duration;
import org.fhir.Substitution;
import org.fhir.DispenseSubstitution;
import org.fhir.Quantity;
import org.fhir.Period;
import org.fhir.Ratio;
import org.fhir.AddressUse;
import org.fhir.Gender;
import org.fhir.CodeableConcept;
import org.fhir.Code;
import org.fhir.Coding;
import org.fhir.Intent;
import org.fhir.Country;
public class Patient extends Actor {
   
   // the accessor for the identifying field
   public String getID() {
      return id;
   }

   public int version;
   public String id;
   public Identifier[] identifier;
   public HumanName name;
   public Gender gender;
   public ContactPoint[] telecom;
   public java.util.Date birthDate;
   public boolean deceased;
   public java.util.Date deceasedDateTime;
   public Address[] address;
   public PrescriberRelationship[] prescribers;
   public ClinicLocationRelationship[] clinicLocations;
   public DispenserRelationship[] dispensers;
   public PharmacyLocationRelationship[] pharmacyLocations;
}