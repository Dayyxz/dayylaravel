import React, { useState } from 'react';
import Modal from 'react-modal';

const SearchModal = ({ isOpen, onRequestClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border input-ghost input input-info p-2 mb-2 w-full max-w-xs"
          placeholder="Search..."
        />
        <button></button>
      </div>
    </Modal >
  );
};

export default SearchModal;
