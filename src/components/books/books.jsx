import React, { useEffect,useState } from 'react';

const Books = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
            fetch('/books.json') 
              .then(response => response.json())
              .then(data => setData(data))
              .catch(error => console.error('Error fetching data:', error));

    },[])
    return (
        <div className='grid'>
        {
            data.map(item => <a key={item.id} href="/about">
            {
                item.author 
            }</a>
            )
        }
        </div>
    );
}

export default Books;
