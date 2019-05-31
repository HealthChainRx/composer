// this code is generated and should not be modified
package org.healthchain.pharmacylocations;

import org.hyperledger.composer.system.*;
import org.hyperledger.composer.system.Event;
import org.hyperledger.composer.system.Transaction;
import org.hyperledger.composer.system.Participant;
import org.hyperledger.composer.system.Asset;
import org.healthchain.PharmacyLocation;
import org.healthchain.OrganizationStatus;
import org.fhir.Identifier;
import org.fhir.ContactPoint;
import org.fhir.Address;
import org.fhir.HumanName;
import org.fhir.Gender;
import org.fhir.Country;
public class CreateEvent extends BaseEvent {
   
   // the accessor for the identifying field
   public String getID() {
      return eventId;
   }

}
