import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useStreamData } from './hooks/useStreamData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useStreamData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Stream's</h1>
      <div className="card-grid">
        {data?.map(streamData => 
        <Card 
        price={streamData.price} 
        title={streamData.title} 
        image={streamData.image}
        />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>New</button>
    </div>
  )
}

export default App
