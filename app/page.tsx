"use client";
import React, { useState, useEffect } from "react";
import "../styles/globals.css";

type Persons = {
  name: string;
  id: number;
  imagePath: string;
};

function Home() {
  const [name, setName] = useState("");
  const [filteredNames, setFilterednames] = useState<Persons[]>([]);
  const [selectedPersons, setSelectedPersons] = useState<Persons[]>([]);
  const [gridSize, setGridSize] = useState(2);

  const data: Persons[] = [
    {
      name: "Faizan Shaikh",
      id: 1,
      imagePath:
        "https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993__340.png",
    },
    {
      name: "Jassir Ahmed",
      id: 2,
      imagePath:
        "https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993__340.png",
    },
    {
      name: "Mohammed Azhar",
      id: 3,
      imagePath:
        "https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993__340.png",
    },
  ];

  useEffect(() => {
    if (name) {
      setFilterednames(
        data.filter((person) => {
          return person.name.match(new RegExp(name, "gi"));
        })
      );
    } else {
      setFilterednames([]);
    }
  }, [name]);

  const onClickHandler = (personId: number) => {
    let person = data.find(({ id }) => {
      return personId == id;
    });
    if (person) {
      selectedPersons.push(person);
      setSelectedPersons([...selectedPersons]);
    }
  };

  useEffect(() => {
    if (selectedPersons.length <= 2) {
      setGridSize(2);
    } else if (selectedPersons.length == 3 || selectedPersons.length == 4) {
      setGridSize(selectedPersons.length);
    }
  }, [selectedPersons]);

  return (
    <>
      <form>
        <label>
          <input
            className="p-[10px] w-[25%] text-[16px] mb-4"
            type="text"
            value={name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
      <div className="w-[25%]">
        {filteredNames.length ? (
          <List onClickHandler={onClickHandler} filteredNames={filteredNames} />
        ) : (
          false
        )}
      </div>

      <div>
        <div className={`grid grid-cols-${gridSize} gap-4`}>
          {selectedPersons.map((person) => (
            <div
              onClick={() => {
                onClickHandler(person.id);
              }}
              className="bg-[#fff] flex items-center justify-center flex-col p-4"
            >
              <img
                width="300px"
                height="300px"
                className="rounded-full"
                src={person.imagePath}
              />
              <p className="text-2xl mt-4">{person.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const List = ({
  filteredNames,
  onClickHandler,
}: {
  filteredNames: Persons[];
  onClickHandler: Function;
}) => {
  return (
    <ul>
      {filteredNames.map((person) => (
        <li
          onClick={() => {
            onClickHandler(person.id);
          }}
          className="m-[10px] border-b border-[#c0c0c0] cursor-pointer"
        >
          {person.name}
        </li>
      ))}
    </ul>
  );
};

export default Home;
