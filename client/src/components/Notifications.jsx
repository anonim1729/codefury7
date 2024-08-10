import React, { useContext, useEffect, useState } from 'react';
import { formatDistanceToNow, isValid } from 'date-fns';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios';

const Notifications = () => {
    const API_URL = import.meta.env.VITE_BACKEND_URL;
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const { location, role, user } = useContext(AuthContext);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get(`${API_URL}/messages?location=${location}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setMessages(response.data);
            } catch (err) {
                console.error('Error fetching messages:', err);
            }
        };
        fetchMessages();
    }, [location]);

    const addMessage = async () => {
        try {
            const response = await axios.post(`${API_URL}messages`, {
                email: user,
                message: newMessage,
                location,
                messagedAt: new Date(),
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });

            if (messages.length > 0) {
                setMessages([...messages, response.data.newMessage]);
            } else {
                setMessages([response.data.newMessage]);
            }

            setNewMessage('');
        } catch (err) {
            console.error('Error adding message:', err.response?.data?.message || err.message);
        }
    };


    const handleSendMessage = () => {
        addMessage();
        setNewMessage('');
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-100 p-4 md:p-8">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-xl overflow-hidden border-blue-500 border-2 flex flex-col">
                {/* Title */}
                <div className="bg-blue-500 text-white text-center py-3 text-2xl font-semibold">
                    Announcements
                </div>

                {/* Messages Area */}
                <div className="flex-1 p-4 overflow-y-auto" style={{ maxHeight: '70vh', minHeight: '400px' }}>
                    {messages.length > 0 ? (
                        messages.map((message, index) => {
                            const messageTime = new Date(message.messagedAt);
                            const timeAgo = isValid(messageTime) ? `${formatDistanceToNow(messageTime)} ago` : 'Invalid date';
                            return (
                                <div key={index} className="mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="text-gray-700 font-semibold">
                                            {message.email.split('@')[0]}
                                        </div>
                                        <div className="text-gray-500 text-sm">
                                            {timeAgo}
                                        </div>
                                    </div>
                                    <div className="bg-blue-100 text-blue-900 text-lg px-4 py-2 rounded-lg max-w-xl">
                                        {message.message}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-center text-gray-500 text-lg">
                            No announcements yet!
                        </div>
                    )}
                </div>

                {/* Input Area */}
                {role === 'volenteer' ? (
                    <div className="bg-blue-500 p-2 flex items-center">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 p-2 text-md rounded-lg outline-none border-2 border-blue-500 focus:border-white transition duration-300"
                        />
                        <button
                            className="ml-2 px-4 py-2 bg-white text-blue-500 text-md font-semibold rounded-lg hover:bg-blue-100 transition duration-300"
                            onClick={handleSendMessage}
                        >
                            Send
                        </button>
                    </div>
                ) : (
                    <div className="bg-gray-200 text-gray-600 p-4 text-center">
                        You don't have permission to do announcements.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Notifications;
