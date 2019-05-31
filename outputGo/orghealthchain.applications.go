package main
import "time"
type ApplicationType int
const (
   ClinicLocationApplication ApplicationType = 1 + iota
   PharmacyLocationApplication
   VendorAdminApplication
   AdminApplication
)
type BaseEvent struct {
   Event
   Id string `json:"id"`
   ApplicationType ApplicationType `json:"applicationType"`
   VendorId string `json:"vendorId"`
   ClinicLocationId string `json:"clinicLocationId"`
   PharmacyLocationId string `json:"pharmacyLocationId"`
}
type CreateEvent struct {
   BaseEvent
}
type UpdateEvent struct {
   BaseEvent
}
