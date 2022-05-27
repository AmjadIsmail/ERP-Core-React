using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ERP.Models
{
    public class RestDays
    {
        public int LeaveDetailid { get; set; }
        public int EmployeeId { get; set; }
        public string SSN { get; set; }
        public DateTime ShiftDate { get; set; }
        public int LeaveClassID { get; set; }
        public string LeaveClass { get; set; }
        public string Comments { get; set; }
    }
}
