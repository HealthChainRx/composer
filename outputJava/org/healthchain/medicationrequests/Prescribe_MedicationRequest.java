// this code is generated and should not be modified
package org.healthchain.medicationrequests;

import org.hyperledger.composer.system.*;
import org.hyperledger.composer.system.Event;
import org.hyperledger.composer.system.Transaction;
import org.hyperledger.composer.system.Participant;
import org.hyperledger.composer.system.Asset;
import org.healthchain.MedicationRequest;
import org.healthchain.Annotation;
import org.healthchain.AcknowledgementType;
import org.healthchain.Prescriber;
import org.healthchain.Patient;
import org.healthchain.PharmacyLocation;
import org.healthchain.PrescribeStatus;
import org.healthchain.QueryParameter;
import org.healthchain.DispenseRequest;
import org.fhir.CodeableConcept;
import org.fhir.Identifier;
import org.fhir.Intent;
import org.fhir.Dosage;
import org.fhir.Substitution;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"$class"})
public class Prescribe_MedicationRequest {
   public String id;
   public Dosage[] dosageInstruction;
   public DispenseRequest dispenseRequest;
   public Patient patient;
   public Prescriber prescriber;
   public PharmacyLocation assignedPharmacy;
   public CodeableConcept medicationCodeableConcept;
   public String medication;
   public Identifier[] identifier;
   public Intent intent;
   public Annotation note;
   public Substitution substitution;
   public CodeableConcept[] reasonCode;
}
