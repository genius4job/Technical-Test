using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TenrDemo.Models
{
    public class Product
    {
        public Product()
        {

        }
        public int ProductId { get; set; }
        public int ProductTypeId { get; set; }
        public int ProductCode { get; set; }
        public string Name { get; set; }
        public bool InStock { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public DateTime ModifiedDateTime { get; set; }
        public int ProductSubCategoryId { get; set; }
        public ProductSubCategory ProductSubcategory { get; set; }
        //public ICollection<ProductSubCategory> ProductSubCategory { get; set; }

    }
}
