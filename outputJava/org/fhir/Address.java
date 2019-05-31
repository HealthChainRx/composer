// this code is generated and should not be modified
package org.fhir;

import org.hyperledger.composer.system.*;
import org.hyperledger.composer.system.Event;
import org.hyperledger.composer.system.Transaction;
import org.hyperledger.composer.system.Participant;
import org.hyperledger.composer.system.Asset;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"$class"})
public class Address {
   public AddressUse use;
   public AddressType type;
   public String[] line;
   public String city;
   public String district;
   public String state;
   public String postalCode;
   public Country country;
}
