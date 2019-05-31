package main
import "time"
type BaseEvent struct {
   Event
   Id string `json:"id"`
   VendorIds []string `json:"vendorIds"`
}
type CreateEvent struct {
   BaseEvent
}
type UpdateEvent struct {
   BaseEvent
}
