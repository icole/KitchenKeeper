using HotChocolate.Types;
using KitchenStash.Models;

namespace KitchenStash.GraphQL.FoodItems
{
    public class FoodItemType : ObjectType<FoodItem>
    {
        protected override void Configure(IObjectTypeDescriptor<FoodItem> descriptor)
        {
            descriptor.Description("Represents a food item a user has in their kitchen");
        }
    }
}