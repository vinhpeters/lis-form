import { Formik, Form, Field } from "formik";
import { useState } from "react";

function validateName(value) {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
}
function validateTitle(value) {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
}

export default function App() {
  const [showForm, toggleShowForm] = useState(true);
  const [records, setRecords] = useState([]);

  return (
    <>
      {showForm ? (
        <div className="w-1/2 m-auto mt-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          <h1 className="text-2xl mb-4">Register</h1>
          <Formik
            initialValues={{
              name: "",
              age: 0,
              title: "",
              hometown: "",
            }}
            onSubmit={(values) => {
              setRecords([values, ...records]);
              toggleShowForm(!showForm);
            }}
          >
            {({ errors, touched }) => (
              <Form >
                <div>
                  <label
                    htmlFor="title"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Title:{" "}
                  </label>
                  {touched.title && errors.title && (
                    <div style={{ color: "red" }}>{errors.title}</div>
                  )}
                  <Field
                    as="select"
                    id="title"
                    name="title"
                    validate={validateTitle}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value=""></option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Mr.">Mr.</option>
                  </Field>
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name:{" "}
                  </label>
                  {touched.name && errors.name && (
                    <div style={{ color: "red" }}>{errors.name}</div>
                  )}
                  <Field
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="John Doe"
                    type="text"
                    validate={validateName}
                  />
                </div>

                <div>
                  <label
                    htmlFor="age"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Age:{" "}
                  </label>
                  <Field
                    id="age"
                    name="age"
                
                    type="number"
               
                    min = "0"
                    max="150"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hometown"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Hometown:{" "}
                  </label>
                  <Field
                    id="hometown"
                    name="hometown"
                    type="text"
                    placeholder="Columbus"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-4"
                  onClick={() => toggleShowForm(false)}
                >
                  Show Records
                </button>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <div className="w-1/2  m-auto mt-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          <h1 className="text-2xl">Records</h1>
          <table className="w-full text-left ">
        <thead>
            <tr>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Age
                </th>
                <th scope="col" className="px-6 py-3">
                    Hometown
                </th>
            </tr>
        </thead>
            <tbody>
              {records.map((record, index) => {
                return (
                  <tr key={index} className="border-b">
                    <td className="px-6 py-4">{record.title}</td>
                    <td className="px-6 py-4">{record.name}</td>
                    <td className="px-6 py-4">{record.age === 0 ? "" : record.age }</td>
                    <td className="px-6 py-4">{record.hometown}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-4"
            onClick={() => toggleShowForm(true)}
          >
            Back to form
          </button>
        </div>
      )}
    </>
  );
}
