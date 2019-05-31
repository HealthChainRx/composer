package main
import "time"
type BaseEvent struct {
   Event
   Id string `json:"id"`
}
type CreateEvent struct {
   BaseEvent
}
type UpdateEvent struct {
   BaseEvent
}
