import React, { useState } from 'react';
import SearchModal from '@/Components/SearchModal';

const App = () => {
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  const openSearchModal = () => {
    setSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setSearchModalOpen(false);
  };

  return (
    <div>
      {/* ... konten lainnya ... */}
      <button className="btn btn-primary" onClick={openSearchModal}>
        Open Search
      </button>
      <SearchModal isOpen={isSearchModalOpen} onRequestClose={closeSearchModal} />
    </div>
  );
};

export default App;
