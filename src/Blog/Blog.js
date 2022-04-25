import React, { useEffect, useState } from 'react';
import QandA from './QandA';

const Blog = () => {
    const [answer, setAnswer] = useState([]);
    useEffect(() => {
        fetch('questionAndAns.json')
            .then(res => res.json())
            .then(data => setAnswer(data))
    }, []);

    return (
        <div className='container'>
            <h1 className='text-center mb-3'>Question & Anser</h1>

            {
                answer.map(ans => <QandA
                    key={ans.id}
                    ans ={ans}
                />)
            }



        </div>
    );
};

export default Blog;