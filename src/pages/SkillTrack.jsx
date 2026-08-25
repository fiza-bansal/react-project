import { useState } from "react";
import { Link } from "react-router-dom";

const progressStats = [
  { label: "Problems Solved", value: "127" },
  { label: "Current Streak", value: "7 Days" },
  { label: "Total XP", value: "2450" },
  { label: "Accuracy", value: "78%" },
];

const skills = [
  { name: "Arrays", percent: 85 },
  { name: "Strings", percent: 72 },
  { name: "Linked Lists", percent: 60 },
  { name: "Trees", percent: 45 },
  { name: "Dynamic Programming", percent: 30 },
];

const strongAreas = ["Arrays", "Strings"];
const weakAreas = ["Trees", "Dynamic Programming"];

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
  return (
    <main className="page skilltrack-page">
      <div className="content-container skilltrack-shell">
        <header className="skilltrack-header">
          <div>
            <p className="section-label">// Learning Dashboard</p>
            <h1 className="page-title">SkillTrack</h1>
            <p className="section-sub">Track your coding journey and improve your skills.</p>
          </div>
          <div className="greeting-box">
            <span>Hello Coder 👋</span>
          </div>
        </header>

        <section className="stats-grid">
          {progressStats.map((item) => (
            <ProgressCard key={item.label} label={item.label} value={item.value} />
          ))}
        </section>

        <div className="skilltrack-layout">
          <section className="main-column">
            <div className="panel-card">
              <h2>My Skills</h2>
              <div className="skill-list">
                {skills.map((skill) => (
                  <SkillProgress key={skill.name} name={skill.name} percent={skill.percent} />
                ))}
              </div>
            </div>

            <div className="two-column-grid">
              <div className="panel-card mini-panel">
                <h2>💪 Strong Areas</h2>
                <ul className="area-list">
                  {strongAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>

              <div className="panel-card mini-panel">
                <h2>🎯 Needs Improvement</h2>
                <ul className="area-list">
                  {weakAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>

          </section>

          <aside className="side-column">
            <div className="panel-card">
              <h2>Weekly Goal</h2>
              <div className="goal-box">
                <p>Solve 10 Problems</p>
                <strong>6 / 10 Completed</strong>
                <div className="progress-bar goal-bar">
                  <span style={{ width: "60%" }} />
                </div>
                <Link className="button primary-button practice-button" to="/problems">
                  Continue Practice
                </Link>
              </div>
            </div>

            <div className="panel-card">
              <h2>Your Coding Level</h2>
              <div className="level-box">
                <p className="level-name">Problem Solver</p>
                <strong>2450 / 3000 XP</strong>
                <div className="progress-bar level-bar">
                  <span style={{ width: "82%" }} />
                </div>
                <p className="level-note">550 XP more to reach Algorithm Explorer 🚀</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default SkillTrack;
