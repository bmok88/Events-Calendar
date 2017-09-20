import React from 'react';

const SnapshotModal = () => {
  $(document).ready(function() {
    $('.modal').on('shown.bs.modal', function() {
      $(this)
        .find('input:text:visible')
        .focus();
    });
  });

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
            <div id="snapshot-modaltitle">
              <h6 className="modal-title">Name This Snapshot</h6>
            </div>
            <div id="snapshot-modalbutton">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
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
