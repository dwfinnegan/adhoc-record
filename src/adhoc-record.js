import { Desktop } from '@wxcc-desktop/sdk';


const logger = Desktop.logger.createLogger("adhoc-record");


class adhocRecord extends HTMLElement {

  constructor() {
    super();
    this.interactionId = null;
  }


  connectedCallback() {
    this.init();

    Desktop.agentContact.addEventListener("eCallRecordingStarted", (event) => {
      this.interactionId = event.data.interactionId;
      this.pauseRecord();
    });
  }


  disconnectedCallback() {
    Desktop.agentContact.removeAllEventListeners();
  }


  async init() {
    Desktop.config.init();
  }


  async pauseRecord() {
    await Desktop.agentContact.pauseRecording({ interactionId: this.interactionId });
    logger.info("Call recording paused by adhoc-record widget");
  }

}


customElements.define("adhoc-record", adhocRecord);





