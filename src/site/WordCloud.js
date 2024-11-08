import React, { useState, useEffect } from 'react';
import WordCloud from 'react-d3-cloud';

const MyWordCloud = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Sample data - you'll want to replace this with your own data
        const sampleData = [
            { text: 'apple', value: 1000 },
            { text: 'banana', value: 80 },
            { text: 'orange', value: 70 },
            { text: 'grape', value: 60 },
            { text: 'pear', value: 50 },
            { text: 'kiwi', value: 40 },
            { text: 'mango', value: 30 },
            { text: 'pineapple', value: 20 },
            { text: 'watermelon', value: 10 },
        ];

        // Simulate clustering of similar words
        const clusteredData = sampleData.map((item) => ({
            ...item,
            x: Math.random() * 500,
            y: Math.random() * 500,
        }));

        setData(clusteredData);
    }, []);

    const fontSizeMapper = (word) => Math.log2(word.value) * 5;
    const rotate = () => (Math.random() < 0.5 ? 90 : 0);

    const handleWordClick = (word) => {
        alert(`You clicked on: ${word.text}`);
    };

    return (
        <div className="w-full h-[500px] flex justify-center items-center">
            <WordCloud
                data={data}
                fontSizeMapper={fontSizeMapper}
                rotate={rotate}
                onWordClick={handleWordClick}
                className="w-full h-full"
            />
        </div>
    );
};

export default MyWordCloud;


