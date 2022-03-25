namespace ERP.Models
{
    public class TaxSlabs
    {
        public int TaxSlabId { get; set; }
        public decimal AmountFrom { get; set; }
        public decimal AmountTo { get; set; }
        public decimal FixTaxAmount { get; set; }
        public decimal DiffrenceRate { get; set; }
    }
}
