"use client";

import { useEffect, useState, useRef } from "react";
import mermaid from "mermaid";

export default function MermaidChart({ input }: { input: string }) {
  const [chartDefinition, setChartDefinition] = useState<string | null>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartKey, setChartKey] = useState(0); // Force re-render key

  useEffect(() => {
    if (!input) return; // Prevents fetching on empty input

    const fetchData = async () => {
      try {
        const res = await fetch("/api/gemini", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input }),
        });

        const data = await res.json();
        console.log(data);
        if (data.output?.Careergraph) {
          setChartDefinition(data.output.Careergraph);
          setChartKey((prev) => prev + 1); // Update key to force re-render
        } else {
          setChartDefinition(null); // Handle missing graph data
        }
      } catch (error) {
        console.error("Error fetching Mermaid data:", error);
        setChartDefinition(null); // Ensure fallback if API fails
      }
    };

    fetchData();
  }, [input]); // Re-fetch when input changes

  useEffect(() => {
    if (chartDefinition && chartRef.current) {
      try {
        mermaid.initialize({ startOnLoad: false });
        mermaid
          .render(`careerChart-${chartKey}`, chartDefinition)
          .then(({ svg }) => {
            if (chartRef.current) {
              chartRef.current.innerHTML = svg;
            }
          })
          .catch((err) => {
            console.error("Mermaid render error:", err);
            setChartDefinition(null); // Fallback if rendering fails
          });
      } catch (error) {
        console.error("Mermaid initialization error:", error);
        setChartDefinition(null);
      }
    }
  }, [chartKey]); // Re-run when chartDefinition updates

  return (
    <div ref={chartRef} className="mermaid w-full" key={chartKey}>
      {!chartDefinition && <p className="text-gray-500">Loading chart...</p>}
    </div>
  );
}
