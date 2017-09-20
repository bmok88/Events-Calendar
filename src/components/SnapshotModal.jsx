import React from 'react';

const SnapshotModal = () => {
  return (
    <div
      id="snapshot-modal"
      role="dialog"
      aria-hidden="true"
      aria-labelledby="snapshot-modalLabel"
      className="modal fade"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Name This Snapshot</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                id="modal-input"
                autoFocus
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" aria-label="Add" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapshotModal;
