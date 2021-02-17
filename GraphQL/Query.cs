using KitchenStash.Models;
using HotChocolate;
using HotChocolate.Data;
using System.Linq;
using KitchenStash.Data;

namespace KitchenStash.GraphQL
{
    public class Query
    {
        public IQueryable<FoodItem> GetFoodItems([Service] ApplicationDbContext context)
        {
            return context.FoodItems;
        }
    }
}