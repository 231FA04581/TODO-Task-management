namespace TodoApp.Models
{
    public class TodoItem
    {
        public int Id { get; set; }

        public string Title { get; set; } = string.Empty;

        public bool IsCompleted { get; set; }

        public DateTime CreatedDate { get; set; }

        public int UserId { get; set; }

        public User? User { get; set; }
    }
}
