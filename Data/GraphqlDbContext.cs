using KitchenStash.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KitchenStash.Data
{
    public class GraphqlDbContext : DbContext
    {
        public GraphqlDbContext(
            DbContextOptions options) : base(options)
        {
        }

        public DbSet<FoodItem> FoodItems { get; set; }
    }
}
