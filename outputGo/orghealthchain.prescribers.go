package main
import "time"
type BaseEvent struct {
   Event
   Id string `json:"id"`
   ClinicLocationIds []string `json:"clinicLocationIds"`
}
type CreateEvent struct {
   BaseEvent
}
type UpdateEvent struct {
   BaseEvent
}
