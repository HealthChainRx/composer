// this code is generated and should not be modified
package org.fhir;

import org.hyperledger.composer.system.*;
import org.hyperledger.composer.system.Event;
import org.hyperledger.composer.system.Transaction;
import org.hyperledger.composer.system.Participant;
import org.hyperledger.composer.system.Asset;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"$class"})
public class Repeat {
   public Duration boundsDuration;
   public Range boundsRange;
   public Period boundsPeriod;
   public int count;
   public int countMax;
   public double duration;
   public double durationMax;
   public String durationUnit;
   public int frequency;
   public int frequencyMax;
   public double period;
   public double periodMax;
   public String periodUnit;
   public DayOfWeek[] dayOfWeek;
   public String timeOfDay;
   public String[] when;
   public int offset;
}
