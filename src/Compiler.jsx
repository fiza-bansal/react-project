
import { useEffect, useRef, useState } from "react";

function Compiler() {
  const compilerRef = useRef(null);
  const [output, setOutput] = useState("");

  useEffect(() => {
    const compiler = compilerRef.current;

    if (!compiler) return;

    function handleResult(event) {
      const result = event.detail;

      setOutput(
        result?.error ||
        result?.output ||
        "Program executed with no output."
      );
    }

    function handleReady(event) {
      console.log("Compiler is ready:", event.detail);
    }

    compiler.addEventListener("runcode:result", handleResult);
    compiler.addEventListener("runcode:ready", handleReady);

    return () => {
      compiler.removeEventListener("runcode:result", handleResult);
      compiler.removeEventListener("runcode:ready", handleReady);
    };
  }, []);

  return (
    <div>
      <h2>AlgoArena Compiler</h2>

      <div
        ref={compilerRef}
        className="runcode"
        data-key="9b676e18c0ad6a0586a3fd593350460d"
        data-lang="python-3.14"
      >
        <pre>{`print("Hello, AlgoArena!")`}</pre>
      </div>

      <h3>Execution Result</h3>
      <pre>{output}</pre>
    </div>
  );
}

export default Compiler;
