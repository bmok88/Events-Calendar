import React from 'react';

const SnapshotModal = ({ hideSnapshotModal }) => {
  return (
    <div className="modal" id="snapshot-modal">
      <div className="modal-content">
        <h2>Name this snapshot</h2>
        <input type="text" />
        <button type="button" onClick={() => hideSnapshotModal()}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </div>
  );
};

export default SnapshotModal;
