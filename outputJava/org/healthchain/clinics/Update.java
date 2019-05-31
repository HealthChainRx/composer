// this code is generated and should not be modified
package org.healthchain.clinics;

import org.hyperledger.composer.system.*;
import org.hyperledger.composer.system.Event;
import org.hyperledger.composer.system.Transaction;
import org.hyperledger.composer.system.Participant;
import org.hyperledger.composer.system.Asset;
import org.healthchain.Vendor;
import org.healthchain.Clinic;
import org.healthchain.Organization;
import org.healthchain.OrganizationStatus;
import org.fhir.Identifier;
import org.fhir.ContactPoint;
import org.fhir.Address;
import org.fhir.Contact;
public class Update extends Transaction {
   
   // the accessor for the identifying field
   public String getID() {
      return transactionId;
   }

   public Clinic clinic;
   public String name;
   public OrganizationStatus status;
   public ContactPoint[] telecom;
   public Contact[] contact;
   public Address[] address;
   public String endpoint;
   public Organization partOf;
}