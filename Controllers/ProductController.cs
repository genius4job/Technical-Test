using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TenrDemo.Models;

namespace tenr4.Controllers
{

    [Route("api/[controller]")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    public class ProductController : Controller
    {
        private TenrDbContext _context = null;
        public ProductController(TenrDbContext context)
        {
            _context = context;
        }
        [HttpGet("[action]")]
        public List<Product> GetProductData()
        {
            List<Product> data = null;
            data = _context.Products.ToList();
            return data;
        }

        [HttpGet]
        [Route("GetProductDetails/{id?}")]
        public Product GetProductDetails(int? id)
        {
            Product data = new Product();
            if (id.HasValue)
            {
                data = _context.Products.Where(p => p.ProductId == id.Value).FirstOrDefault();
                if (data == null)
                {
                    data = new Product();
                }
            }
            return data;
        }

        [HttpPost("[action]")]
        public IActionResult SaveProduct([FromBody] Product product)
        {
            bool isNew = false;
            Product data = _context.Products.Where(p => p.ProductId == product.ProductId).FirstOrDefault();
            if (data == null)
            {
                data = new Product();
                isNew = true;
            }
            data.Name = product.Name;
            data.InStock = product.InStock;
            data.ProductCode = product.ProductCode;
            data.ProductTypeId = product.ProductTypeId;
            data.StartDateTime = product.StartDateTime;
            data.CreatedDateTime = DateTime.Now;
            data.ModifiedDateTime = DateTime.Now;
            data.ProductSubCategoryId = 1;
            if (isNew)
            {
                _context.Add(data);
            }
            _context.SaveChanges();
            return Ok(data);
        }

        [HttpDelete("[action]")]
        public IActionResult DeleteProduct([FromBody] int id)
        {
            Product data = _context.Set<Product>().FirstOrDefault(c => c.ProductId == id);
            _context.Entry(data).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
            _context.SaveChanges();
            return Ok(true);
        }
    }
}

