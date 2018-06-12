using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace schlag_den_marco
{
    public class MessageHub : Hub
    {
        public async Task SendMessage(string session, object message)
        {
            await Clients.All.SendAsync("ReceiveMessage", session, message);
        }
    }
}