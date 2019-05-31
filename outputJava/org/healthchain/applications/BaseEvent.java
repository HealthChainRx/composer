// this code is generated and should not be modified
package org.healthchain.applications;

import org.hyperledger.composer.system.*;
import org.hyperledger.composer.system.Event;
import org.hyperledger.composer.system.Transaction;
import org.hyperledger.composer.system.Participant;
import org.hyperledger.composer.system.Asset;
import org.healthchain.Application;
import org.healthchain.Vendor;
import org.healthchain.ClinicLocation;
import org.healthchain.PharmacyLocation;
import org.healthchain.ApplicationStatus;
import org.healthchain.Annotation;
import org.fhir.Identifier;
public abstract class BaseEvent extends Event {
   
   // the accessor for the identifying field
   public String getID() {
      return eventId;
   }

   public String id;
   public ApplicationType applicationType;
   public String vendorId;
   public String clinicLocationId;
   public String pharmacyLocationId;
}
