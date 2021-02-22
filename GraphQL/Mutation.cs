using HotChocolate;
using HotChocolate.Data;
using KitchenStash.Data;
using KitchenStash.GraphQL.FoodItems;
using KitchenStash.Models;
using System.Threading.Tasks;

namespace KitchenStash.GraphQL
{
    public class Mutation
    {
        [UseDbContext(typeof(GraphqlDbContext))]
        public async Task<AddFoodItemPayload> AddFoodItemAsync(
            AddFoodItemInput input,
            [ScopedService] GraphqlDbContext context
        )
        {
            var foodItem = new FoodItem
            {
                Name = input.Name,
                Amount = input.Amount,
                Unit = input.Unit,
                Price = input.Price
            };

            context.FoodItems.Add(foodItem);
            await context.SaveChangesAsync();

            return new AddFoodItemPayload(foodItem);
        }
    }
}