using Entities;
using Microsoft.EntityFrameworkCore;
using Persistance;
using System;

namespace Managers
{
    public class FormManager
    {
        private readonly DatabaseContext _context;

        public FormManager(DatabaseContext context)
        {
            _context = context;
        }

        public DbSet<Form> GetForms()
        {
            return _context.Forms;
        }

        public Form GetFormById(Guid Id)
        {
            return _context.Forms.Find(Id);
        }

        public void Add(Form form)
        {
            _context.Add(form);
        }

        public void Update(Form form)
        {
            _context.Update(form);
        }

        public void Delete(Form form)
        {
            _context.Remove(form);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
