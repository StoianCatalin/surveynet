using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entities
{
    public class Form
    {
        public Guid Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Description { get; set; }
        [Required]
        public Guid IdAuthor { get; set; }
        [Required]
        public List<Guid> Order { get; set; }
    }
}
