# WxCC Ad-hoc Recording

This project creates a headless widget that automatically pauses call recording when a call arrives in the agent desktop.  Most call centers record 100% of inbound calls, but sometimes there is a need to provide agents with the ability to start call recording adhoc.


## [Watch the Video: WxCC Ad-hoc Recording](https://app.vidcast.io/share/c41fb68b-35ff-41ed-a002-72db2cb06803)

## Getting Started

The widget is pre-build in the dist folder if you want to run it without changes, or follow the instructions below to build and deploy.


1. Download this project or ```git clone https://github.com/dwfinnegan/adhoc-record```
2. From the project directory run ```npm install```
4. Run ```npm run build``` to build the widget
   - The build process dumps the output in the dist folder
5. Rename the file from dist/adhoc-recording.mjs to adhoc-recording.js 
6. Copy the file adhoc-recording.js to your preferred cloud storage
7. Add the widget to your Desktop Layout headless section (example below)

```
"headless": {
  "id": "headless",
  "widgets": {
    "comp1": {
      "comp": "adhoc-record",
      "script": "https://some-cloud-storage.com/some-folder/adhoc-record.js"
    }
  },
  "layout": {
    "areas": [[ "comp1" ]],
    "size": {
      "cols": [1],
      "rows": [1]
    }
  }
},
```

## User Instructions

See the video above for the agent experience.  Call recording will be paused when the call is answered by the agent.  Agents can then use the native pause/resume button to start/stop call recording as needed.