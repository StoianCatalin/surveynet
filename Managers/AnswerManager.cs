using Entities;
using Microsoft.EntityFrameworkCore;
using Persistance;
using System;
using System.Collections.Generic;
using System.Text;

namespace Managers
{
    class AnswerManager
    {
        private readonly DatabaseContext _context;

        public AnswerManager(DatabaseContext context)
        {
            _context = context;
        }

        public DbSet<Answer> GetAnswers()
        {
            return _context.Answers;
        }

        public Answer GetAnswerById(Guid Id)
        {
            return _context.Answers.Find(Id);
        }

        public void Add(Answer answer)
        {
            _context.Add(answer);
        }

        public void Update(Answer answer)
        {
            _context.Update(answer);
        }

        public void Delete(Answer answer)
        {
            _context.Remove(answer);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
