package main
import "time"
type SeedEvent struct {
   Event
}
type UpdateEvent struct {
   Event
   Id string `json:"id"`
}
type RegisterEvent struct {
   Event
   Id string `json:"id"`
}
type RelationshipEvent struct {
   Event
   Id string `json:"id"`
}
type AddRelationship struct {
   Event
   Id string `json:"id"`
   Type string `json:"type"`
}
type ClinicRegistered struct {
   RegisterEvent
}
type ClinicLocationRegistered struct {
   RegisterEvent
}
type PharmacyLocationRegistered struct {
   RegisterEvent
}
type ClinicAdminRegistered struct {
   RegisterEvent
   ClinicLocationId string `json:"clinicLocationId"`
}
type PrescriberRegistered struct {
   RegisterEvent
}
type DispenserRegistered struct {
   RegisterEvent
}
type PatientRegistered struct {
   RegisterEvent
}
type PharmacyLocationUpdated struct {
   UpdateEvent
}
type PatientUpdated struct {
   UpdateEvent
}
type PrescriberUpdated struct {
   UpdateEvent
}
type ClinicAdminUpdated struct {
   UpdateEvent
}
type DispenserUpdated struct {
   UpdateEvent
}
type SigCreated struct {
   RegisterEvent
}
type PrescriberUpdatedSigAdded struct {
   UpdateEvent
}
type PrescriberUpdatedSigRemoved struct {
   UpdateEvent
}
type ClinicAdminUpdatedSigAdded struct {
   UpdateEvent
}
type ClinicAdminUpdatedSigRemoved struct {
   UpdateEvent
}
type VendorRegistered struct {
   RegisterEvent
}
type VendorAdminRegistered struct {
   RegisterEvent
}
type VendorAdminUpdated struct {
   UpdateEvent
}
type ApplicationRegistered struct {
   RegisterEvent
}
type VendorAdminApplicationRelationship struct {
   RelationshipEvent
}
type VendorAdminVendorRelationship struct {
   RelationshipEvent
}
type PatientClinicRelationship struct {
   RelationshipEvent
}
type PatientPharmacyLocationRelationship struct {
   RelationshipEvent
}
type PatientPrescriberRelationship struct {
   RelationshipEvent
}
type PatientDispenserRelationship struct {
   RelationshipEvent
}
type PrescriberClinicRelationship struct {
   RelationshipEvent
}
type ClinicAdminClinicRelationship struct {
   RelationshipEvent
}
type DispenserPharmacyLocationRelationship struct {
   RelationshipEvent
}
type MedicationRequestAdded struct {
   RegisterEvent
   PharmacyLocationId string `json:"pharmacyLocationId"`
   ClinicLocationId string `json:"clinicLocationId"`
}
type MedicationRequestRenewed struct {
   RegisterEvent
   PharmacyLocationId string `json:"pharmacyLocationId"`
   ClinicLocationId string `json:"clinicLocationId"`
}
type MedicationRequestApproved struct {
   UpdateEvent
   PharmacyLocationId string `json:"pharmacyLocationId"`
   ClinicLocationId string `json:"clinicLocationId"`
}
type MedicationRequestStopped struct {
   UpdateEvent
   PharmacyLocationId string `json:"pharmacyLocationId"`
   ClinicLocationId string `json:"clinicLocationId"`
}
type MedicationRequestCompleted struct {
   UpdateEvent
   PharmacyLocationId string `json:"pharmacyLocationId"`
   ClinicLocationId string `json:"clinicLocationId"`
}
type MedicationRequestCancelled struct {
   UpdateEvent
   PharmacyLocationId string `json:"pharmacyLocationId"`
   ClinicLocationId string `json:"clinicLocationId"`
}
type MedicationRequestAcknowledged struct {
   UpdateEvent
   Type string `json:"type"`
   PharmacyLocationId string `json:"pharmacyLocationId"`
   ClinicLocationId string `json:"clinicLocationId"`
}
type MedicationDispenseAdded struct {
   RegisterEvent
}
type MedicationRequestImported struct {
   RegisterEvent
}
type MedicationDispenseImported struct {
   RegisterEvent
}
type MedicationRequestNoteAdded struct {
   UpdateEvent
}
type MedicationDispenseNoteAdded struct {
   UpdateEvent
}
type MedicationRequestAssignedPharmacyLocation struct {
   RelationshipEvent
   PharmacyLocationId string `json:"pharmacyLocationId"`
}
type HealthChainTestSeeded struct {
   SeedEvent
}
type HealthChainTestCleaned struct {
   SeedEvent
}
type PatientRead struct {
   Event
   PatientId string `json:"patientId"`
   Identifier Identifier `json:"identifier"`
}
type Test struct {
   Event
   SocketId string `json:"socketId"`
   Message string `json:"message"`
}
