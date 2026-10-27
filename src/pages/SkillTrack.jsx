import { getCurrentUser } from "../auth";
import { Link } from "react-router-dom";

function ProgressCard({ label, value }) {
  return (
    <div className="progress-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function SkillProgress({ name, percent }) {
  return (
    <div className="skill-row">
      <div className="skill-label-row">
        <span>{name}</span>
        <strong>{percent}%</strong>
      </div>

      <div className="skill-bar">
        <span style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function SkillTrack() {
  const user = getCurrentUser();

  // If no user is logged in, show a login message.
  if (!user) {
    return (
      <main className="page skilltrack-page">
        <div className="content-container skilltrack-shell">
          <h1>Please Login First</h1>
          <p>Login to view your personal SkillTrack dashboard.</p>

          <Link className="button primary-button" to="/login">
            Go to Login
          </Link>
        </div>
      </main>
    );
  }

  const progress = user.progress || {
    currentStreak: 0,
    totalXP: 0,
    accuracy: 0,
    skills: {
      Arrays: 0,
      Strings: 0,
      "Linked Lists": 0,
      Trees: 0,
      "Dynamic Programming": 0,
    },
  };

  const progressStats = [
    {
      label: "Problem Solved",
      value: `${progress.problemsSolved || 0}`,
    },
    {
      label: "Current Streak",
      value: `${progress.currentStreak || 0} Days`,
    },
    {
      label: "Total XP",
      value: progress.totalXP || 0,
    },
    {
      label: "Accuracy",
      value: `${progress.accuracy || 0}%`,
    },
  ];

  const weeklyCompleted = Math.min(progress.problemsSolved,10);

  const skills = Object.entries(progress.skills || {}).map(
    ([name, percent]) => ({ name, percent })
  );

  const strongAreas = skills
    .filter((skill) => skill.percent >= 60)
    .map((skill) => skill.name);

  const weakAreas = skills
    .filter((skill) => skill.percent < 40)
    .map((skill) => skill.name);

  const totalXP = progress.totalXP || 0;

  const levelProgress = Math.min(
    (totalXP / 3000) * 100,
    100
  );

  return (
    <main className="page skilltrack-page">
      <div className="content-container skilltrack-shell">
        <header className="skilltrack-header">
          <div>
            <p className="section-label">// Learning Dashboard</p>
            <h1 className="page-title">SkillTrack</h1>
            <p className="section-sub">
              Track your coding journey and improve your skills.
            </p>
          </div>

          <div className="greeting-box">
            <span>Hello {user.name} 👋</span>
          </div>
        </header>

        <section className="stats-grid">
          {progressStats.map((item) => (
            <ProgressCard
              key={item.label}
              label={item.label}
              value={item.value}
            />
          ))}
        </section>

        <div className="skilltrack-layout">
          <section className="main-column">
            <div className="panel-card">
              <h2>My Skills</h2>

              <div className="skill-list">
                {skills.map((skill) => (
                  <SkillProgress
                    key={skill.name}
                    name={skill.name}
                    percent={skill.percent}
                  />
                ))}
              </div>
            </div>

            <div className="two-column-grid">
              <div className="panel-card mini-panel">
                <h2>💪 Strong Areas</h2>

                <ul className="area-list">
                  {strongAreas.length > 0 ? (
                    strongAreas.map((area) => (
                      <li key={area}>{area}</li>
                    ))
                  ) : (
                    <li>Keep practicing to build your strengths!</li>
                  )}
                </ul>
              </div>

              <div className="panel-card mini-panel">
                <h2>🎯 Needs Improvement</h2>

                <ul className="area-list">
                  {weakAreas.length > 0 ? (
                    weakAreas.map((area) => (
                      <li key={area}>{area}</li>
                    ))
                  ) : (
                    <li>Great work! Keep improving your skills.</li>
                  )}
                </ul>
              </div>
            </div>
          </section>

          <aside className="side-column">
            <div className="panel-card">
              <h2>Weekly Goal</h2>

              <div className="goal-box">
                <p>Solve 10 Problems</p>

                <strong>{weeklyCompleted} / 10 Completed</strong>

                <div className="progress-bar goal-bar">
                  <span
                    style={{
                      width: `${(weeklyCompleted / 10) * 100}%`,
                    }}
                  />
                </div>

                <Link
                  className="button primary-button practice-button"
                  to="/problems"
                >
                  Continue Practice
                </Link>
              </div>
            </div>

            <div className="panel-card">
              <h2>Your Coding Level</h2>

              <div className="level-box">
                <p className="level-name">
                  {progress.totalXP >= 3000
                    ? "Algorithm Explorer"
                    : "Problem Solver"}
                </p>

                <strong>{progress.totalXP} / 3000 XP</strong>

                <div className="progress-bar level-bar">
                  <span style={{ width: `${levelProgress}%` }} />
                </div>

                <p className="level-note">
                  {progress.totalXP >= 3000
                    ? "Congratulations! You reached Algorithm Explorer 🚀"
                    : `${3000 - progress.totalXP} XP more to reach Algorithm Explorer 🚀`}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default SkillTrack;