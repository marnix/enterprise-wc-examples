<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await Promise.all([
      import('ids-enterprise-wc/components/ids-action-panel/ids-action-panel'),
      import('ids-enterprise-wc/components/ids-button/ids-button'),
      import('ids-enterprise-wc/components/ids-checkbox/ids-checkbox'),
      import('ids-enterprise-wc/components/ids-dropdown/ids-dropdown'),
      import('ids-enterprise-wc/components/ids-list-box/ids-list-box'),
      import('ids-enterprise-wc/components/ids-separator/ids-separator'),
      import('ids-enterprise-wc/components/ids-textarea/ids-textarea'),
      import('ids-enterprise-wc/components/ids-toolbar/ids-toolbar')
    ]);

    const triggerId: any = '#cap-trigger-btn';
    const triggerBtn: any = document.querySelector(triggerId);
    const cap: any = document.querySelector('ids-action-panel');

    // Links the CAP to its trigger button (sets up click/focus events)
    cap.target = triggerBtn;
    cap.triggerType = 'click';

    // Disable the trigger button when showing the CAP.
    cap.addEventListener('beforeshow', () => {
      triggerBtn.disabled = true;
      return true;
    });

    // Close the modal when its inner buttons are clicked
    // (this can be in the standard button area, OR inside a Toolbar)
    cap.onButtonClick = () => {
      cap.hide();
    };

    // After the modal is done hiding, re-enable its trigger button.
    cap.addEventListener('hide', () => {
      triggerBtn.disabled = false;
    });
  });
</script>

<ids-layout-grid auto-fit="true">
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">Action Panel</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-action-panel id="cap-company-info" fullsize="lg">
  <ids-toolbar slot="toolbar">
    <ids-toolbar-section type="title">
      <ids-text font-size="20" type="h2">Company Information</ids-text>
    </ids-toolbar-section>

    <ids-toolbar-section type="buttonset" align="end">
      <ids-button id="btn-save" icon="save" no-padding>
        <ids-text font-weight="bold">Save</ids-text>
      </ids-button>
      <ids-separator vertical="true"></ids-separator>
      <ids-button id="btn-close" icon="close" no-padding>
        <ids-text font-weight="bold">Close</ids-text>
      </ids-button>
    </ids-toolbar-section>
  </ids-toolbar>

  <ids-layout-grid cols="2" gap="md" min-col-width="150px">
    <ids-layout-grid-cell>
      <ids-dropdown id="cap-dd-company-name" label="Company Name" value="">
        <ids-list-box>
          <ids-list-box-option value="" selected>None</ids-list-box-option>
          <ids-list-box-option value="jawbone">Jawbone, Inc.</ids-list-box-option>
          <ids-list-box-option value="infor">Infor</ids-list-box-option>
        </ids-list-box>
      </ids-dropdown>

      <ids-dropdown id="cap-dd-purchase-form" label="Purchase Form" value="3567">
        <ids-list-box>
          <ids-list-box-option value="">None</ids-list-box-option>
          <ids-list-box-option value="3567" selected>3567</ids-list-box-option>
          <ids-list-box-option value="3568">3568</ids-list-box-option>
          <ids-list-box-option value="3569">3569</ids-list-box-option>
        </ids-list-box>
      </ids-dropdown>

      <ids-dropdown id="cap-dd-template" label="Template" value="1">
        <ids-list-box>
          <ids-list-box-option value="">None</ids-list-box-option>
          <ids-list-box-option value="1" selected>Template #1</ids-list-box-option>
          <ids-list-box-option value="2">3568</ids-list-box-option>
        </ids-list-box>
      </ids-dropdown>

      <ids-textarea id="cap-textarea-notes" label="Notes"></ids-textarea>
    </ids-layout-grid-cell>
    <ids-layout-grid-cell>
      <ids-dropdown id="cap-dd-ship-terms" label="Ship Terms" value="">
        <ids-list-box>
          <ids-list-box-option value="" selected>None</ids-list-box-option>
          <ids-list-box-option value="default">Default</ids-list-box-option>
          <ids-list-box-option value="alternate">Alternate</ids-list-box-option>
        </ids-list-box>
      </ids-dropdown>

      <ids-dropdown id="cap-dd-ship-via" label="Ship via" value="">
        <ids-list-box>
          <ids-list-box-option value="" selected>None</ids-list-box-option>
          <ids-list-box-option value="default">USPS</ids-list-box-option>
          <ids-list-box-option value="alternate">Other</ids-list-box-option>
        </ids-list-box>
      </ids-dropdown>

      <ids-dropdown id="cap-dd-issue-method" label="Issue Method" value="email">
        <ids-list-box>
          <ids-list-box-option value="">None</ids-list-box-option>
          <ids-list-box-option value="phone">Telephone</ids-list-box-option>
          <ids-list-box-option value="email" selected>Email</ids-list-box-option>
          <ids-list-box-option value="sms">SMS Message</ids-list-box-option>
        </ids-list-box>
      </ids-dropdown>

      <ids-checkbox id="cap-check-freight" label="Freight" checked></ids-checkbox>
    </ids-layout-grid-cell>
  </ids-layout-grid>
</ids-action-panel>

<ids-layout-grid>
  <ids-layout-grid-column>
    <ids-button type="secondary" id="cap-trigger-btn">Open Action Panel</ids-button>
  </ids-layout-grid-column>
</ids-layout-grid>