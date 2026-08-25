import { useMemo, useState } from "react";

const filterLabels = ["All", "Questions", "Approaches", "Hints"];

const categoryMap = {
  All: "All",
  Questions: "Question",
  Approaches: "Approach",
  Hints: "Hint",
};

const initialDiscussions = [
  {
    id: 1,
    user: "Priyanshi",
    title: "Can someone explain the HashMap approach?",
    description:
      "I am trying to solve Two Sum using a hashmap, but I am confused about why we store the complement value instead of the current index. Can someone explain the logic step by step?",
    category: "Question",
    upvotes: 12,
    liked: false,
    commentCount: 5,
  },
  {
    id: 2,
    user: "Karan",
    title: "Brute force solution is simple, but can it be optimized?",
    description:
      "My first solution checks every pair, and it works, but I want to understand how to improve it. What changes when we use a map instead of nested loops?",
    category: "Approach",
    upvotes: 18,
    liked: false,
    commentCount: 4,
  },
  {
    id: 3,
    user: "Nisha",
    title: "Hint: think about the difference between value and index",
    description:
      "I solved the problem partly, but I keep mixing up the number values and their positions in the array. Any hint to keep the logic clear?",
    category: "Hint",
    upvotes: 7,
    liked: false,
    commentCount: 2,
  },
  {
    id: 4,
    user: "Rohit",
    title: "Why does the map store the index and not just the value?",
    description:
      "I understand the idea of checking complements, but I want to know why we need the index too. Is it required to return the pair of positions?",
    category: "Question",
    upvotes: 15,
    liked: false,
    commentCount: 6,
  },
  {
    id: 5,
    user: "Aditi",
    title: "One-pass strategy explained with a small example",
    description:
      "I want to share a small dry run of the algorithm. It may help others understand what happens in each iteration and why the answer is found efficiently.",
    category: "Approach",
    upvotes: 22,
    liked: false,
    commentCount: 8,
  },
  {
    id: 6,
    user: "Zaid",
    title: "Small debugging tip: check for duplicates carefully",
    description:
      "If your array has repeated numbers, be careful with the map update order. I nearly returned the wrong positions before realizing the value already existed.",
    category: "Hint",
    upvotes: 9,
    liked: false,
    commentCount: 3,
  },
];

function Discussion() {
  const [discussions, setDiscussions] = useState(initialDiscussions);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  const filteredDiscussions = useMemo(() => {
    return discussions.filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesFilter =
        activeFilter === "All" || post.category === categoryMap[activeFilter];

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, discussions, searchText]);

  function toggleUpvote(id) {
    setDiscussions((prevDiscussions) =>
      prevDiscussions.map((post) => {
        if (post.id !== id) return post;

        const nextLiked = !post.liked;
        const newCount = nextLiked ? post.upvotes + 1 : post.upvotes - 1;

        const updatedPost = {
          ...post,
          liked: nextLiked,
          upvotes: newCount,
        };

        return updatedPost;
      })
    );
  }

  return (
    <main className="page discussion-page">
      <div className="content-container discussion-shell">
        <div className="discussion-main">
          <section className="discussion-content">
            <div className="discussion-title-row">
              <div>
                <h1>Discussion</h1>
                <p>Ask questions, share approaches and learn from others.</p>
              </div>
            </div>

            <div className="filter-row discussion-filters">
              {filterLabels.map((label) => (
                <button
                  key={label}
                  type="button"
                  className={`filter-chip ${activeFilter === label ? "active" : ""}`}
                  onClick={() => setActiveFilter(label)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="discussion-list">
              {filteredDiscussions.length > 0 ? (
                filteredDiscussions.map((post) => (
                  <article key={post.id} className="discussion-card">
                    <div className="discussion-card-top">
                      <div className="discussion-card-user">
                        <span className="student-avatar">{post.user.charAt(0)}</span>
                        <span>Asked by {post.user}</span>
                      </div>
                      <span className="discussion-tag">{post.category}</span>
                    </div>

                    <h3>{post.title}</h3>
                    <p>{post.description}</p>

                    <div className="discussion-card-footer">
                      <div className="discussion-metrics">
                        <button
                          type="button"
                          className={`vote-button ${post.liked ? "voted" : ""}`}
                          onClick={() => toggleUpvote(post.id)}
                        >
                          👍 {post.upvotes}
                        </button>
                        <span>💬 {post.commentCount}</span>
                      </div>

                    </div>
                  </article>
                ))
              ) : (
                <div className="empty-state">No discussions match this search.</div>
              )}
            </div>

          </section>

          <aside className="discussion-sidebar">
            <div className="search-bar discussion-search">
              <span>⌕</span>
              <input
                type="text"
                value={searchText}
                placeholder="Search discussions..."
                onChange={(event) => setSearchText(event.target.value)}
              />
            </div>
            <div className="sidebar-card">
              <h2>Community Guidelines</h2>
              <div className="sidebar-body guidelines-box">
                <ul>
                  <li>Be respectful and helpful to other learners</li>
                  <li>Ask clear questions with enough context</li>
                  <li>Avoid posting complete solutions unnecessarily</li>
                  <li>Share your approach, even if it is not fully solved</li>
                  <li>Use proper code formatting and explain your idea</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Discussion;
