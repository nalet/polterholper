using System;
using System.Collections.Generic;

namespace schlag_den_marco.Models
{
    public class GameItem
    {
        public long Id { get; set; }

        public long PointsMarco { get; set; }
        public long PointsTeam { get; set; }

        public Step Step { get; set; }
        public NavStatus NavStatus { get; set; }

        public Game1 Game1 { get; set; }
        public Game2 Game2 { get; set; }
        public Game3 Game3 { get; set; }
        public Game4 Game4 { get; set; }
        public Game5 Game5 { get; set; }
        public Game6 Game6 { get; set; }
        public Game7 Game7 { get; set; }
        public Game8 Game8 { get; set; }
    }

    public enum Step
    {
        BLANK,
        INTRO,
        GAME1,
        GAME2,
        GAME3,
        GAME4,
        GAME5,
        GAME6,
        GAME7,
        GAME8,
        SCORE

    }

    public class NavStatus
    {
        public long Id { get; set; }
        public bool Blank { get; set; }
        public bool Intro { get; set; }
        public bool Game1 { get; set; }
        public bool Game2 { get; set; }
        public bool Game3 { get; set; }
        public bool Game4 { get; set; }
        public bool Game5 { get; set; }
        public bool Game6 { get; set; }
        public bool Game7 { get; set; }
        public bool Game8 { get; set; }
        public bool Score { get; set; }
    }

    public class Game1
    {
        public long Id { get; set; }

        public long PointsMarco { get; set; }
        public long PointsTeam { get; set; }
        public int Current { get; set; }
        public bool ShowResult { get; set; }

        public float Q1s { get; } = 4.8F;
        public float Q1m { get; set; }
        public float Q1t { get; set; }

        public float Q2s { get; } = 0F;
        public float Q2m { get; set; }
        public float Q2t { get; set; }

        public float Q3s { get; } = 5F;
        public float Q3m { get; set; }
        public float Q3t { get; set; }

        public float Q4s { get; } = 4.5F;
        public float Q4m { get; set; }
        public float Q4t { get; set; }

        public float Q5s { get; } = 4.8F;
        public float Q5m { get; set; }
        public float Q5t { get; set; }

        public float Q6s { get; } = 4.2F;
        public float Q6m { get; set; }
        public float Q6t { get; set; }

        public float Q7s { get; } = 11.6F;
        public float Q7m { get; set; }
        public float Q7t { get; set; }

        public float Q8s { get; } = 5.6F;
        public float Q8m { get; set; }
        public float Q8t { get; set; }

        public float Q9s { get; } = 5.4F;
        public float Q9m { get; set; }
        public float Q9t { get; set; }

        public float Q10s { get; } = 3.1F;
        public float Q10m { get; set; }
        public float Q10t { get; set; }

        public float Q11s { get; } = 67.5F;
        public float Q11m { get; set; }
        public float Q11t { get; set; }


        public float Q12s { get; } = 6.5F;
        public float Q12m { get; set; }
        public float Q12t { get; set; }


        public float Q13s { get; } = 5.9F;
        public float Q13m { get; set; }
        public float Q13t { get; set; }

        public float Q14s { get; } = 13F;
        public float Q14m { get; set; }
        public float Q14t { get; set; }

    }

    public class Game2
    {
        public long Id { get; set; }

        public long PointsMarco { get; set; }
        public long PointsTeam { get; set; }
        public int Current { get; set; }
        public bool ShowResult { get; set; }
        public int Count { get; set; }
    }

    public class Game3
    {
        public long Id { get; set; }

        public long PointsMarco { get; set; }
        public long PointsTeam { get; set; }
        public int Current { get; set; }
        public bool ShowResult { get; set; }
    }

    public class Game4
    {
        public long Id { get; set; }

        public long PointsMarco { get; set; }
        public long PointsTeam { get; set; }
        public int Current { get; set; }
        public bool ShowResult { get; set; }
    }

    public class Game5
    {
        public long Id { get; set; }
        public long PointsMarco { get; set; }
        public long PointsTeam { get; set; }
        public int Current { get; set; }
        public string CurrentPlayer { get; set; }
        public bool ShowResult { get; set; }
        public DateTime LastTime { get; set; }
        public List<GuessItem> GuessItems { get; set; }
    }

    public class GuessItem {
        public long Id { get; set; }
        public int Step { get; set; }
        public string Content { get; set; }
        public bool Visible { get; set; }
    }

    public class Game6
    {
        public long Id { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime StopTime { get; set; }
        public long PointsMarco { get; set; }
        public long PointsTeam { get; set; }
        public int Current { get; set; }
        public bool ShowResult { get; set; }
    }

    public class Game7
    {
        public long Id { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime StopTime { get; set; }
        public long PointsMarco { get; set; }
        public long PointsTeam { get; set; }
        public int Current { get; set; }
        public bool ShowResult { get; set; }
    }

    public class Game8
    {
        public long Id { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime StopTime { get; set; }
        public long PointsMarco { get; set; }
        public long PointsTeam { get; set; }
        public int Current { get; set; }
        public bool ShowResult { get; set; }
    }
}