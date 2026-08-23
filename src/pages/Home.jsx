import { Link } from "react-router-dom";

const features = [
  ["🧩", "Curated Problem Sets", "Hundreds of hand-picked coding challenges spanning arrays, graphs, DP, and more — organized by difficulty and topic."],
  ["💬", "Ask & Answer", "Post your questions, get peer explanations, and help others grow. Upvoted answers surface the best solutions automatically."],
  ["🏆", "Leaderboards & XP", "Earn points by solving problems, posting quality answers, and helping others. Compete weekly or track your personal growth."],
  ["📚", "Learning Paths", "Follow structured paths curated by the community — from \"Crack the Coding Interview\" to \"Competitive Programming 101.\""],
  ["🔍", "Solution Explorer", "Browse multiple approaches to every problem. Compare brute-force vs optimized, understand trade-offs, and learn patterns."],
  ["🤝", "Mentorship Threads", "Tag experienced members for mentorship. Beginners find guidance; seniors build their teaching portfolio."],
];

const steps = [
  ["01", "Create Your Profile", "Sign up for free, set your skill level, and pick the topics you want to master."],
  ["02", "Pick a Challenge", "Browse curated problems by difficulty, topic, or trending questions from the community."],
  ["03", "Solve & Share", "Write your solution, explain your approach, and post it for peer review and upvotes."],
  ["04", "Earn & Level Up", "Gain XP, unlock badges, climb leaderboards, and build your public coding portfolio."],
];

function CodePreview() {
  return (
    <div className="code-card">
      <div className="code-header">
        <div className="code-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="code-title">two_sum.py</span>
        <span className="code-tag">&#10003; Accepted</span>
      </div>
      <div className="code-body">
        <div>
          <span className="line-number">1</span>
          <span className="comment"># Two Sum - Classic Array Problem</span>
        </div>
        <div><span className="line-number">2</span></div>
        <div>
          <span className="line-number">3</span>
          <span className="keyword">def </span>
          <span className="function-name">twoSum</span>(nums, target):
        </div>
        <div><span className="line-number">4</span>    seen = &#123;&#125;</div>
        <div>
          <span className="line-number">5</span>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">for </span>i, num
          <span className="keyword"> in </span>
          <span className="function-name">enumerate</span>(nums):
        </div>
        <div><span className="line-number">6</span>        complement = target - num</div>
        <div>
          <span className="line-number">7</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">if </span>
          complement <span className="keyword">in </span>seen:
        </div>
        <div>
          <span className="line-number">8</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return </span>
          [seen[complement], i]
        </div>
        <div><span className="line-number">9</span>        seen[num] = i</div>
        <div>
          <span className="line-number">10</span>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return </span>[]
        </div>
        <div><span className="line-number">11</span></div>
        <div>
          <span className="line-number">12</span>
          <span className="comment"># Time: O(n) - Space: O(n)</span>
        </div>
      </div>
      <div className="code-footer">
        <span>▲ 142 &nbsp; ▼ 3 &nbsp; · 18 comments</span>
        <strong>&#10003; Best Answer</strong>
      </div>
    </div>
  );
}

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="badge-dot" /> Beta · Open to All Learners
            </div>
            <h1>
              Learn to Code.
              <br />
              <span className="green-text">Solve</span> Real Problems.
              <br />
              <span className="blue-text">Grow</span> Together.
            </h1>
            <p className="hero-sub">
              Algo Arena is a collaborative coding community built for learners and developers. Ask questions, solve challenges, share solutions, and level up — together.
            </p>
            <div className="hero-cta">
              <Link className="button primary-button" to="/problems">Explore Problems &rarr;</Link>
              <Link className="button ghost-button" to="/discussion">Join Discussion</Link>
            </div>
            <div className="hero-stats">
              <div><strong>12,000+</strong><span>Members</span></div>
              <div><strong>3,400+</strong><span>Problems</span></div>
              <div><strong>98,000+</strong><span>Solutions</span></div>
            </div>
          </div>
          <CodePreview />
        </div>
      </section>

      <section className="features-section">
        <div className="content-container">
          <p className="section-label">// What We Offer</p>
          <h2 className="section-title">Everything You Need to Level Up</h2>
          <p className="section-sub">A complete ecosystem for collaborative coding education.</p>
          <div className="features-grid">
            {features.map(([icon, title, text]) => (
              <article className="feature-card" key={title}>
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="how-section">
        <div className="content-container centered-content">
          <p className="section-label">// How It Works</p>
          <h2 className="section-title">From Zero to Problem Solver in 4 Steps</h2>
          <div className="steps-grid">
            {steps.map(([number, title, text]) => (
              <article className="step-card" key={number}>
                <div className="step-number">{number}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-inner">
          <h2>Ready to Enter the Arena?</h2>
          <p>Join thousands of learners sharpening their skills and building something together.</p>
          <div className="cta-buttons">
            <Link className="button primary-button" to="/problems">Get Started - It's Free</Link>
            <Link className="button ghost-button" to="/problems">Explore Problems</Link>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <div className="content-container footer-content">
          <div>
            <Link className="nav-logo" to="/">
              <span className="bracket">&#123;</span>Algo Arena<span className="bracket">&#125;</span>
            </Link>
            <p>Empowering the next generation of developers through collaborative problem solving.</p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:hello@algoarena.com">hello@algoarena.com</a></p>
            <p>Support: <Link to="/discussion">Community Discord</Link></p>
            <p>Location: San Francisco, CA</p>
          </div>
          <div>
            <h4>Follow Us</h4>
            <p><a href="#">Twitter</a></p>
            <p><a href="#">GitHub</a></p>
            <p><a href="#">LinkedIn</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Algo Arena. Built for learners, by learners. <span>&#123; code · learn · conquer &#125;</span>
        </div>
      </footer>
    </main>
  );
}

export default Home;
