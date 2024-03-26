import React, { useState } from "react";

const Gallary = () => {
  const [data, setData] = useState<
    Array<{ id: string; urls: { small_s3: string } }>
  >([]);
  const [input, setInput] = useState("");

  return (
    <>
      <SearchPart input={input} setInput={setInput} setData={setData} />
      <OutputPart data={data} input={input} />
    </>
  );
};

interface SearchPartProps {
  input: string;
  setInput: (data: string) => void;
  setData: (data: Array<{ id: string; urls: { small_s3: string } }>) => void;
}

const SearchPart: React.FC<SearchPartProps> = ({
  input,
  setInput,
  setData,
}) => {
  const handleClick = async () => {
    const showData = await getData(input);
    setData(showData);
    console.log(showData);
  };
  return (
    <>
      <div className="w-4/5 md:w-1/2 mx-auto mt-8 mb-4 p-4 flex flex-col justify-center">
        <input
          className="rounded p-2 placeholder:text-sm my-4"
          type="text"
          name=""
          id=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Photos..."
        />
        <button
          className="bg-orange-500 text-white rounded w-fit px-3 py-2 mx-auto"
          onClick={handleClick}
        >
          Get Photos
        </button>
      </div>
    </>
  );
};

const OutputPart = ({
  data,
  input,
}: {
  data: Array<{ id: string; urls: { small_s3: string } }>;
  input: string;
}) => {
  return (
    <>
      <h2 className="text-center text-2xl font-semibold capitalize">
        {input} has {data.length} results
      </h2>
      <div className="w-full md:w-2/3 mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        {data.map((item: { id: string; urls: { small_s3: string } }) => (
          <img
            key={item.id}
            src={item.urls.small_s3}
            alt=""
            className="w-full h-full object-cover rounded"
          />
        ))}
      </div>
    </>
  );
};

const getData = async (input: string) => {
  const accessKey = "IFR1Z8VcejkJQJk3BSUwlShVelzGBIIiOKs0kukDjyQ";
  const responce = await fetch(
    `https://api.unsplash.com/search/photos?query=${input}&per_page=12`,
    {
      method: "GET",
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    }
  );
  const data = await responce.json();
  console.log(data);

  return data.results;
};

export default Gallary;
