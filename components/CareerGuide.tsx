"use client";

import { useEffect, useState } from "react";

interface CareerGuideProps {
  structuredOutput: any;
}

export default function CareerGuide({ structuredOutput }: CareerGuideProps) {
  const [careerGuide, setCareerGuide] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("structuredOutput updated:", structuredOutput); // Debugging

    if (!structuredOutput) {
      setCareerGuide(null); // Clear previous data when output is empty
      return;
    }

    const fetchCareerGuide = async () => {
      setLoading(true);
      setCareerGuide(null); // Reset before new data

      try {
        const guideRes = await fetch("/api/career-guide", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ structuredOutput }),
        });

        const guideData = await guideRes.json();
        setCareerGuide(guideData.careerGuide);
      } catch (error) {
        console.error("Error fetching career guide:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCareerGuide();
  }, [JSON.stringify(structuredOutput)]); // Use stringified value to detect deep changes

  if (!structuredOutput) return null;

  return (
    <div className="mt-4 p-4 rounded-lg shadow h-full overflow-y-scroll bg-amber-50 flex-1">
      <h3 className="text-lg font-bold">Career Guide</h3>
      {loading ? (
        <p>Loading career guide...</p>
      ) : (
        <p className="whitespace-pre-wrap">{careerGuide}</p>
      )}
    </div>
  );
}
