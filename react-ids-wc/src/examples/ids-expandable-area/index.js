import React, { useRef, useEffect } from 'react';
import 'ids-enterprise-wc/components/ids-expandable-area/ids-expandable-area';
import 'ids-enterprise-wc/components/ids-toggle-button/ids-toggle-button';


const IdsExpandableArea = () => {
  const toggleRef = useRef();

  useEffect(() => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const element = toggleRef.current;

    // Event handlers to be used in attach and cleanup event listener
    const handleToggleClick = e => e.target.toggle();

    // Attach event listeners
    element.addEventListener('click', handleToggleClick);

    // Clean event listeners on component unmount
    return () => element.removeEventListener('click', handleToggleClick);
  }, []);

  return (
    <>
      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Expandable Area
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true">
        <ids-layout-grid-cell>
          <ids-expandable-area>
            <ids-text slot="header" font-size="16">
              Procurement
            </ids-text>
            <ids-text slot="pane" font-size="14">
              Ubiquitous out-of-the-box, scalable; communities disintermediate
              beta-test, enable utilize markets dynamic infomediaries virtual
              data-driven synergistic aggregate infrastructures,
              "cross-platform, feeds bleeding-edge tagclouds." Platforms extend
              interactive B2C benchmark proactive, embrace e-markets, transition
              generate peer-to-peer.
            </ids-text>
            <ids-hyperlink slot="expander-default">Show More</ids-hyperlink>
            <ids-hyperlink slot="expander-expanded">Show Less</ids-hyperlink>
          </ids-expandable-area>

          <ids-expandable-area>
            <ids-text slot="header" font-size="16">
              Design &amp; Definition
            </ids-text>
            <ids-layout-grid slot="pane" cols="2" no-margins="true">
              <ids-layout-grid-cell>
                <ids-text font-size="12">Company Name</ids-text>
                <ids-text font-size="14">Building Suppliers</ids-text>
                <br />
                <ids-text font-size="12">Company Type</ids-text>
                <ids-text font-size="14">Contractor</ids-text>
                <br />
                <ids-text font-size="12">Company Address</ids-text>
                <ids-text font-size="14">
                  4209 Industrial Avenue
                  <br />
                  Los Angeles, California 90001 USA
                </ids-text>
              </ids-layout-grid-cell>
              <ids-layout-grid-cell>
                <ids-text font-size="12">Phone Number</ids-text>
                <ids-text font-size="14">(999) 810-2604</ids-text>
                <br />
                <ids-text font-size="12">Website</ids-text>
                <ids-text font-size="14">www.buildings.com</ids-text>
                <br />
                <ids-text font-size="12">Estimated Delivery</ids-text>
                <ids-text font-size="14">June 21, 2015 (4 days)</ids-text>
              </ids-layout-grid-cell>
            </ids-layout-grid>
            <ids-hyperlink slot="expander-default">Show More</ids-hyperlink>
            <ids-hyperlink slot="expander-expanded">Show Less</ids-hyperlink>
          </ids-expandable-area>

          <ids-expandable-area>
            <ids-text slot="header" font-size="16">
              Customer Information
            </ids-text>
            <ids-layout-grid slot="header" cols="2" gap="md" no-margins="true">
              <ids-layout-grid-cell>
                <ids-input
                  size="full"
                  type="text"
                  label="Customer Name"
                  name="customer-name"
                  placeholder="Normal text Field"
                ></ids-input>
              </ids-layout-grid-cell>
              <ids-layout-grid-cell>
                <ids-input
                  size="full"
                  type="text"
                  label="Location"
                  name="location"
                  placeholder="Normal text Field"
                ></ids-input>
              </ids-layout-grid-cell>
            </ids-layout-grid>
            <ids-layout-grid slot="pane" cols="2" gap="md" no-margins="true">
              <ids-input
                size="full"
                type="text"
                label="More Customer Details"
                name="more-customer-details"
                placeholder="Normal text Field"
              ></ids-input>
            </ids-layout-grid>
            <ids-hyperlink slot="expander-default">Show More</ids-hyperlink>
            <ids-hyperlink slot="expander-expanded">Show Less</ids-hyperlink>
          </ids-expandable-area>

          <ids-expandable-area type="toggle-btn">
            <ids-toggle-button
              ref={toggleRef}
              slot="header"
              icon-on="caret-up"
              icon-off="caret-down"
              text-off="Employee"
              text-on="Employee"
              icon-align="start"
            >
              <ids-icon slot="icon" icon="caret-up"></ids-icon>
              <span>Default Button</span>
            </ids-toggle-button>
            <ids-text slot="pane" font-size="14">
              Ubiquitous out-of-the-box, scalable; communities disintermediate
              beta-test, enable utilize markets dynamic infomediaries virtual
              data-driven synergistic aggregate infrastructures,
              "cross-platform, feeds bleeding-edge tagclouds." Platforms extend
              interactive B2C benchmark proactive, embrace e-markets, transition
              generate peer-to-peer.
            </ids-text>
          </ids-expandable-area>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsExpandableArea;
