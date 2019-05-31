package main
import "time"
type BaseEvent struct {
   Event
   Id string `json:"id"`
   PharmacyLocationIds []string `json:"pharmacyLocationIds"`
   ClinicLocationIds []string `json:"clinicLocationIds"`
}
type CreateEvent struct {
   BaseEvent
}
type UpdateEvent struct {
   BaseEvent
}
