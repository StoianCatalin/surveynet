using Microsoft.EntityFrameworkCore;
using Persistance;
using Entities;
using System;

namespace Managers
{
    public class QuestionManager
    {
        private readonly DatabaseContext _context;

        public QuestionManager(DatabaseContext context)
        {
            _context = context;
        }

        public DbSet<Question> GetQuestions()
        {
            return _context.Questions;
        }

        public Question GetQuestionById(Guid Id)
        {
            return _context.Questions.Find(Id);
        }

        public Boolean Add(Question question)
        {
            Question questionTest = _context.Questions.Find(question.Id);
            if (questionTest == null)
            {
                return false;
            }

            _context.Add(question);
            return true;
        }

        public void Update(Question question)
        {
            _context.Update(question);
        }

        public void Delete(Question question)
        {
            _context.Remove(question);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
