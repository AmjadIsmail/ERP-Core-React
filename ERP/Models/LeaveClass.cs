using System;

namespace ERP.Models
{
    public class LeaveClass
    {
        public int LeaveClassId { get; set; }
        public string LeaveClassName { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
    }
}
