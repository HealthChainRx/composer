package main
import "time"
type Actor struct {
   Participant
}
type Registrar struct {
   Participant
   Version int32 `json:"version"`
   RegistrarId string `json:"registrarId"`
}
type Organization struct {
   Participant
   Id string `json:"id"`
   Status OrganizationStatus `json:"status"`
   Name string `json:"name"`
   Identifier []Identifier `json:"identifier"`
   Telecom []ContactPoint `json:"telecom"`
   Contact []Contact `json:"contact"`
   Address []Address `json:"address"`
   Endpoint string `json:"endpoint"`
}
type Clinic struct {
   Organization
   Version int32 `json:"version"`
   Vendors []VendorRelationship `json:"vendors"`
}
type ClinicLocation struct {
   Participant
   Version int32 `json:"version"`
   Id string `json:"id"`
   Status OrganizationStatus `json:"status"`
   Name string `json:"name"`
   Identifier []Identifier `json:"identifier"`
   Telecom []ContactPoint `json:"telecom"`
   Line []string `json:"line"`
   City string `json:"city"`
   District string `json:"district"`
   State string `json:"state"`
   PostalCode string `json:"postalCode"`
   Country Country `json:"country"`
}
type Practitioner struct {
   Actor
   Id string `json:"id"`
}
type ClinicAdmin struct {
   Practitioner
   Version int32 `json:"version"`
   Identifier []Identifier `json:"identifier"`
   Name HumanName `json:"name"`
   Telecom []ContactPoint `json:"telecom"`
   Address []Address `json:"address"`
   Gender Gender `json:"gender"`
   BirthDate time.Time `json:"birthDate"`
   ClinicLocations []ClinicLocationRelationship `json:"clinicLocations"`
}
type Prescriber struct {
   Practitioner
   Version int32 `json:"version"`
   Identifier []Identifier `json:"identifier"`
   Name HumanName `json:"name"`
   Telecom []ContactPoint `json:"telecom"`
   Address []Address `json:"address"`
   Gender Gender `json:"gender"`
   BirthDate time.Time `json:"birthDate"`
   ClinicLocations []ClinicLocationRelationship `json:"clinicLocations"`
   Approver bool `json:"approver"`
}
type DispensingPractitioner struct {
   Practitioner
}
type Dispenser struct {
   DispensingPractitioner
   Version int32 `json:"version"`
   Identifier []Identifier `json:"identifier"`
   Name HumanName `json:"name"`
   Telecom []ContactPoint `json:"telecom"`
   Address []Address `json:"address"`
   Gender Gender `json:"gender"`
   BirthDate time.Time `json:"birthDate"`
   PharmacyLocations []PharmacyLocationRelationship `json:"pharmacyLocations"`
}
type PharmacyLocation struct {
   DispensingPractitioner
   Version int32 `json:"version"`
   Name string `json:"name"`
   Identifier []Identifier `json:"identifier"`
   Status OrganizationStatus `json:"status"`
   Telecom []ContactPoint `json:"telecom"`
   Line []string `json:"line"`
   City string `json:"city"`
   District string `json:"district"`
   State string `json:"state"`
   PostalCode string `json:"postalCode"`
   Country Country `json:"country"`
   Coordinates string `json:"coordinates"`
}
type AcknowledgementType int
const (
   MedicationRequestAdded AcknowledgementType = 1 + iota
   MedicationRequestCancelled
)
type Patient struct {
   Actor
   Version int32 `json:"version"`
   Id string `json:"id"`
   Identifier []Identifier `json:"identifier"`
   Name HumanName `json:"name"`
   Gender Gender `json:"gender"`
   Telecom []ContactPoint `json:"telecom"`
   BirthDate time.Time `json:"birthDate"`
   Deceased bool `json:"deceased"`
   DeceasedDateTime time.Time `json:"deceasedDateTime"`
   Address []Address `json:"address"`
   Prescribers []PrescriberRelationship `json:"prescribers"`
   ClinicLocations []ClinicLocationRelationship `json:"clinicLocations"`
   Dispensers []DispenserRelationship `json:"dispensers"`
   PharmacyLocations []PharmacyLocationRelationship `json:"pharmacyLocations"`
}
type Vendor struct {
   Organization
   Version int32 `json:"version"`
   AuthoredOn time.Time `json:"authoredOn"`
}
type VendorAdmin struct {
   Actor
   Id string `json:"id"`
   Version int32 `json:"version"`
   Identifier []Identifier `json:"identifier"`
   Name HumanName `json:"name"`
   Telecom []ContactPoint `json:"telecom"`
   Address []Address `json:"address"`
   Gender Gender `json:"gender"`
   BirthDate time.Time `json:"birthDate"`
   Vendors []VendorRelationship `json:"vendors"`
   Applications []ApplicationRelationship `json:"applications"`
}
type Application struct {
   Participant
   Id string `json:"id"`
   Status ApplicationStatus `json:"status"`
   Name string `json:"name"`
   Description string `json:"description"`
   Identifier []Identifier `json:"identifier"`
   Note []Annotation `json:"note"`
   AuthoredOn time.Time `json:"authoredOn"`
}
type ClinicLocationApplication struct {
   Application
   Version int32 `json:"version"`
}
type PharmacyLocationApplication struct {
   Application
   Version int32 `json:"version"`
}
type VendorAdminApplication struct {
   Application
   Version int32 `json:"version"`
}
type AdminApplication struct {
   Application
   Version int32 `json:"version"`
}
type ApplicationStatus int
const (
   Active ApplicationStatus = 1 + iota
   Inactive
)
type RelationshipType int
const (
   Implied RelationshipType = 1 + iota
   Referred
   Consent
   Employed
   Admin
)
type OrganizationStatus int
const (
   Active OrganizationStatus = 1 + iota
   Inactive
   Sold
   Closed
   Relocated
)
type ResourceType int
const (
   Participant ResourceType = 1 + iota
   Asset
)
type LocationStatus int
const (
   Active LocationStatus = 1 + iota
   Sold
   Relocated
   Closed
)
type MedicationPrescribedEvent struct {
   Event
}
type MedicationRequest struct {
   Asset
   Version int32 `json:"version"`
   Id string `json:"id"`
   MedicationCodeableConcept CodeableConcept `json:"medicationCodeableConcept"`
   Medication string `json:"medication"`
   Identifier []Identifier `json:"identifier"`
   GroupIdentifier Identifier `json:"groupIdentifier"`
   Status PrescribeStatus `json:"status"`
   Intent Intent `json:"intent"`
   ReasonCode []CodeableConcept `json:"reasonCode"`
   Note []Annotation `json:"note"`
   DosageInstruction []Dosage `json:"dosageInstruction"`
   DispenseRequest DispenseRequest `json:"dispenseRequest"`
   Substitution Substitution `json:"substitution"`
   AuthoredOn time.Time `json:"authoredOn"`
   Acknowledgements []Acknowledgement `json:"acknowledgements"`
   StatusReason CodeableConcept `json:"statusReason"`
}
type Sig struct {
   Asset
   Version int32 `json:"version"`
   Id string `json:"id"`
   MedicationCodeableConcept CodeableConcept `json:"medicationCodeableConcept"`
   Medication string `json:"medication"`
   DosageInstruction []Dosage `json:"dosageInstruction"`
   DispenseRequest DispenseRequest `json:"dispenseRequest"`
}
type MedicationDispense struct {
   Asset
   Version int32 `json:"version"`
   Id string `json:"id"`
   Identifier []Identifier `json:"identifier"`
   Status DispenseStatus `json:"status"`
   Category CodeableConcept `json:"category"`
   MedicationCodeableConcept CodeableConcept `json:"medicationCodeableConcept"`
   Medication string `json:"medication"`
   DispenseType CodeableConcept `json:"dispenseType"`
   Quantity Quantity `json:"quantity"`
   DaysSupply Quantity `json:"daysSupply"`
   WhenPrepared time.Time `json:"whenPrepared"`
   WhenHandedOver time.Time `json:"whenHandedOver"`
   Receiver Receiver `json:"receiver"`
   Note []Annotation `json:"note"`
   DosageInstruction []Dosage `json:"dosageInstruction"`
   Substitution DispenseSubstitution `json:"substitution"`
   CancelReason CodeableConcept `json:"cancelReason"`
}
type ReceiverType int
const (
   Prescriber ReceiverType = 1 + iota
   Dispenser
   Patient
)
type AuthorType int
const (
   ClinicAdmin AuthorType = 1 + iota
   Prescriber
   Dispenser
   Patient
)
type MedicationStatus int
const (
   Active MedicationStatus = 1 + iota
   Inactive
)
type PrescribeStatus int
const (
   Draft PrescribeStatus = 1 + iota
   Active
   Duplicate
   Completed
   Cancelled
   Stopped
)
type DispenseStatus int
const (
   Preparation DispenseStatus = 1 + iota
   In_progress
   On_hold
   Completed
   Entered_in_error
   Stopped
)
type DispenserType int
const (
   Pharmacist DispenserType = 1 + iota
   Other
)
type PractionerStatus int
const (
   Active PractionerStatus = 1 + iota
   Suspended
   Expired
)
type PrescriberType int
const (
   Physician PrescriberType = 1 + iota
   Dentist
   Nurse
   Pharmacist
   Other
)
type NoSubReason int
const (
   CT NoSubReason = 1 + iota
   FP
   OS
   RR
)
type IdentifierRelationship struct {
   Asset
   Id string `json:"id"`
   Assigner string `json:"assigner"`
   Value string `json:"value"`
}
