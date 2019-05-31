package main
import "time"
type BaseEvent struct {
   Event
   Id string `json:"id"`
   PharmacyLocationId string `json:"pharmacyLocationId"`
}
type CreateEvent struct {
   BaseEvent
}
type UpdateEvent struct {
   BaseEvent
}
