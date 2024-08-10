import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = 'AIzaSyCfiz3MeNqaLYUM5OaGM4QMsR1c-6WruoY';

const AdditionalInfo = ({ disas }) => {
  const [data, setData] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const fetchData = async (infoType) => {
    
    try {
      // Initialize the Google Generative AI client
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Customize the prompt based on the button clicked
      const prompt = `Give ${infoType} for ${disas} using this JSON schema:
      { 
        "name": "string",
        "steps": [
          {
            "stepNo": Number,
            "step": String
          },
        ]
      }`;

      // Generate the content using the model
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

      // Parse the JSON response
      const parsedData = parseBacktickJSON(text);
      setData(parsedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    } finally {
      setLoading1(false);
      setLoading2(false);
    }
  };

  const parseBacktickJSON = (backtickJsonString) => {
    try {
      const jsonString = backtickJsonString.replace(/^\s*```json/, '').replace(/```\s*$/, '').trim();
      const jsonObject = JSON.parse(jsonString);
      return jsonObject;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg m-5">
      <div className="flex space-x-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          onClick={() =>{ 
            setLoading1(true);
            fetchData("information on how to be prepared")
        }}
        >
          {loading1 ? 'Loading...' : 'How to be prepared'}
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          onClick={() => {
            setLoading2(true);
            fetchData("immediate actions to take")
        }}
        >
          {loading2 ? 'Loading...' : 'Immediate actions'}
        </button>
      </div>

      {data && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-blue-600">{data.name}</h2>
          <ul className="mt-2 space-y-2">
            {data.steps.map((step, index) => (
              <li key={index} className="text-gray-700">
                <strong>Step {step.stepNo}:</strong> {step.step}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdditionalInfo;
