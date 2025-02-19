import React from 'react';
import 'ids-enterprise-wc/components/ids-splitter/ids-splitter';
import './styles.css';

const IdsSplitter = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true">
        <div className="demo-splitter">
          <ids-splitter>
            <ids-splitter-pane id="p1"></ids-splitter-pane>
            <ids-splitter-pane id="p2"></ids-splitter-pane>
          </ids-splitter>
        </div>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12">Multiple</ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true">
        <div className="demo-splitter">
          <ids-splitter>
            <ids-splitter-pane></ids-splitter-pane>
            <ids-splitter-pane></ids-splitter-pane>
            <ids-splitter-pane></ids-splitter-pane>
            <ids-splitter-pane></ids-splitter-pane>
          </ids-splitter>
        </div>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12">Vertical</ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true">
        <div className="demo-splitter">
          <ids-splitter axis="y">
            <ids-splitter-pane></ids-splitter-pane>
            <ids-splitter-pane></ids-splitter-pane>
          </ids-splitter>
        </div>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12">Nested</ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto-fit="true">
        <div className="demo-splitter">
          <ids-splitter>
            <ids-splitter-pane></ids-splitter-pane>
            <ids-splitter-pane>
              <ids-splitter axis="y">
                <ids-splitter-pane size="70%"></ids-splitter-pane>
                <ids-splitter-pane></ids-splitter-pane>
              </ids-splitter>
            </ids-splitter-pane>
          </ids-splitter>
        </div>
      </ids-layout-grid>
    </>
  );
};

export default IdsSplitter;
