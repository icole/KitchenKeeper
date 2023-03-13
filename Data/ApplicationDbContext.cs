using KitchenStash.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KitchenStash.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(
            DbContextOptions options) : base(options)
        {
        }

        public DbSet<FoodItem> FoodItems { get; set; }
    }
}
