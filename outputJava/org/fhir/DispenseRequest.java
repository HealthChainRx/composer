// this code is generated and should not be modified
package org.fhir;

import org.hyperledger.composer.system.*;
import org.hyperledger.composer.system.Event;
import org.hyperledger.composer.system.Transaction;
import org.hyperledger.composer.system.Participant;
import org.hyperledger.composer.system.Asset;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"$class"})
public class DispenseRequest {
   public Period validityPeriod;
   public int numberOfRepeatsAllowed;
   public Quantity quantity;
   public Duration expectedSupplyDuration;
}
