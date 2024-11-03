// src/pages/JavaApiPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JavaApiPage = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Call the Java backend API
    const fetchMessage = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/helloworld');
        setMessage(response.data);
      } catch (err) {
        setError('Failed to fetch message from Java API');
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Java API Response</h1>
      <p>{message}</p>
    </div>
  );
};

export default JavaApiPage;
