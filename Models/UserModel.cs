using System.ComponentModel.DataAnnotations;

namespace MaterialUIMvcApp.Models
{
    public class UserModel
    {
        [Required(ErrorMessage = "First name is required")]
        [StringLength(50, ErrorMessage = "First name cannot exceed 50 characters")]
        public string FirstName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Last name is required")]
        [StringLength(50, ErrorMessage = "Last name cannot exceed 50 characters")]
        public string LastName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Password is required")]
        [StringLength(100, MinimumLength = 6, ErrorMessage = "Password must be at least 6 characters long")]
        public string Password { get; set; } = string.Empty;

        [Required(ErrorMessage = "Age is required")]
        [Range(18, 120, ErrorMessage = "Age must be between 18 and 120")]
        public int Age { get; set; }

        [Required(ErrorMessage = "Gender is required")]
        public string Gender { get; set; } = string.Empty;

        [Required(ErrorMessage = "Country is required")]
        public string Country { get; set; } = string.Empty;

        public string Bio { get; set; } = string.Empty;

        [Required(ErrorMessage = "Terms and conditions must be accepted")]
        public bool AcceptTerms { get; set; }
    }
}