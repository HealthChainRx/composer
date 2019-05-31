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
public class MedicationRequest extends Asset {
   
   // the accessor for the identifying field
   public String getID() {
      return id;
   }

   public int version;
   public String id;
   public Prescriber prescriber;
   public ClinicLocation onBehalfOf;
   public Patient patient;
   public Practitioner recorder;
   public PharmacyLocation assignedPharmacy;
   public CodeableConcept medicationCodeableConcept;
   public String medication;
   public Identifier[] identifier;
   public Identifier groupIdentifier;
   public PrescribeStatus status;
   public Intent intent;
   public CodeableConcept[] reasonCode;
   public Annotation[] note;
   public Dosage[] dosageInstruction;
   public DispenseRequest dispenseRequest;
   public Substitution substitution;
   public MedicationDispense[] medicationDispenses;
   public MedicationRequest priorPrescription;
   public java.util.Date authoredOn;
   public Acknowledgement[] acknowledgements;
   public CodeableConcept statusReason;
}
