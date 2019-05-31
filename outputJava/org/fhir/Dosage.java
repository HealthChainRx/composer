// this code is generated and should not be modified
package org.fhir;

import org.hyperledger.composer.system.*;
import org.hyperledger.composer.system.Event;
import org.hyperledger.composer.system.Transaction;
import org.hyperledger.composer.system.Participant;
import org.hyperledger.composer.system.Asset;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"$class"})
public class Dosage {
   public int sequence;
   public String text;
   public CodeableConcept[] additionalInstruction;
   public String patientInstruction;
   public Timing timing;
   public boolean asNeededBoolean;
   public CodeableConcept asNeededCodeableConcept;
   public CodeableConcept site;
   public CodeableConcept route;
   public CodeableConcept method;
   public Range doseRange;
   public Quantity doseQuantity;
   public Ratio maxDosePerPeriod;
   public Quantity maxDosePerAdministration;
   public Quantity maxDosePerLifetime;
   public Ratio rateRatio;
   public Range rateRange;
   public Quantity rateQuantity;
}
