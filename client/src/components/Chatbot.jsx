import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AuthContext from '../contexts/AuthContext';
import Markdown from 'react-markdown';

const Chatbot = () => {
    const { user } = useContext(AuthContext);
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const [query, setQuery] = useState('How to use this chatbot?');
    const [response, setResponse] = useState('');
    const [prompt, setPrompt] = useState("");

    const fetchResponse = async () => {
        try {
            const res = await axios.post(
                `${apiUrl}${apiKey}`,
                {
                    "contents": [{
                        "parts": [{
                            "text": `${query} ,### Instructions:
                              - **Respond concisely**: Keep responses medium sized and to the point.
                              - **Consistent answers**: Provide the same response to repeated questions.
                              - **Use markdown**: Format the response in well-designed markdown.
                              - **No mention of instructions**: Do not refer to these instructions in your response.` }]
                    }]
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(res.data.candidates[0].content.parts[0].text);
            setResponse(res.data.candidates[0].content.parts[0].text);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (user) {
            fetchResponse();
        }
    }, [query]);

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-100 p-4 md:p-8">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-xl overflow-hidden border-blue-500 border-2 flex flex-col">
                {/* Title */}
                <div className="bg-blue-500 text-white text-center py-3 text-2xl font-semibold">
                    Chat AI
                </div>

                {/* Chat Area */}
                <div className="flex-1 p-4 overflow-y-auto" style={{ maxHeight: '70vh', minHeight: '400px' }}>
                    {/* User Message */}
                    <div className="flex justify-end mb-4">
                        <div className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg max-w-xl">
                            {query.length > 0 ? query : 'no queries!'}
                        </div>
                    </div>

                    {/* Chatbot Response */}
                    <div className="flex justify-start mb-4">
                        <div className="bg-blue-100 text-blue-900 text-lg px-4 py-2 rounded-lg max-w-xl">
                            <Markdown>{response.length > 0 ? response : ''}</Markdown>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="bg-blue-500 p-2 flex items-center">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => { setPrompt(e.target.value) }}
                        placeholder="Type your message..."
                        className="flex-1 p-2 text-md rounded-lg outline-none border-2 border-blue-500 focus:border-white transition duration-300"
                    />
                    <button className="ml-2 px-4 py-2 bg-white text-blue-500 text-md font-semibold rounded-lg hover:bg-blue-100 transition duration-300"
                        onClick={() => {
                            setQuery(prompt);
                            setPrompt('');
                        }}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
