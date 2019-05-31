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
public class MedicationDispense extends Asset {
   
   // the accessor for the identifying field
   public String getID() {
      return id;
   }

   public int version;
   public String id;
   public MedicationRequest medicationRequest;
   public Dispenser dispenser;
   public Patient patient;
   public PharmacyLocation pharmacyLocation;
   public Identifier[] identifier;
   public DispenseStatus status;
   public CodeableConcept category;
   public CodeableConcept medicationCodeableConcept;
   public String medication;
   public CodeableConcept dispenseType;
   public Quantity quantity;
   public Quantity daysSupply;
   public java.util.Date whenPrepared;
   public java.util.Date whenHandedOver;
   public Receiver receiver;
   public Annotation[] note;
   public Dosage[] dosageInstruction;
   public DispenseSubstitution substitution;
   public CodeableConcept cancelReason;
}
