import '@vaadin/button';
import '@vaadin/checkbox';
import '@vaadin/date-picker';
import '@vaadin/date-time-picker';
import '@vaadin/form-layout';
import '@vaadin/grid';
import '@vaadin/grid/vaadin-grid-column';
import '@vaadin/horizontal-layout';
import '@vaadin/split-layout';
import '@vaadin/text-field';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('master-detail-view')
export class MasterDetailView extends LitElement {
  createRenderRoot() {
    // Do not use a shadow root
    return this;
  }

  render() {
    return html`<vaadin-split-layout>
      <div class="grid-wrapper">
        <vaadin-grid id="grid"></vaadin-grid>
      </div>
      <div class="editor-layout">
        <div class="editor">
          <vaadin-form-layout>
            <vaadin-text-field label="First name" id="firstName"></vaadin-text-field
            ><vaadin-text-field label="Last name" id="lastName"></vaadin-text-field
            ><vaadin-text-field label="Email" id="email"></vaadin-text-field
            ><vaadin-text-field label="Phone" id="phone"></vaadin-text-field
            ><vaadin-date-picker label="Date of birth" id="dateOfBirth"></vaadin-date-picker
            ><vaadin-text-field label="Occupation" id="occupation"></vaadin-text-field
            ><vaadin-text-field label="Role" id="role"></vaadin-text-field
            ><vaadin-checkbox id="important" label="Important"></vaadin-checkbox>
          </vaadin-form-layout>
        </div>
        <vaadin-horizontal-layout class="button-layout">
          <vaadin-button theme="primary" id="save">Save</vaadin-button>
          <vaadin-button theme="tertiary" slot="" id="cancel">Cancel</vaadin-button>
        </vaadin-horizontal-layout>
      </div>
    </vaadin-split-layout>`;
  }
}
