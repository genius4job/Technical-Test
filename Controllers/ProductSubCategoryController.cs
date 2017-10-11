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
        public class ProductSubCategoryController : Controller
        {
            private TenrDbContext _context = null;
            public ProductSubCategoryController(TenrDbContext context)
            {
                _context = context;
            }
            [HttpGet("[action]")]
            public List<ProductSubCategory> GetSubData()
            {
                List<ProductSubCategory> data = null;
                data = _context.ProductSubCategories.ToList();
                return data;
            }

            [HttpGet]
            [Route("GetSubDetails/{id?}")]
            public ProductSubCategory GetSubDetails(int? id)
            {
            ProductSubCategory data = new ProductSubCategory();
                if (id.HasValue)
                {
                    data = _context.ProductSubCategories.Where(p => p.ProductSubCategoryId == id.Value).FirstOrDefault();
                    if (data == null)
                    {
                        data = new ProductSubCategory();
                    }
                }
                return data;
            }

            [HttpPost("[action]")]
            public IActionResult SaveSubCategory([FromBody] ProductSubCategory productSubCategory)
            {
                bool isNew = false;
                ProductSubCategory data = _context.ProductSubCategories.Where(p => p.ProductSubCategoryId == productSubCategory.ProductSubCategoryId).FirstOrDefault();
                if (data == null)
                {
                    data = new ProductSubCategory();
                    isNew = true;
                }
                data.Name = productSubCategory.Name;
                data.ProductCategoryId = productSubCategory.ProductCategoryId;
            if (isNew)
                {
                    _context.Add(data);
                }
                _context.SaveChanges();
                return Ok(data);
            }

            [HttpDelete("[action]")]
            public IActionResult DeleteSubCategory([FromBody] int id)
            {
                ProductSubCategory data = _context.Set<ProductSubCategory>().FirstOrDefault(c => c.ProductSubCategoryId == id);
                _context.Entry(data).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
                _context.SaveChanges();
                return Ok(true);
            }
        }
    }

