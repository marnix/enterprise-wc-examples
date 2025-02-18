import React from 'react';
import 'ids-enterprise-wc/components/ids-spinbox/ids-spinbox';


const IdsSpinbox = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-text font-size="12" type="h1">
          Spinbox
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="4" gap="md">
        <ids-layout-grid-cell>
          <ids-spinbox value="0" label="Basic Spinbox"></ids-spinbox>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-spinbox
            value="0"
            min="0"
            max="5"
            label="Enter an int from 0 to 5"
            placeholder="0=>5"
          ></ids-spinbox>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-spinbox
            value="0"
            min="-25"
            max="25"
            step="5"
            label="Jumps 5 from -25 to 25"
            placeholder="-25=>25"
          ></ids-spinbox>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-spinbox
            value="0"
            min="-25"
            max="25"
            step="5"
            label="Disabled"
            placeholder="N/A"
            disabled
          ></ids-spinbox>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-spinbox
            value="0"
            min="-25"
            max="25"
            step="5"
            label="w/ Dirty Tracking"
            placeholder="Dirty"
            dirty-tracker="true"
          ></ids-spinbox>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-spinbox
            value="0"
            label="Required"
            placeholder="N/A"
            validate="required"
          ></ids-spinbox>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-spinbox
            value="0"
            min="-25"
            max="25"
            step="5"
            label="Readonly"
            placeholder="N/A"
            readonly
          ></ids-spinbox>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsSpinbox;
