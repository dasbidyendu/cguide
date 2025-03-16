"use client";

import React, { useState } from "react";

interface QuestionProps {
  option: string[];
  onSelect: (selected: string[]) => void; // Callback to update parent state
}

const Question: React.FC<QuestionProps> = ({ option, onSelect }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    item: string
  ) => {
    let updatedSelections = [...selectedOptions];

    if (event.target.checked) {
      updatedSelections.push(item);
    } else {
      updatedSelections = updatedSelections.filter((opt) => opt !== item);
    }

    setSelectedOptions(updatedSelections);
    onSelect(updatedSelections); // Send selected options to the parent component
  };

  return (
    <div>
      {option.map((item) => (
        <div
          key={item}
          className="text-blue-950 flex flex-row flex-wrap gap-5 px-10 font-medium text-lg"
        >
          <input
            type="checkbox"
            onChange={(e) => handleCheckboxChange(e, item)}
          />
          <h4>{item}</h4>
        </div>
      ))}
    </div>
  );
};

export default Question;
