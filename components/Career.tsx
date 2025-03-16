"use client";

import { useEffect, useState } from "react";
import MermaidChart from "@/components/CareerGraph";
import CareerGuide from "@/components/CareerGuide";
import { useUser } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase";

export default function CareerPage() {
  const { user } = useUser();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [int, setInt] = useState(0);
  const saveUserToDB = async (id: string, email: string) => {
    const { error } = await supabase.from("users").upsert([{ id, email }]); // Upsert ensures user is created if not existing

    if (error) console.error("Error saving user:", error);
  };

  useEffect(() => {
    if (user) {
      saveUserToDB(user.id, user.primaryEmailAddress?.emailAddress || "");
      fetchUserSkills(user.id);
      console.log(user);
    }
  }, [user]);

  const fetchUserSkills = async (id: string) => {
    const { data, error } = await supabase
      .from("users")
      .select("skills")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching skills:", error);
      return;
    }

    if (data?.skills) {
      setInput(data.skills); // Populate input with stored skills
      setInt(int + 1);
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    setOutput(null);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });

      const data = await res.json();
      setOutput(data.output);
    } catch (error) {
      console.error("Error generating career path:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGenerate();
  }, [int]);

  return (
    <div className="p-6 rounded-lg text-black  w-full h-full flex">
      {/* Show results only when output is available */}
      {output && (
        <div className="mt-6 flex flex-wrap w-full">
          <div className="min-w-1/2 h-dvh flex justify-center items-start">
            <MermaidChart input={input} />
          </div>
          <CareerGuide structuredOutput={output} />
        </div>
      )}
    </div>
  );
}
