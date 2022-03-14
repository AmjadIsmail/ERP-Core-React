using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ERP.Models
{
    public class EmpGrade
    {
        public int GradeID { get; set; }
        public string GradeName { get; set; }
        public string Createdby { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
    }
}
