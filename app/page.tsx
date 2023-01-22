"use client";
import React, { useState, useEffect } from "react";
import "../styles/globals.css";

type Persons = {
  name: string;
};

function Home() {
  const [name, setName] = useState("");
  const [filteredNames, setFilterednames] = useState<Persons[]>([]);

  const data: Persons[] = [
    {
      name: "Faizan Shaikh",
    },
    {
      name: "Jassir Ahmed",
    },
    {
      name: "Mohammed Azhar",
    },
    {
      name: "Shruti Jadhav",
    },
    {
      name: "Sirajuddin Mustafa",
    },
  ];

  useEffect(() => {
    if (name) {
      setFilterednames(
        data.filter((person) => {
          return person.name.match(new RegExp(name, "gi"));
        })
      );
    }
  }, [name]);

  return (
    <>
      <form>
        <label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
      {filteredNames.length ? <List filteredNames={filteredNames} /> : false}
    </>
  );
}

const List = ({ filteredNames }: { filteredNames: Persons[] }) => {
  return (
    <div>
      {filteredNames.map((person) => (
        <span>{person.name}</span>
      ))}
    </div>
  );
};

export default Home;
