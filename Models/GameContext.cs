using Microsoft.EntityFrameworkCore;

namespace schlag_den_marco.Models
{
    public class GameContext : DbContext
    {
        public GameContext(DbContextOptions<GameContext> options) : base(options)
        {
        }

        public DbSet<GameItem> GameItems { get; set; }
    }
}