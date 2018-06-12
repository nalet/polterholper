using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using schlag_den_marco.Models;
using Microsoft.AspNetCore.SignalR;
using System.Runtime.CompilerServices;
using System;

namespace schlag_den_marco.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private const string DataMethod = "DATA";
        private readonly GameContext _context;
        private readonly IHubContext<MessageHub> _hubContext;


        public GameController(GameContext context, IHubContext<MessageHub> hubContext)
        {
            this._context = context;
            this._hubContext = hubContext;

            if (this._context.GameItems.Count() == 0)
            {
                this._context.GameItems.Add(this.initGame());
                this._context.SaveChanges();
            }
        }

        private GameItem initGame()
        {
            return new GameItem
            {
                Step = Step.BLANK,
                NavStatus = new NavStatus(),
                Game1 = new Game1(),
                Game2 = new Game2(),
                Game3 = new Game3(),
                Game4 = new Game4(),
                Game5 = new Game5 { CurrentPlayer = "MARCO", GuessItems = this.fillGuessItems() },
                Game6 = new Game6(),
                Game7 = new Game7(),
                Game8 = new Game8()
            };
        }

        private List<GuessItem> fillGuessItems()
        {
            return new List<GuessItem>()
            {
                //WM Teilnehmer 2018 
                new GuessItem {Step = 1, Content = "Ägypten", Visible = false},
                new GuessItem {Step = 1, Content = "Argentinien", Visible = false},
                new GuessItem {Step = 1, Content = "Australien", Visible = false},
                new GuessItem {Step = 1, Content = "Belgien", Visible = false},
                new GuessItem {Step = 1, Content = "Brasilien", Visible = false},
                new GuessItem {Step = 1, Content = "Costa Rica", Visible = false},
                new GuessItem {Step = 1, Content = "Dänemark", Visible = false},
                new GuessItem {Step = 1, Content = "Deutschland", Visible = false},
                new GuessItem {Step = 1, Content = "England", Visible = false},
                new GuessItem {Step = 1, Content = "Frankreich", Visible = false},
                new GuessItem {Step = 1, Content = "Iran", Visible = false},
                new GuessItem {Step = 1, Content = "Island", Visible = false},
                new GuessItem {Step = 1, Content = "Japan", Visible = false},
                new GuessItem {Step = 1, Content = "Kolumbien", Visible = false},
                new GuessItem {Step = 1, Content = "Kroatien", Visible = false},
                new GuessItem {Step = 1, Content = "Marokko", Visible = false},
                new GuessItem {Step = 1, Content = "Mexiko", Visible = false},
                new GuessItem {Step = 1, Content = "Nigeria", Visible = false},
                new GuessItem {Step = 1, Content = "Panama", Visible = false},
                new GuessItem {Step = 1, Content = "Peru", Visible = false},
                new GuessItem {Step = 1, Content = "Polen", Visible = false},
                new GuessItem {Step = 1, Content = "Portugal", Visible = false},
                new GuessItem {Step = 1, Content = "Russland", Visible = false},
                new GuessItem {Step = 1, Content = "Saudi-Arabien", Visible = false},
                new GuessItem {Step = 1, Content = "Schweden", Visible = false},
                new GuessItem {Step = 1, Content = "Schweiz", Visible = false},
                new GuessItem {Step = 1, Content = "Senegal", Visible = false},
                new GuessItem {Step = 1, Content = "Serbien", Visible = false},
                new GuessItem {Step = 1, Content = "Spanien", Visible = false},
                new GuessItem {Step = 1, Content = "Südkorea", Visible = false},
                new GuessItem {Step = 1, Content = "Tunesien", Visible = false},
                new GuessItem {Step = 1, Content = "Uruguay", Visible = false},  
              
                //WM Finalisten 
                new GuessItem {Step = 2, Content = "Argentinien", Visible = false},
                new GuessItem {Step = 2, Content = "Brasilien", Visible = false},
                new GuessItem {Step = 2, Content = "Deutschland", Visible = false},
                new GuessItem {Step = 2, Content = "England", Visible = false},
                new GuessItem {Step = 2, Content = "Frankreich", Visible = false},
                new GuessItem {Step = 2, Content = "Holland", Visible = false},
                new GuessItem {Step = 2, Content = "Italien", Visible = false},
                new GuessItem {Step = 2, Content = "Schweden", Visible = false},
                new GuessItem {Step = 2, Content = "Spanien", Visible = false},
                new GuessItem {Step = 2, Content = "Tschechoslowakei", Visible = false},
                new GuessItem {Step = 2, Content = "Ungarn", Visible = false},
                new GuessItem {Step = 2, Content = "Uruguay", Visible = false},  
                
                //EM Sieger 
                new GuessItem {Step = 3, Content = "Dänemark", Visible = false},
                new GuessItem {Step = 3, Content = "Deutschland", Visible = false},
                new GuessItem {Step = 3, Content = "Frankreich", Visible = false},
                new GuessItem {Step = 3, Content = "Griechenland", Visible = false},
                new GuessItem {Step = 3, Content = "Italien", Visible = false},
                new GuessItem {Step = 3, Content = "Niederlande", Visible = false},
                new GuessItem {Step = 3, Content = "Portugal ", Visible = false},
                new GuessItem {Step = 3, Content = "Russland", Visible = false},
                new GuessItem {Step = 3, Content = "Spanien", Visible = false},
                new GuessItem {Step = 3, Content = "Tschechoslowakei", Visible = false}, 
                
                //WM Gastgeber vor 2018 
                new GuessItem {Step = 4, Content = "Argentinien", Visible = false},
                new GuessItem {Step = 4, Content = "Brasilien", Visible = false},
                new GuessItem {Step = 4, Content = "Chile", Visible = false},
                new GuessItem {Step = 4, Content = "Deutschland", Visible = false},
                new GuessItem {Step = 4, Content = "England", Visible = false},
                new GuessItem {Step = 4, Content = "Frankreich", Visible = false},
                new GuessItem {Step = 4, Content = "Italien", Visible = false},
                new GuessItem {Step = 4, Content = "Japan", Visible = false},
                new GuessItem {Step = 4, Content = "Mexiko", Visible = false},
                new GuessItem {Step = 4, Content = "Schweden", Visible = false},
                new GuessItem {Step = 4, Content = "Schweiz", Visible = false},
                new GuessItem {Step = 4, Content = "Spanien", Visible = false},
                new GuessItem {Step = 4, Content = "Südafrika", Visible = false},
                new GuessItem {Step = 4, Content = "Südkorea", Visible = false},
                new GuessItem {Step = 4, Content = "Uruguay", Visible = false},
                new GuessItem {Step = 4, Content = "USA", Visible = false},  
                
                //WM Gegner der Schweiz 
                new GuessItem {Step = 5, Content = "Argentinien", Visible = false},
                new GuessItem {Step = 5, Content = "Brasilien", Visible = false},
                new GuessItem {Step = 5, Content = "Chile", Visible = false},
                new GuessItem {Step = 5, Content = "Deutschland", Visible = false},
                new GuessItem {Step = 5, Content = "Ecuador", Visible = false},
                new GuessItem {Step = 5, Content = "Frankreich", Visible = false},
                new GuessItem {Step = 5, Content = "Holland", Visible = false},
                new GuessItem {Step = 5, Content = "Honduras", Visible = false},
                new GuessItem {Step = 5, Content = "Italien", Visible = false},
                new GuessItem {Step = 5, Content = "Jugoslavien", Visible = false},
                new GuessItem {Step = 5, Content = "Kolumbien", Visible = false},
                new GuessItem {Step = 5, Content = "Mexiko", Visible = false},
                new GuessItem {Step = 5, Content = "Österreich", Visible = false},
                new GuessItem {Step = 5, Content = "Rumänien", Visible = false},
                new GuessItem {Step = 5, Content = "Spanien", Visible = false},
                new GuessItem {Step = 5, Content = "Südkorea", Visible = false},
                new GuessItem {Step = 5, Content = "Togo", Visible = false},
                new GuessItem {Step = 5, Content = "Tschechoslowakei", Visible = false},
                new GuessItem {Step = 5, Content = "Ukraine", Visible = false},
                new GuessItem {Step = 5, Content = "Ungarn", Visible = false},
                new GuessItem {Step = 5, Content = "USA", Visible = false},  
                
                //Zusatz: Torschützenkönige 
                new GuessItem {Step = 6, Content = "Rodriguez James", Visible = false},
                new GuessItem {Step = 6, Content = "Müller Thomas", Visible = false},
                new GuessItem {Step = 6, Content = "Klose Miroslav", Visible = false},
                new GuessItem {Step = 6, Content = "Ronaldo", Visible = false},
                new GuessItem {Step = 6, Content = "Suker Davor", Visible = false},
                new GuessItem {Step = 6, Content = "Salenko Oleg", Visible = false},
                new GuessItem {Step = 6, Content = "Stoichkov Hristo", Visible = false},
                new GuessItem {Step = 6, Content = "Scillaci Salvatore", Visible = false},
                new GuessItem {Step = 6, Content = "Lineker Gary", Visible = false},
                new GuessItem {Step = 6, Content = "Rossi Paolo", Visible = false},
                new GuessItem {Step = 6, Content = "Kempes Mario", Visible = false},
                new GuessItem {Step = 6, Content = "Lato Grzegorz", Visible = false},
                new GuessItem {Step = 6, Content = "Müller Gerd", Visible = false},
                new GuessItem {Step = 6, Content = "Eusébio", Visible = false},
                new GuessItem {Step = 6, Content = "Vava ", Visible = false},
                new GuessItem {Step = 6, Content = "Ivanov Valentin", Visible = false},
                new GuessItem {Step = 6, Content = "Sanchez Leonel", Visible = false},
                new GuessItem {Step = 6, Content = "Garrincha", Visible = false},
                new GuessItem {Step = 6, Content = "Albert Florian", Visible = false},
                new GuessItem {Step = 6, Content = "Jerkovic Drazen", Visible = false},
                new GuessItem {Step = 6, Content = "Fontaine Just", Visible = false},
                new GuessItem {Step = 6, Content = "Kocsis Sandor", Visible = false},
                new GuessItem {Step = 6, Content = "Ademir", Visible = false},
                new GuessItem {Step = 6, Content = "Léonidas", Visible = false},
                new GuessItem {Step = 6, Content = "Nejedly Oldrich", Visible = false},
                new GuessItem {Step = 6, Content = "Stabile Guillermo", Visible = false},
            };
        }

        private GameItem getGame()
        {
            return this._context.GameItems
                .Include(g => g.NavStatus)
                .Include(g => g.Game1)
                .Include(g => g.Game2)
                .Include(g => g.Game3)
                .Include(g => g.Game4)
                .Include(g => g.Game5)
                    .ThenInclude(g => g.GuessItems)
                .Include(g => g.Game6)
                .Include(g => g.Game7)
                .Include(g => g.Game8)
                .First();
        }

        [HttpGet]
        public ActionResult<GameItem> GetAll()
        {
            return this.getGame();
        }

        [Route("step/{step}")]
        public ActionResult GetStep(Step step)
        {
            GameItem game = this.getGame();
            game.Step = step;
            switch (step)
            {
                case Step.BLANK: game.NavStatus.Blank = true; break;
                case Step.INTRO: game.NavStatus.Intro = true; break;
                case Step.GAME1: game.NavStatus.Game1 = true; break;
                case Step.GAME2: game.NavStatus.Game2 = true; break;
                case Step.GAME3: game.NavStatus.Game3 = true; break;
                case Step.GAME4: game.NavStatus.Game4 = true; break;
                case Step.GAME5: game.NavStatus.Game5 = true; break;
                case Step.GAME6: game.NavStatus.Game6 = true; break;
                case Step.GAME7: game.NavStatus.Game7 = true; break;
                case Step.GAME8: game.NavStatus.Game8 = true; break;
                case Step.SCORE: game.NavStatus.Score = true; break;
            }
            this.persist(game);
            return new EmptyResult();

        }

        private void persist(GameItem game)
        {
            this._context.Update(game);
            this._context.SaveChanges();
            this.sendGameData();
        }

        private void sendGameData()
        {
            this._hubContext.Clients.All.SendAsync(DataMethod, this.getGame());
        }

        [Route("game1/{session}/{question}/{value}")]

        public ActionResult GetGame1QResult(string session, int question, float value)
        {
            GameItem game = this.getGame();
            switch (session)
            {
                case "MARCO":
                    {
                        switch (question)
                        {
                            case 1: game.Game1.Q1m = value; break;
                            case 2: game.Game1.Q2m = value; break;
                            case 3: game.Game1.Q3m = value; break;
                            case 4: game.Game1.Q4m = value; break;
                            case 5: game.Game1.Q5m = value; break;
                            case 6: game.Game1.Q6m = value; break;
                            case 7: game.Game1.Q7m = value; break;
                            case 8: game.Game1.Q8m = value; break;
                            case 9: game.Game1.Q9m = value; break;
                            case 10: game.Game1.Q10m = value; break;
                            case 11: game.Game1.Q11m = value; break;
                            case 12: game.Game1.Q12m = value; break;
                            case 13: game.Game1.Q13m = value; break;
                        }
                        break;
                    }
                case "TEAM":
                    {
                        switch (question)
                        {
                            case 1: game.Game1.Q1t = value; break;
                            case 2: game.Game1.Q2t = value; break;
                            case 3: game.Game1.Q3t = value; break;
                            case 4: game.Game1.Q4t = value; break;
                            case 5: game.Game1.Q5t = value; break;
                            case 6: game.Game1.Q6t = value; break;
                            case 7: game.Game1.Q7t = value; break;
                            case 8: game.Game1.Q8t = value; break;
                            case 9: game.Game1.Q9t = value; break;
                            case 10: game.Game1.Q10t = value; break;
                            case 11: game.Game1.Q11t = value; break;
                            case 12: game.Game1.Q12t = value; break;
                            case 13: game.Game1.Q13t = value; break;
                        }
                        break;
                    }
            }
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game1/current/{question}")]
        public ActionResult GetGame1QCurrent(int question)
        {
            GameItem game = this.getGame();
            game.Game1.Current = question;
            game.Game1.ShowResult = false;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game2/current/{current}")]
        public ActionResult GetGame2Current(int current)
        {
            GameItem game = this.getGame();
            game.Game2.Current = current;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game3/current/{current}")]
        public ActionResult GetGame3Current(int current)
        {
            GameItem game = this.getGame();
            game.Game3.Current = current;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game4/current/{current}")]
        public ActionResult GetGame4Current(int current)
        {
            GameItem game = this.getGame();
            game.Game4.Current = current;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game5/current/{current}")]
        public ActionResult GetGame5Current(int current)
        {
            GameItem game = this.getGame();
            game.Game5.Current = current;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game6/current/{current}")]
        public ActionResult GetGame6Current(int current)
        {
            GameItem game = this.getGame();
            game.Game6.Current = current;
            game.Game6.StartTime = DateTime.Now;
            game.Game6.StopTime = DateTime.Now;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game7/current/{current}")]
        public ActionResult GetGame7Current(int current)
        {
            GameItem game = this.getGame();
            game.Game7.Current = current;
            game.Game7.StartTime = DateTime.Now;
            game.Game7.StopTime = DateTime.Now;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game8/current/{current}")]
        public ActionResult GetGame8Current(int current)
        {
            GameItem game = this.getGame();
            game.Game8.Current = current;
            game.Game8.StartTime = DateTime.Now;
            game.Game8.StopTime = DateTime.Now;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game1/points/{marco}/{team}")]
        public ActionResult GetGame1Points(int marco, int team)
        {
            GameItem game = this.getGame();
            game.Game1.PointsMarco = marco;
            game.Game1.PointsTeam = team;
            game.Game1.ShowResult = true;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game2/points/{marco}/{team}")]
        public ActionResult GetGame2Points(int marco, int team)
        {
            GameItem game = this.getGame();
            game.Game2.PointsMarco = marco;
            game.Game2.PointsTeam = team;
            game.Game2.ShowResult = true;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game3/points/{marco}/{team}")]
        public ActionResult GetGame3Points(int marco, int team)
        {
            GameItem game = this.getGame();
            game.Game3.PointsMarco = marco;
            game.Game3.PointsTeam = team;
            game.Game3.ShowResult = true;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game4/points/{marco}/{team}")]
        public ActionResult GetGame4Points(int marco, int team)
        {
            GameItem game = this.getGame();
            game.Game4.PointsMarco = marco;
            game.Game4.PointsTeam = team;
            game.Game4.ShowResult = true;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game5/points/{marco}/{team}")]
        public ActionResult GetGame5Points(int marco, int team)
        {
            GameItem game = this.getGame();
            game.Game5.PointsMarco = marco;
            game.Game5.PointsTeam = team;
            game.Game5.ShowResult = true;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game6/points/{marco}/{team}")]
        public ActionResult GetGame6Points(int marco, int team)
        {
            GameItem game = this.getGame();
            game.Game6.PointsMarco = marco;
            game.Game6.PointsTeam = team;
            game.Game6.ShowResult = true;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game7/points/{marco}/{team}")]
        public ActionResult GetGame7Points(int marco, int team)
        {
            GameItem game = this.getGame();
            game.Game7.PointsMarco = marco;
            game.Game7.PointsTeam = team;
            game.Game7.ShowResult = true;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game8/points/{marco}/{team}")]
        public ActionResult GetGame8Points(int marco, int team)
        {
            GameItem game = this.getGame();
            game.Game8.PointsMarco = marco;
            game.Game8.PointsTeam = team;
            game.Game8.ShowResult = true;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("points/{marco}/{team}")]
        public ActionResult GetPoints(int marco, int team)
        {
            GameItem game = this.getGame();
            game.PointsMarco = marco;
            game.PointsTeam = team;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("reset")]
        public ActionResult GetReset()
        {
            GameItem game = this.initGame();
            this._context.GameItems.Remove(this.getGame());
            this._context.SaveChanges();
            this._context.GameItems.Add(this.initGame());
            this._context.SaveChanges();
            this.persist(game);
            return new EmptyResult();
        }

        [Route("refresh")]
        public ActionResult GetRefresh()
        {
            GameItem game = this.getGame();
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game2/count/{value}")]
        public ActionResult GetGame2Count(int value)
        {
            GameItem game = this.getGame();
            game.Game2.Count = value;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game5/show/{id}")]
        public ActionResult GetGame5show(long id)
        {
            GameItem game = this.getGame();
            game.Game5.GuessItems.Find(x => x.Id == id).Visible = true;
            game.Game5.CurrentPlayer = game.Game5.CurrentPlayer == "MARCO" ? "TEAM" : "MARCO";
            game.Game5.LastTime = DateTime.Now;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game5/start")]
        public ActionResult GetGame5start()
        {
            GameItem game = this.getGame();
            game.Game5.LastTime = DateTime.Now;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game5/show/all/step")]
        public ActionResult GetGame5ShowAllStep()
        {
            GameItem game = this.getGame();
            game.Game5.GuessItems.FindAll(g => g.Step == game.Game5.Current).ForEach(e => e.Visible = true);
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game6/start")]
        public ActionResult GetGame6start()
        {
            GameItem game = this.getGame();
            game.Game6.StartTime = DateTime.Now;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game6/stop")]
        public ActionResult GetGame6stop()
        {
            GameItem game = this.getGame();
            game.Game6.StopTime = DateTime.Now;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game7/start")]
        public ActionResult GetGame7start()
        {
            GameItem game = this.getGame();
            game.Game7.StartTime = DateTime.Now;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game7/stop")]
        public ActionResult GetGame7stop()
        {
            GameItem game = this.getGame();
            game.Game7.StopTime = DateTime.Now;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game8/start")]
        public ActionResult GetGame8start()
        {
            GameItem game = this.getGame();
            game.Game8.StartTime = DateTime.Now;
            this.persist(game);
            return new EmptyResult();
        }

        [Route("game8/stop")]
        public ActionResult GetGame8stop()
        {
            GameItem game = this.getGame();
            game.Game6.StopTime = DateTime.Now;
            this.persist(game);
            return new EmptyResult();
        }

    }
}