using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using TodoApp.Data;
using TodoApp.DTOs;
using TodoApp.Models;

namespace TodoApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TodoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TodoController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetTodos()
        {
            var userId = int.Parse(
                User.FindFirst(ClaimTypes.NameIdentifier)!.Value);

            var todos = _context.TodoItems
                .Where(t => t.UserId == userId)
                .Select(t => new
                {
                    t.Id,
                    t.Title,
                    t.IsCompleted,
                    t.CreatedDate
                })
                .ToList();

            return Ok(todos);
        }

        [HttpPost]
        public IActionResult AddTodo(CreateTodoDto dto)
        {
            var userId = int.Parse(
                User.FindFirst(ClaimTypes.NameIdentifier)!.Value);

            var todo = new TodoItem
            {
                Title = dto.Title,
                IsCompleted = false,
                CreatedDate = DateTime.UtcNow,
                UserId = userId
            };

            _context.TodoItems.Add(todo);
            _context.SaveChanges();

            return Ok(new
            {
                todo.Id,
                todo.Title,
                todo.IsCompleted,
                todo.CreatedDate
            });
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTodo(int id)
        {
            var userId = int.Parse(
                User.FindFirst(ClaimTypes.NameIdentifier)!.Value);

            var todo = _context.TodoItems
                .FirstOrDefault(t => t.Id == id && t.UserId == userId);

            if (todo == null)
            {
                return NotFound("Todo not found.");
            }

            todo.IsCompleted = true;

            _context.SaveChanges();

            return Ok(new
            {
                Message = "Todo marked as completed."
            });
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTodo(int id)
        {
            var userId = int.Parse(
                User.FindFirst(ClaimTypes.NameIdentifier)!.Value);

            var todo = _context.TodoItems
                .FirstOrDefault(t => t.Id == id && t.UserId == userId);

            if (todo == null)
            {
                return NotFound("Todo not found.");
            }

            _context.TodoItems.Remove(todo);
            _context.SaveChanges();

            return Ok(new
            {
                Message = "Todo deleted successfully."
            });
        }
    }
}