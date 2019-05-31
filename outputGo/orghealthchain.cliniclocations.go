package main
import "time"
type BaseEvent struct {
   Event
   Id string `json:"id"`
   ClinicLocationId string `json:"clinicLocationId"`
}
type CreateEvent struct {
   BaseEvent
}
type UpdateEvent struct {
   BaseEvent
}
