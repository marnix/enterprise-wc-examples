<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async (): Promise<void> => {
    await import('ids-enterprise-wc/components/ids-accordion/ids-accordion');
  });

  const log = (e: MouseEvent) => {
    const target = (e.target as HTMLElement);
    if (target !== null) {
      console.info(`"${target.textContent?.trim()}" was clicked.`, `ID: #${target.id}`);
    }
  }
</script>

<ids-layout-grid auto-fit="true">
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">Accordion</ids-text>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-text font-size="12" type="h1">Accordion (Allow One Pane)</ids-text>
  </ids-layout-grid-cell>
</ids-layout-grid>

<ids-layout-grid cols="2" gap="md">
  <ids-layout-grid-cell>
    <ids-accordion>
      <ids-accordion-panel>
        <ids-accordion-header slot="header">
          <ids-text font-size="16">Warehouse Location</ids-text>
        </ids-accordion-header>
        <ids-text slot="content">
          Remix, optimize, "B2B, iterate?" Best-of-breed efficient beta-test; social cutting-edge: rich magnetic tagclouds
          front-end infomediaries viral authentic incentivize sexy extensible functionalities incentivize. Generate killer
          authentic grow vertical blogospheres, functionalities ecologies harness, "tag solutions synergies exploit data-driven B2C open-source e-markets optimize create, enhance convergence create." Out-of-the-box strategize best-of-breed back-end, deploy design markets metrics. Content web services enhance leading-edge Cluetrain, deliverables dot-com scalable. User-centric morph, back-end, synthesize mesh, frictionless, exploit next-generation tag portals, e-commerce channels; integrate; recontextualize distributed revolutionize innovative eyeballs.
        </ids-text>
      </ids-accordion-panel>
      <ids-accordion-panel>
        <ids-accordion-header slot="header">
          <ids-text font-size="16">Sort By</ids-text>
        </ids-accordion-header>
        <ids-text slot="content">
          Remix, optimize, "B2B, iterate?" Best-of-breed efficient beta-test; social cutting-edge: rich magnetic tagclouds
          front-end infomediaries viral authentic incentivize sexy extensible functionalities incentivize. Generate killer
          authentic grow vertical blogospheres, functionalities ecologies harness, "tag solutions synergies exploit
          data-driven B2C open-source e-markets optimize create, enhance convergence create." Out-of-the-box strategize
          best-of-breed back-end, deploy design markets metrics. Content web services enhance leading-edge Cluetrain,
          deliverables dot-com scalable. User-centric morph, back-end, synthesize mesh, frictionless, exploit next-generation
          tag portals, e-commerce channels; integrate; recontextualize distributed revolutionize innovative eyeballs.
        </ids-text>
      </ids-accordion-panel>
      <ids-accordion-panel>
        <ids-accordion-header slot="header">
          <ids-text font-size="16">Brand Name</ids-text>
        </ids-accordion-header>
        <ids-text slot="content">
          Remix, optimize, "B2B, iterate?" Best-of-breed efficient beta-test; social cutting-edge: rich magnetic tagclouds
          front-end infomediaries viral authentic incentivize sexy extensible functionalities incentivize. Generate killer
          authentic grow vertical blogospheres, functionalities ecologies harness, "tag solutions synergies exploit
          data-driven B2C open-source e-markets optimize create, enhance convergence create." Out-of-the-box strategize
          best-of-breed back-end, deploy design markets metrics. Content web services enhance leading-edge Cluetrain,
          deliverables dot-com scalable. User-centric morph, back-end, synthesize mesh, frictionless, exploit next-generation
          tag portals, e-commerce channels; integrate; recontextualize distributed revolutionize innovative eyeballs.
        </ids-text>
      </ids-accordion-panel>
      <ids-accordion-panel>
        <ids-accordion-header slot="header">
          <ids-text font-size="16">Material</ids-text>
        </ids-accordion-header>
        <ids-text slot="content">
          Remix, optimize, "B2B, iterate?" Best-of-breed efficient beta-test; social cutting-edge: rich magnetic tagclouds
          front-end infomediaries viral authentic incentivize sexy extensible functionalities incentivize. Generate killer
          authentic grow vertical blogospheres, functionalities ecologies harness, "tag solutions synergies exploit
          data-driven B2C open-source e-markets optimize create, enhance convergence create." Out-of-the-box strategize
          best-of-breed back-end, deploy design markets metrics. Content web services enhance leading-edge Cluetrain,
          deliverables dot-com scalable. User-centric morph, back-end, synthesize mesh, frictionless, exploit next-generation
          tag portals, e-commerce channels; integrate; recontextualize distributed revolutionize innovative eyeballs.
        </ids-text>
      </ids-accordion-panel>
    </ids-accordion>
  </ids-layout-grid-cell>
  <ids-layout-grid-cell>
    <ids-accordion allow-one-pane="true">
      <ids-accordion-panel>
        <ids-accordion-header slot="header">
          <ids-text font-size="16">Warehouse Location</ids-text>
        </ids-accordion-header>
        <ids-text slot="content">
          Remix, optimize, "B2B, iterate?" Best-of-breed efficient beta-test; social cutting-edge: rich magnetic tagclouds
          front-end infomediaries viral authentic incentivize sexy extensible functionalities incentivize. Generate killer
          authentic grow vertical blogospheres, functionalities ecologies harness, "tag solutions synergies exploit data-driven B2C open-source e-markets optimize create, enhance convergence create." Out-of-the-box strategize best-of-breed back-end, deploy design markets metrics. Content web services enhance leading-edge Cluetrain, deliverables dot-com scalable. User-centric morph, back-end, synthesize mesh, frictionless, exploit next-generation tag portals, e-commerce channels; integrate; recontextualize distributed revolutionize innovative eyeballs.
        </ids-text>
      </ids-accordion-panel>
      <ids-accordion-panel>
        <ids-accordion-header slot="header">
          <ids-text font-size="16">Sort By</ids-text>
        </ids-accordion-header>
        <ids-text slot="content">
          Remix, optimize, "B2B, iterate?" Best-of-breed efficient beta-test; social cutting-edge: rich magnetic tagclouds
          front-end infomediaries viral authentic incentivize sexy extensible functionalities incentivize. Generate killer
          authentic grow vertical blogospheres, functionalities ecologies harness, "tag solutions synergies exploit
          data-driven B2C open-source e-markets optimize create, enhance convergence create." Out-of-the-box strategize
          best-of-breed back-end, deploy design markets metrics. Content web services enhance leading-edge Cluetrain,
          deliverables dot-com scalable. User-centric morph, back-end, synthesize mesh, frictionless, exploit next-generation
          tag portals, e-commerce channels; integrate; recontextualize distributed revolutionize innovative eyeballs.
        </ids-text>
      </ids-accordion-panel>
      <ids-accordion-panel>
        <ids-accordion-header slot="header">
          <ids-text font-size="16">Brand Name</ids-text>
        </ids-accordion-header>
        <ids-text slot="content">
          Remix, optimize, "B2B, iterate?" Best-of-breed efficient beta-test; social cutting-edge: rich magnetic tagclouds
          front-end infomediaries viral authentic incentivize sexy extensible functionalities incentivize. Generate killer
          authentic grow vertical blogospheres, functionalities ecologies harness, "tag solutions synergies exploit
          data-driven B2C open-source e-markets optimize create, enhance convergence create." Out-of-the-box strategize
          best-of-breed back-end, deploy design markets metrics. Content web services enhance leading-edge Cluetrain,
          deliverables dot-com scalable. User-centric morph, back-end, synthesize mesh, frictionless, exploit next-generation
          tag portals, e-commerce channels; integrate; recontextualize distributed revolutionize innovative eyeballs.
        </ids-text>
      </ids-accordion-panel>
      <ids-accordion-panel>
        <ids-accordion-header slot="header">
          <ids-text font-size="16">Material</ids-text>
        </ids-accordion-header>
        <ids-text slot="content">
          Remix, optimize, "B2B, iterate?" Best-of-breed efficient beta-test; social cutting-edge: rich magnetic tagclouds
          front-end infomediaries viral authentic incentivize sexy extensible functionalities incentivize. Generate killer
          authentic grow vertical blogospheres, functionalities ecologies harness, "tag solutions synergies exploit
          data-driven B2C open-source e-markets optimize create, enhance convergence create." Out-of-the-box strategize
          best-of-breed back-end, deploy design markets metrics. Content web services enhance leading-edge Cluetrain,
          deliverables dot-com scalable. User-centric morph, back-end, synthesize mesh, frictionless, exploit next-generation
          tag portals, e-commerce channels; integrate; recontextualize distributed revolutionize innovative eyeballs.
        </ids-text>
      </ids-accordion-panel>
    </ids-accordion>
  </ids-layout-grid-cell>
</ids-layout-grid>