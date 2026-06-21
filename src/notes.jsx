import { useState } from "react";
const Notes = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [array, setarray] = useState([]);
  const addarray = (e) => {
    e.preventDefault();
    if (description === "" && title === "") {
      alert("please enter title and disceiption");
      return;
    }
    if (description === "") {
      alert("please enter disceiption");
      settitle(title);
      return;
    }
    if (title === "") {
      alert("please enter title");
      return;
    }

    setarray([
      ...array,
      {
        titleg: title,
        descriptiong: description,
      },
    ]);
    settitle("");
    setdescription("");
  };
  const deletee = (c) => {
    const updatebro = array.filter((item, index) => {
      return index !== c;
    });
    setarray(updatebro);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Notes App
        </h1>

        {/* Add Note Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <form className="space-y-5">
            {/* Title */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Title
              </label>

              <input
                type="text"
                placeholder="Enter note title..."
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
                value={title}
                onChange={(e) => settitle(e.target.value)}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Description
              </label>

              <textarea
                rows="5"
                placeholder="Write your note..."
                className="w-full border border-gray-300 rounded-xl p-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              ></textarea>
            </div>

            {/* Button */}
            <button
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
              onClick={addarray}
            >
              Add Note
            </button>
          </form>
        </div>

        {/* Notes Section */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {array.map((note, index) => (
            <div
              className="flex justify-between items-center bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300"
              key={index}
            > <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {note.titleg}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {note.descriptiong}
              </p>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white cursor-pointer rounded p-1 h-9 w-17" onClick={() => deletee(index)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
