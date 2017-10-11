using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TenrDemo.Models
{
    public class ProductSubCategory
    {
        public ProductSubCategory()
        {

        }
        public int ProductSubCategoryId { get; set; }
        public string Name { get; set; }
        public int ProductCategoryId { get; set; }
        public ProductCategory ProductCategory { get; set; }


        //public ProductSubCategory ProductSubcategory { get; set; }
      //  public ICollection<ProductCategory> ProductCategory { get; set; }
        //public ICollection<Product> Product { get; set; }
    }

}
