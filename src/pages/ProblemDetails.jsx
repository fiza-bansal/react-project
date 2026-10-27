
import { useParams, Link } from "react-router-dom";
import Compiler from "../Compiler";
import "./ProblemDetails.css";


// Problem details and test cases
const problems = {
  1: {
    title: "Two Sum",
    difficulty: "Easy",
    description:
      "Given an array of integers and a target, return the indices of two numbers whose sum equals the target. Assume exactly one solution exists.",
    input: "2 7 11 15\n9",
    output: "[0, 1]",
    starterCode: `nums = list(map(int, input().split()))
target = int(input())

# Write your solution here`,
    testCases: [
      { input: "2 7 11 15\n9", expected: "[0, 1]" },
      { input: "3 2 4\n6", expected: "[1, 2]" },
      { input: "3 3\n6", expected: "[0, 1]" },
    ],
  },

  2: {
    title: "Valid Parentheses",
    difficulty: "Easy",
    description:
      "Given a string containing parentheses, brackets, and braces, determine whether every opening bracket has a matching closing bracket in the correct order. Print True or False.",
    input: "()[]{}",
    output: "True",
    starterCode: `s = input().strip()

# Write your solution here`,
    testCases: [
      { input: "()", expected: "True" },
      { input: "()[]{}", expected: "True" },
      { input: "(]", expected: "False" },
    ],
  },

  3: {
    title: "Longest Substring Without Repeating Chars",
    difficulty: "Medium",
    description:
      "Given a string, find the length of the longest substring that contains no repeated characters.",
    input: "abcabcbb",
    output: "3",
    starterCode: `s = input().strip()

# Write your solution here`,
    testCases: [
      { input: "abcabcbb", expected: "3" },
      { input: "bbbbb", expected: "1" },
      { input: "pwwkew", expected: "3" },
    ],
  },

  4: {
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    description:
      "Given K sorted lists of integers, merge them into one sorted list and print the result. Input contains K on the first line, followed by K lines of space-separated integers.",
    input: "3\n1 4 5\n1 3 4\n2 6",
    output: "[1, 1, 2, 3, 4, 4, 5, 6]",
    starterCode: `k = int(input())

lists = []
for i in range(k):
    lists.append(list(map(int, input().split())))

# Merge the lists and print the result`,
    testCases: [
      {
        input: "3\n1 4 5\n1 3 4\n2 6",
        expected: "[1, 1, 2, 3, 4, 4, 5, 6]",
      },
      {
        input: "2\n1 2\n3 4",
        expected: "[1, 2, 3, 4]",
      },
      {
        input: "2\n-3 0\n-2 5",
        expected: "[-3, -2, 0, 5]",
      },
    ],
  },

  5: {
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    description:
      "Given a binary tree represented by level-order values with no missing nodes, print its values level by level as a list of lists.",
    input: "1 2 3 4 5",
    output: "[[1], [2, 3], [4, 5]]",
    starterCode: `values = list(map(int, input().split()))

# Build the tree and print level-order traversal`,
    testCases: [
      { input: "1 2 3 4 5", expected: "[[1], [2, 3], [4, 5]]" },
      { input: "1 2 3", expected: "[[1], [2, 3]]" },
      { input: "1", expected: "[[1]]" },
    ],
  },

  6: {
    title: "Coin Change",
    difficulty: "Medium",
    description:
      "Given coin denominations and an amount, return the minimum number of coins needed to make that amount. Print -1 if it is impossible.",
    input: "1 2 5\n11",
    output: "3",
    starterCode: `coins = list(map(int, input().split()))
amount = int(input())

# Find the minimum number of coins`,
    testCases: [
      { input: "1 2 5\n11", expected: "3" },
      { input: "2\n3", expected: "-1" },
      { input: "1\n0", expected: "0" },
    ],
  },

  7: {
    title: "Word Ladder II",
    difficulty: "Hard",
    description:
      "Find all shortest transformation sequences from the beginning word to the ending word. Change one letter at a time, and every intermediate word must belong to the given word list. Print the list of shortest paths in sorted order.",
    input: "hit\ncog\nhot dot dog lot log cog",
    output:
      "[['hit', 'hot', 'dot', 'dog', 'cog'], ['hit', 'hot', 'lot', 'log', 'cog']]",
    starterCode: `beginWord = input().strip()
endWord = input().strip()
wordList = input().split()

# Find all shortest transformation paths
# Sort the resulting paths before printing`,
    testCases: [
      {
        input: "hit\ncog\nhot dot dog lot log cog",
        expected:
          "[['hit', 'hot', 'dot', 'dog', 'cog'], ['hit', 'hot', 'lot', 'log', 'cog']]",
      },
      { input: "a\nc\na b c", expected: "[['a', 'c']]" },
      { input: "hit\ncog\nhot dot dog", expected: "[]" },
    ],
  },

  8: {
    title: "Find Median from Data Stream",
    difficulty: "Hard",
    description:
      "Read integers one by one. After each integer, calculate the median of all numbers read so far. Print the medians as a list of numbers.",
    input: "5 15 1 3",
    output: "[5.0, 10.0, 5.0, 4.0]",
    starterCode: `nums = list(map(int, input().split()))

# Calculate the median after each number`,
    testCases: [
      { input: "5 15 1 3", expected: "[5.0, 10.0, 5.0, 4.0]" },
      { input: "2 4 6", expected: "[2.0, 3.0, 4.0]" },
      { input: "1 2", expected: "[1.0, 1.5]" },
    ],
  },

  9: {
    title: "Climbing Stairs",
    difficulty: "Easy",
    description:
      "You are climbing a staircase with N steps. You can climb either one or two steps at a time. Print the total number of distinct ways to reach the top.",
    input: "4",
    output: "5",
    starterCode: `n = int(input())

# Calculate the number of ways`,
    testCases: [
      { input: "1", expected: "1" },
      { input: "2", expected: "2" },
      { input: "4", expected: "5" },
    ],
  },

  10: {
    title: "Maximum Subarray",
    difficulty: "Medium",
    description:
      "Given an integer array, find the contiguous subarray with the largest sum. Print that sum.",
    input: "-2 1 -3 4 -1 2 1 -5 4",
    output: "6",
    starterCode: `nums = list(map(int, input().split()))

# Find the maximum subarray sum`,
    testCases: [
      { input: "-2 1 -3 4 -1 2 1 -5 4", expected: "6" },
      { input: "1", expected: "1" },
      { input: "5 4 -1 7 8", expected: "23" },
    ],
  },
};

