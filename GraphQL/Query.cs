using KitchenStash.Models;
using HotChocolate;
using HotChocolate.Data;
using System.Linq;
using KitchenStash.Data;

namespace KitchenStash.GraphQL
{
    public class Query
    {
        [UseDbContext(typeof(GraphqlDbContext))]
        public IQueryable<FoodItem> GetFoodItems([ScopedService] GraphqlDbContext context)
        {
            return context.FoodItems;
        }
    }
}