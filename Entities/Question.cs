using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entities
{
    public class Question
    {
        public Guid Id { get; set; }
        [Required]
        public string QuestionText { get; set; }
        [Required]
        public int Type { get; set; }
        public List<String> Answers { get; set; }
    }
}
