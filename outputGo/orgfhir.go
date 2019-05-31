package main
import "time"
type Category int
const (
   Allergen Category = 1 + iota
   Biological
   Body
   Chemical
   Food
   Drug
   Material
)
type AddressType int
const (
   Postal AddressType = 1 + iota
   Physical
   Both
)
type DayOfWeek int
const (
   Sun DayOfWeek = 1 + iota
   Mon
   Tue
   Wed
   Thu
   Fri
   Sat
)
type AddressUse int
const (
   Home AddressUse = 1 + iota
   Business
   Work
   Temp
   Old
)
type HumanNameUse int
const (
   Usual HumanNameUse = 1 + iota
   Official
   Temp
   Nickname
   Old
   Maiden
)
type Gender int
const (
   Male Gender = 1 + iota
   Female
   Other
   Unknown
)
type Intent int
const (
   Proposal Intent = 1 + iota
   Plan
   Order
   Instance
)
type Country int
const (
   CA Country = 1 + iota
   US
)
