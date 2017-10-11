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
        public class ProductCategoryController : Controller
        {
            private TenrDbContext _context = null;
            public ProductCategoryController(TenrDbContext context)
            {
                _context = context;
            }
            [HttpGet("[action]")]
            public List<ProductCategory> GetData()
            {
                List<ProductCategory> data = null;
                data = _context.ProductCategories.ToList();
                return data;
            }

            [HttpGet]
            [Route("GetDetails/{id?}")]
            public ProductCategory GetDetails(int? id)
            {
            ProductCategory data = new ProductCategory();
                if (id.HasValue)
                {
                    data = _context.ProductCategories.Where(p => p.ProductCategoryId == id.Value).FirstOrDefault();
                    if (data == null)
                    {
                        data = new ProductCategory();
                    }
                }
                return data;
            }

            [HttpPost("[action]")]
            public IActionResult Save([FromBody] ProductCategory productCategory)
            {
                bool isNew = false;
                ProductCategory data = _context.ProductCategories.Where(p => p.ProductCategoryId == productCategory.ProductCategoryId).FirstOrDefault();
                if (data == null)
                {
                    data = new ProductCategory();
                    isNew = true;
                }
                data.Name = productCategory.Name;
                if (isNew)
                {
                    _context.Add(data);
                }
                _context.SaveChanges();
                return Ok(data);
            }

            [HttpDelete("[action]")]
            public IActionResult Delete([FromBody] int id)
            {
                ProductCategory data = _context.Set<ProductCategory>().FirstOrDefault(c => c.ProductCategoryId == id);
                _context.Entry(data).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
                _context.SaveChanges();
                return Ok(true);
            }
        }
    }

