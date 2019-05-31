package main
import "time"
type BaseEvent struct {
   Event
   Id string `json:"id"`
   ClinicLocationId string `json:"clinicLocationId"`
   PharmacyLocationId string `json:"pharmacyLocationId"`
   PrescriberId string `json:"prescriberId"`
   GroupIdentifierValue string `json:"groupIdentifierValue"`
}
type CreateEvent struct {
   BaseEvent
}
type ApproveEvent struct {
   BaseEvent
}
type ApproveManyEvent struct {
   BaseEvent
   MedicationRequestIds []string `json:"medicationRequestIds"`
}
type StopEvent struct {
   BaseEvent
}
type CancelEvent struct {
   BaseEvent
}
type CompleteEvent struct {
   BaseEvent
}
type AssignPharmacyLocationEvent struct {
   BaseEvent
}
type NoteAddEvent struct {
   BaseEvent
}
type RenewEvent struct {
   BaseEvent
   PriorPrescriptionId string `json:"priorPrescriptionId"`
}
type AcknowledgeEvent struct {
   BaseEvent
   Type string `json:"type"`
}
