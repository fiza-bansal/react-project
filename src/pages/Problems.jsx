import { useState } from "react";

const problems = [
  { id: 1, title: "Two Sum", difficulty: "Easy", topic: "Array", tags: ["array", "hashmap"] },
  { id: 2, title: "Valid Parentheses", difficulty: "Easy", topic: "Stack / Queue", tags: ["stack", "string"] },
  { id: 3, title: "Longest Substring Without Repeating Chars", difficulty: "Medium", topic: "String", tags: ["sliding-window", "string"] },
  { id: 4, title: "Merge K Sorted Lists", difficulty: "Hard", topic: "Linked List", tags: ["heap", "linked-list"] },
  { id: 5, title: "Binary Tree Level Order Traversal", difficulty: "Medium", topic: "Tree", tags: ["tree", "BFS"] },
  { id: 6, title: "Coin Change", difficulty: "Medium", topic: "Dynamic Programming", tags: ["dp", "bfs"] },
  { id: 7, title: "Word Ladder II", difficulty: "Hard", topic: "Graph", tags: ["graph", "BFS"] },
  { id: 8, title: "Find Median from Data Stream", difficulty: "Hard", topic: "Heap", tags: ["heap", "design"] },
  { id: 9, title: "Climbing Stairs", difficulty: "Easy", topic: "Dynamic Programming", tags: ["dp", "math"] },
  { id: 10, title: "Maximum Subarray", difficulty: "Medium", topic: "Array", tags: ["array", "dp"] },
];

const topics = ["Array", "String", "Tree", "Graph", "Dynamic Programming", "Stack / Queue", "Binary Search", "Linked List"];

function Problems() {
  // Stores the text entered into the search box.
  const [search, setSearch] = useState("");
  // Stores the difficulty selected by the user.
  const [difficulty, setDifficulty] = useState("All");
  // Stores the topic selected from the topic chips or sidebar.
  const [topic, setTopic] = useState("All");

  // Show only problems that match every active filter.
  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = problem.title.toLowerCase().includes(search.toLowerCase());
    const matchesDifficulty = difficulty === "All" || problem.difficulty === difficulty;
    const matchesTopic = topic === "All" || problem.topic === topic;
    return matchesSearch && matchesDifficulty && matchesTopic;
  });

  return (
    <main className="page problems-page">
      <section className="problems-header">
        <div className="content-container">
          <div className="header-row">
            <div>
              <p className="section-label">// Problem Set</p>
              <h1 className="page-title">Coding Challenges</h1>
            </div>
            <label className="search-bar">
              <span aria-hidden="true">⌕</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search problems..."
                aria-label="Search problems"
              />
            </label>
          </div>
          <div className="filter-row">
            <button
              className={`filter-chip ${difficulty === "All" && topic === "All" ? "active" : ""}`}
              onClick={() => { setDifficulty("All"); setTopic("All"); }}
            >
              All
            </button>
            {["Easy", "Medium", "Hard"].map((level) => (
              <button
                key={level}
                className={`filter-chip ${level.toLowerCase()} ${difficulty === level ? "active" : ""}`}
                onClick={() => setDifficulty(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="problems-layout content-container">
        <section>
          <div className="problem-table">
            <div className="table-head">
              <span>#</span>
              <span>Title</span>
              <span>Difficulty</span>
            </div>
            {filteredProblems.map((problem) => (
              <article className="problem-row" key={problem.id}>
                <span className="row-number">{problem.id}</span>
                <div className="row-title-wrap">
                  <strong>{problem.title}</strong>
                  <div className="row-tags">
                    {problem.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span className={`difficulty ${problem.difficulty.toLowerCase()}`}>
                  {problem.difficulty}
                </span>
              </article>
            ))}
          </div>
          {filteredProblems.length === 0 && <p className="empty-state">No problems match those filters.</p>}
        </section>

        <aside className="sidebar">
          <div className="sidebar-card">
            <h2>🗂️ Topics</h2>
            <div className="sidebar-body topic-list">
              {topics.map((item) => (
                <button
                  className={`topic-row ${topic === item ? "selected" : ""}`}
                  key={item}
                  onClick={() => setTopic(topic === item ? "All" : item)}
                >
                  <span>{item}</span>
                  <small>{problems.filter((problem) => problem.topic === item).length}</small>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <footer className="simple-footer">© 2026 Algo Arena. <span>&#123; code · learn · conquer &#125;</span></footer>
    </main>
  );
}

export default Problems;
