using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ERP.Models
{
    public class EmployeeDetails
    {
        public int AutoID { get; set; }
        public string EmployeeType { get; set; }
        public string EmployeeID { get; set; }
        public string EmpName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string MaritalStatus { get; set; }
        public Nullable<int> ReligionId { get; set; }
        public string OtherRelegion { get; set; }
        public string NIC { get; set; }
        public string ContactNo { get; set; }
        public string Address { get; set; }
        public string Qualification { get; set; }
        public string Other { get; set; }
        public Nullable<System.DateTime> BirthDate { get; set; }
        public Nullable<System.DateTime> JoiningDate { get; set; }
        public Nullable<System.DateTime> ConfirmDate { get; set; }
        public Nullable<int> DesignationID { get; set; }
        public Nullable<int> DepartmentID { get; set; }
        public Nullable<int> LocationID { get; set; }
        public string Status { get; set; }
        public Nullable<bool> IsResigned { get; set; }
        public Nullable<System.DateTime> ResignedDate { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<bool> EOBI { get; set; }
        public string EOBINO { get; set; }
        public Nullable<bool> SESSIMEMBER { get; set; }
        public string SESSIID { get; set; }
        public Nullable<bool> IsPFMember { get; set; }
        public string SalaryMode { get; set; }
        public Nullable<int> DutyHours { get; set; }
        public string BankAccID { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedOn { get; set; }
        public string pseudo { get; set; }
        public Nullable<System.DateTime> PayRollEndDate { get; set; }
        public Nullable<int> GradeID { get; set; }
        public Nullable<bool> AllowRegularity { get; set; }
        public Nullable<bool> AllowSemiRegulairty { get; set; }
        public Nullable<System.DateTime> PayRollStartDate { get; set; }
        public string BankCode { get; set; }
        public Nullable<int> Workingdays { get; set; }
        public string Department { get; set; }
    }
}
