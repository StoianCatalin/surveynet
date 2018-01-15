using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entities
{
    public class Answer
    {
        public Guid Id { get; set; }
        [Required]
        public Guid IdIntrebare { get; set; }
        [Required]
        public List<String> Answers { get; set; }
    }
}