function ProblemDetails() {
  const { id } = useParams();
  const currentId = Number(id);
  const totalProblems = 10;
  const problem = problems[id];

  if (!problem) {
    return (
      <main className="page problem-details-page">
        <div className="content-container">
          <h1>Problem not found</h1>
          <Link to="/problems">Back to Problems</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page problem-details-page">
      <div className="details-topbar">
        <Link to="/problems" className="back-link">
          ← All Problems
        </Link>

        <span>
          PROBLEM {currentId} OF {totalProblems}
        </span>

        <div className="problem-navigation">
          <button
            className="button ghost-button"
            disabled={currentId <= 1}
            onClick={() => {
              window.location.href = `/react-project/problems/${currentId - 1}`;
            }}
          >
            ← Previous
          </button>

          <button
            className="button primary-button"
            disabled={currentId >= totalProblems}
            onClick={() => {
              window.location.href = `/react-project/problems/${currentId + 1}`;
            }}
          >
            Next →
          </button>
        </div>
      </div>

      <div className="details-layout">
        {/* Left: Problem description */}
        <section className="details-panel description-panel">
          <p className="section-label">// Problem Description</p>

          <h1>{problem.title}</h1>

          <span className={`difficulty ${problem.difficulty.toLowerCase()}`}>
            {problem.difficulty}
          </span>

          <p className="problem-description">{problem.description}</p>

          <h3>Sample Input</h3>
          <pre>{problem.input}</pre>

          <h3>Expected Output</h3>
          <pre>{problem.output}</pre>

          <h3>Test Cases</h3>

          {problem.testCases.map((test, index) => (
            <div className="sample-case" key={index}>
              <strong>Example {index + 1}</strong>
              <p>Input: {test.input}</p>
              <p>Expected: {test.expected}</p>
            </div>
          ))}
        </section>

        {/* Right: Existing OnlineCompiler widget */}
        <section className="details-panel editor-panel">
          <Compiler />
        </section>
      </div>
    </main>
  );
}

export default ProblemDetails;
