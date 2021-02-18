using System.ComponentModel.DataAnnotations;

namespace KitchenStash.Models
{
    public class FoodItem
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public double Amount { get; set; }

        public string Unit { get; set; }

        public double Price { get; set; }
    }
}