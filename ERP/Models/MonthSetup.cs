namespace ERP.Models
{
    public class MonthSetup
    {
        public int AutoID { get; set; }
        public string MonthName { get; set; }
        public string FromDate { get; set; }
        public string ToDate { get; set; }
        public bool IsActive { get; set; }
    }
}
